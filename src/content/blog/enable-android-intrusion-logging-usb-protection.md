---
title: "Turn On Android Intrusion Logging and USB Protection"
description: "Enable Android Intrusion Logging and USB Protection in Advanced Protection on Android 17, then download encrypted forensic logs."
pubDate: 2026-10-02T13:30:00
heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "pixel"]
noindex: false
---

Google added Intrusion Logging to Advanced Protection so a phone can keep an encrypted record of security events even if someone later wipes the device. On October 1, 2026, Google said the log is optional and must be turned on from the Advanced Protection settings page. USB Protection, which blocks new USB data connections while the screen is locked, turns on with Device protection on supported hardware.

This guide covers who should use both features, how to enable them on Android 17, and how to download a log if you suspect a compromise. If you only need the broader toggle, start with [how to set up Advanced Protection on Android](/blog/android-advanced-protection-setup/).

## What Intrusion Logging actually stores

Intrusion Logging records device and network activity you can later share with a trusted security expert. Google’s help center lists the kinds of events that land in the log:

- App process starts, plus installs, updates, and uninstalls
- Wi-Fi and Bluetooth start and stop events, DNS lookups, and IP addresses
- File transfers over USB
- Changes to system certificates
- When the device locks or unlocks

The phone end-to-end encrypts those events before they leave the device. Google stores the ciphertext for a rolling 12 months, then deletes it. Neither you nor Google can delete a log early, even if you turn logging off or close the account. That is intentional: an attacker who reaches the phone should not be able to erase the remote copy.

Keys are protected by your Google Account password and screen lock. Google says it cannot read the logs because it does not know those secrets. Once you download and decrypt a copy, you are responsible for that file.

Google worked with civil liberties groups on the design. Donncha Ó Cearbhaill, head of Amnesty International’s Security Lab, described it as the first consumer mobile platform feature built for forensic logging of targeted attacks. The logs stay encrypted in cloud storage so they can be retrieved later even if tracks are wiped on the phone.

![Person holding a locked smartphone in low light](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Requirements before you turn it on

Intrusion Logging is available on Android devices that support Advanced Protection. Google’s October 1 note says the new Advanced Protection capabilities are on Android 17 devices, with two exceptions: USB Protection and Failed Authentication Lock are limited to select Android 17 devices. USB Protection is documented for Pixel 6 and later.

You need three things before setup:

1. A screen lock (PIN, pattern, or password). Advanced Protection requires one.
2. A Google Account on the phone, used as the backup target for encrypted logs.
3. A decision about risk. Logs cannot be deleted for 12 months. In some legal settings you may be required to hand over decrypted copies or credentials. Chrome Incognito traffic is not excluded: the logger sits at the system level and can record DNS lookups and IP connections from Incognito tabs, though not the specific page path.

Do not remove the screen lock after you enable logging. Google warns that losing the screen lock factor can leave you unable to decrypt logs if the phone is lost or damaged. Changing the PIN, pattern, or password is fine and does not stop logging.

## Turn on Device protection and Intrusion Logging

Google’s support steps are the same on Pixel and other Android 17 phones, with small menu differences.

1. Open Settings.
2. Tap Security & privacy. Under Other settings, tap Advanced Protection. You can also open Google, then All services, then Advanced Protection under Personal and device safety.
3. Turn on Device protection.
4. On the setup screen, turn on Intrusion Logging. You can skip it and enable it later from the same page.
5. Choose the Google Account that will hold the encrypted backups.
6. Tap Turn on. If the phone asks to restart, restart now. Some protections only apply after reboot. If you choose Restart later, return to Advanced Protection and tap Restart now.

Existing Advanced Protection users should see a notification when the October updates arrive. Logging still needs a manual opt-in. Turning logging off stops new collection immediately. The phone uploads any unsent events first. Older logs stay on Google’s servers until the 12-month window ends.

USB Protection does not have its own switch on supported phones. Turning on Device protection enables it. While the screen is locked, new USB data sessions are blocked and the port defaults to charging. A cable that was already transferring data while the phone was unlocked keeps working after the screen locks, including photo copies and wired Android Auto. Unlock the phone to allow a new data connection. Fast charging can wait until unlock on some hardware. USB stays unprotected until boot finishes, and there is a short delay after lock before a dropped cable is treated as disconnected.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UUe0cIVU3ns"
    title="How To Turn On Advanced Protection On Android (2026)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Download and share a log

You can pull logs from any Android device signed in to the same Google Account.

1. Open Settings.
2. Tap Security & privacy, then Advanced Protection, then Intrusion Logging, then Access logs. Menu labels can differ by manufacturer.
3. Find the device and tap Download & decrypt.
4. Open the file manager to locate the decrypted files, then share them only with someone you trust to analyze a possible compromise.

Treat the decrypted folder like a credential export. It can show which apps ran, which networks the phone joined, and which sites were resolved in DNS.

## Other protections that arrive with the same toggle

Device protection also locks several settings so they cannot be switched off while Advanced Protection stays on. On Android 17 that set includes:

- Accessibility services limited to apps categorized as accessibility tools
- WebGPU disabled in Chrome, on top of existing Chrome safeguards such as enforced HTTPS where possible and the JavaScript optimizer turned off
- Failed Authentication Lock on select devices, which locks the phone after repeated failed attempts inside Settings or secured apps
- A page that lists apps which checked your Advanced Protection status, labeled Apps that checked for Device protection on Android 16 and described by Google as a supporting-apps view in the October update

Play Protect, blocking installs from unknown sources, 2G network blocking on supported radios, and scam controls in Phone by Google and Messages stay tied to the same switch. For theft-related locks that ship alongside these controls, see [Android theft protection setup](/blog/android-theft-protection-setup/).

![Close-up of a hardware security key and laptop](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)

## If Chrome events are missing

Intrusion Logging uses the Android DNS resolver. If Chrome uses its own Secure DNS, those lookups may not appear.

1. In Chrome, open More, then Settings, then Privacy and security, then Use secure DNS, and turn it off.
2. In Android Settings, open Network & internet, then Private DNS, and choose Automatic or a Private DNS provider hostname.

Heavy activity can also thin the log. Google says the feature may write events less often during very busy periods.

## Practical tips

Keep a screen lock. Logging without one weakens recovery of the encryption keys.

Skip logging if you cannot accept a 12-month retention period you cannot shorten. USB Protection alone still applies when Device protection is on, on Pixel 6 and later and on select other Android 17 phones.

Expect a reboot. Plan it when you are not mid-transfer over USB, because a fresh boot leaves the port unprotected until startup finishes.

Check the supporting-apps list after a week. It shows which installed apps queried Advanced Protection status, which is useful if a work profile or security app is supposed to raise its own controls.

Account protection is separate. From the same Advanced Protection page you can enroll the Google Account. Turning off Device protection does not always undo account-level enrollment.

## Bottom line

Advanced Protection is still one toggle, but the forensic piece is not automatic. On Android 17, turn on Device protection, opt in to Intrusion Logging, pick a Google Account for the encrypted backup, and restart if asked. USB Protection follows on Pixel 6 and later and on select other Android 17 devices. Keep the screen lock, and only decrypt a log when you are ready to store that copy yourself.

## Sources

- Google, “6 ways Advanced Protection on Android keeps you safe,” blog.google, October 1, 2026
- Android Help, “Log your Android device activity with Advanced Protection”
- Android Help, “Protect your Android device from USB threats with Advanced Protection Mode”
- Android Help, “Improve device security with Advanced Protection for Android”
