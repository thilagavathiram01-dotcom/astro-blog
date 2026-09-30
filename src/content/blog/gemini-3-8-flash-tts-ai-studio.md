---
title: "How to Use Gemini 3.8 Flash TTS in AI Studio"
description: "Generate custom voices with Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API, including two-speaker scripts."
pubDate: 2026-09-30T11:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "google"]
noindex: false
---

Google shipped two new speech models on 23 September 2026: Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS. They turn a script into acted audio instead of a flat read. You can design a voice in plain language, pick from a library of more than 2,000 voices, or replicate a consented sample.

This guide follows Google's official blog post and the Gemini API speech-generation docs. You will generate a single-speaker clip in AI Studio, then a two-speaker scene, then the same request through the API.

## Flash TTS versus Flash-Lite TTS

Both models share the same request shape. Choose the one that matches the job.

**Gemini 3.8 Flash TTS** (`gemini-3.8-flash-tts`) is the creative model. Google positions it for audiobooks, studio narration, multi-speaker dialogue, dialects, and heavy acting cues. Official docs list 130 languages and an 8,192 input / 16,384 output token serving limit on the Gemini API.

**Gemini 3.8 Flash-Lite TTS** (`gemini-3.8-flash-lite-tts`) is the volume model. Use it for dubbing, read-aloud features, voice agents, and bulk clips. Docs list 101 languages. Google Vids uses Flash-Lite. Gemini Notebook uses Flash.

Google reports Flash first on Hume AI's Voice Design Benchmark (71.4) and first on accent modeling (60.8). Flash and Flash-Lite took the top two spots on Hume AI's Overall Quality Index. Treat those as vendor-cited scores, not an independent lab report.



![Studio microphone and audio mixer on a desk](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)



## What you need before you start

- A Google account with access to [Google AI Studio](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- A Gemini API key if you want to generate files from code
- A short script. One paragraph is enough for a first test
- For voice replication only: a 30-second sample plus a verbal consent recording from the voice owner

Voice replication in AI Studio is **not** available in Illinois, Texas, the EEA, the UK, Switzerland, and India. Google states that restriction in a footnote on the launch post.

Every clip is watermarked with [SynthID](https://deepmind.google/models/synthid/). C2PA credentials are attached for voice replication. Do not treat a generated voice as a substitute for talent contracts you do not have.

If you already prototype Android apps in the same console, keep the two workflows separate. Speech generation lives under Generate speech. Native app builds live under Build mode, which we covered in [How to Build a Native Android App in Google AI Studio](/blog/build-android-apps-google-ai-studio/).

## Step 1: Open the speech playground

1. Go to [Generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts) in AI Studio.
2. Select **gemini-3.8-flash-tts** for a first character test.
3. Switch to Flash-Lite only after you like the read and need cheaper bulk output.
4. Stay on a single speaker until the voice is stable.

The playground is built as a voice design workspace. You can describe a persona, load a library voice, or start a replication flow where the region allows it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 2: Design a voice with a prompt

Flash TTS can build a new vocal identity from a description. Google's examples include a Melbourne high-energy DJ, a tinny monotone robot, and a Japanese dragon. Keep the first prompt concrete.

A prompt that works:

> Warm documentary narrator, mid-40s, slight Scottish English, calm pace, dry humor, studio close-mic.

Avoid stacking five accents and three ages in one sentence. Generate a 10-second sample. If the accent slips, name one region and one age band, then regenerate.

You can also pick from the **2,000+** production-ready library. Google calls out regional varieties such as Mexican Spanish, Quebec French, and Scots English.

Save the voice once it sounds right. The launch post says saved custom voices reduce drift across later projects.

## Step 3: Direct the line, not just the voice

Both models accept turn-level style and inline vocal events. Official tags include `<laugh>`, `<sigh>`, `<gasp>`, and `<short pause>`. Active-listening markers such as `|mhm|` and `|yeah|` are documented for backchanneling.

Example single-speaker text:

> We found the spare key. <short pause> It was in the kitchen drawer the whole time. <laugh> I told you not to panic.

Attach a style such as `cheerful and friendly` at the turn level. In the Gemini API that lives on `parts[].speech_metadata`.

Google documents long-form generation with stable timbre across hours. Still generate chapter-sized chunks for editing. A 20-minute block is harder to salvage than five four-minute files.



![Person editing a podcast waveform on a laptop](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Step 4: Stage a two-speaker scene

Flash TTS supports native two-speaker staging from one script. Keep each speaker on its own turn. Assign each turn a voice and a style.

A minimal scene:

- Speaker A, library voice Kore, style: calm producer
- Speaker B, custom narrator, style: slightly rushed guest

Write the script as dialogue, not a paragraph. Mark reactions with `|mhm|` instead of asking the model to “sound conversational.” Two speakers per request is the documented ceiling in public coverage of the API.

Play the clip once without looking at the text. If you cannot tell the two voices apart, change pitch and accent before you rewrite the lines.

## Step 5: Call the Gemini API

AI Studio can export request code. The official single-speaker Python shape from Google's docs is:

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

Set `response_modalities` to audio. Point `voice_config.voice` at a prebuilt name, an Extended Voice Library ID, a designed `voice_...` ID, or a replication ID.

The speech-generation guide is separate from the Live API. Live is for interactive, multimodal talk. TTS is for exact recitation with style control. Do not mix the two when you need a file that matches a script word for word.

Partner docs already list Gemini TTS on Agora, LiveKit, Pipecat, and Vercel. Use those only after a local clip sounds right.

## Step 6: Check consent, regions, and watermarks

Replication needs a matching verbal consent recording from the voice owner. Google is explicit: the consent sample must match the reference speaker before a voice is created.

Do not upload a celebrity clip or a coworker sample without that consent path. The model will not make an illegal recording legal.

SynthID is applied to every Gemini Audio clip. That is a detection aid, not a license to publish someone else's voice. Review the [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you ship an agent that speaks in a copied persona.

## Practical tips

- Start in Flash. Move stable jobs to Flash-Lite when cost and latency matter more than dialect nuance.
- Keep pronunciation notes in the script for names and product terms. Do not rely on the model to guess.
- Generate two takes with the same voice ID before you commit to a series. Drift is lower than older TTS, not zero.
- Voice remixing (prompted tweaks such as “add a subtle Southern US accent”) is listed as coming soon, not shipping on day one.
- Flash-Lite is the right default inside Google Vids. Flash is the right default inside Gemini Notebook.

## Conclusion

Gemini 3.8 Flash TTS is useful when you need a directed performance, not a stock voice pack. Design one persona, lock a voice ID, then write stage directions into the script. Use two-speaker mode only after each voice holds on a solo take.

Flash-Lite is the production hose. Flash is the studio pass. Both belong in AI Studio today, in the Gemini API today, and in Gemini Enterprise when that API path finishes rolling out.

## Sources

- [Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog (23 September 2026)
- [Gemini 3.8 Flash TTS model card in Gemini API docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — Google AI for Developers
- [Speech generation with the Gemini API](https://ai.google.dev/gemini-api/docs/generate-content/speech-generation) — Google AI for Developers
- [Gemini Audio speech generation](https://deepmind.google/models/gemini-audio/speech-generation/) — Google DeepMind
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
