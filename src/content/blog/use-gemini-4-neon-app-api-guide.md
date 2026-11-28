---
title: "How to Use Gemini 4 Neon: App, API & Thinking Levels"
description: "Step-by-step guide to access Gemini 4 Neon in the Gemini app, AI Studio, and API. Cover pricing, thinking levels, and practical tips for deeper analysis."
pubDate: 2026-11-28T18:00:00
heroImage: "https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai", "tutorials", "how-to", "developer", "ai-tools"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It sits between the fast Hydrogen model and the deeper Carbon model. Neon brings frontier-level reasoning to complex software engineering, knowledge work, and science tasks at lower cost and higher speed than larger models.

It is available now for Google AI Pro and Ultra subscribers in the Gemini app and Google Antigravity. Developers can use it on the paid Gemini API tier in AI Studio and Android Studio. Pricing is $3 per million input tokens, $0.15 per million for cached input, and $15 per million output tokens, with a unified 1 million-token context window.

This guide shows how to select Neon, set thinking levels, and apply it to real work. It builds on earlier Gemini 4 models. If you already use Hydrogen for everyday coding, see our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## What Gemini 4 Neon is good at

Neon ranks #3 on the Artificial Analysis Intelligence Index at its extra-high thinking level. It scores #2 on the Vals Index and lands on the Pareto frontier for cost versus quality. In internal tests it recorded the lowest fabrication rate of the Gemini 4 family so far.

It handles multi-file debugging, long-running agent workflows, spreadsheet analysis, PDF synthesis, and scientific reasoning. At its default high thinking level it delivers roughly 32 percent lower cost per task than Carbon while staying competitive on quality. Extra-high thinking adds deeper multi-step reasoning for the hardest problems.

Neon is adapted from Gemini 4 Carbon. It supports text, images, audio, and video input. Sampling parameters such as temperature are ignored; thinking level is the main control.

![Laptop screen showing AI code editor interface](https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=800&q=80)

## Access Neon in the Gemini app

Sign in with a Google AI Pro or Ultra account at gemini.google.com or open the Gemini app on Android or iOS.

1. Look at the model name at the bottom of the prompt box. It usually starts on Auto.
2. Tap or click the model name to open the picker.
3. Select Gemini 4 Neon (labeled Deeper analysis in some menus). A lock icon means your plan does not include it.
4. Choose a thinking level: Low for fast concise answers, Medium for balanced everyday tasks, or High (default) for multi-step analysis. Extra-high is available via the API for the hardest reasoning.
5. Attach files or images if needed. Neon reads spreadsheets, PDFs, and photos more precisely than earlier models and can pull context from connected Google apps when you allow it.

The same model and thinking level stay active for the whole conversation. Start a new chat when you change topics to avoid re-reading long history.

## Use Neon in Google AI Studio and the API

Open aistudio.google.com and sign in. Enable billing on your project because Neon runs only on the paid tier.

Select the model gemini-4-neon from the dropdown. You can test prompts in the playground, then click Get code to export a Python, JavaScript, or REST example.

For direct API calls, install the latest google-genai SDK (version 2.34.0 or later) and set your API key:

```python
from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model="gemini-4-neon",
    contents="Review this function and suggest a fix for edge cases.\ndef avg(xs): return sum(xs) / len(xs)",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="HIGH")
    )
)
print(response.text)
```

Thinking levels are LOW, MEDIUM, HIGH (default), and XHIGH. Setting thinking_budget or MINIMAL returns an error. Cached input tokens receive the 95 percent discount when you reuse context across calls.

![Close-up of programming code on a dark screen](https://images.unsplash.com/photo-1508317469940-e3de49ba902e?auto=format&fit=crop&w=800&q=80)

## Thinking levels in practice

Low works for classification, short rewrites, and extraction. Medium balances speed and quality for summaries and routine code edits. High is the default and suits multi-step debugging, agent planning, and document analysis. XHIGH is for the hardest coding or scientific problems where accuracy matters more than cost.

Google notes that Neon at high thinking already undercuts Carbon on cost per task while matching or exceeding quality on many enterprise benchmarks. Raise the level only when the task clearly needs deeper exploration.

## Tips for better results

Write prompts as complete jobs rather than single questions. Example: “Read the attached quarterly report, list the three largest cost increases with page numbers, and suggest one operational change for each.”

Attach source files early. Neon synthesizes across PDFs, spreadsheets, charts, and images inside the 1 million-token window.

For long agent runs, prefer Google Antigravity if you have a Pro or Ultra subscription. Neon can act as an orchestrator that directs cheaper Hydrogen sub-agents.

Monitor token usage. Long chats re-process history, so start fresh threads for new topics. Set spending caps in your Google Cloud project.

Provide feedback with thumbs-down when results miss the mark. Google uses this signal to improve the model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JvIcxJIzonA"
    title="How to Use Gemini 4 Neon in Gemini | The AI Margin Ep 52"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations and safety notes

Neon is not on the free tier. Free and Plus users stay on Auto or Hydrogen. Calling features and some regional availability have limits; check the Gemini app help pages for your country.

It maintains Carbon-level protections against severe misuse and prompt injection. Always review outputs before acting on financial, medical, or legal advice. Confirm critical actions such as purchases or bookings yourself.

Fabrication rates are lower than prior Gemini 4 models, but they are not zero. Ask for citations or source page numbers when accuracy matters.

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers and paid API users a practical middle ground: frontier reasoning at lower cost and higher speed than the largest models. Switch to it in the Gemini app for deeper analysis, or call gemini-4-neon from AI Studio and your own code. Start with the default high thinking level, attach relevant files, and raise the level only for the hardest tasks.

Check the official model card and Gemini API documentation for the latest pricing, rate limits, and safety details.

**Sources**

- Blog.google: Introducing Gemini 4 Neon (November 18, 2026)
- Google DeepMind: Gemini 4 Neon model card
- Google AI Studio: Gemini 4 Neon documentation
- Gemini API developer guide for thinking levels and pricing
