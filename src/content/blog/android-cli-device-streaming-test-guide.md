---
title: "How to Test Android Apps on Real Devices with CLI"
description: "Use Android CLI Device Streaming to test apps on real Pixel and partner devices from the terminal. Step-by-step for developers and agents."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Testing Android apps on real hardware catches issues that emulators miss. Android Device Streaming, powered by Firebase, now works directly from the Android CLI. Your coding agent can reserve a Pixel or partner device, deploy a build, and collect logs without leaving the terminal.

This guide shows the exact commands from the official Android Developers documentation.

## Why Device Streaming matters for agents

Emulators are fast for early iteration. Real devices expose hardware-specific bugs, different GPU drivers, and actual thermal behavior. Android CLI brings remote physical devices into the same ADB session your agent already uses.

Google’s October 2026 Android Developers Blog post confirms agents can spin up devices, deploy builds, collect logs and traces, and capture screenshots through the terminal via a secure ADB-over-SSL connection.

![Android developer workspace with laptop and phone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need the Android CLI installed. On Linux or macOS run:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Sign in with a Google account that has access to a Google Cloud project with Device Streaming enabled. Free monthly minutes are available on the Spark plan; additional usage is billed according to Firebase pricing.

Link your project or set the project ID when you create reservations.

## Step-by-step: Reserve and connect a device

1. List available Google Cloud projects:

```bash
android device remote projects
```

2. List available remote device models:

```bash
android device remote models
```

Look for codenames such as recent Pixel models or partner devices from Samsung, Xiaomi, and others.

3. Create a reservation and connect it:

```bash
android device remote create <codename>/<api>
```

The device appears in `adb devices` as if it were plugged in over USB. If you used `--connect=false`, run `android device remote connect <reservation-id>` afterward.

4. Deploy and test:

```bash
adb install app-debug.apk
adb shell am start -n com.example/.MainActivity
```

Your agent can now take screenshots, pull logcat, or run UI tests against the real device.

## Using Device Hub for visual inspection

For interactive control, launch the desktop mirror:

```bash
android device hub
```

It streams the display, accepts touch and keyboard input, and works with both local emulators and remote devices. On first run the CLI downloads the device-hub extension automatically.

![Coding on a laptop with code visible](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for agent workflows

Instruct your agent to run `android device remote models` first so it chooses a relevant device. Combine this with Android skills (installed via `android skills add`) so the agent follows official testing and adaptive-layout guidance.

Clean up when finished:

```bash
android device remote list
android device remote remove <reservation-id>
```

Extend a reservation if a long test suite is still running.

## Limitations and costs

Device Streaming is currently free within monthly Spark-plan minutes. Check the Firebase console for current quotas. Not every OEM device is available in every region. Remote devices require an active internet connection and a signed-in Google account.

For on-device AI agents inside your app, see our guide to the [ML Kit Agentic API](/blog/how-to-build-on-device-agents-with-ml-kit-agentic-api/).

## Conclusion

Android CLI Device Streaming removes the hardware bottleneck for both human developers and coding agents. Reserve a real device, connect it over ADB, and verify your app under realistic conditions—all from the terminal.

Start with `android device remote models` and pick the device that matches your next release target.

## Sources

- [Android Developers Blog: Device Streaming and Android skills - available in Android CLI](https://developer.android.com/blog/posts/android-cli-device-streaming-and-skills)
- [Android Device Streaming documentation](https://developer.android.com/studio/run/android-device-streaming)
- [android device remote command reference](https://developer.android.com/tools/agents/android-cli/commands/device_remote)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gQswwgjX6n8"
    title="Test on real hardware through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
