---
title: "How to set up the ARCore Geospatial API on Android XR"
description: "Learn how to enable the ARCore Geospatial API on Android XR, read a VPS pose, and anchor tour content to real-world streets."
pubDate: 2026-10-03T16:30:00
heroImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "gemini"]
noindex: false
---

Street-level directions on a phone still force people to look down. On Android XR, the same map can sit in the world in front of the wearer. Google opened that path at I/O 2026 by shipping a preview of the Geospatial API inside ARCore for Jetpack XR.

The preview brings Google's Visual Positioning System (VPS) to Android XR. In supported areas it can anchor digital content to the physical world with sub-meter accuracy and a precise heading. The Android team used it, plus Firebase AI Logic and Google Maps grounding, to build an XR Geospatial Tour demo for wired glasses such as the upcoming XREAL Project Aura.

This guide walks through the official setup path: Cloud access, permissions, an XR session, a geospatial pose, and a place to hang narration. It is a developer preview, so APIs and hardware details can still change.

## What the Geospatial API actually gives you

GPS is enough to drop a pin on a map. It is a poor fit for a 3D waypoint that has to line up with a doorway or a statue. VPS matches the camera view and device sensors against a localization model built from Street View imagery, then returns a `GeospatialPose` with latitude, longitude, and heading.

Android Developers documents three reasons this matters on XR:

- Waypoints can sit on the street instead of floating in a compass overlay.
- Orientation is precise enough for content triggers tied to where the wearer is facing.
- You can combine that pose with Gemini so a voice guide talks about the landmark in front of the user, not a generic neighborhood blurb.

Coverage follows Street View. If VPS cannot localize, fall back to a coarser GPS pose and tell the user the guide is less precise.

![City street seen from above, the kind of area VPS can localize](https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80)

## Step 1: Enable the ARCore API

Before VPS calls succeed, enable the ARCore API on a Google Cloud project. Use a new project or an existing one that already owns your Maps or Firebase keys. Billing must be active on that project, the same requirement the classic ARCore Geospatial API has always had.

Keep the API key out of source control. Restrict it to your app package and the ARCore API. The XR Geospatial Tour sample also talks to Gemini through Firebase AI Logic, so a separate Firebase project is the cleaner place for model calls. If you already route model traffic through hybrid inference, the same project layout used in our [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/) still applies.

## Step 2: Request location and network access

Official ARCore for Jetpack XR guidance requires these runtime permissions for geospatial work:

- `ACCESS_INTERNET`, so the app can reach the Geospatial cloud service.
- `ACCESS_COARSE_LOCATION`, so the device can supply an approximate position that VPS then refines.

Request them at runtime, not only in the manifest. On glasses, explain why the tour needs location before the first outdoor session. A denied location permission leaves you with no pose to convert.

## Step 3: Create an XR session

Perception features in ARCore for Jetpack XR hang off a `Session` from the Jetpack XR Runtime. Creating that session is expensive, so the docs say to do it off the main path, inside a coroutine:

```kotlin
lifecycleScope.launch {
    when (val result = Session.create(context)) {
        is SessionCreateSuccess -> {
            val xrSession = result.session
            // configure geospatial, then subscribe to device pose
        }
        else -> {
            // surface the failure; do not assume VPS is available
        }
    }
}
```

The `Context` can be an `Activity` on an immersive device or a projected context on glasses. When that activity is destroyed, AR content tied to the session is destroyed with it. Recreate the session on the next launch instead of caching it across process death.

If the app draws spatial UI with Compose for XR, read the session from `LocalSession` rather than constructing a second one.

## Step 4: Turn geospatial on in the session config

Several ARCore features are off until you call `Session.configure()`. Geospatial is one of them. After `SessionCreateSuccess`, pass a `Config` that enables the geospatial mode your build of the SDK exposes, then confirm the result before you draw anchors.

Do this once per session, before the first pose query. Reconfiguring mid-tour drops existing anchors. If configure fails, the usual causes are a missing ARCore API, a device that is not an XR target, or a preview SDK that is older than the sample you copied.

## Step 5: Read a GeospatialPose from the device pose

The tour sample maps the current device pose into a geospatial pose. Android's published snippet looks like this:

```kotlin
val result = geospatial.createGeospatialPoseFromPose(
    arDevice.state.value.devicePose
)
if (result is CreateGeospatialPoseFromPoseSuccess) {
    val pose = result.pose
    Log.d("VPS", "Accurate Location: ${pose.latitude}, ${pose.longitude}")
}
```

Store heading with the lat/long. A waypoint that knows where the user is, but not which way they face, will point the arrow at their shoulder. Update the pose on a steady cadence, not every frame, and ignore spikes when horizontal accuracy is poor.

![Person holding a phone while navigating a city on foot](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Step 6: Place waypoints, then add a voice layer

With a stable pose you can convert a landmark's latitude and longitude into a local anchor and parent a 3D marker to it. Keep markers small. On glasses, a full-size model in the middle of the sidewalk is a hazard, not a feature.

The tour demo adds speech with Firebase AI Logic and Maps grounding so the line refers to the place the user is actually facing. The published audio path uses `gemini-2.5-flash-tts` and `ResponseModality.AUDIO`. Ask for a short clip, cache it for that stop, and do not regenerate while the user is still looking at the same plaque.

Google labels the tour video and app as a demo. Sequences are shortened, and any hardware shown may still be in development.

## Watch the SDK preview that added VPS

Android Developers walked through Developer Preview 3 of the Android XR SDK, including geospatial localization for directions and location triggers, in this update:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J0XcS1fv194"
    title="The Developer Preview 3 of the Android XR SDK is now here!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Preview 4 has shipped since that video. Check the current Jetpack XR release notes before you pin a dependency.

## Practical limits

- VPS needs a recognizable street scene. Indoor malls, new construction, and heavy night lighting often fail to localize.
- Sub-meter claims apply in supported areas, not everywhere GPS works.
- Preview APIs can rename config flags between SDK drops. Treat the sample as a starting point, not a frozen contract.
- Developers who want hardware can apply to the Android XR Developer Catalyst Program for an XREAL Project Aura devkit or a display-glasses devkit. Access is not instant.

## Closing

The Geospatial API preview is the shortest path from an Android XR session to a pose that matches the street. Enable the ARCore API, request location, create and configure a session, then convert the device pose into a `GeospatialPose` before you parent any marker. Add Gemini only after that pose is stable. A voice guide that talks about the wrong corner is worse than silence.

## Sources

- Android Developers Blog, 17 June 2026: Building a Mixed-Reality Tour Guide with Android XR, the Geospatial API, and Gemini. https://developer.android.com/blog/posts/building-a-mixed-reality-tour-guide-with-android-xr-the-geospatial-api-and-gemini
- ARCore for Jetpack XR perception overview, updated 22 September 2026. https://developer.android.com/develop/xr/jetpack-xr-sdk/arcore
- Work with geospatial poses using ARCore for Jetpack XR. https://developer.android.com/develop/xr/jetpack-xr-sdk/arcore/geospatial
- Android Developers, Developer Preview 3 of the Android XR SDK. https://www.youtube.com/watch?v=J0XcS1fv194
