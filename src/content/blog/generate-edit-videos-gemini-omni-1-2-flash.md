---
title: "Generate and Edit Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating 15-second videos with Gemini Omni 1.2 Flash, conversational edits, and $0.07/s pricing."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1758390851031-bcf34075ca61?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "ai", "google", "productivity"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native audio. Pricing dropped 30 percent to $0.07 per second for 720p output.

You can draft at lower resolutions, refine details through conversation, and upscale the best results to 1080p or 4K. The model is generally available in the Gemini API, Gemini for business, Google Flow, Google Vids, and the Gemini app for AI subscribers.

This guide shows how to access the model, write effective prompts, generate your first clip, and edit it turn by turn. All steps follow official Google documentation.

## Access Gemini Omni 1.2 Flash

Open Google AI Studio or the Gemini app and select the Omni model. For API work, use the model ID `gemini-omni-1.2-flash` with the Interactions API.

Business users find it in the Google Cloud console under Vertex AI Studio media tools. Google AI Ultra subscribers get 15-second clips in the Gemini app. Other AI plans receive the model with shorter limits in some surfaces.

No special waitlist is required for general availability. An active Google account with AI features enabled is enough for consumer surfaces.

![Film crew operating a professional camera on set](https://images.unsplash.com/photo-1781127445140-969397fa151c?auto=format&fit=crop&w=800&q=80)

## Write a Clear Prompt

Describe the full shot in plain language. Include the subject and action, setting, camera movement, lighting, and audio cues.

A strong structure is:

1. Subject and what they do.
2. Location, time of day, and atmosphere.
3. Camera angle, movement, and framing.
4. Sound: dialogue, ambient noise, or music.
5. Explicit note if you want one continuous shot without cuts.

Example prompt for a product clip: “A golden retriever runs through a field of wildflowers at sunset. Low tracking shot, warm backlight, soft slow motion. Birds chirp and wind rustles the grass. Single continuous shot, no cuts.”

Specify duration between 3 and 15 seconds in one-second steps. The default is often 10 seconds if you omit it.

## Generate Your First Video

In Google AI Studio or the Gemini app:

1. Start a new chat and select Gemini Omni 1.2 Flash.
2. Type your prompt.
3. Optionally attach reference images for characters, products, or style.
4. Submit and wait for the clip.

The model returns video with synchronized audio. You can download it or continue the conversation.

For developers, the Interactions API call looks like this in Python:

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A marble rolls fast on a chain-reaction track, continuous smooth shot.",
    response_format={"type": "video"}
)
```

Save the base64 video data from the response.

## Edit in Conversation

Once you have a clip, keep the same chat open. Ask for specific changes without regenerating the whole video.

Examples:

- “Change the background from the tent to an oak forest. Keep the characters and camera the same.”
- “Make the lighting cooler and add light rain.”
- “Switch this to vertical 9:16 for social media.”

The model preserves unmentioned elements such as character identity, garment details, and framing. Multi-turn edits work on full 15-second clips.

This workflow saves cost and time. Draft cheaply at 360p or 720p, fix one detail, then upscale only the final version.

![Vintage cameras and lenses arranged on a wooden desk](https://images.unsplash.com/photo-1763621490939-2671377a0b61?auto=format&fit=crop&w=800&q=80)

## Use Reference Images and Clips

Upload up to six reference images. For people, you can supply three images each for up to two characters.

Describe the role of each image in words rather than old tag syntax. Write: “Use the second image as the closing frame” or “Match the jacket and hair from the first photograph.”

Short motion clips up to three seconds also work as references. The model holds product packaging, brand colors, and facial identity across camera angles.

## Practical Tips

- Start with a simple continuous shot before adding complex camera moves.
- Request “no jump cuts” or “single continuous shot” when you need unbroken motion.
- Include audio direction. The model generates native sound, lip-sync, and multi-speaker dialogue.
- Draft at lower resolution first. Upscale only after the edit is correct.
- Outputs carry an imperceptible SynthID watermark.
- Review results carefully. Consistency improves over Omni 1.1, yet fine details can still drift after many edits.

For longer interactive worlds that respond to keyboard input, see our guide on [accessing Google Genie 4 interactive worlds](/blog/access-google-genie-4-interactive-worlds/).

## Watch a Tutorial

This walkthrough covers text-to-video, image references, and conversational refinement with Gemini Omni.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AV1SrS7mTJM"
    title="Gemini Omni Tutorial: From text to cinematic video!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips (November 5, 2026). https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Google Cloud blog: Gemini Omni 1.2 Flash now GA. https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available
- Gemini API documentation for Omni. https://ai.google.dev/gemini-api/docs/omni

Gemini Omni 1.2 Flash makes 15-second video generation practical and affordable. Draft quickly, refine through conversation, and keep characters and products consistent. Start in Google AI Studio today and iterate on one clear prompt.
