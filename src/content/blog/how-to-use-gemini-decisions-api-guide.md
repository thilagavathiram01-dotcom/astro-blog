---
title: "How to Use the Gemini Decisions API for Fast Choices"
description: "Step-by-step guide to the Gemini Decisions API and Gemini Decision 1 for fast yes/no, choice, and scoring tasks on multimodal inputs."
pubDate: 2026-11-14T14:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "developer"]
noindex: false
---

Google launched the Gemini Decisions API on November 11, 2026. It powers a new model called Gemini Decision 1 (gemini-decision-1). The API scores closed-set questions instead of generating text. You send one shared multimodal input plus up to 1,000 questions and receive probabilities plus confidence scores in a single forward pass.

This design targets routine branching inside agents and apps: tool selection, policy checks, model routing, and grading. Latency stays at 150-250 ms end-to-end for typical contexts. Pricing is $0.10 per million input tokens with zero output tokens billed. Shared input is charged once no matter how many questions you attach.

The model accepts text, images, audio, video, and PDFs up to a 256K token context shared across the input and questions. It does not generate prose, call functions, or support thinking modes. Your code branches directly on the returned numbers.

## Set up access in Google AI Studio

Open Google AI Studio and sign in. Navigate to the Decisions playground or generate an API key under the API keys section. The free tier supports prototyping with rate limits of about 200 requests per minute and 10,000 per day.

Install the official SDK version 3.2 or later:

```bash
pip install -U google-genai
```

Or for JavaScript:

```bash
npm install @google/genai@latest
```

Create a client that targets the v1beta endpoint, because the Decisions API lives only there:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})
```

Store the API key in an environment variable and never hard-code it.

![Analytics dashboard showing charts and metrics](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Call the API with the three question types

The three supported types are noul (yes/no), choice (2-255 options), and score (ordered rubric).

Here is a complete example that checks a breakroom photo plus a text note for a spill, the best cleanup action, and severity:

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
print(result.answers)
```

Each answer returns a probability (or weighted score) and a confidence value between 0 and 1. Route low-confidence cases to a human or a generative model fallback.

For video or audio, upload via the Files API, an HTTPS URL, or inline bytes. YouTube links and gs:// Cloud Storage URIs are rejected. Question instructions themselves must be plain text.

## Practical use cases

Teams inside Google already route queries in Gemini Notebook by classifying intent in milliseconds and sending simple requests to faster models. Stitch uses it for rapid canvas generation and instant voice or tap edits. CC picks emoji reactions from more than 200 options almost instantly.

Outside Google, common patterns include:

- Claims intake that checks a scanned form, damage photos, and a call recording against missing-evidence and priority rules.
- Support ticket routing that scores which queue fits the description.
- Policy checks that score content against multiple safety criteria in one call.
- Grading of open-ended student answers or agent outputs against a fixed rubric.

Because the shared input is billed only once, batching many questions against the same media is far cheaper than separate generative calls.

![Developers collaborating at a table with laptops](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for reliable results

Write clear, specific instructions and criteria. For choice questions, make the option descriptions mutually exclusive. For score questions, order the rubric levels from lowest to highest.

Start with a small number of questions and inspect the returned probabilities. Confidence scores help you decide when to escalate. On benchmarks covering routing, ranking, and multimodal understanding, Gemini Decision 1 leads most tests and shows the lowest calibration error.

If you already call other Gemini models, the Decisions endpoint sits alongside the regular Interactions API. Use Decision 1 only when the answer set is closed and known in advance. For open generation or multi-step reasoning, stick with models such as Gemini 4 Hydrogen. See our guide on [using the Gemini 4 Hydrogen API](/blog/how-to-use-gemini-4-hydrogen-api-guide/) for those workflows.

Monitor usage in AI Studio. The free tier is fine for experiments; move production traffic to a billed project so you control data retention.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-On9ZKGiMfA"
    title="Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Decisions API and Gemini Decision 1 give developers a fast, low-cost way to make closed-set judgments over text, images, audio, video, and PDFs. Set up a v1beta client, define clear noul, choice, or score questions, and branch on the returned probabilities and confidence scores. Batch questions against shared media to keep costs minimal.

Official details and demos live on the Google blog announcement and the AI Studio Decisions documentation. Check the model card for the latest limits and supported formats.

**Sources**

- Blog.google: Gemini Decisions API: Fast, calibrated multimodal decisions (November 11, 2026)
- Google AI Studio: Decisions API documentation and playground demos
- Google for Developers announcement and ecosystem integrations notes
