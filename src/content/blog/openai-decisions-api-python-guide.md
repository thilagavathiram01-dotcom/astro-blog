---
title: "How to Use OpenAI Decisions API in Python"
description: "Step-by-step Python guide to the OpenAI Decisions API with GPT-6 Luna for fast predicate, choice, and score answers on text and images."
pubDate: 2026-10-24T18:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

Applications make dozens of small decisions every second: route a support ticket, flag a damaged product photo, or score urgency. Generative models excel at open-ended text, but those calls add latency and cost when you only need a typed answer.

OpenAI’s Decisions API, now generally available on GPT-6 Luna, returns probabilities, choices, or scores up to 10x faster than the Responses API and charges only for input tokens. This guide walks through a working Python example using the official endpoint and SDK patterns from OpenAI’s documentation.

## What the Decisions API Returns

A request has three parts: the model (currently only `gpt-6-luna`), shared `input` (text string, messages with text/images/JSON, or conversation history), and a list of `questions`. Each question has a type, instructions, and optional choices or score levels. The response is an `answers` array you can index by the unique `name` you assign.

Three question types cover most app needs:

- **predicate**: probability (0–1) that a condition is true, such as “visible damage present.”
- **choice**: one value from the list you supply, plus per-option probabilities and confidence.
- **score**: probability-weighted average of ordered level indices, useful for severity or priority.

You pay $0.10 per million input tokens; cached input is $0.01. There are no output token charges. Prompt caching, native JSON input, image URLs, and up to 400 questions per request are available.

![Laptop displaying code on a wooden desk](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Setup and First Request

Install the latest OpenAI Python SDK and set your API key:

```bash
pip install --upgrade openai
export OPENAI_API_KEY="sk-..."
```

The client reads the environment variable automatically. A minimal predicate example checks whether a support message needs a refund:

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="I cancelled my subscription on September 28 and still got charged $120 on October 1. Please reverse it.",
    questions=[
        {
            "type": "predicate",
            "name": "refund_needed",
            "instructions": "Does this customer appear to need a refund for a duplicate or post-cancellation charge?"
        }
    ],
)

print(decision.answers[0].probability)
```

The answer object includes `type`, `name`, and `probability`. Handle refusals by checking `type == "refusal"` before reading the value.

## Routing with a Choice Question

For ticket routing, supply explicit options and an “other” fallback:

```python
decision = client.decisions.create(
    model="gpt-6-luna",
    input="Order R-208 was charged twice. Please return the extra payment.",
    questions=[
        {
            "name": "route",
            "type": "choice",
            "instructions": "Select the team responsible. Choose other when no team fits.",
            "choices": [
                {"value": "billing", "description": "Charges, invoices, and refunds"},
                {"value": "account", "description": "Login, password, and profile issues"},
                {"value": "other", "description": "Issues outside these teams"}
            ]
        }
    ],
)

answer = decision.answers[0]
print(answer.choice, answer.confidence)
```

The response includes the selected `choice`, a `confidence` score, and probabilities for every option. Use the confidence value in your application to decide whether to auto-route or send the case to a human reviewer.

## Scoring Severity and Using Images

Score questions take ordered levels. Indices start at 0; the returned score is a weighted average and can fall between integers.

For product photos, pass an image as a base64 data URL or a public HTTPS URL alongside text instructions:

```python
import base64

with open("product.png", "rb") as f:
    b64 = base64.b64encode(f.read()).decode()

decision = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Check the product photo for visible damage."},
                {"type": "input_image", "image_url": f"data:image/png;base64,{b64}"}
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "has_damage",
            "instructions": "Does the product show a crack, tear, or dent? Ignore packaging and shadows."
        }
    ],
)
```

You can also place images inside individual question instructions when you need to compare the shared evidence against a reference photo. JSON evidence goes in an `input_json` content part; keys inside the JSON are ordinary data and do not create extra messages.

![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Tips for Production

Name every question so you can match answers reliably. Start with a small set of well-tested examples in the Decisions Playground before hard-coding them. Because there are no output charges, long shared context is cheap once cached.

Combine multiple questions in one request when they share the same evidence; the limit is 400. For voice agents, the native GPT-Live integration can trigger the same questions on transcript deltas without an extra round trip. See our guide on [How to Connect GPT-Live to OpenAI Decisions API](/blog/connect-gpt-live-openai-decisions-api-voice/).

Monitor usage through organization reporting. Zero Data Retention and regional processing (US and EU) are available for eligible customers. Always validate the returned type before acting on an answer.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API turns bounded questions about text, images, or JSON into fast, typed results your application can act on immediately. Define the question, supply the evidence, and read the probability, choice, or score. With GPT-6 Luna, prompt caching, and no output-token fees, the endpoint is practical for high-volume routing, classification, and prioritization.

Test your first questions in the Playground, then move the same payloads into Python with the official SDK. Official references live at developers.openai.com/api/docs/guides/decisions.

## Sources

- OpenAI, “Decisions,” developers.openai.com/api/docs/guides/decisions (accessed 24 October 2026)
- OpenAI, “Build more responsive apps with the Decisions API,” openai.com/index/decisions-api/ (22 October 2026)
- OpenAI API Reference, developers.openai.com/api/reference/resources/decisions/ (accessed 24 October 2026)
