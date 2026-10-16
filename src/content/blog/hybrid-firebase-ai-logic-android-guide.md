---
title: "How to Set Up Hybrid Inference with Firebase AI Logic on Android"
description: "Step-by-step guide to enable on-device and cloud Gemini models with Firebase AI Logic hybrid inference for privacy, offline support, and cost control on Android."
pubDate: 2026-10-16T09:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "firebase", "ai-tools", "tutorials", "gemini"]
noindex: false
---

Android apps that call Gemini models face a trade-off. Cloud models handle complex reasoning and long contexts. On-device models keep data local and work without a network. Firebase AI Logic hybrid inference lets you prefer one and fall back to the other automatically.

Gemini 4 Argon is available on the paid Gemini API tier through Firebase AI Logic. You can point hybrid calls at Argon or lighter models such as Gemini 3.8 Flash. This guide shows the exact setup and code paths from the official Android documentation.

## What hybrid inference does

Hybrid inference runs the request on the on-device model when it is available and supports the input type. If the on-device model cannot handle the request, the SDK falls back to the cloud model you named. You can also reverse the preference or force one path only.

Supported inference modes are:

- PREFER_ON_DEVICE — try on-device first, then cloud
- PREFER_IN_CLOUD — try cloud first, then on-device
- ONLY_ON_DEVICE — on-device or fail
- ONLY_IN_CLOUD — cloud only

On-device inference requires Firebase AI Logic SDK 17.10.0 or later (BoM 34.10.0+) and runs on specific Android devices that include the on-device model. Starting 2 November 2026, Firebase App Check enforcement is required for all Firebase AI Logic calls.

![Laptop showing source code next to an Android phone on a desk](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Create or open a Firebase project and register your Android app. Enable the Gemini Developer API (or Agent Platform Gemini API) under AI Logic in the Firebase console. Add the Google services Gradle plugin if it is not already present.

Install the Android SDK and have a device or emulator that meets the on-device model requirements if you want local inference. For Gemini 4 Argon you need a paid Gemini API plan. Free-tier models still work for lighter hybrid tests.

If you already use Gemini in Android Studio or via the CLI, the client-side Firebase path is separate. See our guide on [adding Gemini 4 Argon to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for the basic model call before you add hybrid options.

## Add the SDKs

In your app-level `build.gradle.kts` add the Firebase AI Logic dependency and the on-device preview SDK. Use the Firebase BoM for version alignment:

```kotlin
dependencies {
  implementation(platform("com.google.firebase:firebase-bom:35.0.0"))
  implementation("com.google.firebase:firebase-ai")
  implementation("com.google.firebase:firebase-ai-ondevice:16.0.0-beta06")
  implementation("com.google.firebase:firebase-appcheck-debug") // or production App Check
}
```

Sync Gradle. The on-device library is still marked experimental; the `@OptIn(PublicPreviewAPI::class)` annotation is required on the call site.

## Initialize hybrid generation

Create a `GenerativeModel` that names a cloud model and sets the inference mode:

```kotlin
@OptIn(PublicPreviewAPI::class)
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-4-argon", // or "gemini-3.8-flash"
        onDeviceConfig = OnDeviceConfig(
            mode = InferenceMode.PREFER_ON_DEVICE
        )
    )
```

For Gemini 4 Argon the model ID is `gemini-4-argon`. The 1-million-token context applies on the cloud path. On-device models use a smaller context and support a subset of input types.

You can also set generation config and on-device token limits separately:

```kotlin
val onDeviceConfig = OnDeviceConfig(
    mode = InferenceMode.PREFER_ON_DEVICE,
    maxOutputTokens = 200
)
```

## Call the model

Send a prompt the same way you do for a pure cloud model:

```kotlin
val response = model.generateContent("Summarize this note in three bullet points: …")
val text = response.text
```

If the device has a compatible on-device model and the request fits its capabilities, the call stays local. Otherwise the SDK uses the named cloud model and returns the result. Errors on the preferred path are logged and the fallback runs.

![Android smartphone on a wooden surface ready for testing](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Tips for reliable hybrid behavior

Test both paths. Disable network or force ONLY_ON_DEVICE to confirm the local model works on your target devices. Force ONLY_IN_CLOUD when you need the full context window or multimodal features that on-device models do not yet support.

Enable App Check before the November 2026 enforcement date. Debug builds can use the debug provider; production builds need a real App Check provider.

Watch token usage and latency. On-device calls avoid network round-trips and cloud billing for that request. Cloud fallbacks for Argon incur the paid-tier rates. Set modest `maxOutputTokens` on the on-device config so local generations stay short.

Gemini 4 Argon is designed for long-horizon and complex reasoning. Use it on the cloud path for tasks that need deep planning. Keep lighter models for routine on-device summarization or classification.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Common setup issues

If the on-device path never activates, confirm the device is on the supported list and that you added the `firebase-ai-ondevice` dependency. The experimental opt-in annotation is required; without it the code will not compile.

Model name mismatches produce clear errors. Double-check `gemini-4-argon` versus the shorter Flash IDs. Paid-tier access is required for Argon; free-tier projects can still test hybrid with other available models.

App Check failures appear after the enforcement date or if you enable it early. Register the debug token or production provider before shipping.

## Conclusion

Hybrid inference in Firebase AI Logic gives Android apps a practical way to stay responsive offline and keep sensitive data on the device while still reaching frontier models like Gemini 4 Argon when the task demands it. Add the two SDKs, set PREFER_ON_DEVICE (or another mode), and call `generateContent` as usual.

Start with a short summarization prompt on a supported device, confirm which path ran, then expand to the features your users need.

## Sources

- [Build hybrid experiences in Android apps with on-device and cloud-hosted models](https://firebase.google.com/docs/ai-logic/hybrid/android/get-started) — Firebase
- [Configuration options for hybrid experiences](https://firebase.google.com/docs/ai-logic/hybrid/android/configuration-options) — Firebase
- [Get started with the Gemini API using Firebase AI Logic](https://firebase.google.com/docs/ai-logic/get-started) — Firebase
- [Gemini 4 Argon is now available for developers](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/) — Google Blog
