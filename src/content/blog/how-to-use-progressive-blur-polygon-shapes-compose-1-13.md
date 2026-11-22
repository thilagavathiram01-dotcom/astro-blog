---
title: "How to Use Progressive Blur and Polygon Shapes in Compose 1.13"
description: "Step-by-step guide to upgrade to Jetpack Compose 1.13 and apply progressive blur plus PolygonShape and MorphPolygonShape for modern Android UIs."
pubDate: 2026-11-22T11:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 is stable. The November 2026 release (BOM 2026.11.01) adds progressive blur, native polygon shapes, and Material 3 1.5.0 expressive components. These tools let you build depth and custom geometry without extra graphics-shapes wrappers or manual shaders for common effects.<grok type="render_inline_citation" citation_id="15" />

Upgrade requires Kotlin 2.2+ and compileSdk 37.1. After the BOM bump you can drop progressive blur onto images and buttons and morph polygons at draw time with almost no recomposition cost.

## Update your project to Compose 1.13

Open your module’s build.gradle and set the Compose BOM:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project. Confirm Kotlin is 2.2 or newer and compileSdk is 37.1. Material 3 1.5.0 is included in the BOM and is now stable. Experimental annotations dropped by 52 percent in this Material release.<grok type="render_inline_citation" citation_id="15" />

![Android developer coding on laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Add progressive blur

Progressive blur varies radius across a composable. It uses a draw-phase lambda on Modifier.blur and a BlurRadiusSpec. Linear gradients, radial gradients, or custom AGSL RuntimeShaders all work.<grok type="render_inline_citation" citation_id="15" />

A simple vertical fade keeps the top of an image sharp and blurs the bottom:

```kotlin
Image(
    painter = painterResource(R.drawable.header),
    contentDescription = null,
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .blur {
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                startRadius = 0.dp,
                endRadius = 24.dp
            )
            edgeTreatment = BlurredEdgeTreatment.Unbounded
        }
)
```

You can also pass multiple BlurStop values for multi-stage transitions. Because the blur radius is read at draw time, animations that change the radius do not force full recomposition of the content tree.

Dialogs and popups now accept blurBehindRadius, backgroundBlurRadius, scrimAlpha, and windowShape directly on DialogProperties and PopupProperties. Query WindowInfo.isCrossWindowBlurEnabled if you need to adapt to system blur support.

## Use PolygonShape and MorphPolygonShape

Compose 1.13 adds PolygonShape and MorphPolygonShape to the foundation library. You no longer need a separate graphics-shapes dependency and a custom Shape wrapper for rounded polygons or stars. PolygonShape is a regular Compose Shape that sizes itself to the layout bounds.<grok type="render_inline_citation" citation_id="15" />

MorphPolygonShape reads a progress lambda at draw time and morphs between two polygons without recomposition:

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

The button morphs from a circle to a star on tap. Use graphics-shapes directly only when you need the raw RoundedPolygon geometry outside of Compose UI.

![Abstract smartphone UI design](https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?auto=format&fit=crop&w=800&q=80)

## Other notable changes in 1.13

- Material 3 1.5.0 graduates ToggleButtons, WavyProgressIndicators, TimePickers, and several app-bar and dialog APIs to stable. Slider and RangeSlider move to a stateful SliderState model.
- Text fields: value-based BasicTextField and Material 2 TextField are deprecated. Migrate to TextFieldState for better performance and undo/redo. Material 3 value-based overloads remain for now but the state-based versions are recommended.
- LineHeightStyle.Mode.PerLine calculates line height per line, preventing collisions with tall scripts such as Thai or Burmese.
- computedStateOf offers a lighter alternative to derivedStateOf for simple condition checks.
- Recomposition tracing in Perfetto now records state reads and writes with stack traces.
- VectorPainter caches improve static icon rendering.

FlexBox, Grid, and LazyLayoutCacheWindow are stable. Pair these with the mediaQuery API covered in our [adaptive layouts guide](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) for responsive UIs on foldables and large screens.

## Tips for production

- Prefer the draw-time lambda form of Modifier.blur when the radius animates.
- Reuse ImageVector instances so the new VectorPainter cache can hit.
- Test progressive blur on lower-end devices; unbounded edge treatment can increase sampling cost.
- Migrate text fields gradually. Material 3 value-based TextField is not yet deprecated, but state-based APIs unlock upcoming features.
- Enable the new Compose performance static-analysis skill via Android CLI to catch common issues on PRs.

## Conclusion

Compose 1.13 makes progressive blur and polygon morphing first-class, low-overhead features. Update the BOM, apply the blur modifier or PolygonShape, and ship richer graphics without custom Shape wrappers. Official documentation and the Android Dev Summit graphics session show additional examples and performance notes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) — Android Developers Blog, 18 November 2026
- [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview) — Android Developers
- [Graphics features in Jetpack Compose that can elevate your app](https://www.youtube.com/watch?v=TirZPDPV8Dw) — Android Developers
