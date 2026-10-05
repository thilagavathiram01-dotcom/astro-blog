---
title: "Integrate Eclipsa Video on Android 17 with ExoPlayer"
description: "Play and capture Eclipsa Video on Android 17 with Media3 ExoPlayer and the HLG10 SMPTE 2094-50 camera profile."
pubDate: 2026-10-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

An HDR clip that looks graded on a reference monitor can blow out highlights on a phone in a dark room. Android 17 treats that mismatch as a platform problem, not an app-by-app tone-map guess. Eclipsa Video, built on the open SMPTE ST 2094-50 specification, ships metadata that tells a compatible display how to place reference white and how to scale highlights when headroom is limited.

Google developed that specification with Apple and NBCUniversal. Playback and capture support landed with Android 17 (API level 37) on devices with HDR panels that pass Eclipsa compliance tests. If you already play video with Jetpack Media3 ExoPlayer, most of the playback path needs no custom player configuration.

## Why mixed feeds look wrong

Social and news feeds mix Standard Dynamic Range (SDR) cards with HDR clips. Without a shared brightness anchor, the panel may lift the whole frame when an HDR item scrolls into view. Captions become hard to read. Users turn the screen down, then the next SDR card looks dull.

Eclipsa Video addresses that with two pieces of metadata, described in the Android media guide and the 29 June 2026 Android Developers Blog post by Tibian Elsheikh and Jeffrey Jose.

The reference white anchor maps the peak of SDR elements to the display reference white. Luminance above that anchor is reserved for HDR highlights. Text, icons, and standard-range color stay in a predictable band instead of riding the highlight curve.

Headroom-adaptive gain curves are parametric instructions for limited panels. A creator can ask a display to soft-clip, hard-clip, or compress midtones so bright detail survives on a phone that cannot match a mastering monitor. The blog also describes frame-by-frame notes that travel with the file so contrast choices are not replaced by one static curve for the whole clip.

Google says the same metadata is meant to scale: bright detail can stay strong on a television and be reduced on a mobile panel so scrolling does not spike.

![Video editor timeline on a laptop in a dim room](https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80)

## What you need before you ship

Confirm three facts before you promise Eclipsa behavior in release notes.

1. The device runs Android 17, API level 37, or higher. Platform playback and capture support starts there.
2. The panel is an HDR display that passes Eclipsa compliance tests. Android 17 alone is not enough if the panel fails those tests.
3. The file actually carries SMPTE ST 2094-50 metadata. ExoPlayer applies that metadata when it is present. A plain HLG or HDR10 file does not become Eclipsa Video because the OS is new.

Google recommends Media3 ExoPlayer over legacy platform rendering layers. The docs say ExoPlayer handles container extraction and avoids known decoding artifacts on Android 16 (API 36) and lower. Older APIs will not apply Eclipsa adjustments even if the file contains the metadata.

Hardware acceleration is not universal. The compatibility note says you can read the active `Display`, then check `LutProperties` on `overlayProperties`, to see whether a hardware path is available. An opt-out for Eclipsa rendering inside ExoPlayer is listed as in development for devices without that acceleration. Do not document an opt-out API until it ships in the Media3 version you depend on.

If your app also pools players or uses Compose surfaces, keep that setup on the Media3 path described in [PlayerPool and Compose playback](/blog/media3-1-11-playerpool-compose/). Eclipsa metadata still has to ride the same ExoPlayer pipeline.

## Play a file with ExoPlayer

Playback is the short path. The official integrate guide says Media3 ExoPlayer extracts SMPTE 2094-50 metadata and applies it without a custom player configuration.

1. Depend on a current Jetpack Media3 ExoPlayer artifact. Pin the version in your version catalog so QA and production match.
2. Build the player the same way you already do for progressive MP4 or other supported containers. Follow the Media3 ExoPlayer overview for the player and a `PlayerView` or Compose surface.
3. Point the media item at a file or stream that embeds ST 2094-50 metadata. Progressive download is the easiest first test. Confirm the packager did not strip the metadata track.
4. Run the build on an Android 17 device or emulator image with an HDR panel that passes compliance tests. A API 36 image will not show the Eclipsa path.
5. Scroll the clip beside SDR UI. Reference white should keep captions and chrome readable. Highlights should compress rather than flash the whole feed.
6. If your app locks HDR profiles in code, review the Media3 track selection API. A manual override can hide the metadata track the platform expects to apply.

