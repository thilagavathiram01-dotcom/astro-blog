---
title: "How to Generate 15s Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with native audio using Gemini Omni 1.2 Flash in AI Studio, Vids, and the API."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The model generates and edits clips up to 15 seconds long with native audio. Pricing dropped 30 percent to $0.07 per second for 720p video.

This guide shows how to create your first clip in Google AI Studio or Google Vids, refine it with conversational edits, and call the model from code. All steps follow official Google documentation.

## What changed in Omni 1.2 Flash

Omni 1.1 stopped at 10 seconds. Version 1.2 supports whole-second durations from 3 to 15 seconds for text-to-video and single-image starts. First-and-last-frame interpolation remains limited to 10 seconds. You can attach up to six reference images and perform multi-turn edits on a full 15-second clip.

Every output includes an invisible SynthID watermark. The model is generally available in the Gemini API and Google AI Studio.

![Laptop setup for video editing work](https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?auto=format&fit=crop&w=800&q=80)

## Create a clip in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com) and sign in.
2. Start a new prompt and select the model **gemini-omni-1.2-flash**.
3. Write a detailed prompt that describes the subject, action, setting, camera movement, and audio. Example: “A single continuous tracking shot of a golden retriever running through wildflowers at sunset. Soft backlight. Distant birdsong, no music, no dialogue.”
4. Set duration to 15 seconds, resolution to 720p, and aspect ratio to 16:9 or 9:16.
5. Click Generate. Review the clip and download it.

Free accounts have limited generations. Paid plans and the API remove most daily caps.

## Use Google Vids for free monthly clips

Anyone with a Google account can create up to three 15-second videos per month in Google Vids at no extra cost.

1. Go to [vids.new](https://vids.new) and sign in.
2. Choose AI video creation.
3. Enter your prompt, select landscape or portrait, set length from 3 to 15 seconds, and pick quality.
4. Generate, then extend or insert the clip into a larger project if needed.
5. Download the MP4.

Google Flow offers another free path with daily credits for shorter clips.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Edit an existing clip conversationally

Multi-turn editing is a key improvement. Start with a generated or uploaded clip up to 15 seconds, then continue the conversation.

Example follow-up: “Change the background to a night market with lanterns. Keep the dog and the camera move exactly the same.”

The model updates only the requested elements while preserving the rest of the performance, framing, and audio. This reduces the cost of variants compared with full regeneration.

![Developer workspace with multiple screens](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Call the model from the Gemini API

Install the official Python SDK and set your API key.

```python
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A paper airplane glides through a quiet library. Pages rustle. No music.",
    response_format={
        "type": "video",
        "resolution": "720p",
        "duration": "15s",
        "aspect_ratio": "16:9"
    }
)

# Save the returned video
with open("clip.mp4", "wb") as f:
    f.write(interaction.output_video)
```

You can also pass reference images or a starting frame in the input list. For image-to-video, include the image URI or bytes and set the appropriate generation config. Full parameter details appear in the [Omni documentation](https://aistudio.google.com/docs/omni).

## Tips for better results

- Describe the full shot: subject, action, setting, lighting, camera move, and audio in one prompt.
- Say “single continuous shot” or “no cuts” when you need one unbroken take.
- Draft at 360p or 720p, then upscale the best takes to 1080p or 4K.
- Use reference images for character or product consistency. Limit people to three images each and two characters total.
- Keep first sessions short if you are testing complex motion. Fast sports action and intricate physics still improve with iteration.

## Related reading

If you also build Android apps that surface AI features, see our guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/bring-your-own-agent-android-studio-rabbit-2/).

## Sources

- Google Blog: Introducing Gemini Omni 1.2 Flash (5 November 2026)
- Google AI Studio Omni documentation
- Gemini API video generation reference
