---
title: "How to Use OpenAI Decisions API for Fast App Decisions"
description: "Learn how to integrate the OpenAI Decisions API with GPT-6 Luna for quick classification, routing, and scoring in your applications."
pubDate: 2026-10-23T12:00:00
heroImage: "https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

Applications make hundreds of small decisions every session. Should this support ticket go to billing or technical? Does this product photo show damage? Is the urgency high enough to escalate? Full text generation for each one adds latency and cost. The OpenAI Decisions API solves this by returning typed answers from GPT-6 Luna in a fraction of the time.

OpenAI made the Decisions API generally available on October 22, 2026. It runs only on `gpt-6-luna` and focuses the model on bounded questions. You get probabilities, choices, or scores instead of paragraphs. Input costs $0.10 per million tokens. There is no charge for output tokens.<grok type="render_inline_citation" citation_id="116" />

This guide shows you how to set it up, send your first request, and use the three answer types in a real workflow.

## What the Decisions API Does

You send evidence and one or more questions. The API returns structured answers your code can act on immediately. It supports text, images, and native JSON. Response times are about 10 times faster than the same model through the Responses API for these tasks.<grok type="render_inline_citation" citation_id="111" />

Three question types exist:

- **Predicate**: Returns a probability (0 to 1) that a condition is true.
- **Choice**: Selects one option from a list you provide, with confidence.
- **Score**: Rates the input against ordered levels and returns a weighted average.

You can ask up to 400 questions in one request. Shared context can be cached for lower costs on repeated calls.

![Developer working on code with laptop and coffee](https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=800&q=80)

## Set Up Your Environment

Create an OpenAI API key at platform.openai.com if you do not have one. Enable billing on the project. Install the latest OpenAI Python SDK:

```bash
pip install --upgrade openai
```

Set the key as an environment variable:

```bash
export OPENAI_API_KEY="your-key-here"
```

The client reads it automatically. Minimum SDK versions that support Decisions include Python 3.26.0 and later.<grok type="render_inline_citation" citation_id="112" />

## Send Your First Decision Request

Start with a simple predicate. This example checks whether a customer message indicates a refund is needed.

```python
from openai import OpenAI

client = OpenAI()

result = client.decisions.create(
    model="gpt-6-luna",
    input="I cancelled my subscription on September 28 and still got charged $120 on October 1. Please reverse it.",
    questions=[
        {
            "type": "predicate",
            "name": "refund_needed",
            "instructions": "Does this customer appear to need a refund based on the message?"
        }
    ],
)

print(result.answers[0].probability)
```

The response includes the probability and token usage. Use a threshold in your code, such as routing to a human if the value exceeds 0.8.

For routing, switch to a choice question. Provide the allowed values and short descriptions so the model understands the options.

```python
result = client.decisions.create(
    model="gpt-6-luna",
    input="My order arrived with three broken keys on the keyboard. Can you replace it?",
    questions=[
        {
            "type": "choice",
            "name": "queue",
            "instructions": "Choose the best team for this request.",
            "choices": [
                {"value": "returns", "description": "Damaged or incorrect items"},
                {"value": "billing", "description": "Charges and invoices"},
                {"value": "other", "description": "Everything else"}
            ]
        }
    ],
)

print(result.answers[0].choice)
```

## Add Images and JSON Evidence

Pass images as base64 data URLs or public HTTPS URLs. Combine them with text in a user message. For structured data, use an `input_json` part instead of stringifying the object.

```python
result = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Check the product photo for damage."},
                {"type": "input_image", "image_url": "https://example.com/product.jpg"},
                {
                    "type": "input_json",
                    "data": {"order_id": "R-208", "charges": [49, 49]}
                }
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "visible_damage",
            "instructions": "Does the photo show a crack, tear, or dent? Ignore packaging."
        }
    ],
)
```

This pattern works well for moderation, quality checks, and order validation. Keep the evidence focused. Extra irrelevant context can reduce accuracy.<grok type="render_inline_citation" citation_id="118" />

![Laptop screen with code editor open](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Production

Set confidence thresholds in your application logic rather than relying on the model alone. Log the answers and usage for monitoring. Cache repeated prefixes with prompt caching when the same instructions appear across requests. The cached input rate is lower.

For voice agents, pair Decisions with GPT-Live. The native integration lets Live call Decisions directly during a conversation without an extra round trip from your server. See the official guide for the session configuration.<grok type="render_inline_citation" citation_id="108" />

Test edge cases in the Decisions Playground before shipping. Start with one recurring decision in your app, measure the latency and accuracy against your current approach, then expand.

If you already use GPT-6 models for other work, the Decisions API complements them. Full reasoning stays on the Responses API while quick filters and routers move here. For more on GPT-6 Luna in daily workflows, see our earlier post on [ChatGPT GPT-6 Sol and Luna setup](/blog/chatgpt-gpt-6-sol-luna-work-setup/).

## Watch the Official Introduction

OpenAI published a short video showing the Decisions API in action with text classification, image checks, and a voice example.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API turns common classification and routing tasks into fast, low-cost calls. Define clear questions, supply focused evidence, and let your application act on the typed results. It is available now for any project with an OpenAI API key and billing enabled. Start with one high-volume decision in your codebase and expand from there.

Sources: OpenAI Decisions API documentation, OpenAI announcement on general availability, and official developer guides.
