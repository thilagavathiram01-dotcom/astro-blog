---
title: "How to Use Gemini Device Assistance on Android"
description: "Set up Gemini Device Assistance on Android to control alarms, apps, media, settings, and notifications with voice or text."
pubDate: 2026-10-01T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials", "productivity"]
noindex: false
---

Gemini can do more than answer questions on Android. Through Device assistance, formerly called Utilities, it can set alarms, open apps, change settings, control media, and read notifications when you ask.

Google documents this as a connected app that works only in the Gemini mobile app on Android. It runs even if Gemini activity saving is off. You can disconnect it at any time.

This guide walks through official setup, the extra Google app permissions you need, and the actions that work today. Steps follow Android Help, not unofficial menus.

## What Device assistance can do

Device assistance is the bridge between a Gemini prompt and system actions. You stay in the Gemini app or overlay. Gemini then talks to the clock, media session, settings, or notification shade on your behalf.

Google lists these job types:

- Set, check, change, and delete alarms and timers
- Start and manage a stopwatch
- Open websites, apps, and settings pages
- Check volume, battery, and common toggles
- Take a photo or a screenshot
- Pause, play, or skip media
- Read and reply to messages that appear as notifications
- On Pixel running Android 17 or later, answer Device Help questions about the phone itself

Some actions need extra permissions on the Google app, which hosts Gemini. Without those grants, chat still works. The device controls listed below will not.

If you recently switched from Google Assistant to Gemini, pair this setup with the default-assistant steps in [how Gemini replaces Assistant on Android](/blog/gemini-replaces-assistant-android/).

