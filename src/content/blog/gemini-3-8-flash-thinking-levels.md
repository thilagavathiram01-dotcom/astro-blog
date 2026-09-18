---
title: "How to Use Gemini 3.8 Flash Thinking Levels for Coding and Agents"
description: "A practical developer guide to Gemini 3.8 Flash: pick low, medium, or high thinking_level, call the Interactions API, migrate off thinking_budget, and use the Antigravity agent."
pubDate: 2026-09-18T11:00:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80"
---

Gemini 3.8 Flash is Google’s current workhorse text model for coding and agents. It is generally available as `gemini-3.8-flash`. The setting that actually changes latency, token use, and first-pass quality is **`thinking_level`**: `low`, `medium`, or `high`.

This guide follows Google’s [What’s new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/latest-model) docs and the [Gemini thinking](https://ai.google.dev/gemini-api/docs/thinking) page. It is for the **text** model, not Gemini 3.8 Live. Live is a separate speech-to-speech endpoint and does not accept `thinking_level`.

## What 3.8 Flash is for

Google positions 3.8 Flash for:

- Long-horizon software engineering (multi-file refactors, tool-using coding agents)
- Autonomous agents that plan, call tools, and recover from failed steps
- Complex enterprise workflows that need more factual rigor than a chat draft

Official limits published for the model:

- **1,048,576** input tokens (1M context)
- **65,536** max output tokens (Google also describes this as a 64k output window)
- Inputs: text, image, audio, video, PDF
- Output: text
- Built-in tools: function calling, Search as a tool, Computer Use
- Default thinking level: **medium**

Introductory API pricing published with the model is **$0.75 per 1M input tokens** and **$3.75 per 1M output tokens** through **31 December 2026**. Standard list prices of **$1.50 / $7.50** take effect **1 January 2027**. Confirm the [pricing page](https://ai.google.dev/gemini-api/docs/pricing) before you budget a production fleet.

![Developer workstation with code on a laptop and a second monitor](https://images.unsplash.com/photo-1517694719795-11d916bcaf05?auto=format&fit=crop&w=1200&q=80)

## Try it in AI Studio first

1. Open [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-3.8-flash).
2. Select **gemini-3.8-flash**.
3. Send a coding or planning prompt you already use in production.
4. Change thinking effort in the UI (or later in `generation_config`) and compare time-to-first-token and answer quality.

Do not tune `temperature`, `top_p`, or `top_k` on this family. Gemini 3.8 Flash **ignores those sampling knobs**. Control behavior with `thinking_level` and, when you need a schema, structured output.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/aqmpZocmR8o" title="Developer Keynote (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Call the model from code

Google’s current samples use the **Interactions API**. Set `GEMINI_API_KEY` and keep the model string exact.

### Python

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Write a three.js script that renders a realistic 3D black hole.",
)
print(interaction.output_text)
```

### JavaScript

```javascript
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({});

const interaction = await client.interactions.create({
  model: "gemini-3.8-flash",
  input: "Write a three.js script that renders a realistic 3D black hole.",
});

console.log(interaction.output_text);
```

### REST

```bash
curl "https://generativelanguage.googleapis.com/v1beta/interactions" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "model": "gemini-3.8-flash",
    "input": "Write a three.js script that renders a realistic 3D black hole."
  }'
```

If you still use `generateContent`, the same model ID works. Prefer Interactions for new agent work; that is the surface Google documents for 3.8 Flash first.

## Pick a thinking level

`thinking_level` is a **string enum**, not an integer token budget. On 3.8 Flash, **`minimal` is not valid** and the request fails validation. Replace any leftover `thinking_budget` integers from Gemini 2.5 configs.

| Level | When to use it |
| --- | --- |
| `low` | Incident-response chat, drafts, classification, latency-critical routes |
| `medium` (default) | Most coding agents and multi-step tools; Google’s recommended starting point |
| `high` | Hard math, long multi-step plans, dense visual or video QA |

### Medium (typical coding agent)

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=(
        "Analyze this payment processing pipeline for race conditions "
        "during retry attempts and rewrite the transaction locks safely."
    ),
    generation_config={
        "thinking_level": "medium"
    },
)
```

### Low (fast path)

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Provide a list of 3 famous physicists and their key contributions",
    generation_config={
        "thinking_level": "low"
    },
)
```

Google notes that 3.8 Flash **can spend more tokens on purpose** on long jobs: smaller reasoning steps, iterative tools, and self-checks. If a route does not need that verification, drop to `low` or keep traffic on **Gemini 3.7 Flash**, which remains fully supported.

![Close-up of code on a screen during a debugging session](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80)

## Use the Antigravity managed agent

Managed Agents on the Gemini API now default the **Antigravity** agent to 3.8 Flash. You pass an agent id instead of (or in addition to) a raw model string.

```python
interaction = client.interactions.create(
    agent="antigravity-preview-09-2026",
    input=(
        "Audit https://web.dev for performance, Core Web Vitals, and SEO. "
        "Query Google's PageSpeed Insights API for both Mobile and Desktop. "
        "Check search indexing with Google Search for site:web.dev. "
        "Format a side-by-side scorecard with prioritized fixes."
    ),
    environment="remote",
)
print(interaction.output_text)
```

Give remote agent calls a long client timeout. Official JavaScript samples use five minutes. You can still override the underlying model through `agent_config` if the Antigravity docs for your project require it.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Migration checklist from older Flash models

Google’s published checklist for 3.8 Flash:

1. Change the model string to **`gemini-3.8-flash`**.
2. Delete `temperature`, `top_p`, and `top_k` from generation configs.
3. Replace `thinking_budget` with `thinking_level` (`low` | `medium` | `high`). Do not send `minimal`.
4. Remove `candidate_count` (unsupported on Gemini 3+).
5. Keep multi-turn state on the server; do not prefill model turns.
6. For `generateContent` function calling, every `FunctionResponse` needs `call_id` and `name`.
7. Preserve thought signatures when you replay tool turns. See the Gemini 3.5 migration notes if your SDK is older.

A common production failure is a config copied from 3.6 / 3.5 Flash that still says `thinking_level: "minimal"`. That value errors on 3.8 before any tokens are generated.

## What this model does not replace

- **Voice conversations** belong on Gemini 3.8 Live, not this endpoint.
- **Image generation** belongs on Gemini Image (Nano Banana) models, not 3.8 Flash text output.
- **On-device Gemini Nano** is a different stack (ML Kit / AICore). 3.8 Flash is a cloud model.
- **3.8 Flash Cyber** is a restricted cybersecurity variant in Google’s Fairwind program, not the public Flash ID.

Google Cloud’s developer guide reports benchmark lifts versus 3.7 Flash on suites such as Terminal-bench 2.1 and SWE-Bench Pro. Treat those as lab numbers. Measure your own agent loop: tool error rate, retries, and dollars per successful task.

## A small routing policy that works

- User-facing autocomplete and short chat: `low`
- Default coding agent and tool loops: `medium`
- Overnight plans, long PDFs, or multi-hour video questions: `high`
- Cost ceiling exceeded on a route: fall back to 3.7 Flash instead of silently staying on `high`

Log `thinking_level` next to latency and output tokens. The knob is useless if you cannot see which route is burning budget.

## Conclusion

Gemini 3.8 Flash is the GA Flash model to use for coding agents in September 2026. Start with `gemini-3.8-flash` and `thinking_level: "medium"`. Drop to `low` when latency matters. Use `high` only when the extra reasoning is paying for itself. Keep Live, image models, and on-device Nano on their own endpoints.

Prototype in AI Studio, then change one string and one enum in the Interactions API. That is the whole migration for most apps.

## Sources

- [What’s new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/latest-model) — Google AI for Developers
- [Gemini thinking](https://ai.google.dev/gemini-api/docs/thinking) — Google AI for Developers
- [Gemini models overview](https://ai.google.dev/gemini-api/docs/models) — Google AI for Developers
- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google
- [Gemini 3.8 Flash model page](https://deepmind.google/models/gemini/flash/) — Google DeepMind
- [Developer’s guide to Gemini 3.8 Flash](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash) — Google Cloud
