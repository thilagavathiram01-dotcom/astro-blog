---
title: "Set Up Bring Your Own Agent in Android Studio Rabbit 2"
description: "Step-by-step guide to connect Claude, Codex, and 40+ ACP agents in Android Studio Rabbit 2 with Bring Your Own Agent."
pubDate: 2026-11-02T12:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Android Studio Rabbit 2 is stable. You can now connect any of more than 40 coding agents that support the Agent Client Protocol (ACP) directly inside the IDE. Claude Agent, OpenAI Codex, Google Antigravity, and others work alongside Android Studio’s own tools.

This guide shows exactly how to update, install an agent, authenticate, and start using it on a real project.

## Why Bring Your Own Agent matters

Previously Android Studio locked you into Google’s built-in assistant. BYOA removes that restriction. Your preferred agent receives the full project graph, build diagnostics, Compose Preview rendering, Emulator controls, and Logcat output. Token use drops because the agent no longer needs to rediscover basic project structure.

You keep your existing subscription or API key. Android Studio’s free built-in agent stays available as a fallback.

![Developer working on a laptop with code open](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Update to Android Studio Rabbit 2

1. Open Android Studio.
2. Choose Help > Check for Updates (Android Studio > Check for Updates on macOS).
3. Install the Rabbit 2 stable build (2026.2.2 or later).
4. Restart the IDE and open an existing Android project that already syncs cleanly.

Confirm the version in Help > About. You should see Rabbit 2 listed.

## Connect your first agent

The Agent tool window appears by default in Rabbit 2.

1. Open the Agent panel.
2. Select one of the default agents: Claude Agent, Codex, or Antigravity.
3. Sign in with your account or paste an API key when prompted.
4. Type a simple prompt such as “Summarize the module structure and identify the main entry point.”

The agent can now read project files, run Gradle tasks, launch the emulator, and inspect Logcat without leaving the IDE.

For additional agents, go to File (or Android Studio on macOS) > Settings > Tools > AI > Agents. Browse the registry and install any ACP-compliant agent.

## Use Android skills with your agent

Rabbit 2 includes a Skills Manager. Skills give the agent specialized Android knowledge for tasks such as Compose performance, Glance widgets, or Play policy checks.

1. Open the Agent panel three-dot menu or Settings > Tools > AI > Skills Manager.
2. Install the skills you need.
3. In chat, type @ followed by the skill name to invoke it.

You can also reference the [Android CLI skills guide](/blog/android-cli-agent-skills/) for command-line equivalents that work with any agent.

![Close-up of code displayed on a laptop screen](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Practical first tasks

Start with read-only requests so you can verify the agent understands the project:

- Ask it to list all build variants and explain the differences.
- Request a summary of the current navigation graph.
- Have it diagnose a known Logcat error without making changes.

Once confident, let it propose a small fix. Review every suggested file change and shell command before accepting. Agents can run terminal commands and write files, so keep approval gates active.

## Tips for reliable results

Keep the project fully synced before prompting. Agents rely on accurate symbol resolution and build diagnostics.

Install only the skills you actively use. Too many skills can dilute context.

Switch agents mid-session if one struggles with a particular task. Claude often handles large refactors well; Codex is strong at generating new code; Antigravity carries deeper Android-specific knowledge.

For on-device agent features inside your app, look at the ML Kit Agentic API powered by Gemini Nano 4. That is separate from the IDE agents but pairs naturally once you ship the feature. See also the [guide on adding AppFunctions](/blog/add-appfunctions-to-android-app/).

## Watch the official announcement

The Android Dev Summit 2026 keynote covers BYOA and the broader set of agent tools released the same day.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android Studio Rabbit 2 makes Bring Your Own Agent production-ready. Update the IDE, connect the agent you already pay for, and start with a small verification prompt. The combination of ACP integration, Android skills, and direct access to Emulator and Logcat removes the previous friction of copy-pasting code between tools.

Check the official Android Studio release notes for the latest list of supported agents and any new skills added after the summit.

## Sources

- Android Developers Blog: Agentic and Flexible — A next era of Android development (28 Oct 2026)
- Android Studio Rabbit 2 release notes (developer.android.com/studio/releases)
- Android Dev Summit 2026 keynote (YouTube, Android Developers)
