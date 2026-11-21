---
title: "How to Meet Google Play Adaptive Quality Tier 3 by April 2027"
description: "Prepare your Android app for Google Play Tier 3 adaptive quality on foldables. Meet full-screen, state continuity, and screenshot rules before the April 2027 deadline."
pubDate: 2026-11-21T21:30:00
heroImage: "https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Google Play will require apps to meet Tier 3 of the adaptive app quality guidelines for foldables starting April 2027. Apps that fall short can no longer publish updates and may see lower visibility. The change also adds a requirement for three foldable screenshots on store listings.

This guide walks through what Tier 3 demands, how to implement it with Jetpack Compose, how to test, and how to upload the new screenshots. It draws only from the official Android Developers Blog post and the adaptive app quality guidelines.

## What Tier 3 requires

Tier 3 is called Adaptive ready. Your app must fill the available display area on foldables without letterboxing or compatibility mode. Content must not overflow the window.

It must also preserve state across configuration changes. Scroll position, typed text, and media playback position survive rotation, folding, unfolding, and window resizing in multi-window or desktop modes. The app must work in multi-window environments.

Basic stylus support is expected on devices that have one: users can select and scroll with a stylus. These rules apply to standard apps. Games have a separate timeline that reaches Tier 3 in August 2027.

Higher tiers build on this baseline. Tier 2 adds multi-pane layouts and better keyboard, mouse, and stylus handling. Tier 1 covers foldable postures, camera continuity, and picture-in-picture. Meeting Tier 3 keeps you able to ship; Tier 2 and Tier 1 unlock badging and better store placement.

![Person holding a foldable phone showing multiple apps](https://images.unsplash.com/photo-1787829491964-5106d5751fa0?auto=format&fit=crop&w=800&q=80)

## Remove orientation and resize restrictions

Many older apps lock orientation or set `android:resizeableActivity="false"`. These prevent full-screen use on large displays and will fail Tier 3. Remove the locks so the app can resize and rotate freely on foldables.

When you target API 37 (Android 17) in August 2027, the platform removes remaining developer opt-outs for orientation and resizability on large screens. Prepare for that change now.

## Preserve state across folds and resizes

Use a ViewModel or similar to hold UI state. For Compose, remember scroll state and text field values outside the composition that gets destroyed on configuration change.

```kotlin
val scrollState = rememberLazyListState()
// or for text
var text by rememberSaveable { mutableStateOf("") }
```

Media playback should resume from the last position. Test by folding the device mid-scroll or mid-video and confirming the content returns to the same place.

Window size class changes and fold postures are the main triggers. The mediaQuery API in Compose lets you react to posture and size; see our earlier guide on [adaptive layouts with mediaQuery](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

## Build full-screen adaptive layouts

Jetpack Compose adaptive APIs are the recommended path. Use window size classes or the adaptive Material 3 components so layouts expand into the available space instead of stretching a phone UI.

A simple list-detail pattern switches from a single pane on narrow windows to two panes on wider ones. NavigationSuiteScaffold can swap between a bottom bar and a rail automatically.

Avoid fixed pixel widths. Prefer flexible containers so content reflows. For foldables, check hinge location with WindowManager and keep important content out of the hinge area when the device is partially folded.

## Test on foldable emulators

Android Studio provides resizable and foldable emulators. Run the 1:1 inner display and 4:3 inner display configurations. Fold and unfold while interacting with the app. Resize the window in freeform mode.

Confirm:
- The app fills the window with no letterboxing.
- Scroll position, text input, and playback resume correctly.
- Multi-window mode works without crashes or clipped content.
- Stylus interaction selects and scrolls if the emulator supports it.

Physical devices or Android Device Streaming give the most accurate results, but the official emulators produce compliant screenshots.

![Samsung phone on an open book](https://images.unsplash.com/photo-1706469980815-e2c54ace4560?auto=format&fit=crop&w=800&q=80)

## Upload the required foldable screenshots

Starting April 2027, new apps and updates must include three foldable screenshots plus the existing two phone screenshots. You can upload them today in Play Console under Grow > Store presence > Store listings.

Required formats:
- At least one 1:1 inner display screenshot (example devices: Galaxy Z Fold8 Ultra, Pixel 11 Pro Fold).
- At least one 4:3 inner display screenshot and one outer 10:16 portrait (example: Galaxy Z Fold8).
- Optional landscape 16:10.

Capture them from the matching Android Emulator configurations. The emulator screenshots already meet the aspect-ratio rules. Customize them to show your adaptive layout, not a stretched phone screen.

## Key dates

- November 2026: Foldable screenshots can be uploaded; Tier 2 and Tier 1 apps can apply for badging.
- April 2027: Tier 3 becomes mandatory for apps. Three foldable screenshots required. Existing apps that are not updated remain downloadable.
- August 2027: New and updated apps must target API 37.

## Tips

- Start with the official adaptive app quality checklists and run the listed tests.
- Use the Jetpack Compose adaptive skill in Android Studio or Android CLI to accelerate layout work.
- Prefer multi-pane patterns on wider windows rather than simply enlarging phone components.
- Keep a short regression checklist for fold/unfold and multi-window after every release.
- Monitor the guidelines page; the framework will expand to tablets, Googlebooks, and Android XR over time.

## Conclusion

Tier 3 sets a clear baseline so foldable users get full-screen, continuous experiences. Remove orientation locks, preserve state, adopt adaptive Compose layouts, test on the official foldable emulators, and upload the three required screenshots. Completing these steps before April 2027 keeps your app publishable and ready for the larger-screen audience.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pLNJ-fNYTKU"
    title="The future unfolds! How to optimize Android apps for adaptive layouts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Elevating apps: New adaptive quality standards on Google Play](https://developer.android.com/blog/posts/google-play-adaptive-quality-standards) — Android Developers Blog, 18 November 2026
- [Adaptive app quality guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality) — Android Developers
- [Tier 3 — Adaptive ready](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality/tier-3) — Android Developers
- [The future unfolds! How to optimize Android apps for adaptive layouts](https://www.youtube.com/watch?v=pLNJ-fNYTKU) — Android Developers
