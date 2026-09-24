---
title: "How to Use Gemini 3.8 Flash in the Gemini API"
description: "Set up Gemini 3.8 Flash, pick a thinking level, and run your first generateContent call with official pricing and limits."
pubDate: 2026-09-24T11:00:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google shipped **Gemini 3.8 Flash** on September 2, 2026. It is the current workhorse model for coding, agents, and long tasks, at the same introductory price as 3.7 Flash.

This tutorial walks through a first API call, thinking levels, and the limits that change your bill. Facts come from Google's model page and the official launch post. No unofficial scores.

## What 3.8 Flash actually is

Google describes 3.8 Flash as its most intelligent Flash model for long-horizon software engineering, autonomous agents, and complex workflows. It sits in the same Flash family as 3.7, released three weeks earlier.

Official model code: `gemini-3.8-flash`.

Supported inputs: text, image, video, audio, and PDF. Output is text only. Image generation and the Live API are not supported on this model ID.

Token limits from the developer docs:

- Input: 1,048,576 tokens
- Output: 65,536 tokens

Thinking is supported at `low`, `medium`, and `high`. The `minimal` level is not supported and returns an error.

Built-in tools that Google lists as supported: caching, code execution, computer use (preview), file search, function calling, grounding with Google Maps, search grounding, structured outputs, and URL context.



![Developer laptop showing source code during an API integration session](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Price before you write a loop

Introductory API price matches 3.7 Flash:

- $0.75 per million input tokens
- $3.75 per million output tokens

Google's footnote is the part that matters for budgets. That introductory price expires on **December 31, 2026**. From **January 1, 2027**, the listed rate becomes $1.50 per million input tokens and $7.50 per million output tokens.

Google also states that 3.8 Flash works harder on hard tasks. It may run extra reasoning steps and tool calls, which uses more tokens, especially at higher thinking levels. If cost is the constraint, keep thinking on `low` or stay on 3.7 Flash, which Google says remains supported.

Consumers on Google AI Pro and Ultra can use 3.8 Flash in the Gemini app, AI Mode in Search, and Gemini in Google Sheets. This article covers the developer API path.

## Get an API key and SDK

1. Open [Google AI Studio](https://aistudio.google.com/) and create an API key.
2. Store it as `GEMINI_API_KEY`. Do not commit the key.
3. Install the current Gen AI SDK.

Python 3.9+:

```bash
pip install -q -U google-genai
```

Node.js 18+:

```bash
npm install @google/genai
```

## Run a first generateContent call

Python, from Google's getting-started docs:

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents="Explain how AI works in a few words",
)
print(response.text)
```

JavaScript:

```javascript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
  model: "gemini-3.8-flash",
  contents: "Explain how AI works in a few words",
});
console.log(response.text);
```

REST:

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

If you already call an older Flash ID, change only the model string first. Confirm the response before you rewrite prompts.

## Set a thinking level

Gemini 3 family models ignore classic sampling knobs such as `temperature`, `top_k`, and `top_p` on 3.8 Flash. Google tells developers to steer determinism with `thinking_level` and a response schema instead.

Replace integer `thinking_budget` values with a string enum: `low`, `medium`, or `high`.

Python example from Google's latest-model guide:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents=(
        "Analyze this payment processing pipeline for race conditions "
        "during retry attempts and rewrite the transaction locks safely."
    ),
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(
            thinking_level="medium"
        ),
    ),
)
print(response.text)
```

Use `low` for short answers and cheap classification. Use `medium` for code review and multi-step analysis. Reserve `high` for agent loops that must plan, call tools, and check their own work. Do not send `minimal`.



![Close-up of a code editor on a monitor used for AI-assisted software work](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## What to build first

Google's own demos for 3.8 Flash lean on long coding loops: a castle game in Antigravity, a playable DOS-style Maps clone, a topographic map from U.S. Geological Survey data, and a Three.js hardware teardown in AI Studio.

For a first project, keep the surface small:

1. One prompt that includes a repo snippet or a PDF spec.
2. `thinking_level="medium"` and structured JSON output.
3. One tool (search grounding or function calling), not five.
4. A log of input tokens, output tokens, and thinking tokens after each run.

If you ship Android product features around Gemini, pair this API work with on-device habits from the [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/). Phone-side Gemini and the developer API are different surfaces. Treat them as two products that share a name.

## 3.8 Flash Cyber is not this endpoint

Google also launched **Gemini 3.8 Flash Cyber** on the same day. That variant targets vulnerability discovery and automated patching. Access is limited to trusted defenders through the Fairwind Program: government teams, critical infrastructure operators, and software maintainers.

Do not expect `gemini-3.8-flash` to match Cyber on offensive or deep defensive scans. Google states that Cyber ships with a more permissive cyber mitigation set, which is why it is gated. The public Flash model includes safeguards against CBRN misuse and cyber offense.

Google reports internal use of Cyber by Chrome Security, Wiz, and Cloud Vulnerability Research. Those results apply to the gated model, not to the public Flash ID you call above.

## Related Gemini 3.8 audio work

The 3.8 family also includes new speech tools. Google DeepMind published a short official walkthrough of custom voices and sample-based profiles. Watch that if your app needs spoken output rather than `generateContent` text.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Text-to-speech is a separate model surface. Do not assume the Flash text ID above can clone a voice.

## Practical tips

- Pin `gemini-3.8-flash` in production. Avoid floating aliases until you retest.
- Log thinking level next to each request. A silent bump from `low` to `high` will show up as output-token spend.
- Prefer `response_schema` over free prose when another service must parse the answer.
- Computer use is preview. Keep a human confirm step on any action that spends money or changes production data.
- Re-read the January 2027 price change before you lock an annual unit-economics sheet.

## Conclusion

Gemini 3.8 Flash is the model ID to start with if you want Google's current Flash coding and agent stack without jumping to a gated Cyber build. Create a key, call `gemini-3.8-flash`, set `thinking_level`, and measure tokens on a real task before you wrap an agent around it.

Keep 3.7 Flash around for cheap, short jobs. Move 3.8 onto the paths where extra reasoning steps earn their keep.

## Sources

- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- [What's new in Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/generate-content/latest-model)
- [Getting started with generateContent](https://ai.google.dev/gemini-api/docs/generate-content/get-started)
- [Gemini 3.8 Flash on DeepMind](https://deepmind.google/models/gemini/flash/)
