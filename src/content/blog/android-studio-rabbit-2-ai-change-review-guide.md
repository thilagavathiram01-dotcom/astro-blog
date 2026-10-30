---
title: "How to Use AI Change Review in Android Studio"
description: "Step-by-step guide to AI Change Review in Android Studio Rabbit 2. Review agent changes, get recommended fixes, and create guided walkthroughs."
pubDate: 2026-10-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Android Studio Rabbit 2 ships with AI Change Review. The feature helps you inspect code written or edited by agents. It surfaces recommended fixes and groups related diffs into logical themes instead of alphabetical file order.

You no longer scroll through every changed line in isolation. Change Review analyzes agent output, pending commits, or existing commits. It flags issues first, then offers a walkthrough that prioritizes related chunks.

This guide shows how to open Change Review, run analysis, address fixes, and generate a walkthrough. You will also see when to use it with Bring Your Own Agent.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What Change Review does

Change Review works on three kinds of changes:

- Changes made by the built-in agent or an external ACP agent
- Pending commits in your local Git state
- Committed changes you select from the Git log

The tool first scans for problems and returns Recommended Fixes. After you handle those, you can create a walkthrough. The walkthrough clusters related diff hunks by theme so you review coherent groups rather than jumping between files.

Google demonstrated this at Android Dev Summit 2026. The feature is available in the stable Rabbit 2 release. It pairs with the existing agent window and does not require a separate plugin.

## Open Change Review

Update to Android Studio Rabbit 2 if you have not already. Open **Help > Check for Updates** (or **Android Studio > Check for Updates** on macOS) and install the stable build.

Once the IDE restarts, open the agent tool window. Look for the Change Review option in the agent panel or the version control context menu. You can also invoke it from the Git tool window on a selected commit or pending change set.

If you use an external agent, connect it first through **Settings > Tools > AI > Agents**. Change Review works with both the built-in agent and BYOA agents. For setup steps, see the guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

## Run analysis on agent changes

1. Complete or pause an agent task that modified files.
2. Open Change Review from the agent window or the changes drawer.
3. Select the agent session or the specific change set.
4. Wait for the analysis. The IDE examines the diffs and returns a list of Recommended Fixes.

Recommended Fixes highlight potential bugs, style issues, missing imports, or incomplete migrations. Click each item to jump to the relevant code. Accept, edit, or dismiss the suggestion.

The process runs inside the IDE. It uses the same project graph and diagnostics the agent already sees, so the recommendations stay consistent with Android build rules and Compose previews.

## Create a guided walkthrough

After you address the recommended fixes:

1. Click **Create Walkthrough** in the Change Review panel.
2. The tool groups related diff chunks into logical themes. Examples include “Compose UI updates,” “ViewModel changes,” or “Permission handling.”
3. Step through each group. The walkthrough highlights the hunks in order and shows a short summary for the theme.
4. Mark each group as reviewed or jump back to edit.

This replaces the default file-by-file review. You see the intent of a change set before you approve individual lines.

![Laptop with code editor open on a desk](https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80)

## Use Change Review on existing commits

You can also run Change Review on history:

- Open the Git tool window.
- Select a commit or a range.
- Choose Change Review from the context menu.
- The analysis treats the selected commits as the change set.

This helps when you review a pull request that landed earlier or when you want to audit agent-generated code after the fact. The same Recommended Fixes and walkthrough options appear.

## Tips for better results

Keep the change set focused. Large multi-feature commits produce broader themes and longer analysis. Prefer smaller agent tasks or split commits before you run Change Review.

Address Recommended Fixes before you create the walkthrough. The walkthrough reflects the code after those edits, so the themes stay accurate.

Combine it with Android skills. If your agent used a skill for Compose migration or permissions, the review surface often calls out remaining gaps against current platform guidance.

For memory-related changes, cross-check with the LeakCanary task in the Profiler. Rabbit 2 integrates LeakCanary with the agent so you can diagnose leaks and then review the suggested patches in the same session.

## When to use it with external agents

BYOA agents receive the same project context. After Claude Agent or Codex finishes a task, open Change Review on that session. The analysis uses Studio’s diagnostics, so it catches Android-specific issues the external agent may not have seen in isolation.

You still review the output. Change Review does not auto-apply fixes. It surfaces them so you decide what lands.

## Limits to keep in mind

Analysis takes time on large diffs. Start with smaller change sets while you learn the flow. The walkthrough groups by theme, but very cross-cutting refactors can still produce broad groups.

The feature relies on the IDE’s understanding of the project. Keep your Gradle sync clean and indexes up to date for the most accurate recommendations.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

AI Change Review in Android Studio Rabbit 2 turns agent output into a structured review. Start with Recommended Fixes, then walk through themed groups. Use it on live agent sessions, pending commits, or past history.

Pair it with Bring Your Own Agent when you already have a preferred coding assistant. The combination keeps the external agent’s speed while adding Studio’s Android-aware checks. Update to Rabbit 2, open a recent agent change, and run the review on your next task.

## Sources

- Android Developers Blog: Android Studio Rabbit 2 stable release notes and feature descriptions (October 28, 2026)
- Android Dev Summit 2026 keynote and tools session (YouTube: The latest in Android dev tools from Android Dev Summit 2026)
- Android Studio release notes for Rabbit 2 (developer.android.com/studio/releases)
- Related guide: [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/)
