---
title: "How to Use ML Kit Prompt API for Custom On-Device AI"
description: "Step-by-step guide to integrate ML Kit Prompt API for custom Gemini Nano prompts on Android. Private, offline generative tasks."
pubDate: 2026-11-27T20:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "gemini", "developer"]
noindex: false
---

Android developers can now send custom natural language requests directly to Gemini Nano on supported devices. ML Kit’s Prompt API (com.google.mlkit:genai-prompt) gives you that access without managing model downloads yourself.

This guide shows how to add the dependency, check feature status, generate text or multimodal content, and handle common edge cases. Everything runs on-device through AICore, so user data stays private and works offline once the model is ready.

## Why Use the Prompt API

Task-specific ML Kit GenAI APIs cover summarization, rewriting, proofreading, and image description. Use those when the use case matches exactly.

Choose the Prompt API when you need flexibility. Classify reviews by custom criteria. Extract structured details from notes. Generate short replies in a specific tone. Combine text and images for classification or captioning.

Gemini Nano handles the inference. Your app supplies the prompt and optional generation parameters such as temperature and maxOutputTokens. Responses stay on the device unless you explicitly send them elsewhere.

For agentic multi-turn workflows with automatic tool calling, see the Agentic API. This article focuses on direct model access.

## Prerequisites

Your project needs:

- Minimum SDK 26
- Android 14 or higher for full AICore support on most devices
- A device that supports Gemini Nano (Pixel 9 series and newer, many 2025–2026 flagships)

Check the official supported devices list on the ML Kit GenAI overview page. The model downloads through AICore the first time it is needed.

Add the dependency in your module-level build.gradle:

```
implementation("com.google.mlkit:genai-prompt:1.0.0-beta5")
```

Sync the project. For structured output you will also need the schema dependency and KSP configuration, but basic text generation does not require them.

## Step-by-Step Integration

### 1. Obtain the GenerativeModel

Create the client once, typically in a ViewModel or repository:

```kotlin
val generativeModel = Generation.getClient()
```

For Java:

```java
GenerativeModelFutures generativeModelFutures = GenerativeModelFutures.from(Generation.INSTANCE.getClient());
```

### 2. Check Status and Download if Needed

Gemini Nano may not be present yet. Check the status before the first request:

```kotlin
val status = generativeModel.checkStatus()
when (status) {
    FeatureStatus.AVAILABLE -> { /* ready */ }
    FeatureStatus.DOWNLOADABLE -> {
        generativeModel.download().collect { downloadStatus ->
            when (downloadStatus) {
                is DownloadStatus.DownloadProgress -> { /* update UI */ }
                DownloadStatus.DownloadCompleted -> { /* model ready */ }
                is DownloadStatus.DownloadFailed -> { /* handle error */ }
                else -> {}
            }
        }
    }
    FeatureStatus.UNAVAILABLE -> { /* not supported on this device */ }
    else -> {}
}
```

Call this early, for example when the user opens a feature that needs generation. Warm up with `generativeModel.warmup()` if you want the first inference to be faster.

### 3. Generate Text-Only Content

The simplest call is:

```kotlin
val response = generativeModel.generateContent(
    "Write a short product description for a wireless charger."
)
val text = response.candidates.firstOrNull()?.text
```

Add generation parameters for more control:

```kotlin
val response = generativeModel.generateContent(
    generateContentRequest(
        TextPart("Classify this review as positive, neutral, or negative: The battery lasts all day.")
    ) {
        temperature = 0.2f
        maxOutputTokens = 20
    }
)
```

Lower temperature produces more deterministic results. Keep maxOutputTokens modest for on-device use.

### 4. Multimodal Requests

Pass one or more bitmaps together with text:

```kotlin
val response = generativeModel.generateContent(
    generateContentRequest(
        ImagePart(bitmap),
        TextPart("Describe the main object and its color.")
    ) {
        temperature = 0.3f
        maxOutputTokens = 50
    }
)
```

You can include up to 10 images. Resize large bitmaps first to stay within memory and context limits.

### 5. Streaming Responses

For longer outputs, stream chunks:

```kotlin
var fullText = ""
generativeModel.generateContentStream("Summarize the key points of this meeting note...").collect { chunk ->
    val newText = chunk.candidates.firstOrNull()?.text ?: ""
    fullText += newText
    // update UI with partial result
}
```

Streaming keeps the UI responsive.

## Practical Tips

- Keep prompts under roughly 3,000 English words. The context window is limited.
- Prefer short outputs. Very long generations consume more battery and time.
- Always handle FeatureStatus.UNAVAILABLE and download failures. Show a clear message if the device is not supported.
- Close the GenerativeModel when the owning component is destroyed to release resources.
- Test on a real device that has Gemini Nano. Emulators do not run the full AICore stack.
- For structured results (JSON objects), switch to the Structured Output API with a schema. It reduces parsing errors compared with free-form text.

Common AICore setup issues appear after a factory reset or when the AICore app is cleared. Updating AICore from the Play Store and retrying usually resolves binding or feature-not-found errors.

![Android phone showing code on screen next to laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Example Use Cases

- **Review classification**: Prompt the model to return only “positive”, “neutral”, or “negative”.
- **Image tagging**: Send a photo and ask for category labels such as “food”, “travel”, or “product”.
- **Short translations**: Translate a delivery note between driver and customer without leaving the device.
- **Draft generation**: Create a brief social post from a product photo and a short instruction.

If you already extract data from business cards with Gemini Nano, the same client pattern applies. See our guide on [extracting business card data with Gemini Nano 4 and ML Kit](/blog/extract-business-card-data-gemini-nano-4-ml-kit/).

## Watch the Official Overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PoqJh_60Wrw"
    title="ML Kit's GenAI Prompt API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Developer workspace with smartphone and code](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Conclusion

The ML Kit Prompt API lets you run custom Gemini Nano prompts entirely on-device. Add the dependency, check status, download if needed, and call generateContent with text or images. Control randomness and length with optional parameters.

Start with a single focused prompt. Measure latency and quality on target devices. Expand to multimodal or streaming once the basic flow is solid. For more complex tool-using agents, move to the Agentic API later.

Official documentation stays current: check the ML Kit GenAI Prompt API pages for the latest dependency versions and device lists.

## Sources

- [Send custom requests with Gemini Nano direct model access](https://developers.google.com/ml-kit/genai/prompt/android) — Google for Developers
- [Get started with direct model access](https://developers.google.com/ml-kit/genai/prompt/android/get-started) — Google for Developers
- [Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai) — Google for Developers
- [ML Kit’s Prompt API: Unlock Custom On-Device Gemini Nano Experiences](https://developer.android.com/blog/posts/ml-kit-s-prompt-api-unlock-custom-on-device-gemini-nano-experiences) — Android Developers Blog
- [ML Kit's GenAI Prompt API](https://www.youtube.com/watch?v=PoqJh_60Wrw) — Android Developers on YouTube
