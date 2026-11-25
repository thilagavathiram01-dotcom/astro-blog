---
title: "How to Set Thinking Levels for Gemini 4 Neon"
description: "Learn how to choose and set low, medium, high, and xhigh thinking levels for Gemini 4 Neon in Google AI Studio and the API to balance speed and depth."
pubDate: 2026-11-25T12:00:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026 as a balanced model for complex coding, analytical work, and science tasks. It sits between the faster Hydrogen and the deeper Carbon models in the Gemini 4 family.

Neon supports four thinking levels: low, medium, high (default), and xhigh. Choosing the right level controls how much internal reasoning the model performs, which directly affects response quality, latency, and cost. Thinking tokens are billed at the output token rate.

This guide shows exactly how to select and apply those levels in Google AI Studio and the Gemini API so you get useful results without unnecessary token spend.

## Why Thinking Levels Matter for Neon

Neon is priced at $3 per million input tokens and $15 per million output tokens, with a 1 million-token context window. Cached input tokens drop to $0.15 per million.

Higher thinking levels consume more tokens before the model produces its final answer. That improves accuracy on multi-step coding or analysis but increases both cost and response time. Google recommends starting at high for most tasks and moving to xhigh only when high is insufficient.

| Thinking Level | Token Use | Best For |
|---------------|-----------|----------|
| low | Fewest, lowest latency | Fast chat, high-throughput classification, simple summaries |
| medium | Lower than high | Interactive coding, live UI work, latency-sensitive tool calls |
| high (default) | Balanced | Complex coding, agent workflows, multimodal analysis |
| xhigh | Most tokens, deepest reasoning | Hard multi-file engineering, scientific analysis, proofs |

![Developer working with code on a laptop](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Access Gemini 4 Neon in AI Studio

1. Open [Google AI Studio](https://aistudio.google.com/).
2. Start a new prompt or open an existing chat.
3. Click the model selector at the top and choose **gemini-4-neon**.
4. The interface shows the current thinking level. It defaults to high.

You need a paid Google AI Pro or Ultra plan, or API access on the paid tier, to use Neon.

Once the model is selected, you can change the thinking level from the generation settings panel before sending a prompt.

## Set Thinking Levels in the Gemini API

Neon works with both the Interactions API and the generateContent endpoint. The parameter name differs slightly between them.

**Interactions API example (xhigh):**

```bash
curl "https://generativelanguage.googleapis.com/v1beta/interactions" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "model": "gemini-4-neon",
    "input": "Refactor this multi-file payment service to remove race conditions.",
    "generation_config": {
      "thinking_level": "xhigh",
      "max_output_tokens": 65536
    }
  }'
```

**generateContent example (medium):**

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-neon:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "contents": [{"parts": [{"text": "Write a clean React component for a searchable product list."}]}],
    "generationConfig": {
      "thinkingConfig": {"thinkingLevel": "medium"}
    }
  }'
```

Set `max_output_tokens` to at least 65,536 when testing higher levels so the limit does not truncate long responses.

## Practical Decision Guide

Use this order when you start a new task:

1. Begin at **high**. This is the default and works well for most coding and analysis work.
2. If the response is too slow or expensive for a repetitive job, drop to **medium** or **low**.
3. If the answer misses important edge cases or fails on multi-step reasoning, move to **xhigh**.
4. Re-run a small evaluation set at all four levels and keep the lowest level that meets your quality bar.

For long agent sessions or repository-wide refactors, high or xhigh usually pays off. For simple classification or short chat replies, low or medium keeps costs low.

![Code displayed on a computer monitor](https://images.unsplash.com/photo-1753998943619-b9cd910887e5?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

- Cache repeated context. Cached input tokens cost far less, which helps when you send the same codebase or documents across many calls.
- Prefer surgical edits. Neon performs well on targeted changes across multiple files. Ask for specific functions or files rather than full rewrites.
- Monitor token usage in AI Studio. The interface shows input, thinking, and output tokens so you can compare levels directly.
- Combine with Google Antigravity. Paid Pro and Ultra subscribers can use Neon as an orchestrator that directs parallel Hydrogen subagents for larger workflows.
- Test security-sensitive code carefully. Neon shows strong results on vulnerability finding and patching benchmarks, but always review generated code.

If you already use other Gemini 4 models, note that Carbon only supports three levels (low, medium, high) and defaults to medium, while Hydrogen matches Neon’s four levels.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives you practical control through its four thinking levels. Start with the default high setting, measure quality against cost and speed, and adjust only when needed. This approach keeps daily coding and analysis work efficient while reserving deeper reasoning for the hardest problems.

For related setup steps, see our guide on [using Gemini 4 Neon for coding in AI Studio](/blog/use-gemini-4-neon-coding-ai-studio/).

**Sources**

- Google Blog: Introducing Gemini 4 Neon (18 November 2026, updated 23 November 2026)
- Google AI Studio: What’s new in Gemini 4 Neon and Choosing a model documentation
- Google DeepMind model card for Gemini 4 Neon
