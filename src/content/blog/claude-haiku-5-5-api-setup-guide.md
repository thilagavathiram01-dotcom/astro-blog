---
title: "Claude Haiku 5.5 Setup Guide for API and Claude Code"
description: "Call Claude Haiku 5.5 with model ID claude-haiku-5-5. Compare prices under 100k tokens, set effort, and switch high-volume tasks from Haiku 4.5."
pubDate: 2026-10-08T11:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Anthropic released Claude Haiku 5.5 on October 7, 2026. It is the company's fastest small model, built for high-volume work such as classification, extraction, routing, summaries, and subagent calls.

The list price for prompts up to 100,000 tokens is $0.10 per million input tokens and $0.50 per million output tokens. That is 90% lower than Haiku 4.5 on those short requests. Anthropic says about 90% of requests to the previous Haiku model fell in that band, and that the average workload now costs about 75% less once tokenizer changes are included.

This guide shows how to select the model in Claude and Claude Code, call it from the API, and decide when a larger model is still the better spend.

## What changed on October 7

Haiku 5.5 uses model ID `claude-haiku-5-5` on the Claude API. On Amazon Bedrock the ID is `anthropic.claude-haiku-5-5`. Anthropic also lists it on Google Cloud and Microsoft Foundry. The Claude Code release v2.1.293 made it the default Haiku model on the Anthropic API.

The context window is 1 million tokens. Maximum output is 128,000 tokens. Adaptive thinking is on by default, and the default effort setting is medium. The reliable knowledge cutoff is June 2026. Anthropic says it will not retire the model sooner than October 7, 2027.

On claude.ai, Free, Pro, Max, Team, and Enterprise users can select Haiku 5.5 on the web, iOS, and Android.

