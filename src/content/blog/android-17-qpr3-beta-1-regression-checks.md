---
title: "Android 17 QPR3 Beta 1: Pixel Regression Checklist"
description: "Enroll a Pixel in Android 17 QPR3 Beta 1 and regression-test the October 2026 fixes for audio, NFC, calls, and Quick Settings."
pubDate: 2026-10-04T10:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "tutorials", "developer"]
noindex: false
---

Android 17 QPR3 Beta 1 landed on October 2, 2026, with builds DP11.260918.005 and DP11.260918.006. Google did not ship new app-facing APIs in this Quarterly Platform Release. The point of the beta is to catch regressions before the public Feature Drop.

If you already flashed the first QPR3 image, the next job is a short checklist. The official release notes list fixes for audio routing, Quick Settings tiles, NFC, calls after reboot, and several freeze bugs. This guide covers how to get the build, then how to retest those areas on a Pixel or the emulator.

For the install path itself, see our [Android 17 QPR3 Beta 1 Pixel install guide](/blog/android-17-qpr3-beta-1-pixel-install/).

## What this beta actually is

QPRs update the stable Android 17 platform on a quarterly cadence. They go to AOSP and to Pixel devices as Feature Drops. Beta 1 carries the August 5, 2026 security patch level and Google Play services 26.32.34. Emulator images are available for x86 (64-bit) and ARM (v8-A).

Google says these updates do not include app-impacting API changes. You still want a test pass. UI bugs, media routing, and foreground-service crashes show up in production apps even when the SDK level stays the same.

Supported OTA and download devices listed by Google include Pixel 6a through the Pixel 11 series, plus Pixel Tablet and Pixel Fold. Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold are on the QPR3 device list.

## Enroll or flash a test device

Use a spare Pixel if you can. Beta builds can drop calls, drain battery, or reboot. Google recommends a backup even when a full wipe is not required.

