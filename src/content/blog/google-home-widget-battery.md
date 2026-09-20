---
title: "How to Use the Battery-Efficient Google Home Favorites Widget"
description: "Add the Google Home Favorites widget on Android 12+ or iOS 17+, pick tiles, and understand the 16 September 2026 update that pauses polling when the screen is off."
pubDate: 2026-09-20T11:05:00
tags: ["android", "google-home", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&h=900&q=80"
---

The Google Home Favorites widget is meant to turn lights, locks, thermostats, and cameras on from the home screen. Until this month it also kept polling those devices while the phone sat in a pocket.

Google’s [16 September 2026 Home release notes](https://support.google.com/googlehome/answer/15962877) say widgets now **pause background updates and polling** when the screen is off, locked, or showing a screensaver. The tiles refresh as soon as you unlock. That saves battery on the phone and on battery-powered cameras that used to answer those background checks.

This guide covers how to add the official widget, choose tiles, and what else landed in the same Home app drop. It follows Google Nest Help and those release notes — not unofficial APKs.

## What you need

Google documents these requirements for the Favorites widget:

- **Android 12** or later, or **iOS 17** or later
- The current **Google Home** app from Play Store or App Store
- At least one home created in the app, with devices already set up

If the widget list is empty, update Home and confirm you are signed into the same Google Account that owns the structure.

![Living room smart speaker and lamps](https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80)

## Add the Favorites widget on Android

Google Nest Help lists two paths. Both place the same widget.

**From the Home app icon**

1. Touch and hold the **Google Home** icon.
2. Tap **Widgets**.
3. Touch and hold the **Favorites** widget.
4. Drop it on a home screen page with space.

**From the widget library**

1. Touch and hold empty wallpaper.
2. Tap **Widgets**.
3. Open **Google Home**.
4. Drag **Favorites** onto the screen.

Resize if your launcher shows handles. A two-by-two block is enough for a few lights; stretch it if you want camera or thermostat tiles in the same grid.

On iOS 17+, add it from the widget gallery the same way you add any other Lock Screen or Home Screen widget, then pick the home if you belong to more than one.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/SK_diksfAKE" title="Set up a Google account with the Google Home app" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Choose which devices appear

The widget does not automatically dump every bulb in the house.

1. Open the **Google Home** app.
2. Go to **Favorites**.
3. Add or remove tiles, then tap **Save**.
4. Use **Reorder** if you want lights first and cameras last.

You can keep a short list just for the widget. Nest Help notes that the widget list can differ from the in-app Favorites tab, and you can drop more than one widget if you want a “downstairs lights” block and a “front door” block.

Good first set:

- Two or three lights you actually toggle daily
- One lock or garage device you already trust from a phone, not a lock you never want to fire from a pocket
- One thermostat
- Skip live camera tiles if you care more about battery than a glanceable feed

![Smartphone on a table next to home controls](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80)

## What the September 16 battery change actually does

Google’s wording is specific:

- Polling **stops** while the screen is off, locked, or running a screensaver.
- Tiles **refresh immediately** when you unlock.
- The goal is less drain on the **phone and connected cameras**.

That last point matters on battery Nest Cams and doorbells. A widget that kept asking “are you online?” every few minutes was another wake-up for the camera radio. With the screen off, that chatter should drop.

What it does **not** do:

- It does not turn the widget into a live video wall while the phone is locked.
- It does not replace Home Premium camera history.
- It does not change Gemini for Home voice commands on speakers.

If a tile looks stale for a second after unlock, wait for the refresh rather than force-stopping the Home app. Force-stop often makes the next poll slower, not faster.

## Other Home app fixes in the same drop

The same 16 September notes list quality work you will notice if you already live in the app:

- **Multi-account switching** is less likely to show “Home not found” or reset preferences.
- **Sensor, camera, and smoke/CO tiles** should stay colored after you leave a device screen instead of going gray until you reload.
- **Wi-Fi pairing stalls** during new device setup were reduced.
- **Google TV** startup crashes when launching the Home experience were addressed.
- **Smoke and carbon monoxide notifications** can show current device status in the app after an alarm has already cleared.

Camera-specific Android fixes:

- Live tiles on **Favorites** should keep streaming when you return from full-screen instead of going black until you scroll.
- History timelines should scroll across gaps where nothing was recorded, without freezing.

iOS got a faster jump from recorded events to **Live**.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_cdjPCkdGXU" title="Build with the Google Home APIs on Android — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Gemini for Home voice fixes (early access)

If your speakers run Gemini for Home in early access, the same notes list five assistant fixes: fewer pointless follow-up questions, more reliable TV streaming app launches on smart displays, fewer Live Mode self-interruptions, fewer Broadcast error toasts, and better recognition of personal playlists.

Those are speaker and display changes. They do not require the home-screen widget, but they shipped on the same day.

Home MCP — the connector that lets outside agents such as Claude or Antigravity talk to devices — is a **separate** early-access rollout for Google Home Premium Advanced in the U.S. Do not mix that setup with the widget. The widget is a local glance surface; MCP is a cloud tool channel with its own Cloud project and OAuth steps.

## Keep the widget from fighting battery saver

A few habits still help after the polling change:

1. Update **Google Home** from the store, then reboot once so the new widget process is what Android measures.
2. In Android **Settings → Apps → Google Home → Battery**, leave it on the default optimized setting unless Google Support tells you otherwise. Unrestricted can undo the new pause behavior.
3. Do not pin six camera tiles if you only need two lights. Each camera tile is still a live-ish surface when the screen is on.
4. If you use a third-party launcher, add the widget from the Home app icon path so the correct provider is registered.

![Modern living room with lighting and a phone](https://images.unsplash.com/photo-1585128902438-35827f6d4ba0?auto=format&fit=crop&w=1200&q=80)

## If the widget is missing or empty

Work through this list before sideloading anything:

1. Confirm Android 12+ or iOS 17+.
2. Update Google Home and Google Play services.
3. Open the app once and wait until Favorites finishes loading.
4. Sign out and back in only if tiles are stuck on another household.
5. Remove the widget and add it again after the update — old instances sometimes keep the previous polling schedule until replaced.

Release notes are generated with Gemini and Google says they may need corrections. If a bullet in What’s new does not match your build, trust the in-app version number and the Nest Help widget article over a screenshot on social media.

## Conclusion

The Favorites widget is still the fastest way to tap a light without opening Home. The 16 September change is not a new layout. It is a polling rule: the widget sleeps with the screen and wakes with the lock. Pair that with a short tile list and the camera-tile fixes in the same drop, and the home screen control surface is finally less expensive to leave running.

Add the official widget, save a tight Favorites set, and let the app update finish before you judge battery graphs.

## Sources

- [What's new in Google Home](https://support.google.com/googlehome/answer/15962877) — Google Home and Nest Help (16 September 2026 notes)
- [Control smart home devices with the Favorites widget](https://support.google.com/googlenest/answer/14887882) — Google Nest Help
- [Add apps, shortcuts & widgets to your Home screens](https://support.google.com/android/answer/9450271) — Android Help
