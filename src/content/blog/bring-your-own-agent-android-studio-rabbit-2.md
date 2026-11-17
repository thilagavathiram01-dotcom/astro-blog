---
title: "How to Use Bring Your Own Agent in Android Studio"
description: "Android Studio Rabbit 2 makes Bring Your Own Agent stable. Connect Claude, Codex, Antigravity or any of 40+ ACP agents and give them full IDE tools."
pubDate: 2026-11-17T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "developer"]
noindex: false
---

Android Studio Rabbit 2 is stable. You can now run the coding agent you already pay for inside the IDE instead of switching windows. Google calls the feature Bring Your Own Agent, or BYOA.

It works through the open Agent Client Protocol. Any ACP-compliant agent gets the same project context and tool access that the built-in agent has used. More than 40 agents are available, including Claude Agent from Anthropic, Codex from OpenAI, Junie, and Google Antigravity.

This guide shows what changed on 28 October 2026, how to connect an agent, and what the agent can actually do once it is signed in.

## What BYOA actually gives you

Before Rabbit 2, the deep Android-specific tools lived mainly with Google’s own agent. Now the IDE acts as the host. It launches your chosen agent and hands it the full project graph, build configuration, and platform details.

The agent can then:

- Read and write files in your project
- Trigger builds and read build errors
- Resolve symbols and navigate the codebase
- Render Jetpack Compose previews
- Control the Android Emulator
- Read Logcat output
- Call Android skills for tasks such as migrating XML views to Compose or upgrading the Android Gradle Plugin

You authenticate with your own subscription or API key. The built-in agent stays available at no extra charge. You can install more than one agent and switch between them from the agent window.

![Close-up of source code on a computer monitor](https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?auto=format&fit=crop&w=800&q=80)

## Watch the official announcement

The Android Developers channel published a short clip showing the feature in action.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A4UME4YnJ68"
    title="Use any agent in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: connect your first agent

1. Update Android Studio to the latest stable release (Rabbit 2, version 2026.2.2). Use Help > Check for Updates if needed. Confirm your Android Gradle Plugin version is between 7.1 and 9.5.

2. Open the agent tool window. Select Claude Agent, Codex, or Antigravity as a starting point, or go to Settings > Tools > AI > Agents to browse the registry.

3. Sign in with your existing plan or paste an API key. Enterprise subscriptions and personal plans both work, depending on the provider.

4. Send a first prompt. Start with something read-only, such as “Explain the current module structure and list the main Compose screens.”

5. Install additional agents from the same settings page if you want to compare results. Switch agents from the agent window without restarting the IDE.

The process takes a few minutes once Studio is updated. After authentication the agent receives project context automatically.

## Use Android skills and the skills manager

Android Studio ships with more than 30 Android skills that cover over 20 areas. Examples include permission security checks, Glance widget layouts, Compose performance optimization, CameraX integration, and Firebase setup.

Open the Skills editor from the agent panel’s three-dot menu (Manage Agent Skills), type @ in the chat and click Manage skills, or go to Settings > Tools > AI > Skills Manager. You can install, remove, or invoke skills on demand so the agent only loads the guidance it needs for the current task.

Firebase agent skills are also included. This keeps specialized workflows out of the base prompt and reduces token use on ordinary turns.

## Review agent changes before you commit

Rabbit 2 adds Change Review. Launch it from the agent chat, from pending commits, or from the Git log. The feature first identifies recommended fixes, then offers a guided walkthrough that groups related diffs by theme instead of forcing you to read files alphabetically.

This addresses the new bottleneck that appears once agents write code faster than you can review it. You still own the final commit.

## Additional tools that arrived with the release

LeakCanary now integrates with the built-in agent inside the Profiler. It can explain the cause of a memory leak and suggest specific code changes.

Android XR emulators for glasses (XR, audio, and display) are stable. You can customize the display glasses environment with your own 360-degree photos or a live camera feed.

Official Android CLI plugins exist for Claude Code and Codex. These let agents render Compose previews in the terminal, manage emulators, and access real devices through Android Device Streaming without opening the full IDE.

## Tips for productive use

- Begin with a read-only prompt so you can verify the agent sees the correct modules and dependencies.
- Keep skills targeted. Invoke them only when the task matches, rather than loading every skill into every session.
- Use Change Review on any non-trivial agent-generated diff before you merge.
- If your organization uses Gemini Enterprise, admin policies can restrict which agents and skills are allowed.
- For app-level agents that run on the device itself, see the separate ADK for Kotlin work. BYOA is about the coding agent inside the IDE; [building production agents with ADK for Kotlin](/blog/adk-kotlin-1-0-android-agents/) is a different layer.

## What this does not change

You still review and ship the code. Agents can propose changes and run tools, but they do not replace your judgment on architecture, security, or user experience. Token costs and rate limits remain with the provider you chose. Android-specific correctness still depends on the skills and the project context the IDE supplies.

## Conclusion

Android Studio Rabbit 2 removes the previous lock-in to a single AI provider inside the IDE. Update, open Settings > Tools > AI > Agents, connect the agent you already use, and give it a concrete task. The combination of project awareness, emulator access, Compose previews, and Android skills is what makes the integration useful rather than a simple chat window.

Start with one agent and one small, verifiable change. Then expand once you trust the output.

## Sources

- [Your favorite agents are now integrated in Android Studio — Android Developers Blog](https://developer.android.com/blog/posts/ai-agents-android-studio-integration)
- [Build your way: Use any AI agent of your choice in Android Studio — Android Developers Blog](https://developer.android.com/blog/posts/build-your-way-use-any-ai-agent-of-your-choice-in-android-studio)
- [What's new in Android developer tools and performance at Android Dev Summit — Android Developers Blog](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Use any agent in Android Studio — Android Developers (YouTube)](https://www.youtube.com/watch?v=A4UME4YnJ68)
