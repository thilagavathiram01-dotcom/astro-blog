---
title: "How to Prepare Your Android App for Play Adaptive Standards 2027"
description: "Step-by-step guide to meet Google Play Tier 3 adaptive quality for foldables by April 2027. Screenshots, state preservation, and testing tips."
pubDate: 2026-11-26T21:30:00
heroImage: "https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Google Play will require apps to meet Tier 3 adaptive quality standards for foldables starting April 2027. Apps that fall short can no longer publish updates or new versions and may see lower visibility in the store. Existing apps that stay untouched remain available for download.

This change builds on Android 17’s shift to adaptive-first development. Foldable users already expect full-screen experiences that keep their place when the device folds or rotates. Preparing now avoids last-minute rushes and positions your app for higher tiers that unlock better store placement.

![Two foldable smartphones side by side showing apps](https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=800&q=80)

## Understand the Tier 3 requirements

Tier 3 is called Adaptive ready. Your app must fill the available display area on foldables without letterboxing or compatibility mode. It must keep scroll position, typed text, and media playback intact across rotation, folding, unfolding, and resizing. It also needs to work correctly in multi-window environments.

These rules apply to standard apps. Games follow a separate timeline that reaches Tier 3 in August 2027. Google will later expand the framework to tablets, Googlebooks, and Android XR, so Tier 3 is the floor rather than the finish line.

You can already upload foldable screenshots in Play Console. Starting April 2027, every new app or listing update must include three foldable screenshots plus the usual two phone screenshots. Cover both 1:1 inner displays (Pixel 11 Pro Fold, Galaxy Z Fold8 Ultra style) and 4:3 inner displays with a 10:16 outer-screen shot (Galaxy Z Fold8 style). Optional 16:10 landscape shots are allowed.

By August 2027, new and updated apps must target API level 37 (Android 17). That removes the remaining developer opt-outs for orientation and resizability locks on large screens.

## Remove orientation and resize restrictions

Check your AndroidManifest.xml for android:screenOrientation locks and android:resizeableActivity="false". These force letterboxing on foldables and large screens. Remove or limit them so the system can resize the activity freely.

In Compose or View-based layouts, avoid hard-coded pixel sizes. Use window size classes or the adaptive layout libraries to decide when to show a single pane versus multiple panes. The official adaptive app quality guidelines list the exact checks for Tier 3.

For more on building responsive UIs, see our guide on [adaptive layouts with MediaQuery in Jetpack Compose](/blog/adaptive-layouts-mediaquery-jetpack-compose-guide/).

## Preserve state across configuration changes

Users fold and unfold devices while typing or watching video. Your app must restore scroll position, text field content, and playback position after these changes.

In Jetpack Compose, hold transient UI state in a ViewModel or use rememberSaveable. For lists, use LazyListState and save the first visible item index. For media, keep the player position outside the composition that gets recreated.

Test by rotating the device, folding and unfolding a physical foldable or emulator, and resizing the window in multi-window mode. The activity should not restart in a way that loses user progress. Android 17 makes resizability the default on large screens for apps targeting API 37, so early testing catches problems before the August deadline.

![Person holding a smartphone showing an app interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Capture and upload foldable screenshots

Play Console accepts screenshots from physical devices or the Android Emulator. Use the foldable emulators that match the required aspect ratios.

1. Open the Android Emulator and select a foldable device profile with a 1:1 or 4:3 inner display.
2. Launch your app and navigate to key screens that show adaptive layouts.
3. Capture the unfolded inner screen and the folded outer screen.
4. In Play Console go to Grow > Store presence > Store listings.
5. Upload the three foldable screenshots in the dedicated section. Add phone screenshots as usual.

Screenshots from the official foldable emulators meet the format requirements. You can also use Android Device Streaming for real hardware if you have access. Upload them now so your listing is ready before April 2027.

## Test on real and virtual foldables

Physical foldables or the Android Device Streaming service give the most accurate results. Emulators cover the required aspect ratios and let you script fold and unfold actions.

Verify these points:

- Content fills the window with no black bars.
- Scroll position returns after fold or rotation.
- Text input remains in the field.
- Video or audio continues from the same timestamp.
- The app stays usable in split-screen with another app.

Run the tests on both the inner and outer displays. Note any layout that stretches instead of rearranging; that fails higher tiers even if Tier 3 passes.

## Prepare for higher tiers and API 37

Tier 2 evaluates multi-pane layouts that avoid stretched elements and basic external input support (keyboard, mouse, stylus). Tier 1 looks at posture-specific experiences such as tabletop mode and multi-instance support. Apps that reach these levels can apply for large-screen badges and better merchandising today.

Targeting API 37 by August 2027 removes the last orientation and resizability opt-outs. Update your compileSdk and targetSdk, then retest on large screens. The Android 17 blog post explains the exact behavior changes.

Use the Jetpack Compose adaptive skill in Android Studio or the Android CLI with your preferred agent to accelerate layout updates. These tools generate the window-size-class checks and Navigation 3 patterns that keep state across size changes.

## Common pitfalls to avoid

Leaving resizeableActivity set to false is the fastest way to fail Tier 3. Hard-coded widths that look fine on phones break on 1:1 or 4:3 screens. Forgetting to save list state or media position creates the exact continuity bugs the guidelines target.

Do not wait until March 2027 to capture screenshots. Emulator images are accepted, so you can finish the listing assets this month. Existing users keep access to the current version, but any update after April requires the new standards.

## Conclusion

Meeting the April 2027 Tier 3 baseline is straightforward if you remove orientation locks, preserve UI state, and upload the required foldable screenshots. Start with the official adaptive app quality guidelines and test on emulators that match the 1:1 and 4:3 formats. Higher tiers and the API 37 target follow naturally once the basics are solid.

Apps that prepare early avoid publishing blocks and gain better visibility as Google expands the quality framework across large-screen devices.

## Sources

- Android Developers Blog: Elevating apps: New adaptive quality standards on Google Play (18 November 2026) — https://developer.android.com/blog/posts/google-play-adaptive-quality-standards
- Adaptive app quality guidelines — https://developer.android.com/docs/quality-guidelines/adaptive-app-quality
- Android Developers Blog: Android 17 is here (June 2026)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pLNJ-fNYTKU"
    title="The future unfolds! How to optimize Android apps for adaptive layouts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
