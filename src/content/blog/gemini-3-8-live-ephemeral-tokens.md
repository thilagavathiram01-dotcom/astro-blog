---
title: "How to Secure Gemini 3.8 Live with Ephemeral Tokens"
description: "Mint short-lived Live API tokens on a server, lock gemini-3.8-live config, and keep long-lived keys out of the browser."
pubDate: 2026-09-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "security", "ai-tools"]
noindex: false
---

A long-lived Gemini API key in a web page is a gift to anyone who opens DevTools. Google’s Live API docs recommend a different path for client-to-server voice apps: mint an ephemeral token on your backend, then let the browser talk to Gemini over WebSockets.

The token works only with the Live API on the `v1beta` surface. It expires fast. You can lock it to `gemini-3.8-live` and to a fixed session config so the client cannot swap models or rewrite system instructions.

This guide follows the official Ephemeral tokens page last updated 15 September 2026. Pair it with the Python session walkthrough in [How to Start a Gemini 3.8 Live Session in Python](/blog/gemini-3-8-live-python-session/) if you still need the audio loop.

## Why ephemeral tokens exist

The Live API supports two layouts. Server-to-server keeps the key on your host and proxies audio. Client-to-server lets the phone or browser open a WebSocket straight to Gemini, which cuts a hop and lowers latency.

Client-to-server is also the layout that leaks keys. An ephemeral token is still extractable, but it is short-lived and can be limited to one new session. Google’s docs set two clocks by default: one minute to *start* a session (`new_session_expire_time`) and 30 minutes to *keep sending* on that socket (`expire_time`).

Within that 30-minute window you still reconnect about every 10 minutes with session resumption. The same token can resume even when `uses` is set to `1`.



![Developer workstation with server racks and network cables in the background](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)



## What you need

- A Gemini API key that stays on the server. Create it in Google AI Studio and store it as an environment variable.
- The Google GenAI SDK on the backend (`google-genai` in Python or `@google/genai` in Node).
- A way to authenticate *your* users before you mint a token. The token is only as safe as that login.
- A browser or mobile client that can open a Live session with `apiKey: token.name`.

Do not use ephemeral tokens for a backend-to-Gemini proxy. Google says that path is already the trusted one. Save tokens for devices you do not control.

## Step 1: Mint a token on the server

Create the token after the user is signed in. Default limits are one use to open a session, a one-minute start window, and a 30-minute message window.

```python
import datetime
from google import genai

now = datetime.datetime.now(tz=datetime.timezone.utc)
client = genai.Client()  # reads GEMINI_API_KEY

token = client.auth_tokens.create(
    config={
        "uses": 1,
        "expire_time": now + datetime.timedelta(minutes=30),
        "new_session_expire_time": now + datetime.timedelta(minutes=1),
    }
)
# Send token.name to the client. Do not send the long-lived key.
```

Node looks the same: `client.authTokens.create` with `uses`, `expireTime`, and `newSessionExpireTime`. REST hits `POST https://generativelanguage.googleapis.com/v1beta/auth_tokens` with `x-goog-api-key`.

Keep `uses` at `1` for a voice call that should not spawn extra sessions from a stolen token.

## Step 2: Lock the model and audio config

An unlocked token still lets the client pick any Live model string the key can reach. Lock the connect constraints so the browser can only open `gemini-3.8-live` with audio out.

```python
token = client.auth_tokens.create(
    config={
        "uses": 1,
        "live_connect_constraints": {
            "model": "gemini-3.8-live",
            "config": {
                "session_resumption": {},
                "response_modalities": ["AUDIO"],
            },
        },
    }
)
```

You can lock more fields, including system instructions, so prompt text never ships to the device. The Python SDK documents `lock_additional_fields` for that tighter contract.

If you need deeper reasoning on the same socket, mint a separate token for `gemini-3.8-live-extended-thinking`. Do not let the client choose.

## Step 3: Open Live from the browser

Treat `token.name` as the API key in the client SDK. The token only works on Live and only on `v1beta`.

```javascript
import { GoogleGenAI, Modality } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: token.name });
const session = await ai.live.connect({
  model: 'gemini-3.8-live',
  config: { responseModalities: [Modality.AUDIO] },
  callbacks: {
    onopen: () => console.debug('Opened'),
    onmessage: (message) => console.debug(message),
    onerror: (e) => console.debug('Error:', e.message),
    onclose: (e) => console.debug('Close:', e.reason),
  },
});
```

Send 16-bit PCM at 16 kHz, little-endian, as `audio/pcm;rate=16000`. Playback from the model is 24 kHz PCM. Those formats are the Live API defaults, not optional flavor text.

When the start window expires, mint a new token. When the 10-minute socket limit hits, resume with the session handle Google documents under session management.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: Stream audio without proxying every packet

The point of this layout is that mic frames never bounce through your app server. Your backend authenticates the user, issues `token.name`, and steps aside.

Keep tool execution on the server if tools can spend money or read private records. The Live session can still request a function call. Your client forwards the call ID to your API, your API runs the tool, and the client sends `sendToolResponse` back on the same socket.

That split keeps secrets off the device without forcing you to proxy PCM.



![Padlock on a laptop representing short-lived API credentials](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)



## Limits you should budget for

Ephemeral tokens are Live-only. They will not authorize `generateContent`, batch jobs, or file uploads.

Default start time is one minute. If the user grants mic permission slowly, the token dies before `live.connect` runs. Mint when the user taps “Start call,” not when the page loads.

`uses: 1` blocks a second *new* session. Resumption of the first session is still allowed inside `expire_time`. Plan reconnect logic around that rule.

Google prices Gemini 3.8 Live audio in the developer pricing table. Confirm the live rate in AI Studio before you scale minutes. Do not copy a third-party spreadsheet into a contract.

## Tips that keep the token useful

- Authenticate the human first. A public “mint token” route is just a wrapped API key.
- Set `expire_time` as short as the call can tolerate. Thirty minutes is a default, not a requirement.
- Lock `response_modalities` to `AUDIO` if the product is voice-only. A text-capable client can dump transcripts you did not intend to store.
- Log token mint events and session IDs on the server. The Live socket will not give you a full audit trail by itself.
- Rotate the long-lived key if a token-minting endpoint leaks. Short TTL limits blast radius. It does not erase a stolen parent key.

## What this is not

This is not a substitute for Gemini Enterprise compliance controls or VPC-SC. It is a client auth pattern for the public Gemini API.

It is not Live Avatar or Live Translate. Those products have their own model IDs. Lock the ID you actually run.

It is not a way to hide billed usage from Google. Usage still lands on the project that owns the parent key.

## Conclusion

Put the long-lived key on a server. Mint a one-use token when the user starts a call. Lock that token to `gemini-3.8-live` and audio output. Let the device stream PCM to Gemini and expire the credential when the call ends.

That is the client-to-server layout Google documents for production Live apps. Build the mint endpoint first. Add the mic loop second. Keep the parent key out of the bundle.

## Sources

- [Ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) — Gemini API docs, updated 15 September 2026
- [Get started with Gemini Live API using the Google GenAI SDK](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk) — Gemini API docs
- [Live API capabilities](https://ai.google.dev/gemini-api/docs/live-api/capabilities) — Gemini API docs
- [Gemini 3.8 Live model card](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Gemini API docs
- [Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe](https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/) — Google Blog, 15 September 2026
- [What's new in the Gemini Live API](https://www.youtube.com/watch?v=3CyW24Pkz4o) — Google for Developers
