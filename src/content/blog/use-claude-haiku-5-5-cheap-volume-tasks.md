---
title: "How to Use Claude Haiku 5.5 for Cheap Volume Tasks"
description: "Switch to Claude Haiku 5.5 for summaries, routing, and subagents. See October 2026 pricing, model ID, and when to keep Sonnet."
pubDate: 2026-10-08T09:00:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to"]
noindex: false
---

Anthropic released Claude Haiku 5.5 on October 7, 2026, and called it the cheapest, fastest, and most capable small model it has shipped. For prompts up to 100,000 tokens, input is $0.10 per million tokens and output is $0.50. That is 90% below Haiku 4.5 on the same band. Anthropic says typical workloads cost about 75% less once tokenizer changes are counted.

That price only helps if you put Haiku on the right jobs. Long agentic coding still belongs on Sonnet 5.5 or Opus 5.5. This guide covers where Haiku 5.5 fits, how to select it in Claude and the API, and how the new effort setting and cache prices change the bill.

## What Haiku 5.5 is built for

Anthropic positions Haiku 5.5 for high-volume, cost-sensitive work: summaries, compaction, database-style lookups, classification, and routing. It is also meant as a subagent next to Opus 5.5 and Sonnet 5.5 on coding jobs, and for speed-sensitive tasks such as live support and browser use.

It is the first Haiku-class model with an adjustable effort setting, so you can trade intelligence for cost on the same model ID. Anthropic also notes a limit: Haiku 5.5 is its fastest model at standard speed, but Opus models in Fast Mode still run quicker.

The model is available on Claude.ai for Free, Pro, Max, Team, and Enterprise on web, iOS, and Android. Developers can call it on the Claude Platform, Amazon Bedrock, Google Cloud, and Microsoft Foundry. It is also available in Claude Code.

