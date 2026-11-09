---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Generate and edit up to 15-second videos with native audio using Gemini Omni 1.2 Flash in AI Studio or Flow. 720p is $0.07 per second."
pubDate: 2026-11-09T17:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. It generates videos with native audio up to 15 seconds long, down from the previous 10-second limit, and cuts the price for 720p output by 30% to $0.07 per second.

You can draft at lower resolutions, refine the same clip through follow-up prompts, and upscale the best results to 1080p or 4K. The model is generally available in the Gemini API, Google AI Studio, Google Cloud, Flow, and Google Vids.

This guide shows how to generate your first clip in AI Studio, edit it conversationally, and control cost and consistency.

## What changed in Omni 1.2 Flash

Omni 1.2 Flash accepts text, images, and short video references, then returns synchronized video and audio. Duration is set in one-second steps from 3 to 15 seconds. First-and-last-frame interpolation stays limited to 10 seconds. Outputs include an invisible SynthID watermark.

Conversational editing lets you keep the same interaction and issue short follow-up instructions instead of regenerating the entire clip. Character, product, and scene details stay more consistent across camera moves than in Omni 1.1.

![Person working on a laptop with code on the screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Generate a clip in Google AI Studio

Open [Google AI Studio](https://aistudio.google.com) and sign in. Select the model `gemini-omni-1.2-flash` (or open the direct prompt link from Google's announcement). Enable billing on the project if you have not already; there is no free tier listed for this model.

Write a concrete prompt that names the subject, action, setting, camera, lighting, and audio. Example: "A golden retriever runs along a beach at sunset, low tracking shot, warm backlight, soft wind and distant waves, no dialogue, single continuous shot."

Set duration to 8 or 10 seconds for a first test, resolution to 360p or 720p, and aspect ratio to 16:9 or 9:16. Submit and wait for the clip. Download the MP4 once it appears.

For developers, the same model is available through the Interactions API with the official `google-genai` SDK. A minimal Python call looks like this:

```python
from google import genai
import base64

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A marble rolls fast along a chain-reaction track, continuous smooth shot, no cuts.",
)
with open("marble.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

## Edit the same clip by conversation

Keep the interaction ID from the first generation. Send a follow-up with `previous_interaction_id` and a short instruction such as "Change the background to an oak forest" or "Make the lighting cooler and add light rain."

The model revises the existing take rather than starting over. This works across the full 15-second length and is useful for ad variants, background swaps, or lighting fixes. Google’s demos show characters and camera framing remaining intact while the environment changes.

In Flow (labs.google/fx/tools/flow) the same conversational flow is available with a visual timeline. Free credits exist in Flow and Google Vids; check current limits in the product before you start a large batch.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Control cost and quality

Draft at 360p to test ideas quickly, then regenerate or upscale only the keepers at 720p. A 10-second 720p clip costs about $0.70 before any upscale. Extensions add 3–10 seconds and are billed accordingly; the API caps total length at 30 seconds in some paths.

Reference images improve consistency. Supply character or product stills and describe them plainly in the prompt. Avoid relying on deprecated tag syntax; current docs prefer natural language references. Test first-and-last-frame pairs when you need a specific start and end composition.

![Close-up of a smartphone screen showing an app interface](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Name the camera move and lighting explicitly. "Low tracking shot, warm backlight" produces more reliable motion than a vague "cinematic."

Specify audio. Include ambient sound, dialogue, or "no dialogue" so the model does not invent unwanted speech.

Request a single continuous shot when you do not want jump cuts. Omni still prefers short narrative sequences unless you override it.

Start short. Generate 5–8 seconds first, then extend or edit. Long prompts and many references increase the chance of drift.

Pair this workflow with other Gemini tools. If you also build Android apps that surface AI features, see the steps in [How to Build Your First Android App with Gemini 4 Argon in AI Studio](/blog/build-first-android-app-gemini-4-argon-ai-studio/).

## Conclusion

Gemini Omni 1.2 Flash lowers the cost and raises the length of reliable short video generation. Generate in AI Studio or Flow, keep the interaction ID for conversational edits, and draft at lower resolutions before you spend on final 720p or upscaled output. Check Google’s pricing page and product limits before production use, and remember every clip carries a SynthID watermark.

## Sources

- Google, "Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips," November 5, 2026: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Google AI Studio documentation and pricing for Omni 1.2 Flash
- Google GenAI SDK Interactions API examples
