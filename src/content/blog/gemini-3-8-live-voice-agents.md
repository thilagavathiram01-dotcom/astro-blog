---
title: "How to Build Voice Agents with Gemini 3.8 Live API"
description: "Set up Gemini 3.8 Live and Extended Thinking for real-time voice agents: sessions, audio, async tools, and when to pick each model."
pubDate: 2026-09-22T10:30:00
heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google launched **Gemini 3.8 Live** and **Gemini 3.8 Live Extended Thinking** on September 15, 2026. Both are native speech-to-speech models on the Live API. You talk; they reply in audio. They can also take images and video as input.

This guide shows how to pick a model, open a session in Google AI Studio or the Gemini API, send audio, and add background tool calls. Facts below come from Google’s model pages and Live API docs.

## What shipped on September 15

Google published two live dialogue models:

- **`gemini-3.8-live`**: default for low-latency voice agents. Fluid dialogue and visual grounding. Interleaved reasoning exists, but you do not set `thinking_level`.
- **`gemini-3.8-live-extended-thinking`**: same Live API surface, more background reasoning for multi-step tasks. Google reports it at 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, and 35.1% on Sierra’s τ-Voice-banking benchmark.

Both accept text, images, audio, and video. Both output text and audio. Official limits: **131,072** input tokens and **65,536** output tokens. Search grounding and function calling are supported. Caching, code execution, file search, Maps grounding, image generation, structured outputs, and the Batch API are not.

Pricing Google published for audio: **$0.005 per minute** input and **$0.018 per minute** output.

Availability at launch:

- Developers: Gemini API and Google AI Studio
- Enterprises: private preview in Gemini Enterprise
- Consumers: Search Live; Gemini Live, Docs, Gmail, and Keep on qualifying Google AI plans for Extended Thinking

If you already ship Android agents with App Functions or on-device skills, treat Live as the cloud voice layer, not a replacement for on-device MCP. Pair it with the patterns in [Android AppFunctions for agents](/blog/android-appfunctions-agents/).



![Developer workstation with headphones and a laptop used for a voice AI session](https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?auto=format&fit=crop&w=800&q=80)



## Pick Live or Extended Thinking first

Google’s docs are direct about the split.

Use **`gemini-3.8-live`** when turn-taking speed matters more than long planning: customer-service triage, language practice, voice search, interactive stories.

Use **`gemini-3.8-live-extended-thinking`** when the agent must plan, call tools, and keep talking while it works: claims intake, multi-step booking, troubleshooting that needs several lookups.

Do not set `thinking_level` or `thinking_config` on `gemini-3.8-live`. Those fields are not supported on that model string. Extended Thinking handles background reasoning as part of the model, not as a knob you copy from older Flash Live sessions.

If you are migrating from `gemini-3.1-flash-live-preview`:

1. Change the model string to `gemini-3.8-live` or `gemini-3.8-live-extended-thinking`.
2. Remove `thinking_level` / `thinking_config` from session setup for standard Live.
3. Keep the same `turnComplete` lifecycle.

## Try it in Google AI Studio before you write code

