---
title: "How to Build On-Device Agents with ML Kit Agentic API"
description: "Step-by-step guide to creating private on-device AI agents using ML Kit GenAI Agentic API and Gemini Nano 4 on Android."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini"]
noindex: false
---

Users want apps that act on natural language requests without sending every prompt to the cloud. ML Kit’s new Agentic API (com.google.mlkit:genai-agent) lets you build exactly that: autonomous, multi-turn agents powered by Gemini Nano that run entirely on-device through AICore.

Gemini Nano 4 adds native function calling. The Agentic API sits on top of the existing Prompt API / GenerativeModel and automates the observe-reason-act-evaluate loop, conversation history, and guardrails. This guide shows the practical steps to add one to an Android app.

For the complementary system-level side, see our earlier guide on [preparing Android apps for AppFunctions agents](/blog/android-appfunctions-agents/).

![Close-up of a smartphone screen with AI assistant interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## What the Agentic API provides

The AgentRunner class manages complete agentic loops. You define an Agent with system instructions. The runner talks to AICore, maintains an AgentSession for multi-turn history, discovers tools, executes them, and feeds results back until the goal is met or maxTurns (default 10) is reached.

Everything stays on-device for the reasoning loop. Tools you write can still call networks or databases if needed. Prompt data never leaves the device unless your tools do.

Common patterns include translating requests into in-app actions, guided multi-step data entry, conversational filtering of local lists, and structured lookups with local calculations.

## Prerequisites

- Android 14 (API 34) or higher, enrolled in the AICore Developer Preview program.
- Supported device with the matching Gemini Nano model version.
- minSdk 26, Kotlin 2.3 or higher.
- Project already using Jetpack and recent Compose if you want UI integration.

Check the official device support table before testing. The library is currently alpha.

## Add the dependency

In your module build.gradle.kts:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")

    // Optional: for declarative tools via AppFunctions
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync and confirm the AICore Developer Preview is active on your test device.

## Step-by-step: create a basic agent

### 1. Define the agent and runner

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that organizes tasks using available tools.")
    .build()

val runner = AgentRunner(agent)
```

Close the runner in your ViewModel onCleared or Activity onDestroy to release sessions.

### 2. Run a multi-turn conversation

```kotlin
val session = runner.getOrCreateSession("chat_session")

val prompt = Content.builder()
    .text("Help me plan a short morning routine.")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            // Append token to your UI state
        }
}
```

For one-off queries use runner.runSingleTurnAsync(prompt) instead. The session keeps history in memory automatically.

### 3. Add tools with AppFunctions

The recommended way to give the agent real actions is Android AppFunctions. Annotate methods, enable discovery on the agent, and the runner executes them automatically.

```kotlin
val agent = Agent.builder()
    .setName("TaskAssistant")
    .setInstructions("Use tools to create or list tasks.")
    .enableAppFunctions(true)
    .build()
```

See the Define tools documentation for full schemas and the optional addAppFunctionIds filter. Manual tool registration is also available if you prefer explicit control.

![Developer coding on a laptop with code visible](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

### 4. Handle lifecycle and cleanup

Store the AgentSession inside a ViewModel so configuration changes do not wipe history. Call session.close(), deleteSession(id), or clearAllSessions() when appropriate. Always close the AgentRunner.

The maxTurns limit prevents runaway loops and protects battery. Adjust it if your workflows need more steps.

## Practical tips

- Start with a single clear tool and simple instructions. Expand once the loop is reliable.
- Use recorded prompts and the Android skill (android skills add mlkit-agent-api) to accelerate prototyping.
- Combine with the Prompt API for cases where you want full control over history or structured output.
- Test on a supported device in the AICore preview. Behavior differs across Nano model versions.
- For system-wide reach beyond your app, pair this with AppFunctions and the Connected Apps Platform preview.

## Watch the official deep dive

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The ML Kit GenAI Agentic API turns Gemini Nano into a practical on-device agent with minimal boilerplate. Define an Agent, create an AgentRunner, optionally enable AppFunctions, and stream responses through AgentSession. You keep privacy and low latency while the framework handles the orchestration loop and guardrails.

Begin with one focused workflow such as task creation or list filtering. Once it is stable, expand the tool set and connect the same functions to system agents if desired.

## Sources

- [Build agentic workflows with Gemini Nano](https://developers.google.com/ml-kit/genai/agent/android) — Google for Developers
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started) — Google for Developers
- [Define tools](https://developers.google.com/ml-kit/genai/agent/android/define-tools) — Google for Developers
- [From in-app agents to the Android intelligence system](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog
- [Unlock agentic capabilities in your app with ML Kit GenAI](https://www.youtube.com/watch?v=tAy7IifZXG0) — Android Developers (YouTube)
