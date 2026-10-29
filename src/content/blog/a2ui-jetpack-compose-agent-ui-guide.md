---
title: "How to Use A2UI for Agent UI in Jetpack Compose"
description: "Step-by-step guide to add the A2UI Jetpack Compose renderer so AI agents can generate native interactive Android UI safely in 2026."
pubDate: 2026-10-29T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "ai-tools", "tutorials", "how-to"]
noindex: false
---

AI agents usually answer with blocks of text. Users then copy steps or tap through fixed screens. A2UI changes that. The protocol lets an agent describe an interactive interface as structured data. Your Android app renders it with native Jetpack Compose components it already owns.

Google released the Jetpack Compose A2UI renderer in alpha. It supports protocol version 0.9.1. Agents never execute code. They only request components from a catalog you define. The app draws the UI, handles state, and sends user actions back.

This guide shows how to add the libraries, create a surface, and render a basic interactive response. It assumes you already work with Jetpack Compose and have an agent that can emit A2UI messages.

## What A2UI does on Android

A2UI stands for Agent-to-UI. An agent sends JSON messages that create surfaces, update components, change data models, and declare actions. The client validates the messages against a catalog schema and maps them to Compose primitives.

The renderer uses Compose Snapshot state. Only the parts that change recompose. It supports progressive rendering while the agent streams updates. Custom catalogs let you match your design system. A Material 3 basic catalog is included so you can start quickly.

This approach differs from AppFunctions. AppFunctions expose app actions as tools for agents to call. A2UI focuses on the visual response the agent returns. You can use both. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).


![Android phone showing an app interface on a desk](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)


## Add the dependencies

Add the Google Maven repository if it is not already present. Then declare the A2UI artifacts in your module-level build file. Use version 1.0.0-alpha02 or later.

```kotlin
dependencies {
    implementation("androidx.a2ui:a2ui-engine:1.0.0-alpha02")
    implementation("androidx.a2ui:a2ui-model:1.0.0-alpha02")
    implementation("androidx.a2ui.compose:compose-runtime:1.0.0-alpha02")
    implementation("androidx.a2ui.compose:compose-ui:1.0.0-alpha02")
    implementation("androidx.compose.material3:material3-a2ui:1.0.0-alpha02")
}
```

The engine and model handle parsing and validation. The compose-runtime and compose-ui layers map messages to Compose. The material3-a2ui artifact supplies the ready-made Basic Catalog with Text, Button, Card, Row, Column, and other common elements.

Sync the project. The libraries are in alpha, so expect API changes before a stable release. Check the Jetpack release notes for updates.

## Create and render a surface

A surface is the root container for one agent-driven UI. You create it with a createSurface message that names a surface ID and a catalog ID. Subsequent messages update components and data for that surface.

In a composable, remember an A2UI renderer or surface model and process incoming messages. Then place an A2UISurface that displays the current state.

```kotlin
@Composable
fun AgentResponseScreen(messages: List<String>) {
    val surfaceModel = remember { /* initialize A2uiSurfaceModel */ }

    LaunchedEffect(messages) {
        messages.forEach { message ->
            surfaceModel.processMessage(message)
        }
    }

    A2UISurface(
        surfaceId = "main",
        surfaceModel = surfaceModel,
        catalog = materialA2uiBasicCatalogV1()
    )
}
```

The exact factory names follow the androidx.a2ui.compose APIs. The Basic Catalog implementation lives in the Material 3 artifact. It maps protocol components to themed Compose widgets.

Pass streaming messages from your agent as they arrive. The renderer updates only changed parts of the tree.


![Close-up of code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)


## Handle user actions and data binding

Buttons, text fields, and other interactive components declare actions. When a user taps or types, the renderer sends the action back to your agent code. You decide how the agent responds—usually by emitting new update messages.

Data binding uses paths into a data model the agent can update. A text field can bind to /user/name. The agent writes a new value; the UI reflects it without a full redraw.

Error handling is built in. Invalid messages or unknown components produce error states instead of crashing. The library reports issues so the agent can correct itself.

For testing, use the provided A2uiTestSurface composable. It mounts a surface in isolation so you can assert on rendered components and simulate actions.

## Customize your own catalog

The Basic Catalog covers common cases. For production apps, define a catalog that matches your design system. Implement A2uiComponent for each element. Declare the properties the agent may set, including required fields, enums, and dynamic bindings.

Register the components in a catalog. Advertise the catalog version during capability negotiation so the agent knows what it can use. Support multiple catalog versions during migration.

Custom components can include progressive loading states, animations, and two-way bindings. They still cannot run arbitrary code. The agent only supplies data that fits the schema you published.

## Tips for production use

Start with the Material 3 catalog while you learn the message flow. Replace individual components with custom ones as you go.

Validate agent output on the server or in your agent harness before it reaches the device. The client still checks schemas, but early filtering reduces error states.

Keep surfaces small. One surface per agent task keeps the UI tree manageable and improves recomposition performance.

Monitor the alpha status. Subscribe to the Android Developers blog and Jetpack release notes. The protocol is at 0.9.1; later versions will arrive with non-breaking API additions where possible.

Test with real agent streams. Latency between messages affects perceived responsiveness. The renderer supports progressive updates, but your agent prompt should encourage incremental JSON.

## Conclusion

A2UI gives agents a safe way to request native Android UI. Your app stays in control of rendering, theming, and security. The Jetpack Compose renderer is ready for experimentation today.

Add the alpha dependencies, wire a surface to your agent messages, and try a simple form or card list. Once the flow works, expand the catalog with components unique to your product.

The same pattern works alongside other Android intelligence features. Agents can call AppFunctions for actions and return A2UI for the visual result. Together they move beyond chat bubbles.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/OaBFx8QWXgQ"
    title="Discovering Google's A2UI renderer for Jetpack Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Agent-to-UI renderer for Jetpack Compose, Android Developers: https://developer.android.com/develop/ui/compose/agentic
- A2UI Compose Jetpack release notes: https://developer.android.com/jetpack/androidx/releases/a2ui-compose
- A2UI protocol specification: https://a2ui.org/
- Android Developers blog on agentic tools, October 2026
