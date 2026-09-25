---
title: "How to Try Gemini 3.8 Flash in the App and API"
description: "Set up Gemini 3.8 Flash in the Gemini app, AI Mode, Sheets, and the Gemini API. Pricing, thinking levels, and Fairwind limits."
pubDate: 2026-09-25T10:30:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Google shipped Gemini 3.8 Flash on 2 September 2026 as the workhorse model in the Flash line. It keeps the same introductory API price as 3.7 Flash and targets long coding jobs, multi-step agents, and specialist analysis. This guide covers where you can use it today, how to pick a thinking level, and why Flash Cyber is not a public toggle.

The facts below come from Google’s launch post and the Gemini API model page. Availability still rolls out by product and plan, so treat a missing model name as a rollout gap, not a broken install.

## What 3.8 Flash is for

Gemini 3.8 Flash is the public model. Google positions it for software engineering, agent loops, and multi-step work in finance, legal, and other specialist fields. Official list price through 31 December 2026 is $0.75 per million input tokens and $3.75 per million output tokens. On 1 January 2027 those rates become $1.50 and $7.50.

The model ID is `gemini-3.8-flash`. The API accepts text, image, video, audio, and PDF input and returns text. Context is 1,048,576 input tokens and 65,536 output tokens. Thinking levels are `low`, `medium`, and `high`. `minimal` is not supported and returns an error. Default thinking is `medium`.

Built-in tools listed on the model card include caching, code execution, computer use (preview), file search, function calling, Maps grounding, Search grounding, structured outputs, and URL context. It does not generate images or audio and it does not run on the Live API.

For a voice session instead of this text model, use the [Gemini 3.8 Live API setup](/blog/gemini-3-8-live-api-guide/).

## Where consumers can open it

Google lists three consumer surfaces for Google AI Pro and Ultra subscribers:

- The [Gemini app](https://gemini.google.com/)
- [AI Mode](https://google.com/ai) in Search
- Gemini in [Google Sheets](https://sheets.new/)

Enterprise teams can pick the model in [Gemini Enterprise](https://console.cloud.google.com/agent-platform/studio/multimodal?mode=prompt&model=gemini-3.8-flash).

Developers can call it from the [Gemini API](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) and from [Google AI Studio](https://aistudio.google.com/).

If you are on the free Gemini plan and the model picker still shows 3.7 Flash, that matches Google’s published plan split. Stay on 3.7 for cheap, short tasks. Google still supports 3.7 Flash for efficiency-first workloads.



![Developer working at a laptop with code on screen](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)



## Step-by-step: Gemini app and Sheets

1. Sign in with the Google Account that holds AI Pro or Ultra.
2. Open the Gemini app on the web or phone.
3. Open the model menu and select **Gemini 3.8 Flash** when it appears.
4. Start with a bounded job: refactor one file, draft a table, or plan a short agent flow. Do not dump an entire repo on the first turn.
5. In Sheets, open a spreadsheet, start Gemini, and ask for a formula, a cleanup plan, or a narrative of the current range. Keep source rows visible so you can check citations against the grid.

Google says 3.8 Flash “works harder” on complex tasks. It may run extra reasoning steps and extra tool calls. That raises token use even when the per-token price looks low. Watch the usage meter on long agent jobs.

## Step-by-step: Gemini API

1. Create an API key in Google AI Studio.
2. Call `gemini-3.8-flash` with `generateContent` or the Interactions API.
3. Set thinking to `low` when latency and cost matter more than depth.
4. Leave `medium` as the default for mixed coding and research.
5. Use `high` only when the task needs extra loops and you accept more output tokens.
6. Enable only the tools the job needs. Computer use is still preview.
7. Keep 3.7 Flash in your config for batch jobs that must stay cheap after the January 2027 price change.

Batch, Flex, and Priority inference are supported on the model card. Caching is supported. If you already cache prompts on 3.7, re-measure cache hit cost on 3.8 before you migrate every job.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ms5sV___I_E"
    title="Gemini 3.8 Flash Review: Thinking Levels, API Costs and Flash Cyber Explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Google published on quality

Google’s launch post reports that 3.8 Flash beats most larger frontier models on DeepSWE v1.1 for long-horizon software engineering, at Flash cost. It also cites gains on Vals Finance Agent V2 and Harvey’s Legal Agent Benchmark versus 3.7 Flash and other frontier models, plus 54.9% on HLE-Verified.

Those numbers are Google’s published scores. They are not a guarantee that your private codebase or legal pack will match the bench. Run a short eval set of your own tickets before you switch production agents.

Google also showed Antigravity demos: a 3D castle game from a looping prompt, a playable DOS-style Maps build, a topographic map using U.S. Geological Survey data, and a Three.js hardware teardown in AI Studio. Treat those as product demos, not templates you must copy.



![Close-up of hands typing on a laptop keyboard](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)



## Flash Cyber and the Fairwind Program

Gemini 3.8 Flash Cyber is a separate model. Google says it is built for vulnerability detection and automated patching, and it is **not** in the public Gemini app. Access runs through the [Fairwind Program](https://deepmind.google/fairwind-program/) for trusted defenders.

Fairwind is aimed at governments and national cyber authorities, critical infrastructure operators, and core technology platforms. Google says more than 650 partners participate. Partners agree to limit use to internal security, incident response, or penetration testing staff and to use controls such as multi-factor authentication.

Google pairs Flash Cyber with the [CodeMender](https://cloud.google.com/security/codemender) harness so defenders can find, verify, and patch inside their own cloud. Other Google Cloud customers can use CodeMender with public models on Gemini Enterprise Agent Platform plus [AI Threat Defense](https://cloud.google.com/security/ai-threat-defense).

Do not expect a “Cyber” switch next to 3.8 Flash in the consumer app. If you need defender access, apply on the Fairwind page. If you only need a stronger coding model, stay on public 3.8 Flash.

Google states that 3.8 Flash includes safeguards against misuse in CBRN and cyber offense under its Frontier Safety Framework. Flash Cyber uses a more permissive cyber mitigation set, which is why it stays gated.

## Practical tips

- Start one repo or one spreadsheet, not five products at once.
- Prefer `low` thinking when you only need a first draft.
- Log token counts for a week before you lock in 3.8 as the default agent model.
- Keep 3.7 Flash as a fallback for high-volume, low-stakes jobs after 31 December 2026.
- Confirm computer-use calls stay in a sandbox. The capability is still preview.
- For voice agents, switch to the Live models instead of forcing Flash to speak.

## Conclusion

Gemini 3.8 Flash is the model to try if you already pay for Pro or Ultra, or if you ship agents on the Gemini API. Pick it for long coding and tool-heavy work. Leave Flash Cyber to Fairwind partners. Measure tokens on real tasks before you retire 3.7 Flash.

Open the model picker, run one bounded job, and compare the result against your current default. That is the only test that matters for your stack.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google, 2 September 2026
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Google AI for Developers
- [What’s new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) — Google AI for Developers
- [Fairwind Program](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/) — Google
- [Fairwind application page](https://deepmind.google/fairwind-program/) — Google DeepMind
