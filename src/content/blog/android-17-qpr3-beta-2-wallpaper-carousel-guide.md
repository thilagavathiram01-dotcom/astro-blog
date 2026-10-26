---
title: "Android 17 QPR3 Beta 2: Wallpaper Carousel & Fixes"
description: "How to install Android 17 QPR3 Beta 2 on Pixel, use the new Wallpaper & style carousel, lock Quick Settings tiles, and apply the 21 bug fixes."
pubDate: 2026-10-22T10:00:00
heroImage: "https://images.unsplash.com/photo-1774029764284-1e52eddb2e0f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Google released Android 17 QPR3 Beta 2 on 20 October 2026 as build DP11.261002.005. The update targets Pixel 6a and newer devices with stability fixes and two visible interface changes: a Wallpaper & style carousel and a lock for Quick Settings connectivity tiles.

This guide walks through eligibility, installation, the new carousel options, the lock-screen security toggle, and the full list of fixes. It assumes you already understand basic Pixel settings. For the shorter install overview, see our existing [Android 17 QPR3 Beta 2 install guide](/blog/android-17-qpr3-beta-2-pixel-install-fixes/).

## Confirm your Pixel is eligible

Android 17 QPR3 Beta 2 runs on Pixel 6a, Pixel 7 series, Pixel 8 series, Pixel 9 series, Pixel 10 series, Pixel 11 series, Pixel Tablet, and Pixel Fold. Pixel 6 and Pixel 6 Pro are excluded from this QPR3 track.

The security patch level is 2026-10-05 and Google Play services is 26.36.33. No app-impacting API changes ship with QPR releases, so most apps continue to work without updates. Back up photos, messages, and important files before you enroll or update. Beta builds can still restart unexpectedly even after the crash fixes listed below.

## Install Android 17 QPR3 Beta 2

If your Pixel is already enrolled in the Android Beta Program, the OTA appears automatically.

1. Open Settings > System > System update.
2. Tap Check for update.
3. Download and install build DP11.261002.005.
4. Reboot and confirm the build number under Settings > About phone.

New testers enroll at the official Android Beta site, select their device, and accept the terms. The first download is larger. Subsequent QPR3 builds arrive over the air while you remain enrolled. Leaving the beta later may require a factory reset to return to stable software.

![Smartphone resting on a wooden desk](https://images.unsplash.com/photo-1774029764284-1e52eddb2e0f?auto=format&fit=crop&w=800&q=80)

## Use the Wallpaper & style carousel

The Wallpaper & style app now presents Theme packs, Custom icons, Shape effects, Animate, and Weather effects in a single horizontal carousel. Open the app from the app drawer or long-press the home screen and tap Wallpaper & style.

Swipe left and right through the sections instead of opening separate sub-menus. Theme packs apply coordinated wallpapers, colors, and icon styles together. Custom icons let you replace the default set. Shape effects adjust icon outlines and shadows. Animate adds motion to wallpapers or transitions. Weather effects overlay dynamic elements such as rain or snow on the home or lock screen when weather data is available.

The carousel reduces taps for people who switch looks often. Test each section after the update because some effects still depend on the chosen wallpaper and Material You color extraction. Changes apply immediately and persist across reboots.

![Custom Android home screen on a smartphone](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## Enable Lock Quick Settings connectivity

A second new control requires the phone to be unlocked before Wi-Fi, Bluetooth, Airplane mode, or mobile data tiles can be changed from the lock screen. Other tiles such as flashlight remain available.

Go to Settings > Display & touch > Lock screen. Toggle the option labelled Lock Quick Settings connectivity or “Require unlock to change Wi-Fi, Bluetooth, Airplane mode, or mobile data tiles.” Some devices also show it under Security & privacy > Device unlock.

After enabling it, pull down Quick Settings on the lock screen and attempt to toggle Airplane mode. The phone prompts for PIN, pattern, password, fingerprint, or face unlock before the change takes effect. The feature first appeared in Android Canary 2609 and now reaches public beta testers.

It raises the barrier for anyone who finds a locked phone and tries to disable tracking by turning off connectivity. It does not replace a strong screen lock. Combine it with Advanced Protection if you frequently leave the device unattended. For a deeper look at this toggle alone, read our [Lock Quick Settings connectivity guide](/blog/lock-quick-settings-connectivity-android-17-qpr3-beta-2/).

## Key fixes in Beta 2

Official release notes list 21 fixes. The most noticeable include:

- Intermittent crashes and reboots during normal use (multiple issue tracker entries).
- Internet Quick Settings tile showing persistent text when mobile data is active without Wi-Fi.
- Unexpected shutdowns during WhatsApp video calls.
- Lock-screen in-progress notifications overlapping other UI elements and causing stuttering animations.
- Screen recording freezing after rotation.
- System UI, fonts, and apps rendering at an abnormally small scale regardless of display size settings.
- Display turning black and unresponsive after ending a phone call.
- High idle battery drain from motion sensors remaining active after Face Unlock or camera use.
- Bluetooth pairing timeouts and misaligned Quick Settings Bluetooth subtitle.
- App drawer closing when switching keyboard language.

Additional repairs cover cellular, MMS, and hotspot failures on Dish Network; VoLTE, VoNR, and Wi-Fi calling on IT&E; Wi-Fi calling on OXIO; Terminal app Linux virtual machine launch failures; and several UI glitches. Full issue numbers appear on the Android Developers QPR3 release notes page.

No known issues are listed for this build, yet beta software can still surface new problems. Monitor battery temperature and restart behavior for the first day.

## Tips after updating

Clear the cache of any app that misbehaves. Check battery usage under Settings > Battery to confirm the motion-sensor drain is resolved. Retest screen recording and WhatsApp calls if those failed on Beta 1.

Developers should verify apps that use Quick Settings tiles, lock-screen notifications, or screen recording. The update carries the October 2026 security patch, so install it for the latest platform fixes even if you skip the visual changes.

If problems persist, file a report through the beta feedback app or the public Android Issue Tracker. Stay enrolled to receive later QPR3 builds as they approach the expected March 2027 stable release.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yfQW5oDkgcU"
    title="Android 17 QPR3 Beta 2 Is Here! What's New?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android 17 QPR3 Beta 2 improves daily reliability on supported Pixel devices while adding a simpler Wallpaper & style carousel and a practical lock for connectivity tiles. Install the build if you accept beta risks, enable the lock if you want extra protection for a lost device, and explore the carousel to customize your home and lock screens with fewer steps.

Later betas will continue refining both features ahead of the March 2027 Feature Drop. Report remaining issues so Google can address them before the stable release.

## Sources

- [Android 17 QPR3 release notes (Beta 2, 20 October 2026)](https://developer.android.com/about/versions/17/qpr3/release-notes) — Android Developers
- [Here’s everything new in Android 17 QPR3 Beta 2](https://9to5google.com/2026/10/20/android-17-qpr3-beta-2-everything-new/) — 9to5Google, 20 October 2026
- Official Android Beta Program enrollment page
