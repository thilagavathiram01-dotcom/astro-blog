---
title: "How to Use Google Keep’s Updated Note Collection Widget on Android"
description: "Keep 5.26.365 replaces the Note collection sidebar with a circular FAB. Learn how to add, resize, and filter Keep widgets, and when to use Single note or Quick capture instead."
pubDate: 2026-09-20T09:00:00
tags: ["android", "tutorials", "google-keep"]
heroImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&h=630&q=80"
---

Google Keep’s largest home-screen widget just lost its right-hand shortcut rail. In Keep for Android **5.26.365.x**, the **Note collection** widget no longer stacks add-text, list, audio, drawing, and photo buttons down the side. Those actions now live behind a circular floating action button, the same pattern as the **Single note** widget and the smaller **Quick capture** pill.

The change is small, but it is the first meaningful layout update to Note collection since the Material You widgets landed. You get more of each note on screen. Creating a new item takes a second tap. If you still see the old rail, you are either on an older Keep build or Android has not refreshed the widget instance yet.

This guide explains what changed, how to add and filter the three official Keep widgets, and how to use them as a capture inbox rather than a decorative tile.

![Notes and a checklist on a desk next to a phone](https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80)

## What changed in Keep 5.26.365

[9to5Google](https://9to5google.com/2026/09/17/google-keep-widget-tweak/) reported the rollout on **17 September 2026**. The Note collection widget is the feed-style tile that shows several notes at once. Previously it reserved a Material You sidebar for create shortcuts. That column ate width on a full-span widget and left empty gutters when you stretched the tile across the home screen.

The new layout:

- Removes the vertical shortcut rail
- Adds a circular **FAB** that opens a create menu
- Uses an edge-to-edge card so note titles and list rows get more pixels
- Matches the create flow already used by **Quick capture** (tap the control, then pick note type)

Google’s public help page still lists the same three widgets. The update is a visual and interaction change inside Note collection, not a fourth widget type.

Keep Live — voice capture for Google AI Plus, Pro, and Ultra — is a separate product surface. You do not need a paid AI plan for the widget redesign.

## The three Keep widgets, and which one to keep

Google’s [Keep help article](https://support.google.com/keep/answer/13302793) documents three Android-only widgets. iOS does not offer the same home-screen set.

| Widget | Best for | Create flow after this update |
| --- | --- | --- |
| **Note collection** | A live stack of all notes, pinned notes, or one label | FAB → pick type |
| **Single note** | One shopping list or project card you edit in place | FAB on that tile |
| **Quick capture** | Fast inbox when you do not need to *see* old notes | Tap a type (or the plus) |

Use **Note collection** if the home screen is your review board. Use **Single note** if one list is the thing you open ten times a day. Use **Quick capture** if you only want a dump chute and will triage later in the app.

You can run more than one. A common setup is Quick capture on the first page and a label-filtered Note collection on a second page.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/-2axrnYS4Co" title="BEST Google Widgets for Android — includes Google Keep widgets" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## How to add or replace the Note collection widget

Do this after Keep updates, or if the old sidebar is still stuck on a tile you placed months ago.

1. Open the Play Store, search **Google Keep**, and update to **5.26.365.x** or newer.
2. Long-press an empty area on the home screen and tap **Widgets**.
3. Search **Keep** and open **Keep Notes**.
4. Drag **Note collection** onto the grid. Resize it so at least two notes are readable.
5. If Keep asks for an account, pick the Google Account that owns the notes.
6. Choose the feed: **All notes**, **Pinned notes**, or a **label**.
7. If an old instance still shows the rail, remove that widget and place a fresh one. Force-stopping Keep from App info can also refresh a stale RemoteViews tile.

Android launchers differ. On Pixel Launcher the picker is under the long-press menu. On some OEM launchers, Widgets lives in the app drawer overflow.

![Person writing a list on a smartphone](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80)

## Filter the feed so the widget stays useful

An unfiltered collection of every Keep note is noise. The widget only earns its grid cells if the stack is a working set.

Practical filters:

- **Pinned notes** for the three lists you actually touch (groceries, packing, weekly agenda).
- **One label per widget** if you want a work stack and a home stack. Place two Note collection widgets instead of scrolling one mixed feed.
- **Color plus label** inside the app so the cards are scannable at a glance. The widget inherits note color.

Avoid dumping photos and voice memos into the same label you pin to the home screen. Those cards waste height.

## Create a note from the new FAB

After the update, creating from Note collection is two taps:

1. Tap the circular button on the widget.
2. Choose text, list, audio, drawing, or photo from the sheet.
3. Save. The new item should appear in the feed if it matches the widget filter (all / pinned / that label).

If you pin by label, create the note *with that label* or it will not show on that tile. Single note still lets you edit the chosen note without opening the full app, which is faster for checklists.

Quick capture remains the better one-handed inbox. The September change made Note collection behave like that smaller widget instead of offering five always-visible create icons.

## Pair the widget with Messages and Gmail

Two other Keep surfaces landed around the same month and work with the widget instead of replacing it.

- **Keep notes in Google Messages** (September 2026 Android Drop) lets you turn a chat snippet into a Keep note. That note will show on a Note collection widget if the filter includes it.
- **Keep in the Gmail side panel** on desktop is still the place to file a thought without leaving mail. Sync is the same account, so the phone widget updates after the note lands.

Neither feature needs the new FAB. They just feed the same note graph the widget reads.

## If the new layout does not appear

Work through this list before assuming a bug.

- **Old APK.** Confirm version 5.26.365.x or later in Play Store → Keep → About.
- **Stale widget instance.** Delete and re-add. Widgets cache layout until the provider is rebound.
- **Wrong tile.** Quick capture and Single note already used compact create controls. Only Note collection lost the rail.
- **Launcher grid.** Some launchers clip FABs. Resize the widget one row taller.
- **Work profile.** A work Keep account will not show personal notes. Place the widget from the profile that owns the labels you care about.

Google has not published a dedicated product blog for this tweak. Treat availability as a staged Play Store plus server-side widget refresh.

## A 10-minute home-screen setup

1. Update Keep.
2. Create or clean two labels, for example `inbox` and `errands`.
3. Pin only the notes that belong on glass.
4. Place Quick capture on the primary home screen.
5. Place Note collection filtered to `errands` or Pinned notes where you have space.
6. Remove any leftover Note collection tile that still shows the sidebar.
7. Capture one test list from the FAB and confirm it appears.

![Laptop, notebook, and phone on a wooden table](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80)

## Conclusion

The Note collection redesign is not a new note-taking model. It is a density fix: Google traded always-visible create shortcuts for more of the notes you already wrote. If you used that sidebar as a five-button launcher, switch those taps to Quick capture and let Note collection be a reader.

Update Keep, replace the old tile, filter the feed, and keep create on the smallest widget that still fits your thumb.

## Sources

- [Google Keep update tweaks the homescreen widget on Android](https://9to5google.com/2026/09/17/google-keep-widget-tweak/) — 9to5Google, 17 September 2026
- [Get notes on your Android home screen](https://support.google.com/keep/answer/13302793) — Google Keep Help
- [Sept. 2026 Android Drop: Find Hub, Motion Assist, and Keep in Google Messages](https://9to5google.com/2026/09/01/september-2026-android-drop/) — 9to5Google
- [BEST Google Widgets for Android](https://www.youtube.com/watch?v=-2axrnYS4Co) — 9to5Google
