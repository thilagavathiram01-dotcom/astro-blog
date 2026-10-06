---
title: "Parse Gemini Nano Replies with ML Kit Structured Output"
description: "Learn how to return typed Kotlin objects from Gemini Nano with ML Kit Structured Output, including schema setup, constraints, and error handling."
pubDate: 2026-10-06T14:30:00
heroImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "gemini", "ai"]
noindex: false
---

Free-text replies from an on-device model are fine for a chat screen. They are a poor fit for a receipt parser, a category picker, or any field you plan to write into a database. ML Kit’s Structured Output API closes that gap: you describe a Kotlin data class, Gemini Nano fills it, and the Prompt API hands back a typed object.

Google documents the API as part of ML Kit GenAI for Android. It is Kotlin-only, needs API level 26 or higher, and is meant for short tasks such as entity extraction, classification, and turning messy user input into a storable shape. If you already call the Prompt API for plain text, this is the next step before you ship a feature that depends on fields, not paragraphs.

## What Structured Output actually returns

The Prompt API still runs Gemini Nano on the device through AICore. Structured Output adds a schema layer. You mark a data class with `@Generable`, describe each property with `@Guide`, and call `generateTypedContentRequest` instead of a plain text request. The candidate’s `response` is then your class, not a string you have to split yourself.

That matters for three everyday cases listed in the official guide:

- Entity extraction, such as pulling a name, date, and place from a note.
- Classification into a fixed set of labels.
- Serialization, so a form answer can land in Room or an API payload without a second parser.

On-device inference keeps the prompt and the image on the phone. Google’s Android Developers write-up on Jetpacker uses the same pattern for receipts, where card numbers and addresses should not leave the device. For a wider look at Gemini Nano setup, see [Gemini Nano 4 and the ML Kit Prompt API](/blog/gemini-nano-4-ml-kit-prompt-api/).

