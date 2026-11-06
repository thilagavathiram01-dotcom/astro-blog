---
title: "How to Use Gemini Omni 1.2 Flash for 15s Videos"
description: "Step-by-step guide to Gemini Omni 1.2 Flash: generate and edit up to 15-second videos with native audio, multi-turn edits, and lower pricing."
pubDate: 2026-11-06T12:00:00
heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native audio. Pricing dropped 30% from the previous version to $0.07 per second for 720p output.

You can access it in Google AI Studio, the Gemini API, Google Vids, the Gemini app (for AI Ultra subscribers), and Google Ads. The older Omni 1.1 model routes to 1.2 starting December 3, 2026.

This guide shows how to create your first clips, edit them conversationally, and control costs.

## What changed in Omni 1.2 Flash

Omni 1.2 supports duration from 3 to 15 seconds in one-second steps. Previous versions capped at 10 seconds. You can also extend clips in later turns up to a total of 30 seconds.

Reference following improved. You can supply up to six reference images or a short motion clip (up to 3 seconds) and the model holds character, product, and style consistency better across the full clip.

Conversational editing works across the entire 15-second length. You describe one change (“make it night and raining, keep the camera move the same”) and the model regenerates only what you asked for.

Native audio remains on by default. Specify dialogue in quotes and ambient sound in the prompt, or write “no music” / “no dialogue” to suppress them.

![Film camera on a set ready for production](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)

## Generate your first video in Google AI Studio

Open aistudio.google.com and sign in. Enable billing on a Google Cloud project; Omni has no free tier.

1. Select **Gemini Omni 1.2 Flash** (`gemini-omni-1.2-flash`) from the model picker.
2. Choose aspect ratio (16:9 or 9:16) and resolution. Start with 360p or 720p for drafts.
3. Set duration between 3 and 15 seconds.
4. Optional: upload up to six reference images or a short motion clip.
5. Write a detailed prompt that includes shot framing, camera move, lighting, action, and any audio.
6. Generate. Review the clip, then type follow-up instructions in the same chat.

Example prompt for a continuous shot:

“A single unbroken tracking shot following a paper airplane as it glides through a busy library. Pages rustle and a librarian whispers ‘hey!’ as it passes. No music. Warm afternoon light.”

When the result is close, request an upscale to 1080p or 4K. Upscaling is cheaper than regenerating the whole clip at high resolution from the start.

## Use the Gemini API with Python

Install the official SDK and set your key:

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key"
```

Text-to-video example:

```python
from google import genai
import base64

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A golden retriever runs along a beach at sunrise, slow tracking shot, waves and seagulls audible.",
    response_format={
        "type": "video",
        "resolution": "720p",
        "aspect_ratio": "16:9",
        "duration": "8s"
    },
)

with open("beach.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

For multi-turn editing, reuse the interaction ID. The Interactions API keeps state so you can refine without re-uploading the source.

![Developer reviewing video generation results on multiple screens](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Edit existing video conversationally

Upload or pass a public URL of a clip up to 15 seconds. Then prompt the change:

“Change the scene to night in heavy rain. Keep the people, their dialogue, and the camera move the same.”

The model returns a new clip that preserves what you told it to keep. Change one element per turn for more predictable results.

First-and-last-frame interpolation works for durations of 3–10 seconds. Supply both images and the model fills the motion between them.

## Tips for better results

- Ask for “one continuous shot” or “a single unbroken take” if you want no jump cuts.
- Quote any on-screen text and end with “every word spelled exactly as given.”
- Name camera moves explicitly: “slow push in,” “locked-off,” “dolly zoom,” “FPV drone.”
- Draft at 360p or 720p, edit, then upscale only the keepers.
- Specify audio clearly. Dialogue in quotes, ambient sound described, or “no music.”

Cost control matters. A 15-second 720p clip is roughly $1.05. A 360p draft of the same length costs about one-third as much.

## Where else you can use it

In Google Vids anyone with a Google or Workspace account can generate 15-second clips at no extra cost beyond the normal plan. Drop the generated scene onto the timeline and add text or voiceover.

Google AI Ultra subscribers see the video tool rolling out in the Gemini app. Flow continues to support multi-turn creative sessions.

For earlier Omni workflows, see our guide to the previous Gemini Omni Flash API.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4v8ORjEmec4"
    title="Introducing the Gemini Omni Flash API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash lowers the cost and raises the length limit for conversational video generation. Start with short drafts in AI Studio or the API, refine with natural-language edits, and upscale only the clips you keep.

The model is generally available now. Check the official Gemini API documentation for the latest parameters and pricing.

## Sources

- Google blog: Introducing Gemini Omni 1.2 Flash (November 5, 2026)
- Google AI Studio documentation for Omni
- Official google-genai SDK examples in the Gemini cookbook
