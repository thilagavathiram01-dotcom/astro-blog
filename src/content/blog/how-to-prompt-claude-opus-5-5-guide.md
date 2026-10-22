---
title: "How to Prompt Claude Opus 5.5 for Better Results"
description: "Anthropic's official tips for prompting Claude Opus 5.5. Hand over whole tasks, set effort, drop old habits, and cut tokens."
pubDate: 2026-10-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Claude Opus 5.5, released September 22, 2026, thinks before every reply and runs longer unattended tasks than Opus 5. Old habits from earlier models slow it down or waste tokens. This guide follows Anthropic’s official playbook (by Addy Osmani) and platform docs only.

![Person coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Hand over the whole task with a finish line

Opus 5.5 excels at multi-step work. Give the complete outcome in one message. Name what “done” looks like and when it should stop and ask.

Example from the official playbook:

```text
Migrate the payment endpoints from the old client to the new one.
Done means: every endpoint uses the new client, the old client is deleted, and the test suite passes.
Stop and ask me only if a test fails for a reason you can't explain.
```

This lets it plan and execute without constant hand-holding. Early testers ran multi-hour coding tasks with little oversight when the finish line was clear. Restarting a long run costs more tokens, so add follow-ups mid-task instead of starting over.

## Delete “think carefully” and similar lines

Opus 5.5 always thinks before it replies and decides how much thinking is needed. Lines such as “think carefully,” “think step by step,” or “make no mistakes” add latency with no quality gain. Anthropic’s testing showed replies started sooner after removal, with no clear drop in quality.

For a quick answer, say “Answer directly.” Control depth with the effort parameter instead of prompt text.

## Set effort explicitly and start at medium

Effort is the main control for how much the model thinks. Opus 5.5 defaults to medium (Opus 5 defaulted to high). Thinking is always on; you cannot turn it off.

Anthropic recommends:

- Start at medium for most work.
- Test low, high, xhigh, and max on your own tasks.
- Opus 5.5 at medium matches or exceeds Opus 5 at high on many coding and knowledge-work evaluations.
- Low comes close on several coding tasks at much lower cost.

Higher effort increases tokens and latency. Set `max_tokens` high enough (up to 128,000) so thinking tokens do not truncate the reply. Thinking counts toward the limit even if not returned.

## Steer long runs in Claude Code

Put stopping rules in `CLAUDE.md`:

```text
When a step doesn't need my input, keep going. Put status notes in the same message as your next action.
Stop and ask only when you can't continue without me, or before anything destructive: deleting data, force-pushing, or changing anything outside this repository.
```

For large audits or migrations, ask it to split work across subagents and verify each result’s evidence before accepting. Keep a live checklist in `TASKS.md` so progress survives context summarization.

When a run ends, read what it needs from you first (decisions, approvals). Then review the summary. Ask it to mark anything it could not confirm and where it looked.

## Design, research, and other habits

For UI or artifacts, list specific styles to avoid rather than saying “avoid a generic look.” Example:

```text
Don't use a cream or off-white background, italic accent words in headings, numbered "01 / 02 / 03" section labels, monospace labels, or pill-shaped buttons.
```

Attach charts, diagrams, or screenshots instead of retyping numbers. Opus 5.5 reads visual layout better than Opus 5. For long documents, ask it to flag contradictions (numbers, dates, names) and quote the location.

Do not request the model’s internal reasoning in the reply—these can be declined under safeguard categories. Ask for a short explanation of the approach instead.

If a message is flagged and switched to an older model, reselect Opus 5.5 in the picker or start a new chat. You can disable automatic switching in settings.

## Tips that save tokens and time

- State the finish line and escalation rules in the first message.
- Prefer one well-scoped thread over overlapping ones on the same files.
- After changes, ask for a short diff summary rather than a full prose recap.
- Use medium effort by default; raise only when results stall.
- Cache system prompts and tools for long agent runs (cache reads are $0.20 per million tokens).
- For pair programming, request a one-line plan up front and a short recap at the end.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Rbe5tPsxKlQ"
    title="100+ Hours of Claude Opus 5.5 Lessons in 53 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Developer working at a desk with multiple monitors and code on screen](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Conclusion

Opus 5.5 rewards clear, complete briefs and lighter steering. Hand over the whole task with a checkable finish line, drop old “think hard” lines, start at medium effort, and add explicit stop rules for long runs. These habits come straight from Anthropic’s September 22, 2026 playbook and platform docs. They cut latency and token use while letting the model finish multi-step work.

For model switching and API details, see [How to Switch to Claude Opus 5.5 in Code and API](/blog/claude-opus-5-5-claude-code-api/).

## Sources

- [Getting the most out of Opus 5.5 in Claude and Claude Code](https://claude.dev/blog/getting-the-most-out-of-opus-5-5/) — Addy Osmani, Claude playbooks, September 22, 2026
- [Prompting Claude Opus 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5) — Claude Platform docs
- [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) — Anthropic, September 22, 2026
- [Claude Opus 5.5 model overview](https://platform.claude.com/docs/en/models/opus-5-5/overview) — Claude Platform docs
