---
title: "How to Use Long Decode with Gemini 4 Argon"
description: "Step-by-step guide to unlock up to 1M token outputs with Gemini 4 Argon long decode on the Gemini API. Set thinking levels and max tokens."
pubDate: 2026-10-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Gemini 4 Argon changes how developers handle complex tasks. The model supports a unified 1 million token window that covers input, thinking, and output. For work that needs more than the per-request limit, long decode lets a single generation continue across hops up to the full window.

Previous Gemini models capped output near 64K tokens. Argon keeps the same synchronous defaults but adds automatic continuation in the latest SDKs. You can request formal proofs, multi-file code migrations, or detailed research reports in one call. This guide shows the exact steps from Google’s developer documentation.

If you are new to the model, start with our [Gemini 4 Argon developer quickstart](/blog/gemini-4-argon-developer-quickstart/).

## What long decode actually does

A single model call still generates at most 65,536 tokens when streaming or 32,768 tokens for a non-streaming REST call. Long decode removes that hard stop for the overall generation. The server or SDK continues from a checkpoint until the model finishes or you hit the `max_output_tokens` you set.

The unified limit is 1,048,576 tokens total. Your input tokens reduce the room left for thinking plus output. Thinking tokens count toward the same budget. Set `max_output_tokens` high enough that thinking does not truncate the final answer.

![Developer working on a laptop with code on the screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a paid Gemini API key. Argon is not available on the free tier. Install the latest Google GenAI SDK:

- Python: `google-genai` version 2.30.1 or higher
- JavaScript: `@google/genai` version 2.29.1 or higher

Set your API key in the environment. Increase HTTP client timeouts to at least 20 minutes because long generations take time. Implicit caching still applies and discounts repeated input by 95 percent.

## Enable long decode with generateContent

The latest SDKs set `automatic_continuation` to true by default. Raise `max_output_tokens` above the per-request cap and the library handles the loop.

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-argon",
    contents="Write a complete, rigorous proof of the prime number theorem.",
    config=types.GenerateContentConfig(
        max_output_tokens=262144,
        thinking_config=types.ThinkingConfig(thinking_level="high"),
        automatic_continuation=True,
    ),
)
print(response.text)
```

The same pattern works in JavaScript. For complex coding or math, start with 131072 or 262144 tokens. You can go up to 1,048,576 minus your input length.

If you set `automatic_continuation=False` or call the REST endpoint directly, the response stops at the per-request limit and returns a `continuation_token`. Send that token with the original prompt on the next request to resume.

![Abstract visualization of data flows and neural network patterns](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80)

## Use the Interactions API for background execution

The Interactions API supports background mode. Set `background=True` and `max_output_tokens` above 65536. The server generates in 64K hops and stores each as a step under the same interaction ID.

```python
import time
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-argon",
    input="Write a complete, rigorous proof of the prime number theorem.",
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
    c.text
    for s in interaction.steps if s.type == "model_output"
    for c in s.content if c.type == "text"
)
print(text)
```

Join the `model_output` steps when the status reaches completion. Background execution can run for up to 24 hours.

## Control quality with thinking levels

Thinking level is the main dial for depth versus cost:

- **low** uses the fewest tokens and returns the fastest. Use it for simpler analysis or cost-sensitive batches.
- **medium** is the default. It balances quality for most coding and agent work.
- **high** spends the most tokens. Pair it with long decode for hard math, formal proofs, or large refactors.

Test the same prompt at all three levels with a generous `max_output_tokens` before you lock a production setting. Published benchmarks used the high setting.

## Pricing and practical tips

Introductory pricing through November 30, 2026 is $2 per million input tokens and $10 per million output tokens (including thinking). After that the rates become $4 and $20. Implicit cache hits drop the input price by 95 percent.

A full 1M-token output therefore costs $10 during the intro window. Raise `max_output_tokens` only as high as the task needs. Monitor finish reasons: `MAX_TOKENS` means you can resume with a higher limit and the continuation token.

Increase client timeouts, preserve thought signatures in multi-turn chats, and remove deprecated sampling parameters. Explicit context caching is not supported on Argon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Long decode turns Gemini 4 Argon into a practical tool for work that previously required multiple chained calls. Upgrade the SDK, set a suitable thinking level, and raise the output token limit. The library or the Interactions API handles the hops. Start with a medium or high thinking level on a representative prompt and measure token use before you scale.

Check the official long-decode and model pages for the latest limits and examples.

## Sources

- [What's new in Gemini 4 Argon – generateContent API](https://ai.google.dev/gemini-api/docs/generate-content/latest-model)
- [Gemini 4 Argon model page](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
- [Gemini 4 Argon: Developer Guide](https://aistudio.google.com/learn/gemini-4-argon-developer-guide)
- [Gemini 4 Argon announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
