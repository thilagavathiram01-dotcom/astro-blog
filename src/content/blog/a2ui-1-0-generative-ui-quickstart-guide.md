---
title: "A2UI 1.0 Quickstart: Build Generative Agent UI"
description: "Step-by-step A2UI 1.0 quickstart for generative UI. Agents describe screens, apps render native components securely across platforms."
pubDate: 2026-11-14T23:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai", "google"]
noindex: false
---

AI agents usually reply with paragraphs of text. That works for simple answers but fails when users need to pick a flight, confirm a booking, or compare options. A2UI 1.0 changes this. Released on 11 November 2026, it is the first stable version of Google’s open protocol for generative UI.

With A2UI, the agent describes what to show as structured data. Your app draws the screen using its own native components from a catalog you control. Sensitive values stay on the server. The same description renders on web, Android, iOS, and inside MCP Apps.

This guide walks through the official quickstart so you can run a working example and understand the pieces.

![Analytics dashboard on a laptop screen](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## What is new in A2UI 1.0

Version 1.0 stabilizes the protocol. Bidirectional function calls let a component check availability or submit data without extra chat turns. Accessibility metadata and extensions for custom fields are now part of the spec. Server-side binding means the model never sees raw sensitive values.

Open-source renderers cover React, Angular, and Lit on the web; Flutter for mobile, web, and desktop; and SwiftUI on iOS. Jetpack Compose is currently at 0.9.1 with 1.0 support coming soon. Agent SDKs exist for Python, TypeScript, and Dart. Companies including Atlassian, Alation, Bloomberg, and ByteDance already use it in production.

The protocol stays under Apache 2.0. Docs and samples live at a2ui.org.

## Prerequisites

You need Python 3.11 or later. For the web client use Node 20+. For the Flutter client use Flutter 3.38 or later. A free Gemini API key from Google AI Studio is optional for live agent calls; the sample runs a recorded trip without one.

## Run the Travel A2UI quickstart

The official sample is a trip planner. One Python server holds the agent. A React client and a Flutter client render the surfaces it sends.

Clone the labs repository and start both clients:

```bash
git clone https://github.com/a2ui-project/labs
cd labs/samples/travel-a2ui
./scripts/quickstart.sh both
```

The script creates a virtual environment, installs dependencies, builds the clients, and starts the server on port 8080. Open http://127.0.0.1:8080 for the React app and http://127.0.0.1:8080/flutter/ for the Flutter app.

If you prefer one platform, run `./scripts/quickstart.sh react` or `./scripts/quickstart.sh flutter`. Without a GEMINI_API_KEY the sample shows a recorded trip. Paste a key when prompted to talk to the live agent. Try a prompt such as “Six days in Madrid in April, two of us, around $2,500 all in.”

The catalog lists the components the agent may use. The agent cannot invent new ones. This keeps every screen on-brand and secure.

![Team collaborating around a laptop](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)

## How the pieces fit together

On the server the Agent SDK reads a catalog.json that describes components and functions. It generates an A2UI skill with grammar rules and prompt instructions. The model writes A2UI Express or another inference format. The compiler validates the output against the catalog and emits wire messages.

Messages travel over server-sent events. The client MessageProcessor applies them. Surfaces appear, components update, and data models change. User actions send action messages back so the agent can continue.

The client owns the design system. The agent only chooses which registered components to place and how to bind data. Sensitive values are bound on the server so they never reach the model.

For Android, see our earlier guide on [rendering agent UI with A2UI in Jetpack Compose](/blog/a2ui-jetpack-compose-agent-ui-guide/). It covers the alpha Compose renderer and catalog setup.

## Faster paths without cloning

Add the official skill to any coding agent:

```bash
npx skills add a2ui-project/a2ui
```

This gives the agent protocol rules, SDK integration guides, and catalog authoring workflows.

Try the A2UI Playground by CopilotKit in the browser. It streams Express and JSON surfaces from Gemini Flash and lets you switch catalogs live. No local setup is required.

## Practical tips

Start with the Basic Catalog. Add domain components only when a workflow needs them. Write clear JSON Schema descriptions so the model understands intent.

Test with recorded message streams before connecting a live model. The evolution guide on GitHub lists every change from 0.9 to 1.0.

Jetpack Compose support for 1.0 is still rolling out. Gemini Enterprise currently uses 0.9.1; an upgrade is in progress. Web and Flutter renderers already work inside MCP Apps, so the same surfaces can appear in Claude or Gemini.

Keep the catalog small. Progressive rendering works as messages stream in. Schema validation catches malformed payloads before they reach the screen.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/f_nfzKh-lRI"
    title="Google A2UI 1.0: AI Agents Can Now Build Native Interfaces Across Apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

A2UI 1.0 gives agents a stable way to return interactive screens instead of text. Run the Travel quickstart, inspect the catalog and message flow, then adapt the pattern to your own agent and design system. The protocol keeps the model away from executable code and sensitive data while your app stays in full control of rendering.

Start with one dynamic form or comparison card. Once the message loop and error handling are solid, expand the catalog and connect it to your existing agent pipeline.

## Sources

- [A2UI 1.0: Build delightful, fast, reliable, agentic experiences](https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/) — Google Developers Blog
- [Quickstart](https://a2ui.org/quickstart/) — A2UI project
- [Step-by-step walkthrough](https://a2ui.org/quickstart/step-by-step/) — A2UI project
- [SDKs](https://a2ui.org/concepts/sdks/) — A2UI project
- [A2UI specification and GitHub](https://github.com/a2ui-project/a2ui) — A2UI project
