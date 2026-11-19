---
title: "How to Meet Google Play Foldable Rules by April 2027"
description: "Prepare your Android app for Google Play’s April 2027 Tier 3 Adaptive ready foldable requirements. Step-by-step guide."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

# How to Meet Google Play Foldable Rules by April 2027

Google Play will enforce new quality standards for apps on foldable devices starting April 2027. Apps that fail the baseline will lose the ability to publish new versions or updates and may see lower visibility in the store. Existing apps that never update stay downloadable, but any change triggers the rules.

This guide walks through the exact Tier 3 requirements, screenshot rules, testing steps, and practical code patterns so you can ship compliant updates well before the deadline.

![Two foldable smartphones side by side showing apps and video](https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=800&q=80)

## What Tier 3 Adaptive ready actually requires

Tier 3 is the mandatory floor. Your app must fill the entire available display or window. Letterboxing and compatibility mode are not allowed. Content must not overflow the bounds.

During rotation, folding, unfolding, or resizing, the app must preserve:
- Scroll position in lists and scrollable content
- Text already typed into input fields and the keyboard state
- Media playback position so videos resume where they left off

The app must also remain fully functional in multi-window mode, including split-screen and desktop windowing. Basic external input (keyboard, mouse, trackpad, stylus) must work for critical flows.

Official details live in the [Tier 3 Adaptive ready guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality/tier-3) and the broader [adaptive app quality page](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality).

## Screenshot requirements starting April 2027

New apps and any store listing updates must include three foldable screenshots in addition to the usual two phone screenshots. Google opened the upload slots in Play Console on 18 November 2026 under Grow > Store presence > Store listings.

Required shots typically cover:
- At least one 1:1 aspect ratio of the unfolded inner display
- At least one 4:3 aspect ratio of the unfolded inner display
- At least one portrait shot of the outer/cover screen (commonly 10:16)

Capture them on a real foldable or the Pixel Fold emulator. Higher tiers (Tier 2 and Tier 1) remain optional but unlock badges and extra promotion if you meet them.

## Step-by-step preparation checklist

1. **Audit current behavior**  
   Run your app on the Pixel Fold emulator and a medium tablet emulator. Rotate, fold/unfold, and enter split-screen. Note any letterboxing, lost scroll position, or crashed media.

2. **Remove orientation locks and resize opt-outs**  
   Delete or stop relying on `android:screenOrientation` locks and `android:resizeableActivity="false"` for large screens. Android 17 (API 37) targeting becomes mandatory later in 2027 and removes remaining opt-outs.

3. **Adopt window size classes**  
   Use `WindowSizeClass` from Material3 Adaptive or Jetpack WindowManager. Drive layout decisions from available width and height, not physical device type or orientation.

4. **Preserve state across configuration changes**  
   Keep scroll state in a `LazyListState` or `ScrollState` owned by a ViewModel. Use `rememberSaveable` or `SavedStateHandle` for text fields. For media, save playback position in a ViewModel and restore it after config changes.

5. **Support multi-window**  
   Ensure all critical flows work when the window is half the screen. Handle resource loss (camera, microphone) when another app gains focus and regain them cleanly.

6. **Add basic input support**  
   Test with a Bluetooth keyboard, mouse, and stylus. Clickable elements, selection, and scrolling must respond. On Android 14+ stylus handwriting in text fields works by default.

7. **Capture and upload screenshots**  
   Use the emulator or a physical device. Upload the three required foldable shots now so they appear in listings ahead of the deadline.

## Practical Jetpack Compose patterns

Most modern apps should use Compose adaptive components. The Material3 Adaptive library provides `ListDetailPaneScaffold`, `SupportingPaneScaffold`, and navigation that switches between bottom bar and navigation rail based on window size.

Example of checking window size class and switching layouts:

```kotlin
val windowSizeClass = currentWindowAdaptiveInfo().windowSizeClass

when {
    windowSizeClass.windowWidthSizeClass == WindowWidthSizeClass.Expanded -> {
        // multi-pane layout
    }
    else -> {
        // single pane
    }
}
```

For state preservation, own your `LazyListState` in a ViewModel so it survives rotation and fold events:

```kotlin
class MyViewModel : ViewModel() {
    val listState = LazyListState()
}
```

Then pass it to the composable. Media players should store `currentPosition` in the ViewModel and call `seekTo` after recomposition.

See our earlier guide on [using the Compose adaptive skill for Googlebook and foldables](/blog/adaptive-compose-skill-googlebook-foldables-guide/) for agent-assisted migration tips.

![Hand holding a modern foldable smartphone](https://images.unsplash.com/photo-1787829491918-57f993c60ed1?auto=format&fit=crop&w=800&q=80)

## Testing plan that matches the official tests

Google lists specific tests under Tier 3. Run at least these:

- **T-Config_Orientation**: Confirm no letterboxing in portrait, landscape, unfolded, and multi-window.
- **T-Config_State**: Scroll, type text, play media, then rotate/fold/resize and verify everything is restored.
- **T-Config_Combinations**: Chain changes (resize then rotate, or fold after rotation).
- **T-Multi-Window_Functionality**: Full functionality in every window size and fold state.
- **T-Multi-Window_Focus / Resources**: Background updates continue; camera/mic are released and reacquired.

Use the resizable emulator plus the Pixel Fold AVD. Test on Android 12+ large-screen devices (sw >= 600 dp) because that is where the system ignores older orientation locks.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/RyO2H1VbqdM"
    title="Build adaptive apps with Compose's new APIs (I/O Connect '26)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Timeline and extra deadlines

- **Now**: Upload foldable screenshots in Play Console. They begin appearing in listings within weeks.
- **April 2027**: Tier 3 quality + three foldable screenshots required for any new app or update. Games need the screenshots in April but have until August 2027 for the quality bar.
- **August 2027**: Target Android 17 (API 37). This removes remaining large-screen opt-outs for orientation and resizability.

Higher tiers stay optional but improve ranking and can earn the large-screen badge.

## Tips to finish faster

- Start with your highest-traffic screens. Fix one list-detail flow first, then expand.
- Prefer `WindowSizeClass` over raw pixel calculations so the same code works on foldables, tablets, and desktops.
- If you use agents or Gemini in Android Studio, point them at the official adaptive skill for layout suggestions.
- Capture screenshots in both folded and unfolded states early so marketing and store listing work does not block the release.

## Conclusion

The April 2027 rules set a clear minimum: full-screen layouts, preserved state on every configuration change, multi-window support, and proper store screenshots. Most of the work is already covered by existing Jetpack Compose adaptive APIs and ViewModel state ownership. Audit on the Pixel Fold emulator this week, fix the gaps, upload the three screenshots, and you will be ready well ahead of the deadline.

**Sources**  
- [Tier 3 — Adaptive ready](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality/tier-3)  
- [Adaptive app quality guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality)  
- Google Play announcements and coverage from 18–19 November 2026 (9to5Google, The Verge, Android Authority)

Ready to adapt more screens? Check the related adaptive layout guides on this site and test your next release on a foldable emulator today.
