---
title: "Build for XREAL AURA with Stable Android XR Tools"
description: "Start building spatial apps for XREAL AURA using stable Jetpack XR SDKs and Android Studio Rabbit 2 XR emulators."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

XREAL AURA is the first wired XR glasses powered by Android XR. Announced at Android Dev Summit on 28 October 2026, the glasses weigh under 95 grams and connect to a portable compute puck. Existing Android apps run out of the box. Developers can now add spatial features using production-ready tools.

Google graduated the core Jetpack XR libraries to stable and made Android XR emulators stable in Android Studio Rabbit 2. You can test glasses form factors on your laptop without owning hardware.

This guide shows how to set up the environment, add the stable libraries, and run an XR emulator for early validation.

## What XREAL AURA brings to Android XR

AURA uses transparent lenses so you see the real world while digital content appears in your field of view. It offers a 70-degree field of view, electrochromic dimming, and support for multiple virtual screens. Gemini provides contextual help across apps.

The shared Android foundation means phone and tablet apps work immediately. Spatial APIs let you place 3D models, anchor content to the real world, and build optical see-through interfaces.

Orders opened in the US, Canada, and Korea on launch day, with Japan following on 2 November. Shipments begin mid-November. Launch pricing starts at USD 1,099.

![Laptop displaying code with glasses on desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Update Android Studio and launch XR emulators

Download the latest stable Android Studio Rabbit 2 (2026.2.2). Open Device Manager and create virtual devices for XR Glasses, Display Glasses, or Audio Glasses. These now launch as embedded emulators inside the Running Devices tool window.

The XR glasses emulator supports electrochromatic dimming tests and spatial input. You can load your own 360-degree photos or a live camera feed as the environment. Hardware LED indicators show microphone and camera states. Pairing a virtual phone with virtual glasses is faster than in earlier previews.

Start the emulator from Device Manager. Interact with mouse and keyboard. Use Layout Inspector to examine spatial UI elements. No physical glasses are required for initial layout and interaction checks.

## Add stable Jetpack XR dependencies

Set `minSdk` to 24 and `compileSdk` to 34 or higher. Add the stable core libraries in your module `build.gradle.kts`:

```kotlin
dependencies {
    implementation("androidx.xr.scenecore:scenecore:1.0.0")
    implementation("androidx.xr.arcore:arcore:1.0.0")
    implementation("androidx.xr.runtime:runtime:1.0.0")
    implementation("androidx.xr.compose:compose:1.0.0-beta02")
}
```

SceneCore manages the scene graph so you can place panels and 3D models. ARCore for Jetpack XR handles perception, persistent anchors, hit testing, and plane detection. XR Runtime manages sessions and device lifecycle. Compose for XR is still in beta but usable for spatial layouts.

Sync the project. Existing phone UI continues to work. Spatial components such as SpatialPanel and SpatialRow let you place 2D Compose content in 3D space.

## Create a simple spatial panel

In an XR activity, use the session to create entities. A minimal example places a spatial panel:

```kotlin
val panel = PanelEntity.create(
    session,
    view = AndroidView(context) { context ->
        // Your existing Compose or View content
    },
    dimensions = Dimensions(1f, 0.5f),
    name = "main_panel"
)
panel.setPose(Pose(Vector3(0f, 0f, -1.5f)))
```

Run on the XR glasses emulator. The panel appears in front of the virtual user. Adjust pose and dimensions to match the 70-degree field of view. Test dimming levels to confirm text remains readable against different backgrounds.

Geospatial APIs in ARCore for Jetpack XR are also stable. They let you anchor content to real-world coordinates with visual positioning. Use them for location-aware experiences on wired glasses.

![Developer workspace with multiple screens and headphones](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## Test and iterate without hardware

The stable emulators cover XR, audio, and display glasses. Switch device types in Device Manager to verify adaptive layouts. Customize the environment with your own panoramic images to simulate outdoor or office lighting.

For teams already using coding agents, Android Studio Rabbit 2 supports Bring Your Own Agent. Connect Claude Agent, Codex, or Antigravity and ask it to generate spatial UI components or migrate existing layouts. See the guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/) for setup steps.

Official Android skills include XR guidance. Invoke them with `@` in the agent chat to keep generated code aligned with current platform recommendations.

## Practical tips for early builds

- Start with existing 2D UI spatialized into panels. Full 3D experiences can follow once the basic session works.
- Check optical see-through readability early. High-contrast text and limited color palettes work better on transparent displays.
- Use the Engine Hub if you already build in Unity, Godot, or Unreal. The hub is stable and simplifies OpenXR configuration.
- File issues through Android Studio if emulator behavior differs from documentation. The release notes list known limitations.
- Order developer units through XREAL if you need physical validation after emulator tests.

## Conclusion

Stable Jetpack XR libraries and Android Studio Rabbit 2 emulators remove the hardware barrier for Android XR development. XREAL AURA gives existing apps an immediate audience while spatial APIs enable richer experiences.

Update Android Studio, add the 1.0.0 dependencies, and launch an XR glasses emulator today. Validate layouts and interactions on your laptop, then move to physical glasses when available. The same project works across headsets and future glasses because the core libraries share a common runtime.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mwHjpPyY_24"
    title="Android Dev Summit: Introducing XREAL AURA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Build for an expanding lineup of Android XR devices with production-ready tools](https://developer.android.com/blog/posts/build-android-xr-devices-tools)
- [XREAL AURA launches as first Android XR glasses](https://blog.google/products-and-platforms/platforms/android/xreal-aura/)
- [Develop with the Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk)
- [Android Studio Rabbit 2 release notes](https://developer.android.com/studio/releases)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E)
