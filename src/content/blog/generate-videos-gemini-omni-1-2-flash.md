---
title: "How to Generate Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating 15-second videos with native audio using Gemini Omni 1.2 Flash in AI Studio and the API."
pubDate: 2026-11-08T12:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to", "google", "ai"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. It generates videos up to 15 seconds long with native audio and supports conversational editing. The model is generally available through the Gemini API, Google AI Studio, Google Cloud, Flow, and Google Vids.

This guide shows how to create your first clips, edit them by conversation, and control cost. All details come from Google’s official announcement and documentation.

## What Changed from Omni 1.1

Gemini Omni 1.2 Flash extends maximum clip length from 10 seconds to 15 seconds. You can choose any duration from 3 to 15 seconds in one-second steps. Pricing for 720p video dropped 30 percent to $0.07 per second.

You can draft at 360p or 720p, then upscale the best results to 1080p or 4K. Reference images, short motion clips, and product details stay more consistent across the full length. Multi-turn editing lets you change one element without regenerating the entire clip.

![Laptop showing code and development tools](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How to Generate a Video in Google AI Studio

Google AI Studio is the fastest way to test prompts without writing code.

1. Open aistudio.google.com and sign in with a Google account that has billing enabled. Omni models require a paid tier.
2. Select the model gemini-omni-1.2-flash from the list.
3. Set aspect ratio to 16:9 or 9:16, resolution to 360p or 720p, and duration between 3 and 15 seconds.
4. Enter a clear prompt that describes the subject, action, setting, camera movement, and audio. Example: “A barista pours latte art in a sunlit cafe, slow dolly-in, warm tones, gentle cafe ambience, no music.”
5. Generate the clip. Review the result, then continue the conversation to request changes such as “change the lighting to evening” or “add a logo on the cup.”

The same interface supports image-to-video and reference-to-video by uploading stills or short clips.

## Using the Gemini API

Developers call the model through the Interactions API with the google-genai SDK.

Install the package and set your API key:

```
pip install -U google-genai
export GEMINI_API_KEY="your-key"
```

A basic text-to-video request looks like this:

```
from google import genai
import base64

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A golden retriever runs along a beach at sunrise, slow tracking shot, waves and seagulls audible.",
    response_format={
        "type": "video",
        "resolution": "720p",
        "aspect_ratio": "16:9",
    },
)
with open("beach.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

You can attach reference images or a source video for editing by including them in the input. The model keeps unmentioned elements stable when you ask for a single change.

![Developer workspace with multiple screens](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Better Results

Write prompts as short shot briefs. Name the subject and action first, then the setting, camera, lighting, and audio. Put any spoken words in quotes and specify who says them. Add “no music” or “no dialogue” when you want silence in those areas.

Start every project at 360p or 720p. Generate several variations, pick the strongest, and upscale only that version. This workflow keeps costs low while you iterate.

For product or character consistency, upload reference images of the face, garment, or packaging. The model holds those details better than earlier versions. When editing, request one change at a time and add “keep everything else the same.”

Clips carry an invisible SynthID watermark. Plan for that when you need fully clean media.

## Where Else You Can Use It

Google AI Ultra subscribers can generate 15-second videos inside the Gemini app. Flow supports scene direction and multi-turn edits. Google Vids and Google Ads offer additional surfaces for business users. The same model ID works across the Gemini API and Google Cloud.

If you are exploring related interactive generation, read our guide on [how to access Google Genie 4 interactive worlds](/blog/access-google-genie-4-interactive-worlds/).

## Watch a Walkthrough

This video shows real examples of 15-second generation, reference locking, and conversational edits with Gemini Omni 1.2 Flash.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BF7m7s8lDq8"
    title="NEW Gemini Omni Flash 1.2 is WILD!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing (November 5, 2026). https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Google Cloud blog: Gemini Omni 1.2 Flash now generally available. https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available
- Google DeepMind model card for Gemini Omni 1.2 Flash.

Gemini Omni 1.2 Flash makes short-form video generation practical for product explainers, social ads, and rapid iteration. Draft cheap, edit by conversation, and upscale only the winners. The model is available today through the tools listed above.
