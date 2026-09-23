---
title: "How to Switch to Claude Opus 5.5 in Code and API"
description: "Set Claude Opus 5.5 as your Claude Code model, call claude-opus-5-5 in the API, and use official pricing, effort, and prompt habits."
pubDate: 2026-09-23T09:00:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai", "productivity"]
noindex: false
---

Anthropic released **Claude Opus 5.5** on September 22, 2026. The company positions it as the first model in the Claude 5.5 family: Fable-class results on most work, at a lower bill than Opus 5.

If you already live in Claude Code or the Messages API, the switch is a model ID change plus a few prompt habits. Adaptive thinking is always on. Forced tool use is gone. Cache reads are cheaper, which matters on long agent runs.

This guide uses Anthropic’s launch post, model docs, and Claude Code help articles only.

## What Anthropic shipped

Opus 5.5 is built for long-running agentic coding and knowledge work. Official specs on the Claude Platform:

- Model ID: `claude-opus-5-5`
- Context window: 1 million tokens
- Max output: 128K tokens (up to 300K on Message Batches with the `output-300k-2026-03-24` beta header)
- Input: $4 per million tokens
- Output: $20 per million tokens
- Cache reads: $0.20 per million tokens
- Cache writes: $5 per million tokens

Anthropic says typical token-billed workloads cost about **40% less** than Opus 5. List prices are 20% below Opus 5 on input and output. Cache reads, which dominate agent sessions, are 60% below Opus 5 ($0.50 previously).

Fast mode is available in Claude Code and on the Claude Platform at up to 2.5x speed, at $8 / $40 per million input / output tokens. US-only inference is 1.1x standard input and output prices.

Pro, Max, Team, and seat-based Enterprise plans get higher five-hour usage limits plus a rate-limit reset you can save.

Availability: Claude apps (Pro, Max, Team, Enterprise), the Claude Platform, Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud, and Microsoft Foundry.



