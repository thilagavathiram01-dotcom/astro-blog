---
title: "GPT-Image-2.6 Flare and Sunburst API Guide"
description: "Step-by-step tutorial on using OpenAI GPT-Image-2.6 Flare and Sunburst models in the API for generation, edits, GIFs, SVG, and complexity control."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1692606742912-b4f9c7102869?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "developer", "ai"]
noindex: false
---

OpenAI launched Images 2.6 on November 4, 2026. The update brings GPT-Image-2.6 Flare and Sunburst to the API, along with native GIF output, SVG export, image markup for targeted edits, and a new complexity parameter.<grok type="render_inline_citation" citation_id="996" />

Flare prioritizes speed. At low quality it can return an image in as little as six seconds. Sunburst focuses on higher detail and greater consistency across successive edits when quality is medium or high. Both models use the same token pricing as the previous 2.5 versions.<grok type="render_inline_citation" citation_id="996" />

Developers access them through the Image API endpoints for generations and edits, or via the image generation tool in the Responses API.

![Abstract digital cityscape representing AI-generated visuals](https://images.unsplash.com/photo-1692606742912-b4f9c7102869?auto=format&fit=crop&w=800&q=80)

## Choose Flare or Sunburst

Use Flare when latency matters most. It suits interactive apps, high-volume generation, rapid prototyping, and workflows that need quick feedback. OpenAI notes it also improves layout quality for posters and product imagery.

Choose Sunburst for tasks that demand precise control, complex layouts, dense text, or consistent characters and products across multiple edit rounds. It is the better option when the final asset must hold fine details.

Both accept text and image inputs and support transparent backgrounds. Start with Flare for most new projects, then switch to Sunburst if edit fidelity falls short.

## Generate an image with the Image API

Install the OpenAI Python or Node SDK. Set your API key as an environment variable. Call the generations endpoint and specify the model.

Python example:

```python
from openai import OpenAI
import base64

client = OpenAI()

result = client.images.generate(
    model="gpt-image-2.6-flare",
    prompt="A clean product photo of a ceramic coffee mug on a light wood table, soft natural light, no text",
    quality="medium",
    size="1024x1024"
)

image_bytes = base64.b64decode(result.data[0].b64_json)
with open("mug.png", "wb") as f:
    f.write(image_bytes)
```

JavaScript follows the same pattern with the official SDK. Replace the model string with `gpt-image-2.6-sunburst` when you need more precision. The response returns base64-encoded image data that you decode and save.

## Control complexity and quality

Quality sets the rendering detail and affects token usage. Options include low, medium, high, and higher tiers. Complexity is a separate dial that controls how much planning the model performs before it renders.

Supported complexity values are low, medium, and high. High is the default if you omit the field. Lower complexity works well for simple background swaps or focused edits. Higher complexity helps with dense text, multi-object scenes, and strict layout constraints. Higher settings can increase latency and occasionally alter areas you did not intend to change, so test both on your prompts.<grok type="render_inline_citation" citation_id="991" />

Add the parameter like this:

```python
result = client.images.generate(
    model="gpt-image-2.6-sunburst",
    prompt="Poster with bold title text and three product photos arranged in a grid",
    quality="high",
    complexity="medium"
)
```

## Create animated GIFs

Set `output_format` to `gif`. You can also supply `frame_count` and `frame_duration_ms`. A typical request uses a small size such as 512x512 with 4–9 frames so the sheet fits.

```python
result = client.images.generate(
    model="gpt-image-2.6-flare",
    prompt="Looping animation of a simple cartoon robot waving, flat style, solid background",
    output_format="gif",
    size="512x512",
    quality="medium",
    frame_count=6,
    frame_duration_ms=200
)
```

Decode the base64 data and save it with a `.gif` extension. The model produces a seamless loop when the prompt asks for one. For consumer-side GIF features and reference image saving, see our guide on [creating GIFs with ChatGPT Images 2.6](/blog/chatgpt-images-2-6-gifs-reference-images-guide/).

![Developer workspace with laptop and code on screen](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)

## Export SVG and use markup for edits

Request `output_format` of `svg` for vector output that scales cleanly for web and print. The model generates editable paths suitable for icons and simple illustrations.

For targeted edits, upload an image and pass markup instructions that identify the region to change. The edit endpoint accepts the original image plus a prompt that describes only the desired modification. Sunburst tends to preserve surrounding details more reliably.

Example edit flow:

```python
with open("original.png", "rb") as img:
    result = client.images.edit(
        model="gpt-image-2.6-sunburst",
        image=img,
        prompt="Change the background to a soft blue gradient while keeping the product exactly the same",
        quality="high",
        complexity="low"
    )
```

Use low complexity for narrow edits so the model does not replan the entire scene.

## Practical tips

Include a stable `safety_identifier` (a hashed user ID) when your app serves individual users. It helps with safety monitoring without sending raw personal data.

Test Flare first on speed-sensitive paths, then validate quality-critical assets on Sunburst. Compare latency and visual fidelity on the same prompts.

Transparent backgrounds work for both models. Request them when you need assets for overlay use.

Watch the official announcement for visual examples of the speed and GIF capabilities:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bJldMYfRvMQ"
    title="Introducing ChatGPT Images 2.6"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

GPT-Image-2.6 Flare and Sunburst give developers a clear choice between speed and precision inside the same API. Flare delivers fast iteration and solid layouts. Sunburst maintains higher consistency on complex or multi-step edits. Combined with GIF output, SVG export, complexity control, and markup-guided edits, the models cover more production workflows without extra tooling.

Switch an existing 2.5 call by updating the model name and, if needed, adding the complexity field. Start with a simple generation, then experiment with GIF and SVG formats on your own prompts.

## Sources

- OpenAI: Introducing Images 2.6 (November 4, 2026)
- OpenAI Developers: Image generation guide and model documentation
- OpenAI pricing and API reference for image models
