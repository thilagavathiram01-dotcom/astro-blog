---
title: "Set Up Bring Your Own Agent in Android Studio Rabbit 2"
description: "Step-by-step guide to connect Claude, Codex, or 40+ agents in Android Studio Rabbit 2 using Bring Your Own Agent and the Agent Client Protocol."
pubDate: 2026-11-02T09:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer"]
noindex: false
---

Android Studio Rabbit 2, released as the stable channel build on 28 October 2026 at Android Dev Summit, introduces Bring Your Own Agent (BYOA). Developers can now run Claude Agent, OpenAI Codex, Google Antigravity, or any of more than 40 Agent Client Protocol (ACP) compatible coding agents directly inside the IDE.

This replaces the previous single-agent experience with a flexible setup. Your chosen agent receives full project context, build diagnostics, emulator controls, Logcat, and Compose Preview rendering. Android Studio’s built-in agent remains available at no extra cost.

![Developer typing code on a laptop during an Android Studio session](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Why Bring Your Own Agent matters

Teams already use specific agents for different tasks. Some prefer Claude for long-horizon refactors. Others rely on Codex for terminal-style work or Antigravity for Gemini model access. BYOA lets those agents operate inside Android Studio without context switching.

The open Agent Client Protocol means Google does not need a custom integration for every new agent. Any ACP-compliant tool can connect and immediately use Studio’s project graph, symbol resolution, and device tools. Official documentation notes that this pairing reduces token use because the agent receives accurate build and preview data instead of guessing.

Internal Google testing of related Android CLI features (Compose previews from the terminal) showed agents completing UI tasks 77 percent faster while using up to three times fewer tokens. BYOA extends similar advantages into the full IDE.

## Prerequisites

- Android Studio Rabbit 2 (2026.2.2) or later installed from the stable channel. Update via Help → Check for updates (or Android Studio → Check for updates on macOS).
- An active project that syncs and builds successfully. Note your current AGP and Gradle versions before major changes.
- Credentials for your chosen agent: a subscription, enterprise plan, or API key. Consumer and enterprise options are supported depending on the provider.

Download the latest Rabbit 2 build from the official [Android Studio releases page](https://developer.android.com/studio/releases) if you prefer a clean install.

## Step-by-step setup

### 1. Update to Android Studio Rabbit 2

Open Android Studio and select Help → Check for updates. Accept the Rabbit 2 update and restart. Confirm the version in Help → About shows 2026.2.2 or higher. On macOS the menu path is Android Studio → Check for updates.

### 2. Open the agent tool window

Look for the agent panel, usually available from the right sidebar or via the AI menu. The first time you open it, Studio presents default agent options: Claude Agent, Codex, and Antigravity.

Select one of the defaults. You will be prompted to sign in with your existing account or paste an API key. Authentication is handled by the agent provider; Android Studio does not store your provider credentials beyond the current session needs.

### 3. Install additional agents from the registry

For any agent beyond the three defaults, open Settings:

- Windows/Linux: File → Settings → Tools → AI → Agents
- macOS: Android Studio → Settings → Tools → AI → Agents

Browse the marketplace list of ACP-compatible agents. Install the one you want. You can keep multiple agents installed and switch between them from the agent window while you work. New agent features appear as soon as the provider ships them.

### 4. Verify the connection

With an agent selected, try a read-only prompt first: “Summarize the module structure and identify the main application entry point.” Confirm the response matches your project. Then ask it to diagnose a known Gradle sync warning or read recent Logcat output. Review any proposed commands or file changes before accepting them.

![Programmer working at a multi-monitor desk setup for Android development](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## What the agent can access

Once connected, the agent receives:

- Full project structure and build graph
- Symbol resolution and navigation
- Compose Preview rendering without launching a full emulator for every check
- Emulator and device controls
- Logcat and build output
- Terminal and shell execution (with safety pauses on risky actions)
- Official Android skills (more than 30 available covering permissions, Glance widgets, Compose performance, adaptive layouts, and more)

You can also invoke Change Review on pending agent changes or from the Git changes window. Studio generates a report of potential issues and can walk you through longer diffs. The `/review` command works directly from the agent tool window.

## Pair BYOA with Android CLI and skills

BYOA inside Studio works well alongside the Android CLI and official skills. Many developers keep the IDE agent for interactive work and use CLI skills for terminal or CI agents. The skills catalog (Navigation 3, CameraX migration, edge-to-edge, AGP upgrades, adaptive UI, and others) installs via `android skills add` and is readable by any ACP agent.

See the existing guide on [using Android CLI and official skills with any AI agent](/blog/android-cli-skills-any-agent/) for the terminal-side workflow. Official plugins also exist for Claude Code and Codex that expose the same Android CLI commands and skills.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for daily use

Start with small, bounded tasks. Ask the agent to add a single Compose preview or fix a specific lint warning before requesting large refactors. Review the plan or diff every time; the Change Review feature helps surface issues quickly.

Install only the skills you need for the current job. Loading every skill into every prompt increases context size without benefit. Re-run skill updates periodically because recommended patterns change.

If you use Google Antigravity, log in inside Studio to receive new Gemini models as they launch. Enterprise users retain the existing Gemini Enterprise controls (data privacy, audit logging, and admin policies) that have been available since earlier Rabbit builds.

For memory leaks, Rabbit 2 integrates LeakCanary with the agent. You can ask the agent to analyze a leak report and suggest fixes directly from the Profiler, or use the upcoming Android CLI leakcanary subcommand for terminal workflows.

## Common questions

**Can I use more than one agent?** Yes. Install several and switch from the agent window as the task changes.

**Does the built-in agent still work?** Yes. It remains free and available alongside any external agents you connect.

**What if my preferred agent is not listed?** Check the Settings → Tools → AI → Agents registry. New ACP-compliant agents appear as providers add them. You can also use the official Android plugins for Claude Code and Codex outside the IDE.

**Is this available on Canary only?** No. Bring Your Own Agent is stable in the production Rabbit 2 channel.

## Conclusion

Bring Your Own Agent in Android Studio Rabbit 2 removes the previous lock-in to a single coding assistant. Update to the stable 2026.2.2 release, connect Claude Agent, Codex, Antigravity, or another ACP agent through the agent window or Settings, and give it real project and device context. Combine it with Android skills and the CLI for consistent patterns across IDE, terminal, and CI.

The result is an agent that understands your Android project the same way you do, instead of guessing from a code snippet.

## Sources

- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development) — Android Developers Blog, 28 October 2026
- [What's new in Android developer tools and performance at Android Dev Summit](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance) — Android Developers Blog, 28 October 2026
- [Android Studio Rabbit 2 release notes](https://developer.android.com/studio/releases) — Android Developers
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E) — Android Developers YouTube
