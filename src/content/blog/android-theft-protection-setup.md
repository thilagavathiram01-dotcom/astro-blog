---
title: "How to Enable Android Theft Protection on Your Phone"
description: "Turn on Theft Detection Lock, Offline Device Lock, Remote Lock, and Identity Check so a stolen Android phone cannot open your apps or accounts."
pubDate: 2026-09-22T09:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google", "pixel"]
noindex: false
---

A snatched phone is more than a hardware loss. Whoever holds it can open banking apps, reset your Google Account, or factory-reset the device if the screen stays unlocked. Android’s Theft protection suite locks the screen when sensors see a grab-and-run, when the radio goes dark, or when you send a lock from any browser.

Google documents the features in Android Help. Most of them ship through Play services on Android 10 and later phones. Tablets, Wear OS, and Android Go builds are not supported. You need a screen lock before any of the toggles will turn on.

This guide walks through every switch on the Theft protection page, how to lock a missing phone from android.com/lock, and when Identity Check is worth enabling. Pair it with [Private Space](/blog/android-private-space/) if you also want a locked app drawer for banking and ID photos.

## What you need before you start

Android Help lists these requirements:

- A phone running Android 10 or later (some Identity Check and Failed Authentication Lock options need Android 15 or 16)
- You are the device owner, not a guest or work-managed profile that blocks the menu
- A PIN, pattern, or password on the lock screen
- Find Hub (Find My Device) signed in with your Google Account
- For Remote Lock: an active SIM and a verified phone number

Open **Settings → About phone** to confirm the Android version. If **Theft protection** is missing after you follow the path below, the manufacturer removed it or Play services has not delivered the update yet.

Google’s official explainer shows the motion-lock idea in under a minute:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8zYNNLxy9L0"
    title="Android Theft Protection"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Open the Theft protection page

1. Open **Settings**.
2. Tap **Google**.
3. Tap **All services**.
4. Under Personal & device safety, tap **Theft protection**.

On some Pixel and Samsung builds the same page also appears if you search Settings for “theft.” Google notes that a few features may already be on by default. New Android 17 devices, and phones freshly reset or upgraded, can ship with Theft Detection Lock and Remote Lock enabled. Brazil and several other markets also receive default-on protection on older Android 10+ phones.

![Person holding a smartphone in one hand outdoors](https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80)

## Turn on Theft Detection Lock

Theft Detection Lock watches motion sensors, Wi-Fi, and Bluetooth. If the model thinks someone pulled the unlocked phone from your hand and ran, biked, or drove away, it locks the screen on the spot.

Google is explicit about limits:

- It does **not** run while the screen is already locked.
- It may stay quiet if the phone has a stable Wi-Fi or Bluetooth link, which cuts false locks at a desk or in a car.
- Repeated locks in a short window are suppressed so a jog does not brick the session.

**Steps**

1. Open Settings → Google → All services → **Theft protection**.
2. Turn on **Theft Detection Lock**.
3. If the switch is grayed out, the phone does not support the feature.

If the screen locks while you are still holding the phone, unlock it and keep going. Google says it will keep tuning the detector to reduce those interruptions.

## Turn on Offline Device Lock

Thieves often put a stolen phone in airplane mode or pull the SIM so Find Hub cannot reach it. Offline Device Lock waits a short time after the unlocked phone loses internet, then locks the screen.

Android Help adds two hard rules:

- The phone must be **unlocked** at the moment it drops offline. A phone that was already locked does not get a second lock from this feature.
- The screen can lock this way **twice in 24 hours**.

**Steps**

1. Open Settings → Google → All services → **Theft protection**.
2. Turn on **Offline Device Lock**.

Leave Find Hub on as well. Offline lock only buys you time; it does not report a location by itself.

## Turn on Failed Authentication Lock

Failed Authentication Lock watches for a burst of wrong PINs, patterns, or passwords and then locks the session. Android 15 introduced it. On Android 16 and later, Google added a dedicated on/off switch so you can disable it if a child or colleague keeps guessing your code.

Identical wrong guesses no longer stack toward the retry limit, which reduces accidental lockouts from the same mistyped PIN.

**Steps**

1. Open Settings → Google → All services → **Theft protection**.
2. Turn on **Failed Authentication Lock**.

On Android 17, Google also lengthened the wait after failed attempts on supported devices. That change lives in the system lock screen, not only on this page.

## Set up Remote Lock and a security question

