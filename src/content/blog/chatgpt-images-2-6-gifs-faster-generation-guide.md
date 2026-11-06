---
title: "How to Create GIFs with ChatGPT Images 2.6"
description: "Step-by-step guide to ChatGPT Images 2.6: generate animated GIFs, use Flare and Sunburst models, and speed up image creation by 50%."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "chatgpt", "productivity"]
noindex: false
---

OpenAI released Images 2.6 on November 4, 2026. The update adds animated GIF generation to ChatGPT and Codex while cutting image creation time by about 50 percent. Developers also get two new API models, Flare and Sunburst, plus markup edits and SVG export.

This guide shows how to create GIFs in ChatGPT, choose the right model for speed or quality, and apply the same features through the API. All details come from OpenAI’s official announcement and developer documentation.

## What Changed in Images 2.6

Images 2.6 is available globally today across every ChatGPT and Codex subscription tier on web, desktop, and mobile. The biggest practical additions are GIF output and saved reference images. You can turn a text prompt or an existing photo into a looping animation, adjust playback speed, and edit individual frames.

For developers, GPT-Image-2.6 Flare prioritizes speed. At low quality it can return an image in as little as six seconds. GPT-Image-2.6 Sunburst focuses on higher detail and stronger consistency across successive edits when quality is set to medium or high. Both models support a new complexity parameter that controls how much planning the model applies before generating the image.

OpenAI reports that users already create more than four billion images per week across ChatGPT, Codex, and the API. The speed improvement and GIF support aim to make that volume more useful for social media, product shots, and quick storyboards.

![Laptop screen showing abstract blue waves](https://images.unsplash.com/photo-1642176849879-92f85770f212?auto=format&fit=crop&w=800&q=80)

## Create an Animated GIF in ChatGPT

1. Open ChatGPT and start a new conversation or continue an existing one.
2. Ask for image generation and request a GIF. Example prompt: “Create a looping GIF of a golden retriever running through a sunlit meadow at sunset, camera slowly tracking alongside, soft wind in the grass.”
3. After the first result appears, use the speed controls to slow or speed the loop.
4. If you need frame-level changes, open the frame editor and adjust individual panels, then regenerate.
5. Download the finished GIF for social posts or marketing assets.

You can also start from an uploaded photo. Upload a product shot or character image, then ask ChatGPT to animate it into a short loop. The same interface lets you save reference images of people, pets, or brand characters so later prompts reuse them without re-uploading.

## Choose Flare or Sunburst in the API

Developers call the models with the identifiers `gpt-image-2.6-flare` and `gpt-image-2.6-sunburst`. Flare is the better default for rapid iteration. Sunburst is preferable when you need tighter character consistency or more complex scenes.

Basic generation request structure (Python example using the official client):

```python
from openai import OpenAI
client = OpenAI()

response = client.images.generate(
    model="gpt-image-2.6-flare",
    prompt="A modern product photo of a ceramic coffee mug on a light wood table, soft natural light, 16:9",
    quality="low",
    size="1024x1024"
)
```

Set `quality` to `low` for the fastest Flare results. Raise it to `medium` or `high` and switch to Sunburst when visual fidelity matters more than turnaround time. The complexity parameter (`low`, `medium`, `high`) further tunes planning effort; low complexity suits quick edits, while higher settings help with dense layouts or many constraints.

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Markup Edits and SVG Export

Image markup, previously available only in the ChatGPT interface, now works through the API. Supply an original image plus a same-size transparent overlay that marks the region you want changed, then describe the edit in text. This gives precise control without rewriting the entire prompt.

SVG export lets you pull vector-friendly versions of generated designs for websites, apps, or print. Combine it with the higher consistency of Sunburst when you need the same logo or product mark to hold together across multiple sizes.

Pricing for the API models follows the standard image-generation rates published on the OpenAI developer site. ChatGPT users generate images and GIFs within their existing plan limits; no separate credit purchase is required for the new features.

## Tips for Better Results

- Write prompts that describe both the subject and the motion when requesting GIFs. Specify the number of frames or the loop style if you have a clear preference.
- Save reference images early. Consistent characters and products are easier to maintain once the reference library is populated.
- Start with Flare at low quality for concept exploration, then move promising results to Sunburst at medium or high quality for final assets.
- Use markup for localized changes instead of full regenerations. This preserves the rest of the composition and reduces token cost.
- Check the system card linked from OpenAI’s announcement for the latest safety and content policy details before production use.

If you already work with other generative tools, compare the GIF workflow here with video options such as those covered in our guide on [Gemini Omni 1.2 Flash for 15-second videos](/blog/how-to-use-gemini-omni-1-2-flash/). Images 2.6 is optimized for short loops rather than longer clips.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bJldMYfRvMQ"
    title="Introducing ChatGPT Images 2.6"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Images 2.6 makes animated GIFs a one-prompt task inside ChatGPT and gives developers two specialized models that trade off speed against detail. The combination of faster generation, frame-level GIF controls, saved references, markup edits, and SVG export covers most day-to-day visual production needs without leaving the OpenAI ecosystem.

Start with a simple GIF request in ChatGPT to see the workflow, then move the same idea into the API with Flare or Sunburst once you know which quality level fits the project. Official documentation and the system card remain the best sources for pricing, rate limits, and policy updates.

## Sources

- [Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/) — OpenAI, November 4, 2026
- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog) — November 2026 entries for gpt-image-2.6-flare and gpt-image-2.6-sunburst
- [Image generation guide](https://platform.openai.com/docs/guides/images) — OpenAI developer documentation
- [System card for ChatGPT Images 2.6](https://deploymentsafety.openai.com/chatgpt-images-2-6) — OpenAI
