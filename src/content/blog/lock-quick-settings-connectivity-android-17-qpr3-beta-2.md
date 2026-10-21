---
title: "How to Lock Quick Settings Connectivity on Android 17 QPR3 Beta 2"
description: "Enable the new Lock Quick Settings connectivity option in Android 17 QPR3 Beta 2 to protect Wi-Fi, Bluetooth, Airplane mode and mobile data on the lock screen."
pubDate: 2026-10-21T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "how-to", "security", "pixel", "tutorials"]
noindex: false
---

Google rolled out Android 17 QPR3 Beta 2 for Pixel devices on 20 October 2026. Among the changes is a practical security toggle that requires your phone to be unlocked before anyone can change key connectivity tiles from the lock screen.

The setting is called Lock Quick Settings connectivity. It covers Wi-Fi, Bluetooth, Airplane mode and mobile data. Other tiles such as flashlight, auto-rotate and battery saver stay available without unlocking.

This feature addresses a common tactic used when phones are lost or stolen. Thieves often swipe down and turn on Airplane mode or disable mobile data so the owner cannot track the device. Requiring an unlock adds a useful barrier while the phone is still locked.

![Smartphone held in hands](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What the setting does

When Lock Quick Settings connectivity is enabled, the four connectivity tiles on the lock screen Quick Settings panel require authentication before they can be toggled. You must use your PIN, pattern, password, fingerprint or face unlock.

The option first appeared in Android Canary builds earlier in 2026 and is now available to testers on the QPR3 Beta 2 channel. It is present on Pixel 6a and newer devices running build DP11.261002.005.

Non-connectivity tiles remain usable without unlocking the device, so everyday shortcuts are not blocked. The goal is targeted protection of the settings that affect network and radio connectivity.

## How to enable Lock Quick Settings connectivity

You need Android 17 QPR3 Beta 2 installed. If you are already enrolled in the Android Beta Program for Pixel, the update arrives over the air. See our guide on [installing Android 17 QPR3 Beta 2](/blog/android-17-qpr3-beta-2-pixel-install-fixes/) for enrollment steps if you are not yet on the beta.

1. Open the Settings app.
2. Go to Display & touch, then Lock screen. (Some reports also show it under Security & privacy > Device unlock.)
3. Find the toggle labelled Lock Quick Settings connectivity or “Require unlock to change Wi-Fi, Bluetooth, Airplane mode, or mobile data tiles”.
4. Turn the toggle on.

After enabling it, pull down the Quick Settings shade from the lock screen and try changing Wi-Fi or Airplane mode. The phone will prompt you to unlock before the change is applied.

![Android phone on a surface](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Why this matters for lost or stolen phones

Find My Device and location sharing depend on the phone remaining connected to the internet or cellular networks. If a thief can instantly disable those connections from the lock screen, the window for recovery shrinks.

With the new lock in place, the thief must first unlock the device. Combined with strong screen lock methods, this gives you more time to mark the device as lost, wipe it remotely or contact the carrier. It does not replace a PIN or biometric lock, but it reduces one easy action a thief can take while the phone is still locked.

Google has not announced when the feature will reach stable Android 17 or non-Pixel devices. As with other QPR features, it is likely to appear in later stable updates or on other manufacturers once they adopt the platform changes.

## Tips for using the feature

- Keep a strong screen lock. The connectivity lock only helps if the device itself is hard to unlock.
- Test it after enabling. Confirm that Wi-Fi, Bluetooth, Airplane mode and mobile data all require unlock, while flashlight does not.
- Combine it with other protections such as Advanced Protection or app pinning if you regularly hand your phone to others.
- Report any bugs through the Android Beta Feedback app. The beta still carries the usual stability risks.

If you are on an earlier beta or stable build, the toggle will not appear until you receive the QPR3 Beta 2 update or a later release that includes it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yfQW5oDkgcU"
    title="Android 17 QPR3 Beta 2 Is Here! What's New?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Lock Quick Settings connectivity is a small but practical addition in Android 17 QPR3 Beta 2. It raises the bar for anyone who gets hold of a locked Pixel and tries to take it offline. Enable it if you are on the beta and want an extra layer of protection for the connectivity controls that matter most when a device goes missing.

The feature is still in beta, so behaviour may change before it reaches stable. For now, Pixel testers can turn it on today and verify it works with their preferred unlock method.

## Sources

- [Android 17 QPR3 Beta 2 release notes and fixes](https://developer.android.com/about/versions/17/qpr3/release-notes) — Android Developers
- [Here’s everything new in Android 17 QPR3 Beta 2](https://9to5google.com/2026/10/20/android-17-qpr3-beta-2-everything-new/) — 9to5Google, 20 October 2026
- [Latest Android 17 beta fixes a major Quick Settings security issue](https://www.androidauthority.com/android-17-qpr-3-beta-2-lock-quick-settings-tiles-3725896/) — Android Authority, 21 October 2026
