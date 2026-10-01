---
title: "How to Run GPT-6 Astra Ultrafast on Responses API"
description: "Call GPT-6 Astra Ultrafast on the Responses API: set service_tier, add the required header, use WebSockets, and respect TPM caps."
pubDate: 2026-10-01T12:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "developer"]
noindex: false
---

OpenAI’s fastest API service tier is **Ultrafast**. On GPT-6 Astra it is open to all API users, with default token-per-minute caps that stay well below Standard traffic. DevDay 2026 also listed Ultrafast for Astra in the API and in ChatGPT Work and Codex on Pro 500 and Enterprise plans.

This is not Fast mode. Fast mode uses `service_tier: "fast"` (or the older `priority` alias). Ultrafast uses `service_tier: "ultrafast"` on `gpt-6-astra`. OpenAI Help also requires the `OpenAI-Service-Tier: ultrafast` request header during the Ultrafast alpha.

Use this guide to send a first HTTP call, keep a WebSocket open for tool loops, and stay inside the published TPM table.



![Circuit board close-up under studio lighting](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## What Ultrafast is, and what it is not

The official API guide calls Ultrafast the fastest service tier, with up to **8×** faster speeds than Standard mode. DevDay copy matches that figure for Codex and lists up to **6×** in the API. GPT-6.1 Sol Ultrafast is listed as coming soon, not as a live model ID you can send today.

An earlier preview post from 13 August 2026 described Ultrafast for **GPT-5.6 Sol**, powered with Cerebras, at up to 14× Standard and up to 750 output tokens per second. That preview is still gated. Current docs point preview Sol access at the same signup page and tell organizations with an account team to request it.

Do not mix tiers in one header. Help states that during the Ultrafast alpha, `OpenAI-Service-Tier` accepts only `ultrafast`. Sending `default`, `fast`, or `flex` returns HTTP 400. Omit the header when you are not on Ultrafast.

If you already call GPT-6.1 Sol on Responses, keep that path for cost-sensitive work. Pair this article with [How to Use GPT-6.1 Sol on the OpenAI Responses API](/blog/gpt-6-1-sol-responses-api/) when you need the cheaper Sol ID instead of Astra speed.

## Check access and rate limits first

Ultrafast for GPT-6 Astra is available to all API users at the default Ultrafast TPM table:

| API usage tier | Tokens per minute (TPM) |
| --- | --- |
| Tiers 1–3 | 500,000 |
| Tier 4 | 1,000,000 |
| Tier 5 | 5,000,000 |

Those numbers come from the Ultrafast guide. They are lower than many Standard Astra limits. Treat them as a hard cap until your account team raises them.

1. Confirm you have an API key with Responses access.
2. Confirm the model string is `gpt-6-astra`, not a Sol snapshot.
3. Plan to send `service_tier: "ultrafast"` on every create call.
4. Add `OpenAI-Service-Tier: ultrafast` on HTTP clients that do not set it for you.
5. Open the Usage dashboard later and group by Service Tier so you can see Ultrafast spend apart from Fast or Standard.

ChatGPT Work and Codex eligibility is separate from the API. DevDay lists GPT-6 Astra Ultrafast in the API and in ChatGPT Work and Codex on **Pro 500** and **Enterprise**. Help points plan details to the ChatGPT Work and Codex article. Do not assume a Plus API key unlocks the Work picker.

## Send a first HTTP request

The SDK examples in the official guide set only `model` and `service_tier`. For raw HTTP, add the Help Center header as well.

```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Service-Tier: ultrafast" \
  -d '{
    "model": "gpt-6-astra",
    "service_tier": "ultrafast",
    "input": "Explain why the sky is blue in one sentence."
  }'
```

In Python:

```python
from openai import OpenAI

client = OpenAI()
response = client.responses.create(
    model="gpt-6-astra",
    input="Explain why the sky is blue in one sentence.",
    service_tier="ultrafast",
)
print(response.output_text)
```

In Node:

```javascript
import OpenAI from "openai";

const client = new OpenAI();
const response = await client.responses.create({
  model: "gpt-6-astra",
  service_tier: "ultrafast",
  input: "Explain why the sky is blue in one sentence.",
});
console.log(response.output_text);
```

The HTTP sample in the docs waits for the full response. Turn on streaming if you need tokens on screen as they arrive. Check `service_tier` on the response object so you know the request actually landed on Ultrafast.



![Developer workstation with multiple monitors and code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Keep a WebSocket open for tool loops

OpenAI strongly recommends WebSockets for agentic apps that fire many tool calls in a row. A new HTTP handshake on every tool result can erase the latency you paid for.

The documented pattern:

1. Open one Responses WebSocket (`ResponsesWS` in the Node SDK, or `client.responses.connect()` in Python).
2. Send `response.create` with `model: "gpt-6-astra"` and `service_tier: "ultrafast"`.
3. Stream `response.output_text.delta` events to the user.
4. On `response.completed`, store `response.id`.
5. On the next user turn or tool result, send a new `response.create` on the **same** socket and pass `previous_response_id`.
6. Close the socket when the session ends.

Install notes from the same page: `npm install openai ws` for Node, and `pip install --upgrade "openai[realtime]"` for Python. Set `OPENAI_API_KEY` in the environment before you connect.

Reuse that connection for later turns and tool results. The WebSocket guide section “Continue with incremental inputs” is the follow-on reference if you need to attach tool output without opening a new socket.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Fls_onRviPM"
    title="Live from OpenAI DevDay 2026: Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to stay on Fast or Standard

Use Ultrafast when interactive latency is the product: live coding help, short agent turns, or a UI that cannot wait on Standard Astra. Pay the premium only on those routes.

Stay on **Fast** (`service_tier: "fast"` or `"priority"`) for regular user-facing traffic that needs more consistent latency than Standard but does not need the Ultrafast tier. Fast still supports project-level defaults under Settings → Project → General. Ultrafast does not use that project toggle in the current docs.

Stay on **Standard** for batch jobs, evaluations, and traffic that ramps in a spike. Help’s Fast-mode advice applies here too: do not dump a large offline job onto a speed tier. Fast mode can downgrade to Standard if performance is already degraded and your ramp is too steep. Ultrafast has its own lower TPM table; a batch job will hit that wall first.

Scale Tier remains separate. Fast-mode FAQ text says Fast requests do not count against purchased Scale Tier TPM bundles, and Scale spillover does not move to Fast on its own. Do not assume Ultrafast inherits Scale capacity.

## Practical tips

- Price Ultrafast from the official pricing table filtered to the Ultrafast line, not from Standard Astra rates.
- Cache a stable prefix when the prompt repeats. Fast-mode FAQ says cached input still gets the Standard-style discount on Fast; confirm the Ultrafast line item in the pricing table for your model before you depend on a percentage.
- Group Usage by Service Tier and by Line Item. Requests marked `priority` or `fast` still show as priority on older dashboard rows.
- Do not send `OpenAI-Service-Tier` on Fast or Standard calls during the Ultrafast alpha.
- Keep tool-heavy agents on WebSockets. HTTP is fine for one-shot answers.
- If GPT-6.1 Sol Ultrafast appears in your model list later, treat it as a new ID. Do not rename `gpt-6-astra` in place.

## Conclusion

Ultrafast on GPT-6 Astra is a Responses API setting, not a new model family. Set `model` to `gpt-6-astra`, set `service_tier` to `ultrafast`, add `OpenAI-Service-Tier: ultrafast` on raw HTTP, and keep one WebSocket for tool turns. Watch the default TPM table, leave batch work on Standard, and use Sol when cost matters more than Astra speed.

## Sources

- [Ultrafast mode](https://developers.openai.com/api/docs/guides/ultrafast-mode) — OpenAI API docs
- [Fast mode](https://developers.openai.com/api/docs/guides/fast-mode) — OpenAI API docs
- [Fast mode FAQ](https://help.openai.com/en/articles/11647665-fast-mode-faq) — OpenAI Help Center
- [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) — OpenAI, 29 September 2026
- [Previewing Ultrafast mode](https://openai.com/index/previewing-ultrafast/) — OpenAI, 13 August 2026
- [Live from OpenAI DevDay 2026: Keynote](https://www.youtube.com/watch?v=Fls_onRviPM) — OpenAI on YouTube
