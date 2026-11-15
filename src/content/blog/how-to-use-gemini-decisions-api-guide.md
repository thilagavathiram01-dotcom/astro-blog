---
title: "How to Use the Gemini Decisions API for Fast Choices"
description: "Step-by-step guide to the Gemini Decisions API. Score yes/no, choice, and rubric questions on text, images, audio, video, and PDFs with Gemini Decision 1 at low cost."
pubDate: 2026-11-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google released the Gemini Decisions API on November 11, 2026. It lets developers score closed-set questions against multimodal inputs without generating any text.

The endpoint uses the new Gemini Decision 1 model. You send one shared input and up to 1,000 typed questions. It returns calibrated probabilities and confidence scores in a single forward pass.

This guide shows how to set it up, call the three question types, and apply the results in code. Facts come from the official Google Blog announcement and the Decisions API documentation.

## What the Gemini Decisions API Does

Generative models produce tokens that your code must parse. The Decisions API skips that step. Gemini Decision 1 evaluates the input once and scores every question against it.

You can mix text, images, audio, video, and PDFs in the shared input. The context window is 262,144 tokens. Output tokens are always zero, so you pay only for input.

Latency stays in the 150-250 ms range end to end for typical requests. Shared input is billed once per request no matter how many questions you attach.

Pricing is $0.10 per million input tokens on the paid tier. A no-cost tier is available in Google AI Studio for prototyping.

Teams at Google already use it for model routing, emoji selection, and safety checks. The same pattern works for tool selection, policy enforcement, or ranking results.

## The Three Question Types

Every question belongs to one of three types.

**noul** answers a yes/no condition. It returns a probability between 0.01 and 0.99 plus a confidence score. You can optionally supply true and false descriptions to clarify the boundary.

**choice** selects one option from a fixed list of 2 to 255 candidates. It returns the top choice, normalized probabilities for every option, and a confidence score. Each option needs a short description of when it applies.

**score** rates the input against an ordered rubric. Levels start at 0. It returns a continuous weighted score, per-level probabilities, a legend, and confidence. Use two to ten levels for most rubrics.

You can mix all three types in one request. The model sees the shared input once and answers every question independently.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Set Up the Client

You need the google-genai SDK version 3.2 or later. Install or upgrade it:

```bash
pip install -U "google-genai>=3.2.0"
```

Create an API key in Google AI Studio and export it:

```bash
export GEMINI_API_KEY=your-key-here
```

The endpoint lives on the v1beta surface. Pass that version when you create the client:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})
```

The free tier works for testing. Switch to a paid key when you process customer data, because the free tier may use inputs to improve Google products.

## Make Your First Request

Start with a simple text input and a single noul question. The example below checks whether a customer message describes a damaged item.

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input="The blue mug I ordered on Monday arrived cracked on Wednesday.",
    questions={
        "is_damaged": {
            "type": "noul",
            "instructions": "Did the item arrive damaged?",
        },
    },
)

answer = result.answers["is_damaged"]
print(f"P(yes)={answer.noul:.2f} confidence={answer.confidence:.2f}")
```

The response object contains an answers map keyed by the question names you supplied. Each answer includes the relevant probability fields plus confidence.

You can also send the request with plain curl:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/decisions" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-decision-1",
    "input": "The blue mug I ordered on Monday arrived cracked on Wednesday.",
    "questions": {
      "is_damaged": {
        "type": "noul",
        "instructions": "Did the item arrive damaged?"
      }
    }
  }'
```

## Handle Multimodal Inputs

The input field accepts a string or a list of content blocks. Blocks use the same format as the Interactions API.

Here is the official example that mixes an image URI with text and asks all three question types at once:

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input=[
        {
            "type": "image",
            "uri": "https://storage.googleapis.com/generativeai-downloads/images/spill.jpg",
            "mime_type": "image/jpeg",
        },
        {
            "type": "text",
            "text": "Breakroom counter check before the 9 AM client meeting.",
        },
    ],
    questions={
        "has_spill": {
            "type": "noul",
            "instructions": "Is there an uncleaned liquid spill on the counter?",
        },
        "next_action": {
            "type": "choice",
            "instructions": "Which cleanup action fits the scene?",
            "criteria": {
                "wipe_with_cloth": "Small counter spill with a cloth or towel already nearby.",
                "dispatch_janitorial": "Large floor hazard, broken glass, or active leak.",
                "ready_for_meeting": "Counter is clean and ready.",
            },
        },
        "severity": {
            "type": "score",
            "instructions": "Rate the severity of the counter mess.",
            "criteria": [
                "Clean and ready.",
                "Minor localized spill.",
                "Major spill or safety hazard.",
            ],
        },
    },
)
```

You can pass base64 data instead of a URI. Inline media is limited to 100 MB per request (50 MB for PDFs). External URLs are limited to 15 MB each. YouTube links and gs:// Cloud Storage URIs are not supported.

## Branch on the Results

Use the returned probabilities to decide the next step. A high confidence noul answer can route a ticket automatically. A low confidence choice can fall back to a human or a generative model.

For the choice example above, inspect result.answers["next_action"].choice and the probabilities dictionary. For the score, read the continuous score value and the per-level probabilities.

Keep the instructions field self-contained. The model does not see other context outside the shared input and the instructions you write for that question.

## Tips for Production Use

Write clear, specific instructions. Ambiguous wording produces lower confidence scores.

Test the same input across a few rephrased questions to confirm stable probabilities.

Batch related questions on the same input. The shared input is billed only once.

Monitor confidence. Route any answer below a threshold you choose to a review queue.

Watch the 262,144-token context limit. Large videos or many long criteria can approach it quickly.

The free tier is fine for development. Move production traffic to a paid key.

## When to Choose Decisions Over Generation

Use the Decisions API when your code needs a yes/no, a single option from a fixed set, or a rating on a fixed scale. Use a generative model when you need free-form text, explanations, or tool calls with arguments.

For agent workflows that already call Gemini 4 Hydrogen or Carbon, the Decisions API can sit in front as a fast router. See our guide on [using the Gemini 4 Hydrogen API](/blog/how-to-use-gemini-4-hydrogen-api-guide/) for the complementary generative side.

![Abstract technology visualization](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Watch a Walkthrough

This video from the Prompt Engineering channel covers the model, the three question types, and practical Python examples:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-On9ZKGiMfA"
    title="Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Decisions API removes the latency and parsing cost of generating text when all you need is a closed-set answer. Gemini Decision 1 scores up to 1,000 questions against one multimodal input and returns probabilities you can threshold in code.

Start in Google AI Studio with the free tier, then move the same calls to production. Combine it with generative models for the steps that still need open-ended text.

Official details and code samples remain on the Google Blog post and the Decisions API documentation.

## Sources

- [Gemini Decisions API: Fast, calibrated multimodal decisions](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) — Google Blog, November 11, 2026
- [Decisions API documentation](https://aistudio.google.com/docs/decisions-api) — Google AI Studio
- [Gemini Decision 1 model page](https://aistudio.google.com/docs/models/gemini-decision-1) — Google AI Studio
