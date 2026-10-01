---
title: "Gemini 4 Argon Access, Pricing, and What It Does"
description: "Gemini 4 Argon is Google’s new frontier model. See pricing, 1M output tokens, Fairwind access, and how to prepare."
pubDate: 2026-10-01T09:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai", "google", "developer", "ai-tools"]
noindex: false
---

Google DeepMind announced Gemini 4 Argon on 30 September 2026. It is the first named model in the Gemini 4 line and targets long-horizon coding, legal and finance work, and cybersecurity defense.

You cannot open it in the public Gemini app today. Access starts with trusted testers in the Fairwind Program. Google says paid API customers and Google AI Ultra subscribers come next.

This guide sticks to the official blog and DeepMind model page. Use it to decide whether Argon belongs in your stack once the gate opens.

## What Argon is built to do

Argon is a frontier model, not a Flash replacement. Google describes it as a system that can hold deep reasoning across long, multi-step jobs instead of answering a single prompt and stopping.

The headline technical change is output length. Argon can emit up to 1 million output tokens in one trajectory, up from 64K on earlier Gemini models. Cached input tokens are priced at 95 percent off the input rate, which matters if you reuse the same large context.

Google already runs Argon inside the company. The launch post cites quantum-algorithm work that beat a published baseline by 40 percent in minutes, fleet memory savings measured in hundreds of tebibytes, and Rust migrations of libraries such as re2 and libgav1. Those are internal results, not a consumer feature list.



![Circuit board close-up representing hardware and software systems](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Benchmarks Google published

DeepMind posted a comparison table against GPT-6 Astra, Claude Fable 5.1, and Claude Opus 5.5. Argon leads several knowledge-work and long-context tests. It does not lead every coding bench.

Numbers from the official Gemini model page:

- DeepSWE v1.1 (long-horizon software engineering): 77.9 percent, listed as state of the art.
- Vals Index: 68.9 percent.
- AutomationBench (Zapier): 51.3 percent, ranked first in Google’s table.
- Vals Finance Agent v2: 65.4 percent.
- Harvey’s Legal Agent Benchmark: 19.6 percent.
- LVBench (long video): 91.7 percent.
- CWE-bench v1 (vulnerability remediation): 68.0 percent, tied for first with GPT-6 Astra.
- FrontierSWE v2: 55.0 percent, behind GPT-6 Astra at 65.5 percent.
- Terminal-bench 4.0: 57.4 percent, behind Claude Opus 5.5 at 66.4 percent.

Treat those scores as Google’s disclosed set, not an independent audit. Rival labs may publish different evals next week.

If you still rely on Gemini 3.8 Flash in Search, keep that path. Our [Gemini 3.8 Flash in AI Mode](/blog/gemini-3-8-flash-ai-mode-search/) guide covers the model picker that is live for Pro and Ultra users today.

## Who can use it right now

Day-one access is narrow on purpose. Google is rolling Argon to trusted cyber defenders through the [Fairwind Program](https://deepmind.google/fairwind-program/). The company says it is also in the U.S. government’s voluntary pre-release access process.

For those defenders, Google plans to ship Argon without the cyber guardrails that will sit on the public model. The stated goal is to let security teams find, validate, and patch vulnerabilities. Wiz is named as an early user through its Scan for Good program.

Everyone else waits. The launch post says the next groups are paid API customers and Google AI Ultra subscribers. There is no published date for free Gemini, AI Mode, or Workspace side panels.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JGGaNRf6Pko"
    title="Google rolls out Gemini 4 Argon, its most advanced AI model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pricing Google listed

Introductory API price:

- $2 per million input tokens
- $10 per million output tokens
- Cached input tokens at 95 percent off the input price ($0.10 per million)

After the introductory window, Google says the rate becomes $4 per million input and $20 per million output. The blog does not name the end date of the intro period.

A 1 million token output run is expensive even at intro rates. Plan prompts so the model stops when the job is done. Use cached context for repeated codebases and policy packs.

## How to prepare before public access

You can set up the workflow now even if the model ID is not in AI Studio yet.

**1. Separate Flash work from frontier work.** Keep 3.8 Flash (or whatever Flash is current) for short answers, Search AI Mode, and high-volume classify jobs. Reserve Argon for migrations, multi-file refactors, long legal or finance packets, and video-plus-document reviews.

**2. Cap output in the client.** When the API lands, set an explicit max-output budget. Do not default to 1M tokens on chat-style calls.

**3. Cache the stable context.** Style guides, security policies, and frozen snapshots of a repo should sit in cached input so you pay the discounted rate.

**4. Keep a human review gate.** Google’s own C/C++ to Rust migrations still go through automated tests and manual audit. Your team should do the same. Argon finding a patch is not the same as shipping the patch.

**5. Do not expect cyber-unrestricted mode.** That configuration is for Fairwind defenders. Public Argon will refuse harmful cyber and CBRN requests under Google’s Frontier Safety Framework.



![Developer working at a desk with dual monitors and code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Safeguards Google is still tightening

Broad release waits on four workstreams the company named in the launch post:

- Misuse defenses for cyber and CBRN requests, including monitoring of internal activations.
- Prompt-injection robustness, with a lead score on Gray Swan’s Indirect Prompt Injection benchmark.
- Misalignment monitors that watch chain-of-thought and actions and can stop a run.
- Hardened sandboxes for high-risk training and eval, aligned with DeepMind’s agent control roadmap.

Those controls explain the slow rollout. They also mean early public Argon may refuse tasks that a Fairwind defender is allowed to run.

## What not to expect this week

Argon is not a drop-in for Gemini Live, Gems, or skills. Those live in the Gemini app and follow a separate product calendar.

It is not in Google Search AI Mode. Flash remains the model you can pick there on a paid plan.

It is not a promise that every coding benchmark now favors Google. FrontierSWE v2 and Terminal-bench 4.0 still list other labs ahead in Google’s own table.

## Tips

Watch the DeepMind Gemini page for the model ID before you rewrite SDKs. Do not hard-code a guessed name.

If you hold Ultra, check the Gemini app model list after each app update. Google said Ultra is in the first consumer wave, not that the toggle is live today.

Log token use from day one. Output is five times the input intro rate, and a long reasoning trace can dominate the bill.

Keep a fallback model. When Argon is rate-limited or refused, send the same job to 3.8 Flash rather than stalling the pipeline.

## Conclusion

Gemini 4 Argon is a limited-release frontier model with a 1 million token output ceiling, intro API pricing of $2 / $10 per million tokens, and early access through Fairwind. Google reports strong scores on DeepSWE, Vals, AutomationBench, legal-agent work, and long video. Other labs still lead some terminal and SWE suites.

Prepare the routing, cache, and review layers now. Switch the model ID when Google opens paid API and Ultra access. Until then, keep production traffic on the Flash models you can already call.

## Sources

- [Gemini 4 Argon: our next era of frontier intelligence](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) — Google, 30 September 2026
- [Gemini models](https://deepmind.google/models/gemini/) — Google DeepMind
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Google announces Gemini 4 Argon as its new frontier model](https://9to5google.com/2026/09/30/gemini-4-argon-announcement/) — 9to5Google
- [Google rolls out Gemini 4 Argon (YouTube)](https://www.youtube.com/watch?v=JGGaNRf6Pko) — CNBC Television
