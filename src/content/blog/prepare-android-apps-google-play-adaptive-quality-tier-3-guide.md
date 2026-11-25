---
title: "Prepare Android Apps for Google Play Adaptive Quality Tier 3 by 2027"
description: "Step-by-step guide to meet Google Play Tier 3 adaptive ready requirements for foldables by April 2027 with screenshots and testing."
pubDate: 2026-11-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1763568258266-3794097e5837?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Google Play announced on November 18, 2026 that apps must meet baseline adaptive quality standards for foldables starting April 2027. Apps that fall short can no longer publish or update and may see reduced visibility in the store. Existing un-updated apps stay downloadable, but any new submission or update faces the new bar.

This guide explains exactly what Tier 3 requires, the screenshot rules, the full timeline including the August 2027 API 37 target, and concrete steps to prepare your app today using Jetpack Compose and official tools.

## What Tier 3 adaptive ready means

Tier 3 is called Adaptive ready. It is the mandatory baseline for foldables on Google Play from April 2027.

Your app must fill the available display area without letterboxing or compatibility mode. Content must not overflow the window. The app must preserve state during rotation, folding and unfolding, and window resizing. That includes scroll position, text entered in fields, keyboard state, and media playback position. Multi-window environments must also work.

Higher tiers build on this foundation. Tier 2 (Adaptive optimized) adds responsive multi-pane layouts that avoid stretched elements plus basic support for external keyboard, mouse, trackpad, and stylus. Tier 1 (Adaptive differentiated) covers tabletop and book postures, camera continuity, interactive picture-in-picture, and multi-instance support.

Apps that reach Tier 2 or Tier 1 can already apply for Google Play badging and enhanced merchandising. The quality framework will later expand Tier 2 and Tier 1 requirements across foldables, tablets, Googlebooks, and Android XR devices.

![Laptop and phone workspace for Android development](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Timeline and milestones

The changes roll out in stages:

- November 2026 (live now): You can upload foldable screenshots in Play Console. They begin appearing in store listings over the coming weeks. Apps meeting Tier 2 or Tier 1 can apply for badging and enhanced merchandising.
- April 2027: New apps and updates must include dedicated foldable screenshots. Baseline Tier 3 adaptive quality support becomes mandatory for standard applications. Un-updated existing apps remain downloadable.
- August 2027: New and updated apps must target API level 37 (Android 17). This removes developer opt-outs for orientation and resizability restrictions on large screens.

Games follow a parallel track with their own large-screen quality requirements. Games need Tier 3 baseline support from August 2027 and foldable screenshots from April 2027.

## Foldable screenshot requirements

Starting April 2027 you must provide three foldable screenshots in addition to the standard two phone screenshots when you publish a new app or update a store listing.

Play Console accepts screenshots from physical devices or the Android Emulator. The supported formats cover the ecosystem:

- Standard phone landscape: Optional 16:9 landscape screenshot in addition to the required 9:16 portrait screenshots. Examples include Samsung Galaxy S26 and Google Pixel 11 Pro.
- Foldable 1:1 inner display: At least one screenshot of the unfolded inner screen at 1:1 aspect ratio. Devices include Samsung Galaxy Z Fold8 Ultra and Google Pixel 11 Pro Fold.
- Foldable 4:3 inner display: At least one unfolded inner screen screenshot at 4:3, plus at least one portrait screenshot of the folded outer screen at 10:16. Optional 16:10 landscape is allowed. Example device: Samsung Galaxy Z Fold8.

Screenshots captured on the official Foldable (1:1 inner display) and Foldable (4:3 inner display) emulators are fully compliant. You can upload them today under Grow > Store presence > Store listings in Play Console.

## Steps to meet Tier 3

Start with these actions based on official guidance:

1. Review the adaptive app quality guidelines and UI design guidelines on developer.android.com. Confirm your app fulfills core app quality requirements first, especially user experience rules.

2. Remove orientation locks and resizability opt-outs. Delete or avoid `android:screenOrientation` restrictions and `android:resizeableActivity="false"` in the manifest. Android 17 (API 37) will ignore these on large screens anyway.

3. Preserve state across configuration changes. Use `rememberSaveable` in Jetpack Compose for scroll positions, text input, and custom state. Ensure media playback resumes correctly. Test combinations of resize followed by fold or rotation.

4. Make the UI fill the window. Prefer Jetpack Compose adaptive layouts. Use window size classes, MediaQuery, or similar APIs so content expands to the available space without letterboxing. Support multi-window mode even if the app previously opted out.

5. Test on the right devices. Use physical foldables, Android Device Streaming, or the resizable emulator. Specifically test Foldable (1:1 inner display) and Foldable (4:3 inner display) emulators running Android 12 (API 31) or higher. Verify all orientations, multi-window, and state retention on screens with sw >= 600 dp.

6. Capture and upload screenshots. Use the Android CLI and emulator to generate Play Console-ready images for the required foldable formats. Upload them now to get ahead of the April deadline.

For faster adaptation of existing Compose apps, use the Compose adaptive skill with your AI agent. It guides Navigation 3 multi-pane layouts, Grid and Flexbox, state preservation, and form-factor previews. See the detailed walkthrough in the [adaptive Compose skill guide](/blog/adaptive-compose-skill-googlebook-foldables-guide/).

![Developer coding on laptop showing code](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Tips for higher tiers and long-term compliance

Aim beyond Tier 3 if you want badging and better store placement. Implement multi-pane list-detail or supporting-pane layouts for Tier 2. Add external input support and avoid stretched UI elements. For Tier 1, handle foldable postures such as tabletop and book, plus camera continuity where relevant.

Test early and often. Add Compose previews for phone, foldable, tablet, and desktop form factors. Run screenshot tests so layout changes do not introduce regressions. Use the Android Emulator’s resizable mode to simulate window size changes quickly.

Keep the target SDK current. Planning for API 37 now means fewer last-minute changes in August 2027. Modern UI toolkits like Jetpack Compose make the same codebase scale from phones to foldables, tablets, Googlebook, and XR devices.

## Watch adaptive Compose guidance

Android Developers published a short overview on building adaptive UI with Jetpack Compose. It emphasizes driving UI decisions from current window size, posture, and capabilities rather than static device categories.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pvCINAW2-z4"
    title="How to build adaptive UI using Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Meeting Tier 3 by April 2027 keeps your app publishable and visible on Google Play while improving the experience for users on foldables and large screens. Start by removing orientation locks, preserving state, filling the window, and capturing the required screenshots. Then move toward Tier 2 and Tier 1 for badging and stronger merchandising.

The tools and guidelines are available today. Review the official adaptive quality docs, test on the recommended foldable emulators, and update your store listing. Your users on the growing foldable base will notice the difference immediately.

## Sources

- Android Developers Blog: Elevating apps: New adaptive quality standards on Google Play (November 18, 2026)
- Android Developers: Adaptive app quality guidelines and Tier 3 — Adaptive ready
- Android Developers: Get started with adaptive apps
- Android Developers YouTube: How to build adaptive UI using Jetpack Compose
