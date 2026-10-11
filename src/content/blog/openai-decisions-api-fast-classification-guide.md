---
title: "How to Use OpenAI Decisions API for Fast Classification"
description: "Call the OpenAI Decisions API with GPT-6 Luna for predicate, choice, and score answers. Route tickets, check images, and score severity in under 100ms."
pubDate: 2026-10-11T15:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

Support tickets pile up. Product photos need damage checks. Lead forms need routing. Full chat responses take too long and cost more than the decision itself.

OpenAI released the Decisions API in public beta on October 6, 2026. It evaluates text, images, or both and returns typed answers about 10x faster than the Responses API. The only model is GPT-6 Luna. You pay only for input tokens at $0.10 per million. No output or cache charges apply on this endpoint.

This guide shows how to call it, choose the right question type, handle probabilities, and put the results into your app.

## What the Decisions API returns

A request has three fields: model, input, and questions. The response is an answers array in the same order. Name each question so you can match results.

Three question types exist:

- **Predicate**: Returns a probability from 0 to 1 that a condition is true. Use it for yes/no checks such as “does this photo show damage?”
- **Choice**: Picks one option from a fixed set you supply. Returns the chosen value, probabilities for every option, and a confidence score. Use it for routing (billing, technical, shipping).
- **Score**: Rates against ordered levels (for example severity 0, 1, 2). Returns a probability-weighted score that can fall between levels, plus confidence.

Choice and score both return probability distributions. Use choice when options have no natural order. Use score when levels are ranked.

The API is in public beta. General availability is expected in the coming weeks. Use SDK versions Python 3.26.0, JavaScript 7.30.0 or later.

![Developer reviewing structured API responses on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Make your first predicate call

Start with a simple text predicate. You need an OpenAI API key set as OPENAI_API_KEY.

Python example:

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="The package arrived with a broken screen.",
    questions=[
        {
            "type": "predicate",
            "name": "damaged",
            "instructions": "Does the customer report a damaged item?"
        }
    ],
)

answer = decision.answers[0]
if answer.type == "predicate":
    print(answer.probability)  # example: 0.95
```

The same request with curl:

```bash
curl https://api.openai.com/v1/decisions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-6-luna",
    "input": "The package arrived with a broken screen.",
    "questions": [{
      "type": "predicate",
      "name": "damaged",
      "instructions": "Does the customer report a damaged item?"
    }]
  }'
```

A refusal returns type “refusal” instead of an answer. Check for it before reading probability.

## Route with a choice question

For support routing, define the allowed departments and short descriptions.

```python
decision = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for my order.",
    questions=[{
        "type": "choice",
        "name": "department",
        "instructions": "Which department should handle this complaint?",
        "choices": [
            {"value": "billing", "description": "Payments, invoices, and refunds."},
            {"value": "technical", "description": "Problems using the product."},
            {"value": "shipping", "description": "Delivery and tracking."},
            {"value": "other", "description": "Requests outside these categories."}
        ]
    }]
)
```

The answer contains the chosen value, a probability for each option, and an overall confidence. Include an “other” option so the model is not forced into a wrong category.

OpenAI’s own examples show responses in tens of milliseconds for simple classification. That speed is why the endpoint exists: decisions that sit inside loops, form handlers, or real-time feeds.

## Check images for damage

Images are accepted as base64 data URLs or public HTTP(S) URLs. Up to 128 images per request. File IDs are not supported.

```python
import base64
from pathlib import Path
from openai import OpenAI

client = OpenAI()
image_b64 = base64.b64encode(Path("product.png").read_bytes()).decode("ascii")

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
        "instructions": "Does the product have visible damage, such as a crack, tear, or dent? Ignore shadows and damage to the packaging."
    }]
)
```

Use the highest-quality image you have. The model looks at the content you supply; it does not browse the web.

![Close-up of code and interface elements on a screen](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Score severity or priority

For ordered levels, use the score type. Indices start at 0.

```python
questions=[{
    "type": "score",
    "name": "severity",
    "instructions": "Rate the impact of this issue.",
    "levels": [
        {"label": "Cosmetic", "description": "Visual only, no functional impact."},
        {"label": "Workaround available", "description": "Blocks some users but has a workaround."},
        {"label": "Fully blocked", "description": "Stops core functionality for most users."}
    ]
}]
```

The returned score is the probability-weighted average of the level indices. A result of 1.4 means the model leans between the second and third levels.

## Set thresholds and combine questions

Probabilities and confidence are estimates. Calibrate them on your own labeled data.

- High-stakes actions: require probability or confidence above 0.8–0.9 and still route borderline cases to a human.
- Low-stakes routing: a 0.6–0.7 threshold may be enough.
- Multiple independent questions can travel in one request. The model answers each separately.

You can also pair Decisions with the Live API for voice. Client delegation lets the Live session hand an action choice to Decisions, then report the result back to the user.

## Pricing, limits, and compliance

With GPT-6 Luna on the Decisions endpoint:

- Input: $0.10 per million tokens
- Output, cache-read, and cache-write: $0
- Regional processing premiums and long-context multipliers still apply
- Zero Data Retention and HIPAA available for eligible customers
- Data residency in the United States and Europe (EEA + Switzerland)

Only gpt-6-luna is supported. The Playground at platform.openai.com/decisions lets you test questions before writing code.

## Tips for production use

- Keep instructions short and specific. Describe what to ignore (shadows, packaging, etc.).
- Always include a fallback option on choice questions.
- Log the full answer object (probabilities and confidence) so you can adjust thresholds later.
- For complex extraction or free-form text, use Structured Outputs on the Responses API instead. Decisions is for bounded answers.
- Test image quality and lighting. A blurry photo lowers confidence.

If you already use GPT-6 features in ChatGPT, the Decisions endpoint is the developer counterpart for the same underlying model family. See the [ChatGPT Intelligent UI guide](/blog/chatgpt-intelligent-ui-gpt-6/) for the conversational side.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API turns classification, routing, and scoring into a fast, typed call. You define the question and the answer space; GPT-6 Luna returns a probability, a choice, or a score in tens of milliseconds. Start with one predicate or choice in the Playground, then wire the same request into your ticket handler or image pipeline.

It is still in public beta. Monitor the docs for general availability and additional models. Until then, GPT-6 Luna on POST /v1/decisions is the supported path.

## Sources

- OpenAI Decisions API guide: https://developers.openai.com/api/docs/guides/decisions
- OpenAI API reference for decisions.create
- OpenAI launch video: Introducing the Decisions API (YouTube)
- Pricing and model notes from the official Decisions documentation (checked October 2026)
