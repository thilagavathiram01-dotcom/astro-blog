---
title: "How to Use OpenAI Decisions API for Fast App Decisions"
description: "Step-by-step guide to OpenAI's Decisions API with GPT-6 Luna. Learn predicates, choices, scores, pricing, and code for responsive apps."
pubDate: 2026-10-23T22:30:00
heroImage: "https://images.unsplash.com/photo-1637778352878-f0b46d574a04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "chatgpt", "developer"]
noindex: false
---

Apps and agents make dozens of small decisions every second: route a ticket, flag damage in a photo, or pick the next tool call. Full text generation is slow and expensive for these bounded questions. OpenAI's Decisions API solves this by returning typed answers from GPT-6 Luna in a fraction of the time.

The endpoint went generally available on October 22, 2026. It accepts text, images, and JSON, supports up to 400 questions per request, and charges only for input tokens. This guide shows you how to use it correctly.

## What the Decisions API does

The Decisions API lives at `POST /v1/decisions` and accepts only the `gpt-6-luna` model. You supply shared evidence (the input) and one or more questions with a fixed answer space. The model returns one typed answer per question: a probability, a choice from your list, or a score against a rubric.

OpenAI states it runs up to 10x faster than asking the same model through the Responses API for these constrained tasks. Early users report p95 latencies under 300 ms in production workloads. You pay $0.10 per million uncached input tokens and $0.01 for cached input. There is no charge for output tokens.

![Developer working with code on a laptop screen](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80)

This makes it practical for high-volume classification, routing, and prioritization that would otherwise require a heavier model or a custom fine-tune.

## The three answer types

Every question is one of three types. Choose the type that matches how your application will use the result.

**Predicate** estimates the probability that a condition is true. Example: “Does this product photo show visible damage such as a crack, tear, or dent?” The response includes a `probability` between 0 and 1.

**Choice** selects one value from a list you supply. Example: “Which queue should receive this ticket: billing, technical, shipping, or other?” The response includes the selected `choice`, per-option probabilities, and a `confidence` score.

**Score** rates the input against ordered levels you define. Example: severity levels labeled Cosmetic, Workaround available, and Fully blocked. The response includes a probability-weighted `score` plus the full probability distribution.

You can mix types in a single request. Up to 400 questions are allowed, double the public-beta limit.

## Make your first request

You need an OpenAI API key with access to GPT-6 Luna. The official Python SDK (version 3.26.0 or later) and JavaScript SDK (version 7.30.0 or later) support the endpoint. You can also test in the Decisions Playground at platform.openai.com/decisions.

Here is a minimal Python example that classifies a support message and checks whether it contains enough detail to act on.

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for order #48291. Please refund the duplicate.",
    questions=[
        {
            "type": "choice",
            "name": "queue",
            "instructions": "Which support queue should handle this message?",
            "choices": [
                {"value": "billing"},
                {"value": "technical"},
                {"value": "shipping"},
                {"value": "other"}
            ]
        },
        {
            "type": "predicate",
            "name": "enough_detail",
            "instructions": "Does the message contain enough information to process a refund without further questions?"
        }
    ]
)

for answer in decision.answers:
    print(answer)
```

The response returns answers in the same order as your questions. Check the `type` field before reading the result. A question can also return a refusal if the model declines to answer.

## Handle images and structured JSON

Text works as a simple string. For images or JSON you pass an ordered array of messages.

This example checks a product photo for damage while also scoring severity.

```python
import base64

with open("product.png", "rb") as f:
    image_b64 = base64.b64encode(f.read()).decode()

decision = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {
                    "type": "input_text",
                    "text": "Inspect this product photo."
                },
                {
                    "type": "input_image",
                    "image_url": f"data:image/png;base64,{image_b64}"
                }
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "visible_damage",
            "instructions": "Does the product show a crack, tear, or dent? Ignore shadows and packaging."
        },
        {
            "type": "score",
            "name": "severity",
            "instructions": "Rate the severity of any damage.",
            "levels": [
                {"label": "None", "description": "No visible damage."},
                {"label": "Minor", "description": "Cosmetic only."},
                {"label": "Major", "description": "Function is affected."}
            ]
        }
    ]
)
```

Public HTTP image URLs are also accepted. Native JSON goes in an `input_json` content part so the model can evaluate structured records such as an order object alongside a ticket.

![Laptop screen showing source code in an editor](https://images.unsplash.com/photo-1763568258492-9569a0af2127?auto=format&fit=crop&w=800&q=80)

## Pricing, caching, and latency

Uncached input costs $0.10 per million tokens. Cached input drops to $0.01. Cache writes follow standard GPT-6 Luna rates for 30-minute and 12-hour TTLs. Output tokens are free.

Prompt caching activates when requests share a prefix of at least 1,024 tokens. Place stable instructions and few-shot examples early, then mark an explicit cache breakpoint if needed. Regional processing is available in the US and EU. Zero Data Retention and HIPAA options exist for eligible customers.

In practice, many teams see 100–180 ms median latency on simple text decisions. Image inputs are slower but still far faster than a full Responses API call.

## Production tips

Start with one high-volume decision in your existing workflow. Define the question and allowed answers tightly. Test edge cases in the Playground before writing code.

Set application-level thresholds on probability and confidence. A 0.85 probability may be high enough to auto-route; anything lower can fall back to a human or a heavier model. Handle refusals and API errors separately so a single failed decision does not block the rest of the request.

You can ask multiple independent questions in one call to amortize latency and token cost. For voice agents, the native GPT-Live integration lets you trigger decisions on transcript deltas without an extra round trip. See the official voice guide for the session configuration.

If you already use GPT-6 models for other tasks, compare the Decisions endpoint against a structured-output Responses call on the same examples. The speed and cost difference is usually large for classification-style work. For broader context on the GPT-6 family, see our earlier guide on [choosing GPT-6 models for coding workflows](/blog/choose-gpt-6-models-coding-workflows/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API gives developers a fast, cheap, and typed way to turn text, images, and JSON into actions. By focusing GPT-6 Luna on bounded questions you avoid the latency and cost of full generation while keeping the model’s language and vision understanding.

Begin with a single recurring decision in your application. Measure latency and accuracy against your current approach, then expand to additional questions or image inputs once the pattern is solid. Official documentation and the Playground remain the best places to validate edge cases before production traffic.

## Sources

- OpenAI, “Build more responsive apps with the Decisions API,” October 22, 2026: https://openai.com/index/decisions-api/
- OpenAI API documentation, Decisions guide: https://developers.openai.com/api/docs/guides/decisions
- OpenAI API reference, Create a decision: https://developers.openai.com/api/reference/resources/decisions/
- OpenAI, Introducing the Decisions API (YouTube), October 2026: https://www.youtube.com/watch?v=FB6oCmrIj-Y