Open [Google AI Studio](https://aistudio.google.com/app/live) and choose **Stream** (Realtime). Select `gemini-3.8-live` or the Extended Thinking variant. Grant microphone access. Optionally share the camera so the model can ground answers in what it sees.

Use Studio to check three things before you wire a backend:

1. Voice. Google lists prebuilt voices such as Puck and Kore. Listen to them in Studio.
2. Barge-in. Interrupt the model mid-sentence and confirm it stops.
3. Vision. Point the camera at a label or a UI and ask a question about it.

When the session sounds right, use **Get code** and switch to the SDK.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Open a Live API session with the official SDK

Create an API key in AI Studio. Set it in the environment:

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
```

Python, from Google’s Live API get-started guide:

```python
import asyncio
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")
model = "gemini-3.8-live"
config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")
        await session.send_realtime_input(text="Hello, how are you?")

if __name__ == "__main__":
    asyncio.run(main())
```

JavaScript:

```javascript
import { GoogleGenAI, Modality } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
const model = 'gemini-3.8-live';
const config = { responseModalities: [Modality.AUDIO] };
```

A session is a persistent connection. Config sets modalities, voice, and system instructions. Real-time input is sent as blobs (audio frames, video frames, or short text).

To pin a voice:

```python
config = {
    "response_modalities": ["AUDIO"],
    "speech_config": {
        "voice_config": {
            "prebuilt_voice_config": {"voice_name": "Kore"}
        }
    },
}
```

For Extended Thinking, change only the model string:

```python
model = "gemini-3.8-live-extended-thinking"
```



![Close-up of a microphone used for real-time speech input](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Send audio and keep the conversation moving

Live is not a request-response chat call. You stream input while the model streams output.

Practical rules from Google’s Live API docs:

- Send PCM audio at the rate the docs specify for your client (commonly 16-bit, 16 kHz, little-endian for microphone capture).
- Use `send_realtime_input` for live mic and camera frames.
- Use `send_client_content` when you need to inject context without forcing a user turn. Google’s launch demo uses this as a backchannel: update the session with new facts while the user is still speaking.
- Let the user interrupt. Native audio models are built for barge-in. If your client buffers too much output, the agent will talk over the user.

Vision frames are JPEG or PNG stills sampled from the camera. Do not flood the socket. A few frames per second is enough for “what is on this label?” style questions.

## Add asynchronous function calling

This is the feature that turns a voice model into an agent. The model can keep speaking while a tool runs in the background.

Google’s Live tools guide describes non-blocking tool calls. The pattern:

1. Declare functions in session setup the same way you would for other Gemini models.
2. When the model emits a function call, run it on your server.
3. Return the result on the same session. The model weaves it into the spoken reply.
4. Prefer tools that finish in a few seconds: order status, calendar slots, account lookup.

Extended Thinking is the better default when a single user request needs several tool hops. Standard Live is the better default when most turns are greetings, confirmations, or one lookup.

Do not hide irreversible actions behind an async call. Google’s consumer Gemini Intelligence work on Android still asks for a final confirmation before completing multi-step tasks. Mirror that: look up in the background, commit only after the user says yes.

## Production checklist

- **Auth.** Prefer ephemeral tokens for browser clients so the long-lived API key never leaves the server. Google documents ephemeral tokens under the Live API.
- **Session length.** Plan for context compression and session resumption. A 131k input window is large, but a long voice call still fills it with transcripts.
- **Languages.** Google’s launch posts describe mid-conversation language switching across a large language set. Test the pair you actually serve; do not assume every locale ships on day one.
- **Cost.** Audio is billed per minute, not per token, for the published live rates. Log minutes, not just request counts.
- **Partners.** Agora, Fishjam, LiveKit, Pipecat, Vercel, Vision Agents, and LangChain ship Live API integrations if you do not want to own WebRTC yourself.
- **Safety.** Review the model card before you put the agent on a phone line. Voice agents that can call tools need the same allowlists you use for any function-calling app.

## Common setup mistakes

**Wrong model string.** `gemini-3.8-flash` is the text workhorse. Live sessions need `gemini-3.8-live` or `gemini-3.8-live-extended-thinking`.

**Copied thinking config.** Leaving `thinking_level` in setup from a 3.1 Flash Live client will fail or be ignored. Strip it.

**Studio-only testing.** Studio hides transport details. Test microphone permissions, echo cancellation, and packet loss on a real device.

**Blocking tools.** If the tool must finish before any audio returns, you lose the point of async calling. Return a spoken filler, then the result.

## Conclusion

Start in AI Studio Stream with `gemini-3.8-live`. Confirm barge-in and a voice you can ship. Move the same config into the GenAI SDK. Add one read-only tool as a non-blocking call. Switch the model string to Extended Thinking only when a turn needs multi-step planning.

That path matches Google’s own split: Live for speed, Extended Thinking for work that continues while the agent talks.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model card (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Get started with Gemini Live API using the Google GenAI SDK](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk)
- [Thinking in the Live API](https://aistudio.google.com/docs/live-api/thinking)
- [Google AI Studio quickstart](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
