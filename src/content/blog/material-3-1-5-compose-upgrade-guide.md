---
title: "How to Upgrade to Material 3 1.5.0 in Jetpack Compose"
description: "Step-by-step guide to migrate Jetpack Compose apps to Material 3 1.5.0 with BOM 2026.11.01, covering SliderState, new components, and deprecations."
pubDate: 2026-11-21T21:05:00
heroImage: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Material 3 version 1.5.0 reached stable status on 18 November 2026 as part of the Jetpack Compose November 2026 release. The update ships with Compose BOM 2026.11.01 and requires Kotlin 2.2 or newer plus compileSdk 37.1.

This release graduates many expressive components to stable, migrates Slider and RangeSlider to a stateful model, and officially deprecates Material 2. Most apps compile after the BOM bump, but several API changes need attention.

You can combine this upgrade with adaptive layout techniques from our [mediaQuery guide](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

## Update your dependencies

Raise your Kotlin version and compileSdk first, then switch the BOM.

```kotlin
// build.gradle.kts
plugins {
    kotlin("plugin.compose")
}

dependencies {
    implementation(platform("androidx.compose:compose-bom:2026.11.01"))
    implementation("androidx.compose.material3:material3")
    // Optional: dedicated ripple artifact
    implementation("androidx.compose.material3:material3-ripple")
}

android {
    compileSdk = 37
    // or 37.1 as required
}
```

Sync the project and rebuild. Deprecation warnings appear for Material 2 usages and certain Slider overloads.

![Android phone in a developer's hands](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Migrate Slider and RangeSlider to stateful APIs

Stateless overloads of Slider and RangeSlider are deprecated. Use SliderState and RangeSliderState instead.

```kotlin
var sliderValue by remember { mutableFloatStateOf(0.5f) }
val sliderState = remember {
    SliderState(value = sliderValue)
}

Slider(
    state = sliderState,
    onValueChange = { sliderValue = it }
)
```

For RangeSlider, rename activeRangeStart/activeRangeEnd to startValue/endValue. Pass onValueChange by name because its position in the parameter list changed.

This model improves performance and accessibility. Discrete sliders also snap more accurately to integer ticks.

## Adopt new stable expressive components

Version 1.5.0 stabilizes several Material Design 3 expressive components:

- ToggleButton, ElevatedToggleButton, FilledTonalToggleButton, OutlinedToggleButton with shape morphing
- WavyProgressIndicator variants (LinearWavyProgressIndicator, CircularWavyProgressIndicator)
- FloatingActionButtonMenu and expressive FloatingToolbar
- TimePicker improvements and expressive TimePicker variants
- SearchBar with SearchBarState

Example of a ToggleButton:

```kotlin
var selected by remember { mutableStateOf(false) }

ToggleButton(
    checked = selected,
    onCheckedChange = { selected = it }
) {
    Text("Option")
}
```

These components reduce the number of ExperimentalMaterial3Api annotations by 52 percent (from 120 to 58).

## Handle Material 2 deprecation and ripple changes

Material 2 is now deprecated and no longer actively maintained. Migrate remaining Material components to their Material 3 equivalents.

A new material3-ripple artifact replaces material-ripple. It renders focus states with inset focus rings instead of opacity layers.

```kotlin
implementation("androidx.compose.material3:material3-ripple")
```

LocalRippleThemeConfiguration integrates the new behavior inside Material 3 themes. Standalone design systems can depend on the artifact directly.

## Performance and behavior updates

DatePicker month navigation now resolves in a single frame. Text color updates use a ColorProducer overload that reduces recompositions.

Bottom sheets with PartiallyExpanded rest at half content height (capped at half the screen). Short ModalBottomSheets no longer require two back presses.

SecureTextField no longer shows the last typed character by default. Review password fields in banking or login flows.

TopAppBar scroll behaviors rename isAtTop to isAtStart for layout direction support.

![Green Android robot figure](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Practical upgrade checklist

1. Update Kotlin to 2.2+ and compileSdk to 37.1.
2. Bump Compose BOM to 2026.11.01.
3. Replace Slider/RangeSlider with SliderState/RangeSliderState versions.
4. Swap any remaining Material 2 components for Material 3.
5. Add material3-ripple if you rely on custom ripple behavior.
6. Test expressive components and accessibility with TalkBack.
7. Verify password fields and bottom sheet gestures.

Build and run on multiple form factors. Use Android Studio’s layout inspector and accessibility scanner.

## Tips for a smooth migration

- Prefer the BOM so all Compose artifacts stay in sync.
- Address deprecation warnings early; some become errors in future releases.
- Test keyboard navigation on DatePicker, TimePicker, and Scaffold.
- Keep Material 2 dependencies only during transition, then remove them.
- Monitor the 1.6.0-alpha01 track if you want shared-axis navigation transitions.

## Conclusion

Material 3 1.5.0 brings stable expressive components, better slider state handling, and clearer focus indicators while deprecating Material 2. Update the BOM, migrate the stateful APIs, and adopt the new components to keep your Compose UI current with Android’s design language.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/GUXoUXEnNVI"
    title="A closer look at the Material 3 1.5.0 stable release"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Compose Material 3 release notes](https://developer.android.com/jetpack/androidx/releases/compose-material3) — Android Developers
- [What's new in the Jetpack Compose November '26 release](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release) — Android Developers Blog
- [A closer look at the Material 3 1.5.0 stable release](https://www.youtube.com/watch?v=GUXoUXEnNVI) — Android Developers
