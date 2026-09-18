---
title: "How to Add a Media3 MiniController Mini Player in Jetpack Compose"
description: "Add Media3 1.11's MiniController Composable so your Compose app keeps title, artwork, progress, and play/pause visible while users browse or Cast."
pubDate: 2026-09-18T17:20:00
tags: ["android", "tutorials", "media3"]
heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80"
---

Most media apps need two screens at once: a full player and a compact bar that stays on screen while the user scrolls a catalog or starts a Cast session. Media3 1.11 adds that compact bar as a first-party Composable. `MiniController` lives in `media3-ui-compose-material3` and shows the current item's title, artist, artwork, and progress next to play/pause.

This guide walks through the official 1.11 pieces you need: which module to depend on, how MiniController differs from the full `Player` Composable, how to keep one `ExoPlayer` instance alive across screens, and how the new metadata state holders feed a custom bar if you outgrow the default layout.

## What shipped in Media3 1.11

Google published Media3 1.11 on 11 August 2026. The Compose UI work is the part that matters for a mini player:

- A Material 3 `Player` Composable with slots for `topControls`, `centerControls`, `bottomControls`, and `errorOverlay`
- Ready-made layouts in `PlayerDefaults`
- `MiniController` for a persistent compact bar
- Dynamic Color so the bar follows the user's wallpaper theme
- New remember-state holders: `rememberCurrentMediaItemState`, `rememberPlaylistState`, and `rememberErrorState`
- `PlayerPool` plus `rememberPooledPlayer` for short-form feeds

Official docs last updated 16 September 2026 list both `media3-ui-compose` and `media3-ui-compose-material3` at **1.11.1**. Add only the Material 3 artifact unless you are building every control from scratch. The Material 3 module already depends on the core Compose module.

![Studio headphones resting on audio gear](https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80)

## Choose the right Compose module

Think in the UI-state pipeline: business logic → UI logic → pixels.

**`media3-ui-compose`** connects a `Player` to state holders and surfaces (`PlayerSurface`, `ContentFrame`). You draw every button.

**`media3-ui-compose-material3`** finishes the pipeline. It gives you styled `Player`, `MiniController`, `PlayPauseButton`, `ProgressSlider`, `ErrorText`, and the rest of the Material 3 control set.

Use Material 3 when your app already follows Material Design and you want a mini player this week. Drop to the core module only for a custom design system, then mix the two: keep Material 3 buttons and replace one control with a core state-holder scaffold.

Current Gradle coordinates from Android Developers:

```kotlin
// Include only one of these. Material3 already pulls in media3-ui-compose.
implementation("androidx.media3:media3-ui-compose-material3:1.11.1")
```

You still need a player implementation such as `media3-exoplayer` and, for background playback, `media3-session`.

## Keep one player, two layouts

MiniController is not a second player. It is another view of the same `Player`. Create `ExoPlayer` in a retained owner — a `ViewModel`, a `MediaSession` service, or `remember` with a matching `DisposableEffect` — and pass that instance into both screens.

```kotlin
@Composable
fun LibraryScreen(player: Player) {
  Scaffold(
    bottomBar = {
      MiniController(player = player)
    }
  ) { padding ->
    CatalogList(Modifier.padding(padding))
  }
}

@Composable
fun NowPlayingScreen(player: Player) {
  Player(
    player = player,
    topControls = { PlayerDefaults.TopControls(player) },
    centerControls = { PlayerDefaults.CenterControls(player) },
    bottomControls = { PlayerDefaults.BottomControls(player) },
  )
}
```

That pairing matches the official 1.11 write-up: MiniController is meant for a bottom sheet, a scaffold bar, or a Cast session where the full surface is elsewhere.

Hide the bar when nothing is loaded. `rememberCurrentMediaItemState(player)` exposes the current `MediaItem`. If media metadata is empty and the player is idle, skip the bar so an empty chrome strip does not sit on the home grid.

## Theme the bar with Material 3 and Dynamic Color

Wrap MiniController in your existing `MaterialTheme`. Official Material 3 Compose docs show that buttons pick up `colorScheme.primary` and `onPrimary`. MiniController follows the same rule and, like the other default Material 3 media composables, supports Dynamic Color.

```kotlin
MaterialTheme(
  colorScheme = dynamicDarkColorScheme(LocalContext.current)
) {
  MiniController(player = player)
}
```

