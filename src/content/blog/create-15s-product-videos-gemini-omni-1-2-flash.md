---
title: "Create 15s Product Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to generate and edit 15-second product videos using Gemini Omni 1.2 Flash in AI Studio and the API, including pricing tips."
pubDate: 2026-11-08T15:00:00
heroImage: "https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The model generates and edits videos up to 15 seconds long with native audio. It costs about $0.07 per second for 720p output, 30 percent less than the previous version.<grok type="render_inline_citation" citation_id="137" />

Product teams can now create full ad spots or explainers in one generation. Reference images keep packaging, colors, and faces consistent across angles. Multi-turn edits let you change backgrounds or lighting without starting over.

This guide shows how to produce a 15-second product video in Google AI Studio and via the Gemini API.

![Professional video camera setup in a studio](https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=800&q=80)

## What changed in Omni 1.2 Flash

Clips now run from 3 to 15 seconds in one-second steps. Earlier versions stopped at 10 seconds. You can draft at 360p or 720p, then upscale keepers to 1080p or 4K.

The model follows references more closely. Combine product photos, style frames, short motion clips up to three seconds, and audio cues. Faces, garments, and brand text stay stable.

Conversational editing works across the full 15 seconds. Swap a background, change weather, or adjust aspect ratio in follow-up turns. Outputs include a SynthID watermark.

Availability is general on the paid Gemini API tier and in Gemini for business. The Gemini app receives 15-second clips first for Ultra subscribers. Google Vids and Flow also support it.<grok type="render_inline_citation" citation_id="135" />

## Prepare your assets

Gather clear product photos. Front, side, and detail shots work best. Add a style reference if you want a specific look. Keep files under the input limits.

Write a detailed prompt. Include scene, camera movement, lighting, mood, and duration. Specify "15 seconds" or the exact length you need.

Example prompt for a water bottle:

"A sleek stainless steel water bottle on a wooden table in soft morning light. The camera slowly orbits 360 degrees. Condensation forms on the surface. Soft ambient sound of a cafe. 15 seconds, cinematic, product photography style."

For consistency, upload the same product image as a reference.

## Generate in Google AI Studio

Open aistudio.google.com and sign in with a billing-enabled project. Select gemini-omni-1.2-flash from the model list.

Upload your product image. Paste the prompt. Set the response format to video. Choose duration, resolution, and aspect ratio.

Start with 720p and 8–12 seconds for testing. Generate. Download the MP4 once complete.

Review the clip. Note any drifts in product details or unwanted cuts. Use the same conversation to request an edit: "Change the background to a bright kitchen while keeping the bottle identical."

The model applies the change and returns an updated video. Repeat until the result matches your brief.

For higher quality, generate at 720p then request an upscale. This keeps early costs low.

![Filmmaker operating a professional camera rig](https://images.unsplash.com/photo-1758390851031-bcf34075ca61?auto=format&fit=crop&w=800&q=80)

## Call the model from the API

Use the Interactions API with the google-genai SDK. Install the package and set your API key.

Here is a minimal Python example for text-to-video:

```python
from google import genai
import base64

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A product bottle on a table, slow 360 orbit, soft light, 12 seconds.",
    response_format={"type": "video", "duration": "12s", "resolution": "720p"}
)

with open("product.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

To add a reference image, include it in the input content. For multi-turn edits, pass the previous_interaction_id.

Check official docs at aistudio.google.com/docs/omni for full parameters. Video output is billed at roughly $0.07 per second at 720p. A 15-second clip costs about $1.04 in video tokens plus any input charges.<grok type="render_inline_citation" citation_id="142" />

## Tips for better product results

Start with strong reference images. Consistent lighting and clean backgrounds reduce drift.

Request exact durations. One-second increments give precise control for social ads.

Draft cheap, then refine. Generate several short versions at 360p. Upscale only the best.

Use multi-turn edits for variants. One base clip can become different audience versions by changing background or text overlays.

Test lip-sync and speech if your product video includes voice. The model improved natural dialogue and multi-speaker conditioning.

Always review for brand accuracy. Packaging text and logos can still vary; iterate if needed.

For longer sequences, generate segments and combine them in an editor. The model does not yet produce continuous multi-minute clips.

## Pricing and access notes

The paid Gemini API tier is required. There is no free tier for Omni models. Introductory video pricing is $0.07 per second at 720p.

Higher resolutions cost more after upscaling. 1080p and 4K are generated at lower resolution then upsampled.

Google Cloud customers can use Provisioned Throughput for predictable volume. Outputs carry SynthID for provenance.

See the pricing page for the latest token rates. Input tokens for images and text are $1.50 per million.

## Watch a demonstration

Google's introduction to Gemini Omni shows the core idea of creating and editing video from any input. The 1.2 update extends those capabilities to longer, more consistent clips.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KUyRq7szZsM"
    title="Introducing Gemini Omni: Create Anything from Anything"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash makes 15-second product videos practical for most teams. Clear references, careful prompting, and multi-turn edits produce usable results without a full production crew.

Start in AI Studio to test ideas. Move to the API when you need automation or higher volume. Check the official announcement and docs for the latest limits.

Related reading: [How to Generate and Edit Videos with Gemini Omni](/blog/gemini-omni-generate-edit-videos/).

## Sources

- Google Blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing (5 November 2026)
- Google AI Studio: Gemini Omni Flash documentation and pricing
- Google DeepMind: Gemini Omni model page
