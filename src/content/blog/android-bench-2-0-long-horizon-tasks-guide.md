---
title: "Android Bench 2.0 Guide: Long-Horizon Tasks Explained"
description: "Step-by-step guide to Android Bench 2.0. Read the leaderboard, understand long-horizon tasks, continuous scoring, and choose the right AI model for complex Android work."
pubDate: 2026-11-13T12:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer", "ai"]
noindex: false
---

Android developers now face AI coding assistants that claim to handle multi-day work. Android Bench 2.0 measures whether those claims hold up on real Android tasks.

Released on 17 September 2026, the update adds long-horizon tasks, continuous scoring, and agent evaluations. The highest pass rate on these harder tasks sits around 28 percent. Earlier incremental tasks scored near 91 percent.

This guide shows how to open the leaderboard, read the numbers, and apply the insights when you pick a model or agent for your next feature.

## What changed in Android Bench 2.0

The original Android Bench focused on incremental fixes such as bug repairs or small feature additions drawn from open-source pull requests. Version 2.0 raises the difficulty. Long-horizon tasks (LHTs) mirror work that takes an engineer days or a week: dependency upgrades, new feature builds, full app creation from mocks, and cross-platform ports to Android.

Scoring also changed. Binary pass/fail hid partial success. An agent that converts 40 screens to Jetpack Compose and passes most tests but fails one edge case scored zero. Continuous completion rates now capture progress on functionality, visual fidelity, and regression avoidance. Penalties apply for deviations from instructions.

Agent evaluations pair models with provider agents, such as Gemini models on Antigravity or GPT models on Codex. This shows how the harness affects results through prompt caching and tool handling.

![Laptop displaying code next to a smartphone on a developer desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Open the leaderboard and filter results

1. Go to [developer.android.com/bench](https://developer.android.com/bench).
2. Locate the Long-horizon task results section.
3. Use the agent and model filters if available. Results update periodically; the page noted data as of 11 November 2026 in one view.
4. Click a model card for details on pass rate, average completion rate, latency in hours, and average cost.

Pass rate measures fully resolved tasks out of the 30 LHTs. Completion rate shows how close incomplete runs came to a solution. Latency and cost help you weigh speed against expense.

On recent data, Claude Sonnet 5.5 with Claude Code led with a 40 percent pass rate and 80.9 percent average completion. GPT 6 Astra with Codex sat at 28 percent pass and 82.2 percent completion. Gemini 4 Carbon with Antigravity reached 23.3 percent pass and 83.7 percent completion.

## Read the key insights for your workflow

Models write new code more reliably than they refactor existing code. Refactors and migrations depend on architectural complexity more than line count. Deterministic transformations such as Java-to-Kotlin conversion or Retrofit-to-Ktor swaps succeed even across 125-plus files.

Runtime validation, missing dependency graphs, and unreleased libraries cause failures. Porting a cross-platform app to Android remains difficult. No model reaches 100 percent pass rate, and frontier models top out near 80 percent completion.

These patterns help you decide when to trust an assistant. Hand the model greenfield UI or isolated utility code. Review migrations and dependency upgrades more carefully. For a deeper look at performance measurement techniques that complement these results, see our guide on [Android Baseline Profiles](/blog/android-baseline-profiles-guide/).

![Developer focused on dual screens while coding with headphones](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## Step-by-step: Compare models for a migration task

Assume you need to upgrade Navigation 3 and Jetpack Compose across a multi-module app.

1. Note the task category on the leaderboard (migration or new feature).
2. Sort or scan for high completion rates on similar streams. App creation has 9 tasks focused on building from design mocks.
3. Check the model card for average cost and latency. A 70-hour average latency on a full 30-task run signals long runs; scale that expectation for your single task.
4. Prefer models that already show strong results on agent pairings if you use Antigravity, Codex, or Claude Code.
5. Run a small proof-of-concept on a subset of screens before full rollout. Continuous scoring in the benchmark mirrors the partial success you will see in practice.

The methodology page at developer.android.com/bench/methodology/2 explains the 30-task set across four streams and the Harbor framework alignment used for isolation and metrics.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/O6iSbR7mFJ0"
    title="How Android Bench 2.0 pushes model evaluations"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for using the data day to day

- Treat pass rates below 30 percent as expected for LHTs. Focus on relative ranking and completion trends.
- Cross-check with your own short experiments. Benchmarks use containerized environments and specific test suites; your codebase may differ.
- Watch for new model additions. The September release added Gemini 3.8 Flash, GPT-6 variants, and others. Later updates continued the expansion.
- Contribute feedback or tasks via the GitHub community dataset if your workflow exposes gaps.

![Laptop screen showing code with glasses on a wooden desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Conclusion

Android Bench 2.0 gives a clearer picture of which models and agents handle the long-horizon work Android teams actually assign. Open the leaderboard, compare pass and completion rates for your task type, and validate with a limited trial before you commit tokens and review time.

The continuous scoring and agent pairings make the numbers more useful than binary results alone. Check the page regularly as new models land.

## Sources

- Android Developers Blog: [Android Bench 2.0: Pushing the frontier with challenging long-horizon tasks](https://android-developers.googleblog.com/2026/09/android-bench-2-long-horizon-tasks.html) (17 September 2026)
- Android Developers: [Android Bench leaderboard](https://developer.android.com/bench)
- Android Developers: [Android Bench 2.0 methodology](https://developer.android.com/bench/methodology/2)
- YouTube: [How Android Bench 2.0 pushes model evaluations](https://www.youtube.com/watch?v=O6iSbR7mFJ0) — Android Developers
