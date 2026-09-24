---
title: "How to Enable Display P3 and HDR in Compose 1.12"
description: "Turn on Wide Color Gamut and HDR in Jetpack Compose 1.12 so Display P3 colors reach the screen without sRGB clamping."
pubDate: 2026-09-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack Compose 1.12 finally keeps Display P3 and HDR color all the way through graphics, paint, and shaders. Before this release, many Compose colors were clamped back to sRGB on the way to the screen.

If you ship photo, video, or brand surfaces on Pixel and other wide-gamut phones, that clamp washed out work you already captured in P3. This guide shows how to upgrade the August 2026 BOM, opt an activity into wide color, author P3 colors in Compose, and handle the documented fallbacks.

Facts come from the official Android Developers Blog post on the Compose August 2026 release and Android's wide color training docs.

## What Compose 1.12 changes for color

The August 2026 Compose BOM maps core modules to version 1.12. Google published it as `androidx.compose:compose-bom:2026.08.00`.

The release notes state that full pipeline support for Wide Color Gamut (P3) and HDR rendering is now on across Compose graphics, paint, and shaders. Colors defined in non-sRGB spaces such as Display P3 are preserved through to platform rendering without color clamping.

Fallback is explicit. Colors drop to sRGB when the space is unsupported (CieXyz, CieLab, or Oklab), when the space needs a newer Android version than the device has (for example Bt2020Hlg on Android 13 and below), or when the app runs on Android 9 (API 28) or lower.

Two breaking notes sit next to the graphics work. Compose 1.12 sets `compileSdk` to API 37 and requires Android Gradle Plugin 9.1.1 or newer. `Modifier.onFirstVisible()` is deprecated in favor of `Modifier.onVisibilityChanged()`.



![Colorful LED panels on a dim studio wall](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Upgrade the BOM and compile SDK

Pin the platform BOM and let Compose artifacts resolve without hard-coded versions:

```kotlin
dependencies {
    implementation(platform("androidx.compose:compose-bom:2026.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.material3:material3")
}
```

Set `compileSdk = 37`. Confirm AGP is at least 9.1.1. Compose always targets the latest compileSdk; the compatibility table lives in the official setup docs.

After the Gradle sync, search the project for `onFirstVisible` and move callers to `onVisibilityChanged`.

If you already ship [mesh gradients from the same 1.12 release](/blog/compose-1-12-mesh-gradients/), keep those painters on the same BOM so P3 vertices and mesh interpolation share one graphics path.

## Opt the activity into wide color

Compose can now carry P3 values, but the window still needs the platform color mode. Android's wide color guide says you enable it per activity.

In `AndroidManifest.xml`:

```xml
<activity
    android:name=".MediaActivity"
    android:colorMode="wideColorGamut"
    android:exported="false" />
```

You can also set it at runtime:

```kotlin
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    window.colorMode = ActivityInfo.COLOR_MODE_WIDE_COLOR_GAMUT
}
```

On Android 8.0 (API 26) and higher, this tells the system to accept content outside sRGB. If the display cannot show a wide gamut, the attribute has no effect. Check `display.isWideColorGamut` when you need a UI badge or a fallback palette.

Enable the mode on screens that show photos, video frames, or brand gradients. Leave list-heavy or text-first activities on the default mode if you want to avoid extra color conversion cost.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iKSLwym0Acw"
    title="Ultra HDR images | Android Build Time"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Author Display P3 colors in Compose

`Color` already accepts a `ColorSpace`. The default is sRGB. Pass `ColorSpaces.DisplayP3` when the values were authored or captured in that space.

```kotlin
val p3Accent = Color(
    red = 0.92f,
    green = 0.18f,
    blue = 0.22f,
    alpha = 1f,
    colorSpace = ColorSpaces.DisplayP3
)

Box(
    modifier = Modifier
        .fillMaxWidth()
        .height(160.dp)
        .background(p3Accent)
)
```

Channel ranges for Display P3 RGB stay in `[0..1]`. Do not copy an sRGB hex into this constructor and expect a match. Convert from a known profile, or sample from a P3 asset.

Shaders and custom `DrawScope` paints now keep that space as well. If you mix P3 fills with sRGB Material tokens on one screen, test both on a wide-gamut panel and on an sRGB emulator. The pipeline will fall back on older APIs; your contrast still has to hold.

HDR transfer functions such as BT.2020 HLG only apply on versions that support them. The release notes call out Bt2020Hlg falling back on Android 13 and below. Keep a Display P3 SDR look for those devices instead of assuming HLG headroom.



![Designer reviewing vivid color on a calibrated monitor](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)



## Stop offscreen layers from clipping glow

Wide color often ships with bloom, mesh fringe, or shadow that draws past measured bounds. Compose 1.12 adds `LayerOutsets` on `GraphicsLayer` and `Modifier.graphicsLayer`.

Use outsets when a layer is promoted to an offscreen buffer. The default implicit clip would otherwise cut the extra pixels. Grow the visual bounds by the blur or glow radius you paint.

Pair this with `drawWithCache` when the P3 brush is expensive to rebuild. Cache the brush, not the bitmap decode, so configuration changes still pick up new assets.

## Verify fallbacks and screenshots

Google documents three fallback cases. Walk each one before you treat P3 as the only source of truth.

1. Unsupported spaces: CieXyz, CieLab, and Oklab clamp to sRGB. Stay on Display P3 or sRGB for production fills.
2. Version-gated spaces: Bt2020Hlg needs a new enough platform. Gate HDR transfer with `SDK_INT` checks.
3. Android 9 and below: the whole path falls back to sRGB.

Regenerate screenshot tests on a P3 device or a wide-gamut emulator skin. Old sRGB goldens will fail even when the UI is correct.

Do not use lab-style spaces as a shortcut for perceptual tweaks. The 1.12 notes say those spaces are not preserved.

## Practical tips

Keep Material theme tokens in sRGB so system components stay consistent with dynamic color. Apply P3 only on hero media, product swatches, and custom canvas work.

Decode bitmaps with their embedded profile. Android 8.0 and higher can load PNG, JPEG, and WebP files that already carry a wide-gamut ICC profile when the activity is in wide color mode.

Test battery and GPU on mid-range phones. Wide color is cheap on recent flagships and more expensive when the compositor must convert every frame.

If you also use mesh gradients, define vertices in Display P3 only when every corner color shares that space. Mixed spaces on one mesh make fallback harder to reason about.

## Conclusion

Compose 1.12 stops clamping Display P3 on the way to the display. Upgrade to BOM `2026.08.00`, raise compileSdk to 37, set `android:colorMode="wideColorGamut"` on media activities, and construct `Color` with `ColorSpaces.DisplayP3`.

Then prove the three fallbacks Google lists, grow layer outsets where glow is clipped, and refresh screenshot goldens on a wide-gamut panel. That is enough to ship accurate color without inventing a second graphics stack.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Enhance graphics with wide color content](https://developer.android.com/training/wide-color-gamut)
- [Color | Jetpack Compose API](https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
- [Set up Compose dependencies and compiler](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler#agp-compatibility)
