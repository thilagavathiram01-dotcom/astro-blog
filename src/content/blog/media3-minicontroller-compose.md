---
title: "How to Add a Media3 MiniController in Jetpack Compose"
description: "Use Media3 1.11 MiniController and the Player composable in media3-ui-compose-material3 for a compact, Dynamic Color mini-player with play/pause, artwork, and progress."
pubDate: 2026-09-19T11:15:00
tags: ["android", "tutorials", "ai-developer-tools"]
heroImage: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1400&h=630&q=80"
---

Most media apps need two surfaces: a full player and a compact bar that stays visible while the user browses a catalog or casts to another screen. Until Media3 1.11, that compact bar was custom work — metadata observers, artwork loading, a play/pause button, and a thin progress indicator, all kept in sync with `Player`.

**Media3 1.11** ships `MiniController` in `media3-ui-compose-material3`. It shows the current item’s title, artist, artwork, and progress next to play/pause, and it follows Material 3 Dynamic Color so the bar can match the device wallpaper. Current published artifacts are **1.11.1** (11 September 2026).

This guide covers the two Compose UI modules, a working mini-player layout, the new metadata and error state holders, and how the full `Player` composable slots work when you expand the bar.

## Which Compose module to add

Media3 now has two Jetpack Compose UI artifacts. You do **not** add both. The Material 3 module depends on the core module.

| Module | Use when |
| --- | --- |
| `media3-ui-compose` | You own every pixel. You get `PlayerSurface`, `ContentFrame`, and state holders such as `PlayPauseButton` scaffolds — no pre-styled buttons. |
| `media3-ui-compose-material3` | You want Material 3 `Player`, `MiniController`, `PlayPauseButton`, `ProgressSlider`, `ErrorText`, and the rest, themed through `MaterialTheme`. |

Official docs last updated 8 September 2026 still note that the Compose modules are **not at full parity** with the older Views `media3-ui` module. If you need a control that is missing, mix a core state holder with a Material 3 neighbor.

```kotlin
// Gradle (version catalog or module build file)
implementation("androidx.media3:media3-exoplayer:1.11.1")
implementation("androidx.media3:media3-session:1.11.1")
implementation("androidx.media3:media3-ui-compose-material3:1.11.1")
```

Keep a single `Player` (usually `ExoPlayer` or a `MediaController` bound to a `MediaSession` service) and pass that instance into the composables. Do not create a second player just for the mini bar.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Ch1EwR18Dqc" title="Supercharge Android media experiences with Jetpack Media3 and CameraX" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 1 — Keep one Player alive

Bind UI to a session-backed controller so rotation and process death do not tear down playback.

```kotlin
val sessionToken = SessionToken(
  context,
  ComponentName(context, PlaybackService::class.java),
)
val controllerFuture = MediaController.Builder(context, sessionToken).buildAsync()
```

`MediaController` implements `Player`, so `MiniController(player = controller)` and `Player(player = controller)` share the same queue, position, and play-when-ready flag.

Release the controller in `onStop` / `DisposableEffect` with `MediaController.releaseFuture`.

