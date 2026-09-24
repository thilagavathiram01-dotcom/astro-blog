---
title: "How to Generate Custom Voices with Gemini 3.8 TTS"
description: "Use Gemini 3.8 Flash TTS in AI Studio and the Gemini API to design voices, direct two-speaker scenes, and export audio."
pubDate: 2026-09-24T08:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Google launched Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS on September 23, 2026. The pair turns a script into spoken audio you can style, not just a fixed voice reading text.

Use Flash TTS when you need a new character, a regional accent, or a two-speaker scene. Use Flash-Lite TTS when you need volume: dubbing, read-aloud, or a high-traffic voice agent that still needs tone control.

This guide follows Google’s launch post and the official speech-generation docs. It covers which model to pick, how to try it in AI Studio, how to call the Interactions API, and the consent rules for voice replication.

## Pick the right Gemini 3.8 TTS model

Google names two model codes:

- `gemini-3.8-flash-tts` — generative voice design, line-by-line acting, two-speaker staging, long-form stability
- `gemini-3.8-flash-lite-tts` — high-volume generation, dubbing, everyday single-speaker audio, cost-efficient agents

Google reports Gemini 3.8 Flash TTS at #1 on Hume AI’s Voice Design Benchmark (71.4) and first in accent modeling (60.8). Flash and Flash-Lite sit at #1 and #2 on Hume’s Overall Quality Index. Treat those as lab scores, not a promise for your script.

TTS is not the Live API. The [Live API voice agent guide](/blog/gemini-3-8-live-api-voice-agent/) covers real-time conversation with tools and camera input. TTS is for exact recitation: podcasts, audiobooks, ads, and scripted agents.

Availability on launch day:

- Developers: Gemini API and Google AI Studio
- Flash TTS for consumers: Gemini Notebook
- Flash-Lite TTS for consumers: Google Vids
- Enterprises: Gemini Enterprise API coming later



![Close-up of a studio microphone used for voice recording](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)



## Try voice design in Google AI Studio

Google opened a speech playground at [aistudio.google.com/generate-speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts). Use it before you write code.

1. Open the generate-speech workspace and select `gemini-3.8-flash-tts`.
2. Describe a voice in plain language: role, age range, accent, texture. Example: “Calm documentary narrator, mid-40s, slight Scottish cadence, dry humor.”
3. Paste a short paragraph and generate. Listen for pitch drift and clipped consonants.
4. Switch to the dual-speaker screenplay editor. Assign two speakers and write turn-level style notes.
5. Save a custom voice you like so later takes stay on the same identity.

The official voice library lists 2,000+ production-ready voices, including regional varieties such as Mexican Spanish, Quebec French, and Scots English. Generative design is for cases those presets do not cover.

Voice remixing (take a library voice and prompt “add a subtle Southern US accent”) is listed as coming soon. Do not plan a production around remix until it ships.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Generate single-speaker audio with the API

The speech-generation docs use the Interactions API. You pass the verbatim transcript, attach `speech_metadata` for style, and pick a voice in `generation_config.speech_config`.

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash-tts",
    input=[{
        "type": "user_input",
        "content": [{
            "type": "text",
            "text": "Have a wonderful day!",
            "annotations": [{
                "type": "speech_metadata",
                "style": "cheerful and friendly",
            }],
        }],
    }],
    response_format={"type": "audio"},
    generation_config={
        "speech_config": [
            {"voice": "Kore"},
        ]
    },
)

with open("out.wav", "wb") as f:
    f.write(base64.b64decode(interaction.output_audio.data))
```

`Kore` is a built-in voice. You can also pass an Extended Voice Library ID, a Voice design ID (`voice_...`), or a Voice replication ID.

Default output is WAV. The model page also documents `audio/l16`, `audio/mulaw`, and `audio/alaw` when you set `response_format`.

## Direct a two-speaker scene

For dialogue, set `mode` to `conversational` and list two speakers. Each turn is its own text block with a `speaker` annotation.

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash-tts",
    input=[{
        "type": "user_input",
        "content": [
            {
                "type": "text",
                "text": "How's it going today Jane?",
                "annotations": [{
                    "type": "speech_metadata",
                    "speaker": "Joe",
                    "style": "cheerful and friendly",
                }],
            },
            {
                "type": "text",
                "text": "Not too bad. Ready to test these new voices?",
                "annotations": [{
                    "type": "speech_metadata",
                    "speaker": "Jane",
                    "style": "calm and relaxed",
                }],
            },
        ],
    }],
    response_format={"type": "audio"},
    generation_config={
        "speech_config": {
            "mode": "conversational",
            "speakers": [
                {"speaker": "Joe", "voice": "Puck"},
                {"speaker": "Jane", "voice": "Kore"},
            ],
        }
    },
)
```

Google’s prompting guide supports inline tags for acting: `<laughs>`, `<sigh>`, `<gasp>`, and short backchannels such as `|mhm|` or `|yeah|`. Put those in the script, not in a separate track, so timing stays attached to the line.

Long-form generation is meant to hold timbre and pacing across hours of audio. Still generate in chapters if you need to edit one section without regenerating the book.



![Audio mixing desk and headphones in a small production room](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)



## Replicate a voice only with consent

Flash TTS can rebuild a vocal profile from a 30-second sample. Google requires a verbal consent recording from the voice owner that matches the reference speaker. Clips carry SynthID watermarking and C2PA credentials.

Voice replication through AI Studio is not available in Illinois, Texas, the EEA, the UK, Switzerland, and India. Do not ship a clone workflow in those regions through Studio.

Use replication for talent you hired and documented. Do not scrape public clips. Google’s model card is the place to read the safety limits before you productize this.

## Tips that keep takes consistent

- Write style in `speech_metadata` for the whole turn. Use inline tags only for bursts and pauses.
- Keep one voice ID per character. Mixing library IDs mid-episode causes noticeable drift.
- Prefer Flash TTS for dialects and IPA pronunciation overrides. Prefer Flash-Lite for batch dubbing.
- Test Japanese, Brazilian Portuguese, Vietnamese, MSA Arabic, Mexican Spanish, and Hindi if those are target markets. Google cites Voice Arena preference wins in those languages; still listen to your own script.
- Partner stacks already wrap the models: Agora, LiveKit, Pipecat, and Vercel document Gemini TTS connectors.

If you need a live conversation that can call tools while it talks, stay on the Live API instead of stitching TTS clips.

## Conclusion

Start in the AI Studio speech workspace. Lock a voice description or a library ID. Move that same ID into the Interactions API with `speech_metadata` on every turn. Add a second speaker only after the first voice is stable.

Flash TTS is the studio model. Flash-Lite TTS is the factory model. Both watermark output. Neither replaces a live dialogue session.

Generate one short scene today, save the voice, then scale the script. That order avoids a folder of almost-matching narrators.

## Sources

- [Gemini 3.8 text-to-speech launch (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Text-to-speech generation docs](https://ai.google.dev/gemini-api/docs/speech-generation)
- [Gemini 3.8 Flash TTS model card page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- [Gemini Audio speech generation (DeepMind)](https://deepmind.google/models/gemini-audio/speech-generation/)
- [Google AI Studio generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [SynthID](https://deepmind.google/models/synthid/)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
