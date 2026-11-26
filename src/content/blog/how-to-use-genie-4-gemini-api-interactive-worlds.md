---
title: "How to Use Genie 4 Interactive Worlds in AI Studio"
description: "Step-by-step guide to Genie 4 in Google AI Studio and Gemini API for real-time 720p worlds with native audio and keyboard controls."
pubDate: 2026-11-26T17:00:00
heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "developer"]
noindex: false
---

Google opened Genie 4 to developers on 19 November 2026 through the Gemini API and Google AI Studio. The model generates continuous interactive 720p worlds at 24 frames per second with synchronized native audio.

You seed a scene from a text prompt, a 16:9 reference image, or both. Then you navigate with keyboard controls and send mid-session text commands to change weather, objects, or events. Gemini reasoning keeps the world consistent.

This guide walks through access requirements, the AI Studio playground, and the basic API flow. All facts come from the official Google Blog announcement and the Genie 4 documentation on Google AI for Developers.

## What You Need Before Starting

Genie 4 requires a paid-tier Gemini API key. It is not available on the free tier. Billing runs on video output tokens at roughly $0.10 per second under standard pricing, with audio included.

Sessions last up to 120 seconds. Visual coherence is strongest in the first 45–90 seconds. The model serves from data centers in the United States, Western Europe, and Japan. Expect the best responsiveness if you are near those regions.

Every output includes SynthID watermarking. For fixed offline video clips or higher resolutions, Google recommends Gemini Omni 1.2 Flash instead.

![Developer working on a laptop with code and AI tools](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Try Genie 4 in Google AI Studio

The fastest way to experiment is the official Live playground.

1. Sign in to Google AI Studio with an account that has a paid API key.
2. Open the Genie 4 Live session at aistudio.google.com/live?model=genie-4.
3. Choose a starter world or write your own world_setup prompt. Include first-person point of view, concrete visual details, and physical sound descriptions.
4. Optionally upload a single 16:9 reference image under 48 KB for WebRTC compatibility.
5. Connect and wait 5–9 seconds for the first frames.
6. Use WASD and arrow keys for movement. Send short text events to steer the scene (for example, “Heavy rain starts falling”).
7. End the session cleanly so billing stops.

The playground also includes tested patterns such as causal rules (“Rule: when I reach the door, the light turns on”) and custom key bindings.

## Use Genie 4 Through the Gemini API

The Interactions API handles Genie 4 sessions. The recommended flow keeps your long-lived API key on the server.

High-level steps:

1. Create an interaction on your backend with model “genie-4” using the v1beta endpoint.
2. For browser clients, mint a single-session ephemeral auth token. Never send the permanent key to the client.
3. Connect over WebRTC (recommended for browsers) or WebSocket.
4. Send one world_setup event containing the initial prompt (and optional reference image).
5. Stream video and audio while sending user_action events for keys and input events for text steering.
6. Call complete() when finished. Closing the tab alone does not stop server-side generation or billing.

Official documentation provides JavaScript (WebRTC and WebSocket) and Python (WebSocket) examples. Always use the latest google-genai or @google/genai SDK.

![Abstract digital network representing real-time AI generation](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Prompt Tips That Improve Results

Official guidance highlights a few patterns that reduce common problems:

- Start with immersive first-person POV and specific landmarks.
- Add audio cues in the world_setup (“Audio: waves on the shore, footsteps on wood”).
- Embed causal rules so objects react when approached.
- Keep mid-session text events short. They typically take 1–2 seconds to appear.
- Avoid prompts that force immediate room-wide changes at frame one or request background music as pure Foley.

Test ideas first in AI Studio before integrating them into an application.

## Practical Limits and Costs

Confirm the current pricing and rate limits on the official Genie 4 model page before heavy use. Output is billed at 240 video tokens per frame (5,760 tokens per second at 24 fps). Audio is bundled into that rate.

Regional latency above 150 ms can reduce frame rate and delay steering. Place relays near serving regions if you deploy globally.

For earlier access notes and the original Project Genie waitlist path, see our guide on [how to access Google Genie 4 interactive worlds](/blog/access-google-genie-4-interactive-worlds/).

## Watch a Quick Demo

This short video shows Genie 4 running through the Gemini API with live keyboard and text steering.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hayDjOUkHJY"
    title="Genie 4 now on Gemini API!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Building a Simple Prototype

Once the playground session works, move the same prompt into a small backend script. Create the interaction, connect, send the world_setup, log the first few frames, then call complete(). This verifies billing stops and confirms latency from your region.

For browser demos, the ephemeral token pattern keeps keys safe. Serve the token from an endpoint that checks the user’s session, then let the client open the WebRTC connection and attach the video element.

Developers training agents or robotics can feed the stream into their own control loop by reading the user_action events and injecting new text inputs. The official docs note that visual coherence holds best early in the session, so plan short evaluation runs.

Always check the latest rate limits. Concurrent sessions are restricted, and the model does not support batch, flex, or priority inference modes.

## Common Questions

**Can I use Genie 4 for free?**  
No. It requires a paid-tier key and charges per second of video output.

**How long can a session run?**  
Up to 120 seconds. Plan experiments that finish well inside that window.

**Does it work worldwide?**  
Yes, but latency is lowest near the United States, Western Europe, and Japan serving regions.

**What about offline video?**  
Use Gemini Omni 1.2 Flash for fixed-duration clips and higher resolutions.

These constraints keep the model practical for prototyping while you explore interactive world generation.

## Sources

- [Genie 4 now available through the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/) — Google Blog, 19 November 2026
- [Genie 4 model page](https://aistudio.google.com/docs/models/genie-4) — Google AI for Developers
- [Interactive world generation with Genie 4](https://aistudio.google.com/docs/genie) — Google AI for Developers
- [Genie 4 prompt and controls guide](https://aistudio.google.com/docs/genie-prompting) — Google AI for Developers

Genie 4 turns text and images into steerable audiovisual worlds you can explore in real time. Start in the AI Studio playground, then move to the Interactions API once your prompts and controls are solid. Always end sessions with complete() to keep costs predictable.
