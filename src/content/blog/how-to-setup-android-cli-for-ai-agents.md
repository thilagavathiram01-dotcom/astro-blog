---
title: "How to Set Up Android CLI for AI Agent Workflows"
description: "Install Android CLI and connect it to AI agents for faster builds, testing, and inspections on Android projects. Step-by-step setup guide."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer"]
noindex: false
---

Android agents now handle more of the day-to-day work on real projects. They write code, run builds, and inspect results. The missing piece is a reliable way for those agents to talk to the Android toolchain without inventing commands. Android CLI fills that gap.

It exposes project creation, device control, install, and inspection commands that agents can call the same way a developer would. You install it once, initialize a skill so the agent understands the commands, and then hand off tasks that used to require switching between Studio, the terminal, and adb.

![Developer working on Android code at a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Android CLI Gives Agents

Android CLI is a command-line interface that wraps Android Studio's code intelligence and platform tools. Agents can create new projects, manage SDK packages, build and install APKs, run Journeys (natural-language tests), and inspect layouts or logs.

The tool ships with skills—Markdown files that teach the agent how to use specific workflows. Google publishes skills for security audits, profiler use, Compose migration, and more. Once installed, an agent can follow those patterns instead of guessing.

You can use it from any terminal or from agents that support shell access, including Google Antigravity, Gemini in Android Studio, and third-party agents that can run commands. Projects created or modified with the CLI open cleanly in Android Studio later.

## Install Android CLI

Download the installer for your operating system from the official page. The fastest method is a curl command that installs for the current user (no elevated privileges required).

On Linux x86-64:
```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

On macOS with Apple silicon:
```bash
curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
```

On Windows, download the .cmd installer or use the curl equivalent listed on the download page. After installation, open a new terminal and confirm the command is available:
```bash
android --version
```

Update to the latest release at any time with:
```bash
android update
```

Package managers are also supported. On Windows you can run `winget install -e --id Google.AndroidCLI`. On macOS, Homebrew formulas are available. Check the download page for the current commands.

## Initialize Skills for Your Agent

The CLI includes a base skill that teaches agents the core commands. Run this once in any directory where you want the skill available:
```bash
android init
```

This installs the android-cli skill. To see every available skill:
```bash
android skills list
```

Add a specific skill (for example, the security audit skill) with:
```bash
android skills add --skill=audit-play-policy
```

Or install every skill at once:
```bash
android skills add all
```

If you use Google Antigravity, you can also enable the Android CLI plugin from Settings > Customizations > Build With Google Plugins. That gives the agent direct access without extra terminal setup.

## Run Everyday Tasks with an Agent

Once the skill is present, give the agent a clear goal and let it call the CLI. Common patterns include:

**Create a new project.** Ask the agent to run:
```bash
android create empty-activity --name=MyApp
```
The command scaffolds a Compose-ready project with the correct Gradle setup.

**Build and install.** Point the agent at a connected device or emulator:
```bash
android install :app
```
This builds the default debug variant and installs it with incremental optimizations. You can target a specific device with the `--device` flag.

**Run a Journey.** Journeys are natural-language test scripts. The agent can generate or execute one:
```bash
android journeys run --device=emulator-5554 path/to/journey.md
```

**Inspect and fix.** Agents can pull logs, capture screenshots via device streaming, or run the profiler skill to diagnose memory or startup issues. The CLI routes those requests through the same tools Studio uses, so results match what you would see in the IDE.

For longer tasks, keep the agent in a supervised loop: let it propose the next command, review the output, and approve the following step. This prevents large unintended changes while still saving time on repetitive work.

![Code editor open next to an Android phone on a desk](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for Reliable Results

Start with a clean project or a well-tested branch. Agents perform better when the existing code follows standard structure (Compose, Kotlin, Gradle Kotlin DSL).

Give the agent the skill files as context. Many agents automatically read SKILL.md files in the project or in a designated skills directory. If yours does not, paste the relevant skill content into the conversation.

Use device streaming when you lack physical hardware. The CLI can spin up remote devices, deploy builds, and capture screenshots without a local emulator running.

Keep the CLI updated. New skills and command improvements land regularly. Run `android update` before starting a long agent session.

If an agent produces a failing build, ask it to run `android` help on the failing command or to inspect the Gradle output. The skill files include guidance for common error patterns.

## Connect It to Your Existing Workflow

Android CLI does not replace Android Studio. It accelerates the parts of the workflow that agents can handle safely. Open the same project in Studio for visual editing, layout previews, and debugging. Changes made by the agent appear immediately.

If you already use AppFunctions or Gemini in Android Studio, the CLI complements those tools. Agents can call AppFunctions from the CLI for on-device testing, and the same skills improve both the terminal and the IDE agent experience. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) for the companion setup.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9RXkKneSgYk"
    title="Build high-quality Android apps with AI agents and Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android CLI turns the Android toolchain into something agents can use reliably. Install it with a single curl command, run `android init` to load the skills, and start handing off build, install, and inspection tasks. The same projects open in Android Studio, so you keep full control while the agent handles the repetitive steps.

Start with a small project, confirm the agent can install and launch it, then expand to security audits or Journey tests. Official documentation and the skill files stay current as the tools evolve.

## Sources

- Android CLI overview and download: https://developer.android.com/tools/agents/android-cli
- Android CLI download page: https://developer.android.com/tools/agents/android-cli/download
- Agent tools and resources: https://developer.android.com/tools/agents
- Android CLI Now Stable 1.0 (Android Developers Blog): https://developer.android.com/blog/posts/android-cli-now-stable-1-accelerate-developing-for-android-using-any-agent
