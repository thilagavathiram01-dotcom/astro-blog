---
title: "Google Assistant Is Gone on Android — What to Do Next"
description: "Google Assistant is leaving Android phones. Set Gemini, remap the power button, or turn voice off with official steps."
pubDate: 2026-09-29T12:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "google", "how-to", "tutorials"]
noindex: false
---

Google started removing Google Assistant from phones and tablets on **4 September 2026**. The Gemini Apps Community notice from Google staff is blunt: most users can no longer use Assistant or switch back on the phone, tablet, or paired devices.

Late September reports from 9to5Google and Droid Life match that notice. On phones running Google app **17.60** stable or **17.62** beta, the **Switch to Google Assistant** control is missing from the Gemini account menu in the United States and Europe.

This guide covers what still works, what moved with the phone, and how to keep Gemini useful or quiet it without deleting every Google app.

## What actually changed

Google’s pinned community update states that Gemini is now the assistant experience on Android. When the phone switches, the same assistant applies to:

- Wear OS watches paired to that phone
- Headphones and earbuds that work with Gemini
- Vehicles running Android Auto

Google Nest speakers, Home displays, and other standalone Assistant hardware are a separate product line. 9to5Google notes those devices have not moved in this mobile cutover. Confirm any speaker change inside the Google Home app, not the Gemini phone menu.

Older or low-memory devices that never met Gemini’s requirements can still run a limited Assistant. If your phone never received the Gemini upgrade email, check Play Store for the Gemini app and your Android version before you assume the toggle vanished.

## Confirm Gemini is the system assistant

You do not pick “Gemini” in Android’s Default apps list. You pick the **Google** app. That single choice covers both the old Assistant and Gemini.

1. Open **Settings**.
2. Tap **Apps** → **Default apps** → **Digital assistant app**.
3. Tap **Default digital assistant app**.
4. Select **Google**.

If the path differs, search Settings for `digital assistant app`. Google’s Help article for managing Gemini on Android recommends that search because manufacturers rename the screen.

Leaving this on **None** stops the power-button overlay and corner swipe even if the Gemini app icon still works.

For the full two-step default setup (Google app plus Gemini as Google’s assistant), see [How to Set Gemini as Default Assistant on Android](/blog/gemini-default-assistant-android/).



![Person holding an Android phone while adjusting settings](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## How you open Gemini now

After Default apps points at Google, the shortcuts that used to wake Assistant wake Gemini:

- **Hey Google**, if Voice Match is on
- Press and hold the **power** or side button, if that gesture is mapped to Digital assistant
- Touch and hold **Home** on three-button navigation
- Swipe up from a **bottom corner** on gesture navigation
- Open the **Gemini** app icon

Long-press power over a webpage or video when you want **Ask about this screen** or **Ask about this video**. That overlay is the replacement for the old Assistant screenshot card, not a new button you install.

## If you cannot switch back to Assistant

Google Help still documents **Gemini app → profile → Switch to Google Assistant**. Treat that page as stale on phones that already completed the September upgrade.

On those devices:

- Do not hunt for a hidden “classic Assistant” flag. Testers who checked US and EU accounts after Google app 17.60 no longer see it.
- You can still set Default apps to **None** or to another assistant you installed.
- You can remap the power button to the power menu so a long press no longer opens Gemini.

Deleting the Gemini app does **not** clear the system default. Google’s manage-or-delete article states that explicitly. Fix Default apps first, then decide whether the Gemini icon stays.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/egHwiQQKASI"
    title="Google Assistant is Shutting Down on Android in September!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Quiet Gemini without uninstalling it

Keep the app for typed chats and turn off the surprise launches.

### Remap the power button

1. Open **Settings** and search `power`, `side button`, or `gesture`.
2. Open **Press & hold power button** (Pixel path: **System** → **Gestures**).
3. Choose **Power menu** instead of **Digital assistant**.

Samsung and other skins put the same control under a side-key page. Search beats memorizing a Pixel path.

### Turn off Hey Google

1. Open the **Gemini** app.
2. Open your profile, then voice or hands-free settings.
3. Turn **Hey Google** off.

Google also documents a Settings path under **Google** → **All services** → **Search, Assistant & Voice**. Either route works if Voice Match no longer trains after the upgrade.

### Block the lock screen

1. Open Gemini → profile → **Settings**.
2. Open **Gemini on lock screen**.
3. Turn off **Use Gemini without unlocking**.

If you already removed voice and touch activation, you must unlock the phone and open the app to chat.



![Android phone on a wooden desk next to wireless earbuds](https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80)



## Watches, earbuds, and Android Auto

The community notice ties paired hardware to the **phone** choice. When the phone loses Assistant, those peripherals follow.

- **Wear OS.** Wrist voice follows the phone assistant. Retrain Voice Match on the watch after the phone update if “Hey Google” fails.
- **Earbuds.** Gemini-compatible buds use the phone assistant for tap-and-hold or wake words. Check the companion app after the Google app update.
- **Android Auto.** Voice in the car uses the phone setting. There is no separate “Assistant in the car only” switch once the mobile cutover finishes.

Restart the phone after Default apps changes, then reconnect Auto or the watch. Cached Assistant sessions can linger for one drive.

## What to try when something breaks

**Power button still opens a menu.** The gesture is not mapped to Digital assistant, or a manufacturer side-key setting overrides it.

**Hey Google does nothing.** Voice Match is off, the microphone permission is denied, or Default apps is not Google.

**Gemini app works, gestures do not.** Default apps still points at None or a vendor assistant.

**Routines feel incomplete.** Phone routines that lived only in classic Assistant need a rebuild in Gemini or in the Google Home app for speakers. Do not assume every 2019 routine survived the cutover.

**You never got Gemini.** Download Gemini from Play, sign in, and check Android version and RAM. Devices that never qualified keep a limited Assistant until Google says otherwise.

## Conclusion

The September 2026 mobile cutover is a removal of a second Google assistant, not a new icon you can ignore. On upgraded phones the switch-back control is gone, and Wear OS, earbuds, and Android Auto follow the phone.

Set Default apps to Google if you want the power button and Hey Google. Set it to None and remap the side key if you want silence. Nest speakers are still a separate decision in Home.

## Sources

- [Here’s an update on our work to upgrade mobile Assistant devices to Gemini](https://support.google.com/gemini/thread/396052272) — Gemini Apps Community (Google staff notice, updated for 4 September 2026)
- [Manage or delete the Gemini app on your Android device](https://support.google.com/gemini/answer/16938321) — Gemini Apps Help
- [Get started with the Gemini mobile app (Android)](https://support.google.com/gemini?p=activity_to_mobile) — Gemini Apps Help
- [Gemini fully replaces Google Assistant on Android](https://9to5google.com/2026/09/28/google-assistant-gemini-android/) — 9to5Google, 28 September 2026
- [I Tried to Switch to Google Assistant But It's Gone](https://www.droid-life.com/2026/09/28/google-assistant-is-gone/) — Droid Life, 28 September 2026
