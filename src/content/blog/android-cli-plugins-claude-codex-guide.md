---
title: "Set Up Android CLI Plugins for Claude Code and Codex"
description: "Install official Android CLI plugins for Claude Code and Codex. Step-by-step setup for terminal agents to build Android apps faster."
pubDate: 2026-11-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer", "chatgpt"]
noindex: false
---

Android developers no longer need the full IDE open for every agent task. Google shipped official Android CLI plugins for Claude Code and OpenAI Codex at Android Dev Summit 2026. These plugins add the android-cli skill so your terminal agent can create projects, manage devices, inspect UI, and search Android docs without leaving the command line.

This guide walks through installation and first use. It builds on the IDE path covered in our earlier post on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/). Use the CLI route when you prefer terminal-first workflows or run agents in CI.

## Why the Android CLI plugin matters

Android CLI standardizes core tasks for agent workflows. Agents gain access to project scaffolding, virtual device management, live UI inspection, Journeys testing, and the Android Knowledge Base. Google reports that agents using the new android preview command finished UI tasks 77% faster while using up to three times fewer tokens in internal tests.

The plugin itself does not contain the CLI binary. You install Android CLI first, then add the plugin so the agent knows how to call it. Official support covers Claude Code, Codex, and Antigravity. Extra agents can still run Android CLI commands if you expose the binary on PATH.

![Laptop showing code editor during Android development](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Prerequisites

- Android CLI installed and updated. Download from the official [Android CLI page](https://developer.android.com/tools/agents) and run `android update`.
- Claude Code or Codex CLI already set up with a valid account or API key.
- A terminal on macOS, Linux, or Windows with the agent command available.
- Optional: an existing Android project for testing. Start with a simple Compose app if you are new.

Confirm the CLI is ready with `android -V` or `command -v android`. Run `android init` once to install the base android-cli skill for your agent.

## Install the plugin in Claude Code

Open a terminal and run these two commands in order:

```
claude plugin marketplace add android/android-cli-plugin
claude plugin install android-cli@android-cli-plugin
```

Inside an active Claude Code session you can use the slash commands instead:

```
/plugin marketplace add android/android-cli-plugin
/plugin install android-cli@android-cli-plugin
```

After installation, start a new Claude Code session or restart the existing one. Ask the agent to list available skills or try a simple prompt such as “create a new Android Compose project named DemoApp.” The agent should call the android-cli skill and invoke the underlying CLI.

## Install the plugin in Codex

Codex uses a slightly different verb for the install step. From your terminal run:

```
codex plugin marketplace add android/android-cli-plugin
codex plugin add android-cli@android-cli-plugin
```

Restart Codex or open a fresh session. The android-cli skill becomes available. Prompt it with “list available Android virtual devices” or “render a Compose preview for MainScreen.” Codex should route the request through the skill and the local Android CLI binary.

Note that the second Codex command is `plugin add`, not `plugin install`. The marketplace add step is identical to Claude.

## First useful commands after setup

Once the plugin is active, try these tasks in either agent:

1. Scaffold a project: “Create an empty Compose activity project called PluginTest in the current folder.”
2. Manage devices: “Start a medium phone emulator and install the debug APK.”
3. Inspect UI: “Show me the current screen hierarchy on the running emulator.”
4. Preview layouts: “Render the Compose preview for the home screen without launching the emulator.”
5. Search docs: “Look up the latest guidance on edge-to-edge display in the Android Knowledge Base.”

The agent receives project context and can filter files, which reduces token use compared with pasting entire modules into chat. Keep the first prompts narrow so you can review the generated files before the agent continues.

![Close-up of source code on a laptop screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Pair the CLI with Android Studio when needed

Terminal agents excel at scaffolding, device control, and repeated checks. When you need visual editors, the layout inspector, or a full debugger, open the same project in Android Studio. Projects created with Android CLI open cleanly in the IDE.

If you also use Bring Your Own Agent inside Studio, the CLI plugin and the IDE path stay independent. The Studio agent runs its own ACP session. The CLI plugin teaches the terminal agent how to call the same underlying tools. You can switch between them on the same codebase.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for reliable results

- Run `android update` regularly so the CLI and skills stay current with platform changes.
- Disable metrics with the `--no-metrics` flag in CI pipelines if your organization requires it.
- Start every multi-file task on a feature branch. Review the full diff before merging.
- Prefer specific prompts over open-ended requests. “Fix the failing test in SessionRepository” produces smaller, safer changes than “improve the app.”
- Keep the Android SDK path correct. Use the `--sdk` flag or a `.androidrc` file if you maintain multiple SDK installations.

Agents still make mistakes on complex navigation or multi-module builds. Treat the first successful run as a baseline and add your own tests around any generated code.

## What the plugin does not do

The plugin adds the skill that teaches the agent how to call Android CLI. It does not replace Android Studio’s visual tools or guarantee that every generated layout will match design specs. Physical device access through remote labs requires separate configuration and approval. Antigravity receives extra interactive surfaces (Compose Previews and Device Hub) that Claude and Codex do not yet show inside their own UIs.

## Conclusion

Official Android CLI plugins let Claude Code and Codex handle the full Android development loop from the terminal. Install Android CLI, add the marketplace, install the plugin, and start with a single narrow task. Review every change. When you need the IDE’s visual tools, open the same project in Android Studio. The combination keeps your existing agent subscription while giving it accurate, up-to-date Android knowledge.

## Sources

- [Agent plugins](https://developer.android.com/tools/agents/android-cli/agent-plugins) — Android Developers
- [Overview of Android CLI](https://developer.android.com/tools/agents/android-cli) — Android Developers
- [Agent tools and resources](https://developer.android.com/tools/agents) — Android Developers
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E) — Android Developers
- [android/android-cli-plugin](https://github.com/android/android-cli-plugin) — GitHub
