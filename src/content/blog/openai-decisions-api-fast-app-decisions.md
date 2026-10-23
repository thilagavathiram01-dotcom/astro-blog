---
title: "How to Use OpenAI Decisions API for Fast App Decisions"
description: "Step-by-step guide to OpenAI Decisions API with GPT-6 Luna: classify inputs, route requests, and score items 10x faster at low cost."
pubDate: 2026-10-23T20:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer"]
noindex: false
---

The OpenAI Decisions API lets applications make bounded decisions from text, images, or JSON inputs up to 10 times faster than calling GPT-6 Luna through the Responses API. It became generally available on October 22, 2026.<grok type="render_inline_citation" citation_id="30" />

You define a question and its allowed answers. The API returns a probability, a choice, or a score. Your application uses that result to route a request, classify content, or trigger the next action.

This guide shows how to call the endpoint, choose the right question type, and put the result into a production workflow.

## What the Decisions API returns

The Decisions API supports three answer types on the model `gpt-6-luna` only.<grok type="render_inline_citation" citation_id="35" />

- **Predicate**: Returns a probability between 0 and 1 that a condition is true. Example: “Does this product photo show visible damage?”
- **Choice**: Selects one value from a fixed list you supply and includes probabilities plus a confidence score.
- **Score**: Rates an input against ordered levels (for example, severity 0–2) and returns a probability-weighted score.

You can ask up to 400 questions in one request. Pricing is $0.10 per million input tokens; cached input is $0.01 per million. There are no output-token charges.<grok type="render_inline_citation" citation_id="40" />

![Developer reviewing code for AI decision logic](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Make your first request

Send a POST to `https://api.openai.com/v1/decisions`. The body contains three fields: `model`, `input`, and `questions`.

Here is a minimal predicate example that checks whether a support ticket describes a duplicate charge:

```json
{
  "model": "gpt-6-luna",
  "input": [
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "Evaluate the ticket using the order evidence."
        },
        {
          "type": "input_json",
          "data": {
            "ticket": { "body": "Please refund the duplicate charge." },
            "order": { "charges": [49, 49] }
          }
        }
      ]
    }
  ],
  "questions": [
    {
      "type": "predicate",
      "name": "duplicate_charge",
      "instructions": "Does the ticket describe a duplicate charge supported by the order?"
    }
  ]
}
```

The response contains an `answers` array. Each answer echoes the question `name` and includes the typed result.

For image inputs you can pass a publicly accessible HTTPS URL or a base64 data URL inside an `input_image` content part.

## Choose the right question type

Use a **predicate** when you need a yes/no-style probability. The model estimates how likely the condition is true.

Use a **choice** when the next action must be one of a small, unordered set. Supply the allowed values; the API returns the selected value plus probabilities.

Use a **score** when the levels have an order, such as severity or priority. The API returns a weighted average of the level indices.

Both choice and score return probabilities over the discrete options. Your application sets any confidence threshold that determines whether to act automatically or escalate to a human.

![Laptop showing programming environment for API calls](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Integrate with GPT-Live for voice

The Decisions API integrates natively with GPT-Live. Live can call Decisions directly while the user is still speaking, skipping a round trip through your application.<grok type="render_inline_citation" citation_id="33" />

Configure `session.delegation` with type `decisions` and list the questions. Live sends the conversation transcript automatically and emits a `decision.event` that your app reads.

This pattern keeps voice agents responsive. A customer-support agent can decide whether to ask a clarifying question, route the request, or escalate before the user finishes speaking.

## Practical tips

- Start with one recurring decision your application already makes. Measure latency and accuracy on real examples before expanding.
- Reuse shared context with prompt caching to lower cost on repeated prefixes.
- Pass native JSON with an `input_json` part instead of stringifying structured data.
- Include images inside individual question instructions when you need to compare multiple photos against shared evidence.
- Monitor organization usage through the dedicated Decisions usage endpoint.

You can experiment in the Decisions Playground before writing code. Official documentation covers the full request schema, error handling, and regional residency options.

For related ChatGPT workflow patterns, see our guide on [reusable ChatGPT skills](/blog/chatgpt-skills-reusable-workflows/).

## Conclusion

The Decisions API turns frequent, bounded judgments into typed answers that applications can act on immediately. With GPT-6 Luna, prompt caching, native JSON, and GPT-Live integration, it reduces both latency and cost compared with full Responses API calls.

Define your question types carefully, test on representative inputs, and wire the results into your routing or classification logic. The endpoint is production-ready today.

## Sources

- OpenAI: Build more responsive apps with the Decisions API (October 22, 2026)
- OpenAI API documentation: Decisions guide and reference

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