![Person holding an Android phone and speaking to an on-screen assistant](https://images.unsplash.com/photo-1512499617640-ee7495110b80?auto=format&fit=crop&w=800&q=80)

## Set Gemini as your Android assistant

Device assistance is most useful when Gemini is the digital assistant app. Google’s Gemini Apps Help says the Google app must be the default assist app first.

1. Open **Settings**.
2. Tap **Apps**, then **Default apps**.
3. Open **Digital assistant app** (wording varies by phone).
4. Choose the **Google** app if it is not already selected.
5. Open the Gemini app or the Google app, then choose Gemini as the Google digital assistant if the prompt appears.

On Pixel 9 and later, Gemini is already the default assistant. On other phones, long-press the power button or swipe from a corner after you set the default.

You still need a Google Account, Android 10 or higher, and at least 2 GB of RAM for the Gemini app, per Google’s Android product page.

## Turn on the extra permissions

Google splits Device assistance into two permission groups.

### Let Gemini read and reply to notifications

1. Open **Settings**.
2. Tap **Apps**, then **Special app access**.
3. Open **Notification read, reply & control** (label may vary).
4. Select **Google** and turn notification access on.

Without this grant, Gemini cannot summarize a long thread or send a reply from a notification. Google notes that notification actions are rolling out gradually, so the control may be missing on some devices.

### Let Gemini manage more settings and actions

Grant the Google app the device settings and accessibility-related permissions that Gemini requests when you first try a toggle, flashlight, or screenshot command. Decline anything you do not want Gemini to change.

You can disconnect Device assistance later in Gemini: profile photo or initial → **Apps** (Connected apps) → turn Device assistance off.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hZv3Y8xIBek"
    title="Android: Google I/O Gemini Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Control clocks, media, and apps

### Alarms, timers, and stopwatch

Ask in plain language. Examples that match Google’s help topics:

- “Set an alarm for 6:30 tomorrow.”
- “What alarms do I have?”
- “Cancel my 7 a.m. alarm.”
- “Set a 12-minute timer for pasta.”
- “Start the stopwatch.”

Clock routing depends on the manufacturer. On Honor, OnePlus, OPPO, Samsung, Tecno, and Xiaomi phones, Gemini uses the maker’s clock app. On other phones, it prefers Clock by Google if that app is enabled. Third-party clock apps can set, check, update, and delete alarms and timers. Other clock actions are not supported.

### Open apps, sites, and settings

You can chain requests. Google documents multi-action prompts such as opening an app and then changing a related setting. Keep each request specific: “Open Settings and show Battery Saver” works better than “fix my phone.”

### Media playback

If a player is active, ask Gemini to pause, resume, skip, or change volume. This uses the system media session, not a separate music connected app.

### Camera and screenshots

Ask Gemini to take a photo or capture the screen. Confirm the result in Photos or your screenshot folder. Do not treat this as a silent background recorder. You stay in control of the capture.

## Read notifications and use lock-screen actions

Once notification access is on, you can ask Gemini to read new messages and draft a reply. Google says the app summarizes long conversations by default. Ask it to read the full text if you need every line.

Lock-screen help requires the Gemini on lock screen setting. When that switch is on, Google lists these lock-screen actions:

- Set and silence alarms
- Set and stop timers
- Toggle flashlight, Bluetooth, Do Not Disturb, and Battery Saver
- Check volume and battery level
- Power off or restart
- Take a photo or screenshot
- Control media
- Read and reply to notification messages

Turn the lock-screen setting on only if you accept assistant use while the phone is locked. You can switch it off in Gemini settings.

![Android home screen with notification shade and assistant overlay](https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80)

## Pixel Device Help and Screenshots search

Two Pixel-only extras sit on top of Device assistance.

**Device Help** is English-only on Pixel phones running Android 17 or higher. It works on the primary profile only, not a work or secondary profile. In the Gemini text box, tap **Add attachment**, then **Device Help**. Ask what is using mobile data, why storage is full, or how to keep the screen on while you cook. Gemini may change a setting after you confirm.

**Pixel Screenshots** search needs the Pixel Screenshots app and English. You can say “Search for boarding passes in Pixel Screenshots” or “Show my receipts collection.”

Health and fitness control is separate. You can ask Gemini, including on a supported watch, to start or pause a workout in Fitbit or Samsung Health, or to report heart rate and step count. Google states that Gemini does not log sensitive health data when it handles those tasks.

## Tips that keep control with you

**Review Connected Apps quarterly.** Device assistance is one connection among many. Disconnect tools you no longer use.

**Confirm purchases and posts yourself.** Device assistance is for device control. Sensitive web tasks belong to Gemini in Chrome auto browse, which Google designed to ask before checkout or social posts.

**Keep the Google app updated.** Permissions and notification actions ship through Play updates to the Google app, not a one-off Gemini APK.

**Use short, single-goal prompts first.** After a multi-step request fails, split it: set the timer, then open the recipe app.

**Do not confuse Halo with Device assistance.** Android Halo is a later status-bar surface for agents such as Gemini Spark. Device assistance is the connected app that already runs actions from Gemini chat. See [Android Halo and Gemini Spark status](/blog/android-halo-gemini-spark-status-bar/) when you want the agent glance layer.

**Watch manufacturer clock quirks.** If an alarm lands in Samsung Clock instead of Google Clock, that is expected on the brands Google lists.

## What Device assistance cannot do

Google’s help page includes an unsupported-actions section. Treat anything outside the documented list as unavailable. Do not assume Gemini can factory-reset the phone, bypass a lock, change another user’s profile, or operate every third-party clock feature.

Notification reply and some Device Help flows are still rolling out. If a chip or attachment is missing, update the Google app and Gemini, then check again after a system drop.

For how Gemini uses data with connected apps, use Google’s Connected Apps data page linked from the Device assistance article. That is the official privacy reference for this feature.

## Conclusion

Device assistance turns Gemini from a chat window into a system remote. Grant notification and settings access only for the actions you want. Set Gemini as the assistant, then use short commands for clocks, media, apps, and lock-screen toggles.

On Pixel 17-class software, add Device Help when something on the phone itself is wrong. Disconnect the connected app if you want Gemini to stay in conversation mode only.

## Sources

- [Control your Android mobile device and apps with Device assistance (Android Help)](https://support.google.com/android/answer/15235441)
- [Get started with the Gemini mobile app (Gemini Apps Help)](https://support.google.com/gemini)
- [Use Gemini on your Pixel phone (Pixel Phone Help)](https://support.google.com/pixelphone/answer/15283615)
- [How to use the Gemini AI assistant and mobile app (Android.com)](https://www.android.com/intl/en_uk/articles/gemini-android-app/)
- [Android: Google I/O Gemini Demo](https://www.youtube.com/watch?v=hZv3Y8xIBek)
