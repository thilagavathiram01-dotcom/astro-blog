---
title: "How to Add Mesh Gradients in Jetpack Compose 1.12"
description: "Upgrade to Compose BOM 2026.08.00 and paint MeshGradientPainter backgrounds with Wide Color Gamut support."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Jetpack Compose 1.12 is stable. The August 2026 BOM ships MeshGradientPainter, Display P3 color through the graphics pipeline, and a compileSdk bump to API 37.

This guide walks through the upgrade, a first mesh background, Wide Color Gamut fallbacks, and the layout and text APIs that landed in the same release. Facts come from the official Android Developers Blog post and Compose mesh-gradient docs.

## What landed in Compose 1.12

The August 2026 release maps core modules to version 1.12. Google published the BOM as `androidx.compose:compose-bom:2026.08.00`.

Headline APIs include MeshGradientPainter, full-pipeline Wide Color Gamut (P3) and HDR rendering, named areas on the experimental Grid, Credential Manager semantics on text fields, keyed SideEffect, and two-stage deferred transitions.

Two breaking notes matter before you bump the BOM. Compose 1.12 sets compileSdk to API 37 and requires Android Gradle Plugin 9.1.1 or newer. `Modifier.onFirstVisible()` is deprecated in favor of `Modifier.onVisibilityChanged()`.



![Developer writing Kotlin UI code on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Upgrade the Compose BOM

Pin the platform BOM, then let modules resolve without explicit versions:

```kotlin
dependencies {
    implementation(platform("androidx.compose:compose-bom:2026.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.material3:material3")
}
```

Set `compileSdk = 37` and confirm AGP is at least 9.1.1. Compose always targets the latest compileSdk; the compatibility matrix lives in the official setup docs.

After the sync, search the project for `onFirstVisible` and move callers to `onVisibilityChanged` so visibility thresholds stay explicit.

Pair the graphics work with a fast first frame. The same release notes say Time to Initial Display in Google's hero benchmarks is now comparable to Views. If you already ship [Android Baseline Profiles](/blog/android-baseline-profiles-guide/), regenerate them after the BOM bump so startup stays tight.

## Paint a mesh gradient

Mesh gradients interpolate color across a 2D grid of patches. A grid with `rows` and `columns` contains `(rows + 1) × (columns + 1)` vertices. A 1×1 mesh is four corners and one patch.

Official docs show `MeshGradientPainter` as the drawing primitive. Remember the painter, set each vertex with row, column, normalized offset, and color, then paint a Box:

```kotlin
val rows = 1
val columns = 1

val gradientPainter = remember {
    MeshGradientPainter(rows, columns) {
        setVertex(0, 0, Offset(0f, 0f), Color.Red)
        setVertex(0, 1, Offset(1f, 0f), Color.Blue)
        setVertex(1, 0, Offset(0f, 1f), Color.Green)
        setVertex(1, 1, Offset(1f, 1f), Color.Yellow)
    }
}

Box(
    modifier = Modifier
        .aspectRatio(16 / 9f)
        .fillMaxWidth()
        .paint(gradientPainter)
)
```

Offsets use the 0f..1f range of the destination. You can place vertices outside that range if you want color to bleed in from off-canvas. Docs also describe `hasBicubicColor`: set it true for Catmull-Rom interpolation, false for bilinear.

Keep the painter in `remember` unless vertices must animate. Recreating the painter every frame wastes work.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wJx7EhGaDow"
    title="Shaders | Jetpack Compose Tips"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Keep color wide on modern panels

Compose 1.12 preserves non-sRGB spaces such as Display P3 through graphics, paint, and shaders. Colors are no longer clamped to sRGB on the way to the platform renderer.

Fallback is automatic. Colors drop to sRGB when the space is unsupported (CieXyz, CieLab, Oklab), when the space needs a newer Android version than the device has (for example Bt2020Hlg on Android 13 and below), or when the app runs on Android 9 (API 28) or lower.

Use Display P3 for hero surfaces on recent Pixels and flagships. Keep sRGB tokens for icons and text that must match Material tokens on older devices.

`LayerOutsets` is new on GraphicsLayer and `Modifier.graphicsLayer`. Use it when a layer is promoted offscreen and you need to grow visual bounds so glow or mesh fringe is not clipped.



![Colorful abstract gradient light on a desk display](https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80)



## Use the rest of the 1.12 toolkit

Mesh work often sits next to other August APIs. Treat them as optional follow-ups, not blockers.

**Keyed SideEffect.** `SideEffect` now accepts keys. Google reports it is up to 90% faster than `LaunchedEffect` and about 20% faster than `DisposableEffect` when you do not need a coroutine or dispose block. It still runs before those effects, so do not migrate frame-delayed work blindly.

**Deferred transitions.** `DeferredAnimatedContent` and `DeferredAnimatedVisibility` support two-stage motion, including predictive back. During the deferred phase you can drive scale or offset from a gesture. When the phase ends, the engine hands off with velocity transfer.

**Named Grid areas.** The experimental Grid lets you name regions (`header`, `sidebar`, `content`) instead of tracking numeric spans. Mark it `@OptIn(ExperimentalGridApi::class)` until the API leaves experimental.

**Editable text styles.** `TextFieldBuffer.addStyle()` applies `SpanStyle` and `ParagraphStyle` inside `textFieldState.edit { }`. `TextFieldState.textStyles` reads active ranges. Styles survive configuration changes.

**Credential Manager.** On API 34+, attach `credentialRequest` semantics with `CredentialRequestData` so a field can request passkeys or saved credentials in the input flow.

**Tests.** `hasPendingWork()` checks pending UI work without advancing the clock. `runWithoutImplicitWait` drops implicit sync while you step frames. Use both when you sample animation state.

## Practical tips

Start with a 1×1 mesh. Add rows and columns only when you need extra control points. Each extra vertex costs interpolation work.

Reuse one painter across similar screens. If product needs several palettes, wrap vertex setup in a small factory that takes a color scheme.

Do not put live network or analytics calls inside a mesh painter builder. Keep that work in keyed `SideEffect` or a ViewModel.

On foldables and tablets, paint the mesh on a full-bleed Box and place content above it. Named Grid areas help you keep the chrome stable while the background stretches.

Regenerate screenshot tests after the WCG change. P3 pixels will not match old sRGB goldens on devices that support the wider gamut.

## Conclusion

Compose 1.12 gives you a first-party mesh painter and a graphics pipeline that keeps Display P3 intact. Upgrade the 2026.08.00 BOM, raise compileSdk to 37, replace `onFirstVisible`, then ship one four-vertex background before you add more points.

From there, pick the extras that match the screen: keyed side effects for cheap logging, deferred transitions for predictive back, and Credential Manager semantics on sign-in fields.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Mesh gradients | Jetpack Compose | Android Developers](https://developer.android.com/develop/ui/compose/graphics/draw/mesh-gradient)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
- [Set up Compose dependencies and compiler](https://developer.android.com/develop/ui/compose/setup-compose-dependencies-and-compiler#agp-compatibility)
