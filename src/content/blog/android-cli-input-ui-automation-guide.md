---
title: "Automate Android UI Tests with the CLI Input Command"
description: "Learn how to tap, type, scroll, and swipe Android apps from the terminal using the new Android CLI input command and selectors."
pubDate: 2026-10-17T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android developers and AI agents often need to interact with running apps without touching the screen. The October 2026 Android CLI update adds the `android input` command for this exact purpose.

It lets you tap, type text, scroll, swipe, and send key events on a connected device or emulator. You target elements with simple selectors instead of fragile pixel coordinates.

This guide shows you how to install the latest CLI, inspect the UI, run interactions, and use the command with agents.

## What the Android Input Command Does

`android input` performs user gestures and hardware key events. It works with the live accessibility hierarchy of the app currently on screen.

Most subcommands accept a selector. A selector is a comma-separated list of `key=value` pairs. Common keys include `text`, `id`, `class`, `desc`, `clickable`, `scrollable`, and `focused`.

String matches are case-insensitive substrings by default. Boolean properties match `true` or `false`. Wrap the whole selector in single quotes so the shell does not interpret commas or spaces.

The command pairs naturally with `android layout` (to dump the hierarchy) and `android screen` (to capture annotated screenshots).

![Developer working at a laptop with code on screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Install and Update Android CLI

If you do not already have Android CLI, install the latest stable release. On Linux or macOS the one-line local install is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Replace the platform path for your OS (darwin_arm64, windows, etc.). Package managers such as Homebrew, apt, and winget are also supported.

After installation, update to the October 2026 build or newer:

```bash
android update
```

Confirm the version:

```bash
android --version
```

You should see 1.0.16625370 or later. Connect a device or start an emulator and verify it appears:

```bash
adb devices
android info
```

## Discover UI Elements with Layout

Before you tap or type, inspect the current screen. Run:

```bash
android layout
```

This returns a filtered JSON tree of interactive elements by default. Add `--full` for the complete hierarchy or `--no-idle` if the UI is not yet settled.

Look for the `text`, `id`, `class`, and `interactions` fields. These become the building blocks of your selectors.

You can also capture an annotated screenshot:

```bash
android screen capture --annotate --output=ui.png
```

Numbered bounding boxes appear on the image. Combine this with the older `android screen resolve` workflow if you prefer visual targeting.

## Perform Taps, Text Input, Scrolls and Swipes

With the UI understood, run interactions. All examples assume a single connected device. Pass `--device=<serial>` when multiple devices are attached.

Tap a button by its visible text:

```bash
android input tap 'text=Submit'
```

Target by resource ID and class:

```bash
android input tap 'id=submit_btn,class=Button,clickable=true'
```

When several elements match, the default `--match=single` fails and lists them. Use `--match=first` to take the first one:

```bash
android input tap --match=first 'class=android.widget.TextView'
```

Type into a field and submit:

```bash
android input text 'user@example.com' 'id=email_input' --submit
```

Scroll a RecyclerView until a specific item appears:

```bash
android input scroll 'id=recycler_view' --dir=down --until='text=Settings'
```

Swipe left on a card:

```bash
android input swipe 'id=card_view' --dir=left
```

Send hardware keys:

```bash
android input key back
android input key home
android input key enter
```

![Close-up of a smartphone screen showing an app interface](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Combine with AI Agents

The real power appears when an agent drives the command. After you install the base `android-cli` skill with `android init` or `android skills add android-cli`, agents such as Claude Code, Codex, or Antigravity can call `android input` directly.

A typical agent loop looks like this:

1. `android layout` (or `android screen capture --annotate`) to observe state.
2. Decide the next action.
3. `android input tap 'text=Next'` or the appropriate subcommand.
4. Repeat until the goal is complete.

Because selectors are stable and human-readable, the agent spends fewer tokens guessing coordinates. Pair this with official Android skills for migrations, edge-to-edge, or Navigation 3 to keep the generated code and tests aligned with platform guidance.

If you already follow our earlier tutorial on installing Android skills for any agent, the same setup now unlocks reliable UI automation.

## Tips for Reliable Automation

- Prefer resource IDs over text when the string may change with localization.
- Wait for the UI to settle before the next input; short sleeps or layout polls help.
- Use `--match=single` during development so mismatches surface immediately.
- Combine with `android run` or `android install` to deploy a fresh build before a test sequence.
- For remote physical devices, reserve one with `android device remote create` and the input commands work over the ADB connection the same way.
- Keep the CLI updated; the input command arrived in the October 2026 release and may receive further refinements.

## Conclusion

The `android input` command turns terminal-based Android development into a full interaction loop. You no longer need separate ADB scripts or third-party tools just to tap a button or fill a form while an agent builds or tests your app.

Start with `android update`, inspect a screen with `android layout`, and try a simple `android input tap`. Once the basic gestures feel natural, hand the same commands to your preferred coding agent.

## Sources

- Android CLI release notes (October 2026): https://developer.android.com/tools/agents/android-cli/release-notes
- android input command reference: https://developer.android.com/tools/agents/android-cli/commands/input
- Android CLI overview and download: https://developer.android.com/tools/agents/android-cli
- Android skills documentation: https://developer.android.com/tools/agents/android-skills

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZH0bKxErMIM"
    title="Build Android Apps 3x Faster With Any AI Agent — Android CLI Setup + Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
