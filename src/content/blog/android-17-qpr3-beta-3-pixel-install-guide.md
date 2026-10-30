---
title: "Android 17 QPR3 Beta 3: Install Guide and New Features"
description: "Install Android 17 QPR3 Beta 3 on Pixel. Restore app lock, add Recents bubbles, and apply 26 bug fixes with official steps."
pubDate: 2026-10-30T10:00:00
heroImage: "https://images.unsplash.com/photo-1584091377126-3817650725fc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Google released Android 17 QPR3 Beta 3 on October 29, 2026. The build restores the app lock feature and adds a way to launch app bubbles from the Recents screen. It also ships 26 targeted bug fixes for Pixel devices.

This is a quarterly platform release. It does not change APIs. Eligible Pixel phones from the 6a onward can install it through the Android Beta program. If you already run an earlier QPR3 beta, the update arrives over the air.

For the first beta in this cycle, see our [Android 17 QPR3 Beta 1 install guide](/blog/android-17-qpr3-beta-1-pixel-install/).

## What is new in Beta 3

App lock returns after a temporary removal. When you lock an app, it requires your PIN, pattern, password, or biometric before it opens. Notifications hide their content. Widgets and shortcuts disappear. Recents content is redacted while the app stays locked.

You can now launch apps as bubbles from the Recents overview. Open Recents, tap the dropdown on a recent app, and choose the bubble option. This works with alternative launchers and joins the existing home-screen long-press shortcut on the stock launcher.

A camera tile appears in Quick Settings. Lock-screen alarms now show the correct AM or PM indicator. Some lock-screen blur that disappeared in earlier builds returns.

These changes sit on top of the platform fixes. Google lists them in the official release notes and confirmed the app-lock return and Recents bubbles through Android community updates.

![Person holding a black Android smartphone at a desk](https://images.unsplash.com/photo-1584091377126-3817650725fc?auto=format&fit=crop&w=800&q=80)

## The 26 fixes in this build

Google published the full list on the Android Developers site. The most noticeable ones include:

- Images no longer render with incorrect transparency when using the Multiply blend mode.
- Recents overview no longer flickers when you perform a home gesture right after switching apps.
- The inner display on foldables no longer stays black after you unfold the device.
- The Twitter app stops crashing when you view post-thread mentions.
- The display no longer randomly turns off and on during normal use.
- Video quality improves when you use the phone as a webcam.
- Toast notifications no longer fail under high memory pressure.
- Home-screen wallpaper no longer appears on the lock screen when you wake the device from an open app.
- Bubbles no longer get stuck in a miniaturized state at the bottom of the screen.
- Navigation-bar animations no longer glitch when you swipe up to Recents.
- The Mobile Data Quick Settings icon no longer renders at the wrong size with visual artifacts.
- Devices no longer crash intermittently on the lock screen or shortly after startup.
- Bluetooth scanning no longer crashes when stopScan is called with a null callback.
- WPA-Enterprise Wi-Fi connections succeed with PEAP authentication.

The remaining fixes cover equalizer bars, force-stop behavior, accessibility icon flicker, Picture-in-Picture activity launches, status-bar spacing, screen-recording callbacks, dark-mode button icons, grouped notifications, persistent UI messages, font-size slider rendering, missing image-action icons in Recents, and a SettingsDumpService memory leak after opening SIM settings.

Build numbers are DP11.261016.004 for the Pixel 11 series and DP11.261016.003 for all other supported devices. The security patch level stays at 2026-10-05. Play services reports 26.36.33.

## Supported devices

The beta is available for:

- Pixel 6a, 7, 7 Pro, 7a
- Pixel Tablet, Pixel Fold
- Pixel 8, 8 Pro, 8a
- Pixel 9, 9 Pro, 9 Pro XL, 9 Pro Fold, 9a
- Pixel 10, 10 Pro, 10 Pro XL, 10 Pro Fold, 10a
- Pixel 11, 11 Pro, 11 Pro XL, 11 Pro Fold

Pixel 6 and Pixel 6 Pro are not included. Emulator images cover x86 64-bit and ARM v8-A.

## How to install via the Beta program

Enrollment keeps your data. Back up first anyway.

1. Confirm your Pixel is on the supported list. Sign in with the same Google Account you use on the phone.
2. Open g.co/androidBeta in a browser. Locate your device and select Opt in. Accept the terms.
3. On the phone, open Settings, then System, then System update. Tap Check for update.
4. Download and install the offered build. Restart when prompted.
5. Open Settings > About phone and verify the build string matches DP11.261016.003 or .004.

Already enrolled from Beta 1 or Beta 2? Check for updates. You do not need to opt in again. The package arrives as a normal OTA.

Leaving the beta later can require a data wipe if you install a public build after a beta that is not yet stable. Keep a second device if this phone holds your only authenticator codes.

## Flash a factory image if you need a clean state

Use Android Flash Tool only when you want a known image and can accept a wipe.

1. Enable USB debugging. Unlock the bootloader. Unlocking erases user data.
2. Connect the phone to a computer with Chrome or Edge 79 or newer.
3. Open the Android Flash Tool and select the QPR3 Beta 3 preview target for Cinnamon Bun.
4. Follow the WebUSB prompts. After the flash completes, the device joins the beta program for later OTAs.

Factory images are available on the Android Developers QPR3 download page. Match the zip to your exact model. Verify the published checksum before flashing.

To return to a public build, use the back-to-public flash option or a public factory image. That path also wipes the device.

![Laptop, phone, and notebook on a wooden desk](https://images.unsplash.com/photo-1763568258266-3794097e5837?auto=format&fit=crop&w=800&q=80)

## Tips for testers and developers

Keep the October 5 security patch in mind. This beta does not raise the patch level. If you need the latest bulletin, wait for a later build or the stable Feature Drop.

Retest the fixed paths if you ship an app. Pay attention to Picture-in-Picture activity launches, Bluetooth scanning callbacks, Wi-Fi Enterprise connections, and Recents previews. File remaining issues through the Android Beta Feedback app on the device.

App lock and Recents bubbles are user-facing changes. Confirm they behave correctly with your launcher and with accessibility services. Features that appear in beta are not guaranteed for the final stable QPR.

Stable QPR3 is expected as a Pixel Feature Drop later. Reporting points to March 2027, but Google has not published a firm date on the release notes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/86EkKDfkuyk"
    title="Android 17 QPR3 Beta 3 Is Here! New Features, Bug Fixes & Performance"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android 17 QPR3 Beta 3 restores app lock and adds a practical Recents shortcut for bubbles while fixing 26 stability and UI issues. Install it over the air if your Pixel is already enrolled and you accept beta risk. Flash only when you need a clean image and have a full backup. Verify the build number after reboot and retest the paths Google lists as fixed.

## Sources

- Android Developers, Android 17 QPR3 release notes (October 29, 2026): https://developer.android.com/about/versions/17/qpr3/release-notes
- 9to5Google, Android 17 QPR3 Beta 3 rolling out with 26 Pixel fixes (October 29, 2026)
- Android Authority, Android 17 QPR3 Beta 3 brings back app lock and fixes dozens of bugs (October 29, 2026)
- Mishaal Rahman community updates on app lock return and Recents bubbles (October 29, 2026)
- In Depth Tech Reviews, Android 17 QPR3 Beta 3 overview video, YouTube
