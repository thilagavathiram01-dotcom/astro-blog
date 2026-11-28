---
title: "How to Use Gemini 4 Neon in the Gemini API"
description: "Practical guide to Gemini 4 Neon: access, pricing, thinking levels, Python examples, and best practices for coding and agent workflows."
pubDate: 2026-11-28T10:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer", "google"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It sits between Gemini 4 Hydrogen (everyday speed) and Gemini 4 Carbon (maximum depth). Neon delivers frontier-level reasoning for complex software engineering, knowledge work, and science tasks at lower cost per task than larger models.

This guide shows how to access it, set thinking levels, run your first Python calls, and apply it in production agents. For Hydrogen integration on Android, see our related post on [adding Gemini 4 Hydrogen with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## What Gemini 4 Neon offers

Neon uses model ID `gemini-4-neon`. It has a unified 1,048,576-token context window shared across input, thinking, and output. Default synchronous output is 65,536 tokens. Long decode on the Interactions API or GenerateContent (v1beta) can reach the full remaining window.

Inputs support text, images, audio, video, and PDFs. Output is text. It is adapted from Gemini 4 Carbon and includes strong safeguards against misuse while declining less legitimate work than earlier models.

Neon ranks highly on independent indexes. At its xhigh thinking level it scored 61 on the Artificial Analysis Intelligence Index (third overall at launch) and placed on the Pareto frontier of the Vals Index. It also leads or ranks near the top on coding-agent, legal, tax, and scientific benchmarks according to Google’s announcement.

![Multiple computer screens showing code under neon lighting](https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=800&q=80)

## Access and pricing

Neon is available on the paid tier of the Gemini API in Google AI Studio, Gemini for business, Google Antigravity (Pro and Ultra subscribers), and the Gemini app (Pro and Ultra). There is no free tier.

Pricing is flat across the entire context window:

- Input: $3 per million tokens
- Cached input: $0.15 per million tokens (95% discount, implicit caching only)
- Output (including thinking tokens): $15 per million tokens

Batch and Flex run at half price. Priority costs more. After 1 December 2026, Carbon and Argon move to $4 input / $20 output, making Neon more cost-efficient than Carbon for many workloads at that point.

Create a paid API key in Google AI Studio. Store it as an environment variable (`GEMINI_API_KEY` or `GOOGLE_API_KEY`). Never commit keys to source control.

## Thinking levels

Neon supports four thinking levels: low, medium, high (default), and xhigh. Set them with `thinking_level`. The older `thinking_budget` parameter and the `MINIMAL` level return a validation error.

Higher levels increase reasoning depth and token use. High is the default and balances quality with speed. Use xhigh for the hardest multi-step engineering, analysis, or scientific tasks. Low or medium suit simpler or latency-sensitive work.

Sampling parameters (temperature, top_p, top_k) are ignored. Rely on clear prompts and structured outputs for consistency.

## Python quickstart

Install the latest Google Gen AI SDK (`google-genai` 2.34.0 or later):

```bash
pip install --upgrade "google-genai>=2.34.0"
```

Basic GenerateContent call with high thinking:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-neon",
    contents="Review this function for bugs and suggest a fix:\n\ndef avg(xs): return sum(xs) / len(xs)",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="HIGH"),
    ),
)
print(response.text)
```

For multi-turn or agent workflows, use the Interactions API:

```python
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Design a lock-free ring buffer in Rust for multi-producer telemetry.",
    store=True,
    generation_config={"thinking_level": "high"},
)
print(interaction.output_text)
```

Reuse `previous_interaction_id` for follow-ups. The server stores state by default when `store=True`.

![Close-up of a neon-lit mechanical keyboard on a coding desk](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Practical tips for agents and production

Start with high thinking. Measure cost and latency on your own traffic before moving to xhigh. Neon is designed for long-horizon agent work and can act as an orchestrator directing faster Hydrogen sub-agents in Antigravity.

It handles multi-file debugging, targeted edits, and context compaction reliably. Combine it with function calling, code execution, Google Search grounding, or file search. For large tool libraries, pair it with Tool Retrieval (preview on the Interactions API) so parameter schemas load on demand.

Use structured outputs when you need reliable JSON or schema-constrained responses. Implicit caching reduces cost on repeated prefixes (minimum 4,096 tokens). Explicit caching is not supported on Neon.

Watch token usage. Thinking tokens count as output. Long videos or dense PDFs still consume context; use the newer file slicing controls when you only need specific pages or segments.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qILbkkGhzWE"
    title="The New Google AI Studio Can Build Anything"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Where Neon fits in the Gemini 4 lineup

- Hydrogen: default for everyday coding and agent workflows. Available on free and paid tiers. Faster and cheaper.
- Neon: complex engineering, knowledge work, and science that need frontier quality with strong cost efficiency. Paid only.
- Carbon: hardest long-horizon architecture, debugging, formal proofs, and security work.
- Argon: fast frontier reasoning for demanding workflows.

Google reports Neon completing tasks at roughly 32% lower cost than Carbon at the default high setting, and more than 36% lower cost per task than competing models at their highest settings when using xhigh. Early enterprise feedback notes strong performance on codebases, charts, spreadsheets, and multi-step instruction following with lower fabrication rates.

## Conclusion

Gemini 4 Neon gives developers a practical middle path: frontier-level results on complex coding and analytical tasks without the full cost of the largest models. Set the model ID to `gemini-4-neon`, choose a thinking level, and start with the official Python SDK. Test on your own workloads, monitor token spend, and pair it with the rest of the Gemini 4 family as needed.

Official sources:
- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
- [Gemini API documentation](https://ai.google.dev/gemini-api/docs)
- [Gemini 4 Neon model card](https://deepmind.google/models/model-cards/gemini-4-neon/)
