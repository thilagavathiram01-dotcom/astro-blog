---
title: "Parse Receipts On-Device with Gemini Nano 4"
description: "Step-by-step guide to extract structured receipt data on Android using Gemini Nano 4 and the ML Kit Prompt API. Privacy-first, offline, no cloud costs."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Receipt photos sit in your camera roll. You need the merchant, date, and total without typing them. Gemini Nano 4 running on-device through the ML Kit Prompt API does this locally. No data leaves the phone. No cloud inference bill. The same approach powers the expense tracker in Google’s Jetpacker sample.

This guide shows how to add multimodal structured extraction to an Android app. You check model availability, send an image plus a prompt, and receive typed fields. The steps follow the official ML Kit GenAI Prompt API documentation.

## Why on-device receipt parsing

Cloud models work, but receipts contain names, addresses, and amounts. On-device processing keeps that data private. Gemini Nano 4 supports multimodal input and structured output, so the model returns a clean object instead of free text you must parse yourself.

Supported devices include recent Pixels, select Samsung, Xiaomi, Honor, and others listed in the ML Kit device support table. The AICore Developer Preview program is required for the newest Nano 4 models. Check availability in the AICore app under Select a model.

![Android phone showing a receipt photo ready for on-device analysis](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites and dependencies

Target Android API 26 or higher. Add the Prompt API and schema dependencies:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-prompt:1.0.0-beta5")
    implementation("com.google.mlkit:genai-schema:1.0.0-alpha2")
}
```

Enable the AICore Developer Preview on a supported device. Open the AICore app and confirm Gemini Nano 4 Fast or Full appears. Then obtain a `GenerativeModel` client.

## Step 1: Check model status

Call `checkStatus()` before the first request. The status can be `AVAILABLE`, `DOWNLOADABLE`, or `UNAVAILABLE`.

```kotlin
val generativeModel = Generation.getClient()
val status = generativeModel.checkStatus()
when (status) {
    FeatureStatus.AVAILABLE -> { /* ready */ }
    FeatureStatus.DOWNLOADABLE -> { /* trigger download */ }
    FeatureStatus.UNAVAILABLE -> { /* fall back or show message */ }
}
```

Download the model when needed so the first user request does not wait. Close the client when the Activity or ViewModel is destroyed.

## Step 2: Send a multimodal request

Pass the receipt bitmap and a clear prompt. Request only the fields you need.

```kotlin
val bitmap = /* load receipt image */
val request = generateContentRequest(
    ImagePart(bitmap),
    TextPart("Extract merchant name, date, and total amount from this receipt. Return only the values.")
)
val response = generativeModel.generateContent(request)
```

Set optional generation parameters such as low temperature for more deterministic output. The response arrives as text or as a structured candidate depending on the request type.

## Step 3: Use structured output

Define a data class and generate a typed request. The schema library produces a response that matches your class.

```kotlin
@Generable
data class Receipt(
    val merchant: String,
    val date: String,
    val total: Double
)

val typedRequest = generateTypedContentRequest(baseRequest, Receipt::class)
val typedResponse = generativeModel.generateContent(typedRequest)
val receipt = typedResponse.candidates[0].response as Receipt
```

This removes manual JSON parsing. Validate the values in your app before saving them to a local database.

![Developer reviewing extracted receipt fields on a laptop next to a phone](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Step 4: Handle function calling for richer workflows

Gemini Nano 4 supports function calling. Declare tools the model can request, then execute them locally. Official docs show how to attach tool schemas and handle `FunctionCall` results in a single turn or multi-turn loop.

For an expense tracker you might expose a local `saveExpense` function. The model decides when to call it after extracting the receipt data. Target the preview fast model:

```kotlin
val config = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FAST
    }
}
val model = Generation.getClient(config)
```

## Tips for production

- Test on the exact devices you support. Nano version and RAM affect latency and availability.
- Prompt for the exact fields and format. Short, specific instructions reduce errors.
- Show a loading state while the model downloads or runs.
- Keep a simple manual entry fallback for unsupported devices.
- Combine with the Speech Recognition API if users dictate notes about the receipt.

For broader agentic loops that auto-execute tools and manage history, look at the ML Kit Agent API (alpha). It builds on the same Prompt API foundation. See our guide to [building on-device agents with the ML Kit Agentic API](/blog/build-on-device-agents-ml-kit-agentic-api/).

## Conclusion

Gemini Nano 4 plus the ML Kit Prompt API lets you turn a receipt photo into structured data entirely on-device. Add the dependency, confirm model status, send the image with a focused prompt, and read typed results. Users get instant extraction without waiting for a network or worrying about where their data goes.

Start with the official ML Kit GenAI samples and the Jetpacker app on GitHub for working code. Adjust the schema to your expense categories and ship a private, offline feature.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PoqJh_60Wrw"
    title="ML Kit's GenAI Prompt API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [ML Kit GenAI Prompt API overview](https://developers.google.com/ml-kit/genai)
- [Send custom requests with Gemini Nano](https://developers.google.com/ml-kit/genai/prompt/android)
- [Function calling with Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/function-calling)
- [Build intelligent Android apps: On-device inference (Jetpacker)](https://developer.android.com/blog/posts/build-intelligent-android-apps-on-device-inference)
- [Android Developers: ML Kit GenAI Prompt API video](https://www.youtube.com/watch?v=PoqJh_60Wrw)
