---
title: "Android 17 OS Verification: Check Your Pixel Build"
description: "Use Android 17 OS verification on Pixel to confirm an official GMS build with a second device, QR codes, and boot hash checks."
pubDate: 2026-09-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "pixel", "how-to", "google"]
noindex: false
---

Modified Android images can copy official wallpapers and settings while hiding extra software. Android 17 adds **OS verification** so you can check that a Pixel still runs a widely distributed Google Mobile Services (GMS) build.

Google announced the tool in its May 2026 Android security and privacy recap. It launches first on Pixel. The check is meant for official GMS devices, not custom ROMs or forks.

You need two devices: the Pixel you want to inspect, and a second phone, tablet, or computer you already trust. The second device opens a browser page. The Pixel shares a QR code. You compare the results, including the boot hash.



![Laptop and phone used together for a security check](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## What Google says the feature proves

Google’s security post is direct. Some actors ship unofficial, modified OS copies that look like the real product. OS verification helps you confirm the phone is running an official, widely distributed Android build.

The on-device summary groups signals that used to sit in developer menus:

- Play Protect status
- Bootloader state
- Build number
- Device verification status

Pixel users also get the existing Pixel System Image Transparency work. Google pairs that with a public, append-only ledger for production Google apps and foundational GMS APIs. If a Google-signed app is not on that ledger, Google says it did not intend to release it.

This is a transparency check. It is not a full malware scan, and it does not replace Play Protect or [Advanced Protection](/blog/android-advanced-protection-setup/).

## What you need before you start

1. A Pixel on **Android 17** (stable or a later QPR that includes the screen).
2. A working screen lock on that Pixel.
3. A second device you trust: another phone, tablet, Chromebook, or a computer with a camera and a browser.
4. Internet access on both devices for the verify page.

Supported Pixel hardware for Android 17 OTAs includes Pixel 6 through Pixel 10a, Pixel Fold, Pixel Tablet, and the Pixel 9 and Pixel 10 Pro Fold models. Confirm **Settings → About phone → Android version** before you hunt for the new tile.

If search cannot find the page, the feature may still be rolling out on that build. Google listed Pixel as the first wave, not a same-day launch on every OEM skin.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Utmu5Sk3G54"
    title="Android 17 Deep Dive: Bubbles, Gaming Upgrades, & Privacy Features"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Find OS verification on the Pixel

Exact menu labels can move between QPR builds. Use Settings search first.

1. Open **Settings** and search for **OS verification**, **Verify Android**, or **Verify OS**.
2. If search misses it, open **Settings → About phone** and look for a verification or authenticity row near the build number.
3. Open the screen and read the short status card: Play Protect, bootloader, build number, and verification state.

If Play Protect is off or the bootloader is unlocked, treat that as a warning before you even start the two-device flow. An unlocked bootloader is common on developer units and custom images. It is not proof of malware by itself, but it is not the stock locked state Google ships on retail Pixels.

## Run the two-device check

Google’s in-app strings, later shown in Android 17 QPR1 betas, describe a three-step handshake. Public teardowns of QPR1 Beta 5 match that flow.

**On the Pixel you are checking**

1. Open OS verification.
2. Choose **Verify with another device** (wording may read **Another device with a browser**).
3. Tap **I’m ready**.
4. Leave the QR code and URL on screen.

**On the trusted device**

1. Scan the first QR code, or type the URL shown on the Pixel (reports of the beta used **verify.android**).
2. Wait for the site to show a second, larger QR code.
3. Keep that page open.

**Back on the Pixel**

1. Scan the second QR code with the camera prompt on the verification screen.
2. Wait for the Pixel to show its summary, including the boot hash.
3. Look at the trusted device. It should show a matching analysis.
4. Compare the boot hash and build details on both screens. A match is the result you want.

Do not photograph the QR codes and send them to a stranger. The point of the second device is that *you* control both ends of the check.



![Two smartphones side by side during a setup handshake](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## How to read the result

**Match.** The Pixel and the trusted browser agree on the boot hash and build. Google’s check treated this as an official, widely distributed build for that device class.

**Mismatch or failed check.** Stop and treat the phone as untrusted until you can explain the difference. Common honest causes:

- You flashed a custom image or an unofficial GSI.
- The bootloader is unlocked and the build is not the production signed image.
- One device lost the network mid-handshake and showed a stale page.
- You compared two different phones by mistake.

**Custom ROMs.** Google’s announcement targets approved GMS devices. Independent reporting on the feature notes that GrapheneOS, LineageOS, and similar forks are outside the “official widely distributed GMS build” claim. A warning there can be expected. It is not a substitute for that project’s own auditor tools.

**Ledger for Google apps.** After the OS check, remember the separate public ledger for production Google applications. An app that claims to be a Google-signed GMS component but is missing from that ledger is not a release Google says it intended.

## Pair verification with other Android 17 locks

OS verification answers “is this the official image?” Other Android 17 controls answer “can a thief or a spoofed caller still abuse it?”

- [Advanced Protection](/blog/android-advanced-protection-setup/) keeps Play Protect on, blocks new unknown-source installs, and can add Intrusion Logging.
- [Theft protection setup](/blog/android-theft-protection-setup/) covers Theft Detection Lock, Offline Device Lock, and Find Hub **Mark as lost**. Android 17 lets you add a biometric requirement after you mark a phone lost, even if someone already has the PIN.
- Default-on theft protections expand on new, reset, or upgraded Android 17 devices. Some markets also get Remote Lock and Theft Detection Lock on older Android 10+ units.

Run OS verification first on a used Pixel you just bought. Then turn on Advanced Protection if you want the stricter app and USB rules.

## Tips that keep the check honest

Use a second device you already own. A seller’s “verification laptop” is not a trusted device.

Check **About phone** after the hash match. Confirm the build number still matches what the site printed.

If you service the phone or accept an OTA, run the check again. A new official build should still verify. A sideloaded modified image should not.

Do not disable Find Hub or lock-screen biometrics because a listing photo looks clean. OS verification does not recover a stolen device. It only tells you whether the software identity looks official.

Keep the Pixel on a current Android 17 QPR when Google ships one. Feature-drop builds are where the verification UI has been appearing in public betas.

## Conclusion

Android 17 OS verification gives Pixel owners a two-device way to confirm an official GMS build. Open the status card, complete the QR handshake with a device you trust, and compare the boot hash.

Use it when you buy a used Pixel, after a repair, or when a phone behaves like stock Android but you did not flash it yourself. Then keep Play Protect and theft locks on so the official image stays the image you boot.

## Sources

- [What’s New in Android Security and Privacy in 2026](https://blog.google/security/whats-new-in-android-security-privacy-2026/) — Google
- [Bringing binary transparency to the Android ecosystem](https://blog.google/security/bringing-binary-transparency-to-the-android-ecosystem/) — Google
- [Pixel binary transparency](https://security.googleblog.com/2023/08/pixel-binary-transparency-verifiable.html) — Google Security Blog
- [Get Android 17](https://developer.android.com/about/versions/17/get) — Android Developers
- [Android 17 Deep Dive: Bubbles, Gaming Upgrades, & Privacy Features](https://www.youtube.com/watch?v=Utmu5Sk3G54) — Android on YouTube
