---
title: "How to Create Interactive Worlds with Genie 4 API"
description: "Step-by-step guide to generating and steering live interactive worlds with Genie 4 on the Gemini API Interactions endpoint."
pubDate: 2026-11-28T20:30:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Genie 4 is now available to developers on the Gemini API. You can generate continuous interactive worlds at 24 fps with synchronized native audio and steer them in real time with keyboard controls or text prompts.

This guide walks through the Interactions API setup, the four-step session lifecycle, and practical patterns drawn from Google’s official documentation.

## What Genie 4 Provides on the API

Genie 4 (`genie-4`) generates a live 16:9 video stream at 24 fps with matching 48 kHz stereo audio. You seed a world from a text prompt, a reference image, or both, then move with WASD and arrow keys while sending mid-session text events that change weather, lighting, objects, or action.

The model keeps world state coherent through Gemini reasoning. Every output carries SynthID watermarking. Sessions are limited to 120 seconds and require a paid-tier API key. Billing runs at roughly $0.10 per second (240 video output tokens per frame).

Google announced general API access on 19 November 2026, one day after the Project Genie Ultra rollout. The same model powers the browser experience, but the API lets you embed it in your own applications.

![Developer writing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

1. Create a paid-tier Gemini API key in Google AI Studio.
2. Install the latest SDK:  
   `pip install -U google-genai` or `npm install @google/genai`.
3. Set the key as an environment variable (`GEMINI_API_KEY`).
4. Use the `v1beta` API version. Free tier and batch modes are not supported.

Regional latency is lowest in North America, Western/Central Europe, and East Asia. Outside those areas, place a relay near a serving region if you need tight keyboard response.

## Four-Step Session Lifecycle

Every Genie 4 session follows the same flow on the Interactions API:

1. Create the interaction on your server with model `genie-4`.
2. For browser clients, mint a single-session ephemeral token so the long-lived key never leaves the backend.
3. Connect over WebRTC (recommended for browsers) or WebSocket.
4. Send one `world_setup` event, then `user_action` or text `input` events.
5. Call `session.complete()` when finished. Closing the tab does not stop server-side generation or billing.

### Server-side creation (Node.js example)

```javascript
import { GoogleGenAI } from '@google/genai';

const serverAi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: 'v1beta',
});

export async function createWorldSession() {
  const interaction = await serverAi.interactions.create({
    model: 'genie-4',
    api_version: 'v1beta',
  });
  const { auth_token } = await serverAi.interactions.authTokens.create(
    interaction.id,
    { api_version: 'v1beta' }
  );
  return { interactionId: interaction.id, authToken: auth_token };
}
```

### Browser client connection (WebRTC)

```javascript
import { GoogleGenAI } from '@google/genai';

const WORLD_PROMPT = `Immersive first-person view standing on a cobblestone canal bridge inside a thick-impasto post-impressionist oil painting of a riverside village at twilight. Swirling cobalt sky, glowing golden lanterns, wooden rowboat at the steps. Audio: water lapping, leaves rustling, footsteps on stone.`;

async function startWorld(interactionId, authToken, videoElement) {
  const clientAi = new GoogleGenAI({ apiKey: authToken, apiVersion: 'v1beta' });
  const session = await clientAi.interactions.connect(
    interactionId,
    { transport: 'webrtc', api_version: 'v1beta' },
    { timeout_ms: 30000 }
  );

  session.transport.setVideoElement(videoElement);

  await session.send({
    event_type: 'world_setup',
    world_prompt: { text: WORLD_PROMPT },
  });

  // Native movement keys
  const keyMap = {
    KeyW: 'key_w', KeyA: 'key_a', KeyS: 'key_s', KeyD: 'key_d',
    ArrowUp: 'arrow_up', ArrowDown: 'arrow_down',
    ArrowLeft: 'arrow_left', ArrowRight: 'arrow_right',
  };

  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (keyMap[e.code]) {
      session.send({
        event_type: 'user_action',
        action: 'key_down',
        input: keyMap[e.code],
      });
    }
  });

  window.addEventListener('keyup', (e) => {
    if (keyMap[e.code]) {
      session.send({
        event_type: 'user_action',
        action: 'key_up',
        input: keyMap[e.code],
      });
    }
  });

  return { stop: () => session.complete() };
}
```

Initial generation takes about 5–9 seconds before the first frame. Mid-session text events take 1–2 seconds to appear. Repeat short prompts briefly (for example 10 times over 1.5 s) so the next world step reliably picks them up.

## Steering Patterns That Work

Google’s prompting guide recommends first-person, grounded openings that state what you are standing on or holding. Embed simple causal rules:

```
I am standing on a wooden pier at dawn holding a lantern, looking toward the lighthouse. Mist on the water, wet planks. I hear waves and my boots.
Rule: when I reach the lighthouse door, the lamp switches on and sweeps the water.
```

For live changes, keep prompts short and world-wide:

- “Heavy snow starts falling.”
- “Pull the camera back.”
- “A dog barks in the distance.”

You can also map custom keys (E, Q, R) on the client to send these text events.

## Rate Limits and Cost Control

Tier 1 allows 2 concurrent sessions and 50 requests per day. Higher tiers raise those caps. Always call `complete()`—detaching the transport leaves generation (and billing) running.

A 30-second session costs roughly $3. Test short scenes in AI Studio Live first before embedding.

## Tips for Reliable Worlds

- Write the opening prompt in first person and name concrete surfaces and sounds.
- Place one clear landmark ahead so the camera has somewhere to go.
- Test causal rules and key bindings in the AI Studio Live playground before writing client code.
- Keep sessions under 60 seconds while learning; the hard cap is 120 seconds.
- Pair Genie 4 with other Gemini models for agent orchestration if you need higher-level planning around the world.

If you are exploring the consumer side first, our earlier guide shows how Ultra subscribers access the same model inside Project Genie: [How to Access Genie 4 in Project Genie](/blog/access-genie-4-project-genie-guide/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EDp4IoAUsXY"
    title="Introducing the new Project Genie, powered by Genie 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Abstract digital code visualization](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Conclusion

Genie 4 on the Gemini API turns a research world model into something you can embed. Create the interaction on the server, connect with an ephemeral token, seed once, steer with keys and short text events, then complete the session. Start with the official oil-painting quickstart, measure latency from your region, and keep sessions short while you learn the control surface. The same paid key that unlocks Neon and Hydrogen also unlocks these live worlds.

## Sources

- Google Blog: Genie 4 is now available on the Gemini API (19 November 2026)
- Google AI Studio: Interactive world generation with Genie 4 (docs/genie)
- Google AI Studio: Genie 4 prompt and controls guide
- Google DeepMind: Project Genie update featuring Genie 4 (18 November 2026)
- Google DeepMind YouTube: Introducing the new Project Genie, powered by Genie 4
