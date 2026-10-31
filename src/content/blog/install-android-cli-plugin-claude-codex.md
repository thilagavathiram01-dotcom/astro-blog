---
title: "Install Android CLI Plugin for Claude and Codex"
description: "Step-by-step guide to install the official Android CLI plugin for Claude Code and Codex to improve agent-driven Android development."
pubDate: 2026-10-31T21:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools"]
noindex: false
---

Android developers now have official plugins that connect Claude Code and OpenAI Codex directly to Android CLI tools. These plugins add the android-cli skill so your agent can create projects, manage devices, inspect UI layouts, and search official documentation without leaving the terminal.

Google released the plugins alongside Android Studio Rabbit 2 at the Android Dev Summit on October 28, 2026. The setup takes a few commands and works with any project that already uses Android CLI.

## Why the plugin matters

Agents that only read code miss live device state, Compose previews, and Play quality checks. The official plugin gives Claude Code and Codex the same Android tools that Android Studio agents use. You stay in your preferred terminal workflow while the agent gains accurate platform knowledge.

You still need Android CLI installed first. The plugin simply teaches the agent how to call those commands reliably.

![Android developer working on a laptop with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Confirm you have these items before starting:

- Android CLI installed and available on your PATH. Run `android --version` to check.
- Claude Code or Codex set up with a valid account or API key.
- An Android project folder open in your terminal.

If Android CLI is missing, install it from the official page at developer.android.com/cli. The installer supports Linux, macOS, and Windows.

## Install the plugin in Claude Code

Open a Claude Code session inside your project directory, then run these two commands in order:

```
/plugin marketplace add android/android-cli-plugin
/plugin install android-cli@android-cli-plugin
```

You can also run the same steps from a regular terminal:

```
claude plugin marketplace add android/android-cli-plugin
claude plugin install android-cli@android-cli-plugin
```

After installation, restart the Claude session or start a new one. The agent should now recognize Android-related tasks and load the skill automatically.

## Install the plugin in Codex

Codex uses a slightly different command sequence. From your terminal run:

```
codex plugin marketplace add android/android-cli-plugin
codex plugin add android-cli@android-cli-plugin
```

Note the second command uses `add` rather than `install`. Once complete, start a new Codex session in your Android project. The skill becomes available for device, layout, and documentation tasks.

## Test the installation

Ask the agent a concrete Android question to confirm the plugin works. Try one of these prompts:

- "List available Android emulators and start the latest Pixel device."
- "Render the Compose preview for MainScreen.kt and describe any layout issues."
- "Search the Android Knowledge Base for the recommended way to implement edge-to-edge display."

A successful response will call Android CLI commands and return real output from your environment rather than generic advice.

![Close-up of hands typing code on a laptop keyboard](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Common tasks the plugin enables

With the skill active, agents handle these workflows more accurately:

- Creating a new Android project with the correct Gradle and Compose setup.
- Starting or stopping emulators and connecting to physical devices.
- Inspecting the current UI hierarchy on a running app.
- Running Journeys for automated UI validation.
- Searching official Android documentation for the latest API guidance.

These capabilities reduce the number of follow-up corrections you need to make after the agent writes code.

## Tips for better results

Keep the plugin updated. When Google ships a new Android CLI release, re-run the install command to pull the latest skill definition.

Combine the plugin with official Android skills. After the plugin is installed, you can still add skills such as the Compose adaptive skill or the AGP upgrade skill through `android skills add`.

Work inside a clean project directory. The agent uses the current working directory to locate Gradle files and device configurations.

If the agent ignores the skill, explicitly mention "use the android-cli skill" in your first prompt of the session.

## Troubleshooting

If the marketplace add fails, confirm your internet connection and that the GitHub repository android/android-cli-plugin is reachable. The plugin is open source under Apache 2.0.

Permission errors usually mean Android CLI is not on the PATH for the agent process. Restart your terminal or IDE after installing CLI.

For Codex users, double-check the second command uses `add` and not `install`.

## Related reading

If you prefer working inside Android Studio, see our guide to Bring Your Own Agent in Android Studio Rabbit 2. That feature connects the same agents through the IDE rather than the terminal.

For deeper skill customization, read How to Use Android CLI and Official Skills With Any AI Agent.

## Conclusion

The official Android CLI plugins for Claude Code and Codex remove the biggest friction in agent-driven Android development: missing platform tools. A few terminal commands give your preferred agent accurate device control, layout inspection, and documentation search.

Install the plugin today, test it with a simple emulator command, and then move to more complex tasks such as adaptive layouts or performance profiling. The same workflow now works across terminal agents and Android Studio.

Sources:

- Android Developers: Agent plugins documentation (developer.android.com/tools/agents/android-cli/agent-plugins)
- Android Dev Summit 2026 keynote (YouTube)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
