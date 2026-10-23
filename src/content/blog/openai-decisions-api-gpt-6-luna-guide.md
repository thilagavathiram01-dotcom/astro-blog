---
title: "OpenAI Decisions API Guide for Fast Typed Answers"
description: "Learn how to use the OpenAI Decisions API with GPT-6 Luna for near real-time classification, routing, and scoring from text or images."
pubDate: 2026-10-23T11:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

OpenAI made the Decisions API generally available on 22 October 2026. It returns typed answers from text, images, or JSON about 10 times faster than the Responses API, using GPT-6 Luna.

Applications and agents make many small decisions: classify an input, route a request, or pick the next action. Each one is simple. At scale, latency and cost add up. The Decisions API focuses the model on bounded questions so your code can act on the result immediately.

This guide shows how to call the endpoint, choose the right question type, and put it into a real workflow. Facts come from OpenAI’s announcement and developer documentation.

## What the Decisions API returns

A request has three parts: the model (only `gpt-6-luna`), shared input, and a list of questions. The response contains an `answers` array. Give each question a unique `name` so you can match results in code.

Three answer types exist:

- **Predicate**: Estimates the probability (0 to 1) that a condition is true. Example: “Does this product photo show visible damage?”
- **Choice**: Selects one option from a fixed set you supply. The response includes the chosen value plus probabilities and a confidence score. Example: route a support ticket to billing, technical, or shipping.
- **Score**: Rates the input against ordered levels in a rubric. It returns a probability-weighted average of the level indices. Example: severity of an issue from cosmetic to fully blocked.

Use Decisions when you need one of these structured results. Use Structured Outputs or function calling in the Responses API when you need free-form text or a custom JSON object.

![Laptop screen showing lines of code for an API request](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Make your first request

The endpoint is `POST https://api.openai.com/v1/decisions`. You need an OpenAI API key with access to GPT-6 Luna.

Here is a minimal Python example that checks whether a support message describes a duplicate charge:

```python
from openai import OpenAI

client = OpenAI()

response = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for my order.",
    questions=[
        {
            "type": "predicate",
            "name": "duplicate_charge",
            "instructions": "Does the message describe a duplicate charge?"
        }
    ]
)

print(response.answers)
# Example: [{'type': 'predicate', 'name': 'duplicate_charge', 'probability': 0.95}]
```

The same pattern works with curl or any HTTP client. The official SDKs (Python 3.26+, JavaScript 7.30+, and peers) include helpers.

Start in the Decisions Playground on the OpenAI platform. Paste sample text or an image, define a question, and inspect the probabilities before you write production code.

## Choose the right question type

Pick the type that matches what your application needs to branch on.

**Predicate** works for binary checks. A customer-support agent can ask whether a photo shows a cracked screen. If the probability exceeds 0.8, escalate to a human. If it is low, continue automated handling.

**Choice** fits routing. Supply a list of departments or categories. The model returns one value and the probability for every option. Your code can then send the ticket to the correct queue or log low-confidence cases for review.

**Score** fits ordered scales. Define levels such as “cosmetic,” “workaround available,” and “fully blocked.” The returned score can fall between integers, so you can set thresholds (for example, above 1.5 means urgent).

You can ask up to 400 questions in one request. Shared input is evaluated once. This keeps latency low when you need several related checks.

![Developer workspace with code on screen and glasses on the keyboard](https://images.unsplash.com/photo-1763568258338-94886e7533ab?auto=format&fit=crop&w=800&q=80)

## Handle images and JSON

The API accepts images as base64 data URLs or publicly accessible HTTP/HTTPS URLs. You can also pass native JSON with an `input_json` content part so you do not have to stringify structured data first.

Example: check a product photo for damage while also evaluating an order record:

```python
response = client.decisions.create(
    model="gpt-6-luna",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Evaluate the photo and order."},
                {"type": "input_image", "image_url": "https://example.com/product.jpg"},
                {
                    "type": "input_json",
                    "data": {"order": {"charges": [49, 49]}}
                }
            ]
        }
    ],
    questions=[
        {
            "type": "predicate",
            "name": "visible_damage",
            "instructions": "Does the photo show a crack, tear, or dent? Ignore packaging."
        },
        {
            "type": "predicate",
            "name": "duplicate_charge",
            "instructions": "Does the order show a duplicate charge?"
        }
    ]
)
```

Images in question instructions let you compare a specific reference image against shared evidence. Conversation history is supported: pass ordered messages, tool calls, and tool outputs.

## Pricing, speed, and caching

Input tokens cost $0.10 per million. There are no output-token charges. Cached input costs $0.01 per million tokens. Prompt caching applies when you reuse shared prefixes across requests.

OpenAI states the endpoint is up to 10 times faster than calling the same model through the Responses API. Early customer reports include sub-300 ms p95 times for routing decisions.

Regional processing is available in the US and EU. Zero Data Retention is available to eligible customers. Check the pricing page for cache-write rates on 30-minute and 12-hour caches.

## Watch the official introduction

OpenAI published a short video when the API entered public beta. It shows classification of text, decisions from images, and integration with GPT-Live for voice experiences.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Integrate with agents and GPT-Live

Native GPT-Live integration lets a live voice session call Decisions directly or trigger decisions as transcripts arrive. A support agent can decide whether to ask a clarifying question, route the request, or escalate, all without waiting for a full text generation.

For multi-step agents, place Decisions on the hot path for the frequent, narrow choices. Keep the Responses API for open-ended generation or tool-use planning. Teams such as Box, Datadog, and Sierra have reported 3–40× latency reductions on specific routing and scoring tasks while keeping accuracy comparable.

If you already use GPT-6 models in ChatGPT Work or Codex, see the related guide on [switching ChatGPT Work to GPT-6 Sol and Luna](/blog/chatgpt-gpt-6-sol-luna-work-setup/). The same model family powers the Decisions endpoint.

## Practical tips

- Start with one high-volume decision. Measure latency and accuracy against your current method before expanding.
- Set confidence thresholds in your application code. The API returns probabilities; you decide what is high enough to act on automatically.
- Keep instructions short and specific. The model is optimized for bounded answers, not open-ended reasoning.
- Reuse the same input prefix across related questions so prompt caching reduces cost.
- Test with real production examples, including edge cases that previously produced false positives.
- Monitor usage in the OpenAI dashboard. Organization-level reporting tracks token counts and request volume.

## Conclusion

The Decisions API gives developers a fast, low-cost way to turn text and images into actionable typed results. It is generally available today with GPT-6 Luna. Define your questions, test them in the Playground, and wire the answers into the parts of your application that need to move quickly.

For the latest pricing, caching details, and SDK updates, check the official documentation linked below.

## Sources

- [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api/) — OpenAI, 22 October 2026
- [Decisions API guide](https://developers.openai.com/api/docs/guides/decisions) — OpenAI developer documentation
- [Create a decision API reference](https://developers.openai.com/api/reference/resources/decisions/methods/create) — request and response schema
- [Introducing the Decisions API](https://www.youtube.com/watch?v=FB6oCmrIj-Y) — official OpenAI video
