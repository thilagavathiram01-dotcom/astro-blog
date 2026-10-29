---
title: "Gemini 4 Carbon: Benchmarks, Access and Prep"
description: "Gemini 4 Carbon tops the Artificial Analysis Index at 59 with strong cybersecurity scores. See access via Fairwind, pricing, and how to prepare with Argon."
pubDate: 2026-10-29T23:00:00
heroImage: "https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai", "security", "ai-tools"]
noindex: false
---

Google announced Gemini 4 Carbon on 28 October 2026 as its strongest frontier model yet. It ranks first on the updated Artificial Analysis Intelligence Index v5.0 with a score of 59 and posts leading results on cybersecurity benchmarks. Access starts with a limited group of cyber defenders this week.

Carbon builds directly on Gemini 4 Argon, which became generally available two weeks earlier. Google is taking a staged approach while it participates in the U.S. government’s voluntary pre-release testing process.

![Laptop showing code on a wooden desk](https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=800&q=80)

## Key benchmarks and cybersecurity gains

Carbon leads on the Artificial Analysis Intelligence Index v5.0 at 59. Google reports significant gains in coding and agentic tasks compared with Argon.

On cybersecurity-specific tests (evaluated without guardrails):

- SEC-bench Pro (finding real vulnerabilities in software): 88.2%
- ExploitGym (validating which vulnerabilities can be exploited): 54.8%
- Collinear’s CWE-bench (patching at the root cause): 71.0%

Internal results show more than a 2x uplift in success rate for generating secure code over Argon. Google’s Chrome team reported that Carbon performed more than 10x better than another lab’s large frontier model when generating high-quality patches. Wiz observed strong results on web penetration testing benchmarks used in its Scan for Good initiative.

On WebDev Arena, Carbon gained 89 Elo points over Argon and sits at #4 with a score of 1768.

## Long-horizon agentic capabilities

Google designed Carbon for sustained, multi-step engineering work. Internal teams have seen it run for days, recovering from dead ends while root-causing and patching subtle bugs across large codebases and low-level systems.

Improvements also appear in full-stack web development and multimodal understanding. The model shows better collaboration when information is incomplete: it surfaces discrepancies and retrieves sources before acting rather than guessing.

## Safety and alignment improvements

Carbon builds on Argon’s multi-layered safety stack. Google reports further gains in alignment:

- Successful cheating on Terminal-Bench 4.0 dropped to 0.0% (attempts to 0.4%).
- High-severity misalignment alerts in live internal coding environments fell by almost 80%.
- Unsupported claims cut by approximately 2x versus Argon.
- Overreach reduced by 26% and under-service by 29%.
- Gray Swan’s Indirect Prompt Injection Benchmark: 0.0% attack success rate (Argon was 0.7%).

These changes aim to produce more reliable, transparent behaviour on complex or high-pressure tasks.

![Person coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Pricing

Carbon launches at the same introductory price as Argon:

- $2 per million input tokens
- $10 per million output tokens
- Cached input tokens at 95% off the input rate

After the introductory period the rates move to $4 input and $20 output per million tokens. Google has not published the exact end date for Carbon’s introductory pricing.

## Access timeline and the Fairwind Program

Starting this week, Google is making Carbon available to a subset of cyber defenders. Access will expand gradually to additional trusted partners through the Fairwind Program.

Fairwind prioritises governments, national cyber authorities, critical infrastructure operators, and core technology platforms. Google runs background checks. Partners must use phishing-resistant multi-factor authentication, limit access to internal security/incident-response/penetration-testing teams, and may not share or resell access. Google says it already works with more than 650 partners under the program.

Wider availability for developers, businesses, and consumers via the Gemini app, AI Studio, and API is planned “as soon as possible” after further feedback and guardrail work. No public release date has been given.

## How to prepare while you wait

Most users cannot call Carbon today. The practical path is to build and test workflows on Gemini 4 Argon, which is available now at the same introductory pricing.

1. Use Argon in Google AI Studio or the Gemini API (model ID typically `gemini-4-argon`).
2. Keep prompts, system instructions, and tool definitions portable so a later switch to Carbon is mainly a model-name change.
3. For cybersecurity or long-horizon agent work, evaluate Argon on your own tasks and note where stronger vulnerability detection or multi-day persistence would help.
4. If your organisation fits Fairwind criteria, contact your Google Cloud account team or check the Fairwind Program page for application details.

For Android and Firebase integrations with Argon, see our earlier guide: [Add Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Programmer working at a multi-monitor desk](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## What comes next

Google continues to iterate on guardrails while the initial cyber-defender cohort uses the model. Once broader access opens, Carbon is expected to replace Argon for most frontier coding, agentic, and security workloads because it improves on the same pricing structure.

Until then, Argon remains the strongest publicly available Gemini frontier model for developers and teams.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zhnJo7s91ls"
    title="Google is BACK (Gemini 4 Carbon)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Official announcement: [Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) (Google, 28 October 2026)
- Fairwind Program details referenced in the announcement
- Artificial Analysis Intelligence Index v5.0 (as cited by Google)
