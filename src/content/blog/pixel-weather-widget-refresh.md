---
title: "How to Refresh the Pixel Weather Widget After the September 2026 Update"
description: "Pixel Weather 1.1.20260716 adds a one-tap refresh button on the large home-screen widget. Update the app, place the right widget size, and keep forecasts current without opening Weather."
pubDate: 2026-09-20T12:00:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&h=630&q=80"
---

Pixel Weather already opens fast and shows a 10-day outlook, air quality, and an AI summary on Pixel 6 and later. The home-screen widget was the weak link: it only refreshed on Android’s schedule, so a morning commute could still show last night’s temperature.

In mid-September 2026, Google started shipping **Pixel Weather 1.1.20260716.979549101** with a manual **refresh control on the large widget**. Tap it and the tile pulls a new forecast. If you also keep a small weather tile on another screen, that one updates at the same time.

This guide walks through updating the app, adding the right widget size, using the new button, and fixing a stale or blank tile. Facts about the refresh control come from hands-on reports of that build. Device requirements and in-app settings come from [Pixel Phone Help](https://support.google.com/pixelphone/answer/15266029).

![Storm clouds over a city skyline after rain](https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&w=1200&q=80)

## What changed in this Weather build

[Android Authority](https://www.androidauthority.com/pixel-weather-widget-update-3712866/) and [Android Headlines](https://www.androidheadlines.com/2026/09/pixel-weather-update-adds-a-one-tap-refresh-button-to-the-home-screen.html) documented the same two product changes on 18–19 September 2026:

- The **large Pixel Weather widget** gains a small refresh icon in the **top-right corner**.
- Inside the app, the **left/right arrow buttons** on the hourly strip and the 10-day strip are gone. You swipe the cards instead.

The widget still updates in the background on Android’s interval. The button is for the moment you do not trust that interval — a front moving in, a trip starting, or a tile that looks hours old.

The small square weather widget does **not** show its own refresh icon. Place a large widget somewhere you can reach (even on a secondary home screen) if you want one-tap updates.

## Who this applies to

Pixel Phone Help states Pixel Weather is available on **Pixel 6 and later**, including Pixel Tablet. The refresh button is an app update, not a new Android version, so older Pixels that already have Weather can receive it through Play Store.

You still need:

- Location permission for Pixel Weather (precise location is what Help recommends for accuracy)
- A home-screen slot large enough for the **Forecasted weather** / large widget, not only the compact current-conditions tile
- Play Store access to install **1.1.20260716** or newer

If Weather is missing from the widget picker, update the Weather app and the Google app, then force-stop both and reopen the picker.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qLmaD2IHGhg" title="March Feature Drop: Gemini Live, Scam Detection and more — Made by Google Podcast" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 1 — Update Pixel Weather

1. Open **Play Store** → profile → **Manage apps & devices** → **Updates available**.
2. Update **Weather** (package label is Pixel Weather). Confirm the version under Settings → Apps → Weather → App details, or in Play Store → Weather → About this app.
3. Look for **1.1.20260716** or a later 1.1.2026 build. Older 1.0 and early 1.1 builds do not have the widget button.
4. If the store shows no update, open Weather once, force-stop it from App info, and check Play Store again. Feature flags on Weather often land a day or two after the binary.

## Step 2 — Add or resize the large widget

1. Touch and hold an empty area on the home screen → **Widgets**.
2. Open the **Pixel Weather** (or **Weather**) group.
3. Drag the **wide / forecast** widget onto the screen. Give it at least four columns if your grid allows it so the hourly strip and city name stay readable.
4. If you already have a small tile, keep it. Refreshing the large widget also refreshes the small one when both are installed, including on different home-screen pages.

On Pixel Launcher, **At a Glance** at the top of the first screen is separate. It is not the Weather widget and it does not get this refresh button. At a Glance still follows its own Android System Intelligence update path.

![Smartphone on a windowsill with overcast daylight](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80)

## Step 3 — Use the refresh button

1. Unlock the phone so the widget is visible (a locked or off screen will not show a new tap target).
2. On the **large** Weather widget, tap the **refresh** control at the **top right**.
3. Wait a moment for temperature, condition text, and hourly chips to rewrite. A brief in-place update is normal; you should not need to open the app.
4. Glance at any small Weather widget you placed elsewhere. It should pick up the same snapshot.

If nothing changes, the tile already has a fresh observation, location is off, or the device is offline. Open Weather itself: the full app still refreshes when you enter it, which is the check Google documents for the phone and, separately, for Pixel Watch.

## Step 4 — Swipe forecasts inside the app

The same build removes the tiny arrow keys on the hourly and 10-day rows.

1. Open **Weather**.
2. Swipe the hourly cards left and right for the next several hours.
3. Swipe the daily row for the 10-day outlook.
4. Use **Search** on the Weather home screen to add a city, then **Add** to save it, as described in Pixel Phone Help.

There is no documented setting to bring the arrows back. If you relied on them one-handed, swipe from the middle of the card row rather than the screen edge so you do not trigger back gesture.

## Keep the forecast accurate

Pixel Help’s accuracy tip is location, not the widget button.

1. Settings → Apps → **Weather** → **Permissions** → **Location** → **Allow all the time** or **Allow only while using the app**, plus **Use precise location**.
2. In Weather, tap the profile picture → **Pixel Weather Settings** → **Temperature** if you want C or F instead of the default.
3. Settings → Apps → Weather → **Notifications** if you want precipitation alerts. That path is independent of the widget refresh.
4. Sign in inside Weather if you want saved cities to follow you across Pixel phones and Pixel Tablet.

Weather map (6-hour precipitation) remains limited to the United States, United Kingdom, and most EU countries except Italy and Luxembourg, per the same Help article. The widget refresh does not unlock the map in other regions.

![Rain on a window with a blurred street beyond](https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80)

## Fix a blank or stuck widget

Work through this list before removing the tile for good.

- **Wrong size.** Only the large widget has the button. Resize or replace the compact tile.
- **Old binary.** Confirm 1.1.20260716 or newer. Play Store can sit on an older 1.1 build.
- **Location off.** A widget with “Location unavailable” will not improve after a tap.
- **Battery restrictions.** Settings → Apps → Weather → App battery usage → set to **Unrestricted** if the tile never updates in the background.
- **Stale process.** App info → **Force stop**, then reopen Weather and return to the home screen.
- **Cache.** App info → Storage → **Clear cache** (not storage) if the art or city name is wrong after a refresh.
- **At a Glance confusion.** If the date row at the top is wrong but the widget is fine, edit At a Glance settings from a long-press on that row — that is a different product.

Pixel Watch owners already have a manual refresh: open Weather on the watch, scroll to the bottom, and tap refresh. That control is documented in [Pixel Watch Help](https://support.google.com/googlepixelwatch/answer/16650579) and is separate from the phone widget.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/dK5r4C5hO9E" title="How to customize your Android home screen — Android" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

If that official Android customization walkthrough does not load in your region, use the widget steps above. They match current Pixel Launcher behavior: long-press home screen, open Widgets, expand Weather.

## What this is not

- It is not a new Android 17 system widget. It ships inside the Weather app.
- It does not add new data types (AQI, pollen, map) to the small tile.
- It does not replace opening the app when you need the AI Weather Report, weather map, or a rearranged card stack.
- It does not change VIP widgets, Home Favorites, or Keep. Those are other September surfaces.

## Conclusion

If your Pixel weather tile feels a few hours behind, update Weather to the mid-2026 1.1.20260716 line, put the **large** widget on a screen you actually look at, and use the new top-right refresh control. Keep precise location on so the number you just fetched is for the place you are standing.

The swipe-only forecast rows inside the app are a smaller change. Learn the gesture once and you get the same hourly and 10-day data with less chrome. For everything else — units, alerts, saved cities — Pixel Phone Help is still the source of record.

## Sources

- [Check the weather forecast on your Pixel phone or tablet](https://support.google.com/pixelphone/answer/15266029) — Pixel Phone Help
- [Check the weather on your Pixel Watch](https://support.google.com/googlepixelwatch/answer/16650579) — Pixel Watch Help
- [The Pixel Weather widget now lets you catch up on the forecast with a single tap](https://www.androidauthority.com/pixel-weather-widget-update-3712866/) — Android Authority, 18 September 2026
- [Pixel Weather Update Adds a One-Tap Refresh Button to the Home Screen](https://www.androidheadlines.com/2026/09/pixel-weather-update-adds-a-one-tap-refresh-button-to-the-home-screen.html) — Android Headlines, 19 September 2026
- [Pixel Weather update adds widgets, Material 3 Expressive tweaks](https://9to5google.com/2025/08/22/pixel-weather-native-widgets/) — 9to5Google (widget sizes and native Weather widgets)
