---
title: "Parse Receipts On Android With Gemini Nano 4 ML Kit"
description: "Parse receipt photos on Android with Gemini Nano 4 and the ML Kit Prompt API structured output. Keep totals, titles, and categories on device."
pubDate: 2026-10-09T15:11:00
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai"]
noindex: false
---

Receipt photos often include card fragments, addresses, and item lines you do not want leaving the phone. Google’s Android Developers blog shows how the Jetpacker sample keeps that parsing on device with Gemini Nano 4 and ML Kit’s Prompt API.

Posted on 21 July 2026 by Caren Chang, Developer Relations Engineer, the [on-device inference guide](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html) is part of the Build intelligent Android apps series. It uses a trip app to summarize itineraries, parse expenses from receipt images, and tag voice notes. This article walks through the receipt path: dependencies, model preference, structured output, and checks before you ship.

If you already call the Prompt API for text summaries, start with our earlier [Gemini Nano 4 and ML Kit Prompt API overview](/blog/gemini-nano-4-ml-kit-prompt-api/). Use cloud reasoning only when the task needs live maps or web context, as covered in the series’ hybrid post and our [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/).

## Why receipts belong on device

On-device inference processes the prompt and image on the phone. The blog lists three reasons that map cleanly to expenses:

- User data stays local, which matters when a receipt shows a card number or street address.
- The feature still works with weak or missing network, which is common while travelling.
- You do not pay cloud inference for every photo, so the feature can scale without a growing bill.

Gemini Nano is Google’s efficient on-device model. The blog says it now runs on more than 140 million devices. Gemini Nano 4 is built on the architecture of Gemma 4 and is tuned for battery and performance. Nano 4 also improves image understanding, including OCR and visual extraction, which is why the sample uses it for bills rather than a separate receipt SDK.

![Person reviewing a paper receipt at a cafe table](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80)

## Add the Prompt API and schema compiler

The sample pins ML Kit GenAI Prompt at `1.0.0-beta3` and the schema compiler at `1.0.0-alpha1`:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta3")
ksp("com.google.mlkit:genai-schema-compiler:1.0.0-alpha1")
```

Preview models are not on every phone by default. The post says you opt into the AICore developer preview, then download preview models such as Gemini Nano 4 so you can test prompts in the AICore app before wiring them into Jetpacker. Do that before you judge latency. The itinerary prompt in the same post started at about 13 seconds and dropped under 2 seconds after the team cut extra tokens.

## Pick FAST or FULL for the receipt model

The Prompt API lets you set a release stage and a performance preference. For receipt extraction the sample uses the preview full model, because it wants reasoning quality over speed:

```kotlin
val previewFullConfig = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FULL
    }
}

val geminiNano4BPreviewModel = Generation.getClient(previewFullConfig)
```

Use `ModelPreference.FAST` when the task is a short summary and latency matters more than deeper logic. The itinerary “get ready” section in Jetpacker uses the fast preview client. Use `ModelPreference.FULL` when the model must read a photo, reject non-receipts, and fill typed fields. The blog names the fast client as the Gemini Nano 2B-class preview path and the full client as the Gemini Nano 4B-class preview path.

## Define a typed receipt object

Free-text answers are awkward to store. ML Kit’s Structured Output API maps the model response onto a Kotlin data class you annotate. The sample defines `ParsedReceipt` like this:

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
```

`@Guide` is the contract. Keep titles short, point the model at total or balance-due lines, and lock categories to an enum so the expense screen does not invent labels.

The prompt rejects photos that are not bills:

```kotlin
val prompt = "Determine if the image is a receipt or expense. " +
    "If it is NOT a receipt or expense, output the text 'NOT_A_RECEIPT'. " +
    "Otherwise, parse the receipt information."

val request = generateContentRequest(ImagePart(bitmap), TextPart(prompt)) {}
val requestWithStructuredOutput =
    generateTypedContentRequest(request, ParsedReceipt::class)

val response = geminiNano4BPreviewModel.generateContent(requestWithStructuredOutput)
val parsedReceipt: ParsedReceipt? =
    response.candidates.firstOrNull()?.response
```

Treat a null candidate as a failed parse, not as a zero-dollar expense. If the model follows the reject branch, do not force the text into `ParsedReceipt`.

![Android phone and laptop on a desk during app development](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Step-by-step: from camera bitmap to expense row

1. Capture or pick a receipt bitmap. Downscale before `ImagePart` if the camera returns a full-resolution frame. The model needs readable totals, not a 12-megapixel file.
2. Confirm the device can load the preview Nano model through AICore. If the download is missing, show a clear fallback instead of a spinner.
3. Build `Generation.getClient` with `ModelReleaseStage.PREVIEW` and `ModelPreference.FULL`.
4. Send the image and the reject-or-parse prompt through `generateTypedContentRequest`.
5. Read `candidates.firstOrNull()?.response` as `ParsedReceipt`.
6. Show title, amount, and category for the user to confirm before you write the row. On-device extraction is still a guess about a photo.

Jetpacker displays the parsed fields on an expense overview after the photo step. Copy that confirm-then-save pattern. A wrong total is worse than an empty field.

## Optional: attach a voice note to the same trip

The same post pairs speech recognition with the Prompt API for voice memos. Basic mode uses a traditional on-device recognizer on most devices at API level 31 or higher. Advanced mode uses Gemini Nano and, at the time of the post, is supported on Pixel 10 devices.

Dependencies from the sample:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta3")
implementation("com.google.mlkit:genai-speech-recognition:1.0.0-alpha1")
```

The client is created with `SpeechRecognition.getClient`, `Locale.US`, and `SpeechRecognizerOptions.Mode.MODE_ADVANCED` in the sample. Partial text updates the UI while the mic is open. The final transcript is rewritten to drop filler words, then matched to trip events. You can reuse that second step to attach a spoken “this was dinner” note to the receipt row you just parsed.

## Tips before you rely on the beta

- These artifacts are beta and alpha. Pin versions and retest when ML Kit ships a stable Prompt API.
- Iterate prompts in AICore. The blog’s itinerary prompt got faster because the team stopped asking for long outputs, not because they changed the model.
- Do not log full receipt bitmaps or raw model text in production analytics.
- Keep a manual edit field. Menu photos, crumpled paper, and multi-page bills will miss the total.
- Gate advanced speech on supported devices and fall back to basic mode on API 31+ phones.
- Read the Jetpacker implementation rather than copying only the snippets. Google publishes the app under [android/ai-samples](https://github.com/android/ai-samples/tree/main/jetpacker) with an Apache-2.0 notice on the blog samples.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_iuXykdlTkk"
    title="Build intelligent Android apps with Google's AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to build next

Receipt parsing is one of three on-device features in the July 2026 Jetpacker post. The same series then moves hybrid answers to Firebase AI Logic and system actions to AppFunctions. Start with the typed receipt object, confirm every total with the user, and only then add a cloud step for tasks Nano cannot see, such as live place data.

## Sources

- Android Developers Blog, “Build intelligent Android apps: On-device inference,” Caren Chang, 21 July 2026: https://android-developers.googleblog.com/2026/07/android-on-device-inference.html
- ML Kit Prompt API for Android: https://developers.google.com/ml-kit/genai/prompt/android
- ML Kit structured output: https://developers.google.com/ml-kit/genai/prompt/android/structured-output
- Jetpacker sample: https://github.com/android/ai-samples/tree/main/jetpacker
- Android Developers, “Build intelligent Android apps with Google’s AI”: https://www.youtube.com/watch?v=_iuXykdlTkk
