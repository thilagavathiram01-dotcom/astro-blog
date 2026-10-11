---
title: "How to Implement Gemini Live API on Android with Firebase"
description: "Step-by-step guide to add real-time Gemini Live voice interactions to your Android app using Firebase AI Logic. Includes setup, permissions, and code examples."
pubDate: 2026-10-11T21:30:00
heroImage: "https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "firebase"]
noindex: false
---

Real-time voice conversations on Android no longer require a custom backend. The Gemini Live API, accessed through Firebase AI Logic, lets your app stream audio in and out of a Gemini model with low latency.

This guide shows how to add a voice session to an Android app. It follows the official Android Developers and Firebase documentation. You will set up the SDK, request the microphone permission, start a session, and optionally wire function calling so the model can trigger actions inside your app.

## What the Gemini Live API does

The Live API supports bidirectional streaming. Users speak or send text, images, or video. The model responds with streaming audio (and optional text transcription). It works for chatbots, cooking assistants, language practice, or any feature that needs continuous dialogue rather than a single prompt-response pair.

Firebase AI Logic handles the connection. You do not manage WebSockets yourself. Your app targets API level 23 or higher. Models that support the Live API include `gemini-2.5-flash-native-audio-preview-12-2025` and `gemini-3.1-flash-live-preview`. Check the current [Firebase model list](https://firebase.google.com/docs/ai-logic/models) before you hard-code an ID, because model availability changes.

App Check becomes mandatory for Firebase AI Logic on 2 November 2026. Plan the debug token for local builds now.

![Laptop and phone on a desk with coding software open](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Prerequisites and project setup

Create or open a Firebase project. Enable the Gemini Developer API (or the Agent Platform if you prefer). Register your Android app and download the `google-services.json` file. Place it in the app module.

In the module-level `build.gradle.kts` add the Firebase BoM and the AI Logic library:

```kotlin
dependencies {
  implementation(platform("com.google.firebase:firebase-bom:35.0.0"))
  implementation("com.google.firebase:firebase-ai")
  implementation("com.google.firebase:firebase-appcheck-debug")
}
```

Sync the project. For local development, install the App Check debug provider so the enforced check does not block your test builds. Run the app once, copy the debug token from logcat, and register it under App Check in the Firebase console.

Add the microphone permission to `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

Request the runtime permission before you start a conversation.

## Initialize the LiveModel

Create a `LiveModel` with a supported model name and a generation config that requests audio output. You can also set a voice. The default voice is Puck if you omit the speech config.

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI()).liveModel(
    modelName = "gemini-2.5-flash-native-audio-preview-12-2025",
    generationConfig = liveGenerationConfig {
        responseModality = ResponseModality.AUDIO
        speechConfig = SpeechConfig(voice = Voice("FENRIR"))
    }
)
```

Optional system instructions let you set a persona or supply app-specific context. Pass them when you create the model.

If you already use hybrid inference for text features, keep Live sessions on the cloud path. The Live API does not route through the on-device Nano models described in our [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/).

## Start and manage a session

Call `model.connect()` to obtain a `LiveSession`. Then start the audio conversation:

```kotlin
val session = model.connect()
session.startAudioConversation()
```

The session is bidirectional. You send audio, text, or other media on the same connection that returns the model’s response. The official docs note that the model does not automatically handle interruptions in every configuration, so design your UI to let users stop or restart cleanly.

You can also send text or video frames. The Firebase quickstart Android app demonstrates video input. Keep sessions short for testing. Long sessions consume tokens and may hit rate limits that vary by your Gemini Developer API tier.

![Person using smartphone next to laptop and tools](https://images.unsplash.com/photo-s2RD32_OwTw?auto=format&fit=crop&w=800&q=80)

## Watch a real implementation

The Firebase team built a cooking assistant that streams video from the camera and uses function calling so the model can add missing ingredients to a list. The video below walks through the permissions, LiveModel setup, and function-calling handler.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OaRI87uwU-k"
    title="Building a cooking assistant with Firebase AI Logic"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add function calling

Function calling lets the model invoke methods in your app. Declare a function with a clear name, description, and parameter schema:

```kotlin
val addListFunctionDeclaration = FunctionDeclaration(
    name = "addList",
    description = "Function adding an item to the list",
    parameters = mapOf(
        "item" to Schema.string("A short string describing the item to add")
    )
)
```

Pass the declaration as a tool when you create the model. When you start the audio conversation, supply a handler that receives the `FunctionCallPart`, executes the real method, and returns a `FunctionResponsePart` so the model can continue.

Keep the handler thin. Validate arguments, call your existing repository or ViewModel, and return a structured success or error object. Do not let the model bypass authentication or confirmation steps that your normal UI enforces.

## Practical limits and tips

- Prefer the Gemini Developer API for the free tier during development. Switch to a production project and App Check before you ship.
- Audio responses stream continuously. Buffer and play them with an audio player that supports low-latency output.
- Test on a physical device. Emulators can introduce extra audio latency.
- Rate limits and concurrent session caps differ between the Gemini Developer API and the Agent Platform. Check the current [Live API limits](https://firebase.google.com/docs/ai-logic/live-api/limits-and-specs).
- Gemini 2.5 models face restrictions on new projects. Stable Live 2.5 models remain available, but confirm the exact ID in the docs.
- Pair Live voice with on-device features only when the task fits. For short offline drafts, see the hybrid inference pattern instead.

## Conclusion

Adding a Gemini Live session takes a Firebase project, the AI Logic SDK, a microphone permission, and a few lines to create a `LiveModel` and start an audio conversation. Function calling extends the same session so the model can act on your app’s data.

Start with a single-turn voice prompt and a simple list or note action. Measure latency on real devices, enforce App Check, and keep model IDs current. The same SDK that powers text generation also powers the voice path, so you maintain one AI integration for both.

## Sources

- [Gemini Live API | Android Developers](https://developer.android.com/ai/gemini/live)
- [Get started with the Gemini Live API using Firebase AI Logic](https://firebase.google.com/docs/ai-logic/live-api)
- [Limits and specifications of the Live API](https://firebase.google.com/docs/ai-logic/live-api/limits-and-specs)
- [Learn about supported models | Firebase AI Logic](https://firebase.google.com/docs/ai-logic/models)
- [Building a cooking assistant with Firebase AI Logic (YouTube)](https://www.youtube.com/watch?v=OaRI87uwU-k)
