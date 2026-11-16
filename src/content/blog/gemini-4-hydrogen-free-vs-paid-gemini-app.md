---
title: "Gemini 4 Hydrogen in the Gemini App: Free vs Paid"
description: "How free users access Gemini 4 Hydrogen via auto selection and how paid Google AI Plus users pick it directly in the Gemini app."
pubDate: 2026-11-16T20:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "google"]
noindex: false
---

Google released Gemini 4 Hydrogen on November 12, 2026. It replaces Gemini 3.8 Flash as the fast everyday model. Free users in the Gemini app cannot select it themselves. Paid Google AI Plus and higher plans can choose it from the model menu.

This guide shows exactly how free and paid users reach Hydrogen in the Gemini app, how to verify the model that answered, and how to get better results.

## What Gemini 4 Hydrogen is

Gemini 4 Hydrogen is a high-speed model that balances performance and responsiveness for standard chat. Google positions it for rapid execution across everyday coding and agentic workflows. It finishes tasks faster than Gemini 3.8 Flash while improving instruction following and reducing fabricated claims.

It sits between Flash-Lite and the heavier Gemini 4 Argon and Carbon models. On the API it costs $1.50 per million input tokens and $7.50 per million output tokens with flat pricing across the full 1 million token context window. In the Gemini app the availability rules differ by plan.

![Person holding a smartphone showing app icons](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Free vs paid access in the Gemini app

Google’s official Gemini Apps Help page lists model availability by plan.

**No Google AI plan (free):** Auto or Flash-Lite. Most prompts use Flash-Lite for quick answers. Prompts that require more reasoning may use Hydrogen. If auto model selection is turned off, every response uses Flash-Lite.

**Google AI Plus:** Flash-Lite and Hydrogen. You can select Hydrogen directly.

**Google AI Pro:** Flash-Lite, Hydrogen, Pro, and Argon. Tasks can use Hydrogen or Argon.

**Google AI Ultra:** Flash-Lite, Hydrogen, Argon, and Carbon. Tasks can use Hydrogen, Argon, or Carbon.

Thinking levels available in the app on every plan are Low, Medium, and High. Higher models and higher thinking levels consume more of your usage allowance. When a paid plan hits its limit, chat continues with Flash-Lite.

Free users therefore depend entirely on the auto router. Paid users (starting at Google AI Plus) gain the ability to force Hydrogen for every message in a conversation.

## How free users get Hydrogen

Keep auto model selection turned on. That is the only path.

1. Open the Gemini app or go to gemini.google.com.
2. Open the menu and tap Settings.
3. Select Usage limits.
4. At the bottom, confirm the auto model selection switch is on.

With Auto on, Gemini routes each prompt to the most efficient model and thinking level. Simple questions stay on Flash-Lite. Questions that need multi-step reasoning, analysis, or careful instruction following have a chance to reach Hydrogen. There is no guarantee any specific prompt will use Hydrogen.

If you turn Auto off, free users receive only Flash-Lite for every reply.

## How paid users select Hydrogen

Google AI Plus, Pro, and Ultra subscribers can pick the model manually.

1. Open a chat in the Gemini app or on gemini.google.com.
2. At the bottom of the chat box, tap the current model name.
3. Choose Gemini 4 Hydrogen from the list.
4. Optionally set the thinking level to Low, Medium, or High. The default is Low.

The selected model and thinking level stay active for the rest of the conversation, even if you leave and return later. Locked models require a higher plan.

## Verify which model answered

Always check the model that produced a reply, especially on the free tier.

1. Open the conversation on gemini.google.com or in the app.
2. At the bottom of a response, tap More.
3. Select Show thinking steps.
4. Scroll to the bottom of the thinking steps. The model name appears there.

This is the official method listed in Google’s help page. It works for both free and paid accounts.

![Abstract data visualization representing AI processing](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Free users should write prompts that clearly need reasoning. Ask for step-by-step analysis, comparisons, or multi-part questions rather than simple lookups. This raises the chance the router selects Hydrogen.

Paid users can start with High thinking level for complex tasks and drop to Medium or Low when speed matters more. Higher thinking levels use more of the allowance.

Both groups should check “Show thinking steps” on important answers. Usage limits still apply. When you hit them, Gemini falls back to Flash-Lite.

For developers who want direct control without the app router, Gemini 4 Hydrogen is available on the free and paid tiers of the Gemini API and Google AI Studio. See our related guide on [using Gemini 4 Hydrogen in the app and AI Studio](/blog/how-to-use-gemini-4-hydrogen-app-ai-studio/).

## Official video

Google’s Gemini channel posted a short announcement when Hydrogen became available:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/M4QX9CHkaYM"
    title="Gemini 4 Hydrogen is now available to everyone as our latest model for fast, everyday help."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Free Gemini app users can receive Gemini 4 Hydrogen, but only when auto model selection decides a prompt needs it. Keep Auto on and craft reasoning-heavy prompts. Google AI Plus and higher plans let you select Hydrogen directly from the model picker and choose Low, Medium, or High thinking levels.

Verify every important answer with “Show thinking steps.” Model availability and limits can change, so check Google’s official Gemini Apps Help page for the latest table.

## Sources

- [About Gemini models](https://support.google.com/gemini/answer/18648722) — Gemini Apps Help
- [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) — Google Blog
- [Google Search gets a major upgrade with Gemini 4 Hydrogen](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/) — Google Blog
