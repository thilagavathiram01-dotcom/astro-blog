---
title: "How to Query Crashlytics Issues with Android CLI Signals"
description: "Step-by-step guide to the new android signals command in Android CLI 1.1 for listing, filtering, and analyzing Firebase Crashlytics crashes, ANRs, and heap dumps from the terminal."
pubDate: 2026-10-25T15:30:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "firebase"]
noindex: false
---

Android CLI 1.1 added field crash signals so you can query Firebase Crashlytics data without leaving the terminal. After signing in, you list projects, filter issues, and download heap dumps for out-of-memory events. This works alongside any agent that already uses Android CLI for builds and device commands.

The feature arrived in version 1.1.16717390 (October 2026). It pulls crash, ANR, and non-fatal issues plus associated metadata, custom keys, and logs. Heap dumps collected on low-memory events are also available. Official details appear in the Android CLI release notes and the CLI skill documentation.

![Android developer working at a terminal with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Install or update Android CLI to 1.1 or later. On Linux the quick path is:

```bash
curl -fsSL https://dl.google.com/android/cli/latest/linux_x86_64/install.sh | bash
android update
```

Other platforms use the matching install script or package managers listed on the Android CLI download page. Confirm the version with `android --version`.

You need a Google account that can access the Firebase project containing your app’s Crashlytics data. Sign in once:

```bash
android login
```

Follow the browser prompt. The credentials stay local for subsequent commands.

Your app must already report to Crashlytics. If you have not set that up, follow the standard Firebase Crashlytics Android guide first.

## List accessible projects and apps

Start with context so you know which projects and apps the account can reach:

```bash
android signals context
```

The output shows project names, app identifiers, and platforms. Note the exact project and app identifiers you need for later filters. This step confirms authentication and permissions before you query issues.

## List and filter crash issues

The main command group is `android signals crashes`. List recent issues:

```bash
android signals crashes list
```

Add filters for severity, time range, or specific apps. Common options include limiting to fatal crashes or ANRs. Use the help text for exact flags:

```bash
android signals crashes --help
android signals crashes list --help
```

Describe a single issue for the full stack trace, custom keys, and logs:

```bash
android signals crashes describe ISSUE_ID
```

Replace `ISSUE_ID` with the identifier from the list output. Facets break the data down by device, OS version, or custom attributes when available. Samples show individual event details.

Agents that already run Android CLI can call the same commands to inspect field stability while they modify code. See our earlier guide on [setting up Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

## Download heap dumps

Crashlytics collects heap dumps on out-of-memory crashes and memory-limiter kills. List them:

```bash
android signals heaps list
```

Describe one for metadata and session context:

```bash
android signals heaps describe HEAP_ID
```

Download the dump to your machine for local analysis in Android Studio or other tools:

```bash
android signals heaps download HEAP_ID --output ./heap-dumps/
```

The files include the heap dump plus the custom keys and logs from the session that produced them. This is useful when memory issues only appear in the field.

![Analytics dashboard showing charts and metrics](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Practical workflow

1. Sign in and run `android signals context` to confirm access.
2. List crashes with filters for the last 7 days or a specific app version.
3. Describe the highest-impact issue and note the stack trace and device details.
4. If the issue involves memory, download the associated heap dump.
5. Reproduce locally or open the stack in Android Studio, then re-query after a fix ships.

Combine this with the existing `android profiler` commands for local traces and heap dumps on a connected device. The signals data shows what users actually hit; the profiler shows what happens under controlled conditions.

## Tips for reliable results

- Re-authenticate if commands return permission errors: `android login`.
- Use `--format=json` where supported for scripting or agent consumption.
- Filter early. Large projects can return hundreds of issues; time-range and severity filters keep output usable.
- Heap dumps can be large. Download only the ones tied to the issues you are investigating.
- Keep the CLI updated. Later releases may add more facets or export options.

## Video walkthrough

The Android Developers channel covers the broader CLI surface, including skills and agent workflows that pair well with signals:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The `android signals` commands move Crashlytics triage into the same terminal workflow used for builds, device streaming, and agent tasks. Sign in, list context, filter issues, and pull heap dumps when memory problems appear in the field. The data stays current because it comes directly from the Crashlytics backend you already use.

Start with `android signals context` on your next session and work through one recent crash end to end. The release notes and CLI skill page contain the full command reference if you need additional flags.

## Sources

- Android CLI release notes (version 1.1.16717390, October 2026): https://developer.android.com/tools/agents/android-cli/release-notes
- Android CLI Specialist skill documentation: https://developer.android.com/agents/skills/devtools/android-cli/skill
- Firebase Crashlytics Android get-started guide: https://firebase.google.com/docs/crashlytics/android/get-started
