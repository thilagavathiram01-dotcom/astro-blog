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

Update Android CLI:

```bash
android update
android version
```

Confirm you see 1.1.16919734 or later.

Your app must depend on Compose Runtime Tracing 1.13 or newer. With the November 2026 BOM:

```kotlin
implementation(platform("androidx.compose:compose-bom:2026.11.01"))
implementation("androidx.compose.runtime:runtime-tracing")
```

The device or emulator needs API 29 or higher. The app does not have to be debuggable.

Connect the device with `adb` or start an emulator.

## Capture a composition trace

Composition tracing records a slice for every composable function that runs. It adds little overhead and is suitable for performance measurement.

Start a fixed-duration trace that launches the app:

```bash
android profiler systemtrace start \
  --package=com.example.app \
  --launch \
  --enable=compose.composition \
  --duration=5 \
  --wait \
  --output=compose-startup.zip
```

The command writes a ZIP that contains the system trace plus Compose data. Open the ZIP in Android Studio’s profiler or extract the `.perfetto-trace` and load it at [ui.perfetto.dev](https://ui.perfetto.dev).

For an already-running app, drop `--launch` and interact while the trace runs.

You can also use `--enable=compose` as a shorthand that turns on composition tracing.

![Developer terminal showing code and performance output](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Capture a recomposition trace

Recomposition tracing adds the state reads and writes that cause each recomposition. It records the state’s string representation and the stack trace of the write. This shows exactly which mutable state changed and which line of code changed it.

Because of the extra data, overhead is higher. Use it to debug why a composable recomposes, not to measure frame times.

```bash
android profiler systemtrace start \
  --package=com.example.app \
  --enable=compose.recomposition \
  --duration=8 \
  --wait \
  --output=recompose.zip
```

`--enable=compose.recomposition` also turns on composition tracing.

After the ZIP is written, open it in the Android Studio profiler. Selecting a state-write event shows the call stack and a flow arrow to the recomposition it triggered.

You can manage long-running sessions with:

```bash
android profiler session list
android profiler session status
android profiler session terminate
```

## Read the results

In Perfetto or Android Studio:

- Look for slices named after your composable functions under the composition track.
- In a recomposition trace, expand state-read and state-write events to see the exact value and source line.
- Correlate the Compose slices with frame timelines and thread activity to see whether a recomposition caused a dropped frame.

Double-clicking a composable slice in Android Studio jumps to the source.

If the CLI drops the Compose options with a warning, the app is missing the `runtime-tracing` 1.13 dependency or is running an older pre-release.

## Tips

- Prefer short recordings. Long traces with recomposition data grow quickly.
- Use composition tracing for benchmarks and recomposition tracing only when you need the “why”.
- Combine with the existing profiler workflow described in our [Android CLI systemtrace and heapdump guide](/blog/android-cli-profiler-systemtrace-heapdump/).
- For agent-driven debugging, script the start/stop commands and feed the resulting ZIP to analysis tools.
- Disable recomposition tracing when you switch back to measuring performance.

## Conclusion

Android CLI’s November 2026 update turns Compose composition and recomposition tracing into a terminal command. You can now capture the same data that the Android Studio profiler shows, without leaving the command line or an agent session. Add the `runtime-tracing` dependency, pass the new `--enable` flags, and inspect the ZIP in Perfetto or Studio.

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
