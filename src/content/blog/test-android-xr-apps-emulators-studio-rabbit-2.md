---
title: "Test Android XR Apps with Emulators in Studio Rabbit 2"
description: "Step-by-step guide to set up and use stable Android XR emulators in Android Studio Rabbit 2 for glasses and headsets without physical hardware."
pubDate: 2026-10-29T22:00:00
heroImage: "https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai-tools"]
noindex: false
---

Android XR emulators for glasses, audio glasses, and display glasses reached stable status in Android Studio Rabbit 2. You can now create virtual devices, launch them from Device Manager, and test immersive or augmented experiences on your laptop. Custom environments, LED indicators, and a faster Pairing Wizard remove the need for physical hardware during early development.<grok type="render_inline_citation" citation_id="221" />

The emulators sit alongside the stable Jetpack XR SDK libraries. You iterate on SceneCore content, ARCore geospatial anchors, or Compose Glimmer overlays, then validate visuals and interactions before you ever pair real glasses. See our guide to [building spatial apps with Jetpack XR SceneCore](/blog/build-spatial-apps-jetpack-xr-sdk-scenecore/).

## Update Android Studio and create an XR virtual device

Open Android Studio and install the latest stable Rabbit 2 build via Help > Check for Updates. Rabbit 2 ships the stable XR emulators plus Bring Your Own Agent and other tooling.

1. Open Device Manager (Tools > Device Manager).
2. Click Add a new device > Create Virtual Device.
3. Under Form Factor select XR.
4. Choose XR Glasses, XR Headset, Audio Glasses, or Display Glasses.
5. Select a compatible system image (Preview API for glasses in many cases) and finish.

The new AVD appears in the list. Start a host phone AVD first if you are testing wired glasses that require pairing, then start the glasses AVD. The improved Pairing Wizard connects the virtual phone to the virtual glasses more reliably than earlier previews.<grok type="render_inline_citation" citation_id="227" />

![Person interacting with a VR headset in a home setting](https://images.unsplash.com/photo-1758521540703-34409d1f4e04?auto=format&fit=crop&w=800&q=80)

## Customize the environment and check hardware states

Once the emulator runs, open the Environments control. Select Custom Environment and load a 360-degree photo of a real room, or choose Camera to feed a connected webcam. This lets you preview how optical overlays or spatial UI look against actual lighting and surfaces instead of the default virtual space.

Hardware LED indicators on the virtual glasses now show microphone and camera states. Confirm the LEDs light when your app requests those permissions or when Gemini Live is active. Use the Environment Visibility slider on XR glasses to adjust dimming and verify contrast on additive displays.

These controls match the official emulator documentation. You can capture screenshots or record sessions for design review without leaving the IDE.

## Run and iterate on your XR app

Build and deploy your project to the running XR AVD exactly as you would a phone emulator. The Layout Inspector gains XR support so you can inspect spatial panels and anchors. Use the emulator controls to rotate the view, walk through the scene with WASD, or toggle passthrough.

For agent-assisted work, connect an ACP agent through Bring Your Own Agent. The agent can read logs, trigger builds, and, with Android CLI, render related Compose previews headlessly. After visual checks in the emulator, push the same change set through Change Review if the agent generated large diffs.

![Developer workspace with multiple screens](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Tips for productive XR testing

Keep the host machine within system requirements: recent Android Studio, sufficient RAM (16 GB+ recommended), and a supported GPU. Apple Silicon or recent Windows/Linux machines handle the XR emulators well.

Start with a single form factor. Test glasses overlays first, then move to full headset immersion. Custom environments reveal contrast problems that the default scene hides.

Pair the emulator workflow with the stable Jetpack XR libraries. SceneCore, ARCore for Jetpack XR, and the XR Runtime APIs are production-ready and backward compatible. Update your dependencies, then validate the same code path in the emulator.

Record a short session when an interaction feels off. The LED states and environment feed give you reproducible evidence to share with teammates or an agent.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/saRE0t11KJY"
    title="How to build apps for Android XR without hardware"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Stable XR emulators in Android Studio Rabbit 2 let you build and validate glasses and headset experiences from a laptop. Create the AVD, customize the environment with real photos or a camera feed, watch the LED indicators, and iterate. Combine the setup with the stable Jetpack XR SDK and your preferred agent to move from prototype to polished spatial UI without waiting on hardware.

Download the latest Rabbit 2 build, launch Device Manager, and start an XR virtual device on your next spatial feature.

Sources:

- Android Developers Blog: Your favorite agents are now integrated in Android Studio (28 Oct 2026)
- Android Developers Blog: What's new in Android developer tools and performance at Android Dev Summit (28 Oct 2026)
- Android XR emulator documentation for glasses and headsets
