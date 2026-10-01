---
title: "Gemini 4 Argon: Access, Pricing, and What It Changes"
description: "Google’s Gemini 4 Argon is out for Fairwind defenders first. See pricing, 1M output tokens, benchmarks, and who gets API access next."
pubDate: 2026-10-01T09:00:00
heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "ai", "developer", "google", "security"]
noindex: false
---

Google announced Gemini 4 Argon on 30 September 2026. It is the company’s new frontier model for long, multi-step work in software engineering, legal and finance research, and cybersecurity defense.

You cannot open it in the public Gemini app today. First access goes to vetted cyber defenders in Google DeepMind’s Fairwind Program, plus Google’s own teams. Broader API and Google AI Ultra access is next, after extra safety work.

This guide sticks to Google’s published numbers so you can plan pricing, token limits, and evaluation work without guessing.

## What Google says Argon is for

Argon is built to keep reasoning across long-horizon tasks instead of answering a single short prompt. Google lists three work areas: real-world software engineering, enterprise knowledge work such as legal and finance, and defensive cybersecurity.

The model already runs inside Google. Koray Kavukcuoglu, SVP of Google DeepMind and Chief AI Architect, wrote that thousands of Googlers use it for specialized coding, deeper research, and writing. Public examples include quantum subroutine optimization that beat a published baseline by 40% in minutes, and agent-driven memory work that freed more than 300 TiB of data-center memory, with 500 TiB to 1 PiB estimated once fully rolled out.

Another internal case is large C/C++ to Rust migration. Argon agents have worked on libraries such as re2 and libgav1, and on the Fuchsia Zircon kernel at 800K+ lines. For libgav1, agents replaced 32K lines of SIMD in an existing Rust port. Google says the result is a memory-safe decoder that runs 2.7x faster than that Rust port, with identical video output.



