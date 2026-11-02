---
title: "How to Integrate with Google Connected Apps Platform"
description: "Step-by-step guide to connect your app or service to Gemini and Search using the Connected Apps Platform, MCP servers, or Android AppFunctions."
pubDate: 2026-11-02T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "gemini", "ai", "google"]
noindex: false
---

Google’s Connected Apps Platform, launched in preview on October 28 2026, gives developers one place to bring their app or service into the Gemini app and Google Search. Users link an account once, then ask Gemini or use AI Mode to pull data or take actions without leaving the conversation. More than 50 Connected Apps were already live at launch, including Adobe, Experian, Localiza, and Peloton, with Calm and others coming soon. Search support expands in the following weeks.

This guide walks through the two complementary integration paths—remote MCP server (recommended for broad reach) and Android MCP via AppFunctions (for on-device experiences)—then covers testing, registration in Google Connected Console, and publishing. All steps come from official developer documentation at developers.google.com/connected-apps.

![Person holding a smartphone showing an AI interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Choose Your Integration Path

The platform supports two main routes.

**Remote MCP server** is the default for cross-platform capabilities. You host a public HTTPS endpoint that follows the Model Context Protocol specification. One integration can reach users on Android, iOS, and the web. Existing web APIs or MCP servers can be adapted to Google’s requirements. This path offers the widest reach with the least platform-specific work.

**Android MCP** uses the AppFunctions Jetpack library. Your Android app exposes functions that agents such as Gemini can discover and call locally on the device. This suits actions that depend on the current app state, on-device data, or tight system UI integration. See the companion guide on adding AppFunctions to an Android app for implementation details.

You can pursue both by registering separate apps in the console. Category and connection type are fixed after creation, so decide early.

## Build a Remote MCP Server

Start by implementing a remote MCP server that meets Google’s expectations.

Provide clear server instructions when the server initializes. These describe your domain and capabilities so the model knows when to route a request to you. Use explicit safety annotations on every tool: set `readOnlyHint=True` for queries and `destructiveHint=True` for state-changing actions. Add strongly typed schemas and detailed docstrings for parameters so the model calls tools accurately. Optionally bind tool outputs to UI resources with metadata such as `meta={"ui": {"resourceUri": "ui://..."}}` so Gemini can render interactive widgets in sandboxed iframes.

Host the server on any public HTTPS endpoint. Google documents an example using Cloud Run. Domain verification requires placing a token file at `/.well-known/google-connected-apps`. OAuth 2.1 with PKCE is recommended for user authorization; your authorization server must expose the standard metadata endpoints.

## Validate Locally and in Gemini Developer Mode

Before registering, test thoroughly.

Run the server locally and connect with the MCP Inspector (`npx @modelcontextprotocol/inspector`). Invoke tools, inspect JSON payloads, and confirm any UI resources render correctly.

Deploy to a public HTTPS endpoint, then open Gemini Developer Mode at gemini.google.com/devmode. Connect your endpoint and use the event log, tool schemas, environment simulation (date, time, location), and authentication settings to verify real responses. Fix issues here before submitting for review.

![Developer working on a laptop with code](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Register and Publish in Google Connected Console

Apply for preview access through the interest form linked from developers.google.com/connected-apps. Once approved, use Google Connected Console to create your app.

Enter the public name, short description, 512×512 icon, at least three capabilities, example prompts, and links to your terms and privacy policy. Choose the category (cannot be changed later) and whether the app appears in Search, the Gemini app, or both. Point the console at your MCP endpoint and complete domain and OAuth discovery. Add testers, run preview environments, then submit for review.

After approval you can track traffic, latency, and error rates inside the console while keeping control of branding and verified logos.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a Smooth Launch

Keep tool descriptions precise and free of language that tries to steer the model toward your app over others. Google’s policy prohibits deceptive capability claims. Start with a small set of high-value, well-documented tools rather than exposing every endpoint. Test both read-only and action flows in Developer Mode under realistic user context. Monitor the console analytics after launch and iterate on server instructions and schemas based on actual traffic.

For Android-specific on-device tools, combine this platform registration with the AppFunctions implementation described in [Add AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/).

## Conclusion

The Connected Apps Platform turns Gemini and Search into distribution surfaces for your service. By exposing capabilities through a remote MCP server or Android AppFunctions, registering once in Connected Console, and choosing the right surfaces, you reach high-intent users without building separate integrations for each Google product. Start with the official documentation, validate early in Gemini Developer Mode, and ship a focused set of tools that solve clear user jobs.

## Sources

- [New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) — Google Blog, Oct 28 2026
- [Connected Apps Platform overview](https://developers.google.com/connected-apps) — Google for Developers
- [Connected Apps Platform MCP server developer guide](https://developers.google.com/connected-apps/mcp) — Google for Developers
- [Create and manage Connected Apps in Google Connected Console](https://developers.google.com/connected-apps/gpc) — Google for Developers
- [AppFunctions overview](https://developer.android.com/ai/appfunctions) — Android Developers
- [Extend your app to Gemini and Search with the Connected Apps Platform](https://www.youtube.com/watch?v=-4G-4w9FKDw) — Android Developers, Android Dev Summit 2026
