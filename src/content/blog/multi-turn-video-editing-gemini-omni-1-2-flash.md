---
title: "Multi-Turn Video Editing with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to conversational multi-turn editing in Gemini Omni 1.2 Flash: generate 15s clips, refine with follow-ups, and use the Interactions API."
pubDate: 2026-11-08T15:00:00
heroImage: "https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The model generates and edits native video clips up to 15 seconds long. It supports multi-turn conversational editing so you can refine a clip without starting over.

This guide shows how to generate a base clip and then edit it turn by turn using the Gemini Interactions API. You will see pricing, a working Python example, and practical tips for keeping characters and products consistent.

## What changed in Omni 1.2 Flash

Omni 1.2 Flash raises the maximum native clip length from 10 seconds to 15 seconds. You can set duration in one-second steps from 3 to 15 seconds. Pricing dropped about 30 percent to $0.07 per second for 720p video.

The model also improves reference adherence. You can supply character, product, or style images plus short motion clips. Faces, garments, packaging text, and brand colors stay consistent across angles and turns. Multi-turn editing lets you swap backgrounds, change lighting, or adjust framing while preserving the rest of the scene.

Outputs carry an imperceptible SynthID watermark. The model is generally available on the Gemini API (paid tier) and in Google Cloud, with Provisioned Throughput for production use.

![Professional video camera on a tripod in a studio](https://images.unsplash.com/photo-1758390851031-bcf34075ca61?auto=format&fit=crop&w=800&q=80)

## Pricing and access

There is no free tier on the Gemini API for Omni 1.2 Flash. You need a paid project with billing enabled. At 720p the rate is $0.07 per second. A full 15-second clip costs about $1.05. Draft at 360p or 720p, then upscale to 1080p or 4K if needed.

Google Vids lets anyone with a Google account generate up to three 15-second clips per month at no extra cost. The Gemini app is rolling out 15-second clips to Google AI Ultra subscribers. For programmatic work, use the API.

Model string: `gemini-omni-1.2-flash`.

## Generate a base clip with the Interactions API

Install the official SDK:

```bash
pip install -U google-genai
```

Set your API key as the environment variable `GEMINI_API_KEY`. Then create a text-to-video interaction:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A golden retriever running joyfully through a field of wildflowers at sunset. Cinematic, continuous camera move, 15 seconds.",
    response_format={
        "type": "video",
        "duration": "15s",
        "resolution": "720p"
    }
)

print(interaction.id)
# Download or access the video from interaction.output_video or the returned URI
```

The response contains the video. You can request URI delivery for longer clips so the service returns a downloadable link after processing.

## Multi-turn conversational editing

Once you have an interaction ID, continue the conversation by passing `previous_interaction_id`. The model keeps the prior clip as context and applies only the requested change.

Example: change the background while keeping the dog and camera move:

```python
edit = client.interactions.create(
    model="gemini-omni-1.2-flash",
    previous_interaction_id=interaction.id,
    input="Change the field to a snowy mountain trail at golden hour. Keep the dog, the running motion, and the continuous camera exactly the same."
)
```

You can keep chaining turns. Common edits include swapping a product, altering lighting or weather, changing aspect ratio, or refining camera movement. Google notes that multi-turn editing works across full 15-second clips, which helps produce ad variants without re-briefing the entire scene.

Reference images improve consistency. Upload product or character photos and include them in the input array alongside the text prompt. The model holds packaging typography and brand colors across turns.

![Filmmaker operating a professional video camera rig](https://images.unsplash.com/photo-1757845701047-69080f6b1139?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Start with a clear, specific first prompt. Describe subject, action, camera movement, lighting, and duration in one block. Then make one focused change per turn.

Use phrases such as “Keep everything else the same” or “Do not change the subject’s face or clothing.” This reduces drift.

Draft at lower resolution to iterate quickly, then upscale the final version. For product work, supply high-quality reference photos of the exact item from multiple angles.

Watch the official demos to see reference adherence and background swaps in action. For more general usage patterns, see our earlier guide on [how to use Gemini Omni 1.2 Flash](/blog/how-to-use-gemini-omni-1-2-flash/).

## Watch a walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6SdsDI-mois"
    title="Gemini Omni 1.2 Flash: Everything NEW in 8 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash turns video creation into a conversational workflow. Generate a 15-second base clip, then refine it turn by turn while preserving characters, products, and framing. The lower price and longer native length make it practical for product explainers, social ads, and catalog spins.

Start in Google AI Studio to test prompts, then move to the Interactions API once the workflow is stable. Check current pricing and rate limits on the official Gemini API pages before large runs.

## Sources

- [Gemini Omni 1.2 Flash: 15-second video and lower pricing](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) — Google Blog, 5 November 2026
- [Generate and edit videos with Gemini Omni Flash](https://ai.google.dev/gemini-api/docs/omni) — Gemini API documentation
- [Gemini API pricing](https://aistudio.google.com/docs/pricing) — Google AI Studio
- [Create longer AI videos with Omni 1.2 in Google Vids](https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/) — Google Workspace blog, 5 November 2026
