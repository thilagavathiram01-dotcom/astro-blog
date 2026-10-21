---
title: "How to Use Claude Haiku 5.5 as a Coding Subagent"
description: "Step-by-step guide to set up Claude Haiku 5.5 as a fast, low-cost subagent for coding tasks. Covers API setup, effort levels, pricing, and practical tips from official docs."
pubDate: 2026-10-21T15:08:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "productivity"]
noindex: false
---

Claude Haiku 5.5 is Anthropic's fastest and cheapest model for high-volume work. It pairs well with larger models like Opus 5.5 or Sonnet 5.5 as a subagent that handles repetitive coding steps while the lead model plans the overall task.

Released on October 7, 2026, Haiku 5.5 costs about 75% less to run than Haiku 4.5 on average. For prompts under 100,000 tokens it is $0.10 per million input tokens and $0.50 per million output tokens. It has a 1 million token context window and supports effort levels so you can balance speed against thoroughness.

![Developer coding on laptop by window](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Why Use Haiku 5.5 as a Subagent

Larger models excel at planning and complex reasoning. Haiku 5.5 handles the volume work: summarising files, extracting functions, running simple tests, or compacting context. Anthropic notes it pairs well with Opus 5.5 and Sonnet 5.5 as a subagent on coding work.

On Terminal-Bench 4.0 it scores 39.2% at higher effort, far above Haiku 4.5's 0%. Computer-use scores jumped from 15.7% to 72.4% on the OSWorld offline subset. These gains make it practical for agent loops that call it repeatedly.

For comparison of when to choose Sonnet instead, see our [How to Switch to Claude Sonnet 5.5](/blog/claude-sonnet-5-5-switch-guide/).

## Prerequisites

You need an Anthropic account with API access. Sign up at the Claude Console if you do not already have one. Generate an API key and set it as an environment variable:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

Install the Python SDK:

```bash
pip install anthropic python-dotenv
```

The model ID is `claude-haiku-5-5` on the Claude API, Amazon Bedrock (as `anthropic.claude-haiku-5-5`), Google Cloud, and Microsoft Foundry.

## Step 1: Make a Basic Call

Start with a simple request to confirm access. Haiku 5.5 uses adaptive thinking by default, so responses can include thinking blocks before text.

```python
import os
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()
client = Anthropic()

response = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Summarise this function in one sentence: def add(a, b): return a + b"}]
)

for block in response.content:
    if block.type == "text":
        print(block.text)
```

Select text blocks by type rather than assuming the first block is text. Thinking tokens count toward `max_tokens`.

## Step 2: Set Effort Levels

Haiku 5.5 is the first Haiku with an adjustable effort setting. Use `output_config` to choose low, medium, high, or higher values. Lower effort is faster and cheaper for routine extraction. Higher effort improves accuracy on harder subtasks.

```python
response = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=2048,
    output_config={"effort": "medium"},
    messages=[{"role": "user", "content": "Extract all function names from this code file."}]
)
```

Start at medium for most coding subagent work. Raise it only when evals show a quality gain. Anthropic recommends matching effort to the task rather than always using the maximum.

![Laptop screen showing code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Step 3: Use It as a Subagent

In a multi-model workflow the lead model (for example Sonnet 5.5) plans the steps. It then calls Haiku 5.5 for parallel subtasks such as reading files, listing imports, or writing short summaries.

One pattern is to keep the lead model’s system prompt focused on orchestration and give Haiku a narrow system prompt:

```python
system = "You are a precise code extractor. Return only the requested data in the exact format specified. Do not add explanations."

response = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=512,
    system=system,
    output_config={"effort": "low"},
    messages=[{"role": "user", "content": "List the import statements in this file."}]
)
```

Run several of these calls in parallel. Because Haiku is cheap and fast, the overall latency stays low while the lead model stays focused on the hard decisions.

## Step 4: Handle Thinking and Caching

Enable prompt caching for repeated context such as a shared codebase summary. Cache reads on Haiku 5.5 are $0.01 per million tokens for short prompts.

```python
response = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": "Shared codebase context goes here.",
            "cache_control": {"type": "ephemeral"}
        }
    ],
    messages=[{"role": "user", "content": "Extract the public API methods."}]
)
```

Check the response for thinking blocks and filter them out before you pass results back to the lead model. The updated tokenizer means the same text uses roughly 30% more tokens than on Haiku 4.5, so recount your prompts when you migrate.

## Pricing Tips

Keep prompts under 100,000 tokens whenever possible. Above that threshold input jumps to $0.50 and output to $2.50 per million tokens. Most high-volume subagent calls stay well under the limit.

Use low effort for classification, extraction, and compaction. Reserve higher effort for tasks that need more reasoning. Monitor usage in the Claude Console to confirm the savings.

## Common Pitfalls

- Treating the first content block as text. Always check `block.type`.
- Reusing Haiku 4.5 token counts. The new tokenizer increases token usage.
- Setting `thinking: {"type": "disabled"}`. Use `between_tools` if you need to turn off upfront thinking, or simply rely on the default adaptive behaviour.
- Sending very large images without checking visual token cost. They consume more tokens than on earlier Haiku versions.

## Conclusion

Claude Haiku 5.5 gives coding agents a practical way to scale volume work without the cost of running every step on Sonnet or Opus. Set the model ID to `claude-haiku-5-5`, choose an appropriate effort level, and keep the subagent prompts narrow. Pair it with a larger model for planning and you get faster, cheaper agent loops.

Test a small batch of your actual tasks, measure latency and cost, then expand. The official model card and migration guide remain the source of truth for any edge cases.

**Sources**

- [Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) — Anthropic, 7 October 2026
- [Claude Haiku 5.5 overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview) — Claude Platform docs
- [What's new in Claude Haiku 5.5](https://platform.claude.com/docs/en/models/haiku-5-5/whats-new-haiku-5-5) — Claude Platform docs
- [Claude Haiku 5.5 migration guide](https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide) — Claude Platform docs

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jtqY9yEzFrc"
    title="Claude Haiku 5.5: Don't Use It Like a Normal Model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
