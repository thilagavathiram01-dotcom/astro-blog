---
title: "How to Build Short-Form Video Feeds with Media3 1.11"
description: "Use Media3 1.11 PlayerPool, rememberPooledPlayer, and Compose Player slots to preload and recycle ExoPlayer instances in a vertical feed."
pubDate: 2026-09-24T09:00:00
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Short-form video feeds burn through ExoPlayer instances if you create a new player for every page. Media3 1.11, released 11 August 2026, adds `PlayerPool` and `rememberPooledPlayer` so Compose screens can recycle players and preload neighbors as the user scrolls.

This guide walks through the official Compose player slots, the pool APIs in `common-ktx` and `ui-compose`, Cast output switching, and the session defaults that changed in 1.11. Facts come from the Android Developers blog post by Toni Heidenreich and the 1.11.0 release notes on the androidx/media GitHub repo.

## What landed in Media3 1.11

Media3 1.11 expands `media3-ui-compose` and `media3-ui-compose-material3`. The Material 3 `Player` composable now exposes slots for `topControls`, `centerControls`, `bottomControls`, and `errorOverlay`.

You can pass your own composables or the defaults in `PlayerDefaults`. The same `Player` composable accepts a `FocusRequester`, which helps D-pad and keyboard navigation on Android TV, foldables, and desktop.

Other 1.11 highlights that matter for a feed app:

- `PlaybackSpeedState` for long-press fast-forward and double-tap seek (shown in `demo-compose`)
- `MiniController` with title, artist, artwork, progress, and Material 3 dynamic color
- New state holders: `rememberCurrentMediaItemState`, `rememberPlaylistState`, `rememberErrorState`
- `PlayerPool` plus `rememberPooledPlayer` for short-form preloading
- Cast `CastParams` and a Compose `MediaRouteButton`
- `KtorDataSource` in `media3-datasource-ktor`
- `onConnectAsync()` on `MediaSession.Callback`
- Safer defaults that stop sharing session data with untrusted controllers unless you authorize them

