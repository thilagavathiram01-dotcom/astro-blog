---
title: "How to Switch to Claude Sonnet 5.5 in Apps and API"
description: "Use Claude Sonnet 5.5 on claude.ai, Claude Code, and the API. Official model ID, pricing, effort settings, and when to keep Opus."
pubDate: 2026-09-29T09:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "productivity", "ai"]
noindex: false
---

Anthropic released **Claude Sonnet 5.5** on September 28, 2026. It is the second model in the Claude 5.5 family and a faster, cheaper partner to [Claude Opus 5.5](/blog/claude-opus-5-5-claude-code-api/). Anthropic positions it for well-scoped everyday work: bug fixes, feature slices, decks, spreadsheets, and agent loops that do not need Opus-level judgment.

This guide covers how to turn it on in the Claude apps, Claude Code, and the public API. Facts below come from Anthropic’s launch page, platform docs, and AWS Bedrock announcement.

## What changed versus Sonnet 5

List price did not move. Input is **$2 per million tokens**, output is **$10**, and cache reads are **$0.20**. Cache writes are **$2.50**. Anthropic says the model usually spends fewer tokens per task, so many jobs cost **up to 30% less** than Sonnet 5. It also generates tokens **30%+ faster**.

Published scores from the launch page:

- **Terminal-Bench 4.0:** 70.6% versus 10.3% for Sonnet 5
- **CursorBench 4.0:** 55.5% versus 34.1%
- **GDPval-AA v2.1:** 1844 versus 1449 (Opus 5.5 is 1846)
- **OSWorld 2.1 (partial):** 80.1% versus 57.0%

Anthropic still says Opus 5.5 is stronger on open-ended work that needs sustained judgment. Use Sonnet 5.5 as the default workhorse. Promote a thread to Opus when the plan is fuzzy or the blast radius is large.

Haiku 5.5 is listed as coming in the following weeks. Do not hard-code a Haiku 5.5 ID yet.



![Laptop showing source code on a dark editor](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)



## Step 1: Use Sonnet 5.5 in the Claude apps

