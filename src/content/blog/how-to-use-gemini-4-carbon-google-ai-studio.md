---
title: "How to Use Gemini 4 Carbon in Google AI Studio"
description: "Step-by-step guide to accessing Gemini 4 Carbon in Google AI Studio, creating an API key, testing prompts, and calling the model via the Gemini API."
pubDate: 2026-11-11T15:30:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "google", "ai"]
noindex: false
---

Google released Gemini 4 Carbon to paying developers on November 10, 2026. The model targets complex, multi-step coding, scientific reasoning, and cybersecurity tasks that benefit from deeper exploration than faster models like Gemini 4 Argon.

Carbon supports a unified 1 million token context window shared between input, thinking, and output. Introductory pricing matches Argon at $2 per million input tokens and $10 per million output tokens through November 30, 2026. After that the rate doubles.

This guide shows how to access Carbon in Google AI Studio, enable billing, test it in the Playground, and call it from code.

## What Gemini 4 Carbon offers developers

Carbon is Google's strongest publicly available frontier model for long-horizon agentic work. Independent benchmarks place it at the top of CursorBench 4.0, Perplexity WANDR, and Zapier AutomationBench at more than twice the cost efficiency of the next external model.

It handles text, images, audio, video, and PDFs. Thinking levels (low, medium, high) let you trade latency for reasoning depth. Long decode continuation allows outputs past the previous 64K token limit, up to the full 1M window.

For Android client apps, see our guide on [adding Gemini 4 Carbon with Firebase AI Logic](/blog/add-gemini-4-carbon-android-firebase-ai-logic/).

![Developer workspace with laptop and code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google account. Carbon requires the paid Gemini API tier. There is no free API quota for this model.

Link a billing account in Google Cloud. New keys created in AI Studio after May 28, 2026, are auth keys by default. Restrict keys by IP or referrer when possible.

Google AI Ultra subscribers can also use Carbon in the Gemini app, AI Mode in Search, and Google Antigravity without separate API billing for those surfaces.

## Access Google AI Studio and select the model

Open aistudio.google.com and sign in. Accept the terms if prompted.

In the Playground, open the model selector. Choose gemini-4-carbon. The interface shows the model name and available thinking levels.

You can also start from a direct link that preloads Carbon. Test a simple prompt first to confirm access and billing status.

## Create an API key and enable paid access

Click Get API key in the left menu or visit aistudio.google.com/apikey.

Create a new key. Bind it to a Google Cloud project with billing enabled. Copy the key and store it as an environment variable (GEMINI_API_KEY or GOOGLE_API_KEY).

Never commit keys to source control. Rotate them if exposed. Set budget alerts in the Google Cloud console so unexpected usage does not generate large charges.

![Close-up of code editor on a laptop](https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80)

## Test prompts in the Playground

Paste a coding or analysis task into the prompt box. Start with medium thinking level. Raise it to high only for root-cause debugging or multi-file refactors.

Upload images or PDFs to test multimodal input. Review the response and token counts shown in the interface.

Save useful prompts as templates. The Build mode lets you generate full web or Android app scaffolds when you need more than a single response.

## Call Carbon from Python

Install the official SDK:

```bash
pip install google-genai
```

Set your API key in the environment. Then run:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Review this Python function for security issues and suggest a fixed version with input validation.",
    generation_config={"thinking_level": "medium"}
)
print(interaction.output_text)
```

The Interactions API is the recommended path for new projects. GenerateContent remains supported. Use streaming for long outputs. Check safety ratings before displaying results.

## Configure thinking levels and long outputs

Thinking levels control how much intermediate reasoning the model performs:

- low: fastest, lowest cost, suitable for classification or simple extraction
- medium (default): balanced accuracy for most coding and analysis
- high: deepest reasoning for complex debugging, architecture, and formal tasks

Higher levels increase latency and token spend. Carbon can continue generating past 64K tokens when you enable long decode. Monitor total tokens because the 1M window is shared.

## Tips for reliable results

Write prompts that specify output format, constraints, and success criteria. For multi-step work, break the task into stages and feed intermediate results back.

Use function calling or tools when the task needs external data. Test the same prompt on Argon first; switch to Carbon only when the extra depth improves the outcome enough to justify the cost.

Review the official safety and security report before using Carbon on sensitive codebases. Enable App Check or equivalent protections if you later expose the model through a client app.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lQ6wwLHqDAg"
    title="Gemini 4 Carbon Is Finally Here, And It's a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Carbon is available today for paying developers in Google AI Studio and the Gemini API. Setup requires a billed Google Cloud project, an API key, and selection of the gemini-4-carbon model name.

Start in the Playground, then move to the official SDK for production calls. Use medium thinking as the default and raise it only for the hardest tasks. Track costs closely while the introductory pricing window remains open through the end of November.

**Sources**

- Blog.google: Gemini 4 Carbon is now available (November 10, 2026)
- Google AI Studio developer guide for Gemini 4 Carbon
- Gemini API pricing page and model documentation
