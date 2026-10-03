---
title: "Android 17 QPR2 Beta 6.1: Install and Fixes on Pixel"
description: "Install Android 17 QPR2 Beta 6.1 on Pixel: build IDs, OTA steps, Beta 6 bug fixes, and the Pixel 11 Pro Fold Face Unlock note."
pubDate: 2026-10-03T10:00:00
heroImage: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "tutorials"]
noindex: false
---

Android 17 QPR2 Beta 6.1 is the late-September Pixel preview that follows Beta 6 by five days. Google published both drops on the [QPR2 release notes](https://developer.android.com/about/versions/17/qpr2/release-notes). Beta 6 (24 September 2026) lists six user-visible fixes. Beta 6.1 (29 September 2026) adds two builds and one known issue: Pixel 11 Pro Fold users may have to re-enroll Face Unlock.

If you already ran [Android 17 QPR2 Beta 5](/blog/android-17-qpr2-beta-5/), this is the next OTA on the same track, not a new API release. QPR2 still uses a minor SDK (API 37.2) with no planned behavior changes for most apps.

![Android phone held above a desk](https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80)

## What Beta 6 and Beta 6.1 are

QPR means Quarterly Platform Release. Android 17 already shipped. QPR2 is the next quarterly slice, delivered to AOSP and to Pixel phones as a Feature Drop once it goes stable. Google ships beta images so you can test apps before that drop.

Official metadata from the release notes:

| Build | Date | Build IDs | Security patch | Play services |
| --- | --- | --- | --- | --- |
| Beta 6 | 24 September 2026 | `CP41.260831.007` | 2026-08-05 | 26.28.33 |
| Beta 6.1 | 29 September 2026 | `CP41.260831.007.A3` and `CP41.260831.011` | 2026-08-05 | 26.28.33 |

Emulator support for both drops is x86 (64-bit) and ARM (v8-A). The security patch level on the notes table is still 5 August 2026. Do not treat these betas as the September Android Security Bulletin.

[9to5Google](https://9to5google.com/2026/09/29/android-17-qpr2-beta-6-1/) reports the 6.1 split as `CP41.260831.011` for Pixel 11, 11 Pro, 11 Pro XL, and 11 Pro Fold, and `CP41.260831.007.A3` for the other enrolled devices. Confirm the string on your phone after install. Google's notes list both IDs without a per-model table.

## Supported Pixel devices

The [Get Android 17 QPR 2](https://developer.android.com/about/versions/17/qpr2/get) page lists OTAs and downloads for:

- Pixel 6a
- Pixel 7, Pixel 7 Pro, Pixel 7a
- Pixel Tablet and Pixel Fold
- Pixel 8, Pixel 8 Pro, Pixel 8a
- Pixel 9, Pixel 9 Pro, Pixel 9 Pro XL, Pixel 9 Pro Fold, Pixel 9a
- Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL, Pixel 10 Pro Fold, Pixel 10a
- Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, Pixel 11 Pro Fold

Pixel 6 and Pixel 6 Pro are not on that list. Check [android.com/beta](https://www.android.com/beta/) before you enroll a daily driver.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/kNmyUU6uURE"
    title="Android 17 AOSP is here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Install Beta 6.1 over the air

Enrollment is the supported path. Google says you usually do not need a data wipe to move onto the QPR2 beta, and still recommends a backup first.

1. Back up photos, messages, and anything that is not already in the cloud.
2. On a desktop browser, open [g.co/androidbeta](https://g.co/androidbeta) and sign in with the Google account on the Pixel.
3. Enroll that device. Opt in only if you accept preview bugs.
4. On the phone, open **Settings → System → Software update** (some builds say **System update**).
5. Download and install. The phone reboots.
6. Open **Settings → About phone** and match the build to `CP41.260831.007.A3` or `CP41.260831.011`.

If you were already on Beta 5 or Beta 6, the same enrollment should offer 6.1 without a new join step. Wait for the OTA rather than flashing an older image over a newer bootloader.

Leaving the program can require a factory reset once you are past the window where a stable build is equal to or newer than your beta. The Get page says you can opt out without a wipe for a limited time after you apply a stable release, until you take the next beta.

## Flash a system image or use the emulator

Developers who need a known image can use the [Android Flash Tool preview for QPR2 Beta 6.1](https://flash.android.com/preview/cinnamonbun-qpr2-beta6.1) or the Pixel downloads listed from the Get page. A factory flash wipes data unless you explicitly keep userdata and the tool allows it.

For app tests that do not need a personal phone:

1. Install Android Studio and open **Tools → Device Manager**.
2. Create a virtual device from a supported Pixel definition.
3. Download the Android 17 system image named **CinnamonBun**.
4. Start the emulator and install your app.

Generic system images are also available for Treble devices. Use them to find framework bugs, not as a daily Pixel replacement.

![Laptop and phone used for app testing](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Fixes listed for Beta 6

Google groups the user-visible fixes under Beta 6, dated September 2026. Beta 6.1 does not add a second fix list. These are the six items on the notes page:

- Letterboxed content leaked through the status bar during activity transitions. (Issue 493438057)
- The screensaver showed a blank screen while charging. (Issues 516262713 and 526560397)
- Pixel 9 Pro Fold rebooted when third-party apps initialized the camera viewfinder. (Issues 555960820, 558564487, 554763027, and 559421409)
- Locked apps in Recents could not be dismissed with a swipe. (Issue 555579953)
- A kernel crash rebooted the device when third-party apps asked for camera and microphone together during biometric identity checks. (Issue 557712189)
- Scrolling could crash, reboot, or hang the device. (Issue 559054323)

If a foldable camera preview or a locked Recents card was your Beta 5 complaint, Beta 6 is the build that claims those fixes. Re-test on 6.1 rather than assuming every unit picked up the patch.

## Known issue on Beta 6.1

The notes page has one known issue for Beta 6.1: **Pixel 11 Pro Fold users may have to re-enroll Face Unlock.**

If Face Unlock fails after the update, open face unlock settings and enroll again. Keep a PIN or pattern that you can type. Do not file this as a new platform regression until you have tried re-enrollment. Other models are not named in that note.

## Call-forwarding USSD still applies

QPR2 restricts programmatic call forwarding. This is a platform change for the whole beta track, not a Beta 6.1-only patch.

- `TelephonyManager.sendUssdRequest()` no longer runs call-forwarding codes such as `*21#` with only the `CALL_PHONE` permission.
- Background attempts get `USSD_ERROR_NOT_ALLOWED`.
- Codes typed in the system dialer show an OS confirmation dialog before they run.
- Non-forwarding USSD, including many balance checks and mobile-money codes, is documented as unaffected.

If your app sets forwarding, handle the error callback. For flows that are not an exempted role, Google says to use `ACTION_DIAL` so the user confirms in the dialer. Test that path on 6.1 before QPR2 ships stable.

## After you install

1. Confirm the build string under About phone.
2. On a Pixel 11 Pro Fold, lock the device and try Face Unlock. Re-enroll if it fails.
3. Open a third-party camera app on a Pixel 9 Pro Fold and start the viewfinder.
4. Lock an app, open Recents, and swipe it away.
5. Charge the phone with the screensaver on and confirm it is not a blank panel.
6. Scroll a long feed for a few minutes and watch for reboots.
7. File leftovers in the Android Beta Feedback app or the [issue tracker](https://issuetracker.google.com/) with the exact build ID.

## Conclusion

Android 17 QPR2 Beta 6.1 is the 29 September 2026 Pixel preview on builds `CP41.260831.007.A3` and `CP41.260831.011`. Install it from the Android Beta for Pixel program, then check Face Unlock on the Pixel 11 Pro Fold. The six fixes Google lists sit on the Beta 6 notes: status-bar letterboxing, a blank charging screensaver, Pixel 9 Pro Fold camera reboots, locked Recents cards, a camera-plus-mic kernel crash, and scroll hangs.

Use the [release notes](https://developer.android.com/about/versions/17/qpr2/release-notes) as the source of truth. Pair this drop with the [Beta 5 install guide](/blog/android-17-qpr2-beta-5/) if you need the earlier fix list.

## Sources

- [Android 17 QPR2 release notes](https://developer.android.com/about/versions/17/qpr2/release-notes) — Android Developers (updated 1 October 2026)
- [Get Android 17 QPR 2](https://developer.android.com/about/versions/17/qpr2/get) — Android Developers
- [Android 17 QPR2 overview](https://developer.android.com/about/versions/17/qpr2) — Android Developers
- [Android Beta Program](https://www.android.com/beta/) — Google
- [Android 17 QPR2 Beta 6.1 rolling out](https://9to5google.com/2026/09/29/android-17-qpr2-beta-6-1/) — 9to5Google, 29 September 2026
