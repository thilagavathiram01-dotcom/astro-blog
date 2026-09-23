---
title: "How to Build a GPT-Live-1 Voice Agent With the API"
description: "Set up OpenAI GPT-Live-1: full-duplex voice, WebRTC sessions, delegation to GPT-6, pricing, and telephony."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "developer"]
noindex: false
---

OpenAI shipped GPT-Live-1 in the API on September 10, 2026. The model listens and speaks at the same time, then hands harder work to a backend model you choose.

This guide follows OpenAI’s product post and the GPT-Live developer docs. You will learn what the model is for, how the two-layer architecture works, how to start a session, and how to keep cost and interruptions under control.

## What GPT-Live-1 actually does

GPT-Live-1 is the front-end voice layer. It is not a full replacement for your existing agent stack. It handles speech in and speech out, including barge-in, backchannels, and background noise.

OpenAI positions it against chained speech-to-text, text model, and text-to-speech pipelines. Those pipelines add latency at every handoff. GPT-Live-1 reasons over incoming and outgoing audio in one model, then **delegates** tool use and long reasoning to another model.

Official claims from the September 10 announcement:

- Full Duplex Bench score improved by 30 percentage points versus GPT-Realtime-2.1
- Ranked first on Tau3 when paired with GPT-6 Astra at medium reasoning effort
- Speak reported almost 80% fewer interruptions during thinking pauses versus earlier turn-based tutors
- Voice layer price: $0.05 per minute, billed per second

The model string is `gpt-live-1`. Sessions use `v1/live/sessions`. Input and output are audio and text. Images and video are not supported on this model.



