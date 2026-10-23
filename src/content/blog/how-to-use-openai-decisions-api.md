---
title: "How to Use the OpenAI Decisions API Step by Step"
description: "Step-by-step guide to the OpenAI Decisions API with GPT-6 Luna. Learn predicate, choice, and score questions for fast routing and classification."
pubDate: 2026-10-23T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

Applications make dozens of small decisions every minute: route a support ticket, flag damaged product photos, or score urgency. Full language model responses add latency and cost for these bounded questions.

The OpenAI Decisions API solves this. Made generally available on October 22, 2026, it uses GPT-6 Luna to return typed answers roughly 10 times faster than the Responses API. You pay only for input tokens at $0.10 per million, with no output charges. Cached input drops to $0.01 per million.

This guide shows how to call the API, choose the right question type, and integrate the results into your application logic.

## Prerequisites

You need an OpenAI API key with access to GPT-6 Luna. Install the latest OpenAI Python SDK (`pip install --upgrade openai`) or use the REST endpoint directly. Set the key as the `OPENAI_API_KEY` environment variable. Test prompts first in the Decisions Playground at platform.openai.com/decisions.

For background on other AI developer tools, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Developer working on laptop with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Understand the three answer types

Every request includes a model (`gpt-6-luna`), shared input evidence, and one or more questions. Each question has a type, a unique name, and instructions. The response returns an answers array keyed by name.

- **Predicate**: Returns a probability from 0 to 1 that a condition is true. Use it for yes/no checks such as visible damage or duplicate charges.
- **Choice**: Selects one value from a fixed list you supply. Use it for routing (billing, technical, shipping) or next actions. The response includes the chosen value plus probabilities and confidence.
- **Score**: Rates input against ordered levels you define. It returns the probability-weighted average of the level indices, which can fall between levels.

You can ask up to 400 questions in one request. Independent questions share the same input; dependent questions need separate calls.

## Make your first request

Start with a simple choice question that routes a support ticket. The following Python example uses the official SDK:

```python
from openai import OpenAI

client = OpenAI()

result = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for my order. Please refund the extra payment.",
    questions=[
        {
            "type": "choice",
            "name": "department",
            "instructions": "Which department should handle this complaint?",
            "choices": [
                {"value": "billing", "description": "Payments, invoices, and refunds."},
                {"value": "technical", "description": "Problems using the product."},
                {"value": "shipping", "description": "Delivery and tracking issues."},
                {"value": "other", "description": "Requests outside these categories."}
            ]
        }
    ]
)

print(result.answers[0].choice)
```

The `other` option prevents forced misclassification. Always include a fallback category.

For a predicate check on an image, pass a base64 data URL or a public HTTP(S) URL inside the input content parts. The API supports text, images, and native JSON evidence.

![Close-up of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Use JSON input and multiple questions

Pass structured data with an `input_json` content part instead of converting objects to strings. Combine a ticket body with order records in one request:

```python
result = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Evaluate the ticket using the order evidence."},
                {
                    "type": "input_json",
                    "data": {
                        "ticket": {"body": "Please refund the duplicate charge."},
                        "order": {"charges": [49, 49]}
                    }
                }
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "duplicate_charge",
            "instructions": "Does the ticket describe a duplicate charge supported by the order?"
        },
        {
            "type": "score",
            "name": "urgency",
            "instructions": "Rate urgency of this ticket.",
            "levels": [
                {"label": "low", "description": "Can wait several days."},
                {"label": "medium", "description": "Needs attention today."},
                {"label": "high", "description": "Customer is blocked now."}
            ]
        }
    ]
)
```

Read `result.answers` by name. Use the probability or score in your application to set thresholds (for example, auto-refund only above 0.85 confidence).

## Integrate with live voice

The Decisions API integrates natively with GPT-Live. Configure a trigger so Live calls Decisions directly on transcript updates. This skips a round-trip through your server and keeps latency under a few hundred milliseconds.

Add a decisions block to `session.triggers` in an existing GPT-Live session. Live emits a `decision.event`; your application reads the answer and acts (for example, animate an avatar expression or route a support call).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Start with one high-frequency decision in your app. Measure latency and accuracy against real examples before expanding. Use the Playground to refine instructions and choices.

Enable prompt caching when the same context repeats across requests. Cache hits cost one-tenth the normal rate. Monitor usage in the organization dashboard.

Set application-level thresholds on confidence or probability. Route low-confidence results to a human reviewer. Include an `other` choice so the model is never forced into a bad category.

Test image inputs with both base64 and public URLs. Files and audio are not supported as direct input. Conversation history is supported when you pass ordered messages and tool calls.

## Conclusion

The Decisions API gives developers a fast, low-cost way to turn text, images, and JSON into actionable answers. Predicate, choice, and score types cover the majority of classification, routing, and prioritization tasks that previously required full model generations.

Call `POST /v1/decisions` with GPT-6 Luna, define clear questions, and use the typed results in your application logic. Start with the official developer guide and the Decisions Playground, then measure results on your own data.

**Sources**

- OpenAI: Build more responsive apps with the Decisions API (October 22, 2026)
- OpenAI API Docs: Decisions guide and create decision reference
- OpenAI: Introducing the Decisions API (YouTube, October 6, 2026)