Anyone can chat with Sonnet 5.5 on [claude.ai](https://claude.ai), plus iOS and Android.

1. Sign in and open a new chat.
2. Open the model picker at the top of the conversation.
3. Choose **Claude Sonnet 5.5**.
4. Leave effort on **Medium** unless the task is a one-line rewrite (Low) or a multi-file review that must check itself (High).

Anthropic’s default effort in the apps is Medium. Lower effort answers faster and uses fewer tokens. Higher effort reasons longer and checks work more thoroughly.

Good first jobs in the apps: polish a slide outline, rewrite a support reply, summarize a spreadsheet export, or draft a scoped coding change you will paste into an editor.

## Step 2: Point Claude Code at the new Sonnet

Claude Code can override the model in settings, environment variables, or a one-off flag. Official settings docs show a `model` field in Claude Code config.

1. Update Claude Code so the client knows the 5.5 IDs.
2. In a session, run `/model` and select Sonnet 5.5 if the picker lists it.
3. To pin it for every session, set `model` in your Claude Code settings file to `claude-sonnet-5-5`.
4. Or export `ANTHROPIC_MODEL=claude-sonnet-5-5` / `ANTHROPIC_DEFAULT_SONNET_MODEL=claude-sonnet-5-5`.

Keep Opus 5.5 on a second alias for architecture and migrations. A practical split: Sonnet 5.5 for implement-and-test loops, Opus 5.5 for the first plan and for reviews that touch auth, payments, or data deletion.

Effort still matters. Academy material linked from the launch page explains that Medium is the Claude Code default. Raise effort only when the agent starts skipping tests or shrinking the diff too far.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/u-3cPWPvRUE"
    title="Introducing Claude Sonnet 5.5"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Call the API with the official ID

Platform docs list a single Claude API ID: **`claude-sonnet-5-5`**.

Cloud aliases from the same page:

- Amazon Bedrock: `anthropic.claude-sonnet-5-5` (AWS also documents a Global CRIS profile on `bedrock-runtime`)
- Claude Platform on AWS: `claude-sonnet-5-5`
- Google Cloud (Vertex): `claude-sonnet-5-5`
- Microsoft Foundry: `claude-sonnet-5-5`

US-only inference is available at **1.1x** input and output pricing if your workload must stay in the United States.

A minimal Messages request looks like this:

```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-sonnet-5-5",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Summarize this diff in five bullets."}
    ]
  }'
```

Platform notes list breaking changes when you leave Sonnet 5, including how up-front thinking interacts with `between_tools`. Read [What’s new in Claude Sonnet 5.5](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5) before you flip a production agent.

API users can set thinking effort. The Claude Platform default is **High**. If you copy app prompts onto the API without lowering effort, bills can rise even though list prices match Sonnet 5.



![Close-up of a computer monitor filled with code](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Step 4: Match the model to the job

Use Sonnet 5.5 when the task is bounded:

- Fix a failing test and keep the diff small
- Implement a feature after Opus (or a human) wrote the plan
- Draft slides or a spreadsheet from a template
- Run a support or Slack agent that already has tools

Stay on Opus 5.5 when you need a system design, a multi-repo migration, or a review that can say “do not ship.” Anthropic’s own testers described that split: Opus sets the frame, Sonnet implements it.

Early customer notes on the launch page (Epic Games, CodeRabbit, Slack, Zendesk, Box, Lovable, Atlassian) report fewer tool calls, fewer tokens, and faster ticket or review loops. Treat those as vendor-reported results, not as a guarantee for your repo.

## Safety and product limits

Sonnet 5.5 is the first Sonnet to ship with **cyber safeguards and fallbacks** similar to Anthropic’s most capable models, because its cyber evals sit near Opus 5. Biology safeguards match Sonnet 5. Anthropic says both target a narrow set of high-risk requests. Routine software work and most life-sciences questions are unaffected.

Do not use the model to probe vulnerabilities outside a program you are authorized to run. The system card and launch page both flag that cyber capability rose with this release.

Every generated-speech or image product is a different stack. Sonnet 5.5 is a text-and-tools model. It does not replace Gemini Live, Gemini TTS, or Claude’s separate computer-use product configuration.

## Tips that keep cost down

- Cache stable system prompts. Cache reads are $0.20 per million tokens.
- Default API effort to Medium for chat-like agents. Reserve High for batch reviews.
- Batch independent tool calls. Testers said Sonnet 5.5 already groups tools more than Sonnet 5; do not add extra “think then act” turns unless the tool failed.
- Compare one real task (same repo, same tests) before you change a default in production.
- Keep a rollback ID. If a prompt relied on Sonnet 5 quirks, pin that snapshot until you rewrite the prompt.

## Conclusion

Switching is a model-string change plus an effort choice. In the apps, pick **Claude Sonnet 5.5**. In Claude Code and the API, send **`claude-sonnet-5-5`**. Leave Opus 5.5 in the picker for work that still needs a senior review.

If you already run Opus 5.5 in Claude Code, keep that guide next to this one and route everyday diffs to Sonnet first.

## Sources

- [Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) — Anthropic, 28 Sep 2026
- [Claude Sonnet product page](https://www.anthropic.com/claude/sonnet) — Anthropic
- [What’s new in Claude Sonnet 5.5](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5) — Claude Platform docs
- [Claude Sonnet 5.5 System Card](https://www.anthropic.com/claude-sonnet-5-5-system-card) — Anthropic
- [Introducing Claude Sonnet 5.5 on AWS](https://aws.amazon.com/blogs/machine-learning/introducing-claude-sonnet-5-5-on-aws/) — AWS Machine Learning Blog, 28 Sep 2026
- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings) — Anthropic Docs
- [Introducing Claude Sonnet 5.5 (video)](https://www.youtube.com/shorts/u-3cPWPvRUE) — Claude on YouTube
