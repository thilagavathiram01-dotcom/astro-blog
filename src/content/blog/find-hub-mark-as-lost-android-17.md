---
title: "How to Mark an Android Phone Lost in Find Hub"
description: "Use Find Hub to locate, ring, and mark an Android phone lost. On Android 17, unlocking can require PIN plus fingerprint or Face Unlock."
pubDate: 2026-09-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "security", "how-to", "google", "tutorials"]
noindex: false
---

A missing phone is a race against whoever picks it up. Find Hub is the official place to see a last location, play a sound, lock the screen, and, if you accept the cost, erase the device.

Google Account Help now documents an extra lock on **Android 17 and newer**: when you mark a device as lost, the phone can require **two-step verification** that includes Fingerprint or Face Unlock, not only the PIN, pattern, or password. Notifications, widgets, and quick access can stay hidden until you get the phone back.

This walkthrough uses the official Find Hub app and web flow. Pair it with the pre-theft switches in our [Android Theft Protection setup guide](/blog/android-theft-protection-setup/) so Remote Lock is already on before you need it.

## What must be true before you search

Google lists these conditions to secure or erase a device:

- The phone has power.
- It is on mobile data or Wi-Fi (or it will apply the lock when it next comes online).
- It is signed in to a Google Account.
- Find Hub is turned on.
- The device is visible on Google Play.

Set a PIN, pattern, or password on the lock screen. Location history for the device is tied to the first Google Account activated on that phone.

If 2-Step Verification is on the account, keep backup methods current. You will sign in to Find Hub from another phone or a browser, not from the missing device.

## Open Find Hub on another device or the web

1. On a spare Android phone or tablet, open the **Find Hub** app. Install it from Google Play if it is missing.
2. If you have no second Android device, open Find Hub in a browser (Google documents the web Find Hub flow from Account Help).
3. Sign in.
4. If the missing phone is yours, tap **Continue as [your name]**.
5. If you are helping a friend, tap **Sign in as guest** and let them sign in.
6. Select the lost device from the list. Family Link supervised devices can appear under Family devices.

You may be asked for the lock-screen PIN of the *missing* phone (Android 9 and later). If that device has no PIN or runs Android 8 or older, you may be asked for the Google Account password instead.

The lost device can show a notification that someone is looking for it.

![Person checking a smartphone map while standing outdoors](https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80)

## Play a sound if the phone is nearby

Use **Play sound** when you think the phone is in the same room, bag, or car.

Official behavior: the device rings at full volume for **five minutes**, even if it was on silent or Do Not Disturb. Stop the sound from Find Hub or by finding the phone and unlocking it.

Do not start with erase. Sound first, map second, lock third.

## Mark the phone as lost

**Mark as lost** locks the device with the PIN, pattern, or password you already set. If no lock exists, Find Hub can prompt you to set one now.

Google also notes that marking as lost may sign the device out of the Google Account and remove payment cards saved in Google Wallet.

**Steps**

1. Select the device in Find Hub.
2. Tap **Mark as lost**.
3. Read the summary of what will change.
4. Add a **contact number** and a short **lock-screen message** so a finder can reach you.
5. Confirm **Mark as lost**.

On **Android 17 and up**, Account Help states you can also secure data with two-step verification if the phone has Fingerprint or Face Unlock. In that state the device requires the existing screen lock **and** a fingerprint or face, and it disables access to notifications, widgets, and quick access.

When you recover the phone, unlock it with the PIN, pattern, or password (and biometrics if Android 17 applied that extra gate). Some devices mark themselves found automatically after a successful unlock.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iTOrpOMX2uo"
    title="How to use Find Hub to find a lost Android device"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Mark as lost does not do

Mark as lost is a lock and a public message. It is not a factory reset.

- It does not guarantee a live map pin if the phone is off or offline.
- It does not replace Remote Lock at android.com/lock, which can freeze the screen from a number you already verified.
- It does not back up photos. Anything that never left the device is at risk if you later choose Erase.

Use **Erase** only after you accept that local files without a cloud backup are gone. Account Help keeps locate, lock, and erase as separate actions for that reason.

![Laptop and phone on a desk during a security check](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)

## If you only need a fast screen freeze

If Remote Lock is already enabled, you can lock the screen from any browser without signing into Find Hub:

1. Open [android.com/lock](https://android.com/lock).
2. Enter the phone number on the missing SIM.
3. Complete the CAPTCHA.
4. Answer the optional security question if you set one.
5. Request the lock.

Android Help limits remote locks to **twice in 24 hours**. After that lock, only the local PIN, pattern, or password unlocks the device. To wipe accounts or reset, you still need Find Hub.

Turn Remote Lock on *before* the phone disappears: Settings → Google → All services → Theft protection → Remote Lock.

## Prepare the phone while you still have it

Do this on a quiet evening, not after a theft:

1. Confirm Find Hub is on and the device appears in the app on a second login.
2. Set a six-digit (or longer) PIN even if you unlock with a fingerprint every day.
3. Enroll Fingerprint and, on supported Pixels, Face Unlock so Android 17 can apply the extra lost-mode gate.
4. Verify the phone number used for Remote Lock.
5. Turn on Theft Detection Lock and Offline Device Lock from the same Theft protection page.
6. Confirm Google Photos or another backup is current.

Find Hub remembered items (passports, spare keys) are a separate memory list. They will not locate a stolen handset.

## Troubleshooting

**The phone is not in the list.** Sign in with the same Google Account that was first activated on the device. Check that Find Hub was enabled before the loss.

**No location.** The radio may be off. Play sound if you are close. Mark as lost still queues a lock for the next time the phone is online.

**Mark as lost is missing.** You may be in a guest session without owner rights, or Play services on the missing phone never finished setup.

**You recovered the phone but Wallet cards are gone.** Re-add cards in Google Wallet after you unlock. That is expected after a lost-mode sign-out.

**You shared the PIN with a finder.** Change the screen lock as soon as you have the device. On Android 17 lost mode, biometrics still block a PIN-only unlock until you complete the extra step.

## Tips

- Start with Play sound when you are in the last room you remember.
- Put a reachable number on the lock-screen message, not your bank details.
- Do not erase until you have exhausted location and lock. Erase is one-way for on-device files.
- After recovery, review recent Google Account security activity and Wallet transactions.
- Keep Identity Check on supported Pixels and Galaxy phones so a stolen PIN cannot disable Find Hub from Settings.

## Conclusion

Open Find Hub on another device or the web, select the missing phone, play a sound if you are close, then mark it as lost with a contact line on the lock screen. On Android 17 with Fingerprint or Face Unlock, that lost state can demand both the screen lock and a biometric before anyone uses the phone again.

Set Find Hub, Remote Lock, and a real backup while the device is still in your pocket. The app cannot invent a location that was never recorded.

## Sources

- [Find, secure, or erase a lost Android device (Google Account Help)](https://support.google.com/accounts/answer/6160491)
- [Protect your personal data against theft (Android Help)](https://support.google.com/android/answer/15146908)
- [Be ready to find a lost Android device (Android Help)](https://support.google.com/android/answer/3265955)
- [How to use Find Hub to find a lost Android device (YouTube)](https://www.youtube.com/watch?v=iTOrpOMX2uo)
