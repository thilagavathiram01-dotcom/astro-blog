---
title: "How to Add On-Device Image Description with ML Kit"
description: "Step-by-step guide to implementing ML Kit GenAI Image Description API with Gemini Nano on Android for private, offline image captions."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials"]
noindex: false
---

Users expect smart photo features that work offline and keep data private. ML Kit's GenAI Image Description API, powered by Gemini Nano, generates short captions for images entirely on-device.

This guide walks through setup, status checks, a basic call, and production tips. It builds on the same AICore foundation used by the [Prompt API](/blog/ml-kit-prompt-api-gemini-nano-4/).

![Developer reviewing Android code on a laptop](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## What the Image Description API provides

The API returns a concise text description of a given image. Typical uses include accessibility alt text, auto-tagging photos in a gallery, or generating draft captions before upload.

Gemini Nano runs inside Android's AICore system service. The model stays local, so inference works without a network connection and user photos never leave the device. Supported devices include recent Pixel and Galaxy flagships that ship with nano-v3 or nano-v4.

Limitations match other GenAI APIs: input size is constrained, output is short, and AICore applies a per-app quota. Check the official overview for the current list of supported devices.

## Add the dependency

In your app-level `build.gradle.kts` add:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta4")
```

The Image Description path uses the same Prompt API client under the hood. Set `minSdk` to 26 or higher. If you also need structured output, add the schema compiler and KSP as documented separately.

Sync the project. No extra Google Cloud project or API key is required for the on-device path.

## Check Gemini Nano availability

Before showing any caption UI, verify the feature status. Create a client and call `checkStatus()`.

```kotlin
val generativeModel = Generation.getClient()
val status = generativeModel.checkStatus()

when (status) {
    FeatureStatus.AVAILABLE -> {
        // Ready to generate
    }
    FeatureStatus.DOWNLOADABLE -> {
        // Trigger download and collect progress
        generativeModel.download().collect { downloadStatus ->
            // Handle DownloadStarted, DownloadProgress, DownloadCompleted, DownloadFailed
        }
    }
    FeatureStatus.DOWNLOADING -> {
        // Already in progress
    }
    FeatureStatus.UNAVAILABLE -> {
        // Device not supported or configuration not yet fetched
    }
}
```

Handle the common AICore setup errors listed in the Prompt API documentation (connection failures right after device setup, preparation errors while configurations download, etc.). Restart the device or wait a few minutes on a network connection if you see feature-not-found messages.

## Generate a description

Pass a `Bitmap` (or multiple) together with an optional text instruction. The Image Description use case works best with a clear prompt that asks for a short caption.

```kotlin
suspend fun describeImage(bitmap: Bitmap): String {
    val response = generativeModel.generateContent(
        generateContentRequest(
            ImagePart(bitmap),
            TextPart("Generate a short, accurate description of this image for accessibility. Keep it under 20 words.")
        ) {
            temperature = 0.2f
            maxOutputTokens = 50
        }
    )
    return response.candidates.firstOrNull()?.text ?: ""
}
```

You can also stream the result with `generateContentStream` if you want partial text as it arrives. For a simple caption, the non-streaming call is usually enough.

Warm up the model with `warmup()` on first launch if you need the lowest possible latency for the initial request.

![Smartphone showing a photo with generated caption overlay](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Tips for production use

- Resize or compress large bitmaps before sending them. Extremely high-resolution images increase latency and memory use.
- Cache captions locally if the same photo is viewed repeatedly.
- Provide a clear fallback UI when status is `UNAVAILABLE` or the quota is exhausted.
- Combine with the Prompt API for follow-up questions about the same image if the user wants more detail.
- Test on both nano-v3 and nano-v4 devices; quality and speed differ slightly.

AICore enforces an inference quota per app. Monitor usage during development and design your feature so it degrades gracefully.

## Watch the official overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The ML Kit GenAI Image Description API gives you a high-level way to add private, offline captions without managing model downloads yourself. Start with the status check, keep prompts short and specific, and handle the download and quota cases. Once the model is available, a few lines of Kotlin produce usable descriptions for gallery, accessibility, or content-creation features.

For more control over the output format or longer conversations, move to the Prompt API and structured output patterns covered in other posts on this site.

## Sources

- [Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai) — Google for Developers
- [Get started with Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/get-started) — Google for Developers
- [AI on Android](https://developer.android.com/ai) — Android Developers
- [Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM](https://www.youtube.com/watch?v=Z7zx_sTbFPI) — Android Developers (YouTube)
