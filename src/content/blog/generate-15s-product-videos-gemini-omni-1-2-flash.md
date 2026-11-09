---
title: "Generate 15-Second Product Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to create and edit 15-second product videos with native audio using Gemini Omni 1.2 Flash in AI Studio and Flow."
pubDate: 2026-11-09T17:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google released Gemini Omni 1.2 Flash in early November 2026. The model generates videos up to 15 seconds long with native audio and supports conversational editing. It costs 30% less than the previous version at $0.07 per second for 720p output.

This guide shows how to create product explainer clips in Google AI Studio and Google Flow. You start with a reference image or short prompt, then refine the result through follow-up messages. The process works for catalog spins, virtual try-ons, and short ads.

![Laptop setup for AI video generation](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## What changed in Omni 1.2 Flash

Omni 1.2 Flash extends maximum clip length from 10 seconds to 15 seconds. You can set duration in one-second steps between 3 and 15 seconds. Reference following improved, so product packaging, logos, and character details stay consistent across angles.

The model accepts text, images, short video clips up to three seconds, and audio cues as input. Outputs include SynthID watermarks. Draft at 360p or 720p, then upscale selected clips to 1080p or 4K.

## Start in Google AI Studio

Open Google AI Studio and select the Gemini Omni 1.2 Flash model. Upload a product photo as a reference image. Write a prompt that describes the camera move, lighting, and action.

Example prompt: "Create a 12-second product video of this running shoe spinning slowly on a clean white background. Show the sole, upper, and side profile. Add soft studio lighting and a subtle whoosh sound on each rotation."

Generate the clip. Review the result. If the shoe color shifts or the logo blurs, send a follow-up message: "Keep the exact logo and color from the reference image. Slow the spin and add a close-up of the heel."

The multi-turn session preserves context. You do not need to regenerate the entire clip for small changes.

## Use Google Flow for longer workflows

Google Flow supports the same model for creative teams. Import your reference assets, then chain generations. Start with a static frame, generate the first five seconds, then extend or edit.

Flow lets you attach style frames and motion references. For a catalog spin, provide three product angles. The model holds packaging typography and brand colors through the sequence.

![Video editing workstation](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Conversational editing tips

Keep each edit request specific. Say "change the background to a soft gray gradient" instead of "make it better." The model applies the change while preserving the rest of the scene.

For dialogue, describe speaker positions and tone. Omni 1.2 Flash produces clearer lip-sync and multi-speaker audio than the prior version. Test short lines first, then extend the clip.

Draft at lower resolution to reduce cost. A 15-second 720p clip costs about $1.05. Upscale only the final version.

## Cost and quality controls

Price is $0.07 per second at 720p. Longer clips and higher resolutions increase the total. Use the Interactions API if you need programmatic access; the documentation covers the endpoint and parameters.

Outputs carry an imperceptible SynthID watermark. Check the model card on DeepMind for known limitations and safety filters.

## Embed the official overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KUyRq7szZsM"
    title="Introducing Gemini Omni: Create Anything from Anything"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps

Test a product photo you already own. Start with a 5-second draft, then edit once. Compare the result with a full regeneration to see the cost difference.

For more on Android agent tools, see our guide to [building on-device agents with ML Kit](/blog/build-on-device-agents-with-ml-kit-agentic-api-guide/).

## Sources

- [Gemini Omni 1.2 Flash announcement](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
- [Google Cloud GA post](https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available)
- [Gemini Omni model page](https://deepmind.google/models/gemini-omni/)
- [Video generation docs](https://ai.google.dev/gemini-api/docs/video)
