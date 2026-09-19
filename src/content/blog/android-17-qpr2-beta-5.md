---
title: "How to Install Android 17 QPR2 Beta 5 on Pixel and What It Fixes"
description: "Install Android 17 QPR2 Beta 5 on Pixel 6a through Pixel 11: build numbers, OTA steps, call-forwarding USSD changes, and the eight official bug fixes from Google's September 2026 release notes."
pubDate: 2026-09-19T21:00:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1400&q=80"
---

Android 17 QPR2 Beta 5 is the September 2026 preview build for enrolled Pixel phones and tablets. Google published the release notes on 15 September 2026. The drop is a **fix cycle**, not a new API wave: eight user-visible bugs, a call-forwarding USSD restriction that started earlier in QPR2, and two factory/OTA images depending on which Pixel you own.

This guide follows [Android 17 QPR2 release notes](https://developer.android.com/about/versions/17/qpr2/release-notes) and the [Get Android 17](https://developer.android.com/about/versions/17/get) enrollment path. Treat third-party UI galleries as optional color, not the spec.

![Person holding a Pixel-style Android phone](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80)

## What Beta 5 actually is

QPR means **Quarterly Platform Release**. Android 17 shipped earlier in 2026. QPR2 is the next quarterly slice: it ships to AOSP and to Pixels as part of Feature Drops when it goes stable. Google says QPR2 includes a **minor SDK** (API 37.2) with no planned behavior changes for most apps. You still test if you use telephony USSD, Private Space, Bluetooth audio, or camera panorama.

Official metadata for Beta 5:

| Field | Value |
| --- | --- |
| Release date | 15 September 2026 |
| Builds | `CP41.260828.004.A8` and `CP41.260828.005.A6` |
| Security patch | 2026-08-05 |
| Google Play services | 26.28.33 |
| Emulator | x86_64 and ARM v8-A |

9to5Google and Android Authority match Google on the split: **`.005.A6`** for Pixel 6a, Pixel 7 / 7 Pro / 7a, Pixel Fold, and Pixel Tablet; **`.004.A8`** for every other supported Pixel, including Pixel 8 through Pixel 11 series.

## Supported devices

Google's factory-image and OTA lists for this beta cover:

- Pixel 6a
- Pixel 7, Pixel 7 Pro, Pixel 7a
- Pixel Fold, Pixel Tablet
- Pixel 8, Pixel 8 Pro, Pixel 8a
- Pixel 9, Pixel 9 Pro, Pixel 9 Pro XL, Pixel 9 Pro Fold, Pixel 9a
- Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL, Pixel 10 Pro Fold, Pixel 10a
- Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, Pixel 11 Pro Fold

Pixel 6 and Pixel 6 Pro are **not** on the QPR2 Beta 5 device list used by current coverage. Confirm your model on [android.com/beta](https://www.android.com/beta/) before you enroll a daily driver.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/8rbub6oDBtg" title="Android 17 AOSP is here — Android Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Install with the Android Beta for Pixel program

OTA is the supported path for testers who are not flashing factory images.

1. Back up the phone (Photos, Drive, a local copy of anything that is not in the cloud).
2. Open [android.com/beta](https://www.android.com/beta/) on a desktop browser and sign in with the Google account on the Pixel.
3. Enroll that exact device. Google will start offering QPR2 betas over the air.
4. On the phone go to **Settings → System → Software update** (wording can be **System update**).
5. Download and install. Expect a reboot.
6. After boot, open **Settings → About phone** and confirm the build is `CP41.260828.004.A8` or `CP41.260828.005.A6`.

Enrollment itself does not always wipe. Leaving the beta later **can** require a factory reset when the program ends or when you opt out onto a build that is older than your current one. Read the opt-out warning on the beta site before you tap Join.

## Flash or sideload if you need a clean image

Developers who want a known-good image can use:

- [Android Flash Tool](https://flash.android.com/) with the device in fastboot
- Pixel factory images from Google's image pages
- Full OTA packages if you sideload in recovery

Factory flash **wipes** unless you explicitly keep userdata and the tool allows it. Do not mix a QPR2 beta bootloader with a stable userdata partition unless you know how to recover from a boot loop.

Emulator images for x86_64 and ARM v8-A are listed in the same release notes. Use those for app compatibility instead of a personal phone if you only need to test USSD or Private Space unlock.

![Developer desk with Android phone and laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80)

## The eight official Beta 5 fixes

Copied from Google's "Top Issues fixed in Beta 5" list so you can match a bug you already filed:

- Bluetooth device type changes in Settings did not update the icon. (Issue 516071134)
- Unexpected reboots while continuously scrolling UI in media-heavy apps. (Issue 544291113)
- Hardware volume buttons while casting did not show the system volume slider. (Issue 548145018)
- Search-field text drew a stray highlight; Private Space sometimes failed to unlock because of a navigation routing bug. (Issue 548285596)
- Enhanced HDR stayed on after you turned it off. (Issue 547457910)
- Power-button shortcut to Google Wallet left the touchscreen unresponsive. (Issue 549758084)
- Camera crashed while processing panorama. (Issue 551069625)
- Bluetooth audio was noisy or distorted after you finished or answered a call. (Issue 541684282)

If your daily pain is "phone reboots in Photos or YouTube while I fling the feed," Beta 5 is the build that claims that stack. If your pain is Wallet from the power menu freezing touch, same list.

## Call-forwarding USSD: what apps and users should do

QPR2 hardens **programmatic call forwarding**. This is not unique to Beta 5; it is a QPR2 platform change documented on the same notes page.

- `TelephonyManager.sendUssdRequest()` may no longer run call-forwarding codes such as `*21#` with only the `CALL_PHONE` permission.
- Background attempts get `USSD_ERROR_NOT_ALLOWED`.
- If you type a forwarding code in the **system dialer**, Android shows an OS confirmation dialog before the network command runs.
- Non-forwarding USSD (balance checks, many mobile-money codes) is documented as unaffected.

App mitigation from Google: handle the error callback, and for setup flows that are not in an exempted role, switch to `ACTION_DIAL` so the user confirms in the dialer.

If you maintain a carrier or device-care app that silently sets forwarding, test on this beta before QPR2 ships stable (Google's QPR cadence points at a later Feature Drop, commonly discussed as a December window — treat that date as planning, not a published ship clock unless Google posts one).

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Utmu5Sk3G54" title="Android 17 Deep Dive: Bubbles, Gaming Upgrades, and Privacy Features" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## What Beta 5 does not promise

- It is **not** the stable December-style Feature Drop. It is a preview.
- Security patch on the notes table is still **2026-08-05**, not the September bulletin date. Do not assume Beta 5 equals the September Android Security Bulletin on every CVE.
- UI experiments reported by 9to5Google (duplicate Proactive Assistance rows, Quick Settings audio-stream tile, layout customization missing) are **not** in Google's Beta 5 issue list. They may be Pixel-only flags. Do not write app logic against them until they appear in a stable Feature Drop post.

## After you install

1. Make a test call on Bluetooth and confirm audio is clean when the call ends.
2. Open Wallet from the power menu if you use that shortcut; confirm touch still works.
3. Shoot a short panorama and wait for stitch to finish.
4. If you use Private Space, lock and unlock it twice.
5. Cast a video, press volume, and confirm the slider appears.
6. File anything still broken on the [Android issue tracker](https://issuetracker.google.com/) with the exact build string.

Opt out only from the beta site, then wait for the rollback OTA. Do not downgrade by flashing an older factory image over a newer bootloader unless you accept a wipe.

## Conclusion

Android 17 QPR2 Beta 5 is the mid-September Pixel preview that targets reboots in media apps, Wallet touch lockups, panorama crashes, Bluetooth distortion after calls, and a handful of UI mismatches. Enroll at [android.com/beta](https://www.android.com/beta/), match your build to `CP41.260828.004.A8` or `.005.A6`, and test telephony USSD if your app still sends forwarding codes in the background.

Use Google's release notes as the source of truth. Everything else is a screenshot from one tester's Quick Settings panel.

## Sources

- [Android 17 QPR2 release notes](https://developer.android.com/about/versions/17/qpr2/release-notes) — Android Developers (updated 16 September 2026)
- [Android 17 QPR2 overview](https://developer.android.com/about/versions/17/qpr2) — Android Developers
- [Get Android 17](https://developer.android.com/about/versions/17/get) — Android Developers
- [Android Beta Program](https://www.android.com/beta/) — Google
- [TelephonyManager.sendUssdRequest](https://developer.android.com/reference/android/telephony/TelephonyManager#sendUssdRequest(java.lang.String,%20android.telephony.TelephonyManager.UssdResponseCallback,%20android.os.Handler)) — Android Developers
