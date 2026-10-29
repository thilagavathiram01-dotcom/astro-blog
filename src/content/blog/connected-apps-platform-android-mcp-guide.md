---
title: "How to Build Connected Apps with Android MCP"
description: "Step-by-step guide to connecting your Android app to Gemini and Search using the Connected Apps Platform, Android MCP, and AppFunctions."
pubDate: 2026-10-29T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "ai", "developer", "tutorials"]
noindex: false
---

Users now expect Gemini and Search to complete tasks across apps without leaving the conversation. Google’s Connected Apps Platform, announced at Android Dev Summit 2026, gives developers a single place to make that possible.

The platform lets you expose app capabilities through a remote MCP server or Android MCP powered by the AppFunctions API. Once registered, users can link your service once and invoke it from Gemini or Search. Partners such as Adobe, Peloton, Experian, and Calm already appear in the Gemini app, with Search expansion underway.

This guide walks through both integration paths, registration, and practical next steps so you can prototype today.

## What the Connected Apps Platform offers

The platform standardizes how third-party services reach high-intent users inside Google products. Developers keep control of branding, authentication, and which tools become available.

Two complementary routes exist:

- **Remote MCP server**: Cloud-hosted Model Context Protocol endpoint that works across Android, iOS, and web. Ideal if you already have APIs.
- **Android MCP (AppFunctions)**: On-device functions exposed through Android’s tool-calling layer. Best for actions that need local app state and low latency.

AppFunctions require Android 16 or higher. The Jetpack AppFunctions library simplifies declaration, schema generation, and discovery by system agents including Gemini.

![Developer working on an Android app on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Choose your integration path

Start by deciding which capabilities matter most.

Remote MCP suits cross-platform services such as ordering, playlist creation, or account lookups that already live on your backend. You implement an MCP server that follows Google’s specification, handle OAuth 2.1 for user authorization, and optionally add rich MCP Apps UIs.

Android MCP fits tightly coupled mobile actions. Examples include creating a calendar event from natural language, adding items to a shopping list, or searching emails for a recipe—then acting on the result. Execution happens locally, so the agent can use current app state without network round-trips.

Many apps will eventually use both. The platform lets you register tools from either source through one console.

## Set up Android MCP with AppFunctions

AppFunctions turn selected methods in your app into discoverable tools. The OS indexes them; authorized agents (with the `EXECUTE_APP_FUNCTIONS` permission) can list and invoke them.

1. Add the Jetpack AppFunctions library and target Android 16+.
2. Annotate service entry points and individual functions with `@AppFunction`. Provide clear KDoc so agents understand parameters and return values.
3. Define serializable parameter and result types with `@AppFunctionSerializable`.
4. Implement the function logic, throwing documented exceptions when arguments are invalid or resources are missing.
5. Verify registration on a device with `adb shell cmd app_function list-app-functions`.

A simple task-creation function looks like this in concept:

```kotlin
@AppFunction(isDescribedByKDoc = true)
suspend fun createTask(title: String, dueDateTime: LocalDateTime? = null): Task {
    // Validate and persist
    return repository.create(title, dueDateTime)
}
```

Google provides a sample repository, an agent skill for discovery-to-testing, and ADB commands for local evaluation. The feature remains in beta; full end-to-end Gemini access is expanding through an early-access program.

For deeper background on exposing app capabilities, see our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

![Smartphone showing mobile app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Register through the Google Connected Console

During the preview, onboarding is self-service via the Google Connected Console.

- Apply for preview access at the console help page.
- Register your tools (remote MCP endpoints or Android MCP functions).
- Choose surfaces: Gemini app, Search, or both.
- Test with Gemini developer mode.
- Submit for review.

Once approved you can track traffic, latency, and error rates while retaining brand assets and account linking. Access is rolling out in phases; more markets and Google products will follow.

## Prototype and test early

You do not need production approval to experiment.

- Implement and unit-test AppFunctions locally.
- Use Gemini developer mode to prototype Connected App flows.
- For remote MCP, stand up a minimal server and exercise OAuth 2.1 flows against the published guides.
- Monitor logs and agent traces to refine KDoc descriptions—clearer documentation improves agent tool selection.

Official Android Developers content walks through the intelligence system integration. The session “Integrate your app with the Android intelligence system” covers practical patterns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UsqDEfyOH2E"
    title="Integrate your app with the Android intelligence system"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a smooth launch

- Expose only high-value, well-scoped actions. Overly broad functions confuse agents.
- Write precise KDoc. Agents rely on it for parameter mapping and error recovery.
- Handle permission and user-consent flows explicitly; the platform keeps the user in control of key actions.
- Plan for both on-device and cloud paths if your service spans platforms.
- Monitor the console metrics after launch and iterate on tool descriptions based on real invocations.

## Conclusion

The Connected Apps Platform and Android MCP shift Android from a launchpad of separate apps into an intelligence system where Gemini can orchestrate work across services. Developers who implement AppFunctions or a remote MCP server now can reach users at the moment of intent inside Search and the Gemini app.

Start with a single high-value action, register through the preview console, and expand from there. The documentation at developers.google.com/connected-apps and developer.android.com/ai/appfunctions gives the current technical details.

## Sources

- Google Blog: New Connected Apps Platform launches for developers (28 Oct 2026)
- Android Developers Blog: Agentic and Flexible — A next era of Android development (28 Oct 2026)
- Google for Developers: Connected Apps Platform overview and MCP server guide
- Android Developers: Overview of AppFunctions
- Android Developers YouTube: Integrate your app with the Android intelligence system
