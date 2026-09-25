---
title: "How to Turn On Advanced Protection on Android 16+"
description: "Enable Android Advanced Protection, lock Play Protect, block sideloading, and add optional Intrusion Logging on Pixel and Galaxy phones."
pubDate: 2026-09-25T12:00:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google", "pixel"]
noindex: false
---

Android already ships with Play Protect, lock-screen PIN rules, and theft locks. **Advanced Protection** stacks those tools so they stay on together and cannot be switched off one by one after a theft or a phishing prompt.

Google’s Android Help page describes the mode as the strongest security and privacy bundle for the device: apps, theft locks, unsafe-link warnings, 2G blocking, and Chrome hardening. It is off by default. You turn on **Device protection**, confirm, and restart.

This guide follows that Help article plus the Account Help page for Android devices. It is not the same as the older Advanced Protection Program that required a hardware security key for a Google Account, though you can still add **Account protection** on the same screen.



![Person locking a smartphone with a fingerprint sensor](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)



## What the mode actually changes

Android Help groups the controls into a few buckets. You do not pick them one at a time after Device protection is on.

**Apps**

- Play Protect stays on and cannot be turned off while the mode is active.
- New installs from unknown sources are blocked. Updates for apps you already sideloaded are also blocked.
- On hardware that supports it, Memory Tagging Extension (MTE) turns on for supported apps so memory-corruption bugs are harder to exploit.

**Device safety**

- Theft Detection Lock can lock the phone if sensors see a grab-and-run motion.
- Offline Device Lock can lock an unlocked phone that stays offline for a long stretch.

Those two theft tools also live as standalone settings. Pair this article with our [Android theft protection setup](/blog/android-theft-protection-setup/) if you want the individual tiles without the full bundle.

**Messages, radio, and browser**

- Google Messages can warn about links from unknown senders.
- Supported devices stop joining 2G networks, which lack modern encryption.
- Chrome turns off its JavaScript optimizer to shrink one class of exploit surface.

USB Protection, documented in a separate Help article, blocks new USB *data* sessions while the screen is locked. Charging still works. A cable you plugged in while unlocked can keep talking until you unplug it.

## Check that your phone can use it

1. Open **Settings → About phone** and confirm **Android 16** or **Android 17**.
2. Set a screen lock (PIN, password, or pattern). Help and Pixel walkthroughs treat a lock as required.
3. Update **Google Play services** from Play Store.
4. Search Settings for **Advanced Protection**.

If search finds nothing, try both official paths that Google and OEM skins still show:

- **Settings → Security and privacy → Advanced Protection** (often under **Other settings**)
- **Settings → Google → All services → Personal & device safety → Advanced Protection**

Samsung One UI and other skins keep the Google services page even when Security and privacy uses different labels. A missing page after an Android 16 upgrade usually means Play services or the OEM overlay has not landed yet.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UUe0cIVU3ns"
    title="How To Turn On Advanced Protection On Android (2026)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn Device protection on

1. Open the Advanced Protection screen.
2. Turn on **Device protection**.
3. Read the summary sheet and tap **Turn on**.
4. Authenticate with PIN, password, or biometrics if asked.
5. Restart when the phone offers **Restart now**. Use **Restart later** only if you cannot reboot immediately; some protections wait for that reboot.

After reboot, open the same page and confirm Device protection stays on. Play Protect should no longer offer an off switch.

## Optional: Intrusion Logging

Android Help documents **Intrusion Logging** as an extra switch inside Advanced Protection. It records device and network events (including when app processes start) so you or a trusted examiner can review a suspected compromise later.

Logs are end-to-end encrypted on the device, then stored on Google servers. Your Google Account password and screen lock protect the keys. Google says previously collected logs remain for **12 months** after you turn logging off. You are responsible for any copy you download and decrypt.

Setup during Device protection enrollment:

1. When the wizard offers Intrusion Logging, choose enable or skip. Skip is valid.
2. If you enable it, pick the Google Account that will hold encrypted backups.
3. Later, open **Settings → Security and privacy → Advanced Protection → Intrusion Logging → Access logs** to download.

If the toggle flips back off after a fingerprint prompt, the backend flag may still be rolling out. Help and community threads treat that as a server-side wait, not a factory-reset problem.



![Close-up of a phone screen showing a lock and security interface](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)



## Optional: Account protection

The same Advanced Protection page can offer **Account protection**. That path tightens the Google Account itself (passkeys, recovery email, extra review of risky apps) and is documented in Google Account Help for Android devices.

Device protection and Account protection are related but not identical. You can run device mode without joining the older hardware-key Advanced Protection Program. If you already use passkeys on the phone, review [Android passkey and password manager transfer](/blog/android-passkey-password-manager-transfer/) before you change recovery options.

## Trade-offs you should accept first

**Sideloading stops.** APKs from browsers, Telegram, and “update this app” sites will fail. Plan to use Play Store or another source Google still allows on that device.

**Existing sideloaded apps stay.** Help is explicit: apps already installed from outside Play are not removed. They also stop receiving updates from those unknown sources.

**2G is gone.** Rural or travel SIMs that fall back to 2G will not attach. That is the point of the radio control.

**USB data needs an unlocked screen.** Android Auto that you started while unlocked can keep running. A new data session while locked will not.

**Chrome behavior changes.** Sites that depend on the optimizer are rare; if a web app breaks, test in another browser before you disable the whole mode.

**Work profiles and admin policy** can hide or force the switch. A company phone may show Advanced Protection as locked.

## Turn it off without leaving gaps

1. Return to **Advanced Protection**.
2. Turn **Device protection** off and confirm.
3. Restart if prompted so Play Protect and unknown-sources rules revert cleanly.
4. Revisit **Settings → Security and privacy** and confirm Theft Detection Lock and Offline Device Lock still match what you want.

Do not leave theft locks off after a test. Those two features still help if you decide the full bundle is too strict for sideloaded tools you need.

## A short setup checklist

- Android 16 or 17, current Play services, working screen lock
- Device protection on, phone rebooted
- Decide yes or no on Intrusion Logging before you need forensics
- Account protection only if you also want tighter Google Account rules
- Private DNS still separate; see [Android Private DNS and ECH](/blog/android-private-dns-ech/) if you want encrypted DNS on top of this mode

Advanced Protection is one switch, not a new operating system. Turn it on when you want Play Protect, unknown-source blocks, theft locks, and link warnings to stay aligned. Leave it off only if you regularly install builds from outside Play and you already manage those risks by hand.

## Sources

- [Improve device security with Advanced Protection](https://support.google.com/android?p=advanced_protection) — Android Help
- [Use Advanced Protection with Android devices](https://support.google.com/accounts/answer/9764949) — Google Account Help
- [Log your Android device activity with Advanced Protection](https://support.google.com/android/answer/16927813) — Android Help
- [Protect your Android device from USB threats with Advanced Protection Mode](https://support.google.com/android/answer/16778864) — Android Help
- [How Android keeps you and your devices safe](https://blog.google/products/android/android-safety) — Google
- [How To Turn On Advanced Protection On Android (2026)](https://www.youtube.com/watch?v=UUe0cIVU3ns) — YouTube
