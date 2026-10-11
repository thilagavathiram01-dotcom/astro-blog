---
title: "How to Generate Fast Images with Nano Banana 2 Lite"
description: "Step-by-step guide to generate and edit images quickly with Google's Nano Banana 2 Lite in the Gemini app and AI Studio."
pubDate: 2026-10-11T05:41:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google"]
noindex: false
---

Google's Nano Banana 2 Lite delivers text-to-image results in about four seconds. It targets creators who need rapid drafts without high costs. The model, officially Gemini 3.1 Flash-Lite Image, sits in the Nano Banana family as the speed specialist.

You can access it today in the Gemini app and Google AI Studio. It supports generation and multi-turn editing while keeping character consistency strong for its class. Output stays at 1K resolution. For higher detail, switch to the full Nano Banana 2 model.

## What Makes Nano Banana 2 Lite Different

Nano Banana 2 Lite prioritizes latency and price over maximum resolution. Google lists roughly $0.034 per 1K image on standard pricing. It handles text prompts, reference images, and sequential edits in one conversation.

Supported aspect ratios include 1:1, 16:9, 9:16, and several others. The model always embeds a SynthID watermark. It does not support Search grounding, so use the standard Nano Banana 2 when you need web-informed visuals.



![Person working on a laptop with code on the screen](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)



## Generate Images in the Gemini App

Open gemini.google.com or the Gemini mobile app. Sign in with your Google account. Select the model picker and choose Flash-Lite if available. This routes image requests to Nano Banana 2 Lite for faster results.

Type a clear prompt. Start with the main subject, then style, lighting, and composition. Example: "A minimalist ceramic coffee mug on a wooden table, soft morning light, product photography style."

Press enter. The image appears in seconds. Tap the result to download or refine it. Follow up in the same chat with edits such as "change the background to a bright kitchen" or "add a steam trail." The model maintains consistency across turns.

You can also upload a reference photo and describe changes. The free tier includes daily limits. Upgrade to Gemini Advanced for higher volume if you hit them.

## Use Google AI Studio for More Control

Go to aistudio.google.com and sign in. Start a new prompt. In the model selector, pick Gemini 3.1 Flash-Lite Image (Nano Banana 2 Lite).

Set the aspect ratio in the settings panel before you generate. Supported options cover common social and presentation formats. Attach up to 14 reference images if you need style transfer or multi-image composition.

Enter your prompt and run it. AI Studio shows the generated code you can copy for API use later. This workspace works well for testing prompt variations before you build them into an app.



![Close-up of a laptop screen showing lines of code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Prompt Tips That Improve Results

Lead with the core subject and medium. "Product shot of a blue running shoe, studio lighting, white background" works better than a long list of conditions.

Specify the aspect ratio in the prompt if the interface does not force it. Request "16:9 cinematic" or "1:1 square social post."

For edits, reference the previous image clearly. "Keep the same character and pose, but change the jacket color to red" preserves identity better than a full rewrite.

Test short prompts first. Nano Banana 2 Lite responds quickly, so iterate in the same conversation rather than starting over.

## Compare Options and When to Switch Models

Nano Banana 2 Lite suits bulk ideation, thumbnail drafts, and in-app generation where speed matters most. Move to Nano Banana 2 when you need 2K or 4K output or Search-grounded accuracy.

Check the official Gemini API docs for current pricing and token limits. The model code is gemini-3.1-flash-lite-image. For API integration, see related guides on the site such as the [Gemini Nano Banana 2.1 Image API setup](/blog/gemini-nano-banana-2-1-image-api-setup-and-costs/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lfE-csUyPF4"
    title="Nano Banana AI Tutorial | How to Use Google’s Free Tool (Step-by-Step)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google DeepMind: Nano Banana 2 Lite model page
- Google AI for Developers: Gemini 3.1 Flash Lite Image documentation
- Google blog: Start building with Nano Banana 2 Lite and Gemini Omni Flash (June 30, 2026)
