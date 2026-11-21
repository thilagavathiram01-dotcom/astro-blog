---
title: "Prepare Android Games for Play Foldable Rules 2027"
description: "Meet Google Play Tier 3 large screen quality standards for Android games by August 2027. Screenshots, state preservation, and testing steps."
pubDate: 2026-11-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1784969330482-edd995d4edec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Google Play is raising the bar for games on foldables and large screens. From August 2027, titles that fail the baseline Tier 3 (Ready) quality guidelines cannot publish new versions or updates. Screenshots for foldable devices become mandatory in April 2027.

This guide walks through the exact requirements, how to test them, and practical steps to get your game ready. It follows the official Android Developers Blog post from 18 November 2026 and the large-screen quality guidelines for games.

## Why the new rules matter for game developers

Players already use foldables and tablets for longer sessions. Games that letterbox, restart on unfold, or clip the HUD lose those users. Google Play will enforce the baseline so every game delivers a seamless experience across form factors.

Apps face a similar deadline in April 2027. See our companion guide on [how to prepare your Android app for Google Play foldable requirements](/blog/how-to-prepare-android-app-google-play-foldable-requirements-2027/).

![Person playing a mobile game on a smartphone](https://images.unsplash.com/photo-1639656333010-b6a054423b63?auto=format&fit=crop&w=800&q=80)

## The three quality tiers for games

Google organises the guidelines into three progressive tiers.

**Tier 3: Ready (mandatory baseline from August 2027)**  
Games render full screen in their supported orientation(s). HUD elements stay inside safe areas. When the device rotates to an unsupported orientation the engine cleanly letterboxes or pillarboxes. State and touch alignment survive folding, unfolding, rotation, and multi-window resizing.

**Tier 2: Optimized**  
Builds on Tier 3 with high-resolution graphics, proportional HUD scaling, styled framing when letterboxing, smooth frame pacing, and full playability with external controllers, keyboards, and mice.

**Tier 1: Differentiated**  
Flagship experiences. On foldables this includes sustained 60 FPS (120 FPS on supported displays), thermal and battery stability during extended unfolded sessions, modern graphics rendering, and dynamic resolution scaling between inner and cover screens.

Only Tier 3 is required to keep publishing. Higher tiers unlock better store placement and badging.

## Timeline and screenshot rules

- **Now**: Upload foldable screenshots in Play Console. They start appearing in listings within weeks.
- **April 2027**: Every new game and every update must include at least three dedicated foldable screenshots in addition to the standard phone screenshot, in the game’s primary orientation.
- **August 2027**: Games must meet Tier 3 Ready quality to publish new versions or updates.

Exact ratios depend on the device style. Capture at least one 1:1 inner display screenshot (Pixel 11 Pro Fold, Galaxy Z Fold8 Ultra style), one 4:3 or 3:4 inner display, and one outer screen shot (16:10 or 10:16). Upload them under Grow > Store presence > Store listings.

![Man playing a video game on a tablet](https://images.unsplash.com/photo-1673900936607-7635789436f2?auto=format&fit=crop&w=800&q=80)

## Step-by-step: hit Tier 3 Ready

1. **Declare supported orientations and aspect ratios**  
   In your manifest or engine settings, list the orientations and anchor aspect ratios your game supports. Android will still force full-screen rendering on large screens for games that target recent SDKs, so design for that from the start.

2. **Render full screen with safe HUD areas**  
   Place interactive elements and critical UI inside the safe area so they never clip on notches, rounded corners, or fold creases. Test on both cover and inner displays.

3. **Handle unsupported orientations cleanly**  
   When the device rotates to an orientation you do not support, letterbox or pillarbox inside the engine. Do not rely on system compatibility mode. Style the bars if you can; plain black is acceptable for Tier 3.

4. **Preserve game state across configuration changes**  
   Folding, unfolding, rotation, and multi-window resize must not restart the level or lose progress. Save player position, score, inventory, and input state. On unfold the touch coordinates must stay aligned with the new screen.

5. **Support multi-window and multi-resume**  
   The game should continue correctly when placed side-by-side with another app and when the user switches away and back.

6. **Test on representative devices**  
   Use foldables (square 1:1 and passport 4:3 styles) and tablets (standard and ultra-large). Android Studio emulators and Firebase Test Lab cover the configurations listed in the official guidelines.

## Tips for Unity and Unreal Engine

Both engines have added native support for resizing and configuration changes. Enable the relevant plugins or settings so the game receives the new window size without a full restart. Map safe areas using the engine’s notch/cutout APIs. For Tier 2 and above, implement dynamic resolution and frame-pacing controls that respond to thermal hints.

## Video: building adaptive experiences

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pLNJ-fNYTKU"
    title="The future unfolds! How to optimize Android apps for adaptive layouts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Start with screenshots today so your listing already shows foldable support. Then work through the Tier 3 checklist: full-screen rendering, safe HUD, clean letterboxing, and reliable state preservation. Meeting the August 2027 baseline keeps your game updatable and visible. Higher tiers give you the chance to stand out on the growing number of large-screen Android devices.

## Sources

- Android Developers Blog: Elevating games: New large screens and foldables quality standards on Google Play (18 November 2026)
- Android Developers: Large screen quality guidelines for games
- Android Developers: Foldables quality guidelines for games
- Google Play Console: Store listing screenshot requirements
