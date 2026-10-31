---
title: "Updated Compose Adaptive Skill for Googlebook"
description: "How to use the updated Compose adaptive skill from Android Dev Summit 2026 to prepare apps for Googlebook laptops and foldables."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1763568258266-3794097e5837?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Android Dev Summit 2026 updated the Compose adaptive skill so agents can prepare existing apps for Googlebook laptops and foldable postures from a single codebase. The skill now audits UI for keyboard shortcuts, hover states, custom cursors, and tooltips, then handles navigation, Grid and Flexbox layouts, end-to-end state, and tabletop media or camera screens.

This builds on earlier adaptive work. If you already followed the steps in our [guide to adapting Android apps for Googlebook](/blog/adapt-android-apps-googlebook/), the new skill accelerates the desktop and foldable pass. Google Play will examine foldable quality more closely in 2027 and surface optimized titles.

The skill lives in the official android/skills repository and works with any agent that supports the skills standard, including those inside Android Studio Rabbit 2 via Bring Your Own Agent.

![Laptop and phone workspace with coding tools on a desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What the October 2026 Update Adds

Official Android Developers Blog posts from 28 October 2026 describe the changes. The skill previously helped with window size classes and multi-pane layouts. The update adds:

- Desktop input patterns: keyboard shortcuts, custom pointer cursors, hover states, and tooltips on buttons and controls.
- Explicit end-to-end state management so configuration changes (resize, fold, unfold) preserve navigation, scroll position, and media playback.
- Foldable posture support that refactors media and camera screens into tabletop layouts.
- Layout migration to Grid, Flexbox, and MediaQuery APIs.

These changes target Googlebook (laptops on an Android foundation from partners such as HP, Dell, Lenovo, Acer, and Asus), foldables, tablets, parked cars, and XR devices. One codebase continues to serve phone, laptop, and foldable users.

## Prerequisites Before You Run the Skill

The skill documentation on developer.android.com lists clear requirements:

1. Every screen uses Jetpack Compose. If XML Views remain, run the XML-to-Compose skill first.
2. Navigation uses Navigation 3. Migrate with the Navigation 3 skill if needed.
3. The project already depends on the Compose Material 3 Adaptive library for window size classes.

Install or update the skill with the Android CLI:

```bash
android skills add adaptive
```

Or manage it inside Android Studio Rabbit 2 via Settings > Tools > AI > Skills Manager, or by typing @ in the agent chat and selecting Manage skills. Android Studio ships with the adaptive skill preloaded in recent releases.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-Step: Run the Updated Skill

Open your project in Android Studio Rabbit 2 or any ACP-compatible agent. In the agent panel:

1. Confirm the adaptive skill is installed and active.
2. Prompt the agent: "Use the adaptive skill. Audit this Compose app for desktop input (keyboard shortcuts, hover states, custom cursors, tooltips). Migrate layouts to Grid and Flexbox where appropriate. Preserve state across configuration changes. Optimize media and camera screens for foldable tabletop posture."
3. Review the plan the agent returns. It should list screens that need window size class checks, Navigation 3 scene strategies (ListDetailSceneStrategy or SupportingPaneSceneStrategy), and desktop extras.
4. Accept the changes screen by screen. Test each in the desktop emulator and a foldable AVD.
5. After the agent finishes, compare the result against the official desktop and adaptive quality guidelines.

The skill follows a documented workflow: verify current UI and add form-factor previews, make navigation adaptive (bottom bar to rail), introduce multi-pane layouts, adapt lists and grids by column count, then add desktop input and foldable postures.

![Developer workspace with laptop displaying code next to a smartphone](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Desktop and Foldable Specifics the Skill Now Handles

For Googlebook-class windows (extra-large width starting at 1600dp), the skill looks for:

- Contextual cursors for text, resize handles, and tools.
- Right-click menus and hover feedback.
- Keyboard Shortcuts Helper integration.
- Multi-instance support so users can open two independent windows.
- Drag-and-drop of content between windows.

For foldables it converts media players and camera previews into tabletop layouts that keep the content on the upper half and controls on the lower half when the device is partially folded. It also ensures state survives the fold and unfold configuration change.

These match the desktop design guide and the adaptive quality guidelines that Google Play will reference more heavily for foldables next year.

## Tips for Better Results

Keep prompts narrow. Ask for keyboard shortcuts on one screen before requesting a full app pass. The skill works best when Compose and Navigation 3 are already in place.

Always review generated code. Agents can miss edge cases around multi-window resizing or custom caption bars. Run the desktop emulator and resize the window while the app is open. Unfold a foldable AVD and confirm the tabletop layout appears.

Pair the skill with the official adaptive quality checklist. The skill accelerates implementation; the guidelines remain the source of truth for Play badging and future discovery advantages.

If your app already targets tablets, the Googlebook and foldable increments are smaller. Notability’s team noted that prior tablet and foldable work made the laptop path mostly a matter of turning existing dials.

## Common Gaps the Skill Surfaces

- Bottom navigation that never becomes a rail on expanded width.
- Layouts locked to device inches instead of window size classes.
- Missing hover and right-click on trackpad-friendly controls.
- Media screens that do not reflow for tabletop posture.
- State that resets when the user folds the device or resizes the window.

Fix these before you request optimized-for-desktop badging or prepare for the 2027 foldable quality evaluation.

## Conclusion

The updated Compose adaptive skill from Android Dev Summit 2026 turns a manual layout pass into a guided agent task. Install it, point your agent at the desktop and foldable requirements, review the output, and test in the emulator. One adaptive codebase now reaches Googlebook laptops, foldables, and phones without a separate APK.

Start with one high-traffic screen, confirm the keyboard and hover behavior, then expand. Official sources remain the Android Developers Blog post from 28 October 2026 and the adaptive skill documentation.

## Sources

- Agentic and Flexible: A next era of Android development — Android Developers Blog, 28 October 2026
- Overview of Android skills — Android Developers
- A guide to making an app adaptive (skill documentation) — Android Developers
- Land your apps on Googlebook with adaptive development — Android Developers Blog, 22 September 2026
- Android Dev Summit 2026 keynote — Android Developers YouTube
- Build adaptive apps — Android Developers
