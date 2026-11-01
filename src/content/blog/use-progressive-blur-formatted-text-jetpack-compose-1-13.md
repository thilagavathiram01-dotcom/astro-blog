---
title: "Use Progressive Blur in Jetpack Compose 1.13 Guide"
description: "Step-by-step guide to progressive blur effects in Jetpack Compose 1.13. Apply vertical gradients, multi-stop blurs, and edge treatments for modern Android UI."
pubDate: 2026-11-01T09:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Progressive blur gives your Android UI depth without custom shaders or third-party libraries. Jetpack Compose 1.13 (currently in beta as of late October 2026) adds first-class support through `Modifier.blur` and `BlurRadiusSpec`. You can keep one part of an image sharp while the rest fades into blur. This guide shows the exact APIs, version requirements, and practical patterns drawn from the official Android Developers documentation.

Android Dev Summit 2026 highlighted graphics improvements that include progressive blur alongside mesh gradients and other Compose updates. The feature is available in the 1.13.0-beta series. Uniform blur has existed since Android 12, but spatial variation needs Android 13 (API 33) or higher. On older devices the modifier is ignored and content stays sharp.

![Android phone displaying a modern UI with depth effects](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Requirements and setup

Add the Compose UI dependency that includes 1.13. Use the Compose BOM that tracks the beta or pin `androidx.compose.ui:ui:1.13.0-beta02` (or the latest beta). Target compileSdk 35 or higher. Progressive blur requires API 33; test on a device or emulator running Android 13+.

In your `build.gradle.kts`:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.10.01"))
implementation("androidx.compose.ui:ui")
```

Sync the project. The `blur` modifier and `BlurRadiusSpec` live in `androidx.compose.ui.draw` and `androidx.compose.ui.graphics.blur`.

## Apply a basic progressive blur

The simplest form uses `BlurRadiusSpec.verticalGradient`. The top of the composable stays sharp (`startRadius = 0.dp`) and blur increases toward the bottom.

```kotlin
Image(
    painter = painterResource(R.drawable.sample),
    contentDescription = null,
    modifier = Modifier
        .size(200.dp)
        .blur(
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                startRadius = 0.dp,
                endRadius = 16.dp
            ),
            edgeTreatment = BlurredEdgeTreatment(RoundedCornerShape(12.dp))
        )
)
```

This matches the official sample. The blur is applied to the content of the composable itself, not to whatever sits behind it. For frosted-glass effects over other content you still need backdrop techniques or the newer platform APIs announced at the summit.

## Multi-stop gradients for precise control

Pass a list of `BlurStop` objects when you need more than a linear ramp. Each stop has a `fraction` (0f to 1f) and a `radius`. Stops are sorted automatically. A common pattern blurs the top and bottom edges while keeping the center sharp:

```kotlin
.blur(
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        stops = listOf(
            BlurStop(0.0f, 20.dp),
            BlurStop(0.3f, 0.dp),
            BlurStop(0.7f, 0.dp),
            BlurStop(1.0f, 20.dp)
        )
    ),
    edgeTreatment = BlurredEdgeTreatment.Unbounded
)
```

You can also use `horizontalGradient`, `radialGradient`, or `linearGradient` with `DpOffset` points. Radial gradients expand from a center point up to a fall-off radius. All measurements are in `Dp` and resolve against the layer size at draw time. Spatially varying blurs are capped at 150 pixels after density conversion.

![Developer writing Jetpack Compose code on a laptop](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Edge treatment options

Blurring samples neighboring pixels, so the result can extend beyond the original bounds. `BlurredEdgeTreatment` controls clipping:

- `Rectangle` (default) clamps to the rectangular bounds.
- `BlurredEdgeTreatment(shape)` clips to a rounded or custom shape.
- `Unbounded` lets the blur bleed outward with transparent sampling.

Choose `Unbounded` when you want soft edges that fade into the background. Use a shape when the blurred content must stay inside a card or button.

## Animation and dynamic control

The block overload of `Modifier.blur { }` runs inside `BlurScope` after layout. You can read `size` and set `blurRadiusSpec` without extra recomposition. Animate the radius with `animateDpAsState` and assign it inside the block:

```kotlin
var blurred by remember { mutableStateOf(false) }
val radius by animateDpAsState(if (blurred) 24.dp else 0.dp)

Box(
    Modifier
        .size(200.dp)
        .blur {
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(0.dp, radius)
        }
        .clickable { blurred = !blurred }
)
```

This pattern appears in the official samples and keeps animation cheap.

## Practical patterns

Use progressive blur on profile headers so the top of a photo stays clear while the bottom blends into a title bar. Apply multi-stop blurs to scrolling content so the edges fade without obscuring the middle. Pair it with existing text styling—`AnnotatedString`, `SpanStyle`, and `fromHtml`—to keep labels readable over blurred backgrounds. Formatted text improvements continue to land in the 1.13 series; check the latest release notes for `BasicText` and rich-text input updates.

If you already use agent-driven UI, combine these effects with the A2UI Jetpack Compose renderer covered in our [A2UI agent UI guide](/blog/a2ui-jetpack-compose-agent-ui-guide/). Agents can generate layouts that include the new blur modifiers once the skill or plugin knows about them.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips and limitations

Test on API 33+ devices. On lower versions the progressive path is a no-op. Keep radii modest; large values hurt performance on lower-end hardware. Prefer the block form when the radius depends on size or animation. Remember that this blurs the composable’s own content. Backdrop blur still requires platform-level support or additional layers.

Watch the Android Dev Summit graphics session for more examples of mesh gradients and the new backdrop APIs that arrived around the same time.

## Conclusion

Progressive blur is now a first-class Compose API in the 1.13 betas. Start with a vertical gradient, add multi-stop control where needed, and choose the right edge treatment. The same release cycle brings further text and layout improvements that pair well with these visual effects. Update your BOM, target API 33 for the full effect, and ship sharper, more modern interfaces.

Sources: Android Developers “Blurring in Compose” documentation (updated October 2026), Compose UI 1.13.0-beta02 release notes, and Android Dev Summit 2026 graphics sessions.
