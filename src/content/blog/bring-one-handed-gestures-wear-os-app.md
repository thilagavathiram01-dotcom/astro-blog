---
title: "Bring One-Handed Gestures to Your Wear OS App"
description: "How to add one-handed gesture support to Wear OS apps using Compose 1.7 beta and the new Wear OS 7 framework."
pubDate: 2026-11-19T15:00:00
heroImage: "https://images.unsplash.com/photo-1722153105551-cfea928e80de?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "pixel"]
noindex: false
---

Wear OS 7 introduces a gestures framework that lets users control apps without touching the screen. Primary actions map to a double-pinch on Pixel Watch devices. Dismiss actions map to a wrist turn. Developers can now add this support through Compose for Wear OS 1.7 beta.

The feature first appeared on Pixel Watch with Wear OS 6.1 for system actions like timers and calls. Wear OS 7 expands it to third-party apps. Spotify already uses it so users can start and stop playback with a double pinch.

This guide shows how to integrate the API in a Compose for Wear OS app. Details come from the official Android Developers Blog and documentation.

## Set Up the Dependency

Upgrade to Compose for Wear OS 1.7 beta. Add this line to your app’s build.gradle:

```
implementation("androidx.wear.compose:compose-material3:1.7.0-beta01")
```

The app must target Wear OS 7 (API level 37) or higher for platform gesture detection. Support currently focuses on Pixel Watch 3 and later, though the framework is open to all OEMs.

![Person wearing a smartwatch showing a digital fitness display](https://images.unsplash.com/photo-1787834963970-0ca617742a6b?auto=format&fit=crop&w=800&q=80)

## Configure a One-Handed Gesture

Use Modifier.oneHandedGesture on interactive composables such as buttons or cards. Create a configuration with rememberOneHandedGestureConfiguration.

The configuration specifies the action type (primary or dismiss) and a gestureId that coordinates with system hint preferences.

Example for a primary action button:

```kotlin
val gestureConfig = rememberOneHandedGestureConfiguration(
    action = OneHandedGestureAction.Primary,
    gestureId = "play_pause"
)

Button(
    onClick = { /* handle click */ },
    modifier = Modifier.oneHandedGesture(
        configuration = gestureConfig,
        onGesture = { /* same as click */ }
    )
) {
    Text("Play")
}
```

The onGesture callback receives the same event as a tap. On Pixel Watch the primary action triggers on double pinch. The dismiss action triggers on wrist turn and typically navigates back or closes a dialog.

## Add Gesture Indicators

Users need visual cues that a gesture is available. The API provides indicator components. Wrap clickable content with OneHandedGestureClickIndicator or use scroll indicators for lists.

The system manages hint display frequency according to user settings. Call onShowIndicator when the component has priority so the hint appears only when relevant.

For a media control screen, attach the primary gesture to the play/pause button and the dismiss gesture to a back button or the overall screen. Spotify maps the primary gesture to toggle playback, matching the physical button behavior without a screen touch.

![Two smartwatches held side by side showing different displays](https://images.unsplash.com/photo-1722153768985-9286321b8769?auto=format&fit=crop&w=800&q=80)

## Handle Edge Cases and Testing

Not every device or OEM supports the gestures. Check availability at runtime. The LocalOneHandedGestureEnabled composition local controls whether tracking is active inside a composition tree.

Test on a Pixel Watch 3 or newer running Wear OS 7. Enable hand gestures in Settings > Gestures on the watch or in the companion app. Verify double-pinch and wrist-turn responses match the mapped actions.

Keep the vocabulary small. Map only the single most important action per screen to the primary gesture. Use dismiss for navigation or cancellation. Avoid attaching gestures to every element.

Ambient mode support is available if you set the appropriate flag in the configuration. The gesture continues to work when the screen is in ambient state on supported hardware.

## Watch the Official Overview

The Android Developers session below covers the framework and shows how to add the modifier to an existing button.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/z33FbkVjNUs"
    title="Build for the wrist, the road, and the remote with Jetpack Compose and Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

One-handed gestures let Wear OS users complete key actions when their other hand is busy. Upgrade to Compose for Wear OS 1.7 beta, apply Modifier.oneHandedGesture to primary and dismiss elements, and surface the built-in indicators. The result matches the behavior Spotify already ships for media control.

Test thoroughly on Wear OS 7 hardware and respect the two-action model so users can learn the gestures quickly. For related Android platform changes, see our guide on [Android 17 per-app memory limits](/blog/android-17-per-app-memory-limits-guide/).

**Sources**

- Android Developers Blog: Bring one-handed gestures to your Wear OS app (August 11, 2026)
- Android Developers documentation: One-handed gestures with Compose
- Compose for Wear OS 1.7 beta release notes
