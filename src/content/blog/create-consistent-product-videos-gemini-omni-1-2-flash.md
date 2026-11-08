---
title: "Create Consistent Product Videos with Gemini Omni 1.2 Flash"
description: "Generate consistent 15-second product videos from reference photos with Gemini Omni 1.2 Flash. Step-by-step in AI Studio and the API, plus pricing."
pubDate: 2026-11-08T15:00:00
heroImage: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

E-commerce teams need product videos that keep packaging, logos, and colors identical across angles and edits. Gemini Omni 1.2 Flash, released generally available on 5 November 2026, improves reference adherence so product photography turns into reliable clips.

The model generates native video with synchronized audio up to 15 seconds. It costs $0.07 per second for 720p output, 30 percent lower than Omni 1.1 Flash. You can draft at lower resolution, edit conversationally, and upscale later.

![Product photography studio setup with camera and lights](https://images.unsplash.com/photo-1768076955015-dd4f057e96f6?auto=format&fit=crop&w=800&q=80)

## Why references matter for products

Earlier video models often drifted on labels, bottle shapes, or fabric details when the camera moved. Omni 1.2 Flash holds character, product, and style references from the first frame to the last. Google’s blog notes that faces, garments, packaging typography, and brand colors stay consistent across angles.

This makes virtual try-on sequences, catalog spins, and branded ad variants practical. One product photo plus a few outfit shots can produce a 15-second try-on montage while preserving cut, drape, and back details.

## Generate in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com) and select the model `gemini-omni-1.2-flash`.
2. Upload one or more product reference images (front, side, packaging close-up). The model accepts up to six images.
3. Write a clear prompt that describes the motion and keeps the product fixed. Example: “A matte black stainless-steel water bottle with the white text ‘WEEL’ on the side. Slow 360-degree orbit on a wooden desk in soft morning light. Keep the bottle shape, color, and logo identical in every frame. Ambient room tone only.”
4. Set duration between 3 and 15 seconds and resolution to 720p for the first pass.
5. Generate, then request conversational edits: “Change the background to a mountain lake while keeping the bottle exactly the same.”

The preview updates in place. You avoid full regenerations for small changes.

## Call the Interactions API with references

Developers use the Interactions API. Pass reference images as base64 or file URIs in the input list.

```python
import base64
from google import genai

client = genai.Client()

with open("product_front.png", "rb") as f:
    product_b64 = base64.b64encode(f.read()).decode("utf-8")

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input=[
        {"type": "image", "data": product_b64, "mime_type": "image/png"},
        {"type": "text", "text": "Slow orbit of this exact water bottle on a wooden desk. Keep logo and shape identical. Soft morning light, 12 seconds, no voiceover."}
    ],
)

with open("product_orbit.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

You can add a second image for a different angle or a lifestyle scene. Official documentation confirms up to six reference images and multi-turn editing on the same interaction.

![Close-up of a product being photographed](https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80)

## Pricing and practical limits

Video output is billed at $12 per million tokens. At 720p this equals roughly $0.07 per second (5,792 tokens per second). A 15-second clip costs about $1.04 in video output tokens before any input or text costs. Input tokens remain $1.50 per million.

There is no free API tier. Google Vids still offers a limited free allowance of 15-second clips for Google accounts. Outputs include an imperceptible SynthID watermark. On 3 December 2026, requests to the previous model string route automatically to 1.2 Flash.

## Tips for consistent results

- Supply clean, well-lit product photos with the logo fully visible.
- State in the prompt which details must not change (“keep packaging typography identical”).
- Draft at 360p or 720p, then upscale the best takes to 1080p or 4K.
- Use multi-turn edits for background or lighting changes instead of regenerating.
- For virtual try-on, provide front and back garment photos plus a model reference.

For multi-turn editing workflows, see our earlier guide on [multi-turn video editing with Gemini Omni 1.2 Flash](/blog/multi-turn-video-editing-gemini-omni-1-2-flash/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BF7m7s8lDq8"
    title="NEW Gemini Omni Flash 1.2 is WILD!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash turns existing product photography into consistent short videos without starting from a blank prompt. The combination of longer clips, stronger reference following, and lower per-second pricing makes it practical for catalog content and ad variants. Start with a clear product photo and a short orbit prompt in AI Studio, then move to the Interactions API when you need automation.

## Sources

- [Gemini Omni 1.2 Flash: 15-second video and lower pricing](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) — Google Blog, 5 November 2026
- [Gemini Omni 1.2 Flash now GA](https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available) — Google Cloud Blog, 5 November 2026
- [Generate and edit videos with Gemini Omni Flash](https://ai.google.dev/gemini-api/docs/omni) — Gemini API documentation
- [Gemini Omni Flash model card](https://deepmind.google/models/model-cards/gemini-omni-1-2-flash/) — Google DeepMind
