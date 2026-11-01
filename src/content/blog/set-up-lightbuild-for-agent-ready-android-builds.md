---
title: "How to Set Up Lightbuild for Agent-Ready Android Builds"
description: "Install Lightbuild CLI, create YAML projects, and configure AGENTS.md so AI agents edit Android builds safely in Canary."
pubDate: 2026-11-01T19:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Android projects usually rely on Kotlin DSL build files that AI agents must parse as executable code. Lightbuild replaces that with static YAML declarations. Agents read and edit the files without risking side effects from custom plugins or dynamic logic.

This experimental system ships as a preview in Android Studio Canary and through a dedicated CLI. Dependencies resolve ahead of time into a `resolved.deps` file. Project opens stay fast. You stay in control of every change.

Use Lightbuild for new prototypes and agent experiments. Keep production apps on Kotlin DSL until Google ships a stable release.

## Prerequisites

Install the latest Android Studio Canary from the official preview channel. Stable versions do not open Lightbuild projects. Keep your regular Studio install untouched.

Install or update Android CLI. Run `android update` if the tool is already present. The Lightbuild CLI arrives as an SDK package that Android CLI downloads.

Confirm you have a separate working directory for tests. Agents can rewrite multiple files in one pass.

![Android phone and laptop on a desk during development](https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80)

## Install the Lightbuild CLI

The package version at the time of writing is 0.0.30. On macOS or Linux run:

```
android sdk install build/lightbuild/0.0.30 && bash "$(android info sdk)/build/lightbuild/0.0.30/cli/install.sh"
```

On Windows PowerShell chain the install and the setup script the same way. Open a fresh terminal and verify:

```
lightbuild --version
```

If the command is missing, add the install location to your PATH. The CLI shares the same environment Android CLI uses for devices and skills.

## Create a project

### Android Studio Canary

1. Start the Canary IDE and select **New Project**.
2. Choose Empty Activity or another compatible template.
3. On the final configuration screen set **Build configuration language** to **Lightbuild**.
4. Finish. Studio writes `project.lightbuild.yaml` at the root, a `lightbuild.yaml` inside each module, a `resolved.deps` file, and an `AGENTS.md` file.

You can also ask the built-in AI assistant to generate the project and select Lightbuild on the last screen.

### Command line

```
android create empty-activity-lightbuild --name="Agent Demo" --output=agent-demo
```

Open the folder in Canary. The declarative files are already present.

## Project layout

- `project.lightbuild.yaml` lists the project name, modules, repositories, Java and Kotlin versions, and the Lightbuild version itself.
- Each module owns a `lightbuild.yaml` that declares platform, type (application or library), namespace, SDK levels, application ID, and module dependencies.
- `resolved.deps` stores the resolved dependency graph. Check it into source control. Never edit it by hand.
- `AGENTS.md` documents the preferred commands and project conventions for agents.

Because the files contain only data, an agent can change a dependency coordinate or add a library module without executing arbitrary build logic.

![Laptop screen showing source code during Android development](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Core CLI commands

From the project root:

```
lightbuild build app
```

Build every target with `lightbuild build`. List targets and output files with `lightbuild query app --output=files`.

Run tests:

```
lightbuild test
```

Or target a specific module. The CLI produces APKs and AABs but does not install them. Hand the artifact to Android CLI:

```
lightbuild build app
android run --apks=app/build/app-debug.apk
```

After dependency edits run:

```
lightbuild resolve
```

Clean with `lightbuild clean`.

The same commands work for any coding agent that can call the terminal. Pair this workflow with our earlier guide on [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0mYQtt2RfoQ"
    title="Declarative, agent-ready Android builds with Lightbuild"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Agent tips

Start with a narrow task. Ask the agent to add one dependency, then run `lightbuild resolve` and `lightbuild build` yourself before you accept the diff.

Update `AGENTS.md` with exact command names and the rule that `resolved.deps` stays under version control. Agents follow the file more reliably than long prose instructions.

Stay inside Canary for Lightbuild work. Stable Android Studio and its Bring Your Own Agent features do not load these projects.

Report issues through the official Lightbuild feedback channel if a command fails on a supported template.

## Current limits

Version 0.0.30 supports YAML configuration for app and library modules, local and instrumented tests, Kotlin, Jetpack Compose, KSP processors such as Room and Moshi, and pre-resolved dependencies. It does not support version catalogs, product flavors, custom plugins, or Kotlin Multiplatform modules.

Google documents the feature for new projects and prototypes. Production apps that already use advanced Gradle plugins should stay on Kotlin DSL.

## Conclusion

Lightbuild gives agents a predictable YAML surface for Android build configuration. Install the CLI, create a project with the Lightbuild template, and give an agent one small edit. Review the resulting `resolved.deps` and build output before you commit.

The same files and commands will remain when the feature leaves preview. Until then, treat Lightbuild as a lab tool that makes agent-assisted prototyping less error-prone than editing Gradle scripts by hand.

## Sources

- [Overview of Lightbuild](https://developer.android.com/tools/agents/lightbuild) — Android Developers
- [Get started with Lightbuild](https://developer.android.com/tools/agents/lightbuild/setup) — Android Developers
- [Build Lightbuild projects from the command line](https://developer.android.com/tools/agents/lightbuild/commands) — Android Developers
- [Lightbuild configuration reference](https://developer.android.com/tools/agents/lightbuild/schema) — Android Developers
- [Declarative, agent-ready Android builds with Lightbuild](https://www.youtube.com/watch?v=0mYQtt2RfoQ) — Android Developers
