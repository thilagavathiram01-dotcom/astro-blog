---
title: "How to Use Gemini 4 Neon: Setup and Thinking Levels"
description: "Step-by-step guide to accessing Gemini 4 Neon in the app, AI Studio, and API. Set thinking levels, compare to Hydrogen, and run practical coding tasks."
pubDate: 2026-11-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1762279388956-1c098163a2a8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It sits between Hydrogen for everyday speed and Carbon for the longest, hardest projects. Neon delivers frontier-level reasoning on complex coding, knowledge work, and science tasks while finishing faster and using fewer tokens than Carbon.<grok type="render_inline_citation" citation_id="345" />

If you hold a Google AI Pro or Ultra plan, or you build with the Gemini API paid tier, you can start using it today. This guide covers access, thinking levels, a practical coding example, and limits.

![Neon abstract digital landscape](https://images.unsplash.com/photo-1762279388956-1c098163a2a8?auto=format&fit=crop&w=800&q=80)

## Where Gemini 4 Neon Is Available

Neon rolled out on 18 November 2026 to four surfaces:<grok type="render_inline_citation" citation_id="345" />

- Gemini app for Google AI Pro and Ultra subscribers (model drop-down)
- Google AI Studio and the Gemini API (paid tier, model ID `gemini-4-neon`)
- Google Antigravity for paid Pro and Ultra subscribers
- Gemini for business via API or model drop-down

Free-tier users stay on Hydrogen or earlier models. Work and school accounts follow the same paid-plan rules as the consumer app.

## Step-by-Step: Switch to Neon in the Gemini App

1. Open the Gemini app or go to gemini.google.com and sign in with a Pro or Ultra account.
2. Tap or click the model name at the bottom of the chat box.
3. Select Gemini 4 Neon. A lock icon means the plan is required.
4. Choose a thinking level if the menu appears: Low, Medium, High (default), or XHigh where offered.

High is the recommended starting point for multi-step work. Low keeps replies short and cheap for classification or quick rewrites.<grok type="render_inline_citation" citation_id="352" />

## Thinking Levels and When to Use Them

Neon supports four levels: LOW, MEDIUM, HIGH (default), and XHIGH. Thinking tokens are billed at the output rate, so the level directly affects cost.<grok type="render_inline_citation" citation_id="346" />

| Task type | Suggested level | Why |
|-----------|-----------------|-----|
| Classification, short rewrites | LOW | Fast, minimal tokens |
| Summaries, routine code edits | MEDIUM | Balanced |
| Multi-step analysis, debugging, agent planning | HIGH | Default quality |
| Hardest reasoning or coding | XHIGH | Top scores, higher cost |

Start at HIGH. Drop to MEDIUM or LOW only after you confirm quality holds. Raise to XHIGH only when HIGH falls short on a specific hard problem.

![Code on computer screens with neon lighting](https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=800&q=80)

## Practical Example: Multi-File Debugging

Neon is built for repository-level work. Google notes it completes multi-file refactoring and debugging in fewer steps with cleaner edits than earlier models.<grok type="render_inline_citation" citation_id="345" />

Try this in AI Studio or the API:

1. Open Google AI Studio, select the Neon model, and enable billing if needed.
2. Paste a short description of a bug across two files (for example, a React component and its test).
3. Set thinking level to HIGH.
4. Ask: “Identify the mismatch, propose the smallest fix, and show the updated files.”

In the Gemini app you can upload the files or paste the relevant sections. Neon’s 1-million-token unified context window covers large repos or long documents without splitting the prompt.<grok type="render_inline_citation" citation_id="345" />

For developers, the model ID is `gemini-4-neon`. A minimal Python call looks like this (using the official Gen AI SDK):

```python
from google import genai
client = genai.Client()
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Refactor this function to handle empty lists and add a unit test.",
)
print(interaction.output_text)
```

Pricing is $3 per million input tokens and $15 per million output tokens, with a 95 % discount on cached input tokens.<grok type="render_inline_citation" citation_id="345" />

## Tips for Better Results

- Keep History on if you want continuity across chats; Neon respects the same privacy controls as other Gemini models. See our guide on [managing Gemini history and training controls](/blog/how-to-manage-gemini-history-and-training-controls/).
- For agent workflows, pair Neon with Hydrogen sub-agents on the Interactions API for lower-latency workers.<grok type="render_inline_citation" citation_id="351" />
- Test the lowest thinking level that still meets your quality bar before scaling cost.
- Neon supports Office and OpenDocument files natively, plus PDF, images, audio, and video.

## Limits and Safety Notes

Neon is adapted from Gemini 4 Carbon and inherits the same safety evaluations. It records Google’s lowest fabrication rate yet in internal Antigravity testing.<grok type="render_inline_citation" citation_id="345" />

It cannot move money, send emails, or take irreversible actions without explicit confirmation in Task mode. Always review code and factual claims before using them in production. Availability of XHIGH and certain file types may vary by surface and region.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NY2tvAeV4XY"
    title="Get frontier-level reasoning and fast responses with our new model Gemini 4 Neon for AI Ultra & Pro."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives Pro and Ultra subscribers and API developers a practical middle path: deep enough for complex coding and analysis, efficient enough for high-frequency use. Switch the model, set HIGH thinking for most work, and measure quality against cost on your own tasks. For earlier models, check our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Sources

- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
- [Gemini 4 Neon model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-neon)
- [Google AI Studio – Gemini 4 Neon](https://aistudio.google.com/models/neon)
- [Gemini 4 Neon Model Card](https://deepmind.google/models/model-cards/gemini-4-neon/)
