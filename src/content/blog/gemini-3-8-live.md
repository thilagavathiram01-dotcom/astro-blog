---
title: "How to Use Gemini 3.8 Live for Real-Time Voice Conversations"
description: "A practical guide to Gemini 3.8 Live and Live Extended Thinking: when to use each model, how to try Search Live and Gemini Live, and how developers start with the Live API."
pubDate: 2026-09-17
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "/images/gemini-3-8-live.svg"
---

Typing a prompt is still the default way most people use AI. **Gemini 3.8 Live** is built for the other mode: you talk, it talks back, and it can keep working in the background while the conversation continues.

Google announced Gemini 3.8 Live and **Gemini 3.8 Live Extended Thinking** on 15 September 2026. They are native speech-to-speech models for low-latency dialogue. This guide explains what each model is for, how to try them as a user, and how developers connect through the Live API—using Google’s own product and developer documentation.

## What Gemini 3.8 Live actually is

These are not “text models that also play audio.” They take **audio, images, video, and text** and return **audio and text** in a live session.

Official model pages list:

- Context window: **131,072** input tokens and **65,536** output tokens (about 128K / 64K)
- Function calling (Live Extended Thinking: **async only**)
- Search grounding
- Interleaved or background thinking, depending on the variant
- No image generation, file search, code execution, caching, or structured outputs on these Live endpoints

The pair is based on Gemini 3 Pro and is optimized for latency-sensitive dialogue rather than long offline reports.

## Live vs Live Extended Thinking

Pick the model the same way you pick a teammate for a call.

**Gemini 3.8 Live (`gemini-3.8-live`)**

- Default for most voice agents
- Fluid dialogue and **visual grounding** (it can use what the camera or screen is showing)
- Interleaved reasoning without the extra delay of a long think-then-speak loop
- Built for scale and cost

**Gemini 3.8 Live Extended Thinking (`gemini-3.8-live-extended-thinking`)**

- For multi-step work during a live call
- Reasons in the background while it keeps speaking
- Google cites #1 on Artificial Analysis’ Speech to Speech Quality Index (**82.6**), **68.6%** on τ-Voice, **35.1%** on Sierra’s τ-Voice-banking, and **97.7%** on Big Bench Audio
- Used for heavier product surfaces such as conversational Gmail search, Docs Live drafting, Keep Live notes, and the Gemini Live rollout

If the user is asking “what am I looking at?” or “keep chatting while you look that up,” start with 3.8 Live. If the task is “plan this, call tools, then keep talking,” use Extended Thinking.

## Try it as a user: Search Live

Google is rolling **3.8 Live** into **Search Live** in the Google app.

1. Open the **Google** app on a supported phone.
2. Tap the **Live** control.
3. Ask the question out loud. You can switch languages mid-conversation.
4. Listen to the spoken answer. Links appear on screen so you can open sources.
5. Open the **transcript** if you want the same conversation as text later.

Useful prompts for Search Live:

- “Compare the official Gemini 3.8 Live and 3.8 Live Extended Thinking docs and tell me which one fits a customer-support voice bot.”
- “Walk me through setting up a passkey on this Android phone while I follow the screen.”
- “Explain this error message I’m pointing the camera at.”

Treat on-screen links as the source of truth. Live answers can still be wrong; the links are how you check.

## Try it as a user: Gemini Live

**Gemini 3.8 Live Extended Thinking** is rolling out to **Gemini Live** and related Workspace live surfaces (Gmail Live, Docs Live, Keep Live), according to Google’s announcement coverage and product posts.

Practical habits:

- Start the live session only when you can speak clearly and grant microphone (and camera, if you need visual context).
- Say the goal in one sentence first: “Help me draft a reply to this email, then tighten the subject line.”
- Interrupt when the model goes off-track. These models are built for turn-taking, not monologues.
- Switch to text or export when you need a document you can edit.

Do not read passwords, one-time codes, or confidential customer data into a live session you would not type into Gemini Apps.

## Developer path: Live API in AI Studio

Google made both models available to developers in the **Gemini API** and **Google AI Studio** on launch day. Pricing published with the developer blog is **$0.005 per minute** of audio input and **$0.018 per minute** of audio output.

### 1. Open the Live surface

1. Go to [Google AI Studio](https://aistudio.google.com).
2. Sign in with a Google account that can use the Gemini API.
3. Open a Live / realtime session and select **gemini-3.8-live** or **gemini-3.8-live-extended-thinking**.

### 2. Choose the model string in code

- Everyday voice agent: `gemini-3.8-live`
- Complex agent that must think while speaking: `gemini-3.8-live-extended-thinking`

If you are migrating from `gemini-3.1-flash-live-preview`, change the model string to `gemini-3.8-live`. Google’s model page says **`thinking_level` / `thinking_config` is not supported** on 3.8 Live—omit those fields from session setup.

### 3. Design for async work

Key capabilities from the developer announcement:

- **Asynchronous function calling:** tools can run while audio still streams to the user
- **Visual context:** live image or video frames can ground the reply
- **Search grounding:** answers can be tied to web results when you enable it

For **Extended Thinking**, `turnComplete: true` does **not** mean the server is idle. Background reasoning or tool calls can still arrive. Keep the WebSocket (or Live session) open and keep handling server messages.

### 4. A concrete agent sketch

A support voice bot that should stay on the line:

1. Session model: `gemini-3.8-live-extended-thinking`
2. Tools: `lookup_order`, `create_ticket`, `search_help_center`
3. System instruction: speak in short turns, confirm the order ID, never invent refund policy
4. Enable search grounding only for public help articles
5. Stream audio back immediately; run `lookup_order` in the background
6. When the tool returns, speak the result instead of restarting the call

A camera helper that names parts on a desk can stay on `gemini-3.8-live` with video input and no heavy tool graph.

## What these models do not do

Do not expect the Live endpoints to replace every Gemini feature.

They do **not** currently support, per the official model tables:

- Image generation
- Code execution
- File search
- Context caching
- Structured outputs
- URL context
- Grounding with Google Maps
- Batch API

For cited long reports, use Deep Research or a text Gemini model. For offline transcripts of existing audio files, Google also launched **Gemini 3.5 Transcribe** (85+ languages) alongside the Live models—that is a different product than a live conversation.

## Limits worth planning around

- **Availability is a rollout.** Search Live, Gemini Live, and Gemini Enterprise preview do not all flip on for every account on the same hour.
- **Enterprise** access was announced as private preview in Gemini Enterprise, with Gemini Enterprise for Customer Experience to follow.
- **Safety and accuracy** still apply. Google’s model card describes intended use as real-time spoken help for users, developers, and enterprises—not unsupervised legal, medical, or financial decisions.
- **Session design matters more than prompt poetry.** Interruptibility, tool timeouts, and “keep listening after turnComplete” are the difference between a demo and a product.

## Conclusion

Gemini 3.8 Live is the everyday real-time voice model. Gemini 3.8 Live Extended Thinking is the same idea with background reasoning for harder tasks. Users can try the first in Search Live and the second as it rolls through Gemini Live and Workspace live features. Developers should start in AI Studio, pick the correct model string, drop unsupported thinking configs, and treat async tool calls as part of the conversation—not a side queue.

If you only need a written brief with citations, stay in text or Deep Research. If you need a voice that can see, search, and keep talking, these September 2026 Live models are the official path.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google
- [Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe](https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/) — Google
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Gemini 3.8 Live Extended Thinking model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live-extended-thinking) — Google AI for Developers
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
