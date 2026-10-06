---
title: "How to Create a Google Account Passkey on Any Device"
description: "Create a Google Account passkey on Android or PC, sign in with fingerprint or PIN, and remove a lost-device passkey from your account."
pubDate: 2026-10-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "google", "how-to", "android"]
noindex: false
---

A Google Account passkey lets you sign in with the same unlock you already use on your phone or laptop: fingerprint, face, or screen PIN. Google says a passkey cannot be copied, written down, or handed to someone the way a password can, which is why it resists phishing better than a reused password.

Creating one does not delete your password or other recovery methods. If 2-Step Verification or Advanced Protection is on, Google treats the passkey as proof you hold the device, so it can skip the extra code. Biometric data stays on the device and is not sent to Google.

This guide covers the requirements, the setup path on Android and on a computer, phone-assisted sign-in, and what to do if a phone is lost. If you later move passkeys between password managers, see [how Android transfers passwords and passkeys](/blog/android-passkey-password-manager-transfer/).

## What you need before you create one

Google Account Help lists these minimums:

- A phone on Android 9 or later, or iOS 16 or later
- A computer on Windows 10, macOS Ventura, or ChromeOS 109 or later
- A browser: Chrome 109+, Safari 16+, Edge 109+, or Firefox 122+
- A screen lock turned on for the device you will register
- Bluetooth on if you plan to use a phone passkey to sign in on another computer

Update the OS and browser first. Some browsers block passkey creation in private or Incognito windows. Only register a passkey on a device you personally control. Anyone who can unlock that device can sign back into the Google Account, even after you sign out of the Google app.

A FIDO2 hardware security key is also a valid place to store a passkey. If a key was added to the account before May 2023, Google says you may need to remove it and add it again before it can hold a passkey.

![Person using a laptop with a smartphone on the desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Create the passkey on the device you are using

Google puts the control at [myaccount.google.com/signinoptions/passkeys](https://myaccount.google.com/signinoptions/passkeys).

1. Open that page in Chrome, Edge, Safari, or Firefox while signed in to the account you want to protect.
2. Confirm it is you if Google asks for a password, prompt, or existing passkey.
3. Tap **Create a passkey**, then confirm **Create a passkey**.
4. Unlock the device with fingerprint, face, or PIN when the operating system prompt appears.
5. Wait for Google to list the new passkey under your sign-in options.

Repeat those steps on each personal phone and computer. A passkey created on one device is not automatically the same credential on every other device unless your platform syncs it (for example iCloud Keychain on Apple devices, or Google Password Manager on Android). Google notes that an Android phone already signed in with the account may already show an automatically registered passkey. Check the list before you create a duplicate.

Creating the first passkey opts you into a passkey-first sign-in. The password still exists. You can turn that preference off later.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5_4vcZ6DJ4E"
    title="How To Set Up a Google Passkey"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add a passkey on a hardware security key

Use this when you want a credential that is not stored on the phone itself.

1. Open the same passkeys page and start **Create a passkey**.
2. Choose **Use another device**.
3. Select the security key option and follow the browser prompt.
4. Insert the FIDO2 key, set or enter its PIN, and touch the sensor when asked.

Rename the key in the passkey list so you can tell a laptop passkey from a YubiKey later. Shared family computers are a bad place for this step. Google's own warning is direct: do not create a passkey on a shared device.

## Sign in with the passkey

On a device that already has the passkey:

1. Open a Google sign-in page.
2. Enter your email. If a passkey picker appears in the username field, choose it.
3. Unlock with the device screen lock when the browser asks.

On Android, signing out changes the timing. Google says you can still use that device's passkey for up to 6 hours after sign-out. After that window you need another method. When you sign in again, Android generates a new passkey and the old one expires. On non-Android devices, the same passkey remains usable after sign-out.

A newly created passkey can take up to 7 days before Google offers it at sign-in. An existing trusted passkey or security key can speed that trust step. If Google flags a passkey as suspicious, it disables it and notifies you. You have 30 days from that warning to confirm you added it, or Google deletes it.

![Close-up of a smartphone screen lock beside a keyboard](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Sign in on a computer using your phone

This is the path when the computer has no local passkey yet.

1. On the computer, enter your Google email.
2. Choose **Try another way**, then **Use your passkey**.
3. Scan the QR code with the phone camera. Bluetooth must be on.
4. On Android, tap **Use passkey to sign in**. On iPhone or iPad, tap **Sign in with a passkey**.
5. Confirm with fingerprint, face, or PIN on the phone.

The next time that phone and computer pair, Google says you should get a phone notification instead of another QR code. If you prefer the hardware key, pick it from the same "try another way" menu instead of scanning.

## Keep the password as a fallback

Passkey-first is the default after setup, not a lockout of the password. To ask for the password first again:

1. Open [myaccount.google.com](https://myaccount.google.com/).
2. Open **Security & sign-in**.
3. Under **How you sign in to Google**, turn off **Skip password when possible**.

With that switch off, Google prompts for the password. If 2-Step Verification is on, a passkey can still serve as the second step.

## Remove a passkey from a lost phone

Losing the phone does not by itself revoke the passkey. Remove it from the account, then review devices.

1. From a device you still control, open [myaccount.google.com/signinoptions/passkeys](https://myaccount.google.com/signinoptions/passkeys).
2. Verify it is you.
3. Find the lost phone or computer in the list and remove that passkey.
4. Open [google.com/devices](https://google.com/devices) and sign the lost device out if it still has account access.

If a sign-in page still offers a passkey you already removed, check third-party password managers. Google says the credential can remain in that app until you delete it there. Android passkeys that the phone registered automatically are removed from the same passkeys page.

## Practical checks after setup

- Create a second passkey on a backup phone or a FIDO2 key before you rely on one device.
- Keep 2-Step Verification and a recovery phone or email in place. A passkey does not replace account recovery.
- Skip shared or work kiosk devices.
- After a manager switch, confirm the site still offers the passkey from the new app. The Android transfer guide covers that handoff for Google Password Manager, 1Password, Bitwarden, and Dashlane.

## Conclusion

A Google Account passkey is a device-bound unlock, not a new password you have to memorize. Register it only on hardware you control, confirm it appears at [the passkeys page](https://myaccount.google.com/signinoptions/passkeys), and keep a second device or security key so a lost phone is an inconvenience instead of a lockout. Turn off **Skip password when possible** if you want the password prompt to stay first.

## Sources

- [Sign in with a passkey instead of a password](https://support.google.com/accounts/answer/13548313) — Google Account Help
- [So long passwords, thanks for all the phish](https://security.googleblog.com/2023/05/so-long-passwords-thanks-for-all-phish.html) — Google Security Blog
- [Manage passkeys in Chrome](https://support.google.com/chrome/answer/13168025) — Chrome Help
- [How To Set Up a Google Passkey (YouTube)](https://www.youtube.com/watch?v=5_4vcZ6DJ4E)
