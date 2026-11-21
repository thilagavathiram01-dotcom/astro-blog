---
title: "Jetpack Compose 1.13: Progressive Blur & Polygon Shapes Guide"
description: "Learn how to use progressive blur and PolygonShape in Jetpack Compose 1.13 for modern Android UI effects with code examples."
pubDate: 2026-11-21T21:05:00
heroImage: "https://images.unsplash.com/photo-1763897913733-0d228fce7b5b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials"]
noindex: false
---

Jetpack Compose 1.13 landed on 18 November 2026 as part of the November BOM 2026.11.01. It adds progressive blur, polygon shapes with morphing, and several performance and text improvements. Developers targeting modern Android UIs can now create depth and shape effects without custom drawing code.

This guide shows how to update your project, implement progressive blur gradients, and use PolygonShape and MorphPolygonShape. All details come from the official Android Developers release notes.

## Update your project to Compose 1.13

Set the BOM to 2026.11.01. The release requires Kotlin 2.2 or newer and compileSdk 37.1.

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Rebuild the project. Existing value-based BasicTextField and Material 2 TextField APIs are deprecated, so plan a migration to the state-based TextFieldState model if you have not already done so. Material 3 1.5.0 ships as stable in the same window.

## Progressive blur basics

Previous Compose versions offered only uniform blur through Modifier.blur(radius). Version 1.13 adds a draw-phase lambda form that accepts a BlurRadiusSpec. The blur radius can vary across the composable.

Supported patterns include vertical, horizontal, and radial gradients plus custom AGSL RuntimeShaders. Spatially varying blurs cap at 150 pixels after density conversion; uniform blur has no cap. The effect requires Android 13 (API 33) or higher; older devices simply skip the blur.

A simple vertical fade keeps the top of an image sharp and increases blur toward the bottom:

```kotlin
Modifier.blur(
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        startRadius = 0.dp,
        endRadius = 16.dp
    )
)
```

You can also supply explicit BlurStop entries for multi-stop control:

```kotlin
Modifier.blur {
    blurRadiusSpec = BlurRadiusSpec.linearGradient(
        start = DpOffset.Zero,
        end = DpOffset(size.width, size.height),
        stops = listOf(
            BlurStop(fraction = 0f, radius = 0.dp),
            BlurStop(fraction = 0.5f, radius = 0.dp),
            BlurStop(fraction = 0.75f, radius = 14.dp),
            BlurStop(fraction = 1f, radius = 28.dp)
        )
    )
}
```

Edge treatment can be set to Unbounded so the blur samples transparent pixels outside the composable bounds. This is useful when blending a header image into a background.

![Abstract motion blur effect](https://images.unsplash.com/photo-1788788042182-273c0215d967?auto=format&fit=crop&w=800&q=80)

## Practical progressive blur examples

One common pattern softens the edges of a scrolling list while keeping the center sharp. Apply a vertical gradient with zero-radius stops in the middle:

```kotlin
LazyColumn(
    modifier = Modifier.blur {
        blurRadiusSpec = BlurRadiusSpec.verticalGradient(
            stops = listOf(
                BlurStop(0.00f, 18.dp),
                BlurStop(0.24f, 8.dp),
                BlurStop(0.42f, 0.dp),
                BlurStop(0.58f, 0.dp),
                BlurStop(0.76f, 8.dp),
                BlurStop(1.00f, 18.dp)
            )
        )
    }
) { /* items */ }
```

A radial spotlight can follow touch coordinates. Read the pointer position inside the blur lambda and pass it to BlurRadiusSpec.radialGradient. Because the lambda runs in the draw phase, the blur updates without recomposing the surrounding UI.

Dialogs and popups also gained blur controls. DialogProperties now accepts blurBehindRadius, backgroundBlurRadius, scrimAlpha, and windowShape. PopupProperties supports blurBehindRadius and scrimAlpha. Query WindowInfo.isCrossWindowBlurEnabled to check whether the system allows cross-window blur.

## PolygonShape and MorphPolygonShape

Rounded polygons and stars previously required the graphics-shapes library, manual RoundedPolygon construction, Path conversion, and a custom Shape implementation. Compose 1.13 places PolygonShape and MorphPolygonShape directly in androidx.compose.foundation.

PolygonShape is a normal Shape, so it works with Modifier.clip or any shape parameter and sizes itself to the layout bounds. MorphPolygonShape reads a progress lambda at draw time, so shape animation does not force recomposition.

A recording button that morphs from a circle to a star looks like this:

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
    Modifier
        .size(96.dp)
        .clip(shape)
        .background(MaterialTheme.colorScheme.primary)
        .clickable { recording = !recording }
)
```

You do not need to add the graphics-shapes dependency; foundation already pulls it in. Use the raw graphics-shapes APIs only when you need the underlying RoundedPolygon geometry outside of Compose UI.

![Abstract geometric pattern](https://images.unsplash.com/photo-1746897785251-48e52e82b269?auto=format&fit=crop&w=800&q=80)

## Additional graphics and performance notes

VectorPainter now shares rasterized draw caches for identical static ImageVector instances at the same size and configuration. Reuse ImageVector objects rather than recreating them to benefit from the cache. Modifier.border also gained RuntimeShader support for shaped borders.

On the performance side, computedStateOf offers a lighter alternative to derivedStateOf for simple condition checks. Recomposition tracing in Perfetto records state reads and writes with stack traces. The release matches Compose 1.12.1 on baseline startup and scrolling benchmarks with a 0 % jank rate on Pixel 6.

FlexBox and Grid layouts reached stable status, and LazyLayoutCacheWindow improvements help large lists.

## Checklist before shipping

- Confirm Kotlin 2.2+ and compileSdk 37.1.
- Switch BOM to 2026.11.01 and rebuild.
- Audit value-based text fields and migrate to TextFieldState where needed.
- Test progressive blur on API 33+ devices and emulators; verify graceful fallback on older versions.
- Prefer draw-phase lambdas for animated blur or morph so you avoid extra recompositions.
- Profile with the new recomposition tracing if you suspect unnecessary work.
- Check Material 3 1.5.0 expressive components if you want the latest design language.

If your app already targets large screens, the adaptive layout guidance in our [adaptive layouts with MediaQuery guide](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) pairs well with these graphics updates.

## Watch the official walkthrough

The Android Dev Summit 2026 talk covers progressive blur, polygon morphing, and related graphics features in detail.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Android Developers Blog: What’s new in the Jetpack Compose November ’26 release (18 November 2026)
- Android Developers: Blurring in Compose documentation
- Android Developers: Adaptive app quality guidelines

Progressive blur and polygon morphing give Compose apps a cleaner path to polished visual effects. Update the BOM, test on recent devices, and start replacing custom drawing code with the new modifiers and shapes. The APIs are stable and ready for production use. 
