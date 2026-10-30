---
title: "How to Install Android CLI Plugins for Claude and Codex"
description: "Install the official Android CLI plugins in Claude Code and Codex to give agents Compose previews, device streaming, and leak analysis."
pubDate: 2026-10-30T19:00:00
heroImage: "https://images.unsplash.com/photo-1724166551426-77aa7328d053?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Android Dev Summit 2026 made Android CLI more useful for agents that live outside Android Studio. Google released official plugins for Claude Code and OpenAI Codex that add the `android-cli` skill. Your agent can now create projects, manage devices, render Compose previews, stream real hardware, and analyze memory leaks without switching windows.

This guide shows the exact install commands, what the plugins unlock, and how to use the newest subcommands. It assumes you already have Android CLI installed. If not, see our earlier guide on [Android CLI and agent skills](/blog/android-cli-agent-skills/).

## Why the plugins matter

Android CLI is a thin command-line layer over the Android SDK. The plugins teach Claude Code and Codex how to call it correctly instead of inventing `adb` or `sdkmanager` sequences. Google reported that agents finished UI tasks 77 percent faster and used up to three times fewer tokens when they could render Compose previews without launching an emulator.

The same pattern applies to memory leaks. The `android profiler leakcanary` command analyzes heap dumps on your computer rather than the device. Internal tests with Claude Opus 5.5 showed the process ran almost twice as fast and used about 25 percent fewer tokens.

![Multiple monitors displaying code in a modern workspace](https://images.unsplash.com/photo-1753715613457-63127ec40824?auto=format&fit=crop&w=800&q=80)

## Install the plugin in Claude Code

You need the Android CLI binary on your PATH first. Then, from a Claude Code session or your terminal:

```bash
claude plugin marketplace add android/android-cli-plugin
claude plugin install android-cli@android-cli-plugin
```

Alternatively, inside an active Claude Code chat:

```
/plugin marketplace add android/android-cli-plugin
/plugin install android-cli@android-cli-plugin
```

After installation the `android-cli` skill becomes available. The agent can discover and run `android` commands without extra prompting for basic tasks.

## Install the plugin in Codex

From your terminal:

```bash
codex plugin marketplace add android/android-cli-plugin
codex plugin add android-cli@android-cli-plugin
```

Note the second command uses `add` rather than `install`. Once the plugin is present, Codex gains the same skill and can invoke Android CLI tools.

Official plugin source lives at the [android/android-cli-plugin](https://github.com/android/android-cli-plugin) repository under Apache-2.0. The repo contains only the skill and marketplace metadata; you still install the CLI binary separately.

## What the plugins unlock

After the skill is loaded, your agent can use these capabilities directly:

- Scaffold projects with `android create`
- Manage virtual devices and run apps
- Render Jetpack Compose previews without an emulator
- Stream real devices from Firebase device lab
- Capture system traces with Perfetto
- Score app bundles for Play quality signals
- Run `android profiler leakcanary` for heap analysis on the host machine
- List, install, and update Android skills

Antigravity receives deeper UI integrations (inline Compose previews and a Device Hub). Claude Code and Codex receive the command surface today, with more visual features planned.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: render a Compose preview

1. Ensure the plugin is installed and the agent session is restarted if required.
2. Prompt the agent: “Render the Compose preview for the home screen without starting an emulator.”
3. The agent should call the preview command (exposed via the skill) and return the rendered image or layout data.
4. Iterate on the composable and re-render. Google’s testing showed this loop is substantially faster and cheaper than full emulator boots.

You can also ask the agent to list available remote devices and stream one for a quick manual check.

## Step-by-step: find and fix a memory leak

1. Reproduce the suspected leak in a debug build that includes LeakCanary (or let the Profiler inject it).
2. Prompt: “Use android profiler leakcanary to analyze the heap dump for this journey and suggest the fix.”
3. The command runs the analysis on your desktop. The agent receives the leak trace, explains the retaining reference, and proposes a code change.
4. Apply the change, re-run the journey, and confirm the leak is gone.

In the Android Dev Summit keynote demo, Claude Code processed six user journeys in parallel, found multiple leaks, fixed the reference chains, and verified the results—all with lower token cost when using the CLI command.

![Laptop screen showing colorful source code](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Tips for reliable results

- Run `android update` and `android init` after installing the CLI so the base skill is current.
- Prefer project-scoped skill installs (`--project`) when you work across multiple repositories.
- For CI, pass `--no-metrics` if your pipeline policy forbids telemetry.
- Combine the plugin with official Android skills (for example the adaptive layout or CameraX skills) so the agent follows current guidance rather than older training data.
- After an agent produces a large change, open the same project in Android Studio Rabbit 2 and run Change Review for a themed walkthrough of the diffs. See our [AI Change Review guide](/blog/android-studio-rabbit-2-ai-change-review-guide/) for the exact steps.

## Conclusion

The official Android CLI plugins turn Claude Code and Codex into competent Android agents without forcing you into a single IDE. Install the marketplace, add the plugin, and start prompting for previews, remote device tests, or leak analysis. The measured gains in speed and token use come from giving the agent the right tools instead of letting it guess Android’s moving parts.

Start with the two commands above, confirm `android --version` works, then give your agent a concrete task on a small sample project.

## Sources

- [Agent plugins documentation](https://developer.android.com/tools/agents/android-cli/agent-plugins)
- [Android CLI overview](https://developer.android.com/cli)
- [What’s new in Android developer tools and performance at Android Dev Summit](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [android/android-cli-plugin GitHub repository](https://github.com/android/android-cli-plugin)
- [The latest in Android dev tools from Android Dev Summit 2026 (YouTube)](https://www.youtube.com/watch?v=w-auFZP5gJo)
