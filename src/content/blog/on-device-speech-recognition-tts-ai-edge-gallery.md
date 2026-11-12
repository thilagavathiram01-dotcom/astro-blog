---
title: "On-Device Speech Recognition and TTS in AI Edge Gallery"
description: "Add offline speech recognition and text-to-speech to Android apps with ML Kit GenAI APIs and LiteRT models from Google AI Edge Gallery."
pubDate: 2026-11-12T12:00:00
heroImage: "https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "how-to", "gemini", "google"]
noindex: false
---

Google added on-device Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) to AI Edge Gallery on November 10, 2026. Developers can now build fully offline voice features that pair with Gemini Nano or Gemma 4 without adding model size to the APK.

Voice interaction works even without a network. ML Kit manages system speech models on Android through AICore. Cross-platform apps use MediaPipe Tasks and LiteRT .litertlm bundles. Both paths deliver streaming transcription and low-latency synthesis.

![Person holding a smartphone showing AI apps](https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=800&q=80)

## Why On-Device Speech Matters

Cloud speech APIs add latency, cost, and privacy risk. On-device models keep audio local. Google reports ML Kit ASR reaches 8.0% to 9.0% Word Error Rate on FLEURS across 100+ languages. It transcribes at 10x real-time speed—about 300 ms for three seconds of speech. TTS starts speaking in roughly 100 ms and generates 24 kHz audio at up to 50x real-time.

These numbers come from Google’s official announcement. Independent verification will follow as developers test the APIs. The XR Language Teacher demo shows the full pipeline: camera frame plus spoken question processed locally, then bilingual spoken reply.

## ML Kit GenAI Speech APIs on Android

ML Kit GenAI Speech Recognition and Text-to-Speech APIs ship with zero APK size impact. Models update in the background through AICore. Hardware acceleration uses NPU or TPU when available.

Add the dependency:

```kotlin
implementation("com.google.mlkit:genai-speech:16.0.0-beta01")
```

Initialize the client and stream audio:

```kotlin
val options = SpeechRecognizerOptions.Builder()
    .setLocale(Locale.US)
    .build()
val recognizer = SpeechRecognition.getClient(options)

recognizer.startListening(audioSource)
    .collect { result ->
        when (result) {
            is PartialResult -> updateUI(result.text)
            is FinalResult -> process(result.text)
        }
    }
```

The API accepts microphone input or external streams such as smart glasses. Pair the transcript with Gemini Nano for responses, then feed text to the TTS API. TTS supports eight expressive voices and 21 locales. It synthesizes a 27-second paragraph in about 500 ms while using over 50% less power than traditional autoregressive models.

For agentic workflows that combine speech with tools, see our guide on [building on-device agents with Gemini Nano and ML Kit](/blog/build-on-device-agents-gemini-nano-ml-kit/).

## Cross-Platform Path with MediaPipe and LiteRT

Apps targeting iOS, web, or desktop bundle .litertlm files. These packages contain the encoder, decoder, tokenizer, and vocoder in one file. Ready models include:

- Parakeet-TDT-0.6B-v3 for multilingual ASR
- PocketTTS 100M and Kokoro-82M for multilingual TTS
- Phonon 31M for ultra-lightweight English TTS

MediaPipe Tasks provide high-level ASR and TTS APIs that handle Voice Activity Detection, framing, and decoding. LiteRT powers both ML Kit and MediaPipe under the hood. Developers who need custom graphs can use LiteRT directly and pull additional models from the Hugging Face LiteRT community.

![Woman holding a phone to her ear](https://images.unsplash.com/photo-1712826805987-582ea0eeeb14?auto=format&fit=crop&w=800&q=80)

## XR Language Teacher Showcase

The XR Language Teacher demo runs vision, language, and speech models locally. Point the camera at a menu or sign, ask a question aloud, and receive a spoken explanation in your language plus correct pronunciation of target phrases. Structured output tags foreign phrases so TTS can switch voices mid-sentence. The same pipeline extends to paired smart glasses.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Li3fV7uA8Ww"
    title="XR Language Teacher in Google AI Edge Gallery"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

AI Chat inside the Gallery app also gained voice input and sentence-level TTS playback with live highlighting. The open-source reference code shows how to strip Markdown and skip code blocks before synthesis so speech does not contend with token generation.

## Integration Tips

1. Prefer ML Kit on Android flagships for zero-download models and automatic updates.
2. Download language packs only for languages you need when using LiteRT bundles.
3. Stream partial results to keep the UI responsive.
4. Schedule TTS at sentence boundaries to avoid memory pressure during LLM decoding.
5. Test on AICore-enabled devices; fallback CPU paths exist but are slower.

Benchmark your pipeline on the Developer Device Platform if you need data across many hardware configurations.

## Conclusion

On-device ASR and TTS in AI Edge Gallery remove the last major barrier to fully offline voice apps. ML Kit delivers production-grade quality on Android with no APK bloat. LiteRT and MediaPipe extend the same capabilities to other platforms with open-weight models. Download the latest Gallery app, try the XR Language Teacher, and adapt the reference code for your own voice features.

**Sources**

- Google Developers Blog: On-Device Speech Recognition and Text-to-Speech in Google AI Edge Gallery (November 10, 2026)
- ML Kit GenAI documentation
- Google AI Edge Gallery GitHub repository
