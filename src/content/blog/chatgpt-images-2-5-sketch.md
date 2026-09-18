---
title: "How to Use ChatGPT Images 2.5 with Sketch and Precise Edits"
description: "A practical guide to ChatGPT Images 2.5: generate faster images, use @Sketch, comment on regions, pick templates, and choose Flare or Sunburst in the API."
pubDate: 2026-09-18T19:30:00
tags: ["ai-tools", "chatgpt", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=630&q=80"
---

OpenAI shipped **ChatGPT Images 2.5** on 8 September 2026. The model is the default image stack in ChatGPT, ChatGPT Work, and Codex. It is faster than Images 2.0, holds on to people and products in reference photos more reliably, and follows a sequence of edits without turning the picture into mush.

This guide is a working path: generate, sketch, comment, share a prompt, then pick an API model if you are building a product. Details come from OpenAI’s product post and the Images in ChatGPT help article—not from rumor threads.

## What actually changed

OpenAI’s announcement lists four product-level shifts:

- **Fidelity from references.** Faces, products, and distinctive details stay recognizable when you restyle a photo.
- **Precision edits.** Change one object, background, or line of copy and leave the rest alone.
- **Multi-turn consistency.** Later edits build on earlier ones instead of rewriting the whole frame.
- **Speed.** Generation latency is down by **up to 50%** versus Images 2.0.

ChatGPT also gained tools around the model: **Sketch**, **templates** (poster, merch, product photos, and similar formats), **comments on the image**, and the option to **share the prompt** with a finished picture.

Availability, per OpenAI:

- Images 2.5: all ChatGPT, ChatGPT Work, and Codex tiers on desktop, mobile, and web
- Images with thinking: Plus, Pro, and Business; Enterprise and Edu listed as coming soon in Help Center
- Help Center note: templates are **not yet available in Work mode**

Safety still includes prompt and image checks, **C2PA metadata**, and an invisible watermark. Read the system card if you ship generated images in a product.

![Designer reviewing photo edits on a large monitor in a studio](https://images.unsplash.com/photo-1542744173-8eaa3b11ceff?auto=format&fit=crop&w=1200&h=630&q=80)

## Watch the API models in one minute

OpenAI’s official clip introduces the two API variants—**Flare** (fast default) and **Sunburst** (slower, tighter control)—and notes transparent-background support for assets:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/A7MSwdXj86k" title="Introducing GPT-Image-2.5 in the API — OpenAI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Generate a first image in ChatGPT

1. Open [ChatGPT](https://chatgpt.com) on web or the official iOS / Android app.
2. Describe the picture in one clear paragraph: subject, setting, lighting, aspect, and what must stay literal.
3. Attach a reference photo if the subject is a real person, product, or room.
4. Send the message and wait for the still.
5. Open the image and use the editor if you only need a local change.

A prompt that matches how 2.5 is meant to be used:

> Using the attached product photo, place the bottle on a sunlit kitchen counter with a linen napkin. Keep the label text and cap color exactly as they are. Soft natural window light from the left. Square crop for a shop listing.

Do not invent brand marks or pack copy the photo does not show. If text on a label matters, keep the original photo in the thread and say “do not rewrite the label.”

## Use Sketch when words are the wrong tool

OpenAI’s help article documents Sketch on the **mobile app**. Type **@** in the message box and choose **Sketch**. Draw, pick a color, erase, or undo. Confirm with the checkmark, then add written instructions and send.

OpenAI’s product post also says you can type **@Sketch** in ChatGPT (including the web surface linked from the announcement). If @Sketch is missing on desktop, use mobile for the doodle or attach a photo of a paper sketch.

Example from Help Center, adapted:

1. Sketch a house outline.
2. Add: “Turn this sketch into a watercolor of a red house surrounded by trees. Keep the roofline from the drawing.”
3. Generate, then comment on the porch if the model invented extra windows.

Sketch is a layout hint, not a CAD file. Say which lines are structural (“keep this L-shaped sofa against the left wall”) and which are optional.

![Person drawing a layout sketch on a tablet next to color swatches](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&h=630&q=80)

## Edit with comments instead of a new prompt

Images 2.5 is built for **region comments**. Open the generated image, drop a comment on the part that is wrong, and describe only that change.

Useful comments:

- “Make the eyes green; leave the rest of the face.”
- “Replace the sky with overcast grey; keep the building edges.”
- “Remove the extra coffee cup on the right.”

This is the workflow OpenAI highlights for multi-turn consistency: each comment should be a small delta. If you rewrite the whole brief every turn, you throw away the model’s advantage.

## Start from a template

When you need a flyer, merch mock, or product shot, pick a **template** instead of a blank chat. Add the copy, brand colors, and any photos. Templates are documented as rolling for popular formats; they are **not in Work mode yet**, according to Help Center.

After you like a result, share the image **with the prompt** so a teammate can rerun it on their own photos. OpenAI publishes example shared prompts from the Images 2.5 launch post.

## Developers: Flare vs Sunburst

The Images API now exposes two model names.

**GPT-Image-2.5 Flare**

- Default for most apps
- Higher quality than GPT-Image-2 at about **50% lower latency**
- Fit for social content, visual search, prototypes, and high-volume generation
- OpenAI’s customer notes also call out transparent backgrounds for brand assets and UI

**GPT-Image-2.5 Sunburst**

- Longer generation
- Aimed at campaign creative and polished product imagery that needs tighter edit control

OpenAI points pricing at the developer pricing page for image generation. Do not copy third-party rate cards into your invoice logic—read the official table before you ship.

A simple product loop:

1. Generate variations with Flare.
2. Let a designer pick a hero frame.
3. Run targeted edits on Sunburst if a campaign still needs pixel-level control.
4. Keep C2PA / watermark behavior in your compliance notes.

## Limits worth planning around

- **Rollout.** Features such as Sketch and templates can appear on mobile before every desktop or Work surface.
- **Thinking images** are still gated to paid consumer/business tiers in Help Center language.
- **Safety filters** can refuse a prompt even when your intent is benign. Rephrase; do not try to hide the request.
- **Reference rights.** Only upload photos you are allowed to transform.
- **Text in images** is better than older stacks, but treat small legal copy as something you overlay in a design tool.

## Conclusion

ChatGPT Images 2.5 is the everyday image model in ChatGPT as of 8 September 2026. Use a tight brief and a reference photo for product or portrait work. Use **@Sketch** when composition is easier to draw than to describe. Comment on regions instead of restarting the chat. In the API, start with **Flare** and reserve **Sunburst** for the frames that have to survive a brand review.

Official detail lives on [OpenAI’s Images 2.5 announcement](https://openai.com/index/introducing-chatgpt-images-2-5/) and [Images in ChatGPT](https://help.openai.com/articles/11084440).

## Sources

- [Introducing ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/) — OpenAI, 8 September 2026
- [Images in ChatGPT](https://help.openai.com/articles/11084440) — OpenAI Help Center
- [ChatGPT Images 2.5 system card](https://deploymentsafety.openai.com/chatgpt-images-2-5) — OpenAI
- [Image generation pricing](https://developers.openai.com/api/docs/pricing#image-generation) — OpenAI for Developers
- [Introducing GPT-Image-2.5 in the API](https://www.youtube.com/watch?v=A7MSwdXj86k) — OpenAI on YouTube
