---
title: "On-Device Business Card Parsing with Gemini Nano 4"
description: "Extract name, email, phone and company from business card images on-device using ML Kit Prompt API, Gemini Nano 4 and structured output."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini"]
noindex: false
---

Business cards still get exchanged at conferences and meetings. Scanning one and manually typing the details wastes time. With Gemini Nano 4 and ML Kit's Prompt API you can extract structured contact data directly on the device from a photo.

This keeps sensitive information private because nothing leaves the phone. The process uses multimodal input and the Structured Output API so you receive typed Kotlin objects instead of free-form text.

## Prerequisites

Your project needs Android 14 or higher. The device must support Gemini Nano 4 through the AICore Developer Preview. Add the dependency:

```
implementation("com.google.mlkit:genai-prompt:1.0.0-beta5")
```

For structured output you also need the schema compiler and KSP. Check the official ML Kit docs for the exact setup.

![Developer workspace with smartphone and laptop](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Define the output structure

Create a data class annotated with @Generable. Use @Guide to describe each field and set constraints.

```kotlin
import com.google.mlkit.genai.schema.annotations.Generable
import com.google.mlkit.genai.schema.annotations.Guide

@Generable
data class BusinessCard(
    @Guide(description = "Full name of the person")
    val name: String,
    @Guide(description = "Job title or role")
    val title: String? = null,
    @Guide(description = "Company or organization name")
    val company: String? = null,
    @Guide(description = "Email address")
    val email: String? = null,
    @Guide(description = "Phone number including country code if present")
    val phone: String? = null,
    @Guide(description = "Website URL if visible")
    val website: String? = null
)
```

The annotations guide the model and enable type-safe deserialization.

## Configure the model

Target Gemini Nano 4 with the PREVIEW stage and FAST preference for function calling and structured output support.

```kotlin
val config = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FAST
    }
}
val generativeModel = Generation.getClient(config)
```

Always verify model availability before calling generateContent. Use the AICore status check documented in the Prompt API guides.

## Capture and process the image

Obtain a Bitmap from the camera or gallery. Build a multimodal request.

```kotlin
val prompt = "Extract all contact details from this business card image. Return only the structured data."
val request = generateContentRequest(
    ImagePart(bitmap),
    TextPart(prompt)
)

val typedRequest = generateTypedContentRequest(
    generateContentRequest = request,
    outputClass = BusinessCard::class
)

val response = generativeModel.generateContent(typedRequest)
val card = response.candidates.firstOrNull()?.asBusinessCard()
```

Handle null fields for missing information. Present the result in a confirmation UI so the user can edit before saving to contacts.

![Hand holding smartphone showing code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Tips for better results

- Capture the card in good lighting with minimal glare.
- Crop tightly around the card before sending the image.
- Set temperature low (0.1–0.2) for deterministic extraction.
- Add a system instruction that emphasizes accuracy over guessing.
- Fall back to cloud models via Firebase AI Logic hybrid inference on unsupported devices. See our guide on [hybrid AI inference](/blog/hybrid-ai-inference-firebase-gemini-nano-android/).

Test with cards that have varied layouts, logos, and non-English text. Gemini Nano 4 supports multiple languages.

## Video walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

On-device business card parsing removes friction from networking. The combination of multimodal input and structured output delivers reliable typed data while preserving privacy. Start with the Prompt API sample and adapt the data class for your contact schema.

## Sources

- [ML Kit Prompt API structured output](https://developers.google.com/ml-kit/genai/prompt/android/structured-output)
- [Get started with direct model access](https://developers.google.com/ml-kit/genai/prompt/android/get-started)
- [Android Developers Blog: On-device inference](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html)
