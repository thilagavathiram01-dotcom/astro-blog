---
title: "How to Build a Voice Agent with Gemini 3.8 Live"
description: "Use Gemini 3.8 Live and the Live API to ship a low-latency voice agent with async tools and visual context."
pubDate: 2026-09-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "developer", "tutorials"]
noindex: false
---

Google shipped Gemini 3.8 Live and Gemini 3.8 Live Extended Thinking on September 15, 2026. Both models target voice agents that need to talk, look at a camera or screen, and call tools without freezing the conversation.

This guide walks through what changed, which model to pick, and how to stand up a first Live API session. Facts below come from Google's official model post and the Gemini API docs.

## What Gemini 3.8 Live actually is

Gemini 3.8 Live (`gemini-3.8-live`) is the generally available successor to `gemini-3.1-flash-live-preview`. Google positions it as the default low-latency option for real-time dialogue. It accepts text, images, audio, and video, and it returns text and audio.

Token limits on the Live model are 131,072 input tokens and 65,536 output tokens. Function calling and Search grounding are supported. Caching, code execution, file search, image generation, structured outputs, and URL context are not.

Gemini 3.8 Live Extended Thinking is the sibling for high-complexity work. Google says it scores 82.6 on Artificial Analysis' Speech to Speech Quality Index, 68.6% on τ-Voice, 35.1% on Sierra’s τ-Voice-banking benchmark, and 97.7% on Big Bench Audio.



![Developer workstation with microphone and code editor for a voice agent](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Pick the right model before you write code

Use **3.8 Live** when turn-taking speed matters more than deep planning. Customer support, language practice, walkthroughs, and on-device camera help fit this bucket.

Use **3.8 Live Extended Thinking** when the agent must plan bookings, audit a workflow, or narrate a multi-step job. Google describes early verbal cues such as “Let me check that…” so the user hears progress while tools run.

Do not set `thinking_level` on `gemini-3.8-live`. The docs say that field is not supported. Drop `thinking_config` from session setup when you migrate from 3.1 Flash Live.

## Features that change agent design

Three Live API upgrades matter more than the model name.

**Async function calling.** The model can keep talking while a `NON_BLOCKING` tool runs. That is how an agent books a table and still answers a follow-up question.

**Proactive audio.** The agent stays quiet until speech is relevant. Background noise and filler talk produce fewer interruptions.

**Client content injection.** `send_client_content` lets your app push notes, CRM fields, or a product catalog into the live session without restarting it.

Google also states that 3.8 Live can switch among 97 languages mid-conversation and process visual input in near real time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: first Live API session

### 1. Get access

Create a Google AI Studio project and enable the Gemini API. Developers can try both models in AI Studio Live and call them through the Live API. Enterprises can join the private preview in Gemini Enterprise.

Store the API key in an environment variable. Do not commit it.

### 2. Change the model string

If you already run 3.1 Flash Live Preview, update the model id:

```text
gemini-3.1-flash-live-preview  →  gemini-3.8-live
```

Use the Extended Thinking model id only when you need the heavier reasoner. Keep one session per user so audio state stays consistent.

### 3. Open a bidirectional session

The Live API is a WebSocket-style stream, not a single chat completion. Your client sends audio frames and optional video frames. The server returns audio plus tool-call events.

Configure:

- input audio format your recorder actually emits
- output voice and sample rate your player expects
- tools the agent may call, including `NON_BLOCKING` tools
- Search grounding if answers must cite the live web

Skip thinking-level knobs on the base Live model.

### 4. Register tools the conversation can survive

Treat tools as background work. A booking API, a ticket lookup, or an order status call should return a short acknowledgement first. Then the tool result arrives and the model narrates the outcome.

Keep tool schemas tight. Live sessions punish slow or chatty tools more than batch chat apps do.

If you already expose Android app actions, pair this voice layer with [App Functions for Android agents](/blog/android-appfunctions-agents/). The phone can execute the step the voice model requested.

### 5. Add vision only when it helps

3.8 Live can watch a camera or screen share. Use that for setup guides, label reading, or chess-style board state. Do not stream video if the task is audio-only. Extra frames cost tokens and add lag.

Google’s own demos include live onboarding with visual context and near real-time chess. Those are good design references, not required product features.



![Close-up of a smartphone camera capturing a document for a visual AI assistant](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)



### 6. Inject session context without a reset

When a user opens a ticket, call `send_client_content` with the ticket id, policy text, and last order. The model stays in the same audio session. Users hear one continuous voice instead of a reconnect blip.

Refresh that context when the CRM record changes. Do not dump an entire knowledge base into every turn.

### 7. Ship where Google already hosts the models

Availability as of the September 17, 2026 update:

- **3.8 Live:** Gemini API, Google AI Studio, private preview in Gemini Enterprise, and Search Live for consumers.
- **3.8 Live Extended Thinking:** Gemini API, AI Studio, Gemini Enterprise preview, Gemini Live in the Gemini app, Docs Live for Google AI Pro and Ultra, and Gmail Live plus Keep Live for Google AI subscribers.

Partner stacks that already wrap the Live API include Agora, LiveKit, Pipecat, LangChain, Vercel AI Gateway, Fishjam, and Vision Agents.

## Safety and product rules you should not skip

All audio from Google’s AI products is watermarked with SynthID. Plan for that if you archive calls or run downstream detectors.

Read the Gemini 3.8 audio model card before you put the agent in production. Voice agents that can call tools need a human-confirm step for payments, message sends, and account changes.

Proactive audio reduces chatter. It does not replace a mute button or an explicit end-session control.

## Practical tips after the first demo

Measure barge-in. If users cannot interrupt, the agent feels slow even when first-byte latency is low.

Log tool latency separately from model latency. Async calling only helps if your backend finishes in a few seconds.

Test language switches with bilingual speakers. Mid-conversation language change is a stated 3.8 Live capability, but your VAD and UI copy still need to follow the new language.

Keep a text transcript for support teams. Audio-only logs are hard to search.

Price the Extended Thinking path on a separate quota. Use it for planning turns, not for every greeting.

## Conclusion

Gemini 3.8 Live is the production Live model for fast talk-and-see agents. Extended Thinking is the same family with more planning and live narration. Migrate the model string, drop unsupported thinking settings, mark slow tools as non-blocking, and inject business context through `send_client_content`.

Start in Google AI Studio Live, then move the same session config into your LiveKit or Pipecat stack. Confirm tool actions before they spend money or send mail.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google, September 15, 2026 (updated September 17, 2026)
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Gemini API
- [Gemini Live API overview](https://ai.google.dev/gemini-api/docs/live-api) — Gemini API
- [What's new in the Gemini Live API](https://www.youtube.com/watch?v=3CyW24Pkz4o) — Google for Developers
