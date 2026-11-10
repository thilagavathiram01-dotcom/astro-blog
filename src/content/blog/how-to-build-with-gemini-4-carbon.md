---
title: "How to Build with Gemini 4 Carbon in AI Studio"
description: "Step-by-step guide to using Gemini 4 Carbon via the Gemini API in Google AI Studio. Setup, thinking levels, code examples, and tips for developers."
pubDate: 2026-11-10T22:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer", "google", "ai"]
noindex: false
---

Google made Gemini 4 Carbon available to developers on November 10, 2026. The model sits above Gemini 4 Argon for tasks that need deeper reasoning, longer verification loops, and stronger performance on complex coding, multimodal knowledge work, and cybersecurity.

Carbon shares the same introductory pricing as Argon: $2 per million input tokens and $10 per million output tokens through November 30, 2026. After that the rate moves to $4 and $20. It uses a unified 1 million token context window and supports thinking levels of low, medium, and high.

If you already work with Argon, the migration path is straightforward. This guide shows the practical steps to call the model from Google AI Studio and the Gemini API.

## What Gemini 4 Carbon Changes for Developers

Carbon is built for sustained agentic workflows. It spends more thinking tokens than Argon on hard problems so it can explore options, check edge cases, and verify results before answering. Google positions Argon as the better default for most day-to-day engineering and knowledge work. Carbon is the choice when the task involves multi-step debugging, architectural design, dense document synthesis, scientific reasoning, or security analysis.

Key technical details from the official documentation:

- Model ID: `gemini-4-carbon`
- Default thinking level: medium
- Context: 1,048,576 tokens shared across input, thinking, and output
- Long decode: responses can exceed 65K tokens when you enable background execution
- Available on the paid tier of the Gemini API in Google AI Studio and Android Studio

For a comparison of the two models and earlier access details, see our [Gemini 4 Carbon access and features guide](/blog/gemini-4-carbon-access-features-guide/).

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Step 1: Set Up Access in Google AI Studio

1. Go to [aistudio.google.com](https://aistudio.google.com) and sign in with a Google account.
2. Open the API keys page and create a new key if you do not already have one. Attach it to a Google Cloud project with billing enabled for the paid tier.
3. Set the key as an environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

4. In the AI Studio playground, select the model dropdown and choose Gemini 4 Carbon. You can test prompts immediately before writing any code.

The playground also lets you export ready-to-use code snippets in Python, JavaScript, or cURL.

## Step 2: Make Your First API Call

Install the current official SDK:

```bash
pip install -U google-genai
```

Then run a basic request using the Interactions API:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Explain the difference between Gemini 4 Carbon and Argon in two sentences."
)
print(interaction.output_text)
```

The same pattern works in JavaScript with the `@google/genai` package. Always store the API key in an environment variable rather than hard-coding it.

## Step 3: Control Reasoning Depth with Thinking Levels

Thinking level is the main lever for quality, latency, and cost. Medium is the recommended default for most tasks.

| Level | Token use | Best for |
|-------|-----------|----------|
| low | Fewest | Simpler tasks, cost-sensitive work |
| medium | Balanced | Most coding and agentic use cases |
| high | Most | Hard math, science, complex debugging |

Example with an explicit thinking level:

```python
interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Review this authentication flow for race conditions and suggest a safer implementation.",
    generation_config={
        "thinking_level": "medium"
    }
)
print(interaction.output_text)
```

Run your own evaluations at all three levels and pick the lowest one that meets your quality bar. Higher levels increase both latency and token consumption.

## Step 4: Handle Longer Outputs

Synchronous responses stop at 65,536 tokens. For longer generation, set `background=True` and raise `max_output_tokens` (up to the remaining context window).

```python
import time

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Write a detailed step-by-step migration plan from a legacy monolith to microservices.",
    background=True,
    generation_config={
        "max_output_tokens": 131072,
        "thinking_level": "high"
    }
)

while interaction.status in ("in_progress", "queued"):
    time.sleep(5)
    interaction = client.interactions.get(id=interaction.id)

text = "".join(
    content.text
    for step in interaction.steps
    if step.type == "model_output"
    for content in step.content
    if content.type == "text"
)
print(text)
```

This pattern is useful for large code generation, long research summaries, or formal proofs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/O77cRoO2vVk"
    title="Google AI Studio Tutorial: From Web UI to Python Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips for Production Use

- Start with medium thinking and only move to high when evaluation shows a clear quality gain.
- Cache repeated system prompts or large context documents. Cached input tokens receive a 95% discount.
- Use structured output or function calling when you need reliable schemas. Carbon follows instructions closely on formatting.
- For cybersecurity or vulnerability work, the general API is available, but the specialized Carbon for cyber access remains through the Fairwind Program.
- Monitor token usage. Because Carbon reasons longer, the same prompt can cost more than the equivalent Argon call.

Google AI Ultra subscribers also receive Carbon inside Google Antigravity, the Gemini app, and AI Mode in Search. Android developers can start from Android Studio as well.

## Conclusion

Gemini 4 Carbon gives developers a stronger model for the hardest multi-step and reasoning-heavy tasks without changing the core API surface. The setup is the same as other Gemini models: get an API key, install the SDK, and call `gemini-4-carbon`.

Test prompts in the AI Studio playground first, then move the working examples into your codebase. For most everyday work Argon remains efficient; switch to Carbon when the extra reasoning depth pays for itself.

## Sources

- [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) — Google Blog, November 10, 2026
- [What's new in Gemini 4 Carbon](https://aistudio.google.com/docs/whats-new-gemini-4-carbon) — Google AI Studio documentation
- [Gemini 4 Carbon Model Card](https://deepmind.google/models/model-cards/gemini-4-carbon/) — Google DeepMind
