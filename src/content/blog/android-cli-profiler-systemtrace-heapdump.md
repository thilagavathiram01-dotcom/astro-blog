---
title: "Profile Android Apps with CLI Systemtrace and Heapdump"
description: "Step-by-step guide to using Android CLI profiler for system traces and JVM heap dumps on connected devices without Android Studio."
pubDate: 2026-11-09T18:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to"]
noindex: false
---

Android CLI 1.1 adds a dedicated profiler command that captures system traces and JVM heap dumps from a connected device or emulator. You can record Perfetto traces for CPU scheduling, frame lifecycle, and GPU activity, or snapshot the Java heap, all from the terminal.

This fits agent workflows and CI pipelines where launching Android Studio is unnecessary. The same device that runs your app can feed traces back to your machine for analysis in the Perfetto UI or Memory Profiler.

## Prerequisites

Install Android CLI 1.1 or later. Confirm with:

```bash
android version
```

Connect a physical device or start an emulator. The app under test must be debuggable for heap dumps (API 29+), or the device must run a userdebug/eng build. System traces work on any recent Android version.

## Capture a system trace

The `android profiler systemtrace` command records a Perfetto trace. A typical session starts a recording, lets you interact with the app, then stops and pulls the file.

Start a trace that launches the app:

```bash
android profiler systemtrace start --package=com.example.app --launch --output=startup.perfetto-trace
# Wait for the startup to finish or interact with the app
android profiler systemtrace stop
```

For an already-running app, omit `--launch`:

```bash
android profiler systemtrace start --package=com.example.app --output=interaction.perfetto-trace
# Perform the action you want to measure
android profiler systemtrace stop
```

You can prepare the device first so navigation happens outside the recording window:

```bash
android profiler systemtrace prepare --package=com.example.app
# Launch and navigate manually
android profiler systemtrace start --output=target.perfetto-trace
# Interact
android profiler systemtrace stop
```

The output is a `.perfetto-trace` file. Open it at [ui.perfetto.dev](https://ui.perfetto.dev) to inspect threads, frames, and GPU counters.

![Developer analyzing performance traces on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Manage profiling sessions

Each recording runs inside a session managed by a background daemon. List active sessions:

```bash
android profiler session list
```

If a session hangs, terminate it and restore the device:

```bash
android profiler session terminate
```

You can keep a session alive across multiple segments with `--keep-session` on stop, then start another recording in the same session. Finish with `android profiler session terminate` when done.

## Capture a JVM heap dump

The `android profiler heapdump capture` command takes a snapshot of the Java heap as an `.hprof` file. It requires API 29 or higher and a debuggable app.

```bash
android profiler heapdump capture --process=com.example.app --output=dump.hprof
```

Force a garbage collection first to exclude unreachable objects:

```bash
android profiler heapdump capture --process=com.example.app --gc --output=dump.hprof
```

Open the `.hprof` in Android Studio’s Memory Profiler or convert it for other tools. This pairs well with field heap dumps retrieved via `android signals heaps` when investigating out-of-memory crashes reported in Crashlytics. See the [Crashlytics signals guide](/blog/query-crashlytics-android-cli-signals/) for listing and downloading those remote dumps.

![Code and terminal on a developer desk](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for reliable traces

- Use `--duration=10 --wait` for fixed-length traces that finish automatically.
- Omit `--package` for a system-wide trace when diagnosing interactions between apps.
- Check `android profiler session status` if a recording seems stalled.
- Prefer short recordings; long traces grow large and slow analysis.
- For agent workflows, script the start/stop sequence and feed the resulting Perfetto file to analysis tools.

## Conclusion

Android CLI’s profiler brings system tracing and heap dumps to the terminal. Agents and scripts can now capture the same data that Android Studio profilers produce, without opening the IDE. Combine these commands with existing `android signals` tools to move from field crash reports to local reproduction traces in one workflow.

## Sources

- [Android CLI release notes](https://developer.android.com/tools/agents/android-cli/release-notes)
- [android profiler systemtrace](https://developer.android.com/tools/agents/android-cli/commands/profiler_systemtrace)
- [android profiler heapdump](https://developer.android.com/tools/agents/android-cli/commands/profiler_heapdump)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
