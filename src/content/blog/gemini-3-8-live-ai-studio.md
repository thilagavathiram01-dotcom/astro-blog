---
title: "How to Use Gemini 3.8 Live in Google AI Studio"
description: "Try Gemini 3.8 Live in Google AI Studio and the Live API: model IDs, setup steps, pricing, and when to pick Extended Thinking."
pubDate: 2026-09-23T11:45:00
heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google released **Gemini 3.8 Live** and **Gemini 3.8 Live Extended Thinking** on September 15, 2026. Both are native speech-to-speech models for real-time voice agents. You can try them in Google AI Studio today and call them from the Gemini Live API.

This guide sticks to official docs: which model string to use, how to open a Live session, and when Extended Thinking is worth the extra cost. It is written for developers who already have a Gemini API key.

## What shipped on September 15

Google describes two models:

- **Gemini 3.8 Live** (`gemini-3.8-live`): low-latency dialogue with visual grounding. Default choice for most voice agents.
- **Gemini 3.8 Live Extended Thinking** (`gemini-3.8-live-extended-thinking`): same live audio path, plus extra multi-step reasoning in the background.

Official availability:

- Developers: Gemini API and Google AI Studio
- Enterprises: private preview in Gemini Enterprise
- Consumers: Search Live; Gemini Live for eligible Gemini app plans

Inputs are text, images, audio, and video. Outputs are text and audio. The documented context window is 131,072 input tokens and 65,536 output tokens. Function calling and Search grounding are supported. Image generation, code execution, file search, and structured outputs are not.

Google’s published audio price for these Live models is **$0.005 per minute of audio input** and **$0.018 per minute of audio output**.



![Developer workstation with microphone and laptop for a live voice session](https://images.unsplash.com/photo-1516321318426-f3c710d049ad?auto=format&fit=crop&w=800&q=80)



## Pick the right model before you open Studio

Use **3.8 Live** when first spoken word and barge-in matter more than long tool chains. Google positions it as the scale and cost option.

Use **Extended Thinking** when the user asks for multi-step work: look up a policy, call tools, then keep talking. Google reports 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, and 35.1% on Sierra’s τ-Voice-banking benchmark for that model.

Do not copy old session config blindly. When you migrate from `gemini-3.1-flash-live-preview`, change the model string to `gemini-3.8-live` and **omit `thinking_level` / `thinking_config`**. Those fields are not supported on 3.8 Live.

If you are also shipping Android product features that talk to users in the real world, pair this work with the phone-side tools in our [September 2026 Android Drop guide](/blog/android-september-2026-drop-guide/). Guided vision in Gemini Live on-device is a different surface from the Live API, but the prompt habits transfer.

## Step 1: Open Live in Google AI Studio

1. Sign in at [Google AI Studio](https://aistudio.google.com/).
2. Open the **Realtime / Live API** playground (Google links it as [aistudio.google.com/live-api](https://aistudio.google.com/live-api)).
3. Select **gemini-3.8-live** for a latency test, or **gemini-3.8-live-extended-thinking** for a tool-heavy test.
4. Set response modality to **audio** if you want spoken replies.
5. Add a short system instruction. State the agent’s job, what it must confirm out loud, and which tools it may call.
6. Allow the browser microphone (and camera if you are testing visual grounding).
7. Talk. Interrupt mid-sentence to confirm barge-in works.

Keep the first prompt boring and testable: “You are a support agent. Confirm the order number before you look anything up. If you call a tool, say that you are checking.” Vague personas hide latency and tool errors.

## Step 2: Connect with the official SDK

Google’s Live API quickstart uses the Google GenAI SDK. A minimal Python session looks like this pattern from the docs:

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

asyncio.run(main())
```

JavaScript uses `GoogleGenAI` from `@google/genai`, model `'gemini-3.8-live'`, and `responseModalities: [Modality.AUDIO]`.

Treat a **session** as one persistent connection. Send live mic or camera frames as blobs. Use text `send_realtime_input` for typed follow-ups during the same call.



![Close-up of code on a laptop while testing an AI voice agent](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Step 3: Turn on the features that actually change the call

Google DeepMind’s Live API update walkthrough highlights four behaviors you should test on purpose:

**Asynchronous function calling.** The model can keep speaking while a tool runs in the background. Design tools that return short, structured results. Do not block the audio stream on a 10-second HTTP call if you can avoid it.

**Proactive audio.** The agent stays quiet unless the user needs a reply. This matters for always-on desktop or kiosk mics. Write the system prompt so silence is allowed.

**Context injection with `send_client_content`.** Push fresh state (cart, ticket, CRM note) into the live session without restarting it.

**Background reasoning on Extended Thinking.** Let the model keep working after it has already started talking. Use this for claims, itineraries, and multi-app lookups. Do not use it for “what time is it” style turns.

Watch Google’s official demo before you wire tools:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: A 15-minute test plan

Run the same script on both model IDs and write down first-audio time, tool-call count, and whether the agent talked over you.

1. Greeting only. No tools. Measure time to first spoken word.
2. Interrupt after two seconds. Confirm the model stops and answers the new question.
3. One tool call with a fake order ID. Confirm it announces the lookup.
4. A two-tool task (“find the policy, then draft the email”). Compare Live vs Extended Thinking.
5. Switch language mid-call if your product needs it. Google documents mid-conversation language switching on these models.
6. Attach a still image or camera frame and ask what is on screen.

If Extended Thinking talks longer before the tool fires, that is expected. LiveKit’s public comparison of the two model IDs showed standard Live reaching a simple drawing tool sooner, while Extended Thinking narrated more progress first.

## Practical limits to design around

- **No thinking_level on 3.8 Live.** Do not send the old 3.1 Live preview thinking config.
- **No caching, batch API, or code execution** on the documented 3.8 Live card.
- **Grounding with Google Maps is not listed** for this model. Use Search grounding or your own tools instead.
- **Safety still applies.** Google points developers to the model card for the Live audio models. Log tool arguments. Require a spoken confirmation before any write action (refund, send, delete).
- **Consumer Gemini Live on a phone is not the same product** as your API session. Feature flags, voices, and app connections differ.

For production media plumbing, Google lists Live API partners including Agora, Fishjam, LiveKit, Pipecat, Vercel, and Vision Agents. Use one of those if you do not want to own WebRTC yourself.

## Tips that save a wasted afternoon

Keep system instructions under a few hundred words. Long constitutions add latency and invite the model to lecture.

Name tools after user intent (`lookup_order`, `create_draft`), not after internal microservices.

Log audio minutes from day one. At $0.005 / $0.018 per minute, a leaky always-on mic is a billing bug.

Ship a text fallback in the same session. If the user is in a noisy room, typed `send_realtime_input` is cheaper than asking them to shout.

Rehearse failure: empty tool result, 401, timeout. The agent should say it failed and ask whether to retry. Silence after a tool error feels like a dropped call.

## Conclusion

Gemini 3.8 Live is the model string to start with for a real-time voice agent. Extended Thinking is the upgrade when the call has to finish a multi-step job without breaking the conversation.

Open AI Studio, run the five-step test plan on both IDs, then copy the working config into the GenAI SDK. Change one thing at a time: voice, tools, then camera. That is enough to know whether these models fit your product before you build a full telephony stack.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model card (Gemini API docs)](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Get started with Gemini Live API using the Google GenAI SDK](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk)
- [Google AI Studio quickstart](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
- [What's new in the Gemini Live API (YouTube)](https://www.youtube.com/watch?v=3CyW24Pkz4o)
