---
title: "How to Draw Mesh Gradients in Compose 1.12"
description: "Add MeshGradientPainter in Jetpack Compose 1.12: BOM 2026.08.00, vertices, Bezier tangents, and animation."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.12 ships a first-party mesh gradient API. You no longer need a custom AGSL shader or a third-party modifier to blend several colors across a surface.

The official painter is `MeshGradientPainter`. It lives in the August 2026 Compose BOM (`2026.08.00`) and draws a grid of Bezier patches. This guide walks through the upgrade, a four-color hero, custom tangents, a denser grid, and a looping animation.

Facts below come from the [Android Developers Blog post for the August 2026 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html) and the [mesh gradient documentation](https://developer.android.com/develop/ui/compose/graphics/draw/mesh-gradient).

## Upgrade the Compose BOM first

Compose 1.12 maps to BOM `2026.08.00`. Set that platform dependency before you touch graphics code.

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.08.00"))
```

The release also raises `compileSdk` to API 37 and requires Android Gradle Plugin 9.1.1 or newer. If your project is still on an older AGP, the build fails before `MeshGradientPainter` resolves.

`Modifier.onFirstVisible()` is deprecated in the same release. Switch those call sites to `Modifier.onVisibilityChanged()` while you are already in the BOM file.

If you still ship a hybrid View and Compose screen, keep your Baseline Profile pipeline current. Our earlier note on [Android Baseline Profiles](/blog/android-baseline-profiles-guide/) covers how to keep first-frame work cheap after a UI toolkit bump.



![Abstract color mesh on a digital display](https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=800&q=80)



## How a mesh is built

A mesh is a 2D grid of patches. A grid with `rows` by `columns` patches has `(rows + 1) × (columns + 1)` vertices. A `1 × 1` mesh is four corners and one patch.

Positions use a normalized box: `(0f, 0f)` is the top-left of the draw bounds and `(1f, 1f)` is the bottom-right. You do not pass pixel coordinates.

Each vertex can carry up to four Bezier control points. Those tangents bend the edges between neighbors. If you pass `Offset.Unspecified`, Compose infers tangents so patches stay smooth.

Color between vertices is interpolated. Set `hasBicubicColor` to `true` for Catmull-Rom interpolation. Leave it `false` for bilinear interpolation.

## Draw a four-color hero

Create the painter once with `remember`, then attach it with `Modifier.paint`.

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

`setVertex` takes row index, column index, normalized position, and color. That snippet is the sample published on the Android Developers Blog.

Do not look for the old experimental `Modifier.meshGradient`. That API is gone. `MeshGradientPainter` plus `Modifier.paint` is the stable path.

## Bend one corner with tangents

Default tangents keep the grid even. You can override a single vertex when you want a color to bloom or pinch.

Control offsets are relative to that vertex. The docs push the top-left corner out to the right and down like this:

```kotlin
val customTangentPainter = remember {
    MeshGradientPainter(rows = 1, columns = 1) {
        setVertex(
            row = 0,
            column = 0,
            position = Offset(0f, 0f),
            color = Color.Magenta,
            rightControlPoint = Offset(0.4f, 0.1f),
            bottomControlPoint = Offset(0.1f, 0.4f)
        )
        setVertex(0, 1, Offset(1f, 0f), Color.Cyan)
        setVertex(1, 0, Offset(0f, 1f), Color.Blue)
        setVertex(1, 1, Offset(1f, 1f), Color.Black)
    }
}
```

Leave the other three vertices without explicit tangents. Compose fills those in so you do not have to compute a full tangent field for a one-corner tweak.



![Designer reviewing colorful UI gradients on a laptop](https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80)



## Scale to a 3-by-3 grid

A `3 × 3` patch grid needs 16 vertices. Inner points can sit off the regular lattice so color pools in the middle of the card.

The official sample stores those offsets in a list, then maps them in row order:

```kotlin
val points = remember {
    listOf(
        Offset(0.0f, 0.0f), Offset(0.3f, 0.0f), Offset(0.7f, 0.0f), Offset(1.0f, 0.0f),
        Offset(0.0f, 0.3f), Offset(0.2f, 0.4f), Offset(0.7f, 0.2f), Offset(1.0f, 0.3f),
        Offset(0.0f, 0.7f), Offset(0.3f, 0.8f), Offset(0.7f, 0.6f), Offset(1.0f, 0.7f),
        Offset(0.0f, 1.0f), Offset(0.3f, 1.0f), Offset(0.7f, 1.0f), Offset(1.0f, 1.0f)
    )
}
```

Call `setVertex` sixteen times, one per list index. Keep outer points on the 0 and 1 edges so the gradient still fills the `Box`.

Dense grids cost more GPU work. Profile on a mid-range phone before you drop a 6-by-6 mesh behind every list row.

## Animate vertices without reallocating

The configuration lambda runs in a `DrawScope`. It can read Compose state. Animate an offset and add it to inner vertices. The painter does not rebuild shaders or bitmaps on every frame.

```kotlin
val infiniteTransition = rememberInfiniteTransition(label = "meshMovement")
val animatedOffset by infiniteTransition.animateFloat(
    initialValue = -0.1f,
    targetValue = 0.1f,
    animationSpec = infiniteRepeatable(
        animation = tween(2500, easing = LinearEasing),
        repeatMode = RepeatMode.Reverse
    ),
    label = "offset"
)
```

Add `Offset(animatedOffset, animatedOffset)` only to interior points. Leave the four corners fixed so the fill still covers the widget.

Keep the painter in `remember` so the object identity stays stable. The state read happens inside the draw block.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8PxuWdjESfg"
    title="What's new in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pair the gradient with other 1.12 graphics work

Compose 1.12 also turns on a full Wide Color Gamut and HDR path. Colors defined in Display P3 stay in that space through paint and shaders. They fall back to sRGB on Android 9 and below, or when the color space is unsupported on the device.

If a `graphicsLayer` clips a glow that sits outside the measured box, use the new `LayerOutsets` API to expand the visual bounds. That avoids the implicit clip when the layer is promoted to an offscreen buffer.

Startup time in this release is close to Views on Google’s hero benchmark. Still measure your own first frame after you add a full-screen animated mesh.

## Practical tips

Start with a `1 × 1` mesh on the splash or profile header. Confirm colors on a P3 display and on an sRGB emulator.

Move inner vertices a little at a time. Large jumps create hard ridges even with inferred tangents.

Prefer bicubic color on large hero surfaces. Keep bilinear on tiny chips where the extra interpolation is wasted.

Do not animate every vertex. Two or three interior points give motion without heating the GPU.

If you previously used a gist-based `Modifier.meshGradient`, delete that code. The official painter is the supported API and tracks future graphics changes.

## Wrap-up

Compose 1.12 gives Android a stable mesh gradient primitive. Bump BOM `2026.08.00`, raise AGP and `compileSdk`, then draw with `MeshGradientPainter` and `Modifier.paint`.

Start with four corners. Add tangents only where the shape needs a pinch. Animate interior offsets through `DrawScope` state instead of rebuilding the painter.

For the full vertex and animation samples, read the official mesh gradient page and the August 2026 release notes linked below.

## Sources

- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Mesh gradients | Jetpack Compose | Android Developers](https://developer.android.com/develop/ui/compose/graphics/draw/mesh-gradient)
- [Compose BOM mapping](https://developer.android.com/develop/ui/compose/bom/bom-mapping)
