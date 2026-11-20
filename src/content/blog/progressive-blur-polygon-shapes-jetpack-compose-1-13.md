---
title: "Progressive Blur & Polygon Shapes in Compose 1.13"
description: "Step-by-step guide to progressive blur, PolygonShape, and MorphPolygonShape in Jetpack Compose 1.13 for Android developers."
pubDate: 2026-11-20T12:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 landed as stable on 18 November 2026. The release adds progressive blur, PolygonShape, and MorphPolygonShape so you can build depth and animated geometry without extra libraries.

This guide shows how to update your project and apply the new graphics APIs. You need Kotlin 2.2 or newer and compileSdk 37.1.

## Update your Compose BOM

Open your module-level build.gradle.kts and set the Compose BOM:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
```

Sync the project. Confirm compileSdk is 37.1 and the Kotlin compiler plugin targets 2.2. The official release notes list these as hard requirements.

## Progressive blur basics

Progressive blur varies the blur radius across a composable. It uses Modifier.blur with a BlurRadiusSpec. Uniform blur still works with a single Dp value. Progressive blur needs Android 13 (API 33) or higher; older devices render the content sharp.


![Android developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)


A simple vertical fade keeps the top of an image sharp and blurs the bottom:

```kotlin
Image(
    painter = painterResource(R.drawable.header),
    contentDescription = null,
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .blur(
            blurRadiusSpec = BlurRadiusSpec.verticalGradient(
                startRadius = 0.dp,
                endRadius = 24.dp
            )
        )
)
```

For multi-stop control, pass a list of BlurStop:

```kotlin
.blur {
    blurRadiusSpec = BlurRadiusSpec.verticalGradient(
        stops = listOf(
            BlurStop(0f, 0.dp),
            BlurStop(0.5f, 0.dp),
            BlurStop(0.75f, 14.dp),
            BlurStop(1f, 28.dp)
        )
    )
}
```

The lambda form lets you read BlurScope.size at draw time. Radial gradients and linear gradients work the same way. You can also supply a custom AGSL RuntimeShader for procedural maps.

## Polygon shapes and morphing

PolygonShape and MorphPolygonShape live in androidx.compose.foundation. You no longer need a separate graphics-shapes dependency for basic use.

PolygonShape acts as a regular Shape, so it works with Modifier.clip or the shape parameter of Card, Surface, and Button.

```kotlin
val star = PolygonShape.star(
    numPoints = 8,
    innerRadiusRatio = 0.7f,
    outerRounding = CornerRounding.fraction(0.4f)
)

Box(
    modifier = Modifier
        .size(96.dp)
        .clip(star)
        .background(MaterialTheme.colorScheme.primary)
)
```

MorphPolygonShape animates between two polygons by reading a progress lambda at draw time. No recomposition is required for the morph itself.

```kotlin
var expanded by remember { mutableStateOf(false) }
val progress by animateFloatAsState(if (expanded) 1f else 0f)

val morph = remember {
    MorphPolygonShape(
        start = PolygonShape.circle(),
        end = PolygonShape.star(numPoints = 9, innerRadiusRatio = 0.8f),
        progress = { progress }
    )
}

Box(
    modifier = Modifier
        .size(120.dp)
        .clip(morph)
        .background(MaterialTheme.colorScheme.secondary)
        .clickable { expanded = !expanded }
)
```


![Laptop screen showing development environment](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)


## Dialog and popup blur

You can now set blurBehindRadius, backgroundBlurRadius, scrimAlpha, and windowShape directly on DialogProperties. The same options exist for PopupProperties. Query WindowInfo.isCrossWindowBlurEnabled to check system support.

## Performance notes

VectorPainter now shares raster caches for identical static ImageVectors. Prefer computedStateOf over derivedStateOf for simple condition checks. The new Jetpack Compose performance static analysis skill audits state stability, lazy layouts, and graphics usage.

## Video walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TirZPDPV8Dw"
    title="Graphics features in Jetpack Compose that can elevate your app"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips

- Test progressive blur on API 33+ devices or emulators. Lower API levels ignore the effect.
- Keep blur radii modest. Large values cost more GPU fill rate.
- Reuse PolygonShape instances when the geometry does not change.
- Migrate value-based BasicTextField and Material 2 TextField to the state-based APIs in the same release.
- For adaptive layouts on foldables, see our guide on [adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

## Conclusion

Compose 1.13 gives you progressive blur and polygon morphing as first-party APIs. Update the BOM, apply the modifiers, and ship richer graphics without custom drawing code. Check the official Android Developers release post for the full list of deprecations and Material 3 1.5.0 changes.

## Sources

- Android Developers Blog: [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release)
- Android Developers: [Blurring in Compose](https://developer.android.com/develop/ui/compose/graphics/blur/overview)
- Android Developers YouTube: Graphics features in Jetpack Compose that can elevate your app
