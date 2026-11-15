---
title: "Claude Fable 5.2 in Claude Code: Effort Levels Guide"
description: "Learn how to use Claude Fable 5.2 in Claude Code. Set the right effort levels, split work with Opus 5.5, and run long agentic tasks without wasting limits."
pubDate: 2026-11-15T09:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer", "productivity"]
noindex: false
---

Anthropic released Claude Fable 5.2 on 9 November 2026. It is built for hard technical work that runs for hours or days. Developers already use it inside Claude Code for multi-file refactors, research, and agentic builds.

This guide shows how to select the model, control effort, and structure sessions so you get the capability without burning your weekly limits. If you already use Opus 5.5, the same habits apply, with a few important differences.

## What Claude Fable 5.2 Offers

Fable 5.2 is the same underlying model as Mythos 5.2. Fable carries stronger cybersecurity and biology safeguards so it is available to all paid users. Mythos is limited to verified organisations working on beneficial cyber or life-sciences projects.

Key specs from Anthropic:

- Context window: 1 million tokens
- Maximum output: 128,000 tokens
- Input price: $8 per million tokens
- Output price: $40 per million tokens
- Fast mode: up to 2.5	imes speed at double the price ($16 / $80)
- Adaptive thinking is always on; you control depth with the effort parameter
- Default effort on the API is high; Claude Code starts it at medium

It generates outputs up to 30 % faster than Fable 5.1 and costs less. On the Remote Labor Index it more than doubled the previous Fable score (41.3 % versus 17.9 %). On FrontierCode 2.0 at high effort it matches Opus 5.5’s best score at roughly half the cost per task.

Anthropic recommends starting most daily work on Opus 5.5 and switching to Fable only when the problem is open-ended, long-running, or needs strong architectural judgment. Fable can also act as an Advisor (other models consult it) or Orchestrator (it delegates simpler steps to smaller models).

## How to Select Fable 5.2 in Claude Code

1. Open a terminal and start Claude Code in your project folder.
2. Type `/model` and press Enter.
3. Choose Claude Fable 5.2 from the list.
4. Confirm the selection. Claude Code will now use that model for the session.

You can also set it from the Claude web or desktop app by opening the model selector and picking Fable 5.2. Paid Pro, Max, Ultra, Team, and Enterprise plans include it. Free users do not have access.

On Pro and standard Team seats, Fable can consume up to half of your weekly usage limit. The other half remains available for other models. Anthropic also offered extra Fable usage during the launch week.

![Developer working at a laptop with code open](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Effort Levels and When to Change Them

Effort is the main control for thinking depth, latency, and cost. Adaptive thinking cannot be turned off. Five levels exist: low, medium, high, xhigh, and max.

Claude Code defaults Fable 5.2 to medium. The API defaults to high. Settings do not carry over from Fable 5.1 or Opus 5.5, so re-test after switching.

Practical guidance:

- **Low** — quick back-and-forth, well-specified changes, or sub-agents. Cheapest.
- **Medium** (Claude Code default) — everyday interactive coding and most feature work. Stops earlier on very long tasks.
- **High** — hard coding, research, or sessions you will leave running unattended. Most of the capability gain appears here.
- **Xhigh** — only after you have measured a clear improvement on your specific workload. Often costs several times more for little extra quality.
- **Max** — reserved for the hardest multi-hour or multi-day agentic jobs where you have already validated the benefit.

In one independent test of 24 hidden edge cases, low through high all scored 100 %. High cost roughly twice as much as medium; xhigh cost about seven times as much.

Change effort mid-session with `/effort`. Pick the level and confirm. The change applies only to the current session unless you save it.

## A Practical Workflow for Bigger Tasks

Many developers plan with Fable at high effort, then switch to Opus 5.5 (or Sonnet) for the bulk of the implementation. This keeps the expensive model on the decisions that need it.

Try this sequence:

1. Start a new Claude Code session and select Fable 5.2 at high effort.
2. Paste a short brief and ask it to interview you: “Ask clarifying questions before any code. Do not write files yet.”
3. Answer the questions. Then say: “Write a detailed plan. List files to create or change, tests, and risks. Stop after the plan.”
4. Review the plan. Edit anything that is wrong.
5. Switch the model to Opus 5.5 (or keep Fable if the task is still ambiguous) and say: “Implement the plan. Run tests after each major change. Fix failures before moving on.”
6. When the session ends, review the diff yourself. Ask Fable (at medium or high) to critique the result if anything looks incomplete.

For multi-day work, start the session before a meeting or overnight. Fable is designed to keep going until the job is finished rather than stopping at a plausible checkpoint.

You can also use Fable as an orchestrator: tell it to spawn sub-agents on cheaper models for routine steps while it handles architecture and verification.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fLjGgbW0Ki8"
    title="Your Complete Guide to Fable 5.2 (When to Use It, Effort Levels, Prompting)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips That Improve Results

Give Fable clear ownership of the outcome rather than a rigid list of steps. “Build a client portal where users can log in, see project status, and download invoices. Use the existing auth system. Write tests for the main flows” works better than a step-by-step recipe.

Describe the success criteria. Include how you will know the task is done (tests pass, screenshots match, etc.).

When you use sub-agents, set their model explicitly so they do not default to Fable.

Remove or simplify rules that conflict with the new task. Overly long system prompts can reduce performance on long runs.

Check the output. Fable is more willing than earlier models to say it does not know something, but you still need to verify critical paths.

If you are already using Claude models inside Google Antigravity or other environments, the same effort concepts apply. See our guide on [accessing Claude Opus 5.5 in Google Antigravity](/blog/access-claude-opus-5-5-google-antigravity/) for related setup details.

![Focused developer wearing headphones working on dual screens](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## Conclusion

Claude Fable 5.2 raises the ceiling for long-horizon technical work. In Claude Code it is available on every paid plan, defaults to medium effort, and rewards clear ownership plus measured use of higher effort settings.

Start with medium for interactive work. Move to high only when the task is open-ended or will run unattended. Plan with Fable and build with a cheaper model when the architecture is settled. That combination keeps quality high and cost predictable.

Official details live in Anthropic’s announcement and the Claude Platform model overview. Test the levels on your own codebase; the right setting depends on the work.

## Sources

- [Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Claude Fable 5.2 model overview](https://platform.claude.com/docs/en/models/fable-5-2/overview)
- [Claude Fable product page](https://www.anthropic.com/claude/fable)
