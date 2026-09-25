---
title: "How to Create Voices with Gemini 3.8 Flash TTS"
description: "Design custom voices, run two-speaker scripts, and call gemini-3.8-flash-tts in AI Studio and the Gemini API."
pubDate: 2026-09-25T16:30:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google shipped **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS** on 23 September 2026. The models turn a written script into spoken audio you can style line by line, instead of a single fixed voice preset.

This tutorial follows the official Google blog post and the Gemini API speech-generation docs. You will pick a model, design or pick a voice in Google AI Studio, then generate single-speaker and two-speaker audio from code.

If you already call the text Flash model, keep that workflow separate. Pair this guide with [How to Call Gemini 3.8 Flash in Google AI Studio](/blog/gemini-3-8-flash-api-guide/) when you need reasoning text, not recitation.

## What the two TTS models do

Google published two IDs that share the same request shape:

- **`gemini-3.8-flash-tts`** — creative voice design, character work, audiobooks, podcasts, and line-level acting cues.
- **`gemini-3.8-flash-lite-tts`** — high-volume dubbing, batch audio, and voice agents where cost and throughput matter more.

TTS is not the Live API. Live handles unstructured conversation with camera and screen input. TTS recites the exact text you send and applies style from structured metadata.

Official product surfaces on launch day:

- Developers: Gemini API and [Google AI Studio speech playground](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- Notebook: Gemini Notebook uses Flash TTS
- Google Vids: Flash-Lite TTS
- Gemini Enterprise API: listed as coming soon

Google also lists an expanded catalog of more than 2,000 production-ready voices and support for more than 100 languages and dialects.



![Condenser microphone on a stand in a quiet recording room](https://images.unsplash.com/photo-1598488035139-b911d409d3e0?auto=format&fit=crop&w=800&q=80)



## Try a voice in Google AI Studio first

Studio is the fastest way to hear Flash TTS before you write code.

1. Open [Generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts) and sign in.
2. Select **gemini-3.8-flash-tts** for design work or **gemini-3.8-flash-lite-tts** for a cheaper test.
3. Pick a prebuilt voice, or write a natural-language voice prompt (role, accent, age range, delivery).
4. Paste a short script. Keep the script as the words you want spoken.
5. Put delivery notes in the style field, not inside the transcript. Google’s docs warn that “Say cheerfully: Hello!” can be read aloud.
6. Generate, listen, then save a custom voice if the playground offers that control for your account.

Voice replication from a 30-second sample exists in Studio, with consent checks, SynthID watermarks, and C2PA credentials. Google states replication through AI Studio is **not** available in Illinois, Texas, the EEA, the UK, Switzerland, and India.

## Create an API key

1. In AI Studio, open **API keys** and create a key on a Cloud project.
2. Export it locally. Do not commit the key.

```bash
export GEMINI_API_KEY="YOUR_API_KEY"
pip install -U google-genai
```

## Generate single-speaker audio

Pass the verbatim line in `text` and the acting note in `speech_metadata.style`. Set the voice in `speech_config`.

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash-tts",
    contents=[{
        "role": "user",
        "parts": [{
            "text": "Have a wonderful day!",
            "speech_metadata": {"style": "cheerful and friendly"},
        }],
    }],
    config={
        "response_modalities": ["AUDIO"],
        "speech_config": {
            "voice_config": {"voice": "Kore"}
        },
    },
)
```

You can swap `"Kore"` for another prebuilt name, an Extended Voice Library ID, a voice-design ID (`voice_...`), or a replication ID. Save the returned audio bytes as WAV.

The Interactions API is the other official path. It uses `response_format={"type": "audio"}` and a `speech_metadata` annotation on the text block. Both schemas treat the transcript as words to speak, not as a prompt to rewrite.



![Podcast microphone and headphones on a wooden table](https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80)



## Direct a two-speaker scene

Google documents native two-speaker staging from one script. Each turn is its own part with a `speaker` label and an optional `style`.

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash-tts",
    contents=[{
        "role": "user",
        "parts": [
            {
                "text": "How's it going today Jane?",
                "speech_metadata": {
                    "speaker": "Joe",
                    "style": "cheerful and friendly",
                },
            },
            {
                "text": "Not too bad, how about you? Ready to test these new voices?",
                "speech_metadata": {
                    "speaker": "Jane",
                    "style": "calm and relaxed",
                },
            },
        ],
    }],
    config={
        "response_modalities": ["AUDIO"],
        "speech_config": {
            "multi_speaker_voice_config": {
                "speaker_voice_configs": [
                    {"speaker": "Joe", "voice_config": {"voice": "Puck"}},
                    {"speaker": "Jane", "voice_config": {"voice": "Kore"}},
                ]
            }
        },
    },
)
```

Map each speaker name in metadata to a voice in `multi_speaker_voice_config`. Keep names stable across the file so the model does not swap timbres mid-scene.

Google’s blog also documents inline vocal events such as `<laughs>`, `<sigh>`, `<gasp>`, and backchannels like `|mhm|` or `|yeah|`. Put those markers in the transcript only when you want the sound, not as commentary.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Safety and watermark rules you should not skip

Every clip from Gemini Audio models carries a **SynthID** watermark woven into the audio. Google publishes a [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) for the safety stance.

Voice replication requires a verbal consent recording that matches the reference speaker. Only clone a voice you own or have rights to use. Do not treat a 30-second clip from the open web as a legal source.

If you ship product audio, keep the watermark. Do not run a “de-watermark” step. Detectability is part of the published design.

## Tips for cleaner takes

- Use Flash TTS when the voice itself is the product. Use Flash-Lite TTS for bulk dubs and agent replies.
- Move stage directions into `style`. Leave the transcript clean.
- Test one paragraph of long-form audio before you queue a full chapter. Google claims low speaker drift across long runs; verify on your script.
- Save custom voices in Studio so later API calls reuse the same ID.
- Voice remixing (prompted tweaks such as “add a subtle Southern US accent”) is listed as coming soon, not as a live control.
- Partner SDKs exist on Agora, LiveKit, Pipecat, and Vercel if you already run those stacks.

## Conclusion

Gemini 3.8 Flash TTS is the creative recitation model. Gemini 3.8 Flash-Lite TTS is the volume model. Both take exact text plus structured style, not a free-form chat prompt.

Start in the AI Studio speech playground, lock a voice ID, then call `gemini-3.8-flash-tts` or `gemini-3.8-flash-lite-tts` with `response_modalities: ["AUDIO"]`. Keep consent, SynthID, and regional replication limits in the same checklist as the first API call.

## Sources

- [Gemini 3.8 text-to-speech says hello](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog
- [Text-to-speech generation (generateContent)](https://ai.google.dev/gemini-api/docs/generate-content/speech-generation) — Google AI for Developers
- [Gemini 3.8 Flash TTS model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — Gemini API
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