![Developer reviewing code on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Check the price before you migrate

Pricing is split at 100,000 input tokens. Anthropic says about 90% of requests to the previous Haiku model fell under that line, which is why the lower band matters most.

| Price per 1 million tokens | Haiku 5.5 (up to / over 100k) | Haiku 4.5 | Sonnet 5.5 |
| --- | --- | --- | --- |
| Input | $0.10 / $0.50 | $1.00 | $2.00 |
| Output | $0.50 / $2.50 | $5.00 | $10.00 |
| Cache reads | $0.01 / $0.05 | $0.10 | $0.10 |
| Cache writes | $0.125 / $0.625 | $1.25 | $2.50 |

Source: [Anthropic’s Haiku 5.5 announcement](https://www.anthropic.com/claude-haiku-5-5). The Claude Platform docs list the API model ID as `claude-haiku-5-5`, a 1 million token context window, and a 128,000 token max output.

On the same day, Anthropic halved Sonnet 5.5 cache reads from $0.20 to $0.10 per million tokens. The company says that cut lowers Sonnet 5.5 cost on most agentic work by about 20%, because cache reads are a large share of token use. If you already route hard coding to Sonnet, that change is worth applying even if you do not move every call to Haiku. For the app and API switch path, see [How to Switch to Claude Sonnet 5.5](/blog/claude-sonnet-5-5-switch-guide/).

Haiku 5.5 uses an updated tokenizer, similar to Sonnet 5.5 and Opus 5.5, so the same task can consume slightly more tokens than Haiku 4.5. Compare usage metadata after a sample batch, not just the sticker price.

## Step 1: Pick the workload

Move a task to Haiku 5.5 when all of these are true:

1. The prompt usually stays under 100,000 tokens.
2. The output is short or structured: a label, a summary, a compacted transcript, or a extracted field.
3. You can score the result with an eval, not only a vibe check.
4. Latency matters more than the last few points of a hard coding benchmark.

Leave the lead model alone when the job is multi-step professional work in a terminal. On Terminal-Bench 4.0, Anthropic reports Haiku 5.5 at 39.2% and Sonnet 5.5 at 70.6%. On OSWorld 2.1’s offline subset, Haiku 5.5 scores 72.4%, up from 15.7% for Haiku 4.5, while Sonnet 5.5 scores 83.9%. Computer use improved a lot. Complex agentic coding did not catch Sonnet.

## Step 2: Select it in Claude

On claude.ai, open a chat and use the model picker. Choose Claude Haiku 5.5. The same selector is on the iOS and Android apps for plans that include model choice.

Use the chat model for one-off drafts, classification experiments, and support macros you still want to review. For repeated production calls, switch to the API so you can pin the model ID, set effort, and log token use.

In Claude Code, select Haiku 5.5 when you want a fast side model for summaries or narrow edits. Keep Sonnet or Opus as the lead if the session is a long refactor. Cognition said Haiku 5.5 as a sidekick in Devin Fusion held a FrontierCode score of 66.2 while cutting cost and latency, with Opus 5.5 as the lead.

## Step 3: Call the API model

On the Claude API, set the model to `claude-haiku-5-5`. On Amazon Bedrock the ID is `anthropic.claude-haiku-5-5`. Confirm the Google Cloud and Microsoft Foundry IDs in the [Haiku 5.5 overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview) before you change a deployment, because cloud IDs can differ from the first-party string.

A minimal Messages request looks like this:

```python
import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=512,
    messages=[{
        "role": "user",
        "content": "Classify this ticket as billing, access, or other. Reply with one label."
    }],
)
print(message.content[0].text)
```

Follow the [migration guide](https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide) if you are moving from Haiku 4.5. Thinking blocks from one account do not replay in an unrelated account. Retest tool schemas, not only prose prompts.

![Close-up of code on a monitor during a software build](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Step 4: Set effort, then measure

Start effort low for classification, routing, and compaction. Raise it only when an eval shows a real miss. Anthropic publishes effort curves for OSWorld, GDPval-AA, and Humanity’s Last Exam so you can see the cost jump before you turn the dial up in production.

A practical batch test:

1. Take 50 to 200 real prompts from last week, not synthetic ones.
2. Run Haiku 4.5 and Haiku 5.5 at the same effort if both support it, otherwise at the default.
3. Log input tokens, output tokens, cache reads, and latency.
4. Score exact-match labels or a human rubric on a sample.
5. Promote Haiku 5.5 only if quality holds and cost or latency drops.

Early customer notes on the announcement page match that pattern. Asana reported more than a 30% latency drop on AI Teammate task completion and up to 2.5 times faster inference per agent turn. HubSpot reported a 92.8% score on simulated CRM portal tasks, averaged over three runs, with the fastest completion and the lowest false-positive rate on a stale-record audit. AlphaSense reported 0.84 versus 0.76 for Haiku 4.5 on 400 document questions. Treat those as vendor-published customer results, then rerun your own set.

## Step 5: Use it as a subagent

A clean split is lead model plus Haiku workers:

- Sonnet 5.5 or Opus 5.5 plans the change and writes the hard code.
- Haiku 5.5 compacts the transcript, summarizes a file, or pulls one field from a long document.
- The lead model only sees the short result.

Rogo described that pattern directly: a larger model builds the deck, and a Haiku 5.5 subagent pulls a segment revenue line from a 10-K. That keeps the expensive context small.

Anthropic is also adding computer use and browser use support in beta to the Python and TypeScript SDKs. Haiku 5.5 is the model they point at for those tasks because of speed and price. Read the [browser use SDK docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-sdk) before you enable the beta tools in a user-facing agent.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EqMxcTvJorQ"
    title="Claude Haiku 5.5: Anthropic's New Workhorse."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Watch safeguards and credits

Haiku 5.5’s cybersecurity safeguards are stricter than Haiku 4.5 and somewhat looser than Sonnet 5.5. Anthropic says they allow a wider range of defensive tasks than Sonnet 5.5, and still block penetration testing and similar attacker techniques. Biology safeguards match Sonnet 5, Sonnet 5.5, and Opus 5: research questions are allowed, requests judged likely to cause harm are restricted. Organizations that need a wider scope can apply to the Life Sciences Verification Program or the Cyber Verification Program. The application path for the cyber program is covered in [How to Apply for the Claude Cyber Verification Program](/blog/apply-claude-cyber-verification-program/).

This week Anthropic is also rolling out a monthly Claude Platform credit for Max and Team subscribers. Max 5x gets $100, Max 20x gets $200, and Team gets up to $500 pooled across users. Credits work on any model, so they are a low-risk way to benchmark Haiku 5.5 against Sonnet on your own prompts.

## Tips before you flip the default

Keep prompts under 100,000 tokens when you can. Crossing that line raises input from $0.10 to $0.50 and output from $0.50 to $2.50 per million tokens.

Turn on prompt caching for stable system instructions. Cache reads on the short band are $0.01 per million tokens.

Do not replace Sonnet on Terminal-Bench-style coding just because the unit price is lower. Anthropic says the larger models remain the better choice there.

Recheck token counts after migration. The new tokenizer can spend more tokens on the same text.

## Conclusion

Claude Haiku 5.5 is the volume model in the 5.5 family: $0.10 / $0.50 per million tokens under 100,000 input tokens, a 1 million token context, and an effort dial. Select `claude-haiku-5-5` for classification, compaction, and subagent lookups. Keep Sonnet 5.5 on hard agentic coding, and use the new $0.10 cache-read price there. Run a scored sample before you change the default.

## Sources

- Anthropic, [Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5), October 7, 2026
- Anthropic, [Claude Haiku model page](https://www.anthropic.com/claude/haiku)
- Anthropic, [Claude Haiku 5.5 overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
- Anthropic, [Haiku 5.5 migration guide](https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide)
