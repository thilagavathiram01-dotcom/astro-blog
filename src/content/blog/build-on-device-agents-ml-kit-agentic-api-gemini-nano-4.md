---
title: "Build On-Device Agents with ML Kit Agentic API"
description: "Step-by-step guide to creating private on-device AI agents in Android apps using the ML Kit Agentic API and Gemini Nano 4."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Android developers can now add autonomous on-device agents that reason, call tools, and keep conversations private. The ML Kit Agentic API, powered by Gemini Nano 4, handles the orchestration loop so your app stays responsive and user data never leaves the device.

This guide walks through setup, first agent, multi-turn sessions, and tool integration. It draws from official Android Developers documentation released around the Android Developer Summit 2026.

## Why on-device agents matter

Cloud models excel at complex reasoning but add latency and require network access. Gemini Nano 4 runs locally through Android AICore. The Agentic API builds on the existing GenerativeModel direct-access path and automates the observe-reason-act-evaluate cycle.

Your agent can query local data, execute typed Kotlin functions, and maintain conversation history without extra code for transcript management. Maximum turn limits (default 10) prevent runaway loops and protect battery life.

Common patterns include translating natural language into app actions, filtering local lists, guiding multi-step forms, and performing calculations that stay on-device. For broader context on the Android intelligence system, see our guide to [intelligent apps and agentic experiences](/blog/android-intelligence-system-intelligent-apps-guide/).

![Person holding a smartphone showing an AI chat interface](https://images.unsplash.com/photo-1682941664177-7920d0e59418?auto=format&fit=crop&w=800&q=80)

## Prerequisites and project setup

Target Android 14 (API 34) or higher and enroll in the AICore Developer Preview program. Confirm your device appears on the supported list for Gemini Nano (nano-v4 on recent Pixel and flagship models). Set minSdk to 26 or higher and use Kotlin 2.3+.

Add the dependency in your module-level `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library is currently in alpha, so expect API changes as it stabilizes.

## Create your first agent

An agent consists of a definition (instructions and guardrails) and a runner that talks to AICore.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that organizes tasks using local data only.")
    .build()

val runner = AgentRunner(agent)
```

The builder accepts optional maxTurns and other guardrails. The runner implements AutoCloseable, so close it when the ViewModel or Activity is destroyed to release sessions.

## Run a multi-turn conversation

Sessions keep history in memory automatically. Create or retrieve one by ID, wrap the user prompt in a Content object, and collect streamed tokens.

```kotlin
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("chat_session")

val prompt = Content.builder()
    .text("Help me plan a short morning routine based on my calendar.")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            // Append token to your UI state
        }
}
```

For one-off queries that do not need history, call `runner.runSingleTurnAsync(prompt)` instead. The temporary session is cleaned up automatically.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add tools with AppFunctions

Tools let the agent take real actions. Declare them with the Android AppFunctions library so the schema is generated automatically. The AgentRunner discovers registered functions, invokes the matching Kotlin method, and feeds the result back into the model.

Typical tools read a local Room database, query device sensors, or call a controlled network endpoint when external data is required. Keep sensitive operations local whenever possible.

After defining tools, pass them when building the Agent. The loop continues until the model produces a final answer or hits the turn limit.

![Smartphone showing AI app icons on a dark screen](https://images.unsplash.com/photo-1763110305836-17790330be78?auto=format&fit=crop&w=800&q=80)

## Manage sessions and resources

Store the AgentSession reference inside a ViewModel so it survives configuration changes. Call `session.close()` or `runner.deleteSession(id)` when the conversation ends. Use `clearAllSessions()` for a full reset.

Stream events can be mapped to Compose UI. Collect tokens and update a mutable state list of messages. Show a typing indicator while the flow is active.

Because everything runs on-device, test on physical hardware that supports Gemini Nano 4. Emulators may lack the full AICore service.

## Tips for reliable agents

- Write clear system instructions that describe the agent's role, available tools, and boundaries.
- Start with a small tool set. Add functions only when the model needs them.
- Monitor token usage and latency in logcat during development.
- Handle FeatureStatus.UNAVAILABLE by falling back to a cloud path or disabling the feature.
- Update the library as newer alphas appear; the Jetpacker sample on GitHub demonstrates multi-step local data flows.

Gemini Nano 4 brings native function calling and improved efficiency (up to 3x faster inference and lower memory in internal benchmarks). Combined with the Agentic API, it makes production-ready offline assistants practical for many apps.

## Conclusion

The ML Kit Agentic API removes the boilerplate of multi-turn orchestration and tool dispatch. Pair it with Gemini Nano 4 for private, low-latency agents that users can rely on without a network connection.

Start with the official get-started guide, add one tool, and expand from there. Check the Android Developers blog for the latest AICore preview enrollment and device support lists.

## Sources

- [Build agentic workflows with Gemini Nano](https://developers.google.com/ml-kit/genai/agent/android) — Google for Developers
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started) — Google for Developers
- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog
- [Unlock agentic capabilities in your app with ML Kit GenAI](https://www.youtube.com/watch?v=tAy7IifZXG0) — Android Developers YouTube
