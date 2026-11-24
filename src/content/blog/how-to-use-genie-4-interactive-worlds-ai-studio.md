---
title: "How to Use Genie 4 for Interactive Worlds in AI Studio"
description: "Step-by-step guide to generate and steer 720p interactive worlds with Genie 4 in Google AI Studio and the Gemini API."
pubDate: 2026-11-24T10:30:00
heroImage: "https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "how-to"]
noindex: false
---

Google released Genie 4 to developers on November 19, 2026. The model generates continuous 720p worlds at 24 fps with synchronized 48 kHz stereo audio. You seed a scene from text, a reference image, or both, then move and reshape it in real time with keyboard controls and live prompts.

This guide shows how to try Genie 4 in Google AI Studio Live and call it through the Interactions API. All steps come from official Google documentation.

![Person interacting with virtual reality headset in a bright room](https://images.unsplash.com/photo-1758521540703-34409d1f4e04?auto=format&fit=crop&w=800&q=80)

## What Genie 4 Produces

Genie 4 (`genie-4`) runs on the Interactions API. Output is a live 16:9 video stream at 1280x720 and 24 frames per second. Stereo audio at 48 kHz travels with the video. Sessions last up to 120 seconds. Visual coherence is strongest in the first 45–90 seconds.

The model accepts text prompts, a single 16:9 reference image, keyboard movement, and mid-session text commands. It does not support the free tier, function calling, or grounding. Every output carries an imperceptible SynthID watermark.

Serving happens from data centers in the United States, Western Europe, and Japan. Expect the best responsiveness under 150 ms round-trip in those regions. Outside them, latency can lower the effective frame rate.

## Try Genie 4 in Google AI Studio

Open the Live playground at aistudio.google.com/live?model=genie-4. You need a paid-tier Gemini API key. The playground loads starter worlds such as a living oil painting, an espresso machine, or a golf cart drive so you can inspect prompts and controls before writing code.

1. Sign in and confirm billing is enabled on your API key.
2. Select or start a world from the curated list, or enter your own prompt.
3. Click the video viewport to focus keyboard capture.
4. Use W, A, S, D to move forward, backward, and strafe. Arrow keys pan and tilt the camera. Response time is roughly 0.2–0.5 seconds.
5. Bind custom keys (E, Q, R) to text prompts in the interface. AI Studio enforces a 2-second cooldown on custom bindings.
6. Type mid-session prompts in the bar to change weather, objects, or events. Wrap dialogue in quotation marks to speak to characters.
7. Watch the session timer. The stream pauses if you leave the tab for more than 10 seconds so idle sessions do not keep billing.

Initial generation takes 5–9 seconds before the first frame appears. Always end the session cleanly when you finish.

![Abstract geometric landscape of cubes forming terrain](https://images.unsplash.com/photo-1790746569942-851dda5ed87a?auto=format&fit=crop&w=800&q=80)

## Call Genie 4 Through the Interactions API

Every session follows four steps on the v1beta endpoint:

1. Create the interaction with model `genie-4` on your server.
2. Connect over WebRTC (recommended for browsers) or WebSocket.
3. Send one `world_setup` event, then `user_action` movement events or `input` text events.
4. Call `complete()` when finished so generation and billing stop.

For browser clients, mint a single-session ephemeral token on the server and return only the interaction ID and token. Never expose a long-lived API key in the browser.

Install the latest `@google/genai` (JavaScript) or `google-genai` (Python) SDK. Billing is based on video output tokens: 240 tokens per frame, or 5,760 tokens per second at 24 fps. Under standard pricing this works out to roughly $0.10 per second (about $6.05 per minute). Audio is included in the video token rate. Input text and reference images are billed separately at lower rates.

Regional latency matters. Place any backend relay near a serving region when you target users outside North America, Western/Central Europe, or East Asia.

## Write Better Prompts and Controls

Official testing produced five reliable patterns.

- **Causal rules**: Embed `Rule:` clauses that bind to concrete objects placed far from the camera. Example: a red lever far away that triggers hyperspace when pulled. Characters should wait until triggered.
- **Key-bound actions**: Map E, Q, or R on the client to short text impulses sent repeatedly for about 1.5 seconds. Walking worlds are more forgiving than tight cockpit driving.
- **Image seeds**: Pass a compressed 16:9 JPEG under 48 KB with the text prompt. Stylized art or empty landscapes work better than street photos that may trip safety filters. Turning 180 degrees and looking back generates a fresh interpretation rather than the exact starting pixels.
- **Foley audio and visible propulsion**: Request crisp physical contact sounds (footsteps on cobblestone, water lapping) instead of music or drone keywords. Anchor how the camera moves in the opening sentence so the model does not invent a vehicle mid-stream.
- **Short vignettes**: Keep close-up object interactions under 45 seconds and keep the camera pointed at the subject. Object permanence degrades after roughly 8 seconds off-screen.

Avoid trailer-style language such as “quick cuts” or “upbeat soundtrack.” Those requests produce unpredictable results on a live continuous stream.

## Pricing, Limits, and Practical Tips

Genie 4 is paid-tier only. Concurrent session limits start at 2 on the lowest paid tier and rise with higher tiers. Always call `complete()` or the equivalent stop method. Closing a tab or exiting a local block detaches the transport but does not immediately stop server-side generation.

Test prompts and key bindings in the AI Studio Live playground before writing client code. A 30-second automated run costs about $3, so interactive scouting is cheaper for iteration. For related model work in AI Studio, see our guide on [using Gemini 4 Neon for coding and analysis](/blog/how-to-use-gemini-4-neon/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pVc6KkjeCfU"
    title="Behind the scenes with Genie 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Genie 4 lets you prototype interactive experiences, spatial designs, or agent training environments from a single prompt. Start in the AI Studio Live playground with a short walking scene, confirm movement and one custom action, then move the same prompt into the Interactions API. End every session cleanly and stay within the 120-second window for the most coherent results.

## Sources

- [Genie 4 now available through the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/) — Google Blog, November 19, 2026
- [Interactive world generation with Genie 4](https://aistudio.google.com/docs/genie) — Google AI for Developers
- [Genie 4 model page](https://aistudio.google.com/docs/models/genie-4) — Google AI for Developers
- [Genie 4 prompt and controls guide](https://aistudio.google.com/docs/genie-prompting) — Google AI for Developers
- Official DeepMind video: Behind the scenes with Genie 4
