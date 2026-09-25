---
title: "How to Call Gemini 3.8 Flash in Google AI Studio"
description: "Set up Gemini 3.8 Flash in the Gemini API: model ID, thinking levels, pricing, and a working Python quickstart."
pubDate: 2026-09-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google released **Gemini 3.8 Flash** on September 2, 2026, as the third Flash model in six weeks. It is now the default workhorse ID for coding and agent jobs in the Gemini API and Google AI Studio.

This guide walks through the official model ID, token limits, thinking levels, introductory pricing, and a first API call. Facts below come from Google’s model page and the September 2 blog post. Nothing here is invented benchmark marketing.

If you also ship Android UI around those agents, pair this with our walkthrough of [Android 17 App Bubbles](/blog/android-17-app-bubbles/) so a floating debug console can sit next to the app you are testing.

## What Gemini 3.8 Flash is

The public model code is `gemini-3.8-flash`. Google describes it as the most capable Flash model for long-horizon software engineering, autonomous agents, and multi-step enterprise workflows, at Flash speed and Flash cost.

Official limits, from the Gemini API model card:

- **Inputs:** text, image, video, audio, PDF
- **Output:** text
- **Input tokens:** 1,048,576
- **Output tokens:** 65,536
- **Thinking:** `low`, `medium`, `high` (default is `medium`; `minimal` returns an error)
- **Tools:** function calling, Search grounding, Maps grounding, code execution, file search, URL context, computer use (preview)

Gemini 3.8 Flash Cyber is a separate defender-only model. Do not send Cyber requests through the public `gemini-3.8-flash` ID.



![Developer laptop showing source code on a wooden desk](https://images.unsplash.com/photo-1498050108183-d9d865bb1264?auto=format&fit=crop&w=800&q=80)



## Check availability and price before you switch

3.8 Flash is generally available. Google set an introductory price that matches 3.7 Flash through December 31, 2026:

- **$0.75** per million input tokens
- **$3.75** per million output tokens (thinking tokens count as output)

On January 1, 2027 the list price becomes **$1.50** input and **$7.50** output per million tokens. Google also notes that 3.8 Flash may spend more tokens at higher thinking levels than 3.7 Flash did on the same prompt. If your bill is token-bound, start at `low` or stay on 3.7 Flash for simple classification.

Batch, Flex, and Priority inference are supported. Live API is not supported on this ID.

## Create a key in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com) and sign in.
2. Go to **API keys** and choose **Create API key**.
3. Attach the key to an existing Cloud project or let Studio create one.
4. Copy the key once. Store it as an environment variable, not in source control.

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
```

Install the current Python SDK:

```bash
pip install -U google-genai
```

## Make the first call

Google documents two request styles. The Interactions API is the recommended path for agent work. `models.generate_content` still works for a one-shot reply.

**Interactions (recommended):**

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Write a three.js script that renders a realistic 3D black hole."
)
print(interaction.output_text)
```

**generateContent:**

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents="Explain how AI works in a few words",
)
print(response.text)
```

**REST:**

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "contents": [{
      "parts": [{"text": "Explain how AI works in a few words"}]
    }]
  }'
```



![Close-up of code on a computer monitor during a programming session](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Set thinking level on purpose

Leave the default (`medium`) for most coding and planning jobs. Raise it only when the task needs multi-step reasoning. Drop it to `low` for short answers.

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input="Analyze this payment pipeline for race conditions and rewrite the locks.",
    generation_config={
        "thinking_level": "medium"
    },
)
print(interaction.output_text)
```

Do not send `minimal`. The model card states that value returns an error on 3.8 Flash.

Stream when you want tokens on screen immediately:

```python
stream = client.interactions.create(
    model="gemini-3.8-flash",
    input="Explain how AI works",
    stream=True,
)
for event in stream:
    if event.event_type == "step.delta" and event.delta.type == "text":
        print(event.delta.text, end="")
```

## What to expect from the model

Google’s September 2 post reports gains over 3.7 Flash on software engineering, agent tasks, and specialized multi-step reasoning. On DeepSWE v1.1 (long-horizon software engineering), Google says 3.8 Flash beats most larger frontier models at a fraction of the cost. It also cites 54.9% on HLE-Verified.

Treat those numbers as Google’s published scores, not as a guarantee on your repo. Computer use is built in as a preview tool, so an agent can look at a screen and click, but you still own confirmation steps for any write action.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/y52bv4iNfzU"
    title="Gemini 3.8 Flash Explained in 7 Minutes - Benchmarks, Cost, First Impressions"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Migration checklist from 3.5 or 3.7 Flash

1. Change the model string to `gemini-3.8-flash`.
2. Keep thinking at `medium` unless latency or cost spikes.
3. Remove any `minimal` thinking flag.
4. Re-test computer-use and function-calling loops. Preview computer use can still fail a long click path.
5. Watch output token volume for a week. Higher reasoning can raise the bill even at the same per-token price.
6. Plan a price review before January 1, 2027.

OpenAI-compatible clients can point at `https://generativelanguage.googleapis.com/v1beta/openai/` and set `model` to `gemini-3.8-flash`. Google still recommends the native SDK when you start a new project.

## Tips that save tokens

- Put stable project rules in a system instruction instead of repeating them every turn.
- Use context caching for long repos and style guides.
- Cap output tokens on classification jobs.
- Ground with Search only when the answer must cite the live web.
- Keep computer use off unless the task truly needs a UI.

## Conclusion

Gemini 3.8 Flash is the current Flash default for production text work: `gemini-3.8-flash`, 1M input tokens, 64k output tokens, thinking at low/medium/high. Create a Studio key, call Interactions or generateContent, and set thinking on purpose.

Switch the model ID first. Then measure token use on one real coding task before you roll the change across every agent.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google Blog
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Gemini API
- [What’s new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) — Google AI for Developers
- [Gemini 3.8 Flash](https://deepmind.google/models/gemini/flash/) — Google DeepMind
