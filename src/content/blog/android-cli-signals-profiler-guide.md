---
title: "How to Use Android CLI Signals and Profiler for Field Crashes"
description: "Learn how to query Firebase Crashlytics crashes, ANRs, and heap dumps with Android CLI signals, then capture system traces with the profiler."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Android CLI 1.1 added field crash signals from Firebase Crashlytics and a profiler that records system traces and heap dumps from the terminal. Agents and CI pipelines can now investigate production issues and capture performance data without opening Android Studio.

This guide shows the exact commands, workflows, and options from the official Android CLI docs.

## Install and set up Android CLI

Install the latest Android CLI with the curl installer for your platform. On Linux:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
```

Then update it:

```bash
android update
```

Run `android init` to install the android-cli skill so agents understand the available commands. Sign in for signals access:

```bash
android login
```

Use an account that has access to your Firebase projects. Configure a default Firebase app ID in `~/.androidrc` to avoid repeating `--firebase-app` on every command:

```
signals crashes --firebase-app=1:123456789012:android:0123456789abcdef
```

![Android developer working on a laptop with code](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Query field crashes with android signals

The `android signals` command queries Crashlytics for crashes, ANRs, non-fatal issues, and low-memory heap dumps.

Start by listing accessible apps:

```bash
android signals context
```

List recent issues:

```bash
android signals crashes list --firebase-app=YOUR_APP_ID --type=crash --sort-by=users --limit=10
```

The output shows issue clusters with user and event counts. Copy the Issue ID (prefixed with `firebase/`) for deeper inspection.

Describe one issue to get the stack trace, API level distribution, and a sample event:

```bash
android signals crashes describe firebase/ISSUE_ID --include=stack
```

Break down events by version, API level, or device:

```bash
android signals crashes facets app-version device --timeframe=7d
```

For memory issues tagged `[OOM]` or `[MLK]`, list and download heap dumps:

```bash
android signals heaps list
android signals heaps download firebase/HEAP_ID --output=heaps
```

The downloaded files are Perfetto traces you can open in the Perfetto UI or Android Studio.

Filter options include `--timeframe=24h|7d|30d|60d|90d`, `--type=crash|anr|non-fatal`, `--app-version`, `--device`, and `--api-level`. Use `--format=json` when feeding results to agents or scripts.

## Capture system traces with the profiler

The `android profiler systemtrace` command records CPU scheduling, thread slices, frame lifecycle, GPU counters, and Vulkan timing into a Perfetto trace.

Typical workflow for app startup:

```bash
android profiler systemtrace start --package=com.example.app --launch --output=startup.perfetto-trace
# Wait for the startup to finish or interact
android profiler systemtrace stop
```

For an already-running app or a specific interaction:

```bash
android profiler systemtrace prepare --package=com.example.app
# Launch and navigate yourself
android profiler systemtrace start --output=interaction.perfetto-trace
# Perform the action
android profiler systemtrace stop
```

Each recording runs in a profiling session. If a session gets stuck, terminate it:

```bash
android profiler session terminate
```

You can keep the session open across multiple segments with `--keep-session` on stop, then terminate when finished.

Capture a JVM heap dump of a running (debuggable) process on API 29+:

```bash
android profiler heapdump capture --process=com.example.app --output=dump.hprof
```

Add `--gc` to run garbage collection first.

![Developer analyzing performance traces on screen](https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80)

## Agent-ready tips

Agents work best when you give them concrete Issue IDs and filter values from `facets`. Pipe JSON output into your agent and ask it to summarize the top crashes by device and version.

Combine signals with the profiler: after identifying a crash that correlates with a specific screen, reproduce it on a device and capture a system trace of the same path.

For CI, store the Firebase app ID in secrets and run signals queries on every release build to catch new issues early. The `--format=json` flag makes this straightforward.

See the related guide on [Android CLI agent skills](/blog/android-cli-agent-skills/) for setting up agents with the full CLI skill set, and the [device streaming guide](/blog/android-cli-device-streaming-how-to/) if you need remote physical devices for traces.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Android CLI signals and profiler turn field telemetry and local performance capture into terminal commands that agents and scripts can run. Start with `android signals context` and `android signals crashes list`, then describe the highest-impact issues. Use `android profiler systemtrace start/stop` to capture the exact moments that matter.

All commands and options above come from the official Android CLI documentation. Update the CLI regularly with `android update` as new signals and profiler features land.

## Sources

- [Android CLI signals overview](https://developer.android.com/tools/agents/android-cli/commands/signals)
- [Android CLI profiler systemtrace](https://developer.android.com/tools/agents/android-cli/commands/profiler_systemtrace)
- [Android CLI crashes list](https://developer.android.com/tools/agents/android-cli/commands/signals_crashes_list)
- [Android CLI download and install](https://developer.android.com/tools/agents/android-cli/download)
- [Android Dev Summit 2026 tools session](https://www.youtube.com/watch?v=w-auFZP5gJo)
