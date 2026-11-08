---
title: "How to Build Android XR Apps with Stable Jetpack Libraries"
description: "Step-by-step guide to using stable Jetpack SceneCore, ARCore for XR, and XR Runtime for Android XR apps on glasses and headsets."
pubDate: 2026-11-08T12:00:00
heroImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Android XR devices like XREAL AURA and Galaxy XR now have production-ready foundations. At Android Developer Summit 2026, Google graduated core Jetpack XR libraries to stable. Developers can build spatial experiences with long-term API stability.

Existing Android apps run as 2D panels on XR headsets and wired glasses out of the box. Differentiated experiences use spatial panels, 3D models, and environment anchoring. This guide covers setup and first steps with the stable libraries.

## What the stable libraries include

The stable release covers three libraries:

- **Jetpack SceneCore** (1.0.0): Builds and manipulates the scene graph. Place 2D panels, 3D models (glTF), spatial audio, and custom meshes. Anchor content to the real world.
- **ARCore for Jetpack XR** (1.0.0): Handles environment perception. Includes depth estimation, persistent anchors, hit testing, plane identification, and Geospatial APIs for location-aware experiences.
- **XR Runtime** (1.0.0): Manages device lifecycles, sessions, and system configurations.

Jetpack Compose for XR remains in beta for spatial UI. Android XR emulators in Android Studio are also stable. The Android XR Engine Hub supports Unity, Godot, and Unreal Engine with stable workflows.

These changes let you ship to users on XREAL AURA and future devices without expecting breaking changes on every release.<grok type="render_inline_citation" citation_id="90" />

![Developer working on spatial app code](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Update to the latest stable Android Studio. Install the Android XR system image and emulator profiles via SDK Manager. Target Android 15 (API 35) or higher for full XR support.

For hardware testing, XREAL AURA requires the glasses connected to its Compute Puck, Wi-Fi, and a Google account. Enable developer options and USB debugging on the device for deployment.

Add the Google Maven repository to your project if it is not already present.

## Add the dependencies

In your module-level `build.gradle.kts` (or Groovy equivalent), declare the stable artifacts:

```kotlin
dependencies {
    implementation("androidx.xr.scenecore:scenecore:1.0.0")
    implementation("androidx.xr.arcore:arcore:1.0.0")
    implementation("androidx.xr.runtime:runtime:1.0.0")
    // Optional: Compose for XR when it reaches stable
    // implementation("androidx.xr.compose:compose:1.0.0-beta02")
}
```

Sync the project. SceneCore provides entity-component APIs for 3D content. ARCore for XR supplies perception. XR Runtime handles session creation.

## Create a basic XR session

Obtain an XR session through the runtime. Check device capabilities before requesting full space or mixed reality modes.

```kotlin
val session = XrSession.create(context) // Simplified; follow official docs for exact factory
session.requestFullSpaceMode() // Or mixed for passthrough
```

Use Subspace composables or SceneCore entities to place content. For a simple 3D model:

```kotlin
Subspace {
    SceneCoreEntity(
        factory = {
            GltfEntity.create(session, "models/my_model.glb")
        }
    )
}
```

Animate subnodes, override PBR materials, and generate procedural meshes at runtime. Spatial audio sources attach to entities for directional sound.

Test first in the Android XR emulator for glasses form factors. Emulators now match Field of View, resolution, and DPI of devices like XREAL AURA.<grok type="render_inline_citation" citation_id="90" />

![XR glasses and immersive setup](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Anchor content to the real world

ARCore for Jetpack XR Geospatial APIs are stable. Combine visual positioning with local tracking to place digital content at real-world coordinates.

Create persistent anchors that survive sessions. Use hit testing and plane detection for interactive placement. For wired glasses like XREAL AURA, design glanceable optical see-through UIs with Jetpack Compose Glimmer when available.

Watch the official session on building world-anchored experiences for practical examples.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mssk4zPs0zU"
    title="Moving beyond 2D with custom 3D geometry in the Jetpack XR SDK"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production apps

Start with existing 2D apps. They appear as panels automatically. Add spatial elements incrementally.

Profile with the Android XR Engine Hub tools for thermal and frame budgets on CPU/GPU. Keep first sessions under 30 minutes on new hardware to avoid discomfort.

For multi-user experiences, explore Spatial Entities and Cloud Anchors in Unity via the Engine Hub. Native Kotlin apps can use SceneCore for custom geometry.

If you are testing emulators, see our guide on [Android XR emulators in Studio Rabbit 2](/blog/android-xr-emulators-studio-rabbit-2-guide/).

## Conclusion

Stable Jetpack XR libraries remove the preview barrier for Android XR development. SceneCore, ARCore for XR, and XR Runtime give production APIs for 3D content, perception, and session management. Update Android Studio, add the dependencies, and prototype spatial features today. Devices like XREAL AURA are already shipping, so the ecosystem is ready for differentiated apps.

Sources:
- Android Developers Blog: Build for an expanding lineup of Android XR devices (November 6, 2026)
- Jetpack SceneCore release notes (1.0.0, October 21, 2026)
- Android XR Developer Site and session playlist from Android Dev Summit 2026
