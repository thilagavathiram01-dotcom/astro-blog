---
title: "Gemini 4 Argon Developer Guide: Price, Limits, Access"
description: "Gemini 4 Argon developer guide: introductory API price, 1M output tokens, Fairwind access, and how to prepare coding agents."
pubDate: 2026-10-01T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "developer"]
noindex: false
---

Google announced Gemini 4 Argon on 30 September 2026 as its next frontier model for long-horizon software engineering, enterprise knowledge work, and cybersecurity defense. Most developers cannot call it yet. Access starts with trusted cyber defenders, then expands to paid API customers and Google AI Ultra subscribers.

If you ship coding agents or internal research tools, the useful move now is to learn the limits, the price, and the rollout order before you rewrite prompts. This guide sticks to what Google published and what you can do while you wait.

## What Gemini 4 Argon is built for

Koray Kavukcuoglu, SVP of Google DeepMind, described Argon as a model that can sustain deep reasoning across complex, long-horizon workflows. Google is using it internally for specialized coding, deeper research, and writing.

Public examples from the launch post include:

- Quantum researchers used Argon to cut spacetime resources on a bottleneck subroutine by 40 percent versus a published baseline, in minutes.
- Agent runs on fleet telemetry found memory optimizations that free more than 300 TiB once rolled out, with an estimated 500 TiB to 1 PiB of total savings.
- Agents are migrating C and C++ code to Rust, from tens of thousands of lines in libraries such as re2 and libgav1 up to more than 800,000 lines in the Fuchsia Zircon kernel. Google says those rewrites still go through automated and manual audit before production.
- On libgav1, agents replaced 32,000 lines of SIMD code with safe Rust that the compiler vectorizes. Google reports a memory-safe decoder that is 2.7 times faster than the prior Rust port, with identical video output.

Those are internal results, not a public benchmark you can reproduce today. Treat them as a signal of the workloads Argon is aimed at: multi-step code change, profiling loops, and long research traces.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Output limit and benchmark claims

Google is raising Argon's output token limit to 1 million tokens, up from 64,000 on earlier Gemini models. The company says that headroom lets the model think longer and finish hard problems in one trajectory instead of many short turns.

Scores Google published with the launch:

- DeepSWE v1.1: 77.9 percent, which Google calls a new state of the art for real-world long-horizon software engineering.
- Vals Index: leading score on a GDP-weighted mix of finance, coding, legal, and tax tasks.
- AutomationBench from Zapier: first place at 51.3 percent for end-to-end business tasks.
- LVBench long-video understanding: 91.7 percent.
- CWE-bench v1 vulnerability remediation: tied for first at 68 percent.

Argon is also trained for defensive cybersecurity. Google says it can find, validate, and patch critical vulnerabilities. Trusted defenders in the Fairwind Program get the model without cyber guardrails. Everyone else should expect refusals on harmful cyber and CBRN requests, plus stronger prompt-injection defenses. Google says Argon leads Gray Swan's Indirect Prompt Injection benchmark.

Wiz is an early Fairwind user through Scan for Good. Google says an early run found a critical exposure in healthcare software used by hospitals that earlier frontier models missed. Google did not publish the CVE or a public proof of concept in the launch post.

## Who can use it, and when

Argon is not on the public Gemini API model list yet. Google is in a phased release:

1. Trusted cyber defenders through the Fairwind Program get early access while Google gathers feedback.
2. Google is taking part in the U.S. government's voluntary pre-release access process.
3. Broader availability starts with paid API customers and Google AI Ultra subscribers, then other developers, enterprises, and consumers "as soon as possible."

Do not hard-code a model id such as `gemini-4-argon` until it appears in the official models guide at ai.google.dev. A guessed id will fail, and a preview name can change.

If you already run agents on Gemini 3.7 Flash or Gemini 3.8 Flash, keep those model strings in production. Our [Gemini 3.7 Flash coding agents guide](/blog/gemini-3-7-flash-coding-agents/) still matches what the API serves today. The [Argon access and pricing note](/blog/gemini-4-argon-access-pricing/) tracks the commercial terms as they firm up.

## Introductory API price

Google published an introductory price of $2 per million input tokens and $10 per million output tokens. Cached input tokens are priced at 95 percent off the input rate. After the introductory period, the list price is $4 per million input tokens and $20 per million output tokens.

Google did not publish the end date of the introductory window, context-window size, or rate limits in the launch post. Budget with the post-intro rates if you are writing a quarterly forecast.

A rough check for a long coding run: 200,000 input tokens and 100,000 output tokens at intro rates is $0.40 of input plus $1.00 of output, or $1.40 before cache discounts. The same call at post-intro rates is $2.80. A 1 million token output is the expensive case: $10 at intro rates, $20 after. Cache repeated repo context instead of resending it on every turn.

![Server room representing model inference cost](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## How to prepare your agent stack

You cannot call Argon from a normal API key today. You can still make the switch cheaper when the model id lands.

**Step 1. Split model choice from prompts.** Put the model name in config, not in application code. When Argon appears in `models.list`, you change one value and keep the same tool schema.

**Step 2. Raise output budgets in tests.** Agents written for a 64,000 token cap will truncate a 1 million token trajectory. Log finish reasons. If you see length cutoffs on 3.8 Flash, those tasks are the first candidates for Argon.

**Step 3. Cache stable context.** System instructions, repo maps, and style guides should use context caching once Argon supports the same cache API as other Gemini models. The 95 percent cached-input discount only helps if you actually cache.

**Step 4. Keep a human review gate on code migration.** Google's own Rust migrations still go through emulation tests and review. Do not auto-merge agent diffs on security-sensitive paths.

**Step 5. Separate cyber workloads.** Defensive scanning without cyber guardrails is limited to Fairwind and Google's internal teams. A normal app should not assume it can request exploit development. Design prompts for patch suggestions, dependency review, and test generation instead.

**Step 6. Watch the models page, not social posts.** Confirm the id, context window, and billing in the Gemini API docs before you flip a production flag.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JGGaNRf6Pko"
    title="Google rolls out Gemini 4 Argon, its most advanced AI model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips while access is limited

Use Gemini 3.8 Flash for agent loops you need this week. It is the current workhorse on the public API for long-horizon coding. Keep Argon on a feature flag labeled off.

Measure cost per merged change, not cost per token. A model that spends more output tokens but lands a correct patch in one pass can still be cheaper than three failed retries.

If you work in security, read the Fairwind Program page before you apply. Google is explicit that broad cyber capability ships first to trusted defenders, not to every API key.

Store chain-of-thought style traces only if your policy allows it. Google says it monitors Argon's reasoning for misalignment and asks the industry to keep reasoning inspectable. Your own logs should follow the same rule: retain enough to debug a bad tool call, then delete what you do not need.

## Bottom line

Gemini 4 Argon is a frontier model with a 1 million token output cap, an introductory price of $2 / $10 per million input and output tokens, and a first audience of cyber defenders. Developers should prepare config, caching, and review gates now, and wait for the official model id before sending traffic.

## Sources

- Google, "Gemini 4 Argon: our next era of frontier intelligence," blog.google, 30 September 2026.
- Google DeepMind, Fairwind Program.
- Google AI for Developers, Gemini API models guide (Argon not listed at publication).
