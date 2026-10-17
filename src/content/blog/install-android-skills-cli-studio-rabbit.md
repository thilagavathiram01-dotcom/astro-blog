---
title: "How to Install Android Skills with CLI and Studio"
description: "Step-by-step guide to install, manage, and use official Android skills with Android CLI and Android Studio Rabbit 2 for better AI agent workflows."
pubDate: 2026-10-17T20:00:00
heroImage: "https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android skills give AI coding agents clear instructions for Android architecture, UI patterns, and tooling. Official skills from Google help agents produce code that follows current best practices instead of outdated examples. You can install them with Android CLI or manage them inside Android Studio Rabbit 2.

This guide shows both methods using verified steps from the Android Developers documentation. The process takes a few minutes once Android CLI is present on your machine.

## Why Android Skills Matter for Agents

AI agents generate code quickly, but they often miss platform-specific details. Skills act as modular instruction sets. They cover topics such as migrating from XML layouts to Jetpack Compose, implementing edge-to-edge design, setting up Navigation 3, and building adaptive layouts. 

Agents that load these skills produce more accurate results on the first try. Android Studio also injects the relevant skill automatically when your task matches one of the bundled sets. 

You can install skills globally for all agents or limit them to a single project. The CLI supports targeting specific agents such as Gemini, Claude, or Codex. 

![Developer working on laptop with code](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Install Android CLI First

Skills management runs through the `android` command-line tool. Download and install it if you do not already have it. 

On Linux or macOS, open a terminal and run the curl installer for your platform. The official download page lists the exact commands for each operating system and architecture. Local installation does not require administrator rights. 

After installation, confirm the tool is available by typing `android --version` or `which android`. Update it with `android update` to pull the latest version. 

Run `android init` once. This command installs the base android-cli skill so agents know how to call the tool itself. 

## Add Skills with the CLI

The `android skills` command group handles installation, listing, and removal. 

To install a single skill for one agent, use this pattern: 

```
android skills add --agent=gemini edge-to-edge
```

Replace the skill ID with any official package. Common examples include navigation-3, compose-migration, and adaptive-layouts. 

To install every official skill at once, run: 

```
android skills add --all
```

The command updates existing skills to the newest version if they are already present. Use `--project=/path/to/your/project` to install into a specific repository instead of your user profile. 

List what is currently installed with `android skills list`. Search available skills by keyword using `android skills find compose`. 

Remove a skill with `android skills remove skill-id`. 

These commands work from any terminal. Agents that support the Agent Client Protocol can also invoke them when they need additional guidance mid-task. 

## Manage Skills Inside Android Studio Rabbit 2

Android Studio Rabbit 2 Canary builds include a built-in skills browser. Open the Agent tool window and look for the skills section. The interface lists installed skills and shows available ones from the official repository. 

You can install or remove skills without leaving the IDE. The Studio version also surfaces skills that match the current open file or task. When you start an agent session, relevant skills load automatically. 

Update Studio to the latest Canary channel first. Go to Help > Check for Updates on Windows or Linux, or Android Studio > Check for Updates on macOS. 

Once updated, connect an agent through Bring Your Own Agent if you prefer Claude, Codex, or Antigravity. The skills remain available regardless of which agent you select. 

![Programmer workspace with multiple screens](https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Use Skills in an Agent Session

Open a project in Android Studio and start a new agent conversation. Describe a task that matches a skill, such as “Convert this XML layout to Jetpack Compose and make it edge-to-edge.” 

The agent loads the matching skill and follows its steps. You review the proposed file changes in the changes drawer before accepting them. 

For CLI-driven workflows, ask your agent to run `android skills list` or to apply a specific skill. The agent can then read the skill files and apply the patterns. 

If you work outside Studio, point the agent at the skills directory created by the CLI. On most systems this lives under `~/.gemini/antigravity/skills` or a similar path for other agents. 

## Tips for Better Results

Keep skills updated. Run `android skills add --all` weekly or after major Android releases. New skills appear for features such as Android XR and improved Compose previews. 

Combine skills with the Android Knowledge Base. Agents that have both produce fewer outdated API calls. 

Test the output in the emulator. Skills reduce common mistakes, but they do not replace running the app and checking Logcat or Compose Previews. 

Limit skill scope when working on multiple projects. Use the `--project` flag so one repository does not inherit experimental skills from another. 

For team environments, document which skills your agents load. This keeps generated code consistent across contributors. 

## Related Guides

If you already use Android CLI for device streaming or agent automation, see our guide on [using Android CLI and official skills with any AI agent](/blog/android-cli-skills-any-agent/). That post covers the broader agent setup. 

## Sources

- Android Developers: android skills command reference (developer.android.com/tools/agents/android-cli/commands/skills)
- Android Developers: android skills add documentation
- Android Developers Blog: Build your way: Use any AI agent of your choice in Android Studio (24 September 2026)
- Android Studio preview release notes for Rabbit 2

The skills system continues to expand. New packages appear as Android features stabilize. Check the official Android skills repository on GitHub for the full catalog and contribution guidelines. 
