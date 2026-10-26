---
title: "Lock Quick Settings Connectivity on Android 17 QPR3"
description: "Enable Lock Quick Settings connectivity on Android 17 QPR3 Beta 2 for Pixel to secure Wi-Fi, Bluetooth, Airplane Mode, and mobile data tiles."
pubDate: 2026-10-26T13:00:00
heroImage: "https://images.unsplash.com/photo-1772182125359-e472ca9b27c2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "pixel"]
noindex: false
---

Android 17 QPR3 Beta 2 adds a practical security control for Pixel users. The new Lock Quick Settings connectivity setting stops people from changing Wi-Fi, Bluetooth, Airplane Mode, or mobile data tiles while the phone is locked.

Thieves often swipe down the Quick Settings shade on a stolen phone and turn on Airplane Mode or disable mobile data. That cuts the device off from Find Hub and remote lock commands. With this toggle on, those connectivity tiles require an unlock first. Flashlight, auto-rotate, and battery saver tiles stay available without unlocking.

Google shipped the feature in the October 20, 2026 Beta 2 build (DP11.261002.005). It is not listed in the official release notes among the 21 bug fixes, but hands-on reports from 9to5Google, Android Authority, and Droid Life confirm it is present and working on enrolled Pixel devices.

## Why the setting matters

A locked phone that stays online gives you a better chance to locate it or wipe it remotely. Blocking the most common offline tactics closes a long-standing gap. The change is opt-in, so you decide whether the extra unlock step is worth it for your threat model.

Other Quick Settings remain usable on the lock screen. That keeps everyday shortcuts like the flashlight ready while protecting the radios that matter for tracking.

![Pixel phone showing Quick Settings edit screen](https://images.unsplash.com/photo-1772182125359-e472ca9b27c2?auto=format&fit=crop&w=800&q=80)

## How to enable Lock Quick Settings connectivity

You need a Pixel running Android 17 QPR3 Beta 2 and enrolled in the Android Beta Program. The setting is off by default.

1. Open Settings.
2. Go to Display & touch > Lock screen. You can also reach it under Security & privacy > Device unlock.
3. Find Lock Quick Settings connectivity and turn it on.

The exact label can vary slightly between builds. Search Settings for “Quick Settings” if you do not see it immediately. Once enabled, swiping down from the lock screen and tapping a connectivity tile prompts for your PIN, pattern, password, fingerprint, or face unlock.

Test it right away. Lock the phone, pull down Quick Settings, and try toggling Wi-Fi or Airplane Mode. You should see an unlock prompt. Flashlight should still work without authenticating.

![Android phone security interface with shield icon](https://images.unsplash.com/photo-1778585038201-f0f83bbcc01b?auto=format&fit=crop&w=800&q=80)

## Tips for daily use

Enable the setting if you carry your phone in public or leave it unattended briefly. It adds almost no friction for you—biometrics unlock it instantly—while raising the bar for someone who picks it up.

Pair it with other Android theft protections. See our guide on [Android theft protection setup](/blog/android-theft-protection-setup/) for Identity Check, Theft Detection Lock, and related options. Keep Find Hub active and make sure the phone can receive commands.

If you frequently enable Airplane Mode for flights, expect the extra unlock step. Most people find the trade-off acceptable. You can turn the setting off at any time from the same menu.

Beta software can change. Google may refine the wording or default behavior before the QPR3 stable release expected in early 2027. Check for updates in Settings > System > System update after installing Beta 2.

## Video walkthrough

Watch this overview of Android 17 QPR3 Beta 2 changes, including stability fixes that landed alongside the new connectivity lock.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yfQW5oDkgcU"
    title="Android 17 QPR3 Beta 2 Is Here! What's New?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Lock Quick Settings connectivity is a small but useful addition in Android 17 QPR3 Beta 2. It specifically targets the tiles thieves use to take a stolen Pixel offline, while leaving lower-risk controls accessible. Enable it under Lock screen or Device unlock settings, test the behavior, and combine it with the rest of Android’s theft protections for stronger coverage.

## Sources

- Android Authority: Latest Android 17 beta fixes a major Quick Settings security issue (October 21, 2026)
- Droid Life: New Android 17 Update Adds Security Setting (October 20, 2026)
- 9to5Google: Android 17 QPR3 Beta 2 for Pixel rolling out with 21 fixes (October 20, 2026)
- Android Developers: Android 17 QPR3 release notes
