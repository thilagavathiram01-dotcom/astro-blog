---
title: "How to Design Custom Voices with Gemini 3.8 TTS"
description: "Use Gemini 3.8 Flash TTS in Google AI Studio and the API to design voices, direct line delivery, and generate two-speaker audio."
pubDate: 2026-09-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer"]
noindex: false
---

Google shipped two new text-to-speech models on 23 September 2026: **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS**. They turn a script into spoken audio you can style, rather than a fixed preset reading text in one tone.

Flash TTS is the creative studio model. Flash-Lite TTS is the cheaper option for high-volume dubbing and voice agents. Both live in Google AI Studio, the Gemini API, and consumer products. This guide shows how to try them today without inventing settings Google did not publish.

## What changed with 3.8 TTS

Google’s launch post describes a shift from a small set of stock voices to a workspace you can direct.

Flash TTS can create a voice from a natural-language prompt, pull from a library of more than 2,000 production-ready voices, and replicate a voice from a 30-second sample you have the rights to use. Flash-Lite TTS keeps fine control over tone and pace at lower cost.

Google reports Flash TTS first on Hume AI’s Voice Design Benchmark (71.4) and first on accent modeling (60.8). Flash and Flash-Lite took the top two spots on Hume’s Overall Quality Index. Those numbers come from Google’s own announcement, not from an independent test you need to rerun.

The models sit next to the rest of the Gemini Audio stack: 3.5 Live Translate, 3.5 Transcribe, and [Gemini 3.8 Live](/blog/gemini-3-8-live/). Live is for two-way conversation. TTS is for reciting a script with control over how each line sounds.



