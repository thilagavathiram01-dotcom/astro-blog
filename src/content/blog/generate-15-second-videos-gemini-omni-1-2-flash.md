---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with native audio using Gemini Omni 1.2 Flash in AI Studio and the API."
pubDate: 2026-11-06T12:00:00
heroImage: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native audio, improved character consistency, and a 30% price cut to $0.07 per second at 720p. You can draft at 360p or 720p, refine through conversation, then upscale to 1080p or 4K.

This guide shows how to create your first 15-second clip in Google AI Studio and via the Gemini API. It covers text-to-video, image references, conversational edits, and extension. All details come from Google’s official announcement and documentation.

![Laptop displaying video editing software on a wooden desk](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)

## What changed in Omni 1.2 Flash

Omni 1.2 Flash builds on the earlier 1.1 version. Maximum generation and editing length rose from 10 seconds to 15 seconds. You can choose any whole-second duration from 3 to 15 seconds. First-and-last-frame interpolation stays limited to 3–10 seconds. Per-turn video extension adds 3–10 seconds, with a total length up to 30 seconds.

Reference support improved. The model holds consistency across up to six reference images, including character and product details. Native audio includes more natural multi-speaker speech and better lip-sync. Camera control is stronger for continuous moves.

Pricing dropped 30%. At 720p the rate is $0.07 per second of video output. Drafting at lower resolutions and editing instead of regenerating keeps costs lower. The model is generally available on the Gemini API, Google AI Studio, Google Cloud, Google Vids (free tier for up to three 15-second videos per month), and rolling out in the Gemini app.

For earlier Omni workflows, see our guide to the [Gemini Omni Flash video API](/blog/gemini-omni-flash-video-api/).

## Generate a 15-second video in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com) and sign in with a Google account that has API access.
2. Select the model `gemini-omni-1.2-flash`.
3. Choose the Interactions mode for conversational video work.
4. Enter a detailed prompt. Example: “A golden retriever runs through a sunlit meadow at sunset, camera slowly tracks alongside, soft wind in the grass, natural ambient audio.”
5. Set duration to 15 seconds, resolution to 720p, and aspect ratio to 16:9 or 9:16.
6. Generate. Review the clip with audio.
7. Follow up in the same conversation: “Change the lighting to golden hour and add a distant forest on the right.” The model updates the video while preserving the rest of the scene.
8. Download the final MP4 or continue refining.

You can also upload reference images (up to six) for character or product consistency. Upload a product photo and prompt: “Show this exact product rotating on a clean white background for 12 seconds with soft studio lighting.”

![Person editing a video project on a computer monitor](https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?auto=format&fit=crop&w=800&q=80)

## Use the Gemini API with the Interactions endpoint

The model uses the Interactions API for multi-turn editing. Install the official Google GenAI Python SDK if you have not already.

Basic text-to-video call:

```python
from google import genai
import base64

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A marble rolls down a chain-reaction track, continuous smooth camera follow, 12 seconds.",
    response_format={"type": "video"}
)

with open("marble.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

For conversational editing, pass the previous interaction ID on the next turn. You can also supply an input video for editing or extension. First-and-last-frame interpolation and reference-to-video are supported. Check the official Omni guide in AI Studio for full parameter options, including seed for deterministic outputs and custom labels.

Note: requests to the older `gemini-omni-1.1-flash` model will automatically route to 1.2 Flash starting December 3, 2026, billed at the new lower rates.

## Draft, edit, then upscale

Generate drafts at 360p or 720p to iterate quickly and cheaply. Use conversational turns to fix details instead of regenerating the full clip. When satisfied, upscale the best version to 1080p or 4K. The model supports standalone upscaling of previously generated videos.

In Google Vids, free Google accounts can generate up to three 15-second videos per month. This is useful for quick product promos or educational clips before moving to the API for higher volume.

## Tips for better results

- Write prompts with scene description, camera movement, lighting, mood, and audio notes.
- Use reference images for faces, products, or style consistency across shots.
- Specify exact duration in whole seconds.
- Edit one major change per turn to keep the rest of the scene stable.
- Test at lower resolution first.
- For multi-speaker dialogue, describe who speaks and when.

## Limitations to know

Video length for pure generation and most editing is capped at 15 seconds. Extension and interpolation have shorter per-turn limits. Audio is generated natively but may not match every real-world sound perfectly. Access in the Gemini app rolls out gradually; 15-second clips are prioritized for Ultra subscribers. Check regional availability and rate limits in the documentation.

## Conclusion

Gemini Omni 1.2 Flash makes 15-second video generation practical and more affordable. Start in AI Studio for quick tests, then move to the Interactions API for production workflows. Draft low, edit conversationally, and upscale the winners. The combination of longer clips, stronger consistency, and lower pricing opens new options for product explainers, social ads, and short stories.

Try it today in Google AI Studio or review the full developer documentation for advanced parameters.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KUyRq7szZsM"
    title="Introducing Gemini Omni: Create Anything from Anything"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Gemini Omni 1.2 Flash: 15-second video and lower pricing](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) — Google Blog, November 5, 2026
- [Generate and edit videos with Gemini Omni Flash](https://aistudio.google.com/docs/omni) — Google AI Studio documentation
- [Gemini Omni 1.2 Flash model page](https://aistudio.google.com/docs/models/gemini-omni-flash) — Google AI Studio
- [Create longer AI videos with Omni 1.2 in Google Vids](https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/) — Google Workspace blog, November 5, 2026
- [Gemini API changelog](https://ai.google.dev/gemini-api/docs/changelog) — November 5, 2026 update
