---
title: "How to Replicate a Voice with Gemini 3.8 TTS"
description: "Clone an adult voice in Gemini 3.8 Flash TTS: consent clip, Voices API, store modes, and a working speech call."
pubDate: 2026-09-29T16:00:00
heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Gemini 3.8 Flash TTS can copy an adult speaker from two short recordings. You send a reference clip and a spoken consent line to `POST /v1beta/voices`, get back a `voice_...` ID, then pass that ID into a normal speech request.

This is not prompt-based voice design. Design invents a persona from text. Replication copies a real person you have the rights to use. Google requires the same adult on both clips and marks the output with SynthID. C2PA credentials apply to replicated voices.

If you only need a playground walkthrough first, start with [Gemini 3.8 Flash TTS in AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/) and come back here when you are ready to store an ID in code.

## What you need before you call the API

Use `gemini-3.8-flash-tts` or `gemini-3.8-flash-lite-tts`. Both support replication. Official docs recommend Flash-Lite for high-volume replication and Flash when you care more about acting nuance after the voice exists.

Install a current GenAI SDK. Google’s replication samples target `google-genai` 2.25.0 or later and `@google/genai` 2.24.0 or later. Set `GEMINI_API_KEY`.

Record two files from the **same adult speaker**. Official recommendation: 24 kHz mono 16-bit WAV.

1. **Reference audio (`source_audio`):** 10–30 seconds of clean, natural speech. The launch post also describes a 30-second sample for the product story; the API page is the one that sets the 10–30 second window.
2. **Consent audio (`consent_audio`):** the same speaker recites the required statement in a supported language. English text from the docs: “I am the owner of this voice and I consent to Google using this voice to create a synthetic voice model.”

Keep the mic and room the same on both files. The service compares the two recordings.

Google states that voice replication through AI Studio is not available in Illinois, Texas, the EEA, the UK, Switzerland, and India. Check that list before you promise a clone-from-sample flow in those regions.

![Close-up of a studio microphone used to record a voice sample](https://images.unsplash.com/photo-1590602847861-e609e3a1e4e6?auto=format&fit=crop&w=800&q=80)

## Step 1: Try it in Google AI Studio

Open the [Speech Playground](https://aistudio.google.com/generate-speech). Use Voice Replication to record or upload the reference clip and the consent clip in the browser.

Preview the result, then copy the `voice_...` ID. That is the same identifier the API returns when `store=True`.

Studio is the fastest way to confirm consent verification before you wire base64 payloads.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 2: Create a stored voice with the API

Stateful storage is the default. Google keeps the verified profile in your project, returns a persistent `voice_...` ID, and applies a **1-year TTL**. The project cap is **200 voices**, shared with prompted (designed) voices.

```python
import base64
from google import genai

client = genai.Client()

with open("reference_speaker.wav", "rb") as f:
    source_b64 = base64.b64encode(f.read()).decode("utf-8")

with open("speaker_consent.wav", "rb") as f:
    consent_b64 = base64.b64encode(f.read()).decode("utf-8")

replicated_voice = client.voices.create(
    store=True,
    voice={
        "model": "gemini-3.8-flash-tts",
        "type": "replicated",
        "display_name": "Custom Replicated Speaker",
        "replicated": {
            "source_audio": {
                "mime_type": "audio/wav",
                "data": source_b64,
            },
            "consent_audio": {
                "mime_type": "audio/wav",
                "data": consent_b64,
            },
        },
    },
)

print(replicated_voice.id)
```

The same body works over REST at `https://generativelanguage.googleapis.com/v1beta/voices` with header `x-goog-api-key`.

If `CreateVoice` returns HTTP 500 with “Error translating server response to JSON”, record a fresh pair in one sitting. Developers on the official forum reported success after replacing an older reference file while keeping a clean consent clip.

## Step 3: Synthesize with the new ID

Pass the ID in `generation_config.speech_config`. The transcript lives in `text`. Style lives in `speech_metadata`. Do not write “say this cheerfully” inside the transcript or the model may speak the stage direction.

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash-tts",
    input=[{
        "type": "user_input",
        "content": [{
            "type": "text",
            "text": "Hello! This audio was synthesized using a replicated speaker voice.",
            "annotations": [{
                "type": "speech_metadata",
                "style": "warm and conversational",
            }],
        }],
    }],
    response_format={"type": "audio"},
    generation_config={
        "speech_config": [
            {"voice": replicated_voice.id},
        ]
    },
)

with open("replicated_speech.wav", "wb") as f:
    f.write(base64.b64decode(interaction.output_audio.data))
```

You can swap the model string to `gemini-3.8-flash-lite-tts` without changing the rest of the request. The schema is shared.

![Laptop and headphones on a desk during an audio review session](https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=800&q=80)

## Step 4: List, fetch, or delete stored voices

```python
response = client.voices.list(type_=["replicated"])
for voice in response.voices or []:
    print(voice.id, voice.display_name, voice.type)

voice_details = client.voices.get(id=replicated_voice.id)
client.voices.delete(id=replicated_voice.id)
```

Filter `type=replicated` when you list. Prompted design voices share the same 200-slot pool, so delete unused IDs instead of creating a new profile for every experiment.

## When to use a stateless key instead

Set `store=False` if you cannot keep a biometric voice profile on Google’s side. The API returns `replicated_voice.key` starting with `voicekey_...`. You store that string and pass it wherever a voice ID is accepted.

Stateless keys last **7 days**. There is no project list for them. Treat the key like a secret: anyone who holds it can synthesize in that voice until it expires.

Use stateful IDs for products that reuse the same narrator. Use stateless keys for short jobs or stricter data rules.

## Tips that keep clones legal and stable

- Replicate only an adult voice you own or have written rights to use. Do not upload a coworker sample “to try it.”
- Recite the official consent line. Do not paraphrase it.
- Prefer 24 kHz mono 16-bit WAV. Mixed formats are a common source of 500s.
- Keep style in `speech_metadata`. Keep laughs and pauses as tags such as `<laugh>` and `<short pause>` when the speech-generation guide allows them.
- Expect SynthID on Gemini Audio output. Do not strip watermarks if you redistribute clips.
- Enterprise API access for the 3.8 TTS family was listed as coming soon on the 23 September launch post. Confirm the model in your console before you schedule a production cutover.

## Conclusion

Voice replication is a two-clip Voices API call plus a normal TTS request. Record a 10–30 second reference, record the exact consent sentence, create a stored `voice_...` ID (or a 7-day `voicekey_...`), then synthesize with `speech_config`.

Start in AI Studio if you have never verified consent. Move the same ID into `google-genai` once the preview sounds right. Delete unused stored voices so you stay under the 200-voice project cap.

## Sources

- [Voice replication](https://ai.google.dev/gemini-api/docs/voice-replication) — Gemini API
- [Text-to-speech generation](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API
- [Gemini 3.8 Flash TTS](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — Gemini API
- [Gemini 3.8 Flash TTS and Flash-Lite TTS](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog
- [Create your own voices with Gemini 3.8 text-to-speech](https://www.youtube.com/watch?v=FL6mI_Br-mc) — Google DeepMind
