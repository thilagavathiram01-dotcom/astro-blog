---
title: "How to Fix Memory Leaks with Android CLI and LeakCanary"
description: "Use Android CLI's LeakCanary integration to let agents capture, analyze, and fix memory leaks from the terminal without slowing your app."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Agents catch more leaks when they can run heap analysis on the host instead of the device. Android CLI now integrates LeakCanary so you (or your coding agent) can dump, analyze, and fix memory leaks from the terminal without slowing the app under test.

Google showed this at Android Dev Summit on October 28, 2026. In one demo, Claude Code received a list of user journeys, ran them in parallel on separate devices, used the new LeakCanary subcommand, followed reference chains, and confirmed the fixes by re-running the journeys.

## What the new command does

The subcommand is `android profiler leakcanary`. It analyzes heap dumps on your computer rather than on the device. This keeps the app responsive during testing and gives the agent cleaner data to work with. Internal tests with capable models showed nearly 2x faster completion and up to 25% lower token use compared with the same workflow without the CLI tool.

You still need LeakCanary in the app under test (or a debug build that can produce heap dumps). The CLI tool handles the analysis side.

![Developer analyzing Android app performance on multiple screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install and prepare Android CLI

1. Download the latest Android CLI from the official Android Developers site.
2. Confirm it is on your PATH by running `android --version`.
3. Open a terminal in the root of your Android project.
4. Ensure a device or emulator is connected and the app can be launched (or use device streaming if you prefer remote hardware).

If you already use Android skills with your agent, run `android skills list` and install the profiler-related skill if it is not present:

```
android skills add android-profiler
```

This gives the agent structured guidance for capturing and interpreting traces and heap data.

## Capture a heap dump and analyze leaks

Start the app and exercise the flows you want to check. Then capture a dump. The exact capture step can be done through the CLI profiler or by triggering a dump from the app/debug tools, after which the LeakCanary analysis runs on the host.

Typical agent prompt pattern:

- List the critical user journeys.
- Ask the agent to run each journey, capture the necessary heap data, and invoke `android profiler leakcanary`.
- Instruct it to follow the reference chains reported, propose code fixes (for example, unregistering a callback in `onDestroy` or clearing a static reference), apply the changes, and re-run the journeys to confirm the leak is gone.

Because analysis happens on the computer, the device stays responsive even while multiple journeys run in parallel.

## Pair it with production signals

The same CLI surface now includes `android signals` for Crashlytics and Android vitals data. You can list recent OOMs, Memory Limiter Kills, and ANRs, then pull associated heap dumps (when available) and feed them into the LeakCanary path. Crashlytics can deobfuscate dumps with your R8 mappings so the agent sees real class names.

This closes the loop from a field report to a verified local fix without leaving the terminal or agent session.

![Close-up of circuit board representing Android app performance analysis](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Tips for reliable results

- Prefer release-like builds with R8 enabled when you want production-accurate names; keep a debuggable variant for faster iteration.
- Run journeys on separate devices or emulators in parallel when the agent supports it. This mirrors the keynote demo and shortens wall-clock time.
- After the agent proposes a fix, always re-run the original journey and confirm the leak report is clean before committing.
- Combine with the Compose preview command (`android preview`) if the leak is UI-related so the agent can also verify visual changes without an emulator.
- Keep the official Android plugin installed for Claude Code or Codex if you work outside Android Studio. It surfaces the same CLI capabilities directly in the agent session.

If you already use Bring Your Own Agent inside Android Studio Rabbit 2, the same LeakCanary integration appears in the Profiler with a “Fix with AI” action. The CLI path is especially useful for headless or multi-device workflows.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/RrP7uWvCiSU"
    title="Give your agents access to tools and skills through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps

Start with one high-traffic journey that has shown elevated memory in Android vitals. Let the agent capture and analyze it with the new LeakCanary command, apply the fix, and confirm. Once the loop is reliable, expand to the rest of your critical paths.

For broader agent setup with Android skills and CLI, see our earlier guide on [using Android CLI and official skills with any AI agent](/blog/android-cli-skills-any-agent/).

**Sources**

- Android Developers Blog: What’s new in Android developer tools and performance at Android Dev Summit (28 Oct 2026)
- Android Dev Summit keynote and tools sessions (October 2026)
- Android CLI command reference (developer.android.com)