![Laptop and code editor on a desk used for long software engineering sessions](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Output limit and API price

Argon raises the output token limit to 1 million tokens, up from 64K on prior Gemini models. Google frames that headroom as the reason the model can think and write for a long trajectory in one run.

Introductory API pricing:

- $2 per million input tokens
- $10 per million output tokens
- Cached input tokens at 95% off the input price

After the introductory period, Google says the price becomes $4 per million input tokens and $20 per million output tokens.

Treat those figures as list prices for paid API customers. Consumer chat availability is later, and Google has not published a free-tier quota for Argon.

## Benchmarks Google published

Use these as Google’s own eval snapshot, not as a substitute for your tests.

**Software and agents**

- DeepSWE v1.1 (long-horizon software engineering): 77.9%, listed as a new state of the art
- AutomationBench (Zapier, end-to-end business functions): 51.3%, ranked #1 on Google’s table

**Knowledge work**

- Vals Index (finance, coding, legal, and tax, weighted by U.S. GDP share): leading model on Google’s DeepMind eval page at 68.9%
- Vals Finance Agent v2: 65.4%
- Harvey Legal Agent Benchmark: 19.6%

**Multimodal and long context**

- LVBench (long video understanding): 91.7%
- GraphWalks BFS F1 up to 128k: 99.7%; 256k to 1M: 84.2%

**Security**

- CWE-bench v1 (vulnerability remediation): 68%, tied for first on Google’s table

DeepMind’s comparison table also shows where Argon does not lead. FrontierSWE v2, Terminal-bench 4.0, PostTrainBench, Terminal-Bench Science 0.1, and OSWorld-2.0 list higher scores for GPT-6 Astra or Claude Opus 5.5. Plan bake-offs on *your* repo and tools, not on a single headline number.

If you already ship voice or live agents on 3.8, keep that stack. Argon is a different product line. See [How to Use Gemini 3.8 Live for Real-Time Voice Conversations](/blog/gemini-3-8-live/) for the current Live models.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8M3NcH9J43I"
    title="Gemini 4 Argon Is Comeback Google Needed!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Who can use it now

**Fairwind Program.** Google is giving Argon to trusted cyber defenders first. Fairwind opened on 3 September 2026 with Gemini 3.8 Flash Cyber. Reporting based on Google’s program describes more than 650 organizations, including CrowdStrike and Palo Alto Networks. Wiz is using Argon in its Scan for Good work on public infrastructure. Google says the model found a critical exposure in healthcare software that earlier frontier models missed.

**No cyber guardrails for that cohort.** For trusted defenders and Google’s internal teams, Argon ships without the cyber refusal layer so they can find, validate, and patch vulnerabilities. That setting is not the public default.

**Phased public release.** Google is in the U.S. government’s voluntary pre-release access process. It will collect tester feedback, then open Argon to developers, enterprises, and consumers, starting with paid API customers and Google AI Ultra subscribers.



![Security operations screens in a darkened control room](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)



## Safeguards Google lists before broad access

Google groups remaining work into four buckets.

1. **Misuse.** Argon is trained to refuse cyber and CBRN attack requests while allowing legitimate dual-use science, under the Frontier Safety Framework. Google also cites monitoring of internal activations and red-team tests.
2. **Prompt injection.** Google calls Argon its most resilient model so far against indirect prompt injection and says it leads Gray Swan’s IPI benchmark.
3. **Misalignment monitors.** Separate systems watch chain-of-thought and actions and can stop a run that goes beyond the user’s intent. Google says training-run alerts go to an incident team, and findings are not fed back into training in a way that would teach the model to hide from monitors.
4. **Hardened sandboxes.** High-risk training and evals run in isolated, sealed environments, following DeepMind’s agent control roadmap.

None of that is a how-to for offensive work. Public users should expect refusals on exploit requests.

## How to prepare your stack

You cannot call a public `gemini-4-argon` model ID yet. Use the wait to tighten evaluation and cost controls.

**1. Split workloads.** Keep Gemini 3.8 Flash for low-latency chat, TTS, and Live sessions. Reserve Argon-class spend for multi-hour coding, legal or finance research, and long document or video analysis.

**2. Budget for output.** A 1M-token completion at $10 per million output tokens is $10 before cache. Design agents that summarize intermediate state instead of dumping every trace into the next turn.

**3. Turn on caching.** A 95% discount on cached input is the main cost lever for repeated codebases, policy manuals, or case files.

**4. Write task-level tests.** Port DeepSWE-style tickets from your own backlog: reproduce a bug, propose a patch, run tests, and stop when review is required. Score against 3.8 Flash and your current coding agent.

**5. Isolate tools.** Give any future Argon agent a sandboxed repo, read-only credentials first, and an explicit stop policy. That matches how Google describes its own migration audits.

**6. Watch two release surfaces.** API first for paid customers, then Google AI Ultra in the Gemini app. Skills and Gems in consumer chat are a separate rollout.

## Tips while you wait

- Read the Fairwind and Frontier Safety pages if you work in defense or incident response. Access is application-based, not a public waitlist button in AI Studio.
- Do not delete 3.8 Flash integrations. Live, TTS, and Flash remain the production path for voice and high-QPS apps.
- Recheck prices when the introductory window ends. The footnote doubles both input and output rates.
- Treat Wiz and internal Google stories as existence proofs, not SLAs for your environment.

## Conclusion

Gemini 4 Argon is a restricted frontier release, not a drop-in replacement for Gemini 3.8 Flash. The useful facts for planners are the 1M output window, $2 / $10 introductory API rates, Fairwind-first access, and Google’s own mixed benchmark table.

Build eval harnesses and cache strategy now. Switch model IDs only when Google publishes them for paid API and Ultra customers.

## Sources

- [Gemini 4 Argon: our next era of frontier intelligence](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) — Google Blog, 30 Sep 2026
- [Gemini models](https://deepmind.google/models/gemini/) — Google DeepMind
- [Fairwind Program](https://deepmind.google/fairwind-program/) — Google DeepMind
- [Google's new frontier AI model Gemini 4 Argon goes to cybersecurity defenders first](https://siliconangle.com/2026/09/30/googles-new-frontier-ai-model-gemini-4-argon-goes-to-cybersecurity-defenders-first/) — SiliconANGLE
