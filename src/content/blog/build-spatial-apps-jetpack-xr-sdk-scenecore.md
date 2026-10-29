---
title: "Build Spatial Apps with Stable Jetpack XR SDK"
description: "Step-by-step guide to start building spatial Android XR apps using the stable Jetpack XR SDK and SceneCore after Dev Summit 2026."
pubDate: 2026-10-29T20:00:00
heroImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "google"]
noindex: false
---

Android XR devices are shipping. XREAL AURA launched as the first wired XR glasses powered by Android XR, and core Jetpack XR SDK libraries reached stable at Android Dev Summit 2026. Developers can now build production spatial experiences with long-term API stability.

This guide shows how to set up your environment, add SceneCore, and create a basic spatial scene that places panels and 3D content. You can test everything in the stable Android XR emulator without owning hardware.

![Person wearing a VR headset in a modern workspace](https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80)

## Why SceneCore matters now

Jetpack SceneCore lets you build and manipulate the Android XR scene graph. You place entities such as 2D panels and 3D models relative to each other and the environment. The library supports spatial environments, spatial audio, and components that make entities movable or anchored to the real world.

Version 1.0.0 went stable on October 21, 2026. It provides production-ready APIs with backward compatibility. Pair it with ARCore for Jetpack XR and XR Runtime, also stable, for perception features like hit testing and anchors.

Existing Android apps can spatialise their layouts. New immersive apps can use SceneCore for full-space experiences on headsets and wired glasses.

## Set up Android Studio for XR

Use the latest Android Studio Canary. It includes the XR emulator tools and system images.

1. Download the Canary build from the official Android Studio channel and install it side-by-side with your stable version.
2. Open SDK Manager. Install the latest Android SDK Build-Tools, Emulator, Platform-Tools, and Layout Inspector for recent API levels.
3. Create an XR virtual device: Tools > Device Manager > Add a new device > Create Virtual Device. Select the XR form factor, choose XR Glasses or XR Headset, and pick a compatible system image (Preview API for glasses).
4. Finish the setup and start the emulator. Your app can run on it just like any other AVD.

The emulator supports both Home Space (windowed, like mobile) and Full Space (immersive). Agents and CLI tools can also drive testing.

## Add the dependencies

In your module's build.gradle.kts, add the stable SceneCore library. Google Maven is already configured in most Android projects.

```kotlin
dependencies {
    implementation("androidx.xr.scenecore:scenecore:1.0.0")
    // Optional: testing
    testImplementation("androidx.xr.scenecore:scenecore-testing:1.0.0")
}
```

Sync the project. SceneCore works with Kotlin and Jetpack Compose. You can also use it with Views-based apps.

For spatial UI, add Jetpack Compose for XR if you want SpatialPanel, SpatialRow, and related composables.

## Create a basic spatial scene

Obtain a Session to access the scene graph. The ActivitySpace is the root. New entities attach to it by default.

Here is a minimal example that creates a panel entity:

```kotlin
import androidx.xr.scenecore.Session
import androidx.xr.scenecore.PanelEntity
import androidx.xr.scenecore.Entity

suspend fun setupScene(session: Session) {
    val activitySpace = session.activitySpace
    // Create a panel for 2D content
    val panel = PanelEntity.create(session) {
        // Configure size, content, etc.
    }
    panel.setParent(activitySpace)
    // Position it in space
    panel.setPose(/* Pose with position and orientation */)
}
```

Load 3D models with GltfModelEntity. Attach components such as MovableComponent to let users grab and reposition content. Check capabilities before using spatial audio or advanced features.

For existing apps, request Full Space mode to take over the entire XR environment, or stay in Home Space for multi-window layouts.

![Pink and white VR headset on a desk](https://images.unsplash.com/photo-Zf0mPf4lG-U?auto=format&fit=crop&w=800&q=80)

## Test and iterate

Run the app on the XR Glasses emulator. Switch between Home Space and Full Space from the emulator controls. Capture screenshots and logs as usual.

Use the Android CLI for headless workflows. Agents can render Compose previews and stream devices, which extends to XR testing.

Watch the Android Dev Summit 2026 keynote for the XR segment and demos of XREAL AURA:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production

- Start with the official samples and quality guidelines for spatialising apps.
- Handle permission and capability checks for perception features from ARCore for Jetpack XR.
- Test on both glasses and headset form factors. Wired glasses like AURA project from a companion device.
- Keep scenes performant. SceneCore entities and spatial audio have runtime costs.
- File feedback through the Android XR support channels as the ecosystem grows.

Internal reference: if you already work with geospatial anchors, see the [ARCore Geospatial API guide](/blog/arcore-geospatial-api-android-xr/).

## Conclusion

The stable Jetpack XR SDK removes the main barrier to shipping spatial Android experiences. With SceneCore 1.0, the XR emulator, and devices like XREAL AURA available, you can prototype and validate spatial UIs and 3D content today. Start with a simple panel entity, expand to models and audio, and test thoroughly in the emulator before targeting hardware.

Sources:
- Android Developers Blog: Agentic and Flexible announcements, October 28, 2026
- Jetpack SceneCore release notes (1.0.0 stable)
- Develop with the Jetpack XR SDK documentation
- XREAL AURA launch blog post
