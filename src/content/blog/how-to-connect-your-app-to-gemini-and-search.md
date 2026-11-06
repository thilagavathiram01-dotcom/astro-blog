---
title: "How to Connect Your App to Gemini and Search"
description: "Step-by-step guide to Google's Connected Apps Platform: register an MCP server, test in Gemini Developer Mode, and publish for Search and the Gemini app."
pubDate: 2026-11-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "gemini", "tutorials", "how-to"]
noindex: false
---

Google launched the Connected Apps Platform preview on October 28, 2026. Developers can now expose services through a single integration so users can call them inside Google Search and the Gemini app.

The platform uses the Model Context Protocol (MCP) for cloud services or Android AppFunctions for on-device features. You register once in the Google Connected Console, choose Search, Gemini, or both, then submit for review.

This guide walks through the practical steps to prepare, test, and publish your first connected app.

## What the Connected Apps Platform does

Connected Apps let users trigger actions from your service with natural language. A person might say “@YourApp book a table for two at 7” or ask Search “show my recent orders from YourApp.”

Google hosts the discovery and routing. Your MCP server (or Android AppFunctions) handles the actual work and returns results or confirmation cards. Users authenticate once through OAuth, and subsequent calls stay inside the Google surface.

More than 50 partners already appear across productivity, ticketing, health, and fitness. The preview is phased, so early applicants get feedback before wider rollout.

![Multiple computer screens showing code in a developer workspace](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## Prerequisites before you start

You need a public HTTPS MCP endpoint that follows the Model Context Protocol. One global endpoint per connected app is required. If you filter by IP, allow Google’s user-triggered-fetchers and user-triggered-agents ranges.

Domain verification is mandatory. Place a file at `https://yourdomain/.well-known/google-connected-apps` that returns HTTP 200 with no redirects.

Prepare these assets:
- App name and a description under 30 words
- 512×512 pixel icon
- At least three capabilities and three example prompts
- Links to your terms of service and privacy policy
- OAuth 2.1 with PKCE if users must sign in

For Android on-device actions, use AppFunctions instead of (or in addition to) a remote MCP server. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Sign up for the preview at developers.google.com/connected-apps.

## Build and validate your MCP server

Write clear server instructions that describe your domain and what the tools can do. Google uses these instructions to decide when to call your server.

Annotate tools properly:
- `readOnlyHint=true` for tools that only read data
- `destructiveHint=true` for tools that create, update, or delete

Destructive tools trigger a confirmation step for the user.

Validate locally with the MCP Inspector before exposing the server. Run the inspector against your local process, check tool schemas, and test sample prompts.

Deploy the server to any HTTPS host. Google Cloud Run is a common choice, but any provider works as long as the endpoint is public and stable.

## Test in Gemini Developer Mode

Open gemini.google.com/devmode with a Google account. Connect your deployed HTTPS endpoint.

Developer Mode shows an event log, tool schemas, and lets you simulate date, time, and location. Add test accounts if your tools require authentication.

Run your example prompts. Fix any schema or instruction problems until every prompt succeeds on the first try. Keep the first version small: one or two read actions plus one reversible write action.

## Register and publish in Google Connected Console

Once preview access is granted:

1. Create a new connected app. Choose a category (you cannot change it later) and connection type (MCP or Android).
2. Add display name, icon, short description, capabilities, and example prompts.
3. Enter the MCP endpoint and verify the domain with the token file.
4. Configure authorization: none, machine-to-machine, or user-delegated OAuth.
5. Sync tools. Resolve any “Must fix” errors.
6. Add testers (Gmail accounts) and submit for review.

Choose whether the app appears in Search, the Gemini app, or both before final submission.

After approval you can track traffic, latency, and error rates inside the console. You keep control of branding and verified logos.

![Hand holding a smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Tips for a smooth first launch

Start with a single high-intent read action that users already ask for. Add a write action only if it is reversible and clearly marked destructive.

Hand off payments, cancellations, and account changes to your own app. Keep the connected surface focused on discovery and quick tasks.

Seed a test account with realistic data and no extra two-factor steps so reviewers can complete every example prompt.

Update server instructions when you add tools. The console validates that instructions exist and match the declared capabilities.

Monitor the first week of live traffic. Latency spikes or high error rates are easier to fix while volume is low.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Connected Apps Platform gives developers a single place to reach users inside Search and Gemini. Prepare a public MCP endpoint, validate it locally and in Developer Mode, then register through the Connected Console.

Early access is limited, so apply now and ship a narrow first version. Once live, expand the tool set based on real usage data.

Official documentation is at developers.google.com/connected-apps.

## Sources

- Google blog: New Connected Apps Platform launches for developers (October 28, 2026)
- Google for Developers: Create and manage Connected Apps in Google Connected Console
- Google for Developers: Connected Apps Platform MCP server developer guide
- Android Developers YouTube: Extend your app to Gemini and Search with the Connected Apps Platform
