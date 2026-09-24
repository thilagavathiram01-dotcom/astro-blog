---
title: "Call Gemini 3.8 Flash from Android with Firebase"
description: "Add Gemini 3.8 Flash to an Android app with Firebase AI Logic: project setup, App Check, Kotlin generateContent, and the November 2026 enforcement date."
pubDate: 2026-09-24T16:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "gemini", "android", "tutorials", "developer"]
noindex: false
---

Gemini 3.8 Flash is generally available and listed in Firebase AI Logic as a supported model. You can call it from an Android app without putting a Gemini API key in the APK.

Firebase AI Logic is the client SDK path for Gemini on mobile and web. Google documents it for text, multimodal prompts, structured output, tools, and image models. This guide covers the official Android get-started flow for `gemini-3.8-flash`.

## What you get with 3.8 Flash

Google describes Gemini 3.8 Flash as its most intelligent Flash model for long-horizon software engineering, agents, and multi-step work. Official model pages list a 1,048,576 token input window and 65,536 max output tokens.

Supported inputs include text, image, video, audio, and PDF. Output for this model ID is text. Thinking levels `low`, `medium`, and `high` are supported. `minimal` is not supported and returns an error.

Introductory API pricing on the Gemini Developer API is $0.75 per million input tokens and $3.75 per million output tokens through 31 December 2026. Standard rates of $1.50 / $7.50 take effect on 1 January 2027. Confirm current figures on Google's pricing page before you ship.



![Developer working on a laptop with code on the screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Prerequisites

Official Kotlin requirements:

- Latest Android Studio
- App target API level 21 or higher
- A Firebase project you can open in the Firebase console

You do not need Google Analytics to use the Firebase AI Logic SDKs.

Firebase also publishes an Android quickstart under `firebase/quickstart-android` in the `firebase-ai` folder. Use it if you want a working sample before you touch production code.

## Step 1: Enable AI Logic in the console

1. Sign in at the [Firebase console](https://console.firebase.google.com/) and select or create a project.
2. Open **AI Services** > **AI Logic**.
3. Register the Android app if the workflow asks for it, then add the Firebase config file to the app module.
4. Finish the API setup for your provider.

Two backends exist:

- **Gemini Developer API** (`GenerativeBackend.googleAI()`). Good for getting started. The Developer API free tier is available for many models, including access to `gemini-3.8-flash` without requiring the Blaze plan for that model, per Firebase release notes from 2 September 2026.
- **Agent Platform Gemini API** (formerly Vertex AI). Use this when you already live in Google Cloud or need location controls.

Starting early July 2026, the console workflow automatically enforces Firebase App Check for AI Logic. That is the control that stops random clients from burning your quota.

## Step 2: Add the Android libraries

In the app-level Gradle file, pin the Firebase Android BoM and add AI Logic plus the App Check debug provider:

```kotlin
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:34.19.0"))
    implementation("com.google.firebase:firebase-ai")
    implementation("com.google.firebase:firebase-appcheck-debug")
}
```

BoM 34.19.0 is the version documented on Firebase's Android get-started page as of 24 September 2026. Without the BoM, Firebase documents `firebase-ai:17.17.0` and `firebase-appcheck-debug:19.4.1`.

Java callers also add Guava Android and Reactive Streams, as listed in the same page.

## Step 3: Configure App Check for local builds

App Check enforcement for Firebase AI Logic becomes required on **2 November 2026**. Set it up now so debug builds do not fail after that date.

Use the debug provider on emulators and unsigned local builds. Register the debug token under **Security** > **App Check** > **Apps** > **Manage debug tokens**.

Ship Play Integrity (or the provider Google documents for your distribution) on production builds. Do not leave the debug provider in a Play Store APK.

## Step 4: Create a Gemini 3.8 Flash model

Kotlin from the official get-started guide:

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel("gemini-3.8-flash")
```

For Agent Platform instead of the Developer API, swap the backend to `GenerativeBackend.agentPlatform()` and pass a location when your project requires one. The Kotlin rename from `vertexAI` to `agentPlatform` is available from Firebase AI Logic Android SDK v17.15.0+ (BoM v34.17.0+).

Keep the model ID exactly `gemini-3.8-flash`. That is the stable ID on both the Gemini API model card and Firebase's get-started snippets.



![Smartphone and notebook on a desk during an app build](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Step 5: Send a text prompt

`generateContent()` is a suspend function. Call it from a coroutine scope:

```kotlin
scope.launch {
    val model = Firebase.ai(backend = GenerativeBackend.googleAI())
        .generativeModel("gemini-3.8-flash")
    val prompt = "Write a story about a magic backpack."
    val response = model.generateContent(prompt)
    println(response.text)
}
```

That prompt is the sample Google uses across Firebase AI Logic and the Gemini API docs. Replace it with your product copy, but keep the same call shape.

For images, pass a bitmap plus text inside a `content { }` builder, as shown on Android Developers' Gemini Developer API page.

## Watch the official Android walkthrough

Google's Firebase team recorded the Android setup. Model IDs in older videos may still say 2.5 Flash. Use `gemini-3.8-flash` in new code.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Migrate off Gemini 2.5 before October

Firebase's AI Logic FAQ states that Gemini 2.5 Pro, Flash, and Flash-Lite shut down in October 2026, and new projects cannot start on them. Shutdown dates:

- Gemini Developer API: 16 October 2026
- Agent Platform Gemini API: 20 October 2026
- `gemini-2.5-flash-image` (Nano Banana): 2 October 2026 on both providers

Stable Gemini Live API 2.5 models are not in that shutdown list. For general text, move to `gemini-3.8-flash` or another current 3.x ID now.

## Tips that save a support ticket

- Prefer the BoM so `firebase-ai` stays aligned with App Check.
- Do not embed a Gemini Developer API key in the client. Firebase AI Logic is the documented way to call Gemini from the app without that key.
- Turn on AI monitoring in the Firebase console so you can see token use per request.
- For on-device fallback when the network is gone, use the hybrid inference path documented in [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/). That path needs `firebase-ai-ondevice` and supported hardware.
- Pair client calls with spend controls if you already run Gemini from Cloud Functions. See [Firebase spend caps for Gemini functions](/blog/firebase-spend-caps-gemini-functions/) for the server-side cap.

## What to build next

After a single `generateContent()` call works, the same SDK covers chat sessions, streaming, structured JSON, function calling, Search grounding, Maps grounding, image analysis, and the Live API (via a `LiveModel`, not `GenerativeModel`).

Gemini 3.8 Flash does not support the Live API or image generation on that model ID. Use a Live model for voice, and an image model such as Gemini 3.1 Flash Image when you need pixels back.

## Conclusion

Point Firebase AI Logic at `gemini-3.8-flash`, protect the endpoint with App Check, and call `generateContent()` from a coroutine. That is the supported Android path as of September 2026.

Finish App Check before 2 November 2026. Finish the 2.5 model migration before mid-October 2026. Then iterate on prompts and tools instead of plumbing.

## Sources

- [Get started with the Gemini API using the Firebase AI Logic SDKs](https://firebase.google.com/docs/ai-logic/get-started)
- [Gemini API using Firebase AI Logic](https://firebase.google.com/docs/ai-logic)
- [Generate text using the Gemini API](https://firebase.google.com/docs/ai-logic/generate-text)
- [FAQ and troubleshooting | Firebase AI Logic](https://firebase.google.com/docs/ai-logic/faq-and-troubleshooting)
- [Gemini Developer API on Android](https://developer.android.com/ai/gemini/developer-api)
- [Gemini 3.8 Flash model card](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- [Firebase release notes](https://firebase.google.com/support/releases)
