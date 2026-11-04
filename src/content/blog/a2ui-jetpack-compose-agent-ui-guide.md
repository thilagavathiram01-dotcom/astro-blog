---
title: "How to Render Agent UI with A2UI in Jetpack Compose"
description: "Step-by-step guide to using the A2UI Jetpack Compose renderer so AI agents generate native interactive UI from your component catalog."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

AI agents no longer need to return walls of text. With Agent-to-UI (A2UI), they describe interactive screens as structured data. Your Android app renders those descriptions as native Jetpack Compose components from a catalog you control.

Google introduced the official Compose A2UI renderer in alpha at Android Dev Summit 2026. It maps the A2UI protocol to Compose primitives, uses Snapshot state for fine-grained updates, and keeps the agent from executing arbitrary code. This guide shows how to add it, define a catalog, process messages, and render surfaces.

Pair this with on-device tool exposure. See our guide to [preparing apps for AppFunctions agents](/blog/android-appfunctions-agents/) for the inbound side of the same agentic flow.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What A2UI does on Android

A2UI is an open protocol. An agent sends JSON messages that declare surfaces, components, properties, and data updates. The client holds a catalog of trusted components. Anything outside that catalog is rejected before it reaches the screen.

The Jetpack libraries split the work:

- `androidx.a2ui` and `androidx.a2ui:a2ui-engine` parse and validate messages (supports protocol version 0.9.1).
- `androidx.a2ui.compose:compose-runtime` and `compose-ui` handle reactivity and custom catalogs.
- `androidx.compose.material3:material3-a2ui` supplies a ready Basic Catalog built from Material 3 components.

Because the agent only emits data, you keep full control over theming, accessibility, and security. Progressive rendering works as messages stream in. Two-way bindings let user actions flow back to the agent.

## Prerequisites

Use a project that already targets a recent Android SDK and includes Jetpack Compose with Material 3. The A2UI artifacts are alpha, so pin versions and re-check the AndroidX release pages before shipping.

Add the Google Maven repository if it is not already present. Then declare the dependencies in your module `build.gradle.kts`:

```kotlin
dependencies {
    implementation("androidx.a2ui:a2ui-model:1.0.0-alpha01")
    implementation("androidx.a2ui:a2ui-engine:1.0.0-alpha01")
    implementation("androidx.a2ui.compose:compose-runtime:1.0.0-alpha01")
    implementation("androidx.a2ui.compose:compose-ui:1.0.0-alpha01")
    implementation("androidx.compose.material3:material3-a2ui:1.0.0-alpha01")
}
```

Confirm the latest alpha coordinates on the official A2UI Compose documentation before you lock a release branch.

## Step-by-step setup

### 1. Create the parser and processor

Initialize the message layer in a ViewModel. The processor holds the active surfaces and applies validated updates.

```kotlin
class AgenticUiViewModel : ViewModel() {
    private val parser = A2uiMessageParser()
    private val processor = A2uiMessageProcessor(
        catalogs = listOf(/* your catalogs */)
    )

    val a2uiSurfaces: StateFlow<List<A2uiSurfaceModel>> = processor.activeSurfaces

    fun onAgentMessage(json: String) {
        processor.processInput(parser, json)
    }
}
```

Call `onAgentMessage` from your networking or agent-response layer. Process off the main thread when the payload is large.

### 2. Choose or build a catalog

Every surface is driven by a catalog contract. Start with the Material 3 Basic Catalog for standard components such as Text, Button, Card, TextField, and Row/Column. Override individual components when you need custom branding or extra behavior.

The catalog lists the schemas the agent may use. The agent cannot invent new component types. This is the primary safety boundary.

### 3. Render surfaces

Observe the surfaces and host each one with `A2uiSurface`. The Basic Catalog implementation supplies loading indicators, error boundaries, and animated transitions out of the box.

```kotlin
@Composable
fun AgenticUiScreen(viewModel: AgenticUiViewModel) {
    val surfaces by viewModel.a2uiSurfaces.collectAsStateWithLifecycle()

    Column(modifier = Modifier.fillMaxSize().verticalScroll(rememberScrollState())) {
        surfaces.forEach { surface ->
            A2uiSurface(
                surfaceModel = surface,
                modifier = Modifier.fillMaxWidth().padding(16.dp)
            )
        }
    }
}
```

User interactions that produce actions are routed back through the processor so you can forward them to the agent.

![Smartphone showing an app interface on a desk](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

### 4. Handle streaming and errors

Agents often emit messages incrementally. The renderer updates only the affected components thanks to Compose Snapshot state. Malformed payloads are caught by schema validation; you can surface a component-level error state and optionally report the problem back so the agent can correct itself.

Declare multiple catalog versions if you need to support protocol evolution. The client advertises supported versions during capability negotiation.

## Practical tips

- Keep the catalog small at first. Add components only when an agent workflow needs them.
- Use KDoc-style descriptions in custom component schemas so the agent understands intent.
- Test with recorded JSONL streams before wiring a live model. Official samples and the Android Dev Summit session demonstrate progressive rendering.
- Combine A2UI surfaces with existing Compose screens. Most apps keep fixed navigation and use agent-driven UI for dynamic forms, comparisons, or multi-step assistants.
- Monitor alpha changes. Binary compatibility rules apply once the libraries reach 1.0.0, but early versions can shift.

## Watch the official walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/qIvsFGvlHdo"
    title="Let agents generate native Compose UI in your Android apps with A2UI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

A2UI lets agents generate interactive native UI without sending executable code. Add the alpha Jetpack Compose renderer, initialize a parser and processor, supply a catalog, and host surfaces with `A2uiSurface`. The result feels like ordinary Compose while the agent stays constrained to the components you approve.

Start with a single dynamic form or comparison card. Once the message flow and error handling are solid, expand the catalog and connect it to your existing agent pipeline.

## Sources

- [Agent-to-UI renderer for Jetpack Compose (A2UI)](https://developer.android.com/develop/ui/compose/agentic) — Android Developers
- [Render A2UI surfaces in your app](https://developer.android.com/develop/ui/compose/agentic/render-surfaces) — Android Developers
- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development) — Android Developers Blog
- [A2UI specification](https://a2ui.org/) — A2UI project
- [Let agents generate native Compose UI in your Android apps with A2UI](https://www.youtube.com/watch?v=qIvsFGvlHdo) — Android Developers (YouTube)
