---
title: "Define Tools for ML Kit On-Device Agents with AppFunctions"
description: "Step-by-step guide to defining typed tools for Gemini Nano on-device agents using Android AppFunctions in ML Kit agentic workflows."
pubDate: 2026-11-02T10:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "gemini"]
noindex: false
---

On-device agents powered by Gemini Nano can do more than answer questions. They can take real actions inside your app when you give them tools. ML Kit's agentic API makes this practical by combining managed conversation loops with Android AppFunctions.

This guide shows how to define, register, and secure those tools so your agent stays focused and safe.

## Why Tools Matter for On-Device Agents

An agent without tools can only generate text. Add tools and it can fetch order status, cancel a booking, or update local preferences. The AgentRunner handles the observe-reason-act-evaluate loop automatically. You declare the capabilities; the runtime executes them when Gemini Nano decides they are needed.

AppFunctions is the recommended way to declare these capabilities. It generates schemas automatically and integrates with the Android platform.

![Android developer workspace with laptop and phone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

- Android 14 (API 34) or higher with AICore Developer Preview enrollment
- minSdk 26 or higher
- Kotlin 2.3 or higher
- Existing ML Kit GenAI agent dependency: `com.google.mlkit:genai-agent:1.0.0-alpha1`

## Step 1: Add the AppFunctions Dependency

In your module's `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-agent:1.0.0-alpha1")
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha13")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha13")
}
```

Sync the project. The KSP compiler generates the service implementation from your annotations.

## Step 2: Annotate Tool Methods

Create a class that extends `AppFunctionService` and mark methods with `@AppFunctionDeclaration`. Use KDoc `@param` tags for descriptions. Return types must be primitives or `@AppFunctionSerializable` data classes.

```kotlin
@AppFunctionServiceEntryPoint(
    serviceName = "OrderAppFunctionService",
    appFunctionXmlFileName = "order_app_functions"
)
abstract class OrderTools : AppFunctionService() {

    private val orderRepository = OrderRepository()

    /**
     * Fetches details and delivery status for a customer order by ID.
     * @param orderId The alphanumeric order identifier (for example, ORD-8492)
     */
    @AppFunctionDeclaration(isDescribedByKDoc = true)
    suspend fun fetch_order_details(orderId: String): OrderDetails = withContext(Dispatchers.IO) {
        // repository logic
    }

    /**
     * Requests a cancellation for an active order.
     * @param orderId The order identifier to cancel
     * @param reason Optional reason from the user
     */
    @AppFunctionDeclaration(isDescribedByKDoc = true)
    suspend fun cancel_order(orderId: String, reason: String? = null): CancelOrderResult = withContext(Dispatchers.IO) {
        // repository logic
    }
}
```

Register the generated service in `AndroidManifest.xml`:

```xml
<service
    android:name=".OrderAppFunctionService"
    android:permission="android.permission.BIND_APP_FUNCTION_SERVICE"
    android:exported="true">
    <property android:name="android.app.appfunctions.schema" android:value="app_functions_schema.xsd" />
    <property android:name="android.app.appfunctions.v2" android:value="order_app_functions.xml" />
    <intent-filter>
        <action android:name="android.app.appfunctions.AppFunctionService" />
    </intent-filter>
</service>
```

## Step 3: Control Access Levels

By default tools are available to platform-certified assistants. For sensitive internal actions use `ACCESS_LEVEL_SELF`:

```kotlin
@OptIn(ExperimentalAppFunctionsApi::class)
@AppFunctionDeclaration(isDescribedByKDoc = true)
@AppFunctionAccessLevel(
    level = AppFunctionMetadata.ACCESS_LEVEL_SELF,
    isCompatEnforcementEnabled = true
)
suspend fun cancel_order(orderId: String): CancelOrderResult { ... }
```

This prevents external agents from discovering or calling the function.

## Step 4: Register Tools with the Agent

Automatic discovery is simplest:

```kotlin
val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions("Assist users with order tracking and cancellations.")
    .enableAppFunctions(true)
    .setMaxTurns(10)
    .build()

val runner = AgentRunner(agent)
```

For finer control, discover and filter:

```kotlin
val discoveredTools = AppFunctionAgentTools.discover(
    enabledAppFunctionIds = listOf("fetch_order_details", "cancel_order")
)

val agent = Agent.builder()
    .setName("OrderAssistant")
    .setInstructions("Assist users with order tracking.")
    .addTools(discoveredTools)
    .build()
```

![Smartphone showing code and programming concepts](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Step 5: Add Human-in-the-Loop for Sensitive Actions

Wrap tools that need confirmation:

```kotlin
class HitlConfirmationTool(
    delegate: AgentTool,
    private val onConfirm: suspend (String, Map<String, Any>) -> Boolean
) : AgentTool(delegate) {
    override suspend fun execute(args: Map<String, Any>): Map<String, Any?> {
        if (!onConfirm(name, args)) {
            return mapOf("status" to "CANCELLED_BY_USER")
        }
        return checkNotNull(delegate).execute(args)
    }
}
```

Show a confirmation dialog in `onConfirm` before the tool runs.

## Best Practices

- Keep the action space small. Expose only the tools the agent needs.
- Write clear KDoc. Gemini Nano uses descriptions to decide when to call a tool.
- Return focused structured data. On-device context windows are limited.
- Run I/O on `Dispatchers.IO`.
- Close the `AgentRunner` when the ViewModel or Activity is destroyed.

## Watch the Official Session

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tAy7IifZXG0"
    title="Unlock agentic capabilities in your app with ML Kit GenAI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next Steps

Once tools are registered, manage multi-turn sessions and stream events into Compose UI. For a broader look at exposing app functions to agents, see our guide on [Android AppFunctions for agents](/blog/android-appfunctions-agents/).

Sources:
- [Define tools | ML Kit | Google for Developers](https://developers.google.com/ml-kit/genai/agent/android/define-tools)
- [Get started with agentic workflows](https://developers.google.com/ml-kit/genai/agent/android/get-started)
- [Unlock agentic capabilities in your app with ML Kit GenAI (Android Developers)](https://www.youtube.com/watch?v=tAy7IifZXG0)
