---
title: "How to Use ML Kit GenAI Speech Recognition on Android"
description: "Add on-device speech-to-text with ML Kit's GenAI Speech Recognition API: Basic mode on Android 12+, Advanced mode with Gemini Nano on Pixel 10 and Pixel 11, plus streaming from the mic."
pubDate: 2026-09-18T10:05:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1400&q=80"
---

Platform `SpeechRecognizer` is fine until you need a consistent SDK across Android 12 and newer, a streaming Kotlin Flow, or Gemini Nano quality on Pixel 10 and Pixel 11. ML Kit's **GenAI Speech Recognition API** covers that gap: one client, two modes, audio from the microphone or a raw PCM file, all processed on the device.

This walkthrough follows the official [Speech Recognition Android docs](https://developers.google.com/ml-kit/genai/speech-recognition/android) and the on-device itinerary example from the [Android Developers Blog](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html). Versions and device lists are those published as of mid-September 2026.

## What you get

- **Basic mode** — traditional on-device speech model. Available on most devices running **API 31** (Android 12) or higher.
- **Advanced mode** — Gemini Nano through AICore. Broader language coverage and higher quality. Official device list: **Pixel 10 and Pixel 11**, with more devices in development.
- Streaming partial transcripts that settle into a final string.
- Microphone capture, or a parcel file descriptor of raw 16-bit mono PCM at 16 kHz.

Audio never has to leave the phone. There is no per-call cloud bill. Advanced mode still depends on the **AICore** system app having finished setup.

![Smartphone on a desk next to wired earbuds used for a voice note](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

## Add the library

In the app module `build.gradle.kts` (or Groovy equivalent):

```kotlin
implementation("com.google.mlkit:genai-speech-recognition:1.0.0-alpha1")
```

The artifact is published as **1.0.0-alpha1**. Treat Advanced mode and the GenAI path as preview quality until Google ships a stable coordinate.

If you later classify or clean the transcript with the Prompt API, add that separately (`com.google.mlkit:genai-prompt`). Speech recognition does not require it.

## Create the client

```kotlin
val options = speechRecognizerOptions {
    locale = Locale.US
    preferredMode = SpeechRecognizerOptions.Mode.MODE_ADVANCED
}
val speechRecognizer = SpeechRecognition.getClient(options)
```

Set `preferredMode` to `MODE_ADVANCED` when you want Nano and the device supports it. Fall back to Basic if `checkStatus()` reports the feature unavailable.

Declare the usual microphone permission (`RECORD_AUDIO`) and request it at runtime before `AudioSource.fromMic()`.

## Check the model, then download if needed

AICore may still be fetching configs after a factory reset or an AICore reinstall. Always check status before the first session:

```kotlin
launch {
    when (val status = speechRecognizer.checkStatus()) {
        FeatureStatus.DOWNLOADABLE -> {
            speechRecognizer.download.collect { downloadStatus ->
                when (downloadStatus) {
                    is DownloadStatus.DownloadCompleted -> startMyRecognition(speechRecognizer)
                    is DownloadStatus.DownloadFailed -> { /* show retry */ }
                    is DownloadStatus.DownloadProgress -> { /* update a bar */ }
                }
            }
        }
        FeatureStatus.AVAILABLE -> startMyRecognition(speechRecognizer)
        else -> { /* DOWNLOADING or UNAVAILABLE */ }
    }
}
```

Official troubleshooting notes worth wiring into UI copy:

- **BINDING_FAILURE (601)** after a fresh device setup — update AICore, then reinstall your app.
- **FEATURE_NOT_FOUND (606)** — wait for AICore config download, or reboot. Unlocked bootloaders are not supported.
- Host resolution errors during download — keep the network up and retry.

## Start a streaming session

```kotlin
suspend fun startMyRecognition(recognizer: SpeechRecognizer) {
    val request = speechRecognizerRequest {
        audioSource = AudioSource.fromMic()
    }
    recognizer.startRecognition(request).collect { response ->
        // Handle partial then final SpeechRecognitionResponse values.
    }
}
```

Use `AudioSource.fromMic()` unless you already have a file. If you pass `AudioSource.fromPfd(parcelFileDescriptor)`, the bytes must be **headerless 16-bit PCM, mono, 16 kHz**. Anything else is rejected.

When the user stops talking or leaves the screen:

```kotlin
recognizer.stopRecognition()
recognizer.close()
```

Close on `ViewModel.onCleared()` or `Activity.onDestroy()` so AICore resources are released.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI" title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Pair transcription with a prompt (optional)

Google's travel-itinerary sample records a short memo, then sends the text through the ML Kit **Prompt API** so Gemini Nano can strip filler words and attach the note to a trip event. That is two clients: Speech Recognition for audio, Prompt for the rewrite. Keep them separate so you can run Basic-mode transcription on a mid-range phone and skip the prompt step when Nano is missing.

## Languages and devices (published list)

**Basic locales:** en-US, plus beta coverage for fr-FR, it-IT, de-DE, es-ES, hi-IN, ja-JP, pt-BR, tr-TR, pl-PL, cmn-Hans-CN, ko-KR, cmn-Hant-TW, ru-RU, and vi-VN.

**Advanced locales** with typically high accuracy include en-US, ko-KR, es-ES, fr-FR, de-DE, it-IT, pt-PT, cmn-Hans-CN, cmn-Hant-TW, ja-JP, th-TH, and ru-RU, with additional locales in beta (nl-NL, da-DK, sv-SE, pl-PL, hi-IN, vi-VN, id-ID, ar-SA, tr-TR).

**Devices:** Basic on API 31+. Advanced on Pixel 10 and Pixel 11 only, until the official table grows.

Do not advertise Advanced mode as "all Pixels" or "all Android 16 phones." The table is the source of truth.

![Person holding a phone close to their mouth while recording a voice memo outdoors](https://images.unsplash.com/photo-1523206489230-c0128ac695d6?auto=format&fit=crop&w=1200&q=80)

## When to use this instead of the platform API

Use ML Kit when you need:

- One dependency that targets API 31+ instead of juggling platform SpeechRecognizer quirks.
- A Flow-based stream that fits a coroutine ViewModel.
- Gemini Nano transcription on the two Pixel generations that currently ship Advanced mode.
- A path that stays on-device for voice notes, accessibility captions, or field tools with weak radios.

Stay on the platform API if you only need the system UI recognizer and already handle its callbacks.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Practical checklist

1. Add `genai-speech-recognition:1.0.0-alpha1`.
2. Request `RECORD_AUDIO`.
3. Build options with locale and preferred mode.
4. `checkStatus()` → download if `DOWNLOADABLE`.
5. `startRecognition` with `fromMic()` (or valid PCM).
6. Render partial text, commit on the final event.
7. `stopRecognition()` and `close()`.
8. On Pixel 10/11, try Advanced; everywhere else, ship Basic.

Sample code lives in the [ML Kit speech sample on GitHub](https://github.com/googlesamples/mlkit/tree/master/android/speech). For a fuller on-device stack (prompt, summarization, hybrid cloud), read the [on-device inference guide](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html) and the [Gemini Nano overview](https://developer.android.com/ai/gemini-nano).

## Conclusion

ML Kit GenAI Speech Recognition is the straightforward way to add private, offline-capable transcripts to an Android app in 2026. Start with Basic mode so the feature works on Android 12 and newer. Turn on Advanced mode only where Pixel 10 or Pixel 11 (and later listed devices) can run Gemini Nano through AICore. Keep the client lifecycle tight, handle model download in the UI, and treat the alpha coordinate as preview until Google marks it stable.

## Sources

- [GenAI Speech Recognition API (Android)](https://developers.google.com/ml-kit/genai/speech-recognition/android)
- [Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai)
- [Gemini Nano on Android](https://developer.android.com/ai/gemini-nano)
- [Build intelligent Android apps: On-device inference](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html)
- [ML Kit speech sample](https://github.com/googlesamples/mlkit/tree/master/android/speech)
