---
title: "How to Make Animated GIFs in ChatGPT with Images 2.6"
description: "Step-by-step guide to creating looping GIFs in ChatGPT using Images 2.6. Includes prompts, speed controls, frame tips, and reference images."
pubDate: 2026-11-09T09:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials"]
noindex: false
---

ChatGPT now turns a text prompt or an uploaded photo into a looping GIF in one step. OpenAI released Images 2.6 on November 4, 2026, adding native GIF creation, saved reference images, and 50% faster image generation across ChatGPT, Codex, and the API.<grok type="render_inline_citation" citation_id="65" />

People create more than 4 billion images per week on OpenAI platforms. The new GIF tools give marketers, creators, and everyday users a simple way to add motion without leaving the chat.<grok type="render_inline_citation" citation_id="65" />

This guide shows exactly how to make GIFs, control speed and frames, save references, and use the API models.

## What Changed in Images 2.6

Images 2.6 generates still images 50% faster than the previous version. In the API, two new models appear: GPT-Image-2.6 Flare for speed (as little as six seconds at low quality) and GPT-Image-2.6 Sunburst for higher detail and better consistency across edits.<grok type="render_inline_citation" citation_id="65" />

The headline addition is animated GIFs. You describe a subject and a motion, or upload a photo or sketch, and ChatGPT returns a looping GIF. After generation you can adjust playback speed and edit individual frames.<grok type="render_inline_citation" citation_id="67" />

Saved reference images let you store a photo of yourself, a pet, or a character once, then call it by name in later chats so the same face or product stays consistent.

The feature is available globally in ChatGPT and Codex on all subscription tiers (web, desktop, and mobile). GIF creation is still rolling out, so some accounts see it later than others.<grok type="render_inline_citation" citation_id="65" />

![Person holding a smartphone showing an app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## How to Create a GIF from a Text Prompt

Open ChatGPT on the web or in the app and start a new conversation.

Type a clear request that names the subject and the action. Include the word "looping GIF" so the model knows what you want.

Example prompt:

```
Make a looping GIF of a cartoon cat waving its paw. Flat colors, white background, 12 frames.
```

Send the message. ChatGPT shows a progress indicator while it builds the frames. When finished, the GIF appears in the chat with a speed control (typically 0.25x to 2x) and options to expand or download it.<grok type="render_inline_citation" citation_id="45" />

You can refine the result with a follow-up message: "Make the wave slower" or "Add a slight bounce." Any edit redraws the whole GIF, so keep changes small.

For better loops, describe the motion in sequence and ask for the last frame to match the first. Specify frame count and timing if you need precision (for example, 8 frames at 150 ms each).

## Animate an Existing Photo or Sketch

Upload an image first by tapping the + button or dragging a file into the chat.

Then ask ChatGPT to animate it while keeping important details still.

Example:

```
Animate this photo as a looping GIF. The dog’s tail wags and ears twitch. Keep the background and the dog’s face still. 10 frames.
```

This works for product shots, character sketches, or personal photos. The model preserves the original look better when you explicitly say what must stay the same.<grok type="render_inline_citation" citation_id="50" />

After the GIF appears, use the speed menu to slow or speed the loop, then download it for social posts, emails, or presentations.

## Use Saved Reference Images

Save a photo once so you can reuse it without uploading again.

In a chat, attach the image and type:

```
Save this character as a reference named Pepper. This is my dog. Remember the ginger coat and white chest spot.
```

Later, in any chat, call it with @Pepper:

```
Draw @Pepper sitting on a beach at sunset, cartoon style, square format.
```

You can then turn that result into a GIF in the same conversation. References help keep brand mascots or family members consistent across many images.<grok type="render_inline_citation" citation_id="60" />

## Tips for Better GIFs

Keep the subject simple. One character or object produces cleaner loops than crowded scenes.

Describe motion in steps rather than a single verb. "Notices the chart, eyes widen, face crumples" works better than "looks sad."

Lock the camera and background. Add phrases such as "fixed camera" and "same background in every frame."

Fewer frames often look sharper. Start with 6–12 frames and increase only if the motion needs more steps.

Test speed after generation. Playback controls let you fine-tune without regenerating.

For product or brand work, mention specific colors, logos, or packaging that must stay identical across frames.

If the feature is missing on your account, start a fresh chat or wait a day or two—the rollout is gradual.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bJldMYfRvMQ"
    title="Introducing ChatGPT Images 2.6"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## API Options for Developers

In the OpenAI API, use GPT-Image-2.6 Flare or Sunburst with the images generations endpoint. Set `output_format` to `gif`. You can control `frame_count` (2–64) and `frame_duration_ms` (20–2000).<grok type="render_inline_citation" citation_id="65" />

Flare prioritizes speed; Sunburst prioritizes quality and edit consistency. A complexity parameter lets you reduce planning effort for quick drafts. Markup editing and SVG export are also available.

Pricing matches previous image models for most use cases. See the official OpenAI pricing page for exact token rates.

If you already work with earlier ChatGPT image tools, the transition is straightforward. For related image workflows, see our guide on [turning sketches into images with ChatGPT](/blog/chatgpt-images-2-5-sketch/).

![Laptop screen showing code and design tools](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Common Limits and Workarounds

GIFs are short loops, not full videos. Complex camera moves or long sequences still need a dedicated video tool.

Text inside GIFs can be imperfect. Spell out exact wording and add "do not change any letters."

Face likeness sometimes drifts if the whole scene animates. Tell the model to keep the face static and move only the background or an accessory.

Free accounts can generate GIFs, though rate limits apply as usual. Paid plans offer higher volume.

Always review the result before sharing. OpenAI applies additional safety checks on GIF outputs.<grok type="render_inline_citation" citation_id="65" />

## Conclusion

Images 2.6 turns ChatGPT into a practical GIF maker. A single clear prompt or an uploaded photo produces a ready-to-share loop, with speed and frame controls right in the chat. Saved references keep characters and products consistent, while the API models give developers the same capabilities with fine-grained timing control.

Start with a simple subject and one clear motion. Adjust speed, refine with short follow-ups, and download the result. The tools are live today for most users, and the official OpenAI announcement and system card provide the full technical details.

## Sources

- [Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/) — OpenAI, November 4, 2026
- [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) — OpenAI Help Center
- [ChatGPT will now make you animated GIFs](https://www.theverge.com/ai-artificial-intelligence/1026474/openai-chatgpt-animated-gifs-images-2-6) — The Verge, November 4, 2026
- Official OpenAI YouTube: Introducing ChatGPT Images 2.6
