---
title: "How to Use Bring Your Own Agent in Android Studio"
description: "Step-by-step guide to setting up Bring Your Own Agent (BYOA) in Android Studio Rabbit 2 for Claude, Codex, and other agents."
pubDate: 2026-10-29T12:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Android developers can now run their preferred coding agents inside Android Studio. Android Studio Rabbit 2, now stable, introduces Bring Your Own Agent (BYOA). This feature connects over 40 ACP-compliant agents, including Claude Agent, Codex, and Google Antigravity, directly to the IDE.

You no longer switch between tools. Agents access project context, the Emulator, Compose Previews, and Logcat while you stay in Android Studio.

![Developer working at a multi-monitor coding setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## What Bring Your Own Agent Does

BYOA uses the open Agent Client Protocol (ACP). Your chosen agent receives the full project graph, build diagnostics, and tool access. It can read and write files, run shell commands, execute tests, and control the Emulator.

Supported agents include Anthropic’s Claude Agent, OpenAI’s Codex, Google Antigravity, Junie, and more than 40 others. You can install multiple agents and switch between them. The built-in agent remains available.

Agents also use Android skills for tasks such as Compose optimizations, Glance widget layouts, and permission security checks. Official plugins extend Android CLI capabilities for Claude Code, Codex, and Antigravity.

## Step-by-Step Setup in Android Studio Rabbit 2

Update to the latest stable Android Studio Rabbit 2 first. Open Help > Check for Updates on Windows or Linux, or Android Studio > Check for Updates on macOS. Download from the official site if needed.

1. Open the agent panel or go to Settings > Tools > AI > Agents.
2. Browse the marketplace and select your preferred agent.
3. Install it. Sign in with your existing subscription or provide an API key for the provider.
4. Switch to the agent in the agent window. You can keep several installed and change them as needed.

The process takes seconds. Your agent now has shared context with Android Studio tools.

![Smartphone next to laptop showing coding tools](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What Agents Can Access

Once connected, agents gain:

- Project structure and symbol resolution
- Build systems and diagnostics
- Android Emulator control
- Jetpack Compose Preview rendering
- Logcat output
- File edits, shell execution, and test running

This reduces context switching. An agent can generate UI code, preview it in Compose, launch the Emulator, and check logs without leaving the IDE.

Android skills further specialize the agent for Android tasks. Manage them from the Skills tab in the Agent panel or Settings > Tools > AI > Skills Manager.

## Practical Tips for Daily Use

Start with a small task. Ask the agent to add a Material 3 screen or fix a Gradle issue, then review the output with Change Review.

Change Review scans agent-generated diffs, pending commits, or git history. It flags recommended fixes and groups related changes into a guided walkthrough.

Enterprise teams can use Gemini Enterprise for stricter data controls and audit logging. Personal or enterprise subscriptions both work, depending on the agent provider.

Monitor token usage. Agents with full IDE context complete tasks faster but still consume tokens. Switch agents if one fits a particular workflow better.

For related CLI work, see our guide on [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

## Watch the Official Demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1rwOVPybnDc"
    title="Use any coding agent directly in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Bring Your Own Agent in Android Studio Rabbit 2 gives developers real flexibility. You choose the agent that matches your workflow or enterprise needs while keeping full access to Android-specific tools.

Update to Rabbit 2, install an agent from the marketplace, and test it on a real task. The combination of external agents and native IDE context speeds up development without locking you into one provider.

## Sources

- Android Developers Blog: Your favorite agents are now integrated in Android Studio (October 28, 2026)
- Android Developers Blog: Agentic and Flexible: A next era of Android development (October 28, 2026)
- Android Studio release notes for Rabbit 2
- Official Android Developers YouTube channel
