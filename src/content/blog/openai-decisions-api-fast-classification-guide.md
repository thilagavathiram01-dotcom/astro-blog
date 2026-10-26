---
title: "How to Use OpenAI Decisions API for Fast Classification"
description: "Step-by-step guide to OpenAI Decisions API with GPT-6 Luna for 10x faster typed answers, routing, and scoring in apps."
pubDate: 2026-10-26T09:46:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "developer"]
noindex: false
---

OpenAI's Decisions API lets your application get structured answers from text, images, or JSON in a fraction of a second. It focuses GPT-6 Luna on bounded questions so you receive probabilities, choices, or scores instead of free-form text.

This guide shows how to call the API, choose the right question type, and put the result into app logic. You will also see a verified video walkthrough.

## What the Decisions API Returns

A request has three parts: the model (currently only `gpt-6-luna`), shared input evidence, and one or more questions. The API returns an `answers` array in the same order.

Three answer types exist:

- **predicate** — probability from 0 to 1 that a condition is true (for example, “does this photo show visible damage?”).
- **choice** — one value from a fixed list you supply, plus confidence and per-option probabilities.
- **score** — a probability-weighted numeric score against an ordered rubric (for example, severity levels).

You pay only for input tokens. Output tokens are free. Cached input is cheaper. The endpoint is `POST /v1/decisions`.

![Developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Step 1: Get an API Key and Test in the Playground

1. Sign in at platform.openai.com and create or copy an API key.
2. Open the Decisions Playground (linked from the official guide).
3. Paste sample text or upload an image.
4. Add a question of type predicate, choice, or score.
5. Run it and inspect the probability, choice, or score before you write code.

This confirms the question is clear and the model can distinguish the options with your real data.

## Step 2: Make Your First Request

Use the official Python or JavaScript SDK, or call the endpoint directly with curl. Here is a minimal choice example that routes a support ticket:

```json
{
  "model": "gpt-6-luna",
  "input": "Order R-208 was charged twice. Please refund the extra payment.",
  "questions": [
    {
      "type": "choice",
      "name": "route",
      "instructions": "Select the team responsible. Choose other when no team fits.",
      "choices": [
        {"value": "billing", "description": "Charges, invoices, and refunds"},
        {"value": "account", "description": "Login and profile issues"},
        {"value": "other", "description": "Everything else"}
      ]
    }
  ]
}
```

Send it to `https://api.openai.com/v1/decisions` with your Bearer token. The response contains the selected `choice` and a confidence value you can threshold.

## Step 3: Handle Images and JSON

Pass an image as a base64 data URL or public HTTPS URL inside an `input` content array. You can also send native JSON with `input_json`. Each question can carry its own images for comparison against the shared evidence.

A predicate on a product photo looks like this in the question instructions: “Does the photo show a crack, tear, or dent?” The returned probability lets you auto-approve or escalate.

![Analytics dashboard on a screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Step 4: Integrate with Voice via GPT-Live

Add a decisions trigger to a GPT-Live session. On each transcript delta the API can return a reaction choice that your app uses to animate an avatar or decide the next spoken action. Official examples show latency dropping from over a second to under 150 ms in language-learning and support flows.

## Tips for Production Use

- Start with one high-volume decision and measure accuracy on real examples before expanding.
- Use the `name` field so you can match answers reliably.
- Threshold low-confidence results and send them to a human or a fuller Responses API call.
- Enable prompt caching when the same context is reused across many questions.
- Check regional availability and Zero Data Retention options if your compliance rules require them.

## Related Reading

If you already have an implementation and want to compare latency numbers, see our earlier walkthrough on [How to Use OpenAI Decisions API with GPT-6 Luna](/blog/how-to-use-openai-decisions-api-with-gpt-6-luna/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Decisions API turns bounded questions into fast, typed signals your application can act on immediately. Define the question, supply the evidence, and use the probability, choice, or score to route, filter, or prioritize. Test in the Playground first, then wire the same request into your code.

## Sources

- OpenAI: Build more responsive apps with the Decisions API (openai.com/index/decisions-api/)
- OpenAI API guide: Decisions (developers.openai.com/api/docs/guides/decisions)
- OpenAI YouTube: Introducing the Decisions API
