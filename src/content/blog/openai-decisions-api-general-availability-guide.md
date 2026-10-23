---
title: "OpenAI Decisions API GA: Caching, JSON & 400 Questions"
description: "Use the OpenAI Decisions API after general availability: prompt caching, native JSON input, up to 400 questions, images in instructions, and GPT-Live integration."
pubDate: 2026-10-23T09:00:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "ai-tools", "developer"]
noindex: false
---

OpenAI made the Decisions API generally available on 22 October 2026. The endpoint still runs only on `gpt-6-luna` and returns typed answers up to 10x faster than the Responses API for bounded questions. New capabilities since the public beta include prompt caching, native JSON input, images inside question instructions, hosted image URLs, and up to 400 questions per request.

This guide shows how to use the updated endpoint for classification, routing, and scoring. It builds on the earlier beta overview in our [OpenAI Decisions API with GPT-6 Luna](/blog/openai-decisions-api-gpt-6-luna/) post.

## What’s new in general availability

The core request shape stays the same: `POST /v1/decisions` with `model`, `input`, and `questions`. The model field remains `gpt-6-luna`. Answers still come back as predicates (probability 0–1), choices (one of your values plus probabilities and confidence), or scores (probability-weighted average of ordered level indices).

Key additions from the official developer guide:

- Prompt caching reuses a matching prefix of shared `input` and applies discounted rates.
- Native JSON input via an `input_json` content part lets you pass structured data without stringifying it first.
- Images can appear in individual question instructions so each question compares against shared evidence.
- Hosted HTTP or HTTPS image URLs work alongside base64 data URLs.
- Up to 400 questions per request (doubled from the beta limit of 200).
- Native GPT-Live integration so voice sessions can trigger decisions on transcript updates.
- Inference residency in the US and EU, plus Zero Data Retention for eligible customers.

Pricing stays input-only at $0.10 per million uncached tokens. Cached input drops to $0.01 per million. Output tokens are not charged. Regional premiums and long-context multipliers still apply.

![Developer workspace with code on a laptop screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Pass native JSON and hosted images

You can now include an `input_json` part in a user message. Keys inside the JSON are ordinary data; they do not create extra messages or fetch images. Pair it with text or image parts as needed.

Here is a request that evaluates a support ticket against an order record, following the official example:

```json
{
  "model": "gpt-6-luna",
  "input": [
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "Evaluate the ticket using the order evidence."
        },
        {
          "type": "input_json",
          "data": {
            "ticket": { "body": "Please refund the duplicate charge." },
            "order": { "charges": [49, 49] }
          }
        }
      ]
    }
  ],
  "questions": [
    {
      "type": "predicate",
      "name": "duplicate_charge",
      "instructions": "Does the ticket describe a duplicate charge supported by the order?"
    }
  ]
}
```

For images, supply a public HTTPS URL or a base64 data URL in an `input_image` part. Hosted URLs remove the need to encode large files on your server for every call. Keep `file_id` inputs out of this endpoint.

## Ask more questions and cache shared context

Place independent questions in one `questions` array so they share the same `input`. The limit is now 400. Dependent decisions still need separate requests: check damage first, then route the repair category based on the result.

Prompt caching is enabled by default with an implicit breakpoint at the end of shared `input`. The reusable prefix must be at least 1,024 tokens. Question content does not count toward that threshold and is not cached. Keep the prefix identical across requests to hit the cache. Check `usage.input_tokens_details.cached_tokens` in the response.

You can set an explicit breakpoint or supply a `prompt_cache_key` to partition reuse. Cache writes are billed; reads receive the lower rate.

## Images inside question instructions

Shared evidence stays in `input`. To give a specific question its own comparison image, set that question’s `instructions` to an array of `input_text` and `input_image` parts instead of a plain string. This works for all three question types.

Example structure for comparing a candidate image against a reference:

```json
{
  "model": "gpt-6-luna",
  "input": [
    {
      "role": "user",
      "content": [
        {"type": "input_text", "text": "Reference product photo."},
        {"type": "input_image", "image_url": "https://example.com/reference.jpg"}
      ]
    }
  ],
  "questions": [
    {
      "type": "predicate",
      "name": "matches_reference",
      "instructions": [
        {"type": "input_text", "text": "Does the candidate match the reference?"},
        {"type": "input_image", "image_url": "https://example.com/candidate.jpg"}
      ]
    }
  ]
}
```

Replace the example URLs with real public images or base64 data.

![Team reviewing code and decisions on multiple screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Connect to GPT-Live for voice agents

The Decisions API now integrates natively with GPT-Live. Configure a trigger so Live calls Decisions when an input or output transcript arrives. The application receives a `decision.event` and can update an avatar expression, route a call, or choose the next action without a full round trip.

Add a configuration like this under `session.triggers`:

```json
{
  "type": "decisions",
  "event_type": "session.input_transcript.delta",
  "decisions": {
    "questions": [{
      "type": "choice",
      "name": "reaction",
      "instructions": "Choose an appropriate reaction for the avatar based on the user's latest message.",
      "choices": [
        {"value": "neutral"},
        {"value": "happy"},
        {"value": "sad"},
        {"value": "concerned"}
      ]
    }]
  }
}
```

The official announcement includes a live demo of expression selection. Watch the original launch video for the end-to-end flow:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips and next steps

Start in the Decisions Playground at platform.openai.com/decisions with your own text, JSON, or images. Measure thresholds on labeled examples from your traffic. False positives and false negatives have different costs, so set cutoffs accordingly.

Log the question `name`, answer type, probability or confidence, and any refusal. Route refusals to a human queue instead of retrying. Keep API keys on your server. Do not place secrets in `input`.

For conversation history, pass ordered messages plus matching tool calls and outputs. The endpoint evaluates them as evidence and still returns only typed answers; your application executes the chosen action.

## Conclusion

General availability removes the beta uncertainty and adds the features most production routers need: cheaper repeated context, structured data, more questions per call, and tighter voice integration. The contract stays simple: supply evidence and a closed question, receive a probability, choice, or score you can act on immediately.

Begin with one high-volume decision that already uses shared context, enable caching, and expand from there. The earlier beta post covers the basic question types if you need a refresher.

## Sources

- OpenAI, Build more responsive apps with the Decisions API, 22 October 2026: https://openai.com/index/decisions-api/
- OpenAI API, Decisions guide: https://developers.openai.com/api/docs/guides/decisions
- OpenAI Developers announcement on X, 22 October 2026
- OpenAI, Introducing the Decisions API (YouTube): https://www.youtube.com/watch?v=FB6oCmrIj-Y
