---
title: "How to Use Android Skills and Android CLI with AI Agents"
description: "A practical guide to Google's Android skills and stable Android CLI so coding agents can follow official Android best practices, run tools, and test UI flows."
pubDate: 2026-09-16
tags: ["android", "ai-tools", "tutorials"]
---

Coding agents are now part of everyday Android work. The problem is not that models can write Kotlin. The problem is that they often invent APIs, skip Gradle conventions, or miss Compose patterns that Google actually recommends.

Google's answer is a pair of official pieces: **Android skills** (modular instruction files that ground an agent in Android workflows) and **Android CLI** (a stable command-line toolset agents can call). Used together, they turn a generic coding assistant into something closer to a junior Android engineer that follows current guidance.

This guide explains what they are, why they matter, and how to start using them without changing your whole toolchain.

## What Android skills actually are

[Android skills](https://github.com/android/skills) are markdown files that follow the open **agent skills** format. Each skill has a `SKILL.md` that describes a task, constraints, and the official pattern the model should follow.

Google maintains them in the public `android/skills` repository. The stated goal is not to dump all of developer.android.com into a prompt. It is to cover workflows where evaluations show large language models underperform: Gradle and AGP upgrades, CameraX, Compose layouts, identity APIs, on-device AI, and similar specialized work.

Skills are meant to be loaded by an agent when the task matches. That keeps the context window focused instead of stuffing every Android rule into every prompt.

Android Studio also supports **Agent Skills**: you can add project-level skills so the in-IDE agent follows your architecture, libraries, and review rules.

## What Android CLI adds

[Android CLI is now stable](https://developer.android.com/blog/posts/17-things-to-know-for-android-developers-at-google-i-o). It exposes programmatic tools so an agent—Claude Code, Codex, Google Antigravity, or another CLI-first agent—can do real Android work instead of guessing from file contents.

Official highlights include:

- Core Android tasks that agents can run without a human clicking through Android Studio
- A bridge into Android Studio capabilities, including semantic symbol resolution and file analysis for warnings
- Rendering Jetpack Compose previews from the command line
- Official support for **Journeys** through Android skills, so an agent can run end-to-end UI tests you define

That last point is the practical win. An agent that can only edit files still ships broken UI. An agent that can compile, inspect warnings, render a Compose preview, and run a Journey is much closer to a usable review loop.

## Why this pairing beats a generic prompt

A typical prompt such as "add CameraX preview following best practices" still leaves the model free to mix old `Camera` APIs with current CameraX, or to invent Compose modifiers.

Skills constrain the path:

- Use the current recommended library and package names
- Follow the documented lifecycle and permission flow
- Prefer Compose-first UI guidance (Views are in maintenance mode in Google's 2026 guidance)
- Stop when the official pattern does not cover the request, instead of inventing APIs

CLI then verifies the change. The agent is no longer only a text generator. It can fail a build or a Journey and try again.

## How to set this up

Exact install commands change with agent plugins. Treat the following as a workflow, then follow the current README in `android/skills` and the Android CLI install notes for your agent.

### 1. Pick one agent and keep it CLI-capable

Use an agent that can run shell commands in your project directory. Android CLI is designed for that class of tools, not for a chat box that can only paste snippets.

Good fits include agents that already live in the terminal or in Android Studio Agent Mode.

### 2. Install Android CLI for that agent

Install the official Android CLI and confirm the agent can invoke it. Google has documented install paths for agents such as Google Antigravity 2.0. After install, ask the agent to list available Android CLI commands before you trust it with a large refactor.

### 3. Add the official Android skills

Clone or vendor the skills you need from [github.com/android/skills](https://github.com/android/skills). The repo is organized by domain, including:

- `devtools/android-cli`
- `jetpack-compose`
- `device-ai`
- `build-system/agp`
- `camera/camerax`
- `identity`

Do not dump every skill into every session. Point the agent at the skill that matches the task. That is how the format is designed to work.

### 4. Add a thin project skill of your own

Create a small project skill that states facts the official skills cannot know:

- Module structure (`:app`, feature modules)
- Minimum SDK and compile SDK you actually use
- Compose BOM version policy
- Whether you use Navigation 3, Hilt, or another stack
- What "done" means (unit tests, screenshot test, Journey, or Play internal track)

Keep it short. A skill that repeats the entire style guide will be ignored under context pressure.

### 5. Give the agent a closed loop

A reliable loop looks like this:

1. Load the matching official skill plus your project skill.
2. Ask for a small, testable change.
3. Let the agent build with Android CLI.
4. Ask it to render the relevant Compose preview if UI changed.
5. Run a Journey or existing UI test for the flow.
6. Review the diff yourself before merge.

If step 3 or 5 fails, tell the agent to fix from the log rather than rewriting from scratch.

## A concrete example: adding an on-device AI feature

Suppose you want a screen that summarizes pasted text on-device.

A grounded workflow:

1. Load the `device-ai` skill from the official repo, plus Google's current [AI on Android](https://developer.android.com/ai) guidance.
2. Prefer official surfaces such as ML Kit GenAI APIs or the AICore developer preview for Gemini Nano work, instead of shipping a random third-party model file.
3. Keep inference on-device when the task is extraction or short summarization and privacy matters. Google has documented Gemini Nano 4 preview work for those tasks.
4. Use Android CLI to compile the feature module and render the Compose screen.
5. Write a Journey that pastes sample text and checks that the summary field is populated.

That is different from asking a model to "add AI summarization." The skill and docs decide the API family. The CLI decides whether the change actually runs.

## What this does not replace

Skills and CLI do not remove review. Models still hallucinate version numbers and permission rationale text. They also cannot decide product questions such as whether a feature should run on-device or in Firebase AI Logic's hybrid inference path.

Treat official skills as the default playbook, Android CLI as the hands, and yourself as the release owner.

Also treat preview APIs as preview APIs. AppFunctions (Android MCP), Gemini Nano 4 preview, and some Studio agent features are useful to learn now, but they are not a promise that every device and Play policy path is ready for production.

## Practical tips that save time

- **One task per session.** "Upgrade AGP and rewrite the home screen and add AppFunctions" will blow past skill context.
- **Prefer official samples next to skills.** Google points to samples such as the AppFunctions sample when a skill is not enough.
- **Watch Android Bench if you switch models.** Android Bench is Google's LLM leaderboard for Android development challenges. Use it to compare assistants, not as a marketing score.
- **Keep Studio in the loop for ship work.** Google still positions Android Studio for advanced debugging, testing, and UI polish after a prototype is generated elsewhere (including Google AI Studio's Android path).

## Conclusion

Android development is no longer only an IDE activity. Official **Android skills** tell an agent how Google wants a workflow done. Stable **Android CLI** lets that agent compile, inspect, preview, and test instead of stopping at a markdown patch.

If you only do one thing after reading this: install Android CLI for the agent you already use, add the one official skill that matches your next ticket, and require a green build before you read the diff. That single loop is more useful than another generic "write better Kotlin" prompt.

## Sources

- [17 Things to know for Android developers at Google I/O](https://developer.android.com/blog/posts/17-things-to-know-for-android-developers-at-google-i-o) — Android Developers' Blog (19 May 2026)
- [Android skills repository](https://github.com/android/skills)
- [AI on Android](https://developer.android.com/ai) — Android Developers documentation
- [Top AI on Android updates from Google I/O 2026](https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html)
- [Android Studio I/O Edition: What's new in Android Developer tools](https://android-developers.googleblog.com/2026/05/whats-new-android-developer-tools.html)
