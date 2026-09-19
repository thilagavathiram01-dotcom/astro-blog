---
title: "How to Build Android Apps Faster with Android CLI and Agent Skills"
description: "Install Android CLI 1.0, scaffold a project, manage emulators, query the Android Knowledge Base, and attach official skills so Gemini, Claude Code, Codex, or Antigravity follow current Android guidance."
pubDate: 2026-09-19T10:00:00
tags: ["ai-tools", "android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&h=630&q=80"
---

Generic coding agents are good at Kotlin syntax and bad at Android’s moving parts: AGP 9 templates, emulator profiles, Navigation 3, edge-to-edge insets, and which SDK package to download. **Android CLI** is Google’s official command-line interface for that gap. It gives any agent — Gemini CLI, Claude Code, Codex, Google Antigravity, or a script in CI — a stable set of commands for setup, project creation, devices, screenshots, docs, and skills.

Google’s internal experiments, published on the Android Developers Blog, reported that agents using Android CLI finished environment and project setup about **3× faster** and used more than **70% fewer tokens** than agents that only had generic shell tools. Android CLI reached **stable 1.0** at Google I/O 2026. Official docs were last updated 11 September 2026.

This guide walks through install, first project, emulator and run, the Knowledge Base, skills, and a few pitfalls that show up on Windows.

## What Android CLI actually is

Android CLI is not a replacement for Android Studio. It is a thin, scriptable front door to the Android SDK and to two extra resources:

- **Android skills** — markdown `SKILL.md` instruction packs that fire when a prompt matches their metadata.
- **Android Knowledge Base** — official documentation reachable with `android docs search` and `android docs fetch`.

Typical commands an agent or a human can run:

- `android sdk install` — download only the packages you name
- `android create` — scaffold from official templates (default: `empty-activity-agp-9`)
- `android emulator create` / `start` / `stop` / `list`
- `android run` — install APKs and launch an activity or Wear component
- `android layout` and `android screen capture` — dump UI trees and screenshots
- `android docs search` / `fetch` — pull official guidance into the terminal
- `android skills list` / `add` — attach workflow-specific skills
- `android init` — install the base `android-cli` skill so agents know the tool exists
- `android update` — pull the latest CLI

Apps created this way open in Android Studio later. On current Canary builds, `android studio` can also expose IDE tools (file analysis, symbol lookup) to an external agent.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qZLQVlLgTDU" title="What are Android skills and how to use them with AI tools?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 1 — Install Android CLI

Official landing page: [developer.android.com/tools/agents](https://developer.android.com/tools/agents).

**Linux (x86_64):**

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

**macOS (Homebrew)** and **Windows (winget)** are supported. On Windows:

```bash
winget install -e --id Google.AndroidCLI
```

Confirm the binary is on your `PATH`:

```bash
which android
# or
command -v android
```

Then update:

```bash
android update
```

Known limits from the official overview (as of 11 September 2026):

- `android emulator` on Windows is currently disabled.
- Downloading the installer from Windows PowerShell is not supported; use winget or another listed package manager.

Optional: create `~/.androidrc` (macOS/Linux) or `%USERPROFILE%\.androidrc` (Windows) with one flag per line, for example `--sdk=/path/to/sdk`. Pass `--no-metrics` on a command if you do not want usage telemetry.

## Step 2 — Teach your agent the CLI

Run this once per machine:

```bash
android init
```

That installs the **android-cli** skill so Gemini, Claude Code, Codex, or Antigravity know the command surface instead of inventing `adb` one-liners. Google Antigravity 2.0 can also pull the Android resources bundle during onboarding or from **Settings > Customizations > Build With Google Plugins**.

Point the agent at official docs in `AGENTS.md` (or the equivalent file your tool reads):

```text
When working on Android APIs, consult official Android documentation
via `android docs search` and `android docs fetch` before writing code.
Prefer Android CLI over ad-hoc sdkmanager and avdmanager commands.
```

![Laptop and Android phone on a desk during app development](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 3 — Scaffold a project

List templates, then create one:

```bash
android create list
android create --name=notes --output=./notes empty-activity-agp-9
```

If you omit the template name, **empty-activity-agp-9** is used. `--dry-run --verbose` prints the files that would be copied without writing them. After creation, `android describe --project_dir=./notes` prints JSON metadata that other tools use to find APK outputs.

## Step 4 — SDK pieces, emulator, and first run

Install only what you need:

```bash
android sdk install platform-tools
android --sdk=/opt/android-sdk sdk list
```

Create and start a virtual device. The default profile is `medium_phone`:

```bash
android emulator create --list-profiles
android emulator create --profile=medium_phone
android emulator list
android emulator start medium_phone
```

Build the app with your usual Gradle command, then deploy with Android CLI. `android run` does **not** build; you must pass APK paths:

```bash
android run --apks=app/build/outputs/apk/debug/app-debug.apk
android run --apks=app-debug.apk --device=emulator-5554
android run --apks=app-debug.apk --activity=.MainActivity
```

Wear and services use `--type`: `ACTIVITY`, `WATCH_FACE`, `TILE`, `COMPLICATION`, `DECLARATIVE_WATCH_FACE`, or a service component.

Stop an emulator with its serial, not its profile name:

```bash
android emulator stop emulator-5554
```

## Step 5 — Let the agent see the screen

When you want an agent to tap UI without Espresso IDs:

```bash
android layout --pretty --output=./hierarchy.json
android screen capture --output=ui.png --annotate
android screen resolve --screenshot=ui.png --string="input tap #5"
```

`layout --diff` returns only nodes that changed since the last snapshot. `screen resolve` turns annotated labels (`#5`) into `x y` coordinates you can feed to `adb shell input tap`.

Journeys (natural-language UI tests) also run from the CLI and from Android Studio. If you need the IDE-first path, see our [Journeys in Android Studio guide](/blog/journeys-android-studio-gemini/).

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/N4GgGBKnHe4" title="What's new in Android development tools (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 6 — Search the Android Knowledge Base

Skills are for narrow, fast-moving workflows. For everything else, use the Knowledge Base instead of stuffing dozens of markdown files into context.

```bash
android docs search 'How do I improve my app performance?'
android docs fetch kb://android/topic/performance/overview
```

Search returns `kb://` URLs. Fetch prints that page to the terminal so the agent can quote current guidance.

## Step 7 — Install official Android skills

Official skills live on GitHub (`android/skills`) and target gaps that frontier models still miss: AGP 9, Navigation 3, CameraX migrations, Perfetto SQL, Adaptive UI, AppFunctions, Wear Compose Material 3, Credential Manager verified email, Engage SDK, Display Glasses / Compose Glimmer, testing setup, R8 analysis, and XML-to-Compose.

```bash
android skills list
android skills add --skill=navigation-3
android skills add --all
```

`--agent=<agent-name>` scopes the install when you run more than one coding agent on the same machine. Google’s skills philosophy is deliberate scarcity: they add a skill only when there is a verified knowledge gap. For Compose and Kotlin day-to-day work, community collections (for example Chris Banes’ Compose/Kotlin skills) are the usual complement.

![Close-up of a developer terminal with code on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80)

## Practical agent prompt

Once CLI, init, and one or two skills are in place, a prompt like this is enough for a first feature:

```text
Use Android CLI only for SDK, emulator, and deploy steps.
1. Confirm SDK with `android info`.
2. Create medium_phone if missing and start it.
3. Search docs for Navigation 3 start destination patterns.
4. Add a Notes list screen with Navigation 3.
5. Build with Gradle, then `android run` the debug APK.
6. Capture the home screen and dump `android layout --pretty`.
```

Keep Gradle as the build system. Android CLI is the control plane around it, not a replacement for the Android Gradle Plugin.

## What not to expect

- The CLI will not compile your app. You still run Gradle (or Studio).
- Windows emulator commands are disabled; use a Linux/macOS host or a remote device for those steps.
- Skills are not a second documentation site. If the model already knows the API, skip the skill and use `android docs`.
- Telemetry records command names and a small set of enum-like flags (emulator profile names, agent names). It does not record your package names or file paths. Opt out per command with `--no-metrics`.

File bugs against [Google Issue Tracker component 2091212](https://issuetracker.google.com/issues/new?component=2091212).

## Conclusion

Android CLI 1.0 is the missing adapter between general-purpose coding agents and the Android SDK. Install it, run `android init`, scaffold with `android create`, keep devices alive with `android emulator`, deploy with `android run`, and ground the model with `android docs` plus a handful of official skills. That combination is what Google measured as faster and cheaper than letting an agent wander through `sdkmanager` on its own.

Start at [d.android.com/tools/agents](https://developer.android.com/tools/agents), then add only the skills that match the work in front of you.

## Sources

- [Agent tools and resources (Android CLI downloads)](https://developer.android.com/tools/agents)
- [Overview of Android CLI](https://developer.android.com/tools/agents/android-cli)
- [Android CLI and skills: Build Android apps 3x faster using any agent](https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html)
- [Android CLI Now Stable 1.0](https://android-developers.googleblog.com/2026/05/android-cli-stable-1-0-agent-development.html)
- [Inside Android Skills](https://android-developers.googleblog.com/2026/08/android-skills-philosophy.html)
- [Top 3 updates for Android developer productivity](https://android-developers.googleblog.com/2026/06/android-developer-productivity-updates.html)
- [17 things to know for Android developers at Google I/O](https://developer.android.com/blog/posts/17-things-to-know-for-android-developers-at-google-i-o)
- [What are Android skills and how to use them with AI tools? (YouTube)](https://www.youtube.com/watch?v=qZLQVlLgTDU)
- [What's new in Android development tools (YouTube)](https://www.youtube.com/watch?v=N4GgGBKnHe4)
