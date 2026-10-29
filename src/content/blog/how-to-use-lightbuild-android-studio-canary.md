---
title: "How to Use Lightbuild for Agent-Friendly Android Builds"
description: "Set up Lightbuild in Android Studio Canary, create YAML projects, and run builds with the Lightbuild CLI for AI agents."
pubDate: 2026-10-29T15:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer", "how-to"]
noindex: false
---

Android builds traditionally rely on Kotlin DSL files that agents struggle to parse and edit safely. Lightbuild changes that with a declarative YAML approach designed for both humans and AI coding agents.

This experimental system ships in Android Studio Canary and pairs with the Lightbuild CLI. It keeps project opens fast, eliminates manual syncs after config changes, and includes an AGENTS.md file that guides agents on structure and commands.

Use it for new projects, prototypes, and demos. Stable Android Studio does not support Lightbuild projects. Keep production work on Kotlin DSL until Lightbuild reaches general availability.

## What you need

- Latest Android Studio Canary. Install it beside your stable copy from the [preview page](https://developer.android.com/studio/preview).
- Android CLI installed and updated. Run `android update` if you already have it.
- Lightbuild CLI package installed via Android CLI (version 0.0.30 at the time of writing).
- A clean machine or separate directory for testing. Agents can edit many files.

Lightbuild works with Android CLI for device control and Android Studio Canary for visual editing, debugging, and Compose previews.

![Laptop showing code editor during Android development](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Install the Lightbuild CLI

The Lightbuild CLI is an Android SDK package. Install it after Android CLI is ready.

On macOS or Linux:

```
android sdk install build/lightbuild/0.0.30 && bash "$(android info sdk)/build/lightbuild/0.0.30/cli/install.sh"
```

On Windows PowerShell the equivalent chains the SDK install with the package setup script. After installation, open a new terminal and confirm with:

```
lightbuild --version
```

If the command is missing, check that `~/.local/bin` (or the Windows equivalent) is on your PATH.

## Create a Lightbuild project

### In Android Studio Canary

1. Open the Canary install and choose **New Project**.
2. Select a compatible template such as Empty Activity or Navigation UI Activity.
3. On the configuration screen, set **Build configuration language** to **Lightbuild**.
4. Finish the wizard. Studio creates `project.lightbuild.yaml` at the root, a `lightbuild.yaml` in each module, a `resolved.deps` file, and an `AGENTS.md` file.

You can also ask the AI project assistant to generate the project and select Lightbuild on the final screen.

### From the command line

```
android create empty-activity-lightbuild --name="Lightbuild Demo" --output=lightbuild-demo
```

Open the resulting folder in Android Studio Canary. The declarative files are already in place.

## Understand the file layout

- `project.lightbuild.yaml` holds project-wide settings: name, modules, repositories, Java/Kotlin versions, and the Lightbuild version.
- Each module has its own `lightbuild.yaml` declaring platform, type (application or library), Android SDK levels, dependencies, and namespace.
- `resolved.deps` records resolved dependencies so opens and builds skip dynamic resolution. Check it into version control. Do not edit it by hand.
- `AGENTS.md` tells agents the preferred commands (`lightbuild build`, `lightbuild test`, `android run`) and project conventions.

Because the files are pure YAML, an agent can update a dependency version or add a module without risking executable Groovy or Kotlin logic.

![Close-up of source code on a laptop screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Build, test, and run

From the project root:

```
lightbuild build app
```

List targets with `lightbuild query ...`. Inspect output files with `lightbuild query app --output=files`.

Run tests:

```
lightbuild test
```

Or target a specific module and test type (`:hostTest` or `:deviceTest`).

The Lightbuild CLI builds the APK or AAB but does not install it. Use Android CLI for that step:

```
lightbuild build app
android run --apks=app/build/app-debug.apk
```

Resolve dependencies after changes:

```
lightbuild resolve
```

Clean with `lightbuild clean`.

If you already use Android CLI skills and agent plugins, the same workflow applies. See our guide on [Android CLI agent skills](/blog/android-cli-agent-skills/) for setting up Claude, Codex, or Antigravity with official Android knowledge.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AhrXPjk22OE"
    title="Build Android apps using any AI agent with Android CLI and skills"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for agent workflows

- Keep the first agent task narrow: “Add a dependency on androidx.lifecycle:lifecycle-viewmodel-compose and resolve it.”
- Let the agent edit the YAML, then run `lightbuild resolve` and `lightbuild build` yourself before accepting the diff.
- Prefer `AGENTS.md` instructions that name exact commands rather than vague goals.
- Stay on Canary only for Lightbuild experiments. Stable Rabbit 2 supports Bring Your Own Agent but not Lightbuild projects.
- File issues at the [Lightbuild feedback tracker](https://goo.gle/lightbuild-feedback) if a command fails.

## Limitations to know

Lightbuild 0.0.30 is an early preview. It does not yet support version catalogs, product flavors, Kotlin Multiplatform modules, or custom plugins. Google documents it for new projects and prototypes, not production apps you ship today.

Project opens are faster because dependencies are pre-resolved, but you still need the Canary IDE for full debugging and layout inspection.

## Conclusion

Lightbuild gives agents a predictable YAML surface for Android build configuration while you keep control in Android Studio Canary or the terminal. Install the CLI, create a project with the Lightbuild template, and give an agent one small edit task. Pair it with Android CLI for device and knowledge-base access.

When the feature leaves preview, the same files and commands will move into daily use. Until then, treat it as a lab tool that makes agent-assisted prototyping less error-prone than editing Gradle scripts by hand.

## Sources

- [Overview of Lightbuild](https://developer.android.com/tools/agents/lightbuild) — Android Developers
- [Get started with Lightbuild](https://developer.android.com/tools/agents/lightbuild/setup) — Android Developers
- [Build Lightbuild projects from the command line](https://developer.android.com/tools/agents/lightbuild/commands) — Android Developers
- [Lightbuild configuration reference](https://developer.android.com/tools/agents/lightbuild/schema) — Android Developers
- [Build Android apps using any AI agent with Android CLI and skills](https://www.youtube.com/watch?v=AhrXPjk22OE) — Android Developers
