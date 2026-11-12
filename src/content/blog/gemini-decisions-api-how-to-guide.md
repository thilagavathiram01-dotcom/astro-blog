---
title: "How to Use Gemini Decisions API for Fast Choices"
description: "Step-by-step guide to Google’s Gemini Decisions API and Gemini Decision 1 for low-latency multimodal yes/no, choice, and score decisions at $0.10/1M tokens."
pubDate: 2026-11-12T11:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Google released the Gemini Decisions API on November 11, 2026. Powered by the new Gemini Decision 1 model (`gemini-decision-1`), it scores up to 1,000 closed-set questions against one shared multimodal input in a single forward pass.

Unlike standard Gemini models that generate text token by token, Decision 1 returns calibrated probabilities and confidence scores with zero output tokens billed. End-to-end latency sits at 150–250 ms. Pricing is $0.10 per million input tokens.

This makes it practical for tool selection, policy checks, model routing, and grading inside agents and apps. If you already use the OpenAI Decisions API, the pattern will feel familiar—see our [guide to the OpenAI Decisions API](/blog/how-to-use-openai-decisions-api/) for comparison.

## What the Gemini Decisions API does

You send one shared input (text, images, audio, video, or PDFs up to a combined 256K token context) plus a list of typed questions. The model scores every option in one pass and returns probabilities plus a 0–1 confidence score for each answer.

Three question types are supported:

- **noul**: Yes/no probability that a condition holds.
- **choice**: Select from 2 to 255 options, with normalized probabilities for every candidate.
- **score**: Grade against an ordered rubric, returning a continuous weighted score and per-level probabilities.

The shared input is billed once per request. Each question adds only its own instruction and criteria tokens. There is a no-cost tier in Google AI Studio for prototyping.

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Get an API key and install the SDK

1. Go to [Google AI Studio](https://aistudio.google.com/api-keys) and create an API key.
2. Install the latest Google Gen AI SDK:

```bash
pip install -U google-genai
```

Set your key as an environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

## Make your first call

The Decisions API uses the `client.decisions.create` method. Here is the official example that checks a breakroom photo for a spill, chooses a cleanup action, and scores severity:

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

The response contains probabilities and confidence scores you can branch on directly in code. Low confidence cases can route to a human reviewer or a full generative model.

## Practical use cases

Teams inside Google already use the API as a low-latency control plane:

- Gemini Notebook routes queries to the right model tier and thinking level, cutting everyday latency by up to 40%.
- Stitch’s rapid canvas generates and edits wireframes almost instantly.
- CC picks emoji reactions from more than 200 options in a fraction of a second.
- Search uses it as a safety layer for MCP tools.

You can apply the same pattern for claim triage (PDF + damage photos), support ticket routing, or content moderation.

![Abstract technology visualization](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for production

- Start in the free AI Studio tier to prototype, then move to paid billing.
- Keep questions independent; the model scores them in parallel against the shared input.
- Use confidence scores to set thresholds. Route anything below 0.8 to a fallback.
- Combine modalities freely—pair a call recording with account metadata or a scanned form with photos.
- Tune image and video resolution to control token cost.
- Monitor the 256K context limit across input plus all questions.

Ecosystem support is already rolling out on OpenRouter, LangChain, Vercel AI SDK, LiteLLM, Pydantic AI, Pipecat, LiveKit, and OpenCode. Google Cloud support is listed as coming soon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wnsjJSCyVpo"
    title="1,000 Questions in 200ms — Gemini Decisions API Explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Decisions API fills a practical gap: fast, cheap, multimodal closed-set decisions without the latency or cost of full text generation. With Gemini Decision 1 you can evaluate hundreds of criteria against rich inputs in a single call and branch on calibrated probabilities.

Try the demos in Google AI Studio (Doorstep Parcels, Speed Sketch, Find the Zoo Keeper) and consult the official Decisions API documentation for the full schema.

## Sources

- [Gemini Decisions API announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/)
- Google AI Studio Decisions API docs and playground
- Official code examples from the launch post
