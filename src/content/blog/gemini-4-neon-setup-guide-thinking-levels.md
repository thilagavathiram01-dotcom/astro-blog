---
title: "Gemini 4 Neon: Setup Guide and Thinking Levels"
description: "Learn how to access Gemini 4 Neon, set thinking levels, and use it for coding and analysis with step-by-step instructions."
pubDate: 2026-11-22T17:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It sits between Hydrogen for everyday tasks and Carbon for the longest projects. Neon handles complex coding, document analysis, and multi-step workflows at $3 per million input tokens and $15 per million output tokens.

This guide shows how to access it, choose the right thinking level, and apply it to real work. You need a paid Google AI Pro or Ultra plan for the app and Antigravity, or a paid Gemini API project for AI Studio.

## Where You Can Use Gemini 4 Neon

Neon is available in four main places:

- Gemini app (Pro and Ultra subscribers): select it from the model menu as Deeper analysis.
- Google AI Studio and the paid Gemini API: use model ID `gemini-4-neon`.
- Google Antigravity: Pro and Ultra subscribers can run it for agent workflows.
- Gemini for business on Google Cloud.

It has a 1 million token context window shared across input, thinking, and output. There is no free API tier for Neon.

![Developer workspace with multiple screens showing code under neon lighting](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Switch to Neon in the Gemini App

1. Open the Gemini app or go to gemini.google.com.
2. Sign in with the account that has Google AI Pro or Ultra.
3. Tap or click the model name at the bottom of the prompt box.
4. Choose Gemini 4 Neon or Deeper analysis (4 Neon).
5. Pick a thinking level if the menu shows one: Low, Medium, High (default), or Extra high.

High is the default. Use Medium for interactive coding sessions where speed matters. Reserve Extra high for hard multi-step problems that High does not finish cleanly.

Start a fresh chat when you change topics. Long conversations re-read earlier turns and raise token use.

## Using Neon in Google AI Studio

1. Go to aistudio.google.com and sign in.
2. Enable billing on your Google Cloud project if it is not already active.
3. Create or copy an API key and keep it private.
4. In the playground, open the model dropdown and select gemini-4-neon.
5. Set the thinking level in the configuration panel.

A basic Python call looks like this:

```python
from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model="gemini-4-neon",
    contents="Refactor this function and explain the changes.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="HIGH")
    ),
)
print(response.text)
```

The request schema matches other Gemini 4 models, so you only change the model ID if you already use Hydrogen or Carbon.

![Person coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Thinking Levels and When to Use Them

Neon supports four levels:

- Low: fastest replies, suitable for straightforward extraction or formatting.
- Medium: good balance for interactive coding and chat.
- High (default): recommended for most complex coding, document work, and analysis.
- Extra high (xhigh): deeper multi-step reasoning for the hardest cases.

Google notes that High delivers strong results at roughly 32% lower cost per task than Carbon on several benchmarks. Extra high raises intelligence further but increases spend. Start with High and move up only when the output misses steps or repeats errors.

Sampling parameters such as temperature are ignored on Neon. Control style through the prompt itself.

## Practical Tips for Better Results

Give Neon a complete job rather than a single question. Attach the spreadsheet, PDF, or code files it needs. Ask it to list assumptions and continue rather than stop for routine clarifications.

For long agent runs in Antigravity, Neon can act as an orchestrator that directs faster Hydrogen sub-agents. It reduces redundant file reads and handles context compaction more reliably than earlier models in internal tests.

Check related posts on earlier Gemini 4 models if you need to compare Hydrogen or Carbon: [Add Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/90vN0xFeLcQ"
    title="Gemini 4 Neon Is INSANE – Is THIS Google's BEST Model Yet?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common Limits to Watch

Neon is not on the free Gemini API tier. Pro and Ultra plans have usage limits that vary by region and subscription. Cached input is heavily discounted at $0.15 per million tokens, so reuse context when possible.

In agent sessions, keep turns reasonably close together. Some users have reported cache drops after 25–30 seconds of idle time on Neon and Carbon.

## Conclusion

Gemini 4 Neon gives you frontier-level reasoning for coding and analysis without the full cost of Carbon. Access it through the app, AI Studio, or Antigravity, set the thinking level to match the task, and write clear prompts that define the finished result. Start with High, test a few real workflows, and adjust from there.

## Sources

- Google Blog: Introducing Gemini 4 Neon (November 18, 2026)
- Google Cloud documentation: Gemini 4 Neon model page and developer guide
- DeepMind model card for Gemini 4 Neon
