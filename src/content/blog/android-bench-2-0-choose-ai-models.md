---
title: "How Android Bench 2.0 Helps You Pick AI Models for Android Work"
description: "Android Bench 2.0 adds long-horizon tasks and continuous scoring. See how to use the leaderboard to choose models and agents for real multi-day Android development."
pubDate: 2026-10-12T09:00:00
heroImage: "https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "developer", "ai"]
noindex: false
---

Android developers now hand multi-day work to AI coding agents. Bug fixes used to be the main test. Android Bench 2.0 measures the harder jobs: building apps from scratch, migrating libraries, and porting cross-platform codebases. The highest pass rate on these long-horizon tasks sits around 28 percent.

Google released the update in mid-September 2026. It replaces binary pass/fail with a continuous completion rate. That change shows which models actually finish architectural work and which ones only get partway there.

![Developer typing code on a laptop screen](https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=800&q=80)

## What Android Bench 2.0 actually measures

The first Android Bench focused on incremental changes to existing repositories. Most early coding benchmarks did the same. Android Bench 2.0 raises the bar to match the work teams now assign to agents.

Long-horizon tasks (LHTs) are jobs that would take a mid-level or senior engineer multiple days or even a week. The set contains 30 tasks across four streams:

- App creation (building a multi-screen food delivery app from design mocks)
- Feature addition and dependency upgrades
- Architectural migrations and refactors
- Porting cross-platform apps to native Android

Evaluators score completion from 0.0 to 1.0. They look at functionality, visual fidelity, and the absence of regressions. They also apply penalties when an agent tampers with tests or ignores structural constraints. A model that refactors 40 screens to Jetpack Compose but fails one edge-case assertion is no longer scored as a total failure.

The public leaderboard at d.android.com/bench shows pass rate, completion rate, and average cost per model and per task. Model cards let you inspect strengths and pitfalls for each entry.

## How to read the leaderboard for your workflow

Open the leaderboard and filter or sort by the task types that match your current backlog. GPT-6 Astra led the early LHT pass-rate ranking at about 28 percent. Later reporting placed Claude Opus 5.5 slightly higher at 32 percent on the same long-horizon set. Gemini 3.8 Flash, Gemini 3.7 Flash, Anthropic Fable 5.1, Kimi K3, and Qwen 3.8 Max also appear.

Do not treat the top score as the only signal. Check the model card for the specific streams you care about. Porting cross-platform apps remains an open challenge: no model reaches a 100 percent pass rate, and frontier models top out near an 80 percent completion rate. Writing new code is generally easier for current models than large refactors. Deterministic transformations (Java to Kotlin, Retrofit to Ktor, adding a ViewModel layer) succeed more often, even across thousands of lines.

Average cost matters if you run many agent sessions. A slightly lower completion rate on a cheaper model can be the better choice for exploratory work. Higher-cost frontier models may still be worth it for the final architectural pass.

![Programmer coding at a desk with several monitors](https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=800&q=80)

## Agent evaluations and why the harness matters

Android Bench 2.0 also starts measuring agents, not just bare models. Early runs pair each model with the agent from its provider. Examples include Gemini 3.8 Flash on Google Antigravity and GPT-5.6 Sol on Codex. The results show that harness design affects outcomes. Prompt caching and compact tool windowing can cut token use while preserving quality.

Google plans to expand the agent results so you can compare different model-plus-agent combinations. Until then, treat the current agent numbers as directional. A strong model inside a weak harness can underperform a slightly weaker model inside a better one.

If you already use Bring Your Own Agent in Android Studio Rabbit canary builds, the Bench data helps you decide which external agent to connect. The built-in Gemini agent remains available, but the Antigravity path gives access to newer Gemini models and higher quotas for many users.

## Practical steps to apply the data this week

1. Visit the Android Bench leaderboard and open the model cards for the two or three models you currently use in Agent Mode or an external coding agent.
2. Note the completion rates on the LHT streams that match your next project (new feature, migration, or green-field app).
3. Compare average cost. Decide whether the incremental quality justifies the extra tokens for that specific task.
4. Run a small internal pilot on one real ticket. Give the same prompt to the top candidate and to your current default. Measure how much manual cleanup each run still needs.
5. Contribute tasks if your team has recurring multi-day patterns that the public set does not cover. Google maintains a community dataset repository for this purpose.
6. Re-check the leaderboard after major model releases. The set of evaluated models continues to grow.

Keep the human review step. Even the best current scores leave substantial work unfinished. Treat the agent output as a strong first draft, not a finished pull request.

## Insights that change how you prompt

The LHT results surface patterns you can use immediately. Models handle well-defined, deterministic transformations more reliably than open-ended architectural redesigns. When you need a large migration, break the work into smaller, verifiable steps and let the agent complete one stage at a time. Provide clear acceptance criteria and example outputs for the parts that involve runtime validation or dependency injection.

Knowledge gaps appear with unreleased or newly published libraries. If your project depends on a brand-new AndroidX component, expect the agent to need extra context or an updated knowledge base. Android Studio’s built-in Android Knowledge Base and skills help close that gap for the agents that can access them.

Porting work remains the hardest category. If you are moving a React Native or Flutter codebase, plan for more human oversight on layout fidelity and platform-specific behavior.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/O6iSbR7mFJ0"
    title="How Android Bench 2.0 pushes model evaluations"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits and what comes next

Android Bench 2.0 is still early. The long-horizon pass rates are low because the tasks are hard. Continuous scoring gives a better hill-climbing signal for model builders, but it does not guarantee that any single model will finish your exact ticket without help. Headless testing still has limits around visual rendering and full user-interaction lifecycles.

Google has aligned the framework with the Harbor evaluation approach and continues to add models. Future updates will include more cross-provider agent combinations. Community contributions of tasks will make the benchmark more representative of real team workflows.

For teams already building agents with the Agent Development Kit, the Bench data is useful context when you choose which model to wire into an `LlmAgent`. See the guide on [building on-device and cloud AI agents with ADK for Kotlin 1.0](/blog/adk-kotlin-1-0-android-agents/) for the implementation side.

## Conclusion

Android Bench 2.0 gives you a clearer picture of which AI models and agents can handle multi-day Android engineering work. Use the continuous completion rates and model cards to pick tools that match your actual backlog, then pilot them on real tickets. The scores are still modest because the tasks are realistic. That honesty is more useful than the near-perfect numbers from older, simpler benchmarks.

Check the leaderboard regularly, contribute tasks that reflect your own work, and keep the human review step in the loop. The models will keep improving. The benchmark is there so you can see which ones improve on the jobs that matter.

## Sources

- [Android Bench 2.0: Pushing the frontier with challenging long-horizon tasks — Android Developers Blog](https://developer.android.com/blog/posts/android-bench-2-0-pushing-the-frontier-with-challenging-long-horizon-tasks)
- [Android Bench 2.0 methodology — Android Developers](https://developer.android.com/bench/methodology/2)
- [Android Bench leaderboard](https://d.android.com/bench)
- [How Android Bench 2.0 pushes model evaluations — Android Developers (YouTube)](https://www.youtube.com/watch?v=O6iSbR7mFJ0)
- [Community task contributions](https://github.com/android-bench/community-dataset)
