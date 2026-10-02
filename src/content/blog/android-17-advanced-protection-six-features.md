---
title: "Set Up 6 New Advanced Protection Features on Android"
description: "Enable Android 17 Advanced Protection extras: Intrusion Logging, USB Protection, accessibility limits, WebGPU off, and failed-auth lock."
pubDate: 2026-10-02T11:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google", "pixel"]
noindex: false
---

Google added six security controls to Advanced Protection and documented them on October 1, 2026. Most land with Android 17. USB Protection and Failed Authentication Lock stay limited to select Android 17 devices, including Pixel 6 and later for USB Protection.

The base switch is still the same one covered in our [Advanced Protection setup guide](/blog/android-advanced-protection-setup/). These six items sit on top of that switch. Two of them need an extra opt-in. The rest follow Device protection once your phone is on Android 17 and the feature has reached your model.

Il-Sung Lee, Group Product Manager at Google, described the bundle as defenses for people who face scams, theft, and targeted attacks. The settings are available to any user who can find the page, not only journalists and public figures.

![Laptop on a desk with a lock icon on the screen](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Confirm Android 17 before you hunt for new tiles

Open **Settings → About phone** and check the Android version. Google’s October note is explicit: every feature in this round is for Android 17 devices, with two exceptions that are only on select Android 17 hardware.

If you are still on Android 16, you can turn on Device protection, but Accessibility Protection, the WebGPU block, and the supporting-apps list wait for Android 17. Update Play services from the Play Store, then search Settings for **Advanced Protection**.

Two paths still work across Pixel and many Samsung skins:

1. **Settings → Security and privacy → Advanced Protection** (often under Other settings).
2. **Settings → Google → All services → Personal and device safety → Advanced Protection**.

A screen lock is required before Device protection will turn on. Restart when the phone asks. Some protections wait for that reboot.

## 1. Opt in to Intrusion Logging

Intrusion Logging is the item Google calls a mobile industry first. It records security and network events so you can review a suspected compromise later. Logs are end-to-end encrypted, stored in the cloud, and readable only by you. Google keeps them for a rolling 12 months, then deletes them.

It does not turn on with Device protection alone. Open the Advanced Protection page and enable **Intrusion Logging** yourself. Pick the Google Account that should hold the encrypted backup when the wizard asks.

Android Help lists events such as app installs, updates, and uninstalls; Wi-Fi and Bluetooth start and stop; DNS lookups and IP addresses; USB file transfers; certificate changes; and lock or unlock events. Download a copy from **Settings → Security and privacy → Advanced Protection → Intrusion Logging → Access logs**. Steps can vary by skin.

When you turn logging off, collection stops and the phone uploads any unsent logs. Older logs stay for the 12-month window. Once you download and decrypt a file, you are responsible for that copy. If the toggle flips back off after a fingerprint prompt, update Play services and wait for the rollout. A factory reset will not force the backend on.

## 2. Use USB Protection on supported phones

USB Protection blocks a new USB data session while the screen is locked. The phone defaults to charging only for that new cable. A connection you started while unlocked keeps working after the screen locks, including Android Auto and a laptop photo transfer, until you unplug it.

Google says the feature is on Pixel 6 and later, plus select other Android 17 devices. It turns on automatically when Device protection is on, on hardware that supports it. Unlock the screen if a notification asks you to allow a data transfer.

Charging still works while locked. Google’s footnote warns that hardware differences can affect charging speed until you unlock. Do not expect this tile on every Android 17 phone.

## 3. Limit accessibility services to real tools

Apps that abuse the AccessibilityService API can read the screen, install more software, or block uninstall. On Android 17, Advanced Protection restricts that API to apps categorized as verified Accessibility Tools.

Turn on Device protection, reboot if asked, then open **Settings → Accessibility** and check which services are still allowed. TalkBack and other genuine tools should remain. A “cleaner,” overlay, or remote-control app that only worked by requesting full accessibility will fail until you leave the mode.

That is the trade-off. Test any third-party automation app that is not listed as an accessibility tool before you travel with the mode on.

![Person using a smartphone next to a hardware security key](https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80)

## 4. Accept the WebGPU block in Chrome

Android 17 disables WebGPU while Advanced Protection is on, on top of the Chrome hardening already in the mode. WebGPU is the browser API for high-performance graphics. Google’s reason is attack surface, not a content filter.

Most sites will not notice. A web app that renders 3D or runs a local GPU demo may fall back or fail. Test that site in another browser before you turn the whole mode off. Chrome’s JavaScript optimizer was already disabled under Advanced Protection; WebGPU is an extra cut on Android 17.

## 5. Turn on Failed Authentication Lock where it exists

Failed Authentication Lock is for repeated wrong unlock attempts inside Settings or secured apps. Google says the device locks down so probing stops. Android Help, under theft protection, describes the same idea: if the feature is on, the phone locks when authentication fails repeatedly.

Availability is select Android 17 devices only. Look under **Settings → Google → All services → Personal and device safety → Theft protection**, and also on the Advanced Protection page after the October update. If the switch is missing, your model does not have it yet.

Pair it with the standalone theft tools in our [theft protection setup](/blog/android-theft-protection-setup/). Theft Detection Lock and Offline Device Lock still matter if a thief grabs an unlocked phone. Failed Authentication Lock covers a different case: someone already holding the device and guessing a PIN or app lock.

## 6. Review which apps read the mode

Android 17 adds a transparency page that lists installed apps checking your Advanced Protection status. Those apps can tighten their own settings when the mode is on. Developers subscribe through the Advanced Protection Mode APIs and must declare `android.permission.QUERY_ADVANCED_PROTECTION_MODE`.

Open the Advanced Protection screen and look for the supporting-apps list. You are not granting those apps new message data. You are seeing which ones adapt when the mode is active. Unknown entries are a reason to check the app, not proof of a compromise.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7WrkPR1Jovs"
    title="How to set up Google’s Advanced Protection Program"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A practical order of operations

1. Update to Android 17 and the latest Play services.
2. Set a screen lock if you do not already have one.
3. Turn on **Device protection** and restart.
4. Manually enable **Intrusion Logging** if you want a 12-month encrypted record.
5. Confirm USB Protection on a Pixel 6 or newer by locking the phone and plugging in a new cable. You should get charge-only behavior until you unlock.
6. Recheck accessibility services and any web app that needs WebGPU.
7. Enable Failed Authentication Lock only if the tile is present.
8. Read the supporting-apps list once, then again after you install finance or mail apps.

Google says people who already use Advanced Protection get a notification when these capabilities arrive. You still have to open the page for Intrusion Logging. The other controls follow the mode or the hardware limit.

Advanced Protection is not a forensic lab and not a replacement for a passkey on your Google Account. The official Google video above walks through the account Advanced Protection Program, which is a separate enrollment from Device protection. You can run device mode without a hardware security key. Account protection on the same screen is optional.

The mode will not scan a stolen phone for you, and it will not stop a cable from charging the battery. It will not allow sideloaded accessibility tools to keep full screen access on Android 17. Leave the mode on if you want Play Protect locked, unknown-source installs blocked, and these Android 17 limits in one place. Turn it off only when a required app cannot run under those rules, then re-enable theft locks by hand.

## Sources

- [6 ways Advanced Protection on Android keeps you safe](https://blog.google/security/android-advanced-protection-updates/) — Google, October 1, 2026
- [Improve device security with Advanced Protection](https://support.google.com/android?p=advanced_protection) — Android Help
- [Log your Android device activity with Advanced Protection](https://support.google.com/android/answer/16927813) — Android Help
- [Protect your Android device from USB threats with Advanced Protection Mode](https://support.google.com/android/answer/16778864) — Android Help
- [Protect your personal data against theft](https://support.google.com/android/answer/15146908) — Android Help
- [Advanced Protection Mode](https://developer.android.com/privacy-and-security/advanced-protection-mode) — Android Developers
- [How to set up Google’s Advanced Protection Program](https://www.youtube.com/watch?v=7WrkPR1Jovs) — Google on YouTube
