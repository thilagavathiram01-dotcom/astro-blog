---
title: "How to Start ML Kit Agentic Workflows on Android"
description: "Step-by-step guide to set up ML Kit Agentic API with Gemini Nano 4 for private on-device agents in your Android app."
pubDate: 2026-10-31T19:11:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Android developers can now build autonomous agents that run entirely on-device using Gemini Nano 4. The ML Kit Agentic API, released in alpha at Android Dev Summit 2026, handles multi-turn conversations, tool calling, and guardrails so you focus on your app logic.

This guide walks through project setup, agent configuration, and a basic conversation. It follows the official ML Kit documentation updated in late October 2026.

## Prerequisites

Your project needs Android 14 (API 34) or higher, and the device must be enrolled in the AICore Developer Preview program. Check the official list of supported devices for Gemini Nano versions. Set minSdk to 26 or higher and use Kotlin 2.3 or later.

Enroll in the AICore preview through the Google developer site before testing. Without it, the model is unavailable.

![Android developer coding on laptop](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Add the Dependency

Open your module-level `build.gradle.kts` and add the genai-agent library.

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library sits on top of the existing GenerativeModel prompt API and adds the Agent and AgentRunner classes.

## Define Your Agent

An agent consists of a definition and a runner. The definition holds the name and system instructions. The runner talks to AICore and manages sessions.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that organizes tasks privately.")
    .build()

val runner = AgentRunner(agent)
```

Instructions shape behavior. Keep them concise and specific to avoid unexpected outputs. The library includes automatic guardrails.

## Run a Multi-Turn Conversation

Sessions keep history across turns. Create or retrieve one, wrap the user prompt in a Content object, and collect streamed tokens.

```kotlin
import com.google.mlkit.genai.agent.textTokens
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
            // Append token to your UI
            Log.d("Agent", token)
        }
}
```

For single queries without history, call `runner.runSingleTurnAsync(prompt)` instead. Stream the response the same way. This keeps latency low and data on the device.

## Clean Up Resources

AgentRunner implements AutoCloseable. Close it when the hosting component is destroyed to release sessions and cancel coroutines.

```kotlin
override fun onCleared() {
    super.onCleared()
    runner.close()
}
```

Store the runner in a ViewModel if you need it across configuration changes. The docs cover session retention in detail.

![Developer workspace with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Add Tools for Actions

Agents become useful when they call app functions. Use Android AppFunctions to expose local capabilities such as reading a database or updating UI state. The library can auto-execute declared tools.

See the official define-tools guide for the exact annotation and registration steps. You can also link this to system agents via Android MCP. For a deeper look at AppFunctions, check our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Tips for Production

Test on real devices enrolled in the AICore preview. Emulators may lack the model. Monitor token usage and response quality because Nano 4 is efficient but not as capable as cloud models.

Handle errors from the stream. Provide a fallback message if the model is unavailable. Keep prompts under the context limits listed in the ML Kit docs.

Privacy is a core benefit: prompts and reasoning stay on-device. Tools you write can still call networks if needed.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The ML Kit Agentic API lets you ship private, low-latency agents without managing orchestration loops yourself. Start with the alpha library, follow the official get-started page, and expand with tools as the API matures. Android Dev Summit sessions show practical demos with sample apps like Jetpacker.

## Sources

- [Get started with agentic workflows | ML Kit](https://developers.google.com/ml-kit/genai/agent/android/get-started)
- [Build agentic workflows with Gemini Nano | ML Kit](https://developers.google.com/ml-kit/genai/agent/android)
- Android Dev Summit 2026 keynote and intelligent apps sessions
