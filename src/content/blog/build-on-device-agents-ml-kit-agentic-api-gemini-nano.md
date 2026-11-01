---
title: "Build On-Device Agents with ML Kit Agentic API"
description: "Step-by-step guide to create private on-device agents using ML Kit Agentic API and Gemini Nano 4 on Android with AgentRunner."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "gemini", "how-to"]
noindex: false
---

Android developers can now ship private, low-latency AI agents that run entirely on the device. Google’s ML Kit Agentic API (alpha) builds on Gemini Nano 4 to automate multi-turn conversations, tool calling, and session management without sending prompts to the cloud.

This guide shows how to add the library, configure an AgentRunner, and run your first on-device agent. It pairs well with coding-agent workflows already available in Android Studio. See our earlier post on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/) for IDE integration details.

## What the ML Kit Agentic API provides

The `com.google.mlkit:genai-agent` library sits on top of the existing GenerativeModel class. AgentRunner handles the full agentic loop: it observes context, reasons over input, calls registered tools, and feeds results back until a termination condition is reached.

Common patterns include translating natural language into app actions, looking up local records, filtering lists conversationally, and guiding multi-step data entry. Reasoning stays on-device, so user prompts remain private. Individual tools you implement can still make network calls if needed.

Agent configurations enforce a maxTurns limit (default 10) to protect battery and responsiveness. Sessions keep in-memory conversation history automatically.

![Hand holding smartphone showing AI application icons including Gemini and ChatGPT](https://images.unsplash.com/photo-1746286720984-72f386e1872e?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Confirm your environment meets these requirements before adding the dependency:

- Android 14 (API 34) or higher, enrolled in the AICore Developer Preview program.
- A supported device with Gemini Nano (Pixel 9/10 series and selected partner devices). Check the official device list under Custom generation and agent device support.
- minSdk 26 or higher.
- Kotlin 2.3 or higher.

Enroll in the AICore Developer Preview if you have not already. The model must appear in the AICore app under Select a model.

## Add the dependency

In your module’s `build.gradle.kts` add:

```kotlin
dependencies {
    // Gemini Nano agentic workflows
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")

    // Optional: only needed when defining tools with Android AppFunctions
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library uses AICore under the hood, so no separate model download is required if Gemini Nano is already present on the device.

## Configure and run your first agent

An agent consists of a definition (name + instructions) and a runner that talks to AICore.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

// 1. Build the agent configuration
val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant.")
    .build()

// 2. Initialize the runner
val runner = AgentRunner(agent)
```

For multi-turn conversations, obtain an AgentSession. Wrap the user message in a Content object and collect the streamed tokens:

```kotlin
import android.util.Log
import androidx.lifecycle.lifecycleScope
import com.google.mlkit.genai.agent.textTokens
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("chat_session")

val prompt = Content.builder()
    .text("Hello! Can you help me organize my day?")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            Log.d("Agent", token)
        }
}
```

For one-off queries that do not need history, call `runner.runSingleTurnAsync(prompt)` instead.

When your ViewModel or Activity is destroyed, close the runner to release sessions and cancel coroutines:

```kotlin
runner.close()
```

## Stream responses and add tools

The API streams tokens so you can update a Compose UI progressively. Official samples show how to connect the stream to chat bubbles. For actions, register Android AppFunctions; the runner discovers them, executes the model’s chosen calls, and feeds results back automatically.

This differs from direct GenerativeModel access, where you manage tool declarations and multi-turn history yourself. Use AgentRunner when you want the orchestration handled for you. Use the lower-level API when you need custom prompting, multimodal input, or typed structured output.

![Developer holding smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Keep instructions concise and specific. The on-device model performs best with clear goals and bounded tool sets. Test the maxTurns limit early; long loops drain battery even when the reasoning stays local.

Store session IDs in a ViewModel so conversations survive configuration changes. Clear sessions explicitly when the user starts a new task. Because tools can reach the network, apply the same permission and privacy checks you would use for any other feature.

Start with a single-purpose agent (for example, a task-list filter or settings assistant) before expanding to multi-tool workflows. Monitor AICore availability on the target devices listed in the official support table.

## Conclusion

The ML Kit Agentic API lets you ship private, responsive agents powered by Gemini Nano 4 without managing conversation history or tool loops yourself. Add the alpha dependency, define an Agent, and start a session. Combined with Android Studio’s Bring Your Own Agent support, you can design the agent in the IDE and run it on-device for users.

Ready to try it? Enroll in the AICore Developer Preview, add the library, and build a small agent that acts on local data. Share what you ship in the comments or on the Android Developers community channels.

## Sources

- [Build agentic workflows with Gemini Nano | ML Kit](https://developers.google.com/ml-kit/genai/agent/android)
- [Get started with agentic workflows | ML Kit](https://developers.google.com/ml-kit/genai/agent/android/get-started)
- [Agentic and Flexible: A next era of Android development | Android Developers Blog](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [Unlock agentic capabilities in your app with ML Kit GenAI | Android Developers on YouTube](https://www.youtube.com/watch?v=tAy7IifZXG0)
