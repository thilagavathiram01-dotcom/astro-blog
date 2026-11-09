---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash API"
description: "Step-by-step guide to generate and edit 15-second videos with native audio using Gemini Omni 1.2 Flash Interactions API, including code examples and best practices."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native synchronized audio. It costs $0.07 per second for 720p output, a 30% reduction from Omni 1.1 Flash.

Developers access it through the Gemini API Interactions endpoint as `gemini-omni-1.2-flash`. You can draft at 360p or 720p, edit conversationally, and upscale the best results to 1080p or 4K.

This guide shows how to generate your first 15-second video, control duration and resolution, and perform multi-turn edits. For product-focused examples, see [Create 15s Product Videos with Gemini Omni 1.2 Flash](/blog/create-15s-product-videos-gemini-omni-1-2-flash/).

## Set Up the Gemini API

Create a Google AI Studio API key and enable billing. Install the current `google-genai` Python package.

```bash
pip install -U google-genai
```

Set your key as an environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

The Interactions API returns video data as base64 by default. For longer clips, request URI delivery to avoid payload limits.

## Generate a Text-to-Video Clip

Start with a simple prompt. Specify duration in the response format for exact length control. Durations range from 3 to 15 seconds in one-second steps. The default is 10 seconds.

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A continuous tracking shot of a golden retriever running through a field of wildflowers at golden hour. Soft ambient sounds of wind and distant birds. No dialogue.",
    response_format={
        "type": "video",
        "duration": "15s",
        "resolution": "720p",
        "aspect_ratio": "16:9"
    }
)

with open("retriever.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

The model produces synchronized audio automatically. Describe the sound design in your prompt for better results.

![Laptop displaying video editing software](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)

## Control Resolution and Aspect Ratio

Supported resolutions are 360p, 720p (default), 1080p (upscaled), and 4k (upscaled). Aspect ratios are 16:9 or 9:16.

Use 360p for rapid iteration. It generates roughly twice as fast and consumes fewer tokens. Upscale only the clips you keep.

First-and-last-frame interpolation supports 3 to 10 seconds. Reference images (up to six) work across all durations.

## Multi-Turn Conversational Editing

Pass the previous interaction ID to continue editing. The model preserves unmentioned elements while applying your changes.

```python
# Continue from the previous interaction
edit = client.interactions.create(
    model="gemini-omni-1.2-flash",
    previous_interaction_id=interaction.id,
    input="Change the field to a snowy mountain trail. Keep the dog and camera movement identical. Add soft snow crunching sounds."
)

with open("retriever_snow.mp4", "wb") as f:
    f.write(base64.b64decode(edit.output_video.data))
```

You can extend clips by 3 to 10 seconds per turn, up to a total of 30 seconds. Prompt for continuity: "The scene continues as the dog reaches the summit."

![Video editing timeline on a monitor](https://images.unsplash.com/photo-1614963326505-843868e1d83a?auto=format&fit=crop&w=800&q=80)

## Use Reference Images

Upload or pass image URIs as reference inputs. The model maintains character, product, and style consistency across the clip.

Combine a character sheet with a product photo for virtual try-on sequences or branded explainers. Reference videos up to three seconds work for motion guidance on longer outputs.

## Tips for Better Results

Write prompts with six layers: subject, action, setting, camera, lighting, and audio. Request a single continuous shot when you need no cuts.

Use timecode syntax for multi-beat stories:

```
[0-5s] Close-up of the product on a wooden desk in soft morning light
[5-10s] A hand lifts it and pours water into a glass
[10-15s] The product sits on a lakeside rock as the camera orbits
```

Test at 360p first. Check lip-sync and physics on the draft before upscaling. Store the interaction ID if you plan further edits.

Avoid asking for complex multi-character dialogue in one generation. Break long sequences into editable turns.

## Conclusion

Gemini Omni 1.2 Flash makes 15-second video production practical for developers. Generate a draft, edit it conversationally, and upscale the final version without regenerating from scratch. Start with the Interactions API examples above and refine prompts against the official documentation.

## Sources

- [Introducing Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
- [Generate and edit videos with Gemini Omni Flash](https://ai.google.dev/gemini-api/docs/omni)
- [Gemini Omni 1.2 Flash on Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
