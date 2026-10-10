---
title: "Build Talking Android Apps with Gemini TTS Firebase"
description: "Learn how to add controllable Gemini text-to-speech to Android apps using Firebase AI Logic. Step-by-step setup, single and multi-speaker code, and production tips."
pubDate: 2026-10-10T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "gemini", "android", "tutorials", "ai-tools", "how-to"]
noindex: false
---

Your Android app can now speak with natural, controllable voices without building a custom backend audio pipeline. Firebase AI Logic lets you call Gemini text-to-speech models directly from the client. The model returns low-latency PCM audio streams that you play immediately.

This works for language practice, recipe narration, accessibility, storytelling, and multi-character dialogues. Official docs list the current model as gemini-3.1-flash-tts-preview. App Check becomes required for Firebase AI Logic on November 2, 2026.

## Why call Gemini TTS through Firebase AI Logic

Traditional TTS often needs a server to generate and host audio files. Gemini TTS via Firebase skips that. You send a text prompt from the app. The SDK streams audio chunks back. Latency drops and server costs for this feature go to zero for many use cases.

The model understands both the words and the delivery. You control style through natural language prompts, audio tags, and voice selection. More than 30 multilingual voices are available. The same setup works across Kotlin, Java, Swift, JavaScript, Dart, and Unity.

For hybrid on-device fallback when the network is unavailable, see the pattern in [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/). Pair client calls with spend controls from [Firebase spend caps for Gemini](/blog/firebase-spend-caps-gemini-functions/) so a loop cannot run up a bill.

![Android developer coding on a laptop](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)

## Set up Firebase AI Logic in your project

Create or open a Firebase project. Enable the Gemini API for the Gemini Developer API backend. Register your Android app and download google-services.json.

Add the Firebase AI Logic dependency in your app-level build.gradle.kts:

```kotlin
implementation("com.google.firebase:firebase-ai:latest")
```

Initialize in your Application or Activity:

```kotlin
val ai = Firebase.ai(backend = GenerativeBackend.googleAI())
```

Follow the official getting-started guide for full SDK setup, authentication, and App Check. Test prompts first in Google AI Studio before hard-coding them.

## Generate single-speaker speech

Configure GenerationConfig for audio output and a SpeechConfig. Choose a voice such as Kore or Charon and an optional language code.

```kotlin
val config = generationConfig {
    responseModalities = listOf(ResponseModality.AUDIO)
    speechConfig = SpeechConfig(
        voice = Voice("Kore"),
        languageCode = "en-US"
    )
}

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-3.1-flash-tts-preview",
        generationConfig = config
    )

val prompt = "Say cheerfully: Have a wonderful day!"
val response = model.generateContent(prompt)

val part = response.candidates.firstOrNull()?.content?.parts?.firstOrNull()
if (part is InlineDataPart) {
    val pcmData = part.inlineData  // 24 kHz, mono, 16-bit PCM
    playAudio(pcmData)
}
```

The response contains raw PCM bytes. You must implement playback with AudioTrack or a similar player. Do not assume a file URL.

## Steer style with director notes and audio tags

Structure longer prompts with an audio profile, scene, director notes, and the transcript. This gives the model clear instructions on persona, mood, accent, and pacing.

Example:

```
# Audio Profile
A warm, engaging travel guide.

# Director's note
Style: Conversational. Pace: Relaxed but enthusiastic. Accent: British.

## Transcript:
[greeting] Welcome to Florence. [description] Look at the architecture around us.
```

Gemini 3.x TTS models also accept inline audio tags such as [whispers] or [laughs]. Insert them directly in the text to control short emotional moments. Tags are not supported on older TTS models.

![Person using a smartphone for voice features](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80)

## Create multi-speaker dialogues

For podcasts or character conversations, use multiSpeakerVoiceConfig. Map speaker names in the prompt to different voices.

```kotlin
// Configure multi-speaker in SpeechConfig (check latest SDK for exact API)
speechConfig = SpeechConfig(
    multiSpeakerVoiceConfig = MultiSpeakerVoiceConfig(
        speakers = listOf(
            SpeakerVoice("Jack", Voice("Auris")),
            SpeakerVoice("Jill", Voice("Zephyr"))
        )
    )
)
```

Prefix lines in the prompt with the speaker name. The model switches voices automatically and returns one continuous audio stream. This removes the need to stitch separate files on the server.

## Stream audio for lower latency

Use generateContentStream instead of generateContent. Collect chunks and append them to an audio buffer as they arrive.

```kotlin
model.generateContentStream(prompt).collect { chunk ->
    val part = chunk.candidates.firstOrNull()?.content?.parts?.firstOrNull()
    if (part is InlineDataPart) {
        appendAudioChunk(part.inlineData)
    }
}
```

Start playback as soon as the first chunks arrive. Official examples show this pattern for both single- and multi-speaker output. Monitor token usage in the Firebase console so you can set appropriate spend caps.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/n3QwWz2Uof4"
    title="Build apps that talk with Firebase AI Logic text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Production tips

- Enable Firebase App Check before November 2, 2026. Enforcement becomes required.
- Never embed a Gemini API key in the client. Firebase AI Logic handles authentication.
- Surface a fallback to Android TextToSpeech if the network or quota fails.
- The transcript leaves the device. Do not send sensitive personal data without consent.
- Gemini audio output carries a SynthID watermark. Do not strip it if you redistribute clips.
- Test voices and prompts in Google AI Studio. Language detection works automatically if you omit the language code.
- Track costs. Client calls still count against Gemini usage.

Voice replication from a short sample is available in AI Studio and the Gemini API with regional limits. Firebase docs do not yet list the same clone endpoint on the client SDK, so do not promise it in production apps until the documentation confirms support.

## Conclusion

Gemini TTS through Firebase AI Logic turns any text prompt into natural speech inside your Android app. You get controllable voices, director-level style guidance, multi-speaker dialogues, and streaming PCM output without a custom audio backend. Start with the single-speaker example, add structure to your prompts, then expand to multi-speaker once the basic stream plays reliably.

## Sources

- Firebase AI Logic TTS documentation: https://firebase.google.com/docs/ai-logic/generate-speech
- Firebase Blog: 5 ways to use Gemini text-to-speech: https://firebase.blog/posts/2026/09/ai-logic-text-to-speech/
- Official Firebase YouTube demo: https://www.youtube.com/watch?v=n3QwWz2Uof4
