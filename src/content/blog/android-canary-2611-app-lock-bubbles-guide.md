---
title: "Android Canary 2611: App Lock Returns on Pixel"
description: "Install Android Canary 2611 on Pixel 6a or newer. Get App Lock, Bubbles from Recents, and a dedicated Camera Quick Settings tile."
pubDate: 2026-11-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1760597371617-5c0652f58178?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Android Canary 2611 (build ZP11.261016.008) landed on 4 November 2026 for Pixel 6a and newer devices. It restores App Lock after a gap since Canary 2603, adds a shortcut to launch apps as bubbles from the Recents screen, introduces a dedicated Camera tile in Quick Settings, and shows AM/PM on At a Glance alarms on the lock screen.

These changes match what already appeared in Android 17 QPR3 Beta 3. Canary remains the earliest public track for testing unfinished Android features. It is experimental and not meant for daily drivers.

![Rear view of a Google Pixel phone](https://images.unsplash.com/photo-1760597371617-5c0652f58178?auto=format&fit=crop&w=800&q=80)

## What is new in Canary 2611

Google employee Mishaal Rahman listed the visible changes on X shortly after the release:

- App Lock is back. You can lock individual apps behind your fingerprint, face, or screen PIN.
- A new shortcut lets you open apps in floating bubbles directly from the Recents overview.
- Quick Settings gains a dedicated Camera tile for one-tap launch.
- The At a Glance widget on the lock screen now displays AM or PM next to upcoming alarm times.

The build is roughly 1 GB. It carries the November 2026 security patch level. Devices already enrolled in the Canary channel receive it as an OTA. Everyone else must flash it manually.

App Lock first appeared in earlier Canary builds, disappeared, and has now returned. It works by requiring authentication each time you open a locked app. Notification content is hidden, and widgets for locked apps are removed. It is a convenience control against casual access, not a full vault.

For a deeper look at how App Lock behaves on more stable tracks, see our guide to [locking apps on Pixel with Android 17](/blog/android-17-app-lock-pixel/).

## Who can install it

Canary 2611 system images are available for:

- Pixel 6a, 7 series, 7a, 8 series, 8a, 9 series, 9a, 9 Pro Fold, 10 series, 10a, 10 Pro Fold, 11 series, 11 Pro Fold
- Pixel Fold, Pixel Tablet, and Generic System Image (GSI)

You need a computer with a USB cable and a browser that supports WebUSB (Chrome or Edge). Back up your data first. Switching to or from Canary usually requires a full wipe if you later leave the channel.

## How to install Android Canary 2611

### Already on Canary

1. Open Settings.
2. Go to System → Software updates.
3. Tap Check for updates or System update.
4. Download and install ZP11.261016.008 when it appears.

The device restarts into the new build. Future Canary releases will continue as OTAs.

### Coming from stable or beta

Use Google’s Android Flash Tool at flash.android.com. It handles the download and flashing over USB without local fastboot scripts.

1. Enable Developer options on your Pixel (tap Build number seven times in Settings → About phone).
2. Turn on USB debugging and OEM unlocking in Developer options.
3. On a computer, open Chrome or Edge and go to flash.android.com.
4. Connect the Pixel with a data cable. Allow the browser to access ADB when prompted.
5. Click Add new device, select your Pixel, and accept the USB debugging prompt on the phone.
6. Choose the Canary 2611 build (ZP11.261016.008) from the list.
7. Select Install. The tool reboots the phone into fastboot and flashes the image.

Do not unplug the device during the process. After it finishes, the phone boots into Canary. Expect a data wipe if you were not already on a Canary build.

Once installed, the phone stays on the Canary channel and receives monthly updates automatically. To leave Canary later you must flash a non-Canary build (stable or beta), which wipes data again.

![Android phone home screen](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## Using the new features

### App Lock

1. Long-press an app icon on the home screen or in the app drawer.
2. Look for the App lock option in the menu.
3. Confirm the warning about hidden notifications and removed widgets.
4. Authenticate with your screen lock.
5. The next time you open the app it will ask for fingerprint, face, or PIN.

You can also manage the list under Settings → Security & privacy → App lock. Lock banking, messaging, and gallery apps first. Skip apps you open constantly unless the extra prompt is acceptable.

### Bubbles from Recents

Open the Recents overview (swipe up and hold). A new shortcut appears that lets you launch the selected app as a floating bubble. Drag the bubble to the side of the screen to park it. This expands the multitasking options already present in recent Android 17 builds.

### Camera Quick Settings tile

Swipe down twice to open the full Quick Settings panel. The new Camera tile sits among the other toggles. Tap it to launch the camera app without unlocking the phone first in some cases, or simply for faster access.

### Lock-screen alarms

The At a Glance widget on the lock screen now appends AM or PM to alarm times. This removes ambiguity for people who use 12-hour format.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/urdjXS4DtJ8"
    title="Android 17 QPR3 Beta 3 Released: Everything New"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips and caveats

- Canary builds can break apps, battery life, or connectivity. Keep a secondary phone or a full backup.
- Features that appear here may change or disappear before they reach stable. Do not rely on them for production work.
- App Lock does not encrypt the app’s data separately. It only adds an authentication gate. Review which agents or connected services already have access.
- After flashing, check Settings → About phone to confirm the build number starts with ZP11.261016.008.
- If something goes wrong, the Android Flash Tool can also flash a public stable image to recover the device.

## Conclusion

Android Canary 2611 gives Pixel testers an early look at App Lock’s return plus small but useful quality-of-life changes. If you already run Canary, the OTA is the simplest path. Everyone else should use the official Flash Tool after a backup. Treat the channel as a testing ground, not a daily driver, and watch for these features to stabilize in later Android 17 quarterly releases.

## Sources

- [Android Canary 2611 arrives for adventurous Pixel testers](https://www.androidauthority.com/android-canary-2611-3731794/) — Android Authority, 4 November 2026
- [Google Rolls out New Android Canary 2611 Update for Pixel Phones](https://gadgets.beebom.com/news/google-rolls-out-android-canary-2611-update-for-pixel-phones) — Beebom, 5 November 2026
- Mishaal Rahman on X, 4 November 2026
- [Android Flash Tool](https://flash.android.com/) — Google
- [Android Canary subreddit announcement](https://www.reddit.com/r/android_canary/comments/1xnyli0/android_canary_2611_is_now_available/)
