---
title: "Claude Fable 5.2 Guide for Developers"
description: "How to use Claude Fable 5.2 for long-horizon agentic coding: access, effort levels, pricing, benchmarks, and practical steps."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Claude Fable 5.2 handles the longest, hardest technical work Anthropic has released for general use. Released on November 9, 2026, it sits above Claude Opus 5.5 and improves coding, reasoning, and vision while running up to 30% faster and costing less per token than Fable 5.1.

This guide shows developers how to access it, set effort levels, write prompts for multi-hour agent sessions, and know when to switch from Opus 5.5. All details come from Anthropic’s announcement and platform docs.

![Person coding on laptop overlooking city lights at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## What Claude Fable 5.2 is

Claude Fable 5.2 and Claude Mythos 5.2 share the same underlying model. Fable carries strong cybersecurity and biology safeguards so it can ship to all users. Mythos removes those limits for organizations verified through Anthropic’s Cyber or Life Sciences programs.

The model ID is `claude-fable-5-2`. It accepts a 1 million token context window, outputs up to 128,000 tokens, and keeps adaptive thinking always on. Default effort is high. Knowledge cutoff is June 2026. Input costs $8 per million tokens and output costs $40 per million tokens. Fast mode (up to 2.5× faster generation) costs $16 / $80.

Anthropic recommends starting most coding and knowledge work on Opus 5.5, then moving to Fable 5.2 when the task is too open-ended or long-running for the cheaper model. Fable can also act as an advisor that other models consult or as an orchestrator that delegates simpler work to Haiku, Sonnet, or Opus.

## Access and availability

Fable 5.2 is available today on the Claude API, Claude.ai, Claude Code, Amazon Bedrock, Google Cloud, and Microsoft Azure / Foundry. Eligible paid plans (Pro, Max, Team, Enterprise) receive extra Fable usage resets this week—one to three resets based on subscription length—and Fable counts toward up to 50% of weekly limits on Pro and standard Team seats.

On the API, set the model to `claude-fable-5-2`. The same ID works across the major cloud platforms. Fast mode needs no special header; pass the speed parameter in the request.

Mythos 5.2 requires application to the Cyber Verification Program or Life Sciences Verification Program. Claude Security on Enterprise plans also includes it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6a1QSJlsYpU"
    title="Introducing Claude Fable 5.2"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Benchmarks and efficiency

Anthropic’s evaluation table shows Fable 5.2 ahead of Opus 5.5, GPT-6 Astra, and Gemini 4 Carbon on most agentic and reasoning tasks (safeguards on for Fable scores):

- FrontierCode 2.0 (agentic coding): 49.1% at xhigh effort vs Opus 5.5 45.5% and GPT-6 Astra 42.8%
- FrontierSWE v2: 69.9% vs Opus 5.5 62.3%
- Terminal-Bench-Science 0.1: 74.6% (75.3% Mythos) vs Opus 5.5 58.7%
- OSWorld 2.1 (computer use): 89.3% vs Opus 5.5 87.2%
- RoboDojo Sim (robotics): 64.9% vs Opus 5.5 39.4%
- Humanity’s Last Exam (with tools): 74.2% vs Opus 5.5 67.7%

On FrontierCode 2.0, Fable 5.2 at high effort matches Opus 5.5’s best score for roughly half the cost per task. At xhigh it posts the highest score of any released model tested. Medium effort (the default in Claude apps and Claude Code) already uses fewer tokens than Fable 5.1 on challenging work.

![Abstract digital glitch art with code fragments](https://images.unsplash.com/photo-1765445665883-085301570c87?auto=format&fit=crop&w=800&q=80)

## Practical steps for agentic coding

**1. Start on Opus, escalate to Fable.** For routine multi-file changes, stay on Opus 5.5 (see our [How to Use Claude Opus 5.5 for Agentic Coding](/blog/how-to-use-claude-opus-5-5-agentic-coding/) guide). Switch to Fable only when the problem is ambiguous, spans many repositories, or must run unattended for hours.

**2. Hand over the full task with a clear finish line.** One message should state the outcome and the stop conditions. Example:

```
Design and implement a minimal bootable operating system that runs on a laptop.
Done means: kernel boots, disk/keyboard/network drivers work, permanent file storage exists, and a simple graphical login appears.
Coordinate subagents as needed. Stop and report if a hardware constraint blocks progress.
```

Early internal tests used this style of prompt. One Anthropic engineer started Fable 5.2 in an empty folder; it coordinated more than 1,000 subagents over eight days and produced a working OS with kernel, drivers, storage, windows, login, and installer.

**3. Set effort deliberately.** Medium is the default and often sufficient. Raise to high or xhigh only for the hardest bugs, large migrations, or formal verification work. Higher effort spends more output tokens but frequently finishes in fewer total turns and with better judgment.

**4. Let it verify its own work.** Fable 5.2 tests changes, catches its own errors, and revises. In prerelease testing it completed otherwise-infeasible software migrations, designed three working electronic devices from one-paragraph prompts (speakerphone, voice-assistant hub, handheld virtual pet), solved two open black-hole physics problems, and formalized the proof of Fermat’s Last Theorem in 30 hours with 1,000 agents.

**5. Use it as orchestrator or advisor.** In multi-agent setups, Fable can plan and delegate simpler subtasks to Opus or Sonnet while it handles the hard reasoning. Claude Code supports the Advisor pattern where smaller models consult Fable on bottlenecks.

## Safety notes and when not to use it

Fable 5.2’s safeguards block most cybersecurity and biology tasks that Mythos allows. The model produced fewer unnecessary blocks than Fable 5.1 (approximately 55% fewer on internal measures). High-stakes misalignment risks remain low according to Anthropic’s pre-release testing, including novel sandbox-escape evaluations. Full details are in the Claude Fable 5.2 and Mythos 5.2 System Card.

Do not use Fable for ordinary daily coding if Opus 5.5 already succeeds—the higher price and effort will waste budget. Mythos access is gated; apply only if your work requires the unrestricted cyber or bio capabilities and you can meet verification requirements.

## Conclusion

Claude Fable 5.2 is the model for the work that previously stalled: multi-day agent runs, large ambiguous codebases, formal proofs, and end-to-end hardware design. It is faster and cheaper than Fable 5.1, available on all major platforms today, and pairs cleanly with Opus 5.5 for cost-efficient workflows. Start with a clear finish line, choose effort carefully, and let the model verify its own output. For most developers the practical path is still Opus first, Fable when the problem outgrows it.

## Sources

- Anthropic announcement: Introducing Claude Fable 5.2 and Claude Mythos 5.2 (November 9, 2026)
- Claude Platform docs: Claude Fable 5.2 overview and what’s new
- Anthropic system card: Claude Fable 5.2 and Mythos 5.2
- Official YouTube: Introducing Claude Fable 5.2 (Claude channel)
