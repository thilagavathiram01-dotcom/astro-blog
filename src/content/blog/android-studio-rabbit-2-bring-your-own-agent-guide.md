---
title: "Bring Your Own Agent in Android Studio Rabbit 2 Guide"
description: "Step-by-step guide to connecting Claude Agent, Codex, Antigravity and other AI coding agents in Android Studio Rabbit 2 using Bring Your Own Agent."
pubDate: 2026-10-28T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 2 is stable. Developers can now connect preferred coding agents directly inside the IDE instead of switching between windows or pasting project context. The feature is called Bring Your Own Agent (BYOA). It uses the open Agent Client Protocol so agents from Anthropic, OpenAI, Google, and others receive the full project graph, build diagnostics, emulator controls, and Android skills.

This guide shows how to set it up, what the agent can actually do, and practical habits that keep the results useful.

## What Bring Your Own Agent does

BYOA lets you run ACP-compliant coding agents inside Android Studio. Official support covers Claude Agent, Codex from OpenAI, Google Antigravity, and more than 40 others. The built-in Gemini agent remains available.

Once connected, the agent receives:

- Project structure and symbol resolution
- Build diagnostics and Gradle status
- Emulator control and Logcat
- Jetpack Compose previews
- Android SDK tools
- Official Android skills and the Knowledge Base

The agent can read and edit files, run tests, execute shell commands, and pause for approval on riskier actions. This reduces token waste because the agent pulls only the files it needs instead of receiving a full paste of the codebase.

![Developer coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Install Android Studio Rabbit 2

Download the latest stable Android Studio from the official site. Rabbit 2 includes BYOA as a stable feature, so no Canary channel is required for basic use.

Open an existing project or create a new one. Open the Agent tool window from the right side or via View > Tool Windows > Agent.

## Connect an agent

1. In the Agent window, open the agents dropdown.
2. Select Claude Agent, Codex, or Google Antigravity for the default options.
3. Sign in with your existing subscription or paste an API key.
4. For additional ACP agents, go to Settings > Tools > AI > Agents and browse the registry.

You can switch agents mid-session if one hits a quota limit. Enterprise plans and personal accounts are both supported. Gemini Enterprise users keep the same privacy and governance controls.

After connection, the agent sees the project context immediately. No manual export of files is needed.

## Run a practical task

Start with a bounded job so you can review the output.

1. Open a module that needs a small change, such as updating a Compose screen or fixing a Gradle warning.
2. In the Agent chat, describe the task: "Use the adaptive layout skill. Make this screen work on foldables and large screens. Keep the existing theme."
3. Review the plan if the agent offers one.
4. Accept the changes, then open the Compose preview and the emulator to verify.
5. Check Logcat if the agent launches the app.

The agent can also invoke installed skills with the @ mention. Skills cover common jobs such as XML-to-Compose migration, AGP upgrades, and CameraX setup. See the related guide on [using Android CLI and official skills with any agent](/blog/android-cli-skills-any-agent/) for details on installing and managing those skills.

![Laptop showing code during an Android development session](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Manage skills inside the IDE

Android Studio now includes a Skills Manager. Open it from the Agent panel three-dot menu (Manage Agent Skills), by typing @ in chat and selecting Manage skills, or from Settings > Tools > AI > Skills Manager.

Install only the skills you need for the current task. Too many skills in one prompt increase context size without improving results. Official skills cover Navigation, edge-to-edge, testing, and XR experiences. You can also add project-specific skills that encode your design system or module structure.

## Tips for better results

- Name the exact module and define "done" in the prompt. Example: "Update only the settings screen. Do not touch the navigation graph."
- Review diffs before accepting. The new Change Review feature groups related changes and suggests fixes.
- Use the emulator for visual checks. The agent can control it and read Logcat, so ask it to verify the change on a device.
- Switch agents when one struggles with a particular library. Claude Agent often handles long reasoning tasks well; Codex is strong for structured edits.
- Keep skills updated. Patterns change with new Android releases and library versions.

Permissions are granular. The agent asks before running shell commands or making large edits. Approve once for trusted operations or require confirmation each time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JfW1k-mzL4M"
    title="Android Studio BYOA Explained | Codex, Claude & Antigravity AI Agents + Real App Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Other Rabbit 2 improvements

Rabbit 2 also stabilizes XR Emulators for glasses and display devices. You can load custom 360 environments and test LED indicators. LeakCanary integration with the agent provides narrative explanations and suggested fixes for memory leaks. AI Change Review helps you inspect agent-generated patches and pending commits without reading every file in order.

These features work with both the built-in agent and BYOA agents.

## Conclusion

Bring Your Own Agent in Android Studio Rabbit 2 removes the friction of moving context between tools. Connect the agent you already use, give it a clear task, and review the result inside the IDE. Combined with official Android skills, the setup keeps generated code aligned with current platform recommendations.

Start with a small change in an existing project. Once the workflow feels reliable, expand to larger refactors.

## Sources

- [Your favorite agents are now integrated in Android Studio](https://developer.android.com/blog/posts/ai-agents-android-studio-integration) — Android Developers Blog
- [Build your way: Use any AI agent of your choice in Android Studio](https://developer.android.com/blog/posts/build-your-way-use-any-ai-agent-of-your-choice-in-android-studio) — Android Developers Blog
- [Android Studio Rabbit 2 release notes](https://developer.android.com/studio/releases) — Android Developers
- [Overview of Android skills](https://developer.android.com/tools/agents/android-skills) — Android Developers
- [Android Studio BYOA Explained](https://www.youtube.com/watch?v=JfW1k-mzL4M) — CraftFusionX
