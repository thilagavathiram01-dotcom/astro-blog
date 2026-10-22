---
title: "How to Get the Most from Claude Opus 5.5"
description: "Practical guide to Claude Opus 5.5. Learn how to prompt for long tasks, set finish lines, use Claude Code, and avoid common mistakes."
pubDate: 2026-10-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "productivity", "ai"]
noindex: false
---

Claude Opus 5.5 arrived on September 22, 2026 as the first model in Anthropic’s Claude 5.5 family. It handles long multi-step work better than earlier Opus models, thinks before every reply, and costs about 40 percent less to run than Opus 5 on typical workloads. Early testers completed large code migrations and audits with less oversight.

The model works in Claude apps and Claude Code. A few habits change how well it performs. Give it the whole task up front, remove lines that tell it to think carefully, and tell it clearly when it should stop and ask you.

## What changed with Opus 5.5

Opus 5.5 keeps working longer on multi-part tasks. Anthropic notes that its biggest gains appear on work that spans many steps, such as carrying a change through a large repository until tests pass. Adaptive thinking is always on. The model decides how much to think before it replies, so prompts that say “think carefully” or “think step by step” are no longer useful and can even delay the start of a reply.

Pricing on the API is $4 per million input tokens and $20 per million output tokens. The context window remains 1 million tokens. Default effort is medium. Higher effort levels are available when a task needs deeper work.

In Claude apps you select Opus 5.5 from the model picker. In Claude Code you set the model with `/model claude-opus-5-5` or by starting a session with the full model ID.

![Developer working at a laptop with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## How to ask for better results

Give the entire task in one message. Name what “done” looks like and when the model should stop and ask. Then let it work.

Example for Claude Code:

```
Migrate the payment endpoints from the old client to the new one.
Done means: every endpoint uses the new client, the old client is deleted, and the test suite passes.
Stop and ask me only if a test fails for a reason you cannot explain.
```

This finish line tells the model when the work is complete. Without it, longer runs sometimes stop early to report status instead of continuing.

Remove “think carefully,” “think step by step,” and similar lines from prompts and saved instructions. Opus 5.5 already thinks before every reply. In testing, removing those phrases made replies start sooner with no clear drop in quality.

If you remember something mid-run, send a follow-up while the model continues. Restarts cost more on longer sessions. In Claude Code you can type the extra instruction and press Enter while it works.

For design tasks, list the patterns you do not want. Vague instructions such as “avoid a generic look” often swap one default style for another. Specific bans work better:

```
Build a personal website with placeholder content.
Do not use a cream or off-white background, italic accent words in headings, numbered 01 / 02 / 03 section labels, monospace labels, or pill-shaped buttons.
```

## Steering long runs in Claude Code

Put a short rule in your CLAUDE.md file so the model knows when to keep going and when to stop.

```
When a step does not need my input, keep going. Put status notes in the same message as your next action.
Stop and ask only when you cannot continue without me, or before anything destructive: deleting data, force-pushing, or changing anything outside this repository.
```

If a run ends with “Want me to continue?” simply reply “continue.” Adding the rule above reduces those stops.

For large audits or migrations, ask Opus 5.5 to split the work across subagents and check each result:

```
Audit every service in services/ for the retry bug in the linked issue.
Give each service to its own subagent. When a subagent reports back, check its evidence before you accept it.
Finish with one table: service, affected yes or no, and the evidence.
```

Keep a running checklist in a file such as TASKS.md. Long runs fill the context window and older turns get summarized. A file-based list survives that and shows what is finished at a glance.

## Checking the result

When a long run ends, look first for anything the model is waiting on from you. Then read the rest of the summary. Opus 5.5 reports more clearly than earlier models about what it did, what it found, and what it needs.

Ask it to review a diff before a human does:

```
Review the diff on this branch against main.
List only problems you would block the merge for. For each one, give the file and line, why it is wrong, and how to show it fails.
```

For research, add “Mark anything you could not confirm, and say where you looked.” This makes gaps easier to spot.

In Claude apps, attach charts, diagrams, or screenshots instead of retyping numbers. Opus 5.5 reads them more accurately than Opus 5. You can also hand it a long document and ask it to find contradictions in numbers, dates, or names.

## Tips for everyday use

Leave effort on medium for most work. Raise it only when medium misses something important. Higher effort uses more of your limits and takes longer.

In Claude Code, type `/fast` to turn on fast mode for back-and-forth work. You get the same model with text that arrives sooner. It costs more per token and requires extra usage turned on.

Once you have answered something in a long project chat, treat that answer as settled. Add an instruction so the model focuses on the current question instead of revisiting earlier ones.

If a message is flagged by safeguards, the chat may switch to an older model. You can switch back from the model picker or with `/model` in Claude Code. Starting a new chat avoids re-flagging earlier content.

For related work on Google models, see our guide on [adding Gemini 4 Argon with Firebase AI Logic on Android](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UhBqorWNwlU"
    title="Claude Opus 5.5 is Here! Is Claude Finally Back? (5 Use Cases Tested)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Claude Opus 5.5 performs best when you give it the full task, a clear finish line, and simple rules about when to continue or stop. Remove old “think carefully” instructions. Use Claude Code for long coding runs and keep a task file so you can track progress. Attach images and documents instead of retyping them, and ask the model to mark what it could not confirm.

Start your next session with one complete brief that states what done looks like. The model will handle more of the work itself, and you will spend less time restarting or correcting early stops.

## Sources

- Anthropic. “Getting the most out of Opus 5.5 in Claude and Claude Code.” claude.dev, September 22, 2026. https://claude.dev/blog/getting-the-most-out-of-opus-5-5/
- Anthropic. “Introducing Claude Opus 5.5.” September 22, 2026.
