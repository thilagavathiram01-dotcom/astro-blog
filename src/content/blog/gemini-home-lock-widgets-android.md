---
title: "Add Gemini Widgets on Android Home and Lock Screen"
description: "Add official Gemini widgets on Android 10+: Live, mic, camera, files, and photos shortcuts on the home or lock screen."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "tutorials", "productivity", "google", "ai-tools"]
noindex: false
---

Opening the Gemini app every time you want a quick prompt wastes a tap. Google’s official Gemini widgets put Live, voice, camera, files, and photo upload on the home screen or lock screen so the first action is the one you need.

This walkthrough follows Google’s Gemini Apps Help page. It is separate from Create My Widget, which generates custom home-screen cards with Gemini Intelligence. Here you add the first-party Gemini app widget and size it so the shortcuts you use stay visible.

## What the widget can start

Google lists these actions on the widget:

- Open Gemini
- Open Gemini Live
- Open Gemini with the microphone ready
- Open the camera inside Gemini
- Open Files so you can attach a document
- Open your images so you can attach a photo

Later Gemini app builds also expose Video and Screenshare tiles that jump into Live with those modes. Those extra tiles show when the widget is large enough, typically 3×3 or the wide 5×1 strip.

You still talk to the same Gemini account you use in the app. Connecting Gmail, Calendar, or Drive is unchanged. If you have not wired those up yet, do that first in [Connect apps to Gemini on web and Android](/blog/connect-apps-gemini-web-android/).



![Person holding an Android phone on a wooden desk](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)



## What you need

Google’s requirements are short:

1. Android 10 or later
2. The Gemini app installed from the Play Store, not a sideloaded APK

Sign in once inside the app. If Gemini is still hidden behind a region check, the widget picker will not list it.

On Pixel and many Galaxy phones you can also pin Gemini to the power button. Keep that shortcut. The widget is for one-tap Live or camera, not a replacement for the system assistant gesture.

## Add the widget to the home screen

Use the system widget picker, not an in-app “add widget” button.

1. Touch and hold an empty spot on the home screen.
2. Tap **Widgets**.
3. Search for **Gemini**.
4. Drag the Gemini widget onto the page you want.

Some launchers put Widgets under a Home settings menu instead of a long-press sheet. The search term is still Gemini. Ignore third-party “AI assistant” widgets from other packages.

If search returns nothing, open Play Store, update Gemini, force-stop the launcher, and try again. The widget ships with the Gemini app package, not with the Android system image.

## Size it so the right shortcuts stay visible

Google’s help page says to touch and hold the widget, then drag an edge to resize or drag the whole block to move it. Remove it by dragging to **Remove**.

Size changes which tiles you see:

- Smallest: a single Gemini icon
- Narrow: Gemini plus Live
- Medium bar: prompt field plus voice, camera, files, photos
- 3×3 or larger: the full shortcut grid, including Live modes on current app builds
- Wide 5×1: a strip aimed at Live modes

Put a small icon on a crowded first page. Put the medium bar on a second page you swipe to when you actually want to talk or attach a file.

Avoid stacking two Gemini widgets on the same page. One well-sized block is easier to hit with a thumb than two overlapping grids.



![Home screen widgets and notes arranged on a table](https://images.unsplash.com/photo-1484480974693-6ca0f3829b9d?auto=format&fit=crop&w=800&q=80)



## Lock screen access

Google’s help title includes the lock screen. Support for lock-screen widgets depends on the launcher and Android version, not only on Gemini.

On Pixel-style launchers that allow lock-screen widgets:

1. Open **Settings → Display → Lock screen** (labels vary by OEM).
2. Add widgets if the menu offers it.
3. Choose Gemini if it appears in that list.

If the lock screen only allows clocks, weather, and At a Glance, keep Gemini on the home screen. Do not use a third-party lock-screen overlay that claims to embed Gemini. Those apps cannot call official Live or camera entry points.

A lock-screen Gemini tile should still require your PIN, pattern, or biometric when the action leaves the lock screen. That is expected. You want the shortcut; you do not want an unlocked chat history.

## Pick a default action for how you work

Match the first tap to the job you do most:

- Writers and inbox triage: medium bar with the prompt field and mic
- Desk work with PDFs: keep Files visible
- Repair, cooking, or travel: camera and Live
- Hands-free: Live only, large enough to hit without looking

Voice-heavy use is common. Google reported that 63% of Gemini app users talk to Gemini, and that many Live sessions also use camera or screen share. A widget that opens Live or the mic matches that habit better than a widget that only opens the text thread.

## Widget versus Create My Widget

Do not confuse the two.

The Gemini app widget is a launcher for Gemini itself. Create My Widget, listed on Play Store in late September 2026 for Pixel and current Galaxy phones, builds a custom information card from a text prompt. That card can show weather slices, countdowns, or combo dashboards. It does not replace Live or file upload.

Use both if you want a countdown card *and* a one-tap Live button. They solve different jobs.

## If shortcuts are missing

Work this list in order:

- Update Gemini from Play Store
- Confirm Android 10+
- Resize the widget larger before you assume a tile was removed
- Sign out and back into Gemini if the widget opens a blank account picker
- Restart the launcher after a Gemini update

OEM launchers sometimes clip widget padding. If icons look cut off, add a row of empty space under the widget or switch that page to a 5-column grid.

Work profiles can hide consumer Gemini. If you are on a company phone, check whether Gemini is allowed in the personal profile only. Place the widget on the personal home screen.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4f7VamjPHaM"
    title="Introducing Gemini Intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Gemini Intelligence on Pixel and Galaxy flagships adds multi-step app actions on top of the same assistant. The widget still matters there: it is the fastest way to start Live or a camera prompt before an agent run.

## Tips

Put the widget on the page you land on after unlock, not a folder. A folder adds two taps and defeats the point.

Keep one camera shortcut if you use Guided vision or Gemini Live with the camera. Guided vision from the September 2026 Android Drop still starts in Gemini Live. A widget that opens Live plus camera is faster than hunting the Accessibility shortcut every time.

Do not grant a random “Gemini widget pack” from Play Store. The official tiles come from the Gemini app.

If you use a Bluetooth keyboard or Dex-style desktop mode, the medium bar with a prompt field is more useful than a Live-only icon.

## Conclusion

The official Gemini widget is a launcher, not a dashboard. Install Gemini from Play Store, long-press the home screen, add the Gemini widget, and resize it until Live, mic, camera, or files sit where your thumb already is.

Use Create My Widget when you want a custom card. Use this widget when you want to start Gemini in one tap. That split keeps the home screen readable.

## Sources

- [Add and customize your Gemini widget — Gemini Apps Help](https://support.google.com/gemini/answer/16179553)
- [Gemini app on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.bard)
- [Gemini Intelligence on Android — Google blog](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/)
- [Gemini app reaches 1 billion monthly users — Google blog](https://blog.google/innovation-and-ai/products/gemini-app/one-billion-monthly-users/)
- [Gemini widget shortcuts — 9to5Google](https://9to5google.com/2025/07/02/new-gemini-icon-app-update/)
