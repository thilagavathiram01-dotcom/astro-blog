---
title: "Android Bench Oct 2026: Claude Sonnet 5.5 Tops at 40%"
description: "October 2026 Android Bench update ranks Claude Sonnet 5.5 at 40% pass rate. Compare costs for GPT-6.1 Sol and Gemini 4 Argon to pick coding agents."
pubDate: 2026-10-27T10:00:00
heroImage: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "ai", "developer"]
noindex: false
---

Android Bench 2.0 received a major leaderboard refresh on October 26, 2026. Claude Sonnet 5.5 now leads the long-horizon task results with a 40 percent pass rate. Earlier top scores sat near 28 percent. Developers who rely on coding agents for multi-day Android work now have fresher data to guide model and agent selection.

The update also adds reasoning effort labels and new agent pairings for Claude Code, Codex, and Google’s Antigravity SDK. Cost and latency figures help teams balance quality against spend.

![Close-up of a MacBook Pro screen showing source code](https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?auto=format&fit=crop&w=800&q=80)

## What changed in the October 26 update

Google’s changelog lists three new agent results and one display improvement. Claude Code now includes Claude Sonnet 5.5. Codex reports GPT-6.1 Sol. Antigravity SDK reports Gemini 4 Argon. The board also surfaces the reasoning effort setting used for each run.

Archived entries include earlier Claude Sonnet 5 and GPT-6 Sol results. The live board therefore reflects the latest frontier models rather than older snapshots. Pass rates on the 30 long-horizon tasks remain the primary ranking metric, with completion rate, average latency, and average cost shown alongside.

These long-horizon tasks cover app creation from mocks, feature additions, architectural migrations, and cross-platform ports. They are intentionally harder than the original incremental-edit set, which still shows top models near 91 percent.

## Current leaderboard standings

As of October 26, 2026, the top entries on the long-horizon board are:

| Model | Agent | Pass rate | Completion rate | Avg latency (h) | Avg cost |
|-------|-------|-----------|-----------------|-----------------|----------|
| Claude Sonnet 5.5 (max) | claude-code | 40.0% | 80.9% | 70.7 | $1,574.9 |
| Claude Opus 5.5 (max) | claude-code | 37.3% | 85.6% | 56.6 | $1,150.3 |
| GPT-6.1 Sol (max) | codex | 29.3% | 82.8% | 26.6 | $99.5 |
| GPT-6 Astra (high) | codex | 28.0% | 82.2% | 7.9 | $375.7 |
| Claude Fable 5.1 (high) | claude-code | 22.7% | 82.4% | 22.2 | $492.6 |
| Gemini 4 Argon (high) | antigravity-sdk | 21.3% | 81.8% | 52.8 | $267.6 |

Claude Sonnet 5.5’s 40 percent pass rate is the highest published figure to date on this task set. GPT-6.1 Sol delivers a competitive 29.3 percent pass rate and 82.8 percent completion rate at a fraction of the cost. Gemini 4 Argon sits in the middle of the pack with solid completion numbers but a lower pass rate.

Open-weight models such as Qwen3.8 Max and Kimi K3 trail further behind on the long-horizon set. The older 100-task board continues to show much higher scores across the board and remains useful for smaller, scoped edits.

![Developer working at a laptop with code visible on the screen](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## How to choose a model and agent for your work

Start by matching the task type to the streams measured by Android Bench. Green-field apps and large migrations benefit from higher pass-rate models. Smaller feature additions or deterministic refactors can succeed with lower-cost options.

1. Open the live leaderboard at developer.android.com/bench and note the reasoning effort shown for each entry.
2. Compare average cost against your expected volume of agent runs. A model that costs roughly $100 per full benchmark run is far cheaper to experiment with than one above $1,000.
3. Check the model card for the specific agent pairing you plan to use. Claude Code results do not automatically transfer to a different harness.
4. Run a short canary on a representative ticket in your own repository. Measure remaining manual cleanup rather than relying solely on the public score.
5. Revisit the board after major model releases. The October update shows how quickly rankings shift.

GPT-6.1 Sol stands out for teams that need frequent agent sessions without high per-run bills. Claude Sonnet 5.5 or Opus 5.5 make more sense when the incremental quality gain justifies the higher spend on complex architectural work.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/O6iSbR7mFJ0"
    title="How Android Bench 2.0 pushes model evaluations"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips for agent runs

Break multi-day work into verifiable stages. Models handle deterministic transformations such as library migrations more reliably than open-ended redesigns. Provide clear acceptance criteria and example outputs for lifecycle, theming, and navigation edge cases.

Expect higher human review effort on cross-platform ports. Frontier models still plateau near 80 percent completion on those streams. Use the continuous completion rate to estimate how much of the job will be finished before you take over.

If you already use Bring Your Own Agent in Android Studio or Android CLI skills, the new agent results help you decide which external provider to connect. For background on the long-horizon task design itself, see our earlier guide on [how Android Bench 2.0 helps you pick AI models](/blog/android-bench-2-0-choose-ai-models/).

## Limits of the current data

The numbers are averages across 30 standardized tasks run in an isolated Harbor environment. Your private codebase, custom tooling, and exact prompt style will produce different results. Cost figures reflect full-benchmark runs, not single pull requests.

Reasoning effort labels are new. Higher effort settings improve scores but increase token use. Test both the default and maximum settings on a small task before committing a large budget.

Contamination risk grows over time as tasks become public. Prefer the dated October 26 snapshot for decisions this week, then recheck the board.

## Conclusion

The October 26 Android Bench update gives developers the clearest picture yet of how the newest frontier models handle real multi-day Android engineering. Claude Sonnet 5.5 leads on pass rate, while GPT-6.1 Sol offers strong completion at far lower cost. Gemini 4 Argon lands in the middle of the pack.

Use the live leaderboard, model cards, and a short internal canary to choose the combination that matches your backlog and budget. Keep a human review step for lifecycle, visual fidelity, and the last 15–20 percent of any long-horizon task. Rankings will continue to move; the benchmark exists so you can see which models improve on the work that actually takes days.

## Sources

- [Android Bench leaderboard](https://developer.android.com/bench) — results as of October 26, 2026
- [Android Bench changelog](https://developer.android.com/bench/changelog)
- [Android Bench 2.0 methodology](https://developer.android.com/bench/methodology/2)
- [How Android Bench 2.0 pushes model evaluations — Android Developers (YouTube)](https://www.youtube.com/watch?v=O6iSbR7mFJ0)
- [9to5Google coverage of the October rankings](https://9to5google.com/2026/10/26/android-bench-rankings-gemini-4-argon/)
