---
title: "How to Use Gemini 4 Neon: Setup and Thinking Levels"
description: "Step-by-step guide to accessing Gemini 4 Neon, selecting thinking levels from low to xhigh, and using the gemini-4-neon model for coding and analysis."
pubDate: 2026-11-20T10:00:00
heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It sits between the fast Hydrogen model and the deeper Carbon model. Neon brings frontier-level reasoning to complex software engineering, knowledge work, and science tasks while finishing faster and at lower cost per task than larger alternatives.

The model uses the ID gemini-4-neon. It supports a 1 million-token context window shared across input, thinking, and output. Pricing is $3 per million input tokens and $15 per million output tokens on the paid Gemini API tier. Cached input drops to $0.15 per million. There is no free API tier.

This guide shows how to access Neon, choose the right thinking level, and run your first prompts in Google AI Studio or the Gemini app.

## Where Gemini 4 Neon is available

Neon rolled out on November 18 in several places:

- Gemini API paid tier in Google AI Studio
- Gemini for business (API and model dropdown)
- Google AI Pro and Ultra subscribers in Google Antigravity
- Google AI Pro and Ultra subscribers in the Gemini app

Work and school accounts may have different access rules. Check your plan status in the Gemini app or AI Studio if the model does not appear in the dropdown.

For everyday tasks that do not need Neon's depth, our earlier guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) covers the faster, lower-cost option.

![Person typing code on a laptop next to a plant](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Access Neon in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com/) and sign in with a Google account that has API billing enabled.
2. Start a new chat prompt.
3. Select Gemini 4 Neon from the model picker. The model name is gemini-4-neon.
4. In Run settings, set the Thinking level. Options are low, medium, high (default), and xhigh.
5. Enter your prompt and run it.

AI Studio also lets you toggle tools such as Google Search grounding and structured output. Grounding is on by default in many views. Turn it off when you want answers based only on the content you upload.

## Select the right thinking level

Neon supports four thinking levels. Higher levels spend more tokens on internal reasoning before writing the final answer. Thinking tokens are billed at the output rate.

Google recommends:

- **low** for high-throughput chat and simple tasks. Lowest latency and cost.
- **medium** for interactive coding, quick prototypes, and latency-sensitive tool calls.
- **high** (default) for most complex coding, agentic workflows, multimodal knowledge work, and multi-step instruction following.
- **xhigh** for the hardest multi-step engineering, analysis, and scientific problems where high is not enough.

Start with high. Lower the level if responses are slower or more expensive than needed. Raise it only when quality falls short on difficult tasks. Setting the level to minimal returns an error on Neon.

In the Gemini app, Pro and Ultra users select Neon from the model dropdown and can adjust the thinking level for the chat.

![Laptop and monitor showing programming code](https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80)

## Call Neon from the Gemini API

Use the model ID gemini-4-neon on the paid tier. Here is a minimal Python example with the official Google GenAI SDK:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Find the race condition in this retry queue and suggest a fix.",
    generation_config={"thinking_level": "high"},
)
print(interaction.output_text)
```

For the generateContent endpoint, place the level inside thinkingConfig:

```json
{
  "contents": [{"parts": [{"text": "Audit this payment retry queue for race conditions."}]}],
  "generationConfig": {
    "thinkingConfig": {"thinkingLevel": "medium"}
  }
}
```

Custom temperature, top_p, and top_k values are ignored. Do not set thinking_budget or thinking_level to MINIMAL.

## Practical examples

**Multi-file debugging.** Upload a repository archive or paste several files. Ask Neon at high or xhigh to locate a bug across modules and propose a surgical patch. The 1M context window helps when the relevant code spans many files.

**Knowledge work.** Feed spreadsheets, PDFs, and charts. Request a structured summary or comparison. Neon ranks highly on legal research, tax, and chart-reading benchmarks according to Google's launch notes.

**Agentic coding.** In Google Antigravity, Neon can act as an orchestrator that directs parallel Hydrogen subagents. This is useful for long-running tasks that benefit from both depth and speed.

Always review outputs. Neon improves on fabrication rates relative to earlier models, but it can still make mistakes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It's a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

Write clear prompts that state the desired output format and any constraints. For long tasks, break them into steps and feed intermediate results back into follow-up turns.

Monitor token usage. Higher thinking levels increase output tokens. At the default high level, third-party evaluations show Neon often costs less per completed task than larger models while matching or exceeding their quality on many coding and analysis benchmarks.

If you are migrating from Gemini 4 Carbon or Argon, change the model ID and explicitly set thinking_level if you previously relied on a medium default. Remove any unsupported sampling parameters.

## Conclusion

Gemini 4 Neon is available now for Pro and Ultra subscribers in the Gemini app and for paid API users in AI Studio and Antigravity. Use the model ID gemini-4-neon, start at the default high thinking level, and adjust only when needed. The combination of a 1M context window, controllable reasoning depth, and competitive cost per task makes it a practical choice for complex coding and knowledge work.

Check the official Google blog post and Gemini API documentation for the latest availability, pricing, and model card details.

**Sources**

- Blog.google: Introducing Gemini 4 Neon (November 18, 2026)
- Google Cloud documentation: Gemini 4 Neon model page
- Gemini API release notes (November 18, 2026)
- Google AI Studio model picker and run settings
