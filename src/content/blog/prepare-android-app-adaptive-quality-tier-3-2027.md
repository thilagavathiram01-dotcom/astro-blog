---
title: "How to Meet Google Play Adaptive Quality Tier 3 by 2027"
description: "Step-by-step guide to prepare Android apps for Google Play’s April 2027 Tier 3 Adaptive ready requirements on foldables and large screens."
pubDate: 2026-11-25T15:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Google Play will require apps to meet Tier 3 Adaptive ready quality standards for foldables starting April 2027. Apps that fail the baseline cannot publish new versions or updates and may lose store visibility. Existing apps that never update remain downloadable, but any change triggers the rules.

This guide shows the exact requirements from the Android Developers Blog and quality guidelines, plus practical steps to reach compliance with Jetpack Compose.

![Android developer working on adaptive layouts](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## What Tier 3 Adaptive Ready Means

Tier 3 is the baseline. Your app must fill the available display area on foldables and large screens without letterboxing or compatibility mode. It must preserve state during rotation, folding, unfolding, and resizing. It must stay fully functional in multi-window environments.

State includes scroll position, text entered in fields, and media playback position. The app handles combinations of these changes, such as resizing followed by rotation.

Google Play also requires three foldable screenshots in addition to the standard two phone screenshots on store listings starting April 2027. You can upload foldable screenshots today in Play Console.

Apps must target API level 37 (Android 17). Targeting this level removes developer opt-outs for orientation and resizability restrictions on large screens (smallest width greater than 600 dp). Your app must adapt to any screen size.

## Check Your Current Compliance

Open the Adaptive app quality guidelines on developer.android.com. Review the Tier 3 checklist under configuration and continuity, multi-window, and external input support.

Run your app on a foldable emulator or physical device. Rotate, fold, unfold, enter multi-window, and resize the window. Note any letterboxing, lost scroll position, cleared text fields, or paused media that does not resume.

Use the Android Lint checks and the Adaptive quality test tools in Android Studio to surface issues automatically.

## Step-by-Step: Make Your App Adaptive Ready

1. Update dependencies. Use the latest Compose BOM and Material 3 Adaptive library. Declare `compileSdk 37` and `targetSdk 37` in your module build file.

2. Detect window size. Use `currentWindowAdaptiveInfo()` or window size classes from Material 3 Adaptive. Switch layouts at compact, medium, and expanded breakpoints.

3. Preserve state. Store UI state in a ViewModel or `rememberSaveable`. Avoid resetting lists or text fields on configuration change. For media, save and restore playback position.

4. Fill the window. Remove fixed widths. Use `Modifier.fillMaxSize()`, weights, and `WindowInsets`. Avoid letterboxing by supporting resizability in the manifest or by default on API 37.

5. Handle folds. Collect `FoldingFeature` with the window manager or Compose adaptive APIs. Place content away from the hinge when the device is half-open (tabletop or book posture). Use the fold as a natural divider for two-pane layouts.

6. Support multi-window. Test split-screen and free-form. Ensure all critical flows work when the window is half the screen width. Do not assume a fixed orientation.

7. Add foldable screenshots. In Play Console, upload at least three screenshots that show the app on a foldable form factor. Use the device frames Google provides or capture from an emulator.

Test each change on a Pixel Fold emulator, Samsung Galaxy Z Fold, and a tablet. Confirm state survives a full cycle of fold-unfold-rotate-resize.

![Foldable Android device showing adaptive UI](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Compose Code Patterns That Help

Window size class switching is straightforward:

```kotlin
val adaptiveInfo = currentWindowAdaptiveInfo()
when {
    adaptiveInfo.windowSizeClass.isWidthAtLeastBreakpoint(WIDTH_DP_EXPANDED_LOWER_BOUND) -> ExpandedLayout()
    adaptiveInfo.windowSizeClass.isWidthAtLeastBreakpoint(WIDTH_DP_MEDIUM_LOWER_BOUND) -> MediumLayout()
    else -> CompactLayout()
}
```

For state preservation, keep the ViewModel outside the composition that recreates on config change. Use `rememberSaveable` for simple values that must survive process death.

The MediaQuery and FlexBox APIs in recent Compose releases make dynamic layouts easier. See the official adaptive layout samples for list-detail and supporting-pane patterns.

## Tips for Faster Compliance

Start with the core flows users care about: navigation, lists, forms, and media. Fix those first. Secondary screens can follow.

Use the same adaptive architecture for phones and large screens so you maintain one codebase. The payoff is higher engagement: multi-device users spend more, according to Google internal data cited in Android developer posts.

Upload foldable screenshots early so your listing already meets the visual requirement when enforcement begins.

If you already follow the older large-screen quality guidelines, most of the Tier 3 work is done. Review the new checklist for any gaps in state preservation and multi-window.

## What Happens If You Miss the Deadline

After April 2027, non-compliant apps cannot publish updates. New installs of older versions continue, but visibility may drop. Google Play will expand the quality framework over time to higher tiers and more form factors, including tablets and Googlebooks.

Targeting API 37 is also required as part of the broader Android 17 rollout. Plan the targetSdk bump alongside the adaptive work.

## Related Reading

If you are already using MediaQuery for adaptive layouts, the patterns in [adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/) transfer directly to the Tier 3 requirements.

## Conclusion

Meeting Tier 3 Adaptive ready is achievable with current Jetpack Compose tools. Fill the window, preserve state, support multi-window, and ship foldable screenshots. Start testing on foldable emulators this week so the April 2027 deadline is routine rather than a scramble.

The same work improves the experience on tablets and future form factors. Users on large screens already expect apps to use the space well.

## Sources

- [Elevating apps: New adaptive quality standards on Google Play](https://developer.android.com/blog/posts/google-play-adaptive-quality-standards) — Android Developers Blog, 18 November 2026
- [Adaptive app quality guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality) — Android Developers
- [Tier 3 — Adaptive ready](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality/tier-3) — Android Developers

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pLNJ-fNYTKU"
    title="The future unfolds! How to optimize Android apps for adaptive layouts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
