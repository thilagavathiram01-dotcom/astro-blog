---
title: "How to Use Firebase AI Logic Hybrid Inference on Android"
description: "A practical guide to Google's Firebase AI Logic Hybrid API: route Gemini requests to on-device models when they are available, then fall back to the cloud without rewriting your app."
pubDate: 2026-09-17
tags: ["android", "ai-tools", "tutorials"]
heroImage: "/images/firebase-ai-logic-hybrid-inference.svg"
---

On-device Gemini Nano is fast and private. Cloud Gemini is more capable and works on more phones. Most product features need both: a draft that still works on an airplane, and a richer answer when the network is up.

**Firebase AI Logic hybrid inference** is Google's official way to use one SDK call for that split. You set a routing mode. The SDK tries the on-device model when the request is supported, then falls back to a cloud Gemini model when it is not.

This guide is for Android developers who already know how to add Firebase, and want a shipping pattern instead of a second AI stack.

## What hybrid inference actually does

[Firebase AI Logic](https://firebase.google.com/docs/ai-logic/hybrid) can run inference on-device when a compatible model is present, and use a cloud-hosted Gemini model otherwise. Android documentation describes the same idea as a **unified interface** with an `onDeviceConfig` that picks the route.

Google's stated reasons to prefer on-device inference:

- Better privacy for the prompt and the output
- Local context that never has to leave the phone
- No per-call inference bill when the request stays on-device
- Features that still work offline

Hybrid routing is the compatibility layer. You reach users whose phones have Gemini Nano *and* users whose phones do not, without two separate product paths.

On-device inference through this API is supported on **Android apps using Firebase AI Logic SDK v17.10.0+ (BoM v34.10.0+)** on [devices that support the on-device path](https://firebase.google.com/docs/ai-logic/hybrid/android/get-started). It is still an experimental surface. Treat it as a preview you can ship behind a flag, not as a guarantee on every SKU in your Play Console.

## What on-device can and cannot do

Official Firebase docs are strict about the on-device half:

- **Single-turn text generation only** (not chat sessions)
- Streaming or non-streaming output
- Text-only input, or text plus **one Bitmap image**
- No multi-turn memory on the device path

Cloud inference through the same SDK still supports the broader Firebase AI Logic Gemini catalog (Vertex AI in Firebase or the Gemini Developer API), including newer models such as Gemini 3.8 Flash.

That split is the design constraint. A restaurant-review draft from a photo and a few tags can stay on-device. A grounded answer that needs Maps or live web search cannot.

Google also notes that **Gemini 2.5 models shut down in October 2026**. New work should target a current model such as `gemini-3.8-flash` or `gemini-3.1-flash-lite` for the cloud side. Confirm the current model IDs in Firebase docs before you copy a snippet into production.

From 2 November 2026, **Firebase App Check enforcement is required** to use Firebase AI Logic. Plan that now if you are still on an open debug token.

## The four routing modes

Android documents four `InferenceMode` values on `OnDeviceConfig`:

- **PREFER_ON_DEVICE** — try Nano locally; if the model is missing or the request is unsupported, fall back to cloud
- **PREFER_IN_CLOUD** — try cloud while online; fall back to on-device only when the device is offline
- **ONLY_ON_DEVICE** — stay local; throw if on-device inference is unavailable
- **ONLY_IN_CLOUD** — stay in the cloud; throw if the cloud path is unavailable

Start with `PREFER_ON_DEVICE` for private, short drafts. Use `PREFER_IN_CLOUD` when quality matters more than offline and you only need a last-resort local path. Use the `ONLY_*` modes when a silent fallback would be a product bug (for example, a compliance feature that must never leave the device).

## Watch the official overview

The Android Developers talk below is a useful 45-minute pass over on-device, cloud, and hybrid work from Google I/O 2026. Watch the hybrid and Firebase sections after you read the routing table.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/_iuXykdlTkk" title="Build intelligent Android apps with Google's AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How to implement it

Exact artifact versions move. Follow the current [Android get-started guide](https://firebase.google.com/docs/ai-logic/hybrid/android/get-started). The workflow does not.

### 1. Add Firebase AI Logic and the on-device artifact

Google's experimental write-up uses both the core Firebase AI package and `firebase-ai-ondevice`. You need the on-device artifact for local routing. Pin versions from the current docs (examples in 2026 posts used `firebase-ai` 17.10.x and `firebase-ai-ondevice` 16.0.0-beta.x).

### 2. Create one model client with a routing mode

Android's hybrid snippet looks like this shape:

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-3.5-flash",
        onDeviceConfig = OnDeviceConfig(mode = InferenceMode.PREFER_ON_DEVICE)
    )

val response = model.generateContent("Write a short review of this cafe.")
```

A later Android Developers Blog example used `gemini-3.1-flash-lite` with `InferenceMode.PREFER_ON_DEVICE` for a restaurant-review draft. Pick the cloud model ID from the live Firebase model list, not from an old gist.

### 3. Keep prompts inside the on-device contract

If you want the local path to win:

- One user turn, not a chat history
- One image Bitmap or none
- A short instruction ("draft a two-sentence review from these tags")
- No tool use, Maps grounding, or URL context on that call

If the product later needs grounding, make a **second** cloud-only call. Do not hide a Maps request inside a `PREFER_ON_DEVICE` prompt and hope the fallback is invisible.

### 4. Tell the UI which path ran

Log and, when it helps the user, surface a quiet status: "Drafted on device" versus "Drafted online." Users who care about privacy will look for that. Testers will need it when a device is on the support list but AICore has not finished downloading.

### 5. Handle the failure modes as product states

- On-device unavailable + `ONLY_ON_DEVICE` → hide the button or show "not supported on this phone"
- Offline + `ONLY_IN_CLOUD` → show a reconnect state
- App Check missing after the November 2026 deadline → the call will not be a model bug
- Backgrounded activity → do not assume Nano-class work is legal in a worker; ML Kit GenAI already blocks background use. Keep hybrid generation in the foreground too unless docs say otherwise

## A concrete feature: review draft with a Maps link

Google's July 2026 "cloud and hybrid inference" post walks through a restaurant feature:

1. The user picks topics (service, noise, food).
2. Hybrid inference drafts the review text, preferring on-device.
3. A separate cloud or Maps path can attach a place deep link when the user is online.

That is the right grain. The private sentence stays local when Nano is present. The public place identity can use the network.

Do not generate the review *and* the Maps deep link in one on-device call. The on-device contract does not include that grounding.

## Hybrid versus ML Kit GenAI

They overlap on "run Gemini Nano locally," but they are not the same product:

| Job | Prefer |
| --- | --- |
| Summarize, proofread, rewrite, caption, or transcribe with a tuned task API | [ML Kit GenAI](https://developers.google.com/ml-kit/genai) |
| One SDK for local *or* cloud Gemini with explicit routing | Firebase AI Logic hybrid |
| Chat, grounding, or a large cloud model | Firebase AI Logic cloud path |
| Custom on-device prompt with no Firebase | ML Kit Prompt API or AICore preview |

If the feature is "proofread this SMS," start with ML Kit. If the feature is "draft this review on-device when we can, otherwise use Flash in the cloud," use hybrid inference.

## Practical limits to write into the spec

- Experimental API: expect package names and beta versions to move
- On-device path is not chat
- Device support is a list, not "all Android 15+ phones"
- Cloud model IDs expire; 2.5 is on a shutdown clock
- App Check becomes mandatory on 2 November 2026
- You still own safety, rate limits, and what you show when fallback happens

## Conclusion

Firebase AI Logic hybrid inference is a routing policy, not a new model. You keep one `generateContent` call, set `PREFER_ON_DEVICE` or `PREFER_IN_CLOUD`, and stay inside the single-turn, optional-one-image contract when you want Nano to win.

Ship one narrow feature first: a short draft that is useful offline and acceptable when it silently uses Flash. Add App Check before November 2026. Point the cloud model at a current Gemini 3.x ID. Leave chat and grounding on the cloud path.

That is enough to stop maintaining two AI clients for the same text box.

## Sources

- [Build hybrid and on-device experiences with Firebase AI Logic](https://firebase.google.com/docs/ai-logic/hybrid) — Firebase documentation
- [Build hybrid experiences in Android apps](https://firebase.google.com/docs/ai-logic/hybrid/android/get-started) — Firebase documentation
- [Configuration options for hybrid experiences](https://firebase.google.com/docs/ai-logic/hybrid/android/configuration-options) — Firebase documentation
- [Hybrid inference](https://developer.android.com/ai/hybrid) — Android Developers
- [Experimental hybrid inference and new Gemini models for Android](https://developer.android.com/blog/posts/experimental-hybrid-inference-and-new-gemini-models-for-android) — Android Developers' Blog (17 April 2026)
- [Build intelligent Android apps: Cloud and hybrid inference](https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-cloud-hybrid-inference.html) — Android Developers Blog (21 July 2026)
- [Top AI on Android updates from Google I/O 2026](https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html)
