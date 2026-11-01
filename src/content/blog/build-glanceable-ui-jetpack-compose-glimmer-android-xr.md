---
title: "Build Glanceable UIs for Android XR Glasses with Glimmer"
description: "Step-by-step guide to creating glanceable UIs for Android XR display glasses using Jetpack Compose Glimmer, including setup, components, and best practices."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Android XR display glasses, including the newly launched XREAL AURA, require interfaces that stay out of the way while remaining readable against real-world light. Jetpack Compose Glimmer solves this by providing a purpose-built Compose toolkit for optical see-through displays.

Unlike phone or headset UIs, glasses displays are additive: they can only add light and cannot create true black. Standard Material components produce poor contrast and visual noise in this environment. Glimmer defaults to dark surfaces, high-contrast text, outline focus indicators, and simplified shapes so content stays glanceable.

This guide shows how to add Glimmer to a project, apply the theme, and assemble a simple list-and-button UI suitable for display glasses. For emulator setup on XR devices, see our [Android XR emulators in Studio Rabbit 2 guide](/blog/android-xr-emulators-studio-rabbit-2-guide/).

## Why Glimmer exists for display glasses

Display glasses project content at roughly one meter perceived depth while the wearer continues looking at the physical world. Interfaces must prioritize essential information, limit density, and fade when no longer relevant.

Glimmer handles several glasses-specific constraints:

- Dark or transparent surfaces so the real world remains visible
- Bold typography with increased letter spacing for legibility at small visual angles
- Outline-based focus instead of ripples
- Limited elevation and shadows suited to additive displays
- Pre-built components (buttons, lists, title chips, cards) that respect these rules

You can still customize primary and secondary colors for branding, but the base theme keeps content readable across varying lighting.

![Close-up of modern XR headset optics](https://images.unsplash.com/photo-1707167144619-a574a217136d?auto=format&fit=crop&w=800&q=80)

## Add the Glimmer dependency

Glimmer is an AndroidX library. In your module-level `build.gradle.kts` (or Groovy equivalent), add:

```kotlin
dependencies {
    implementation("androidx.xr.glimmer:glimmer:1.0.0-alpha22")
    // Optional: Google Sans Flex typography
    implementation("androidx.xr.glimmer:glimmer-google-fonts:1.0.0-alpha22")
}
```

Use the latest alpha listed in the [AndroidX release notes](https://developer.android.com/jetpack/androidx/releases/xr-glimmer). Target Android 15 (API 35) or higher and include the XR SDK components needed for your device type.

If you work with AI coding agents, the Android CLI skill installs guidance for this toolkit:

```bash
android skills add display-glasses-with-jetpack-compose-glimmer
```

## Wrap your UI in GlimmerTheme

Apply the theme at the root of any glasses-targeted activity or projected experience. Do not mix MaterialTheme or Material 3 components inside Glimmer surfaces.

```kotlin
import androidx.xr.glimmer.GlimmerTheme
import androidx.xr.glimmer.googlefonts.createGoogleSansFlexTypography

@Composable
fun GlassesApp() {
    GlimmerTheme(
        typography = createGoogleSansFlexTypography()
    ) {
        // Your glanceable content here
        ShoppingListScreen()
    }
}
```

The theme supplies colors, shapes, typography, and spacing defaults. Surfaces default to black or transparent backgrounds, and content colors are calculated automatically for contrast.

## Build a simple glanceable screen

A practical starting point is a title chip plus a short list of actions. Glimmer provides `TitleChip`, `List`, `ListItem`, and `Button` composables optimized for the form factor.

```kotlin
import androidx.xr.glimmer.Button
import androidx.xr.glimmer.List
import androidx.xr.glimmer.ListItem
import androidx.xr.glimmer.TitleChip
import androidx.xr.glimmer.Text

@Composable
fun ShoppingListScreen() {
    Column {
        TitleChip(text = "Shopping List")
        List {
            items(listOf("Milk", "Bread", "Eggs")) { item ->
                ListItem(
                    headlineContent = { Text(item) },
                    supportingContent = { Text("Tap to check off") }
                )
            }
        }
        Button(onClick = { /* handle */ }) {
            Text("Add item")
        }
    }
}
```

Focus is indicated with outlines rather than ripples. Elevation uses limited shadows so hierarchy remains clear without fighting the additive display. For more complex layouts, start from the bottom and keep the number of simultaneous elements low.

![Floating virtual reality glasses](https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?auto=format&fit=crop&w=800&q=80)

## Preview and test

Android Studio supports composable previews for Glimmer UI. You can also create an XR glasses virtual device in Device Manager to simulate the optical see-through experience.

On hardware such as XREAL AURA, enable developer options, connect via USB-C, and deploy as you would any Android app. The Compute Puck handles processing while the glasses display the projected content.

## Design tips for all-day wear

Keep interactions short. Show information only when needed and remove it promptly. Prefer high-contrast, bold text and rounded shapes. Avoid dense grids or phone-style navigation patterns.

Use depth (z-order plus subtle shadows) to communicate priority rather than color alone. Test in varied lighting because real-world backgrounds change constantly.

If you also need world-anchored content, combine Glimmer UI with ARCore Geospatial APIs available for Android XR. For full spatial panels and 3D models on headsets or wired glasses, explore the broader Jetpack XR SDK and SceneCore components.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yguMp7x1YAk"
    title="Design best practices for display AI glasses: Introducing Jetpack Compose Glimmer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Jetpack Compose Glimmer gives Android developers a familiar Compose surface that respects the constraints of display glasses. Start with the theme, use the provided components, and keep content minimal. With XREAL AURA and other Android XR devices shipping, these patterns let you extend useful mobile features into glanceable, always-available experiences without overwhelming the wearer.

## Sources

- [Build glanceable UI with Jetpack Compose Glimmer](https://developer.android.com/develop/xr/jetpack-xr-sdk/glimmer)
- [What's included in Jetpack Compose Glimmer](https://developer.android.com/develop/xr/jetpack-xr-sdk/jetpack-compose-glimmer/whats-included)
- [Jetpack Compose Glimmer release notes](https://developer.android.com/jetpack/androidx/releases/xr-glimmer)
- [Android XR developer documentation](https://developer.android.com/develop/xr)
- [Design best practices for display AI glasses (YouTube)](https://www.youtube.com/watch?v=yguMp7x1YAk)
