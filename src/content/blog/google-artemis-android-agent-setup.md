---
title: "Set Up Google ARTEMIS for Android Agent Tests"
description: "Install Google ARTEMIS, connect a phone or emulator, and let Codex or Claude Code run Android UI tests through MCP."
pubDate: 2026-10-03T09:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai-tools"]
noindex: false
---

Google's open-source ARTEMIS project lets a coding assistant tap, type, and move between apps on a real Android phone or emulator. The [google/artemis](https://github.com/google/artemis) repository turns a plain-language instruction into a sequence of device actions, then returns screenshots and Logcat so you can review what happened.

That is useful when a login flow, a permission dialog, or a cross-app handoff is too awkward to script by hand. The project reports more than 99% task completion on Google Research's AndroidWorld benchmark, which covers more than 100 multi-step tasks across 20-plus apps. Treat that figure as the project's own result, not an independent audit.

If you already wire agents into apps with the AppFunctions API, ARTEMIS sits one layer lower: it drives the screen the way a tester would. The [AppFunctions agent guide](/blog/android-appfunctions-agents/) covers in-app actions. This guide covers device-level setup.

## What you need before the first run

ARTEMIS expects a host machine that can talk to Android Debug Bridge and a target that already has USB debugging on, or an emulator that ADB can see. The startup script looks for ADB, scrcpy, FFmpeg, and a Python environment managed by uv, then offers to install missing pieces.

Use a test phone or a dedicated emulator. The agent can open apps, enter text, and switch tasks. Do not point it at a personal device that holds banking apps, work accounts, or one-time codes.

The local console opens at `http://localhost:8000` after a successful launch. That page includes a device wizard, live screen mirroring, a prompt sandbox, and execution replays.

