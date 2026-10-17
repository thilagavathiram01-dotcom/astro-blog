---
title: "How to Install Android Skills with CLI for AI Agents"
description: "Step-by-step guide to install official Android skills using Android CLI so Gemini, Claude, or Codex follow best practices on your projects."
pubDate: 2026-10-17T10:30:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials"]
noindex: false
---

Android developers now work with AI agents that write code, run builds, and inspect UIs. Official Android skills give those agents current, accurate instructions for specific workflows so they follow platform best practices instead of guessing.

This guide shows how to install and use Android skills through the Android CLI. The same skills work with Gemini, Claude, Codex, Antigravity, and other agents that support the open skills standard.

## Why Android skills matter for agents

Large language models know general Android patterns but often miss recent API changes, recommended architectures, or security rules. Android skills are modular Markdown files (SKILL.md) that ground the model with official guidance for tasks such as migrating to Compose, upgrading the Android Gradle Plugin, making an app edge-to-edge, or securing Intents.

Google focuses skills on areas where evaluations show models underperform. Once installed, agents activate the relevant skill automatically when your prompt matches its description.

![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need:

- A machine with the Android SDK and command-line tools available.
- Android CLI installed. Download the installer from the official Android CLI documentation or run the platform-specific curl command listed in the android-cli skill.
- An AI coding agent that supports skills (Gemini, Claude Code, Codex, Antigravity, etc.).

Verify the CLI after installation:

```bash
android --version
```

## Step 1: Install Android CLI if needed

If the `android` command is missing, install it. On macOS (Apple Silicon) the typical command is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
```

Linux and Windows installers are listed in the official Android CLI skill and documentation. After installation, restart your terminal and confirm the command works.

## Step 2: List available skills

See the full catalog:

```bash
android skills list --long
```

Search for a specific topic:

```bash
android skills find edge-to-edge
android skills find r8
```

Current skills cover areas such as AGP 9 upgrade, Compose migration, CameraX, Navigation 3, Wear Compose Material 3, Intent security, App Functions, and more. The list grows as Google adds new skills.

## Step 3: Install skills for your agents

Install one skill for a specific agent:

```bash
android skills add --agent=gemini edge-to-edge
```

Install for Claude:

```bash
android skills add --agent=claude r8-analyzer --project=.
```

Install every official skill for all detected agents:

```bash
android skills add --all
```

By default, if no agent directories are found, skills land in `~/.gemini/antigravity/skills`. Use `--project=.` to install into the current project root instead of the global location. This keeps skills local to the repo you are working in.

You can also install via agent plugins. For Claude Code:

```text
/plugin install android-skills --marketplace android/skills
```

For Codex:

```bash
codex plugin marketplace add android/skills
codex plugin add android-skills@android-skills
```

## Step 4: Activate and use a skill

Agents detect installed skills automatically. Prompt with a task that matches the skill description. Examples:

- “Make my app UI edge-to-edge.”
- “Upgrade this project to AGP 9.”
- “Migrate the XML layouts to Jetpack Compose.”
- “Secure the Intent handling in this component.”

The agent loads the matching SKILL.md and follows its steps. You can inspect the installed skill files to see exactly what guidance the model receives.

![MacBook showing code editor on a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Step 5: Update and manage skills

Skills evolve as Android best practices change. Update all installed skills:

```bash
android skills update --all
```

Update a single skill:

```bash
android skills update wear-compose-m3
```

List skills currently installed for a specific agent:

```bash
android skills list --agent=gemini
```

Remove a skill you no longer need:

```bash
android skills remove edge-to-edge
```

Note that re-running `android skills add` on an already-installed skill updates it to the latest version. Avoid editing the installed SKILL.md files directly if you plan to update later, as the command will overwrite local changes.

## Tips for better results

- Install skills at the project level (`--project=.`) when you want them committed or shared with teammates.
- Combine skills with Android CLI commands such as `android screen` for screenshots or `android studio` for preview rendering so the agent can verify its changes.
- Start with one or two high-value skills (edge-to-edge, AGP upgrade, or Compose migration) before installing the full set.
- Check the official Android skills GitHub repository and developer.android.com for the latest catalog and examples.

For related workflows, see our guide on [How to Use Android CLI and Official Skills With Any AI Agent](/blog/android-cli-skills-any-agent/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/QDdO3CR8EXw"
    title="Android CLI + Skills setup that actually works for AI Agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android skills turn general-purpose AI agents into specialists that follow current official guidance. Installing them through Android CLI takes only a few commands and works across Gemini, Claude, Codex, and other supported tools. Start by listing available skills, install the ones that match your current project needs, and prompt the agent with clear tasks. Update regularly so the guidance stays current as Android evolves.

## Sources

- Android Developers: Overview of Android skills (developer.android.com/tools/agents/android-skills)
- Android CLI skills commands (developer.android.com/tools/agents/android-cli)
- Official Android skills repository (github.com/android/skills)