1. Sign in at [google.com/android/beta](https://www.google.com/android/beta) with the account on the phone.
2. Opt in the device and pick the Android 17 QPR beta program when prompted. A device on a Developer Preview build may not match the program you want.
3. On the phone, open Settings, then System, then System update, and check for the OTA.
4. Confirm the build string starts with DP11.260918.005 or DP11.260918.006 before you log results.

Devices already enrolled in the Android Beta for Pixel program should receive QPR updates over the air until you opt out. After a stable public QPR, you can leave the beta without a data wipe for a limited window, until you take the next beta.

If you need a known image for automation, use the Android Flash Tool preview for CinnamonBun QPR3 Beta 1, or download the factory image from the Pixel downloads page. Flashing gives you a clean baseline. Unlocking the bootloader wipes user data, so do that only on a lab phone.

![Android phone on a desk next to a laptop during a software test](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Emulator path when you do not have a spare Pixel

The QPR3 get page still points developers at Android Studio Meerkat (2024.3.1) for a virtual device, then the CinnamonBun system image.

1. Install Android Studio and open Tools, then SDK Manager.
2. On the SDK Tools tab, install the latest Android Emulator.
3. Open Tools, then Device Manager, and create a virtual device based on a supported Pixel.
4. Download the Android 17 system image named CinnamonBun and boot it.
5. For layout checks, add a Resizable definition so you can switch phone, foldable, and tablet.

The emulator will not reproduce every hardware bug below. Fingerprint unlock freezes, eSIM toggles, and LHDC Bluetooth disconnects need a physical Pixel. Use the emulator for launcher spacing, recents previews, and app-launch ANRs.

## Checklist of fixes worth retesting

Work through the issues Google marked fixed in Beta 1. Record the app version, build number, and whether the bug still reproduces.

**Audio routing.** Play audio from an app that does not show media controls, then switch output to a speaker, wired headset, or Bluetooth device. The fixed issue is that the output device could not be switched in that case (Issue #259180936). Also disconnect a second Bluetooth device while audio plays on an active LHDC v5 device. Playback used to stop (Issue #554992287).

**Quick Settings tiles.** Add your app's tile if it starts a foreground service. On earlier builds, apps crashed when a tile tried to start that service (Issue #299506164). Watch for an extra dot on the Mobile Data icon in Quick Settings (Issue #551150806).

**Launcher and recents.** Open the app drawer and check icon spacing. Google fixed excessive spacing (Issues #316288379 and #300758716). Open recents and confirm app previews render (Issue #515091621). Leave an app with the system back gesture and confirm the home screen does not glitch (Issue #566639975).

**NFC and calls.** Scan a tag, leave the field, and scan again. NFC used to crash with a DeadObjectException and stop detecting tags after the first scan (Issue #456078994). Reboot, then accept a call immediately. Calling apps crashed with ForegroundServiceStartNotAllowedException in that window (Issue #409069722).

**Unlock and camera.** Unlock with fingerprint several times. Devices froze on this path (Issues #490719716, #514867650, and #523022829). If you use Face Unlock, toggle the option that requires eyes to be open. That path crashed Settings on earlier builds (Issues #466618368 and #522677686). Start a screen recording, then open the front camera. The front camera failed while recording was active (Issue #523313834). On an external display in desktop mode, start a video call and check that the camera feed is not rotated 90 degrees (Issue #432390710).

**Idle and connectivity.** Leave the phone idle with Flip to Shh on and compare battery use with a previous build. Google fixed excess idle drain in that mode (Issue #560036427). Open battery settings and confirm Settings does not crash (Issue #554603197). Toggle an eSIM profile and confirm it stays on (Issue #541436675). Walk out of Wi-Fi range and back. Reconnect failed when hardware PNO scans failed (Issue #551970385).

File anything that still fails through the Android Beta feedback flow on the device. Include the issue number from the release notes if you are confirming a regression.

![Developer reviewing mobile app screens on a phone](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## A short test script you can run in 30 minutes

You do not need a full QA lab for a first pass.

1. Note the build number and security patch level from Settings, then About phone.
2. Cold-start your top three apps and watch for an ANR. Launch freezes were fixed in Issues #484969809 and #475406236.
3. Play a local file with non-ASCII tags in the audio metadata. MediaPlayer crashed on those tags (Issue #552043106).
4. Switch audio output, scan an NFC tag twice, and place a test call after a reboot.
5. Open recents, the app drawer, battery settings, and Quick Settings.
6. Leave the device locked for 20 minutes with Flip to Shh enabled, then check that it still unlocks.

Compare notes with the prior QPR if you still have a device on QPR2. Our [QPR2 Beta 6.1 notes](/blog/android-17-qpr2-beta-6-1-pixel/) are a useful baseline for what already shipped.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DrdNE_Ewzzk"
    title="How to Install Android 17 Beta 1 on Pixel (Step by Step Guide)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The video walks through Android 17 beta enrollment and an OTA path on Pixel. QPR3 uses the same beta program, but confirm you selected the current QPR track and that the installed build is DP11.260918.005 or DP11.260918.006.

## Tips before you file a bug

Back up before you opt in. A data wipe is not always required, and you should not assume that.

Do not treat a Developer Preview or Canary build as this beta. The program page warns that a non-public stable build can block enrollment if it does not match the platform version.

Opt out only after you understand the wipe window. Leaving during an active beta, after you have taken a beta update, can erase data. The safe window is after a stable public release and before the next beta.

Skip the emulator for modem, eSIM, and Bluetooth codec bugs. Those need a Pixel from the supported list.

QPR3 does not change target SDK behavior by itself. If your app targets Android 17, still re-read the platform behavior changes. A QPR can expose an old bug that a previous build hid.

## Conclusion

Android 17 QPR3 Beta 1 is a fix release, not a new API drop. The useful work is confirming the October 2, 2026 fixes on a real Pixel: audio output switches, Quick Settings foreground starts, NFC rescans, calls right after reboot, and the unlock and camera cases listed in the release notes.

Enroll through the Android Beta for Pixel program, or flash the CinnamonBun QPR3 Beta 1 image if you need a controlled lab device. Log the build number with every result so a later beta does not get mixed into the same sheet.

## Sources

- Android Developers, [Android 17 QPR3 release notes](https://developer.android.com/about/versions/17/qpr3/release-notes) (updated October 2, 2026)
- Android Developers, [Get Android 17 QPR 3](https://developer.android.com/about/versions/17/qpr3/get) (updated October 2, 2026)
- Google, [Android Beta Program](https://www.google.com/android/beta)
