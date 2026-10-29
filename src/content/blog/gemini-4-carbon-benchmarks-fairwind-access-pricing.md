---
title: "Gemini 4 Carbon: Benchmarks, Fairwind Access and Pricing"
description: "Gemini 4 Carbon ranks #1 on the Artificial Analysis Index with leading cybersecurity scores. See verified benchmarks, Fairwind access, and pricing."
pubDate: 2026-10-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "security"]
noindex: false
---

Google announced Gemini 4 Carbon on 28 October 2026. It is the company’s strongest frontier model so far, built for long-horizon agentic work and cybersecurity defense. It sits above Gemini 4 Argon, which became widely available two weeks earlier.

Carbon ranks number one on the updated Artificial Analysis Intelligence Index v5.0 with a score of 59. Google is releasing it first to a limited set of cyber defenders through the Fairwind Program. Broader access for developers, businesses, and consumers is planned “as soon as possible” after further guardrail testing.

This guide covers the verified benchmarks, how Fairwind access works, pricing, and what developers should watch while waiting for public availability. All details come from Google’s official announcement and the Fairwind Program page.

## What Gemini 4 Carbon Is

Gemini 4 Carbon is Google DeepMind’s next frontier model after Argon. Koray Kavukcuoglu, SVP of Google DeepMind and Chief AI Architect, described it as the company’s strongest model with state-of-the-art cybersecurity and long-horizon capabilities.

It improves on Argon across coding, agentic tasks, full-stack web development, multimodal understanding, and scientific reasoning. Internally, Google teams have seen it run for days on multi-step engineering problems such as root-causing and patching subtle bugs in large codebases.

Safety work continues in parallel. Carbon builds on Argon’s multi-layered stack and adds further alignment improvements. These include better resistance to shortcuts, higher transparency, stronger prompt-injection resistance, and more reliable follow-through on multi-step plans without overstepping scope.

Google is participating in the U.S. government’s voluntary pre-release model testing process. The phased rollout is deliberate because of the model’s advanced dual-use cybersecurity capabilities.

![Person coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Key Benchmarks and Cybersecurity Performance

Carbon takes first place on Artificial Analysis Intelligence Index v5.0 at 59. Google reports significant gains in coding and agentic tasks compared with Argon.

On cybersecurity benchmarks evaluated without guardrails, the model leads in three areas:

- **SEC-bench Pro** (finding real vulnerabilities in software): 88.2%
- **ExploitGym** (validating which vulnerabilities are exploitable): 54.8%
- **CWE-bench** (turning findings into working patches): 71.0%

On internal benchmarks, Carbon shows more than 2× uplift in success rate for generating secure code over Argon. Google’s Chrome team reported that Carbon performed more than 10× better than another lab’s large frontier model when generating high-quality patches. Wiz observed leading results on web penetration testing benchmarks relevant to its Scan for Good initiative.

On WebDev Arena, Carbon gained 89 Elo points over Argon and sits at #4 with a score of 1768. Additional safety metrics include 0.0% successful cheating on Terminal-Bench 4.0 (attempts at 0.4%), roughly 2× fewer unsupported claims than Argon, a 26% reduction in overreach, a 29% reduction in under-service, and 0.0% attack success rate on Gray Swan’s Indirect Prompt Injection Benchmark.

These numbers are Google’s reported results. Independent evaluations will continue as access expands.

![Server rack with green lighting in a data center](https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=800&q=80)

## How Fairwind Program Access Works

Starting the week of the announcement, Google is making Carbon available to a subset of cyber defenders. Access will expand gradually to more trusted partners through the Fairwind Program.

The Fairwind Program, launched in September 2026, gives vetted organizations early access to advanced models so they can strengthen defenses before threats arrive. It prioritizes:

- Governments and national cyber authorities
- Critical infrastructure operators (healthcare, telecommunications, energy, financial networks)
- Core technology platforms and selected academic or research partners

Partners must meet security requirements, including phishing-resistant multi-factor authentication. Access is limited to authorized internal cybersecurity, incident response, or penetration-testing teams. Sharing or reselling access is not allowed. Google reviews applications on an ongoing basis.

Organizations that do not qualify for Fairwind can still use publicly available models with tools such as CodeMender for vulnerability work. Eligible organizations apply through their Google Cloud account team.

If you are not in the initial subset, the practical next step is to monitor the Fairwind Program page and your Google Cloud relationship for expansion notices. No public application form for general developers is open yet.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pricing and Expected Availability

Gemini 4 Carbon will launch at the same introductory price as Argon: $2 per million input tokens and $10 per million output tokens. Cached input tokens are priced at 95% off the input rate.

After the introductory period, the price moves to $4 per million input tokens and $20 per million output tokens. Google has not published a model ID or exact context-window details for public use yet.

Broader availability is expected first through the Gemini API, AI Studio, and Gemini platform for developers and enterprises, then in the Gemini app and AI Mode for eligible subscribers. The timeline depends on feedback from the initial cyber-defender cohort and completion of additional guardrail work. Argon’s path from limited Fairwind access to general availability took roughly two weeks; Carbon’s schedule is not guaranteed to match.

Developers preparing for the release can review current Argon integration patterns. See our guide on [adding Gemini 4 Argon to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for practical setup steps that will likely transfer once Carbon is available in the same surfaces.

## Tips While You Wait

- Track the official Google blog and DeepMind Fairwind page for access updates rather than third-party claims.
- If your organization handles critical infrastructure or government systems, contact your Google Cloud account team about Fairwind eligibility.
- Continue using Argon for production workloads. Its public availability and pricing are already established.
- Review your current cybersecurity testing pipelines so you can evaluate Carbon’s vulnerability-finding and patching strengths quickly when access arrives.
- Keep an eye on Artificial Analysis and other independent leaderboards as more results appear.

Carbon is designed for sustained agentic workflows that can last days. Teams that already use multi-step coding agents will see the largest practical difference once the model is available to them.

## Conclusion

Gemini 4 Carbon advances Google’s frontier models with clear gains in cybersecurity defense and long-horizon tasks. It currently holds the top spot on the Artificial Analysis Intelligence Index v5.0 and posts leading scores on vulnerability detection, exploitation validation, and patching benchmarks.

Access begins with a limited set of cyber defenders this week and will expand through the Fairwind Program before reaching developers and the public. Introductory pricing matches Argon. Until broader access opens, the most useful action is to prepare evaluation criteria and monitor official channels.

## Sources

- [Introducing Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) — Google, 28 October 2026
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Google’s Fairwind Program announcement](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/) — Google, 2 September 2026
- Artificial Analysis Intelligence Index (referenced in Google’s announcement)
