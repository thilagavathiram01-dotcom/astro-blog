---
title: "How to Connect Your App to Gemini and Search"
description: "Step-by-step guide to the Connected Apps Platform for integrating services into Gemini and Google Search using MCP or Android AppFunctions."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Google's Connected Apps Platform, launched in preview on October 28, 2026, gives developers one place to bring their services into the Gemini app and Google Search. Users link an app once. After that, Gemini or AI Mode in Search can access authorized data and trigger actions when relevant.

This replaces one-off partnerships. You integrate with a remote MCP server or Android MCP via AppFunctions, register in Google Connected Console, test, and submit for review. You choose whether the app appears in Search, the Gemini app, or both.

More than 50 Connected Apps already exist across productivity, fitness, ticketing, and other categories. Partners such as Adobe, Peloton, and Calm show the model in action. Access opens in phases for U.S. developers first.

## Why the Platform Matters

Connected Apps sit where users already work. A person can ask Gemini to build a playlist, check an order status, or book a class without switching apps. For developers, one integration reaches high-intent users on both surfaces.

The platform standardizes on the Model Context Protocol. You expose tools with clear schemas. Google handles discovery, authentication flow, and presentation. You control branding, including verified logos, and receive traffic, latency, and error metrics once live.

![Person using a smartphone with multiple app interfaces](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Choose Your Integration Path

Two complementary routes exist.

**Remote MCP server** is the recommended default. Host an MCP server on a public HTTPS endpoint. It works across Android, iOS, and web. Reuse existing APIs or an MCP server you already run. Add UI metadata if you want interactive widgets.

**Android MCP** uses the Jetpack AppFunctions library. Tools execute on the user's device. This fits actions that need local context, current app state, or offline capability. Gemini on Android can call them directly.

If your app already exposes AppFunctions, the Android path is a natural extension. See our guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/) for implementation details.

## Prerequisites

For the remote MCP path you need:

- A public HTTPS MCP endpoint using Streamable HTTP transport.
- OAuth 2.1 with PKCE for user authorization. Support Authorization Server Metadata for discovery.
- Domain verification via a file at `https://yourdomain/.well-known/google-connected-apps` returning HTTP 200.
- App metadata: name, short description, 512	imes512 icon, at least three capabilities, example questions, terms, and privacy policy URLs.

For Android MCP, implement AppFunctions and link the connected app to your Play listing in the console.

Apply for preview access through the interest form linked from developers.google.com/connected-apps.

## Build and Test Your MCP Server

Define tools with clear system instructions, typed schemas, and safety annotations. Mark read-only tools and those that modify data. Deploy to a public HTTPS endpoint.

Test in Gemini Developer Mode. The interface shows tool schemas, an event log, and environment simulation for date, time, and location. Confirm authentication and tool calls behave as expected before console registration.

![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Register in Google Connected Console

Once preview access is granted:

1. Sign in to Google Connected Console.
2. Create a connected app and accept the terms if required.
3. Enter the app name (used for @ mentions) and select a category. Category cannot be changed later.
4. Choose connection type: MCP server or Android MCP.
5. Configure the endpoint, authentication details, and public-facing card information.
6. Discover and sync tools.
7. Set up testers and a preview environment.
8. Submit for Google review.

After approval you control when the app publishes. Track usage metrics inside the console.

## Security and User Experience Tips

Require explicit user confirmation for any action that changes data or spends money. Keep tool descriptions precise so Gemini selects the right one. Return only the data needed for the request.

Use OAuth 2.1 with PKCE. Support the required metadata endpoints so discovery works without manual configuration. For Android MCP, follow AppFunctions security practices and avoid exposing sensitive credentials.

Test the full user flow: account linking, tool invocation, and error handling. Monitor latency because slow tools degrade the conversational experience.

## What Happens After Launch

Users discover the app through Gemini or Search settings and link their account. Once linked, the service becomes available in relevant conversations. Google may expand supported surfaces and markets over the coming months.

Existing partners will appear in Search in the weeks after the October 28 announcement. New submissions go through the same review process.

## Conclusion

The Connected Apps Platform lowers the barrier to reaching users inside Gemini and Search. Start with a remote MCP server if you need cross-platform reach, or Android MCP if local execution matters. Apply for the preview, implement the protocol, register in the console, and submit for review.

Focus on a small set of high-value tools first. Clear schemas and solid authentication make the difference between a reliable integration and one that rarely gets selected.

## Sources

- Connected Apps Platform overview: https://developers.google.com/connected-apps
- MCP server developer guide: https://developers.google.com/connected-apps/mcp
- Google Connected Console guide: https://developers.google.com/connected-apps/gpc
- OAuth 2.1 implementation: https://developers.google.com/connected-apps/mcp/oauth
- Launch announcement: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- AppFunctions documentation: https://developer.android.com/ai/appfunctions

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
