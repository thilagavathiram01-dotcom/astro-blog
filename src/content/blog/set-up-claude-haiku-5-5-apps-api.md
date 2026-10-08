---
title: "How to Set Up Claude Haiku 5.5 in Apps and the API"
description: "Set up Claude Haiku 5.5 in Claude apps and the API. Model ID, effort levels, pricing bands, and when to keep Sonnet 5.5."
pubDate: 2026-10-08T10:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials"]
noindex: false
---

Anthropic released Claude Haiku 5.5 on October 7, 2026, and called it the cheapest, fastest, and most capable small Claude model it has shipped. It is built for high-volume work: summaries, classification, compaction, database-style lookups, and live support. It also runs as a subagent next to larger Claude models.

If you still have Haiku 4.5 selected, you are paying the old rate. Anthropic says Haiku 5.5 costs about 75% less to run on average. For prompts up to 100,000 tokens, list price is 90% lower than Haiku 4.5. This guide covers how to turn it on in the apps and how to call it from the API without guessing the model string.

## What changed with Haiku 5.5

Haiku 5.5 is the first Haiku-class model with an adjustable effort setting. You can trade cost for quality on a single request instead of swapping models. The context window is 1 million tokens, and max output is 128,000 tokens. The model ID on the Claude Platform is `claude-haiku-5-5`.

Anthropic published these scores on its launch page, with Sonnet 5.5 listed only as a reference:

- Knowledge work (GDPval-AA v2.1): 1620, versus 735 for Haiku 4.5
- Computer use (OSWorld 2.1, offline subset): 72.4%, versus 15.7%
- Agentic coding (Terminal-Bench 4.0): 39.2%, versus 0.0%
- FrontierCode 1.1 (Main): 46.4%

Those numbers come from Anthropic's own evals. Treat them as a starting point, then run your ticket router or extraction set before you flip production traffic.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Select Haiku 5.5 in Claude apps

Free, Pro, Max, Team, and Enterprise users can pick Haiku 5.5 on Claude.ai. The same picker is on the iOS and Android apps. Claude Code can use it as well.

1. Open a new chat on claude.ai, or open the model menu in the mobile app.
2. Choose Claude Haiku 5.5 from the model list. If you still see Haiku 4.5 only, refresh the page or update the app.
3. Start with a short, repeatable task: classify a batch of support notes, compress a long thread, or extract fields from a pasted invoice.
4. If the answer is thin, raise effort rather than jumping straight to Sonnet. Effort is new on Haiku and is meant for this tradeoff.
5. For multi-file coding or a long agent run, switch back to Sonnet 5.5 or Opus 5.5. Anthropic says those larger models remain the better fit for complex agentic coding, including the kind of work Terminal-Bench 4.0 measures.

If you already moved a workspace to Sonnet 5.5, the picker works the same way. Our [Sonnet 5.5 switch guide](/blog/claude-sonnet-5-5-switch-guide/) covers that path. Haiku is the volume model sitting under it, not a replacement for the daily driver on hard coding tasks.

## Call it from the Claude Platform

Haiku 5.5 is on the Claude Platform, and Anthropic also lists it on Amazon Web Services, Google Cloud, and Microsoft Foundry. On the native API, set the model to `claude-haiku-5-5`.

A minimal Messages request looks like this:

```python
import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Label this ticket as billing, access, or bug: 'Invoice 4412 failed after a card update.'",
        }
    ],
)
print(message.content[0].text)
```

Pass effort the same way you do on Sonnet and Opus if your SDK version supports it. Anthropic's migration guide is the place to confirm parameter names before you ship: [Haiku 5.5 migration guide](https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide).

Two tokenizer notes matter for cost forecasts. Haiku 5.5 uses an updated tokenizer, similar to Sonnet 5.5 and Opus 5.5, so the same text can consume slightly more tokens than it did on Haiku 4.5. Anthropic already folded that into the "about 75% less on average" claim. Still, recount a sample of your production prompts before you lock a budget.

Pricing is split at 100,000 input tokens. About 90% of requests to the previous Haiku model sat under that line.

| Price per 1M tokens | Up to 100k tokens | Over 100k tokens | Haiku 4.5 |
| --- | --- | --- | --- |
| Input | $0.10 | $0.50 | $1.00 |
| Output | $0.50 | $2.50 | $5.00 |
| Cache read | $0.01 | $0.05 | $0.10 |
| Cache write (5m) | $0.125 | $0.625 | $1.25 |

