---
title: "Use Gemini Nano 4 With ML Kit Prompt API on Android"
description: "How to run Gemini Nano 4 on-device with ML Kit Prompt API: setup, structured output, receipts, and itinerary summaries without a cloud bill."
pubDate: 2026-09-22T10:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Cloud models are easy to call and expensive to scale. On-device models are the opposite: they stay on the phone, work offline, and cost nothing per inference once the model is installed.

Google’s production path for that work in 2026 is **Gemini Nano 4** through **ML Kit’s GenAI Prompt API**. Nano 4 is built on the Gemma 4 architecture and is the model Google now documents as running on more than 140 million devices. The Prompt API is how you send custom text and image prompts to it from an Android app.

This guide walks through when to use Prompt API, how to target Nano 4 preview models, and how Google’s own Jetpacker sample uses it for trip summaries, receipt parsing, and voice notes.

## What Prompt API is for

ML Kit already ships task APIs for summarization, proofreading, rewrite, and image description. Use those when your job matches the template.

Use Prompt API when you need a custom instruction: “turn this itinerary into a vibe, packing tips, and three phrases,” or “read this receipt and return a typed object.” Google opened that surface so partners such as Kakao Mobility could run parking and address flows locally instead of sending photos to a server.

Official reasons Google lists for staying on-device:

- The prompt and output never leave the phone.
- The feature still works with no network.
- You do not pay a per-call inference bill.

Do not use Prompt API as a substitute for a grounded cloud model. Maps lookups, live web search, and multi-turn chat still belong on a cloud or hybrid path such as [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/).



![Developer testing an Android app on a phone next to a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)



## What you need before you write code

Confirm three things before you add the dependency.

**1. A supported device path.** Prompt API talks to AICore. Preview Gemma 4 / Nano 4 models run on AICore-enabled hardware from Google, MediaTek, and Qualcomm. Other phones may fall back to a CPU path that is not representative of shipping performance. Google also points testers at the AI Edge Gallery app when a phone is not AICore-enabled.

**2. The right artifact.** Google’s July 2026 Jetpacker post uses:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta3")
```

Structured output also needs the schema compiler:

```kotlin
ksp("com.google.mlkit:genai-schema-compiler:1.0.0-alpha1")
```

Pin versions from current ML Kit GenAI docs. Beta numbers move.

**3. A place to iterate the prompt.** After you opt into the [AICore Developer Preview](https://android-developers.googleblog.com/2026/04/AI-Core-Developer-Preview.html), you can download preview models on a test device and try prompts in the AICore app. Google’s Jetpacker team cut one summary from 13 seconds to under 2 seconds by shortening the output, not by changing the model.

## Pick FAST or FULL

Prompt API lets you choose a preview model by preference, not by a raw parameter count.

```kotlin
val previewFastConfig = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FAST
    }
}

val geminiNano2BPreviewModel = Generation.getClient(previewFastConfig)
```

`ModelPreference.FAST` maps to the smaller E2B-class preview. Use it for short text jobs where latency matters.

`ModelPreference.FULL` maps to the larger E4B-class preview. Google used FULL for receipt parsing because the task needs image understanding and a structured object, not a one-line caption.

Gemini Nano 4 is documented as up to 4x faster than the previous Nano generation and as using up to 60% less battery. Treat those as Google’s published figures for the optimized on-device stack, not as a guarantee on every SKU.

## Feature 1: Summarize a trip on the device

Jetpacker’s “Get ready for your trip” block is the simplest Prompt API call. The itinerary is already on the phone. The output is short. Cloud cost would scale with every traveler.

```kotlin
val tripItinerary = /* your itinerary text */

val summary = geminiNano2BPreviewModel.generateContent(
    "Given this trip itinerary: $tripItinerary, generate the following: " +
    "overall vibe, tips on how to prepare for this trip, and common short " +
    "phrases to learn for the trip."
)
```

Keep the instruction tight. Ask for three named sections, not “write a travel guide.” Long outputs burn tokens and time on a phone.

Test the same prompt in AICore before you ship the string. If the model writes essays, add an explicit length cap in the prompt.

## Feature 2: Parse a receipt into a Kotlin type

Receipts often include card fragments and addresses. That is the privacy case for Nano, not a quality case.

Google’s Structured Output API lets you declare the object you want and attach `@Guide` notes the model can follow.

```kotlin
@Generable("Information extracted from an expense receipt")
data class ParsedReceipt(
    @Guide("Generated title for the expense less than 6 words. Based on restaurant or activity name.")
    val title: String,
    @Guide("Total amount of the expense. Look for values at the bottom and words like total or balance due.")
    val amount: Double,
    @Guide("Type of expense", enumValues = ["travel", "food", "shopping", "entertainment", "other"])
    val category: String,
)

