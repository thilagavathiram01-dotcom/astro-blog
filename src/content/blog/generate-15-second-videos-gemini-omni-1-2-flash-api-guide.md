---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash API"
description: "Step-by-step guide to generate and edit 15-second videos using the Gemini Omni 1.2 Flash API with code examples."
pubDate: 2026-11-07T16:00:00
heroImage: "https://images.unsplash.com/photo-1763568258235-f40425a94af9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google made Gemini Omni 1.2 Flash generally available on November 5, 2026. The model generates and edits native video clips up to 15 seconds long. It costs $0.07 per second for 720p output, which is 30 percent lower than the previous Omni 1.1 Flash version.<grok type="render_inline_citation" citation_id="314" />

Developers access it through the Gemini API and the Interactions API. Business users can also create clips in Gemini for business and Google Vids. Outputs include an imperceptible SynthID watermark.<grok type="render_inline_citation" citation_id="316" />

This guide shows how to generate a 15-second video from a text prompt, control duration and resolution, and perform conversational edits. All examples use the official Interactions API pattern.

![Laptop and phone setup for coding AI video prompts](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Set up the Gemini API client

Install the Google GenAI SDK for your language. Create an API key in Google AI Studio. The model identifier is `gemini-omni-1.2-flash`.

Here is a minimal Python example that generates a video from a text prompt:

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A golden retriever running joyfully through a field of wildflowers at sunset, continuous smooth camera follow.",
    response_format={
        "type": "video",
        "duration": "15s",
        "resolution": "720p"
    }
)

with open("retriever.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

The `duration` parameter accepts values from `3s` to `15s` in one-second steps. Resolution options include `360p` (draft mode), `720p` (default), `1080p`, and `4k`. Higher resolutions use upscaling after the base generation.<grok type="render_inline_citation" citation_id="331" />

## Control aspect ratio and references

Set `aspect_ratio` to `9:16` for portrait videos or leave it at the default `16:9`. You can also pass reference images to improve consistency of characters, products, or styles.

```python
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input=[
        {"type": "text", "text": "Virtual try-on sequence of the model wearing the blue jacket, 360-degree turn."},
        {"type": "image", "data": base64_image, "mime_type": "image/jpeg"}
    ],
    response_format={
        "type": "video",
        "aspect_ratio": "9:16",
        "duration": "12s"
    }
)
```

Omni 1.2 Flash follows image and short video references more closely than Omni 1.1. Faces, garments, packaging text, and brand colors stay consistent across camera angles.<grok type="render_inline_citation" citation_id="329" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pW5nOwYXeLY"
    title="Google's New Video Model - Gemini Omni Flash - Demo for Devs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Edit videos conversationally

The Interactions API keeps state across turns. Generate a base clip, then send follow-up prompts that modify only the requested elements.

```python
# Turn 1: generate
res1 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A woman playing violin on an outdoor stage at dusk."
)

# Turn 2: edit
res2 = client.interactions.create(
    model="gemini-omni-1.2-flash",
    previous_interaction_id=res1.id,
    input="Change the background to a stone castle courtyard while keeping the performer and camera framing."
)

with open("edited_violin.mp4", "wb") as f:
    f.write(base64.b64decode(res2.output_video.data))
```

You can swap products, change lighting or weather, adjust aspect ratio, or transfer motion between subjects without regenerating the entire clip. Multi-turn editing works on full 15-second outputs.<grok type="render_inline_citation" citation_id="329" />

![Smartphone showing Gemini and other AI app icons](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Pricing and workflow tips

Draft at 360p or 720p to iterate quickly and at lower cost. Upscale the best results to 1080p or 4K. Audio references currently require allowlisting. All outputs carry a SynthID watermark for provenance.

For production workloads on Google Cloud, Provisioned Throughput is available. The same model works in Gemini for business and Google Vids for non-developer teams.<grok type="render_inline_citation" citation_id="330" />

Start with clear camera language (slow push-in, orbit, FPV flythrough) and specific lighting descriptions. Test reference adherence with product photos before scaling to batch generation.

## Next steps

Prototype in Google AI Studio with the `gemini-omni-1.2-flash` model. Review the official Omni Flash documentation for additional parameters such as thinking level and URI delivery. If you already use on-device agents, see how [ML Kit Agentic API](/blog/build-on-device-agents-ml-kit-agentic-api-gemini-nano-4/) complements cloud video generation.

Gemini Omni 1.2 Flash brings longer, more consistent, and lower-cost video generation to the Gemini API. The combination of native 15-second clips, conversational editing, and improved reference following makes it practical for product explainers, social ads, and virtual try-ons.

**Sources**
- [Introducing Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
- [Gemini Omni 1.2 Flash on Google Cloud](https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available)
- [Gemini API Omni documentation](https://ai.google.dev/gemini-api/docs/omni)
