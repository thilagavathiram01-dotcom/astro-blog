---
title: "How to Build On-Device Agents with ML Kit Agentic API"
description: "Step-by-step guide to set up ML Kit genai-agent library, create your first Gemini Nano on-device agent, and run multi-turn conversations on Android."
pubDate: 2026-11-02T10:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android developers can now build autonomous agents that run entirely on-device using Gemini Nano through ML Kit's agentic workflows. These agents handle multi-turn conversations, execute tools, and keep data local for privacy and low latency.

This guide walks through the official prerequisites, project setup, and code to create and run your first agent. It follows the ML Kit GenAI agent documentation updated in late October 2026.

## Prerequisites for Gemini Nano agents

You need a supported device and development environment before the agentic API works.

Your device must run Android 14 (API 34) or higher and be enrolled in the AICore Developer Preview program. Check the official list of supported devices and Gemini Nano versions. Set minSdk to 26 or higher and use Kotlin 2.3 or later.

The agentic library is currently in alpha, so expect changes. Confirm Gemini Nano 4 Fast appears in the AICore app on your test device.

## Add the genai-agent dependency

Open your module's `build.gradle.kts` and add the ML Kit agent library. Optionally include AppFunctions if you plan to expose tools later.

```kotlin
dependencies {
    // Gemini Nano agentic workflows
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")

    // Optional: for Android AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library depends on the Android AICore system service that hosts Gemini Nano.

![Android smartphone displaying coding interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Define your first agent

An agent consists of a definition (name and instructions) and a runner that manages execution against AICore.

Create the agent with a builder, then initialize the runner:

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant that organizes daily tasks.")
    .build()

val runner = AgentRunner(agent)
```

The instructions shape the agent's behavior and guardrails. Keep them clear and specific.

## Run a multi-turn conversation

Use an `AgentSession` to retain history across turns. Wrap prompts in a `Content` object and collect streamed tokens.

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

This approach streams responses token by token so your UI can update live. The official Android Developers session from late October demonstrates the full flow with the Jetpacker sample.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Clean up and extend the agent

The `AgentRunner` implements `AutoCloseable`. Close it when your ViewModel or Activity is destroyed to release sessions and cancel coroutines:

```kotlin
runner.close()
```

Next steps from the documentation include defining tools with Android AppFunctions so the agent can call app features, managing sessions across configuration changes, and streaming events into a Jetpack Compose UI.

For related AppFunctions setup, see our guide on [adding AppFunctions to an Android app](/blog/android-appfunctions-agents/).

![Green Android robot figure on dark background](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Tips for reliable on-device agents

Test on a physical device enrolled in the AICore preview. Emulators may lack the full Gemini Nano runtime.

Start with simple instructions and single-turn calls, then add tools and multi-turn sessions. Monitor log output for token streaming and any AICore quota messages.

Because the library is alpha, pin the dependency version and retest after updates. Check the ML Kit GenAI overview for the latest model availability.

## Conclusion

ML Kit's agentic workflows let you ship privacy-preserving agents powered by Gemini Nano without cloud round-trips. Follow the prerequisites, add the dependency, define the agent, and stream a session to get a working prototype in minutes.

Expand from there with tools and Compose UI. Official samples and the Android Dev Summit session provide additional patterns for production use.

## Sources

- [Get started with agentic workflows | ML Kit | Google for Developers](https://developers.google.com/ml-kit/genai/agent/android/get-started)
- [Build agentic workflows with Gemini Nano | ML Kit](https://developers.google.com/ml-kit/genai/agent/android)
- Android Developers YouTube: Unlock agentic capabilities in your app with ML Kit GenAI
