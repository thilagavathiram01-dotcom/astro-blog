---
title: "Build On-Device Agents with ML Kit Agentic API Guide"
description: "Step-by-step guide to add autonomous on-device agents powered by Gemini Nano 4 using the ML Kit Agentic API on Android."
pubDate: 2026-11-08T16:41:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "how-to", "gemini", "developer", "ai"]
noindex: false
---

Android developers can now add autonomous on-device agents to their apps with the ML Kit Agentic API. This alpha library uses Gemini Nano 4 to plan multi-step actions, call tools, and manage conversation history without sending data to the cloud.<grok type="render_inline_citation" citation_id="20" />

The AgentRunner class handles the full agentic loop. You define instructions and tools once. The runner observes context, reasons over input, acts through typed functions, and evaluates results until the task finishes or hits a turn limit.<grok type="render_inline_citation" citation_id="10" />

This guide shows how to set up the library, create a basic agent, and run a multi-turn conversation. It assumes you have an Android project targeting API 34 or higher and are enrolled in the AICore Developer Preview program.<grok type="render_inline_citation" citation_id="30" />

## Prerequisites and Project Setup

Confirm your environment meets these requirements before adding the dependency:

- Android 14 (API 34) or higher with AICore Developer Preview access.
- A supported device running Gemini Nano 4 (check the ML Kit device support list).
- minSdk 26 or higher.
- Kotlin 2.3 or higher.<grok type="render_inline_citation" citation_id="31" />

Open your module-level `build.gradle.kts` and add the genai-agent library:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library does not require an annotation processor unless you define tools with AppFunctions.<grok type="render_inline_citation" citation_id="30" />

![Android developer workspace with laptop and phone](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Create Your First Agent

An agent consists of a definition and a runner. The definition holds system instructions and optional tool settings. The runner talks to AICore and manages sessions.<grok type="render_inline_citation" citation_id="31" />

Add this code in a ViewModel or repository:

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant. Keep answers short and clear.")
    .build()

val runner = AgentRunner(agent)
```

The builder defaults to a maximum of 10 turns to prevent infinite loops. You can call `setMaxTurns` if needed. Temperature defaults to the model’s setting; pass `0.0f` for more deterministic tool use.<grok type="render_inline_citation" citation_id="30" />

## Run a Multi-Turn Conversation

Sessions keep history across turns. Create or retrieve one with a stable ID:

```kotlin
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("chat_session")

val prompt = Content.builder()
    .text("Help me plan a short morning routine.")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            // Append token to your UI state
            Log.d("Agent", token)
        }
}
```

For one-off queries that do not need history, call `runner.runSingleTurnAsync(prompt)` instead. Always close the runner when the ViewModel or Activity is destroyed to release resources.<grok type="render_inline_citation" citation_id="31" />

![Hand holding smartphone showing code](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Add Tools with AppFunctions

Tools let the agent take real actions inside your app. Define them with the AppFunctions Jetpack library. Annotate a method and let the compiler generate the schema.<grok type="render_inline_citation" citation_id="16" />

Example order-status tool:

```kotlin
@AppFunctionDeclaration(isDescribedByKDoc = true)
suspend fun fetchOrderStatus(orderId: String): String {
    // Query local database or API
    return "Order $orderId is out for delivery."
}
```

Enable discovery when building the agent:

```kotlin
val agent = Agent.builder()
    .setInstructions("You help with order tracking.")
    .enableAppFunctions(true)
    .build()
```

The runner discovers registered functions automatically and calls them during the loop. Restrict sensitive tools to `ACCESS_LEVEL_SELF` so only your app’s agent can invoke them.<grok type="render_inline_citation" citation_id="30" />

## Watch the Official Walkthrough

The Android Developers team demonstrated the full flow with the Jetpacker sample app.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Production Use

- Test on a physical device enrolled in the AICore preview. Emulators may not support Gemini Nano 4 function calling.
- Handle `GenAiException` codes such as `MAX_TURNS_EXCEEDED` and `NOT_AVAILABLE`.
- Cache system instructions and tool declarations; the runtime already does this on-device to reduce latency.
- Combine with Firebase AI Logic hybrid inference when the device lacks Gemini Nano or the task needs cloud models. See our related guide on [adding Gemini models with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).
- Keep prompts and tool schemas clear. Short, specific KDoc improves tool selection accuracy.<grok type="render_inline_citation" citation_id="21" />

## Conclusion

The ML Kit Agentic API lowers the effort required to ship on-device agents. You define the agent once, register tools, and let AgentRunner manage the loop, history, and guardrails. Start with a simple assistant, then expand to domain-specific tools that query local data or trigger app actions.

Official documentation is available at developer.android.com/ai/gemini-nano/mlkit-agent-api and developers.google.com/ml-kit/genai/agent. Enroll in the AICore Developer Preview to test on supported devices today.

## Sources

- Android Developers: Build agentic workflows with Gemini Nano
- Google ML Kit: Get started with agentic workflows
- Android Developers Blog: What’s new in intelligent apps at the Android Developer Summit
- YouTube: Unlock agentic capabilities in your app with ML Kit GenAI
