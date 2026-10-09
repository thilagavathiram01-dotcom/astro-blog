---
title: "Enable GPT-6.1 Sol Ultrafast Mode in the OpenAI API"
description: "Call gpt-6.1-sol with service_tier ultrafast in the OpenAI Responses API, compare 6x pricing, and check TPM limits and data residency."
pubDate: 2026-10-09T09:15:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "developer", "how-to"]
noindex: false
---

OpenAI added Ultrafast mode for GPT-6.1 Sol on October 8, 2026. It is the fastest service tier in the API, and it is available to every API user on `gpt-6.1-sol` and `gpt-6-astra`. You opt in per request by setting `service_tier` to `ultrafast`. There is no project-wide switch that replaces Standard for this tier.

Speed is the reason to turn it on. Cost is the reason to leave it off for batch work. Official pricing lists Ultrafast for GPT-6.1 Sol at six times Standard: $12 per million input tokens and $60 per million output tokens on short context, against $2 and $10 on Standard. Cached input is $0.60 per million tokens. Cache writes are $15.

This guide covers the Responses API call, WebSocket reuse, rate limits, data residency, and when ChatGPT Work is a different product surface.

## What Ultrafast actually changes

Ultrafast is a service tier, not a new model ID. The model string stays `gpt-6.1-sol`. OpenAI processes the request on a faster path and bills the Ultrafast rate. Rate limits are separate from Standard and Fast, so a quiet Standard quota does not guarantee Ultrafast headroom.

OpenAI recommends WebSockets for agent loops that fire many tool calls in a row. A new HTTPS handshake between turns can erase part of the latency gain. HTTP still works if you only need one short reply.

GPT-6.1 Sol does not support `none` or `minimal` reasoning effort. Valid values are `low`, `medium` (the default), `high`, `xhigh`, and `max`. Tool calling belongs on the Responses API. Chat Completions works for this model only without tools.

If you are still choosing between Sol, Luna, and Astra for everyday ChatGPT Work, start with the [GPT-6 Sol and Luna setup guide](/blog/chatgpt-gpt-6-sol-luna-work-setup/) before you spend Ultrafast tokens.

