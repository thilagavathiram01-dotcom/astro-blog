---
title: "Control Thinking Levels on Gemini 4 Hydrogen"
description: "How to set low, medium, high, and xhigh thinking levels on Gemini 4 Hydrogen in the API to balance speed, cost, and quality for coding tasks."
pubDate: 2026-11-13T19:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "how-to"]
noindex: false
---

Google released Gemini 4 Hydrogen on November 12, 2026, as the fast everyday model in the Gemini 4 family. It replaces Gemini 3.8 Flash across AI Studio, the Gemini API, the Gemini app, and Google Search. Developers get four thinking levels: low, medium, high (the default), and a new xhigh tier. These levels control how long the model reasons before answering, which directly affects latency, token use, and cost.

Unlike earlier Flash models that defaulted to medium, Hydrogen starts at high. That change alone can raise bills if you migrate without adjusting the parameter. Thinking tokens bill at the output rate of $7.50 per million tokens. The input rate stays flat at $1.50 per million across the full 1 million-token context window. Cached input costs $0.075 per million via implicit caching.

This guide shows how to set the levels in the official Google GenAI SDK, when each level makes sense, and how the cost scales based on Google’s published pricing and independent evaluations.

## What the four thinking levels do

Thinking levels are discrete settings, not a continuous budget. Google documents them as LOW, MEDIUM, HIGH, and XHIGH for Hydrogen. The model always thinks; you cannot turn thinking off. Setting thinking_budget or thinking_level="MINIMAL" returns an HTTP 400 error.

- **low**: Fewest thinking tokens and lowest latency. Use it for classification, simple extraction, or high-volume chat where speed matters more than depth.
- **medium**: Balanced reasoning for routine coding, tool calls, and document Q&A.
- **high** (default): Deeper multi-step reasoning for coding, agent loops, and multimodal work. Google reports it finishes tasks 2.5 times faster than 3.8 Flash at this setting while more than tripling Terminal-Bench 4.1 scores (57% versus 18.2%).
- **xhigh**: Maximum reasoning depth, only on Hydrogen. Reserve it for hard multi-step problems where high falls short. Artificial Analysis data shows the Intelligence Index rising from 51 at high to 54 at xhigh, but cost per task rising about 69%.

Sampling parameters such as temperature, top_p, and top_k are ignored. Remove them from requests to avoid deprecation warnings.

![Developer working at a laptop with code on the screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Set thinking levels in the Gemini API

Install or upgrade the Google GenAI SDK first:

```bash
pip install --upgrade "google-genai>=2.34.0"
```

Set your API key as the environment variable GEMINI_API_KEY. The Interactions API is the current recommended surface.

Basic call with an explicit level:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input="Write a Python function that retries an HTTP request with exponential backoff and jitter.",
    generation_config={
        "thinking_level": "medium",
        "max_output_tokens": 65536,
    },
)
print(interaction.output_text)
```

Valid string values are "low", "medium", "high", and "xhigh". The default is "high".

For the older generateContent surface the equivalent uses types.ThinkingConfig:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-hydrogen",
    contents="Review this retry queue for race conditions and rewrite the lock logic.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(
            thinking_level="xhigh",
        ),
    ),
)
print(response.text)
```

In Google AI Studio you can select the thinking level in the model settings dropdown before you run a prompt. The same four options appear.

If you are migrating from Gemini 3.8 Flash, note that omitting the parameter now defaults to high instead of medium. Explicitly set medium or low on high-volume endpoints until you measure the difference.

For more on the base API setup, see our [Gemini 4 Hydrogen API guide](/blog/how-to-use-gemini-4-hydrogen-api-guide/).

## Cost and speed trade-offs

Google prices Hydrogen flat at $1.50 input and $7.50 output (thinking included) per million tokens on the paid Standard tier. Batch and Flex tiers cut both rates in half. A free tier exists with rate limits.

Independent evaluations on the Artificial Analysis Intelligence Index illustrate the practical effect. At low the index score is around 27 and cost per task roughly $0.29. Medium reaches about 41 at $0.80. High (default) hits 51 at approximately $1.87. Xhigh reaches 54 at $3.16. The largest score gain per dollar occurs moving from medium to high. The jump from high to xhigh adds only three points for a 69% cost increase.

Because thinking tokens dominate the bill on complex tasks, the level you choose often matters more than the base rate. Partners reported Hydrogen running 2x to 2.8x faster than 3.8 Flash while using 12% to 23% fewer tokens on certain enterprise workflows at the default setting.

![Abstract data flow visualization representing model reasoning](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Practical tips for everyday coding

Start every request with an explicit thinking_level. Do not rely on the default if your workload is high-volume or latency-sensitive.

- Use low or medium for interactive UI prototyping, quick code completions, and simple tool calls.
- Stay at high for repository debugging, multi-step agents, and multimodal document work. This is where Google positions the model as the daily driver.
- Reserve xhigh for the minority of tasks where high produces incomplete or incorrect results. Measure token use before rolling it out broadly.
- Prefer Batch or Flex for non-interactive jobs. The half-price rate applies to both input and output.
- Keep long static prefixes (4,096 tokens or more) at the start of prompts so implicit caching can apply the 95% discount on cache hits.
- Drop custom temperature and top_p values. They are ignored.

When pairing with frontier models such as Carbon or Argon inside Google Antigravity, the Orchestrator feature can route planning steps to the larger model and execution steps to Hydrogen. Google reports near-Carbon success rates with lower quota use and faster completion on Terminal-Bench 4.0 when Orchestrator switches models mid-session.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/M4QX9CHkaYM"
    title="Gemini 4 Hydrogen is now available to everyone as our latest model for fast, everyday help."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Hydrogen gives developers a fast, capable model with explicit control over reasoning depth. Setting the thinking level on every call lets you match cost and latency to the task instead of accepting the high default everywhere. Start with medium for routine coding work, move to high for agents, and test xhigh only where the extra depth pays for itself.

Official details live in the Gemini API documentation, the model card on deepmind.google, and the November 12, 2026 announcement on blog.google. Pricing and thinking configuration can change; check the current docs before production use.

Sources:
- https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
- https://ai.google.dev/gemini-api/docs/models/gemini
- https://deepmind.google/models/model-cards/gemini-4-hydrogen/
- Gemini API thinking documentation and Google Cloud developer guides for Gemini 4 Hydrogen
