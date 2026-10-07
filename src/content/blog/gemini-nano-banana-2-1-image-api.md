---
title: "Gemini Nano Banana 2.1: Image API Setup and Costs"
description: "Call gemini-nano-banana-2.1 to generate and edit images in the Gemini API, set 1K to 4K size, and check October 2026 pricing."
pubDate: 2026-10-07T15:05:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "ai"]
noindex: false
---

Google made Nano Banana 2.1 generally available in the Gemini API on 6 October 2026. The model ID is `gemini-nano-banana-2.1`. It is the high-efficiency image model Google now recommends for new projects, with 1K, 2K, and 4K output, conversational edits, and Google Search grounding.

If you already call Gemini 3.1 Flash Image (`gemini-3.1-flash-image`), this is the successor to point new work at. Android apps that already generate images on device are a separate path. See [Gemini Nano Banana image generation on Android](/blog/gemini-nano-banana-android-image-gen/) for that setup.

## What Nano Banana 2.1 actually is

Nano Banana is Google's name for Gemini's native image generation. Nano Banana 2.1 is an update to Nano Banana 2 (Gemini 3.1 Flash Image). Google describes it as the primary workhorse for image generation and conversational editing, with Flash-level speed and lower cost than Nano Banana Pro (`gemini-3-pro-image`).

Official model notes list these inputs: text, images, video, and PDF. Outputs are image and text. The input token limit is 131,072. The output token limit is 32,768. Search grounding and thinking are supported. Code execution, function calling, URL context, and the Live API are not.

Every generated image includes a SynthID watermark. If you need to explain that mark to users, the [SynthID check guide](/blog/check-synthid-watermarks-gemini/) covers how Gemini labels AI-made media.

Key updates Google called out for 2.1:

- Better visual quality and realism at 1K, 2K, and 4K. The default is 1K.
- Fixed tiling artifacts on wide ratios (`1:4`, `4:1`, `1:8`, `8:1`) at 2K and 4K.
- Stronger text rendering and infographic layout.
- Better character consistency across multi-turn edits.
- The 0.5K (512px) size from Gemini 3.1 Flash Image is not supported on 2.1.

