---
title: "Get Started with Android XR Jetpack SDK: Step-by-Step Guide 2026"
description: "Step-by-step setup for Jetpack XR SDK, Android Studio Canary, and XR emulator to build and test spatial apps for headsets and glasses."
pubDate: 2026-11-08T19:30:00
heroImage: "https://images.unsplash.com/photo-1767958465025-75c050ab10c4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Android XR devices are shipping. XREAL AURA is the first wired XR glasses powered by Android XR, and core Jetpack XR libraries reached stable at Android Dev Summit 2026. You can now build production spatial experiences with long-term API stability and test them in the emulator without hardware.

This guide walks through environment setup: Android Studio Canary, SDK tools, XR system images, Jetpack dependencies, and your first run on the XR emulator. It follows the official Android Developers documentation for the Jetpack XR SDK.

## Why set up the Jetpack XR SDK now

The Jetpack XR SDK includes SceneCore for the scene graph and 3D content, ARCore for Jetpack XR for perception, XR Runtime for session management, and Compose for XR for spatial UI. Stable releases remove the preview barrier. Emulators in Android Studio let you validate layouts for glasses and headsets on a standard laptop.

You need minSdk 24 and compileSdk 34 or higher. Existing Android knowledge transfers directly. Pair this with wireless debugging techniques from our [ADB Wi-Fi guide](/blog/adb-wifi-2-wireless-debugging/) when you later test on physical devices.

![Person wearing a VR headset](https://images.unsplash.com/photo-1767958465025-75c050ab10c4?auto=format&fit=crop&w=800&q=80)

## Install and configure Android Studio

Use the latest Canary build of Android Studio. It includes XR tools and templates. You can install it side-by-side with your stable version.

1. Close any open Android Studio instances.
2. Download the Canary build from the official Android Studio channel and extract it.
3. Launch the application and complete the setup wizard.
4. On the Welcome screen, click More Actions then SDK Manager.
5. On the SDK Tools tab, select the latest versions of:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Layout Inspector for API 31–36
6. Click Apply and finish the installations.

On the SDK Platforms tab, enable Show Package Details. Select the Google Play XR system image that matches your host (ARM for macOS, x86_64 for Windows). Apply the changes.

## Create an XR virtual device

1. Open Device Manager (Tools > Device Manager or the device dropdown).
2. Click Add a new device > Create Virtual Device.
3. Choose the XR form factor. Select XR Glasses or XR Headset.
4. Pick a compatible system image (the Preview or Play XR image you installed).
5. Finish the AVD creation and start the emulator.

The emulator supports Home Space (windowed, similar to mobile) and Full Space (immersive). You can customize the environment and use embedded controls for spatial testing.

## Add Jetpack XR dependencies

Dependencies vary by target experience. For immersive experiences on headsets and wired XR glasses, add these to your module’s `build.gradle.kts` (versions from the current setup guide):

```kotlin
dependencies {
    implementation("androidx.xr.runtime:runtime:1.1.0-alpha02")
    implementation("androidx.xr.scenecore:scenecore:1.1.0-alpha01")
    implementation("androidx.xr.compose:compose:1.0.0-beta02")
    implementation("androidx.xr.compose.material3:material3:1.0.0-alpha17")
    implementation("androidx.xr.arcore:arcore:1.1.0-alpha01")
}
```

For augmented experiences on audio and display glasses, use the Glimmer and Projected libraries instead:

```kotlin
dependencies {
    implementation("androidx.xr.runtime:runtime:1.1.0-alpha02")
    implementation("androidx.xr.glimmer:glimmer:1.0.0-alpha22")
    implementation("androidx.xr.glimmer:glimmer-google-fonts:1.0.0-alpha22")
    implementation("androidx.xr.projected:projected:1.0.0-alpha14")
    implementation("androidx.xr.arcore:arcore:1.1.0-alpha01")
}
```

Sync the project. If you enable code minification with ProGuard or R8 on Jetpack XR alpha05 or newer, also add:

```kotlin
compileOnly("com.android.extensions.xr:extensions-xr:1.4.0")
```

Confirm Google Maven is available in your repositories block.

![Developer workspace with virtual reality headset](https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80)

## Create and run your first XR project

1. In Android Studio, start a new project. Select an Empty Activity or the XR template if available in Canary.
2. Set minSdk to 24 or higher and compileSdk to 34+.
3. Add the dependencies shown above and sync.
4. In your Activity or composable, import the XR libraries and set up a basic spatial session or panel.
5. Select the XR AVD as the run target and click Run.

The app deploys to the emulator like any other Android app. Inspect spatial layouts, panel placement, and interactions. Use Logcat and the Layout Inspector as usual.

For SceneCore, you can create entities and attach 3D content once the session is available. For Compose for XR, build declarative spatial UIs that adapt to the form factor.

## Tips for productive XR development

- Start in the emulator. Validate Home Space and Full Space behavior before seeking hardware.
- Keep Android Studio Canary updated. XR tooling improves with each Canary.
- Use the official Android XR Developer Site and the Android Dev Summit 2026 session playlist for deeper examples on 3D geometry, Unity integration, and accessible spatial design.
- Test on both glasses and headset form factors in the Device Manager.
- When hardware arrives (such as XREAL AURA), enable wireless ADB and deploy the same build.
- Monitor the Jetpack release notes for SceneCore, ARCore for XR, and Compose for XR updates.

## Watch the Android Dev Summit keynote

The keynote covers the XR announcements, XREAL AURA launch, and the move of core Jetpack XR libraries to stable.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mr-9hwgo10Q"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

You now have a working Android XR development environment. Android Studio Canary, the XR emulator, and the stable Jetpack XR SDK let you build and iterate on spatial apps today. Devices are shipping, so the ecosystem is ready for differentiated experiences.

Update your Studio installation, add the dependencies, create an XR AVD, and run your first project. From there, explore SceneCore for 3D content and Compose for XR for spatial UI.

## Sources

- Android Developers: Set up the Jetpack XR SDK (developer.android.com/develop/xr/jetpack-xr-sdk/set-up-sdk, updated November 2026)
- Android Developers: Install and configure Android Studio for XR development
- Android Developers Blog: Build for an expanding lineup of Android XR devices with production-ready tools (November 6, 2026)
- Android Dev Summit 2026 keynote (YouTube)
- Android Developers: Develop with the Jetpack XR SDK
