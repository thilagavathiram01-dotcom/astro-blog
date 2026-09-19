---
title: "How to Set Up Private Space on Android to Hide Sensitive Apps"
description: "Create a locked, isolated profile on Android 15 and later: set up Private Space, install apps separately, hide the drawer entry, move files, and lock it automatically."
pubDate: 2026-09-19T09:15:00
tags: ["android", "privacy", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80"
---

Private Space is a built-in Android feature that gives you a second, locked profile on the same phone. Apps you install there keep their own data. When the space is locked, those apps stop running, drop off the launcher and Recents, and do not show notifications.

Google documents the feature in Android Help. It shipped with Android 15 and remains available on later releases, including current Pixel and other stock-Android builds. Some manufacturers disable it or ship a similar container (Samsung Secure Folder is the common example). You can only set it up as the main user of the device.

![Close-up of a smartphone lock screen and security padlock concept](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1400&q=80)

## What you need

Android Help lists these requirements:

- Android 15 or later (Settings → About phone → Android version)
- You are the **main user**, not a guest or secondary user
- The phone is not a managed / work-managed device that blocks the feature
- No supervised account signed in on the main space
- The manufacturer or an enterprise admin has not turned Private Space off
- The device does not already have more than four users or profiles

You also need a screen lock before setup. If you do not have one, Settings will ask you to create a PIN, pattern, or password first.

Google’s short product film shows the idea in under 20 seconds:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/5wMBt7m8vUQ" title="Private space lets you hide sensitive apps and their notifications — Google" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Set up Private Space

1. Open **Settings**.
2. Tap **Security & privacy**.
3. Under Privacy, tap **Private space**.
4. Authenticate with your device screen lock.
5. Tap **Set up**, then **Got it**.
6. Sign in to a Google Account if prompted. Google recommends a **different** account from the one on your main profile so photos, Play history, and notifications stay isolated.
7. Choose a lock:
   - **Use device screen lock** — same PIN, pattern, or biometric as the phone.
   - **Choose new lock** — a separate pattern, PIN, password, or fingerprint for the space only.
8. Tap **Done**.

After setup, scroll to the bottom of the app drawer. You will see a **Private space** section with a lock icon. A few system apps are already there (typically Camera, Chrome, Contacts, Files, Photos, and Play Store). They are separate copies, not shortcuts to the apps on your main profile.

![Person holding an Android phone with apps on screen](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80)

## Install apps into the space

Private Space does **not** move an existing app and its data. You install a fresh copy and sign in again. That is intentional: it keeps the two profiles isolated.

**From inside Private Space**

1. Unlock Private Space from the app drawer.
2. Tap **+ Install**.
3. Use Play Store (or another installer available in the space) and install the app.

**From All Apps**

1. Touch and hold an app icon on the main profile.
2. Tap **Install app in Private space**.
3. Finish the installer flow. The original app is unchanged.

When the private copy is ready, you can uninstall the main-profile copy if you no longer want it visible.

## Lock, unlock, and auto-lock

**Unlock from the drawer:** scroll to Private space → tap it → authenticate with the private lock (or the device lock if you reused it).

**Lock from the drawer:** tap the lock icon on the right of the Private space heading.

**Auto-lock from settings**

1. Unlock Private Space.
2. Tap the settings gear next to the heading.
3. Tap **Lock private space automatically**.
4. Pick one:
   - **Every time device locks**
   - **5 minutes after screen timeout**
   - **Only after the device restarts** (this also applies on top of the other options)

When the space is locked, apps inside it are fully stopped. They cannot show notifications, run in the background, or read sensors. Do not put a medical or safety app that must keep working while you are not looking at the phone into Private Space.

When the space is unlocked, notifications from those apps can appear. They carry a Private space icon so you can tell them apart.

## Hide the Private Space row

If you do not want the “Private space” heading sitting at the bottom of All Apps:

1. Unlock Private Space.
2. Open its settings.
3. Turn on **Hide private space when it’s locked**.

The row disappears the next time you lock the space. To open it again, search the app drawer or Settings for **Private space** and authenticate. Android Help notes that even devices without a space may show a “Tap to set up or open” search result, so the mere presence of that string does not prove you have one.

Hiding the drawer entry is not total invisibility. Google states you cannot hide the space from someone who can install apps on the phone, someone with ADB or computer access, some other apps that can detect the profile, or device logs.

## Move photos and files in

1. Unlock Private Space.
2. Tap **+ Add** → **Add files**.
3. Select items from main storage (press and hold to multi-select).
4. Choose **Copy** or **Move**:
   - **Copy** leaves the original in place and puts a copy in the space’s Downloads folder.
   - **Move** deletes the original from the main profile and stores the file only in the space.

Transfers fail if the file is open, renamed mid-copy, the phone is out of storage, or the space locks while the copy is running.

When the space is unlocked, Sharesheet, the photo picker, and Files show a **Private** tab. That tab disappears when you lock the space.

Bluetooth send from a private app is allowed and does not advertise that the file came from Private Space. You cannot receive Bluetooth shares *into* the space as a target.

## Use a separate Google Account

Private Space does not inherit accounts from the main profile. You sign in again to every service you need.

A dedicated account keeps Play install history, Chrome suggestions, Photos backups, and Gmail out of the main profile and off other devices signed into your everyday account. If you reuse the same account, cloud-synced data can still appear wherever that account is signed in.

## Delete or reset the space

Deleting Private Space removes the apps and **on-device** data with no backup. Cloud data belonging to those apps can come back if you sign in again later. A full device restore does **not** restore Private Space.

**From Private Space settings** (needs the private lock):

Settings → Security & privacy → Private space → authenticate → **Delete private space**.

**From System reset options** (needs the device PIN):

Settings → System → Reset options → **Delete private space**.

Android Help notes that “Reset private space” can appear even when no space exists, so finding that menu item does not confirm that someone set one up. You can also use it if you forget the private lock and are willing to wipe the space.

## Practical examples

- Banking or brokerage apps you do not want on Recents when you hand the phone over.
- A second Photos and Files library for passport scans or medical PDFs (use **Move**, not Copy).
- A dating or job-search app whose notifications should stay silent until you unlock the space.
- A separate Chrome profile so private browsing history never seeds the main account.

Do **not** use the space for apps that must keep running: continuous heart-rate trackers, some two-factor prompts you need while the space is locked, or anything that relies on background sensors.

If you use a Wear OS watch, Google documents known issues: some watches can surface private notifications or show a work-profile-like tab even when you have no work profile. Check Wear OS Help if your watch and phone behave oddly after setup.

Samsung phones often ship **Secure Folder** instead of, or alongside, stock Private Space. The idea is similar—a locked container with its own apps—but the Settings path and lock options follow One UI, not the steps above.

## Troubleshooting

- **No Private space item in Settings.** Confirm Android 15+, that you are the owner user, and that the OEM did not remove the feature.
- **Cannot set it up.** You may already have too many users or profiles, or an enterprise policy blocked it.
- **Apps still notify when “hidden.”** The space is unlocked, or you hid only the drawer row. Lock the space; notifications stop.
- **Cannot find the row after hiding it.** Search Settings for Private space, or search the app drawer for the same phrase.
- **Forgot the private lock.** Use System → Reset options → Delete private space, then set the space up again. Local data in the old space is gone.

## Conclusion

Private Space is the stock-Android way to keep a small set of apps and files off the main launcher without a third-party locker. Set it up under Security & privacy, install fresh copies of the apps you care about, pick a separate lock and ideally a separate Google Account, then lock—or hide—the container when you are done. Treat it as a paused profile, not a second phone that keeps working in your pocket.

## Sources

- [Hide sensitive apps with private space — Android Help](https://support.google.com/android/answer/15341885)
- [How to Hide Apps & Sensitive Content with Private Space — Android.com](https://www.android.com/articles/how-to-set-up-private-space/)
- [Private space — Android Open Source Project](https://source.android.com/docs/security/features/private-space)
- [Private space lets you hide sensitive apps — Google (YouTube)](https://www.youtube.com/watch?v=5wMBt7m8vUQ)
- [Safeguarding user security on Android — Google I/O / Android (YouTube)](https://www.youtube.com/watch?v=RccJYep2v5I)
