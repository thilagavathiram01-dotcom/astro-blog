---
title: "How to Use Continue On With Googlebook and Android 17"
description: "Set up Android 17 Continue activity, then use Continue On, Cast My Apps, and Files on a Googlebook."
pubDate: 2026-09-22T10:00:00
heroImage: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "google", "how-to"]
noindex: false
---

Google opened Googlebook pre-orders on 21 September 2026. The machines start at $899 and ship in the United States on 4 October. The feature that matters on day one is not Magic Pointer. It is the phone-to-laptop handoff that Google calls Continue On.

This guide covers the official pairing path Google published, plus the Android 17 Continue activity hub that Play Services has started rolling out ahead of launch. Requirements, feature names, and dates come from Google posts and Android 17 system menus reported on Pixel devices.

## What you need before you start

Google states that phone pairing features require setup and a phone running Android 17 or later. On Galaxy devices that means One UI 9 or newer. Sign the Googlebook and the phone into the same Google account.

Keep both devices on the same Wi-Fi network during first pairing. Google encrypts the first-boot transfer of settings, saved passwords, Wi-Fi networks, and messages end to end when you use that shared account.

You do not need a Pixel. Google positions Googlebook as a companion for Android phones from any OEM that ships Android 17.

If you have not chosen a chassis yet, start with the [Googlebook pre-order and pairing overview](/blog/googlebook-preorder-android-setup/). This article assumes the laptop is on the way or already unboxed.



