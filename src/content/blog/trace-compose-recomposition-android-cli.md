---
title: "Trace Compose Recomposition with Android CLI"
description: "Step-by-step guide to capture Jetpack Compose composition and recomposition traces using the Android CLI profiler systemtrace command."
pubDate: 2026-11-27T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Jetpack Compose 1.13 and Android CLI version 1.1.16919734 (November 2026) make it straightforward to record what composables run and why they recompose. The `android profiler systemtrace` command now accepts flags that inject Compose slices into a Perfetto trace without opening Android Studio.

This helps when you need to diagnose jank, unexpected recompositions, or startup latency from the terminal or an AI agent. The same workflow pairs with existing system-trace capture.

## Prerequisites

Update Android CLI to the November 2026 release:

```bash
android update
android version
```

Confirm the output shows 1.1.16919734 or a later build. Older versions lack the Compose enable flags.

Your app module must include Compose Runtime Tracing at 1.13 or higher. When you already use the November 2026 Compose BOM:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
implementation("androidx.compose.runtime:runtime-tracing")
```

The BOM manages the exact version. The device or emulator must run API 29 or higher. The app itself does not need to be marked debuggable for these traces.

Connect a physical device with USB debugging or start an emulator. Verify the connection with `adb devices` before you begin.

## Capture a composition trace

Composition tracing records a named slice for every composable function that executes. The overhead stays low because it only adds the slices that Compose already instruments. This makes the feature suitable for measuring startup, scroll, or animation performance.

Start a fixed-duration trace that also launches the app:

```bash
android profiler systemtrace start \
  --package=com.example.app \
  --launch \
  --enable=compose.composition \
  --duration=5 \
  --wait \
  --output=compose-startup.zip
```

The CLI writes a ZIP archive that holds both the system trace and the Compose-specific data. Open the ZIP directly in Android Studio’s profiler. Alternatively, extract the `.perfetto-trace` file and load it at [ui.perfetto.dev](https://ui.perfetto.dev).

If the app is already running, omit the `--launch` flag and interact with the UI while the recording is active. You can also pass `--enable=compose` as a shorter alias that turns on composition tracing.

The resulting trace shows each composable on the timeline. Zoom in on a frame that dropped and check which functions ran longer than expected.

![Developer terminal showing code and performance output](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Capture a recomposition trace

Recomposition tracing adds the state reads and writes that trigger each recomposition. For every relevant read or write it records the state’s string representation and the full stack trace of the change. This lets you see exactly which `MutableState` or derived value changed and on which line of code.

The extra metadata raises overhead, so keep recordings short. Use this mode when you need to understand why a particular composable keeps recomposing, not when you are measuring absolute frame times.

```bash
android profiler systemtrace start \
  --package=com.example.app \
  --enable=compose.recomposition \
  --duration=8 \
  --wait \
  --output=recompose.zip
```

Passing `--enable=compose.recomposition` automatically enables composition tracing as well.

After the command finishes, open the ZIP in the Android Studio profiler. Click a state-write event to reveal its call stack. A flow arrow points from that write to the recomposition it caused, making the causal link visible at a glance.

You can also start an interactive session without a fixed duration:

```bash
android profiler systemtrace start --package=com.example.app --enable=compose.recomposition --output=interactive.zip
# Interact with the app
android profiler systemtrace stop
```

Manage any background profiling sessions with the session subcommands:

```bash
android profiler session list
android profiler session status
android profiler session terminate
```

## Read the results

In Perfetto or Android Studio’s profiler:

- Look for slices named after your composable functions under the composition track.
- In a recomposition trace, expand state-read and state-write events to see the exact value and the source line.
- Correlate the Compose slices with the frame timeline and thread activity to determine whether a recomposition contributed to a dropped frame.

Double-clicking a composable slice inside Android Studio jumps straight to the corresponding source file. If the CLI prints a warning and drops the Compose options, the app is missing the `runtime-tracing` 1.13 dependency or is still on an earlier pre-release.

![Code editor and terminal on a developer desk](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Common pitfalls

A few issues appear often when people first try the feature. The most frequent is forgetting the runtime-tracing dependency. Without it the CLI silently ignores the `--enable` flags. Another is recording for too long with recomposition tracing enabled; the resulting file becomes large and slow to open. Finally, some developers expect the traces to appear in the default system-trace presets. They do not; you must pass the Compose flags explicitly.

If you previously captured traces with the older manual broadcast method or the Python helper script, the CLI approach replaces that workflow for most day-to-day debugging. The official documentation still describes the script for environments that cannot run Android CLI.

## Tips

- Prefer short recordings. Long traces that include recomposition data grow quickly and are harder to navigate.
- Use composition tracing for benchmarks and recomposition tracing only when you need the “why”.
- Combine with the existing profiler workflow described in our [Android CLI systemtrace and heapdump guide](/blog/android-cli-profiler-systemtrace-heapdump/).
- For agent-driven debugging, script the start/stop commands and feed the resulting ZIP to analysis tools or the Android Studio profiler.
- Disable recomposition tracing when you switch back to measuring performance so the numbers stay representative.
- On API levels below 29 the Compose options are unavailable; confirm the device version first.

## Conclusion

Android CLI’s November 2026 update turns Compose composition and recomposition tracing into a simple terminal command. You can now capture the same data that the Android Studio profiler shows, without leaving the command line or an agent session. Add the `runtime-tracing` dependency, pass the new `--enable` flags, and inspect the ZIP in Perfetto or Studio. The workflow fits cleanly into existing system-trace practices and gives both humans and agents a direct view of what Compose is doing.

## Sources

- [Android CLI release notes](https://developer.android.com/tools/agents/android-cli/release-notes)
- [android profiler systemtrace](https://developer.android.com/tools/agents/android-cli/commands/profiler)
- [Composition tracing](https://developer.android.com/develop/ui/compose/tooling/tracing)
- [What’s new in Jetpack Compose November ’26](https://developer.android.com/blog/posts/jetpack-compose-november-2026-release)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/t5ujT_o8qj0"
    title="Outperform yourself in Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
