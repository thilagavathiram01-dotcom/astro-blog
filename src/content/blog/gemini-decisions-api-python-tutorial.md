---
title: "How to Use Gemini Decisions API for Fast Choices"
description: "Step-by-step Python tutorial for Google's Gemini Decisions API. Score yes/no, choice, and rubric questions on text, images, audio, and PDFs at $0.10 per million tokens."
pubDate: 2026-11-16T16:00:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "how-to"]
noindex: false
---

Google released the Gemini Decisions API on November 11, 2026. It lets developers score closed-set questions against multimodal inputs without generating any text. The model returns calibrated probabilities and confidence scores in 150-250 ms. Input costs $0.10 per million tokens. Output tokens are free.

This changes how teams build routing, policy checks, and grading systems. You no longer need a full generative model for every yes/no or ranking decision. One shared input can answer up to 1,000 independent questions in a single request.

The API is available today in Google AI Studio and through the Gemini Developer API. Free-tier rate limits apply for prototyping. Paid usage follows the published pricing.

## What the Decisions API actually does

Gemini Decision 1 (model ID `gemini-decision-1`) evaluates three question types in one forward pass:

- **noul**: Yes/no probability with optional true/false descriptions.
- **choice**: Selects one option from 2 to 255 candidates and returns probabilities for all.
- **score**: Rates against an ordered rubric and returns a weighted score plus per-level probabilities.

Every answer includes a confidence value from 0 to 1. Your code can route low-confidence cases to a human or a generative model. The input format matches the Interactions API, so you can send text, images, audio, video, or PDFs.

Google reports median model compute of 50-100 ms. End-to-end latency stays nearly flat even with 100 questions. Compared with Gemini 3.5 Flash-Lite on the same benchmarks, the Decisions API is nearly 5x cheaper because no output tokens are billed.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)

## Set up your environment

Create a Google AI Studio API key. Install the official SDK (version 3.2 or later):

```bash
pip install -U google-genai
```

Export the key:

```bash
export GEMINI_API_KEY=your_key_here
```

The endpoint lives only on the v1beta surface. Always pass `http_options={"api_version": "v1beta"}` when creating the client.

## Make your first decision call

Here is a minimal Python example that checks whether a customer message describes a damaged item:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})

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

The response object contains an `answers` map and a `usage` block. `total_output_tokens` is always 0. Only the shared input plus the instruction and criteria tokens for each question are billed.

## Combine multiple question types

You can ask several questions about the same input. This example mixes a yes/no check, a routing choice, and a severity score:

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input="The blue mug I ordered on Monday arrived cracked on Wednesday.",
    questions={
        "is_damaged": {
            "type": "noul",
            "instructions": "Did the item arrive damaged?",
            "criteria": {
                "true": "The item is broken, cracked, or dented.",
                "false": "The item arrived intact.",
            },
        },
        "queue": {
            "type": "choice",
            "instructions": "Which support queue should handle this message?",
            "criteria": {
                "billing": "Payment, invoice, or refund questions.",
                "replacements": "Damaged, missing, or wrong items.",
                "general": "Product questions and account updates.",
            },
        },
        "severity": {
            "type": "score",
            "instructions": "Rate how severe the issue sounds.",
            "criteria": [
                "Minor inconvenience.",
                "Noticeable problem that needs attention.",
                "Customer is blocked or angry.",
            ],
        },
    },
)
```

Put the full question text inside `instructions`. The model never sees the dictionary keys. Write short, distinct descriptions for every option or rubric level.

![Laptop screen showing syntax-highlighted source code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Handle multimodal inputs

Pass a list of content blocks for images, audio, or PDFs. The shared input is processed once:

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
        # additional questions...
    },
)
```

Inline base64 data is limited to 100 MB per request (50 MB for PDFs). Public HTTPS URLs are capped at 15 MB each. YouTube links and `gs://` URIs are not supported.

## Production tips

Treat every input as untrusted. Keep a second check or human review on high-stakes actions. Use the confidence score to decide when to fall back to a generative model or a person.

Start with clear criteria. Vague option descriptions produce lower confidence and more borderline results. Split independent checks into separate questions so you can evaluate up to 1,000 of them in one call.

Monitor token usage. The shared input is billed only once, but each question adds its own instruction and criteria tokens. Test edge cases (empty input, ambiguous media, contradictory questions) before shipping.

If you are already calling generative models from Android, see our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/). Hydrogen handles open-ended generation while the Decisions API handles the fast closed-set routing that often precedes it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-On9ZKGiMfA"
    title="Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Decisions API gives developers a low-latency, low-cost primitive for the decisions that used to require either custom classifiers or full generative calls. It is available now through Google AI Studio and the Gemini API. Start with the free tier, write precise question criteria, and measure confidence before you route real traffic.

Official documentation and the playground are the best places to confirm the latest limits and pricing.

**Sources**

- Blog.google: Gemini Decisions API announcement (November 11, 2026)
- Google AI Studio: Decisions API documentation and playground
- Google Gen AI SDK release notes (v3.2+ required)
- Prompt Engineering YouTube: Gemini Decision 1 walkthrough
