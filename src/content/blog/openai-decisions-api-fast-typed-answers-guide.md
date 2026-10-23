---
title: "How to Use OpenAI Decisions API for Fast Answers"
description: "Learn how to use the OpenAI Decisions API with GPT-6 Luna for typed decisions up to 10x faster. Step-by-step guide with examples and tips."
pubDate: 2026-10-23T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

Applications and agents make dozens of small decisions every minute. Classify a support ticket. Route a request. Check if an image shows damage. Each call to a full language model adds latency and cost that piles up quickly.

OpenAI made the Decisions API generally available on October 22, 2026. It runs on GPT-6 Luna and returns typed answers—probabilities, choices, or scores—up to 10x faster than the same model through the Responses API. You pay only for input tokens at $0.10 per million, with no output charges.

This guide shows you how to set it up, choose the right question type, and put it into a real workflow.

## What the Decisions API does

The Decisions API evaluates shared input (text, images, or JSON) against one or more questions you define. It does not generate free-form text. Instead, it returns a structured answer you can act on immediately.

A request has three parts:

- **model**: Currently only `gpt-6-luna`.
- **input**: Shared evidence—plain text, messages, images, or native JSON.
- **questions**: Up to 400 named questions, each with a type, instructions, and any allowed choices or score levels.

The response contains an `answers` array. Name each question so you can match results easily.

Three answer types are supported:

| Type | Use it when | Returns |
| --- | --- | --- |
| predicate | You need the probability a condition is true | `probability` from 0 to 1 |
| choice | You need one option from a fixed set | `choice` plus probabilities and confidence |
| score | You need a rating against ordered levels | Probability-weighted score |

Use Decisions when your app needs one of these. For open-ended generation or custom JSON schemas, stick with the Responses API and Structured Outputs.

![Developer working on code at a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Get started in the Playground

1. Sign in at platform.openai.com.
2. Open the Decisions Playground.
3. Paste sample text or upload an image.
4. Add a question of type predicate, choice, or score.
5. Run it and inspect the typed result.

The Playground is the fastest way to test wording before you write code. Adjust instructions until the answers match your expected behavior on real examples.

## Make your first API call

Install the OpenAI SDK or use curl. Here is a minimal Python example that checks whether a product photo shows visible damage:

```python
from openai import OpenAI

client = OpenAI()

response = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Inspect this product photo."},
                {"type": "input_image", "image_url": {"url": "https://example.com/product.jpg"}}
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "visible_damage",
            "instructions": "Does the product show visible damage such as a crack, tear, or dent? Ignore packaging and shadows."
        }
    ]
)

print(response.answers[0].probability)
```

The API accepts publicly accessible image URLs or base64 data URLs. You can also pass native JSON with an `input_json` content part for structured records such as order details.

For choice questions, supply the allowed values:

```json
{
  "type": "choice",
  "name": "department",
  "instructions": "Route this ticket to the correct department.",
  "choices": [
    {"value": "billing"},
    {"value": "shipping"},
    {"value": "technical"},
    {"value": "other"}
  ]
}
```

Score questions take ordered levels. The returned score is the probability-weighted average of their indices, so it can fall between levels.

## Connect it to voice with GPT-Live

Decisions now integrates natively with GPT-Live. Your voice session can trigger decisions as transcripts arrive, without an extra round trip through your app.

Add a decisions trigger to your Live session configuration. When the model detects a relevant moment, it calls Decisions and emits a `decision.event`. Your application reads the typed answer and acts—change an avatar expression, route a call, or escalate.

OpenAI notes that early customers saw large latency drops. Speak reduced time to next action by over 90 percent in language-learning tests. Sierra runs decisions under 280 ms p95 in live conversations.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

- Name every question. Unnamed questions are harder to match in multi-question responses.
- Test on real examples first. The Playground and a small labeled set catch wording problems before they hit production.
- Use prompt caching when the same context repeats. Cached input costs $0.01 per million tokens.
- Start with one high-volume decision. Replace a slow Responses call that only needed a category or yes/no with Decisions and measure the difference.
- Handle refusals. A question can return a refusal while others in the same request still receive answers.
- Keep instructions specific. Clear boundaries (what to ignore, what counts as evidence) improve consistency.

Regional processing is available in the US and EU. Zero Data Retention is available for eligible customers. See OpenAI’s data controls guide for details.

![Analytics dashboard on a computer screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## When to stay with the Responses API

Decisions is specialized. Use the Responses API when you need:

- Free-form explanations or written output
- Custom JSON that follows your own schema
- Function calling with arguments the model invents
- Long reasoning chains that produce intermediate text

Many teams combine both. Decisions handles the fast routing and classification steps. Responses handles the heavier generation that follows.

If you already work with GPT-6 models, the [guide to GPT-6 Sol and Luna](/blog/chatgpt-gpt-6-sol-luna-work-setup/) covers related model choices and setup.

## Conclusion

The Decisions API gives applications a fast, low-cost way to turn text, images, and structured data into actionable typed answers. With general availability on GPT-6 Luna, native Live integration, JSON input, and up to 400 questions per request, it fits the high-frequency decisions that previously forced teams to choose between speed and intelligence.

Start in the Playground with one real decision your system already makes. Measure latency and cost against your current approach. Then move the call into production where the savings compound.

## Sources

- OpenAI, “Build more responsive apps with the Decisions API,” October 22, 2026. https://openai.com/index/decisions-api/
- OpenAI Developers, “Decisions,” API guide. https://developers.openai.com/api/docs/guides/decisions
- OpenAI YouTube, “Introducing the Decisions API.” https://www.youtube.com/watch?v=FB6oCmrIj-Y
