---
title: "Prepare Android Apps for Google Play Adaptive Quality Tier 3 by April 2027"
description: "Meet Google Play Tier 3 adaptive app quality standards for foldables by April 2027. Steps for full-screen layouts, state preservation, and multi-window support."
pubDate: 2026-11-28T12:00:00
heroImage: "https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to"]
noindex: false
---

Google Play will require apps to meet Tier 3 adaptive quality standards for foldables starting April 2027. Apps that fall short cannot publish new versions or updates and may lose store visibility. Existing un-updated apps stay downloadable, but new submissions face the block.

This guide explains the requirements, shows practical steps with Jetpack Compose, and covers testing. Pair it with our [adaptive layouts mediaQuery guide](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) for window posture queries.

## What Tier 3 requires

Tier 3 is called Adaptive ready. It is the baseline. Apps must fill the available display area on foldables without letterboxing or compatibility mode. They must preserve scroll position, text input, and media playback during rotation, folding, unfolding, and resizing. They must also support multi-window environments.

Higher tiers exist. Tier 2 evaluates responsive multi-pane layouts and basic external input support. Tier 1 covers tabletop and book postures, camera continuity, and multi-instance features. Google Play will expand requirements later to tablets, Googlebooks, and Android XR. Meeting Tier 3 now positions your app for those changes.

Foldable screenshots become required too. From April 2027, listings need three foldable screenshots plus the standard two phone screenshots. You can upload them in Play Console today.

![Two foldable smartphones side by side showing different app layouts](https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=800&q=80)

## Audit your current app

Open your AndroidManifest.xml. Remove any `android:screenOrientation` locks that force portrait or landscape. Delete `android:resizeableActivity="false"` if present. These flags block resizing and trigger compatibility modes on large screens.

Check for fixed dimensions in layouts. Hard-coded widths or heights that assume a phone-sized screen cause letterboxing. Use flexible constraints, weights, or Compose modifiers like `fillMaxSize` and `weight` instead.

Test configuration changes. Rotate the device or emulator, fold and unfold a foldable emulator, and resize the window in multi-window mode. Confirm that lists keep their scroll position, form fields retain typed text, and videos continue playback without restarting.

## Build adaptive layouts with Jetpack Compose

Jetpack Compose handles resizing well when you avoid fixed sizes. Use `WindowSizeClass` or the mediaQuery API to switch layouts based on available space.

For list-detail patterns, the Material 3 adaptive library provides `ListDetailPaneScaffold`. It shows one or two panes automatically as the window grows.

```kotlin
val navigator = rememberListDetailPaneScaffoldNavigator<Any>()

NavigableListDetailPaneScaffold(
    navigator = navigator,
    listPane = { ListContent(onItemClick = { navigator.navigateTo(it) }) },
    detailPane = { DetailContent() }
)
```

This preserves navigation state across size changes. For foldables, query posture with mediaQuery so content avoids the hinge in tabletop or book modes.

Preserve state with ViewModels. Configuration changes recreate activities, but ViewModels survive. Store scroll indices, form values, and media position there. Restore them in `onCreate` or with Compose state holders.

## Support multi-window and freeform

Users on foldables and tablets open apps side by side. Your activity must respond to `onConfigurationChanged` or rely on Compose recomposition. Avoid locking the orientation.

In multi-window, the app receives a smaller window. Layouts that use `fillMaxWidth` and responsive grids expand or collapse cleanly. Test with the resizable emulator in Android Studio. Drag the window divider and confirm no content is cut off or letterboxed.

For media apps, keep playback continuous. Use Media3 or ExoPlayer with a retained player instance. When the window resizes, update the surface size without stopping the stream.

## Test on foldable emulators

Android Studio includes foldable device definitions. Create an AVD with a horizontal or vertical fold. Switch between flat, half-opened, and tabletop postures.

Run the app and fold the device while a list is scrolled or a form is half-filled. Confirm the state survives. Open the app in split-screen with another app and resize the panes.

Use Device Streaming or Firebase Test Lab for real Pixel Fold and Galaxy Fold hardware if available. Capture the three required foldable screenshots from the inner and outer displays.

![Hands holding an open foldable smartphone with multiple apps visible](https://images.unsplash.com/photo-1784877266295-b24584eea879?auto=format&fit=crop&w=800&q=80)

## Timeline and next steps

November 2026: upload foldable screenshots in Play Console. Apps that already meet Tier 2 or Tier 1 can apply for badging and enhanced merchandising.

April 2027: Tier 3 becomes mandatory for new apps and updates. Three foldable screenshots are required.

August 2027: new and updated apps must target API level 37 (Android 17). This removes remaining developer opt-outs for orientation and resizability on large screens.

Start the audit this week. Remove orientation locks, add state preservation, and test multi-window. Apps that ship updates before the deadline keep publishing rights and visibility.

## Tips for faster compliance

- Prefer Compose over XML for new screens. Its recomposition model handles size changes with less boilerplate.
- Use the official adaptive app quality checklist in the Android documentation to score your current tier.
- Add a large-screen preview in Android Studio and review it before each release.
- For games, note the separate large-screen requirements with a later August 2027 Tier 3 date.
- Monitor the Android Developers blog for further tier expansions to tablets and XR.

## Conclusion

Meeting Tier 3 by April 2027 keeps your app publishable on Google Play and improves the experience for foldable users. Remove fixed orientations, preserve state across configuration changes, and fill the available window. Combine these steps with adaptive layout tools such as mediaQuery and ListDetailPaneScaffold. Test thoroughly on foldable emulators and capture the required screenshots. The work you do now avoids blocked updates later and prepares the app for higher tiers.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bfqd9Y8jztk"
    title="Is your Android app ready for foldable devices?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Elevating apps: New adaptive quality standards on Google Play](https://developer.android.com/blog/posts/google-play-adaptive-quality-standards) — Android Developers Blog, 18 November 2026
- [Adaptive app quality guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality) — Android Developers
- [Is your Android app ready for foldable devices?](https://www.youtube.com/watch?v=bfqd9Y8jztk) — Android Developers
- [Build adaptive layouts with mediaQuery](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) — Yum News
