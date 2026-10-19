---
title: "How to Set System Instructions in Firebase AI Logic"
description: "Set system instructions in Firebase AI Logic for Android to define Gemini model persona, tone, and output format for consistent app features."
pubDate: 2026-10-19T16:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "tutorials", "ai-tools", "gemini"]
noindex: false
---

System instructions give you a reliable way to shape Gemini responses in your Android app before the user ever types a prompt. Firebase AI Logic lets you pass these instructions when you create the GenerativeModel instance, so every call follows the same rules for persona, style, and output structure.

This approach keeps behavior consistent across chat sessions and multi-turn conversations. You define the model’s role once, then let user prompts focus on the specific request. Gemini 4 Argon and earlier models both support system instructions through the Firebase AI Logic SDK.

If you already integrated Firebase AI Logic for basic text generation, adding system instructions requires only a small change to the model initialization. For the full setup steps, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Laptop showing code on a wooden desk](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What system instructions do

System instructions act as a preamble that the model sees before any user content. They set product-level behavior that stays constant while user prompts change. Official Firebase documentation lists common uses: defining a persona, setting output format, controlling tone and verbosity, establishing task rules, and supplying fixed context.

The instruction applies to the entire request and carries across multiple turns in a chat. It remains part of the overall prompt for data-use policies, so avoid placing sensitive user data inside it.

Examples from the docs include a coding expert that returns only HTML and CSS without explanations, a music historian chatbot that refuses non-music questions, and a recipe assistant that always returns a specific JSON schema.

## Prerequisites

Your Android project must already use Firebase AI Logic. The app needs the firebase-ai dependency and a Firebase project with AI Logic enabled. Choose the Gemini Developer API backend for the simplest start, or the Agent Platform if you need specific data location controls.

Confirm the model you plan to use supports system instructions. All current Gemini models do, including gemini-4-argon on the paid tier and gemini-3.8-flash. Starting November 2, 2026, App Check enforcement is required for Firebase AI Logic, so set up the debug provider for local testing and a production provider before release.

## Set system instructions in Kotlin

Create the GenerativeModel and pass systemInstruction as a Content object built with the content DSL. The instruction is set once when the model is initialized and applies to every subsequent generateContent or chat call.

```kotlin
import com.google.firebase.Firebase
import com.google.firebase.ai.ai
import com.google.firebase.ai.type.GenerativeBackend
import com.google.firebase.ai.type.content

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-4-argon",
        systemInstruction = content {
            text("""
                You are a concise Android coding assistant.
                Always respond in valid Kotlin code blocks when the user asks for code.
                Explain only if the user explicitly requests an explanation.
                Keep answers under 200 words unless the user asks for more detail.
            """.trimIndent())
        }
    )
```

Call generateContent as usual. The model follows the system rules without the user needing to repeat them:

```kotlin
val response = model.generateContent(
    "Write a suspend function that fetches a user profile from a REST API and returns a data class."
)
```

For multi-turn chat, start a chat session with the same model instance. The system instruction persists across messages in that chat.

## Practical examples

Use system instructions to enforce structured output for features that feed into your UI. A shopping list parser can require JSON with specific keys:

```kotlin
systemInstruction = content {
    text("""
        Extract grocery items from the user message.
        Respond only with a JSON array of objects. Each object has "name" and "quantity" keys.
        Omit any other text.
    """.trimIndent())
}
```

For a support chatbot, lock the tone and scope:

```kotlin
systemInstruction = content {
    text("You are a friendly support agent for a recipe app. Answer only questions about cooking and recipes. If the question is unrelated, reply: 'I can only help with recipes.'")
}
```

These patterns reduce the need for post-processing and make responses more predictable for parsing or display.

![Abstract technology background with code elements](https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80)

## Combine with other controls

System instructions work alongside generation config, safety settings, and response schemas. Set maxOutputTokens or temperature in generationConfig while the system instruction handles persona and format. For strict JSON, prefer a response schema when available; the system instruction can still reinforce the expected structure.

Gemini Live models also accept systemInstruction when you create a LiveModel instance. The same content DSL applies, so voice or streaming features can share the same persona rules as text features.

Test the combination. A strict system instruction plus a high thinking level on Gemini 4 Argon can produce more reliable multi-step results, but it also uses more tokens. Monitor usage in the Firebase console.

## Tips for effective instructions

Write instructions in clear, imperative language. State what the model must do and what it must avoid. Include examples only when the format is complex; otherwise keep the text short to leave room for user content.

Place fixed context such as app-specific terminology or knowledge cutoffs inside the system instruction rather than repeating it in every prompt. Update the instruction when your product requirements change; users will not see the system text.

Avoid overly long instructions. Extremely detailed rules can crowd out the user prompt or increase latency. Start simple and add constraints only after testing real user queries.

For production, pair system instructions with App Check and budget alerts. The instruction is part of every request, so token costs include it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

System instructions give Android developers a straightforward way to keep Gemini behavior consistent inside Firebase AI Logic. Define the persona, format, and rules once at model creation, then focus user prompts on the actual task. The feature works with Gemini 4 Argon and earlier models and extends to Live API sessions.

Add the systemInstruction parameter to your existing GenerativeModel setup, test with real prompts, and adjust based on the responses you receive. Official documentation provides additional examples and confirms support across all current Gemini models.

**Sources**

- Firebase AI Logic documentation: Use system instructions to steer the behavior of a model
- Firebase AI Logic models page (Gemini 4 Argon availability)
- Android Developers: Gemini Developer API integration guide