![Close-up of a studio microphone used for a live voice session](https://images.unsplash.com/photo-1590602847861-e609e3a1e4e6?auto=format&fit=crop&w=800&q=80)



## Split the work: voice model vs backend

OpenAI’s getting-started guide is explicit. Keep the two roles separate.

**GPT-Live handles conversation.** Give it a short prompt for speaking style and when to ask the backend for help. It can keep talking while work is in flight.

**The backend handles tasks.** Lookups, bookings, account tools, and long reasoning live here. You pick the model. OpenAI’s examples pair Live with GPT-6 Astra for hard issues and with a cheaper model such as Luna for high-volume scheduling. For how those two GPT-6 variants differ on cost and capability, see our [GPT-6 Sol and Luna work setup](/blog/chatgpt-gpt-6-sol-luna-work-setup/).

Two delegation modes exist:

1. **Responses delegation** — OpenAI runs a Responses model, passes conversation context, and returns results to Live. Your app still runs your own function tools.
2. **Client delegation** — Your server owns the agent harness. Live sends a delegation request. You run Codex, an internal service, or any model, then append commentary back to the session.

Pick the mode when you create the session. Changing modes requires a new session.

## Start a session (WebRTC first)

OpenAI recommends the [GPT-Live WebRTC quickstart](https://developers.openai.com/api/docs/guides/voice-webrtc?api=live) for browser apps. You need HTTPS or localhost, a microphone, and a server that holds the project API key. Never put the key in the page.

1. Write a short conversation prompt. State the agent’s name, pace, and when to delegate. Leave booking rules on the backend.
2. Have the browser create a WebRTC offer with microphone input, speaker output, and a data channel for JSON events.
3. Your server creates the Live session and exchanges the offer for an answer.
4. Wait for `session.started` before you send audio.
5. Speak a question that needs current data so the backend can search or call a tool.
6. Close the session when the call ends so usage is finalized.

A typical `session.start` payload on WebSockets looks like this (from OpenAI’s WebSocket guide):

```javascript
ws.send({
  type: "session.start",
  event_id: "event_start",
  session: {
    model: "gpt-live-1",
    instructions:
      "Be concise. Delegate requests that need current information to the backend.",
    audio: {
      format: { type: "audio/pcm", rate: 24000 },
      output: { voice: "marin" },
    },
    delegation: {
      type: "responses",
      responses: {
        model: "gpt-5.6-luna",
        tools: [{ type: "web_search" }],
        tool_choice: "auto",
      },
    },
  },
});
```

Use WebSockets when your server owns the audio stream. Use SIP when the caller is on a phone. Direct SIP keeps media on the provider-to-OpenAI path with TLS signaling and SRTP audio. Your backend still accepts or rejects the call with `POST /v1/live/sessions/{session_id}/accept`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OSaP6bJoU44"
    title="GPT-Live-1 is now in the API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Prompt the voice layer, not the whole product

OpenAI’s prompting guide says to keep `session.instructions` short. Describe role, tone, backchannel policy, and delegation triggers. Put procedures and tool schemas on the backend.

A starter prompt from that guide:

```
You are [name], a calm, friendly voice assistant for [service].
Speak warmly and naturally, at an unhurried pace.
Be clear and direct, not overly cheerful.
If the user is frustrated, acknowledge it briefly and focus on the next helpful step.
Backchannel policy: Use moderate backchannels.
```

Do not copy a Realtime-era mega-prompt into Live. Split it. Conversation style stays on Live. Workflow steps move to the backend. If you already have a Realtime agent, follow OpenAI’s [Migrate to GPT-Live](https://developers.openai.com/api/docs/guides/live-migration) path instead of swapping model IDs only.

GPT-Live-1 still supports turn detection if your product needs explicit turn boundaries. It also emits ASR transcripts and response text, so you can caption the call without a second speech-to-text stack.



![Developer taking a customer support call on a laptop headset](https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80)



## Voices, limits, and cost

Voice sessions cost $0.05 per minute for the front-end layer, billed per second. Backend tokens and tools are extra. Free tier has no concurrent Live sessions. Paid tiers scale from 25 concurrent sessions (Tier 1) to 500 (Tier 5).

OpenAI expanded the real-time voice set with GPT-Live-1. Community notes list twelve names including Quartz, Ripple, Vesper, Willow, Stone, Gleam, Meridian, Bossa, Tempo, Beacon, Delta, and Cinder. Docs examples still show `marin`. Confirm the current voice list in the API catalog before you hard-code a name.

Partner paths exist if you already run LiveKit, Twilio, Telnyx, or Daily/Pipecat. OpenAI documents those integrations separately so you can attach existing call audio instead of rebuilding transport.

For custom branded voices, OpenAI directs you to sales. Presence is the enterprise packaging that uses GPT-Live-1 for trusted phone and in-app agents.

## Tips that keep a Live agent usable

- Keep the Live prompt under a few hundred words. Long policy dumps belong on the backend.
- Decide interrupt policy in product, not only in prose. If a booking is still running when the caller barges in, your app must finish or cancel that work.
- Test in noise. OpenAI’s demo explicitly asks you to try a coffee shop or sidewalk. Your barge-in client must stop local playback immediately.
- Log transcripts with consent. Live already produces ASR text; do not add a second recorder without a legal basis.
- Watch dual billing. A cheap voice minute plus an expensive Astra tool loop can exceed a cascaded stack if you delegate every small talk turn.
- Close sessions. Usage is collected on a graceful close. Abandoned sockets still consume concurrent-session quota.
- Do not send secrets on the client data channel. Session context is visible to the voice model for the rest of the call.

## Conclusion

GPT-Live-1 is the conversation front end: full duplex audio, interruption handling, and a $0.05-per-minute meter. Your product quality still depends on the backend you attach and the tools you allow.

Start with the WebRTC quickstart, write a short speaking prompt, and delegate lookups to a Responses model. Move to client delegation only when you need Codex, an internal agent, or custom context control. Then test barge-in and noisy rooms before you point a phone number at the session.

## Sources

- [Build more natural voice experiences with GPT-Live-1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api/) — OpenAI
- [Getting started with GPT-Live](https://developers.openai.com/api/docs/guides/live) — OpenAI API
- [GPT-Live 1 model page](https://developers.openai.com/api/docs/models/gpt-live-1) — OpenAI API
- [Prompting GPT-Live](https://developers.openai.com/api/docs/guides/live-prompting) — OpenAI API
- [WebSockets for GPT-Live](https://developers.openai.com/api/docs/guides/voice-websockets) — OpenAI API
- [Telephony and SIP](https://developers.openai.com/api/docs/guides/voice-sip) — OpenAI API
- [GPT-Live-1 is now in the API](https://www.youtube.com/watch?v=OSaP6bJoU44) — OpenAI on YouTube
