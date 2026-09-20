---
title: "How to Build On-Device Android AI Agents with ADK for Kotlin 1.0"
description: "Google ADK for Kotlin 1.0 is generally available. Build production agents on Android with LiteRT-LM, ML Kit Gemini Nano, Firebase AI Logic, Room sessions, and compile-time tools."
pubDate: 2026-09-20T12:00:00
tags: ["ai", "android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&h=630&q=80"
---

You no longer need a Python sidecar to ship an agentic Android feature. On 9 September 2026, Google marked **Agent Development Kit (ADK) for Kotlin 1.0** generally available. The kit matches ADK Core for Python and Java, then adds Android modules for on-device models, hybrid cloud calls, Room-backed sessions, and AppSearch memory.

InfoQ covered the same 1.0 line on 20 September 2026, which is why the release is worth a practical walkthrough today: the API is stable enough to put in a shipping app, as long as you pick the right backend for tools and privacy.

This guide is the path from Gradle to a first on-device agent, then a hybrid cloud agent that pauses for human confirmation.

## What ADK for Kotlin 1.0 actually ships

ADK is an open-source, code-first toolkit. The Kotlin core is **Kotlin Multiplatform** and backend-agnostic. You swap models without rewriting `LlmAgent` code.

Version 1.0 brings feature parity with ADK Core:

- Hierarchical multi-agent systems and child-agent delegation
- Context compaction for multi-turn chats
- Human-in-the-loop confirmation flows
- `@Tool` / `@Param` annotations processed by KSP (no runtime reflection)
- Session pause, serialize, and resume
- First-party Java interop
- Vertex AI session and memory services for server-side Kotlin

On Android it adds modular engines:

| Backend | Module | Where it runs | Tool calling |
| --- | --- | --- | --- |
| LiteRT-LM (Gemma and similar) | `google-adk-kotlin-litertlm` | On-device | Yes |
| Gemini Nano via ML Kit GenAI | `google-adk-kotlin-mlkit-android` | On-device (beta) | Not yet |
| Gemini in the cloud | `google-adk-kotlin-firebase-android` | Cloud via Firebase AI Logic | Yes |

GitHub’s ADK Kotlin README is explicit: ML Kit still drops `functionCall` / `functionResponse` parts. Use LiteRT-LM or Firebase when the agent must call tools.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/zgrOwow_uTQ" title="Introducing Agent Development Kit — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prerequisites

Official Android docs and the Kotlin quickstart list:

- Android Studio with **compileSdk 34+** and **minSdk 24+** for the Android library
- **Java 17** (the quickstart uses `jvmToolchain(17)`)
- **Gradle 8+** and **KSP** matching your Kotlin version (docs show `2.1.20-2.0.1` with Kotlin 2.1.20)
- For cloud agents: a Firebase project with AI Logic enabled
- For Gemini Nano: a device that exposes ML Kit GenAI / AICore
- For LiteRT-LM: a packaged on-device model such as Gemma, plus the LiteRT-LM engine module

Do the [Kotlin JVM quickstart](https://adk.dev/get-started/kotlin/) first if you have never used `LlmAgent`. The agent class is the same on Android.

![Developer working on an Android app with a phone on the desk](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 1 — Add the 1.0 Gradle dependencies

The official Kotlin quickstart pins **1.0.0** for JVM:

```kotlin
plugins {
    kotlin("jvm") version "2.1.20"
    id("com.google.devtools.ksp") version "2.1.20-2.0.1"
    application
}

dependencies {
    implementation("com.google.adk:google-adk-kotlin-core:1.0.0")
    implementation("com.google.adk:google-adk-kotlin-webserver:1.0.0")
    ksp("com.google.adk:google-adk-kotlin-processor:1.0.0")
}
```

On Android, start from Android’s ADK page and bump artifacts to the 1.0 line published on Maven Central (the May 2026 Android snippet still showed `0.1.0`). Add only the engine you need:

```kotlin
plugins {
    id("com.android.application")
    kotlin("android")
    id("com.google.devtools.ksp") version "2.1.20-2.0.1"
}

dependencies {
    implementation("com.google.adk:google-adk-kotlin-core-android:1.0.0")
    ksp("com.google.adk:google-adk-kotlin-processor:1.0.0")
    // Pick one or compose them:
    implementation("com.google.adk:google-adk-kotlin-litertlm:1.0.0")
    implementation("com.google.adk:google-adk-kotlin-mlkit-android:1.0.0") // beta Nano
    implementation("com.google.adk:google-adk-kotlin-firebase-android:1.0.0")
}

kotlin {
    jvmToolchain(17)
}
```

Confirm the exact 1.0.0 (or newer patch such as 1.1.0 on the JVM core) on [Maven Central / the GitHub release notes](https://github.com/google/adk-kotlin/releases/tag/v1.0.0) before you lock versions in CI.

Do **not** pass a Gemini `API_KEY` through the GenAI SDK on Android. The ADK Kotlin README states that path is blocked. Use Firebase AI Logic for cloud models.

## Step 2 — Define tools with KSP, not hand-written JSON

ADK uses Kotlin Symbol Processing to emit function-call schemas at compile time. You write a service class:

```kotlin
class TimeService {
    @Tool
    fun getCurrentTime(
        @Param("Name of the city to get the time for") city: String
    ): Map<String, String> {
        return mapOf("city" to city, "time" to "The time is 10:30am.")
    }
}
```

KSP generates `TimeService().generatedTools()`. That is the list you pass into `LlmAgent`. Suspend functions are supported. There is no runtime reflection scan of your APK.

For money movement or deletes, set confirmation on the tool (the 1.0 financial-assistant sample uses `requireConfirmation = true`). The runner emits a synthetic confirmation call. Your UI collects a yes/no, then you resume with a `FunctionResponse` that includes the confirmed key.

## Step 3 — Choose on-device vs hybrid

### On-device chat with Gemini Nano (no tools yet)

Android’s ADK guide wraps ML Kit’s `GenerativeModel`:

```kotlin
val onDeviceModel = GenaiPrompt.create(
    generativeModel = generativeModel, // from ML Kit GenAI
    name = "gemini-nano",
)

val agent = LlmAgent(
    name = "on_device_agent",
    model = onDeviceModel,
    instruction = Instruction("You are a helpful assistant. Keep answers short."),
)
```

Use this for summaries, rewrite, and offline Q&A that must never leave the phone. Do not attach `@Tool` methods until ML Kit documents tool calling.

### On-device tools with LiteRT-LM

If the agent must open a local file, query Room, or call an app API while offline, use LiteRT-LM. Google’s 1.0 announcement and the repo README both list **full tool calling** on that engine, including Gemma-class models packaged in the APK or an asset pack.

### Cloud or hybrid with Firebase AI Logic

The official 1.0 financial-assistant example uses **Gemini 3.8 Flash** through Firebase AI, Room for session rows, and AppSearch for semantic memory. Same `LlmAgent` constructor; only the `Model` changes. That is the point of the KMP core.

A useful production pattern from the earlier ADK for Android 0.1 write-up still applies: keep a small on-device sub-agent for private documents, and let a cloud orchestrator handle multi-step planning.

![Close-up of smartphone screen with code in the background](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 4 — Persist sessions so process death is not a reset

Phone agents die when the user backgrounds the app. ADK 1.0 wires:

- **Room / SQLite** for session transcripts and resumable state
- **AppSearch** for on-device semantic memory
- Local file artifacts and APK-packaged **skills** (`SKILL.md` playbooks loaded with progressive disclosure)

Wire the runner with those services instead of `InMemoryRunner` alone when you leave the sample. Skills stay out of the prompt until the agent asks for them, which keeps Nano and Gemma context windows usable.

## Step 5 — Run and debug the first turn

On the JVM, the quickstart uses `InMemoryRunner` and coroutines. On Android, run the same loop on a background dispatcher and collect events onto the UI thread.

Checklist after the first successful reply:

1. Confirm KSP generated `generatedTools()` (if the method is missing, the KSP plugin is not applied).
2. If tools never fire on Nano, switch the model to LiteRT-LM or Firebase — that is expected.
3. If cloud calls fail on-device, check that you used Firebase AI, not a raw API key.
4. Kill the app mid-conversation and reopen it only after Room persistence is enabled.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/44C8u0CDtSo" title="Getting started with Agent Development Kit — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## When to use ADK versus a single Gemini call

Stay with ML Kit or Firebase AI Logic directly if you only need one-shot generation. Reach for ADK when you need at least one of:

- Multiple tools and a turn loop
- Child agents with different models (Nano locally, Flash in the cloud)
- A confirmation gate before a side effect
- Skills and SOPs that should not live in the system prompt all the time
- Session resume after the process is killed

That is the same reason Google’s sample incident-triage agent loads a `SKILL.md` instead of pasting a runbook into `Instruction`.

## Conclusion

ADK for Kotlin 1.0 is the first time Android and JVM Kotlin share a production agent API with Python-class orchestration. Start with the JVM quickstart, add `google-adk-kotlin-core-android` plus one engine module, generate tools with KSP, and pick LiteRT-LM or Firebase whenever the agent must call functions.

Gemini Nano via ML Kit is fine for private, offline chat today. Treat tool calling on Nano as beta until Google enables `functionCall` parts. Persist with Room before you demo the app to anyone who will background it.

Docs and samples: [adk.dev Kotlin quickstart](https://adk.dev/get-started/kotlin/), [Build ADK agents for Android](https://developer.android.com/ai/adk), and [google/adk-kotlin](https://github.com/google/adk-kotlin).

## Sources

- [Announcing ADK for Kotlin 1.0](https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/) — Google Developers Blog (9 September 2026)
- [ADK for Kotlin 1.0 reaches feature parity with Python](https://www.infoq.com/news/2026/09/google-adk-1-0-released/) — InfoQ (20 September 2026)
- [Kotlin Quickstart for ADK](https://adk.dev/get-started/kotlin/) — adk.dev
- [Build ADK agents for Android](https://developer.android.com/ai/adk) — Android Developers
- [google/adk-kotlin v1.0.0](https://github.com/google/adk-kotlin/releases/tag/v1.0.0) — GitHub
- [Introducing Agent Development Kit (YouTube)](https://www.youtube.com/watch?v=zgrOwow_uTQ)
- [Getting started with Agent Development Kit (YouTube)](https://www.youtube.com/watch?v=44C8u0CDtSo)
