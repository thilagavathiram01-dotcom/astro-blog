---
title: "How to Route Agents with Gemini Decisions API"
description: "Step-by-step guide to Gemini Decisions API for fast multimodal model routing and tool selection using Gemini Decision 1."
pubDate: 2026-11-12T22:00:00
heroImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Agents that call large models for every small choice waste time and money. Gemini Decisions API fixes that. Released on November 11, 2026, it lets Gemini Decision 1 score up to 1,000 closed-set questions against one shared multimodal input in a single forward pass.

You get calibrated probabilities and confidence scores in 150–250 ms end-to-end. Pricing is $0.10 per million input tokens with zero output tokens billed. Shared input is charged once no matter how many questions you ask.

This guide shows how to use it for model routing and tool selection inside agents.

## What Gemini Decisions API Actually Does

Most generative calls produce text token by token. Decision 1 does not. It evaluates bounded options—yes/no checks, multiple choice, or ordered rubrics—and returns numbers your code can branch on immediately.

Supported input types include text, images, audio, video, and PDFs up to 256K tokens total. Question types are:

- **noul**: Yes/no probability with optional true/false criteria.
- **choice**: Select from 2–255 options and receive normalized probabilities for each.
- **score**: Continuous weighted score against an ordered rubric.

Every response includes a confidence score from 0 to 1 so you can route uncertain cases to a human or a full generative model.

Google’s own systems already use it. Gemini Notebook routes queries to the right model tier. Stitch generates playable wireframes in seconds. CC picks emoji reactions from more than 200 options almost instantly.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Prerequisites and Setup

You need a Google account, an API key from Google AI Studio, and the official `google-genai` Python SDK.

1. Go to [aistudio.google.com](https://aistudio.google.com) and create an API key.
2. Install the SDK: `pip install google-genai`.
3. Set the key as an environment variable: `export GEMINI_API_KEY=your_key_here`.
4. Use API version `v1beta`.

A free tier exists in AI Studio for prototyping. Production use follows the paid rates above. The model ID is `gemini-decision-1`.

## Step-by-Step: Route a Query to the Right Model

Here is a practical example that decides whether a user request needs a fast model or a deep-reasoning one, while also checking for a policy violation.

```python
from google import genai
import os

client = genai.Client(
    api_key=os.environ["GEMINI_API_KEY"],
    http_options={"api_version": "v1beta"}
)

result = client.decisions.create(
    model="gemini-decision-1",
    input=[
        {"type": "text", "text": user_query},
        # You can also pass images, audio, or PDF URIs here
    ],
    questions={
        "needs_deep_reasoning": {
            "type": "noul",
            "instructions": "Does this request require multi-step reasoning or complex code generation?"
        },
        "safe_to_answer": {
            "type": "noul",
            "instructions": "Is this request free of policy violations or harmful intent?"
        },
        "best_model": {
            "type": "choice",
            "instructions": "Which model tier fits this request?",
            "criteria": {
                "flash": "Simple factual or short answer.",
                "pro": "Moderate reasoning or structured output.",
                "carbon": "Long-horizon agentic work or high-stakes analysis."
            }
        }
    }
)

print(result)
```

Parse the returned probabilities. If `safe_to_answer` confidence is below 0.85, escalate. Otherwise route to the highest-scoring model option. Because the input is shared, adding more routing questions costs almost nothing.

![Laptop showing code on a desk with tools nearby](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Select Tools for an Agent

Agents often face a menu of tools. Decision 1 can pick the right one (or several) in one call.

```python
result = client.decisions.create(
    model="gemini-decision-1",
    input=[{"type": "text", "text": agent_observation}],
    questions={
        "tool_choice": {
            "type": "choice",
            "instructions": "Which tool should the agent call next?",
            "criteria": {
                "search": "Needs current information from the web.",
                "code_interpreter": "Requires calculation or data analysis.",
                "file_reader": "Must read an attached document or image.",
                "none": "Can answer directly from existing context."
            }
        },
        "urgency": {
            "type": "score",
            "instructions": "How urgent is this step?",
            "criteria": [
                "Can wait.",
                "Normal priority.",
                "Immediate action required."
            ]
        }
    }
)
```

Use the winner of `tool_choice` to dispatch the call. Use the `urgency` score to set timeouts or queue priority. Confidence scores let you fall back to a generative planner when the top probability is low.

## Tips for Production Use

- Batch related questions. One request can hold up to 1,000 questions against the same input.
- Tune image and video resolution to control token cost.
- Always check confidence. Route anything below your threshold to a full model or human review.
- Question instructions must be text-only. Media belongs in the shared `input` field.
- The API rejects direct `gs://` URIs and YouTube links; upload via the Files API or use HTTPS URLs.
- Monitor latency. End-to-end stays in the 150–250 ms range for typical inputs.

For comparison with generative models, see our earlier guide on [using the Gemini 4 Carbon API](/blog/how-to-use-gemini-4-carbon-api-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JGly6PSK5iw"
    title="Gemini 4 Argon API Crash Course"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations and When Not to Use It

Decision 1 never generates free-form text. If you need a paragraph, a plan, or creative writing, call a regular Gemini model. It is also Google-hosted only; no open weights are available.

Calibration is strong on Google’s reported benchmarks, but always validate on your own data before relying on it for safety-critical decisions.

## Conclusion

Gemini Decisions API removes the latency and cost tax from the thousands of small judgments inside modern agents. Define your options, send the shared multimodal context once, and branch on the returned probabilities.

Start in the AI Studio Decisions Playground, then move the same questions into production code. The pattern is the same whether you are routing models, selecting tools, or grading content.

## Sources

- Google Blog: Gemini Decisions API announcement (November 11, 2026)
- Google AI Studio Decisions API documentation
- Official pricing and latency figures from the launch post
