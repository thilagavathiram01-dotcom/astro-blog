---
title: "How to Use Claude Opus 5.5 for Agentic Coding"
description: "Step-by-step guide to Claude Opus 5.5 in Claude Code and the API: effort levels, prompts, pricing, and verification for long coding tasks."
pubDate: 2026-10-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Claude Opus 5.5 handles long-running coding and agent work with clearer communication and lower cost than Opus 5. This guide covers setup in Claude Code and the API, effort levels, prompting patterns, and practical checks.

Anthropic released Opus 5.5 on September 22, 2026. The model ID is `claude-opus-5-5`. It accepts a 1 million token context window, outputs up to 128,000 tokens on the Messages API, and always thinks before replies. Input costs $4 per million tokens and output costs $20 per million tokens. Cache reads cost $0.20 per million. Fast mode runs up to 2.5× faster at $8/$40.

![Coder workspace with multiple keyboards and screens](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Access Claude Opus 5.5

Open claude.ai or the Claude desktop app and select Opus 5.5 from the model menu if your plan includes it. Pro, Max, Team, and Enterprise plans unlock it. Usage limits on those plans extend further than on prior Opus models.

For the API, set the model to `claude-opus-5-5` in your client. The same ID works on Amazon Bedrock, Google Cloud, and Microsoft Foundry. Fast mode needs no beta header: pass `speed="fast"` in the request.

Install or update Claude Code, then start a session. The model appears in the picker. Pair it with skills or subagents for repeated workflows. If you already use Google Antigravity, the same model is available there for eligible Pro and Ultra accounts—see our guide on [Access Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/).

## Set effort and hand over the full task

Opus 5.5 always thinks. You control depth with the effort parameter: low, medium (default), high, xhigh, or max. Start with medium for most coding work. Raise it only when a change touches many files or requires deep debugging. Higher effort uses more output tokens but often finishes with fewer total turns.

Give the complete task in one message. State the finish line clearly. Example prompt:

```
Migrate the payment endpoints from the old client to the new one.
Done means: every endpoint uses the new client, the old client is deleted, and the test suite passes.
Stop and ask if you hit a missing dependency or ambiguous behavior.
```

The model continues across multi-step work better than earlier Opus versions. Early testers ran hour-long coding sessions with minimal checks. When the run ends, read its summary first—it places the most important result up front and explains changes in plain language.

![Laptop screen showing code in an editor](https://images.unsplash.com/photo-1637778352878-f0b46d574a04?auto=format&fit=crop&w=800&q=80)

## Call it from the API

Install the Anthropic SDK and set your API key. A minimal Python call looks like this:

```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=8192,
    output_config={"effort": "medium"},
    messages=[{
        "role": "user",
        "content": "Review this diff for concurrency bugs and propose a minimal fix. Done means the tests pass and no behavior changes."
    }]
)
print(response.content[0].text)
```

For long agent runs, enable tools (code execution, computer use, or custom functions). Set a task budget if you need hard limits. Implicit caching applies on repeated prefixes above 512 tokens. Batch processing halves the price. Fast mode doubles speed for interactive loops.

## Verify results and control cost

After a long run, open the changed files and run the test suite yourself. Opus 5.5 reports what it did, but you still own the merge. For multi-file changes, switch to a second model (Sonnet 5.5 or Gemini) for a one-shot review of the diff.

Track tokens. Medium effort on typical coding tasks costs less than Opus 5 because the model finishes with fewer tokens overall. Anthropic states typical workloads cost about 40% less. On subscription plans the five-hour limit stretches further. Use low effort for classification or simple edits and high only when needed.

Subagents can default to a cheaper model. In Claude Code set `CLAUDE_CODE_SUBAGENT_MODEL` or frontmatter so routine checks stay on Sonnet while the parent stays on Opus 5.5.

## Tips for stronger sessions

- Name the success criteria before the model starts. “Tests pass and old client is gone” beats “fix the payments.”
- Drop phrases like “think carefully.” The model already thinks on every turn.
- Keep a short CLAUDE.md or skill that lists your style rules. Run the prompt-audit command if available to tune it for 5.5.
- For vision tasks (screenshots, diagrams) attach the image in the same message. The model accepts images and text together.
- Monitor the first few runs on your own repo. Token use and quality vary by codebase size and test coverage.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jKRl_CSVxyI"
    title="Using Claude Opus 5.5 as your daily driver"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Claude Opus 5.5 fits agentic coding when you give it a clear finish line, start at medium effort, and check the result. It costs less per token than Opus 5, communicates more clearly, and continues longer on multi-step work. Use the API or Claude Code for production tasks, or select it inside Antigravity if that is already your environment. Measure token use on your own projects before scaling.

## Sources

- [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) — Anthropic, September 22, 2026
- [Getting the most out of Opus 5.5 in Claude and Claude Code](https://claude.dev/blog/getting-the-most-out-of-opus-5-5/) — Anthropic
- [What's new in Claude Opus 5.5](https://platform.claude.com/docs/en/models/opus-5-5/whats-new-opus-5-5) — Anthropic Platform Docs
- [Claude Opus](https://www.anthropic.com/claude/opus) — Anthropic

Published October 28, 2026.
