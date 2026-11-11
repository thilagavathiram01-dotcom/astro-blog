---
title: "How to Use /swarm in Antigravity with Gemini 4 Carbon"
description: "Step-by-step guide to start, monitor, and steer /swarm multi-agent teams in Google Antigravity using Gemini 4 Carbon for parallel coding tasks."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google Antigravity now includes /swarm in preview, letting one prompt spin up a team of named agents that work in parallel. Pair it with Gemini 4 Carbon for the roles that need deep reasoning, and lighter models for routine edits. This guide shows exactly how to start a swarm, watch the board, and steer the team.

Gemini 4 Carbon launched on November 10, 2026, as Google’s strongest model for long-horizon agentic work, cybersecurity, and complex knowledge tasks. It ranks first on CursorBench 4.0 and Perplexity’s WANDR. In Antigravity, Ultra subscribers can select Carbon while /swarm is available on both Pro and Ultra plans in the App and CLI.

## What /swarm does

Type /swarm followed by a clear task. Your current conversation becomes the coordinator. It splits the work into non-overlapping pieces, starts named workers such as @parser or @api-tests, and usually adds a @verifier for every two to four workers. Everyone posts to one shared, append-only message board. Idle agents sleep at zero token cost until mentioned.

Workers can run in isolated git worktrees so simultaneous edits never collide. You can pin different models to different roles. Google recommends Gemini 4 Carbon for the coordinator, architecture, security audits, and verification, while Gemini 4 Argon or faster models handle file edits.

The Swarm UI appears in the side pane of the App. In the CLI you open a live full-screen board with /swarm board or Alt+S. Tabs show the Board feed, Members roster, and an interactive Graph that replays how the team reached the final result.

![Multiple computer screens showing code in a developer workspace](https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=800&q=80)

## Start a swarm in the Antigravity App

Open a project conversation. Type /swarm and press Tab or Enter to insert the command. Then describe the task and how success should be checked. Example:

/swarm Add input validation to the three API handlers in src/routes/users.ts, src/routes/orders.ts, and src/routes/products.ts. Give each handler its own worker, add tests next to each handler, and have a verifier run npm test when they finish.

The coordinator replies and ends with an Open the Swarm UI link. Click it to open the side pane. Continue talking to the coordinator in the main chat while the workers run. Ask for status anytime or give new instructions.

In the CLI the flow is the same: type /swarm, complete the command, and describe the task. Follow the status row and open the board when needed.

## Monitor and steer the team

The Board tab lists every post with sender, recipients, and time. Unread posts appear below a New divider. Search and filters let you focus on one member. Turn Follow on for auto-scroll.

The Members tab groups active and standing-by workers, shows each model ID and current work, and lets you click through to any agent’s conversation. The Graph tab visualizes mentions and lets you scrub through the timeline.

To change scope or priorities, message the coordinator. It posts the update to the right workers. To answer a question or approve a tool call for one worker, open that worker’s conversation from the Members list or the Subagents overview and type directly. Your message stays private to that worker.

When the work finishes, the coordinator reports the result. Waiting workers use no tokens, so you can leave them. Ask the coordinator to remove any that have nothing left to do. Removal is permanent.

![Developer working on a laptop with code visible on screen](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

State what “done” looks like and how to verify it. The coordinator decides the split, but clear success criteria reduce rework. Prefer tasks that divide cleanly across files or packages. For tightly coupled changes, a single agent or /boost may be simpler.

Assign Carbon to the coordinator and verifier when the task involves architecture, security review, or extended verification loops. Carbon uses more tokens; the introductory API price is $2 per million input tokens and $10 per million output tokens, matching Gemini 4 Argon. Parallel agents consume quota faster than a normal chat, so start with smaller swarms and watch usage.

Workers share the workspace by default. For heavy parallel builds, ask the coordinator for isolated working copies. You can also request a different model for the verifier in the initial prompt, for example “run the verifier on a different model than the workers.”

## When to choose /swarm over other options

Antigravity offers several multi-agent modes. Subagents handle one-off background tasks. /boost explores hard problems with layered reasoning. /teamwork manages long projects with milestone plans and audit gates. /swarm fits medium-to-large work that splits cleanly and benefits from live visibility on a shared board.

Google’s internal teams used early versions for multi-package migrations, cross-subsystem root-cause analysis, and architectural redesigns over five weeks of dogfooding. Public demos include an interactive Eiffel Tower construction exhibit built from historical photos and drawings, and a 906K-triangle reconstruction of an office from planning PDFs.

For Android work you can combine this with other tools. See our guide on [adding Gemini 4 Carbon to Android apps with Firebase AI Logic](/blog/add-gemini-4-carbon-android-firebase-ai-logic/) when you need the model inside mobile code as well.

## Watch a real example

The video below shows Gemini 4 Carbon in action, including an Antigravity swarm that reviews multiple documents for a business decision.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cXgFL4s4KEs"
    title="Gemini 4 Carbon Is Finally Here: I Built 5 Things in One Day"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

/swarm turns a single prompt into a coordinated team that plans, builds, and verifies in parallel while you watch the shared board. With Gemini 4 Carbon on the high-reasoning roles, the system handles larger coding and knowledge tasks that used to stall a single agent. Start with a clear, verifiable task in the App or CLI, open the Swarm pane, and steer from the coordinator. Quota usage rises with parallel agents, so keep the first runs modest and expand as you learn the patterns.

## Sources

- Google Antigravity blog: Gemini 4 Carbon and /swarm (November 10, 2026)
- Google Antigravity docs: Swarm (/swarm)
- Google blog: Gemini 4 Carbon is now available (November 10, 2026)
