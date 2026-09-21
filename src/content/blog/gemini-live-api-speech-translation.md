---
title: "How to Stream Live Speech Translation with Gemini API"
description: "Build real-time speech-to-speech translation with gemini-3.5-live-translate-preview: PCM audio, target language, and ephemeral tokens."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77ea69d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools"]
noindex: false
---

Google’s consumer Translate app already streams speech with Gemini 3.5 Live Translate. If you are shipping your own product, you need the same model on the Live API: `gemini-3.5-live-translate-preview`.

This guide follows Google’s [Live translation docs](https://ai.google.dev/gemini-api/docs/live-api/live-translate). It covers session setup, PCM chunk size, `echo_target_language`, and ephemeral tokens so a browser never sees your API key.

For the phone-and-headphones path, start with [How to Use Gemini 3.5 Live Translate](/blog/gemini-3-5-live-translate/). Use this article when you are writing the interpreter loop yourself.

## Live Agent is not Live Translation

Google draws a hard line between the two Live API modes.

**Live Agent** is a conversational assistant. It waits for turns, can call tools, and accepts text, audio, video, and images.

**Live Translation** is an interpreter. It streams speech as it arrives. It does not wait for a pause to finish a sentence. It does not accept tools, system instructions, or text input.

If you paste a Live Agent snippet and only change the model ID, the session will fail or stall. Use `translation_config` and audio-only input.

## What you need before you code

1. A Gemini API key from [Google AI Studio](https://aistudio.google.com/).
2. The current [google-genai](https://ai.google.dev/gemini-api/docs/libraries) SDK for Python or JavaScript.
3. A microphone path that can emit raw 16-bit PCM at 16 kHz, mono, little-endian.
4. A speaker or buffer that can play raw 16-bit PCM at 24 kHz.

Google’s documented chunk size is **100 ms**. Smaller chunks add overhead. Larger chunks add delay.

You can also open a Live session in AI Studio with the model `gemini-3.5-live-translate-preview` before you wire audio capture.



![Developer desk with headphones and a laptop ready for a voice session](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80)



## Step 1. Open a translation session

Set `response_modalities` to audio. Attach input and output transcription objects if you want text captions next to the audio. Then set a BCP-47 target such as `pl`, `es`, or `ja`.

Python, from Google’s docs:

```python
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-3.5-live-translate-preview"
config = types.LiveConnectConfig(
    response_modalities=["AUDIO"],
    input_audio_transcription=types.AudioTranscriptionConfig(),
    output_audio_transcription=types.AudioTranscriptionConfig(),
    translation_config=types.TranslationConfig(
        target_language_code="pl",
        echo_target_language=True,
    ),
)
```

`echo_target_language=True` means the model repeats audio that is already in the target language. Set it to `False` (the default) if you want silence when the speaker is already using the output language.

JavaScript uses the same fields with camelCase: `targetLanguageCode` and `echoTargetLanguage`.

WebSocket clients send a `setup` message to `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent` with the model under `models/gemini-3.5-live-translate-preview`.

## Step 2. Stream 16 kHz PCM in, play 24 kHz PCM out

Send chunks with `send_realtime_input` and the MIME type `audio/pcm;rate=16000`.

```python
await session.send_realtime_input(
    audio=types.Blob(
        data=chunk,
        mime_type="audio/pcm;rate=16000",
    )
)
```

On the receive loop, look at three places:

- `input_transcription` for the source text and detected language code
- `output_transcription` for the translated text
- `model_turn.parts` with `inline_data` for the audio bytes

Keep sending audio even during silence. The Live API treats this as a phone call, not a walkie-talkie. Official voice-agent guidance from Google Cloud Tech makes the same point for Gemini Live sessions that are not translation-only.

Do not send text into a translation session. Google lists text input as unsupported for this model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yQEKMsCtsmE"
    title="Build a real-time voice AI agent with Google ADK and Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3. Lock config with ephemeral tokens

A browser must not hold your long-lived API key. Google documents [ephemeral tokens](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) on the `v1beta` endpoint for Live Translation.

Create the token on a server. Put `translation_config` inside `live_connect_constraints` so a client cannot change the target language. Example from the docs:

```python
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

If the user must pick the target language in the UI, omit `translation_config` from the token and set `lock_additional_fields` to an empty list. That unlocks the field on the client. Treat that as a product choice, not the default.

One-use tokens with a 30-minute expiry match Google’s sample. Shorten both if the session is a single booth talk.



![Conference microphone and mixing board used for a live interpreted session](https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80)



## Limits Google already documents

Read these before you promise a booth-quality product:

- **Audio only.** No images, no video, no typed source text.
- **No tools.** You cannot attach Google Search or a function call to a translation session.
- **Voice consistency can drift.** After long pauses the output voice may change. Rapid multi-speaker audio can pin the wrong gender or stick on one voice.
- **Detection is not the translation.** Heavy accents and close language pairs (Spanish vs Portuguese) can mislabel the *input transcript*. Google says the translation itself should still land in the target language.
- **Preview model.** The ID still carries `-preview`. Confirm the current model page before a production freeze.

For conversational agents that *should* use tools, switch to Gemini 3.8 Live. That path is covered in [How to Try Gemini 3.8 Live in AI Studio and the API](/blog/gemini-3-8-live-api-guide/). Do not mix the two configs.

## A short integration checklist

1. Confirm the model string is `gemini-3.5-live-translate-preview`.
2. Capture 16 kHz mono PCM and play 24 kHz mono PCM.
3. Send 100 ms chunks without pausing on silence.
4. Set `target_language_code` and decide on `echo_target_language`.
5. Enable both transcription objects if you need captions.
6. Mint ephemeral tokens on the server for any client-side socket.
7. Log input and output language codes from transcripts so you can debug detection without guessing.
8. Test one noisy room and one quiet room. The consumer model is built for both; your capture path may not be.

## Tips that save a day of debugging

Resample before you send. Laptop default rates are often 44.1 kHz or 48 kHz. The API will not silently fix that.

Keep the WebSocket on a host that allows long-lived connections. Google’s own Live demos use Cloud Run for that reason.

Do not wrap this model in a “wait until VAD says the user stopped” gate. That turns a streaming interpreter back into a cascade of speech-to-text, translate, then TTS — the stack this model exists to replace.

If you only need captions, consider Gemini 3.5 Transcribe instead. Translation audio is wasted work when the product never plays sound.

## Conclusion

Live Translation is a narrow Live API mode: one model, audio in, audio out, a target language, and an echo flag. Get the PCM rates and the config object right, lock the session with an ephemeral token, and leave tools to Gemini 3.8 Live.

Start in AI Studio so you hear the lag and the voice drift before you write capture code. Then copy the official Python or JavaScript session loop, not a generic chat example.

## Sources

- [Live translation with Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/live-translate) — Google AI for Developers (updated 16 September 2026)
- [Gemini 3.5 Live Translate is here](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) — Google
- [Ephemeral tokens for the Live API](https://ai.google.dev/gemini-api/docs/live-api/ephemeral-tokens) — Google AI for Developers
- [Gemini 3.5 Live Translate on Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-5-live-translate) — Google Cloud
