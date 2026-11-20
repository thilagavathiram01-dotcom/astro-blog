---
title: "How to Use Genie 4 on the Gemini API"
description: "Practical guide to Genie 4 via Gemini Interactions API: sessions, WebRTC/WebSocket, events, pricing, and limits."
pubDate: 2026-11-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1672872476232-da16b45c9001?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "developer", "ai"]
noindex: false
---

Google released Genie 4 to developers on 19 November 2026 through the Gemini API. The model generates continuous 720p worlds at 24 fps with synchronized 48 kHz stereo audio. You control navigation with keyboard actions and reshape scenes with text while the stream runs. This guide covers the official Interactions API workflow from the Google AI Studio documentation.

For Project Genie access details, see our earlier overview: [/blog/access-google-genie-4-interactive-worlds/](/blog/access-google-genie-4-interactive-worlds/).

![Futuristic neon-lit cityscape at night](https://images.unsplash.com/photo-1672872476232-da16b45c9001?auto=format&fit=crop&w=800&q=80)

## What Genie 4 Delivers on the API

Genie 4 (models/genie-4) runs on the v1beta Interactions API. It produces a live 16:9 video stream rather than a fixed clip. Output is 1280x720 at 24 fps with native audio that includes ambient sound, effects, and character dialogue. Every frame carries an imperceptible SynthID watermark.

The model accepts a text world prompt, an optional single 16:9 reference image, keyboard user_action events, and mid-session text inputs. It does not support live microphone or webcam input, function calling, or session resumption after completion.

## Session Lifecycle

Every session follows four steps:

1. Create the interaction on your server with model set to models/genie-4.
2. Connect over WebRTC (recommended for browsers) or WebSocket (Python, Node.js).
3. Send exactly one world_setup event, then steer with user_action or input events.
4. Call complete() when finished so server-side generation and billing stop.

Closing a browser tab or exiting a local context only detaches the transport. It does not stop server generation. Always call complete() or cancel() explicitly.

## Authentication for Browser Clients

Never place a long-lived Gemini API key in client-side code. Create the interaction and mint an ephemeral auth_token on your backend, then pass only the token to the browser.

```javascript
import { GoogleGenAI } from '@google/genai';

const serverAi = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: 'v1beta',
});

export async function createWorldSession() {
  const interaction = await serverAi.interactions.create({
    model: 'models/genie-4',
    api_version: 'v1beta',
  });
  const { auth_token } = await serverAi.interactions.authTokens.create(
    interaction.id,
    { api_version: 'v1beta' }
  );
  return { interactionId: interaction.id, authToken: auth_token };
}
```

The browser client then initializes with the token as its API key.

## Seeding and Steering the World

Send one world_setup event to start generation. It can contain a text prompt, a reference image, or both. Initial frames typically appear after 5–9 seconds.

Native movement uses WASD keys mapped to key_w, key_a, key_s, key_d. Arrow keys control camera look. Send key_down on press and key_up on release. These actions respond in roughly 0.2–0.5 seconds under low latency.

Mid-session text inputs change weather, objects, or dialogue. Because planning samples text at step boundaries, repeat short prompts about 10 times at 150 ms intervals for reliable pickup. Text changes take about 1–2 seconds to appear. Wrap spoken dialogue in quotation marks.

```javascript
await session.send({
  event_type: 'world_setup',
  world_prompt: {
    text: 'First-person POV on a cobblestone canal bridge inside a thick-impasto oil painting of a starry riverside village at twilight. Gentle water sounds and footsteps on stone.'
  },
});

// Later: movement
session.send({
  event_type: 'user_action',
  action: 'key_down',
  input: 'key_w',
});
```

![Developer code on a computer screen](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)

## Transports: WebRTC vs WebSocket

WebRTC is the preferred browser transport. It delivers native video and Opus audio tracks directly to a <video> element with built-in jitter buffering. Control events travel over an SCTP data channel (64 KB message limit, so keep reference images under ~48 KB when base64-encoded).

WebSocket works for Python, Node.js, and browsers. Media arrives as step.delta events containing base64 JPEG frames and 48 kHz Int16 stereo PCM audio. Decode and schedule the audio on an AudioContext or write to a WAV container. TCP can introduce head-of-line blocking under packet loss.

## Pricing and Billing

Genie 4 requires a paid-tier Gemini API key. There is no free tier, and Batch, Flex, and Priority inference are unsupported.

Text or reference-image input costs $1.50 per million tokens. Text output costs $9 per million. Video output (stereo audio included) costs $17.50 per million tokens. At 240 video tokens per frame and 24 fps, this equals 5,760 tokens per second, or roughly $0.10 per second (~$6.05 per minute) of streamed output.

A 120-second session costs about $12 in video charges before input costs. Always call complete() to stop billing; detach or tab close does not.

## Limits and Practical Constraints

Sessions hard-cap at 120 seconds. Visual stability is strongest in the first 60–90 seconds. Looking away from an object for more than about 8 seconds or turning 360 degrees can shift or reset landmarks because the model maintains a rolling horizon rather than a persistent 3D mesh.

Serving occurs from data centers in the United States, Western Europe, and Japan. Expect round-trip latency under 150 ms in North America, Western/Central Europe, and East Asia. Outside those regions, keyboard response slows and frame rate can drop. Place relays near a serving region when possible.

No function calling, structured outputs, or Google Search grounding is available. Prompts containing identifiable real people or copyrighted brand IP may be blocked.

## Tips for Reliable Sessions

- Enforce a client-side cooldown of about 2 seconds between conflicting text prompts.
- Suppress OS key-repeat events when sending key_down.
- Test WebRTC latency from your target geography before building reflex-heavy controls.
- Monitor token usage; video output dominates cost.
- Call complete() in finally blocks and on page unload handlers.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/sFfPkUJd_Jk"
    title="Genie 4: A new generation of world simulation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Genie 4 on the Gemini Interactions API lets developers prototype interactive environments, spatial visualizations, and agent or robotics scenarios with live keyboard control and text steering. The workflow is straightforward once you handle ephemeral tokens, transport choice, and explicit session completion. Start in Google AI Studio to experiment, then move the same event protocol into your own code.

## Sources

- Google: Genie 4 now available through the Gemini API (19 November 2026). https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/
- Google AI Studio: Interactive world generation with Genie 4. https://aistudio.google.com/docs/genie
- Google DeepMind: Genie 4: A new generation of world simulation (27 October 2026). https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/
- Official demo video: Genie 4: A new generation of world simulation. https://www.youtube.com/watch?v=sFfPkUJd_Jk
