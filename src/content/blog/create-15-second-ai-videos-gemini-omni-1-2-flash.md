---
title: "Create 15-Second AI Videos with Gemini Omni 1.2 Flash"
description: "Generate and edit 15-second AI videos with Gemini Omni 1.2 Flash in Google Vids, Flow, or the API. Step-by-step how-to with tips."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google", "productivity"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The update lets you generate and edit videos up to 15 seconds long. It costs less than the previous version and holds details better across frames.

You can try it today in Google Vids, Google Flow, the Gemini app, or via the Gemini API. This guide shows the practical steps for each option so you can produce short clips without a camera crew.

If you already work with other Gemini models, our guide on [adding Gemini 4 Carbon to Android apps](/blog/add-gemini-4-carbon-android-firebase-ai-logic/) covers reasoning tasks that pair well with video workflows.

## What changed in Omni 1.2 Flash

Omni 1.2 Flash extends the native clip length from 10 seconds to 15 seconds. You can also request exact durations between 3 and 15 seconds in one-second steps. The price dropped 30 percent to $0.07 per second for 720p video.

Reference adherence improved. Faces, product packaging, clothing, and brand colors stay consistent when you supply images or short motion clips. Conversational editing lets you revise a clip by describing changes instead of regenerating from scratch. Speech sounds more natural, with clearer lip-sync and support for multiple speakers.

Drafts can start at 360p or 720p, then upscale to 1080p or 4K. The model is generally available across the Gemini API, Gemini for business, Google Vids, Flow, and AI Studio.

![Person working with multiple computer screens for video production](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Generate a clip in Google Vids

Open vids.new in a browser with a Google account. Click the video creation option that uses Gemini Omni. Write a clear prompt that describes the subject, action, setting, camera movement, and duration.

Example prompt: “A 12-second product demo of a white wireless earbud rotating on a marble surface. Soft studio lighting, slow 360-degree orbit, no cuts.”

Select landscape or portrait orientation. Choose the length and quality. Generate the clip. Review the result, then use the extend or edit controls if available. Download the finished MP4 when you are satisfied. Free accounts receive a limited number of generations each month; check the current quota in the interface.

## Create and edit in Google Flow

Go to flow.google and sign in. Select Gemini Omni 1.2 Flash from the model picker. Enter your prompt or upload a reference image. Flow provides daily credits on free tiers for shorter clips.

After the first generation, open the chat panel. Describe a change such as “make the background a sunset beach” or “change the camera to a low angle.” The model updates the existing clip rather than starting over. This saves credits and keeps consistency. Export the result when the edit looks correct.

## Call the model from the API

Developers with a paid Gemini API project can generate videos programmatically. Install the latest Google Gen AI SDK. Set your API key as an environment variable. Use the Interactions API and request a video response.

A basic Python call looks like this:

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A golden retriever running through wildflowers at sunset, 10 seconds, smooth camera pan.",
    response_format={"type": "video"}
)
print(interaction)
```

Specify duration, resolution, and references in the request body according to the current documentation. For multi-turn edits, pass the previous interaction ID. Always review generated content for accuracy before publishing.

![Abstract digital technology background with circuit patterns](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Practical tips for better clips

Write prompts that name the subject, action, lighting, camera move, and exact length. Supply one or two reference images when identity or product accuracy matters. Start at lower resolution to test ideas, then upscale the best versions.

Use conversational edits for small adjustments instead of full regenerations. Keep total length under 15 seconds for a single generation. For longer stories, generate separate shots and assemble them in an editor.

Check the output for text accuracy, object consistency, and motion smoothness. SynthID watermarks appear on free generations; paid API usage follows the terms in the model card.

## Limitations to know

Clips remain short by design. Complex multi-character dialogue or fast action can still show drift. Free tiers include usage limits and watermarks. Pricing and quotas change; confirm the latest rates in Google AI Studio or the Cloud console before large jobs.

The model follows safety policies. Prompts that violate those policies return blocked or empty results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash makes 15-second video generation practical and more affordable. Start in Google Vids or Flow for quick tests. Move to the API when you need automation or higher volume. Pair the video output with reasoning models such as Gemini 4 Carbon for scripts and planning.

Review the official announcement and model documentation for the latest capabilities and pricing.

**Sources**

- Blog.google: Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips (November 5, 2026)
- Google Cloud Blog: Gemini Omni 1.2 Flash now generally available
- Google AI Studio documentation for Omni video generation
