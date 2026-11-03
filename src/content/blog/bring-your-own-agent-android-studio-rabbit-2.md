---
title: "How to Set Up Bring Your Own Agent in Android Studio"
description: "Connect Claude Agent, Codex, or 40+ agents to Android Studio Rabbit 2 using Bring Your Own Agent for flexible Android development."
pubDate: 2026-11-03T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 2 reached stable on 28 October 2026 at Android Dev Summit. The release adds Bring Your Own Agent (BYOA), so you can run Claude Agent, OpenAI Codex, Google Antigravity, or any of more than 40 Agent Client Protocol (ACP) agents inside the IDE instead of relying only on the built-in assistant.<grok type="render_inline_citation" citation_id="61" />

Developers asked for model and agent flexibility. BYOA answers that by pairing your preferred coding agent with Android Studio’s project graph, build diagnostics, emulator controls, Logcat, and Android skills. The built-in agent stays available at no extra cost, and you can switch between agents as needed.<grok type="render_inline_citation" citation_id="40" />

![Developers working on code together](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Bring Your Own Agent gives you

ACP is an open protocol that lets any compliant agent connect to the IDE without a custom bridge from Google. Once connected, the agent can read the full project structure, trigger builds, inspect Gradle errors, render Jetpack Compose previews, control the emulator, and read Logcat output. It can also invoke Android skills for tasks such as permissions security, Glance widget layouts, or Compose performance work.<grok type="render_inline_citation" citation_id="63" />

Default options in the agent window include Claude Agent, Codex, and Antigravity. Additional agents appear in the registry under Settings. Authentication supports personal subscriptions, enterprise plans, or API keys depending on the provider. You remain responsible for reviewing any file changes or shell commands the agent proposes.<grok type="render_inline_citation" citation_id="61" />

## Step-by-step: connect an agent in Rabbit 2

1. Update Android Studio to the latest stable Rabbit 2 release. Open Help > Check for Updates (or the Android Studio menu on macOS) and install the update. Confirm you are on the stable channel, not Canary.<grok type="render_inline_citation" citation_id="63" />

2. Open an existing Android project that already syncs and builds. This gives the agent real project context from the start.

3. Open the agent tool window. Select one of the default agents—Claude Agent, Codex, or Antigravity—then sign in with your account or paste an API key.

4. To add other agents, go to File (Android Studio on macOS) > Settings > Tools > AI > Agents. Browse the registry and install an ACP-compliant agent.

5. Start with a read-only prompt such as “Summarise the module structure and identify the application entry point.” Confirm the agent’s response matches your project before asking it to make changes.

6. Try a controlled task: ask the agent to diagnose a Gradle error or suggest a Logcat filter. Review every proposed edit or command before accepting it.

The process takes a few minutes once Rabbit 2 is installed. You can keep multiple agents installed and switch between them from the agent window.<grok type="render_inline_citation" citation_id="31" />

![Laptop screen showing code](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## What the agent can access

Connected agents receive IDE-native context that reduces the need to paste large code snippets into a separate chat. They can:

- Read the project graph, module dependencies, and build configuration.
- Trigger builds and read diagnostic output.
- Resolve symbols and navigate the codebase.
- Render Compose previews for visual checks without launching a full emulator session.
- Install and run APKs on the emulator or connected devices.
- Read and filter Logcat.
- Call Android skills for specialised workflows.

This combination lets the agent complete multi-step tasks that previously required constant context switching. Google notes that agents using related CLI preview features finished UI tasks 77 percent faster and used up to three times fewer tokens in internal tests, though those figures apply specifically to the CLI preview workflow.<grok type="render_inline_citation" citation_id="40" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Xaqf7kXi-Nw"
    title="Android Dev Summit 2026: Bring Your Own Agent in Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for daily use

Begin with small, well-scoped requests. Ask the agent to explain an existing class or propose a single-method refactor before requesting larger changes. Keep the built-in agent available as a fallback when your preferred provider is rate-limited or offline.

Review diffs carefully. Android Studio Rabbit 2 also adds AI Change Review, which can identify recommended fixes across agent changes, pending commits, or committed code. Use it to group related changes into logical walkthroughs instead of reading files alphabetically.<grok type="render_inline_citation" citation_id="61" />

Pair BYOA with Android skills for repeated tasks. Skills cover areas such as adaptive layouts for foldables and Googlebook devices, CameraX integration, and AGP upgrades. Invoke them with the @ symbol in the chat or manage them from the Skills tab in the agent panel. For CLI-based agent work outside the IDE, see our guide on [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

Enterprise teams can continue using Gemini Enterprise for stricter data controls, audit logging, and admin policies. BYOA does not replace those options; it adds choice for teams whose agreements favour Claude, Codex, or other providers.

## Conclusion

Android Studio Rabbit 2 makes Bring Your Own Agent production-ready. You can connect Claude Agent, Codex, Antigravity, or any of 40+ ACP agents, give them access to the emulator, builds, Logcat, and Android skills, and keep the built-in assistant available. Update to the stable channel, authenticate your preferred agent, and start with a small diagnostic prompt. The setup is short, the flexibility is immediate, and the workflow stays inside the IDE you already use.

Sources:
- Android Developers Blog: Your favorite agents are now integrated in Android Studio (28 Oct 2026)
- Android Developers Blog: Agentic and Flexible: A next era of Android development (28 Oct 2026)
- Android Studio release notes for Rabbit 2
