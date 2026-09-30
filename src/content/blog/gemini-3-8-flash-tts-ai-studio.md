---
title: "How to Generate Voices with Gemini 3.8 Flash TTS"
description: "Use Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API to design voices, add style cues, and export multi-speaker audio."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Google launched **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS** on 23 September 2026. Both models turn a written script into spoken audio you can style line by line.

You no longer pick only from a short list of stock voices. You can describe a persona in plain language, pick a library voice, or (where the product allows it) store a replicated voice after consent checks.

This guide shows how to try the models in Google AI Studio, then call the same capability from the Gemini API. Facts below come from Google’s launch post and the official speech-generation docs.



![Close-up of a studio microphone used for voice recording](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## What Gemini 3.8 TTS actually is

The TTS models are separate from Gemini Live. Live is for interactive conversation. TTS is for **exact recitation** of a script with control over style and sound.

Google positions the two 3.8 models as follows:

- **Gemini 3.8 Flash TTS** (`gemini-3.8-flash-tts`): higher fidelity, acting nuance, dialects. Aimed at audiobooks, studio narration, and multi-speaker dialogue.
- **Gemini 3.8 Flash-Lite TTS** (`gemini-3.8-flash-lite-tts`): higher volume and lower cost. Aimed at dubbing, read-aloud features, and voice agents.

Both share the same API shape. Flash TTS is listed as available for developers in the Gemini API and Google AI Studio. Flash TTS also appears in Gemini Notebook. Enterprise API access was listed as coming soon at launch.

Google states Flash TTS ranked first on Hume AI’s Voice Design Benchmark (71.4) and led accent modeling (60.8) in the numbers it published. Treat those as vendor-cited scores, not independent lab results.

## Flash vs Flash-Lite: pick one before you build

Use Flash TTS when a listener will sit with the audio for minutes: a chapter, a branded explainer, a two-host podcast draft.

Use Flash-Lite TTS when you generate many clips and care about throughput: batch dubbing, product voiceovers, agent replies.

Both models accept text only and return audio only. They support single-speaker and multi-speaker output, voice design, and voice replication in the current docs. Input token limit for `gemini-3.8-flash-tts` is 8,192. Output token limit on the Gemini API is 16,384.

Audio carries a **SynthID** watermark. Google also describes C2PA credentials on generated speech so the clip stays detectable as AI-generated.

## Try it first in Google AI Studio

You do not need to write code to hear a sample.

1. Open [Google AI Studio](https://aistudio.google.com/generate-speech) and sign in with a Google account that can use the Gemini API.
2. Open the **speech / generate speech** playground. Google described the 3.8 workspace as a voice-design surface, not only a single prompt box.
3. Choose **Gemini 3.8 Flash TTS** for a first pass. Switch to Flash-Lite only after you like the script.
4. Type the exact words you want spoken. Do not ask the model to invent the script in the TTS call. Write the transcript yourself.
5. Attach a style note such as “calm narrator” or “cheerful and friendly.” Docs call this turn-level `style` on `speech_metadata`.
6. Pick a prebuilt voice (the docs use **Kore** in examples) or open voice design and describe age, accent, and role in a sentence.
7. Generate, listen, then iterate on one line at a time. Change style before you change the whole voice.

Google’s playground also supports a dual-speaker screenplay editor. Assign each line a speaker name and a style so a two-person scene does not collapse into one cadence.

Inline vocal events in the official overview include tags such as `<laugh>`, `<sigh>`, and `<short pause>`. Use them sparingly. One laugh per scene reads better than a tag on every sentence.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Generate a single speaker from Python

Install the current Google GenAI client and set `GEMINI_API_KEY` in your environment. The speech-generation guide shows a `generate_content` pattern like this:

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

Save the returned audio bytes to a WAV or other supported format from the Audio output section of the docs. Do not assume MP3 unless that format is listed for your endpoint.

The Interactions API variant in the same guide uses `client.interactions.create`, `response_format={"type": "audio"}`, and `generation_config.speech_config` with `{"voice": "Kore"}`. Use one API surface per project so request shapes do not drift.

If you already wire Android agents through App Functions, keep TTS as a separate worker. See [how Android App Functions feed agents](/blog/android-appfunctions-agents/) for the on-device side of that split.



![Podcast desk with microphone, camera, and laptop](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)



## Direct a two-speaker scene

Multi-speaker requests attach a `speaker` name on each text part. Official samples use a conversational mode for turn-taking cadence.

Write the scene as labeled lines:

- Joe: “How's it going today Jane?” — style: cheerful and friendly
- Jane: “Not too bad. Ready to test these new voices?” — style: dry, unhurried

Keep speaker names stable across the request. Changing “Jane” to “Host 2” mid-file makes the voice mapping fail or drift.

Limit the number of speakers to what the current request allows. Launch coverage and docs discuss two speakers per request for these models. If you need a crowd scene, generate pairs and edit them in a DAW.

## Design or replicate a voice

**Voice design** creates a persona from a text description. You set role, accent, and character traits. Google says this works across more than 100 languages and dialects on Flash TTS. The API stores a persistent `voice_...` ID after `POST /v1beta/voices` with `type="prompted"`.

**Voice replication** builds a stored profile from a short sample of a voice you have the right to use. Google’s launch video and post describe a roughly 30-second sample plus consent verification. Regional limits apply. Do not upload a celebrity clip or a coworker’s voicemail.

List extra library voices with `GET /v1beta/voices` (the client helper is `client.voices.list()`). Combine a library voice for drafts and a designed voice only when the script is locked.

## Prompting habits that keep audio usable

Write the words you want spoken. TTS is not a chat model that should rewrite your paragraph.

Put acting notes in `style`, not in the transcript, unless the character must say those words.

Keep paragraphs short. Long blocks raise the chance of pacing errors at the output token cap.

Mark pauses on purpose. A `<short pause>` before a product name is clearer than stuffing commas into the script.

Generate one scene, listen on headphones, then batch the rest with Flash-Lite if the tone is already right.

## Limits and safety you should plan for

- TTS models do not support function calling, code execution, or image generation.
- Live API remains the path for back-and-forth talk, not this TTS endpoint.
- Watermarking is on by design. Do not promise clients an unmarked file.
- Voice replication is a rights and consent feature. Follow the product’s spoken-consent flow.
- Pricing and free-tier data handling change. Read the current Gemini API rate card before you budget a season of audio.

## Conclusion

Gemini 3.8 Flash TTS is useful when you already have a script and need control over how it is spoken. Start in AI Studio, lock a voice and a style, then move the same transcript into `gemini-3.8-flash-tts` or `gemini-3.8-flash-lite-tts`.

Treat Flash as the studio pass and Flash-Lite as the production pass. Keep consent and watermarks in the workflow from the first export, not as a later cleanup step.

## Sources

- [Gemini 3.8 Flash TTS and Flash-Lite TTS (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Text-to-speech generation (Gemini API)](https://ai.google.dev/gemini-api/docs/speech-generation)
- [Gemini 3.8 Flash TTS model card (AI Studio docs)](https://aistudio.google.com/docs/models/gemini-3.8-flash-tts)
- [Create your own voices with Gemini 3.8 text-to-speech (Google DeepMind on YouTube)](https://www.youtube.com/watch?v=FL6mI_Br-mc)
