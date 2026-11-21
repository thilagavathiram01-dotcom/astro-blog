---
title: "How to Use Progressive Blur and Polygon Shapes in Compose 1.13"
description: "Step-by-step guide to progressive blur, PolygonShape, and MorphPolygonShape in Jetpack Compose 1.13 for Android apps."
pubDate: 2026-11-21T21:00:00
heroImage: "https://images.unsplash.com/photo-1763897913733-0d228fce7b5b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

# How to Use Progressive Blur and Polygon Shapes in Jetpack Compose 1.13

Jetpack Compose 1.13 landed as stable on 18 November 2026 through the Compose BOM 2026.11.01. It adds practical graphics tools that let you create depth and custom shapes without extra libraries or custom shaders for common cases.

This guide shows how to apply progressive blur, create polygon shapes, and morph between them. You need Kotlin 2.2 or newer and compileSdk 37.1.

![Abstract geometric shapes with soft lighting](https://images.unsplash.com/photo-1763897913733-0d228fce7b5b?auto=format&fit=crop&w=800&q=80)

## Update your project

Add the BOM to your app module:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Then depend on the modules you use, such as foundation and material3. The progressive blur and PolygonShape APIs live in the foundation library.

## Apply progressive blur

Uniform blur existed before. Progressive blur varies the radius across a surface so one area stays sharp while another softens. It runs in the draw phase via a lambda on `Modifier.blur`.

A simple vertical gradient keeps the top sharp and blurs the bottom:

```kotlin
Modifier.blur {
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        startRadius = 0.dp,
        endRadius = 16.dp
    )
}
```

For multi-stop control, pass a list of `BlurStop` values. You can also use radial gradients or custom AGSL RuntimeShaders for more complex maps. The blur radius is capped at 150 pixels for spatially varying effects.

![Abstract motion blur with blue and orange streaks](https://images.unsplash.com/photo-1788788042182-273c0215d967?auto=format&fit=crop&w=800&q=80)

Common uses include blending the edge of a header image into the background, creating a focal spotlight that follows touch input, or softening the edges of a scrolling list while the center stays clear. Dialog and Popup properties now also accept blur radii and window shapes so background blur respects rounded corners.

## Create and morph polygon shapes

`PolygonShape` and `MorphPolygonShape` are now in foundation. You no longer need to pull in graphics-shapes, convert a RoundedPolygon to a Path, and write a custom Shape adapter. `PolygonShape` implements the Compose `Shape` interface and resolves to the layout size automatically.

Example of a morphing button that switches from a circle to a star:

```kotlin
var recording by remember { mutableStateOf(false) }
val progress by animateFloatAsState(if (recording) 1f else 0f)
val shape = remember {
    MorphPolygonShape(
        start = PolygonShape.circle(),
        end = PolygonShape.star(
            numPoints = 9,
            innerRadiusRatio = 0.8f,
            outerRounding = CornerRounding.fraction(0.5f),
        ),
        progress = { progress },
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

The morph reads the progress lambda at draw time, so it does not trigger recomposition. Use `PolygonShape` for static custom outlines and `MorphPolygonShape` when you need animated transitions between two polygonal forms.

![Abstract geometric pattern with overlapping shapes](https://images.unsplash.com/photo-1746897785251-48e52e82b269?auto=format&fit=crop&w=800&q=80)

## Other notable changes in 1.13

Material 3 1.5.0 ships as stable with new expressive components such as ToggleButtons and WavyProgressIndicators. Most experimental annotations were removed. Value-based BasicTextField and Material 2 TextField are deprecated in favor of the state-based TextFieldState APIs.

FlexBox and Grid layouts graduated to stable. Google recommends FlexBox for new multi-axis wrapping layouts instead of the older FlowRow and FlowColumn. Performance work includes better VectorPainter caching for static icons, recomposition tracing in Perfetto, and a new `computedStateOf` helper for lightweight derived values.

## Practical checklist

1. Upgrade the BOM and confirm Kotlin 2.2 + compileSdk 37.1.
2. Replace uniform blur calls that need edge falloff with a progressive `BlurRadiusSpec`.
3. Swap any custom polygon Path adapters for `PolygonShape` or `MorphPolygonShape`.
4. Test morph animations on a device to confirm they stay smooth without extra recompositions.
5. Review text field usages if you still rely on the deprecated value-based overloads.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips

Start with one high-visibility surface such as a hero image or a recording button. Progressive blur is most effective when the sharp region contains the primary content. For shapes, keep the number of points reasonable so the morph stays lightweight. If you already use adaptive layouts, these graphics tools pair well with window size class changes; see our guide on [meeting Google Play foldable rules](/blog/how-to-prepare-android-app-google-play-foldable-requirements-2027/) for related large-screen work.

## Conclusion

Compose 1.13 makes progressive blur and polygon morphing first-class and easy to adopt. Update the BOM, try the blur lambda on one image, and replace a custom shape with MorphPolygonShape. The APIs are stable, the examples are short, and the visual payoff is immediate.

**Sources**  
- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release)  
- [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview)  
- Android Developers Blog, 18 November 2026

Update your BOM this week and add progressive blur to one screen. The change is small and the result is noticeable.
