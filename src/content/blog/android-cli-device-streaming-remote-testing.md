---
title: "How to Use Android CLI Device Streaming for Remote Phone Testing"
description: "Step-by-step guide to set up Android CLI Device Streaming so AI agents can test your apps on real remote Android phones without local hardware."
pubDate: 2026-10-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Testing Android apps on real hardware catches issues that emulators miss. Android CLI now brings Android Device Streaming to the command line. Your AI agent can connect to physical phones in Google's cloud, deploy builds, pull logs, and capture screenshots without a local device farm.

This guide walks through the setup and a practical workflow. It builds on the Android CLI skills system. If you have not installed the CLI yet, start with our [guide to Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

![Laptop and smartphone on a desk for remote development](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## What Android Device Streaming Does in the CLI

Android Device Streaming lets you rent real Pixel and other devices for short sessions. The agent treats the remote phone as if it were connected over USB. It uses a secure ADB-over-SSL connection.

The CLI command is `android device remote`. Once connected, standard ADB tools work. You can install APKs, run instrumentation tests, stream logcat, and take screenshots. Sessions are billed by time and support multiple form factors, including phones and tablets.

Google documented this in the October 2026 Android Developers Blog post on Device Streaming and Android skills. The feature sits alongside the skills repository so agents follow current best practices while testing.

## Prerequisites

You need:

- Android CLI installed and on your PATH. Download it from the official Android Developers page.
- A Google account with billing enabled for Device Streaming.
- An AI agent that can call shell commands. This works with Antigravity, Claude Code, Codex, Gemini CLI, or any agent that supports tool use.
- Basic familiarity with ADB. The agent handles most of the details once the skill is loaded.

Run `android --version` to confirm the CLI is ready. Then run `android init` if you have not already installed the android-cli skill.

## Step-by-Step Setup

### 1. List Available Devices

Open a terminal and run:

```bash
android device remote list
```

The output shows available models, Android versions, and session prices. Choose a Pixel device that matches your target API level.

### 2. Start a Session

Start a session with a specific device:

```bash
android device remote start --model=pixel-10-pro
```

The command returns a serial number and a connection string. The agent can now treat this serial as a normal ADB device.

### 3. Verify the Connection

Check that ADB sees the device:

```bash
adb devices
```

You should see the remote serial listed as `device`. If the agent is driving the session, ask it to run the same check.

### 4. Deploy and Test

Build your app as usual, then install it:

```bash
./gradlew installDebug
```

Or let the agent handle the Gradle invocation. Once installed, the agent can launch activities, run UI tests, or exercise specific flows. Capture logs with:

```bash
adb logcat -d > session-logs.txt
```

Take a screenshot for visual checks:

```bash
adb exec-out screencap -p > screenshot.png
```

### 5. End the Session

When finished, stop the session to avoid extra charges:

```bash
android device remote stop
```

Confirm the device no longer appears in `adb devices`.

![Close-up of a smartphone screen during testing](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Pairing with Android Skills

Load relevant skills before the session. For performance work, install the Android profiler skill:

```bash
android skills add android-profiler --project=.
```

The agent can then query traces with natural language that maps to Perfetto SQL. For Play policy checks before submission, add the Play policy insights skill. These skills keep the agent's suggestions aligned with current Android guidance instead of outdated training data.

A typical agent prompt looks like this: "Connect to a Pixel 10 Pro via Device Streaming, install the debug build, exercise the checkout flow, and report any ANRs or permission issues." The skills supply the exact commands and validation steps.

## Tips for Reliable Remote Testing

- Start with short sessions. Confirm the connection and a simple install before longer test runs.
- Match the device API level to your target. Device Streaming offers current and recent Android versions.
- Use the Wear Compose Material 3 skill if you also test on watches. The same CLI workflow applies.
- Keep the agent in the loop for visual confirmation. Screenshots help catch layout issues that logs miss.
- Monitor session time. Set a reminder or let the agent stop the session automatically after tests finish.

## Limitations and Cost

Device Streaming is not free. Check current pricing in the Android Studio or CLI documentation before long runs. Some advanced features, such as certain sensors or carrier-specific behavior, may not be available on every remote device. Local hardware is still useful for final sign-off on high-risk flows.

The feature works best as a complement to local emulators and a small set of physical devices. Agents can cover the broad matrix while you focus on edge cases.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android CLI Device Streaming lets AI agents test on real phones without managing a local lab. Install the CLI, start a session, and pair it with official skills for accurate results. The workflow reduces the gap between code generation and hardware verification.

Try a short session on a Pixel model this week. Once the connection is reliable, expand to the form factors your users actually use.

## Sources

- Android Developers Blog: Device Streaming and Android skills (2 October 2026)
- Android CLI documentation: android device remote command
- Android Device Streaming overview on developer.android.com
- Official Android skills repository
