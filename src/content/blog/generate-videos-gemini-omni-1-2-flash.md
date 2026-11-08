---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step tutorial to create and edit 15-second videos with native audio using Gemini Omni 1.2 Flash via the Gemini API."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "ai"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates videos up to 15 seconds long with native synchronized audio, improves reference consistency, and drops pricing by 30 percent for 720p output.

You can call it today through the Gemini API using the Interactions API. This guide walks through setup, text-to-video generation, resolution and duration controls, and conversational editing.

For related model work on Android, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Laptop showing code in a development environment](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google account and a Gemini API key from Google AI Studio. The model runs on the paid tier. Create the key at aistudio.google.com and set it as the GEMINI_API_KEY environment variable.

Install the official Google GenAI SDK. For Python:

```bash
pip install -U google-genai
```

The SDK must be recent enough to support the Interactions API and video output helpers. Check the Gemini API docs for the minimum version.

## Generate your first video

The basic call uses the Interactions API. The model ID is gemini-omni-1.2-flash. Here is a minimal Python example from the official documentation:

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A marble rolling fast on a chain reaction style track, continuous smooth shot."
)

with open("marble.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

The response includes an interaction ID and the video data (base64 by default). The model produces video with audio in one pass. Default duration is 10 seconds at 720p in 16:9.

## Control duration, resolution, and aspect ratio

Set options in the response_format parameter. Duration accepts whole seconds from 3 to 15 (as strings like "15s"). Resolution options are 360p, 720p (default), 1080p, and 4k. Aspect ratio supports 16:9 (default) and 9:16.

Example for a 15-second portrait video at 720p:

```python
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A drone shot of a mountain landscape at sunrise, smooth continuous camera move.",
    response_format={
        "type": "video",
        "aspect_ratio": "9:16",
        "resolution": "720p",
        "duration": "15s"
    }
)
```

Draft at 360p to save cost, then upscale promising clips. The model supports standalone upscaling of existing Omni videos up to 15 seconds.

![Film production camera setup](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)

## Conversational editing

One of the strongest features is multi-turn editing. Pass the previous interaction ID to refine the same clip without regenerating from scratch. You can change backgrounds, lighting, objects, or camera moves while preserving character performance and framing.

```python
res1 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A woman playing violin outdoors in a park."
)

res2 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    previous_interaction_id=res1.id,
    input="Change the background to a stone castle courtyard and warm the lighting."
)
```

This works across full 15-second clips. Use it to produce ad variants or fix details instead of starting over.

## Reference images and consistency

Omni 1.2 Flash improves reference adherence. You can supply character, product, or style images (up to several) so faces, garments, packaging, and brand colors stay consistent across angles and turns. Combine with short motion clips (up to three seconds) or audio cues for better control.

First-and-last frame interpolation is also supported (typically 3 to 10 seconds). The model holds consistency better than Omni 1.1 across longer shots and camera transitions.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6SdsDI-mois"
    title="Gemini Omni 1.2 Flash: Everything NEW in 8 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pricing and practical tips

Google cut prices 30 percent from Omni 1.1. 720p video is $0.07 per second. Draft cheap at 360p, edit conversationally, then upscale finals to 1080p or 4K. Outputs carry an imperceptible SynthID watermark.

Write detailed prompts: subject, action, setting, lighting, camera movement, and audio. Specify "single continuous shot" or "no cuts" when you need one unbroken take. The model handles native speech, lip-sync, and multi-speaker conditioning better than the previous version.

For enterprise use, the model is generally available on Google Cloud with provisioned throughput options. Prototype first in Google AI Studio.

## Conclusion

Gemini Omni 1.2 Flash is available now via the Gemini API for developers who need longer, more consistent videos with native audio at lower cost. Start with the Interactions API, control duration and resolution in response_format, and use previous_interaction_id for iterative edits.

Test prompts in AI Studio before integrating. Monitor usage and set budget alerts on your Google Cloud project.

**Sources**

- Google Blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing (November 5, 2026)
- Gemini API documentation: Generate and edit videos with Gemini Omni Flash
- Google AI Studio model page for gemini-omni-1.2-flash
