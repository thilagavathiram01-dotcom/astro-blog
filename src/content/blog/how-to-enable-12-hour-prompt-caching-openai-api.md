---
title: "How to Enable 12-Hour Prompt Caching in the OpenAI API"
description: "Step-by-step guide to set 12-hour TTL prompt caching in OpenAI Responses API for GPT-5.6+ models and cut costs on persistent agents."
pubDate: 2026-10-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

OpenAI added a 12-hour prompt caching option to the Responses API on October 20, 2026. Persistent agents that reuse the same instructions and tools across a workday can now keep the shared prefix cached longer and pay the discounted cached-input rate even when requests are hours apart.

The default remains 30 minutes. The longer lifetime costs more to write but the same low rate to read. This guide shows exactly how to enable it, when it saves money, and how to mix lifetimes in one request.

![Developer working on code at night](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Why the 12-hour option matters

Many production agents sit idle between user events, scheduled jobs, or tool callbacks. With the old 30-minute window those gaps forced a full reprocess of the shared prefix. The new setting targets exactly that pattern.

OpenAI Developers noted that products like dots reuse context throughout the day. The same applies to coding agents, customer-support bots, and internal tools that load the same system instructions and tool schemas on every turn.

## Requirements and pricing

The 12-hour TTL works only in the Responses API on GPT-5.6 and later models. Older models continue to use the separate `prompt_cache_retention` parameter.

Cache-write rates are total rates, not surcharges:

| Lifetime | Minimum retention | Write rate | Read rate |
|----------|-------------------|------------|-----------|
| 30m (default) | 30 minutes | 1.25× uncached input | 0.1× (0.05× on GPT-6.1 Sol) |
| 12h | 12 hours | 2.5× uncached input | Same as 30m |

Twelve hours is a minimum lifetime, not a hard deletion deadline. OpenAI may keep entries longer. Reads do not fully reset the 12-hour clock.

A cache hit is never guaranteed. The prefix must still match exactly and meet the 1,024-token minimum for GPT-5.6+ models.

## How to enable 12-hour caching

Set `prompt_cache_options.ttl` to `"12h"` on the request, or set the TTL on an individual explicit cache breakpoint. Omitting the field keeps the 30-minute default. Unsupported values return a 400 error.

### Request-level TTL

```json
{
  "model": "gpt-6.1-sol",
  "prompt_cache_options": { "ttl": "12h" },
  "input": [
    {
      "role": "developer",
      "content": "Stable instructions and tool descriptions used all day..."
    },
    {
      "role": "user",
      "content": "Current task for this turn..."
    }
  ]
}
```

### Mixing 12-hour and 30-minute breakpoints

Place the long-lived material under an explicit breakpoint with `ttl: "12h"` and keep session-specific content on the shorter lifetime.

```json
{
  "model": "gpt-6.1-sol",
  "prompt_cache_options": { "mode": "explicit", "ttl": "30m" },
  "input": [
    {
      "role": "developer",
      "content": [
        {
          "type": "input_text",
          "text": "Shared rules and reference material that changes at most daily",
          "prompt_cache_breakpoint": { "mode": "explicit", "ttl": "12h" }
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "Session context and recent files",
          "prompt_cache_breakpoint": { "mode": "explicit" }
        }
      ]
    }
  ]
}
```

Explicit mode gives control over what is written. Content after the last breakpoint is processed at the normal input rate without a cache-write charge.

![Abstract code on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## When the higher write rate pays off

The economics depend on reuse frequency. With a 0.1× read rate:

- One write + one full read costs 1.35× the ordinary input price versus 2× with no caching.
- Across ten requests the cost falls to roughly 2.15× versus 10× without caching.

For a 100,000-token shared prefix reused once per hour, the 12-hour write plus eleven cheap reads is usually far cheaper than rewriting every 30 minutes. Use the Prompt Caching Dashboard and the `cached_tokens` field in the usage object to measure actual hit rates.

Monitor `cache_write_tokens_details.ttl_12h_tokens` versus `ttl_30m_tokens` to confirm which lifetime is being billed.

## Best practices

1. Keep the stable prefix (instructions, tools, long reference material) at the front.
2. Put variable session content after the last long-lived breakpoint.
3. Use `prompt_cache_key` when you need separate caches for different users or tenants.
4. Check diagnostics if hit rates are lower than expected.
5. Start with the default 30-minute lifetime and switch only the prefixes that actually span longer gaps.

If you already use the Decisions API for fast structured decisions, the same prefix-stability rules apply. See our guide on [How to Use OpenAI Decisions API for Fast App Decisions](/blog/how-to-use-openai-decisions-api-for-fast-app-decisions/).

## Watch: Build Hour on Prompt Caching

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tECAkJAI_Vk"
    title="Build Hour: Prompt Caching"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The February 2026 Build Hour walks through cache mechanics, prefix matching, and real-world cost examples. The 12-hour option arrived later, but the core design principles remain the same.

## Conclusion

The 12-hour prompt caching option is a practical upgrade for any agent that reuses a large shared prefix across hours rather than minutes. Set the TTL, measure the hit rate, and keep the stable material at the front of the prompt. Most teams will see lower latency and a clear reduction in input token spend once reuse exceeds a few turns per day.

## Sources

- OpenAI Prompt Caching guide: https://developers.openai.com/api/docs/guides/prompt-caching
- OpenAI API changelog entry, 20 October 2026
- OpenAI Developers announcement on X, 20 October 2026
