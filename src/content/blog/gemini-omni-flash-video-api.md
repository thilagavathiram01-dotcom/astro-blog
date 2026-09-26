---
title: "How to Generate Video with Gemini Omni Flash API"
description: "Call gemini-omni-1.1-flash on the Interactions API, set aspect ratio and resolution, then edit or extend short clips."
pubDate: 2026-09-26T13:30:00
heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer"]
noindex: false
---

Gemini Omni Flash is Google’s video generation and editing model on the Gemini API. The public model string is `gemini-omni-1.1-flash`. You send text, images, and short video through the Interactions API and get an MP4 back.

This guide follows the official Omni docs and pricing page. It is the developer path, not the Gemini app or Flow consumer UI. For Photos remix on a phone, see [Google Photos Video Remix with Gemini Omni](/blog/google-photos-video-remix-gemini-omni/).

## What the model actually does

Google documents Omni Flash as a high-speed video model with three traits: native multimodality, conversational editing, and Gemini’s world knowledge applied to generated scenes.

Inputs are text, image, and video (up to 10 seconds when you edit or extend). Output is video only. Clips run 3–10 seconds at 24 fps. Resolutions listed on the model card are 360p, 720p (default), 1080p, and 4K. The last two are upscaled.

Do not call `generateContent` for this model. The documented surface is `client.interactions.create` (or `POST /v1beta/interactions`). The SDK helper `interaction.output_video` is SDK-only. REST clients read the MP4 from the `steps` array.



![Camera operator filming a short clip on a city street](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)



## Create your first clip

Install the current Google GenAI SDK and keep the API key on a server. Google lists Omni Flash on the paid tier of the Gemini API. There is no free-tier price row on the public pricing table.

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-omni-1.1-flash",
    input="A marble rolling fast on a chain reaction style track, continuous smooth shot.",
)
with open("marble.mp4", "wb") as f:
    f.write(base64.b64decode(interaction.output_video.data))
```

The same call works from JavaScript, Java, Go, and curl. The REST body is a `model` field plus `input`. When the job finishes, `status` is `completed` and a `model_output` step holds `mime_type: video/mp4` with base64 `data`.

Ask for camera movement, lighting, and sound in the prompt. Google’s sample uses a single continuous shot so the model does not invent extra cuts.

## Set aspect ratio and resolution

Landscape 16:9 is the default. Pass `response_format.aspect_ratio` as `"9:16"` for portrait. Supported values in the docs are only those two strings.

```python
interaction = client.interactions.create(
    model="gemini-omni-1.1-flash",
    input="A futuristic city with neon lights and flying cars, cyberpunk style",
    response_format={
        "type": "video",
        "aspect_ratio": "9:16",
        "resolution": "1080p",
    },
)
```

Resolution values: `360p`, `720p`, `1080p`, `4k`. Start at 720p while you iterate. Upscaled 1080p and 4K cost more output tokens for the same duration.



![Video editor reviewing a timeline on a desktop display](https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80)



## Edit and extend instead of regenerating

Conversational editing is the reason this model uses Interactions rather than a one-shot generate call. You send the previous video plus a text instruction. The model changes the requested part and keeps the rest.

Google documents video extension with prompts such as “Extend this video” or “The scene continues.” You can add 10 seconds per extend, up to a **40-second** total. The model uses the last 10 seconds of the source as context. Some end frames of the source are rewritten so the join is continuous.

Reference images can enter the same request. Official samples attach a character still and tell the model to have that person walk into the extended shot. Tag roles in the prompt (`<IMAGE_REF_0>`) when you mix several stills.

Keep source clips at or under the 10-second input cap for edit and extend. Longer files are outside the published limit.

## Prompt habits that match the docs

Default behavior tries several shots and a short narrative. If you need one camera setup, say so: “single unbroken scene,” “single continuous shot,” or “no scene cuts.”

Describe audio. The model generates sound with the picture. Name breeze, birds, or silence if you do not want dialogue.

Time events in the prompt when order matters. Vague “then something happens” language produces extra cuts.

Ask the model to remove an object in a follow-up turn rather than stuffing every constraint into the first sentence. That is the documented edit path.

On-screen text is unreliable. Google’s own prompt guide shows the model inventing signs and plates. Do not depend on readable titles inside the frame.

## Pricing and product limits

Paid-tier list prices on the Gemini API pricing page:

- Input: **$1.50** per 1M tokens (text, image, video, or audio)
- Text output (including thinking tokens): **$9.00** per 1M tokens
- Video output: **$17.50** per 1M tokens

Billing for video output uses **5,792 tokens per second of 720p**. Google states that this is about **$0.10 per second** under standard pricing. Confirm the live table before you budget a batch job.

Free tier is marked not available for Omni Flash. Preview alias `gemini-omni-flash-preview` exists; production samples use the stable `gemini-omni-1.1-flash` string.

Google still recommends Veo 3.1 when you need last-frame control or a legacy `generateContent` pipeline. Omni Flash is the default for new video work on the Gemini API.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uW4B6ziQqvY"
    title="What is Gemini Omni?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you ship

Store the interaction `id`. Follow-up edits need the prior video bytes or a file URI the API can read.

Decode base64 to disk before you play the file. Do not paste MP4 payloads into logs.

Cap concurrent jobs. Video output is large and billed per generated second, not per “pretty” request.

Keep keys off the browser. This is a server call, same rule as other Gemini paid models.

If you only need text reasoning or code, use [`gemini-3.8-flash`](/blog/gemini-3-8-flash-api-guide/) instead. Omni Flash does not replace that workhorse.

## Conclusion

Pin `gemini-omni-1.1-flash`, call the Interactions API, and treat 3–10 second 720p clips as the default unit of work. Set 9:16 only when you ship vertical video. Extend in 10-second steps up to 40 seconds. Price the run from the 5,792 tokens-per-second rule, not from a guess.

Read the model card and the Omni guide before you change resolution or mix reference images. Those pages are the source for every limit in this article.

## Sources

- [Generate and edit videos with Gemini Omni Flash](https://ai.google.dev/gemini-api/docs/omni) — Google AI for Developers
- [Gemini Omni Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash) — Google AI for Developers
- [Video generation in the Gemini API](https://ai.google.dev/gemini-api/docs/video) — Google AI for Developers
- [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) — Google AI for Developers
- [Introducing Gemini Omni](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/) — Google, 19 May 2026
- [What is Gemini Omni?](https://www.youtube.com/watch?v=uW4B6ziQqvY) — Google
