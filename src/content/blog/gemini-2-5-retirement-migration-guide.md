---
title: "Gemini 2.5 Retirement: Migrate Before December 1 Reroute"
description: "Gemini 2.5 Pro and Flash retire in the Gemini API on Dec 1 2026 with automatic reroutes to 3.8 Flash and 3.5 Flash-Lite. Migration checklist and pricing."
pubDate: 2026-11-09T10:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "developer", "ai-tools"]
noindex: false
---

Google deprecated gemini-2.5-pro and gemini-2.5-flash in the Gemini API on November 2, 2026. From December 1, requests to those model IDs automatically route to newer models and bill at the new rates.

This affects any code, automation, or third-party tool that still names the 2.5 models. The Gemini app and Workspace integrations stay unaffected. Vertex AI already retired the 2.5 models on October 20, 2026.

Act before December 1 so you control the switch instead of discovering failures later.

## What changes on December 1

The [Gemini API deprecations page](https://ai.google.dev/gemini-api/docs/deprecations) and the November 2 changelog entry confirm the schedule:

| Model ID you call today | Routes to from Dec 1 | Billed at |
| --- | --- | --- |
| gemini-2.5-pro | gemini-3.8-flash | Gemini 3.8 Flash rates |
| gemini-2.5-flash | gemini-3.5-flash-lite | Gemini 3.5 Flash-Lite rates |
| gemini-2.5-flash-lite | Unchanged | Unchanged (no shutdown announced) |

Both models left the Google AI Studio model picker. API access continues only for projects that already used them. New projects must start on current models.

![Server racks in a data center](https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80)

## Pricing after the reroute

Gemini 3.8 Flash carries introductory pricing through December 31, 2026: $0.75 per million input tokens and $3.75 per million output tokens. From January 1, 2027 the rates double to $1.50 input and $7.50 output.

Gemini 3.5 Flash-Lite stays at $0.30 input and $2.50 output, matching the previous Gemini 2.5 Flash text rates. Context caching also doubles on 3.8 Flash after the year ends.

Review your volume forecasts now. Higher thinking levels on 3.8 Flash can increase token use on complex tasks because the model reasons longer by design.

## Breaking changes you must handle

Automatic routing does not preserve every 2.5-era parameter. The official migration guides list these changes:

- `thinking_budget` (integer) is gone. Use `thinking_level` with the string values `low`, `medium`, or `high`. Gemini 3.8 Flash rejects `minimal` with an error. Gemini 3.5 Flash-Lite defaults to `minimal`.
- Sampling parameters (`temperature`, `top_p`, `top_k`) are ignored today and will return errors on later generations. Remove them.
- `candidate_count` is unsupported. Make separate requests if you need multiple drafts.
- Prefilled model turns are rejected. A request that ends on a model role returns HTTP 400. End on a user turn or move steering into the system instruction.
- Function calling now requires matching `call_id` and `name` on every function response. Preserve `thought_signature` values across multi-turn tool loops.

Test every production path against the target model before December 1. Quality, latency, and cost can all shift even when the call succeeds.

![Developer typing code on a laptop](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Migration checklist

1. Search your codebase, configs, and vendor integrations for the strings `gemini-2.5-pro` and `gemini-2.5-flash`.
2. Change the model ID to `gemini-3.8-flash` (for former Pro workloads) or `gemini-3.5-flash-lite` (for former Flash workloads). See our guide on [adding Gemini 3.8 Flash to Android apps with Firebase AI Logic](/blog/add-gemini-3-8-flash-android-firebase-ai-logic/).
3. Replace any `thinking_budget` with `thinking_level`. Start with `medium` on 3.8 Flash and `minimal` on 3.5 Flash-Lite, then adjust after testing.
4. Strip sampling parameters, `candidate_count`, and any trailing model turns.
5. Audit function-calling loops for required IDs and thought signatures.
6. Run your evaluation suite or a representative sample of production prompts. Compare output quality, token counts, and latency.
7. Update billing alerts for the January 1 price step on 3.8 Flash.
8. Deploy the change and monitor error rates for the first 48 hours after December 1.

If you use a coding agent that supports skills, the Gemini API documentation recommends the gemini-api-dev skill for an automated pass.

## Watch a walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/y52bv4iNfzU"
    title="Gemini 3.8 Flash Explained in 7 Minutes - Benchmarks, Cost, First Impressions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a smooth cutover

Keep the old model ID behind a feature flag until you finish testing. That lets you roll back instantly if quality drops on a critical path.

For high-volume extraction or classification, Gemini 3.5 Flash-Lite is usually the lower-cost choice. For multi-step agents, coding, or long-context reasoning, Gemini 3.8 Flash at medium or high thinking level is the stronger default.

Document the new model and thinking level in your runbooks so the next person who touches the integration does not reintroduce a deprecated parameter.

## Conclusion

Gemini 2.5 Pro and Flash stop being first-class citizens in the Gemini API on December 1, 2026. Requests will still return answers, but they will come from different models under a different contract and, for 3.8 Flash, under a temporary introductory price that ends on January 1.

Update your model strings, remove the deprecated parameters, and test this month. The official sources are the [Gemini API deprecations page](https://ai.google.dev/gemini-api/docs/deprecations), the [November 2 changelog entry](https://ai.google.dev/gemini-api/docs/changelog), and the migration sections in the Gemini 3.8 Flash and Gemini 3.5 Flash-Lite guides.

Sources:
- https://ai.google.dev/gemini-api/docs/deprecations
- https://ai.google.dev/gemini-api/docs/changelog
- https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.8
- https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.6
