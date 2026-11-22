---
title: "How to Add Progressive Blur in Jetpack Compose 1.13"
description: "Step-by-step guide to progressive blur effects in Jetpack Compose 1.13 using Modifier.blur and BlurRadiusSpec for modern Android UIs."
pubDate: 2026-11-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1788788042182-273c0215d967?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 adds progressive blur so you can fade content from sharp to blurred without custom shaders or third-party libraries. The feature ships in the November 2026 stable release and works with a simple Modifier.blur lambda plus BlurRadiusSpec.<grok type="render_inline_citation" citation_id="90" />

You need the Compose BOM 2026.11.01, Kotlin 2.2 or newer, and compileSdk 37.1. Progressive blur requires Android 13 (API 33) or higher; on older devices the modifier leaves content unblurred.<grok type="render_inline_citation" citation_id="103" />

This guide shows how to apply linear, vertical, and radial progressive blurs, plus tips for common patterns like header fades and scrolling lists.

![Abstract motion blur with blue and orange streaks](https://images.unsplash.com/photo-1788788042182-273c0215d967?auto=format&fit=crop&w=800&q=80)

## Update your project

Add or update the BOM in your module-level build.gradle.kts:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project. Confirm you are on Material 3 if you plan to combine the blur with dialogs or other components that received related updates in the same release.<grok type="render_inline_citation" citation_id="90" />

## Apply a vertical progressive blur

The simplest case keeps the top of an image sharp and increases blur toward the bottom. Use BlurRadiusSpec.verticalGradient:

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
                endRadius = 16.dp
            )
        }
)
```

The startRadius applies at the top edge and endRadius at the bottom. You can reverse the values for a bottom-to-top fade. The official docs show this pattern blending a header image into a background.<grok type="render_inline_citation" citation_id="90" />

## Use multi-stop linear gradients

For more control, supply explicit BlurStop entries. This keeps the upper half sharp and ramps the blur only in the lower portion:

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

The lambda receives a BlurScope so you can read size and compute dynamic stops. Set edgeTreatment = BlurredEdgeTreatment.Unbounded when you want the blur to sample outside the composable bounds, useful for seamless header blends.<grok type="render_inline_citation" citation_id="90" />

![Blurred plant stems behind textured glass](https://images.unsplash.com/photo-1787826109648-60ac36302632?auto=format&fit=crop&w=800&q=80)

## Create radial spotlight effects

Radial gradients center the sharp region and increase blur outward. Track pointer input or a fixed focal point:

```kotlin
var touchOffset by remember { mutableStateOf(Offset.Unspecified) }

Box(
    modifier = Modifier
        .fillMaxSize()
        .pointerInput(Unit) {
            detectTapGestures { offset ->
                touchOffset = offset
            }
        }
        .blur {
            if (touchOffset != Offset.Unspecified) {
                blurRadiusSpec = BlurRadiusSpec.radialGradient(
                    center = touchOffset,
                    radius = 120.dp,
                    startRadius = 0.dp,
                    endRadius = 20.dp
                )
            }
        }
) {
    // content
}
```

This produces a focal spotlight that follows interaction. The docs note radial gradients work well for premium depth-of-field effects.<grok type="render_inline_citation" citation_id="90" />

## Soften edges on scrolling lists

Apply progressive blur to a LazyColumn so items fade near the top and bottom while the center stays sharp. Use multiple BlurStop values on a vertical gradient:

```kotlin
LazyColumn(
    modifier = Modifier
        .fillMaxSize()
        .blur {
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                stops = listOf(
                    BlurStop(0.00f, 16.dp),
                    BlurStop(0.20f, 4.dp),
                    BlurStop(0.40f, 0.dp),
                    BlurStop(0.60f, 0.dp),
                    BlurStop(0.80f, 4.dp),
                    BlurStop(1.00f, 16.dp)
                )
            )
        }
) {
    items(lyrics) { line ->
        Text(line, modifier = Modifier.padding(vertical = 8.dp))
    }
}
```

This pattern keeps the active region readable while softening content entering and leaving the viewport. The official examples page demonstrates the same approach for song lyrics and carousels.<grok type="render_inline_citation" citation_id="105" />

## Performance and compatibility notes

Progressive blur renders the composable into a separate graphics layer. Keep radii reasonable; spatially varying blurs cap at 150 pixels after conversion. Reuse ImageVector instances for icons to benefit from the new draw-cache sharing in Compose 1.13.<grok type="render_inline_citation" citation_id="90" />

Test on API 33+ devices. On lower APIs the effect is skipped. Combine with the new dialog and popup blur properties when you need background blur behind overlays.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Start with vertical or linear gradients for headers and cards. Move to multi-stop or radial only when you need precise control. Measure with the new recomposition tracing in Perfetto if blur affects scroll performance.

For related adaptive layouts on large screens, see our guide to adaptive list-detail layouts with Navigation 3 on Googlebook.

## Conclusion

Progressive blur in Jetpack Compose 1.13 lets you create depth and focus with a few lines of code. Update the BOM, apply Modifier.blur with a BlurRadiusSpec, and test the fade on real devices. The same release also stabilizes polygon shapes and improves text field state handling, so review those changes if you are already migrating.

## Sources

- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) — Android Developers Blog
- [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview) — Android Developers
- [Common blur use cases](https://developer.android.com/develop/ui/compose/graphics/blur/examples) — Android Developers
- Android Dev Summit 2026 talk: Graphics features in Jetpack Compose
