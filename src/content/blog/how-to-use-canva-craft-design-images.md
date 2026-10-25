---
title: "How to Use Canva Craft for Design Images"
description: "Step-by-step guide to Canva Craft, the first in-house AI image model. Generate precise 2K design images in Dream Lab or via the Connect API."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Canva launched Craft on 22 October 2026 as its first image generation model built and trained from scratch by Canva Research. It focuses on design work such as posters, social posts, infographics and marketing assets rather than general photography.

The model uses a two-stage process. A planning stage first maps layout, hierarchy, object placement and text. A rendering stage then produces the final image at up to 2K resolution. This helps keep text legible and objects in the positions you requested.

Craft is available to all Canva users through Dream Lab and to developers through the Connect API. It ranked fourth overall on DesignArena at launch and first in the People & Portraits and Landscapes & Nature categories.

## Access Canva Craft in Dream Lab

Open Canva in a browser or the mobile app and sign in. Any account works, though free accounts have monthly generation limits.

Click Dream Lab in the left panel on the homepage. If it does not appear, select More and then Dream Lab. You can also go directly to canva.com/dream-lab.

Under the prompt box, confirm that Canva Craft (or craft_v1_2k) is selected as the model. Choose an aspect ratio from the available options or enter a custom size. More than 30 aspect ratios are supported.

Write a clear prompt. Include the purpose of the image, exact text you want (use quotation marks), subject details, lighting and mood. For example: a clean infographic poster titled "Ocean Plastics 2026" with three stat callouts and a wave illustration.

Click generate. Generation takes longer than some other models because of the planning stage—often 50 to 60 seconds. Review the result, check any text carefully, and download or insert it into a design.

![Designer working at a computer with code and multiple screens](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Generate Images with the Connect API

Developers can call Craft through the image generation endpoint in Canva’s Connect API. The API is still in preview.

Send a POST request to /v1/image-generations with the model set to craft_v1_2k. Include your prompt, aspect ratio and an idempotency key.

Example request body:

```json
{
  "prompt": "A clean infographic poster titled 'Ocean Plastics 2026' with three stat callouts and a wave illustration",
  "model": "craft_v1_2k",
  "aspect_ratio": "portrait_2_3",
  "idempotency_key": "9c1f2d3e-5b6a-4c7d-8e9f-0a1b2c3d4e5f"
}
```

You need a user access token with the asset:write scope. Poll the job status until it succeeds. Each generation uses the account’s AI credits. Download links expire after 24 hours. You can optionally upload the result directly to the user’s Canva uploads.

If Craft is unavailable, a pinned request returns a model_not_available error. Remove the model pin to let Canva choose another model.

## Why Craft Handles Design Differently

Most image models generate pixels directly from a prompt. Craft separates planning from rendering. The planning model decides which elements appear, their relative scale, spatial relationships, visual hierarchy and any required text. The rendering model then produces the high-resolution image from that plan.

Training data emphasises Canva’s own templates—posters, social posts, presentations, menus and typography-heavy layouts—rather than mostly photographs. Professional designers evaluated more than 25,000 image pairs during development. When automated scores disagreed with designer judgement, the team followed the designers.

This produces more accurate text rendering in 55 languages and better object placement for complex layouts. Outputs work well with Canva’s Magic Layers feature, which can turn generated images into editable design elements.

![Cluttered creative desk with design tools and notes](https://images.unsplash.com/photo-1747405415037-5bb499d262e0?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Better Results

Put exact wording you want in the image inside quotation marks and specify which text should be most prominent. Describe lighting, colours and mood in concrete terms. Ask for “long shadows and a lone tree under a purple sky” rather than “dramatic landscape”.

Choose the aspect ratio before generating so the composition matches the final use (social post, story, banner or poster). Generate one or two variations, then refine the prompt based on what needs adjustment instead of regenerating the entire image from scratch.

Free accounts receive a limited number of generations per month. Pro, Teams and Enterprise accounts receive higher limits. Check your remaining credits before starting a large batch of assets.

Review every image before publishing. Even with improved text handling, verify spelling, especially for languages outside the most common set.

## Compare with Other Models

Craft is optimised for design workflows inside Canva. If you already work in Gemini and need multi-image consistency or character references, [Nano Banana 2.1 in the Gemini app](/blog/how-to-use-nano-banana-2-1-gemini-app/) remains a strong alternative for those specific tasks.

Craft’s two-stage approach shines when you need reliable text and structured layouts for marketing materials. It is less focused on pure photorealism or highly stylised artistic experimentation compared with some dedicated image models.

## Watch a Quick Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/sAcCjbgQJAw"
    title="Canva Craft - How To Use - Compared To Image 2.5 and NanoBanana 2.1"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Comes Next

Canva has already mentioned faster variants (Craft-fast and Craft-ultrafast) that will reduce inference cost and latency. MCP support for AI assistants is listed as coming soon, so agents will be able to generate Craft images as part of larger workflows.

For now, start in Dream Lab with a specific marketing or social asset prompt. Test the planning-to-render behaviour on text-heavy layouts and see whether the extra precision saves editing time in your workflow.

## Sources

- Canva Newsroom: Introducing Canva Craft (22 October 2026)
- Canva Developers Community: Connect API announcement for Craft
- DesignArena leaderboard rankings at launch
