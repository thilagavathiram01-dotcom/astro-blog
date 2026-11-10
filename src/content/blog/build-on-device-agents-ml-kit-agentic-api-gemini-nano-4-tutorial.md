---
title: "How to Build On-Device Agents with ML Kit Gemini Nano 4"
description: "Step-by-step tutorial to create private on-device AI agents in Android apps using the ML Kit Agentic API powered by Gemini Nano 4."
pubDate: 2026-11-10T17:11:00
heroImage: "https://images.unsplash.com/photo-1767955063920-afa336498158?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Android developers can now build autonomous agents that run entirely on the device. Google’s ML Kit Agentic API, powered by Gemini Nano 4, handles multi-turn conversations, tool calling, and guardrails without sending user data to the cloud.<grok type="render_inline_citation" citation_id="25" />

This guide walks through the exact setup, prerequisites, and code needed to create your first on-device agent. You will learn how to configure the library, define an agent, run conversations, and add tools. All information comes from official Google developer documentation.<grok type="render_inline_citation" citation_id="26" />

## Why On-Device Agents Matter

On-device agents keep prompts and reasoning private. There is zero network latency for the core loop. Gemini Nano 4 adds native function calling, so the model can plan multi-step actions and execute them inside your app.<grok type="render_inline_citation" citation_id="25" />

The Agentic API automates the orchestration loop, conversation history, and safety limits. You focus on defining useful tools and clear instructions instead of writing low-level prompt management code.

![Android phone showing code on screen](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Your project must meet these requirements before the Agentic API will work:<grok type="render_inline_citation" citation_id="66" />

- Android 14 (API 34) or higher, enrolled in the AICore Developer Preview program.
- A supported device that can run Gemini Nano 4 (Pixel 10 and later series, selected Honor, OnePlus, OPPO, and other flagship devices). Check the official device list.
- Minimum SDK 26.
- Kotlin 2.3 or higher.

Enroll in the AICore Developer Preview through the official Google form so your device receives the preview models.

## Step 1: Add the Dependencies

Open your module’s `build.gradle.kts` and add the genai-agent library. Include AppFunctions if you plan to expose typed tools:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")

    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library is currently in alpha, so expect possible API changes before stable release.<grok type="render_inline_citation" citation_id="66" />

## Step 2: Define the Agent and Runner

An agent consists of a configuration (name, instructions, optional max turns) and an AgentRunner that executes it.

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant. Keep answers concise.")
    .setMaxTurns(10) // Prevents runaway loops
    .build()

val runner = AgentRunner(agent)
```

The maxTurns limit defaults to 10 and acts as a battery and performance guardrail.<grok type="render_inline_citation" citation_id="66" />

## Step 3: Run a Conversation

For multi-turn chats, create a session. The runner keeps history automatically.

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
            // Append token to your UI
            println(token)
        }
}
```

For one-shot questions that do not need history, call `runner.runSingleTurnAsync(prompt)` instead.

Always close the runner when the ViewModel or Activity is destroyed:

```kotlin
runner.close()
```

This releases sessions and cancels background work.<grok type="render_inline_citation" citation_id="66" />

## Step 4: Add Tools with AppFunctions

Tools let the agent take real actions. The recommended path is declarative Android AppFunctions. They auto-generate schemas and can be discovered automatically.

Add `.enableAppFunctions(true)` to the builder so the agent finds every AppFunction in your package. Then implement the functions with the AppFunctions Jetpack library. When the model decides a tool is needed, the AgentRunner executes it and continues the loop.<grok type="render_inline_citation" citation_id="32" />

Common patterns include photo edits, playback controls, preference toggles, or local data queries. Because the reasoning stays on-device, sensitive information never leaves the phone.

![Laptop and smartphone on a developer desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Tips for Production Use

- Test on a physical device enrolled in the AICore preview. Emulators do not run Gemini Nano.
- Keep instructions specific and short. Long system prompts consume context.
- Set a reasonable maxTurns value for your use case.
- Combine with Firebase AI Logic when you need a cloud model for complex tasks and fall back to on-device for private or offline work.
- Monitor battery and memory. Gemini Nano 4 improves efficiency (up to 3x faster inference and 4x less memory in internal tests), but long loops still cost resources.<grok type="render_inline_citation" citation_id="25" />

Watch the official Android Developers session for a full walkthrough with the Jetpacker sample app:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Related Reading

If you are also exploring system-level integration, see our guide on the [Android intelligence system and intelligent apps](/blog/android-intelligence-system-intelligent-apps-guide/).

## Sources

- Android Developers Blog: What’s new in intelligent apps at the Android Developer Summit
- ML Kit documentation: Get started with agentic workflows
- ML Kit: Build agentic workflows with Gemini Nano
- YouTube: Unlock agentic capabilities in your app with ML Kit GenAI
