---
title: "How to Use Gemini 4 Carbon in Google AI Studio and API"
description: "Step-by-step tutorial to set up Gemini 4 Carbon in Google AI Studio and call the API for complex agentic coding and reasoning tasks."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

Google released Gemini 4 Carbon for developers on November 10, 2026. The model handles sustained agentic workflows, complex software engineering, multimodal knowledge work, scientific reasoning, and cybersecurity tasks. It is available now on the paid tier of the Gemini API in Google AI Studio and Android Studio.

Carbon shares the same introductory pricing as Gemini 4 Argon through November 30, 2026: $2 per million input tokens and $10 per million output tokens. After that date the price rises to $4 and $20. It uses a unified 1M-token context window and supports long decode up to 1M tokens with tunable thinking levels.

This guide shows how to access the model in AI Studio, create an API key, and make your first calls with the official SDK.

## Access Gemini 4 Carbon in Google AI Studio

Open [Google AI Studio](https://aistudio.google.com) and sign in with a Google account. Select the model dropdown and choose Gemini 4 Carbon (`gemini-4-carbon`). You can test prompts immediately in the playground.

For production use you need the paid tier. Click the API keys section, create a new key if you do not have one, and enable billing on the associated Google Cloud project. Free tier keys will not work with Carbon.

Google AI Ultra subscribers can also try Carbon in AI Studio and in Google Antigravity. For Android work, open Android Studio and point to the same model ID after you configure the Gemini API.

![Laptop displaying code on a wooden desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Set up the Google Gen AI SDK

Install the latest Google Gen AI SDK. Carbon works best with versions that support automatic continuation for long outputs.

For Python:
```bash
pip install --upgrade "google-genai>=2.34.0"
```

For JavaScript / TypeScript:
```bash
npm install @google/genai
```

Set your API key as an environment variable:
```bash
export GEMINI_API_KEY="your-key-here"
```

Never hard-code the key in source files. The SDK reads `GEMINI_API_KEY` automatically.

## Make your first API call

Use the Interactions API for new projects. Here is a minimal Python example that requests a Three.js script:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Write a three.js script that renders a realistic 3D black hole with gravitational lensing."
)
print(interaction.output_text)
```

The same call in JavaScript:

```javascript
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({});

const interaction = await client.interactions.create({
  model: "gemini-4-carbon",
  input: "Write a three.js script that renders a realistic 3D black hole with gravitational lensing.",
});
console.log(interaction.output_text);
```

The default thinking level is medium. This balances quality and speed for most coding and analysis tasks.

## Control thinking levels

Carbon lets you set thinking_level to low, medium, or high. Higher levels spend more tokens exploring hypotheses and verifying results. Use medium as the starting point and raise it only for hard debugging or scientific work.

```python
interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Analyze this payment processing pipeline for race conditions and rewrite the locks safely.",
    generation_config={
        "thinking_level": "medium"
    }
)
print(interaction.output_text)
```

Test all three levels on your evaluation set and keep the lowest level that meets quality requirements. High thinking increases both latency and cost.

## Handle long outputs with background execution

Standard synchronous calls stop at roughly 65K tokens. For longer responses set background=True and raise max_output_tokens. The service generates the answer in continuation hops.

```python
import time
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Write a complete, rigorous proof of the prime number theorem.",
    background=True,
    generation_config={
        "max_output_tokens": 262144,
        "thinking_level": "high"
    },
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

Join text across all model_output steps once the status is complete. This pattern works for large codebases, multi-file migrations, and long scientific documents.

![Multiple computer screens showing code in a neon-lit workspace](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Choose between Carbon and Argon

Both models share the same price, context window, and tool support. Carbon spends more thinking tokens per turn and is better for complex root-cause debugging, architectural redesign, dense multimodal synthesis, and security auditing. Argon is faster and cheaper for interactive coding, day-to-day feature work, and production loops that need lower latency.

If you already ship with Argon, keep it for most traffic and route only the hardest tasks to Carbon. See our earlier guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for the mobile path.

## Tips for better results

Write specific prompts that state the desired output format and constraints. For agentic work, break large jobs into smaller verified steps and feed intermediate results back into the next call.

Use system instructions when you need consistent style or schema adherence. Carbon follows strict output formats well on spreadsheets, reports, and structured code.

Monitor token usage in AI Studio or the Google Cloud console. Set budget alerts because thinking tokens count toward the output price.

Test safety ratings and handle blocked prompts gracefully in your application code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JGly6PSK5iw"
    title="Gemini 4 Argon API Crash Course"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Carbon is available today for paying developers in Google AI Studio and through the Gemini API. Create a billed API key, install the latest Google Gen AI SDK, and start with the medium thinking level. Use background execution when you need outputs beyond 64K tokens.

Argon remains the better choice for most everyday engineering work. Route only the most demanding agentic, scientific, or security tasks to Carbon while the introductory price lasts through the end of November.

## Sources

- [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) — Google Blog, November 10, 2026
- [Gemini 4 Carbon: New model for developer agents](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-4-carbon-developers/) — Google Blog, November 10, 2026
- [What's new in Gemini 4 Carbon](https://aistudio.google.com/docs/whats-new-gemini-4-carbon) — Google AI Studio documentation
- [Gemini API Developer Guide](https://aistudio.google.com/learn/gemini-4-carbon-developer-guide) — Official model setup instructions