Remote Lock lets you freeze the screen from any browser at [android.com/lock](https://android.com/lock). You do not need to be signed in to Google on that browser. You do need these items on the phone:

- A screen lock
- An active SIM
- A verified phone number
- Find Hub turned on
- An internet connection on the missing phone (if it is offline, the lock applies when it next comes online)

The screen can be locked remotely twice in 24 hours. After a remote lock, only the local PIN, pattern, or password unlocks the device.

**Turn it on**

1. Open Settings → Google → All services → **Theft protection**.
2. Tap **Remote Lock**.
3. Turn on **Remote lock**.
4. If the number is not verified, tap **Verify number** and enable **Automatically verify phone numbers**.

**Add the optional security question** (Play services update, Android 10+)

1. On the same Remote Lock screen, tap **Security question (optional)**.
2. Confirm with your PIN or biometrics.
3. Pick a question, type the answer, tap **Set**.
4. Wait a few minutes before the question appears on android.com/lock.

**Lock a missing phone**

1. Open [android.com/lock](https://android.com/lock) on any computer or borrowed phone.
2. Enter the phone number.
3. Complete the CAPTCHA.
4. Answer the security question if you set one. A wrong answer fails the lock.
5. Ask for the device to be locked.

To wipe accounts or factory-reset after that, sign in to Find Hub. Remote Lock only freezes the screen.

![Laptop on a desk used to lock a missing phone from a browser](https://images.unsplash.com/photo-1512941937663-6cfcf271e012?auto=format&fit=crop&w=800&q=80)

## Turn on Identity Check

Identity Check is a second gate for sensitive actions when you are away from places you marked as trusted (home or work). Outside those places, apps that call Android’s biometric prompt must accept fingerprint or face. A PIN, pattern, or password is not enough for those actions.

Android Help says Identity Check appears only on supported phones. If the row is missing, the device does not have it.

**Actions that require biometrics when Identity Check is on and you are away from a trusted place**

- Open saved passwords and passkeys in Google Password Manager
- Autofill passwords in apps from Password Manager (Chrome is exempt)
- Change the screen lock
- Add or remove fingerprints or Face Unlock
- Factory-reset the phone
- Turn off Find Hub
- Turn off any Theft protection feature
- View trusted places
- Turn off Identity Check itself
- Set up a new device from this phone
- Add or remove a Google Account
- Open Developer options
- Any other app that uses the system biometric prompt

You can still use a PIN for Private Space, extra users, payment autofill in apps, and password or payment autofill in Chrome.

Identity Check also tightens the Google Account on this phone. Away from trusted places you need biometrics to change the account password or edit recovery factors from the device.

**Turn it on**

1. Open Settings → Google → All services → **Theft protection**.
2. Tap **Identity Check**.
3. Sign in to a Google Account.
4. Add a screen lock if you do not have one.
5. Add a fingerprint or Face Unlock.
6. Add trusted places such as Home or Work.
7. Verify your phone number so you can recover the account later.
8. Tap **Done**.

**Turn it off**

Use the same path, then authenticate. Away from trusted places you must use biometrics or your Google Account password (and 2-Step Verification if that account uses it). Turning it off with the Google Account requires an internet connection.

## After the phone is gone

Do this in order:

1. Lock the screen from android.com/lock if Remote Lock is on.
2. Open Find Hub on another signed-in device or at android.com/find.
3. Play a sound if you think the phone is nearby.
4. Mark it as lost. On Android 17, marking as lost can require biometrics to unlock again and can hide Quick Settings and block new Wi-Fi or Bluetooth joins.
5. Sign out of Google Accounts on the device from Find Hub if you need to.
6. Erase the device only after you accept that local photos and files without a backup are gone.

Set up cloud backup **before** you need it. Theft protection does not copy your camera roll.

## Tips that actually help

- Use a PIN with six or more digits. Google’s own help page still recommends this even if you unlock with a fingerprint every day.
- Keep Find Hub on. Remote Lock and “mark as lost” both depend on it.
- Do not store passport scans only on the main profile. Put copies in [Private Space](/blog/android-private-space/) and lock that container.
- If Theft Detection Lock fires during a commute, check whether Bluetooth or Wi-Fi dropped. The detector is more aggressive when both radios look idle.
- Samsung Secure Folder is separate from this menu. One UI may also surface Knox protections; the Google page still applies to the Play services features.

## Conclusion

Open Settings → Google → All services → Theft protection and turn on Theft Detection Lock, Offline Device Lock, Failed Authentication Lock, and Remote Lock. Add a security question for android.com/lock. On a supported Pixel or Galaxy, turn on Identity Check and map trusted places so a stolen PIN cannot change the lock, kill Find Hub, or drain Password Manager.

None of these tools replace a strong screen lock or a current backup. They do close the window between the grab and the moment you reach a browser.

## Sources

- [Protect your personal data against theft — Android Help](https://support.google.com/android/answer/15146908)
- [New Android Theft Protection Feature Updates — Google Blog (27 Jan 2026)](https://blog.google/security/android-theft-protection-feature-updates/)
- [What’s New in Android Security and Privacy in 2026 — Google Blog](https://blog.google/security/whats-new-in-android-security-privacy-2026/)
- [How Android theft protection keeps your devices and data safe — Google Blog](https://blog.google/products-and-platforms/platforms/android/android-theft-protection/)
- [Android Theft Protection — Android (YouTube)](https://www.youtube.com/watch?v=8zYNNLxy9L0)
- [Hide sensitive apps with private space — Android Help](https://support.google.com/android/answer/15341885)
