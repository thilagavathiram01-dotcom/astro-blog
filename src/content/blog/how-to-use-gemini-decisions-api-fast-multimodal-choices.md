---
title: "How to Use Gemini Decisions API for Fast Multimodal Choices"
description: "Learn how to call the Gemini Decisions API to score up to 1,000 yes/no, choice, and rubric questions on text, images, audio, video, or PDFs in one fast pass."
pubDate: 2026-11-12T19:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "developer", "ai", "google"]
noindex: false
---

Google released the Gemini Decisions API on November 11, 2026. It lets developers score closed-set questions against multimodal inputs without generating any answer text.

The endpoint runs on Gemini Decision 1 (gemini-decision-1). You send one shared input and up to 1,000 typed questions. It returns calibrated probabilities and confidence scores in a single forward pass.

This guide shows how to get started, the three question types, a working Python example, and practical tips for production use.

## What the Gemini Decisions API Does

Most generative models write answers token by token. Gemini Decision 1 scores candidate options directly. Your code branches on numbers instead of parsing prose.

The shared input can mix text, images, audio, video, and PDFs up to 256K tokens. Questions are independent. The input is billed once per request. Each question adds only its own instruction tokens. Output tokens are always zero.

Latency stays in the 150-250 ms end-to-end range according to Google, with model compute typically 50-100 ms. Pricing is $0.10 per million input tokens on the paid tier. A no-cost tier is available in Google AI Studio for prototyping.

Google’s own teams already use it for model routing in Gemini Notebook, rapid design iteration in Stitch, emoji selection, and safety checks on MCP tools.

![Developer workspace with multiple screens showing code and analytics](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Three Question Types

The API supports three question formats. You can mix them in one request.

**noul (yes/no):** Estimates the probability that a condition holds. You can supply optional criteria describing the true and false cases.

**choice (multiple choice):** Selects among 2 to 255 options. It returns the top choice plus normalized probabilities for every candidate.

**score (ordered rubric):** Grades an input against an ordered list of levels starting at 0. It returns a continuous weighted score and per-level probabilities.

Every answer includes a confidence score from 0 to 1. Use it to route low-confidence cases to a human or a generative model.

## Step-by-Step: Make Your First Call

### 1. Get an API key

Open Google AI Studio and create an API key. The free tier works for testing.

### 2. Install the SDK

Use version 3.2 or later of the official google-genai package:

```bash
pip install -U google-genai
```

### 3. Write the request

The input uses the same content block format as the Interactions API. Set the API version to v1beta.

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})

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

print(result)
```

The response contains probabilities and confidence for each question. Branch in code based on those values.

You can also try the official Decisions Playground, Doorstep Parcels, Speed Sketch, and Find the Zoo Keeper demos inside Google AI Studio before writing any code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/P68moBUMFOg"
    title="Gemini API: How to integrate advanced AI into YOUR apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips

Pass media through the Files API, a public or signed HTTPS URL, or inline base64. Direct gs:// Cloud Storage URIs and YouTube URLs are not supported.

Question instructions must be text only. Put all media in the shared input.

Tune image and video resolution (low, medium, high, ultra_high) to control token cost and detail.

Because the input is billed once, batch related questions in a single request whenever possible.

Check confidence scores. Low values are a signal to fall back to a generative model or human review.

Ecosystem support is already rolling out for LangChain, Vercel AI SDK, LiteLLM, Pydantic AI, Pipecat, LiveKit, OpenRouter, and OpenCode.

If you are already building agent workflows, compare this approach with the long-horizon capabilities in [Gemini 4 Carbon on Android with Firebase AI Logic](/blog/add-gemini-4-carbon-android-firebase-ai-logic/).

![Server racks in a data center representing API infrastructure](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## When to Choose Decisions Over Generation

Use the Decisions API when the outcome is a fixed set of options: route a ticket, check a policy, select a tool, grade a claim, or pick an emoji. Generation still makes sense for open-ended answers, explanations, or creative writing.

The combination is powerful. Route with Decisions in milliseconds, then call a generative model only for the subset of cases that need free-form output.

## Conclusion

The Gemini Decisions API gives developers a low-latency, low-cost primitive for closed-set multimodal decisions. You define the options, send one shared input, and receive probabilities you can act on directly.

Start in the Google AI Studio playground, copy the example above, and integrate it into routing, safety, or grading logic. The model is available today on the Gemini Developer API paid tier and free for prototyping.

## Sources

- [Gemini Decisions API: Fast, calibrated multimodal decisions](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) — Google Blog, 11 November 2026
- [Decisions API documentation](https://aistudio.google.com/docs/decisions-api) — Google AI Studio
- [Get started with Decisions API notebook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_decisions.ipynb) — Google Gemini Cookbook
