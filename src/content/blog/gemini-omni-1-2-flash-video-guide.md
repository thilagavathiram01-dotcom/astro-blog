---
title: "How to Generate Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with Gemini Omni 1.2 Flash in Google AI Studio and the API. Includes pricing and tips."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1758390851031-bcf34075ca61?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "gemini", "tutorials", "how-to", "google"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native audio. It costs 30% less than the previous version at $0.07 per second for 720p output.

You can access it in Google AI Studio, the Gemini API, Google Cloud, Flow, Google Vids, and the Gemini app for subscribers. This guide shows practical ways to start generating videos today.

## What changed in Omni 1.2 Flash

Omni 1.2 Flash builds on the earlier Omni Flash model. Clip length increased from 10 seconds to 15 seconds. You can choose exact durations from 3 to 15 seconds in one-second steps.

Reference following improved. Character faces, clothing details, product packaging, and brand colors stay consistent across shots. Conversational editing lets you refine a clip turn by turn without regenerating everything.

Speech sounds more natural with clearer lip-sync and support for multiple speakers. Camera moves can stay continuous with fewer jump cuts. Draft at lower resolution then upscale the best results to 1080p or 4K.

![Filmmaker operating a professional video camera rig](https://images.unsplash.com/photo-1758390851031-bcf34075ca61?auto=format&fit=crop&w=800&q=80)

## How to generate videos in Google AI Studio

Google AI Studio is the fastest place to test the model.

1. Open aistudio.google.com and sign in with a Google account that has billing enabled. Video generation requires paid credits.
2. Start a new prompt or open the Playground.
3. Select the model gemini-omni-1.2-flash from the model picker.
4. Write a clear prompt. Include subject, action, setting, camera movement, and duration. Example: "A 12-second cinematic shot of a product spinning on a wooden table under soft window light, slow orbit camera, realistic materials."
5. Add reference images if you have them. Upload product photos or character sheets to guide appearance.
6. Choose resolution. Start with 720p to balance cost and quality. Generate and review.
7. Use follow-up messages to edit. Type instructions like "Change the background to a modern kitchen while keeping the product identical."

The model returns video with audio. Download the file or continue editing in the same session.

## Using the Gemini API

Developers can call the model programmatically. The model ID is gemini-omni-1.2-flash.

Set up a Google Cloud project with the Gemini API enabled and billing configured. Use the official Gen AI SDK in Python or the REST API.

Basic workflow:
- Send a text prompt with optional image or video references.
- Specify duration and resolution in the request parameters.
- Poll for completion if using asynchronous generation.
- Retrieve the video file and any SynthID watermark metadata.

Google documentation at aistudio.google.com/docs/omni covers the exact request format. Pricing follows the $0.07 per second rate for 720p. Drafting at 360p costs less before you upscale selected clips.

For Android apps that need to display or trigger such videos, check our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Film crew working with a professional camera on set](https://images.unsplash.com/photo-1781127445140-969397fa151c?auto=format&fit=crop&w=800&q=80)

## Cost and workflow tips

A 15-second 720p clip costs about $1.05. Generating several variants adds up quickly. Draft at 360p or 720p first. Only upscale the versions you will keep.

Use conversational edits instead of new generations when possible. One follow-up prompt to fix lighting or swap a background costs less than starting over.

Provide strong reference images. Product photography or character sheets reduce visual drift. Keep prompts specific about camera motion and physics.

Test short clips (5-8 seconds) before committing to full 15-second generations. Confirm audio quality and lip-sync on dialogue scenes.

## Free and low-cost access options

Google Flow offers daily credits for testing. Google Vids includes limited free generations for personal accounts. The Gemini app rolls the model out to AI Plus, Pro, and Ultra subscribers, with longer clips on Ultra.

These paths help you evaluate quality before scaling with the API. All outputs include an imperceptible SynthID watermark.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6SdsDI-mois"
    title="Gemini Omni 1.2 Flash: Everything NEW in 8 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical use cases

Product teams generate catalog spins and virtual try-on sequences from existing photos. Marketing teams produce social ad variants by editing one base clip conversationally. Educators create short explainers with consistent characters and readable on-screen text.

Combine reference images of real products with text prompts for brand-accurate motion. Extend short clips or interpolate between keyframes for smoother results.

## Limitations to know

Complex physics and multi-step interactions can still fail. Long camera moves sometimes introduce small inconsistencies. Audio references may require allowlisting on some platforms.

Always review outputs before publishing. The model improves on consistency compared with Omni 1.1, yet human checks remain necessary for brand or accuracy-critical work.

## Conclusion

Gemini Omni 1.2 Flash makes 15-second video generation practical and more affordable. Start in Google AI Studio to test prompts and reference images. Move to the API when you need automation or higher volume.

Draft cheaply, edit conversationally, and upscale only winners. The combination of longer clips, better reference adherence, and lower pricing expands what teams can produce without traditional video shoots.

## Sources

- Google Blog: Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips (November 5, 2026). https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Google Cloud Blog: Gemini Omni 1.2 Flash now GA. https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available
- Google AI Studio documentation for Omni models
- DeepMind model card for Gemini Omni 1.2 Flash
