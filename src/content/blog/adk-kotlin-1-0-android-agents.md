---
title: "How to Build On-Device and Cloud AI Agents with ADK for Kotlin 1.0"
description: "Google’s Agent Development Kit for Kotlin is now 1.0. Use @Tool annotations, LiteRT-LM or Firebase AI Logic, Room sessions, and human-in-the-loop confirmation on Android or the JVM."
pubDate: 2026-09-20
tags: ["ai-tools", "android", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
---

Google declared **Agent Development Kit (ADK) for Kotlin 1.0** generally available on September 9, 2026. The release matches ADK 1.0 Core (the same multi-agent model used in the Python and Java kits) and adds Android modules for on-device models, Room-backed sessions, and AppSearch memory.

If you already write Kotlin on the JVM or in Android Studio, you no longer need a separate Python service just to run a tool-using agent. This guide walks through what 1.0 actually ships, how to add the Gradle dependencies, how tools and skills differ, and when to pick LiteRT-LM, ML Kit, or Firebase AI Logic.

## What 1.0 changes versus the 0.1 preview

The May 2026 0.1.0 drop proved the API. Version 1.0 is the production line:

- **Hierarchical agents** — a root `LlmAgent` can delegate to specialized child agents.
- **Context compaction** — long chats are summarized so you stay inside the model’s token window.
- **Human-in-the-loop** — pause, ask the user to confirm a sensitive action, then resume.
- **Compile-time tools** — `@Tool` and `@Param` plus KSP generate schemas. There is no runtime reflection.
- **Session resumability** — serialize an in-flight turn and restore it after process death.
- **Java interop** — call the same agents from existing Java modules.
- **Vertex / Gemini Enterprise session and memory services** on the server side.

Android-specific modules sit on top of that core: LiteRT-LM (Gemma-class models with tool calling), ML Kit GenAI for Gemini Nano (beta, tools not yet supported), Firebase AI Logic for cloud Gemini, Room for sessions, and AppSearch for on-device memory.

![Close-up of a circuit board representing on-device inference hardware](https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&h=630&q=80)

## Watch the ADK model before you write Kotlin

ADK is model-agnostic and code-first: agents are classes and functions, not a prompt-only canvas. Google’s original overview still matches how the Kotlin kit is structured.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/zgrOwow_uTQ" title="Introducing Agent Development Kit" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Choose a backend before you write the agent

Every backend implements the same `Model` interface. Switching is usually a constructor change, not a rewrite.

| Backend | Module | Where it runs | Tool calling |
| --- | --- | --- | --- |
| LiteRT-LM | `google-adk-kotlin-litertlm` | On device | Yes |
| ML Kit GenAI (Gemini Nano) | `google-adk-kotlin-mlkit-android` | On device | Not yet |
| Firebase AI Logic | `google-adk-kotlin-firebase-android` | Cloud | Yes |
| Gemini / Vertex on JVM | `google-adk-kotlin-core` | Server | Yes |

Google’s Android note is important: the GenAI SDK `Gemini` helper that takes a raw API key is **not** for Android apps. Use Firebase AI Logic on mobile.

## Step 1 — Add Gradle and KSP

For a JVM / server agent (Java 17+, Gradle 8+), the 1.0 coordinates from the official quickstart are:

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

For Android, official docs list `compileSdk` 34+, `minSdk` 24+, and the Android core artifact plus the same KSP processor. Check [Maven Central](https://central.sonatype.com/) and the [adk-kotlin releases](https://github.com/google/adk-kotlin/releases) before you pin a newer patch (the GitHub README has already shown 1.1.x coordinates after GA).

## Step 2 — Define tools with annotations

Tools are ordinary Kotlin functions. KSP emits `generatedTools()` at compile time, including `suspend` functions.

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

Wire the generated list into an `LlmAgent` with an instruction and a model. The official Hello Time sample on [adk.dev/get-started/kotlin](https://adk.dev/get-started/kotlin/) and the Android page use the same agent body on both targets.

## Step 3 — Separate tools from skills

Google’s 1.0 write-up splits two ideas that people often mash together:

- **Tools** — code that calls an API, reads metrics, or performs an action.
- **Skills** — `SkillToolset` playbooks loaded on demand from a `SKILL.md` (plus optional assets). That is *progressive disclosure*: the model only pulls the extra files when the turn needs them.

A production incident-triage sample on the developers blog uses tools for `getServiceMetrics()` and `fetchRecentDeployments()`, then a skill folder for the rollback checklist. Keep the checklist out of the system prompt so every turn does not pay for it.

![Developer workstation with code on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 4 — Persist sessions on Android

The financial-assistant example in the 1.0 announcement is the pattern to copy for a real app:

1. Define transfer tools that require **explicit user confirmation**.
2. Point the model at Gemini through **Firebase AI Logic** (the post uses Gemini 3.8 Flash).
3. Attach a **Room** session service so a killed process does not drop the thread.
4. Attach **AppSearch** if you want semantic recall of earlier turns on device.
5. Run two turns: the user asks to send money; the agent pauses; the user confirms; the tool executes.

Do not skip the confirmation step for money movement, unlocks, or anything that leaves the device. ADK will pause; your UI still has to show the prompt and resume the runner.

## Step 5 — Run and inspect a turn

On the JVM, `InMemoryRunner` plus Kotlin coroutines is enough to execute a single user message and print tool calls. On Android, keep the runner in a lifecycle-aware scope and write tool results back into Compose or Views yourself. ADK does not draw UI.

For a longer walkthrough of the code-first loop (agent types, local debug UI on the Python kit, evaluation), this Getting Started talk is still the clearest public demo of the shared ADK ideas:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/44C8u0CDtSo" title="Getting started with Agent Development Kit" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits to plan for

- **ML Kit tools are not ready.** If the agent must call functions on device, use LiteRT-LM, not Gemini Nano via ML Kit.
- **API keys on Android.** Use Firebase AI Logic, not a shipped Gemini API key.
- **Safety is still your product.** HITL is a framework hook, not a compliance checkbox.
- **Skills need packaging.** On Android, Google documents APK asset-packaged skills; on the server, they live under resources.

## Where to go next

Start with the Kotlin quickstart, then the Android agents page if you are shipping an APK:

- [Kotlin quickstart](https://adk.dev/get-started/kotlin/)
- [Build ADK agents for Android](https://developer.android.com/ai/adk)
- [google/adk-kotlin](https://github.com/google/adk-kotlin)
- [1.0 announcement](https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/)

Pin 1.0.0 (or the latest patch on Maven Central), add one tool that cannot hurt anyone, run it on the JVM first, then swap the model to LiteRT-LM or Firebase when you move the same agent class onto a phone.

## Sources

- [Announcing ADK for Kotlin 1.0 — Google Developers Blog](https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/)
- [ADK Kotlin quickstart — adk.dev](https://adk.dev/get-started/kotlin/)
- [Build ADK agents for Android — Android Developers](https://developer.android.com/ai/adk)
- [google/adk-kotlin repository and v1.0.0 release notes](https://github.com/google/adk-kotlin)
- [Introducing Agent Development Kit — Google for Developers (YouTube)](https://www.youtube.com/watch?v=zgrOwow_uTQ)
