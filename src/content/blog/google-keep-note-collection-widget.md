---
title: "How to Use the Updated Google Keep Note Collection Widget on Android"
description: "Google Keep 5.26.365 replaces the Note collection sidebar with a circular FAB. Add the widget, pick a label feed, and capture notes from the home screen without wasting grid space."
pubDate: 2026-09-20T16:15:00
tags: ["android", "tutorials", "google-keep"]
heroImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&h=630&q=80"
---

The Note collection widget is the Keep feed most people actually leave on a home screen: several notes at once, filtered to a label or to pinned items. In mid-September 2026, Keep version **5.26.365.x** changed how you *create* from that widget. The Material You sidebar of add shortcuts is gone. A circular floating action button (FAB) now opens the same pop-up the smaller Quick capture widget already uses.

The change is small. It is also the difference between a widget that wastes a column of icons and one that shows more of each note edge to edge. This guide walks through adding the right Keep widget, choosing what it displays, and using the new FAB without fighting your launcher.

![Sticky notes and a notebook on a desk, representing a home-screen note feed](https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80)

## What changed in Keep 5.26.365

[9to5Google](https://9to5google.com/2026/09/17/google-keep-widget-tweak/) reported the rollout on **17 September 2026**. On the **Note collection** widget:

- The right-hand column of shortcuts (text note, list, audio, drawing, photo) is removed.
- A circular FAB sits on the widget, matching **Single note**.
- Tapping the FAB opens a pop-up to pick the capture type — the same second tap Quick capture already required.
- The note cards themselves run closer to the widget edges, so a full-width layout shows more title and body text.

Google did not publish a standalone Keep blog for this build. Treat it as an app update on Play Store, not an Android Drop feature. You need Keep **5.26.365.x** or later. If the sidebar is still there, update Keep and remove-then-readd the widget so the launcher reloads the layout.

Official widget types have not changed. Google’s [Keep Help page](https://support.google.com/keep/answer/13302793) still lists three Android widgets:

- **Single note** — one pinned note you can tick or open in the app
- **Note collection** — a scrollable feed of all notes, pinned notes, or one label
- **Quick capture** — create-only shortcuts, no feed

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/-2axrnYS4Co" title="BEST Google Widgets for Android — Keep widget section" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Update Keep, then replace the old widget

1. Open Play Store → Google Keep → **Update**. Confirm **5.26.365** or newer under Keep → Settings → About.
2. Long-press the existing Note collection widget → **Remove**.
3. Long-press an empty home-screen spot → **Widgets** → search **Keep**.
4. Drag **Note collection** onto the screen and resize it. A 4×2 or 4×3 block is enough to see two or three cards.
5. If Keep asked which Google account to use, pick the one that holds the notes you want on the home screen.
6. Choose the feed: **All notes**, **Pinned notes**, or a **label**.

OEM launchers hide Widgets in different places. On Pixel it is long-press home → Widgets. On Samsung it is long-press home → Widgets, or the Widget button in the app drawer for One UI.

If the FAB never appears after the update, force-stop Keep from App info, then place a *new* Note collection widget. Android caches the old remote-views layout until the widget instance is recreated.

## Pick a feed that is worth the pixels

A collection of *all* notes is noisy. Google’s picker lets you limit the widget when you place it.

**Pinned notes.** Use this if the widget is a dashboard: travel packing list, a week’s meal plan, a work “today” checklist. Pin those notes inside Keep first.

**One label.** Create labels such as `home`, `errands`, or `school`. Put only short notes on that label. The widget then behaves like a room-specific board instead of a dump of every thought you ever captured.

**All notes.** Fine as a temporary inbox on a secondary home-screen page. Poor as the only widget on page one.

You cannot change the feed from the widget chrome after placement on every launcher. If the filter is wrong, remove the widget and add it again.

![Person organizing handwritten notes next to a smartphone](https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80)

## How to capture from the new FAB

The extra tap is the trade-off for more note preview.

1. Tap the circular button on the Note collection widget.
2. Choose text, list, audio, drawing, or photo from the pop-up.
3. Finish the note in Keep. It should show up in the widget after Keep syncs — usually a second or two on Wi-Fi.

If you capture many notes a day and hate the extra tap, keep **Quick capture** as a 4×1 strip *and* use Note collection only as a reader. That is the pairing Keep’s three-widget set is built for.

Single note is still the right tool for one checklist you tick from the home screen. Google’s help page is explicit: checkboxes on Single note can be toggled without opening Keep; body text edits still open the app.

## Use it with Messages and Keep Live

Two nearby Keep features are easy to confuse with the widget change.

- **Keep notes inside Google Messages** arrived with the [September 2026 Android Drop](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/). In a chat, tap **+** and attach a Keep list so the thread can edit it. That is not a home-screen widget.
- **Keep Live** is the Gemini voice inbox for Keep. Google limited the first wave to Google AI Plus, Pro, and Ultra plans when Gmail Live, Docs Live, and Keep Live rolled out in early September 2026. You do not need Live for the FAB widget.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/2bIwZntp38w" title="September 2026 Android Drop – new features including Keep in Messages" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Troubleshooting

**Widget shows a blank card or an old note.** Open Keep, pull to refresh, then wait. If it stays stale, remove and readd the widget. Battery restrictions on Keep (OEM “sleeping apps” lists) also freeze widget updates.

**FAB opens Keep instead of the pop-up.** You tapped a note card, not the button. The cards still open the selected note.

**Wrong account’s notes.** Keep widgets bind to one account at placement. Remove the widget and choose the other account when the picker appears.

**No Keep entry in the widget picker.** Install Keep from Play Store. Work profiles sometimes hide personal widgets on the personal home screen; add the widget on the profile that owns the Keep data.

**iPhone.** There is no Note collection widget on iOS in Google’s current help article. This update is Android-only.

## A 10-minute setup

1. Update Keep to 5.26.365 or later.
2. Label five notes you actually glance at daily.
3. Place Note collection filtered to that label, sized at least 4×2.
4. Confirm the circular FAB and tap it once so you know the pop-up path.
5. Add Quick capture on the same page if you jot more than you read.
6. Pin one checklist as Single note if you tick boxes from the home screen.

## Conclusion

The September 2026 Keep widget tweak is a layout cleanup, not a new notes product. Remove the old Note collection instance after you update, give the new one a label instead of “all notes,” and use the FAB the same way you already use Quick capture. The feed then earns the grid space it occupies.

If you already live in Keep plus Messages shared lists, leave those flows alone. The widget is only the home-screen reader and a slightly slower create button.

## Sources

- [Get notes on your Android home screen](https://support.google.com/keep/answer/13302793) — Google Keep Help
- [Google Keep update tweaks the homescreen widget on Android](https://9to5google.com/2026/09/17/google-keep-widget-tweak/) — 9to5Google, 17 September 2026
- [September Android Drop](https://blog.google/products-and-platforms/platforms/android/android-drop-september-2026/) — Google
- [Google Keep on Google Play](https://play.google.com/store/apps/details?id=com.google.android.keep)
- [BEST Google Widgets for Android](https://www.youtube.com/watch?v=-2axrnYS4Co) — 9to5Google
