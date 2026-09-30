---
title: "How to Use GPT-6.1 Sol on the OpenAI Responses API"
description: "Call gpt-6.1-sol on the OpenAI Responses API. Set reasoning effort, use tools, check pricing, and know ChatGPT Work limits."
pubDate: 2026-09-30T10:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "developer", "productivity"]
noindex: false
---

OpenAI shipped **GPT-6.1 Sol** as an upgrade to GPT-6 Sol. Official copy positions it as near-Astra quality on agentic coding, computer use, and professional work at one-fifth of Astra’s standard input and output token prices.

The model ID is `gpt-6.1-sol`. It is live in the API and in ChatGPT Work and Codex. It is **not yet available in Chat**. If you still point Chat Completions at tools, move those calls to the Responses API first.

This guide covers who can use it, how to send a first request, how reasoning effort works, and what to avoid when you leave GPT-6 Sol.



![Laptop with source code on a dark desk](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## What OpenAI actually launched

The product post lists these API prices:

- **$2** per million input tokens
- **$0.10** per million cached input tokens
- **$10** per million output tokens

Cached input is 95% cheaper than standard input on this model, and 50% cheaper than GPT-6 Sol’s cached input rate. That matters if your agent reuses a long system prompt or repo snapshot.

The model page lists a **1,050,000**-token context window and **128,000** max output tokens. Knowledge cutoff is **30 April 2026**. Inputs are text and image. Output is text. Audio and video are not supported on this ID.

ChatGPT access: Plus, Pro, Business, Enterprise, and Edu in **ChatGPT Work** and **Codex**. Enterprise and Edu keep the model off until an admin turns it on. OpenAI also said GPT-6.1 Sol Ultrafast would follow in the days after launch, with up to 8x faster token generation in Codex versus standard speed.

## Use Responses, not Chat Completions, for tools

OpenAI’s reasoning guide is explicit. GPT-6.1 Sol supports Chat Completions for requests **without tools**. Function calling and hosted tools need the **Responses API**.

`reasoning.effort` values: `low`, `medium` (default), `high`, `xhigh`, and `max`. `none` and `minimal` are not supported. You can also set `reasoning.mode` to `pro` for harder jobs that can tolerate extra latency and tokens. Default mode is `standard`.

Supported tools on the model card include web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search.

If you already keep reusable workflows in ChatGPT, pair this API path with the product-side notes in [How to Create and Use ChatGPT Skills for Repeatable Work](/blog/chatgpt-skills-reusable-workflows/). Skills in ChatGPT and tool calls in Responses are different surfaces that share a name.

## Send a first request

1. Create an API key in the OpenAI dashboard and export it as `OPENAI_API_KEY`.
2. Call `POST https://api.openai.com/v1/responses`.
3. Set `"model": "gpt-6.1-sol"`.
4. Put the user task in `input`.
5. Add a `reasoning` object only when you need a non-default effort or `pro` mode.

Example:

```bash
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-6.1-sol",
    "reasoning": {
      "mode": "pro",
      "effort": "medium"
    },
    "input": "Review this database migration plan and identify potential failure modes."
  }'
```

In Node, the same call is `client.responses.create({ model: "gpt-6.1-sol", input: "..." })`. Read `output_text` for the visible answer. Reasoning tokens still count toward billed usage even when they are not shown as the final message.

Keep `medium` for first tests. Raise effort only after you measure quality on your own tasks. OpenAI tells developers to compare Sol with Astra on those tasks instead of treating launch charts as a guarantee.



![Developer reviewing an API response on a monitor](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Where the official scores apply

OpenAI published several research-environment numbers. Treat them as launch evidence, not as your production SLA.

- **DeepSWE v1.1:** GPT-6.1 Sol matches GPT-6 Astra at about one-fifth the cost, and beats GPT-6 Sol’s best score by 6.4 percentage points at a lower reasoning effort and cost.
- **GDP.pdf:** scores higher than Opus 5.5 with fallbacks at less than half the cost per task across tested reasoning settings, and approaches Astra at about one-fifth the cost per task.
- **AutomationBench 1.0.6:** 2.2 points above Opus 5.5 at medium effort and about a third of the cost; 4.8 points above GPT-6 Sol at the same setting.
- **OSWorld 2.0** (offline set, partial reward, v2026.08.08): seven points above GPT-6 Sol at max effort and less than half the cost; within 2.1 points of Astra at about one-seventh the cost per task.
- **Terminal-Bench Science 0.1:** more than doubles GPT-6 Sol at max effort. Average cost cited: **$5.47** per task versus **$23.21** for Opus 5.5 and **$23.80** for Astra. Astra still led the pack at **68.1%**. OpenAI says use Astra for the hardest scientific research tasks.
- **Factuality** on flagged, de-identified chats: at low effort, answers with at least one factual error fell from 11.4% (GPT-6 Sol) to 7.7%. OpenAI states those prompts are not typical traffic.

Alignment notes in the system card addendum: lower failure rates than GPT-6 Sol on disclosing a broken search tool, respecting explicit restrictions, and avoiding unauthorized outcomes in agentic tasks. No attempts to bypass an automated safety reviewer in the tests OpenAI reported.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Fls_onRviPM"
    title="Live from OpenAI DevDay 2026: Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn it on in ChatGPT Work and Codex

API keys do not unlock the ChatGPT picker. Use the product path separately.

1. Open ChatGPT Work on the web or the desktop app, or open Codex in the desktop app or CLI.
2. Confirm the account is Plus, Pro, Business, Enterprise, or Edu.
3. If you are on Enterprise or Edu, ask an admin to enable GPT-6.1 Sol. The plan leaves it off by default.
4. Pick `gpt-6.1-sol` in the model list. It will not appear in Chat until OpenAI ships that surface.
5. For coding sessions, start from the default Power setting available to your account, then raise reasoning only when a task stalls.

Do not expect the same system prompt or tool set as the raw API. OpenAI notes that research evaluations can differ from production ChatGPT because of system prompts, tools, and effort settings.

## Practical tips

- Prompt cache the static prefix (instructions, repo map, style guide) so you actually hit the $0.10 cached input rate.
- Use Responses for any tool loop. Chat Completions will accept a no-tool `gpt-6.1-sol` call and fail you later when you add functions.
- Stay on GPT-6 Astra when Terminal-Bench-style science work is the job. OpenAI says Astra still leads that set.
- Stay on GPT-6 Luna for high-volume, focused tasks where cost beats near-Astra quality.
- Watch output tokens. A 128k cap is large; `max` effort plus `pro` mode can still spend it.
- Read the [GPT-6.1 Sol system card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol) before you put the model on customer-facing agents.

## Conclusion

GPT-6.1 Sol is the mid-tier GPT-6 workhorse: Responses API, `gpt-6.1-sol`, default `medium` reasoning, tools only on Responses, and ChatGPT access limited to Work and Codex. Price the cached prefix, measure against Astra on your own suite, and keep Chat Completions for tool-free calls only.

## Sources

- [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/) — OpenAI, 22 September 2026
- [GPT-6.1 Sol model page](https://developers.openai.com/api/docs/models/gpt-6.1-sol) — OpenAI API
- [Reasoning models](https://developers.openai.com/api/docs/guides/reasoning) — OpenAI API
- [Latest model guide](https://developers.openai.com/api/docs/guides/latest-model.md) — OpenAI API
- [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — OpenAI, 29 September 2026
- [GPT-6.1 Sol system card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol)
- [Live from OpenAI DevDay 2026: Keynote](https://www.youtube.com/watch?v=Fls_onRviPM) — OpenAI on YouTube
