---
title: "How to Get Started with A2UI 1.0 on Android Apps"
description: "Step-by-step guide to integrate A2UI 1.0 so AI agents generate native Jetpack Compose UI in your Android apps. Setup, tips, and official sources."
pubDate: 2026-11-14T11:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools"]
noindex: false
---

Users now expect AI agents to do more than return walls of text. They want interactive forms, charts, and confirmation screens that feel native to your app.

A2UI 1.0, released on November 11, 2026, gives developers a stable open protocol for this. Agents describe UI as structured messages. Your Android app renders them with Jetpack Compose components you control. No arbitrary code runs in your process.

This guide shows how to get started with the current Jetpack Compose renderer (supporting 0.9.1 today, with 1.0 support coming soon) and prepare for the full stable release.

![Android phone showing AI app icons](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## What A2UI 1.0 Changes for Android Developers

A2UI separates the agent's intent from the rendering. The agent sends JSON messages that declare components, data bindings, and actions. Your app maps those to its own Compose catalog.

Version 1.0 adds bidirectional function calls. An agent can now request real-time checks, such as flight availability, before showing options. It also improves accessibility support and adds extension points for extra metadata.

The Jetpack Compose renderer currently implements version 0.9.1 of the protocol. Official 1.0 support for Compose is listed as coming soon on the A2UI site and Google Developers Blog. You can build against the alpha libraries today and update when the stable packages land.

Companies including Atlassian, Alation, and ByteDance already use A2UI in production flows. Gemini Notebook uses similar cards for options and review steps.

If you previously followed our earlier guide on [rendering agent UI with A2UI in Jetpack Compose](/blog/a2ui-jetpack-compose-agent-ui-guide/), this update focuses on the 1.0 protocol changes and current library status.

## Prerequisites and Library Setup

You need an Android project using Jetpack Compose and Kotlin. Target a recent SDK. The A2UI Compose libraries live under the androidx.a2ui group.

Add these dependencies (check the latest alpha versions on the Android Developers site):

- androidx.a2ui:a2ui-model
- androidx.a2ui.compose:compose-runtime
- androidx.a2ui.compose:compose-ui

For the basic catalog (Text, Button, Card, Row, Column, and others), include the Material 3 A2UI implementation when available.

Sync the project. The renderer handles streaming messages, progressive rendering, and two-way data binding through Compose's snapshot system. Only changed parts recompose.

You also need an agent that can emit A2UI messages. Use the official agent SDKs for Python, TypeScript, or Dart, or integrate with Gemini via Firebase AI Logic or a custom MCP server. For on-device experiments, pair with ML Kit GenAI APIs and Gemini Nano where available.

![Developer coding on a laptop with mobile device](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Render Your First A2UI Surface

1. Define or extend a component catalog. The basic catalog covers common UI elements. For custom design-system pieces, implement A2uiComponent interfaces that declare property schemas, bind data, and emit Compose UI. Custom components let the agent use only what you approve.

2. Create a surface. In your Composable, use the A2UI runtime to process incoming messages. A typical flow creates a surface ID, registers the catalog, and streams messages from the agent.

3. Handle message types. A2UI supports createSurface, updateComponents, updateDataModel, and action messages. Process them sequentially or as they stream. The runtime validates against the catalog schema.

4. Bind data and actions. Use dynamic properties for text and values. Wire button actions back to the agent so user choices (confirm, edit, select) return as structured data. Version 1.0's bidirectional calls let the agent invoke app functions for live data without extra round trips in every case.

5. Test progressive rendering. Agents often stream UI in chunks. The Compose renderer updates only affected nodes. Verify loading states and animations on your custom components.

6. Secure the flow. Because the agent never ships code, the risk surface stays limited to the components and functions you expose. Validate all incoming data. For sensitive flows, keep confirmation steps in your catalog.

The official Android Developers page on the Agent-to-UI renderer documents the APIs and version compatibility. Start with the Jetpacker sample patterns and the A2UI quickstart at a2ui.org.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Production Use

Keep catalogs small and focused. Agents perform better when they choose from a clear set of components rather than inventing layouts.

Use A2UI Express or decision models for faster generation when low latency matters. The 1.0 agent SDKs include helpers for skills, message translation, and error correction.

Combine with Android MCP or AppFunctions when the agent needs to call your app's tools. A2UI handles the visual response; MCP handles tool discovery and execution.

Test on real devices. Progressive updates and data binding behave differently under load. Check accessibility with TalkBack, since 1.0 improves support.

Monitor the Android Developers Blog and a2ui.org for the Compose 1.0 renderer release. Update dependencies when it ships to gain full bidirectional function call support.

For hybrid cloud and on-device agents, use Firebase AI Logic to route requests. On-device Gemini Nano handles simple cases; cloud models handle complex multi-app flows.

## Conclusion

A2UI 1.0 moves agent responses from text to native interactive UI that matches your app's design system. Android developers can start today with the 0.9.1 Compose renderer and prepare for the stable 1.0 packages.

Add the libraries, define a catalog, process messages, and wire actions. The result is faster, more reliable agent experiences that users can confirm or edit with taps instead of extra chat turns.

Check the sources below for the latest library versions and protocol details. Build a small prototype this week and expand from there.

## Sources

- Google Developers Blog: A2UI 1.0 announcement (November 11, 2026)
- Android Developers: Agent-to-UI renderer for Jetpack Compose
- A2UI official site and protocol evolution guide
- Android Dev Summit 2026 keynote (YouTube)
- Android Developers Blog: What’s new in intelligent apps at the Android Developer Summit
