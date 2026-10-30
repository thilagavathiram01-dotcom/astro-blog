---
title: "XREAL AURA: First Android XR Glasses Guide"
description: "Complete guide to XREAL AURA Android XR glasses: specs, ordering, features with Gemini, and developer tools from the 2026 Dev Summit."
pubDate: 2026-10-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai", "google"]
noindex: false
---

Google and XREAL launched XREAL AURA at Android Dev Summit on October 28, 2026. It is the first wired XR glasses powered by Android XR. The device pairs lightweight see-through glasses with a separate compute puck so you can run Android apps, spatial experiences, and Gemini in mixed reality without a full headset.

AURA projects content into your real-world view through transparent lenses. You keep visual contact with your surroundings while working, watching, or playing. The setup targets everyday use at a desk, on a plane, or at home.

## Key Specs and Design

The glasses weigh under 95 grams. Processing and battery sit in a portable puck linked by cable. That split design keeps the glasses light while the puck runs Qualcomm’s new Snapdragon Reality Elite platform.

Lenses deliver a 70-degree field of view. That is wider than earlier XREAL models and gives space for multiple windows or spatial apps. Electrochromic dimming lets you darken the view for media or keep it clear for awareness. Sony Micro-OLED panels provide 1200p resolution per eye at up to 120 Hz according to partner reports.

Android XR supplies the OS. You get access to millions of Google Play apps plus more than 150 experiences built specifically for XR. Gemini understands both the real environment and on-screen content.

![Laptop and phone workspace for Android development](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Everyday Uses

Open several apps at once and arrange them in space. Pair a Bluetooth keyboard and mouse, or use the puck as a trackpad, to create a portable multi-monitor desk. Wired Mirroring lets you plug in a laptop via USB-C video output; its screen appears as a resizable window beside Android XR apps. No extra software is required.

For media, dim the lenses and place a large screen from YouTube, Google TV, or other streaming services. Spatial View can convert ordinary video or photos into 3D. Window follow keeps content centered as you move, then shrinks to a mini view when you walk.

Games run from the Play Store or via laptop mirroring. Hand tracking supports native XR titles. Gemini can offer in-context help while you play or work.

## Ordering and Availability

Orders opened October 28, 2026, in the United States, Canada, and South Korea. Japan opens November 2. Launch pricing starts at USD 1,099 through the end of 2026. Buy at xreal.com/aura or BestBuy.com in the US. Shipments begin mid-November. The product is for users 18 and older and requires a compatible account.

Business deployments are covered in Google’s Android Enterprise materials.

## Developer Tools Reach Stable

At the same summit, Google moved core Jetpack XR SDK libraries to stable: Jetpack SceneCore, ARCore for Jetpack XR, and XR Runtime. Stable status brings long-term API compatibility. Android XR emulators in Android Studio are also stable. You can add an XR Glasses emulator in Device Manager, load custom 360 environments, and test without hardware.

The Android XR Engine Hub reached stable and supports Unity, Godot, and Unreal workflows with performance traces. Geospatial APIs let you anchor content to real-world locations.

Existing Android apps can surface on AURA on day one. For deeper spatial experiences, use Jetpack Compose for XR and the ARCore for Jetpack XR libraries. Official sessions from the summit cover 3D engine integration and world-anchored experiences for wired glasses.

![Code on laptop screen with glasses nearby](https://images.unsplash.com/photo-1763568258338-94886e7533ab?auto=format&fit=crop&w=800&q=80)

## Practical Tips

Start with the official Android XR emulator if you do not have hardware. Update Android Studio to the current stable channel that includes the XR tools. Review the Jetpack XR SDK get-started guide on developer.android.com for dependency setup.

Test dimming, multi-window layouts, and Gemini context early. Wired mirroring is useful for validating laptop-to-glasses workflows. Check Play Console requirements if you plan to distribute XR-optimized apps.

Pair this with agent tooling already available in Android Studio. See our guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/) for integrating coding agents while you build spatial features.

## Conclusion

XREAL AURA brings Android XR into a practical glasses form factor with a portable puck. Users gain multi-window productivity, private media, and Gemini assistance without leaving their environment. Developers gain stable Jetpack XR libraries and emulators so they can ship spatial experiences alongside regular Android apps.

Orders are open now in the launch markets. Follow the Android Developers channel for the full keynote and XR track sessions.

## Sources

- [XREAL AURA: Wired XR glasses to watch, work, and play](https://blog.google/products-and-platforms/platforms/android/xreal-aura/) — Google Blog, October 28, 2026
- [Develop with the Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk) — Android Developers
- Android Dev Summit 2026 keynote and XR sessions — Android Developers YouTube

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
