---
title: "How to Install Android CLI 1.0 and Create Projects"
description: "Step-by-step guide to install the stable Android CLI 1.0, set it up for agents, and scaffold your first Android project from the terminal."
pubDate: 2026-10-17T18:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "ai-tools"]
noindex: false
---

Android CLI reached stable 1.0 at Google I/O 2026. It gives any AI agent or script a clean, programmatic way to set up the SDK, create projects, and manage devices without navigating Android Studio menus.

The tool reduces token use and speeds up setup compared with agents that only have generic terminal access. Google reports more than 70 percent fewer tokens and 3x faster completion on environment and project tasks in internal tests.

This guide covers installation on the major platforms, verification, agent setup, and creating a first project.

## Why Android CLI matters for agents and scripts

Agents perform better when they have a lightweight interface to the Android SDK and recommended templates. Android CLI supplies that interface. It also installs official Android skills that ground the agent in current best practices for Compose, architecture, and tooling.

You can use it from Claude Code, Codex, Antigravity, Gemini, or any other agent that can run terminal commands. The same binary works for CI pipelines and local scripts.

For deeper agent workflows, see our guide to [using Android CLI and official skills with any AI agent](/blog/android-cli-agent-skills/).

![Developer working at a terminal with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install Android CLI

Download and install the stable release from the official page. The fastest method uses a one-line curl installer that places the binary in your user path by default.

**Linux (x86_64 local install):**

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

**macOS Apple Silicon:**

```bash
curl -fsSL https://dl.google.com/android/cli/latest/darwin_arm64/install.sh | bash
```

**Windows:**

Open a command prompt and run:

```cmd
curl.exe -fsSL https://dl.google.com/android/cli/latest/windows_x86_64/install.cmd -o "%TEMP%\i.cmd" && "%TEMP%\i.cmd"
```

Package managers are also available: apt-get on Linux, Homebrew on macOS, and winget on Windows. For a system-wide install that requires elevated privileges, use the corresponding install_root script listed on the download page.

After installation, confirm the binary is on your path:

```bash
command -v android
# or on Windows: where android
```

## Verify and update

Check the installed version:

```bash
android -V
```

Pull the latest stable bits any time with:

```bash
android update
```

If you already had a preview build, this command brings you to 1.0 and beyond. Run `android info` to confirm the SDK path the CLI will use.

## Initialize for agents

Agents need the official android-cli skill so they know the correct commands and patterns. Initialize once in your working environment:

```bash
android init
```

This installs the base skill. List available skills with:

```bash
android skills list
```

Add a specific skill to a project with:

```bash
android skills add --skill=<skill-name>
```

The skills work across Android Studio, Antigravity, Claude, and other agents. Update them later with `android skills update --all`.

![Multiple screens showing development environments](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Create your first project

Scaffold a new app from an official template. The default template follows current recommended architecture:

```bash
android create empty-activity --name="My First App" --output=./my-first-app
```

The command creates a directory with the project files, Gradle configuration, and a basic Jetpack Compose activity. Open the folder in Android Studio or continue from the terminal.

To deploy and launch on a connected device or emulator:

```bash
cd my-first-app
android run
```

Manage the SDK components you need with:

```bash
android sdk install platforms;android-36
```

List installed and available packages with `android sdk list`. Create and start emulators with the `android emulator` family of commands (note that the emulator subcommand is currently disabled on Windows).

## Tips for daily use

- Create a `.androidrc` file in your home directory to set default flags such as `--sdk=<path>`. On Windows the file is `%USERPROFILE%\.androidrc`.
- Disable usage metrics with the `--no-metrics` flag if required by policy.
- Use `android help` or `android <command> -h` for full option lists.
- Pair the CLI with Android Studio for semantic analysis and Compose previews via the `android studio` commands once Studio is running.
- Keep the CLI updated; new skills and device-streaming features continue to land.

Known limitations at the 1.0 release include the disabled emulator command on Windows and no support for the PowerShell installer. Report issues through the Android issue tracker component linked from the official documentation.

## Conclusion

Android CLI 1.0 gives every agent and script a reliable path to the official Android toolchain. Install it with the curl one-liner, run `android init`, and create a project in one command. The same workflow scales from a local experiment to a CI pipeline.

Start with the install steps above, then explore the skills and device commands that match your next task.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qZLQVlLgTDU"
    title="What are Android skills and how to use them with AI tools?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Overview of Android CLI, Android Developers: https://developer.android.com/tools/agents/android-cli
- Download Android CLI, Android Developers: https://developer.android.com/tools/agents/android-cli/download
- Android CLI Now Stable 1.0, Android Developers Blog, May 2026: https://developer.android.com/blog/posts/android-cli-now-stable-1-accelerate-developing-for-android-using-any-agent
- Android CLI command reference, Android Developers.
