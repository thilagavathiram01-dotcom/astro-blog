---
title: "How to Build a Voice Agent with Gemini 3.8 Live API"
description: "Learn how to connect the Gemini 3.8 Live API, pick the right model, stream audio, and add async tools for a production voice agent."
pubDate: 2026-09-22T11:00:00
heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools"]
noindex: false
---

Google released **Gemini 3.8 Live** and **Gemini 3.8 Live Extended Thinking** on September 15, 2026. Both models sit on the Gemini Live API: a WebSocket session that streams audio, images, video frames, and text in both directions.

This guide shows how to pick a model, open a session with the official Gen AI SDK, send audio the way the API expects, and add tools without freezing the conversation. Facts below come from Google’s model announcement and the Live API docs.

## What changed in Gemini 3.8 Live

Google positions **Gemini 3.8 Live** as the default for low-latency voice agents. It is built for scale and cost, with fluid dialogue and visual grounding. It can switch among 97 languages mid-conversation and keep talking while tools run in the background.

**Gemini 3.8 Live Extended Thinking** targets harder workflows. Google says it reasons and speaks at the same time, using short cues such as “Let me check that…” and live progress narration while multi-step work continues.

Google’s published scores for Extended Thinking include first place on Artificial Analysis’ Speech to Speech Quality Index at 82.6, 68.6% on τ-Voice, 35.1% on Sierra’s τ-Voice-banking benchmark, and 97.7% on Big Bench Audio. Treat those as vendor-reported numbers, not a substitute for your own evals.

Availability, per Google:

- Developers: Gemini API and Google AI Studio
- Enterprises: private preview in Gemini Enterprise
- Consumers: Search Live for 3.8 Live; Gemini Live plus Workspace Live surfaces for Extended Thinking on qualifying Google AI plans

If you already ship on `gemini-3.1-flash-live-preview`, the official migration path is to switch the model string to `gemini-3.8-live` and drop `thinking_level` / `thinking_config` from session setup. Those fields are not supported on 3.8 Live.



![Developer laptop and headphones used for a voice agent prototype](https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80)



## Choose the right model string

Use two codes only:

| Model | When to use |
| --- | --- |
| `gemini-3.8-live` | Default voice agent, low latency, visual grounding, background tools |
| `gemini-3.8-live-extended-thinking` | Bookings, multi-step research, sketch-to-code, long tool chains |

Official limits for `gemini-3.8-live`: text, image, audio, and video in; text and audio out; 131,072 input tokens; 65,536 output tokens. Function calling and search grounding are supported. Caching, code execution, file search, image generation, structured outputs, URL context, and Batch API are not.

Proactive audio is permanently on for both 3.8 Live models. The agent is meant to speak when it is relevant, not after every fragment of mic input.

## Step 1: Get an API key and the SDK

1. Create a key in [Google AI Studio](https://aistudio.google.com/).
2. Install the Gen AI SDK (`google-genai` for Python, `@google/genai` for JavaScript).
3. Store the key in an environment variable. Do not ship it in client bundles.

Python session skeleton from Google’s get-started guide:

```python
import asyncio
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")
model = "gemini-3.8-live"
config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")
        # Send content...

if __name__ == "__main__":
    asyncio.run(main())
```

The same model string works in JavaScript with `ai.live.connect` and `responseModalities: [Modality.AUDIO]`.

You can also try the models in AI Studio’s Live playground before you write transport code.

## Step 2: Stream audio the API will accept

Live API audio input is raw 16-bit PCM, 16 kHz, little-endian. Do not send compressed files or browser MediaRecorder blobs without converting them first.

Text is allowed on the same session. Google’s SDK examples use `session.send_realtime_input(text="Hello, how are you?")` in Python and `sendRealtimeInput({ text: '...' })` in JavaScript.

Keep a single persistent session for a conversation. Opening a new WebSocket per utterance resets context and adds setup latency.

For camera or screen context, send frames as images on the same live connection. Google’s demos for 3.8 Live include an onboarding agent that answers from visual context and a chess demo that reads the board in near real time.



![Close-up of a studio microphone used for live voice capture](https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?auto=format&fit=crop&w=800&q=80)



## Step 3: Write system instructions that a live model can follow

Google’s Live API best-practices page recommends a short instruction stack, in this order:

1. Persona: name, role, language, and accent if you care about accent.
2. Conversational rules: when to speak, when to stay quiet, how to confirm irreversible actions.
3. Guardrails: what the agent must refuse.
4. Tools: when each function should fire.

Keep one persona per instruction block. Long multi-role prompts perform worse than a chain of focused prompts. The model works best when a turn maps to a single function call, even though 3.8 Live can run tools in the background.

Live API waits for user input before it talks. If you want the agent to greet first, include an explicit start command in the first client message.

## Step 4: Add async tools without stalling speech

3.8 Live can acknowledge a request, keep chatting, and finish an API call in the background. That is the point of asynchronous function calling.

Practical pattern:

1. Declare tools with clear names and trigger conditions.
2. Return a short spoken ack immediately (“I’ll book that and keep talking”).
3. Push tool results back into the session when they land.
4. Require a final user confirmation for payments, messages, or deletions.

Google’s own product demos use this for multi-step bookings. The same idea applies if you wrap LiveKit, Pipecat, Agora, LangChain, Vercel AI Gateway, Fishjam, or Vision Agents. Those partners handle media transport; you still own tool contracts and confirmations.

On Android, pair a voice agent with on-device context instead of stuffing every fact into the system prompt. Our [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/) covers Gemini plus Find Hub memory, which is a better place to store “where I put the passport” than a live session.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 5: Test like a voice product, not a chatbot

Score four things on a real headset:

- Time to first audio after the user stops speaking
- Interruption handling when the user talks over the model
- Tool accuracy when two tools could apply
- Language switches if your users mix languages

Google reports that 3.8 Live ranks second in the Speech Agent Arena and that both models sit on ServiceNow’s EVA-Bench Pareto frontier for accuracy versus conversational quality. Run the same scripts on your domain. A support bot that books refunds needs different evals than a chess coach.

Watermarking: all audio from Google’s AI products includes SynthID. Plan for detection if you store or republish generated speech.

Safety: read the [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you put the agent in front of customers. Confirm identity before tool calls that change account state.

## Tips that save a week of debugging

- Start in AI Studio Live, then copy the working model string into the SDK.
- Log PCM sample rate at capture time. Most “garbled voice” bugs are 48 kHz audio sent as 16 kHz.
- Omit thinking config on 3.8 Live. Leaving it in can fail session setup after a 3.1 migration.
- Use Extended Thinking only when a turn needs multi-step planning. It costs more and is slower to first useful token.
- Keep confirmations in your UI even if the model sounds confident.
- Do not rely on caching, file search, or structured JSON output in this Live path. Those capabilities are listed as unsupported on `gemini-3.8-live`.

## Conclusion

Gemini 3.8 Live is the default model string for a new voice agent in September 2026. Extended Thinking is the upgrade when the agent must plan, narrate, and call tools without dropping the conversation.

Open one live session, send 16 kHz PCM, write short system instructions, and keep the user in the loop on every state-changing tool. That is enough to ship a first agent you can measure.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Get started with Gemini Live API (SDK)](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk)
- [Live API capabilities](https://ai.google.dev/gemini-api/docs/live-api/capabilities)
- [Live API best practices](https://ai.google.dev/gemini-api/docs/live-api/best-practices)
- [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [What’s new in the Gemini Live API (Google for Developers)](https://www.youtube.com/watch?v=3CyW24Pkz4o)
