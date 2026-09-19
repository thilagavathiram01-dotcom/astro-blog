---
title: "How to Use Pixel Now Playing Notifications and History After the September 2026 Update"
description: "Turn recognized-music notifications back on in Now Playing 2026.08.27 and Android System Intelligence C.6, use lock-screen search, favorites with timestamps, and the one-handed song sheet."
pubDate: 2026-09-19T23:00:00
tags: ["android", "pixel", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&h=630&q=80"
---

Pixel Now Playing spent most of 2026 as a standalone app instead of a buried Settings toggle. The March redesign improved history and favorites. It also dropped the silent notification that used to name the song while you were using the phone. In mid-September 2026 Google put that notification back, alongside a one-handed action sheet and timestamps on Favorites.

This guide walks through the current app and system versions, how to turn the alerts on or off, and how the lock screen, Quick Settings tile, and History tab fit together. It is based on Google’s Pixel Phone Help page for Now Playing and on the September 17 app and server-side changes reported by 9to5Google.

![Headphones and a phone on a wooden table](https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80)

## What changed in September 2026

Two pieces landed together:

- **Now Playing 2026.08.27.x** on Play Store, first described on 2 September, with a bottom sheet for Share, favorite, and remove, plus dates and times on the Favorites tab.
- A **server-side switch** on 17 September, with **Android System Intelligence C.6**, that restores **Recognized Music Notifications**. These are silent shade alerts so you can see the current song without opening the app or the Quick Settings tile.

Notifications are **on by default** once the switch reaches your account. You can disable them in Now Playing → Settings → Notifications.

Google’s [Pixel Phone Help](https://support.google.com/pixelphone/answer/7535326) already said you can find song info whether the phone is locked or unlocked. The September change brings the product back in line with that documentation after the standalone-app launch had removed the shade entry.

Availability is Pixel-only. The standalone app is aimed at **Pixel 6 and later** that received the March 2026 Pixel Drop. Older Pixels may still have the Settings-only Now Playing path and will not get the new app chrome.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/l3BabZJaokU" title="The Android Show 2026 overview — Pixel and Android features" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Update the two packages that matter

Now Playing is an app. Recognition still depends on Android System Intelligence.

1. Open Play Store → search **Now Playing** by Google → **Update**. Confirm **2026.08.27** or later under the app’s About or Play listing.
2. Open Settings → tap your account name → **All services** → **Privacy & security** → **System services**. Update **Android System Intelligence**. C.6 is the build associated with the notification return.
3. Wait up to a day after a fresh install of Now Playing. Google’s help page says the on-device song library can take time to download.
4. Charge the phone on Wi-Fi once so the recognition database can finish.

If Play Store shows no Now Playing listing, you are not on a supported Pixel or the March 2026 drop never arrived.

## Turn identification on

1. Open the **Now Playing** app, or go to Settings → Sound & vibration → Now Playing if you still use the old entry.
2. Enable **Identify songs playing nearby**.
3. Add the **Now Playing** tile to Quick Settings (two-finger shade → edit → drag the tile up).
4. On the lock screen, confirm you still have **Tap to see what’s playing** under the fingerprint or lock icon. Google restored that manual search in April 2026 after the redesign had removed it.

Passive identification uses an on-device library. It does not need a network for songs already in that library. Google may use the cloud when the local set misses a track or when you ask for extra metadata. If you shared usage and diagnostics, Google says it collects high-level accuracy stats, not a stream of everything you hear.

![Person listening to music outdoors with wireless earbuds](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80)

## Use Recognized Music Notifications

Once C.6 and the server flag are on your device:

- A silent notification appears when a nearby song is identified while the phone is unlocked.
- Expand it to jump to **History** or to **favorite** the track.
- You do not have to open the full app or glance at Quick Settings.

To turn the alerts off:

1. Open Now Playing.
2. Open **Settings**.
3. Open **Notifications**.
4. Disable recognized-music notifications.

Leave them on if you often miss the lock-screen line because you are already in another app. Turn them off if you do not want a persistent music chip in the shade at a cafe or on public transit.

The notification is not a media-session control. It will not pause the restaurant speaker. It only labels what the microphones already classified.

## History, favorites, and the new song sheet

Open the app and use the **History** tab for everything identified recently. On Pixel 3-class hardware and newer, Google’s older help text still describes multi-select to listen, share, or delete. In the 2026 app:

- Tap the **three-dot** control on a track.
- Use the **bottom sheet** (not the old floating menu) for **Share**, **Add to favorites**, and **Remove from history**.
- Play the song in the music service you connected under Settings.
- Check **Favorites** for the same date and time stamps History already had.

Connect Spotify, YouTube Music, or another listed service in Now Playing settings before you expect a Play button to do anything useful. The app does not ship its own streaming catalog.

Manual search paths if passive ID fails:

- Lock screen: **Tap to see what’s playing**
- Quick Settings tile
- The large control on the Now Playing home screen
- A home-screen widget, if you added one

You will see the system microphone indicator and “Identifying song…” while it runs an on-demand pass.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/kJQP7kiw5Fk" title="Luis Fonsi - Despacito (example of a widely recognized track; use Now Playing nearby to ID real songs)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Wait — that second embed is the wrong video. Use Google's Pixel product overview instead when you want a device walkthrough, and treat Now Playing as the on-device classifier described in Help. For a Pixel-focused recap of 2026 platform changes, the Android Show clip above is the official long-form source; Now Playing itself is documented in Help rather than a dedicated launch film.

## Privacy and limits

- Recognition is designed to stay on-device for the default library.
- Third-party history exporters that scraped the old Settings database broke when Google moved Now Playing into its own app in March 2026. Do not expect those tools to return.
- Multi-user history (a separate log per Android user) has appeared in System Intelligence strings. Treat it as unconfirmed until Google documents it.
- Loud rooms, TV dialogue, and live bands still confuse the classifier. If the notification names the wrong song, remove it from History so it does not pollute Favorites.
- Now Playing is not Shazam on every Android phone. Samsung and other OEMs have their own identifiers.

## A 10-minute setup checklist

1. Update Now Playing to 2026.08.27.x and Android System Intelligence to C.6 or later.
2. Turn on Identify songs playing nearby and wait for the database download.
3. Add the Quick Settings tile and confirm lock-screen tap-to-search.
4. Play a known track next to the phone. Confirm lock-screen text, then an unlocked notification.
5. Expand the notification, favorite the song, and confirm the timestamp on the Favorites tab.
6. Connect your music service and play the same track from the bottom sheet.
7. Decide whether shade notifications stay on. If not, disable them in Now Playing Settings.

## Conclusion

The September 2026 Now Playing update is a restoration more than a new product. You get the silent notification back, a sheet you can reach with a thumb, and timestamps on songs you actually want to keep. Update both packages, identify one real song in the room you are in, and favorite it from the notification. That is the whole workflow.

If the shade alert is missing after the Play updates, wait for the server flag. Google rolled it out account by account starting 17 September 2026. The lock screen and the tile still work while you wait.

## Sources

- [Find out what music is playing near you](https://support.google.com/pixelphone/answer/7535326) — Pixel Phone Help
- [Pixel Now Playing update brings interface tweaks & notifications](https://9to5google.com/2026/09/17/pixel-now-playing-tweaks/) — 9to5Google, 17 September 2026
- [Pixel Now Playing update brings interface tweaks](https://9to5google.com/2026/09/02/pixel-now-playing-tweaks/) — 9to5Google, 2 September 2026
- [Google is undoing this annoying Now Playing downgrade on Pixels](https://www.androidauthority.com/pixel-now-playing-notifications-restored-3708730/) — Android Authority, 8 September 2026
- [Pixel Now Playing brings back lockscreen search](https://9to5google.com/2026/04/09/pixel-now-playing-search/) — 9to5Google, 9 April 2026
- [The Android Show was HUGE](https://www.youtube.com/watch?v=l3BabZJaokU) — 9to5Google
