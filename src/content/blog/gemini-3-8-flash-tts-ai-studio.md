---
title: "How to Use Gemini 3.8 Flash TTS in AI Studio"
description: "Create custom voices, two-speaker scenes, and long-form audio with Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "google", "developer"]
noindex: false
---

Google shipped **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS** on 23 September 2026. Both models turn a script into spoken audio you can direct line by line, instead of picking a single preset voice and hoping the delivery holds.

The studio path is the fastest way to learn the models. You design a voice, stage a two-speaker scene, then copy the same settings into the Gemini API. This guide follows Google’s official blog post, the speech-generation docs, and the AI Studio playground.

Use Flash TTS when you care about acting, accents, and long-form stability. Use Flash-Lite TTS when you need volume, dubbing, or a cheaper voice agent.

## What Google released

Google’s post describes two models that share the same control surface:

- **Gemini 3.8 Flash TTS** (`gemini-3.8-flash-tts`): voice design, character work, audiobooks, podcasts, and multi-speaker scenes.
- **Gemini 3.8 Flash-Lite TTS** (`gemini-3.8-flash-lite-tts`): high-volume dubbing, read-aloud, and expressive agents with lower cost.

Flash TTS is listed first in Gemini Notebook. Flash-Lite TTS is listed first in Google Vids. Developers get both in [Google AI Studio](https://aistudio.google.com/generate-speech) and the Gemini API. Gemini Enterprise API access is listed as coming soon.

Google moved past the old set of 30 original voices. Flash TTS can generate a new voice from a natural-language description across more than 100 languages and dialects. The library also includes **2,000+ production-ready voices**, including regional varieties such as Mexican Spanish, Quebec French, and Scots English.

Google reports Flash TTS at **#1 overall on Hume AI’s Voice Design Benchmark (71.4)** and **#1 in accent modeling (60.8)**. Flash and Flash-Lite sit at #1 and #2 on Hume’s Overall Quality Index. Treat those as vendor-cited scores, not a reason to skip a listening test on your own script.

![Studio microphone and headphones ready for a voice recording session](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)

## Watch a speech walkthrough first

Google’s Build with Gemini series shows how speech generation sits next to transcription in AI Studio. The UI labels have moved since earlier Gemini 2.5 clips, but the flow is the same: pick a TTS model, paste a script, set style, generate, then export SDK code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fiowY3RJ5O0"
    title="Gemini API for Speech and Text"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Open the AI Studio audio playground

1. Sign in at [aistudio.google.com](https://aistudio.google.com).
2. Open **Generate speech** (or go directly to the speech playground with the `gemini-3.8-flash-tts` model selected).
3. Choose **Gemini 3.8 Flash TTS** for character work or **Flash-Lite TTS** for cheaper batch jobs.
4. Start with a **single-speaker** template before you jump to a two-speaker screenplay.
5. Write a short line, generate once, and listen with headphones. Fix the voice before you feed it a chapter.

Google built the playground like a voice design desk. You can prompt a new identity from scratch, pick a library voice, or replicate a voice you have the right to use.

Voice replication in AI Studio needs a **30-second reference clip** plus a **verbal consent recording** that matches the speaker. Google also attaches **SynthID** watermarks and **C2PA** credentials to generated audio. Replication through AI Studio is **not available in Illinois, Texas, the EEA, the UK, Switzerland, and India**.

## Design a voice with a text prompt

Flash TTS treats the voice brief as part of the job. Describe role, age range, accent, and room, not only “friendly female narrator.”

A brief that matches Google’s demos looks like this:

> A high-energy late-night radio DJ from Melbourne. Slight Australian English. Fast but clear. Warm laugh. Speaks close to the mic.

Keep one identity per project. Save the custom voice in the playground so later chapters do not drift. Remixing (nudge timbre, pitch, pace, or add a light regional accent on a library voice) is listed as coming soon on the official post.

If you only need a stable narrator, skip design and pick a named prebuilt voice such as **Kore** or **Puck**. Those names appear in the official single-speaker and multi-speaker API samples.

## Direct the performance line by line

Both 3.8 models accept turn-level style plus inline tags. The docs separate TTS from the Live API: Live is for interactive talk; TTS is for exact recitation of a script.

Use a turn-level `style` for the whole line (“calm customer-service agent,” “whispered suspense”). Use inline tags for beats inside the line:

- Vocal bursts: `<laughs>`, `<sigh>`, `<gasp>`
- Short pause tags where the docs show them
- Backchannels such as `|mhm|` or `|yeah|` for a second speaker who is listening

Google also documents native **two-speaker scene staging**. You assign each speaker a voice, mark each turn, and set conversational mode so turn-taking does not sound like two isolated files glued together.

Long-form generation is a first-class claim: the models are meant to hold timbre and pacing across hours with less speaker drift than Gemini 3.1 Flash TTS. Still generate in scenes, not an entire book in one request, so you can restage a weak chapter without rerunning the rest.

![Audio mixing desk and speakers in a music production room](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)

## Move the same settings into the Gemini API

When the playground take is good, click **Get SDK code** in AI Studio or copy the pattern from the speech-generation docs.

Official Python shape for a single speaker:

- Model: `gemini-3.8-flash-tts`
- Input text with a `speech_metadata` annotation for `style`
- `response_format` set to audio
- `generation_config.speech_config` with a voice such as `Kore`
- Write the returned WAV bytes to disk

For two speakers, pass each line as its own text block with a `speaker` field, then list both speakers and voices under `speech_config` with `mode: "conversational"`.

The two 3.8 models share the same schema. You can swap Flash for Flash-Lite with one model string when you move from a hero narrated scene to a batch of product voiceovers.

Google lists partner integrations for production speech (Agora, LiveKit, Pipecat, Vercel AI Gateway) plus media teams using the models for dubbing and agents. Those are distribution paths, not extra features you must enable in Studio.

If you already run spoken agents in other apps, keep the stack split. Gemini TTS is for scripted audio. Live dialogue and device assistants belong in a different product surface. For a consumer voice setup on the OpenAI side, see [How to Use ChatGPT Voice With GPT-5.6 and Astra](/blog/chatgpt-voice-gpt-5-6-astra/).

## Where each model should run

Google’s rollout map as of 23 September 2026:

- **Developers:** Gemini API and Google AI Studio for both models.
- **Everyone:** Flash TTS in Gemini Notebook; Flash-Lite TTS in Google Vids.
- **Enterprises:** API in Gemini Enterprise listed as coming soon.

Pick Flash TTS for:

- Audiobook chapters and branded narrators
- Games and interactive characters
- Dual-speaker podcasts and table reads
- Hard accents and pronunciation

Pick Flash-Lite TTS for:

- High-volume localization
- In-app read-aloud
- Voice-agent replies that must stay cheap
- Everyday single-speaker clips

Flash TTS supports over **130 languages** in the developer docs. Flash-Lite supports over **100**. Confirm the language table in the current speech-generation page before you promise a locale to a client.

## Safety checks before you publish audio

Do not replicate a voice you do not own. Google requires a matching consent clip and refuses replication in several regions.

Expect every clip to carry a SynthID watermark. That is intentional. It helps later detection if someone treats the file as a live human recording.

Read the [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you put generated speech in ads, political content, or customer-support hold music. Style tags can add laughs and gasps. They do not make the system a licensed actor for a real person.

## Troubleshooting

**The playground still shows 3.1 Flash TTS.** Hard-refresh and pick `gemini-3.8-flash-tts` from the model menu. Rollout started 23 September 2026 and may lag on some accounts.

**Voice replication is missing.** Check the regional restriction list. Use voice design or the 2,000-voice library instead.

**Two speakers bleed together.** Name each speaker in metadata, assign two different voices, and set conversational mode. Do not paste both lines as one paragraph.

**Long chapters drift.** Split by scene. Reuse a saved custom voice ID. Avoid rewriting the character brief mid-book.

**You need live interruption, not a script.** Use the Live API, not TTS. TTS is built to recite the text you send.

## Conclusion

Gemini 3.8 Flash TTS is a directed vocal studio, not a new list of celebrity presets. Design or pick a voice, mark style on each turn, add bursts only where the script needs them, then export the same config to the API.

Start in AI Studio with a 20-second scene. Save the voice. Generate the next scene with the same ID. Switch to Flash-Lite only when the take is good enough and you need volume.

Confirm current model IDs and code samples on the official speech-generation page before you ship. The product names are stable. Quotas and regional locks are not.

## Sources

- [Gemini 3.8 text-to-speech says hello](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google, 23 September 2026
- [Text-to-speech generation (TTS)](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API docs
- [Gemini 3.8 Flash TTS model card page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — developer overview
- [Google AI Studio speech playground](https://aistudio.google.com/generate-speech)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [Gemini API for Speech and Text](https://www.youtube.com/watch?v=fiowY3RJ5O0) — Build with Gemini
