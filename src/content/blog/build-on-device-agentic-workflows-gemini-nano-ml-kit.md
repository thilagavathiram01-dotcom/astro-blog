---
title: "Build On-Device Agents with Gemini Nano ML Kit"
description: "Step-by-step guide to building private on-device agentic workflows on Android using Gemini Nano and the ML Kit genai-agent library."
pubDate: 2026-11-02T11:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Android apps can now run autonomous agents directly on the device with Gemini Nano. The ML Kit genai-agent library, released in alpha at Android Dev Summit 2026, handles multi-turn sessions and automated tool calling without sending prompts to the cloud.

This approach keeps user data on the device. It also reduces latency for common tasks like looking up local records or executing app-specific commands.

## Prerequisites for Gemini Nano Agentic Workflows

Your project needs Android 14 (API 34) or higher. The device must be enrolled in the AICore Developer Preview program. Check the official list of supported devices and Gemini Nano versions before you start.

Set minSdk to 26 or higher. Use Kotlin 2.3 or later. Add the dependency to your module’s build.gradle.kts:

```
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    // Optional for AppFunctions tools
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Confirm that Gemini Nano 4 Fast appears in the AICore app on your test device. Function calling requires this model version.

![Android smartphone displaying code and app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Configure Your First On-Device Agent

An agent consists of a definition and a runner. The definition sets the name, instructions, and guardrails. The runner manages execution through AICore.

Create the agent:

```
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("Assistant")
    .setInstructions("You are a helpful on-device assistant.")
    .build()

val runner = AgentRunner(agent)
```

Start a multi-turn session with AgentSession. Wrap the user prompt in a Content object and collect the streamed tokens:

```
import com.google.mlkit.genai.prompt.Content
import com.google.mlkit.genai.agent.textTokens
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("chat_session")
val prompt = Content.builder()
    .text("Help me organize my day.")
    .build()

lifecycleScope.launch {
    session.runAsync(prompt)
        .textTokens()
        .collect { token ->
            // Append token to UI
        }
}
```

For single-turn queries that do not need history, call runner.runSingleTurnAsync(prompt) instead. Close the runner when the ViewModel or Activity is destroyed to release resources.

## Add Tools with AppFunctions

Tools let the agent take actions inside your app. The recommended approach uses Android AppFunctions. Annotate suspend functions with @AppFunction. The library discovers them automatically when you call enableAppFunctions(true) on the agent builder.

Register the service in AndroidManifest.xml with the BIND_APP_FUNCTION_SERVICE permission. The agent then selects and executes the correct tool based on the user’s request. Results feed back into the model for the next reasoning step.

This pattern works well for in-app shortcuts, local data lookups, and guided multi-step input. Individual tools can still make network calls if needed, but the core reasoning stays on-device.

![Developer coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Manage Sessions and Guardrails

AgentSession keeps conversation history in memory across turns. You do not manage transcripts yourself. Call session.close(), deleteSession(sessionId), or clearAllSessions() when you need to reclaim memory.

Set a maxTurns limit on the agent (default is 10). This prevents runaway loops, protects battery life, and keeps the device responsive. Choose agentic workflows when you want automated orchestration. Use direct GenerativeModel access if you prefer to manage history and tool dispatch yourself.

Compare this with task-specific APIs such as summarization or proofreading. Those use fine-tuned LoRA adapters for fixed pipelines and require less setup.

## Watch the Android Dev Summit Keynote

The keynote covers the agentic tooling announcements, including Gemini Nano updates and the new APIs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Production Use

Test on real devices enrolled in the AICore preview. Verify function calling support with GenerativeModel.getAvailableFeatures(). Provide a graceful fallback if the feature is unavailable.

Store the AgentRunner and AgentSession in a ViewModel so they survive configuration changes. Stream tokens to a Compose UI for responsive chat bubbles. For related AppFunctions patterns, see our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Monitor battery and thermal impact during multi-step tool loops. Keep instructions concise so the on-device model stays focused.

## Conclusion

The ML Kit genai-agent library brings managed agentic loops to Android with Gemini Nano. You get private, low-latency execution for conversational tasks and in-app actions. Start with the alpha dependency, define a simple agent, and add AppFunctions for real capabilities.

Official documentation and the Android Dev Summit sessions provide the latest code samples and device support details.

## Sources

- Google Developers: Get started with agentic workflows (ML Kit)
- Google Developers: Build agentic workflows with Gemini Nano
- Android Dev Summit 2026 keynote

## Detailed Step-by-Step Setup

First, confirm device eligibility. Open the AICore app on a supported Pixel or partner device. Select the model dropdown and verify Gemini Nano 4 Fast is listed. If it is missing, enroll the Google account in the AICore Developer Preview and wait for the model download.

Next, update your Gradle files. Sync the project after adding the genai-agent and optional AppFunctions dependencies. Enable KSP if you use AppFunctions annotations. Build a debug APK and install it on the enrolled device.

Then implement the agent in a ViewModel. Hold the AgentRunner as a property. Create the session once and reuse it for the lifetime of the conversation. Collect the Flow of text tokens on the main thread and update a StateFlow that the Compose UI observes.

Handle errors by wrapping the runAsync call. Common failures include model unavailable or busy quota. Retry after a short delay or fall back to a simpler GenerativeModel prompt.

Finally, add at least one AppFunction. Annotate a suspend function that reads from a local Room database or SharedPreferences. Call enableAppFunctions(true). Send a prompt that should trigger the tool and confirm the agent returns the expected result without leaving the device.

These steps take under an hour on a prepared device and give you a working private agent you can expand.

## Common Patterns and Examples

One useful pattern is conversational filtering. The user asks to “show tasks due this week.” The agent calls a local query tool, receives the list, and formats a short summary. A second prompt can refine the list further using the retained session history.

Another pattern is guided data entry. The agent asks for a title, then a due date, then a location. Each step validates input with a tool before the final submission. The maxTurns limit keeps the flow short.

Structured lookup works for order status or account balance stored locally. The agent extracts an ID from the user message, calls the lookup tool, and returns the result in natural language.

These patterns stay responsive because reasoning and most tool execution happen on-device. Network calls, when present, are limited to the tools you write.

## Comparison with Cloud Agents

Cloud-based agents through Firebase AI Logic or the Gemini API offer larger models and longer context. They require a network connection and send prompts off the device. On-device Gemini Nano agents trade some capability for privacy and offline use.

Choose the on-device path for personal data, quick local actions, and battery-conscious features. Keep cloud agents for complex research or when the user explicitly opts in to external processing.

You can also combine both. Use an on-device agent for sensitive sub-tasks and a cloud orchestrator for the rest. The ML Kit approach makes the on-device side straightforward.
