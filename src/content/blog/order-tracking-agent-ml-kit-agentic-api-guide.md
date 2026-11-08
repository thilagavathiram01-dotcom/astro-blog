---
title: "Build an Order Tracking Agent with ML Kit Agentic API"
description: "Step-by-step guide to creating a private on-device order tracking agent using ML Kit Agentic API, AgentRunner, and AppFunctions tools with Gemini Nano 4."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "how-to", "developer"]
noindex: false
---

Android apps can now host private on-device agents that look up order status, cancel shipments, and answer follow-up questions without sending data to the cloud. The ML Kit Agentic API, powered by Gemini Nano 4 through AICore, automates the full reasoning loop so you focus on tools and UI.

This guide shows how to build a focused order-tracking agent. It uses official documentation from Google for Developers and the Android Developers blog covering the Android Dev Summit 2026 announcements.

## Why build an on-device order agent

Cloud agents add latency and require connectivity. Gemini Nano 4 runs locally, supports function calling, and keeps user prompts on the device. The AgentRunner class manages multi-turn history, tool dispatch, and a default maxTurns guardrail of 10 so loops stay bounded.

Common patterns include structured lookups (order status by ID), guided multi-step actions (confirm then cancel), and conversational filtering of local data. For a broader overview of the Agentic API, see our earlier guide on [building on-device agents with ML Kit](/blog/build-on-device-agents-ml-kit-agentic-api-gemini-nano-4/).

![Laptop with code on screen and coffee mug on a wooden desk](https://images.unsplash.com/photo-1763568258498-768e67bf818e?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Target Android 14 (API 34) or higher and enroll in the AICore Developer Preview program. Confirm your device supports the required Gemini Nano version (nano-v4 on recent Pixel and flagship models). Set minSdk to 26+ and use Kotlin 2.3 or higher.

Add these dependencies to your module `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The library remains in alpha, so check release notes for changes.

## Define tools with AppFunctions

Tools give the agent access to your local data or controlled actions. Declare them with the Android AppFunctions library so schemas generate automatically. The AgentRunner discovers the functions, invokes the matching Kotlin method, and feeds the result back to the model.

Here is a minimal order tools service:

```kotlin
package com.example.orders.tools

import androidx.appfunctions.AppFunctionDeclaration
import androidx.appfunctions.AppFunctionSerializable
import androidx.appfunctions.AppFunctionService
import androidx.appfunctions.AppFunctionServiceEntryPoint
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

@AppFunctionSerializable
data class OrderDetails(
    val orderId: String,
    val status: String,
    val estimatedDelivery: String?,
    val itemCount: Int,
)

@AppFunctionServiceEntryPoint(
    serviceName = "OrderAppFunctionService",
    appFunctionXmlFileName = "order_app_functions",
)
abstract class OrderTools : AppFunctionService() {

    /**
     * Fetches details and delivery status for a customer order by ID.
     * @param orderId The alphanumeric order identifier (for example, ORD-8492)
     */
    @AppFunctionDeclaration(isDescribedByKDoc = true)
    suspend fun fetch_order_details(orderId: String): OrderDetails = withContext(Dispatchers.IO) {
        // Replace with your Room or repository call
        OrderDetails(
            orderId = orderId,
            status = "Out for delivery",
            estimatedDelivery = "Today by 2:30 PM",
            itemCount = 3,
        )
    }
}
```

Register the generated service in `AndroidManifest.xml`:

```xml
<service
    android:name=".OrderAppFunctionService"
    android:permission="android.permission.BIND_APP_FUNCTION_SERVICE"
    android:exported="true">
    <property
        android:name="android.app.appfunctions.schema"
        android:value="app_functions_schema.xsd" />
    <property
        android:name="android.app.appfunctions.v2"
        android:value="order_app_functions.xml" />
    <intent-filter>
        <action android:name="android.app.appfunctions.AppFunctionService" />
    </intent-filter>
</service>
```

For sensitive actions such as cancellation, restrict access with `ACCESS_LEVEL_SELF` so only your app's internal agent can call the function.

![Person holding a smartphone during a contactless payment](https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80)

## Configure the agent and runner

Build the agent with clear instructions and enable AppFunctions discovery:

```kotlin
import com.google.mlkit.genai.agent.Agent
import com.google.mlkit.genai.agent.AgentRunner

val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions(
        "You are a helpful assistant for tracking store orders. " +
        "Use available tools to fetch order information. Keep answers concise."
    )
    .enableAppFunctions(true)
    .setMaxTurns(10)
    .build()

val runner = AgentRunner(agent)
```

You can also scope tools with `addAppFunctionIds("fetch_order_details")` or discover them programmatically via `AppFunctionAgentTools.discover()`.

## Run a multi-turn session

Store the session in a ViewModel so it survives configuration changes. Wrap the user message in a Content object and collect the stream:

```kotlin
import com.google.mlkit.genai.prompt.Content
import kotlinx.coroutines.launch

val session = runner.getOrCreateSession("order_chat")

fun sendMessage(text: String) {
    viewModelScope.launch {
        val content = Content.builder().text(text).build()
        session.runAsync(content)
            .collect { event ->
                // Handle AgentEvent.TextMessage tokens or tool status updates
            }
    }
}
```

For one-off queries that do not need history, call `runner.runSingleTurnAsync(content)` instead. Close the session or runner when the conversation ends to free resources.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Handle events and errors

The flow emits text tokens and tool execution updates. Map them to Compose state so the UI shows a typing indicator and final answer. Catch `GenAiException` for cases such as `MAX_TURNS_EXCEEDED`, `NOT_AVAILABLE`, or `BUSY` and surface a clear message.

Return structured error maps from tools (for example `mapOf("error" to "Order not found")`) so the model can explain the issue gracefully. Keep tool payloads small because on-device context windows are limited.

## Tips for reliable agents

- Write precise system instructions that list available tools and expected formats.
- Start with one or two tools and expand only when the model needs more capability.
- Prefer `ACCESS_LEVEL_SELF` for internal operations.
- Test on physical hardware that supports Gemini Nano 4; emulators may lack full AICore.
- Monitor latency and turn counts in logcat during development.
- Update the alpha library as new previews appear. The Jetpacker sample demonstrates similar multi-step local flows.

Gemini Nano 4 improves inference speed and memory use compared with earlier versions under internal benchmarks. Combined with automatic tool loops, it makes focused offline assistants practical.

## Conclusion

The ML Kit Agentic API plus AppFunctions lets you ship a private order-tracking agent in a few dozen lines of Kotlin. The runner handles history and dispatch so you concentrate on useful tools and clear instructions.

Start with the official get-started and define-tools pages, enroll in the AICore preview, and try a single lookup tool. Then expand to multi-turn conversations and guarded actions.

## Sources

- [Build agentic workflows with Gemini Nano](https://developers.google.com/ml-kit/genai/agent/android) — Google for Developers
- [Define tools](https://developers.google.com/ml-kit/genai/agent/android/define-tools) — Google for Developers
- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog
- [Unlock agentic capabilities in your app with ML Kit GenAI](https://www.youtube.com/watch?v=tAy7IifZXG0) — Android Developers YouTube
