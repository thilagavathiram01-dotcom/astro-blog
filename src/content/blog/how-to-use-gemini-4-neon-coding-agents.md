---
title: "How to Use Gemini 4 Neon for Coding Agents"
description: "Step-by-step guide to Gemini 4 Neon for complex coding, agent workflows, and knowledge work in the Gemini API and Google AI Studio."
pubDate: 2026-11-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It targets complex software engineering, knowledge work, and science tasks with faster end-to-end completion than larger models. Neon sits between Gemini 4 Hydrogen for everyday speed and Gemini 4 Carbon for the hardest long-horizon problems. It costs $3 per million input tokens and $15 per million output tokens, with a 95 percent discount on cached input. The model supports a unified 1 million-token context window and long decode up to 1 million tokens.<grok type="render_inline_citation" citation_id="574" />

Developers use Neon in the Gemini API, Google AI Studio, Google Antigravity (on paid Pro and Ultra plans), and the Gemini app for Pro and Ultra subscribers. It ranks #3 on the Artificial Analysis Intelligence Index at its xhigh thinking level and #1 on the Artificial Analysis Coding Agent Index. On Terminal-Bench 4.1 it scores 65.2 percent, and on FrontierCode 2.0 it reaches 46.2 percent at the default high setting.<grok type="render_inline_citation" citation_id="613" />

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Set up the Gemini API

Install the Google GenAI SDK. For Python:

```bash
pip install -U google-genai
```

Create a client with your API key from Google AI Studio. The key authenticates requests to the paid tier. Neon is not available on the free tier.

```python
from google import genai

client = genai.Client()
```

Set the environment variable `GEMINI_API_KEY` or pass the key directly. The same client works for both the Interactions API and GenerateContent.

## Send your first request

The Interactions API is the recommended path for Neon. By default the model uses the high thinking level and a 64K synchronous output limit.

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Build an interactive single-file HTML token bucket rate-limiter simulator with live sliders for burst size and request traffic."
)

print(interaction.output_text)
```

The response returns the generated text. For JavaScript or REST, use the equivalent client methods or the `/v1beta/interactions` endpoint. Neon also works with the classic GenerateContent API if your existing code already uses it.

## Control thinking levels

Neon offers four thinking levels: low, medium, high (default), and xhigh. Higher levels increase reasoning depth, latency, and token use. Start with high for most coding and agent work. Switch to xhigh only when high falls short on multi-step problems.<grok type="render_inline_citation" citation_id="634" />

```python
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Audit this payment retry queue for race conditions and rewrite the lock acquisition logic.",
    generation_config={
        "thinking_level": "xhigh"
    }
)
print(interaction.output_text)
```

Low and medium suit latency-sensitive chat or high-throughput processing. Measure your own tasks at each level with a high `max_output_tokens` so the limit does not truncate answers. Then pick the lowest level that meets quality needs.

![Close-up of a mechanical keyboard under RGB lighting](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Handle long outputs

Synchronous responses stop at 65,536 tokens. For longer generation, set `background=True` and raise `max_output_tokens`. The server continues in 64K-token hops. Poll the interaction until it finishes, then join the text steps.

```python
import time
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Generate a complete multi-module migration specification and test suite for this service.",
    background=True,
    generation_config={
        "max_output_tokens": 262144,
        "thinking_level": "high",
    },
)

while interaction.status in ("in_progress", "queued"):
    time.sleep(5)
    interaction = client.interactions.get(id=interaction.id)

text = "".join(
    content.text
    for step in interaction.steps
    if step.type == "model_output"
    for content in step.content
    if content.type == "text"
)
print(text)
```

Client-side continuation is also available in the latest SDKs. Leave headroom in `max_output_tokens` for the final answer after thinking tokens.

## Use Neon in Google Antigravity

On paid Google AI Pro and Ultra plans, Neon appears in the Antigravity app, CLI, and IDE extensions. It becomes the default for new conversations on plans that include it. Orchestrator (Neon) pairs Neon as planner and reviewer with Hydrogen for implementation. Select Orchestrator (Neon) in the model picker under the prompt box.<grok type="render_inline_citation" citation_id="614" />

In the CLI, request a specific thinking level with `--model gemini-4-neon-xhigh` or `--effort xhigh`. Context in Antigravity reaches 512K tokens. For custom subagents, the YAML frontmatter accepts tier names (`inherit`, `flash`, `pro`) rather than exact model IDs. Use `/swarm` to assign specific models like Gemini 4 Neon to individual workers.

If Neon shows as unavailable, confirm a paid non-trial Pro or Ultra plan on a personal Gmail account, complete age verification, and restart the app after signing out and back in. Carrier-bundle or trial plans may not unlock Neon.

## Tips for coding agents

Neon reduces redundant file reads and handles context compaction reliably in long sessions. It records the lowest fabrication rate among Gemini 4 models in internal Antigravity testing. Pair it with function calling, code execution, or computer use tools for multi-step workflows.

For cybersecurity tasks, Neon for cyber is available to approved defenders through the Fairwind Program. On general coding it produces more secure code than Carbon on AutoBaxBench hard challenges.

Monitor token use. Implicit caching applies a 95 percent discount to cached input starting at 4,096 tokens. Test on your own repositories before switching production agents.

## Conclusion

Gemini 4 Neon gives developers a practical middle path for complex coding and knowledge work. Install the Google GenAI SDK, call `gemini-4-neon` on the Interactions API, and tune the thinking level to balance quality and cost. In Antigravity, use it standalone or as an Orchestrator with Hydrogen. Official sources confirm the pricing, thinking levels, and availability details above.

For related on-device retrieval patterns, see our guide to [EmbeddingGemma 2 on-device search](/blog/embeddinggemma-2-on-device-search/).

## Sources

- Introducing Gemini 4 Neon, Google blog, 18 November 2026. https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
- What's new in Gemini 4 Neon, Google AI for Developers. https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-neon
- Gemini 4 Neon model card, Google DeepMind. https://deepmind.google/models/model-cards/gemini-4-neon/
- Gemini API release notes, November 2026. https://ai.google.dev/gemini-api/docs/changelog

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
