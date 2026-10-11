---
title: "Add Gemini 3.8 Flash to Android with Firebase AI Logic"
description: "Learn how to integrate Gemini 3.8 Flash into Android apps using Firebase AI Logic for secure, production-ready generative AI features."
pubDate: 2026-10-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "android", "firebase", "gemini", "tutorials", "how-to"]
noindex: false
---

Gemini 3.8 Flash is Google's most intelligent Flash model yet. It handles long-horizon software engineering, autonomous agents, and complex enterprise workflows with the speed and cost profile of Flash. Android developers can call it securely from client code with Firebase AI Logic.

This guide walks through the official setup path from the Firebase console to a working Kotlin call. You will enable the Gemini Developer API, add the SDK, protect calls with App Check, and generate text with the `gemini-3.8-flash` model.

![Android developer coding on a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Why Firebase AI Logic for Gemini 3.8 Flash

Firebase AI Logic provides client SDKs that call the Gemini API directly from Android, iOS, web, Flutter, and Unity apps. The proxy service keeps your API key on the server and integrates with Firebase App Check to block unauthorized clients.

Most Android developers start with the Gemini Developer API. It includes a free tier and requires no upfront billing. You can switch later to the Agent Platform Gemini API (formerly Vertex AI) by changing one parameter if you need Google Cloud data residency or enterprise controls.

Gemini 3.8 Flash supports a 1,048,576 token context window and up to 65,536 output tokens. Thinking levels are low, medium, and high (medium is the default). Minimal thinking is not supported. Capabilities include function calling, structured outputs, search grounding, code execution, and file search.

Introductory pricing through December 31, 2026 is $0.75 per million input tokens and $3.75 per million output tokens. After that the rates rise to $1.50 and $7.50.

## Step 1: Set up a Firebase project

Open the [Firebase console](https://console.firebase.google.com/). Create a new project or select an existing one. You do not need Google Analytics for Firebase AI Logic.

Go to **AI Services > AI Logic**. Follow the guided workflow. Register your Android app if prompted and download the `google-services.json` file into your app module.

Choose the Gemini Developer API as the provider. The workflow enables the required APIs. Starting early July 2026 the workflow also enforces Firebase App Check for AI Logic. You will configure the debug provider for local development in a later step.

## Step 2: Add the SDK dependencies

In your module-level `build.gradle.kts` file, use the Firebase Android BoM so versions stay compatible:

```kotlin
dependencies {
    // ... other dependencies
    implementation(platform("com.google.firebase:firebase-bom:35.0.0"))
    implementation("com.google.firebase:firebase-ai")
    implementation("com.google.firebase:firebase-appcheck-debug")
}
```

Sync the project. The BoM resolves compatible versions of the Firebase AI Logic and App Check libraries.

![Firebase and Android development workspace](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80)

## Step 3: Configure App Check for local development

When App Check is enforced, local debug builds need the debug provider. In your `Application` class or early initialization code:

```kotlin
import com.google.firebase.appcheck.FirebaseAppCheck
import com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        val firebaseAppCheck = FirebaseAppCheck.getInstance()
        firebaseAppCheck.installAppCheckProviderFactory(
            DebugAppCheckProviderFactory.getInstance()
        )
    }
}
```

Run the app once. Check Logcat for the debug token and register it in the Firebase console under App Check > Apps > Manage debug tokens. This lets your local builds pass App Check while you develop.

For production, switch to the Play Integrity provider and enforce App Check in the console. Starting November 2, 2026, App Check enforcement is required for Firebase AI Logic.

## Step 4: Initialize the model and generate text

Create a `GenerativeModel` instance that targets Gemini 3.8 Flash:

```kotlin
import com.google.firebase.Firebase
import com.google.firebase.ai.ai
import com.google.firebase.ai.type.GenerativeBackend

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel("gemini-3.8-flash")

// One-shot generation
val response = model.generateContent("Explain how Firebase AI Logic protects API keys on Android.")
val text = response.text
```

For streaming responses use `generateContentStream`. The same model name works for chat, function calling, and structured output. Official Android samples and the Firebase quickstart app show complete implementations for these patterns.

If you later move to the Agent Platform Gemini API, change the backend to `GenerativeBackend.agentPlatform()` and keep the same model name.

## Tips for production use

- Use Firebase Remote Config or server prompt templates to change the model name without shipping a new app version. This helps when Google releases newer models or retires older ones.
- Set per-user rate limits (default 100 requests per minute) and budget alerts so unexpected traffic does not produce surprise bills.
- Enable AI monitoring in the Firebase console to track latency, token usage, and error rates.
- For hybrid on-device + cloud inference, add the `firebase-ai-ondevice` dependency and configure `OnDeviceConfig` with `PREFER_ON_DEVICE`. On-device inference currently supports single-turn text (and text + single image) and requires specific devices and SDK versions.
- Pair Gemini 3.8 Flash with Android skills or the Agent Development Kit for Kotlin when you build multi-step agents. See the [ADK for Kotlin 1.0 guide](/blog/adk-kotlin-1-0-android-agents/) for on-device and hybrid agent patterns.

## Conclusion

Gemini 3.8 Flash is available today through Firebase AI Logic. The setup takes a few minutes in the console, a short Gradle change, and one initialization call. App Check keeps the integration production-ready from the start.

Start with the Gemini Developer API free tier, generate text, then add chat, structured output, or hybrid inference as your feature needs grow. Official documentation and the Android quickstart remain the authoritative references for every configuration option.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Firebase AI Logic overview](https://firebase.google.com/docs/ai-logic)
- [Get started with Firebase AI Logic SDKs](https://firebase.google.com/docs/ai-logic/get-started)
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- [Gemini AI models on Android](https://developer.android.com/ai/gemini)
- [Firebase AI Logic models and pricing](https://firebase.google.com/docs/ai-logic/models)
