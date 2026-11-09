---
title: "Conversational Product Video Editing with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to multi-turn conversational editing of 15-second product videos using Gemini Omni 1.2 Flash in Google AI Studio."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The model generates native video up to 15 seconds with audio and supports multi-turn conversational editing. You can refine a product clip by describing changes instead of regenerating from scratch.

This guide shows how to create and edit 15-second product videos in Google AI Studio using reference images and follow-up prompts. Pricing for 720p output is $0.07 per second, 30 percent lower than Omni 1.1 Flash.

## Why conversational editing matters for product videos

Product videos need consistent packaging, logos, and colors across angles. Omni 1.2 Flash improves reference adherence so faces, garments, and brand details stay stable. Multi-turn editing lets you adjust lighting, camera motion, or background without losing the product identity.

You draft quickly at lower resolution, then edit details, and upscale the final version. This keeps costs down compared with full regenerations.

![Laptop displaying video editing software on a desk](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)

## Set up Google AI Studio

1. Open aistudio.google.com and sign in with a Google account.
2. Enable billing on a Google Cloud project linked to the Gemini API if you need paid generation.
3. Select the model Gemini Omni 1.2 Flash (model ID: gemini-omni-1.2-flash).
4. Choose video output and set duration between 3 and 15 seconds.

Free limits exist in some surfaces such as Google Vids (up to three 15-second clips per month). AI Studio uses the paid API rate.

## Generate the initial product clip

Upload one or more reference images of the product. Add a short motion clip (up to 3 seconds) or audio cue if available. Write a clear prompt that specifies the product, camera movement, and duration.

Example prompt:

"Create a 12-second product video of the white ceramic mug on a wooden table. Slow 360-degree orbit, soft natural lighting, steam rising from the coffee. Keep the logo sharp and the mug shape consistent."

The model returns an MP4 with native audio. Download it or keep the interaction open for editing.

## Apply multi-turn conversational edits

Stay in the same conversation. Describe the change you want. The model uses the previous interaction ID to preserve consistency.

Example follow-ups:

- "Make the lighting warmer and add a soft shadow under the mug."
- "Change the background to a bright kitchen counter but keep the mug and logo identical."
- "Add a gentle zoom-in on the logo for the last 3 seconds."

Each edit produces a new clip that builds on the prior one. Review the output and continue if needed. This approach reduces wasted generations compared with starting over.

![Desk setup with camera, keyboard, and tablet for content creation](https://images.unsplash.com/photo-1746459001269-1dc33c7c5223?auto=format&fit=crop&w=800&q=80)

## Use the Interactions API for code workflows

Developers can call the same workflow programmatically. The Interactions API supports previous_interaction_id for multi-turn editing.

```python
from google import genai

client = genai.Client()

# Initial generation
res1 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="12-second product video of the white ceramic mug, slow orbit, soft lighting.",
    response_format={"type": "video"}
)

# Conversational edit
res2 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    previous_interaction_id=res1.id,
    input="Make the lighting warmer and keep the mug and logo identical."
)
```

The response contains the video URL or file. Check official docs for the exact response format and any upscaling options.

## Pricing and practical tips

- 720p costs $0.07 per second. A 12-second clip is about $0.84.
- Draft at 360p or 720p, edit, then upscale to 1080p or 4K if available.
- Use clear reference images with the product centered and well-lit.
- Specify duration in one-second increments from 3 to 15 seconds.
- Test consistency by requesting the same logo or packaging detail across turns.

For general multi-turn video editing, see our guide on [multi-turn video editing with Gemini Omni 1.2 Flash](/blog/multi-turn-video-editing-gemini-omni-1-2-flash/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BF7m7s8lDq8"
    title="NEW Gemini Omni Flash 1.2 is WILD!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common issues and fixes

If the product changes shape or the logo drifts, strengthen the reference by uploading a higher-quality image and repeating the key detail in every prompt. If the edit ignores the previous clip, confirm you are using the same interaction or previous_interaction_id.

Audio quality improves with Omni 1.2, but complex speech still benefits from clear prompts. For product videos, ambient sound or short narration works better than long dialogue.

## Conclusion

Conversational editing in Gemini Omni 1.2 Flash turns product video creation into an iterative process. Generate a base clip with references, then refine lighting, background, and camera moves in follow-up turns. The lower price and 15-second length make it practical for social ads and catalog spins.

Start in Google AI Studio with a single product image and a short prompt. Review the first result, then describe one change at a time. Official details remain at the Gemini Omni 1.2 Flash announcement and AI Studio documentation.

## Sources

- Gemini Omni 1.2 Flash announcement, Google Blog, 5 November 2026
- Gemini API Interactions documentation for video generation and editing
- Google AI Studio model selection and pricing pages
