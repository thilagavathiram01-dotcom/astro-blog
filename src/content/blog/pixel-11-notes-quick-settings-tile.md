---
title: "How to Add the Notes Tile in Pixel 11 Quick Settings"
description: "Add the Notes Quick Settings tile on Pixel 11 after Android 17 QPR3 Beta 1, confirm the build, and pin the tile from the shade editor."
pubDate: 2026-10-05T09:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "pixel", "how-to", "tutorials"]
noindex: false
---

Pixel 11 owners on Android 17 QPR3 Beta 1 can open a note without unlocking the launcher first. Testers found a Notes tile in Quick Settings after the October 2, 2026 beta, sitting alongside the lock screen shortcut and home screen widget that arrived in the QPR2 beta. The tile is not listed in Google's fixed-issue notes, so treat it as an early Pixel 11 sighting until a Feature Drop documents it.

This guide covers how to confirm you are on the right build, add the tile, and what to expect if you are still on a Pixel 10.

## What shipped on October 2

Android Developers lists Android 17 QPR3 Beta 1 with a release date of October 2, 2026. The page names two builds, DP11.260918.005 and DP11.260918.006, emulator support for x86 64-bit and ARM v8-A, security patch level 2026-08-05, and Google Play services 26.32.34.

Device reports split those builds by hardware. Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, and Pixel 11 Pro Fold have been seen on DP11.260918.005. Other supported Pixels have been seen on DP11.260918.006. Google's release notes page lists both builds without assigning them to specific phones, so check Settings on your own device rather than assuming the split.

The official notes are mostly bug fixes. They include a crash when an app tried to start a foreground service from a Quick Settings tile (issue 299506164), a stray dot on the Mobile Data tile (issue 551150806), and fingerprint unlock freezes. They do not mention a Notes tile. The tile report comes from hands-on coverage of the same build, not from the platform release notes.

![Handwritten notes beside a phone on a desk](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Confirm the beta before you look for the tile

The Notes tile showed up for testers only after QPR3 Beta 1, and only on the Pixel 11 series. A Pixel 10 on the same beta still did not show Notes as a system tile in that report. If you have not joined the beta yet, follow the install steps in [How to install Android 17 QPR3 Beta 1 on Pixel](/blog/android-17-qpr3-beta-1-pixel-install/) before you edit Quick Settings.

1. Open Settings and tap About phone.
2. Tap Android version, then Android version again, until the build number is visible.
3. On a Pixel 11 series phone, look for DP11.260918.005. Other Pixels in this beta have been reported on DP11.260918.006.
4. Confirm the security patch reads August 5, 2026. That matches the level published with this beta.
5. Restart once after the update finishes so system tiles reload.

Beta software can change between builds. If the tile is missing after a later QPR3 build, check the Android Developers release notes again before you factory reset.

## Add the Notes tile

Pixel Phone Help documents the Quick Settings editor that every recent Pixel uses. The same editor is where the new Notes tile appears once the system exposes it.

1. Swipe down from the top of the screen to open the first row of Quick Settings.
2. Swipe down again to open the full shade.
3. Tap the pencil icon to edit tiles.
4. In the inactive area, look for Notes. On Pixel 11 series phones running this beta, testers found it after the update.
5. Touch and hold Notes, then drag it into the active tile grid.
6. Place it in the first page if you want one-swipe access. The first page is the row you see after a single swipe.
7. Tap the back arrow or Done to save.

Tap the tile to open your default notes app. On Pixel 11, QPR2 already added a lock screen Notes shortcut and a home screen widget. The Quick Settings tile is a third entry point, useful when the phone is unlocked and you do not want to leave the current app to find the launcher icon.

If Notes is not in the inactive list, the tile has not been exposed on that device. Do not install a third-party Quick Settings app to fake it. Those apps cannot register the system Notes action Google added for Pixel 11.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5LGN8gU26KA"
    title="Android 17 QPR3 Beta 1 – Pixel 11 Features Are Coming to Pixel 10!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What else changed in the same beta

Testers also reported visual changes that are easy to confuse with the Notes tile. Status bar icons picked up a bolder VPN glyph, a silent-mode icon that matches the volume menu, and slightly larger Bluetooth and Airplane Mode badges. Those icon changes do not add new controls. They only redraw icons that were already there.

On Pixel 10 hardware, the same beta brought the Gemini Intelligence boot animation that had been limited to Pixel 11, and Proactive Assistance reappeared in system Settings above Magic Cue. Proactive Assistance did not show up inside Gemini app settings in that test. None of that replaces the Notes tile, and none of it was listed as a user-facing feature in the October 2 release notes.

![Phone and laptop used to check a software build](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Tips if the tile misbehaves

A related bug fix in this beta matters if you build apps that use Quick Settings. Google fixed a crash where apps died while starting a foreground service from a tile (issue 299506164). If a notes app you installed still crashes when its own tile is tapped, update the app. The system Notes tile and a third-party tile are separate.

- Keep the tile on the first page. Later pages need an extra swipe, which removes the point of the shortcut.
- If the tile opens the wrong app, set your preferred notes app as the default in Settings, then tap the tile again.
- Do not rely on the tile for work notes until QPR3 leaves beta. Preview builds can drop a tile in a later beta the same way Proactive Assistance disappeared during QPR2 testing.
- Pixel 10 and older phones should use the lock screen shortcut or a home screen widget if those are available, or the notes app icon. The QPR3 Beta 1 report did not show the system Notes tile on Pixel 10.

## Conclusion

Android 17 QPR3 Beta 1, released October 2, 2026 as builds DP11.260918.005 and DP11.260918.006, is a fix-heavy preview. The Notes Quick Settings tile is a Pixel 11 series addition reported on that build, not a line item in the official fixed-issue list. Confirm the build, edit Quick Settings, and drag Notes into the active grid. If the tile is absent, you are likely on hardware that has not received it yet.

## Sources

- [Android 17 QPR3 release notes](https://developer.android.com/about/versions/17/qpr3/release-notes) — Android Developers, October 2, 2026
- [Here's everything new in Android 17 QPR3 Beta 1](https://9to5google.com/2026/10/02/android-17-qpr3-beta-1-everything-new/) — 9to5Google, October 2, 2026
- [Change settings quickly](https://support.google.com/pixelphone/answer/14850259?hl=en) — Pixel Phone Help