Batch API requests are 50% off input and output. Cache reads are the cheap path for repeated system prompts. If your classifier sends the same instructions on every call, turn caching on before you scale volume.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/omNMcR6WWzQ"
    title="Claude Haiku 5.5 Is LIVE (RIP OpenAI)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Where Haiku fits next to Sonnet

Anthropic is explicit about the split. Use Haiku 5.5 for narrow, repeated work that used to be too expensive: compaction, summarization, routing, and subagent lookups. Keep Sonnet 5.5 or Opus 5.5 for complex coding agents.

Customer notes on the launch page match that split:

- Asana reported more than a 30% latency drop on AI Teammate task completions, and up to 2.5x faster inference per agent turn, versus the model it used before.
- HubSpot scored Haiku 5.5 at 92.8% on a CRM eval suite, averaged over three runs, and said it was the fastest model they tested on a stale-record audit.
- AlphaSense compared 400 document questions and reported 0.84 versus 0.76 against Haiku 4.5 on Ask in Document, a feature that does about 8 million calls a week.
- Cognition said a Haiku 5.5 sidekick in Devin Fusion held a FrontierCode score of 66.2 while cutting cost and latency, with Opus 5.5 as the lead model.

Those figures are from the vendors, quoted by Anthropic. They are not independent benchmarks. They do show the intended pattern: a small model doing a bounded job, often beside a larger one.

![Team working at computers in an office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Extra pricing changes this week

The Haiku launch came with two other cost changes.

Cache reads on Claude Sonnet 5.5 dropped by half, from $0.20 to $0.10 per million tokens. Anthropic says that cuts the cost of most agentic Sonnet work by about 20%, because cache reads are a large share of token use. If you already followed the [Sonnet 5.5 switch guide](/blog/claude-sonnet-5-5-switch-guide/), recheck your cache hit rate. The model string did not change. The bill did.

Max and Team subscribers also get a monthly Claude Platform credit this week. Max 5x accounts receive $100, Max 20x accounts receive $200, and Team plans receive up to $500 pooled across users. Credits work on any Claude model, including Haiku 5.5. Anthropic points to its Help Center article for the rules.

Python and TypeScript SDKs are adding computer use and browser use in beta. Haiku 5.5 is a reasonable first model for those loops because OSWorld scores jumped and the per-token price is low. Still gate any browser tool behind your own allowlist. Speed does not remove the need to review actions.

## Safety limits to plan around

Haiku 5.5's biology safeguards match Sonnet 5, Sonnet 5.5, and Opus 5. Research questions are allowed. Requests Anthropic judges as likely to cause harm are restricted. Cyber safeguards are tighter than Haiku 4.5 and looser than Sonnet 5.5: defensive tasks have more room, while penetration testing and similar attacker techniques stay blocked.

Labs that need a wider scope can apply to the Life Sciences Verification Program or the Cyber Verification Program. Our [Cyber Verification Program guide](/blog/apply-claude-cyber-verification-program/) walks through that application. Do not expect the public Haiku endpoint to bypass those classifiers.

## Practical setup checklist

1. Confirm the model menu shows Haiku 5.5 on web and mobile.
2. Point one non-production route at `claude-haiku-5-5`.
3. Keep prompts under 100,000 tokens when you can. That is the $0.10 / $0.50 band.
4. Enable prompt caching on stable system instructions.
5. Set effort low for labels and routing. Raise it only when extraction quality drops.
6. Leave multi-file coding on Sonnet 5.5 or Opus 5.5.
7. Recount tokens on a sample, because the tokenizer changed.
8. Watch the first invoice. Average savings near 75% assume a mix like Haiku 4.5's, where most calls were under 100,000 tokens.

## Conclusion

Haiku 5.5 is the volume model in the Claude 5.5 family, not the model you should hand every hard coding job. Select it in Claude apps for fast chat and support drafts. Call `claude-haiku-5-5` when a route does the same small job thousands of times. Keep Sonnet 5.5 for the agent that plans the change, and use Haiku to summarize, route, and compact around it.

## Sources

- Anthropic, Introducing Claude Haiku 5.5 (October 7, 2026): https://www.anthropic.com/claude-haiku-5-5
- Anthropic, Claude Haiku product page: https://www.anthropic.com/claude/haiku
- Claude Platform, Haiku 5.5 overview: https://platform.claude.com/docs/en/models/haiku-5-5/overview
- Claude Platform, Haiku 5.5 migration guide: https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide
