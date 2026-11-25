---
title: "How to Use Progressive Blur in Jetpack Compose 1.13"
description: "Step-by-step guide to add progressive blur, polygon shapes, and Material 3 1.5 features from the Jetpack Compose November 2026 release."
pubDate: 2026-11-25T19:15:00
heroImage: "https://images.unsplash.com/photo-1729353639043-ef1a0d662dba?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 arrived stable on November 18, 2026 as part of the November BOM (2026.11.01). The release adds progressive blur, polygon shapes, and several Material 3 updates that let you create richer visual depth without custom shaders.

This guide shows how to update your project and apply the new graphics APIs in practical UI patterns.

## Update to Compose 1.13

Open your module-level `build.gradle.kts` (or `build.gradle`) and set the Compose BOM:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

You also need Kotlin 2.2 or newer and `compileSdk 37.1`. After syncing, rebuild. Existing `Modifier.blur(radius)` calls continue to work for uniform blur; the new progressive path uses a lambda.

![Android phone close-up with soft blur background](https://images.unsplash.com/photo-1739785890803-7a2191a37ef5?auto=format&fit=crop&w=800&q=80)

## Add a progressive blur to an image

Progressive blur varies the radius across a composable. It works on Android 13+ (API 33). On older versions the modifier is a no-op.

Import the new types:

```kotlin
import androidx.compose.ui.draw.blur
import androidx.compose.ui.graphics.blur.BlurRadiusSpec
import androidx.compose.ui.graphics.blur.BlurStop
import androidx.compose.ui.unit.DpOffset
```

Apply a vertical gradient that stays sharp at the top and blurs toward the bottom:

```kotlin
Image(
    painter = painterResource(R.drawable.header),
    contentDescription = null,
    modifier = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .blur {
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                startRadius = 0.dp,
                endRadius = 16.dp
            )
        }
)
```

For a multi-stop linear gradient that keeps the center sharp:

```kotlin
Modifier.blur {
    blurRadiusSpec = BlurRadiusSpec.linearGradient(
        start = DpOffset.Zero,
        end = DpOffset(size.width, size.height),
        stops = listOf(
            BlurStop(0f, 0.dp),
            BlurStop(0.5f, 0.dp),
            BlurStop(0.75f, 14.dp),
            BlurStop(1f, 28.dp)
        )
    )
}
```

You can also pass a custom AGSL `RuntimeShader` for fully procedural maps. Use `BlurredEdgeTreatment.Unbounded` when you want the blur to fade into a background rather than clip at the edges.

## Morph between polygon shapes

`PolygonShape` and `MorphPolygonShape` now live in `androidx.compose.foundation`. You no longer need a separate graphics-shapes dependency for basic use.

Create a button that morphs from a circle to a star:

```kotlin
var recording by remember { mutableStateOf(false) }
val progress by animateFloatAsState(if (recording) 1f else 0f)

val shape = remember {
    MorphPolygonShape(
        start = PolygonShape.circle(),
        end = PolygonShape.star(
            numPoints = 9,
            innerRadiusRatio = 0.8f,
            outerRounding = CornerRounding.fraction(0.5f)
        ),
        progress = { progress }
    )
}

Box(
    modifier = Modifier
        .size(96.dp)
        .clip(shape)
        .background(MaterialTheme.colorScheme.primary)
        .clickable { recording = !recording }
)
```

The progress lambda is read at draw time, so the morph does not trigger recomposition on every frame.

## Configure dialog and popup blur

`DialogProperties` now accepts `blurBehindRadius`, `backgroundBlurRadius`, `scrimAlpha`, and `windowShape`. `PopupProperties` gains `blurBehindRadius` and `scrimAlpha`.

```kotlin
Dialog(
    onDismissRequest = { /* ... */ },
    properties = DialogProperties(
        blurBehindRadius = 8.dp,
        backgroundBlurRadius = 12.dp,
        scrimAlpha = 0.3f
    )
) {
    // dialog content
}
```

Query system support with `WindowInfo.isCrossWindowBlurEnabled`.

## Practical tips

- Prefer progressive blur for header images and bottom sheets rather than full-screen overlays; the effect is most noticeable on large surfaces.
- Cap maximum radius around 16–28.dp for readability. Spatially varying blurs are limited to 150 pixels after conversion.
- Combine with `computedStateOf` (new in 1.13) when blur intensity depends on scroll or animation progress. It is lighter than `derivedStateOf` for simple calculations.
- Material 3 1.5.0 ships with the same BOM. Migrate remaining Material 2 components; the library is now deprecated.
- Value-based `BasicTextField` and Material 2 `TextField` are deprecated. Prefer the state-based overloads that accept `TextFieldState`.

If you already use adaptive layouts, pair the new shapes with [adaptive layouts and MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/R2425qOL7Fg"
    title="Create visual depth with progressive blur in Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![JavaScript code on screen with motion blur](https://images.unsplash.com/photo-1794674187169-9c6a7726f3cd?auto=format&fit=crop&w=800&q=80)

## Conclusion

Compose 1.13 makes progressive blur and polygon morphing first-class citizens. Update the BOM, apply the lambda-based `Modifier.blur`, and test on API 33+ devices. The same release stabilizes more Material 3 expressive components and improves text field performance.

Start with a single header image, measure the visual impact, then expand to dialogs and interactive shapes.

## Sources

- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) – Android Developers Blog, November 18, 2026
- [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview) – Android Developers documentation
- [Create visual depth with progressive blur in Jetpack Compose](https://www.youtube.com/watch?v=R2425qOL7Fg) – Android Developers YouTube, November 23, 2026

## Handle multilingual text with per-line height

Mixed scripts often collide when line height is fixed. Compose 1.13 adds `LineHeightStyle.Mode.PerLine`:

```kotlin
Text(
    text = "English text mixed with Thai: สวัสดี",
    style = TextStyle(
        lineHeightStyle = LineHeightStyle(
            alignment = LineHeightStyle.Alignment.Center,
            trim = LineHeightStyle.Trim.None,
            mode = LineHeightStyle.Mode.PerLine
        )
    )
)
```

Each line sizes itself to its tallest glyph. This prevents clipping without increasing overall spacing.

## Use computedStateOf for lighter state

When a blur radius or shape progress depends on scroll offset, prefer the new `computedStateOf`:

```kotlin
val scrollState = rememberScrollState()
val blurRadius by computedStateOf {
    (scrollState.value / 20).coerceIn(0, 16).dp
}
```

It skips caching, so it has lower overhead than `derivedStateOf` for cheap calculations. Reserve `derivedStateOf` for expensive work.

## Migration checklist

1. Bump Compose BOM to `2026.11.01`.
2. Confirm Kotlin 2.2+ and `compileSdk 37.1`.
3. Replace custom progressive-blur shaders with `Modifier.blur { }` where possible.
4. Switch value-based text fields to `TextFieldState` overloads.
5. Move any remaining Material 2 usage to Material 3 1.5.0.
6. Test progressive blur on API 33+ and verify fallback on older devices.
7. Run the new Compose performance static-analysis skill via Android CLI for a quick audit.

These steps keep the upgrade small while unlocking the visual and performance gains in 1.13.
