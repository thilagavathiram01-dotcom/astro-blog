---
title: "How to Set Up Android CLI and Official Skills for Any AI Agent"
description: "Step-by-step guide to install Android CLI 1.0, add official Android skills, and ground Claude Code, Codex, Gemini, or Antigravity in current Android best practices."
pubDate: 2026-10-18T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "how-to", "developer"]
noindex: false
---

Android CLI 1.0 and the official Android skills repository give AI coding agents current guidance from developer.android.com instead of relying on training cutoffs. Skills cover specialized areas such as R8 configuration, edge-to-edge UI, CameraX migration, Wear OS Compose, and Play policy audits. This guide shows how to install the CLI, initialize skills, and attach them so Claude Code, Codex, Gemini, Antigravity, or another supported agent follows recommended Android patterns.

You need the Android SDK available on your machine and an AI agent that supports skills or can execute terminal commands. Android CLI works on macOS, Linux, and Windows. The skills themselves are environment-agnostic.

![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Install Android CLI

Download and install the latest Android CLI from the official page. On macOS with Apple silicon, run:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
```

Linux users use the corresponding linux_x86_64 or linux_arm64 installer. Windows supports winget:

```powershell
winget install -e --id Google.AndroidCLI
```

After installation, confirm the binary is on your path:

```bash
android --version
```

Update to the newest release whenever you start a session:

```bash
android update
```

The CLI also installs via Homebrew or apt on supported systems. A user-local install avoids elevated privileges.

## Initialize skills for your agents

Run the init command once. It detects installed agents under your home directory and drops the base android-cli skill into each one:

```bash
android init
```

This equips the agent with knowledge of Android CLI commands so it can create projects, manage the SDK, launch emulators, and run builds without guessing flag names. If no agents are detected, skills default to the Gemini/Antigravity location at `~/.gemini/antigravity/skills`.

## List and add official skills

See every available skill and short descriptions:

```bash
android skills list --long
```

Install one skill for every detected agent:

```bash
android skills add edge-to-edge
```

Target a specific agent with the `--agent` flag:

```bash
android skills add --agent=claude,codex r8-analyzer
```

Install the full catalog at once:

```bash
android skills add --all
```

Place skills inside a single project instead of the global profile:

```bash
android skills add wear-compose-m3 --project=.
```

Update later with:

```bash
android skills update --all
```

or a single skill name. The CLI re-downloads the latest SKILL.md content from the official repository.

![Close-up of an Android smartphone on a surface](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## What the skills provide

Each skill is a SKILL.md file plus supporting resources. The agent loads it when your prompt matches the skill metadata, so you do not manually paste documentation every time. Current examples include:

- Audit Play policy compliance for manifests, permissions, and privacy disclosures.
- R8 configuration analysis to catch optimization issues.
- CameraX migration from older Camera1 or Camera2 code.
- Wear OS Compose Material 3 patterns for round viewports and rotary input.
- Android Intent security checks.
- Profiler and Perfetto SQL guidance for traces.

Google evaluates the skills. They target areas where models previously struggled, such as framework migrations and platform-specific constraints. The official repository lives on GitHub under apache-2.0.

## Use the skills in an agent session

Open your agent in the project directory that contains the skills (or rely on the global install). Prompt with a concrete task. The matching skill activates automatically.

Example prompt for Claude Code or Codex:

"Migrate this screen to edge-to-edge and apply the correct WindowInsets. Follow the official edge-to-edge skill."

The agent receives the current guidance, sample patterns, and constraints. You still review the generated code. Skills reduce token waste and outdated suggestions, but they do not replace compilation and testing.

For remote physical-device testing, pair the skills with Android Device Streaming in the CLI. See our guide on [reserving remote Android devices from the terminal](/blog/android-cli-device-streaming-remote-phones/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for reliable results

Keep the CLI and skills updated before long agent sessions. Outdated skills miss recent API changes. Install only the skills relevant to your current work to keep the context window lean. Run `android skills list --agent=your-agent` to confirm what is active.

Prefer project-scoped skills (`--project`) when a repository has specific architecture rules. Global skills work well for common patterns across many projects. After the agent writes code, build and run on an emulator or device. Skills improve the first draft; they do not eliminate the need to verify behavior.

Android CLI also supports creating projects from official templates, managing the SDK, and driving the emulator. Combine those commands with skills for a tighter loop.

## Conclusion

Android CLI 1.0 plus the official skills repository lets any supported AI agent follow current Android guidance without constant manual prompting. Install the CLI, run `android init`, add the skills you need, and prompt with concrete tasks. The result is faster setup, fewer outdated suggestions, and code that stays closer to recommended patterns for Compose, performance, security, and form-factor work.

Sources:
- [Android Developers Blog: Device Streaming and Android skills](https://android-developers.googleblog.com/2026/10/android-cli-device-streaming-and-skills.html)
- [Android CLI documentation](https://developer.android.com/tools/agents/android-cli)
- [Android skills overview](https://developer.android.com/tools/agents/android-skills)
- [Official skills repository](https://github.com/android/skills)
