---
title: "How to Generate Voices with Gemini 3.8 Flash TTS"
description: "Use Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API to design voices, direct dialogue, and export audio."
pubDate: 2026-09-30T10:00:00
heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google shipped Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS on 23 September 2026. The models turn a script and a voice description into spoken audio you can download or call from the Gemini API.

This guide follows Google's official announcement and the Gemini API speech-generation docs. You will pick a model, design or select a voice in Google AI Studio, add line-level style cues, then generate single-speaker or two-speaker audio.

## What changed with Gemini 3.8 TTS

Google positioned 3.8 Flash TTS as a creative studio model and Flash-Lite TTS as the high-volume option. Both share the same API shape. Flash is for character work, audiobooks, and dual-speaker scenes. Flash-Lite is for dubbing, read-aloud features, and voice agents where cost and throughput matter more.

Official highlights from the Google Blog:

- Generative voice design from a natural-language prompt across more than 100 languages and dialects.
- A library of 2,000+ production-ready voices, including regional varieties such as Mexican Spanish and Quebec French.
- Voice replication from a 30-second sample, with consent verification, SynthID watermarking, and C2PA credentials.
- Line-by-line style control, two-speaker scenes, and scripted bursts such as `<laugh>` or `|mhm|`.

Google reports Gemini 3.8 Flash TTS first on Hume AI's Voice Design Benchmark (71.4) and first on accent modeling (60.8). Flash and Flash-Lite sit first and second on Hume's Overall Quality Index. Treat those as vendor-cited scores, not independent lab results.



![Close-up of a studio microphone used for voice recording](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Flash vs Flash-Lite: pick one first

Use **gemini-3.8-flash-tts** when you need acting nuance, dialects, long-form stability, or a custom persona. Use **gemini-3.8-flash-lite-tts** when you generate a lot of speech and can accept a smaller quality gap.

Docs list these properties for Flash TTS: text in, audio out; 8,192 input tokens; 16,384 output tokens on the Gemini API serving limit. TTS models do not support function calling, code execution, or image generation.

Voice replication through AI Studio is **not** available in Illinois, Texas, the EEA, the UK, Switzerland, and India. Check that footnote before you record a sample.

If you already prototype apps in the same console, the [AI Studio Android Build mode walkthrough](/blog/build-android-apps-google-ai-studio/) covers the adjacent product surface.

## Step 1: Open the speech playground

1. Sign in at [Google AI Studio](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts).
2. Choose **gemini-3.8-flash-tts** for a first creative pass, or Flash-Lite if you only need a short read-aloud.
3. Stay in the audio workspace. Google built this view as a voice design desk, not a chat thread.
4. Keep a short test line ready: one sentence, one emotion, no plot.

You can later move the same model IDs into the Gemini API. Studio is the place to hear a voice before you pay for batch jobs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 2: Choose a library voice or design one

Three official paths exist:

**Prebuilt and extended library.** Start with a named voice such as `Kore`, then browse the Extended Voice Library via `GET /v1beta/voices` when you need a regional accent or a different archetype.

**Voice design.** Describe role, accent, age range, and timbre in plain language. Google's examples include a high-energy Melbourne DJ, a tinny monotone robot, and a Japanese dragon. Save the returned `voice_...` ID so later scenes stay on the same persona.

**Voice replication.** Record about 30 seconds of the speaker you have rights to use, plus the required verbal consent clip. The system checks that the consent speaker matches the reference before it stores the voice. Do not upload other people's audio without that consent path.

Remixing (prompting an existing library voice to add an accent or soften delivery) is listed as coming soon, not as a current control.

## Step 3: Direct a single speaker

Pass the exact words you want spoken. Attach a style on that turn. Official Python using the Interactions API looks like this:

```python
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
```

Keep the transcript verbatim. TTS is built for recitation, not for the Live API's open conversation. Style lives on the turn (`speech_metadata`), not as a hidden system prompt.

Useful style phrases from the product docs: cheerful and friendly, whispered, projected, calm customer-service tone. Add inline events when you need texture: `<laugh>`, `<sigh>`, `<gasp>`, `<short pause>`, and backchannels such as `|mhm|` or `|yeah|`.



![Headphones and audio interface on a desk for reviewing generated speech](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)



## Step 4: Stage two speakers from one script

Both 3.8 TTS models accept a two-speaker scene in one request. Name each speaker in `speech_metadata` and give each line its own style. Use conversational mode when you want natural turn-taking instead of a stiff table read.

Keep the cast at two voices per request. That is the documented cap. Write the script as alternating lines, not as a paragraph that the model has to split.

Long-form work is a stated goal: Google says Flash TTS holds timbre and pacing across hours with less speaker drift than Gemini 3.1 Flash TTS. Still generate in chapters. Easier to restyle one bad page than a full book.

## Step 5: Export, watermark, and ship

Default API output is WAV (`audio/wav`). Save the file, then convert only if your player or CMS needs MP3 or AAC.

Every Gemini Audio clip carries a SynthID watermark. That mark is meant to stay audible-undetectable to listeners and detectable to Google's tools. Do not promise clients that the file is "unmarked human speech."

Availability Google listed at launch:

- Developers: Gemini API and Google AI Studio for both Flash and Flash-Lite.
- Consumers: Gemini Notebook for Flash TTS; Google Vids for Flash-Lite TTS.
- Enterprises: API access through Gemini Enterprise marked as coming soon on 23 September 2026.

Partner docs already exist for Agora, LiveKit, Pipecat, and Vercel if you want TTS inside an existing voice stack instead of a raw API call.

## Practical tips

Write stage directions that a voice actor could follow. "Slightly rushed, then a pause before the last word" works better than "make it cinematic."

Test dialects on a short sentence before you lock a 20-minute chapter. Accent modeling is a benchmark win, not a guarantee for every proper noun.

Store voice IDs in source control comments or a small config file. Regenerating a designed voice from the same prompt can drift; the saved ID is the stable handle.

Stay inside the consent flow for replication. The product will reject a mismatch between the consent clip and the reference speaker. That is the intended behavior.

Price will move. Third-party writeups noted introductory token rates and a planned increase on 1 January 2027. Confirm current rates in AI Studio or Cloud billing before you budget a catalog of hours.

## Conclusion

Gemini 3.8 Flash TTS is useful when you need a directed performance, not a default robot voice. Design or pick a voice in AI Studio, attach a style to each line, cap scenes at two speakers, and keep the official model IDs (`gemini-3.8-flash-tts` and `gemini-3.8-flash-lite-tts`) in your client.

Start with one paragraph and one saved voice ID. Expand to dual-speaker scripts only after that clip sounds right on headphones.

## Sources

- [Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog (23 September 2026)
- [Text-to-speech generation (TTS)](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API docs
- [Gemini 3.8 Flash TTS model card in AI Studio](https://aistudio.google.com/docs/models/gemini-3.8-flash-tts) — Google AI Studio
- [Generate speech in Google AI Studio](https://aistudio.google.com/generate-speech) — product playground
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
