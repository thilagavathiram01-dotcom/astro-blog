---
title: "How to Build On-Device Agents with ML Kit GenAI"
description: "Step-by-step guide to creating autonomous on-device AI agents in Android apps using the ML Kit GenAI Agentic API and Gemini Nano 4."
pubDate: 2026-11-13T18:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer", "gemini"]
noindex: false
---

Android developers can now build autonomous agents that run entirely on the device. Google’s ML Kit GenAI Agentic API, powered by Gemini Nano 4, handles multi-step reasoning, tool calls, and conversation history without sending prompts to the cloud.

This guide shows how to add these agents to an existing Android app. You will configure the library, define tools with AppFunctions, and run a basic agent that executes local actions.

![Android phone showing AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Why on-device agents matter

Gemini Nano 4 adds native function calling. Combined with the Agentic API, the model plans steps, calls your app’s tools, and feeds results back until the task finishes. Everything stays on the device.

User prompts never leave the phone. Latency drops because there is no network round-trip for the reasoning loop. Battery use stays controlled through a default maximum of 10 turns.

The same AppFunctions you already use for system agents can power your in-app assistant. See our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Prerequisites

You need:

- Android 14 (API 34) or higher, enrolled in the AICore Developer Preview program.
- A device that supports Gemini Nano (check the official supported-devices list).
- minSdk 26 or higher.
- Kotlin 2.3 or higher.

Add these dependencies to your module’s `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional but recommended for tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Enable the AICore Developer Preview so the latest Gemini Nano model is available on your test device.

## Step 1: Define your agent and tools

Create an Agent configuration with clear instructions. Enable AppFunctions so the agent can discover methods you annotated in your app.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions("You help users track and manage store orders. Use available tools to look up details.")
    .enableAppFunctions(true)
    .setMaxTurns(10)
    .build()

val runner = AgentRunner(agent)
```

Annotate tool methods with `@AppFunctionDeclaration`. Parameter descriptions come from KDoc `@param` tags. Return types must be primitives or classes marked `@AppFunctionSerializable`.

```kotlin
@AppFunctionDeclaration(isDescribedByKDoc = true)
fun fetchOrderDetails(
    /** The unique order identifier. */
    orderId: String
): String {
    // Query local database or cache
    return "Order $orderId is out for delivery."
}
```

The agent discovers these functions automatically when AppFunctions are enabled.

![Developer workspace with smartphone and laptop](https://images.unsplash.com/photo-1778146448308-149ff6244135?auto=format&fit=crop&w=800&q=80)

## Step 2: Run a single-turn or multi-turn session

For one-off tasks, call `runSingleTurnAsync`. For conversations, create a session that keeps history in memory.

Single-turn example:

```kotlin
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.flow.collect

val content = Content.builder()
    .text("What is the status of order 1042?")
    .build()

runner.runSingleTurnAsync(content).collect { event ->
    // Handle text tokens or final result
}
```

Multi-turn session:

```kotlin
val sessionId = "chat_${System.currentTimeMillis()}"
val session = runner.getOrCreateSession(sessionId)

val userContent = Content.builder()
    .text("Cancel order 1042 if it has not shipped.")
    .build()

session.runAsync(userContent)
    .textTokens()
    .collect { token ->
        // Append streaming response
    }
```

Call `session.close()` when the conversation ends to free memory. You can also delete specific sessions or clear all of them.

## Step 3: Handle tool results and guardrails

The AgentRunner automatically executes discovered AppFunctions and returns results to the model. You do not write the loop yourself.

If a tool needs network access, implement that inside the function. The model’s reasoning still stays on-device.

Set `maxTurns` lower than the default of 10 if your use case is simple. This stops runaway loops and saves battery.

Test with short, specific prompts first. Confirm that the agent selects the correct tool and stops after the expected number of turns.

## Tips for production

- Start with the AICore Developer Preview on a supported flagship device.
- Keep instructions short and role-specific so the model stays focused.
- Scope AppFunctions with `addAppFunctionIds` if you only want certain tools available.
- Monitor battery and memory during multi-turn tests.
- Combine with the Prompt API for cases that need structured output or custom history management.

The Jetpacker sample on GitHub demonstrates a full agent that packs a suitcase by calling local tools. Watch the Android Dev Summit session for a live walkthrough.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The ML Kit GenAI Agentic API turns Gemini Nano 4 into a practical on-device agent runtime. You define tools once with AppFunctions, configure an Agent, and let the runner handle the loop. Prompts stay private, latency stays low, and the same functions work for both your in-app assistant and the broader Android intelligence system.

Update your project dependencies, opt into the AICore preview, and try a single-turn agent today. The same pattern scales to multi-step workflows as more devices receive Gemini Nano 4.

## Sources

- [Build agentic workflows with Gemini Nano | ML Kit](https://developers.google.com/ml-kit/genai/agent/android) — Google for Developers, updated 9 November 2026
- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog, 5 November 2026
- [Unlock agentic capabilities in your app with ML Kit GenAI](https://www.youtube.com/watch?v=tAy7IifZXG0) — Android Developers, 30 October 2026
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started) — Google for Developers
- [Jetpacker sample](https://github.com/android/ai-samples/tree/main/jetpacker) — Android AI samples
