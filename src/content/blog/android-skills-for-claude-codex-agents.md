---
title: "How to Install Android Skills for Claude and Codex"
description: "Step-by-step guide to install official Android skills via CLI for Claude, Codex, or any AI agent to follow Android best practices."
pubDate: 2026-10-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools", "ai"]
noindex: false
---

Android skills give any AI agent official guidance for building apps the right way. The Android CLI installs them into the directories that Claude, Codex, Antigravity, and other agents already check.

You no longer paste long prompts or hope the model remembers the latest Compose patterns. Skills load the current recommendations from developer.android.com automatically when the task matches.

This guide walks through the exact install steps from the Android Developers documentation and blog. It works for any agent that supports the open skills standard.

## What Android skills actually are

Skills are markdown instruction packs stored in a `.skills/` or `.agent/skills/` folder at your project root or in the agent's global config. Each pack contains a `SKILL.md` file with frontmatter and step-by-step guidance.

Google publishes the official set on GitHub under the android/skills repository. Topics include edge-to-edge layouts, Navigation 3, R8 analysis, Wear Compose, and more. The CLI handles discovery, download, and updates so you do not clone the repo by hand.

Skills activate when your prompt matches their description. You can also force one by naming it. The agent then follows the official pattern instead of inventing its own.

## Install the Android CLI first

Download the binary for your platform from the Android CLI page. On Linux or macOS you can use the one-line installer:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Adjust the path for macOS ARM or Windows. After installation, open a new terminal and confirm the command works:

```bash
android --version
```

Run the init command once so the CLI installs its own skill and detects your agents:

```bash
android init
```

This step places the android-cli skill where Gemini, Antigravity, Claude, and Codex can find it.

## Add skills for your agents

List everything that is available:

```bash
android skills list
```

Install a single skill into the current project:

```bash
android skills add edge-to-edge --project=.
```

To cover every detected agent at once, including Claude and Codex if they are installed:

```bash
android skills add --all
```

Target specific agents when you want a narrower install:

```bash
android skills add --agent=claude,codex navigation-3
```

If no agent directories exist yet, the CLI defaults to the Gemini and Antigravity location at `~/.gemini/antigravity/skills`. You can copy the resulting folders into Claude's or Codex's expected path if needed.

Update later with:

```bash
android skills update --all
```

## Use the skills in practice

Open your agent of choice and start a task that matches a skill. Example prompt:

"Create an edge-to-edge screen with a bottom navigation bar that respects system insets. Use the official edge-to-edge skill."

The agent should load the skill, apply the current WindowInsets and system bar handling, and avoid deprecated padding tricks. You can check the agent's context or logs to confirm the skill activated.

For Wear OS work the same pattern applies. Install the wear-compose skill and ask the agent to build a rotary-aware list. The skill supplies the exact Compose for Wear patterns that the base model may miss.

If you already use Android Studio, the same skills appear in the agent tool window once the CLI has installed them. No extra configuration is required beyond the initial `android init`.

## Tips for reliable results

Keep the CLI updated. Skills change when platform guidance changes. Run `android update` and then `android skills update --all` before a long coding session.

Place skills at the project root when the work is project-specific. Global installs are convenient for personal tools, but project-level folders travel with the code.

Review the generated code. Skills reduce outdated patterns, but they do not replace testing on a real device or emulator. Run the app and check insets, accessibility, and performance yourself.

Pair skills with the Android Knowledge Base that the CLI also exposes. The agent can look up official documentation mid-task when the skill points it there.

## Related reading

For the broader CLI workflow that includes device streaming, see our guide on [using Android CLI skills with any agent](/blog/android-cli-skills-any-agent/).

## Sources

- Overview of Android skills, Android Developers
- Android CLI documentation, Android Developers
- Device Streaming and Android skills, Android Developers Blog
- Android skills GitHub repository
- What are Android skills and how to use them with AI tools?, Android Developers on YouTube

![Android developer working on a laptop with phone nearby](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Coding setup with laptop and smartphone](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)
