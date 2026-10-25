---
title: "How to Set Up Android Skills with CLI for AI Agents"
description: "Install Android CLI and add official skills so any AI agent follows current Android best practices for faster, higher-quality development."
pubDate: 2026-10-25T23:15:00
heroImage: "https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Android development moves fast. AI agents help write code, but they often rely on outdated training data. Official Android skills fix that by giving agents precise, up-to-date instructions drawn from developer.android.com.

The Android CLI makes it simple to discover, install, and manage these skills for any agent you use—Gemini in Android Studio, Claude, Codex, or others. This guide walks through the setup so your agents produce better Android code from the start.

## Why Android Skills Matter for Agents

Traditional docs describe concepts. Skills give agents actionable steps that match current best practices. They trigger automatically when your prompt matches the skill’s metadata, so you do not have to paste documentation every time.

Google maintains the skills in a public GitHub repository. Each skill is a SKILL.md file plus supporting resources. They cover areas where models commonly fall short, such as Navigation 3 migration, edge-to-edge UI, R8 configuration, and Play policy checks.

Skills follow the open agent skills standard, so they work with any tool that supports the format. You install them once through the CLI and they become available to every agent on your machine.

![Developer working with code on a laptop](https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=800&q=80)

## Install the Android CLI

The CLI is the recommended way to manage skills. It also handles other tasks such as building, deploying, and streaming to remote devices.

1. Download the Android CLI from the official Android Developers site.
2. Follow the installation instructions for your operating system. On macOS and Linux this is usually a simple script. On Windows use the provided installer.
3. Open a new terminal and confirm the tool is available:

```bash
android --version
```

4. Run the initialization command to install the base android-cli skill. This teaches agents that the CLI exists and how to use its commands:

```bash
android init
```

The init step places the skill in the locations your agents expect. You only need to run it once.

## List and Add Skills

With the CLI ready, you can browse and install skills.

List everything available:

```bash
android skills list
```

The output shows installed skills and those you can still add. To install a specific skill, use:

```bash
android skills add r8-analyzer
```

Replace `r8-analyzer` with the skill name you want. Common useful skills include:

- Navigation 3 setup and migration
- Edge-to-edge support
- AGP 9 and XML-to-Compose migrations
- R8 config analysis
- Wear OS Compose Material 3
- Play policy compliance audit

To install every official skill at once:

```bash
android skills add --all
```

You can scope installation to a single project with the `--project` flag:

```bash
android skills add wear-compose-m3 --project=.
```

Or target specific agents with `--agent`:

```bash
android skills add navigation-3 --agent=claude,gemini
```

Skills land in the correct directories for each agent (for example `~/.claude/skills` or the Gemini/Antigravity locations). Update them later with:

```bash
android skills update --all
```

![Hand holding a smartphone showing code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Use Skills with Your Agent

Once installed, skills activate automatically when your request matches their description. You can also mention them explicitly.

Open your preferred agent and ask something that requires the skill. Examples:

- “Migrate this screen to edge-to-edge using the official skill.”
- “Audit the R8 configuration for this project.”
- “Set up Navigation 3 for the new feature module.”

The agent reads the SKILL.md instructions and follows the current recommended pattern instead of older approaches. You can still review and adjust the output.

If you work inside Android Studio, the same skills are available through the Gemini agent mode. The CLI installation makes them usable outside Studio as well.

For deeper control, open the skill folder and read the SKILL.md file. It documents triggers, required inputs, and the exact steps the agent should take.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips

Start with two or three high-impact skills rather than installing everything at once. This keeps context windows smaller and responses faster.

Combine skills with the Android CLI’s other commands. After an agent generates code, use `android build` or device streaming commands to verify the result on a real device.

If an agent ignores a skill, check that the skill is installed in the correct agent directory and that your prompt clearly describes the task. Updating the skill often resolves version mismatches.

You can also browse the full catalog on the Android skills GitHub repository and the official overview page. Both list the latest additions and usage notes.

For related agent workflows, see our earlier guide on [Android CLI agent skills](/blog/android-cli-agent-skills/).

## Conclusion

Android skills turn general-purpose AI agents into specialized Android developers. The CLI removes the friction of manual installation and keeps the instructions current. Install the CLI, run `android init`, add the skills you need, and start prompting. Your agents will produce code that matches today’s platform guidelines instead of last year’s patterns.

## Sources

- Android Developers: Overview of Android skills
- Android Developers Blog: Device Streaming and Android skills available in Android CLI
- Android skills GitHub repository
- Android CLI command reference for skills
