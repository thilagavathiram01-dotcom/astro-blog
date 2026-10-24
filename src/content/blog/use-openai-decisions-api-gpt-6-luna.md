---
title: "How to Use OpenAI Decisions API with GPT-6 Luna"
description: "Step-by-step guide to the OpenAI Decisions API with GPT-6 Luna for fast classification, routing, and scoring at $0.10 per million input tokens."
pubDate: 2026-10-24T12:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer", "ai"]
noindex: false
---

Applications and agents constantly make small judgments: route a support ticket, check for visible damage in a photo, or score the severity of an issue. OpenAI’s Decisions API, made generally available on October 22, 2026, focuses GPT-6 Luna on exactly these bounded questions. It returns probabilities, choices, or scores up to 10x faster than the same model through the Responses API, at a flat $0.10 per million input tokens with no output charges.

This guide shows how to set up your first request, use the three answer types, and put the results to work in real applications. You only need an OpenAI API key and a recent SDK.

![Developer typing code on a laptop](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## What the Decisions API does

A request has three parts: the model (`gpt-6-luna` is currently the only supported option), shared input (text, images, or native JSON), and one or more questions. The endpoint is `POST /v1/decisions`. The response returns an `answers` array that matches your questions by name.

Three question types cover most decision needs:

- **Predicate** — returns a probability from 0 to 1 that a condition is true (example: “Does this product photo show visible damage?”).
- **Choice** — picks one option from a fixed list you supply and includes probabilities plus a confidence score (example: route a ticket to billing, technical, or shipping).
- **Score** — rates an input against ordered levels and returns a probability-weighted average that can fall between levels (example: severity on a 0–2 scale).

Use Decisions when you need one of these typed results. Switch to Structured Outputs or function calling on the Responses API when you need free-form JSON or tool arguments.

## Prerequisites

You need an OpenAI account with API access and an API key stored in the `OPENAI_API_KEY` environment variable. Install or upgrade the official SDK:

```bash
pip install --upgrade "openai>=3.26.0"
```

The same pattern works in the JavaScript SDK (version 7.30.0 or later). You can also experiment in the Decisions Playground before writing code.

## Step 1: Make a simple choice request

Start with a support-ticket routing example. The input is the customer message; the question defines the departments.

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for my order and need a refund.",
    questions=[
        {
            "type": "choice",
            "name": "department",
            "instructions": "Which department should handle this complaint?",
            "choices": [
                {"value": "billing", "description": "Payments, invoices, and refunds."},
                {"value": "technical", "description": "Problems using the product."},
                {"value": "shipping", "description": "Delivery and tracking."},
                {"value": "other", "description": "Requests outside these categories."}
            ]
        }
    ]
)

answer = decision.answers[0]
if answer.type == "choice":
    print(f"Route to: {answer.choice} (confidence: {answer.confidence})")
```

The API returns the selected value along with per-option probabilities. Set an application-level confidence threshold (for example 0.7) before you act on the result.

## Step 2: Check an image with a predicate

Predicate questions work well for visual checks. Pass an image as a base64 data URL or a public HTTPS URL together with text instructions.

```python
import base64

with open("product.png", "rb") as f:
    image_b64 = base64.b64encode(f.read()).decode()

decision = client.decisions.create(
    model="gpt-6-luna",
    input=[{
        "role": "user",
        "content": [
            {"type": "input_text", "text": "Inspect the product in this photo."},
            {"type": "input_image", "image_url": f"data:image/png;base64,{image_b64}"}
        ]
    }],
    questions=[{
        "type": "predicate",
        "name": "visible_damage",
        "instructions": "Does the product have visible damage such as a crack, tear, or dent? Ignore shadows and packaging damage."
    }]
)

prob = decision.answers[0].probability
print(f"Damage probability: {prob:.2f}")
```

A probability above your chosen threshold triggers the next step (flag for review, reject the upload, or ask a human).

![Person coding at dual monitors](https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80)

## Step 3: Score severity and combine questions

Score questions let you map ordered levels. You can also ask multiple questions in one request (up to 400). Shared input is evaluated once, which keeps latency and cost low.

```python
decision = client.decisions.create(
    model="gpt-6-luna",
    input="The app crashes when I export a large project.",
    questions=[
        {
            "type": "choice",
            "name": "category",
            "instructions": "Classify the issue.",
            "choices": [
                {"value": "bug"},
                {"value": "feature_request"},
                {"value": "how_to"}
            ]
        },
        {
            "type": "score",
            "name": "severity",
            "instructions": "Rate severity.",
            "levels": [
                {"label": "cosmetic", "description": "Visual only, no functional impact."},
                {"label": "workaround", "description": "Blocked but a workaround exists."},
                {"label": "blocked", "description": "Cannot complete the task."}
            ]
        }
    ]
)
```

Read `decision.answers` by name to route the ticket and set priority in one round trip.

## Pricing, caching, and performance

Decisions API costs $0.10 per million input tokens. Cached input (when you reuse the same context across requests) costs $0.01 per million. There are no separate output-token charges. Regional processing is available in the US and EU; Zero Data Retention is available for eligible customers.

OpenAI reports up to 10x lower latency versus GPT-6 Luna on the Responses API for the same decision tasks. Early customers cite sub-300 ms p95 times and large cost reductions for high-volume classification and routing.

## Tips for production use

- Give every question a unique `name` so you can match answers reliably.
- Test edge cases in the Playground before coding thresholds.
- Use prompt caching for shared system context or repeated evidence.
- Handle `refusal` answers; the model can refuse individual questions.
- Start with a single recurring decision in your app, measure latency and accuracy, then expand.

If you already run OpenAI models inside Google Cloud Model Garden, the same GPT-6 Luna endpoint is available once preview access is granted. See our guide on [accessing OpenAI models in Google Cloud Model Garden](/blog/access-openai-models-google-cloud-model-garden/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API turns GPT-6 Luna into a fast, low-cost decision engine for the many small judgments that power applications and agents. Define the question, supply the evidence, and act on the typed result. Start with one high-volume decision in your codebase, measure the improvement in latency and cost, and expand from there.

## Sources

- OpenAI, Build more responsive apps with the Decisions API, October 22, 2026: https://openai.com/index/decisions-api/
- OpenAI API guide, Decisions: https://developers.openai.com/api/docs/guides/decisions
- OpenAI, Introducing the Decisions API (YouTube): https://www.youtube.com/watch?v=FB6oCmrIj-Y
