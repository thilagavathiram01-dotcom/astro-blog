---
title: "OpenAI Decisions API: Build Fast Structured Choices"
description: "Step-by-step guide to OpenAI Decisions API with GPT-6 Luna. Classify, route, and score inputs up to 10x faster for responsive apps."
pubDate: 2026-10-23T11:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "developer", "ai"]
noindex: false
---

Applications make dozens of small choices every session. Route this ticket. Flag that photo. Score this risk. Full language model calls add latency and cost to each one. OpenAI's Decisions API, now generally available, targets exactly those bounded questions.

Built on GPT-6 Luna, it returns a probability, a choice, or a score from text, images, or JSON. OpenAI states it runs up to 10 times faster than the same model through the Responses API. You pay only for input tokens at $0.10 per million, with cached input at $0.01. This guide shows how to use the three answer types, start in the Playground, and call the endpoint from Python.

## What the Decisions API returns

You define the question and the allowed answers. The model does not write free text. It returns a structured answer your code can act on immediately.

OpenAI supports three types:

- **Predicate** estimates the probability (0 to 1) that a condition is true, such as visible product damage.
- **Choice** selects one value from a list you supply, along with probabilities and a confidence score.
- **Score** rates the input against ordered levels in a rubric and returns a probability-weighted average.

You can ask up to 400 questions in one request. The API also accepts native JSON and images in the instructions. Prompt caching is available for repeated context. Native integration with GPT-Live lets voice sessions call Decisions without an extra round trip.

Teams already use it for document routing, transaction categorization, risk scoring of shell commands, and real-time avatar expressions. Box reported roughly 5x faster route selection at the same accuracy. Sierra measured under 280 ms p95 with about 90% lower cost per call in live conversations.

![Laptop with code open next to a coffee mug](https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need an OpenAI API key with billing enabled. Decisions runs only on `gpt-6-luna`. Create the key in the platform dashboard and export it as `OPENAI_API_KEY`. Install the Python SDK with `pip install --upgrade openai`. The official Playground at platform.openai.com/decisions lets you test questions before writing code.

Regional processing is available in the US and EU. Zero Data Retention is offered to eligible customers. Always confirm current pricing and limits in the developer guide, since introductory rates can change.

## Step 1: Test a predicate in the Playground

Open the Decisions Playground. Choose the predicate type. Paste a short input such as a customer message about a double charge. Set the instructions to "Does this customer appear to need a refund?" Submit and inspect the returned probability.

A high probability means the condition is likely true. Your application can threshold it (for example, above 0.7) and route to a refund flow, or send low-confidence cases to a human reviewer. The Playground shows the full response shape so you know what to parse later.

## Step 2: Call a choice decision from Python

A choice question picks one option from a fixed set. Here is a minimal example that routes a support message. The official docs recommend including a fallback such as "other" so unmatched inputs do not force a poor fit.

```python
from openai import OpenAI

client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="I was charged twice for my order.",
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
    ],
)

print(decision.answers[0].choice)
print(decision.answers[0].confidence)
```

The response contains the selected value, a probability for each choice, and an overall confidence. Store the confidence and branch only when it clears your threshold. Low-confidence results can fall back to the Responses API or a human queue.

## Step 3: Score severity with a rubric

A score question uses ordered levels. Define the levels from least to most severe. The API returns a probability-weighted average of the indices plus a confidence.

```python
decision = client.decisions.create(
    model="gpt-6-luna",
    input="The app crashes on every login after the last update.",
    questions=[
        {
            "type": "score",
            "name": "severity",
            "instructions": "Rate the severity of this issue.",
            "levels": [
                {"description": "Cosmetic or minor"},
                {"description": "Workaround available"},
                {"description": "Fully blocked"}
            ]
        }
    ],
)

print(decision.answers[0].score)
```

Use the score to prioritize tickets or decide whether an agent should escalate. Because the levels are ordered, adjacent scores stay meaningful. Keep the rubric short and the distinctions clear so the model does not invent intermediate grades.

![Laptop showing an AI code editor interface](https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=800&q=80)

## Step 4: Combine questions and handle images

You can send multiple questions in one request. They are answered independently. For images, place a base64 data URL or public HTTP URL inside a user message content array alongside text.

A product-damage predicate looks like this in the request body:

```json
{
  "model": "gpt-6-luna",
  "input": [{
    "role": "user",
    "content": [
      {"type": "input_text", "text": "Inspect the product in this photo."},
      {"type": "input_image", "image_url": "data:image/png;base64,..."}
    ]
  }],
  "questions": [{
    "type": "predicate",
    "name": "visible_damage",
    "instructions": "Does the product have visible damage such as a crack, tear, or dent? Ignore shadows and packaging damage."
  }]
}
```

The same pattern works for JSON evidence. Pass an `input_json` part that contains order records or ticket metadata so the model evaluates structured facts rather than free text alone.

## Watch the official introduction

OpenAI's launch video walks through text classification, image decisions, and voice expressions in under six minutes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

- Write instructions around observable criteria. Split different concerns into separate questions instead of packing them into one long prompt.
- Always include a fallback choice or a low-confidence path. Do not assume every input fits your list.
- Threshold on confidence or probability before you act. The model returns numbers so you can decide the cutoff.
- Cache repeated prefixes. The API supports prompt caching; cached input is billed at one-tenth the normal rate.
- Start with one high-frequency decision. Measure latency and accuracy against your current Responses API call before you migrate more routes.
- For voice, add the Decisions configuration to `session.triggers` in a GPT-Live session so the model decides while the user is still speaking.
- If you already use the Agents API for browser tasks, Decisions fits the same agent loop for fast classification steps. See the [Agents API computer use guide](/blog/agents-api-computer-use-browser-tasks/) for the hosted browser pattern.

## Conclusion

The Decisions API turns bounded questions into typed answers your application can use at interactive speeds. Define a predicate, choice, or score, supply the context as text, image, or JSON, and act on the returned probability, selection, or weighted score.

Begin in the Playground with a single recurring decision. Once the accuracy matches your needs, move the same question into code and place it on the hot path. The combination of low cost, no output-token charges, and native GPT-Live support makes it practical for classification, routing, and scoring inside real-time flows.

## Sources

- [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api/) — OpenAI, 22 October 2026
- [Decisions guide](https://developers.openai.com/api/docs/guides/decisions) — OpenAI API docs
- [Connect voice to Decisions](https://developers.openai.com/api/docs/guides/decisions-voice) — OpenAI API docs
- [Introducing the Decisions API](https://www.youtube.com/watch?v=FB6oCmrIj-Y) — OpenAI, 6 October 2026
