---
title: "How to Use Gemini 4 Neon: Access and Thinking Levels"
description: "Learn how to access Gemini 4 Neon in the Gemini app, AI Studio and API. Set thinking levels, check pricing and apply it to coding and analysis tasks."
pubDate: 2026-11-28T17:05:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026 as the model that sits between fast everyday help (Hydrogen) and the heaviest long-horizon work (Carbon). It delivers frontier-level reasoning with quicker end-to-end task completion for complex coding, knowledge work, and science workflows. Neon is available today if you have the right plan or API access. This guide shows the exact places it appears, how to switch to it, what the four thinking levels do, and practical ways to put it to work.

Neon ranks ahead of comparable models and third overall with a score of 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level. It also lands second on the Vals Index and shows strong results on coding-agent and enterprise benchmarks. Pricing is $3 per million input tokens ($0.15 per million for cached input) and $15 per million output tokens, with a 1 million-token context window. It is not on the free tier.

## Where Gemini 4 Neon is available

Neon rolled out on 18 November 2026 across several surfaces:

- Gemini app — Google AI Pro and Ultra subscribers can select it from the model menu (labeled “Deeper analysis” or 4 Neon).
- Google AI Studio — available on the paid Gemini API tier. Pro and Ultra subscribers can also try it there.
- Gemini API — model ID `gemini-4-neon` on paid projects only.
- Google Antigravity — for paid Google AI Pro and Ultra subscribers.
- Gemini for business / enterprise surfaces — via API or model dropdown.

If you see a lock icon next to Neon, your current plan does not include it. Free and Google AI Plus accounts stay on Auto or Hydrogen.

## How to select Neon in the Gemini app

1. Open gemini.google.com or the Gemini app and sign in with a Google AI Pro or Ultra account.
2. Look at the model name at the bottom of the chat box (it often starts on Auto).
3. Tap or click it to open the picker.
4. Choose Gemini 4 Neon / Deeper analysis.
5. Set a thinking level if the option appears (Low, Medium, or High; some surfaces expose xhigh).
6. Start your chat or Task. Neon works in both Chat and Tasks modes.

The same picker appears in Tasks, so multi-step jobs can run on Neon instead of a larger model.

![Person working at a laptop with code on the screen](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## How to use Neon in Google AI Studio and the API

1. Go to aistudio.google.com and sign in.
2. Confirm billing is enabled on your project (Neon is paid-tier only).
3. Start a new chat and select `gemini-4-neon` from the model dropdown, or open the direct link Google provides with the model pre-selected.
4. For code, use the official SDK:

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Refactor this module and explain each change.",
    generation_config={"thinking_level": "high"},
)
print(interaction.output_text)
```

You can also call it through the standard generateContent path or the Interactions API. Switch the model ID from Hydrogen, Argon, or Carbon; the request shape stays the same. Explicit context caching is not supported on Neon.

## Understanding the four thinking levels

Neon offers four thinking levels that scale intelligence and token use:

- **low** — fast, concise answers for straightforward classification, extraction, or short rewrites.
- **medium** — balanced speed and reasoning for summaries, routine code edits, and document Q&A.
- **high** (default) — multi-step analysis, debugging, agent planning, and most complex tasks. Google measured its cost-per-task advantage versus Carbon at this level (about 32% lower).
- **xhigh** — deepest multi-step reasoning for the hardest engineering, analytical, or scientific workloads. This is where Neon posts its top benchmark scores.

Start at high for most serious work. Drop to medium or low for high-volume simple calls. Raise to xhigh only when the extra quality is worth the tokens. The model rejects a “minimal” setting.

## Practical tips for better results

- Attach the files you actually need. Neon reads PDFs, spreadsheets, images, audio, and video more precisely than earlier models and can pull relevant details from Gmail and Docs.
- Give clear outcome instructions. State the format you want (table, bullet list with sources, structured report) and the success criteria.
- Use it for multi-step work. Tasks and agent-style jobs finish faster and more efficiently on Neon than on larger models while staying within usage limits longer.
- Pair it with other models when useful. In Google Antigravity the Orchestrator can route hard architectural decisions to Carbon and faster execution or verification steps to Neon or Hydrogen.
- Verify critical facts. Neon grounds answers better and shows lower fabrication rates in Google’s internal testing, but still check sources on high-stakes research or legal/financial claims.
- Watch token use on long contexts. The 1 million-token window is shared across input, thinking, and output. Fresh chats for new topics keep costs predictable.

For agent workflows that already use function calling, Neon works with the same tool patterns. See our guide on [tool retrieval for large agent libraries](/blog/gemini-api-tool-retrieval-guide/) if you want to keep large tool sets lean.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JvIcxJIzonA"
    title="How to Use Gemini 4 Neon in Gemini | The AI Margin Ep 52"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Coding workspace with multiple monitors](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## When Neon is the right choice

Choose Neon when you need frontier-level reasoning on complex but high-frequency work: multi-file debugging, spreadsheet and PDF analysis, structured reports, scientific or quantitative tasks, and agent workflows that should finish quickly. Use Hydrogen for everyday speed and simple tasks. Reserve Carbon for the longest, hardest architecture or research projects where maximum depth matters more than speed or cost.

Neon is already live for Pro and Ultra subscribers in the Gemini app and for paid API users in AI Studio. Start with a clear prompt, the high thinking level, and the files that matter. Measure the quality and token use on your own tasks, then adjust the thinking level as needed.

## Sources

- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) — Google, 18 November 2026 (updated 23 November 2026)
- Google AI Studio model access and pricing pages (paid tier, model ID gemini-4-neon)
- Gemini app model picker documentation for Pro and Ultra plans

Published on Yum News.
