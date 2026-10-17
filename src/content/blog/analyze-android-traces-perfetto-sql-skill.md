---
title: "How to Analyze Android Performance Traces with the Perfetto SQL Skill"
description: "Step-by-step guide to install the official Perfetto SQL skill via Android CLI and query traces with AI agents for jank, CPU, and memory."
pubDate: 2026-10-17T22:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools"]
noindex: false
---

A Perfetto trace file holds the full story of why a frame dropped or a startup stalled, but reading it by hand takes time. The official Perfetto SQL skill turns plain-English questions into valid queries that run against a local trace, so an AI agent can surface the numbers without you writing SQL from scratch.

Google ships the skill in the android/skills repository. Android CLI installs it for Gemini, Antigravity, Claude, Codex, or any other detected agent. Once it is present, you point the agent at a `.pftrace` file and ask about slices, threads, or memory. The skill follows PerfettoSQL rules so the queries stay correct and idempotent.

This guide covers the install path, a typical workflow, and the limits you should keep in mind. It builds on the broader Android CLI skills overview in our [Android CLI and skills for any agent](/blog/android-cli-skills-any-agent/) post.

## What the Perfetto SQL skill does

The skill translates a natural-language intent into syntactically valid PerfettoSQL and executes it against a trace file you already have on disk. It is meant for extracting slice timing, thread states, and memory data. Official documentation on developer.android.com lists it alongside the related perfetto-trace-analyzer skill.

PerfettoSQL is a dialect of SQLite with extra constructs for modules, functions, and macros. The skill enforces the important rules: always use `CREATE OR REPLACE` for Perfetto objects, join on `utid`/`upid` instead of recycled `tid`/`pid`, and prefer standard-library modules before writing raw joins. It also pulls in the Perfetto standard library reference so the agent does not invent table names.

The skill does not record the trace for you. You still capture one with `adb shell perfetto`, the Perfetto UI recorder, or Android Studio's System Trace. Once the file is local, the skill handles the query side.

![Developer looking at performance charts and code on multiple screens](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Install Android CLI and the skill

First confirm Android CLI is on your path. If it is missing, follow the official install steps on developer.android.com/tools/agents/android-cli. Then initialize the base environment:

```bash
android init
```

List available skills to confirm the name:

```bash
android skills list
```

Install the Perfetto SQL skill. The command from the Perfetto docs is:

```bash
android skills add perfetto-sql
```

You can target a specific agent or a project directory:

```bash
android skills add --agent=gemini perfetto-sql
android skills add --project=. perfetto-sql
```

If you also want the broader trace-analysis guidance, install the companion skill the same way:

```bash
android skills add perfetto-trace-analyzer
```

The CLI downloads the skill into the agent's skills directory (or the project's `.skills` folder when you pass `--project`). Later runs of the same command update it. For the full set of skills see our earlier guide on [installing Android skills for CLI agents](/blog/how-to-install-android-skills-cli-agents/).

## Capture a useful trace first

A skill cannot invent data that is not in the file. Record a short, focused trace that reproduces the problem:

1. Enable USB debugging and confirm `adb devices` sees the phone.
2. Start a light or normal Perfetto session. For most app work the System Trace in Android Studio or the `record_android_trace` script is enough.
3. Reproduce the jank, slow startup, or memory spike, then stop the recording.
4. Pull the `.pftrace` file to your machine.

Keep the trace under a few hundred megabytes when possible. Large files slow the trace processor. Name the file after the scenario and device so you can tell them apart later.

![Laptop screen showing code and system monitoring tools](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Ask the agent a concrete question

Open your agent (Gemini, Claude Code, Codex, etc.) in the directory that contains the skill and the trace file. Prompt with a specific request and the path to the file:

```
Using the Perfetto SQL skill, open startup.pftrace and list the top 10 slices by duration inside the com.example.myapp process. Show average and P90 duration in milliseconds.
```

The skill should:

- Load the trace with the official trace_processor wrapper.
- Prefer an `INCLUDE PERFETTO MODULE` from the standard library.
- Emit a valid query that joins on `utid`/`upid`.
- Return CSV results and explain what the numbers mean.

Follow up with narrower questions once you have the first result:

```
Which thread spent the most time in uninterruptible sleep during the jank window?
```

```
Show peak RSS and the processes that contributed to it around the 5-second mark.
```

Because the skill enforces idempotent `CREATE OR REPLACE` statements, you can re-run the same prompt without "already exists" errors. Review the generated SQL before you treat the answer as final; the agent can still misread a complex trace.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/peplbYt0Ohg"
    title="Introducing Android Performance Analyzer - The Next Evolution in Profiling for Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Name your prompts after the symptom. "Why is startup slow?" is weaker than "Which slices longer than 16 ms run on the main thread before the first frame?"

Keep a short note of the package name and the time window you care about. The skill can query `android_startups` to discover the package, but giving it explicitly saves a round trip.

Use the companion perfetto-trace-analyzer skill when you want guided domain workflows (CPU, memory, graphics). The SQL skill is better for ad-hoc questions once you already know the rough area.

Update the skill periodically:

```bash
android skills update perfetto-sql
```

Skills go stale when Android or Perfetto adds new modules. The official skill metadata shows a last-updated date of 2026-05-14; later Android CLI releases may ship newer versions.

If you are also profiling games or Vulkan frames, pair this workflow with Android Performance Analyzer. Our guide on [capturing a frame profile with APA](/blog/android-performance-analyzer-frame-profile/) covers the system-trace and frame-capture side.

## Limits to keep in mind

The skill only works on a local trace file. It does not replace adb or the Perfetto recorder. Emulators produce traces, but hardware-specific counters and thermal behavior only appear on real devices.

Very large traces can time out or exhaust memory on the trace processor. Trim the recording window or use Perfetto's filtering options before you hand the file to the agent.

The agent can still produce a plausible-looking query that answers the wrong question. Always open the generated SQL and spot-check a couple of rows against the Perfetto UI (ui.perfetto.dev) before you change production code.

## What to do next

Install the skill, capture one known-bad trace, and ask a single precise question. Compare the CSV output with the same view in the Perfetto UI. Once the numbers match, you can trust the skill for the next investigation and free yourself from writing the joins by hand.

Official references live on developer.android.com/tools/perfetto and the android/skills repository. The Android Developers video above shows the broader profiling surface that feeds these traces.

## Sources

- Android Developers: perfetto tool and Android skills section (developer.android.com/tools/perfetto)
- Overview of Android skills (developer.android.com/tools/agents/android-skills)
- Android CLI skills add command (developer.android.com/tools/agents/android-cli/commands/skills_add)
- Perfetto SQL skill description and guidelines (android/skills repository, profilers/perfetto-sql)
- Introducing Android Performance Analyzer (Android Developers, YouTube, 23 May 2026)
