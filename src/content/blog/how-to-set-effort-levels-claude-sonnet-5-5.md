---
title: "How to Set Effort Levels in Claude Sonnet 5.5"
description: "Learn how to choose and set effort levels for Claude Sonnet 5.5 in apps, Claude Code, and the API to balance quality, speed, and cost."
pubDate: 2026-10-11T16:00:00
heroImage: "https://images.unsplash.com/photo-wjFOjA2zXy8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai", "productivity"]
noindex: false
---

Claude Sonnet 5.5 gives you five effort levels that control how much the model thinks before it answers. Higher effort produces more thorough work but costs more tokens and takes longer. Lower effort is faster and cheaper for routine tasks.

Anthropic recalibrated the levels for Sonnet 5.5. A setting that worked on Sonnet 5 does not map one-to-one. Start with the recommendations below, then test on your own tasks. For the basics of switching to the model itself, see [How to Switch to Claude Sonnet 5.5 in Apps and API](/blog/claude-sonnet-5-5-switch-guide/).

## What the five effort levels do

| Level | Best for | Notes |
|-------|----------|-------|
| Low | Short rewrites, classification, latency-sensitive chat | Minimal thinking. Can skip self-checks. |
| Medium | Well-scoped coding, everyday agents, most chat | Default in Claude apps and Claude Code. |
| High | Multi-file changes, analysis, harder agent work | Default on the Claude API. |
| Xhigh | Long agent sessions, hard debugging | Use only after testing shows a gain. |
| Max | The hardest single problems | Highest token use. Compare with Opus 5.5. |

Anthropic’s docs say start at High on the API unless the workload is agentic or latency-sensitive. For well-specified agentic coding, begin at Medium and raise only if quality drops. For chat, Medium or Low is usually enough.



![Laptop displaying an AI code editor interface](https://images.unsplash.com/photo-wjFOjA2zXy8?auto=format&fit=crop&w=800&q=80)



## Step 1: Set effort in the Claude apps

On claude.ai (web, iOS, Android):

1. Open a chat and select Claude Sonnet 5.5 in the model picker.
2. Click the model name next to the send button.
3. Choose Effort, then pick Low, Medium, High, Xhigh, or Max.
4. The change applies to Claude’s next response.

The apps default to Medium. Use Low for one-line edits or quick summaries. Move to High when the model skips a required check or produces shallow reasoning. You can change effort mid-conversation.

## Step 2: Set effort in Claude Code

Claude Code defaults to Medium for Sonnet 5.5.

- Inside a session, type `/effort medium` (or high, low, xhigh, max).
- The session header shows the active level.
- To set it for one launch: `claude --model claude-sonnet-5-5 --effort high`
- Some versions save the level for future sessions when you type it after `/effort`.

Raise effort when the agent stops early or shrinks the diff too aggressively. Lower it for high-volume, well-specified loops to stay inside usage limits.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/s5nkj-L2vAw"
    title="Introducing Claude Sonnet 5.5"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Set effort in the Claude API

The API defaults to High. Send the level in `output_config.effort`.

```json
{
  "model": "claude-sonnet-5-5",
  "max_tokens": 4096,
  "output_config": { "effort": "medium" },
  "messages": [
    { "role": "user", "content": "Summarize the attached incident report in five bullets." }
  ]
}
```

Thinking tokens count toward `max_tokens`. For long agentic coding, set `max_tokens` to 128000 and stream the response. At Xhigh or Max, do not send `thinking: {"type": "between_tools"}` — it returns a 400 error. Use adaptive thinking (the default) at those levels.

You can also set effort per message in a conversation for finer control, though that feature is in beta.

## Step 4: Match effort to the job

- Quick rewrite or format change → Low
- Implement a feature with clear acceptance criteria → Medium
- Debug an intermittent failure across files → High
- Long migration or architecture review → Xhigh or Max, then compare cost and quality against Opus 5.5

Run the same prompt at two levels and compare the finished result, not just the token count. Anthropic notes that Sonnet 5.5 at Low or Medium already beats Sonnet 5’s best scores on several coding benchmarks at a fraction of the cost.



![Person coding on a laptop at a desk](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)



## Tips for controlling cost

- Cache stable system prompts. Cache reads are $0.20 per million tokens.
- Default API agents to Medium for chat-like traffic. Reserve High for batch reviews.
- At Low, the model can skip verification. Add an explicit “run the tests” instruction if you need it.
- From Medium upward the model thinks briefly before most replies, even simple ones. Lower the level rather than prompting “think less.”
- Measure cost per completed task on your own workload before locking a production default.

## Conclusion

Effort is the main dial for Sonnet 5.5 quality versus speed and cost. Start with Medium in the apps and Claude Code, High on the API, then adjust after you test real tasks. Pair it with the model switch guide when you first move a workflow onto Sonnet 5.5.

## Sources

- [Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) — Anthropic, 28 Sep 2026
- [Prompting Claude Sonnet 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5) — Claude Platform docs
- [Effort](https://platform.claude.com/docs/en/build-with-claude/effort) — Claude Platform docs
- [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings) — Claude Help Center
- [What’s new in Claude Sonnet 5.5](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5) — Claude Platform docs
