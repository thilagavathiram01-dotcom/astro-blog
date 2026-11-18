---
title: "How to Set Gemini 4 Hydrogen Thinking Levels"
description: "Learn how to choose and set low, medium, high, and xhigh thinking levels for Gemini 4 Hydrogen in AI Studio and the API for faster, better results."
pubDate: 2026-11-18T18:30:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini 4 Hydrogen on November 12, 2026 as the everyday model in the Gemini 4 family. It handles coding, agent work, and multimodal tasks at $1.50 per million input tokens and $7.50 per million output tokens. The model ships with four thinking levels so you control the balance of speed, cost, and reasoning depth.

Hydrogen defaults to high. You can drop to low or medium when latency matters and raise to xhigh for the hardest problems. This guide shows the practical steps in Google AI Studio and via the Gemini API.

## What the four levels do

Google designed the levels to scale in a predictable way. Low uses the fewest thinking tokens and returns answers fastest. Medium cuts token use further while still supporting interactive coding. High is the default and fits most coding, tool-calling, and agent loops. Xhigh adds the deepest reasoning and is new with Hydrogen; Carbon and Argon stop at high.

Official guidance recommends starting at high. Drop a level if your evaluations still pass and you need lower latency. Raise to xhigh only when high falls short on multi-step bugs or careful analysis. Using xhigh on simple extraction can increase latency and risk overthinking.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Set the level in Google AI Studio

AI Studio is the fastest place to test the levels without writing code.

1. Open [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-4-hydrogen) and sign in.
2. Confirm Gemini 4 Hydrogen is selected in the model picker.
3. Open Run settings and choose the Thinking level: Low, Medium, High, or Extra high (xhigh).
4. Run the same prompt at two levels and compare the time and quality shown in the usage panel.

Free-tier usage in AI Studio is free of charge within rate limits. Paid tier pricing applies once you move to the API key on a billed project. Changing the thinking level does not reset your quota.

## Call the levels from the API

The parameter is thinking_level. The Python SDK nests it under thinking_config. The REST body uses thinkingConfig and thinkingLevel.

Here is a minimal Python example that sets xhigh:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-hydrogen",
    contents="Audit this payment retry queue for race conditions and rewrite the lock logic.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="XHIGH")
    ),
)
print(response.text)
```

A curl example for low:

```bash
curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"parts": [{"text": "Extract the sender and date from this email."}]}],
    "generationConfig": {"thinkingConfig": {"thinkingLevel": "low"}}
  }'
```

The model rejects minimal with a 400 error. Keep max_output_tokens high enough that long thinking does not cut the final answer short. For production, route easy tasks to medium or low and reserve xhigh for the cases that fail at high.

![Chrome robot bust representing AI reasoning](https://images.unsplash.com/photo-1770249196589-36453bf42a4b?auto=format&fit=crop&w=800&q=80)

## Practical tips for choosing a level

Run a small set of your real prompts at all four levels and record latency plus whether the answer meets your quality bar. Most coding and agent work stays on high. Use medium for live UI prototyping where you want snappy responses. Save xhigh for architecture reviews or subtle race-condition bugs.

Hydrogen also pairs well with Orchestrator in Google Antigravity. Orchestrator can switch between Carbon and Hydrogen mid-session, often finishing near Carbon quality while using less quota. See our earlier post on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) for mobile integration steps.

## Watch a hands-on walkthrough

The following video tests Hydrogen in AI Studio against earlier models and shows setup and prompt results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/b6VPVxY3YCM"
    title="Gemini 4 Hydrogen Tutorial: Setup, Prompts, and My Test Results"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Hydrogen gives you a clear dial for reasoning effort. Start at the high default, measure on your own tasks, and move the level only when the numbers justify it. The four options keep everyday work fast while still letting you spend more compute on the problems that need it.

## Sources

- [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
- [Gemini thinking levels documentation](https://aistudio.google.com/docs/thinking)
- [What's new in Gemini 4 Hydrogen](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen)
