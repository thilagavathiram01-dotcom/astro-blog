---
title: "How to Set Up Android XR Emulators in Studio Rabbit 2"
description: "Step-by-step guide to creating and using stable Android XR emulators for glasses and headsets in Android Studio Rabbit 2."
pubDate: 2026-10-31T10:00:00
heroImage: "https://images.unsplash.com/photo-1758521540703-34409d1f4e04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Android Studio Rabbit 2 is stable and includes production-ready Android XR emulators for glasses and related form factors. Developers can now create virtual XR devices, test spatial UIs, and iterate without physical hardware. This guide walks through setup, key controls, and practical testing steps based on official documentation.

The emulators launch embedded inside the Running Devices tool window. They cover XR glasses (optical see-through with dimming), display glasses, and audio glasses. Core Jetpack XR libraries are also stable, and the first commercial wired glasses—XREAL AURA—are available for pre-order.

## Update to Android Studio Rabbit 2

Download the stable Rabbit 2 build (2026.2.2) from the official Android Developers site or use Help > Check for Updates inside Studio. Confirm you are on the stable channel rather than Canary. XR emulator support is included by default once the IDE is updated.

System requirements follow standard Android Emulator needs with extra headroom recommended for XR: at least 16 GB RAM, and a capable GPU on Windows or Apple Silicon on macOS. Create a new project or open an existing one that targets the Jetpack XR SDK.

![Developer working with a virtual reality headset near a laptop](https://images.unsplash.com/photo-1728571195314-5979a49acd12?auto=format&fit=crop&w=800&q=80)

## Create an XR virtual device

1. Open Device Manager (Tools > Device Manager).
2. Click Create Virtual Device or Add a new device.
3. Select the XR form factor.
4. Choose XR Glasses, Display Glasses, or Audio Glasses.
5. Select a compatible system image (Preview API images are required for some glasses types).
6. Finish and download the image if prompted.

For glasses that require a companion phone, also create a standard phone AVD (Pixel series recommended) on a matching preview API level. Use the Pairing Assistant from the glasses device overflow menu to link them automatically. The assistant starts both emulators and establishes the virtual connection.

Once created, start the XR device from Device Manager. It appears embedded in the Running Devices window alongside your code editor.

## Run and interact with your app

Select the appropriate AVD (phone for projected glasses experiences, or the XR device directly for immersive ones) in the toolbar and click Run. The app deploys and appears in the spatial environment.

Emulator controls include:

- Hand tracking mode: mouse position drives raycasts; drag to pinch or manipulate objects.
- Eye tracking mode: mouse simulates gaze focus; click to select.
- Hardware mode: direct mouse and keyboard interaction inside the virtual space.
- Environment Visibility / dimming slider: adjust simulated electrochromatic lens opacity for optical see-through testing.
- Passthrough toggle: switch between virtual environment and simulated real-world background.
- Custom environments: load 360-degree photos, 2D stills, or a live camera feed for display glasses testing.

Keyboard shortcuts (WASD or arrow keys) handle movement and viewpoint reset. Hardware LED indicators for microphone and camera states are also simulated.

![Floating virtual reality glasses](https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?auto=format&fit=crop&w=800&q=80)

## Practical testing tips

Start with the official XR project template in the New Project Wizard to get a working Compose-based spatial UI quickly. Use Layout Inspector with XR support to examine 3D layouts and component bounds while the emulator runs.

For optical see-through devices like those similar to XREAL AURA, test contrast and readability across dimming levels. Move the viewpoint around and verify that interactive elements remain reachable via hand or eye input. Ask an agent (via Bring Your Own Agent) to help generate or refine spatial layouts—see the related guide on [connecting agents in Android Studio Rabbit 2](/blog/android-studio-rabbit-2-bring-your-own-agent-guide/).

Profile performance with the built-in tools and check for jank in spatial transitions. Because the emulators are stable, you can integrate them into regular CI or local verification workflows without relying on physical hardware for every iteration.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wYNY4x6pym4"
    title="Build XR experiences with Android dev tools"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common setup issues and fixes

If the XR form factor does not appear, confirm you are on Rabbit 2 stable and that the Android XR system images have been downloaded via SDK Manager. Pairing failures usually resolve by restarting both the phone and glasses AVDs and re-running the Pairing Assistant. Low performance is often fixed by allocating more RAM to the emulator or closing other GPU-heavy applications.

Features added in beta or preview stages can change, so always cross-check the current release notes before shipping production builds.

## Conclusion

Android Studio Rabbit 2 removes the main hardware barrier for Android XR development. Create the virtual devices, pair them when needed, and use the embedded emulator controls to test spatial interfaces and optical see-through behavior on a standard workstation. Combined with stable Jetpack XR libraries, the workflow matches ordinary Android app development while adding the spatial tools required for glasses and immersive experiences.

Begin with a simple projected activity or the official template, verify the result in the emulator, and expand from there.

## Sources

- [Android Studio Rabbit 2 release notes](https://developer.android.com/studio/releases) — Android Developers
- [Create virtual devices for XR headsets and XR glasses](https://developer.android.com/develop/xr/jetpack-xr-sdk/run/create-avds/xr-headsets-glasses) — Android Developers
- [Run your app's immersive experiences on the emulator](https://developer.android.com/develop/xr/jetpack-xr-sdk/run/emulator/xr-headsets-glasses) — Android Developers
- [XREAL AURA launches as first Android XR glasses](https://blog.google/products-and-platforms/platforms/android/xreal-aura/) — Google Blog
- [Build XR experiences with Android dev tools](https://www.youtube.com/watch?v=wYNY4x6pym4) — Android Developers
