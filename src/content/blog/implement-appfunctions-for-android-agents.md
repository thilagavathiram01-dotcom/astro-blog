---
title: "Implement AppFunctions for Android AI Agents"
description: "Step-by-step guide to add AppFunctions API so your Android app exposes tools to on-device agents like Gemini via Android MCP."
pubDate: 2026-11-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai", "tutorials", "how-to", "developer"]
noindex: false
---

Android Dev Summit 2026 made AppFunctions available in beta. This API lets your app act as an on-device MCP server. Agents such as Gemini can discover and call your functions without leaving the device.

You expose only the workflows you choose. The rest of your app data stays private. Callers need the EXECUTE_APP_FUNCTIONS permission. The feature requires Android 16 or higher.

This guide shows how to add the Jetpack library, declare functions, and verify registration. It pairs with official Android skills for agents. See our earlier post on [agentic real-device testing with Android CLI skills](/blog/agentic-real-device-testing-android-cli-skills/).

## Why AppFunctions matter for agentic apps

Traditional UI flows work well for direct interaction. Agents need structured tools they can invoke in the background. AppFunctions fill that gap.

The Jetpack library reads annotated Kotlin functions and generates type-safe tool definitions. The platform indexes them. Authorized agents query the metadata and execute matching functions. Execution stays local, so latency stays low and no external server is required.

Google describes AppFunctions as the mobile equivalent of MCP tools. Gemini integration remains in private preview. During the experimental phase only a limited set of apps and system agents can use the full pipeline. You can still implement and test today.

![Developer coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites and dependencies

Set compileSdk to API 37 or higher. Use Android Gradle Plugin 9.1.0 or later. Add the AppFunctions library and KSP compiler.

```kotlin
dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-beta01")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-beta01")
}
```

Enable KSP in your project if you have not already. The library handles support checks, so your app does not need runtime version gating for the feature itself.

Create serializable data classes for parameters and return values. Annotate them with @AppFunctionSerializable and set isDescribedByKDoc explicitly. Starting with 1.0.0-beta01 the flag has no default.

## Declare and implement a function

Annotate a suspend function with @AppFunctionDeclaration(isDescribedByKDoc = true). Provide clear KDoc so agents understand purpose and parameters.

```kotlin
@AppFunctionDeclaration(isDescribedByKDoc = true)
suspend fun createTask(
    title: String,
    dueDate: Long
): CreateTaskResponse {
    // Switch to a background dispatcher if the work can block
    return withContext(Dispatchers.IO) {
        taskRepository.create(title, dueDate)
    }
}
```

Define matching serializable request and response types. The compiler generates the XML metadata the platform indexes.

You can also implement via an AppFunctionService entry point for more complex cases. Official samples in the android/appfunctions repository show both patterns, including a chat app example that works on mobile and Wear OS.

## Verify registration and test

After installation, confirm the platform sees your functions:

```bash
adb shell cmd app_function list-app-functions
```

Use the AppFunctions testing agent sample to exercise end-to-end calls without prompts. For chat-based checks inside Android Studio, install the AppFunctions development skill via Android CLI:

```bash
android skills add implement-appfunctions
```

Then prompt your agent to invoke the function. During the beta only trusted callers can complete the full agent loop, but registration and local execution tests work now.

![Laptop screen showing colorful code in an editor](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Practical tips for production readiness

Keep functions focused and idempotent where possible. Agents may retry. Document side effects clearly in KDoc.

Set isDescribedByKDoc to true so descriptions land in the metadata. Vague names or missing parameter docs cause agents to skip or misuse the tool.

Test with the official testing agent before relying on system agents. Monitor for permission denials. Callers outside the privileged set will not see your functions until broader access opens.

Pair AppFunctions with Android skills. The CLI skills catalog includes guidance for related tasks such as permissions security and profiler use. Agents that already load those skills produce cleaner integration code.

Watch the official Android Developers overview of CLI and skills for context on how agents consume these tools.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/JMPd2jbQEqo"
    title="Android CLI and skills to improve your development"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps

Implement a small set of high-value functions first. Validate registration with adb. Iterate on descriptions using the testing agent. When the Connected Apps Platform preview accepts your app, the same functions become available to broader system agents.

AppFunctions give you a clear path to agentic experiences without shipping a separate backend. Start with the beta library, keep the surface small, and ground your agent with official skills.

## Sources

- Android Developers: Overview of AppFunctions
- Android Developers: Add the AppFunctions API to your app
- Android Developers Blog: Build intelligent Android apps with AppFunctions
- Android Dev Summit 2026 announcements on Android MCP and AppFunctions
- GitHub: android/appfunctions samples
