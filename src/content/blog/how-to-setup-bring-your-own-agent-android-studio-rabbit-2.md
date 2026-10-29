---
title: "How to Set Up Bring Your Own Agent in Android Studio"
description: "Step-by-step guide to connect Claude, Codex, or Antigravity to Android Studio Rabbit 2 using Bring Your Own Agent and the Agent Client Protocol."
pubDate: 2026-10-29T12:30:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "gemini"]
noindex: false
---

Android Studio Rabbit 2 is stable and includes Bring Your Own Agent. Developers can now run Claude Agent, OpenAI Codex, Google Antigravity, or any of more than 40 ACP-compliant coding agents inside the IDE. The agents receive the full project graph, build diagnostics, emulator controls, and Compose preview tools.

This guide shows the exact steps to install Rabbit 2, connect an agent, and start using it for real Android work. You keep your existing subscription or API key. The built-in Gemini agent remains available.

## What Bring Your Own Agent Changes

Previously Android Studio offered a built-in agent powered by Gemini. Bring Your Own Agent adds an open path through the Agent Client Protocol. Any ACP-compliant agent can attach and receive native IDE context instead of generic file access.

Google lists three agents ready by default: Claude Agent from Anthropic, Codex from OpenAI, and Google Antigravity. Additional agents appear in the registry under Settings > Tools > AI > Agents. You can install more than one and switch between them during a session.

The connected agent gains access to build systems, Logcat, the Android Emulator, Jetpack Compose Previews, and official Android skills. It can read and write project files, run shell commands, and pause for approval on riskier actions. For Gemini users, Google recommends Antigravity to reach the latest models and higher quotas available with Google AI Pro or Ultra plans.

![Developer typing code on a laptop](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Install or Update to Android Studio Rabbit 2

Download the stable Rabbit 2 build from the official Android Developers site or update from within the IDE.

1. Open Android Studio.
2. Choose Help > Check for Updates (or Android Studio > Check for Updates on macOS).
3. Accept the update if Rabbit 2 appears, then restart.

If you prefer a clean install, visit developer.android.com/studio and select the Rabbit 2 package for your platform. The stable channel currently lists Android Studio Rabbit 2 | 2026.2.2.

After the update, confirm the version in Help > About. Bring Your Own Agent is part of this stable release, so no canary channel is required.

## Connect Your First Agent

The setup takes seconds once the IDE is current.

1. Open the Agent tool window. Look for the agent icon or choose View > Tool Windows > Agent.
2. In the agents list, select Claude Agent, Codex, or Google Antigravity.
3. Sign in with your existing account or paste an API key when prompted.
4. Wait for the connection status to show ready.

For agents beyond the three defaults, open Settings > Tools > AI > Agents. Browse the registry, install the ACP-compliant agent you need, then return to the Agent window and select it. You can keep multiple agents installed and switch as needed.

Authentication stays with the agent provider. Your Anthropic, OpenAI, or Google plan controls usage limits and data handling. The built-in Gemini agent continues to work without extra setup and remains free within its normal quotas.

## Give the Agent Android Context

Once connected, the agent already receives project structure, Gradle diagnostics, and emulator access. You can strengthen results with official Android skills.

Open the Skills manager from the Agent panel three-dot menu (Manage Agent Skills), by typing @ in the chat and choosing Manage skills, or from Settings > Tools > AI > Skills Manager. Android Studio ships with skills for common tasks such as migrating XML Views to Compose, upgrading AGP, adding adaptive layouts, and integrating CameraX or Firebase.

Install only the skills that match your current work. Skills are markdown instruction packs that activate when a prompt matches their metadata. They complement rather than replace the Android Knowledge Base.

For command-line workflows outside the IDE, see our guide on [Android CLI and agent skills](/blog/android-cli-agent-skills/). CLI and Studio agents can share the same skill packs.

![Code on a computer screen](https://images.unsplash.com/photo-1637778352878-f0b46d574a04?auto=format&fit=crop&w=800&q=80)

## Run a First Task

Start with a small, verifiable request so you can confirm the agent sees the project correctly.

Try a prompt such as:

"Add a simple Material 3 list screen that shows three sample notes. Use Navigation 3 if the project already has it. Build and run on the emulator, then describe what appears in Logcat."

The agent should:

- Inspect the project graph and existing dependencies.
- Edit the relevant Kotlin and XML or Compose files.
- Trigger a Gradle build if needed.
- Deploy to the emulator and check the result.

Watch the permission prompts. Routine file edits and builds usually proceed automatically. Actions such as installing packages or running certain shell commands pause for your approval. You can adjust the permission level in the agent settings if your team prefers stricter control.

After the task finishes, use the new Change Review feature if the diff is large. It groups related changes and can walk you through recommended fixes before you commit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1rwOVPybnDc"
    title="Use any coding agent directly in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Daily Use

Switch agents when one hits its quota or underperforms on a specific task. Antigravity is the recommended path for the newest Gemini models and for users who already hold Google AI Pro or Ultra subscriptions. Enterprise teams can continue using Gemini Enterprise with either the built-in agent or Antigravity while keeping the same data controls and audit logging.

Keep the Android skills list short. Too many skills add noise. Prefer the Knowledge Base (available through Android CLI or the agent’s docs tools) for general API questions.

Test on a non-production branch first. Agents can edit many files quickly. Review the Change Review summary and run your existing unit and instrumentation tests before merging.

If an agent fails to connect, confirm you are on Rabbit 2 stable, that the provider login succeeded, and that your organization policy allows the selected agent. Additional agents must be ACP-compliant; non-compliant tools will not appear in the registry.

![Close-up of programming code on screen](https://images.unsplash.com/photo-1743090661056-e51700546169?auto=format&fit=crop&w=800&q=80)

## Privacy and Permissions

Each agent runs under its own provider’s terms. Review the data handling policies of Anthropic, OpenAI, or Google before connecting production codebases. Android Studio does not retain your source for model training when you use Gemini Enterprise; consumer plans follow the respective provider’s standard terms.

Granular permissions let you allow automatic file edits while requiring confirmation for shell commands or emulator resets. Adjust these in the agent configuration so the tool matches your risk tolerance.

## Conclusion

Bring Your Own Agent in Android Studio Rabbit 2 removes the single-agent limit. Update to the stable release, connect Claude Agent, Codex, or Antigravity in the Agent window, and give the agent access to Android skills and the emulator. You can switch agents, review large diffs with Change Review, and keep the built-in Gemini option available.

Download Rabbit 2 from developer.android.com/studio and start with a small feature request. The combination of your preferred agent and native Android Studio tools is now ready for production work.

## Sources

- [Your favorite agents are now integrated in Android Studio](https://developer.android.com/blog/posts/ai-agents-android-studio-integration) — Android Developers Blog, 28 October 2026
- [Build your way: Use any AI agent of your choice in Android Studio](https://android-developers.googleblog.com/2026/09/build-your-way-use-any-ai-agent-in-android-studio.html) — Android Developers Blog, 24 September 2026
- [Android Studio Rabbit 2 release notes](https://developer.android.com/studio/releases) — Android Developers
- [Use any coding agent directly in Android Studio (YouTube)](https://www.youtube.com/watch?v=1rwOVPybnDc) — Android Developers, 28 October 2026
