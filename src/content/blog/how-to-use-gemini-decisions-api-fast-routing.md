---
title: "How to Use Gemini Decisions API for Fast Routing"
description: "Step-by-step guide to the Gemini Decisions API and gemini-decision-1 for low-latency yes/no, choice, and score decisions on multimodal inputs."
pubDate: 2026-11-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Agents often need a quick yes-or-no, a routing choice, or a severity score before they generate a long response. Generating and parsing free-form text for those branches adds latency and fragile logic. The Gemini Decisions API, launched on 11 November 2026, solves this with the gemini-decision-1 model.<grok type="render_inline_citation" citation_id="516" />

It evaluates up to 1,000 independent questions against one shared multimodal input in a single forward pass. The API returns calibrated probabilities and confidence scores, with zero output tokens billed. Median model compute stays between 50 and 100 ms, for 150-250 ms end-to-end latency.<grok type="render_inline_citation" citation_id="525" />

![Developer working on a laptop with code open](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## How the Decisions API works

You send one shared input and a map of typed questions. The model scores every question against that input in parallel. Questions do not see each other. Shared input can combine text, images, audio, video, and PDFs up to a 256K token context.<grok type="render_inline_citation" citation_id="526" />

Three question types cover common branching needs:

- **noul** (yes/no): Returns a probability between 0.01 and 0.99 that the condition holds, plus a confidence score.
- **choice**: Selects from 2 to 255 options and returns the winner plus normalized probabilities for every option.
- **score**: Rates against an ordered rubric of 2 to 255 levels and returns a continuous weighted score plus per-level probabilities.

Pricing is $0.10 per 1 million input tokens. The shared input is billed once, regardless of how many questions you ask. Output tokens cost nothing.<grok type="render_inline_citation" citation_id="525" />

The API lives at the v1beta endpoint and requires the google-genai SDK 3.2 or later. It works only through the Gemini Developer API in Google AI Studio; there are no open weights.

## Step-by-step: Call the Decisions API

### 1. Install the SDK and set your key

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key-here"
```

Get a key from Google AI Studio. The free tier supports prototyping.

### 2. Ask a simple yes/no question

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

The response looks like this:

```json
{
  "answers": {
    "is_damaged": { "type": "noul", "noul": 0.99, "confidence": 0.99 }
  },
  "usage": {
    "total_input_tokens": 100,
    "total_output_tokens": 0
  }
}
```

Yes/no probabilities never reach exactly 0 or 1. Set your thresholds inside the 0.01-0.99 range.<grok type="render_inline_citation" citation_id="526" />

### 3. Route with a choice question

Add criteria that describe when each option applies. The API sorts option keys alphabetically, so use clear IDs.

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input="I was charged twice for my order.",
    questions={
        "department": {
            "type": "choice",
            "instructions": "Which department should handle this request?",
            "criteria": {
                "billing": "Payments, invoices, and refunds.",
                "technical": "Problems using the product.",
                "shipping": "Delivery and tracking.",
                "other": "Anything outside these categories.",
            },
        },
    },
)

answer = result.answers["department"]
print(answer.choice, answer.confidence, answer.probabilities)
```

Always include a catch-all option such as "other". Low confidence means the input did not fit any description well. Pair the choice with a separate yes/no scope check if needed.

### 4. Score against a rubric

Criteria is an ordered list from lowest to highest severity.

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input="Export fails in Safari but works in Chrome.",
    questions={
        "severity": {
            "type": "score",
            "instructions": "How severe is this issue for the user?",
            "criteria": [
                "Cosmetic: appearance only, no lost functionality.",
                "Workaround available: a task fails, but another way works.",
                "Fully blocked: a task fails with no workaround.",
            ],
        },
    },
)
```

The returned score is a probability-weighted average of the level indices, so it can fall between integer levels.

### 5. Evaluate multiple questions on one input

Ask up to 1,000 questions against the same shared input in a single call. Latency stays nearly flat from 1 to 100 questions for contexts up to 16K tokens.<grok type="render_inline_citation" citation_id="525" />

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input=[
        {"type": "image", "uri": "https://example.com/spill.jpg", "mime_type": "image/jpeg"},
        {"type": "text", "text": "Breakroom counter check before the 9 AM client meeting."},
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
                "wipe_with_cloth": "Small counter spill with a cloth nearby.",
                "dispatch_janitorial": "Large floor hazard or broken glass.",
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

You can pass Files API URIs, public URLs, or inline data. Tune image and video resolution to control token cost.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-On9ZKGiMfA"
    title="Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Laptop and smartphone showing programming code on a wooden table](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Tips for production use

Keep questions narrow and single-purpose. Combine the returned probabilities with ordinary if-statements and weights in your code rather than asking one broad question.

Threshold on confidence. Route low-confidence cases to a generative model, a human, or a fallback path. Gemini Decision 1 is calibrated, so the confidence number is usable.

Reuse the same input across turns when possible. The shared input is billed once per request, so packing many questions into one call reduces cost.

Monitor token usage. Image and video resolution settings affect the input token count. Start with lower resolution for screening, then re-query the relevant slice at higher detail if needed.

For agent workflows that already use function calling or tool retrieval, place the Decisions API in front of the generative step. It acts as a fast control plane for routing, policy checks, and grading. See our guide on [tool retrieval for large agent libraries](/blog/gemini-api-tool-retrieval-guide/) for the complementary pattern.

## Conclusion

The Gemini Decisions API removes the need to generate and parse text for closed-set branches. You define the questions, the model returns probabilities and confidence in one pass, and your code branches directly. Start with the free tier in Google AI Studio, test the three question types on your real inputs, and measure latency and cost against your current generative path.

The model is available today through the Gemini Developer API. Ecosystem support is rolling out to OpenRouter, LangChain, Vercel AI SDK, LiteLLM, and others.<grok type="render_inline_citation" citation_id="525" />

## Sources

- Google Blog: [Gemini Decisions API: Fast, calibrated multimodal decisions](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) (11 November 2026)
- Google AI Studio: [Decisions API documentation](https://aistudio.google.com/docs/decisions-api)
- Google AI Studio: [Gemini Decision 1 model page](https://aistudio.google.com/docs/models/gemini-decision-1)
- YouTube: [Gemini Decision 1: You Don’t Need an LLM to Make a Decision](https://www.youtube.com/watch?v=-On9ZKGiMfA)
