---
title: "How to Call the OpenAI Decisions API with GPT-6 Luna"
description: "Call the OpenAI Decisions API with GPT-6 Luna to classify text and images, return probabilities, and route actions about 10x faster than Responses."
pubDate: 2026-10-07T09:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "ai-tools", "developer"]
noindex: false
---

Support queues do not need a long essay from a model. They need a department, a yes-or-no flag, or a severity score, and they need it before the user notices a pause. OpenAI's Decisions API, released in public beta on 6 October 2026, is built for that job. It runs on `gpt-6-luna` only, and OpenAI says it returns typed answers about 10 times faster than the Responses API.

This guide covers when to use the endpoint, the three question types, a working request, and the limits you should plan for before you ship a router.

## What the Decisions API returns

A call goes to `POST /v1/decisions`. The body has three parts: `model`, `input`, and `questions`. The model field is `gpt-6-luna`. Input is shared evidence: a plain string, or user messages that mix text and images. Questions say what to judge.

The response is an `answers` array. Give every question a unique `name`. The API echoes that name so you can match results when you ask several questions in one request.

OpenAI documents three question types:

- **Predicate** checks a condition, such as visible damage. The main field is `probability`, an estimate from 0 to 1 that the condition is true.
- **Choice** picks one option from values you supply, such as a department. It also returns a probability distribution and a separate `confidence` field.
- **Score** rates an input against ordered levels, such as severity. `score` is the probability-weighted average of the level indices, so it can fall between levels.

Use choice for unordered categories. Use score when the options have an order. Use a predicate when you only need the chance that a condition holds.

Decisions is the wrong tool when you need a written explanation or a custom JSON object. OpenAI points those jobs to Structured Outputs on the Responses API, and to function calling when the model must request a tool with arguments. If you are already wiring browser tools, the [Agents API computer-use guide](/blog/agents-api-computer-use-browser-tasks/) covers a different path: hosted browser actions, not a closed set of labels.

The API is in public beta. OpenAI says it expects general availability in the coming weeks. Try prompts in the Decisions Playground at platform.openai.com/decisions before you lock a schema.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Install an SDK that supports decisions

Official examples need these SDK versions or later: Python 3.26.0, JavaScript 7.30.0, Go 3.73.0, Ruby 0.101.0, and Java 4.78.0. Older clients will not expose `client.decisions.create`.

Install the current Python package and set a key on the server, not in a browser bundle:

```bash
pip install -U openai
export OPENAI_API_KEY="sk-..."
```

Keep the key in your backend. The Decisions endpoint is a normal authenticated API call. A client app should send the user message to your server, then your server calls OpenAI.

## Route a complaint with a choice question

A choice question needs distinct values and a short description of when each value applies. This request follows OpenAI's support-routing example.

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
                {"value": "other", "description": "Requests outside these categories."},
            ],
        }
    ],
)

answer = decision.answers[0]
if answer.type == "refusal":
    print(f"Refused: {answer.name}")
elif answer.type == "choice":
    print(answer.choice, answer.confidence)
```

Treat `choice` as a label your code already understands. Map `billing` to a queue. Do not invent a new department at runtime. If the type is `refusal`, skip automation and send the item to a human queue. OpenAI's examples check for refusal before reading `probability` or `choice`.

The same shape works over HTTP:

```bash
curl https://api.openai.com/v1/decisions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-6-luna",
    "input": "I was charged twice for my order.",
    "questions": [{
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
  }'
```

## Check a photo with a predicate

Predicates fit review gates. OpenAI's product-photo example asks whether an item has a crack, tear, or dent, and tells the model to ignore shadows and packaging damage. An illustrative response in the docs shows `probability` of 0.92. That number is a sample, not a guarantee for your images.

Images on this endpoint must be inline base64 data URLs. Hosted HTTP or HTTPS image URLs and `file_id` inputs are not supported. Put `input_text` and `input_image` parts in one user message.

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
            {"type": "input_image", "image_url": f"data:image/png;base64,{image_b64}"},
        ],
    }],
    questions=[{
        "type": "predicate",
        "name": "visible_damage",
        "instructions": (
            "Does the product have visible damage, such as a crack, tear, or dent? "
            "Ignore shadows and damage to the packaging."
        ),
    }],
)

answer = decision.answers[0]
if answer.type == "predicate" and answer.probability >= 0.8:
    flag_for_review(answer.name)
```

Pick the threshold from your own labeled set. OpenAI tells developers to set cutoffs from the cost of false positives and false negatives, not from a single demo probability.

![Lines of source code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Score severity, then watch the launch demo

A score question uses ordered levels. The result is not only the winning level. It is a probability-weighted average of the level indices, which can land between two labels. That is useful for triage: a 1.4 might stay in the bot, while a 2.6 opens a ticket.

OpenAI's launch video shows the same idea in product form: classify text, route a lead, read an image, and pick a next action for a voice session. The clip is 5 minutes and 34 seconds and was published by the OpenAI channel on 6 October 2026.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

A related guide, [Connect voice to Decisions](https://developers.openai.com/api/docs/guides/decisions-voice), pairs this endpoint with the Live API. The pattern is to keep the API key on the server, send conversation plus current state as input, and choose an action such as `reload` or `noop`. Use `session.thinking.append` to update GPT-Live context without forcing a spoken reply, and keep each append within 500 tokens.

## Pricing, data controls, and practical tips

With `gpt-6-luna` on `/v1/decisions`, input costs $0.10 per 1 million tokens. OpenAI says you pay only for input tokens: there are no cache-read, cache-write, or output-token charges on this endpoint. Regional processing premiums and long-context input multipliers still apply. Other requests that use `gpt-6-luna` follow the normal model and processing-tier prices, not this Decisions rate.

The Decisions API supports Zero Data Retention and HIPAA use for eligible customers. Data residency and regional processing are supported in the United States and Europe (EEA and Switzerland). Eligibility, agreements, and limits live in OpenAI's data-controls docs. If your org needs a Business Associate Agreement, start with the [HIPAA BAA setup guide](/blog/enable-openai-api-hipaa-baa/) before you send health data through any API path.

A few habits keep routers stable:

- Write instructions that exclude lookalikes. The damage example tells the model to ignore packaging and shadows.
- Add an `other` or `noop` choice so the model is not forced into a bad label.
- Ask several related questions in one call when they share the same input. You pay for that input once.
- Log `name`, answer type, and confidence. Review refusals instead of retrying them in a loop.
- Do not paste secrets into `input`. The model sees that text as evidence.

## Conclusion

The Decisions API is a narrow tool with a clear contract. You send evidence and a closed question. You get a probability, a choice, or a score, often fast enough to sit in front of a click. `gpt-6-luna` is the only model on the endpoint today, images must be base64 data URLs, and the product is still in public beta.

Start with one queue: billing versus technical versus other. Measure false routes on a labeled sample, then add a predicate or a score only after that threshold holds. Speed is the headline. The useful part is a label your code can act on without parsing a paragraph.

## Sources

- OpenAI, Decisions API guide: https://developers.openai.com/api/docs/guides/decisions
- OpenAI, Connect voice to Decisions: https://developers.openai.com/api/docs/guides/decisions-voice
- OpenAI API changelog, 6 October 2026: https://developers.openai.com/api/docs/changelog
- OpenAI, Introducing the Decisions API (YouTube): https://www.youtube.com/watch?v=FB6oCmrIj-Y