![Android phone on a desk next to a laptop used for app testing](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Install ARTEMIS on macOS or Linux

Clone the repository and run the launcher from the project root:

```bash
git clone https://github.com/google/artemis.git && cd artemis
./start.sh
```

The script installs toolchain pieces it can detect as missing, then asks whether to write MCP settings and the Artemis Mobile Testing Mindset rules file into supported editors. Supported targets listed in the README include Antigravity, Cursor, Claude Code, Codex, Windsurf, VS Code, Cline/Roo, and OpenClaw.

When the browser opens, confirm the device appears in the wizard. If it does not, run `adb devices` in another terminal. A phone in "unauthorized" state needs the on-screen RSA prompt accepted. An emulator must be fully booted before ARTEMIS can attach.

You can skip the web sandbox and send one task from the terminal:

```bash
uv run artemis run "Open Settings, find Battery and tell me current level" --profile flash
```

The Flash profile is the reactive observe-and-act loop. The project describes typical step time as 3 to 5 seconds, with asynchronous history summaries so the operator does not wait on a full transcript between taps.

## Install on Windows

PowerShell does not run scripts from the current directory unless you prefix them:

```powershell
git clone https://github.com/google/artemis.git
cd artemis
.\start.bat
```

Do not add a trailing backslash after `start.bat` in PowerShell. In Command Prompt, `start.bat` without the `.\` prefix is the documented form.

If the script cannot find platform-tools, install Android SDK platform-tools and confirm `adb` is on `PATH` before you retry. Wireless debugging works only after the device is already paired. The first connection is simpler over USB.

## Connect an IDE through MCP

ARTEMIS ships a native Model Context Protocol server. After the first launch, you can install or refresh that server without re-running the whole wizard:

```bash
uv run artemis mcp --install antigravity
uv run artemis mcp --install all
```

`uv run artemis init` is the interactive path if you want to choose clients one by one. To print a snippet instead of writing it, use `uv run artemis mcp --generate-config` with a client name such as `codex` or `antigravity`, then paste the result into that client's config.

Codex expects a block in `~/.codex/config.toml` that points `command` at the project virtualenv Python, sets `args` to `['-m', 'mcp_server']`, and sets `cwd` to the clone. Antigravity reads `~/.gemini/jetski/mcp_config.json`. The generated server entry exposes tools including `mobile_run_task`, `mobile_manage_task`, `mobile_get_device_state`, `mobile_inspect_trace`, and `mobile_diagnose`. Replace `/path/to/artemis` with the real clone path. A stale path is the most common reason the agent says the phone tool is missing.

If you want the `artemis` command available outside the repo, the README suggests `uv tool install -e .` once from the project root.

![Developer reviewing mobile interface layouts on a large monitor](https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80)

## Run a first cross-app task

Start with a read-only check so you can see the trace before the agent changes anything:

1. Connect the device and confirm it in the localhost wizard.
2. Ask for battery level, Android version, or the name of the foreground app.
3. Open the replay and check that each tap landed on the control you expected.
4. Only then ask for a write action, such as toggling a test setting.

A prompt the project uses as an IDE example is more ambitious: build the latest changes into an APK, install it, open the login screen with a test account, check for unexpected popups, and return screenshots of the final page. That only works if the assistant already knows how to build your app. Keep the build command in the prompt, and use a test account that you can revoke.

Targeting prefers element indices from the UI tree. When a custom canvas has no usable node, ARTEMIS falls back to coordinates and visual locating. Pro Exploration checks the target against the live tree and pixels before an individual action, and returns blocked actions to the operator so a later step can recover. That recovery loop is why long exploratory runs are supported, but it also means a wrong screen can still consume several steps before the agent backs out.

## How the Antigravity workflow is structured

The README describes a four-stage loop when Antigravity drives ARTEMIS over MCP. You describe the scenario and the metrics you care about. The assistant drafts a step plan. It then drives the device, navigates the UI, and can profile performance. The last stage is a structured report with findings, tables, and raw datasets.

You do not have to accept the plan blindly. Read it before the device run starts. Call out apps that must not be opened, and name the success check in plain language, such as "stop when the Battery screen shows a percentage."

The same MCP tools work from Claude Code, Codex, Windsurf, and the other listed clients. The phone does not know which editor sent the task. What changes is where the rules file and server entry live.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/B-wzYo7pXaA"
    title="Connect Model Context Protocol (MCP) servers to Android Studio to improve AI agent capabilities"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Android Studio has its own MCP host for Agent Mode. The video above shows that IDE path. ARTEMIS is a separate server you attach to an external assistant, then point at a device. You can use both: Studio for code edits, ARTEMIS for on-device checks the IDE agent cannot tap itself.

## Practical limits and safer defaults

Keep these constraints in the prompt and in the device setup:

- Disable accounts you do not want the agent to touch. A work profile or a secondary user is safer than your daily profile.
- Prefer an emulator for first runs. System images reset faster than a physical phone.
- Do not store production API keys in the app under test. The agent can open screens that display them.
- Watch the first replay. A 99% benchmark score does not mean your custom UI will be read correctly on the first try.
- Stop the local server when you unplug the phone. An idle MCP process can still see the next device you attach.

Flash mode favors speed. For a flaky animation or a permission sheet that appears late, give the task an explicit wait, such as "wait until the Allow button is visible, then tap it." Action bursts cover some transient controls without another model turn, but a late dialog can still be missed if the instruction assumes it is already on screen.

## What to do after the smoke test

Once battery level and a Settings navigation succeed, add one app you own. Ask the agent to install a debug build, open a single screen, and return a screenshot plus the last 50 Logcat lines. Compare that output with a manual run. If the trace matches, expand to a two-app flow, such as sharing a file from your app into the system picker.

ARTEMIS does not replace instrumentation tests. Espresso and Compose UI tests stay the right tool for stable, deterministic checks in CI. Use the agent path for flows that cross apps, depend on system UI, or change too often to keep a brittle script alive.

The repository is Apache-licensed and still moving. The README and MCP server notes are the source of truth for flags. Recheck `uv run artemis mcp --generate-config` after you pull, because client file paths can shift between updates.

## Sources

- [google/artemis README](https://github.com/google/artemis)
- [Android Developers: Add an MCP server in Android Studio](https://developer.android.com/studio/gemini/add-mcp-server)
- [Android Developers: Connect MCP servers to Android Studio](https://www.youtube.com/watch?v=B-wzYo7pXaA)