Read the full list on the [1.11.0 release tag](https://github.com/androidx/media/releases/tag/1.11.0).

![Video camera and lighting on a production desk](https://images.unsplash.com/photo-1492619375914-88005aa9e3dc?auto=format&fit=crop&w=800&q=80)

## Step 1: Add the 1.11 modules

Use the Media3 1.11 artifacts, not a mix of older ExoPlayer package names. At minimum you want playback, Compose UI, and the Kotlin extensions that contain the pool.

```kotlin
dependencies {
  val media3 = "1.11.0"
  implementation("androidx.media3:media3-exoplayer:$media3")
  implementation("androidx.media3:media3-ui-compose:$media3")
  implementation("androidx.media3:media3-ui-compose-material3:$media3")
  implementation("androidx.media3:media3-common-ktx:$media3")
  implementation("androidx.media3:media3-session:$media3")
}
```

Add `media3-cast` only if you route to Cast or the SystemUI Output Switcher. Add `media3-datasource-ktor` if you want a coroutine-first HTTP stack instead of Cronet or OkHttp.

Keep Compose aligned with a current BOM. If you are already on Compose 1.12 layouts such as [named Grid areas](/blog/compose-grid-named-areas-1-12/), stay on that BOM so the player slots compile against the same compiler.

## Step 2: Build the Player with slots

The Material 3 `Player` composable is the shell. Slots keep chrome out of your feed item when you only need a center play button, and they let a full-screen page reuse the same player instance with a richer bar.

```kotlin
Player(
  player = player,
  topControls = { PlayerDefaults.TopControls(player) },
  centerControls = { PlayerDefaults.CenterControls(player) },
  bottomControls = { PlayerDefaults.BottomControls(player) },
)
```

Leave a slot empty when a vertical pager should hide the seek bar until the user taps. Put an `ErrorText` or the default `ErrorOverlay` in `errorOverlay` and drive it from `rememberErrorState` so a failed item does not blank the whole pager.

`PlaybackSpeedState` is the official hook for long-press speed-up. Pair it with the `ProgressSlider` from 1.10 if you want drag-to-seek on the same surface. The Media3 `demo-compose` app is the reference for both gestures.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ch1EwR18Dqc"
    title="Supercharge Android media experiences with Jetpack Media3 and CameraX"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Recycle players with PlayerPool

Creating an `ExoPlayer` on the main thread is expensive. A vertical feed that instantiates one player per page will hitch on mid-range devices and leak decoders if pages stay composed off-screen.

Media3 1.11 puts `PlayerPool` in `common-ktx` and `rememberPooledPlayer` in `ui-compose`. The pool owns a small set of players, hands one to the visible page, and preloads neighbors. When the user scrolls, the outgoing player returns to the pool instead of being released and rebuilt.

The official sample is `ShortFormPlayerScreen` in `demo-compose`: a vertically paging feed where players are pooled, preloaded, and recycled. Start there before you invent a custom cache of `ExoPlayer` instances.

A typical Compose call site looks like this pattern:

1. Hold one `PlayerPool` above the pager (Activity, Navigation graph, or a retained holder).
2. Inside each page, call `rememberPooledPlayer` with the media item for that index.
3. Bind the returned `Player` to the `Player` composable slots.
4. Let the pool decide when to preload the next and previous indices.

Do not call `player.release()` on a pooled instance from the page. Release belongs to the pool when the screen leaves the composition tree for good.

![Developer reviewing code on a laptop next to a phone](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)

## Step 4: Observe metadata without extra listeners

1.11 adds reactive holders so you do not wire `Player.Listener` by hand in every item:

- `rememberCurrentMediaItemState` — title, artwork, and related metadata for the playing item
- `rememberPlaylistState` — the full playlist and active indices
- `rememberErrorState` — playback errors, with `ErrorText` and a Material 3 `ErrorOverlay`

Use `rememberCurrentMediaItemState` to drive a caption under the video or the new `MiniController`. `MiniController` shows title, artist, artwork, progress, and play/pause. It follows Material 3 dynamic color, so a bottom-sheet mini player can match the wallpaper theme during Cast or while the user browses the grid.

## Step 5: Wire Cast and session callbacks

If the feed can leave the phone speaker, initialize Cast with `CastParams`:

```kotlin
val castParams = CastParams.Builder()
  .setShowSystemOutputSwitcherOnCastButtonClick(true)
  .build()

Cast.getSingletonInstance(context).initialize(castParams)
```

On supported platform versions, that flag opens Android’s SystemUI Output Switcher from the media route control instead of a custom Cast dialog. In Compose, drop in `MediaRouteButton()` next to your title. The blog post states it observes dialog state on its own when you use Media3’s `CastPlayer`.

On the session side, override `onConnectAsync()` when a controller must pass an auth check before it sees queue data:

```kotlin
override fun onConnectAsync(
  session: MediaSession,
  controller: MediaSession.ControllerInfo
): ListenableFuture<MediaSession.ConnectionResult> {
  return authenticateControllerAsync(controller)
}
```

If you do not override `onConnect` or `onConnectAsync`, 1.11 no longer shares session data with untrusted controllers by default. Third-party apps without notification access stay out until you authorize them. That is a behavior change. Test Bluetooth buttons, Wear, and Android Auto after the upgrade.

## Extra 1.11 pieces worth knowing

**Eclipsa Video (HAGC / ST 2094-50).** ExoPlayer plays the timed HDR metadata on progressive MP4 and Matroska. On API 37+ it merges HAGC tracks with the video track and sends metadata out-of-band to the decoder. Older APIs fall back to standard HDR without those adjustments.

**Muxers.** `OggMuxer` writes OPUS and VORBIS into `.ogg`. `WavMuxer` writes uncompressed and floating-point PCM `.wav`. `Mp4Muxer.addTrackReference` links auxiliary tracks. QuickTime, Nero, and Matroska chapters now surface as chapter metadata for audiobooks and podcasts.

**Networking.** `KtorDataSource` is the Kotlin-first alternative to Cronet and OkHttp. Use it when the rest of the app already speaks Ktor.

## Practical tips

- Cap the pool size. A feed rarely needs more than a handful of live decoders. The sample is the first place to copy limits from.
- Preload only adjacent items. Preloading an entire catalog fights `DefaultLoadControl` and the user’s current playback buffer.
- Keep one pool per process region (main feed vs. profile grid). Sharing a tiny pool across two pagers will steal the visible player.
- Test D-pad focus on TV if you reuse the same `Player` slots outside the phone pager.
- After upgrade, confirm lock-screen and notification controls still connect. The new untrusted-controller default is easy to miss.
- File bugs on the [androidx/media issue tracker](https://github.com/androidx/media/issues).

## Conclusion

Media3 1.11 is the release that treats short-form feeds as a first-class Compose path. Add 1.11.0, put `Player` slots on the visible page, own a `PlayerPool` above the pager, and let `rememberPooledPlayer` recycle instances as the user scrolls.

Use `MiniController` and the new state holders for chrome. Turn on the SystemUI Output Switcher if you Cast. Read `onConnectAsync` and the tighter session defaults before you ship, then check `ShortFormPlayerScreen` in `demo-compose` when a gesture or preload timing looks off.

## Sources

- [Media3 1.11 - What's new?](https://android-developers.googleblog.com/2026/08/media3-1-11-whats-new.html) — Android Developers Blog
- [Media3 1.11.0 release notes](https://github.com/androidx/media/releases/tag/1.11.0) — androidx/media
- [Media3 Compose demo](https://github.com/androidx/media/tree/release/demos/compose) — androidx/media
- [Eclipsa Video](https://developer.android.com/blog/posts/eclipsa-video-hdr-that-looks-right-on-every-screen) — Android Developers
- [Supercharge Android media experiences with Jetpack Media3 and CameraX](https://www.youtube.com/watch?v=Ch1EwR18Dqc) — Android Developers (YouTube)
