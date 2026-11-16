---
title: "Build a Support Ticket Router with Gemini Decisions API"
description: "Practical Python guide to route support tickets using Gemini Decisions API and gemini-decision-1 for fast multimodal yes/no and choice decisions."
pubDate: 2026-11-16T19:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "developer", "google"]
noindex: false
---

Support queues move faster when your code can classify intent, severity, and next action without waiting for a generative model to write a paragraph. Google launched the Gemini Decisions API on November 11, 2026, powered by the Gemini Decision 1 model. It scores closed-set questions against one shared input and returns probabilities plus a confidence score.

This guide shows how to build a practical ticket router that inspects a customer message (text plus an optional photo) and decides department, urgency, and whether human review is needed. End-to-end latency is typically 150–250 ms at $0.10 per million input tokens with zero output tokens billed. See our earlier overview in the [Gemini Decisions API how-to guide](/blog/gemini-decisions-api-how-to-guide/).

## Why a decision endpoint fits routing

Generative models excel at open-ended replies. For routing you usually need a department name, a yes/no flag, or a severity score. Parsing free text adds latency and failure modes. Gemini Decision 1 scores your candidate options in a single forward pass.

You can send text, images, audio, video, or PDFs in one shared input (up to 256K tokens combined with questions). Up to 1,000 independent questions can run against that input. Three types are available: noul (yes/no), choice (2–255 options), and score (ordered rubric).

![Laptop showing code on a wooden desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Setup

Create an API key in [Google AI Studio](https://aistudio.google.com/api-keys). Install the SDK (version 3.2 or later):

```bash
pip install -U google-genai
```

Export the key:

```bash
export GEMINI_API_KEY="your-key-here"
```

Initialize the client with the v1beta endpoint:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})
```

## Build the router

Define questions that map directly to your queue logic. The shared input holds the ticket text and an optional damage photo. Each question stays independent so the model scores them in parallel.

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input=[
        {"type": "text", "text": ticket_text},
        # optional image
        # {"type": "image", "uri": photo_url, "mime_type": "image/jpeg"},
    ],
    questions={
        "department": {
            "type": "choice",
            "instructions": "Which team should own this ticket?",
            "criteria": {
                "billing": "Payment, invoice, refund, or subscription issues.",
                "technical": "Product bugs, login problems, or feature requests.",
                "shipping": "Delivery delays, damaged goods, or tracking.",
                "account": "Profile, access, or data privacy questions.",
            },
        },
        "urgent": {
            "type": "noul",
            "instructions": "Does this require a same-day response?",
        },
        "severity": {
            "type": "score",
            "instructions": "Rate urgency on a 0-2 scale.",
            "criteria": [
                "Low – informational or non-blocking.",
                "Medium – affects one user but not critical.",
                "High – revenue impact or widespread outage.",
            ],
        },
        "needs_human": {
            "type": "noul",
            "instructions": "Should a human review this before auto-routing?",
        },
    },
)

answers = result.answers
dept = answers["department"].choice
urgent = answers["urgent"].noul > 0.7
severity = answers["severity"].score
needs_human = answers["needs_human"].noul > 0.6 or answers["department"].confidence < 0.8
```

Branch on the returned numbers. Low-confidence answers or explicit “needs_human” flags go to a reviewer queue. High-confidence results create the ticket in the chosen department with the severity score attached.

## Handling multimodal input

Pair a customer photo with the text description. The model evaluates both in the same pass. Tune image resolution (low/medium/high) to balance detail against token cost. Public HTTPS URLs or the Files API work; direct gs:// and YouTube links are not supported for decisions.create.

![Developer workspace with multiple monitors](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Production tips

- Prototype in the free AI Studio tier, then enable billing.
- Set confidence thresholds (0.75–0.85 is a common starting point) and log the raw probabilities.
- Keep question instructions short and criteria mutually exclusive for choice types.
- Batch independent tickets only when they share identical question sets; otherwise send separate requests.
- Monitor the 256K context window across the shared input plus all question tokens.
- Use the Decisions Playground in AI Studio to refine criteria before coding.

Ecosystem libraries already support the endpoint on OpenRouter, LangChain, Vercel AI SDK, LiteLLM, and others. Google Cloud availability is listed as coming soon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-On9ZKGiMfA"
    title="Gemini Decision 1: You Don’t Need an LLM to Make a Decision"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Decisions API turns routing, policy checks, and grading into a single low-latency call. For support systems you gain structured outputs you can branch on immediately, multimodal awareness, and predictable cost because output tokens are free. Start with the ticket router pattern above, adjust thresholds on real traffic, and expand the question set as your queues evolve.

Official docs and demos live in Google AI Studio. The Doorstep Parcels and Find the Zoo Keeper apps show the same scoring approach on live media.

## Sources

- [Gemini Decisions API announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) — Google Blog, 11 November 2026
- [Decisions API documentation](https://aistudio.google.com/docs/decisions-api)
- Google Gen AI SDK and Decisions Playground