![Laptop and smartphone on a desk during a work session](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Turn on Continue activity on the phone first

Android 17 added a Continue activity hub inside Cross-device services. Play Services has started showing it on Pixel phones running stable Android 17, including Pixel 9 and Pixel 11 Pro XL units that received the September Google system update.

Open it before the laptop arrives so pairing is one tap instead of a scavenger hunt.

1. Open **Settings**.
2. Go to **Google > All services > Cross-device services**.
3. Open **Continue activity**. On some builds the same panel sits under **Connected devices**.
4. Accept the Cross-device services permission sheet. It covers screen and app streaming, notifications, and photos or media access.
5. Enable the toggles you actually want. Leave the rest off.

The four controls that have shipped in the current hub are:

- **Tasks.** This is the user-facing home for Continue On. Supported apps can hand off an in-progress session to the Googlebook taskbar.
- **Apps.** This powers Cast My Apps. Phone apps stream into a desktop window while they keep running on the phone.
- **Notifications.** Shared alerts can be read or dismissed on either device. Inline replies from the laptop work for messages that land on the phone.
- **Files & media sharing.** The Googlebook Files app can list the paired phone as a source and open photos or documents that still live on the handset.

Some reports also mention a fifth **Media** style control as the rollout continues. Treat whatever your build shows as the source of truth. Do not enable a toggle you do not understand.

## Pair during Googlebook setup

On first boot, sign in with the same Google account used on the phone. Google copies Wi-Fi networks, passwords, messages, and a subset of settings. That transfer is the baseline. Continue On, Files, and Cast My Apps sit on top of it.

After setup:

1. Confirm the phone appears in Googlebook settings under connected or cross-device devices.
2. Unlock the phone once so the laptop can complete the link.
3. Open the Files app on the Googlebook and look for the phone in the sidebar, listed like a drive.
4. Open the second app drawer next to the G-logo start menu. That drawer lists apps installed on the phone for Cast My Apps.

If the phone is missing from Files, go back to Continue activity and confirm **Files & media sharing** is on. If the second drawer is empty, confirm **Apps** is on and both devices share a network.

## Use Continue On for supported apps

Continue On is not a full clone of every phone screen. Google demonstrated it between phones and tablets first, then extended the same idea to Googlebook. Only apps that add handoff support appear on the laptop taskbar.

Google’s official example is BandLab. Start a project on the phone during a commute. Open the Googlebook. The active session shows on the taskbar. Click it and resume at the same point.

Expect first-party Google apps such as Chrome, Docs, and Gmail to show up earlier than most third-party titles. A Google representative told The Verge that adding support is a small code change for developers. Until they ship it, an unsupported app will not hand off.

Use Continue On when you want the laptop-native or large-screen version of an app. Use Cast My Apps when you only need the phone UI for a short task.

## Cast My Apps for one-off phone work

Cast My Apps streams a single phone app into a floating portrait window on the Googlebook. The app keeps running on the phone. You control it with the laptop mouse, keyboard, or touchscreen.

Google’s own examples are a food-delivery checkout and a one-time code in Messages. Those are the right jobs for this feature. You stay in the laptop workflow and still reach an app that has no useful desktop build.

Hands-on coverage notes that Phone, Camera, and Settings are excluded for security reasons. You also cannot mirror the entire phone home screen. Only individual apps cast.

Steps on a paired Googlebook:

1. Open the phone app drawer beside the G-logo menu.
2. Click the app you need.
3. Work in the floating window. Type OTP codes or complete a checkout.
4. Close the window when you are done. The app remains on the phone.

Keep the phone unlocked and nearby. The stream dies if the phone sleeps hard or leaves the network.



![Person reviewing files on a laptop with a phone nearby](https://images.unsplash.com/photo-1587614387466-0a72ca266f6d?auto=format&fit=crop&w=800&q=80)



## Open phone files from the laptop

The Files app on Googlebook can treat the paired phone as another storage location. Search, open, copy, and share items without mailing them to yourself or parking them in Drive first.

That path depends on **Files & media sharing** in Continue activity. Photos and documents that live only in the phone’s local storage show up here. Cloud-only items still follow their own apps.

Practical uses:

- Grab a photo you just shot and drop it into a Docs or Photoshop window.
- Copy a PDF off the phone Downloads folder.
- Search the phone from the laptop instead of unlocking the handset.

Do not treat this as a backup. It is live access to a device that can leave Wi-Fi. Copy anything you need to keep onto the laptop or Drive before you close the lid and walk out.

## Notifications on both screens

With the Notifications toggle on, alerts that hit the phone can appear on the Googlebook. Dismiss or read one copy and the other follows. You can send an in-line reply from the laptop for messages that arrived on the phone.

Turn this off if you already use a watch and hate duplicate pings. The hub is designed so each stream is independent. Tasks can stay on while Notifications stay off.

## What Google confirmed at launch

From Google’s 21 September 2026 launch post:

- Googlebook is built on the Android technology stack with desktop foundations from ChromeOS.
- Setup copies phone settings, saved passwords, Wi-Fi networks, and messages with end-to-end encryption.
- Continue On picks up a phone task from the laptop taskbar.
- Files searches and opens phone files and photos from the laptop.
- Cast My Apps streams a phone app into a desktop window.

Hardware partners for the first wave are Acer, ASUS, Dell, HP, and Lenovo. Street dates are 4 October 2026 in the United States and 5 October in Canada, the United Kingdom, Ireland, France, Germany, and Australia. Every unit includes 12 months of Google AI Pro and a 10-year update promise for Googlebook OS.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/y6u6iAo0KDo"
    title="The Android Show: I/O Edition | Googlebook"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save time on day one

- Update Play Services on the phone the week before the laptop arrives. Continue activity rides that update, not only the Android 17 system image.
- Enable Tasks and Files first. Add Apps when you hit a phone-only checkout. Add Notifications last.
- Keep the phone charged. Cast My Apps runs the app on the handset, so a 4 percent battery kills the window.
- Do not expect every Play app to support Continue On at launch. Cast the app instead, or install the large-screen build on the laptop if one exists.
- Use the same Google account on both devices. A second account will set up the laptop and skip the encrypted phone transfer.
- Review our [September 2026 Android drop guide](/blog/android-september-2026-drop-guide/) if Play system updates are still pending on the phone.

## When pairing fails

If Continue On never appears on the taskbar, the open app likely lacks handoff support. Confirm Tasks is enabled, then test with Chrome or Docs.

If Cast My Apps shows a black window, wake the phone and disable battery restrictions for Google Play services. Reboot both devices if the second drawer stays empty after a toggle change.

If Files lists the phone but every folder is blank, grant the media permission on the phone again from the Cross-device sheet. Scoped storage on Android 17 still blocks some app-private directories. You will see Downloads and the camera roll before you see app sandboxes.

## Conclusion

Googlebook is useful to an Android owner when the phone and laptop share work. Continue On, Cast My Apps, and Files are the three official paths. Android 17’s Continue activity hub is the switchboard that turns them on.

Set the phone toggles now. Sign the laptop into the same account on first boot. Start with Files and a single Cast My Apps window before you chase Magic Pointer.

## Sources

- [Googlebook: The laptop your Android phone has been waiting for](https://blog.google/products-and-platforms/devices/googlebook/pre-order-googlebook/) — Google, 21 September 2026
- [Introducing Googlebook, designed for Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/meet-googlebook/) — Google, 12 May 2026
- [Googlebook’s built-in intelligence](https://blog.google/products-and-platforms/devices/googlebook/googlebook-built-in-intelligence/) — Google, 21 September 2026
- [Official Googlebook site](https://googlebook.google/)
- [The Android Show: I/O Edition | Googlebook](https://www.youtube.com/watch?v=y6u6iAo0KDo) — Android on YouTube
