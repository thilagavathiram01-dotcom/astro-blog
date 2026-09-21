---
title: "Secure Gemini Live Translate with Ephemeral Tokens"
description: "Lock target_language_code on the server, mint a 30-minute Live API token, and stream PCM without exposing a Gemini API key in the browser."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

The Gemini Live API can translate speech across 70+ languages with `gemini-3.5-live-translate-preview`. That is useful in a browser tab. It is also dangerous if the tab holds a long-lived API key.

Google’s official Live Translate docs tell you to mint an **ephemeral token** on a server, lock the translation config there, and hand the browser a short-lived credential. This guide follows that path only.

If you need the consumer Translate app or Meet preview instead, start with [How to Use Gemini 3.5 Live Translate](/blog/gemini-3-5-live-translate/).



![Developer workstation with code on a monitor and headphones](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## Live Agent versus Live Translation

Both features use the Live API. They are not the same product.

A Live Agent listens, reasons, and can call tools. Live Translation is an interpreter pipeline. It streams speech in one language and returns speech in another without waiting for a turn.

Official constraints for translation mode:

- Audio in only. No text, image, or video input.
- No tools, no system instructions, no function calling.
- Output is raw 24 kHz PCM. Input is raw 16 kHz PCM, 16-bit, mono, little-endian.
- Send chunks of about 100 ms.

Treat those limits as design rules, not suggestions. If you need search or a tool call, use a Live Agent session, not this model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/TNwKs39uSVk"
    title="Introducing Gemini 3.5 Live Translate"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What an ephemeral token actually locks

Ephemeral tokens live on the `v1beta` Auth Tokens API. You create them on a server that already holds `GEMINI_API_KEY`. The token is single-use by default in Google’s examples (`uses: 1`) and expires after a window you set.

For Live Translation, Google documents two patterns.

**Lock the config on the server.** Put `translationConfig` inside `liveConnectConstraints` when you create the token. The client cannot change the target language or the echo flag. Use this when the product owns the language pair (a kiosk that always speaks English, a support line that always answers in Polish).

**Unlock the config for the client.** Omit `translationConfig` from the token request and set `lock_additional_fields` to an empty list. The browser can then send `targetLanguageCode` at connect time. Use this when a user picks a language from a menu.

Do not mix the two. If the token already pins `pl`, a client that asks for `es` should fail closed.

## Step 1. Mint a constrained token on the server

Python, from the official docs:

```python
import datetime
from google import genai

now = datetime.datetime.now(tz=datetime.timezone.utc)
client = genai.Client()

token = client.auth_tokens.create(
    config={
        "uses": 1,
        "expire_time": now + datetime.timedelta(minutes=30),
        "live_connect_constraints": {
            "model": "gemini-3.5-live-translate-preview",
            "config": {
                "translation_config": {
                    "target_language_code": "pl",
                    "echo_target_language": True,
                }
            },
        },
    }
)
```

Return only the token string to the browser. Keep the API key off the wire.

REST equivalent:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/auth_tokens" \
  -H "x-goog-api-key: ${GEMINI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "uses": 1,
    "expireTime": "2026-09-20T14:30:00Z",
    "liveConnectConstraints": {
      "model": "models/gemini-3.5-live-translate-preview",
      "config": {
        "responseModalities": ["AUDIO"],
        "inputAudioTranscription": {},
        "outputAudioTranscription": {},
        "translationConfig": {
          "targetLanguageCode": "pl",
          "echoTargetLanguage": true
        }
      }
    }
  }'
```

Thirty minutes is the example window in the docs. Shorten it if the session is a one-shot booth conversation.



![Close-up of a laptop showing an API client and terminal](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)



## Step 2. Open the Live session from the client

Use the token the same way you would open any Live session, but point at `gemini-3.5-live-translate-preview` and request audio.

Required setup fields from Google:

- `responseModalities`: `AUDIO`
- `translationConfig.targetLanguageCode`: BCP-47 code such as `pl`, `es`, or `ja`. Defaults to `en` if you leave it off and the token did not lock it.
- `echoTargetLanguage`: `true` repeats speech that is already in the target language. `false` (default) stays silent on that input so you do not double-play the same language.
- Optional `inputAudioTranscription` and `outputAudioTranscription` objects. Presence of the object turns transcripts on.

Play output as 24 kHz PCM. Do not resample to 16 kHz on the way out.

## Step 3. Stream microphone audio

Capture mono 16-bit PCM at 16 kHz. Send ~100 ms frames.

Python send path from the docs:

```python
await session.send_realtime_input(
    audio=types.Blob(
        data=chunk,
        mime_type="audio/pcm;rate=16000",
    )
)
```

On the receive loop, handle three payloads:

1. `input_transcription` — source text plus a language code when present.
2. `output_transcription` — translated text.
3. `model_turn` parts with `inline_data` — the audio bytes to play.

Keep the socket open for the whole conversation. Closing on a pause will cut a clause that the model has not finished speaking.

## Step 4. Handle the documented failure modes

Google lists these limits on the same page. Plan for them in the UI.

- **Voice replication can drift.** After a long pause the output voice may change. Rapid multi-speaker audio can stick on one voice.
- **Language detection is weaker than translation.** Heavy accents and close pairs such as Spanish and Portuguese can mis-label the *input transcript*. Google says the translation itself should still target the language you configured.
- **No text fallback on this model.** If the mic dies, do not send a typed string into the same session. Open a text model instead.

Show both transcripts on screen when names and numbers matter. Speech is the product. Text is the audit trail.

## Tips that stay inside official behavior

Pin `uses: 1` so a stolen token cannot start a second booth after the first listener disconnects.

Create a fresh token per listener when you broadcast one speaker into many languages. Each listener needs its own `targetLanguageCode`.

Lock `echo_target_language` to `true` only when the room mixes speakers in the destination language and you want those turns audible. Support desks that always answer in one language should leave it `false`.

Watermarking with SynthID applies to generated audio on Google’s consumer surfaces. Do not claim your custom client inherits that mark unless you also run Google’s detector on the output you store.

## Conclusion

Live Translate is an interpreter, not a chat agent. Put the API key on a server. Mint a short token. Lock `target_language_code` when the product owns the pair. Stream 16 kHz PCM in and play 24 kHz PCM out.

That is the whole secure loop Google documents. Everything else is product work on top of it.

## Sources

- [Live translation with Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/live-translate) — Google AI for Developers
- [Gemini 3.5 Live Translate is here](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) — Google
- [Gemini 3.5 Live Translate (Agent Platform)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-5-live-translate) — Google Cloud
- [Introducing Gemini 3.5 Live Translate](https://www.youtube.com/watch?v=TNwKs39uSVk) — Google for Developers
