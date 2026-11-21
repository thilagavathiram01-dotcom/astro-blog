---
title: "How to Use Genie 4 for Interactive Worlds in Gemini API"
description: "Step-by-step guide to generating and steering real-time interactive worlds with Genie 4 via Google AI Studio and the Gemini API."
pubDate: 2026-11-21T10:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

Google made Genie 4 available to developers through the Gemini API and Google AI Studio on 19 November 2026. The model generates continuous 720p worlds at 24 frames per second with synchronized native audio. You start from a text prompt, a reference image, or both, then navigate and change the world in real time.

This guide shows how to access Genie 4, seed a world, control movement, and steer events. All details come from Google’s official announcement and documentation.

## What Genie 4 Does

Genie 4 is a real-time interactive world model. It produces 16:9 video at 720p and 24 fps together with 48 kHz stereo audio. Ambient sounds, sound effects, and character dialogue stay in sync with the visuals. Gemini reasoning maintains consistency as you explore.

Sessions last up to 120 seconds. Visual coherence is strongest in the first 45–90 seconds. Every output carries an imperceptible SynthID watermark. The model ID is `genie-4` (or `models/genie-4`). It requires a paid-tier Gemini API key. Pricing is approximately $0.10 per second of streamed output.

You can prototype interactive experiences, visualize spatial designs, or create training environments for robotics and agents. For offline fixed clips or higher-resolution upsampling, use other Gemini models instead.

![Person interacting with a digital interface on a large screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Access Genie 4 in Google AI Studio

The fastest way to try Genie 4 is the Live playground in Google AI Studio. Open [aistudio.google.com/live?model=genie-4](https://aistudio.google.com/live?model=genie-4) while signed in with a paid-tier account.

The playground loads starter worlds such as a living oil painting or a wine cellar. Click the video viewport to focus keyboard capture. Use WASD to move forward, backward, and strafe. Arrow keys pan and tilt the camera. Response time is roughly 0.2–0.5 seconds.

You can bind custom keys (for example E, Q, or R) to short text prompts that change the world. AI Studio enforces a 2-second cooldown on custom bindings so overlapping events do not collide. Mid-session text events should be short and describe a global change, such as “Heavy rain starts falling.” These typically appear within 1–2 seconds.

Test prompts here before writing code. Google’s prompt guide recommends first-person, grounded language. Start by stating what you are standing on or holding and what you face. Add concrete visual and audio details. Embed cause-and-effect rules with “Rule:” clauses so interacting with an object changes the world.

## Generate Worlds via the Gemini API

Developers use the Interactions API on the v1beta endpoint. Create a session on your server with a paid-tier key, then connect a live client.

Basic lifecycle:

1. Call `interactions.create` with `model: "genie-4"`.
2. For browser clients, mint a single-session ephemeral `auth_token` so the long-lived key never leaves the server.
3. Connect with `interactions.connect` over WebRTC (browsers) or WebSocket (Python/Node).
4. Send exactly one `world_setup` event containing a text `world_prompt` and, optionally, a 16:9 reference image.
5. Stream `user_action` events for keyboard movement and `input` events for text steering.
6. Call `session.complete()` when finished so generation and billing stop.

Install the latest `google-genai` (Python) or `@google/genai` (JavaScript) SDK. Sessions start producing frames after roughly 5–9 seconds of setup.

Example world_setup prompt pattern:

“I am standing on a narrow wooden pier at dawn, holding a lantern, looking toward a small lighthouse at the far end. Mist on the water, gulls on the posts, wet planks. I hear waves slapping the posts and my boots on the wood. Rule: when I reach the lighthouse door, the lamp at the top switches on and sweeps across the water.”

Keep the first sentence grounded in the camera’s position. Avoid trailer-style language such as “quick cuts” or “upbeat soundtrack,” which can produce unintended Foley or fractured continuity.

![Close-up of hands on a keyboard during a coding or gaming session](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80)

## Control Movement and Steer the World

Movement uses standard keys: W/A/S/D for translation and arrow keys for camera. Send these as `user_action` events. Text steering uses short `input` events. The model applies Gemini reasoning to keep object permanence and causal rules consistent across frames.

You can change weather, lighting, objects, or events on the fly. Character dialogue emerges from the same generation process and adapts to scene changes. For client-side retrieval or large tool libraries in agent workflows, see our guide on [Tool Retrieval in the Gemini API](/blog/gemini-api-tool-retrieval-guide/).

Prefix caching works with deferred content, but Genie 4 sessions are short by design. Measure token use: each frame costs 240 video output tokens (5,760 tokens per second at 24 fps).

## Practical Tips

Start every session with a clear first-person setup sentence. This gives the camera a stable reference. Add two or three concrete visual details and at least one physical sound.

Use “Rule:” clauses for reliable interactions. Place the trigger object far enough ahead that the player reaches it after a few seconds of movement. Avoid room-wide triggers that fire on frame 1.

Keep mid-session text short. Long instructions or camera-cut language reduce reliability. Test custom key bindings in AI Studio first; the 2-second cooldown prevents overlapping impulses.

Always call `complete()` at the end. Sessions bill for the full duration of streamed output. For browser apps, never expose the long-lived API key; use ephemeral tokens.

Review outputs carefully. Worlds remain coherent for roughly the first minute. Later frames can drift. SynthID watermarking is present on every output for identification.

If you also work with Gemini 4 models for coding agents, the same paid-tier key and Interactions API patterns apply. Check our earlier post on [using Gemini 4 Neon for coding projects](/blog/how-to-use-gemini-4-neon-coding-knowledge-work/).

## Watch the Official Demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EDp4IoAUsXY"
    title="Introducing the new Project Genie, powered by Genie 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google DeepMind video shows real-time interaction, native audio, and mid-session steering. It complements the API documentation.

## Conclusion

Genie 4 gives developers a blank canvas for real-time interactive worlds inside the Gemini API and AI Studio. Seed a world with a grounded prompt, move with WASD and arrows, and change conditions with short text events. Sessions stay short and bill by the second, so precise prompts and clean session management matter.

Start in the AI Studio Live playground to test ideas, then move to the Interactions API for custom clients. Official documentation remains the source of truth for parameters, pricing, and limits.

## Sources

- [Genie 4 is now available on the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/) — Google Blog, 19 November 2026
- [Genie 4 is now available (Project Genie)](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) — Google Blog, 18 November 2026
- [Interactive world generation with Genie 4](https://aistudio.google.com/docs/genie) and [Genie 4 prompt and controls guide](https://aistudio.google.com/docs/genie-prompting) — Google AI for Developers
- [Genie 4 model card](https://deepmind.google/models/model-cards/genie-4/) — Google DeepMind
