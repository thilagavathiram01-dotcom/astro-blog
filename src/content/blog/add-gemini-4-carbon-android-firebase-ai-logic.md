---
title: "Add Gemini 4 Carbon to Android with Firebase AI Logic"
description: "Step-by-step how-to integrate Gemini 4 Carbon into Android apps using Firebase AI Logic for advanced reasoning and agentic tasks."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android developers can now call Gemini 4 Carbon directly from client apps with Firebase AI Logic. Carbon is Google's strongest reasoning model, built for complex software engineering, multimodal knowledge work, scientific reasoning, and cybersecurity defense.

It became generally available on November 10, 2026, via the Gemini API paid tier in AI Studio and Android Studio. Firebase AI Logic client SDKs support it immediately. You do not need a custom backend. The SDK handles authentication, App Check, and routing.

This guide walks through adding Gemini 4 Carbon to an existing Android project and running your first prompt.

## Prerequisites

Your Android project must already use Firebase and target API level 24 or higher. The Firebase project needs the Blaze plan because Carbon requires the paid Gemini API tier. Introductory pricing matches Argon at $2 per million input tokens and $10 per million output tokens through November 30, 2026, then doubles.

Create a Firebase project if needed, register your Android app, and download google-services.json. In the Firebase console, open AI Logic, enable it, and select the Gemini Developer API provider. App Check enforcement became required on November 2, 2026.

If you already integrated earlier models, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Android developer coding on laptop with smartphone](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Add the Firebase AI Logic dependency

Open your app-level build.gradle.kts. Add the latest Firebase BOM and the AI Logic library:

```kotlin
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:35.1.0"))
    implementation("com.google.firebase:firebase-ai")
    implementation("com.google.firebase:firebase-appcheck-debug")
}
```

Sync the project. The BOM keeps versions compatible. Include the App Check debug provider for local testing. Switch to a production provider (Play Integrity) before release.

## Initialize the model

Create a GenerativeModel instance that targets Gemini 4 Carbon:

```kotlin
import com.google.firebase.Firebase
import com.google.firebase.ai.ai
import com.google.firebase.ai.type.GenerativeBackend

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel("gemini-4-carbon")
```

The model name string must be exactly `gemini-4-carbon`. Carbon supports a unified 1M token context window and long decode continuation.

## Generate content

Call generateContent with a prompt. Carbon handles text, images, video, audio, and PDFs:

```kotlin
val response = model.generateContent(
    "Review this Kotlin function for security issues in a biometric authentication flow. " +
    "Suggest improvements for keystore usage and error handling."
)
val output = response.text
```

Use streaming for longer outputs. Always check safety ratings before showing results to users. Wrap calls in try-catch for network or blocked-prompt failures.

![Mobile app development and testing](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Configure thinking levels

Carbon supports tunable thinking levels: low, medium (default), and high. Raise the level for deeper multi-step reasoning:

```kotlin
import com.google.firebase.ai.type.generationConfig

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-4-carbon",
        generationConfig = generationConfig {
            thinkingConfig = thinkingConfig {
                thinkingLevel = ThinkingLevel.HIGH
            }
        }
    )
```

Higher levels improve results on complex coding, debugging, and analysis but increase latency and token cost. Start with medium and raise only when needed.

## Production checklist

Enable App Check with a production provider before shipping. Requests fail without it after the November 2 enforcement date.

Monitor token usage in the Firebase console. Set budget alerts on your Google Cloud project. Carbon is billed at Gemini API rates.

Test edge cases: empty responses, safety blocks, and timeouts. Provide clear user messages for failures.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

Write specific prompts that describe the desired output format and constraints. For agentic workflows, break large tasks into steps and feed intermediate results back into follow-up calls.

Use system instructions or few-shot examples for consistent style. Combine Carbon with function calling for tool use inside your app.

Carbon is stronger than Argon on the hardest multi-step coding, scientific reasoning, and cybersecurity tasks. Re-test existing prompts if you migrate from Argon or Flash models, as the reasoning style differs.

## Conclusion

Gemini 4 Carbon is available today through Firebase AI Logic for Android apps on the paid Gemini API tier. Integration usually requires only a dependency update and a model name change. Enable App Check, monitor costs, and start with medium thinking levels before raising them for complex work.

Check the official Firebase AI Logic models page and Gemini API documentation for the latest details and pricing.

**Sources**

- Blog.google: Gemini 4 Carbon is now available (November 10, 2026)
- Firebase documentation: Learn about supported models (Gemini 4 Carbon)
- Firebase AI Logic getting started guide for Android
