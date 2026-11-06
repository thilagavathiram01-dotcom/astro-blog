---
title: "How to Generate 15s Videos with Gemini Omni 1.2 Flash"
description: "Generate and edit up to 15-second videos with Gemini Omni 1.2 Flash in AI Studio or API, with 30% lower pricing and conversational edits."
pubDate: 2026-11-06T12:00:00
heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The update extends native video generation to 15 seconds, cuts pricing 30 percent, and adds stronger conversational editing.

You can now draft complete product explainers or social clips in one pass, then refine them with follow-up prompts. The model is available in Google AI Studio, the Gemini API, Google Vids, and select Gemini app plans.

This guide shows the exact workflow for generating and editing 15-second videos.

## What Changed in Omni 1.2 Flash

Previous Omni Flash models capped clips at 10 seconds. Version 1.2 supports durations from 3 to 15 seconds in one-second steps. Pricing for 720p output dropped to $0.07 per second.

You can draft at 360p or 720p, edit conversationally, then upscale final clips to 1080p or 4K. Reference images and short motion clips keep characters, products, and brand colors consistent across the full length.

Native audio is included. Multi-turn editing lets you swap backgrounds, change lighting, or adjust framing without regenerating from scratch.

![Video production setup with camera and laptop](https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Generate a 15-Second Video

1. Open Google AI Studio at aistudio.google.com and sign in.

2. Select the model gemini-omni-1.2-flash from the model picker.

3. Write a detailed prompt. Include scene, action, camera movement, lighting, and duration. Example: "A product bottle on a wooden table, camera slowly orbits, soft daylight, 12 seconds."

4. Set duration between 3 and 15 seconds and resolution to 720p for the first pass.

5. Generate. The model returns a video with synchronized audio in the preview.

6. Review the clip. Note any issues with motion, consistency, or text.

7. Send a follow-up message in the same conversation. Example: "Make the background a bright kitchen and slow the orbit."

The preview updates. You can continue iterating until the clip matches the brief.

## Using the Gemini API

Developers call the Interactions API with model gemini-omni-1.2-flash. Provide the prompt, optional reference images, and video config for duration and task type (text_to_video, image_to_video, or edit).

Drafts at lower resolution keep costs down. Once satisfied, upscale the best version. The same conversational pattern works in code: pass the prior interaction ID for multi-turn edits.

Google Vids also offers free 15-second generations for anyone with a Google account, limited to three per month.

If you are building web apps that include generated media, see our guide on [building full-stack web apps with Gemini 4 Argon in AI Studio](/blog/build-fullstack-web-app-gemini-4-argon-ai-studio/).

![Laptop screen showing video editing timeline](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

Specify exact duration and camera language. "Slow push-in" or "static medium shot" produces more predictable motion than vague requests.

Upload clear reference images for products or characters. Label them in the prompt so the model maintains identity across frames.

Start short. Generate a 5-second version first, confirm style, then extend or regenerate at full length.

Use lower resolution for exploration. Upscale only the final selected take to control spend.

For social ads, request text overlays in the initial prompt. Confirm spelling in the first generation before editing.

## Conclusion

Gemini Omni 1.2 Flash makes 15-second video generation practical for product clips, explainers, and social content. The price reduction and conversational editing reduce iteration time.

Open AI Studio, select the model, and generate your first clip today. Refine with short follow-ups until the result matches the sketch in your prompt.

## Sources

- Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips: https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Create longer AI videos with Omni 1.2 in Google Vids: https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/
- Generate and edit videos with Gemini Omni Flash: https://aistudio.google.com/docs/omni

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/guv2-EoGUXw"
    title="How to edit & create videos with Gemini Omni"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
