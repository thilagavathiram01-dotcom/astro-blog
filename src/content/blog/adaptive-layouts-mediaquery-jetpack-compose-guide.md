---
title: "How to Build Adaptive Layouts with mediaQuery in Jetpack Compose"
description: "Use the mediaQuery API in Jetpack Compose to create layouts that adapt to window posture, size, pointer precision, and viewing distance on phones, foldables, and larger screens."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to"]
noindex: false
---

Android apps now run on phones, foldables, tablets, Googlebooks, and more. Hard-coded checks for device type break when users resize windows or fold a device. The mediaQuery API in Jetpack Compose gives a declarative way to query window and device capabilities and update layouts accordingly.

This guide shows how to enable the API, query posture and size, and combine it with other adaptive tools. You can pair it with Grid layouts covered in our [Compose Grid named areas guide](/blog/compose-grid-named-areas-1-12/).

## Enable mediaQuery in your app

The API is experimental and off by default. Enable it early in your Application class:

```kotlin
class MyApplication : Application() {
    override fun onCreate() {
        ComposeUiFlags.isMediaQueryIntegrationEnabled = true
        super.onCreate()
    }
}
```

Opt into the experimental API with `@OptIn(ExperimentalMediaQueryApi::class)` on composables that use it. After this, `mediaQuery` and `derivedMediaQuery` become available.

![Adaptive device screens showing different layouts](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Query window posture for foldables

Foldable devices support flat, book, and tabletop postures. Use `mediaQuery` to switch layouts when the user folds the device.

```kotlin
@OptIn(ExperimentalMediaQueryApi::class)
@Composable
fun VideoPlayer() {
    when {
        mediaQuery { windowPosture == UiMediaScope.Posture.Tabletop } -> {
            // Content on top, controls on bottom across the hinge
            TabletopLayout()
        }
        mediaQuery { windowPosture == UiMediaScope.Posture.Book } -> {
            BookLayout()
        }
        else -> {
            FlatLayout()
        }
    }
}
```

The `UiMediaScope` provides `windowPosture`. The query recomposes when the posture changes. Official docs recommend this for media players and dual-pane content that benefits from the physical fold.

## Adapt to window size classes

Window width and height update frequently during resizing. Prefer `derivedMediaQuery` for these values to avoid unnecessary recompositions.

```kotlin
val narrowerThanMedium by derivedMediaQuery {
    windowWidth < WindowSizeClass.WIDTH_DP_MEDIUM_LOWER_BOUND.dp
}
val narrowerThanExpanded by derivedMediaQuery {
    windowWidth < WindowSizeClass.WIDTH_DP_EXPANDED_LOWER_BOUND.dp
}

when {
    narrowerThanMedium -> SinglePaneLayout()
    narrowerThanExpanded -> TwoPaneLayout()
    else -> ThreePaneLayout()
}
```

This matches Android’s recommended window size class breakpoints. The layout expands as the window grows without checking for “isTablet”.

## Handle pointer precision and keyboard type

Touch targets need to be larger when the primary pointer has low precision. Query `pointerPrecision`:

```kotlin
if (mediaQuery { pointerPrecision == UiMediaScope.PointerPrecision.Blunt }) {
    LargeTouchButton()
} else {
    CompactButton()
}
```

Precision values range from Fine (mouse) to Coarse/Blunt (touch). The highest available precision is reported when multiple devices are connected.

For keyboards:

```kotlin
if (mediaQuery { keyboardKind == UiMediaScope.KeyboardKind.None }) {
    SuggestPhysicalKeyboard()
}
```

This helps desktop-class experiences on Googlebook or when a keyboard is attached.

## Adjust for viewing distance and hardware features

Viewing distance estimates how far the user is from the screen. Increase text and targets for Far or Medium distances, common on TVs or when a phone is used at arm’s length.

```kotlin
val fontSize = when {
    mediaQuery { viewingDistance == UiMediaScope.ViewingDistance.Far } -> 20.sp
    mediaQuery { viewingDistance == UiMediaScope.ViewingDistance.Medium } -> 18.sp
    else -> 16.sp
}
```

You can also gate features:

```kotlin
if (mediaQuery { hasMicrophone }) {
    MicButton()
}
if (mediaQuery { hasCamera }) {
    CameraButton()
}
```

![Developer workspace with multiple devices](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Combine with Grid for structured adaptive UIs

mediaQuery works well as the decision layer for Grid configurations. Define different Grid configs and select them based on posture or size:

```kotlin
val config = mediaQuery {
    when (windowPosture) {
        UiMediaScope.Posture.Tabletop -> tabletopGridConfig
        else -> defaultGridConfig
    }
}

Grid(config = { /* use config */ }) {
    // Place items with gridItem
}
```

See the official adaptive apps guides for full Grid + mediaQuery recipes, including tabletop video players.

## Preview adaptive states

Override `LocalUiMediaScope` in previews to test specific postures or sizes:

```kotlin
@Preview
@Composable
fun PreviewTabletop() {
    ComposeUiFlags.isMediaQueryIntegrationEnabled = true
    val customScope = object : UiMediaScope by LocalUiMediaScope.current {
        override val windowPosture = UiMediaScope.Posture.Tabletop
    }
    CompositionLocalProvider(LocalUiMediaScope provides customScope) {
        VideoPlayer()
    }
}
```

This lets you verify tabletop and book layouts without physical hardware.

## Tips for production use

- Prefer `derivedMediaQuery` for `windowWidth` and `windowHeight` to reduce recomposition cost.
- Keep queries simple; complex logic inside the lambda can affect performance.
- Test on foldables using Android Studio’s posture emulators or Device Streaming.
- Combine with Navigation 3 and adaptive list-detail patterns for full-screen experiences.
- Monitor the experimental status; the API is available in recent Compose versions and expected to stabilize.

## Conclusion

mediaQuery removes brittle device-type checks and lets your Compose UI react to the actual window environment. Enable the flag, query posture and size, and build layouts that work across phones, foldables, tablets, and larger Android devices. Official documentation and the Android Developers sessions provide further examples.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/RyO2H1VbqdM"
    title="Build adaptive apps with Compose's new APIs (I/O Connect '26)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Query information for adaptive layouts with mediaQuery](https://developer.android.com/develop/adaptive-apps/guides/mediaquery) — Android Developers
- [Build adaptive apps with Compose's new APIs](https://www.youtube.com/watch?v=RyO2H1VbqdM) — Android Developers, I/O Connect 2026
- [Scale your app for every screen with Compose](https://www.youtube.com/watch?v=SGTkTKX7qq4) — Android Dev Summit 2026