![Close-up of studio microphone and headphones used for voice recording](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Pick the right model and surface

Use this map from Google’s rollout notes:

- **Gemini 3.8 Flash TTS** (`gemini-3.8-flash-tts`): AI Studio generate-speech workspace, Gemini API, Gemini Notebook for everyday users. Gemini Enterprise API is listed as coming soon.
- **Gemini 3.8 Flash-Lite TTS** (`gemini-3.8-flash-lite-tts`): AI Studio, Gemini API, and Google Vids. Enterprise API is also listed as coming soon.

If you need a new character, a branded narrator, or line-by-line acting cues, start with Flash TTS. If you need many clips for dubbing or an agent that talks a lot, start with Flash-Lite.

Voice remixing (take a library voice and prompt “add a subtle Southern US accent”) is marked **coming soon** in the launch post. Do not look for that slider yet.

## Try it in Google AI Studio

Google built a dedicated speech playground at [aistudio.google.com/generate-speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts).

1. Open the generate-speech page and sign in with the Google account that has Gemini API access.
2. Choose **gemini-3.8-flash-tts** or **gemini-3.8-flash-lite-tts**.
3. Pick a path: a prebuilt studio voice, the Extended Voice Library, **Voice design** from a text prompt, or **Voice replication** from a sample (where the region allows it).
4. Paste the words you want spoken. Treat that field as a verbatim transcript, not a place to hide stage directions.
5. Add turn-level style in the style / speech metadata field (for example, “warm and enthusiastic” or “whispered urgently”).
6. For two speakers, open the dual-speaker / screenplay editor, name each speaker, assign a voice, and mark conversational mode if you want natural turn-taking.
7. Generate, listen, then save the custom voice if you will reuse it.

Google’s docs list 30 named studio voices (Kore, Puck, Zephyr, Charon, and others). The Extended Voice Library adds hundreds more that you can filter by language, region, accent, pitch, and persona.



![Music production workspace with mixing console and speakers](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)



## Design a voice from a prompt

Voice design is the Flash TTS feature most people will try first. You describe role, accent, and character in plain language. Official examples include a high-energy Melbourne DJ, a tinny monotone robot, and a Japanese dragon.

Keep the prompt specific:

- Age range and perceived gender presentation, if that matters for the part.
- Accent or dialect (Mexican Spanish, Quebec French, and Scots English are named in the library coverage notes).
- Role: narrator, support agent, villain, sports commentator.
- Texture: gravelly, breathy, bright, even.

After you generate a preview, save it. Stateful custom voices (`voice_...` IDs, prompted or replicated) share a **200 voices per project** cap and a **one-year** retention window. Stateless replicated keys (`voicekey_...`) last **seven days** and are client-managed.

## Direct the line, not the transcript

Official speech-generation docs split control into two layers.

**Turn-level style** lives in `speech_metadata.style`. Put emotions, pace, and volume that apply to the whole line there. Examples from the docs: “cheerful and friendly”, “calm and relaxed”, “whispered urgently”, “out of breath”.

**Point-in-time events** go inside the transcript in angle brackets so they are not read aloud as words. Official examples include `<short pause>`, `<sigh>`, `<cough>`, plus launch-post tags such as `<laughs>` and `<gasp>`. Active-listening tokens such as `|mhm|` or `|yeah|` add backchanneling.

Do not write “she whispers the next sentence” into the spoken text. The model will say those words. Put “whispered” in style metadata instead.

## Generate audio from the API

AI Studio is the fastest way to audition. The Gemini API is how you ship the same voices. Docs use the Interactions API with `response_format` set to audio.

Single speaker, unary request: send the transcript with a `speech_metadata` style annotation, set `generation_config.speech_config` to a voice such as `Kore`, and write `interaction.output_audio` to a `.wav` file. Unary output defaults to **WAV at 24 kHz, mono, 16-bit PCM**.

Two speakers: list both names under `speech_config.speakers`, tag each text item with a `speaker` field, and set `"mode": "conversational"` for turn-taking cadence.

Streaming: set `stream=True`. Chunks default to **headerless linear PCM** (`audio/l16`, 24 kHz, mono). You can also request `audio/mulaw` or `audio/alaw` and sample rates of 24000, 16000, or 8000 Hz.

Partner docs already list Gemini TTS on Agora, LiveKit, Pipecat, and Vercel’s AI Gateway. Use those if you already run a voice stack there.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Consent, watermarks, and regional limits

Voice replication requires a verbal consent recording from the voice owner that matches the reference speaker. Google also applies SynthID watermarking to generated audio and C2PA credentials on the replication path.

A footnote on the launch post is easy to miss: **voice replication through AI Studio is not available in Illinois, Texas, the EEA, the UK, Switzerland, and India.** If the replicate control is missing, check the account region before filing a bug.

Review the [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) for safety details. Treat replication as a rights problem first and a quality problem second. Only use samples you own or have written permission to clone.

## Practical limits

TTS models accept text-only input and return audio-only output. They are not a replacement for the Live API when the user is talking back in real time.

Long-form generation is a stated goal: Google says Flash TTS can hold timbre and pacing across hours with less speaker drift than 3.1 Flash TTS. Still export in scenes if your editor needs chapter files.

Custom voice quotas are per project. Delete unused `voice_...` IDs so you do not hit the 200 cap mid-sprint.

Flash-Lite in Google Vids is the consumer path if you only need narration on a slide deck. Notebook is the Flash TTS consumer path for research audio. Neither replaces the generate-speech workspace when you need two named speakers and inline tags.

## A short first session

1. Open generate-speech with Flash TTS.
2. Design one narrator from a three-sentence prompt and save the voice.
3. Read a 150-word paragraph with style “clear and even”.
4. Rebuild the same paragraph as a two-speaker scene with conversational mode and one `<short pause>`.
5. If you will ship it, copy the Interactions snippet, swap in your saved `voice_...` ID, and write a WAV.

That is enough to learn the split between transcript, style metadata, and tags. After that, move the same voice into Notebook, Vids, or your own agent.

## Conclusion

Gemini 3.8 TTS is useful when you need the words spoken exactly and the performance controlled. Design or pick a voice, keep stage directions out of the transcript, and confirm consent before you replicate anyone.

Start in AI Studio. Promote the voice ID to the API only after the preview sounds right. For live back-and-forth instead of a script, stay on Gemini 3.8 Live.

## Sources

- [Gemini 3.8 text-to-speech says hello](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog, 23 September 2026
- [Text-to-speech generation (TTS)](https://aistudio.google.com/docs/speech-generation) — Google AI Studio docs
- [Generate speech in AI Studio](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
- [Create your own voices with Gemini 3.8 text-to-speech](https://www.youtube.com/watch?v=FL6mI_Br-mc) — Google DeepMind