![Headphones and a phone on a desk during music playback](https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 2 — Drop in MiniController

Place the bar where a mini-player belongs: bottom of a `Scaffold`, a `BottomSheet`, or a persistent slot above navigation.

```kotlin
@Composable
fun CatalogWithMiniPlayer(player: Player) {
  val mediaItem = rememberCurrentMediaItemState(player)

  Scaffold(
    bottomBar = {
      if (mediaItem.mediaItem != null) {
        MiniController(
          player = player,
          modifier = Modifier.fillMaxWidth(),
        )
      }
    },
  ) { innerPadding ->
    CatalogGrid(
      modifier = Modifier.padding(innerPadding),
      onPlay = { item -> player.setMediaItem(item); player.prepare(); player.play() },
    )
  }
}
```

`MiniController` already draws:

- Artwork for the current `MediaItem`
- Title and artist from metadata
- A compact progress affordance
- Play / pause

Dynamic Color is inherited from your `MaterialTheme` / system wallpaper theme. To force a brand color, wrap the bar:

```kotlin
MaterialTheme(
  colorScheme = lightColorScheme(
    primary = Color(0xFF1DB954),
    onPrimary = Color.White,
  ),
) {
  MiniController(player)
}
```

That same `colorScheme` also tints `PlayPauseButton` and `ProgressSlider` if you compose them yourself.

## Step 3 — Observe metadata and errors

Media3 1.11 added reactive holders in `media3-ui-compose`:

- `rememberCurrentMediaItemState` — current title, artist, artwork, URI
- `rememberPlaylistState` — queue and active indices
- `rememberErrorState` — last player error, paired with Material 3 `ErrorText` and the default `ErrorOverlay` on `Player`

```kotlin
@Composable
fun NowPlayingHeader(player: Player) {
  val current = rememberCurrentMediaItemState(player)
  val playlist = rememberPlaylistState(player)
  val error = rememberErrorState(player)

  Column {
    Text(current.mediaItem?.mediaMetadata?.title?.toString() ?: "Nothing playing")
    Text("${playlist.currentIndex + 1} / ${playlist.size}")
    error.exception?.let { ErrorText(player) }
  }
}
```

Use these holders when you need a custom header above `MiniController` without re-implementing `Player.Listener`.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/7vmiYP4vNUE" title="Complement your media editing pipeline with Jetpack Media3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 4 — Expand into the full Player composable

When the user taps the mini bar, navigate to a full-screen player. Media3 1.11 split the Material 3 `Player` into slots:

```kotlin
Player(
  player = player,
  topControls = { PlayerDefaults.TopControls(player) },
  centerControls = { PlayerDefaults.CenterControls(player) },
  bottomControls = { PlayerDefaults.BottomControls(player) },
  errorOverlay = { PlayerDefaults.ErrorOverlay(player) },
)
```

Swap any slot. Example: keep default center controls, but put a Cast route button in the top row:

```kotlin
Player(
  player = player,
  topControls = {
    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.End) {
      MediaRouteButton()
    }
  },
  centerControls = { PlayerDefaults.CenterControls(player) },
  bottomControls = { PlayerDefaults.BottomControls(player) },
)
```

`MediaRouteButton` in 1.11 observes dialog state by itself when you use Media3 `CastPlayer`. Configure Cast with `CastParams` if you want the system Output Switcher:

```kotlin
val castParams = CastParams.Builder()
  .setShowSystemOutputSwitcherOnCastButtonClick(true)
  .build()
Cast.getSingletonInstance(context).initialize(castParams)
```

Google calls out Cast sessions as a natural place for `MiniController`: the compact bar stays on-phone while audio or video plays on the TV.

`Player` also accepts a `FocusRequester` so D-pad and keyboard focus work on Android TV, foldables, and desktop.

![Person watching video on a tablet with headphones](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 5 — Mix Material 3 pieces if MiniController is too opinionated

If the bundled bar is close but not quite right, compose the same primitives:

```kotlin
@Composable
fun SlimMiniBar(player: Player) {
  Row(verticalAlignment = Alignment.CenterVertically) {
    PreviousButton(player)
    PlayPauseButton(player)
    NextButton(player)
    PositionAndDurationText(player, modifier = Modifier.padding(start = 8.dp))
    ProgressSlider(player, modifier = Modifier.weight(1f))
    MuteButton(player)
  }
}
```

Other Material 3 pieces in the same library: `SeekBackButton`, `SeekForwardButton`, `RepeatButton`, `ShuffleButton`, `PositionText`, `DurationText`, `RemainingDurationText`.

Surfaces stay in the core module (they have no Material theme):

- `PlayerSurface` — `SurfaceView` / `TextureView` wrapper
- `ContentFrame` — aspect ratio, resize, optional shutter over the last frame

1.11 also added `PlaybackSpeedState` for long-press fast-forward / slow motion. The official `demo-compose` app shows double-tap seek plus a long-press speed gesture on the full player — useful once you leave the mini bar.

For short-form vertical feeds, use `PlayerPool` (`media3-common-ktx`) and `rememberPooledPlayer` (`media3-ui-compose`) instead of creating an `ExoPlayer` per pager page. `MiniController` is the wrong control for that pattern; keep a pooled full player in the pager and optionally a single shared mini bar only when the user leaves the feed.

## Practical checklist

- Pin **1.11.1** across ExoPlayer, session, and the Compose UI artifact.
- Own **one** `Player` in a `MediaSession` service; UI holds a `MediaController`.
- Show `MiniController` only when a current `MediaItem` exists.
- Theme through `MaterialTheme` rather than forking the composable.
- Expand to `Player { top / center / bottom / errorOverlay }` instead of a second custom layout.
- Report Compose UI gaps on the [androidx/media issue tracker](https://github.com/androidx/media/issues).

## Conclusion

`MiniController` is the missing compact player for Compose-first Media3 apps. Add `media3-ui-compose-material3:1.11.1`, pass the same `Player` you already use for the session, and keep the bar in a `Scaffold` bottom slot or sheet. When the user wants the full surface, reuse the slotted `Player` composable and the new metadata / error state holders instead of writing another `Player.Listener`.

Start with the [Compose UI overview](https://developer.android.com/media/media3/ui/compose) and the [Media3 1.11 announcement](https://android-developers.googleblog.com/2026/08/media3-1-11-whats-new.html).

## Sources

- [Getting started with Compose-based UI](https://developer.android.com/media/media3/ui/compose)
- [Material3 Compose (Media3 UI)](https://developer.android.com/media/media3/ui/compose-material3)
- [Media3 UI modules overview](https://developer.android.com/media/media3/ui/overview)
- [Core Compose customization](https://developer.android.com/media/media3/ui/compose-customization)
- [Media3 1.11 - What's new?](https://android-developers.googleblog.com/2026/08/media3-1-11-whats-new.html)
- [Connect to a media app](https://developer.android.com/media/media3/session/connect-to-media-app)
- [media3-ui-compose 1.11.1](https://mvnrepository.com/artifact/androidx.media3/media3-ui-compose/1.11.1)
- [Supercharge Android media experiences with Jetpack Media3 and CameraX (YouTube)](https://www.youtube.com/watch?v=Ch1EwR18Dqc)
- [Complement your media editing pipeline with Jetpack Media3 (YouTube)](https://www.youtube.com/watch?v=7vmiYP4vNUE)
