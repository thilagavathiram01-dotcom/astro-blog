---
title: "How to Build Spatial Apps for Android XR with Stable Jetpack"
description: "Step-by-step guide to using stable Jetpack SceneCore, ARCore for XR, and XR Runtime for Android XR apps on XREAL AURA and Galaxy XR."
pubDate: 2026-11-08T16:00:00
heroImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials"]
noindex: false
---

Android XR devices are shipping. XREAL AURA, the first wired XR glasses powered by Android XR, launched at the Android Developer Summit. Samsung Galaxy XR is already in users’ hands. Your existing 2D Android apps appear as panels out of the box. To go further—spatial panels, 3D models, real-world anchors—you need the production-ready Jetpack XR libraries that graduated to stable at the summit.

This guide shows how to add those libraries, run an XR emulator, create a spatial panel, place a glTF model, and anchor content. It follows the official Android Developers documentation and the November 2026 Android Dev Summit announcements.

## What the stable release gives you

The core Jetpack XR SDK libraries reached stable. That includes:

- **Jetpack SceneCore** for the scene graph and 3D entities.
- **ARCore for Jetpack XR** for environment perception and geospatial anchoring.
- **XR Runtime** for session management.

Android XR emulators in Android Studio are also stable. You can iterate on glasses and headset form factors without physical hardware. The Android XR Engine Hub for Unity, Godot, and Unreal Engine is stable as well.

Existing apps work immediately on XREAL AURA. Spatial features require the new libraries and a check for spatial capabilities.

![Person holding a VR headset in a modern office](https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80)

## Add the stable dependencies

Open your module-level `build.gradle.kts` (or `build.gradle`) and add the Google Maven repository if it is not already present. Then declare the stable artifacts.

```kotlin
dependencies {
    implementation("androidx.xr.scenecore:scenecore:1.0.0")
    implementation("androidx.xr.arcore:arcore:1.0.0")
    implementation("androidx.xr.runtime:runtime:1.0.0")
    // Optional: Compose for XR
    implementation("androidx.xr.compose:compose:1.0.0")
}
```

Sync the project. These versions match the stable graduation announced for production use. Check the Jetpack release notes for any later patch versions.

Set `minSdk` to 34 or higher for full XR support. Target the latest Android XR system image in your emulator.

## Set up an XR emulator

1. Install the latest stable Android Studio (Rabbit or later).
2. Open Device Manager and create a new virtual device.
3. Select an Android XR system image (glasses or headset).
4. Launch the emulator. It supports passthrough and spatial panels out of the box.

You can also use Android CLI device streaming if you prefer remote hardware. The stable emulators let you validate layouts and interactions before you push to a physical XREAL AURA or Galaxy XR.

## Create your first spatial panel

Most apps start by elevating a 2D panel into 3D space. Use Jetpack Compose for XR and a `SpatialPanel`.

First confirm spatial capabilities are available:

```kotlin
if (XrCapabilities.isSpatialUiAvailable(context)) {
    // Proceed with spatial UI
}
```

Then place a panel:

```kotlin
@Composable
fun SpatialApp() {
    Subspace {
        SpatialPanel(
            modifier = SubspaceModifier.offset(z = 1.m),
            shape = SpatialRoundedCornerShape(28.dp)
        ) {
            Text("Hello from Android XR")
        }
    }
}
```

The panel floats in front of the user. You can add orbiters, resize it, or move it with subspace modifiers. This works on both headsets and wired glasses.

![Developer workspace with multiple screens and code](https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80)

## Add a 3D model with SceneCore

SceneCore lets you load glTF 2.0 models and place them in the scene graph. Put a `.glb` or `.gltf` file in `src/main/assets`.

```kotlin
Subspace {
    SpatialGltfModel(
        model = "models/robot.glb",
        modifier = SubspaceModifier.offset(x = 0.5.m, y = 0.m, z = 1.m)
    )
}
```

You can animate nodes, change materials at runtime, or generate procedural meshes. The official session “Moving beyond 2D with custom 3D geometry in the Jetpack XR SDK” demonstrates these techniques.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mssk4zPs0zU"
    title="Moving beyond 2D with custom 3D geometry in the Jetpack XR SDK"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Anchor content with Geospatial APIs

ARCore for Jetpack XR Geospatial APIs are stable. They let you pin digital content to real-world coordinates with visual positioning and local tracking. This is especially useful on optical see-through glasses such as XREAL AURA.

Obtain a session, then create an anchor:

```kotlin
val geospatial = ArCoreGeospatial.create(session)
val anchor = geospatial.createAnchor(
    latitude = 37.4220,
    longitude = -122.0841,
    altitude = 0.0,
    heading = 0.0
)
```

Attach a panel or 3D entity to the anchor. Content stays locked to the physical location as the user moves. Combine this with Jetpack Compose Glimmer for glanceable UIs on glasses.

## Tips for production

- Always check `XrCapabilities` before enabling spatial features. Fall back to a normal 2D layout.
- Keep APK size small. Prefer on-device models and the LiteRT runtime when possible.
- Test on both headset and glasses form factors. Emulators cover both.
- Follow Material Design for XR guidance for panel sizes, elevation, and orbiter placement.
- For multi-user experiences, look at Spatial Entities and Cloud Anchors in the Unity path via the Engine Hub.

If you are already using Android Studio agents or the Connected Apps Platform, pair this spatial work with the intelligent-app patterns covered in our guide to [integrating apps with the Android intelligence system](/blog/android-intelligence-system-intelligent-apps-guide/).

## Conclusion

The stable Jetpack XR libraries remove the biggest barrier to shipping spatial Android apps. Add SceneCore, ARCore for XR, and XR Runtime, run the emulator, elevate a panel, drop in a glTF model, and optionally pin content to the real world. Existing 2D apps already reach XREAL AURA users on day one. Spatial features let you go further.

Update Android Studio, sync the stable dependencies, and start building. The Android XR developer site has the full API reference and samples.

## Sources

- Android Developers Blog: Build for an expanding lineup of Android XR devices with production-ready tools from Android Developer Summit (6 November 2026)
- Jetpack SceneCore, ARCore for Jetpack XR, and XR Runtime release notes
- Android XR developer documentation and codelabs
- YouTube: Moving beyond 2D with custom 3D geometry in the Jetpack XR SDK
