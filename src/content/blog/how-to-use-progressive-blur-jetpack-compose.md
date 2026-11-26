---
title: "How to Use Progressive Blur in Jetpack Compose 1.13"
description: "Learn how to apply progressive blur effects in Jetpack Compose 1.13 using BlurRadiusSpec for gradient and multi-stop blurs."
pubDate: 2026-11-26T18:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13, released as stable in the November 2026 BOM (2026.11.01), adds progressive blur. This lets you vary the blur radius across a composable instead of applying a uniform amount everywhere.

Progressive blur creates smooth transitions from sharp to blurred regions. It works well for header images that fade into the background, list edges that soften as content scrolls, or spotlight effects that keep the center sharp.

The feature requires Android 13 (API 33) or higher for spatially varying radii. On older devices the modifier leaves content unblurred. Update your project to Compose BOM 2026.11.01, Kotlin 2.2+, and compileSdk 37.1.

![Android developer coding on laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Update your project

Add the BOM to your module-level build.gradle.kts:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
implementation("androidx.compose.ui:ui")
implementation("androidx.compose.foundation:foundation")
```

Sync the project. Progressive blur lives in the `androidx.compose.ui.draw.blur` modifier and `androidx.compose.ui.graphics.blur` package.

## Apply a vertical gradient blur

The simplest progressive blur uses `BlurRadiusSpec.verticalGradient`. The top stays sharp (0.dp) while the bottom blurs to a chosen radius.

```kotlin
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
import androidx.compose.ui.graphics.blur.BlurRadiusSpec
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.draw.BlurredEdgeTreatment
import androidx.compose.foundation.shape.RoundedCornerShape

@Composable
fun ProgressiveBlurExample() {
    Image(
        painter = painterResource(id = R.drawable.header),
        contentDescription = "Header image",
        contentScale = ContentScale.Crop,
        modifier = Modifier
            .size(300.dp, 200.dp)
            .blur(
                blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                    startRadius = 0.dp,
                    endRadius = 16.dp
                ),
                edgeTreatment = BlurredEdgeTreatment(RoundedCornerShape(12.dp))
            )
    )
}
```

The top of the image remains sharp. Blur increases linearly toward the bottom. Use `BlurredEdgeTreatment.Unbounded` if you want the blur to extend past the composable bounds without clipping.

## Use multi-stop gradients

For more control, pass a list of `BlurStop` entries. Each stop defines a fraction (0f to 1f) and a radius. This keeps the middle of a list or image sharp while blurring the edges.

```kotlin
.blur(
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        stops = listOf(
            BlurStop(fraction = 0.0f, radius = 20.dp),
            BlurStop(fraction = 0.3f, radius = 0.dp),
            BlurStop(fraction = 0.7f, radius = 0.dp),
            BlurStop(fraction = 1.0f, radius = 20.dp)
        )
    ),
    edgeTreatment = BlurredEdgeTreatment.Unbounded
)
```

Stops are sorted automatically. You can use up to 16 stops. The same pattern works with `horizontalGradient`, `linearGradient`, and `radialGradient`.

![Smartphone showing code](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Access size inside BlurScope

The lambda form of `Modifier.blur { }` gives you a `BlurScope`. Inside it you can read the measured `size` of the layer and set `blurRadiusSpec`, `edgeTreatment`, and `alpha` at draw time without recomposition.

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
    edgeTreatment = BlurredEdgeTreatment.Unbounded
}
```

This diagonal gradient keeps the top-left sharp and blurs toward the bottom-right. Because the block runs during the graphics layer phase, changing the radius based on size does not cause extra recompositions.

## Available BlurRadiusSpec factories

- `verticalGradient` / `horizontalGradient`: linear change along one axis.
- `linearGradient`: any direction defined by two `DpOffset` points.
- `radialGradient`: blur increases outward from a center point up to a fall-off radius.
- `uniform`: constant radius (works on API 31+).
- `shader`: custom AGSL RuntimeShader whose alpha channel drives the radius (API 33+).

Spatially varying blurs are capped at 150 pixels after density conversion. Uniform blur has no such limit.

## Edge treatment options

`BlurredEdgeTreatment` controls how pixels outside the content bounds are sampled:

- `Rectangle` (default): clamps to the rectangular bounds.
- `BlurredEdgeTreatment(shape)`: clamps to a custom shape such as rounded corners.
- `Unbounded`: samples transparent black outside the bounds so the blur fades naturally past the edges.

Use Unbounded when you want a header image to blend into the page background.

## Practical tips

Apply progressive blur to images, text, or whole layout containers. For scrolling lists, place the blur modifier on the LazyColumn or LazyRow so the edges soften while the center stays sharp.

Test on API 33+ devices. On older versions the progressive effect is ignored. For dialogs and popups, Compose 1.13 also adds `blurBehindRadius` and related properties on DialogProperties and PopupProperties.

Pair progressive blur with the new PolygonShape and MorphPolygonShape APIs when you need both custom shapes and depth. See the adaptive layouts guide for related Compose layout techniques.

## Watch the official demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/R2425qOL7Fg"
    title="Create visual depth with progressive blur in Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Progressive blur in Jetpack Compose 1.13 replaces many custom shader workarounds with a simple modifier. Start with a vertical gradient, then experiment with multi-stop lists and the BlurScope lambda for more precise control. Update to BOM 2026.11.01 and test the effect on recent Android devices.

## Sources

- [Blurring in Compose – Android Developers](https://developer.android.com/develop/ui/compose/graphics/blur/overview)
- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release)
- [BlurRadiusSpec API reference](https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/blur/BlurRadiusSpec)
- [Common blur use cases](https://developer.android.com/develop/ui/compose/graphics/blur/examples)

Related reading: [Adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/)
