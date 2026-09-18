---
title: "How to Generate and Edit Images in Android Apps with Gemini Nano Banana"
description: "Use Firebase AI Logic and Gemini Image models (Nano Banana 2 and Nano Banana Pro) to generate and edit images from an Android app, including interleaved text-and-image output."
pubDate: 2026-09-18T10:30:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80"
---

Imagen is on the way out. Firebase documents that **Imagen models are deprecated and can shut down as early as 17 August 2026**. The replacement path is the Gemini Image family — the models Google nicknamed **Nano Banana**.

You call them from an Android app with the same **Firebase AI Logic** SDK you already use for Gemini text. No separate image service. One `generateContent()` call can return a PNG, or a mix of captions and pictures.

This guide follows the official [Firebase image-generation docs](https://firebase.google.com/docs/ai-logic/generate-images-gemini) and the [Android Gemini Developer API page](https://developer.android.com/ai/gemini/developer-api). Model IDs and billing notes are those published as of mid-September 2026. Confirm them in the [Firebase model catalog](https://firebase.google.com/docs/ai-logic/models) before you ship.

## What Nano Banana is (and is not)

Google uses the nickname across three current Gemini Image models:

- **`gemini-3.1-flash-image`** — Nano Banana 2. Speed and volume. Official docs list this as the default replacement for most Imagen 4 Fast / standard work.
- **`gemini-3.1-flash-lite-image`** — Nano Banana 2 Lite. Cheaper, still an image model.
- **`gemini-3-pro-image`** — Nano Banana Pro. Higher fidelity, better in-image text, Google Search grounding on the Pro image model. Firebase lists this path as **billing required**.

These are **cloud** models. They are not Gemini Nano on the phone. On-device Nano still handles text and some multimodal analysis through ML Kit and hybrid inference. Image *generation* goes to the Gemini Image endpoints.

Firebase recommends Gemini Image when you want world knowledge, conversational edits, and interleaved text plus images. Use Imagen only if you still have a narrow quality case — and plan the migration, because Imagen is shutting down.

![Designer working on a laptop with color swatches and printed mockups](https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80)

## What you need before the first call

1. A Firebase project with **Firebase AI Logic** enabled.
2. The Gemini Developer API backend *or* the Agent Platform Gemini API, following [Firebase getting started](https://firebase.google.com/docs/ai-logic/get-started).
3. A **Blaze** (pay-as-you-go) plan for current Gemini Image models. Firebase’s model page marks Nano Banana 2 and Pro as billing required.
4. **Firebase App Check**. Enforcement is scheduled to be **required from 2 November 2026**. Wire the debug provider now so local builds keep working.
5. Current BoM. Android’s Gemini Developer API snippets use `com.google.firebase:firebase-bom:34.19.0` plus `firebase-ai` and `firebase-appcheck-debug`.

In the app module:

```kotlin
implementation(platform("com.google.firebase:firebase-bom:34.19.0"))
implementation("com.google.firebase:firebase-ai")
implementation("com.google.firebase:firebase-appcheck-debug")
```

Prototype prompts in [Google AI Studio](https://aistudio.google.com) first. The Android docs explicitly tell you to refine Nano Banana prompts there, then paste the generated snippet.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/kKI3WfufXfY" title="Firebase Release Notes: Gemini 3 and Nano Banana Pro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Generate an image from text

Create a `GenerativeModel` with an image model ID and set `responseModalities` to **IMAGE** if you only want pixels.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI()).generativeModel(
    modelName = "gemini-3.1-flash-image",
    generationConfig = generationConfig {
        responseModalities = listOf(ResponseModality.IMAGE)
    }
)

val prompt = "Generate an image of the Eiffel Tower with fireworks in the background."

val bitmap = model.generateContent(prompt)
    .candidates.first().content.parts
    .filterIsInstance<ImagePart>()
    .firstOrNull()
    ?.image
```

That Kotlin shape is the official sample: the first `ImagePart` carries a `Bitmap`. Show it in an `Image` composable or write it to storage.

If you omit `TEXT` from `responseModalities`, the model is supposed to return images only. If you include both `TEXT` and `IMAGE`, walk every part in the candidate — captions and bitmaps can arrive in one turn.

## Interleaved recipe cards and similar layouts

A useful product pattern is a how-to that needs pictures *and* copy. Firebase’s example is an illustrated paella recipe. You do not call two models.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI()).generativeModel(
    modelName = "gemini-3.1-flash-image",
    generationConfig = generationConfig {
        responseModalities = listOf(
            ResponseModality.TEXT,
            ResponseModality.IMAGE
        )
    }
)

val prompt = """
Generate an illustrated recipe for a paella.
Create images to go alongside the text as you generate the recipe.
""".trimIndent()

val response = model.generateContent(prompt)
for (part in response.candidates.first().content.parts) {
    when (part) {
        is TextPart -> appendCopy(part.text)
        is ImagePart -> appendPlate(part.image)
    }
}
```

Same idea works for workout cards, furniture assembly, or a travel day plan. Keep the prompt specific about style, aspect, and what must stay consistent across frames.

![Overhead shot of a kitchen counter with ingredients and a phone showing a recipe](https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80)

## Edit an existing photo

Pass the user’s bitmap plus an instruction. Official docs support text-plus-image prompts for edits and iterative conversation.

```kotlin
val response = model.generateContent(
    content {
        image(sourceBitmap)
        text("Keep the same person and lighting. Change the background to a quiet Tokyo side street at dusk.")
    }
)
val edited = response.candidates.first().content.parts
    .filterIsInstance<ImagePart>()
    .firstOrNull()
    ?.image
```

For multi-turn edits, use `startChat()` with the same image-capable model so later turns keep identity and layout. That is the documented advantage over one-shot Imagen calls: you can say “make the type larger” without re-describing the whole scene.

## Gemini versus leftover Imagen

Firebase’s [migration guide](https://firebase.google.com/docs/ai-logic/imagen-models-migration) maps old Imagen IDs onto Gemini Image IDs. The short version:

- Imagen 4 Fast → `gemini-3.1-flash-image` with a low thinking level
- Imagen 4 standard → `gemini-3.1-flash-image` with a higher thinking level
- Imagen 4 Ultra → `gemini-3-pro-image`

Do not leave production traffic on Imagen after the published shutdown window.

Aspect ratio and exact pixel size are **not** first-class SDK fields yet. Firebase says you should put the size you want in the prompt until those parameters ship.

Documented limits worth coding against:

- Output is PNG.
- Flash image models top out around **1024 px** in the older 2.5 notes; Pro image supports up to **4K** on the preview/Pro path. Recheck the current model table when you pick a resolution.
- Audio and video are **not** valid inputs for image-generating Gemini models.
- People in generated or edited images are allowed, subject to safety filters.

## App Check and shipping hygiene

From **2 November 2026**, App Check enforcement is required for Firebase AI Logic. For debug builds:

```kotlin
Firebase.initialize(context = this)
Firebase.appCheck.installAppCheckProviderFactory(
    DebugAppCheckProviderFactory.getInstance()
)
```

Run the app, copy the debug token from Logcat, and register it under **Firebase console → App Check → Manage debug tokens**. Production builds should use Play Integrity, not the debug factory.

Image models cost real money. Cap daily generations per signed-in user, show a progress state (calls are slower than text), and never put a raw Gemini API key in the APK — the Firebase AI Logic client is the supported path on Android.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A small product checklist

- Pick **Flash Image** for in-app stickers, backgrounds, and drafts; pick **Pro Image** when typography in the picture has to be readable.
- Iterate prompts in AI Studio, then freeze a template in code.
- Always handle blocked candidates and empty `ImagePart` lists — safety filters will drop some requests.
- Store results in app-specific storage if the user expects to keep them; do not assume the model will reproduce the same pixels tomorrow.
- Watch the [model catalog](https://firebase.google.com/docs/ai-logic/models) for Gemini 2.5 image shutdown dates. New work should use 3.x Image IDs.

## Conclusion

Nano Banana is not a separate Android API. It is Gemini Image, reached through Firebase AI Logic, with `responseModalities` set so the model is allowed to return pictures. Text-to-image, photo edits, and mixed recipe-style layouts all use `generateContent()`.

If your app still calls Imagen, treat the August 2026 shutdown date as a hard deadline. Switch the model name, require IMAGE in the config, and put App Check on the calendar before November.

## Sources

- [Generate and edit images using Gemini (Nano Banana) — Firebase AI Logic](https://firebase.google.com/docs/ai-logic/generate-images-gemini)
- [Gemini Developer API on Android](https://developer.android.com/ai/gemini/developer-api)
- [Supported models — Firebase AI Logic](https://firebase.google.com/docs/ai-logic/models)
- [Migrate from Imagen to Gemini Image models](https://firebase.google.com/docs/ai-logic/imagen-models-migration)
- [Firebase AI Logic getting started](https://firebase.google.com/docs/ai-logic/get-started)
- [Firebase quickstart Android — Firebase AI samples](https://github.com/firebase/quickstart-android/blob/master/firebase-ai/README.md)
