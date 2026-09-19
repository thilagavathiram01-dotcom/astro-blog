---
title: "How to Read Android Bench 2.0 and Pick an AI Coding Agent"
description: "Use Google's Android Bench 2.0 long-horizon leaderboard to choose a model and agent for multi-day Android work: pass rate vs completion rate, task types, and what still needs a human review."
pubDate: 2026-09-19
tags: ["ai-tools", "android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&h=740&q=80"
---

Android Bench 2.0 is Google's public leaderboard for how well large language models and coding agents handle real Android work. The 17 September 2026 update adds **long-horizon tasks** (LHTs): jobs that can take an engineer several days or a week, not a one-file bug fix.

The headline number is harsh on purpose. The best **pass rate** on those long tasks is about **28%**. On the older, smaller task set, top models still sit near **91%**. If you pick a coding assistant from a generic leaderboard, you will overestimate what it can finish without you.

This guide explains how to read the board, match a model to the kind of work you actually have, and keep a human review where the benchmark shows models stall.

## What Android Bench 2.0 measures

The first Android Bench release scored models on incremental edits in public GitHub Android repos: breaking API changes, wearable networking, Compose migrations, and similar scoped jobs. Tests decided pass or fail.

Version 2.0 keeps that set and adds a second layer:

- **30 long-horizon tasks** in four streams
- **Agent evaluation**, not only a raw model in a thin harness
- **Continuous scoring** (completion rate) instead of only binary pass/fail
- Cost and latency on the model card

Google aligned the harness with the [Harbor](https://android-developers.googleblog.com/2026/07/android-bench-llm-measurement.html) framework: each run starts in a fresh container so leftover build state does not leak between attempts.

Official methodology lives at [developer.android.com/bench/methodology/2](https://developer.android.com/bench/methodology/2). The live board is [d.android.com/bench](https://developer.android.com/bench).

![Developer workstation with dual monitors showing code and an Android emulator](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=700&q=80)

## The four long-horizon streams

Google published the 2.0 task mix. Use it as a map, not as trivia.

| Stream | Tasks | What it looks like | Typical size |
| --- | --- | --- | --- |
| App creation | 9 | Build a multi-screen app (the private “Food Vibes” food-delivery mock) from design mocks | 1,200–5,500 lines, 20–70 files |
| Migrations | 13 | Retrofit → Ktor, RxJava → Coroutines, Hilt → Koin, Navigation 2 → Navigation 3 | 200–8,200 lines, 5–294 files |
| New features | 6 | PiP, Wear companion sync, home-screen widgets, CameraX in an existing app | 400–2,200 lines, 4–60 files |
| App conversions | 2 | Flutter or React Native → native Compose | Full UI, navigation, persistence |

That last stream is the weakest result on the board. No model has a 100% pass on a full conversion. Frontier models top out around an **80% completion rate**.

## Watch how Google talks about AI on Android

This official I/O 2026 session is the right context before you treat any single score as a hiring decision for your stack:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI — Google I/O 2026" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## How to read pass rate vs completion rate

Binary scoring hid useful work. An agent can migrate 40 screens to Compose, wire a database, and miss one edge-case assertion. Under pass/fail that run is 0%. Under 2.0 it still reports a high **completion rate**.

Google scores completion from functionality, visual fidelity, and regressions, then applies penalties when the run ignores instructions or structural constraints.

Practical reading:

- **Pass rate** answers: “Can I leave this overnight and expect a mergeable PR?”
- **Completion rate** answers: “How much of the job is done before I take over?”
- **Confidence interval** on the card tells you whether a 4-point gap is noise.
- **Average cost and latency** tell you whether a slightly higher score is worth the bill.

On the 17 September 2026 long-horizon board, Google lists these closed-weight pairings among others (pass rate / avg completion / avg hours / avg cost for the published LHT run):

- **GPT-6 Astra** on Codex — **28.0%** pass, **82.2%** completion, 7.9 h, $375.7
- **Claude Fable 5** on Claude Code — **22.7%** pass, **82.4%** completion, 22.2 h, $492.6
- **GPT-5.6 Sol** on Codex — **19.3%** pass, **74.3%** completion, 8.6 h, $235.8
- **Claude Opus 5** on Claude Code — **16.7%** pass, **77.8%** completion, 27.0 h, $861.4
- **Qwen3.8 Max** on Qwen Coder — **14.0%** pass, **74.3%** completion, 47.2 h, $260.2

Those dollar and hour figures are **benchmark-run averages published by Google**, not your personal invoice. Use them to compare relative cost, then measure your own repo.

On the older 100-task set (still on the same site), Claude Opus 5, Claude Fable 5, and GPT-5.6 Sol sit around **91% / 91% / 91%**. That board is useful for “fix this failing test.” It is not useful for “port this Flutter app.”

## What the LHT results imply for your week

Google's own write-up is more useful than the ranking row:

- Models are **stronger at writing new code** than at refactoring existing architecture.
- Deterministic transformations hold up even at large scale: Java → Kotlin, Retrofit → Ktor, adding a ViewModel layer across 125+ files and 8,000+ lines.
- They **break** on runtime graphs (missing DI), unreleased libraries, and breaking framework changes.
- Cross-platform ports stall on the last 10–20%: dark theme, a secondary screen, rotation state, a widget that never refreshes.

Methodology examples of “looks done, fails review”:

- Now in Android news widget: `observeLatestNews().first()` called outside `provideContent`, so the widget never updates.
- Video playback: player not released off-screen and keeps playing.
- Signal profile Compose migration: state not hoisted; rotation wipes input.
- Bitwarden Navigation 3: 200+ files and tests green, missing exit transitions.

Plan the human pass around those failure modes. Do not ask the agent to “finish the PR.” Ask it to stop at a checklist you own.

![Android phone and laptop on a desk during an app review](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=700&q=80)

## Step-by-step: choose a model for this sprint

### 1. Name the work in Bench language

Write one sentence that matches a stream:

- “Add a home-screen widget to the existing news module.” → **New features**
- “Move networking from Retrofit to Ktor across all modules.” → **Migrations**
- “Greenfield Compose app from Figma.” → **App creation**
- “Replace the Flutter shop with a native app.” → **App conversions** (budget a senior review; do not expect a clean pass)

### 2. Open the official leaderboard

1. Go to [developer.android.com/bench](https://developer.android.com/bench).
2. Stay on the **long-horizon** view for multi-day work.
3. Filter by agent if you already standardized on Codex, Claude Code, Antigravity, Qwen Coder, or Kimi Code.
4. Click the **model card**. Read pass rate, completion rate, cost, and the written pitfalls—not only the rank.

Google currently pairs models with the provider agent (GPT-5.6 Sol on Codex, Gemini 3.8 Flash on Antigravity). Mixed pairings are planned, not fully published.

### 3. Match the agent you will actually run

A score for Claude Code is not a score for the same weights inside a generic chat box. Prompt caching and compact tool windows change token use. If your team lives in Android Studio Agent Mode or Android CLI, treat Bench as a prior, then run one representative task in *your* harness.

### 4. Run a canary on your repo

Pick a task that is smaller than production but the same *kind*:

1. Branch from `main`.
2. Give the agent the same constraints Bench cares about: target SDK, Compose, tests that must stay green.
3. Cap the run (time or dollar budget).
4. Review against the failure list above: lifecycle, configuration change, theming, navigation transitions, background playback.

If completion looks high and tests are green, still walk the UI. That is exactly where 2.0 says models plateau.

### 5. Keep the older board for small diffs

For a one-module bug or a localized API bump, use the original task scores. Paying GPT-6 Astra prices for a 20-line fix is not what the 28% LHT leader is for.

## Agent pairing and Studio in the same week

This shorter official clip is a reminder that Google still treats Studio, CLI, and skills as the place you *apply* a model, not as a replacement for reading Bench:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qZLQVlLgTDU" title="What are Android skills and how to use them with AI tools?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Use Bench to shortlist. Use [Android CLI and official skills](https://developer.android.com/) (and your existing Studio agent settings) to execute. Use code review for the last 15%.

## Limits you should not paper over

- **Contamination controls** exist (Harbor isolation, unpublished app mocks such as Food Vibes), but any public benchmark can still leak over time. Recheck the dated board; the snapshot above is **17 September 2026**.
- **Gemini 3.8 Flash** appears on the new-model list. Do not invent a Flash LHT pass rate unless you click the live card—the published *top* LHT pass rate is Astra at 28%.
- Community tasks go through [github.com/android-bench/community-dataset](https://github.com/android-bench/community-dataset). Your private monolith is not in the set.
- Cost columns are full-benchmark averages, not per-PR quotes.

## Conclusion

Android Bench 2.0 is useful because it stopped pretending multi-day Android work is a unit test. A 28% pass rate with an 82% completion rate means: let the agent draft the migration or the new module, then spend your time on lifecycle, theming, and the screen nobody remembered.

Open the [official leaderboard](https://developer.android.com/bench), pick the stream that matches this sprint, and keep the human review where Google's own methodology says models stall.

## Sources

- [Android Bench 2.0: Pushing the frontier with challenging long-horizon tasks](https://android-developers.googleblog.com/2026/09/android-bench-2-long-horizon-tasks.html) — Android Developers Blog, 17 September 2026
- [Android Bench leaderboard](https://developer.android.com/bench) — results as of 17 September 2026
- [Android Bench 2.0 methodology](https://developer.android.com/bench/methodology/2)
- [Evolving how LLMs are measured for Android](https://android-developers.googleblog.com/2026/07/android-bench-llm-measurement.html) — Harbor alignment, July 2026
- [Android Bench community dataset](https://github.com/android-bench/community-dataset)
