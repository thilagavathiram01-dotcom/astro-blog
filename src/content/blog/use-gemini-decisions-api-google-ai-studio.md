---
title: "How to Use Gemini Decisions API for Fast Multimodal Choices"
description: "Learn to make fast yes/no, choice, and score decisions with Gemini Decision 1 in Google AI Studio. Tutorial with code for agents and apps."
pubDate: 2026-11-12T10:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "developer"]
noindex: false
---

Agents and apps often need a quick yes-or-no, a routing choice, or a severity score rather than a full written answer. Google released the Gemini Decisions API on November 11, 2026, powered by the new Gemini Decision 1 model (`gemini-decision-1`). It scores up to 1,000 closed-set questions against one shared multimodal input in a single forward pass.

Unlike generative models that produce tokens step by step, Gemini Decision 1 returns calibrated probabilities and confidence scores. End-to-end latency typically lands in the 150-250 ms range. Pricing is $0.10 per million input tokens with zero output tokens billed. Shared input is charged once no matter how many questions you attach.

This guide shows how to get started in Google AI Studio and with the `google-genai` SDK.

## Why Use a Decisions API

Most workflows only need a bounded judgment: route a ticket, flag a damaged photo, pick a tool, or grade against a rubric. Full generation adds latency and cost when you do not need the text itself.

Gemini Decision 1 processes text, images, audio, video, and PDFs (up to 256K tokens) in one prefill pass. You can mix three question types in the same request:

- **noul** (yes/no): Returns a probability between 0.01 and 0.99 plus confidence.
- **choice**: Selects among 2-255 options and returns the winner plus per-option probabilities.
- **score**: Rates against an ordered rubric and returns a weighted score plus per-level probabilities.

Confidence lets your code decide whether to act automatically or escalate to a human. Teams at Google already use it for model routing in Gemini Notebook, emoji selection, and safety checks.

If you have worked with OpenAI's Decisions API, the pattern will feel familiar. See our earlier guide on [how to use the OpenAI Decisions API](/blog/how-to-use-openai-decisions-api/) for the parallel approach on GPT-6 Luna.

![Laptop screen showing code in a dark environment](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Setup in Google AI Studio

1. Go to [aistudio.google.com](https://aistudio.google.com) and sign in.
2. Create an API key under the API keys section.
3. Install or update the SDK: `pip install -U google-genai` (version 3.2 or later) or the equivalent npm package.
4. Try the free playground and demos: Doorstep Parcels, Speed Sketch, and Find the Zoo Keeper. These show multimodal evaluation in action.

The endpoint is available on the Gemini Developer API (v1beta). A no-cost tier supports prototyping.

## Basic Yes/No Example

Here is a minimal call that checks whether an item arrived damaged.

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

The response includes a probability and confidence. Yes/no values stay between 0.01 and 0.99, so set thresholds inside that range.

## Multimodal Example with All Three Question Types

You can send an image plus text and ask mixed questions in one request. The shared input is billed only once.

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

Use the returned choice, score, and confidence values directly in your branching logic. For choice questions, options are sorted alphabetically before scoring. For score questions, the returned score is a probability-weighted average of the level indices.

![Server rack with network equipment and cables](https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80)

## Practical Tips

- Keep questions atomic. Ask one clear thing per question and compose the logic in your code.
- Add criteria when the instructions alone could be ambiguous. For noul, supply true and false descriptions. For choice and score, describe when each option or level applies.
- Check confidence before auto-acting. Route low-confidence cases to a human or a generative model.
- Batch independent questions on the same input. Latency stays nearly flat as question count grows from 1 to 100.
- Tune image and video resolution if you need to control token cost.
- Test thresholds on your own labeled examples. Calibration error is low on published benchmarks, but domain-specific data matters.

Ecosystem support is expanding to OpenRouter, LangChain, Vercel AI SDK, LiteLLM, and others.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OfsWaY82c_g"
    title="Google launches Gemini Decision 1 for fast structured decisions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to Reach for It

Use the Decisions API for tool routing, policy checks across many rules, candidate scoring, context grading, or any place where a generative call would be slower and more expensive than necessary. Google reports it is nearly 5x more cost-efficient than Gemini 3.5 Flash-Lite via the Interactions API on their shared benchmark suite.

It does not replace open-ended generation or multi-step reasoning. Pair it with a fuller model when you need explanations or creative output.

## Conclusion

The Gemini Decisions API gives developers a purpose-built primitive for fast, calibrated, multimodal decisions. One shared input, up to 1,000 questions, zero output-token charges, and sub-250 ms latency make it practical for agents and production apps.

Grab an API key in Google AI Studio, try the demos, and start with a single noul or choice question. The official docs cover full schemas, rate limits, and more examples.

## Sources

- [Gemini Decisions API announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) (Google Blog, November 11, 2026)
- [Decisions API documentation](https://aistudio.google.com/docs/decisions-api) (Google AI Studio)
- [Gemini Decision 1 model page](https://aistudio.google.com/docs/models/gemini-decision-1)
