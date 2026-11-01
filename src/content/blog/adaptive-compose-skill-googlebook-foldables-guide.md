---
title: "How to Adapt Android Apps with the Compose Adaptive Skill"
description: "Step-by-step guide to using the updated Compose adaptive skill for Googlebook, foldables, tablets, and desktops with AI agents."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Android apps now run on phones, foldables, tablets, laptops, and the new Googlebook. Maintaining separate layouts for each form factor wastes time. Google updated the Compose adaptive skill at Android Dev Summit 2026 so agents can turn a compact mobile UI into responsive multi-pane layouts, desktop controls, and foldable postures from a single codebase.

The skill follows the open Agent Skills standard. Install it once with the Android CLI or drop it into Android Studio, then prompt your agent. It pulls official guidance on Navigation 3 scenes, Grid and Flexbox layouts, keyboard shortcuts, tooltips, custom cursors, and state preservation across configuration changes.

This guide covers prerequisites, installation, the main workflow steps, and practical tips so you can prepare an existing Compose app for larger screens today.

## Why adaptive layouts matter now

Android 17 requires apps that target the new API level to support resizability on large screens. Googlebook brings a laptop form factor built on Android. Foldables already ship in volume, and XR glasses like XREAL AURA add more surfaces. An app that only works in portrait phone mode loses users the moment the window grows or the device folds.

Agents help, but they need precise instructions. The adaptive skill supplies those instructions on demand so the model does not invent outdated patterns or break state when the screen changes.

![Developer workspace with laptop and phone](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Install the adaptive skill

You can install the skill through the Android CLI or manually in Android Studio.

With the Android CLI (recommended for any agent):

1. Confirm the CLI is installed and up to date.
2. Run `android skills list` to see available skills.
3. Run `android skills add adaptive`.

The CLI places the skill in the correct directory for the agents it detects. Re-running the command updates it to the latest version.

In Android Studio Rabbit 2 or later:

1. Download the skill from the official Android skills GitHub repository.
2. Place the folder under `.agents/skills` or `.android-studio/skills` at your project root.
3. Restart the IDE or refresh the agent panel.

You can also invoke it manually in the agent chat by typing `@adaptive`.

For broader agent setup, see the guide on [setting up Android CLI skills for any agent](/blog/android-cli-skills-setup-any-agent/).

## Prerequisites before you start

The skill expects a modern Compose app. Check these first:

- Every screen uses Jetpack Compose. If you still have XML or Fragments, migrate those screens first (the XML-to-Compose skill can help).
- Navigation uses Jetpack Navigation 3. Older Navigation graphs need an update before multi-pane scenes work correctly.
- You have screenshot or preview tests covering phone, foldable, tablet, and desktop form factors. The skill recommends adding `@Preview` annotations with `Devices.PHONE`, `Devices.FOLDABLE`, `Devices.TABLET`, and `Devices.DESKTOP`.

Missing any of these does not stop you, but the agent will suggest the related skills so the project reaches a consistent baseline.

## Core workflow the skill follows

The skill organizes work into clear steps. You can ask for the full set or only the parts you need.

**Step 1 – Verify current UI.**  
Add form-factor previews so you can compare before and after. The skill shows the exact annotation class to use.

**Step 2 – Make navigation adaptive.**  
Replace a fixed bottom bar with `NavigationSuiteScaffold`. On larger screens the bar becomes a rail. Visibility still follows your existing logic (for example, hide while scrolling).

**Step 3 – Add multi-pane layouts.**  
Use Navigation 3 `SceneStrategy` objects (`ListDetailSceneStrategy` or `SupportingPaneSceneStrategy`). Mark list and detail entries with the correct metadata. Do not fall back to the older pane scaffolds.

**Step 4 – Make lists adaptive.**  
Convert `LazyColumn` to `LazyVerticalGrid` with `GridCells.Adaptive`. For non-lazy columns of similar items, switch to the experimental `Grid` composable and size columns from available width.

**Step 5 – Hide app bars on scroll.**  
Apply `exitUntilCollapsedScrollBehavior` or `enterAlwaysScrollBehavior` so each top-level destination manages its own bar state.

**Step 6 – Preserve state.**  
Replace plain `remember` with `rememberSaveable` for user input, scroll positions, and custom state. Never lock orientation or suppress configuration changes in the manifest.

**Step 7 – Add desktop experiences.**  
Add keyboard shortcuts, tooltips, hover states, and custom cursors so the same UI feels native on a laptop or Googlebook.

**Step 8 – Support foldables.**  
Adapt media and camera screens for tabletop posture and other foldable configurations.

Prompt the agent with a concrete request such as “Make the notes list-detail layout adaptive and add keyboard shortcuts for the desktop form factor.” The skill supplies the precise steps and reference files.

![Coder keyboard and dual monitors](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Practical tips

- Start with one screen. Run the agent, review the diff, then expand.
- Keep screenshot tests. The skill asks you to record new reference images after layout changes so you can spot regressions.
- Combine with the skills manager in Android Studio Rabbit 2. It keeps the context window clean by loading full instructions only when needed.
- Test on the Android XR glasses emulator and the desktop form-factor preview. Both are stable in Rabbit 2.
- Follow the adaptive quality guidelines on developer.android.com. Google Play will pay closer attention to foldable behavior next year.

## Watch the summit overview

The Android Dev Summit 2026 keynote covers the adaptive skill updates alongside other tools that help agents scale apps across phones, Googlebook, and XR devices.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Compose adaptive skill removes the guesswork from multi-device Android development. Install it, point your agent at a concrete screen, and review the result inside Android Studio. One codebase then works on phones, foldables, tablets, Googlebook, and beyond without duplicate layouts.

Start with the skill, keep your Navigation 3 and Compose foundation solid, and test across form factors. Your users get a better experience the moment they open the app on a larger screen.

## Sources

- Android Developers: A guide to making an app adaptive (Compose adaptive skill)
- Android Developers: Overview of Android skills
- Android Dev Summit 2026 keynote and tools sessions
- Android skills GitHub repository (android/skills)
