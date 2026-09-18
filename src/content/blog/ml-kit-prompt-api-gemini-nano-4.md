---
title: "How to Use ML Kit Prompt API with Gemini Nano 4 On-Device"
description: "A practical tutorial for ML Kit’s GenAI Prompt API on Android: pick Gemini Nano 4 FAST or FULL, summarize itineraries, parse receipts into Kotlin types, and tag voice notes without sending data to the cloud."
pubDate: 2026-09-18T20:20:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80"
---

Cloud models are the right tool when you need a huge context window or live web grounding. They are the wrong default when a traveler is offline, a receipt includes a card number, or you do not want to pay for every short rewrite.

Google’s **ML Kit GenAI Prompt API** sends a natural-language request to **Gemini Nano** on the device through **AICore**. Input can be text or an image plus text. Output can be free text or a typed Kotlin object. This guide walks through the three patterns Google used in the [Jetpacker sample](https://github.com/android/ai-samples/tree/main/jetpacker): trip summaries, receipt parsing, and voice notes.

## When to use Prompt API instead of a feature API

ML Kit already ships task-specific GenAI APIs for summarization, proofreading, rewriting, image description, and speech recognition. Use those when the task matches the built-in shape.

Use **Prompt API** when you need a custom instruction, multimodal input, or structured fields. Official docs list examples such as short translations, review classification, entity extraction from email, and “intelligent document scanning” of a receipt.

| Need | Better fit |
| --- | --- |
| One to three bullets, generic image caption, fixed rewrite tone | Feature-specific GenAI API |
| Custom fields, multimodal image + text, your own schema | Prompt API |

## What runs on the phone

Gemini Nano lives in AICore, a system service. Your app does not ship the weights. AICore updates the model, routes inference through on-device hardware, and follows Private Compute Core rules: restricted package binding and no direct internet from the inference process.

Google states Gemini Nano runs on more than **140 million** devices. **Gemini Nano 4** is the latest generation, built on the **Gemma 4** architecture and further tuned for battery and latency. Official ML Kit device tables currently list **nano-v4** on Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, Pixel 11 Pro Fold, Galaxy Z Flip8, Galaxy Z Fold8, and Galaxy Z Fold8 Ultra. Older Nano versions cover a wider set of 2025–2026 flagships. Always check the [ML Kit GenAI overview](https://developers.google.com/ml-kit/genai) before you gate a feature.

![Smartphone on a wooden desk next to a notebook during app development](https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80)

## Add the libraries

The July 2026 Android Developers sample uses these artifacts (versions from that post):

```kotlin
// build.gradle.kts
implementation("com.google.mlkit:genai-prompt:1.0.0-beta3")
ksp("com.google.mlkit:genai-schema-compiler:1.0.0-alpha1")
// only if you also transcribe audio
implementation("com.google.mlkit:genai-speech-recognition:1.0.0-alpha1")
```

Confirm current versions on the official ML Kit pages before you ship. Treat beta and alpha coordinates as preview.

You can also install the official Android skill so an agent in Android Studio follows the same pattern:

```bash
android skills add ml-kit-genai-prompt-api
```

## Choose FAST or FULL

`ModelPreference` is the official knob:

- **FAST** — lower latency, good for short text such as an itinerary blurb
- **FULL** — more capability for image understanding and structured extraction

Preview models are requested with `ModelReleaseStage.PREVIEW` after you opt into the [AICore developer preview](https://developers.google.com/ml-kit/genai/aicore-dev-preview). Google’s sample maps FAST to the smaller Nano 4 track (E2B-class) and FULL to the larger track (E4B-class).

```kotlin
val previewFastConfig = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FAST
    }
}

val previewFullConfig = generationConfig {
    modelConfig = modelConfig {
        releaseStage = ModelReleaseStage.PREVIEW
        preference = ModelPreference.FULL
    }
}
```

Use the AICore preview app to iterate on the prompt before you bake it into the APK. Google reported shrinking one itinerary prompt from about **13 seconds** to under **2 seconds** by cutting token bloat.

## Pattern 1: Summarize a trip itinerary

Keep the input short. Ask for a small, fixed set of sections. Official prompt-design guidance for Nano is blunt: be concise, structure the prompt, and separate sections with `##` so the model does not smear instructions together.

```kotlin
val client = Generation.getClient(previewFastConfig)
val tripItinerary = /* string from your trip model */

val summary = client.generateContent(
    """
    Given this trip itinerary: $tripItinerary
    ##
    Generate only:
    - overall vibe in one sentence
    - three preparation tips
    - five short local phrases
    """.trimIndent()
)
```

This is a good on-device job because both the source itinerary and the output are short, quality is close to a cloud model for that length, and the feature still works in airplane mode.

## Pattern 2: Parse a receipt into a Kotlin type

Receipts often include card fragments and addresses. Process them locally.

ML Kit’s structured output path uses annotations and a schema compiler so the model returns a data class instead of free text you have to regex.

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

Build a multimodal request with the photo and a reject path when the image is not a receipt:

```kotlin
val prompt = """
    Determine if the image is a receipt or expense.
    If it is NOT a receipt or expense, output the text 'NOT_A_RECEIPT'.
    Otherwise, parse the receipt information.
""".trimIndent()

val request = generateContentRequest(ImagePart(bitmap), TextPart(prompt)) {}
val typed = generateTypedContentRequest(request, ParsedReceipt::class)

val client = Generation.getClient(previewFullConfig)
val response = client.generateContent(typed)
val parsed: ParsedReceipt? = response.candidates.firstOrNull()?.response
```

Use **FULL** here. Google calls out Nano 4’s stronger image understanding for OCR-style extraction.

![Paper receipt and a phone camera on a cafe table](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80)

## Pattern 3: Transcribe a voice note and tag the itinerary

Speech recognition is a separate ML Kit GenAI API with two modes:

- **Basic** — traditional on-device recognizer, API 31+ on most phones
- **Advanced** — Gemini Nano quality and broader language coverage; Google’s July 2026 post listed Pixel 10 for Advanced mode, with Pixel 11 and more devices called out later on the GenAI overview

```kotlin
val speechRecognizer = SpeechRecognition.getClient(
    speechRecognizerOptions {
        locale = Locale.US
        preferredMode = SpeechRecognizerOptions.Mode.MODE_ADVANCED
    }
)

val request = speechRecognizerRequest { audioSource = AudioSource.fromMic() }
speechRecognizer.startRecognition(request).collect { response ->
    when (response) {
        is SpeechRecognizerResponse.PartialTextResponse -> showPartial(response.text)
        is SpeechRecognizerResponse.FinalTextResponse ->
            tagNote(response.text, tripEvents)
    }
}
```

Then hand the transcript to Prompt API:

```kotlin
fun tagNote(transcription: String, events: List<String>) {
    val prompt = """
        Voice note: $transcription
        ##
        Events: $events
        ##
        Remove filler words. Name which events this note matches.
    """.trimIndent()
    Generation.getClient().generateContent(prompt)
}
```

Fall back to Basic mode when Advanced is missing so the feature still records on older phones.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prompt design that actually helps Nano

From Google’s [Prompt design for Gemini Nano](https://developers.google.com/ml-kit/genai/prompt/android/prompt-design) page:

- Add a few well-chosen examples if the format is picky
- Keep the preamble short
- Split instructions, constraints, and examples with `##`
- Prefer one focused job over a branching “if X then Y” chain
- Use system instructions for a short standing rule instead of repeating it in every user prompt
- Consider prefix caching when in-context examples make the prompt long

If quality is poor, shrink the task before you reach for the cloud.

## Privacy and product notes

On-device inference keeps the prompt and image on the phone. AICore is designed not to store the input or output after the request finishes. That is the reason receipts and voice memos belong here.

It is not magic:

- Device support is a allowlist, not “any Android 17 phone”
- Latency depends on silicon and on how many tokens you ask for
- Preview model coordinates will change; pin versions and re-test on Pixel 11 and a mid-range Nano 3 device
- Structured output still needs a reject path (`NOT_A_RECEIPT`) and UI for a miss

## A first-week checklist

1. Confirm the device is on the Prompt API table for the Nano version you need.
2. Add `genai-prompt` and, if required, the schema compiler and speech artifact.
3. Opt into AICore developer preview and test prompts in the companion app.
4. Start with FAST + short text. Move to FULL + image only for extraction.
5. Define a `@Generable` data class before you parse receipts in production UI.
6. Gate Advanced speech recognition and show a Basic fallback.
7. Measure on-device time with the prompts you will actually ship, not the first draft.

## Conclusion

Prompt API is the flexible layer on top of Gemini Nano. Feature APIs cover the canned jobs. Prompt API is what you use when the product needs a custom summary, a typed receipt, or a voice memo tied to a trip event — without a network round trip.

Clone [Jetpacker](https://github.com/android/ai-samples/tree/main/jetpacker) if you want a working itinerary, expense, and voice-note flow instead of starting from a blank module.

## Sources

- [Gemini Nano on Android](https://developer.android.com/ai/gemini-nano)
- [ML Kit GenAI APIs overview](https://developers.google.com/ml-kit/genai)
- [GenAI Prompt API for Android](https://developers.google.com/ml-kit/genai/prompt/android)
- [Prompt design for Gemini Nano](https://developers.google.com/ml-kit/genai/prompt/android/prompt-design)
- [Build intelligent Android apps: On-device inference](https://android-developers.googleblog.com/2026/07/android-on-device-inference.html)
- [Announcing Gemma 4 in the AICore Developer Preview](https://android-developers.googleblog.com/2026/04/AI-Core-Developer-Preview.html)
- [Jetpacker sample](https://github.com/android/ai-samples/tree/main/jetpacker)
- [Build intelligent Android apps with Google’s AI (I/O 2026)](https://www.youtube.com/watch?v=_iuXykdlTkk)
