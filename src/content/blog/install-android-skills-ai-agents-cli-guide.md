---
title: "How to Install Android Skills for AI Agents"
description: "Step-by-step guide to install and use official Android skills with AI agents via Android CLI for better Android development workflows."
pubDate: 2026-11-04T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "developer", "how-to"]
noindex: false
---

Android skills give AI coding agents structured instructions based on official Android guidance. They help agents follow current best practices for tasks like migrating to Compose, upgrading AGP, or implementing edge-to-edge layouts without relying only on outdated training data.

Google maintains these skills in a public GitHub repository. You install them with the Android CLI so any supporting agent—Gemini, Claude, Codex, Antigravity, or others—can discover and activate them automatically when your prompt matches the skill description.

This guide walks through installing the Android CLI, listing available skills, installing the ones you need, and activating them in a typical workflow. It also covers project-scoped installs and updates.

## Why Use Android Skills

Skills are SKILL.md files that package domain-specific instructions, references, and sometimes scripts. An agent loads the relevant skill into its context only when needed, keeping the baseline prompt lighter.

Official skills target areas where models often lag: newer APIs such as Navigation 3, performance tools like Perfetto SQL, security patterns for intents and permissions, and Play policy checks. Using them reduces trial-and-error and aligns output more closely with developer.android.com recommendations.

![Developer working at a laptop with code on the screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Install the Android CLI

Android CLI is the recommended way to manage skills. Download the installer for your platform from the official Android Developers site or use the curl commands documented there.

On macOS (Apple Silicon), for example:

```
curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
```

After installation, verify it works:

```
android --version
```

Run `android init` once. This sets up the base android-cli skill so agents know how to call the CLI itself.

## List and Install Skills

See every official skill and a short description:

```
android skills list --long
```

Install one skill globally for all detected agents:

```
android skills add edge-to-edge
```

Install for a specific agent:

```
android skills add --agent=claude edge-to-edge
```

Install every skill at once:

```
android skills add --all
```

To keep skills inside one project instead of your home directory, add the `--project` flag and point it at the project root:

```
android skills add --project=. wear-compose-m3
```

If no agent directories are detected and you omit `--agent`, skills land in `~/.gemini/antigravity/skills` by default.

## Activate Skills in Your Agent

Most agents scan installed skills and activate the matching one automatically. Prompt with a task that matches the skill description, for example:

"Make this Compose screen edge-to-edge and fix the insets."

In Android Studio Agent Mode you can also type `@edge-to-edge` to force the skill. The agent then loads the full SKILL.md instructions plus any referenced documents or scripts.

After the agent finishes, review the changes. Skills improve consistency but do not replace testing or code review.

![Close-up of a smartphone next to a laptop showing development tools](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Update and Remove Skills

Update every installed skill:

```
android skills update --all
```

Update one skill:

```
android skills update edge-to-edge
```

Remove a skill you no longer need:

```
android skills remove edge-to-edge
```

You can also list only the skills already installed for a given agent:

```
android skills list --agent=gemini
```

## Tips for Better Results

Install skills one at a time at first so you can see what each one changes. Read the SKILL.md file in the android/skills repository before relying on it for critical work.

Combine skills with Android CLI commands the agent already knows how to run, such as device streaming or Compose preview rendering. This often produces faster, more accurate results than prompting the model alone.

If you work mainly inside Android Studio, you can also drop downloaded skill folders into `.agents/skills` or `.android-studio/skills` at the project root. The Agent Mode picks them up the same way.

For related agent setup, see our guide to [Android CLI device streaming](/blog/android-cli-device-streaming-how-to/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/RrP7uWvCiSU"
    title="Give your agents access to tools and skills through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Overview of Android skills, Android Developers: https://developer.android.com/tools/agents/android-skills
- android skills command reference: https://developer.android.com/tools/agents/android-cli/commands/skills
- Android skills GitHub repository: https://github.com/android/skills
- Device Streaming and Android skills blog post: https://developer.android.com/blog/posts/android-cli-device-streaming-and-skills