There is no Eclipsa-specific `setEnable` flag in the current playback steps. If the clip looks like ordinary HDR, check the container first, then the API level, then track selection.

Creators who want to inspect gain curves can use the open HDR Explorer web app linked from the Android docs, and the specification text on the SMPTE GitHub repository for ST 2094-50.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ch1EwR18Dqc"
    title="Supercharge Android media experiences with Jetpack Media3 and CameraX"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Android Developers session above covers the capture, transform, and ExoPlayer delivery pipeline. It is the right backdrop for where Eclipsa metadata sits: capture attaches it, ExoPlayer extracts it, and the display pipeline applies it.

## Capture with the 2094-50 profile

Recording is a Camera2 dynamic-range choice, not an ExoPlayer setting. The integrate guide says to validate support with `CameraCharacteristics`, then route the encoder surface with `DynamicRangeProfiles.HLG10_SMPTE_2094_50`.

Android's HDR capture guide still applies underneath. Ten-bit camera output starts at Android 13. HLG10 is the baseline profile device makers must support on 10-bit cameras. Eclipsa capture adds the ST 2094-50 profile on Android 17.

1. Read `CameraCharacteristics` for the camera id you will record with. Confirm `REQUEST_AVAILABLE_CAPABILITIES_DYNAMIC_RANGE_TEN_BIT`.
2. Read `REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES` and check that `HLG10_SMPTE_2094_50` is in the supported set. Fall back to HLG10, or to SDR, when it is absent.
3. Build an `OutputConfiguration` for the encoder surface and call `setDynamicRangeProfile` with `DynamicRangeProfiles.HLG10_SMPTE_2094_50`.
4. Create the capture session from those output configurations. The Android media framework attaches ST 2094-50 metadata when that profile is active. The docs say you do not add a separate codec metadata packet by hand.
5. Keep the encoder on an HEVC 10-bit path consistent with HLG capture. The HDR capture guide warns that a wrong color transfer produces washout or clipped color.
6. Play the file back in ExoPlayer on a second Android 17 device. Capture support on the recording phone does not guarantee the watch device passed Eclipsa compliance tests.

Offer an SDR toggle. The HDR capture guide recommends a user control because not every camera, and not every lighting setup, should force a 10-bit profile.

![Cinema camera and lighting on a film set](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)

## Test plan and limits

Test in the conditions that made the feature necessary.

- Dim room, feed scroll. An HDR item should not force a brightness jump across neighboring SDR cards.
- Bright room. Ambient light changes reference white and headroom. Replay the same file and confirm highlights still map instead of clipping to a flat white.
- Television or external display, if your app targets large screens. The blog claims the same metadata should keep highlights strong where the panel has headroom.
- API 36 device. Expect ordinary HDR at best. Do not file a platform bug for missing Eclipsa behavior below API 37.
- File without ST 2094-50 metadata. Playback should remain stable. Absence of metadata is not a crash condition.

Do not treat Eclipsa Video as a replacement for Dolby Vision or HDR10+ catalogs you already stream. It is an additional open metadata path. Packagers must preserve the metadata. A transmux step that keeps only the video elementary stream will drop the benefit.

Google's availability note is narrow: native playback and capture on Android 17 and higher, on HDR displays that pass Eclipsa compliance tests. More apps and devices are expected over time because the standard is open. That is a rollout statement, not a promise that every Android 17 phone on day one exposes `HLG10_SMPTE_2094_50`.

## Ship checklist

Target API 37 for the capture path, and guard the profile lookup. Keep playback on Media3 ExoPlayer so metadata extraction does not depend on legacy decoders. Sample at least one real ST 2094-50 file in CI on an Android 17 image, and keep an SDR fallback in the camera UI.

Users notice this feature when a feed stops flashing. They will not notice the profile constant. Test the scroll, not only the full-screen player.

## Sources

- [Eclipsa Video: HDR That Looks Right on Every Screen](https://android-developers.googleblog.com/2026/06/eclipsa-video-hdr-review.html) — Android Developers Blog, 29 June 2026
- [Integrate Eclipsa video](https://developer.android.com/media/platform/integrate-eclipsa-video) — Android Developers
- [HDR video capture](https://developer.android.com/media/camera/camera2/hdr-video-capture) — Android Developers
- [SMPTE ST 2094-50](https://github.com/SMPTE/st2094-50) — SMPTE on GitHub
- [Supercharge Android media experiences with Jetpack Media3 and CameraX](https://www.youtube.com/watch?v=Ch1EwR18Dqc) — Android Developers on YouTube
