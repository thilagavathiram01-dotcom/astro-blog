---
title: "How to Use Gemini 4 Neon Thinking Levels in the App"
description: "Step-by-step guide to select Gemini 4 Neon and set Low, Medium, High, or Extra High thinking levels in the Gemini app for better results."
pubDate: 2026-11-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It sits between Hydrogen for everyday tasks and Carbon for the hardest projects. Pro and Ultra subscribers can pick it in the Gemini app as Deeper analysis (4 Neon).

Thinking levels control how long the model reasons before answering. Neon supports Low, Medium, High (default), and Extra High. Higher levels improve accuracy on complex work but use more tokens and time.

This guide shows how to select Neon and set the right thinking level in the Gemini app.

## Who can access Gemini 4 Neon

Neon is not on the free plan. Google AI Pro and Ultra subscribers see it in the model picker in the Gemini app and on gemini.google.com. Developers access it via the paid Gemini API in AI Studio with the model ID gemini-4-neon.

Confirm your subscription under Gemini settings or at gemini.google.com/upgrade. If Neon is locked, upgrade or check that your account is in a supported region.

## Select Gemini 4 Neon in the app

Open the Gemini app on Android or iOS, or go to gemini.google.com in a browser. Sign in with the Google account that has Pro or Ultra.

Look at the model name at the bottom of the prompt box. Tap or click it to open the picker.

Choose Deeper analysis (4 Neon). The list also shows Auto, Everyday help (4 Hydrogen), and Code and complex work (4 Carbon). Auto routes simple requests to faster models and harder ones to deeper models.

The picker remembers your last choice for the current chat.

![Gemini app model picker on a phone screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Set the thinking level

After selecting Neon, open the thinking level control. It appears near the model name or in the advanced settings panel, depending on the app version.

Options are:

- Low: Fast, concise answers for quick checks.
- Medium: Balanced for interactive work and most coding.
- High: Default. Strong reasoning for complex tasks.
- Extra High (xhigh): Deep multi-step analysis for the hardest problems.

Google notes that if you select a model without choosing a level, it defaults to Low in some surfaces. Explicitly set High or Extra High when accuracy matters.

Higher levels increase token use. On the API, Neon costs $3 per million input tokens and $15 per million output tokens. Cached input drops to $0.15 per million.

## When to use each level

Use Low or Medium for email drafts, simple summaries, or short coding fixes. Switch to High for research that spans multiple documents, debugging across files, or structured reports.

Extra High fits long-horizon work such as analyzing a full codebase, cross-checking financial statements, or multi-step scientific reasoning. Google positions Neon for complex, high-frequency workflows that need frontier quality without Carbon's full cost.

Start a fresh chat when you change topics. Long conversations re-process context and raise costs.

## Practical steps for a complex task

1. Open Gemini and select Deeper analysis (4 Neon).
2. Set the thinking level to High.
3. Upload relevant files or paste long context. Neon supports a 1 million token context window shared across input, thinking, and output.
4. Write a clear prompt that states the goal, constraints, and desired output format.
5. Review the response. If steps look shallow, raise the level to Extra High and re-run the same prompt.
6. Save useful outputs to Google Docs or Drive for later reference.

For agent-style work, switch to Task mode. Neon can power Tasks for multi-step jobs once you select it.

![Laptop with code on screen for AI coding session](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Give the model explicit instructions about length, format, and sources. Neon follows multi-step directions well when the prompt is structured.

Use the 1 million token window for large PDFs, spreadsheets, or code repositories. Ask it to extract tables, compare sections, or flag inconsistencies.

Check usage in your Google AI plan dashboard. Pro and Ultra include higher limits than free tiers, but Extra High still consumes more of your quota.

If responses feel too brief, add "provide a detailed, step-by-step analysis" to the prompt. Neon improves on fabrication rates compared with earlier Gemini 4 models.

Pair Neon with existing tools. For everyday coding, many users still prefer Hydrogen. For the absolute hardest long-horizon projects, Carbon remains the top option. See our guide on [using Gemini 4 Hydrogen for everyday coding](/blog/how-to-use-gemini-4-hydrogen-for-everyday-coding/) for comparison.

## Watch a demo

The following video from Prompt Engineering walks through real outputs from Gemini 4 Neon, including coding, 3D generation, and thinking level choices.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers frontier-level reasoning at a lower cost than larger models. Selecting it in the app takes one tap, and the thinking level slider lets you match depth to the task.

Set High for most complex work and Extra High only when the problem needs every step checked. Start with a clear prompt, use the large context window, and review outputs before acting on them.

Official details are on the [Gemini 4 Neon announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) and the [Gemini API model page](https://aistudio.google.com/docs/models/gemini-4-neon).

## Sources

- Google Blog: Introducing Gemini 4 Neon (November 18, 2026)
- Google AI Studio: Gemini 4 Neon model documentation
- Gemini app model picker behavior reported by 9to5Google (November 2026)
