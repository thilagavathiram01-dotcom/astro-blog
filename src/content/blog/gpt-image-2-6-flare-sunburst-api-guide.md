---
title: "GPT-Image-2.6 Flare and Sunburst API Guide"
description: "Step-by-step guide to GPT-Image-2.6 Flare and Sunburst API: complexity, GIF, SVG, markup edits, and code examples."
pubDate: 2026-11-05T12:00:00
heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

OpenAI released Images 2.6 on November 4, 2026. Developers get two new API models: GPT-Image-2.6 Flare for speed and GPT-Image-2.6 Sunburst for detail and edit consistency. Both support a complexity parameter, animated GIF output, SVG export, and markup-guided edits.<grok type="render_inline_citation" citation_id="1114" />

Flare can return an image in as little as six seconds at low quality. Sunburst prioritizes higher quality and keeps characters, products, and details more consistent across successive edits when quality is medium or high. Pricing stays the same as Images 2.5: text input $5 per million tokens, image input $8, image output $30.<grok type="render_inline_citation" citation_id="1108" />

This guide shows how to call both models from the Image API with practical code. For ChatGPT GIF creation, see our [guide to creating animated GIFs in ChatGPT with Images 2.6](/blog/create-gifs-chatgpt-images-2-6/).

![Laptop screen showing colorful code](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Choose Flare or Sunburst

Use Flare when latency matters. It targets interactive tools, high-volume drafts, and workflows that need quick feedback. OpenAI positions it for posters, product imagery, and professional layouts that still benefit from speed.

Use Sunburst when precision and consistency matter more. It handles dense text, complex compositions, and multi-round edits better. Characters and product details stay more recognizable from one edit to the next at medium or high quality.

Both models accept text and image inputs and return images. They work on the generations and edits endpoints. Organization verification may be required before use.<grok type="render_inline_citation" citation_id="1107" />

## Set complexity and quality

Complexity controls how much the model plans the scene before rendering. Values are low, medium, or high. The default is high if omitted. Quality controls visual detail and fidelity separately: low, medium, high, xhigh, max, or auto.

Lower complexity suits focused changes such as swapping a background or updating a sign. Higher complexity helps with dense text, multi-object layouts, and relationships between elements. It can also increase latency and introduce unrequested changes, so test both on your prompts. Complexity has no extra fee.<grok type="render_inline_citation" citation_id="1107" />

OpenAI recommends low complexity for most editing tasks paired with the quality level you need. Raise it for scenes with many constraints.

![Abstract digital technology background with light streaks](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Generate an image with Python

Install the OpenAI Python SDK and set your API key. This example uses Flare at low quality and medium complexity for a fast draft:

```python
from openai import OpenAI
import base64

client = OpenAI()

result = client.images.generate(
    model="gpt-image-2.6-flare",
    prompt="A modern product photo of a ceramic coffee mug on a light wood table, soft natural light, minimal background",
    size="1024x1024",
    quality="low",
    extra_body={"complexity": "medium"},
    output_format="png"
)

image_bytes = base64.b64decode(result.data[0].b64_json)
with open("mug.png", "wb") as f:
    f.write(image_bytes)
```

For Sunburst, change the model string. Add a stable hashed `safety_identifier` when serving end users. The API returns base64 image data by default.

## Create an animated GIF

Set `output_format` to `gif`. You can control frame count (typically 2–64) and frame duration in milliseconds (default 200). GIFs work on the generations endpoint.

```python
result = client.images.generate(
    model="gpt-image-2.6-flare",
    prompt="A cute chibi cat wearing a flower hat, dancing happily in a loop, kawaii style, white background",
    size="1024x1024",
    quality="medium",
    extra_body={"complexity": "low"},
    output_format="gif"
)

with open("dancing-cat.gif", "wb") as f:
    f.write(base64.b64decode(result.data[0].b64_json))
```

Start with a still character or product and describe the motion you want. Adjust complexity downward for simpler loops.

## Export SVG and use markup for edits

Request `output_format="svg"` on generations for vector output suitable for websites, apps, or print. Editing does not support SVG output.

For precise edits, send a markup layer—a transparent image with annotations showing exactly where to change. This replaces or supplements mask-based editing. Markup works on supported GPT Image 2.5 and 2.6 models via the edits endpoint.

```python
with open("original.png", "rb") as img, open("markup.png", "rb") as markup:
    result = client.images.edit(
        model="gpt-image-2.6-sunburst",
        image=img,
        prompt="Change the background to a soft blue gradient, keep the product exactly the same",
        extra_body={"complexity": "low"}
        # markup file passed according to current SDK support
    )
```

Check the latest SDK docs for exact markup parameter names, as the feature is new.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bJldMYfRvMQ"
    title="Introducing ChatGPT Images 2.6"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

- Start with Flare and low quality for drafts, then switch to Sunburst and higher quality for finals.
- Default complexity is high. Explicitly set low or medium for simple edits to reduce latency and unwanted changes.
- Include a privacy-preserving `safety_identifier` (hashed user ID, max 128 characters) on every request that serves end users.
- Token pricing matches Images 2.5. Monitor usage because lower quality settings on 2.6 can bill more output tokens than the prior generation in some cases.
- Test transparent backgrounds with PNG or WebP output. GIF and SVG have their own constraints.
- Verify organization access in the OpenAI console if calls are rejected.

## Conclusion

GPT-Image-2.6 Flare and Sunburst give developers faster generation, better edit consistency, and new output formats in one API update. Switch model IDs, add the complexity field, and request GIF or SVG when needed. The same token rates as 2.5 make migration straightforward once you confirm the right model for speed versus precision.

## Sources

- [Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/) — OpenAI announcement, November 4, 2026
- [Image generation guide](https://developers.openai.com/api/docs/guides/image-generation) — OpenAI API docs covering complexity, GIF, SVG, and markup
- [GPT-Image-2.6 Sunburst model page](https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst) — Official model card and pricing
- [GPT-Image-2.6 Flare model page](https://developers.openai.com/api/docs/models/gpt-image-2.6-flare) — Official model card
- [Image prompting guide](https://developers.openai.com/api/docs/guides/image-prompting) — Parameter details for quality and complexity
