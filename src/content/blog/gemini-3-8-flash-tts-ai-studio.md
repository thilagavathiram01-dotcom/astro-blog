---
title: "How to Use Gemini 3.8 Flash TTS in AI Studio"
description: "Create custom voices and two-speaker scripts with Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API."
pubDate: 2026-09-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer", "ai"]
noindex: false
---

Google shipped two dedicated speech models on 23 September 2026: **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS**. They turn a written script into spoken audio with style tags, custom voices, and two-speaker scenes.

This guide follows the official Google blog post and the Gemini API speech-generation docs. You will design a voice in AI Studio, then call `gemini-3.8-flash-tts` from Python without stuffing stage directions into the spoken text.

## What the 3.8 TTS models actually do

TTS here is not the Live API. Live is for back-and-forth talk with camera and tools. TTS is for **exact recitation**: podcasts, audiobooks, product voiceovers, and scripted agent lines.

Google positions the two IDs like this:

- `gemini-3.8-flash-tts` — higher fidelity, acting nuance, dialects. Use it for narration and multi-speaker scenes.
- `gemini-3.8-flash-lite-tts` — same request shape, lower cost and latency. Use it for high-volume read-aloud and agent replies.

Flash TTS supports over 130 languages in the developer docs. Flash-Lite TTS supports over 100. The consumer blog lists “more than 100 languages and dialects” and a library of 2,000+ production-ready voices.

Flash TTS also leads Hume AI’s Voice Design Benchmark at **71.4** overall and **60.8** on accent modeling, according to Google’s launch post.



![Studio microphone and audio waveform on a desk](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)



## Where each model ships

From Google’s rollout list:

- **Developers:** Gemini API and [Google AI Studio generate-speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- **Flash TTS for everyone:** Gemini Notebook
- **Flash-Lite TTS for everyone:** Google Vids
- **Enterprises:** API access in Gemini Enterprise is listed as coming soon

Voice replication inside AI Studio is **not** available in Illinois, Texas, the EEA, the UK, Switzerland, and India. That restriction is a footnote on the official post. Do not assume you can clone a sample in those regions.

If you already use Live models for agents, keep them for conversation. Pair a TTS pass when you need a line spoken word-for-word. That split matches the [Gemini 3.8 Live AI Studio walkthrough](/blog/gemini-3-8-live-ai-studio/).

## Step 1: Open the AI Studio speech playground

1. Sign in at [aistudio.google.com/generate-speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts).
2. Select **gemini-3.8-flash-tts** for a first pass. Switch to Flash-Lite only after the voice and script sound right.
3. Choose a prebuilt voice such as **Kore**, or start a voice-design prompt.
4. Type the lines you want spoken. Keep that field as a transcript, not a director’s note.

Google built the playground like a vocal studio: design or replicate a voice, then drop it into a dual-speaker screenplay editor.

## Step 2: Design a voice with plain language

Flash TTS can invent a persona from a description. Official examples include a high-energy Melbourne DJ, a tinny monotone robot, and a Japanese dragon. Describe role, age range, accent, and room tone.

Good prompt shape:

> Warm adult narrator, slight Quebec French cadence, close-mic, unhurried, no laugh track.

Save the voice when the clip matches. Saved voices reduce drift across later chapters of the same project.

Voice remixing (take a library voice and nudge pitch or accent) is listed as **coming soon**. Do not depend on it in production this week.

## Step 3: Replicate only with consent

Replication needs about **30 seconds** of audio you have the right to use, plus a **verbal consent recording** from the voice owner that matches the reference speaker. Google also applies SynthID watermarking and C2PA credentials on generated clips.

Skip celebrity clips and coworker voicemail. Use a dedicated consent take recorded for this purpose.



![Laptop open to a code editor next to headphones](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)



## Step 4: Direct the line in metadata, not in the transcript

Gemini 3.8 TTS treats `text` as words to speak. If you write `Say cheerfully: Hello!` or `Speaker 1: Hello!`, the model may read those labels out loud.

Put style and speaker on `speech_metadata` instead. Official GenerateContent example:

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

Inline vocal events still belong in the transcript: `<laugh>`, `<sigh>`, `<gasp>`, `<short pause>`, and backchannels such as `|mhm|` or `|yeah|`. Google documents those tags for timing and reaction beats.

## Step 5: Stage two speakers as separate parts

For a two-person scene, configure both voices and send each turn as its own part with `speaker` and `style`.

```python
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

Confirm speaker names in metadata match the `speaker_voice_configs` list. Mismatched labels are a common source of swapped timbres.

The Interactions API uses the same idea with a `speech_metadata` annotation on each text block. Pick one API surface per project and stay on it.

## Step 6: Pick Flash vs Flash-Lite after a dry run

Run the same script on both models once. Keep Flash when you hear dialect, bursts, or long chapters going thin. Move batch jobs and agent replies to Flash-Lite when the take is already good.

Google says both models share the same schema, so the swap is a model-id change. Flash-Lite is also the path Google lists for Google Vids.

## Watch the official voice-design demo

Google DeepMind posted a one-minute walkthrough of prompt-built personas and consented replication.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits and safety notes

- Input limit on `gemini-3.8-flash-tts` is **8,192** tokens; output is capped at **16,384** tokens on the Gemini API.
- TTS models do not support Live API, function calling, or image generation. Do not mix those features on this endpoint.
- Every Gemini Audio clip is watermarked with **SynthID**. Treat that as a detection aid, not a license to impersonate people.
- Review the [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you ship customer-facing clones.

Partners already wiring the models include Agora, LiveKit, Pipecat, and Vercel’s AI Gateway TTS path. Use those SDKs if you already run a voice pipeline; the model IDs stay the same.

## Tips that save rerolls

Keep chapters under a few minutes per request while you learn the voice. Google claims long-form stability with low speaker drift, but shorter takes are easier to patch.

Name speakers in metadata only. Never prefix the spoken line with `Host:` unless you want that word on the track.

Store custom `voice_...` IDs in source control comments or a secrets-safe config. Recreating a prompt from memory will not match the saved persona.

For interactive talk instead of a locked script, stay on the Live family. TTS is the wrong tool when the user interrupts mid-sentence.

## Conclusion

Gemini 3.8 Flash TTS is the studio model. Flash-Lite TTS is the volume model. Both want a clean transcript, style on `speech_metadata`, and a voice ID you actually saved.

Open AI Studio, lock one persona, generate a two-turn scene, then copy the same payload into `generate_content`. That path matches Google’s own docs and avoids reading your stage directions aloud.

## Sources

- [Gemini 3.8 text-to-speech says hello — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Text-to-speech generation — Gemini API](https://ai.google.dev/gemini-api/docs/generate-content/speech-generation)
- [Gemini 3.8 Flash TTS model card page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- [AI Studio generate-speech playground](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [Create your own voices with Gemini 3.8 text-to-speech — Google DeepMind](https://www.youtube.com/watch?v=FL6mI_Br-mc)
