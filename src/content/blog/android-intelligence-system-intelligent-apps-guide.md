---
title: "From In-App Agents to Android Intelligence System: ADS 2026 Guide"
description: "Learn how to build intelligent Android apps that connect to the system agent with AppFunctions, ML Kit agentic APIs, and A2UI."
pubDate: 2026-11-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer", "gemini"]
noindex: false
---

Users no longer open apps to complete every step. They state a goal and expect an agent to finish it, often across several apps. At Android Dev Summit 2026, Google detailed how the platform is becoming an intelligence system that orchestrates those tasks while keeping you in control of what your app exposes.

This guide covers the practical pieces you can use today: Android MCP powered by AppFunctions, on-device agents with ML Kit GenAI, hybrid cloud inference, A2UI for native Compose interfaces, and the Connected Apps Platform preview.

## What the Android Intelligence System Provides

The system gives users two kinds of help. Prompted assistance starts when someone asks an agent such as Gemini to complete a multi-step request. Proactive assistance surfaces suggestion chips on the lock screen, in notifications, or on the keyboard based on context.

You choose the integration path. AppFunctions turn specific capabilities into discoverable tools that agents execute on-device. A remote MCP server reaches other platforms. Computer Control remains a fallback that works without any changes from you, though it is less precise.

Android MCP, built on the AppFunctions Jetpack library, is the recommended path when data stays on the device, when you need sensors, or when end-to-end encryption applies. It works for both the system agent and your own in-app agent.

![Android phone showing programming language names on the screen](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Connect Your App with AppFunctions

AppFunctions let your app act as an on-device MCP server. You annotate functions, the library generates the schema, and the OS indexes them. Agents query the index and call the functions that match the user request.

Start by adding the library. The current stable beta is 1.0.0-beta01. Set compileSdk to 37 or higher and use Android Gradle Plugin 9.1.0+:

```kotlin
dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-beta01")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-beta01")
}
```

Create a service entry point that extends AppFunctionService and annotate the methods you want to expose. Use clear KDoc so agents understand parameters and side effects. Mark serializable types with the appropriate annotation. For a complete walk-through of setup, verification with ADB, and security tips, see our earlier guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/).

You can also load the official AppFunctions skill so agents inside Android Studio generate the boilerplate for you.

## Build On-Device Agents with ML Kit GenAI

Gemini Nano 4 adds native function calling. ML Kit now ships an Agentic API that handles the orchestration loop, conversation history, and guardrails for you. Pair it with the Prompt API for direct model access when you need more control.

The Jetpacker sample on GitHub shows a full multi-step booking flow that stays on-device. Enable AppFunctions inside the agent builder so the same tools serve both your in-app assistant and the system agent.

Gemini Nano 4 uses per-layer embeddings and quantization-aware training. Internal benchmarks show up to 3x faster inference and 4x lower memory use versus the previous Nano model. Opt into the AICore Developer Preview to test the newest capabilities.

For custom models, LiteRT in Google Play services removes the runtime from your APK (roughly 8 MB smaller) and delivers faster GPU performance. It is also available on Wear OS and Android Automotive.

## Render Agent Output as Native Compose UI

Agents often need to return more than text. The A2UI protocol lets them send structured JSON that the Jetpack Compose A2UI renderer turns into real Material 3 components. The renderer is design-system agnostic, validates payloads, and reports errors back so the agent can correct itself.

Add the alpha libraries:

```kotlin
implementation("androidx.a2ui:a2ui-model:1.0.0-alpha01")
implementation("androidx.a2ui.compose:compose-runtime:1.0.0-alpha01")
implementation("androidx.a2ui.compose:compose-ui:1.0.0-alpha01")
```

This approach keeps the UI inside your app’s design system and avoids dumping a wall of text. It works with both on-device agents and cloud agents that stream updates.

![Developer workspace with multiple screens showing code and a notebook](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Reach Gemini and Search with Connected Apps

The Connected Apps Platform lets high-intent users trigger your capabilities directly from the Gemini app and from AI Mode in Search. You can combine Android MCP for local execution with a remote MCP server for cross-platform coverage.

Start testing today with Gemini Apps Developer Mode. When your integration is production-ready, join the preview waitlist. Capacity is limited to selected apps in supported categories, with broader self-serve access planned later.

Firebase AI Logic provides a hybrid path: call Gemini 4 in the cloud when you need the strongest model, and fall back to Gemini Nano on-device when the network is unavailable or latency matters. Use App Check, server prompt templates, and spend caps to keep costs and security under control.

## Practical Tips

- Expose only high-value, well-described actions. Agents pick tools based on metadata quality.
- Keep sensitive data local. Use Android MCP instead of a remote server when encryption or device sensors are required.
- Test both your in-app agent and the system agent with the same function set.
- Watch the on-demand ADS sessions for deeper code examples around ML Kit agentic workflows and Connected Apps.
- Update libraries as new betas appear; the AppFunctions compiler and A2UI renderer are still evolving.

## Conclusion

Android’s intelligence system turns the OS into an orchestrator while you decide exactly which capabilities agents can reach. Implement AppFunctions for reliable on-device tool calling, add an ML Kit agent for private multi-step flows, and use A2UI when the agent needs to present structured UI. Join the Connected Apps preview when you want users to trigger those capabilities from Gemini and Search.

The building blocks are available now. Start with one clear function or one on-device agent and expand from there.

## Sources

- From in-app agents to the Android intelligence system: https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads
- Connect your app to the Android intelligence system: https://developer.android.com/ai/intelligence-system
- Overview of AppFunctions: https://developer.android.com/ai/appfunctions
- ML Kit GenAI Agentic API: https://developers.google.com/ml-kit/genai/agent/android
- Jetpack Compose A2UI renderer: https://developer.android.com/develop/ui/compose/agentic
- Connected Apps Platform: https://developers.google.com/connected-apps

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UsqDEfyOH2E"
    title="Integrate your app with the Android intelligence system"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