![Developer reviewing Android code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Check the device before you prompt

Do not assume every phone can return typed objects. Call `isStructuredOutputFeatureAvailable()`. It returns true only when the feature is present. The rest of the Prompt API still has its own download and feature-status checks; run those first so you are not prompting a model that has not finished installing.

Documented requirements:

- `minSdk` 26
- Kotlin (Java callers are not supported for this API)
- KSP plugin 2.3.6 or higher
- Prompt API dependency `com.google.mlkit:genai-prompt:1.0.0-beta4` (confirm the latest beta in your Gradle resolution)
- Schema compiler `com.google.mlkit:genai-schema-compiler:1.0.0-alpha1` applied with KSP

Add the KSP plugin at the project level, then the schema compiler in the app module. If release builds fail to parse a class, ProGuard is a known cause. Google’s sample keep rule is a class-wide keep on the annotated type, for example `-keep class com.example.app.ParsedReceipt { *; }`.

## Define a schema the model can follow

Supported property types are `String`, `Double`, `Float`, `Int`, `Long`, `Boolean`, `List` of those types, and nested `@Generable` classes. `@Guide` can set a description, `enumValues` on strings, `minimum` and `maximum` on numbers, and `minItems` and `maxItems` on lists. Nullable booleans are allowed in Google’s plant example.

A receipt-style class stays inside those rules:

```kotlin
@Generable("Fields parsed from a short expense note")
data class ExpenseNote(
    @Guide(description = "Merchant or item name, under six words")
    val title: String,
    @Guide(description = "Amount in the note", minimum = 0.0, maximum = 100000.0)
    val amount: Double,
    @Guide(
        description = "Expense category",
        enumValues = ["food", "travel", "shopping", "other"]
    )
    val category: String
)
```

Keep descriptions specific. Google’s Jetpacker post shows why: an early itinerary prompt produced far too many tokens, and a tighter prompt dropped response time from 13 seconds to under 2 seconds on their test. The same habit applies here. Ask for the fields you store, not a narrative.

## Request a typed response

Build a normal `GenerateContentRequest`, wrap it, then call `generateContent` on the client from `Generation.getClient()`.

```kotlin
val model = Generation.getClient()
val base = GenerateContentRequest.Builder(
    TextPart("Extract the expense from: lunch at Noodle Bar, 18.40")
).build()
val typed = generateTypedContentRequest(base, ExpenseNote::class)
val parsed: ExpenseNote? =
    model.generateContent(typed).candidates.firstOrNull()?.response
```

Image plus text works the same way if you already use image parts with the Prompt API. Jetpacker’s receipt flow sends a bitmap and a short instruction, then reads a typed object. Prefer `ModelPreference.FAST` when the schema is simple and latency matters. Use `ModelPreference.FULL` with a preview model config when you need stronger reasoning and have opted into the AICore developer preview.

Token counts are easy to get wrong. The schema itself consumes input tokens, so `countTokens()` on the raw text request undercounts. Pass the `GenerateTypedContentRequest` to `countTokens()` before you treat a prompt as “short.”

![Smartphone on a desk beside a notebook](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Handle finish reasons and the two schema errors

A null `response` is not always a crash. Read `finishReason` on the candidate:

- `STOP` means generation finished and the output matched the schema.
- `MAX_TOKENS` means the reply was cut off. Raise the output budget or shrink the schema.
- `PARSE_CLASS_ERROR` means the JSON could not be mapped onto your class.
- `STRUCTURE_NOT_ANNOTATED` means a target class or a nested class is missing `@Generable`.
- `STRUCTURE_VALUES_INVALID` means a value broke a `@Guide` constraint, such as a list that is too long or a number outside `minimum` and `maximum`.
- `OTHER` covers the remaining stop cases.

`GenAiException` adds two codes worth branching on. `STRUCTURED_OUTPUT_INVALID_CLASS` (-104) is a development bug: unsupported types or a circular class graph. `STRUCTURED_OUTPUT_INVALID_VALUE` (-105) is a runtime miss. Google’s advice is to tighten the prompt, relax a constraint that the model cannot reliably hit, or retry and show a fallback state.

Do not treat enum strings as guaranteed until you have seen them on a real device. A description that says “food, travel, shopping, or other” plus `enumValues` is stronger than either hint alone.

## A practical test loop

1. Confirm feature availability and that Gemini Nano has finished downloading.
2. Start with one class and three fields. Add nesting only after the flat schema parses.
3. Log `finishReason` on every null parse. Do not swallow it.
4. Count tokens on the typed request, not the raw string.
5. Run a release build. If parsing dies only in release, add the keep rule.
6. If you need web or Maps context, keep that path in the cloud. Structured Output does not replace hybrid inference. The Firebase AI Logic hybrid guide is the companion path: [hybrid inference with Firebase AI Logic](/blog/firebase-ai-logic-hybrid-inference/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to stay on plain text

Structured Output is the wrong tool for long summaries, open-ended chat, or any reply the user will read as prose. It is also the wrong tool if you must support Java-only modules. For those screens, keep `generateContent` with a text part.

Use the typed API when a wrong field would corrupt data: amounts, categories, dates, or a yes-or-no flag. Pair it with a user confirm step on the first version. On-device models are reliable enough for short extraction, and they still miss. A confirm row costs less than a bad Room write.

## Bottom line

ML Kit Structured Output lets Gemini Nano return a Kotlin object you defined, with constraints the client checks after generation. Wire KSP, annotate the class, call `generateTypedContentRequest`, and branch on finish reasons before you trust the result. That is enough to ship a private receipt or note parser without a cloud round trip.

## Sources

- Google for Developers, [Generate structured output](https://developers.google.com/ml-kit/genai/prompt/android/structured-output) (updated 21 July 2026)
- Google for Developers, [Get started with Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/get-started)
- Android Developers Blog, [Build intelligent Android apps: On-device inference](https://developer.android.com/blog/posts/build-intelligent-android-apps-on-device-inference) (21 July 2026, Caren Chang)
- Android Developers, [Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM](https://www.youtube.com/watch?v=Z7zx_sTbFPI)
