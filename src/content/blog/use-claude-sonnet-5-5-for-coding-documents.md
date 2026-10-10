---
title: "How to Use Claude Sonnet 5.5 for Coding and Documents"
description: "Step-by-step guide to Claude Sonnet 5.5: switch models, set effort levels, and get faster results on coding tasks plus polished documents and spreadsheets."
pubDate: 2026-10-10T18:30:00
heroImage: "https://images.unsplash.com/photo-nPJFU_zTVhA?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai"]
noindex: false
---

Claude Sonnet 5.5 arrived on September 28, 2026, as the second model in Anthropic’s 5.5 family. It runs more than 30 percent faster than Sonnet 5 and typically costs up to 30 percent less per task while scoring 70.6 percent on Terminal-Bench 4.0.<grok type="render_inline_citation" citation_id="38" />

It sits between the previous Sonnet and the flagship Opus 5.5. Everyday coding, bug fixes, document drafts, and spreadsheet work improve without the higher price of the top model.

This guide shows how to switch to it, choose the right effort level, and apply it to real coding and knowledge-work tasks.

## What Changed with Sonnet 5.5

Anthropic prices Sonnet 5.5 the same as Sonnet 5: $2 per million input tokens and $10 per million output tokens. Cache reads stay at $0.20 per million. Because it uses fewer tokens and finishes faster, most tasks cost less overall.<grok type="render_inline_citation" citation_id="38" />

The context window is 1 million tokens. Maximum output is 128,000 tokens on the standard API. Adaptive thinking is on by default. Effort levels let you trade speed and cost against depth.

Early testers noted clearer writing and stronger design sense for slides and interfaces. On knowledge-work benchmarks such as GDPval-AA it scores nearly level with Opus 5.5.

![Developer working on a laptop at night with city lights](https://images.unsplash.com/photo-nPJFU_zTVhA?auto=format&fit=crop&w=800&q=80)

## Switch to Sonnet 5.5

On Claude.ai the model appears in the selector. Choose Claude Sonnet 5.5 for new chats. Existing chats stay on their previous model until you start a fresh one.

In Claude Code the model is available by default for most plans. Check the model indicator in the interface or settings if you need to confirm.

For API use the model ID is `claude-sonnet-5-5`. Update any hardcoded model strings from earlier Sonnet versions. The same ID works on Amazon Bedrock (as `anthropic.claude-sonnet-5-5`), Google Cloud, and Microsoft Foundry.<grok type="render_inline_citation" citation_id="76" />

If you already follow a switch workflow, the steps in the [Claude Sonnet 5.5 switch guide](/blog/claude-sonnet-5-5-switch-guide/) cover the practical details for both apps and API.

## Set Effort Levels for Better Results

Effort controls how much reasoning the model performs. Higher effort produces longer thinking traces and more thorough answers but raises token use and latency.

Available levels are low, medium, high, xhigh, and max. The Claude API defaults to high. Claude.ai and Claude Code default to medium.<grok type="render_inline_citation" citation_id="82" />

Start at medium for most coding and document work. Move to high when the task involves multi-file changes, careful validation, or complex analysis. Drop to low for quick drafts or simple edits where speed matters more than depth.

In the API pass the effort inside `output_config`:

```python
response = client.messages.create(
    model="claude-sonnet-5-5",
    max_tokens=4096,
    messages=[{"role": "user", "content": "Your prompt"}],
    output_config={"effort": "medium"}
)
```

On Claude.ai look for the effort control near the model selector once the update has rolled out. Test a representative task at two levels and compare quality, time, and token count before locking in a default.

## Use It for Coding Tasks

Sonnet 5.5 improved sharply on agentic coding. Terminal-Bench 4.0 rose from 10.3 percent on Sonnet 5 to 70.6 percent. CursorBench reached 55.5 percent, close to Opus 5.5.<grok type="render_inline_citation" citation_id="38" />

Give it a clear scope: the files involved, the expected behavior, and how success will be checked. It tends to batch tool calls and finish in fewer steps than earlier Sonnet models.

Example prompt for a bug fix:

“Locate the off-by-one error in the pagination logic inside `utils/pagination.ts`. The tests in `pagination.test.ts` currently fail on the last page. Fix the bug, update any related comments, and confirm the tests pass.”

For larger features describe the desired interface first, then ask it to implement and verify. Because thinking is adaptive, the model plans before writing code on higher effort settings.

![Laptop screen showing code with glasses nearby](https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=800&q=80)

## Create Documents and Spreadsheets

The model produces clearer prose and follows slide or spreadsheet templates more reliably than Sonnet 5. One internal test gave it quarterly earnings materials plus a template and received a first-draft operating review that experts judged ready to send.

Supply the source materials and the output format. Specify tone, length, and any required sections.

Example for a summary document:

“Using the attached meeting notes and the project brief, write a two-page status update. Include a short executive summary, key risks, and next actions. Keep language direct and avoid filler.”

For spreadsheets ask it to generate formulas, clean data, or build a simple model. Provide sample rows so the structure matches what you need. Review numerical results carefully; the model is strong but not a substitute for verification on financial or operational data.

## Tips for Lower Cost and Higher Quality

- Prefer medium effort unless the task is unusually open-ended. Lower settings often match or beat prior Sonnet quality at a fraction of the cost.
- Cache repeated system prompts or long context. The $0.20 cache-read rate makes this worthwhile on agentic loops.
- Keep prompts scoped. Sonnet 5.5 performs best on well-defined work rather than open-ended research that needs sustained judgment.
- Check the thinking blocks if you are debugging an API response. Adaptive thinking means the first content block may be reasoning rather than the final answer.
- Compare token usage on a sample set of tasks after switching. Most users see a net reduction even at the same sticker price.

## Watch the Official Introduction

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/s5nkj-L2vAw"
    title="Introducing Claude Sonnet 5.5"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The short official video highlights the speed and writing improvements.

## Conclusion

Claude Sonnet 5.5 gives most developers and knowledge workers a practical upgrade: faster responses, lower typical cost, and stronger results on everyday coding and document tasks. Switch the model, test effort levels on your own work, and keep verification in the loop for anything important.

The model is available today on Claude.ai, Claude Code, and the major cloud platforms. For deeper API migration details see Anthropic’s what’s-new notes and the existing switch guide linked above.

## Sources

- [Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) — Anthropic, 28 September 2026
- [Claude Sonnet 5.5 model overview](https://platform.claude.com/docs/en/models/sonnet-5-5/overview) — Claude Platform
- [What’s new in Claude Sonnet 5.5](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5) — Claude Platform
- [Introducing Claude Sonnet 5.5 (video)](https://www.youtube.com/watch?v=s5nkj-L2vAw) — Claude on YouTube