If you only need to recolor play/pause, wrap that one button instead of the whole screen. You can also assemble a slimmer bar from the published parts: artwork from `rememberCurrentMediaItemState`, `PlayPauseButton`, and `ProgressSlider`.

## Read metadata without reinventing listeners

Before 1.11, many apps registered a `Player.Listener` and copied title, artist, and artwork into `mutableStateOf`. The new holders do that work:

- `rememberCurrentMediaItemState` — current item metadata
- `rememberPlaylistState` — the playlist and active indices
- `rememberErrorState` — playback errors, paired with `ErrorText` and the default `ErrorOverlay` on the full `Player`

Use the metadata holder when you want a custom row (larger art, a Cast badge, a queue count) but still want Media3 to own play/pause and progress.

```kotlin
@Composable
fun QueueHint(player: Player) {
  val playlist = rememberPlaylistState(player)
  Text("${playlist.mediaItemCount} in queue")
}
```

Exact property names on the state objects can shift with patch releases. Treat the names above as the official 1.11 contract and check the API reference in Android Studio if a field is renamed.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Ch1EwR18Dqc" title="Supercharge Android media experiences with Jetpack Media3 and CameraX" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Gestures, Cast, and short-form feeds

A mini player is only half of a modern media shell. Three 1.11 extras sit next to it.

**Gestures.** `PlaybackSpeedState` exposes a fast-forward and slow-motion API. The official `demo-compose` app maps a long-press to faster playback and a double-tap to seek. `ProgressSlider` (from 1.10) remains the seek control.

**Cast.** Configure `CastParams` and, on supported platform versions, open the system Output Switcher from the route button. In Compose, drop in `MediaRouteButton()`; with `CastPlayer` it observes dialog state for you. MiniController is explicitly called out as useful during an active Cast session.

**Short-form video.** `PlayerPool` in `common-ktx` and `rememberPooledPlayer` in `ui-compose` recycle players as a vertical pager scrolls. Do not put MiniController on every page in that feed. Keep one pooled player for the visible item and a single app-level bar only if audio should continue after the user leaves the feed.

![Person listening to music on a smartphone](https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80)

## A practical first integration

1. Bump Media3 artifacts to **1.11.1** and add `media3-ui-compose-material3`.
2. Host one `ExoPlayer` (or `CastPlayer`) in a `ViewModel` or `MediaSession` service. Do not create a player inside MiniController.
3. Set a `MediaItem` with `MediaMetadata` so title, artist, and artwork have somewhere to come from.
4. Place `MiniController(player)` in a `Scaffold` `bottomBar` or a bottom sheet on browse screens.
5. Use the slotted `Player` Composable on the now-playing screen.
6. Theme with `MaterialTheme` and Dynamic Color.
7. If the default bar is too tall or missing a Cast icon, compose `PlayPauseButton` plus `rememberCurrentMediaItemState` yourself.
8. Open [demo-compose](https://github.com/androidx/media/tree/release/demos/compose) when you need a working layout to copy.

## What not to invent

Do not wrap the old View `PlayerView` in `AndroidView` for a new Compose screen. The official Compose overview steers you away from that interop path; the demo app avoids it on purpose.

Do not assume MiniController replaces `MediaSession` notification controls. The compact bar is in-app UI. Background playback, headset buttons, and the system now-playing card still go through a session.

Do not treat 1.11 Compose modules as a complete clone of `media3-ui` Views. Android Developers still notes that the Compose modules are not feature-identical to the View module.

## Conclusion

A persistent mini player used to be a weekend of listeners, art loading, and progress math. In Media3 1.11 it is one Material 3 Composable bound to the same `Player` you already use for the full screen. Add `media3-ui-compose-material3:1.11.1`, keep a single player owner, drop `MiniController` into the browse scaffold, and reserve custom state holders for the metadata your product actually needs.

## Sources

- [Media3 1.11 — What's new? (Android Developers Blog, 11 August 2026)](https://android-developers.googleblog.com/2026/08/media3-1-11-whats-new.html)
- [Getting started with Compose-based UI](https://developer.android.com/media/media3/ui/compose)
- [Material3 Compose media UI](https://developer.android.com/media/media3/ui/compose-material3)
- [Media3 1.11.0 release notes](https://github.com/androidx/media/releases/tag/1.11.0)
- [androidx.media demo-compose](https://github.com/androidx/media/tree/release/demos/compose)
