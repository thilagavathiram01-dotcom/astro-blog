---
title: "How to Test Apps on Remote Devices with Android CLI"
description: "Reserve real Android devices with Android CLI, connect via ADB, deploy apps, and capture logs for agent-driven testing."
pubDate: 2026-10-12T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai-tools"]
noindex: false
---

Testing Android apps on physical hardware catches issues that emulators miss. Android CLI now lets you reserve remote physical devices from Google data centers and connect them over a secure ADB link, all from the terminal. Your AI coding agents can use the same path to deploy builds, inspect logs, and capture screenshots without a local phone.

This guide walks through the setup and typical workflow. It builds on the official Android Device Streaming feature that Android CLI exposed in early October 2026.

## What Android Device Streaming Does

Android Device Streaming gives access to real Pixel, Samsung, and other partner devices hosted in Google data centers. Once reserved, the device appears to `adb` as if it were plugged in over USB. You can install APKs, run tests, pull logs, and take screenshots. Google wipes the device after your session ends.

The feature has been available in Android Studio for some time. Android CLI now surfaces the same reservation and connection commands so agents and scripts can drive the process headlessly. Usage on a Firebase Spark plan includes free minutes each month; excess usage bills to the linked Google Cloud project.

![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Install the latest Android CLI. Sign in with a Google account that has access to a Cloud project where Device Streaming is enabled. Confirm your project appears when you list available projects. Have an Android app project ready so you can build a debug APK.

If you already use Android skills with agents, the `android-cli` skill covers the remote device commands. See our earlier guide on [using Android CLI skills with any agent](/blog/android-cli-skills-any-agent/) for the install steps.

## Step-by-Step: Reserve and Connect a Device

Start by authenticating:

```bash
android auth login
```

List Cloud projects that support streaming:

```bash
android device remote projects
```

Pick a project ID and list available device models:

```bash
android device remote models --project=YOUR_PROJECT_ID
```

Note a model codename and API level, such as `pixel_10_pro/36`. Create a reservation. By default the command connects the device to `adb` immediately:

```bash
android device remote create pixel_10_pro/36 --project=YOUR_PROJECT_ID
```

The output includes a reservation ID. Confirm the device shows up:

```bash
adb devices
```

You should see a serial that belongs to the remote device. If you passed `--connect=false`, run the connect subcommand with the reservation ID afterward.

## Deploy, Inspect, and Capture

Build your debug APK the usual way, then install and launch it with Android CLI or plain `adb`:

```bash
android run --apks=app/build/outputs/apk/debug/app-debug.apk
```

Pull a layout dump for an agent to read:

```bash
android layout --pretty
```

Capture a screenshot:

```bash
android screen capture --output=screen.png
```

Logs and traces work through standard `adb logcat` and `adb shell` once the connection is active. When you finish, disconnect and remove the reservation so the device returns to the pool:

```bash
android device remote disconnect RESERVATION_ID
android device remote remove RESERVATION_ID
```

![Smartphone lying on a desk next to a notebook](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Tips for Agent Workflows

Agents that already call `android` commands can add the remote device steps without new tooling. Instruct the agent to list models, pick one that matches the form factor you care about (phone, foldable, or tablet), reserve it, deploy, then run layout or screen commands. Because the connection is plain ADB, any tool that talks to `adb` works unchanged.

Keep sessions short. Free minutes are limited, and idle reservations still consume quota. Prefer the smallest device that exercises the behavior under test. For Wear OS or TV work, check the models list; availability varies by lab.

Pair the remote device flow with Android skills so the agent receives current guidance on Compose, security state, or Media3 while it interacts with the live device.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common Issues

If `android device remote projects` returns nothing, confirm Device Streaming is enabled on the Cloud project and that your account has the necessary roles. Authentication tokens expire; re-run `android auth login` if commands fail with permission errors. Connection drops can happen on long sessions; the CLI maintains a background process, so re-running connect usually restores the link.

Billing surprises are rare on Spark plans within the free allotment, but monitor the Cloud Billing console if you run many parallel reservations.

## Conclusion

Android CLI turns remote physical devices into ordinary ADB targets. Reserve a device, deploy your app, and let agents or scripts inspect the real UI and logs. The workflow removes the need for a drawer full of phones when you only need occasional hardware coverage.

Start with a short session on a Pixel model, confirm `adb devices` shows the remote serial, then expand to the form factors your users actually carry.

## Sources

- [Device Streaming and Android skills - available in Android CLI](https://developer.android.com/blog/posts/android-cli-device-streaming-and-skills)
- [android device remote command reference](https://developer.android.com/tools/agents/android-cli/commands/device_remote)
- [Android Device Streaming overview](https://developer.android.com/studio/run/android-device-streaming)
