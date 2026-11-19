---
title: "Add On-Device Speech Recognition with ML Kit GenAI"
description: "Learn how to add on-device speech recognition to Android apps using the ML Kit GenAI Speech Recognition API for private, offline transcription."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "how-to", "gemini"]
noindex: false
---

Android developers can now add accurate speech-to-text that runs entirely on the device. The ML Kit GenAI Speech Recognition API uses Gemini Nano for advanced mode or a traditional model for broader device support. Transcription stays local, so audio never leaves the phone.

This guide shows how to integrate the API, check model status, start live recognition from the microphone, and handle results. You need Android API level 26 or higher and a device that supports the chosen mode.

## Why choose on-device speech recognition

Cloud speech services add latency and require an internet connection. They also send audio to external servers. The ML Kit approach processes everything locally through AICore. Advanced mode leverages Gemini Nano for better quality and wider language coverage without separate language packs. Basic mode works on any device running API level 31 or higher.

![Android phone showing AI apps](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Set up the dependency and client

Add the library to your app-level `build.gradle.kts`:

```kotlin
implementation("com.google.mlkit:genai-speech-recognition:1.0.0-alpha2")
```

Create a `SpeechRecognizer` with options. Prefer Advanced mode when the device supports it:

```kotlin
val options = speechRecognizerOptions {
    locale = Locale.US
    preferredMode = SpeechRecognizerOptions.Mode.MODE_ADVANCED
}
val speechRecognizer = SpeechRecognition.getClient(options)
```

Request the `RECORD_AUDIO` permission before using the microphone. Check status before starting recognition. If the model is downloadable, call `download()` and collect the progress flow.

```kotlin
val status = speechRecognizer.checkStatus()
if (status == FeatureStatus.DOWNLOADABLE) {
    speechRecognizer.download().collect { downloadStatus ->
        when (downloadStatus) {
            is DownloadStatus.DownloadCompleted -> startRecognition(speechRecognizer)
            is DownloadStatus.DownloadFailed -> { /* handle error */ }
            is DownloadStatus.DownloadProgress -> { /* update UI */ }
        }
    }
} else if (status == FeatureStatus.AVAILABLE) {
    startRecognition(speechRecognizer)
}
```

## Start live recognition from the microphone

Build a request with `AudioSource.fromMic()`. Collect the response flow to receive partial and final text:

```kotlin
suspend fun startRecognition(recognizer: SpeechRecognizer) {
    val request = speechRecognizerRequest {
        audioSource = AudioSource.fromMic()
    }
    recognizer.startRecognition(request).collect { response ->
        when (response) {
            is SpeechRecognizerResponse.PartialTextResponse -> {
                // Update UI with interim text
            }
            is SpeechRecognizerResponse.FinalTextResponse -> {
                // Use the final transcription
                val text = response.text
            }
            is SpeechRecognizerResponse.ErrorResponse -> {
                // Handle error
            }
        }
    }
}
```

Call `stopRecognition()` and `close()` when the session ends to free resources. For pre-recorded files, use `AudioSource.fromFile()` or `fromUri()`. These run in one-shot mode and decode common formats on-device.

![Developer working with smartphone and code](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Add word timing for captions

Enable word-level timestamps to highlight words as they are spoken or build live captions:

```kotlin
val request = speechRecognizerRequest {
    audioSource = AudioSource.fromMic()
    recognitionOptions { enableWordTiming = true }
}
recognizer.startRecognition(request).collect { response ->
    if (response is SpeechRecognizerResponse.FinalTextResponse) {
        response.wordTimings.forEach { timing ->
            val word = timing.text
            val startMs = timing.timestampMs
            // Sync UI animation or caption highlight
        }
    }
}
```

Timestamps are offsets from the start of the recognition session. This works for streaming inputs.

## Supported modes and devices

Basic mode supports a smaller set of locales and runs on API 31+. Advanced mode supports more languages, including Arabic, Chinese, Japanese, and others, and requires devices with Gemini Nano such as Pixel 10 and 11 series or selected Samsung, Qualcomm, MediaTek, and Exynos chipsets. Check the official list before targeting a specific device.

Audio for custom pipelines must be raw 16-bit PCM, mono, at 16 kHz. The microphone source handles format conversion automatically.

## Tips for production use

Warm up the recognizer before the first user request to reduce initial latency. Handle AICore initialization delays that can occur right after a factory reset. Show clear feedback while the model downloads. Test both Advanced and Basic modes because not every device has Gemini Nano. Combine the transcription with the Prompt API or Agent API for follow-up actions such as summarizing notes or triggering tools. See our guide on [building on-device agents with the ML Kit Agentic API](/blog/build-on-device-agents-ml-kit-agentic-api-gemini-nano-4/) for multi-step workflows.

## Conclusion

The ML Kit GenAI Speech Recognition API gives Android apps private, offline speech-to-text with minimal code. Start with the microphone source and Advanced mode on supported devices, then expand to file transcription or word-timed captions. The same AICore foundation powers other GenAI features, so the model is often already present.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [GenAI Speech Recognition API](https://developers.google.com/ml-kit/genai/speech-recognition/android)
- [Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai)
- [ML Kit Speech sample on GitHub](https://github.com/googlesamples/mlkit/tree/master/android/speech)
- [On-Device Speech Recognition and Text-to-Speech in Google AI Edge Gallery](https://developers.googleblog.com/on-device-speech-recognition-and-text-to-speech-in-google-ai-edge-gallery/)
