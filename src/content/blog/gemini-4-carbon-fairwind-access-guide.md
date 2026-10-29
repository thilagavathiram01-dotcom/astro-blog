---
title: "Gemini 4 Carbon Access Guide: Fairwind Program Explained"
description: "Gemini 4 Carbon ranks #1 on the Artificial Analysis Index. Learn benchmarks, pricing, and how eligible teams apply for early Fairwind Program access."
pubDate: 2026-10-29T12:00:00
heroImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "security", "how-to"]
noindex: false
---

Google announced Gemini 4 Carbon on 28 October 2026 as its strongest frontier model yet. It tops the Artificial Analysis Intelligence Index v5.0 at 59 and posts leading scores on cybersecurity benchmarks. Most people cannot use it today. Access starts with a subset of cyber defenders through the Fairwind Program.

This guide covers what Carbon does differently from Gemini 4 Argon, the exact rollout path, pricing, and the practical steps eligible organizations can take right now.

## What Gemini 4 Carbon Adds

Carbon builds directly on Argon, which became generally available two weeks earlier. Google designed it for longer agentic runs and stronger defensive cybersecurity work. Internal teams report it can persist for days on complex engineering tasks such as root-causing subtle bugs across large codebases.

On external benchmarks (evaluated without guardrails), Carbon reaches:

- 88.2% on SEC-bench Pro for finding real vulnerabilities
- 54.8% on ExploitGym for validating exploitability
- 71.0% on CWE-bench for producing working patches

Google also reports more than a 2× uplift in secure code generation compared with Argon on internal tests, and a more than 10× improvement versus another lab’s frontier model when generating high-quality patches for the Chrome team.

![Laptop screen showing lines of code in a development environment](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

These gains come with tighter alignment. Carbon reduced successful cheating on Terminal-Bench 4.0 to 0%, cut unsupported claims by roughly half versus Argon, and achieved a 0% success rate on Gray Swan’s indirect prompt-injection benchmark.

## How Access Works Today

Google is taking a deliberate rollout. It is participating in the U.S. government’s voluntary pre-release model testing process. Starting the week of the announcement, Carbon becomes available to a subset of cyber defenders. Access then expands gradually to additional trusted partners through the Fairwind Program. Developers, businesses, and consumers receive it “as soon as possible” after further guardrail iteration. No public date has been set.

There is no Gemini app toggle, no AI Studio model picker entry, and no public API model ID for Carbon as of 29 October 2026.

### Who Qualifies for Fairwind

The Fairwind Program prioritizes organizations that protect critical systems. Google currently works with more than 650 partners worldwide. Priority groups include:

- Governments and national cyber authorities
- Critical infrastructure operators in healthcare, telecommunications, energy, and finance
- Core technology platforms that secure software used by millions of downstream users

Academic labs focused on defensive benchmarking may also apply. Partners must use the model only for authorized defensive or research tasks such as threat simulation, reverse engineering, and malware analysis. Creating malware is not permitted. Organizations agree to user-level authentication, phishing-resistant MFA, and access limited to internal cybersecurity or incident-response teams.

## Step-by-Step: Apply for Fairwind Access

Eligible teams can request access through the official form.

1. Visit the Fairwind Program page at deepmind.google/fairwind-program/.
2. Review the eligibility criteria and governance rules carefully.
3. Click “Apply now” and complete the form with your organization’s details, security practices, and intended defensive use cases.
4. Google reviews applications on a rolling basis and responds to eligible partners as capacity allows. There is no published SLA.

If your organization is not eligible, you can still use publicly available models with CodeMender on Google Cloud for automated vulnerability research and patching.

![Developer workspace with multiple screens displaying code](https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=800&q=80)

## Pricing When It Becomes Available

Carbon launches at the same introductory price as Argon: $2 per million input tokens and $10 per million output tokens. Cached input tokens receive a 95% discount. After the introductory period ends, the price moves to $4 input / $20 output per million tokens. Google has not published the exact end date for Carbon’s introductory pricing.

For comparison, teams already using Gemini 4 Argon can review thinking-level controls and long-horizon prompting patterns in our earlier guide: [Code with Gemini 4 Argon: Thinking Levels and Best Practices](/blog/code-with-gemini-4-argon-thinking-levels/).

## Prepare While You Wait

Even without direct access, you can ready your workflows.

- Document current vulnerability-scanning and patching pipelines so you can measure uplift once Carbon is available.
- Review your organization’s Fairwind eligibility and gather evidence of defensive work.
- Experiment with Argon or other available models on representative long-horizon coding and security tasks to establish baselines.
- Follow the official Google DeepMind and Google AI blogs for the next access expansion.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/YC_yDXDKwpE"
    title="Gemini 4 Carbon BEATS Opus 5.5 But There’s a Catch!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Comes Next

Google’s stated goal is to deliver large gains in software engineering and cybersecurity defense while keeping strong safety properties. Early feedback from the first cyber-defender cohort will shape guardrails before wider release. When Carbon reaches developers and the Gemini app, expect the same model ID pattern and Interactions API support already used by Argon.

Until then, the practical path is clear: confirm eligibility, submit a Fairwind application if you qualify, and continue building with the models that are already generally available.

## Key Safety and Alignment Improvements

Carbon continues the multi-layered safety stack used in Argon: model training, real-time misuse defenses, prompt-injection resilience, and chain-of-thought monitoring. Google reports further progress on alignment.

In live coding environments, high-severity misalignment alerts dropped by almost 80%. The model is trained to surface discrepancies and retrieve relevant sources rather than guess when information is ambiguous. It also reduced overreach by 26% and under-service by 29%, producing more reliable end-to-end execution of multi-step plans while staying inside stated constraints.

These properties matter for long-horizon agentic work. A model that runs for days must stay within scope and avoid fabricating evidence. Carbon’s reported reductions in unsupported claims and cheating attempts address exactly that risk.

## Comparison Snapshot

| Capability | Gemini 4 Argon | Gemini 4 Carbon |
|------------|----------------|-----------------|
| Announced | September 2026 | 28 October 2026 |
| Broad availability | 13 October 2026 | Not yet (Fairwind first) |
| AA Index v5.0 | 50 | 59 |
| Intro price (in/out per 1M) | $2 / $10 | $2 / $10 |
| Cyber focus | Strong | State-of-the-art on SEC-bench, ExploitGym, CWE-bench |

The table shows the rapid iteration between the two models. Argon remains the model most developers can use today. Carbon is the one to watch for cybersecurity-heavy and multi-day agentic workloads once access expands.

## Practical Tips for Future Use

When Carbon becomes available to a wider audience, the same prompting practices that work well with Argon will apply. State clear success criteria and intermediate milestones before long runs. Provide a way for the model to verify its own output (tests, logs, or a checker script). Prefer the Interactions API for multi-turn agentic flows. Choose an appropriate thinking level: low for fast extraction, medium as default, high for deep security analysis.

Track token usage carefully. Long-horizon tasks can consume large output budgets. The 1-million-token output capability (introduced with Argon) makes extended reasoning possible, but it also increases cost if not managed.

Monitor the official Google AI developer documentation and the Fairwind page for the first model card and API reference. Those documents will list exact context lengths, supported modalities, and any Carbon-specific parameters.

Until the wider release, the highest-leverage action for most teams is to keep building with Argon or other generally available models while preparing measurement baselines for the day Carbon arrives.

## Sources

- Google Blog: Introducing Gemini 4 Carbon (28 October 2026)
- Google DeepMind: Fairwind Program page
- Artificial Analysis Intelligence Index v5.0
