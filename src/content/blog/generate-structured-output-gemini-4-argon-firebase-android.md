---
title: "Generate Structured Output with Gemini 4 Argon on Android"
description: "Step-by-step guide to generate JSON and enum structured output with Gemini 4 Argon using Firebase AI Logic hybrid inference on Android."
pubDate: 2026-10-18T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "gemini", "android", "tutorials"]
noindex: false
---

Gemini 4 Argon is now available in Firebase AI Logic. Developers can call it directly from Android apps for complex tasks. Structured output turns free-form responses into reliable JSON or enums that fit your app schema.

This guide shows how to set up hybrid inference and generate structured data with Gemini 4 Argon on Android. You get typed objects without extra parsing.

## Why structured output matters for Android apps

Unstructured text works for chat. Downstream features need fixed shapes. Recipes need names, ingredients, and steps. Classification needs one label from a fixed list.

Firebase AI Logic supports structured output on both on-device and cloud models. Hybrid mode prefers the on-device model when available and falls back to Gemini 4 Argon in the cloud. See our earlier guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Developer coding on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Prerequisites and project setup

Start with a Firebase project that has AI Logic enabled. Complete the hybrid getting-started steps so the on-device model is available and App Check is configured for local testing.

Add these dependencies in your module build.gradle.kts:

```kotlin
plugins {
  id("com.google.devtools.ksp") version "2.1.0"
  id("org.jetbrains.kotlin.plugin.serialization") version "2.1.0"
}

dependencies {
  implementation("com.google.firebase:firebase-ai:18.0.0")
  implementation("com.google.firebase:firebase-ai-ondevice:16.0.0-beta06")
  implementation("com.google.firebase:firebase-appcheck-debug:20.0.0")
  ksp("com.google.firebase:firebase-ai-ksp-processor:17.0.0")
  implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.7.3")
}
```

Register the debug App Check token in the Firebase console before you run the app. Gemini 4 Argon requires a paid tier of the Gemini Developer API.

## Define schemas with @Generable annotations

On-device and hybrid modes require the @Generable annotation plus KSP. Define Kotlin data classes that describe the expected shape.

```kotlin
@Serializable
@Generable(description = "A character profile for a fantasy story")
data class Character(
  val name: String,
  val age: Int,
  val species: String,
  @Guide(description = "An accessory the character wears or carries")
  val accessory: String? = null
) {
  companion object
}

@Serializable
@Generable(description = "A list of character profiles")
data class CharacterList(
  @Guide(description = "List of characters", minItems = 1)
  val characters: List<Character>
) {
  companion object
}
```

The empty companion object lets KSP generate the firebaseAISchema() extension. @Guide adds descriptions and constraints that the model follows.

## Initialize the model for hybrid inference

Create a GenerativeModel that prefers the on-device model and falls back to Gemini 4 Argon.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
  .generativeModel(
    modelName = "gemini-4-argon",
    onDeviceConfig = OnDeviceConfig(mode = InferenceMode.PREFER_ON_DEVICE)
  )
```

Replace the model name if you only want cloud inference. PREFER_ON_DEVICE gives privacy and offline support when the device model is ready.

## Generate the structured object

Call generateObject with the schema and your prompt. The SDK returns a typed object.

```kotlin
val schema = CharacterList.firebaseAISchema()
val prompt = "Create profiles for some characters for a fantasy story."

val response = model.generateObject(schema, prompt)
val characterList = response.getObject()

characterList?.characters?.forEach { character ->
  println("Name: ${character.name}, Species: ${character.species}")
}
```

Run this inside a coroutine. The response already matches your data class. No manual JSON parsing is required.

![Code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Enum classification example

For fixed labels, wrap an enum in a data class the same way.

```kotlin
enum class Genre { DRAMA, COMEDY, DOCUMENTARY }

@Serializable
@Generable(description = "Film genre classification")
data class FilmGenre(
  val genre: Genre
) {
  companion object
}
```

Prompt the model with a film description and call generateObject. The result is always one of the allowed values.

## Cloud-only manual schemas

If you set ONLY_IN_CLOUD you can build schemas with JsonSchema helpers instead of annotations. This path is not available for hybrid or on-device modes.

```kotlin
val jsonSchema = JsonSchema.obj(
  properties = mapOf(
    "characters" to JsonSchema.array(
      items = JsonSchema.obj(
        properties = mapOf(
          "name" to JsonSchema.string(),
          "age" to JsonSchema.integer(),
          "species" to JsonSchema.string()
        )
      )
    )
  )
)
```

Read the raw text from response.response.text when you use the manual approach.

## Tips for production use

- Download the on-device model early in the app lifecycle so hybrid fallback is ready.
- Set minItems or maxItems on lists to keep responses bounded.
- Use @Guide descriptions that match your product language.
- Enforce App Check before the November 2, 2026 deadline. Requests without a valid token will be rejected.
- Monitor token usage. Gemini 4 Argon is billed on the paid tier.

Test both the on-device path and the cloud fallback. Device models have smaller context windows than Argon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Structured output with Gemini 4 Argon and Firebase AI Logic gives Android apps reliable data shapes. Hybrid mode adds offline capability when the device supports it. Define your schema once with @Generable, call generateObject, and receive typed objects.

Start with the official hybrid getting-started guide, add the KSP processor, and ship features that parse themselves. Check the Firebase AI Logic documentation for the latest model names and App Check requirements.

**Sources**

- [Generate structured output for hybrid experiences](https://firebase.google.com/docs/ai-logic/hybrid/android/generate-structured-output)
- [Firebase AI Logic models](https://firebase.google.com/docs/ai-logic/models)
- [Gemini 4 Argon announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
