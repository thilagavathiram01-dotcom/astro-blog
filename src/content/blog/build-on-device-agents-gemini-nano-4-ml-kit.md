---
title: "Build On-Device Agents with Gemini Nano 4 in ML Kit"
description: "Step-by-step guide to the new ML Kit Agentic API powered by Gemini Nano 4 for private on-device AI agents in Android apps."
pubDate: 2026-10-29T09:15:00
heroImage: "https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "gemini", "ai", "developer"]
noindex: false
---

Android developers can now ship private AI agents that reason and act entirely on the device. Google released the ML Kit Agentic API in alpha at Android Dev Summit 2026. It runs on Gemini Nano 4 through the AICore system service and automates multi-turn tool-calling loops without sending prompts to the cloud.

This matters for apps that need low latency and strong privacy. Order tracking, photo editing controls, playlist filtering, or guided form filling can stay on-device. Network calls remain optional and only happen inside tools you define.

![Android smartphone displaying programming languages on screen](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## What the Agentic API provides

The `com.google.mlkit:genai-agent` library (alpha) adds the `AgentRunner` class on top of the existing `GenerativeModel`. It handles the full agentic loop: observe the prompt and context, reason about which tool to call, execute the tool in your app, and feed the result back until the goal is met or the turn limit is reached.

Key benefits include:

- Local reasoning with zero network latency for the model loop.
- Managed multi-turn sessions that keep conversation history in memory.
- Automatic tool execution when you register Android AppFunctions.
- Built-in guardrails such as a default maxTurns of 10 to protect battery and responsiveness.

You still control when tools may leave the device. The model itself never leaves the phone.

## Requirements and setup

Your device must support Gemini Nano 4. Check the AICore app for the Gemini Nano 4 Fast model. Join the AICore Developer Preview if the model is not yet listed.

Add these dependencies to your module `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

AppFunctions is the recommended way to expose tools. Annotate methods with `@AppFunctionDeclaration` and provide clear KDoc descriptions. The compiler generates the schema Gemini Nano uses to decide when to call them.

For a deeper look at AppFunctions outside the agent, see our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Define tools that the agent can call

Create a service class that extends `AppFunctionService`. Mark the entry point and annotate each tool method.

```kotlin
@AppFunctionServiceEntryPoint(
    serviceName = "OrderAppFunctionService",
    appFunctionXmlFileName = "order_app_functions"
)
abstract class OrderTools : AppFunctionService() {

    @AppFunctionDeclaration(isDescribedByKDoc = true)
    suspend fun fetchOrderDetails(orderId: String): OrderDetails {
        // Look up order on IO dispatcher
        return OrderDetails(orderId, "SHIPPED", "2026-11-02", 3)
    }
}
```

Register the generated service in the manifest with the `BIND_APP_FUNCTION_SERVICE` permission and the required properties.

Restrict sensitive tools to your own app with `@AppFunctionAccessLevel(level = AppFunctionMetadata.ACCESS_LEVEL_SELF)`. This prevents system assistants or other apps from discovering them.

![Developer working on a laptop with code on the screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Build and run the agent

Construct an `Agent` and pass it to `AgentRunner`.

```kotlin
val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions("Help the user check and manage orders. Always confirm before cancelling.")
    .enableAppFunctions(true)
    .setMaxTurns(10)
    .build()

val runner = AgentRunner(agent)
```

`enableAppFunctions(true)` discovers every AppFunction in the package. Use `addAppFunctionIds(...)` if you want a smaller action space. A smaller set of tools reduces errors and token use on the on-device model.

Start a session and send the user’s message. The runner executes the loop and returns the final response or a stream of events.

For human-in-the-loop actions such as cancellation or payment, wrap the tool with a decorator that asks for confirmation before calling the real implementation.

## Streaming results and lifecycle

The API supports streaming tokens and tool-state events so your UI can show progress. Manage sessions explicitly: call `session.close()` when the conversation ends, or use `deleteSession` and `clearAllSessions` to free memory after configuration changes.

Keep tool return values small. On-device models have tighter context windows than cloud models. Return only the fields the model needs to answer the user.

## Practical tips for better results

Write precise tool descriptions. Gemini Nano relies on the KDoc text to choose the correct function and fill arguments correctly. Include expected formats such as order-ID patterns or date styles.

Return structured error maps instead of throwing unexpected exceptions. The model can then explain the problem to the user and try a different path.

Test on real devices that already have Gemini Nano 4. Emulators may not match on-device performance or availability.

Combine this on-device agent with cloud models only when you need larger context or multimodal analysis. Many apps keep the sensitive loop local and escalate only specific tools.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to choose the Agentic API versus direct model access

Use the Agentic API when you want automatic multi-turn orchestration and tool execution. Choose direct `GenerativeModel` access when you prefer to manage chat history and tool dispatch yourself, or when you only need structured output without a loop.

Task-specific ML Kit APIs (summarization, rewriting, image description) remain the fastest path for fixed jobs that do not need custom tools.

## Conclusion

The ML Kit Agentic API turns Gemini Nano 4 into a practical on-device agent for Android apps. You define typed tools with AppFunctions, set clear instructions, and let the runtime handle the loop while prompts stay on the device. Start with a narrow set of tools in an existing project, measure latency and battery impact, then expand.

Official documentation is available at the [ML Kit agentic workflows page](https://developers.google.com/ml-kit/genai/agent/android). The Android Developers Blog also covers the broader Dev Summit announcements on agentic tools.

## Sources

- Android Developers Blog: Agentic and Flexible: A next era of Android development (28 Oct 2026)
- ML Kit documentation: Build agentic workflows with Gemini Nano
- ML Kit documentation: Define tools
- Android Dev Summit 2026 announcements
