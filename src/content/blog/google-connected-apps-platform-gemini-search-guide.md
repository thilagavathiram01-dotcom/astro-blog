---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to Google's Connected Apps Platform preview. Integrate MCP or AppFunctions so users act in Gemini and Search."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "google", "gemini"]
noindex: false
---

Google's Connected Apps Platform, announced October 28, 2026, gives developers one place to bring services into the Gemini app and Search. Users link an app once. After that, they can ask Gemini or AI Mode in Search to read their data or complete actions without leaving the conversation.

The platform is in preview with phased access. More than 50 Connected Apps already exist across productivity, ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving soon. Calm is also coming.

This guide covers the official path: sign up, choose MCP or Android MCP, register in Google Connected Console, test, and submit.

## What the Platform Provides

Developers integrate once and choose whether the app appears in Search, the Gemini app, or both. After launch you track traffic, latency, and error rates while keeping control of logos and authenticated accounts.

Two integration paths exist:

- Cloud-hosted MCP server for web, Android, and iOS reach.
- Android MCP via AppFunctions for deeper on-device capabilities that Gemini can call on Android.

If you already expose tools on Android, start with the AppFunctions path. Our earlier post walks through [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

![Person using a smartphone next to a laptop and tools](https://images.unsplash.com/photo-1778146448308-149ff6244135?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Apply

Official docs list these requirements:

- A publicly reachable MCP server on HTTPS using Streamable HTTP transport, or an Android app with AppFunctions.
- Ability to serve a verification file at `https://your-domain/.well-known/google-connected-apps`.
- A Google account with permissions in Google Connected Console. An administrator must accept the Connected Apps Terms of Service.
- Review of available categories. The category is locked after selection and defines expected capabilities.

Google publishes IP ranges for allow-listing outbound traffic from its fetchers and agents. Refresh those lists regularly.

Sign up for the preview at [developers.google.com/connected-apps](https://developers.google.com/connected-apps). Access opens in phases; applying does not guarantee immediate entry.

## Step-by-Step: Register and Configure

Once you have console access:

1. Sign in to Google Connected Console and select Create app.
2. Accept the terms if prompted (administrator only).
3. Name the app. This name is how users mention it with @.
4. Choose a category.
5. Select connection type: MCP server or Android MCP. You cannot change this later.
6. Enter your MCP endpoint URL and complete domain verification.
7. Sync tools from your server. The console snapshots the available tools for that version.
8. Add testers by email. They can invoke the app in Gemini by typing @YourAppName.

While in preview you can update tools on your server and resync. Status changes to Available to testers once details and MCP setup are saved.

## Test Before You Submit

Testers open Gemini, go to Settings & help → Connected apps, and connect your app. They then mention it with @ in chat. The console shows traffic and errors.

For Android MCP, confirm AppFunctions are registered and enabled. Use the testing patterns from the AppFunctions guide: ADB list and execute commands, plus the official testing agent.

Explicit user confirmation is required for state-changing actions. Design tools that return only the data needed and avoid sensitive fields.

![Developer coding while taking notes at a desk](https://images.unsplash.com/photo-1753715613831-9e48eac86813?auto=format&fit=crop&w=800&q=80)

## Tips for a Smooth Submission

- Keep tools atomic and well-described. Agents rely on clear metadata and instructions.
- Prefer OAuth 2.1 with PKCE for user-delegated access. Official docs recommend it for agentic flows.
- Support Authorization Server Metadata so discovery works automatically.
- Test both the happy path and error cases. Latency and error rates are visible after launch.
- Start with a small set of high-value actions such as searching inventory, checking availability, or creating a booking.
- Document side effects so agents know when to ask for confirmation.

Search Connected Apps currently work in AI Mode for English users in the US. Gemini availability varies by country, language, and device.

## Conclusion

The Connected Apps Platform removes the need for separate integrations for Gemini and Search. Build an MCP server or use AppFunctions, register once in the console, test with real users, and submit. Phased access means early applicants gain an edge as more markets and products open.

Check the docs regularly for new categories, markets, and Google surfaces. A well-structured tool set today becomes the default way users interact with your service inside Google products.

## Sources

- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform overview: https://developers.google.com/connected-apps
- MCP server developer guide: https://developers.google.com/connected-apps/mcp
- Register, test, and publish: https://developers.google.com/connected-apps/gpc/perform-the-steps
- Prerequisites: https://developers.google.com/connected-apps/gpc/prerequisites
- OAuth 2.1 implementation guide: https://developers.google.com/connected-apps/mcp/oauth

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/CQywdSdi5iA"
    title="The Model Context Protocol (MCP)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
