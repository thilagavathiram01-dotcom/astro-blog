---
title: "How to Build On-Device Agents with Gemini Nano 4"
description: "Step-by-step guide to creating private on-device agentic workflows using Gemini Nano 4 and the ML Kit Agentic API in Android."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini", "developer"]
noindex: false
---

Android developers can now add autonomous on-device agents that run entirely on the phone. Gemini Nano 4 powers the new ML Kit Agentic API, which handles multi-turn conversations, tool calling, and guardrails without sending data to the cloud.

This keeps prompts private and responses fast. The API is currently in alpha, available through the AICore Developer Preview on supported devices running Android 14 or higher.

You define an agent with instructions, then the AgentRunner manages the loop. The model decides when to call your app's tools, executes them, and continues until the task finishes or hits a turn limit.

## Prerequisites and Setup

Your project needs minSdk 26, Kotlin 2.3 or higher, and a device enrolled in the AICore Developer Preview. Gemini Nano 4 runs on recent Pixel and select partner devices listed in the official support table.

Add the dependency in your module's build.gradle.kts:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

The library sits on top of the existing GenerativeModel for direct model access. Choose the Agentic API when you want automatic session history and tool loops. Use direct access for custom prompting or when you manage history yourself.

![Laptop screen showing Android code in an IDE](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Configure Your First Agent

An agent needs a name and instructions that shape its behavior. The runner then talks to AICore.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that organizes tasks.")
    .build()

val runner = AgentRunner(agent)
```

This creates the configuration. The AgentRunner implements AutoCloseable, so close it when your ViewModel or Activity ends to free sessions and stop background work.

## Run a Multi-Turn Conversation

Sessions keep history automatically. Wrap your text in a Content object and collect the stream of tokens.

```kotlin
import com.google.mlkit.genai.agent.textTokens
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("chat_session")

val prompt = Content.builder()
    .text("Help me plan my afternoon meetings.")
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

For one-off questions that do not need history, call runner.runSingleTurnAsync(prompt) instead. The maxTurns limit defaults to 10 to protect battery and prevent long loops.

## Add Tools with AppFunctions

Tools let the agent take actions inside your app. The recommended approach uses Android AppFunctions so the runner discovers and executes them automatically.

Define a function with the annotation, then the agent can call it during the loop. For example, a task-creation function can receive a title and return the new task ID. See the full pattern in our guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/).

The runner observes the prompt, reasons about needed tools, acts by calling the Kotlin function, and feeds the result back to the model. It repeats until the goal is met.

![Smartphone displaying an AI chat interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Stream Results into Compose UI

Collect the token flow and update a Compose state. Keep the AgentSession in a ViewModel so it survives rotation. Official samples show how to render chat bubbles from the streamed events.

Handle errors from unsupported devices or model download status. Check AICore availability before starting the runner.

## Tips for Production Use

- Write precise instructions. The model follows them for tool selection and response style.
- Keep tools focused. One clear action per function produces better results than broad multi-purpose calls.
- Respect the turn limit. Long chains can drain battery on mid-range devices.
- Test on real hardware from the support list. Emulators do not run Gemini Nano.
- Close the runner promptly. Lingering sessions hold memory.
- Combine with cloud models only when the task needs larger context or fresh web data.

Common patterns include translating natural language into app commands (photo edits, settings changes), looking up local records, or guiding step-by-step data entry with validation tools.

## Conclusion

The ML Kit Agentic API with Gemini Nano 4 brings managed on-device agents to Android. You define the agent once, add typed tools, and let the runner handle history and orchestration. Privacy stays on the device and latency stays low.

Start with a single high-value flow on a supported device in the AICore preview. Expand tools as the alpha matures. Official documentation covers session management, streaming events, and tool definitions in full.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mP9QESmEDls"
    title="Gemini Nano on Android: Building with on-device gen AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Build agentic workflows with Gemini Nano: https://developers.google.com/ml-kit/genai/agent/android
- Get started with agentic workflows: https://developers.google.com/ml-kit/genai/agent/android/get-started
- Overview of the ML Kit GenAI APIs: https://developers.google.com/ml-kit/genai
- Gemini Nano: https://developer.android.com/ai/gemini-nano
- Define tools: https://developers.google.com/ml-kit/genai/agent/android/define-tools
