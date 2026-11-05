---
title: "How to Render Agent UI with A2UI in Jetpack Compose"
description: "Step-by-step guide to the A2UI Jetpack Compose renderer so AI agents generate native interactive UI without arbitrary code."
pubDate: 2026-11-05T23:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer", "gemini"]
noindex: false
---

AI agents can now return real screens instead of walls of text. The A2UI protocol lets an agent describe an interface as structured data. Your app then renders that description with its own Jetpack Compose components.

Google released the official Compose renderer in alpha at Android Dev Summit 2026. It keeps control on the device. The agent never sends or executes code. It only uses components you have already approved in a catalog.

This guide shows how to add the libraries, host a surface, and render the first agent-driven screen. You can combine it with Bring Your Own Agent workflows in Android Studio. See our guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/) for IDE details.

![Laptop and phone workspace for Android development](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What A2UI does on Android

A2UI stands for Agent-to-UI. An agent sends JSON messages that describe surfaces, components, data models, and actions. The client validates those messages against a catalog and maps them to native Compose UI.

The catalog acts as a contract. It lists the exact components, properties, and functions the agent is allowed to use. Unknown components are rejected. This prevents the agent from inventing UI that your app cannot safely render.

The official renderer currently supports A2UI specification version 0.9.1. It uses Compose Snapshot state for fine-grained updates. Only changed components recompose when the agent streams new data or the user interacts with the surface.

Three main artifacts power the feature:

- `androidx.a2ui:a2ui-engine` and `a2ui-model` handle parsing, validation, and message processing.
- `androidx.a2ui.compose:compose-runtime` and `compose-ui` map the protocol to Compose primitives.
- `androidx.compose.material3:material3-a2ui` supplies a ready-to-use Basic Catalog built from Material 3 components.

All were at 1.0.0-alpha02 as of late October 2026.

## Add the dependencies

Open your module’s `build.gradle.kts` and add the Google Maven repository if it is not already present. Then declare the libraries you need.

```kotlin
dependencies {
    implementation("androidx.a2ui:a2ui-engine:1.0.0-alpha02")
    implementation("androidx.a2ui:a2ui-model:1.0.0-alpha02")
    implementation("androidx.a2ui.compose:compose-runtime:1.0.0-alpha02")
    implementation("androidx.a2ui.compose:compose-ui:1.0.0-alpha02")
    implementation("androidx.compose.material3:material3-a2ui:1.0.0-alpha02")
}
```

Sync the project. The Material 3 catalog is optional if you plan to build a fully custom catalog for your design system. Most apps start with the Basic Catalog and replace individual components later.

![Multiple monitors showing code in a developer workspace](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Host a surface in your Compose hierarchy

Create a ViewModel or similar holder that owns the A2UI processor and surface models. Feed incoming agent messages into the processor. Collect the active surfaces as state and pass them to the UI.

In your screen composable, observe the surfaces and render each one with `A2uiSurface`.

```kotlin
@Composable
fun AgenticScreen(viewModel: AgenticViewModel) {
    val surfaces by viewModel.surfaces.collectAsStateWithLifecycle()

    surfaces.forEach { surface ->
        A2uiSurface(
            surfaceModel = surface,
            modifier = Modifier.fillMaxWidth()
        )
    }
}
```

`A2uiSurface` handles loading, error, and success states. It applies animated transitions by default. You can override the loading and error content if you need custom styling that matches the rest of your app.

The runtime validates every payload before it reaches the state models. Malformed messages are rejected and can be reported back to the agent so it can correct itself on the next turn.

## Use the Basic Catalog or build your own

The Material 3 Basic Catalog covers common elements such as text, buttons, cards, rows, columns, and text fields. It respects your app’s Material theme, so the generated UI matches existing screens without extra work.

When you need domain-specific controls, implement the `A2uiComponent` interface. Declare the properties the agent may set, map them to your Compose UI, and register the component in a custom catalog.

The agent can only use components that appear in the catalog you advertise during capability negotiation. This is the main safety boundary. You decide the allow-list; the agent works inside it.

Two-way bindings let user actions flow back to the agent. A button click or text-field change becomes an action message the agent can react to on the next turn.

## Connect an agent and stream messages

The renderer itself does not call a model. You own the agent loop. Common patterns include:

- On-device agents built with ML Kit’s Agentic API and Gemini Nano 4.
- Cloud agents that return A2UI messages over your own API.
- Coding agents in Android Studio that generate UI descriptions for prototype screens.

Feed each message (or each line of a JSONL stream) into the processor. The surface updates progressively as the agent produces more components or data.

Test with recorded JSONL payloads first. This lets you verify layout, theming, and interaction without waiting for a live model. Once the surface looks correct, wire it to a real agent.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qIvsFGvlHdo"
    title="Let agents generate UI in your Android apps with A2UI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Keep the catalog small at the start. Add components only when an agent actually needs them. Large catalogs increase the chance of unexpected layouts.

Set clear instructions for the agent that describe the available components and the expected user tasks. The catalog schema helps, but a short system prompt still improves reliability.

Handle errors explicitly. Show a fallback Compose screen if the surface fails to load or the agent returns an empty result. Log the rejected payloads so you can improve the agent’s prompt or the catalog.

Because the libraries are in alpha, pin exact versions and re-test after each update. Binary compatibility rules apply once the APIs reach 1.0 stable, but alpha releases can still change.

## Conclusion

A2UI turns agent replies into native Compose screens while you keep full control of the component set and the rendering. Add the renderer libraries, host an `A2uiSurface`, and start with the Material 3 Basic Catalog. Then connect the agent of your choice and stream messages.

The feature shipped as alpha at Android Dev Summit 2026. It pairs with other agent tools already available in Android Studio and on-device runtimes. Start with a single interactive surface, verify the catalog boundary, and expand from there.

## Sources

- Android Developers: Agent-to-UI renderer for Jetpack Compose (A2UI)
- Android Developers: Render A2UI surfaces in your app
- Android Developers Blog: Agentic and Flexible announcements, 28 October 2026
- Android Developers YouTube: Let agents generate UI in your Android apps with A2UI
- A2UI specification version 0.9.1
