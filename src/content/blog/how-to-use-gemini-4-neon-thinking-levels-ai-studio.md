---
title: "How to Use Gemini 4 Neon Thinking Levels in AI Studio"
description: "Step-by-step guide to Gemini 4 Neon thinking levels in Google AI Studio and API. Control reasoning depth, latency, and cost."
pubDate: 2026-11-22T11:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google released Gemini 4 Neon in mid-November 2026. The model sits between Hydrogen and Carbon in the Gemini 4 family. It brings frontier-level reasoning to high-frequency coding, knowledge work, and science tasks at lower cost than larger models.

Neon supports four thinking levels: low, medium, high (default), and xhigh. These levels control how much internal reasoning the model performs before it answers. Higher levels improve quality on hard problems but increase latency and token spend.

This guide shows how to access Neon, choose the right thinking level, and call it from Google AI Studio and the Gemini API.

## Access Gemini 4 Neon

Open Google AI Studio and select gemini-4-neon from the model dropdown. Paid Google AI Pro and Ultra subscribers can use it there. The same model is available on the paid tier of the Gemini API.

In the Gemini app, Pro and Ultra users select Neon from the model picker. Google Antigravity also supports it for eligible subscribers.

Pricing is flat across the 1 million token context window: $3 per million input tokens and $15 per million output tokens. Cached input tokens receive a 95% discount. Thinking tokens are billed at the output rate.

## What thinking levels do

Thinking level is the main control for quality, speed, and cost on Neon. The model defaults to high.

| Level | Token use | Best for |
|-------|-----------|----------|
| low | Fewest, lowest latency | Fast chat, high-throughput classification, routing, summarization |
| medium | Lower, faster responses | Interactive coding, live UI work, latency-sensitive tool calls |
| high | Balanced | Complex coding, agentic loops, multimodal knowledge work (default) |
| xhigh | Most, deepest | Hard multi-step engineering, analysis, and science where high is not enough |

Start with high for most complex tasks. Drop to medium or low when speed or cost matters more. Reserve xhigh for problems that fail at high.

Run evaluations at all four levels with a high max_output_tokens so answers are not truncated. Then pick the lowest level that meets your quality bar.

![Developer working on code at night](https://images.unsplash.com/photo-1742072594003-abf6ca86e154?auto=format&fit=crop&w=800&q=80)

## Set thinking level in AI Studio

1. Go to aistudio.google.com and open a new prompt.
2. Choose Gemini 4 Neon in the model selector.
3. Open model settings.
4. Select Low, Medium, High, or Extra high under Thinking level.
5. Send your prompt and review the response and token counts.

The setting persists for that conversation. For production work, lock the level in code rather than the UI.

## Call Neon from the Gemini API

Install the Google GenAI SDK:

```bash
pip install google-genai
```

Set your API key as an environment variable. Then create a client and request:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Audit this payment retry queue for race conditions and rewrite the lock logic.",
    generation_config={
        "thinking_level": "xhigh"
    }
)

print(interaction.output_text)
```

Valid values for thinking_level are "low", "medium", "high", and "xhigh". Omit the field to use the high default.

For generateContent the structure is similar, with thinkingConfig.thinkingLevel inside generationConfig.

Neon does not support the old thinking_budget or minimal values. Those return a 400 error.

## Long outputs and background execution

Synchronous responses are capped at 65,536 tokens. For longer work, set background=true and raise max_output_tokens (up to the remaining context window).

```python
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Generate a complete multi-module migration specification and test suite.",
    background=True,
    generation_config={
        "max_output_tokens": 262144,
        "thinking_level": "high",
    },
)

while interaction.status in ("in_progress", "queued"):
    time.sleep(5)
    interaction = client.interactions.get(id=interaction.id)
```

Poll until the status is complete, then join the text from all model_output steps.

## Tips for production use

- Match the level to the task. Use low for routing and high for multi-file refactors.
- Leave room in max_output_tokens for thinking tokens. Low hardcoded limits truncate answers.
- Neon does not support explicit context caching. Implicit caching runs on prompts of 4,096 tokens or more and discounts hits.
- Remove temperature, top_p, and top_k. The server ignores in-range custom values.
- Always declare tools natively. Do not ask the model to emit raw JSON function calls.
- For multi-turn tool use, preserve thought signatures and prior model turns unchanged.
- Increase client timeouts. Hard prompts can take several minutes.

If you migrate from Carbon or Argon, update the model ID and note that Neon defaults to high (those models default to medium). From Gemini 3 models, also account for the unified 1M context window and the new thinking levels.

![Abstract neon geometric lines](https://images.unsplash.com/photo-1767727239153-8bf7f6be90e6?auto=format&fit=crop&w=800&q=80)

## When to choose Neon versus other Gemini 4 models

Use Hydrogen for everyday coding and fast agentic workflows. Use Neon for complex software engineering and analytical work where you want frontier quality with faster completion and lower cost per task than Carbon. Use Carbon for the hardest long-horizon architecture, cybersecurity, and science problems.

At its default high level, Neon delivers a high Artificial Analysis Intelligence Index score at roughly 32% lower cost per task than Carbon. At xhigh it reaches its peak score while still costing less than competing frontier models at their highest settings.

For Android app development with Gemini, see our guide on building full-stack Android apps in Google AI Studio: /blog/build-full-stack-android-apps-google-ai-studio/

## Conclusion

Gemini 4 Neon gives developers fine control over reasoning depth through four thinking levels. Set the level per task, start at high, and drop or raise it based on evaluation results. The model is available now in AI Studio, the paid Gemini API, the Gemini app for Pro/Ultra users, and Google Antigravity.

Test your own workloads at multiple levels. The lowest level that passes your quality checks will usually be the best balance of speed and cost.

## Sources

- Google Blog: Introducing Gemini 4 Neon (November 18, 2026)
- Google AI Studio: What's new in Gemini 4 Neon
- Google AI Studio: Gemini 4 Neon model page

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
