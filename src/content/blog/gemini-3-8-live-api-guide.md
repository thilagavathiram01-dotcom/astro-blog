---
title: "How to Try Gemini 3.8 Live in AI Studio and the API"
description: "Set up Gemini 3.8 Live in Google AI Studio and the Live API: model IDs, async tools, migration notes, and when to use Extended Thinking."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1590602847861-e609e3a1e4e6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Google published Gemini 3.8 Live and Gemini 3.8 Live Extended Thinking on September 15, 2026. The pair is built for voice agents that stay in conversation while they reason, call tools, and look at a camera feed.

This guide follows Google’s official blog, the Gemini 3.8 Live model page, and the Live API SDK quickstart. It covers what each model is for, how to try them in AI Studio, how to open a session in code, and what breaks if you still point at Gemini 3.1 Flash Live.

## What Google shipped

**Gemini 3.8 Live** is the default low-latency voice model. Google describes it as the option for scale and cost: fluid dialogue plus visual grounding, without waiting on a long reasoning pass before the first spoken token.

**Gemini 3.8 Live Extended Thinking** is the high-complexity sibling. It reasons and speaks at the same time. Google says it uses short acknowledgements such as “Let me check that…” and then narrates multi-step work in the background.

Official availability from the September 15 post (updated September 17):

- Developers: Gemini API and [Google AI Studio](https://aistudio.google.com/live)
- Enterprises: private preview in Gemini Enterprise; Customer Experience support is listed as coming soon
- Consumers: 3.8 Live in Search Live; Extended Thinking in Gemini Live, plus Workspace Live surfaces for eligible subscribers

Workspace details in that post: Docs Live for Google AI Pro and Ultra; Gmail Live and Keep Live for all Google AI subscribers.



![Developer workstation with headphones ready for a voice session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Which model to pick

Use **gemini-3.8-live** when the product is a receptionist, tutor, or support agent that must answer immediately. The model page calls it the default for real-time dialogue without reasoning-induced delays.

Use **Extended Thinking** when the agent has to plan, book, debug, or assemble a multi-file deliverable while still talking. Google’s demos include sketch-to-React, multi-step bookings with async function calls, and spoken business-plan drafting.

Published numbers from Google’s announcement (do not treat them as your production SLA):

- Extended Thinking: 82.6 on Artificial Analysis Speech to Speech Quality Index (first place at publish time)
- 68.6% on τ-Voice and 35.1% on Sierra’s τ-Voice-banking
- 97.7% on Big Bench Audio
- 3.8 Live: second place in Speech Agent Arena, positioned as the cheaper scale model

Both models accept text, images, audio, and video. Outputs are text and audio. For `gemini-3.8-live`, Google lists a 131,072 input token limit and a 65,536 output token limit. Function calling and Search grounding are supported. Caching, code execution, file search, Maps grounding, image generation, structured outputs, URL context, and the Batch API are not.

All generated audio is watermarked with [SynthID](https://deepmind.google/models/synthid/). Review the [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you ship a customer-facing agent.

## Try it first in Google AI Studio

You do not need a production WebSocket stack to hear the models.

1. Open [AI Studio Live](https://aistudio.google.com/live) and sign in with the same Google account that holds your Gemini API key.
2. Select **gemini-3.8-live** for a fast voice loop, or the Extended Thinking live model for longer tasks.
3. Grant microphone (and camera, if you want visual grounding).
4. Add a short system instruction: role, tools the agent may mention, and when it should stay silent.
5. Speak a task that matches the model. Example for Live: “Walk me through this on-screen error.” Example for Extended Thinking: “Draft a three-step onboarding plan from this checklist, then quiz me.”

Studio is the fastest way to confirm language switching (Google lists 97 languages with mid-conversation transitions) and visual grounding before you write client code.

If you already use Gmail Live, the same family of models now powers spoken inbox work. See our [Gmail Live voice inbox search](/blog/gmail-live-voice-inbox-search/) walkthrough for the consumer surface, then come back here for the API.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Open a Live API session in code

Google’s get-started guide uses the Google GenAI SDK. Create an API key in AI Studio, then keep it out of source control.

Python sketch from the official SDK page:

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

JavaScript uses the same model string and `Modality.AUDIO`. Send microphone frames as audio blobs on the realtime input channel. Send camera frames only when the scene changed; the 3.8 Live defaults include video in the turn, so extra frames cost context.

Key session ideas from the docs:

- A **session** is the persistent connection.
- **Config** sets modalities, voice, and system instructions.
- **Realtime input** is text, audio, or video blobs.
- Audio is the supported response modality. Turn on output audio transcription if your UI needs captions.

For long research that is not a live call, keep using a batch-style agent such as [Gemini Deep Research](/blog/gemini-deep-research-cited-reports/). Live API is for turn-taking, not overnight report jobs.



![Conference microphone and laptop during a live product demo](https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80)



## Migrate from Gemini 3.1 Flash Live

If your code still sends `gemini-3.1-flash-live-preview`, change the model string to `gemini-3.8-live` and then fix these breaking defaults from the official model page:

1. **Drop thinking_level.** `thinking_level` and `thinking_config` are not supported on 3.8 Live. Omit them at session setup.
2. **Expect async tools.** `behavior: NON_BLOCKING` is now the default function-calling mode. Set `behavior: BLOCKING` on a tool only if you still need the old wait-and-talk pattern. Scheduling values `SILENT`, `WHEN_IDLE`, and `INTERRUPTED` remain valid.
3. **Use send_client_content for the whole session.** You can inject user or model turns at any time. `turn_complete=true` interrupts generation. Without that flag, the server waits for more messages.
4. **Leave proactive audio on.** Setting `proactive_audio: false` returns an error. The agent is meant to stay quiet until speech is relevant.
5. **Remove affective dialogue flags.** `enable_affective_dialog` is gone. Delete it or the session config fails.
6. **Watch video cost.** The default turn coverage is `TURN_INCLUDES_AUDIO_ACTIVITY_AND_ALL_VIDEO`. Send frames only when they add information.

Google lists partner stacks that already wrap this transport: Agora, Fishjam, LangChain, LiveKit, Pipecat, Vercel, and Vision Agents. Use one of those if you do not want to own WebRTC yourself.

## Tips that keep a voice agent usable

- Write system instructions as spoken policy, not essay prompts. State when the agent may interrupt, when it must confirm a tool call, and which languages it should prefer.
- Keep tools small and idempotent. Async calling means the user can talk over a booking that is still in flight.
- Log transcripts with consent. Enable output transcription rather than trusting your own speech-to-text on the same stream.
- Test barge-in. 3.8 Live is built so a user can cut in; your client still has to stop local playback.
- Do not send secrets in client content updates. Session injection is visible to the model for the rest of the call.
- Re-read the model card before healthcare, finance, or child-directed agents. Live audio plus camera is a high-sensitivity combination.

## Conclusion

Gemini 3.8 Live is the everyday voice model: low delay, camera context, 97-language switching, and tools that run while the conversation continues. Extended Thinking is the same Live API with more background reasoning and spoken progress.

Start in AI Studio, confirm the voice and camera loop, then point the GenAI SDK at `gemini-3.8-live`. If you are leaving 3.1 Flash Live, treat the migration list as required work, not optional cleanup.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google
- [Gemini 3.8 Live model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Get started with Gemini Live API using the Google GenAI SDK](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk) — Google AI for Developers
- [Gemini Live API overview](https://ai.google.dev/gemini-api/docs/live-api) — Google AI for Developers
- [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
