---
title: "Install Android 17 QPR3 Beta 1 on Your Pixel Phone"
description: "Install Android 17 QPR3 Beta 1 on a supported Pixel. See builds DP11.260918.005 and .006, official bug fixes, and how to enroll."
pubDate: 2026-10-03T10:30:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Google opened the Android 17 QPR3 beta on October 2, 2026. The first build is a bug-fix release for eligible Pixel phones and the Pixel Tablet, not a new API level.

If you already test quarterly platform releases, the over-the-air update is the safer path. A factory flash wipes the device. This guide covers who can install Android 17 QPR3 Beta 1, what Google fixed, and how to enroll without guessing build numbers.

If you followed the previous cycle, the [Android 17 QPR2 Beta 6.1 Pixel notes](/blog/android-17-qpr2-beta-6-1-pixel/) explain the build you are leaving.

## What QPR3 Beta 1 actually is

Quarterly Platform Releases ship fixes after the main Android release. Google delivers them to AOSP and to Pixel devices as Feature Drops. Android Developers says QPR3 does not include app-impacting API changes.

The release date on the official notes is October 2, 2026. Two builds ship together:

- **DP11.260918.005** for Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold.
- **DP11.260918.006** for every other supported Pixel in this beta, from Pixel 6a through the Pixel 10 series, plus Pixel Fold and Pixel Tablet.

Both builds list the August 5, 2026 security patch and Google Play services 26.32.34. Emulator images cover x86 (64-bit) and ARM (v8-A). The codename path on the flash tool is still Cinnamon Bun: `cinnamonbun-qpr3-beta1`.

Pixel 6 and Pixel 6 Pro are not on the factory-image list for this beta. Pixel 6a is.