![Developer reviewing generated images on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Set up a first text-to-image call

Create an API key in Google AI Studio and set `GEMINI_API_KEY`. The current image docs use the Interactions API, not the older `generate_content` sample you may have copied from 2025 tutorials.

Install the Python SDK, then request one image:

```python
from google import genai
import base64

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-nano-banana-2.1",
    input="A product photo of a ceramic mug on a wooden table, soft daylight, no text",
)

with open("mug.png", "wb") as f:
    f.write(base64.b64decode(interaction.output_image.data))
```

`interaction.output_image` is the last generated image block. The same model ID works in the JavaScript SDK with `ai.interactions.create`, and over HTTP at `https://generativelanguage.googleapis.com/v1beta/interactions` with header `x-goog-api-key`.

A curl body looks like this:

```json
{
  "model": "gemini-nano-banana-2.1",
  "input": [
    {"type": "text", "text": "A product photo of a ceramic mug on a wooden table, soft daylight, no text"}
  ]
}
```

The pricing page lists Nano Banana 2.1 as not available on the free tier. Budget a paid Gemini API project before you expect production calls to succeed.

## Set size, ratio, and an edit

Google's image docs pass size through `response_format`. A 16:9 frame at 2K looks like this in Python:

```python
interaction = client.interactions.create(
    model="gemini-nano-banana-2.1",
    input="A wide photo of a quiet train platform at dusk, no people, no text",
    response_format={
        "type": "image",
        "aspect_ratio": "16:9",
        "image_size": "2K",
    },
)
```

Supported aspect ratios on the Cloud model page include `1:1`, `3:2`, `2:3`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`, `9:21`, plus the panoramic set `1:4`, `4:1`, `1:8`, and `8:1`. Resolutions are 1K, 2K, and 4K.

To edit, send text plus a base64 image. You need rights to any image you upload. Google's prohibited-use policy still applies to deceptive or harmful outputs.

```python
import base64
from google import genai

client = genai.Client()

with open("mug.png", "rb") as f:
    image_b64 = base64.b64encode(f.read()).decode("utf-8")

interaction = client.interactions.create(
    model="gemini-nano-banana-2.1",
    input=[
        {"type": "text", "text": "Keep the mug. Change the table to white marble. Do not add text."},
        {"type": "image", "data": image_b64, "mime_type": "image/png"},
    ],
)
```

You can attach up to 14 reference images on Nano Banana 2.1. Cloud docs cap each inline image at 7 MB, and files from Cloud Storage at 30 MB. Accepted MIME types include PNG, JPEG, WebP, HEIC, and HEIF.

Video-to-image is also documented for this model. You can pass a public YouTube URL or a file uploaded through the Files API, then ask for a still that matches the clip. That is a different job from the image-edit path above.

![Close-up of a camera and editing desk](https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80)

## Pricing you should quote in a budget

Figures below are from the Gemini Developer API pricing page, standard paid tier, in US dollars.

| Item | Standard rate |
| --- | --- |
| Input (text, image, video) | $1.50 per 1M tokens |
| Text and thinking output | $7.50 per 1M tokens |
| Image output | $30 per 1M tokens |
| 1K image (1,120 tokens) | $0.0336 |
| 2K image (1,680 tokens) | $0.0504 |
| 4K image (3,780 tokens) | $0.113 |

Batch inference is half of those image rates: $0.0168 at 1K, $0.0252 at 2K, and $0.0567 at 4K. Batch also halves the text and input rates listed on that page ($0.75 input per 1M tokens, $3.75 text and thinking output per 1M tokens).

Grounding with Google Web and Image Search shares a pool of 5,000 free search requests per month across Gemini 3.x models. After that, Google charges $14 per 1,000 search requests. A grounded image call can therefore cost more than the image tokens alone.

Thought images used while the model plans a composition are not charged. The final image is.

## When to pick another Nano Banana model

Google's model selection page splits the family like this:

- **Nano Banana 2.1** (`gemini-nano-banana-2.1`): default for new apps that need edits, text in images, and 1K–4K output.
- **Nano Banana 2 Lite** (`gemini-3.1-flash-lite-image`): fastest and cheapest, 1K only, not aimed at many reference images or long edit chains.
- **Nano Banana 2** (`gemini-3.1-flash-image`): previous workhorse. Still documented, including 0.5K. New projects should use 2.1.
- **Nano Banana Pro** (`gemini-3-pro-image`): higher world knowledge and brand control, at a higher price.
- **Original Nano Banana** (`gemini-2.5-flash-image`): legacy. Google's migration note points new work at Nano Banana 2 Lite for lower price and higher quality than that first model.

Use Pro when a brand mark, localized text, or a dense diagram fails on 2.1 after you tighten the prompt. Use Lite when you only need a quick 1K draft and do not need multi-image consistency.

## Practical prompt checks

Short prompts work for a first smoke test. Production prompts should name the subject, lighting, crop, and what must not appear.

1. State the output as a photo, diagram, or poster so the model does not mix styles.
2. Put required words in quotes if text must render. Ask for one headline, not a paragraph.
3. For edits, say what stays fixed. "Keep the mug shape and logo" beats "make it nicer."
4. Set `image_size` explicitly. The default is 1K, and 4K is more than three times the image-token cost of 1K.
5. Turn on search grounding only when the picture depends on a current fact, such as a chart or a place. Each search can add a grounding charge after the free monthly pool.
6. Store the PNG and the prompt. SynthID is in the pixels, but your own log is what support will ask for.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UTdfxFyOQTI"
    title="Learn to Build with Gemini Nano-Banana (Gemini 2.5 Flash Image)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google for Developers walkthrough above shows the AI Studio flow for the original Nano Banana model. The playground steps still apply. Swap the model string to `gemini-nano-banana-2.1` and use `interactions.create` if your SDK sample still calls `generate_content` with `gemini-2.5-flash-image`.

## Ship checklist

Nano Banana 2.1 is the model to start with for Gemini API image jobs in October 2026. Confirm the key is on a billed project, call `gemini-nano-banana-2.1`, and read `output_image`. Set aspect ratio and size in `response_format` when the default 1K square is wrong. Quote $0.0336, $0.0504, or $0.113 per standard image at 1K, 2K, and 4K, plus input tokens and any search grounding.

Test one edit with a reference image before you promise character consistency. If wide banners showed seams on Nano Banana 2, retest those `1:8` and `8:1` frames at 2K or 4K on 2.1, which is the fix Google documented.

## Sources

- Gemini API image generation: https://ai.google.dev/gemini-api/docs/image-generation
- Gemini Nano Banana 2.1 model page: https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1
- Gemini Developer API pricing: https://ai.google.dev/gemini-api/docs/pricing
- Gemini Enterprise Agent Platform model specs: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/nano-banana-2-1
- Google for Developers, Learn to Build with Gemini Nano-Banana: https://www.youtube.com/watch?v=UTdfxFyOQTI
