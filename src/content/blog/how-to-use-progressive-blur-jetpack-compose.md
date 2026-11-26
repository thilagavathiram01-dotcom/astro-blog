---
title: "How to Use Progressive Blur in Jetpack Compose 1.13"
description: "Step-by-step guide to progressive blur with BlurRadiusSpec in Jetpack Compose 1.13 for depth effects on Android."
pubDate: 2026-11-26T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 adds progressive blur so you can fade content from sharp to soft across a surface with one modifier. This replaces earlier custom shader workarounds for depth-of-field effects in Android UIs.

The feature shipped as stable on 18 November 2026 in the November Compose BOM. It sits alongside polygon shapes and dialog blur controls. Developers who build polished screens gain a native way to blend headers, spotlight focal areas, or soften list edges without extra libraries.

## Update your project

Switch to Compose BOM 2026.11.01. The upgrade requires Kotlin 2.2 or newer and compileSdk 37.1.

Add this line to your app module:

```
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project. Progressive blur lives in the compose.ui package, so no extra dependency is needed. On devices below API 31 the modifier falls back gracefully or skips the effect depending on the RenderEffect path.

## Apply a simple vertical progressive blur

Pass a BlurRadiusSpec to Modifier.blur. The verticalGradient factory keeps the top of an image sharp and ramps the radius toward the bottom.

Here is the minimal example from the official docs:

```
Image(
    painter = painterResource(id = R.drawable.dog),
    contentDescription = null,
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .size(150.dp)
        .blur(
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                startRadius = 0.dp,
                endRadius = 6.dp,
            ),
            edgeTreatment = BlurredEdgeTreatment(RoundedCornerShape(8.dp)),
        ),
)
```

The startRadius of 0.dp leaves the top edge crisp. The endRadius of 6.dp softens the bottom. Edge treatment clips the result to rounded corners so blur does not bleed outside the bounds.

![Android phone showing a blurred photo header](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Use multi-stop gradients for more control

A single linear ramp is useful, but many designs need a sharp band in the middle with soft edges. Pass a list of BlurStop entries. Each stop sets a fraction from 0.0f to 1.0f and a radius in Dp.

```
.blur(
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        stops = listOf(
            BlurStop(fraction = 0.0f, radius = 20.dp),
            BlurStop(fraction = 0.3f, radius = 0.dp),
            BlurStop(fraction = 0.7f, radius = 0.dp),
            BlurStop(fraction = 1.0f, radius = 20.dp),
        ),
    ),
    edgeTreatment = BlurredEdgeTreatment.Unbounded,
)
```

Stops are sorted automatically. This pattern keeps the center of a photo sharp while the top and bottom fade, which works well for profile headers or hero images that overlay text.

## Configure with the BlurScope lambda

You can also open a configuration block on Modifier.blur. The block runs in BlurScope during the graphics layer phase, so you can read the measured size without recomposing.

```
Modifier.blur {
    blurRadiusSpec = BlurRadiusSpec.linearGradient(
        start = DpOffset.Zero,
        end = DpOffset(size.width, size.height),
        stops = listOf(
            BlurStop(fraction = 0f, radius = 0.dp),
            BlurStop(fraction = 0.5f, radius = 0.dp),
            BlurStop(fraction = 0.75f, radius = 14.dp),
            BlurStop(fraction = 1f, radius = 28.dp),
        ),
    )
}
```

Size is available as a DpSize. Use it to build diagonal or custom linear gradients that match the exact bounds of the composable. Alpha and edgeTreatment can also be set inside the same block.

![Developer workspace with code on laptop and phone](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Choose the right gradient type

BlurRadiusSpec offers several factories:

- verticalGradient and horizontalGradient for axis-aligned fades
- linearGradient for any direction defined by two DpOffsets
- radialGradient for spotlight effects centered on a point
- uniform for a constant radius
- shader for full control via a custom AGSL RuntimeShader alpha channel

Radial gradients shine when you want a sharp focus that softens outward, for example a touch-following spotlight. Spatially varying blurs cap at 150 pixels after density conversion; uniform has no such cap.

## Handle edges and performance

BlurredEdgeTreatment.Rectangle (default) clamps to the content bounds and samples edge pixels. Passing a Shape clips to that outline. Unbounded lets the blur extend into transparent areas, which helps when blending into a background.

Because the modifier creates a separate graphics layer, avoid applying it to large scrolling containers that recompose often. Prefer it on static headers, cards, or overlays. The official docs note that progressive blur requires Android 13 (API 33) or newer for full spatial variation in some paths; test on your minSdk.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/R2425qOL7Fg"
    title="Create visual depth with progressive blur in Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Start with a vertical gradient on a header image and measure the visual result on a Pixel device. Combine with Material 3 surface colors so the blur blends naturally. If you already use adaptive layouts, progressive blur can highlight the focused pane on foldables or large screens. See our guide on [adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

Test edge cases: zero radius should leave content unchanged, and very large radii should stay within the 150-pixel spatial cap. Prefer BlurredEdgeTreatment.Unbounded only when the composable sits over a solid background.

## Conclusion

Progressive blur in Compose 1.13 gives Android developers a clean, performant way to add depth without custom shaders. Update the BOM, apply BlurRadiusSpec.verticalGradient or multi-stop lists, and tune edge treatment for your design. The result is softer transitions that feel native on modern devices.

Start with one header image this week. Once the effect looks right, expand it to lists or dialogs using the new DialogProperties blur options also added in this release.

## Sources

- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) — Android Developers Blog, 18 November 2026
- [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview) — Android Developers documentation
- [Common blur use cases](https://developer.android.com/develop/ui/compose/graphics/blur/examples) — Android Developers documentation
