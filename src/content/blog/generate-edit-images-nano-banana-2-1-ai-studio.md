---
title: "How to Generate and Edit Images with Nano Banana 2.1 in AI Studio"
description: "Step-by-step guide to generate and edit high-quality images with Google Nano Banana 2.1 in AI Studio and the Gemini app, including prompts and settings."
pubDate: 2026-10-16T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to", "ai"]
noindex: false
---

Google released Nano Banana 2.1 on October 6, 2026. The model improves visual quality, text rendering, and character consistency while cutting image generation costs roughly in half compared with its predecessor.

This guide shows how to generate and edit images with Nano Banana 2.1 inside Google AI Studio and the Gemini app. You get practical steps, prompt examples, and settings that produce reliable results.

![AI image generation workspace](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

## What Nano Banana 2.1 offers

Nano Banana 2.1 (model ID `gemini-nano-banana-2.1`) is an update to Nano Banana 2. It runs at Flash-level speed and serves as the efficient counterpart to Nano Banana Pro.

Key improvements listed on the official model page include:

- Better visual quality and realism at 1K, 2K, and 4K resolutions (1K is the default).
- Fixed tiling artifacts on wide ratios such as 1:4, 4:1, 1:8, and 8:1.
- Stronger text rendering and infographic accuracy.
- Support for up to 14 reference images (up to 4 characters and 10 objects for consistency).
- Grounding with Google Web and Image Search.
- Configurable thinking levels: minimal, medium (default), and high.

All generated images include a SynthID watermark. The model accepts text, images, video, and PDF inputs and returns images plus optional text.

For API integration details, see our related guide on the [Gemini Nano Banana 2.1 Image API](/blog/gemini-nano-banana-2-1-image-api/).

## Open Nano Banana 2.1 in Google AI Studio

1. Go to [aistudio.google.com](https://aistudio.google.com).
2. Sign in with your Google account.
3. Start a new prompt or open an existing chat.
4. Click the model selector and choose `gemini-nano-banana-2.1`. If it does not appear, refresh the page or check that your account has access to the latest models.
5. Enable any needed tools such as Google Search grounding from the tools panel.

AI Studio gives you direct control over aspect ratio, resolution, and thinking level without writing code. Responses appear in the chat with downloadable images.

## Generate your first image

Type a clear prompt that describes the subject, style, lighting, and any required text.

Example prompt:

"Create a photorealistic product photo of a matte black coffee grinder on a marble counter. Soft directional studio lighting, subtle reflections, clean luxury composition, no visible logo."

After you send the prompt:

1. Review the generated image.
2. Use the options that appear to regenerate, vary the prompt slightly, or download the result.
3. Adjust settings if available: set aspect ratio (for example 16:9 or 1:1), image size (1K, 2K, or 4K), and thinking level.

Higher thinking levels improve complex compositions and text accuracy but take longer. Start with the default medium level for most tasks.

![Digital art and design process](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Edit existing images with references

Upload one or more reference images (up to 14) and describe the changes you want.

Steps:

1. Click the attachment or image upload button in AI Studio.
2. Add your source image(s).
3. Write an edit instruction: "Change only the background to a soft beige studio backdrop. Keep the product, lighting, and all other details unchanged."
4. Send the prompt.

The model maintains character and object consistency across turns when you continue the conversation. For multi-character scenes, upload separate reference images for each person or object you want to preserve.

You can also ground the generation. Turn on Google Search so the model checks real-world details before creating the image. This helps with landmarks, current events, or accurate product depictions.

## Use Nano Banana 2.1 in the Gemini app

The same model powers image generation inside the Gemini mobile and web apps.

1. Open the Gemini app or gemini.google.com.
2. Start a chat.
3. Tap the image or generation tools if available, or simply describe the image you want.
4. For edits, attach a photo and give a clear instruction.

Availability of specific controls can vary by plan. Google AI Pro and Ultra subscribers generally see the full set of options and higher usage limits.

## Practical tips for better results

- Be specific about counts, colors, positions, and materials. The model follows detailed instructions more reliably than earlier versions.
- For text inside images, place the exact wording in quotes and specify font style or placement.
- When editing, state what must stay the same. Phrases like "preserve everything else exactly" reduce unwanted changes.
- Use reference images for character consistency across a series of shots.
- Test wide formats such as 4:1 or 8:1 now that tiling issues are fixed.
- Check the SynthID watermark if you need to verify an image was generated by Google models.

Pricing for API use is roughly half the previous image cost at 1K and 2K resolutions, though input token rates are higher. Inside AI Studio and the Gemini app, usage counts against your plan limits.

## Conclusion

Nano Banana 2.1 makes high-quality image generation and editing more practical for everyday work. Open Google AI Studio, select the model, and start with a detailed prompt or an uploaded reference. The improved consistency and lower cost let you iterate faster on product shots, illustrations, and marketing visuals.

Try the steps above with your own assets and adjust thinking level and resolution until the output matches your needs.

## Sources

- Gemini Nano Banana 2.1 model page, Google AI for Developers: https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1
- Image generation documentation, Google AI for Developers: https://ai.google.dev/gemini-api/docs/image-generation
- Nano Banana 2.1 model card, Google DeepMind: https://deepmind.google/models/model-cards/nano-banana-2-1/

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/nCD5cLwoyjw"
    title="Nano Banana 2.1 Just Changed AI Image Generation FOREVER!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