![Laptop with terminal and editor open for an agentic coding session](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Watch the official overview

Anthropic’s Claude channel posted a short launch clip the same day. Use it to hear the product framing before you change IDs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1f13Bl1sYkw"
    title="Introducing Claude Opus 5.5"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Switch the model in Claude Code

You do not need a new install. Pick one of these official methods.

**1. `/model` in a live session**

1. Run `claude`.
2. Type `/model` and choose Opus 5.5.
3. Confirm with `/status`.

The change applies immediately. No restart.

**2. Flag for one session**

```bash
claude --model claude-opus-5-5
```

**3. Default in your shell**

Zsh (macOS):

```bash
echo 'export ANTHROPIC_MODEL="claude-opus-5-5"' >> ~/.zshrc
```

Bash (Linux):

```bash
echo 'export ANTHROPIC_MODEL="claude-opus-5-5"' >> ~/.bashrc
```

Reload the shell, then start Claude Code as usual.

If you already use [Claude Code Projects for parallel cloud threads](/blog/claude-code-projects-parallel-threads/), set the coordinator and worker models separately when the UI offers it. Several threads on Opus 5.5 will consume plan limits faster than one local session.

## Call `claude-opus-5-5` from the API

Use the Messages API with the new ID. The request shape is the same as other Claude 5 models.

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=4096,
    messages=[
        {
            "role": "user",
            "content": "List the files that still import the deprecated checkout client.",
        }
    ],
)
print(message.content)
```

On Bedrock the ID is `anthropic.claude-opus-5-5`. Query live limits with the Models API rather than hard-coding caps.

Minimum cacheable prompt length is **512 tokens**. Enable prompt caching on the stable system prompt and tool definitions so long agent loops hit the $0.20 cache-read price.

## Breaking changes from Opus 5

Platform docs list four changes that will break old Opus 5 code:

1. **Thinking cannot be disabled.** Adaptive thinking is always on. Steer depth with the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort), not by turning thinking off.
2. **Forced tool use returns an error.** Do not send `tool_choice` that forces a specific tool the way some Opus 5 clients did.
3. **Thinking blocks belong to the model that produced them.** Do not replay another model’s thinking blocks into an Opus 5.5 conversation.
4. **Older aliases and snapshots differ by platform.** Confirm the ID on Claude API vs Google Cloud before you ship.

Drop filler such as “think carefully” from prompts. Official playbooks say Opus 5.5 already thinks before every reply.



![Developer reviewing a pull request on a second monitor](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## How to brief a long run

Anthropic’s Opus 5.5 playbook is blunt: hand over the whole task, define “done,” and say when the model should stop and ask.

A Claude Code brief that matches that advice:

```text
Migrate the payment endpoints from the old client to the new one.
Done means: every endpoint uses the new client, the old client is
deleted, and the test suite passes. Stop and ask if a payment
contract is ambiguous. Do not merge.
```

Early testers reported multi-hour unattended runs. One internal HAProxy C-to-Rust rewrite finished in 9.5 hours versus 12 hours on Fable 5.1 and cost 51% less. Treat those as Anthropic’s own tests, not a guarantee on your repo.

When a long run ends, read what it needs from you first. Add “Mark anything you couldn’t confirm, and say where you looked” so unverified claims stay labeled.

## Effort, fast mode, and cost control

- Default effort is enough for most coding and knowledge work. Raise effort only when a benchmark-style task stalls.
- Fast mode doubles list prices. Use it for interactive review, not overnight migrations.
- Cache the system prompt and tools. Cache reads are the main reason Anthropic quotes a 40% drop versus Opus 5 on agent work.
- Batch long jobs on the Message Batches API when you do not need a live stream.
- Keep Fable 5.1 (`claude-fable-5-1`) for the hardest multi-day research. Official docs price Fable at about 2.5x Opus 5.5.

Published launch scores (Opus 5.5 with adaptive thinking at max effort unless noted): Terminal-Bench 4.0 **66.4%** (xhigh effort), FrontierCode v1.1 Main **54.4%**, CursorBench 4.0 **57.8%**, GDPval-AA v2.1 **1846**, OSWorld 2.0 **81.8%** partial. Anthropic notes that at this capability level, benchmark gaps understate how close Opus 5.5 and Fable 5.1 feel in daily use.

## Safety limits you should expect

Opus 5.5 ships with safeguards similar to Fable 5.1 because Anthropic rates it comparable to Mythos 5.1 in biology and cybersecurity. Vetted labs apply to the [Life Sciences Verification Program](https://www.anthropic.com/news/life-sciences-verification-program). A Cyber Verification Program expansion is planned so verified practitioners can use the model on that work.

The launch post states Opus 5.5 posted the best score yet on Anthropic’s automated behavioral audit. It is described as less likely than recent models to take hard-to-reverse actions or step outside given bounds, and more resistant than Opus 5 to prompt injection. Details live in the [Opus 5.5 System Card](https://www.anthropic.com/claude-opus-5-5-system-card).

Do not treat those claims as a license to skip review. Agent actions still need your merge button.

## Tips that save tokens

- State the finish line in the first message. Do not drip requirements across twenty turns.
- Delete “think step by step” boilerplate.
- Prefer one well-scoped thread over five overlapping ones on the same files.
- After a migration, ask for a short diff summary, not a prose recap of every file.
- Keep Sonnet 5 for cheap triage. Promote a task to Opus 5.5 when the plan is clear.

## Conclusion

Opus 5.5 is the new default Anthropic recommends for complex agentic coding. Set `claude-opus-5-5` in Claude Code with `/model` or `ANTHROPIC_MODEL`, point the Messages API at the same ID, and stop disabling thinking.

Price the work on cache hits and fewer steps, not only the $4 / $20 list. Leave Fable 5.1 for the jobs that still fail at default effort. Read the system card before you point an unattended agent at production credentials.

## Sources

- [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) — Anthropic, September 22, 2026
- [Claude Opus 5.5 model overview](https://platform.claude.com/docs/en/models/opus-5-5/overview) — Claude Platform docs
- [Claude Code model configuration](https://support.claude.com/en/articles/11940350-claude-code-model-configuration) — Claude Help Center
- [Getting the most out of Opus 5.5](https://claude.dev/blog/getting-the-most-out-of-opus-5-5/) — Claude playbooks
- [Claude Opus product page](https://www.anthropic.com/claude/opus) — Anthropic
