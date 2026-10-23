---
title: "How to Build Fast Apps with OpenAI Decisions API"
description: "Step-by-step guide to the OpenAI Decisions API with GPT-6 Luna for near real-time decisions from text, images, and JSON. Learn predicates, choices, scores, pricing, and GPT-Live use."
pubDate: 2026-10-23T21:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "chatgpt"]
noindex: false
---

Applications and agents make dozens of small decisions every minute: classify an email, route a support ticket, or pick the next action in a conversation. Those decisions used to mean a full model call with higher latency and cost. OpenAI made the Decisions API generally available on 22 October 2026 so you can get structured answers faster.

Built on GPT-6 Luna, the API focuses the model on questions with a fixed set of possible answers. OpenAI says it runs up to 10 times faster than the same model through the Responses API and costs only for input tokens. You define the question, supply context as text, images, or JSON, and receive a probability, a chosen option, or a score.

This guide walks through the three answer types, a first request, and practical limits. For related ChatGPT visual features, see [How to Get Visual Answers with GPT-6 Intelligent UI](/blog/chatgpt-intelligent-ui-gpt-6/).

## What the Decisions API returns

OpenAI lists three answer types in the product announcement:

- **Predicate**: Estimates the probability (0 to 1) that a condition is true. Example: “Does this product photo show visible damage?”
- **Choice**: Selects one of the options you supply. The response includes the chosen value plus probabilities and confidence.
- **Score**: Rates the input against ordered levels in a rubric and returns a probability-weighted average of the level indices.

You can ask up to 400 questions in one request. The model can refuse a question (type “refusal”) while still answering the others. There are no output-token charges; you pay only for input tokens.

![Developer reviewing code on a laptop screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Pricing and availability notes

OpenAI states the Decisions API costs $0.10 per million input tokens. Cached input costs $0.01 per million tokens. 30-minute and 12-hour cache writes have their own rates; check the pricing guide for current figures.

Regional processing is available in the US and EU. Zero Data Retention is available to eligible customers. The model is GPT-6 Luna only. Inference residency and prompt caching for reused context were added after the public beta.

## Step-by-step: make your first decision

You need an OpenAI API key and the official SDK or a direct HTTP call to the /decisions endpoint.

1. Install the OpenAI Python SDK if you do not already have it: `pip install --upgrade openai`.
2. Set your API key as the environment variable `OPENAI_API_KEY`.
3. Create a client and call `decisions.create` with model `gpt-6-luna`, an input string (or array of messages/images), and one or more questions.

Here is a minimal predicate example that checks whether a customer message looks like a refund request:

```python
from openai import OpenAI
client = OpenAI()

decision = client.decisions.create(
    model="gpt-6-luna",
    input="I cancelled my subscription on 28 September but was still charged $120 on 1 October. Please reverse it.",
    questions=[{
        "type": "predicate",
        "name": "refund_needed",
        "instructions": "Does this customer appear to need a refund?"
    }]
)
print(decision.answers[0].probability)
```

The response object contains an answers array. For a predicate the key field is probability. Test with real examples from your logs before you wire it into a hot path.

For a choice decision you supply a list of allowed values. For a score you supply ordered levels. OpenAI’s developer guide and the Decisions Playground on the platform let you try text and images without writing code first.

## Real-time voice with GPT-Live

The API now integrates natively with GPT-Live sessions. You can add a decisions trigger so the model chooses an action or expression while a conversation is still happening.

OpenAI’s example for an avatar reaction looks like this (placed in session.triggers):

```json
{
  "type": "decisions",
  "event_type": "session.input_transcript.delta",
  "decisions": {
    "questions": [{
      "type": "choice",
      "name": "reaction",
      "instructions": "Choose an appropriate reaction for the avatar based on the user's latest message.",
      "choices": [
        {"value": "neutral"},
        {"value": "happy"},
        {"value": "sad"},
        {"value": "concerned"}
      ]
    }]
  }
}
```

Live then emits a decision.event. Your application reads the selected reaction and updates the character. Early customers reported large reductions in time-to-next-action; Speak noted a drop from 1.4 s to 0.13 s in testing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FB6oCmrIj-Y"
    title="Introducing the Decisions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips from early adopters

Box used the API to classify documents and route certificates of insurance. In their evaluation it delivered roughly 5× faster route selection on 30 cases with the same accuracy as the Responses API, sending lower-confidence cases to human review.

Datadog scored the risk of agent-generated shell commands before execution and saw 40× faster p95 latency. Ramp attributed AI costs 4× faster and 30 % cheaper than with GPT-6 Luna on the Responses API. Sierra ran it inside live customer orchestration at under 280 ms p95.

Start with one high-volume decision that already has clear labels. Measure latency and accuracy against your current method on a held-out set. Keep a confidence threshold in your own code so low-confidence answers go to a human or a fuller model call.

![Team collaborating around a laptop in an office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Limits and safety notes

The API is designed for bounded questions, not open-ended generation. OpenAI notes that focusing on a small set of choices is what produces the speed gain while retaining image understanding and broad language support.

Always validate the returned choice or score against your own rules. A high probability does not replace business logic or compliance checks. Do not send secrets or regulated data unless you have confirmed the appropriate data-retention settings for your account.

Regional availability and Zero Data Retention options are documented in the data controls guide. Check them before production use in regulated environments.

## Conclusion

The Decisions API gives developers a dedicated, low-latency path for the small structured decisions that appear throughout modern applications and agents. Define the question type, supply context, and act on the returned probability, choice, or score. Pair it with GPT-Live when the decision must happen inside a live voice session.

Test one recurring decision in the Playground today, then move the working call into your codebase. The combination of speed, input-only pricing, and native voice integration makes it practical to keep decisions on the hot path instead of batching them later.

## Sources

- [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api/) — OpenAI, 22 October 2026
- [Decisions API reference](https://developers.openai.com/api/reference/resources/decisions/) — OpenAI
- [Introducing the Decisions API](https://www.youtube.com/watch?v=FB6oCmrIj-Y) — OpenAI on YouTube
