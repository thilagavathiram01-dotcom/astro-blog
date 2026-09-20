---
title: "How to Lock Quick Settings on Android Canary 2609"
description: "Android Canary 2609 adds Require unlock for Quick Settings on Pixel. Learn which tiles stay locked, how to turn the switch on, which phones get the build, and why Canary is not a daily driver."
pubDate: 2026-09-20T19:30:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&h=900&q=80"
---

A locked Pixel still lets anyone pull down the shade and flip Wi-Fi, Bluetooth, mobile data, or Airplane Mode. That is convenient when the phone is yours. It is a problem if the phone is borrowed, left on a table, or stolen — those four tiles can cut the radio path that Find Hub and network-based tracking rely on.

**Android Canary 2609** (build **ZP11.260821.010**, September 2026 security patch) previews a fix: **Require unlock for Quick Settings**. The toggle is off by default. This guide explains what it actually blocks, how to turn it on if you are already on Canary, which Pixels received the build, and why you should not flash Canary onto the phone you use every day.

![Person using a smartphone with the lock screen visible](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80)

## What landed in Canary 2609

Google posted the 2609 drop to the [Android Canary community](https://www.reddit.com/r/android_canary/) on 16 September 2026. Independent reports from [9to5Google](https://9to5google.com/2026/09/16/android-canary-2609/) and [Android Authority](https://www.androidauthority.com/android-canary-2609-3712140/) match on the important bits:

- Build ID: **ZP11.260821.010**
- Includes the **September 2026** security patch
- New lock-screen switch: **Require unlock for Quick Settings**
- Protected tiles: **Wi-Fi, Bluetooth, Mobile data, Airplane Mode**
- Unprotected tiles still work from the lock screen: flashlight, rotation, Dark theme, and similar utilities
- The shade itself still opens while the phone is locked; only those four tiles ask for PIN, pattern, password, or biometrics
- Pixel 11 series is **not** on 2609; Google said support comes in the next Canary
- Pixel 6 and Pixel 6 Pro are **no longer** on the Canary device list; Pixel 6a still is

Canary is not Android 17 QPR1 or QPR2. It is a separate rolling preview channel that sits ahead of beta. Features can appear, change wording, or vanish before a public release.

## Why the four tiles matter

Stock Android has long treated Quick Settings as a convenience layer, not a security boundary. A thief who has the handset but not the PIN can still:

- Turn on **Airplane Mode** so the phone drops cellular and Wi-Fi
- Disable **mobile data** or **Wi-Fi** so location pings stall
- Pair a new **Bluetooth** accessory or disconnect yours
- Join a different **Wi-Fi** network

None of those actions unlock apps, photos, or payments. They only change radios. That is enough to make remote lock and tracking slower. Samsung’s One UI already offered a “lock network and security” style control on some lock screens. Pixel users have asked for a first-party equivalent for years.

Google’s Canary wording is explicit: “To prevent unauthorized changes, you must unlock your device to use Wi-Fi, Bluetooth, Mobile Data, and Airplane Mode.” That is the middle ground earlier Canary strings hinted at — not a total shade lock, and not flashlight-only.

## Devices on Canary 2609

According to the 2609 device list reported with the drop:

- Pixel 10a, Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL, Pixel 10 Pro Fold
- Pixel 9a, Pixel 9, Pixel 9 Pro, Pixel 9 Pro XL, Pixel 9 Pro Fold
- Pixel 8a, Pixel 8, Pixel 8 Pro
- Pixel 7a, Pixel 7, Pixel 7 Pro
- Pixel 6a
- Pixel Fold
- Pixel Tablet

Not on this build: **Pixel 11 family** (next Canary), **Pixel 6 / Pixel 6 Pro** (dropped from Canary).

If Settings → About phone does not show **ZP11.260821.010**, you do not have the switch yet.

## How to turn on Require unlock for Quick Settings

You must already be on Android Canary 2609. The path reported by testers is:

1. Open **Settings**.
2. Go to **Display & touch → Lock screen**.
   Some write-ups also list **Security & privacy → Device unlock** as an alternate landing spot while the UI is still moving.
3. Find **Require unlock for Quick Settings**.
4. Turn it **on**.
5. Lock the phone.
6. Pull down Quick Settings from the lock screen.
7. Tap **Wi-Fi**, **Bluetooth**, **Mobile data**, or **Airplane Mode**.
8. Confirm that a PIN, pattern, password, or biometric prompt appears before the tile flips.

Flashlight and similar tiles should still toggle without unlocking.

If the switch is missing, you are on a different channel (stable Android 17, QPR beta) or an older Canary. Do not hunt for a hidden developer option — this control is not shipping on public Android 17 QPR1 as of 20 September 2026.

![Lock screen and notification shade on a phone on a wooden desk](https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1400&q=80)

## How this behaves in daily use

**What still works locked**

- Opening the Quick Settings panel
- Reading status icons
- Flashlight
- Auto-rotate
- Dark theme and other non-radio tiles called out in the 2609 notes

**What now asks for unlock**

- Wi-Fi on/off and network picking from the tile
- Bluetooth on/off
- Mobile data on/off
- Airplane Mode

That split is the point. You can still light a dark hallway without unlocking. You cannot silently cut the radios.

**What it does not do**

- It is not Lockdown mode. Biometrics still work unless you enable lockdown separately.
- It does not hide notification contents. Use lock-screen notification privacy for that.
- It does not stop a long-press power-off on hardware that still allows it.
- It is not Find Hub, Identity Check, or Theft Protection. Keep those on.

Pair the new switch with the rest of Pixel’s theft stack: a long PIN, Find Hub / Find My Device, Identity Check where available, and lock-screen notification hiding.

## Should you install Canary to get this?

Almost certainly **no**, if this is your only phone.

Google’s [Android Canary](https://developer.android.com/about/canary) page is blunt: expect issues and breaking changes; Canary “won’t be the best choice to use as a primary or only device.” The 2609 community note repeats that Canary builds are highly experimental and not recommended for general use.

Other costs of joining Canary:

- You flash through the [Android Flash Tool](https://flash.android.com/), not a one-tap “join beta” button.
- After you are on Canary, OTAs keep you there. You do **not** automatically roll to the next public beta or stable.
- Leaving Canary means flashing a beta or public image and **wiping the device**.
- Apps, banking tools, and Play features can break without warning.

Use Canary on a spare Pixel or the emulator if you develop apps or test platform behavior. Wait for the lock-screen switch on beta or stable if you only want the security control.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/D4jw3fLk8ZQ" title="How to strengthen lock screen PIN protection on Android 17 Pixel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## How to join or leave Canary (only if you accept the wipe)

Official path from Android Developers:

1. Back up the Pixel. Treat the next steps as a factory reset risk.
2. Enable **Developer options**, **OEM unlocking**, and **USB debugging**.
3. On a desktop Chrome or Edge session, open the [Android Flash Tool](https://flash.android.com/).
4. Connect the phone, allow USB debugging.
5. Choose a **Canary** image for your model.
6. Read the wipe / bootloader options before you confirm **Install**.
7. Keep the cable connected until the tool finishes.

After a successful flash, the phone is enrolled in the Pixel Canary channel and receives later 26xx builds over the air.

To leave: flash a **Beta** or **public** image with the same tool. Google documents that returning to those channels requires a data wipe.

Pixel 11 owners should wait for the Canary release Google already flagged as the one that adds that family. Flashing a 2609 image meant for Pixel 10-class hardware onto a Pixel 11 is not a supported workaround.

## What to watch next

This is a **preview**. String resources earlier in Canary 2608 described two different policies — lock every tile except flashlight, versus lock only the four radio tiles. 2609 shipped the four-tile version. Either policy could still change before a quarterly Pixel Drop or an Android 17 QPR.

Until Google documents the switch on a stable Settings help page, treat third-party screenshots as snapshots of one Canary build, not a contract.

If you are on public Android 17 today and want similar protection without Canary:

- Use **Lockdown** from the power menu when you hand the phone over
- Hide sensitive notification content on the lock screen
- Keep Find Hub and remote lock enabled
- On Samsung One UI, check **Secure lock settings → Lock network and security** if your model offers it

Those are the stable controls. Canary 2609 is the first clear look at a first-party Pixel equivalent for the radio tiles.

## Sources

- [Android Canary (Android Developers)](https://developer.android.com/about/canary)
- [Introducing the Canary channel (Android Developers Blog)](https://android-developers.googleblog.com/2025/07/android-canary.html)
- [Android Flash Tool](https://flash.android.com/)
- [Android Canary 2609 adds Require unlock for Quick Settings (9to5Google)](https://9to5google.com/2026/09/16/android-canary-2609/)
- [Android Canary 2609 arrives with lockable Quick Settings (Android Authority)](https://www.androidauthority.com/android-canary-2609-3712140/)
- [Android Canary community post for 2609](https://www.reddit.com/r/android_canary/comments/1wi5max/android_canary_2609_is_now_available/)
- [How Google previously described lock-screen Quick Settings strings (Android Authority teardown)](https://www.androidauthority.com/android-quick-settings-lock-screen-change-apk-teardown-3695702/)