![Developer writing code on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Check the price band before you migrate

Pricing splits at 100,000 tokens in the prompt. Anthropic publishes these rates per million tokens:

| Charge | Haiku 5.5 up to 100k | Haiku 5.5 over 100k | Haiku 4.5 |
| --- | --- | --- | --- |
| Input | $0.10 | $0.50 | $1.00 |
| Output | $0.50 | $2.50 | $5.00 |
| Cache reads | $0.01 | $0.05 | $0.10 |
| Cache writes (5-minute) | $0.125 | $0.625 | $1.25 |

Prompts over 100,000 tokens are 50% cheaper than Haiku 4.5, not 90%. One-hour cache writes are $0.20 per million tokens under 100k and $1 over that line. The Message Batches API applies a 50% discount on input and output.

Do not treat the sticker price as the full bill. Haiku 5.5 uses the newer tokenizer shared with Claude 4.7 and later models. Anthropic says the same text counts as about 30% more tokens than on Haiku 4.5. The 75% average saving already includes that increase.

The same day, Anthropic cut Sonnet 5.5 cache reads from $0.20 to $0.10 per million tokens. The company says that cut lowers the cost of most agentic Sonnet 5.5 work by about 20%. If you already route hard coding to Sonnet, keep that path and read the steps in [How to Switch to Claude Sonnet 5.5 in Apps and API](/blog/claude-sonnet-5-5-switch-guide/).

## Call Haiku 5.5 from the API

Create an API key in the Claude Console, then set `ANTHROPIC_API_KEY` in your environment. Install a current Anthropic SDK so the new model ID resolves.

A minimal Python call looks like this:

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-haiku-5-5",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Classify this ticket as billing, bug, or how-to. Reply with the label only: I was charged twice for Pro.",
        }
    ],
)
print(message.content[0].text)
```

Leave `temperature`, `top_p`, and `top_k` unset. Anthropic documents that a non-default value for any of them returns a 400 error on this model.

Adaptive thinking is already on. Steer depth with the `effort` parameter. Medium is the default. Drop effort on narrow routing and classification jobs after you measure quality. Raise it when a subagent has to read a document and pull a specific figure. Thinking blocks from this model work only in the account that produced them, or in an account linked to it.

For computer use and browser use, update the Python and TypeScript SDKs. Anthropic added beta support for both in the same launch and points to Haiku 5.5 for those tasks because of speed and price. Follow the browser-use SDK docs rather than an older computer-use sample.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/omNMcR6WWzQ"
    title="Claude Haiku 5.5 Is LIVE (RIP OpenAI)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick it in Claude Code and the apps

In Claude Code, Haiku 5.5 is the default Haiku model after v2.1.293. Update the CLI, then check the model picker if a project still pins `claude-haiku-4-5` or an older alias. Pin `claude-haiku-5-5` in project settings when you want the new ID even if the default alias changes later.

On claude.ai, open the model menu in a new chat and select Haiku 5.5. Use it for short turns: ticket labels, meeting-note compaction, and first-pass summaries. Keep a larger model selected when the chat is a long coding session.

Anthropic is also rolling out monthly Claude Platform credits this week. Max 5x accounts get $100, Max 20x accounts get $200, and Team plans get up to $500 pooled across users. Credits work on any Claude model, so you can spend a test budget on Haiku 5.5 before you move production traffic.

![Circuit board close-up representing model routing](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Decide what should stay on a larger model

Anthropic's own benchmarks show a wide gap versus Haiku 4.5, and a smaller gap versus GPT-6 Luna on several tests. On the published table, Haiku 5.5 scores 72.4% on the OSWorld 2.1 offline subset, against 15.7% for Haiku 4.5 and 48.9% for GPT-6 Luna. Terminal-Bench 4.0 is 39.2%, against 0.0% for Haiku 4.5 and 70.6% for Sonnet 5.5.

That split is the practical rule. Use Haiku 5.5 for compaction, classification, database-style lookups, customer-support drafts, and subagents that fetch one fact. Keep Sonnet 5.5 or Opus 5.5 on multi-step coding measured by suites like Terminal-Bench 4.0. Cognition's early note is the same pattern: Haiku 5.5 as a sidekick next to Opus 5.5, not as the lead on the hardest coding task.

Customer notes published with the launch are useful as scope checks, not as guarantees. Asana reported more than a 30% latency drop and up to 2.5x faster inference per agent turn on its AI Teammates evals. HubSpot reported a 92.8% average on simulated CRM portal tasks. Box reported an 11-point score gain over Haiku 4.5 at about half the latency in early testing. Run your own eval before you copy those numbers into a budget slide.

## Safety limits to plan around

Haiku 5.5's cybersecurity safeguards are stricter than Haiku 4.5 and somewhat looser than Sonnet 5.5. Anthropic says they allow a wider set of defensive tasks than Sonnet 5.5, and they still block penetration testing and related attacker techniques. Biology safeguards match Sonnet 5, Sonnet 5.5, and Opus 5: research questions are allowed, requests judged likely to cause harm are not.

Teams that need a wider cyber or biology scope can apply to Anthropic's Cyber Verification Program or Life Sciences Verification Program. Do not assume a Haiku swap removes those checks.

## Tips before you flip production traffic

Log prompt token counts for a week of Haiku 4.5 traffic. Split the sample at 100,000 tokens so you know how much volume hits the higher Haiku 5.5 band.

Cache stable system prompts. Cache reads at $0.01 per million tokens under 100k are the main lever on repetitive jobs.

Compare effort levels on one eval set. Start at the default medium, then test a lower effort on labels and routing. Keep the level that holds your quality bar.

Watch output length. A 128k maximum is available, but long answers erase the price advantage. Cap `max_tokens` on classification routes.

If you build agent tools on top of Claude Code, pair this model swap with the plugin steps in [How to Add Claude Code Mods with TypeScript Plugins](/blog/claude-code-mods-typescript-plugins/).

## Conclusion

Claude Haiku 5.5 is the right default for short, repeated calls that used to be too expensive on a frontier model. Set the model ID to `claude-haiku-5-5`, omit sampling parameters, and price the job against the 100,000-token line. Leave complex coding on Sonnet 5.5 or Opus 5.5, and use the new Max and Team API credits to prove the swap on your own tasks before you change the production router.

## Sources

- Anthropic, "Introducing Claude Haiku 5.5," October 7, 2026: https://www.anthropic.com/claude-haiku-5-5
- Claude Platform docs, "Claude Haiku 5.5": https://platform.claude.com/docs/en/models/haiku-5-5/overview
- Anthropic, "Claude Haiku": https://www.anthropic.com/claude/haiku
- Claude Code release v2.1.293, October 7, 2026: https://github.com/anthropics/claude-code/releases/tag/v2.1.293