val prompt = "Determine if the image is a receipt or expense. " +
    "If it is NOT a receipt or expense, output the text 'NOT_A_RECEIPT'. " +
    "Otherwise, parse the receipt information."

val request = generateContentRequest(ImagePart(bitmap), TextPart(prompt)) {}
val typed = generateTypedContentRequest(request, ParsedReceipt::class)

val previewFullConfig = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FULL
    }
}

val model = Generation.getClient(previewFullConfig)
val response = model.generateContent(typed)
val parsed: ParsedReceipt? = response.candidates.firstOrNull()?.response
```

Handle the `NOT_A_RECEIPT` path in product code. A typed schema does not replace a validity check.

Kakao Mobility used the same multimodal Prompt API path to flag bikes parked on tactile paving. They compared cloud Gemini with Nano and chose Nano on privacy, cost, accuracy, and speed. That is a production pattern: a closed label set plus an on-device image, not an open-ended essay.



![Close-up of a paper receipt and a phone camera](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)



## Feature 3: Transcribe a voice note, then tag it

ML Kit’s GenAI Speech Recognition API can turn mic audio into text on-device. Basic mode uses a traditional recognizer on most API 31+ devices. Advanced mode uses Gemini Nano and is documented as supported on Pixel 10-class devices.

Jetpacker then feeds the transcript into Prompt API to strip filler words and match the note to a trip event.

```kotlin
val speechRecognizer = SpeechRecognition.getClient(
    speechRecognizerOptions {
        locale = Locale.US
        preferredMode = SpeechRecognizerOptions.Mode.MODE_ADVANCED
    }
)
```

Collect `PartialTextResponse` for the live caption and `FinalTextResponse` for the Prompt API call. Do not send partial text into the matcher.

## Watch the official walkthrough

The Android Developers session below covers ML Kit GenAI, LiteRT-LM, and how Prompt API fits the rest of the on-device stack.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits

- Prompt API is a GenAI beta. Expect artifact versions and model config names to change.
- Preview Nano 4 models are for prototyping on AICore-supported devices. Production Nano 4 ships on flagship hardware on Google’s schedule, not on every phone in your Play Console.
- Keep generation in the foreground unless current ML Kit docs say otherwise.
- Prefix caching and structured output are the two productionizing features Google called out at I/O 2026. Use structured output when the next screen needs a data class, not prose.
- If the phone has no Nano path, route with Firebase hybrid inference instead of failing the feature.

## Tips that actually change quality

- Iterate the prompt on-device in AICore. Desktop chat is a different model.
- Cap the output. Jetpacker’s speed win came from fewer generated tokens.
- Prefer enums and `@Guide` over free text when you will store the result.
- Use FAST for short copy. Use FULL when the input is an image or the output is a schema.
- Log model preference, release stage, and latency. You will need that when a Pixel and a mid-range Qualcomm device disagree.

## Conclusion

ML Kit Prompt API is the custom-instruction layer on Gemini Nano 4. You send text, an image, or both. You get a string or a typed Kotlin object. The work stays on the phone.

Start with one screen that is already local: a summary, a receipt, or a short voice note. Target FAST or FULL on purpose. Keep grounded or multi-turn work on a cloud or hybrid client.

That split is the product, not a temporary workaround.

## Sources

- [Build intelligent Android apps: On-device inference](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html) — Android Developers Blog, 21 July 2026
- [ML Kit’s Prompt API: Unlock Custom On-Device Gemini Nano Experiences](https://android-developers.googleblog.com/2025/10/ml-kit-genai-prompt-api-alpha-release.html)
- [Announcing Gemma 4 in the AICore Developer Preview](https://android-developers.googleblog.com/2026/04/AI-Core-Developer-Preview.html)
- [Gemma 4: The new standard for local agentic intelligence on Android](https://android-developers.googleblog.com/2026/04/gemma-4-new-standard-for-local-agentic-intelligence.html)
- [Top AI on Android updates from Google I/O 2026](https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html)
- [Kakao Mobility uses Gemini Nano on-device](https://android-developers.googleblog.com/2025/10/kakao-mobility-uses-gemini-nano-on.html)
- [Gemma 4 announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
