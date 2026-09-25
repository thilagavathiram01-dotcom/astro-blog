---
title: "How to Stream Gemini TTS in Android With Firebase"
description: "Learn how to stream Gemini text-to-speech from Firebase AI Logic in Android apps with SpeechConfig, PCM playback, and style prompts."
pubDate: 2026-09-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "gemini", "tutorials"]
noindex: false
---

System text-to-speech on Android is fine for a button label. It is a poor fit for a language drill, a recipe you cook with wet hands, or a two-speaker practice scene. Those features need a voice that can change pace, accent, and mood on demand.

Google now lets you call **Gemini text-to-speech models from the client** through [Firebase AI Logic](https://firebase.google.com/docs/ai-logic/generate-speech). You send the exact words to speak. The model returns a PCM audio stream you can queue for playback. No custom speech server is required.

This guide walks through a working Android path: pick a TTS model, set `SpeechConfig`, stream chunks, and write a prompt the model can actually perform. Pair it with the routing notes in our [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/) if you already ship on-device Gemini text features.

## What Gemini TTS is (and is not)

Firebase docs describe TTS as **controllable speech**. You provide the transcript. You can also steer style, accent, pace, and tone with natural language. Think of it as the opposite of transcription.

Use TTS when the product must recite a known script: a lesson, a recipe step, an article summary, a podcast take. Use the Gemini Live API when the user and the model need a two-way, unscripted voice session.

The September 9, 2026 Firebase blog post from product manager Ankita Saxena lists five client patterns teams already ship:

- Language drills that synthesize a partner line on the fly
- Hands-free reading of recipes and guides
- Spoken summaries for accessibility
- Story narration with changing character tone
- Multi-speaker practice scenes and short podcasts

One published example is **Finnish it**, a Flutter app that builds YKI exam practice. Founder Çağatay Ulusoy wrote that moving generation onto the device with Firebase AI Logic cut the middleman, dropped server cost for that feature to zero, and lowered latency.

Another is **Meal Planner & Grocery List** from Jojo Apps, which reads recipe steps in Belgian Dutch (`nl-BE`) with warmer pacing than the system voice.



![Close-up of studio microphone used for voice recording](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Pick a model and a voice

Firebase AI Logic documentation currently lists **`gemini-3.1-flash-tts-preview`** as the TTS model for the generate-speech guide. Always confirm the live model ID in the docs before you ship. Google announced **Gemini 3.8 Flash TTS** (`gemini-3.8-flash-tts`) and **Gemini 3.8 Flash-Lite TTS** (`gemini-3.8-flash-lite-tts`) on September 23, 2026 for the Gemini API and Google AI Studio. Treat the Firebase catalog as the source of truth for the Android SDK.

In `GenerationConfig` you must:

1. Set `responseModalities` to include `AUDIO`.
2. Set a required `SpeechConfig` voice name (docs use examples such as `Kore` and `Charon`).
3. Optionally set a language code such as `en-GB`.

Firebase notes that Gemini TTS models support 30 synthesized HD voices. Gemini 3.8 Flash TTS, on the Gemini API side, expands into a larger library and voice design tools. Stay on the voice names the Firebase SDK documents until your SDK version lists the newer IDs.

Audio from the official Kotlin sample is **raw PCM at 24 kHz, one channel, 16-bit**. Plan your `AudioTrack` around that format.

## Watch a walkthrough of the 3.8 voices

The clip below shows how Gemini 3.8 Flash TTS handles custom voices and multi-speaker direction in Google AI Studio. Use it to hear style control before you wire Android playback.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/wshiKvOAwP0"
    title="Gemini 3.8 TTS - Google's New AI Voice Is Scary Good!!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Set up Firebase AI Logic on Android

Follow the current [Firebase AI Logic get-started](https://firebase.google.com/docs/ai-logic) steps. At a minimum you need:

- A Firebase project with AI Logic enabled
- The Firebase Android SDK on a current BoM
- **App Check** planned before **2 November 2026**, when enforcement becomes required for Firebase AI Logic

Do not copy an old Gemini 2.5 model ID. Google states Gemini 2.5 models shut down in October 2026.

## Stream speech from Kotlin

The official Firebase blog sample is the contract you should match:

```kotlin
val config = generationConfig {
    responseModalities = listOf(ResponseModality.AUDIO)
    speechConfig = SpeechConfig(
        voice = Voice("Charon"),
        languageCode = "en-GB"
    )
}

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-3.1-flash-tts-preview",
        generationConfig = config
    )

val prompt = """Read the following transcript based on the audio profile and director's note.

# Audio Profile
A warm, engaging travel guide.

# Director's note
Style: Conversational. Pace: Relaxed but enthusiastic. Accent: British (GB).

## Transcript:
[greeting] Welcome to Florence, the cradle of the Renaissance.
"""

model.generateContentStream(prompt).collect { chunk ->
    val part = chunk.candidates.firstOrNull()?.content?.parts?.firstOrNull()
    if (part is InlineDataPart) {
        val pcmChunk = part.inlineData // 24kHz, mono, 16-bit PCM
        appendAudioChunk(pcmChunk)
    }
}
```

`generateContentStream` is the right call for playback. You can start the `AudioTrack` as soon as the first PCM chunk arrives instead of waiting for the full clip.

Write `appendAudioChunk` as a small buffer that writes to `AudioTrack` in `MODE_STREAM`. Keep generation on a coroutine dispatcher that is not the main thread. Stop the track when the flow completes or the user taps pause.



![Laptop and headphones on a desk during audio production](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)



## Write a prompt the model can perform

The Gemini Native Audio TTS models are language models. They decide *how* to say the line, not only *what* to say. Firebase groups the controls as:

- **Audio profile** — who is speaking
- **Scene and vibe** — where they are and the mood
- **Director notes** — whisper, pace, accent
- **Voice and language** — the `SpeechConfig` values

Gemini 3.x TTS docs also support inline **audio tags** such as `[whispers]` and `[laughs]`. The September 23 Google blog describes script cues like `<laughs>`, `<sigh>`, `<gasp>`, and backchannels such as `|mhm|` on the 3.8 models.

Keep the transcript explicit. TTS is not a chat model that should invent the paragraph. Put the words to speak in a labeled `Transcript` block so the model recites them.

For a cooking app, a tight prompt looks like this:

```text
# Audio profile
Calm home cook, mid-thirties, warm and unhurried.

# Director's note
Style: instructional. Pace: slow enough to follow with both hands busy.
Language: en-US.

## Transcript
Whisk the eggs for twenty seconds. Then fold in the cooled butter.
```

For two speakers, name each voice in the script and assign a distinct `Voice` when the SDK documents multi-speaker `SpeechConfig` for your model. Firebase describes multi-character conversations as a supported pattern. Confirm the multi-speaker object shape in the current generate-speech page before you code it.

## Playback and product details

- **Format.** 24 kHz mono 16-bit PCM. Convert only if you must mix with another sample rate.
- **Latency.** Stream. Do not wait for a file.
- **Errors.** Surface a fallback to Android `TextToSpeech` if the network or quota fails. Do not leave a silent button.
- **Privacy.** The transcript leaves the device on the cloud TTS path. Do not send secrets, medical notes, or other users' names without consent.
- **Cost.** Client calls still count against Gemini usage. Use Firebase spend caps if you already enable them for other AI Logic features.
- **Watermarking.** Google states Gemini Audio output is watermarked with SynthID. Do not strip or hide that mark if you redistribute clips.

Voice replication (clone from a 30-second sample) is a Gemini 3.8 API and AI Studio feature with regional limits. Google lists it as unavailable in Illinois, Texas, the EEA, the UK, Switzerland, and India through AI Studio. Do not promise clone-from-sample in an Android app until Firebase documents that API on the SDK you ship.

## Tips that keep the feature shippable

Test one voice and one language first. Then add a second language code only after you hear abbreviations and numbers.

Cache short, stable lines (onboarding, error copy) so you do not pay for the same greeting on every launch.

Keep style text short. A three-line director note beats a page of adjectives.

Log model ID, voice name, and language code next to each request. When a clip sounds wrong, you need those three fields.

If you already use hybrid inference for text drafts, keep TTS on the cloud TTS model. The on-device hybrid contract in Firebase docs is single-turn text (optional one image), not audio generation.

## Conclusion

Gemini TTS through Firebase AI Logic is a client call: `AUDIO` modality, a named voice, a transcript, and a PCM stream. That is enough to replace a canned voice file for lessons, recipes, and short narrated summaries.

Start with `gemini-3.1-flash-tts-preview` or whatever ID the Firebase generate-speech page lists today. Stream into `AudioTrack`. Write director notes the model can follow. Add App Check before 2 November 2026.

When Google lists Gemini 3.8 Flash TTS on the Firebase Android SDK, swap the model name. The prompt shape and the PCM loop stay the same.

## Sources

- [Text-to-speech generation (TTS) using the Gemini API](https://firebase.google.com/docs/ai-logic/generate-speech) — Firebase documentation
- [5 ways to use Gemini text-to-speech (TTS) in your apps with Firebase AI Logic](https://firebase.blog/posts/2026/09/ai-logic-text-to-speech/) — Firebase Blog (9 September 2026)
- [Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog (23 September 2026)
- [Generate audio using the Gemini API](https://firebase.google.com/docs/ai-logic/generate-audio) — Firebase documentation
