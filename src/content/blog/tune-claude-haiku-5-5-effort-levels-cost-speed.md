---
title: "Tune Claude Haiku 5.5 Effort Levels for Cost and Speed"
description: "Step-by-step guide to set Claude Haiku 5.5 effort levels. Balance cost, speed, and quality for classification, routing, and high-volume API tasks."
pubDate: 2026-10-12T15:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai"]
noindex: false
---

Anthropic released Claude Haiku 5.5 on October 7, 2026 as the fastest and most efficient model in the Claude 5.5 family. It targets high-volume, cost-sensitive work such as classification, extraction, routing, and subagent tasks. The model includes an adjustable effort parameter that lets you trade response quality against speed and token spend. This is the first Haiku-class model with that control.

Haiku 5.5 costs $0.10 per million input tokens and $0.50 per million output tokens for prompts up to 100,000 tokens. Above that threshold the rates rise to $0.50 input and $2.50 output. Anthropic states it runs around 75% cheaper than Haiku 4.5 on average. Adaptive thinking is on by default. The effort setting is the practical dial for controlling how much the model reasons before answering.

## What the Effort Parameter Does

Effort levels range from low to max. Medium is the default on the Claude API. Lower effort produces shorter thinking traces, fewer tool calls, and faster replies. Higher effort increases thoroughness at the expense of latency and cost. Thinking tokens count toward your max_tokens limit, so a tight limit can cut off the reply after a thinking block.

Anthropic’s prompting guidance for Haiku 5.5 recommends:

- **low** for chat, short tool tasks, and simple high-volume requests
- **medium** for most work, including agentic coding
- **high** for knowledge work, longer agent tasks, and strict instruction following
- **xhigh** and **max** when your own evaluations show a quality gain that justifies the extra tokens

You can still disable thinking at high effort or below with `thinking: {"type": "disabled"}`. At xhigh or max that request returns a 400 error. Omitting sampling parameters such as temperature, top_p, and top_k is required; non-default values also trigger errors.

![Developer reviewing code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Set Effort in the API

First, obtain an Anthropic API key from the Claude Console if you have not already done so. See our [Claude Haiku 5.5 API setup guide](/blog/claude-haiku-5-5-api-setup-guide/) for key creation and environment setup.

Install the official Python SDK:

```bash
pip install -U anthropic
export ANTHROPIC_API_KEY="your-key-here"
```

Send a request with an explicit effort level. The model ID is `claude-haiku-5-5`. Keep prompts under 100,000 tokens when possible to stay on the lower price tier.

```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=4096,
    output_config={"effort": "low"},
    messages=[
        {
            "role": "user",
            "content": "Classify this support ticket as billing, bug, or feature request: The export button times out on large projects."
        }
    ],
)

for block in response.content:
    if block.type == "text":
        print(block.text)
```

Change the string to "medium", "high", "xhigh", or "max" to test other levels. Inspect `response.usage` for input and output token counts. On low effort you typically see fewer thinking tokens and a shorter final answer.

The same pattern works in the TypeScript SDK:

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-haiku-5-5",
  max_tokens: 4096,
  output_config: { effort: "low" },
  messages: [
    {
      role: "user",
      content: "Classify this support ticket as billing, bug, or feature request: The export button times out on large projects."
    }
  ],
});
```

## Compare Levels on Your Own Tasks

Run the same prompt at low, medium, and high effort. Record latency, total tokens, and whether the answer meets your quality bar. For pure classification or extraction, low is often sufficient and several times cheaper. For multi-step routing or light coding subagents, medium is the safer starting point.

Anthropic’s own benchmarks show large gains versus Haiku 4.5. On the OSWorld 2.1 offline subset, Haiku 5.5 reaches 72.4% while Haiku 4.5 scored 15.7%. On Terminal-Bench 4.0 it moves from 0.0% to 39.2%. Those numbers come from Anthropic’s evaluations; your results will vary by task and effort setting. Always measure on representative production traffic.

![Hands typing code on a laptop keyboard](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Prompt Caching and Batch Tips

Combine effort control with prompt caching for repeated system instructions or few-shot examples. Cache reads on Haiku 5.5 cost $0.01 per million tokens under the 100k threshold. Cache writes are more expensive, so cache only stable prefixes.

For bulk jobs, the Batch API supports the same effort settings and can return up to 300k output tokens with the appropriate beta header. Monitor stop_reason; Haiku 5.5 can return "refusal" on safety classifiers with no automatic fallback.

## When to Stay on Medium or Switch Models

Start at medium for new workloads. Drop to low once evals confirm quality holds. Move to high only when you measure a clear improvement that outweighs the extra cost. For complex agentic coding that needs deep reasoning, Anthropic still recommends Sonnet 5.5 or Opus 5.5. Haiku 5.5 excels as a fast, cheap worker under a larger model.

The model is available on the Claude API, Claude.ai, Amazon Bedrock, Google Cloud, and Microsoft Foundry. Model IDs differ by platform; check the official overview for the exact string.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/rGUzoHunuV8"
    title="Claude Haiku 5.5 Is INSANE – This IS the BEST Cheap Model Yet!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Anthropic, “Introducing Claude Haiku 5.5,” October 7, 2026. https://www.anthropic.com/claude-haiku-5-5
- Claude Platform Docs, Claude Haiku 5.5 overview and prompting guide.
- Anthropic system card for Claude Haiku 5.5.
