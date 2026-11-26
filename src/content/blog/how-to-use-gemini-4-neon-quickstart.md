---
title: "How to Use Gemini 4 Neon: Quick Start Guide and Best Practices"
description: "Quick start guide to Gemini 4 Neon: access in Gemini app, AI Studio and API, thinking levels, examples and best practices for developers."
pubDate: 2026-11-26T22:00:00
heroImage: "https://images.unsplash.com/photo-1763568258239-d3b5c95019af?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It sits between the everyday Hydrogen model and the deeper Carbon model. Neon brings frontier-level reasoning to complex software engineering, knowledge work and science tasks while finishing them faster and at lower cost per task.

This quick-start guide shows the three main ways to use it today: the Gemini app, Google AI Studio, and the Gemini API. You need a paid Google AI Pro or Ultra plan for the app and Antigravity. The API is paid by the token.

## Access Gemini 4 Neon in the Gemini App

Open gemini.google.com or the Gemini mobile app. Click the model name at the bottom of the chat box (it often shows Auto). Select Gemini 4 Neon from the dropdown. A lock icon means you need a Pro or Ultra subscription.

After selecting the model you can choose a thinking level: Low, Medium or High. High is the default and works well for most complex requests. Neon keeps the model and level for the rest of the conversation.

Try a practical prompt such as pasting a long document and asking Neon to extract every deadline into a table.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JvIcxJIzonA"
    title="How to Use Gemini 4 Neon in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Start in Google AI Studio

Developers usually begin at aistudio.google.com. Create a new prompt and choose the model Gemini 4 Neon (model ID gemini-4-neon). AI Studio is free to open, but Neon itself runs on the paid tier so you must add billing.

In Run settings you can set the thinking level to low, medium, high (default) or xhigh. High balances intelligence and speed for complex coding, agentic work and multimodal analysis. Switch to xhigh only when high falls short on multi-step engineering or scientific problems.

Neon ignores temperature, top_p and top_k values. Synchronous output is limited to 65,536 tokens. For longer results use the background long-decode continuation.

![Laptop displaying code on a wooden desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Call the Gemini API

Use the model ID gemini-4-neon on the paid Gemini API. Neon supports both the Interactions API and generateContent.

In the Interactions API set thinking_level inside generation_config:

```json
{
  "model": "gemini-4-neon",
  "input": "Audit this payment retry queue for race conditions.",
  "generation_config": {
    "thinking_level": "high"
  }
}
```

In generateContent place thinkingLevel inside generationConfig.thinkingConfig. Values are the lowercase strings low, medium, high or xhigh.

The context window is 1 million tokens. Pricing is $3 per million input tokens ($0.15 for cached input) and $15 per million output tokens. Thinking tokens are billed at the output rate, so higher levels increase cost.

For large files use the Files API with slicing to control token spend. See our earlier guide on Gemini API file slicing for practical token-saving patterns.

## Thinking Levels and When to Use Them

Neon supports four levels:

- **low** — fewest tokens, lowest latency. Best for fast chat, high-throughput classification or summarization.
- **medium** — lower token use, faster responses. Good for interactive coding, live UI prototyping and latency-sensitive tool calls.
- **high** (default) — balanced intelligence and speed. Recommended for complex coding, agentic execution, tool calling and multimodal knowledge work.
- **xhigh** — most tokens, deepest reasoning. Reserve for hard multi-step engineering, mathematical proofs or scientific analysis where high is not enough.

Start at high. Evaluate your specific tasks at all four levels and drop to the lowest level that still meets your quality bar. This keeps cost and latency under control.

![Person typing code on a laptop](https://images.unsplash.com/photo-1763568258239-d3b5c95019af?auto=format&fit=crop&w=800&q=80)

## Best Practices for Everyday Use

Choose the right model for the job. Neon is faster and cheaper than Carbon for many complex workflows while still delivering strong results. Switch to Carbon only when you need the longest horizon or the absolute highest capability.

Control tokens deliberately. Higher thinking levels consume more output tokens. Cache repeated input context whenever possible to take advantage of the 95 percent discount on cached tokens.

In Google Antigravity (available to Pro and Ultra subscribers) Neon can act as the orchestrator while cheaper Hydrogen sub-agents handle parallel work. This pattern appears in many early builder demos for 3D scenes, simulations and multi-file coding.

For safety and privacy, Neon builds on the Gemini 4 safety stack. It maintains strong protections against severe misuse and prompt injection. Always review outputs for production code and avoid sending sensitive data you are not authorised to process.

If you are already using other Gemini 4 models, migration is straightforward: change the model ID and remove unsupported sampling parameters. Old thinking_budget or minimal values return a 400 error.

## Conclusion

Gemini 4 Neon gives developers and Pro/Ultra subscribers a practical middle ground: frontier-level reasoning without the full cost or latency of the largest models. Start in the Gemini app or AI Studio, pick a thinking level that matches the task, and move to the API once you need production integration.

Test a real workload at high, then try medium and low to see where quality still holds. The official model card and safety report contain further details on alignment and evaluation results.

## Sources

- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) — Google Blog, 18 November 2026
- [Developer’s guide to Gemini 4 Neon](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-4-neon) — Google Cloud Documentation
- [What’s new in Gemini 4 Neon](https://aistudio.google.com/docs/whats-new-gemini-4-neon) — Google AI Studio
- [Gemini 4 Neon model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Neon-Model-Card.pdf)