![Developer laptop with code open on a desk](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Call Ultrafast over HTTP

Install a current OpenAI SDK and set `OPENAI_API_KEY`. The smallest working request is a Responses call with the model and the service tier.

```python
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-6.1-sol",
    input="Summarize this support ticket in two sentences.",
    service_tier="ultrafast",
)

print(response.output_text)
```

The JavaScript equivalent uses the same fields:

```javascript
import OpenAI from "openai";

const client = new OpenAI();
const response = await client.responses.create({
  model: "gpt-6.1-sol",
  service_tier: "ultrafast",
  input: "Summarize this support ticket in two sentences.",
});

console.log(response.output_text);
```

A curl check is useful before you wire the SDK into an app:

```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-6.1-sol",
    "input": "Reply with the word ready.",
    "service_tier": "ultrafast"
  }'
```

That request waits for the full response. Add streaming if the UI should paint tokens as they arrive. Confirm the billed tier on the response object before you roll the flag out to production traffic.

## Keep one WebSocket open across turns

Agentic apps should reuse a connection. OpenAI's Ultrafast guide sends `response.create` events with `service_tier: "ultrafast"` and passes `previous_response_id` so the next turn continues the same thread.

```python
from openai import OpenAI

client = OpenAI()
previous_response_id = None
prompts = [
    "List three checks before deploying a payments webhook.",
    "Turn the second check into a unit-test outline.",
]

with client.responses.connect() as connection:
    for prompt in prompts:
        connection.response.create(
            model="gpt-6.1-sol",
            service_tier="ultrafast",
            previous_response_id=previous_response_id,
            input=prompt,
        )
        for event in connection:
            if event.type == "response.output_text.delta":
                print(event.delta, end="", flush=True)
            elif event.type == "response.completed":
                previous_response_id = event.response.id
                print()
                break
            elif event.type in {"response.failed", "response.incomplete", "error"}:
                raise RuntimeError(event.to_json())
```

Python needs `openai[realtime]` for the WebSocket helper. JavaScript uses `ResponsesWS` from `openai/resources/responses/ws` plus the `ws` package. Close the socket in a `finally` block so idle connections do not linger.

![Close-up of code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Price the request before you flip the flag

Standard GPT-6.1 Sol is $2 per million input tokens, $0.10 cached input, and $10 output. Ultrafast multiplies the short-context rates by six:

| Token type | Standard | Ultrafast (short context) |
| --- | --- | --- |
| Input | $2 | $12 |
| Cached input | $0.10 | $0.60 |
| Cache writes | not listed on the launch card | $15 |
| Output | $10 | $60 |

Long context, prompts over 272K input tokens, is priced at twice the short-context input and cache rates and 1.5 times output for the full request. On Ultrafast that means $24 input, $1.20 cached input, $30 cache writes, and $90 output per million tokens.

Regional processing adds a 10% uplift where data residency applies. Fast mode, the older priority path, is 2x Standard and is the better default when you need lower latency without a 6x bill. Batch and Flex stay 50% below Standard and are the wrong tier for a live agent.

A 20,000-token Ultrafast output costs about $1.20 before input. The same output on Standard is about $0.20. Run Ultrafast on the user-facing turn. Keep retrieval, evals, and overnight jobs on Standard or Batch.

## Check limits, residency, and ChatGPT Work

Default Ultrafast tokens-per-minute for GPT-6.1 Sol are 1,000,000 on the Build tier, 4,000,000 on Launch, and 40,000,000 on Grow. GPT-6 Astra Ultrafast caps are lower: 500,000, 1,000,000, and 5,000,000 TPM on those same tiers. Open a limit increase with your account team before a launch, not after the first 429.

GPT-6.1 Sol Ultrafast supports US and EU data residency and global processing. GPT-6 Astra Ultrafast supports US residency and global processing only. EU workloads that must stay in-region should stay on Sol if they also need this tier.

ChatGPT Work is a separate gate. The October 8 product notes say Ultrafast in Codex and ChatGPT Work is on the Pro $500 plan and on eligible Enterprise and Edu plans. Enterprise access is off by default, so a workspace owner has to enable it. API access does not require that plan.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Fls_onRviPM"
    title="OpenAI DevDay 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The DevDay 2026 keynote is where OpenAI first showed GPT-6.1 Sol and Astra Ultrafast. The October 8 API release is the general-availability switch for Sol.

## Tips before you ship

- Pass `service_tier` on every `response.create` event. A follow-up turn that omits it falls back to the project default, which is not Ultrafast.
- Reuse `previous_response_id` on one socket. Opening a new connection per tool result wastes the tier you are paying for.
- Log input and output token counts next to the service tier so finance can see the 6x multiplier without a surprise invoice.
- Keep prompts under 272K input tokens when you can. Crossing that line reprices the whole request.
- Do not use Ultrafast for GPT-5.6 Sol unless your org has the preview. Broad availability is Astra and 6.1 Sol only.

## Conclusion

Ultrafast mode is a one-field change: `model` set to `gpt-6.1-sol` and `service_tier` set to `ultrafast` on the Responses API. Use a WebSocket when the agent calls tools in a loop. Budget six times Standard on short context, watch the separate TPM caps, and leave batch work on a cheaper tier. ChatGPT Work users on Enterprise still need an admin to turn the product surface on.

## Sources

- OpenAI API, Ultrafast mode: https://developers.openai.com/api/docs/guides/ultrafast-mode
- OpenAI API, GPT-6.1 Sol model page: https://developers.openai.com/api/docs/models/gpt-6.1-sol
- OpenAI API, Ultrafast pricing table: https://developers.openai.com/api/docs/pricing?latest-pricing=ultrafast
- OpenAI, Introducing GPT-6.1 Sol: https://openai.com/index/introducing-gpt-6-1-sol/
- OpenAI release notes, October 8, 2026: https://openai.com/products/release-notes/
