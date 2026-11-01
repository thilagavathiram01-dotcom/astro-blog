---
title: "How to Build Apps for XREAL AURA with Android XR SDK"
description: "Step-by-step guide to developing your first Android XR app for XREAL AURA glasses using Jetpack XR SDK and Android Studio."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

XREAL AURA is the first wired XR glasses powered by Android XR. Announced at Android Dev Summit on October 28, 2026, it lets you run Android apps in spatial windows, use Gemini, and build immersive experiences with the same tools you already know.<grok type="render_inline_citation" citation_id="342" />

Developers can target AURA with the Jetpack XR SDK. Core libraries including SceneCore, ARCore for Jetpack XR, and XR Runtime reached stable 1.0 on October 21, 2026. Existing 2D apps work out of the box. You can add spatial panels, 3D models, and environments to differentiate them.<grok type="render_inline_citation" citation_id="332" />

This guide shows how to set up your environment, create a project, add dependencies, and deploy to the device or emulator.

## Prerequisites

You need:

- XREAL AURA glasses and Compute Puck (or use the Android XR emulator)
- Android Studio (latest stable, Rabbit 2 or newer)
- USB-C cable that supports data
- Google account

Install Android SDK Platform 35 or later and the Android Emulator. XR emulator profiles are available in Device Manager for testing without hardware.<grok type="render_inline_citation" citation_id="340" />

![Android developer workspace with multiple screens](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Set Up Android Studio and the Jetpack XR SDK

Open Android Studio. Go to Tools > SDK Manager. Under SDK Platforms, install Android 15 (API 35) or higher. Under SDK Tools, ensure Android SDK Build-Tools and Android Emulator are present.

Create a new project. Select Empty Activity or an XR template if available. Set the minimum SDK to API 35 and choose Kotlin.

In your module-level `build.gradle.kts`, add the Jetpack XR dependencies for immersive experiences on wired XR glasses:

```kotlin
dependencies {
    implementation("androidx.xr.runtime:runtime:1.1.0-alpha02")
    implementation("androidx.xr.scenecore:scenecore:1.1.0-alpha01")
    implementation("androidx.xr.compose:compose:1.0.0-beta02")
    implementation("androidx.xr.compose.material3:material3:1.0.0-alpha17")
    implementation("androidx.xr.arcore:arcore:1.1.0-alpha01")
}
```

Set `minSdk = 35` and `targetSdk = 35` in the `android` block. Sync the project. These versions reflect the libraries available as of late October 2026. Check the official Android Developers site for the latest stable tags before shipping.<grok type="render_inline_citation" citation_id="352" />

For production apps, prefer the stable 1.0.0 releases of SceneCore, ARCore for Jetpack XR, and XR Runtime released on October 21.

## Enable Developer Mode on XREAL AURA

On the glasses:

1. Open the launcher and go to Settings.
2. Navigate to About device.
3. Tap Build number seven times until developer mode is enabled.
4. Return to Settings and open Developer options.
5. Enable USB debugging.

Keep the glasses connected to the Glasses Port on the Compute Puck. Connect your computer to the Charging Port with a data-capable USB-C cable. Both ports support ADB. Using the Charging Port lets you debug while viewing the display through the glasses.<grok type="render_inline_citation" citation_id="340" />

If the device shows as unauthorized, accept the USB debugging prompt on the glasses.

## Create and Deploy a Basic Spatial App

Start with a simple activity. Use Jetpack Compose for XR to add spatial panels. Existing Compose or View-based apps run as 2D windows. Spatial components let you place content in the environment.

After building, select your connected AURA device or an XR Glasses emulator from the device dropdown in Android Studio. Click Run. The app installs and launches. Put on the glasses to see it.

You can also use Android Device Streaming or the emulator profiles added in Android Studio Rabbit 2 for remote testing.<grok type="render_inline_citation" citation_id="296" />

![Close-up of modern computer hardware](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Tips for AURA Development

- Existing Android apps work without changes. Adaptive large-screen layouts already perform well on wired XR glasses.
- Use Jetpack Compose Glimmer for high-contrast, glanceable UIs optimized for optical see-through displays.
- Test hand tracking and spatial interactions early. AURA relies on hand tracking; controllers are not required for basic navigation.
- Monitor performance with the Android XR Engine Hub (now stable) if you also target Unity, Godot, or Unreal.
- Apply to the Android XR Developer Catalyst Program for early device access and support.

If you are already spatializing apps, see our guide on building spatial apps with the Jetpack XR SDK SceneCore: [Build Spatial Apps with Jetpack XR SDK SceneCore](/blog/build-spatial-apps-jetpack-xr-sdk-scenecore/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4NGBZnfnD6o"
    title="Build world anchored experiences for wired XR glasses"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

XREAL AURA brings Android XR to a lightweight, cable-connected form factor. With stable Jetpack XR libraries and Android Studio support, you can ship spatial experiences using tools you already use for mobile and large-screen apps. Start with the emulator, add spatial components, and deploy to hardware when available.

Shipments of AURA begin in mid-November 2026. The platform is ready for developers today.

## Sources

- [XREAL AURA launches as first Android XR glasses](https://blog.google/products-and-platforms/platforms/android/xreal-aura/) — Google Blog, Oct 28, 2026
- [Getting Started for Developers](https://tutorials.xreal.com/docs/aura/developers/getting-started) — XREAL Tutorials
- [Develop with the Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk) — Android Developers
- [Set up the Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk/set-up-sdk) — Android Developers
- Android Developers Blog posts on Android Dev Summit 2026 and Jetpack XR stable releases