![Smartphone on a wooden desk beside a notebook](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Fixes worth installing for

Google published a long list of resolved issues. These are the ones most likely to show up on a daily driver:

- The phone could freeze when unlocked with the fingerprint sensor.
- Face Unlock settings could crash when the "require eyes to be open" option was selected.
- An eSIM profile could fail to stay enabled and silently revert to off.
- A modem bug could put the phone app in a crash loop and drop cellular service when the modem reported unexpected SIM slot indices.
- Wi-Fi could fail to reconnect on a background wake when hardware PNO scans failed or were unsupported.
- Flip to Shh could drain the battery while the phone was idle.
- Battery settings could crash the Settings app.
- Calling apps could crash right after reboot with `ForegroundServiceStartNotAllowedException`.
- The front camera could fail during screen recording.
- Recent-app previews could fail to appear, and launcher icons could render with too much spacing.
- Audio output could not be switched in apps that lacked active media controls.
- LHDC v5 playback could stop on one Bluetooth device when a second device disconnected.

Other fixes cover NFC tag detection after the first scan, a rotated camera feed on an external display in desktop mode, a stray dot on the Mobile Data Quick Settings icon, and apps that froze with an ANR at launch.

Testers at 9to5Google also reported a Notes Quick Settings tile on the Pixel 11 series, larger Bluetooth and Airplane Mode status icons, a bolder VPN glyph, and the Gemini Intelligence boot animation on Pixel 10 hardware. Those observations are not in the official fixed-issue list, so treat them as early sightings until Google documents them.

## Install from the Android Beta program

Use this path if you want an OTA and you can accept beta risk on that phone.

1. Confirm the device is on the supported list above. Sign in with the Google Account you use on the phone.
2. Back up photos, messages, and authenticator codes. Beta builds can fail, and leaving later can require a wipe if you install the wrong follow-up update.
3. Open [g.co/androidBeta](https://g.co/androidBeta) on a browser signed into that account. Opt the Pixel in.
4. On the phone, go to **Settings > System > System update** and tap **Check for update**.
5. Install **DP11.260918.005** on a Pixel 11 series device, or **DP11.260918.006** on other supported Pixels. Let the phone reboot.
6. Open **Settings > About phone** and confirm the build string. Play services should report 26.32.34 after the update settles.

Already enrolled from QPR2? Check for an update. You do not need to opt in again. 9to5Google notes that people who want the public Android 17 QPR2 release instead should opt out and skip this QPR3 Beta 1 package. Installing it, then leaving, is the path that can force a data wipe.

## Flash only if you need a clean image

Developers who reinstall often can use Android Flash Tool in Chrome or Edge 79 or newer. USB debugging must be on, and the bootloader must be unlocked. Unlocking wipes the phone.

Connect the Pixel, then open the QPR3 Beta 1 preview target:

`https://flash.android.com/preview/cinnamonbun-qpr3-beta1`

Follow the on-screen WebUSB prompts. After a successful flash, the device joins the Android Beta for Pixel program and receives later beta OTAs until you unenroll.

Manual factory images are on the Android Developers QPR3 download page. Match the zip to the device. Pixel 11 series files use build **005**. Everything else in this drop uses **006**. Verify the published SHA-256 before you flash. Google's own instructions say to back up first, because a factory flash resets the device.

To return to a public build, use [flash.android.com/back-to-public](https://flash.android.com/back-to-public) or a factory image from the public Pixel image site. That path also wipes user data.

![Person testing a mobile app on a laptop and phone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## What app developers should retest

There is no new SDK contract in this beta. Still retest the bugs Google says it fixed, because several sit on the app boundary:

- Foreground services started from a Quick Settings tile. That path crashed before this build.
- Calls placed immediately after reboot. Calling apps hit `ForegroundServiceStartNotAllowedException`.
- Audio routing in apps that do not publish active media controls.
- Non-ASCII tags in `MediaPlayer` audio attributes. Those tags crashed playback.
- Camera preview on an external display while the phone is in desktop mode. The feed could be rotated 90 degrees.
- Front-camera capture while screen recording is running.
- Recent-app snapshots and launcher icon spacing.

Emulator system images are available for x86 64-bit and ARM v8-A if you do not want to put a personal Pixel on the beta. File anything still broken from the Android Beta Feedback app on the device, or from Quick Settings.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/kNmyUU6uURE"
    title="Android 17 AOSP is here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you opt in

Keep a second phone if this Pixel is your only authenticator or bank-app device. Beta modem and eSIM fixes are useful, but a bad flash still leaves you offline.

Do not expect a newer security patch. Both QPR3 Beta 1 builds stay on the August 5, 2026 patch level. If your threat model depends on the latest bulletin, wait for a later beta or the stable Feature Drop.

Pixel 11 owners should confirm they received **005**, not **006**. Mixing factory zips across Tensor generations is a fast way to fail a flash.

Report regressions with steps, the build string, and a bugreport. The fixed list is long, so a new crash in fingerprint, Face Unlock, or cellular is worth a tracker issue rather than a forum post alone.

Stable QPR3 is expected later as a Pixel Feature Drop, with reporting pointing at March 2027. Google has not published that date on the QPR3 release notes, so treat March as a schedule estimate, not a commitment.

## Conclusion

Android 17 QPR3 Beta 1 is a repair release. Install it over the air if your Pixel is already in the beta program and you can live with preview risk. Flash `cinnamonbun-qpr3-beta1` only when you need a known image and you have a backup. Check the build string after reboot, keep the August security patch in mind, and retest call, camera, and Quick Settings tile paths if you ship an app.

## Sources

- Android Developers, [Android 17 QPR3 Beta 1 release notes](https://developer.android.com/about/versions/17/qpr3/release-notes), updated October 2, 2026.
- Android Developers, [Factory images for Google Pixel (QPR3)](https://developer.android.com/about/versions/17/qpr3/download), updated October 2, 2026.
- Android Developers, Android 17 AOSP overview video, YouTube, June 18, 2026.
- 9to5Google, coverage of the October 2, 2026 Pixel rollout and observed interface changes.
