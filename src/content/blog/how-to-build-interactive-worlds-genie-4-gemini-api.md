---
title: "How to Build Interactive Worlds with Genie 4 API"
description: "Generate steerable 720p worlds at 24 fps with Genie 4 on the Gemini API using the Interactions API, WebRTC or WebSocket."
pubDate: 2026-11-27T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "ai", "developer"]
noindex: false
---

Google made Genie 4 available to developers through the Gemini API on November 19, 2026. The model generates continuous, interactive 16:9 worlds at 720p and 24 frames per second with synchronized 48 kHz stereo audio. You seed a world from a text prompt, an optional reference image, or both, then steer it in real time with keyboard controls and live text events.

This guide shows how to create a session, connect over WebSocket or WebRTC, send the initial world setup, handle movement and mid-session prompts, and cleanly end billing. It uses the official `google-genai` SDK on the Interactions API (v1beta).

## What Genie 4 provides

Genie 4 (`models/genie-4` or `genie-4`) runs on the Interactions API. It produces a live video stream plus matching audio. Keyboard actions (WASD for movement, arrow keys for camera) take effect in roughly 0.2–0.5 seconds. Text events that change weather, lighting, objects, or events take about 1–2 seconds. Gemini reasoning keeps world state coherent across the session.

Every output carries an imperceptible SynthID watermark. The model does not support function calling, search grounding, structured outputs, code execution, file search, URL context, or context caching. It also does not accept live microphone or camera input. Sessions have a hard cap of 120 seconds. Visual coherence and object permanence are strongest in the first 45–90 seconds and can degrade later.

Access requires a paid-tier Gemini API key. Free tier, Batch API, Flex inference, and Priority inference are not supported. Serving comes from data centers in the United States, Western Europe, and Japan; latency is lowest in those regions.

![Laptop showing code on a desk](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Pricing and limits

Video output is billed at 240 tokens per frame. At 24 fps that equals 5,760 tokens per second. Google lists the video-output rate at $17.50 per million tokens (audio included), which works out to approximately $0.10 per second or about $6.05 per minute. Text and reference-image input cost $1.50 per million tokens; text output costs $9.00 per million tokens.

A maximum-length 120-second session costs roughly $12 in video-output charges before input and text-output fees. Always call `complete()` (or the equivalent) when you finish. Closing a browser tab or exiting a local block detaches the transport but does not immediately stop server-side generation or billing.

Concurrent session limits (Interactions API):

- Tier 1: 2 concurrent sessions, 50 requests per day
- Tier 2: 5 concurrent, 250 RPD
- Tier 3: 10 concurrent, 1,000 RPD

In-session control messages do not consume separate request quota.

## Prerequisites

1. A paid-tier Gemini API key from Google AI Studio.
2. The latest `google-genai` Python package (`pip install -U google-genai`) or `@google/genai` for JavaScript.
3. Set the key as the environment variable `GEMINI_API_KEY`.

You can prototype prompts and controls in the Google AI Studio Live playground before writing client code.

## Create and connect a session (Python WebSocket)

Every session follows four steps on `v1beta`: create the interaction, connect, seed the world, then complete.

```python
import asyncio
from google import genai

WORLD_PROMPT = (
    "Immersive first-person view standing on a wooden pier at dawn, "
    "holding a lantern, looking toward a small lighthouse. "
    "Mist on the water, wet planks, gulls on the posts. "
    "Audio: waves slapping the posts and footsteps on wood."
)

async def main():
    client = genai.Client(http_options={"api_version": "v1beta"})
    interaction = await client.aio.interactions.create(
        model="genie-4", api_version="v1beta"
    )

    async with client.aio.interactions.connect(
        interaction.id, api_version="v1beta"
    ) as session:
        # Seed the world (first frames take ~5–9 seconds)
        await session.send({
            "event_type": "world_setup",
            "world_prompt": {"text": WORLD_PROMPT},
        })

        frame_count = 0
        async for event in session.receive():
            if event.event_type == "step.delta":
                delta_type = getattr(event.delta, "type", None)
                if delta_type == "video" and event.delta.data:
                    frame_count += 1
                    if frame_count == 1:
                        # Start walking forward
                        await session.send({
                            "event_type": "user_action",
                            "action": "key_down",
                            "input": "key_w",
                        })
                    elif frame_count == 72:  # ~3 seconds
                        # Mid-session text event
                        await session.send("Heavy rain starts falling.")
                    elif frame_count == 144:  # ~6 seconds
                        await session.send({
                            "event_type": "user_action",
                            "action": "key_up",
                            "input": "key_w",
                        })
                        await session.complete()
            elif event.event_type == "interaction.completed":
                break

asyncio.run(main())
```

The receive loop yields `step.delta` events containing base64-encoded JPEG frames and 48 kHz 16-bit stereo PCM audio chunks. You can write frames to disk or stream them into a video pipeline.

## Browser WebRTC pattern

For interactive browser apps, create the interaction on your server, mint a single-session ephemeral `auth_token`, and return only that token to the client. Never expose the long-lived API key in the browser.

```javascript
import { GoogleGenAI } from '@google/genai';

// Server side
const serverAi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: 'v1beta',
});
const interaction = await serverAi.interactions.create({
  model: 'genie-4',
  api_version: 'v1beta',
});
const { auth_token } = await serverAi.interactions.authTokens.create(
  interaction.id,
  { api_version: 'v1beta' }
);
// Return { interactionId: interaction.id, authToken: auth_token } to the browser
```

On the client, connect with `{ transport: 'webrtc' }`, bind the video element, send the `world_setup`, and map native keys plus any custom action prompts. Call `session.complete()` on exit so billing stops.

## Practical tips

Write the `world_setup` prompt in the first person and name what the camera is standing on or holding in the opening sentence. Embed simple cause-and-effect rules (`Rule: when I reach the door, the lamp switches on`) so the world reacts predictably. Keep mid-session text events short. Repeat a text impulse a few times over about 1.5 seconds if you need reliable uptake.

Test latency from your target region before shipping reflex-heavy controls. Place any backend relay near a serving region when possible. Enforce a client-side time limit and always complete the session on errors, cancellation, or normal shutdown.

If you are already working with Gemini multimodal inputs, the same Files API patterns and token-control ideas covered in our [file slicing guide](/blog/how-to-slice-files-in-gemini-api-for-lower-costs/) remain useful for other models. Genie 4 itself does not use file slicing; it is a dedicated live world model.

![Mountain landscape suggesting an explorable world](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80)

## Watch a Genie 4 overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/LOP8ul3KqQI"
    title="Introducing Genie 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: Genie 4 now available through the Gemini API (November 19, 2026)
- Google AI Studio documentation: Interactive world generation with Genie 4
- Gemini API pricing and rate-limits pages for Genie 4
- Official Google for Developers video: Introducing Genie 4

Start with a short session in AI Studio, then move the same prompt and control pattern into the SDK. Call `complete()` every time. That keeps costs predictable while you explore what live, steerable worlds can do for prototypes, spatial visualization, or agent training scenarios.
