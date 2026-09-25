---
title: "How to Use Gemini 3.8 Flash TTS in AI Studio"
description: "Generate custom voices with Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API. Official models, steps, and safety notes."
pubDate: 2026-09-25T10:30:00
heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Google shipped **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS** on September 23, 2026. Both turn a verbatim script into spoken audio you can style, pause, and split across two speakers. This guide covers the no-code path in Google AI Studio and the same models on the Gemini API.

Use these models when the words must match the script. For live back-and-forth agents, use the Live API instead. That split is documented by Google: TTS recites text; Live handles unstructured conversation.

## What you get with the 3.8 TTS pair

Google positions the two IDs for different jobs:

- **`gemini-3.8-flash-tts`**: highest fidelity, acting cues, dialects, long-form and two-speaker scenes. Use it for audiobooks, podcasts, and character work.
- **`gemini-3.8-flash-lite-tts`**: lower cost and latency. Use it for high-volume dubbing, read-aloud features, and voice-agent replies.

Official surfaces on launch day:

- Developers: Gemini API and [Google AI Studio speech playground](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- Everyone: Gemini Notebook (Flash TTS) and Google Vids (Flash-Lite TTS)
- Enterprises: Gemini Enterprise API (listed as coming soon in the launch post)

Google reports more than 100 languages and dialects, a library of 2,000+ production voices, and generative voice design from a natural-language prompt. Flash TTS ranked first on Hume AI’s Voice Design Benchmark (71.4) and first on accent modeling (60.8) in the figures Google published.

If you already run real-time agents, keep TTS and Live as separate products. Our [Gemini 3.8 Live in AI Studio guide](/blog/gemini-3-8-live-ai-studio/) covers the speech-to-speech models.



![Podcast microphone and headphones on a desk for recording narration](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Step 1: Open the speech playground

1. Sign in at [Google AI Studio](https://aistudio.google.com/).
2. Open **Generate speech** (Google’s launch link uses `aistudio.google.com/generate-speech`).
3. Select **gemini-3.8-flash-tts** for a quality test, or **gemini-3.8-flash-lite-tts** for a speed and cost test.
4. Pick a prebuilt voice such as **Kore** or **Puck**, or start a voice-design prompt.
5. Paste a short script. Do not put stage directions in the spoken text.
6. Generate and listen. Save the clip before you change the voice.

Keep the first clip under 20 seconds. You want to hear style, accent, and tags before you spend tokens on a chapter.

## Step 2: Separate the script from the direction

The Gemini API treats `text` as the words that must be spoken. Style belongs in `speech_metadata` or inline tags. Official examples use tags such as `<laugh>`, `<sigh>`, and `<short pause>`.

Turn-level style examples from the docs:

- `cheerful and friendly`
- `whispered urgently`
- `calm and relaxed`

Put sustained delivery in the style field. Put one-off bursts in the transcript as tags. If you write “laughs softly” as plain words, the model may say those words out loud.

Google also documents backchannels such as `|mhm|` and `|yeah|` for two-speaker scenes. Use them when you want a listener to react without stealing the line.

## Step 3: Generate one speaker from the API

Install the Google GenAI SDK and set `GEMINI_API_KEY`. This Python pattern follows the official speech-generation guide:

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

Write the returned audio bytes to a WAV file. The docs also show an Interactions API form of the same call. Either path needs `response` audio, not text-only output.

Voice values can be a prebuilt name, an Extended Voice Library ID from `GET /v1beta/voices`, a custom voice-design ID (`voice_...`), or a replication ID (`voice_...` or optional `voicekey_...`).



![Laptop showing code next to studio headphones during an audio test](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)



## Step 4: Stage a two-speaker scene

For dialogue, name two speakers in `speech_config` and tag each turn. Google’s sample uses conversational mode with **Puck** and **Kore**:

- Speaker Joe, voice Puck, style cheerful
- Speaker Jane, voice Kore, style calm

Pass each line as its own text part with `speech_metadata.speaker` set. Set `mode` to `conversational` when you want natural turn-taking instead of two isolated reads.

Test three things on a 30-second scene:

1. Do the two voices stay distinct after four turns?
2. Do tags fire at the right beat?
3. Does a long pause tag actually insert silence?

If identity drifts, shorten the clip and reuse the same voice IDs. Google markets long-form stability on Flash TTS. Still verify on your script; accent-heavy lines expose drift first.

Watch Google DeepMind’s official one-minute demo before you design a full episode:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 5: Design or replicate a voice with consent

Flash TTS can invent a voice from a prompt (role, accent, timbre) or copy a profile from about 30 seconds of audio you have the right to use. Google requires a matching verbal consent recording from the voice owner before replication completes.

Regional limits apply. Google’s footnote states voice replication through AI Studio is **not available in Illinois, Texas, the EEA, the UK, Switzerland, and India**.

Every Gemini Audio clip is watermarked with **SynthID**. Google also cites C2PA credentials on replicated voices. Treat those as detection aids, not a license to clone a public figure.

Voice remixing (nudge pitch, pace, or accent on a library voice) is listed as coming soon in the launch post. Do not build a product that depends on remix until that control ships.

## Which model to pick for a given job

Use Flash TTS when the listener will hear every syllable: narrated docs, branded characters, dialects, dual-speaker screenplays.

Use Flash-Lite TTS when you generate thousands of clips or need a low-latency spoken reply. Google names high-volume dubbing, read-aloud, and voice-agent cascades as Lite workloads.

Do not use either TTS model as a stand-in for Gemini 3.8 Live. TTS does not take a live microphone stream. Live does not promise word-for-word recitation of a fixed script.

## Tips that keep quality high

Write the spoken line first. Add style second. If a generation sounds flat, change the style string before you change the voice ID.

Keep punctuation clean. Official prompting notes treat commas and periods as timing hints. Stacking ellipses plus a pause tag often double-pauses.

Reuse the same voice ID across a project. Saving designed voices is part of the launch feature list and is the main way to limit drift between chapters.

Log model ID, voice ID, and style with every file. A week later you will not remember which clip used Lite.

Do not feed passwords, medical records, or other people’s voices into replication. Consent verification exists because that misuse is the default risk.

## Conclusion

Gemini 3.8 Flash TTS is the model to open when you need a directed performance. Flash-Lite TTS is the model to open when you need many clips at lower cost. Both are live in AI Studio and the Gemini API as of September 23, 2026.

Start in the speech playground with a 15-second line, one prebuilt voice, and one style string. Then move the same script to the API. Add a second speaker only after the first voice is stable. That sequence is enough to judge whether these models fit a podcast, a product voice, or a study narration before you automate a pipeline.

## Sources

- [Gemini 3.8 text-to-speech says hello (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Text-to-speech generation (Gemini API docs)](https://ai.google.dev/gemini-api/docs/speech-generation)
- [Gemini 3.8 Flash TTS model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- [Google AI Studio generate-speech playground](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [Create your own voices with Gemini 3.8 text-to-speech (YouTube)](https://www.youtube.com/watch?v=FL6mI_Br-mc)
