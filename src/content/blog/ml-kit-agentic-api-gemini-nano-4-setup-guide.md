---
title: "How to Set Up ML Kit Agentic API with Gemini Nano 4"
description: "Step-by-step guide to configuring the ML Kit Agentic API for on-device agents powered by Gemini Nano 4 on Android."
pubDate: 2026-11-07T16:30:00
heroImage: "https://images.unsplash.com/photo-1762330467475-a565d04e1808?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "developer", "ai-tools"]
noindex: false
---

Android developers can now build autonomous agents that run entirely on-device using Gemini Nano 4 and the new ML Kit Agentic API. This keeps user data private, reduces latency, and works offline once the model is available.

The Agentic API automates multi-turn conversations, tool calling, and guardrails so you focus on your app logic instead of managing the orchestration loop yourself. It builds on the existing Prompt API and requires enrollment in the AICore Developer Preview.

![Android phone showing AI chatbot interface on a desk](https://images.unsplash.com/photo-1762330467475-a565d04e1808?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need Android Studio with a project targeting API 34 or higher. The device must run Android 14 or later and be enrolled in the AICore Developer Preview program. Check the official list of supported devices for Gemini Nano 4 availability.

Add these dependencies to your module-level build.gradle.kts:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Set minSdk to 26 and use Kotlin 2.3 or higher. Sync the project before proceeding.

## Create Your First Agent

Define an agent with system instructions that describe its role. The Agent builder sets the name, instructions, and maximum turns.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that answers questions about the user's notes.")
    .setMaxTurns(5)
    .build()

val runner = AgentRunner(agent)
```

The AgentRunner handles the session and communicates with AICore. Call runner.runSingleTurnAsync("Summarize my latest notes") or use runAsync for streaming events.

Close the runner in your ViewModel onCleared method to release resources.

## Add Tools with AppFunctions

Tools let the agent take actions inside your app. Use the AppFunctions library to declare typed functions that the model can call.

Enable automatic discovery:

```kotlin
val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions("Help users track orders.")
    .enableAppFunctions(true)
    .build()
```

The model observes the prompt, reasons about which tool to call, executes the Kotlin function, and continues until it produces a final response. This loop stays on-device.

![Hand holding smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Stream Events to the UI

Collect the Flow of AgentEvent to update your Jetpack Compose UI in real time. TextMessage events carry partial and final responses. FunctionCall events show which tool the model selected.

In a ViewModel, launch a coroutine that collects the flow and maps events to UI state. This gives users immediate feedback while the agent works.

## Test and Limitations

Test on a physical device enrolled in the AICore preview. Function calling requires Gemini Nano 4. The alpha library is experimental, so APIs may change.

For production features that need more capability, combine this with Firebase AI Logic for hybrid on-device and cloud routing. See related guidance on connecting apps to the Android intelligence system.

## Tips for Production

Keep instructions concise and specific. Limit maxTurns to prevent long loops. Always handle errors from the runner. Log tool calls during development to verify behavior.

Once Gemini Nano 4 rolls out more widely, these agents will reach many more devices without additional work on your side.

## Conclusion

The ML Kit Agentic API makes on-device agents practical for Android apps. You get privacy, speed, and offline support while the system manages the hard parts of multi-turn reasoning and tool execution.

Start with a simple agent in your next project. Expand it with tools as your feature needs grow.

For more on Android AI, read our guide on [building on-device agents with the ML Kit Agentic API](/blog/build-on-device-agents-ml-kit-agentic-api-gemini-nano-4/).

## Sources

- [Build agentic workflows with Gemini Nano](https://developers.google.com/ml-kit/genai/agent/android) — Google for Developers
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started) — Google for Developers
- [Define tools](https://developers.google.com/ml-kit/genai/agent/android/define-tools) — Google for Developers
- [Unlock agentic capabilities in your app with ML Kit GenAI](https://www.youtube.com/watch?v=tAy7IifZXG0) — Android Developers

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
