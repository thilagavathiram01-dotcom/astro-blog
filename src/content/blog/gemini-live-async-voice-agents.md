---
title: "How to Build Async Voice Agents with Gemini Live"
description: "Connect gemini-3.8-live, stream PCM audio, and register async function calls so your voice agent keeps talking while tools finish."
pubDate: 2026-09-23T16:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools", "ai"]
noindex: false
---

Google shipped Gemini 3.8 Live and Gemini 3.8 Live Extended Thinking on September 15, 2026. Both models sit on the Gemini Live API and are built for spoken agents that can see, talk, and call tools without freezing the conversation.

This guide is the developer path: pick a model ID, open a Live session, send PCM audio, and register asynchronous function calls. Product-side voice in Gmail, Docs, and Keep is covered separately in our [Gemini 3.8 Live Workspace guide](/blog/gemini-3-8-live-voice-gmail-docs/). Facts below come from Google’s launch post and the official Live API docs.

## Choose the model before you write code

Google published two Live strings, not one.

**`gemini-3.8-live`** is the default for low-latency voice. Google positions it for scale and cost. It accepts text, images, audio, and video, returns text and audio, and can run tools in the background while speech continues. It auto-detects and switches among 97 languages mid-session.

**`gemini-3.8-live-extended-thinking`** is the high-complexity option. Google describes it as a model that reasons and speaks at the same time. It uses short acknowledgements and narrates multi-step work instead of going silent.

Google reports Extended Thinking at 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, 35.1% on Sierra’s τ-Voice-banking set, and 97.7% on Big Bench Audio. Gemini 3.8 Live placed second in the Speech Agent Arena. Treat those as launch scores. Time your own tools.

If you are migrating from `gemini-3.1-flash-live-preview`, change the model string and drop `thinking_level` or `thinking_config` from session setup. The 3.8 Live docs say those fields are not supported on `gemini-3.8-live`.

Limits from the official table for `gemini-3.8-live`: 131,072 input tokens, 65,536 output tokens. Caching, code execution, file search, image generation, structured outputs, and the Batch API are not supported on that model.



![Developer workstation with code and a microphone for a live voice session](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Open a Live session in Python

The Live API uses a persistent session. You configure modalities, then send audio or text as realtime input.

Install the Google GenAI SDK and set an API key from Google AI Studio. Do not put that key in a browser bundle. For client apps, mint a short-lived token on your server.

Google’s documented connect pattern looks like this:

```python
import asyncio
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")
model = "gemini-3.8-live"
config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        await session.send_realtime_input(text="Confirm you can hear me.")
        # Read audio or text responses from the session stream

asyncio.run(main())
```

Audio input must be raw 16-bit PCM, 16 kHz, little-endian. The docs show `send_realtime_input` with a blob whose MIME type is `audio/pcm;rate=16000`. Text uses the same method with a `text=` argument.

Start in [Google AI Studio Live](https://aistudio.google.com/live) before you wire a microphone. Confirm barge-in, language switches, and tool traces there. Then copy the same model ID into your session.

## Register tools and use async function calling

Google’s 3.8 Live launch highlights a specific behavior: the model can acknowledge a request, keep talking, and finish a tool or API call in the background. That is the difference between a voice chatbot and a voice agent.

Keep each tool small. One function should book a slot, look up an order, or fetch a price. A single “do everything” tool is hard for any live model to narrate.

A practical contract:

1. Declare tools in session config with a name, a one-line description, and JSON parameters the model can fill from speech.
2. Enable asynchronous function calling so a slow HTTP call does not stall audio output.
3. Return a short, structured result. The model will speak a summary; it does not need a paragraph of JSON keys in the user-facing reply.
4. Confirm side effects out loud. Google’s own booking demo narrates progress while calls run. Mirror that in your system instruction.

Use **`gemini-3.8-live`** when the tool is fast and the user will interrupt often. Use **Extended Thinking** when the agent must chain several tools and talk through the plan.

Google lists partner stacks that already wrap this path: Agora, Fishjam, LangChain, LiveKit, Pipecat, Vercel, and Vision Agents. Those platforms handle media transport. You still own tool schemas and auth.

Official walkthrough of async function calling, proactive audio, and `send_client_content`:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Inject context without stealing the turn

Live agents need state that the user did not just say: a CRM record, a screenshot, a ticket ID. Google’s Live API update adds `send_client_content` so you can push that context without forcing a new user turn.

Use it for:

- Account notes after a lookup tool returns
- A fresh camera frame the client already captured
- Policy text the agent must follow but the caller should not hear read aloud

Do not dump an entire knowledge base into one injection. The input window is 131,072 tokens. A Live session also carries audio history. Keep injections short and timestamped.

Proactive audio is the other control to set early. Google describes it as the agent speaking only when it has something useful to say. That matters in noisy rooms and in call-center style flows where silence is better than filler.

Visual input is first-class on 3.8 Live. Google’s launch demos include a camera-on onboarding agent and a chess board the model can see. If your agent should react to a screen or a desk, stream video frames with the same session instead of a second HTTP call.



![Close-up of a circuit board representing real-time AI tooling](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Ship a first agent without overbuilding

A first production slice should be one spoken goal and two tools.

**Example goal:** “Look up order 4821 and tell me if it can still be changed.”

**Tools:** `get_order(order_id)` and `update_shipping_address(order_id, address)`.

**System instruction:** Speak in the user’s language. Confirm the order ID before you change anything. If a tool fails, say so and stop.

Test plan:

1. Studio Live with no tools, then with tools disabled in config, to isolate audio quality.
2. One successful tool call while you keep talking.
3. One failed tool call. The agent must not invent a tracking number.
4. Barge-in mid-sentence. The model should drop the old plan.
5. A mid-session language switch if your users mix languages.

Audio output from Google’s AI products is watermarked with SynthID, per DeepMind. Plan for that if you store recordings or run downstream detection.

Read the [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you put the agent on a public number. The card covers inputs, outputs, and safety limits.

## Tips that prevent a dead session

**Name the tool after the user action.** `cancel_reservation` is clearer in speech than `mutateBookingV2`.

**Cap tool latency.** Async calling hides some wait, but a 20-second lookup still sounds like a stall. Return a partial status if the backend is slow.

**Keep secrets off the client.** Browser Live demos tempt people to paste API keys. Use ephemeral tokens and lock tool allowlists on the server.

**Do not enable thinking config on 3.8 Live.** The migration note is explicit. Extra thinking fields belong on other Gemini surfaces, not this Live string.

**Match the rollout surface.** Developers get both models in the Gemini API and AI Studio now. Enterprises are in private preview on Gemini Enterprise. Consumer Gemini Live and Workspace Live follow the product matrix in the launch post, not the API table.

## Conclusion

Gemini 3.8 Live is the model ID to use when you need spoken replies and background tools at volume. Extended Thinking is the ID to use when the agent must plan, narrate, and finish a chain of calls without going quiet.

Open AI Studio Live, register two narrow tools, and prove barge-in plus a failed lookup before you add vision or a second language. Then move the same config into the GenAI SDK session.

For spoken work inside Gmail and Docs rather than a custom agent, start with the [Workspace Live setup](/blog/gemini-3-8-live-voice-gmail-docs/).

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Get started with Gemini Live API (GenAI SDK)](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk)
- [Gemini Live API overview](https://ai.google.dev/gemini-api/docs/live-api)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [SynthID](https://deepmind.google/models/synthid/)
