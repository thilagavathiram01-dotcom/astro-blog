---
title: "Hybrid AI Inference with Firebase on Android"
description: "Step-by-step guide to configure hybrid AI inference with Firebase AI Logic and Gemini Nano on Android for privacy and offline use."
pubDate: 2026-11-10T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Android developers can now route AI requests between on-device Gemini Nano models and cloud Gemini models with a single SDK call. Firebase AI Logic handles the switch automatically. This reduces cloud costs for simple tasks, keeps sensitive data on the device, and keeps features working offline.

This guide walks through the setup for hybrid inference on Android. It assumes a basic Firebase project and Android Studio. For pure cloud Gemini 4 Argon integration, see our earlier post on [adding Gemini 4 Argon to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

## Why Use Hybrid Inference

On-device models run locally through Android’s AICore service and the ML Kit Prompt API. They offer zero network latency, no inference cost, and full privacy because prompts never leave the phone. Cloud models handle complex reasoning, longer contexts, and multimodal tasks that exceed on-device limits.

Hybrid mode lets you prefer the local model when it is available and fall back to the cloud otherwise. The reverse is also possible. Supported devices include recent Pixel and select Galaxy models that carry Gemini Nano. Check the official ML Kit device list for the current set.

![Android phone showing AI features](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need:

- Android Studio with the latest stable version
- An Android app targeting API 24 or higher
- A Firebase project with the AI Logic product enabled
- Billing enabled on the linked Google Cloud project if you use paid Gemini models
- Firebase App Check configured (required for Firebase AI Logic starting 2 November 2026)

Enroll eligible devices in the AICore Developer Preview if you want to test the newest Gemini Nano 4 preview models.

## Step 1: Add the Dependencies

In your module-level `build.gradle.kts`, add the Firebase BoM and the AI Logic libraries:

```kotlin
dependencies {
    implementation(platform("com.google.firebase:firebase-bom:35.1.0"))
    implementation("com.google.firebase:firebase-ai")
    implementation("com.google.firebase:firebase-ai-ondevice:16.0.0-beta01")
    implementation("com.google.firebase:firebase-appcheck-debug") // for testing
}
```

Sync the project. The on-device artifact provides the hybrid routing layer on top of ML Kit.

## Step 2: Initialize Firebase and the Model

In your Application class or a ViewModel, initialize Firebase and create the generative model with an on-device configuration:

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-4-argon", // or gemini-3.8-flash for lighter cloud fallback
        onDeviceConfig = OnDeviceConfig(
            mode = InferenceMode.PREFER_ON_DEVICE
        )
    )
```

The `PREFER_ON_DEVICE` mode tries Gemini Nano first. If the model is unavailable, unsupported for the request type, or the device is offline, the SDK automatically falls back to the named cloud model.

Other modes include:

- `PREFER_IN_CLOUD`: Prefer the cloud model; fall back to on-device only when offline.
- `ONLY_ON_DEVICE`: Fail if the local model cannot handle the request.
- `ONLY_IN_CLOUD`: Always use the cloud model.

## Step 3: Generate Content

Call the model the same way you would for a pure cloud request:

```kotlin
val prompt = "Summarize the key points of this meeting note in three bullets."
val response = model.generateContent(prompt)
println(response.text)
```

On-device inference currently supports single-turn text generation (and limited image input on supported hardware). Multi-turn chat and advanced tool calling still route to the cloud. Streaming responses work for both paths.

![Developer coding on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Step 4: Handle Model Availability

Before relying on on-device execution, check availability. The ML Kit GenerativeModel client exposes download status. If the model is `DOWNLOADABLE`, prompt the user to download it through the system UI. AICore manages the download and updates.

Test on both a supported flagship device and an older phone. On unsupported hardware the hybrid SDK should silently fall back to the cloud model you specified.

## Tips for Production

- Enable App Check with Play Integrity or Debug providers before shipping. Unprotected client calls can lead to unexpected billing.
- Prefer `PREFER_ON_DEVICE` for short summarization, classification, or extraction tasks that stay under the on-device context window.
- Monitor Firebase usage dashboards to see the split between on-device and cloud requests.
- Keep a lighter cloud model (for example gemini-3.8-flash) as the fallback to control costs.
- Document the privacy benefit in your app’s privacy policy: sensitive prompts stay on-device when possible.

## Watch the Official Session

The Android Developers team covered hybrid inference and Gemini Nano 4 at the 2026 Dev Summit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IPKerNnpddQ"
    title="Build optimized Android Apps with Firebase AI Logic and Gemini Nano 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Hybrid inference with Firebase AI Logic gives Android apps the best of both worlds. Simple or private tasks stay on Gemini Nano. Complex work falls back to Gemini 4 Argon or lighter cloud models without extra code. Start with the `PREFER_ON_DEVICE` mode on a supported Pixel or Galaxy device, verify the fallback path, and ship features that work offline and respect user privacy.

## Sources

- Firebase documentation: Build hybrid experiences in Android apps
- Firebase documentation: Configuration options for hybrid experiences
- Android Developers Blog: Build intelligent Android apps – Cloud and hybrid inference
- ML Kit documentation: Custom generation and agent device support
- Official Android Developers YouTube session on Firebase AI Logic and Gemini Nano 4
