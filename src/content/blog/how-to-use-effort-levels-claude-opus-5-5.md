---
title: "How Claude Opus 5.5 Effort Levels Cut Your Coding Costs"
description: "Learn how to set low, medium, high, xhigh, and max effort on Claude Opus 5.5 to balance quality, speed, and token cost for agentic coding tasks."
pubDate: 2026-11-01T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "ai", "productivity"]
noindex: false
---

Claude Opus 5.5 gives you a direct dial for how hard the model thinks. That dial is the effort parameter. It controls the number of tokens the model spends on every part of its response, including text, tool calls, and thinking. Lower effort finishes faster and costs less. Higher effort spends more tokens for deeper reasoning on hard problems.

Most Claude models default to high effort. Opus 5.5 defaults to medium. That single change already lowers typical costs compared with running the same work on Opus 5. You can override the default for any request.

## What the Effort Parameter Actually Controls

Effort applies to every output token the model produces. It shapes how long the model thinks, how many tool calls it makes, and how detailed its explanations become. Lower effort produces fewer and shorter tool calls. Higher effort produces more tool calls, more planning text, and more thorough checks.

The parameter works with or without thinking enabled. On models that support adaptive thinking, higher effort increases how often and how deeply the model thinks before it answers. You set it once per request, or you change it mid-conversation on supported models.

Official docs list five levels: low, medium, high, xhigh, and max. Not every model supports every level. Opus 5.5 supports all five.

![Keyboard and monitors in a coding workspace](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## The Five Effort Levels and When to Use Them

Anthropic’s documentation describes the levels this way:

- **low** is the most efficient. It delivers significant token savings with some reduction in capability. Use it for simple tasks, subagents, and work where speed and cost matter most.
- **medium** is the balanced default on Opus 5.5. It works well for most agentic tasks that need a mix of speed, cost, and quality.
- **high** spends as many tokens as the task needs for excellent results. It is the default on almost every other model. Use it for complex reasoning and difficult coding problems.
- **xhigh** is built for long-horizon work. It targets agentic and coding runs that last over 30 minutes and use token budgets in the millions.
- **max** removes constraints on token spending. It is for tasks that require the deepest possible reasoning.

Start at the model’s default (medium for Opus 5.5) and test the other levels against your own evals. The right level depends on the task, not on a universal rule.

## How to Set Effort in the API and Claude Code

In the Claude API you set `output_config.effort` on the messages request. Here is the minimal pattern for medium effort:

```python
response = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=4096,
    messages=[{"role": "user", "content": "Your task here"}],
    output_config={"effort": "medium"},
)
```

You can pass "low", "medium", "high", "xhigh", or "max". The API defaults to medium on Opus 5.5 if you omit the parameter.

In Claude Code you change effort with the `/effort` command. `/effort high` sets the level for the current session. You can also launch with a flag such as `claude --effort xhigh`. The setting is remembered per model.

In the Claude apps you click the model name next to the send button, then click Effort and choose a level. The recommended level for the selected model is marked as Default.

On supported models, including Opus 5.5, you can change effort mid-conversation with a per-message system message that carries only the new `output_config`. This keeps the prompt cache intact. Changing the top-level effort between requests restarts the cache.

## Pricing Math: Why Medium Often Wins

Opus 5.5 costs $4 per million input tokens and $20 per million output tokens. Cache reads are $0.20 per million. That is 20 percent lower on input and output and 60 percent lower on cache reads than Opus 5.

Anthropic’s tests show that at default settings Opus 5.5 costs 40 percent less than Opus 5 on typical workloads. The model also generates output more than 30 percent faster. On FrontierCode at default (medium) effort, Opus 5.5 beats GPT-6 Astra at roughly 20 percent of the cost per task. On Terminal-Bench 4.0 it matches Astra for about 40 percent of the cost.

Because effort directly controls output tokens, dropping from high to medium or low reduces the bill on every task that does not need the extra thinking. Teams that run many subagents or routine edits see the largest savings.

![Laptop displaying code on a desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Daily Use

Test each level on a representative sample of your real tasks before you lock in a default. Quality differences show up more clearly on long-horizon coding and verification work than on simple edits.

Use low for subagents and high-volume, well-scoped steps. Use medium for everyday feature work. Step up to high when a first attempt fails or when verification matters. Reserve xhigh for unattended runs longer than 30 minutes. Use max only when the problem has already beaten lower levels.

If you rely on prompt caching, keep the top-level effort constant inside a long conversation. Use the per-message effort change (beta header `mid-conversation-output-config-2026-07-01`) when you need to drop effort for a follow-up turn.

Pair effort with the right model. For many Android and agentic workflows, medium on Opus 5.5 already outperforms higher effort on older models at lower cost. See our earlier guide on [accessing Claude Opus 5.5 inside Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/) for setup details in that environment.

## Watch a Side-by-Side Effort Test

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ufqJZuh6Y48"
    title="I tested every effort level on Claude Opus 5.5"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Effort is the practical control that lets you keep Opus 5.5’s capability while trimming token spend. Medium is the right starting point for most coding and agent work. Move up only when the task demands it, and measure the difference on your own evals. The combination of lower list prices and a lower default effort is why many teams see 40 percent lower bills after switching from Opus 5.

## Sources

- Anthropic, Introducing Claude Opus 5.5: https://www.anthropic.com/claude-opus-5-5
- Anthropic Platform Docs, Effort: https://platform.claude.com/docs/en/build-with-claude/effort
- Claude Help Center, Change the model, effort, and thinking settings: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
