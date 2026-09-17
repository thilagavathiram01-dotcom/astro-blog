---
title: "How to Use Android CLI and Official Skills With Any AI Agent"
description: "A practical tutorial for Android CLI 1.0 and official Android skills: install the CLI, list and add skills, ground Gemini, Claude Code, Codex, or Antigravity in current Android patterns."
pubDate: 2026-09-17T15:50:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80"
---

Generic coding agents write Android code that compiles and still looks five years old: XML layouts, Navigation 2 graphs, Camera2 boiler, and Gradle plugins the project already left behind. Google's answer is not another chat panel. It is a **stable command-line tool** plus a library of **Android skills** — short, AI-optimized instruction files that tell any agent how official Android work is supposed to look in 2026.

Android CLI reached **stable 1.0** at Google I/O 2026. Skills live in the public [android/skills](https://github.com/android/skills) repository and follow the open Agent Skills standard (`SKILL.md` per directory). This guide is the setup and first-week workflow, using only official docs and talks.

## What Android CLI actually does

Android CLI is a single `android` binary that agents and scripts can call. Official examples include:

- Automating SDK and environment setup
- Scaffolding projects from templates
- Managing virtual devices from a terminal
- Running **Journeys** (end-to-end UI tests) under your direction
- Bridging into Android Studio for symbol lookup, file warnings, and Compose preview rendering
- Installing and updating official **skills**

It is not a replacement for Gradle or `adb`. It is the layer that lets an agent use those tools without inventing flags from memory.

![Close-up of a developer working at a laptop during an Android coding session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

## What a skill is (and is not)

A skill is a folder with a `SKILL.md` file and optional extra resources. The markdown is written for models, not for a human tutorial: trigger metadata, current library versions, and the exact sequence an agent should follow.

Skills are **on-demand**. Unlike a giant `AGENTS.md` dumped into every prompt, the agent reads the skill description first and only loads the full file when the task matches. That keeps the context window smaller and the advice current.

Official first-wave and later skills cover work that models routinely get wrong:

- Navigation 3 setup and migration
- Edge-to-edge display
- AGP 9 upgrades
- XML-to-Compose migration
- R8 configuration review
- Adaptive UI for phones, foldables, and large screens
- CameraX migration from Camera1 or raw Camera2
- Testing setup and Journeys
- Display glasses / Compose Glimmer for XR
- Perfetto SQL against a local trace

Google also published a CameraX migration skill note in September 2026: update CameraX to **1.5.2 or 1.6.0+** before running that migration on Android 17 devices, to avoid a crash tied to a new dynamic range mode.

## Install Android CLI and ground your agent

Follow the current [Android CLI overview](https://developer.android.com/tools/agents/android-cli). After the binary is on your `PATH`:

1. Confirm the tool: `android --version`
2. Initialize the agent environment: `android init`  
   This installs the base **android-cli** skill so the model knows the command surface.
3. List what is available: `android skills list`
4. Search when you know the job, not the id: `android skills find camera`
5. Install one skill: `android skills add camerax-migration`  
   (Use the exact id from `list` / `find`. Official docs also show `android skills add --skill=<id>`.)
6. Re-run `android skills add <id>` later to refresh an already installed skill.

`android skills` also supports `remove`, `update`, and `--all` when you want the catalog, not a single workflow.

### Point the agent at the right folders

Skills must live where the tool looks:

- Project root: `.skills/` or `.agent/skills/` for CLI-oriented layouts
- Android Studio Agent Mode (Quail 1 and later): `.agents/skills` or `.android-studio/skills`

Older Studio builds loaded `.skills` and `agent/skills`. If you upgrade to Quail 1+, move those folders so Agent Mode still sees them.

In Android Studio you can also `@`-mention a skill in the agent box, or just describe the task and let the model pick the matching skill.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qZLQVlLgTDU" title="What are Android skills and how to use them with AI tools?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A first useful loop: migrate camera code with a skill

This is the pattern that should replace "paste the Camera2 sample from 2018 into chat."

1. Open the module that still talks to `android.hardware.Camera` or raw Camera2.
2. Install the official CameraX skill (`android skills find camera` then `android skills add` with the listed id).
3. Confirm CameraX is on **1.5.2 or 1.6.0+** in Gradle before you let the agent touch Android 17 devices.
4. Prompt the agent with a bounded job: *Use the CameraX migration skill. Replace the preview + still-capture path in this module. Keep our existing permission flow. Do not change unrelated screens.*
5. Review the plan or diff before accept. Check preview on a phone **and** a foldable or tablet if you ship large screens — CameraX viewfinder handling is part of why the skill exists.
6. Run the module and a Journey if you installed testing skills.

The same loop applies to Navigation 3, edge-to-edge, and AGP 9: install the skill, name the module, define "done," then review.

![Android smartphone on a wooden desk used during app testing](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80)

## Use the CLI from outside Android Studio

Stable CLI is built for **any** agent: Gemini in Studio, Gemini CLI, Google Antigravity, Claude Code, Codex, and scripts in CI.

Typical agent-facing commands after `android init`:

- `android skills list` / `find` / `add` — keep the model's playbook current
- Device and test commands documented on the CLI page — including Journeys once the matching skill is installed
- `android studio` subcommands — find declarations, find usages, open files, and related Studio-backed analysis when the IDE is available

Do not ask the model to invent `adb` or emulator flags when the CLI already wraps the task. That is the whole point of the `android-cli` skill.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/N4GgGBKnHe4" title="What's new in Android development tools" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Studio Agent Mode versus CLI skills

Use **both**. They solve different seats at the desk.

- **Android Studio Agent Mode** is the right place for Planning Mode, Next Edit Prediction, Compose previews, and in-IDE review.
- **Android CLI + skills** is the right place when the agent lives in a terminal, another IDE, or CI, or when you want the same Navigation 3 / CameraX instructions on every machine.

Skills are portable markdown. Commit project-local skills that encode *your* architecture (package names, module graph, design system). Leave Google's catalog skills to the CLI updater so you do not freeze last quarter's API names in git.

## Habits that keep the agent honest

- One skill per job. Do not install the entire catalog into a tiny bugfix prompt.
- Name the module and the acceptance check in the prompt.
- After a migration skill runs, compile, open the affected preview, and scan Gradle for version pins the skill expected.
- Treat CameraX 1.5.2 / 1.6.0+ as a hard gate on Android 17, not a suggestion.
- Re-run `android skills add` on a schedule. Skills exist because the recommended pattern moved.

## Conclusion

Android CLI 1.0 plus official skills is how you stop an agent from teaching your repo deprecated Android. Install the CLI, run `android init`, add only the skills that match this week's work, and keep those files updated. The model can still write the code. The skill file is what keeps that code on the current platform.

## Sources

- [Overview of Android CLI](https://developer.android.com/tools/agents/android-cli) — Android Developers
- [Overview of Android skills](https://developer.android.com/tools/agents/android-skills) — Android Developers
- [Extend Agent Mode with skills](https://developer.android.com/studio/gemini/skills) — Android Developers
- [Android CLI now stable 1.0](https://developer.android.com/blog/posts/android-cli-now-stable-1-accelerate-developing-for-android-using-any-agent) — Android Developers Blog
- [Android CLI and skills: build Android apps faster using any agent](https://developer.android.com/blog/posts/android-cli-build-android-apps-3x-faster-using-any-agent) — Android Developers Blog
- [17 things to know for Android developers at Google I/O](https://developer.android.com/blog/posts/17-things-to-know-for-android-developers-at-google-i-o) — Android Developers Blog
- [Android skills GitHub repository](https://github.com/android/skills)
- [What are Android skills and how to use them with AI tools?](https://www.youtube.com/watch?v=qZLQVlLgTDU) — Android Developers
- [What's new in Android development tools](https://www.youtube.com/watch?v=N4GgGBKnHe4) — Android Developers
