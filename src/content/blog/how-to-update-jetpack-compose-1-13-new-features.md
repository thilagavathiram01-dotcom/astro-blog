---
title: "How to Update to Jetpack Compose 1.13 and Use New Features"
description: "Upgrade to Jetpack Compose 1.13 with BOM 2026.11.01. Learn progressive blur, stable FlexBox, Material 3 updates, and migration steps."
pubDate: 2026-11-25T19:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 reached stable on 18 November 2026. The release updates core modules through Compose BOM 2026.11.01 and adds progressive blur, polygon shapes, stable layout primitives, and clearer migration paths for text fields and Material components.

This guide shows how to update your project and apply the new APIs without breaking existing UI.

## Why Upgrade Now

Compose 1.13 graduates FlexBox and Grid from experimental to stable. It also deprecates value-based BasicTextField and Material 2, so delaying the update leaves your app on APIs that will receive no further fixes. Performance tools such as recomposition tracing in Perfetto and a new static analysis skill help you catch issues early.

If you already target adaptive layouts or multi-window experiences, the stable FlexBox and Grid APIs give you production-ready building blocks. See the earlier guide on [adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) for complementary patterns.

![Hand holding smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Update Your Project

Set the Compose BOM to 2026.11.01. The upgrade requires Kotlin 2.2 or newer and compileSdk 37.1.

In your module-level build.gradle.kts (or build.gradle):

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project, then raise the Kotlin version and compileSdk if needed. After the sync, existing code continues to compile, but deprecation warnings appear for value-based text fields and Material 2 components.

Run a full build and instrumented tests. The release notes report zero jank on baseline startup and scrolling benchmarks on Pixel 6, and cold-start Time to Initial Display remains faster than the View system.

## Progressive Blur

Compose 1.13 adds progressive blur so you can vary the blur radius across a composable. Apply it with a draw-phase lambda on Modifier.blur and a BlurRadiusSpec.

Linear gradients, radial gradients, or custom AGSL RuntimeShaders all work. One common use is fading the bottom edge of a header image into the background with BlurredEdgeTreatment.Unbounded.

```kotlin
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

DialogProperties and PopupProperties now accept blurBehindRadius, backgroundBlurRadius, scrimAlpha, and windowShape. Query WindowInfo.isCrossWindowBlurEnabled to check system support.

## Polygon Shapes and Morphing

PolygonShape and MorphPolygonShape live in androidx.compose.foundation:foundation. You no longer need a separate graphics-shapes dependency for rounded polygons or stars. PolygonShape implements the standard Shape interface, so it works with Modifier.clip and component shape parameters and sizes itself to the layout bounds.

MorphPolygonShape reads a progress lambda at draw time and animates between two polygons without extra recomposition.

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

## Stable FlexBox and Grid

FlexBox and Grid, introduced as experimental in Compose 1.11, are now stable. FlexBox adds maxItemsInEachLine and is the recommended replacement for FlowRow and FlowColumn in new code. Grid provides a performant two-dimensional layout primitive.

LazyLayoutCacheWindow is also stable. Cache settings move from the scroll state onto LazyColumn, LazyVerticalGrid, and similar composables, which simplifies configuration and improves predictability.

These primitives pair well with adaptive layouts. Use them when you need wrapped or responsive arrangements that survive window size changes and foldable postures.

![Smartphone screen displaying programming language names](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Material 3 1.5.0 and Text Field Migration

Compose Material 3 1.5.0 is stable. Slider and RangeSlider move to a stateful SliderState model. New expressive components include ToggleButtons, WavyProgressIndicators, and TimePickers. BottomAppBar, TopAppBar variants, and BasicAlertDialog graduate to stable. Experimental annotations drop by 52 percent.

Material 2 is deprecated and no longer actively maintained. Migrate remaining Material 2 usage to Material 3 to receive bug fixes and the current design language.

Value-based BasicTextField and Material 2 TextField are deprecated. Switch to the state-based BasicTextField that takes TextFieldState. The state-based API supports synchronous updates, better performance, undo/redo history, and change tracking. Material 3 value-based TextField overloads are not yet deprecated in 1.5.0, but the recommendation is to migrate them as well. Legacy VisualTransformation gives way to OutputTransformation and InputTransformation.

## Performance and Tooling

A new Jetpack Compose performance static analysis skill audits code across state stability, lazy layouts, graphics, animation, and Modifier.Node migrations. It runs through the Android CLI with zero setup.

computedStateOf provides a lightweight alternative to derivedStateOf for simple condition checks and filtered state. It avoids caching overhead when the calculation is cheap and still invalidates composition only when the result changes. Prefer it over derivedStateOf unless you need heavy computation or explicit caching.

Recomposition tracing in Perfetto records state reads and writes, including string representations and stack traces. Enable it only while diagnosing performance; the extra data adds overhead.

## Tips for a Smooth Migration

Update the BOM and Kotlin version first, then address deprecation warnings in a dedicated branch. Prefer FlexBox over FlowRow for new wrapped layouts. Test progressive blur on API 33 and higher; older devices simply skip the effect. Profile with the new recomposition tracing after you migrate text fields, because state handling changes can shift invalidation patterns. Keep Material 2 dependencies only as long as you need them, and remove them once the migration is complete.

## Conclusion

Compose 1.13 makes progressive blur, polygon morphing, and stable FlexBox/Grid available for production use while clarifying the path away from value-based text fields and Material 2. Update the BOM to 2026.11.01, raise Kotlin and compileSdk, then adopt the new graphics and layout APIs incrementally. The performance tooling helps you verify that the upgrade improves rather than regresses your UI.

## Sources

- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) — Android Developers Blog, 18 November 2026
- Compose BOM mapping and Material 3 1.5.0 release notes
- Android Developers documentation on progressive blur, PolygonShape, and state-based text fields

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/R2425qOL7Fg"
    title="Create visual depth with progressive blur in Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
