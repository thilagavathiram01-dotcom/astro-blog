---
title: "Gemini 4 Carbon Explained: Benchmarks, Pricing and Access"
description: "Gemini 4 Carbon leads cybersecurity benchmarks with 88.2% on SEC-bench Pro. See pricing, Fairwind access timeline, and how to prepare with Argon."
pubDate: 2026-10-29T18:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai", "tutorials", "ai-tools", "google"]
noindex: false
---

Google announced Gemini 4 Carbon on October 28, 2026 as its strongest frontier model yet. It focuses on cybersecurity defense and long-horizon agentic tasks. The model ranks first on the Artificial Analysis Intelligence Index v5.0 with a score of 59.

Carbon builds directly on Gemini 4 Argon, which became widely available two weeks earlier. Access starts with a limited group of cyber defenders this week. Developers, businesses, and consumers will follow later through standard product surfaces.

This guide covers the confirmed benchmarks, pricing, access path, and practical steps you can take today while you wait.

## Key capabilities and benchmarks

Carbon shows gains in coding, agentic workflows, full-stack web development, and multimodal understanding. Internally, Google teams have seen it run for days on complex engineering tasks such as root-causing and patching subtle bugs across large codebases.

On cybersecurity benchmarks evaluated without guardrails, Carbon leads:

- 88.2% on SEC-bench Pro for finding real vulnerabilities in software
- 54.8% on ExploitGym for validating exploitable risks
- 71.0% on Collinear’s CWE-bench for producing working patches

Google reports more than 2x uplift in success rate for generating secure code compared with Argon. The Chrome team noted Carbon performed more than 10x better than another lab’s large frontier model when creating high-quality patches. It also improved 89 Elo points on WebDev Arena to land at #4 with a score of 1768.

Safety improvements include 0.0% successful cheating on Terminal-Bench 4.0 and 0.0% attack success rate on Gray Swan’s Indirect Prompt Injection Benchmark. High-severity misalignment alerts dropped almost 80% in live internal coding environments.

![Cybersecurity concept with digital lock and circuit elements](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Pricing details

Carbon launches at the same introductory price as Argon: $2 per million input tokens and $10 per million output tokens. Cached input tokens receive a 95% discount off the input price.

After the introductory period ends, the price moves to $4 per million input tokens and $20 per million output tokens. Google has not published the exact end date for Carbon’s introductory window. Argon’s introductory pricing currently runs through November 30, 2026.

No free tier exists for Carbon. It requires the paid Gemini API tier once it reaches public surfaces.

## Who can access Gemini 4 Carbon now

Google is taking a deliberate rollout. It participates in the U.S. government’s voluntary process for pre-release model testing.

Starting this week, Carbon is available to a subset of cyber defenders. Access then expands gradually to additional trusted partners through the Fairwind Program. Fairwind prioritizes governments, national cyber authorities, critical infrastructure operators in healthcare, telecommunications, energy, and finance, plus core technology platforms. Google works with more than 650 partners under the program.

Partners must use phishing-resistant multi-factor authentication, limit access to internal security or penetration testing teams, track usage, and cannot share or resell access. Individuals cannot join a public waitlist. Organizations apply through their Google Cloud account team.

Developers, businesses, and consumers will receive access “as soon as possible” after further feedback and guardrail work. No public model ID, API docs page, or availability in the Gemini app, AI Studio, or Search exists yet.

## How to prepare while you wait

Use Gemini 4 Argon today for the same class of tasks. Argon is available now for Google AI Pro and Ultra subscribers in the Gemini app and for developers on the paid Gemini API tier in AI Studio and Google Antigravity.

If you build Android apps, follow the steps in our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/). The same Firebase AI Logic pattern will apply to Carbon once the model name becomes public.

Test your long-horizon coding and security workflows on Argon. Measure token usage, latency, and output quality. When Carbon arrives, you can swap the model string and re-test with minimal code changes.

Review the Fairwind Program page if your organization qualifies. Contact your Google Cloud account team to ask about Carbon eligibility and any additional terms that differ from Argon.

![Developer coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for cybersecurity and agentic use

Break large remediation tasks into clear steps. Feed intermediate findings back into the next prompt so the model can maintain context across multi-day efforts once Carbon is available.

Prefer prompts that ask the model to surface discrepancies and request confirmation before it acts. Carbon’s training emphasizes honesty and reduced overreach.

Keep human review in the loop for any patch that touches production systems. Even high benchmark scores do not remove the need for validation.

Monitor the Gemini API changelog and the official Google blog for the model ID and surface availability updates. Pricing and rate limits may appear first on the models documentation page.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zhnJo7s91ls"
    title="Google is BACK (Gemini 4 Carbon)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Carbon advances frontier performance in cybersecurity defense and long-horizon coding. It leads key external benchmarks and improves safety metrics over Argon. Public access remains limited to cyber defenders and Fairwind partners for now.

Start with Argon for production work today. Prepare your prompts, measure usage, and watch for the official model ID. When Carbon reaches developers and the Gemini app, the switch should be straightforward.

## Sources

- [Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) — Google Blog, October 28, 2026
- [Gemini 4 Argon is now available for developers](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/) — Google Blog
- Fairwind Program details from Google DeepMind
