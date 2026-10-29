---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to integrate your app with Google's Connected Apps Platform using MCP for Gemini and Search in 2026."
pubDate: 2026-10-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Google launched the Connected Apps Platform preview on October 28, 2026. Developers can now register apps that appear inside the Gemini app and Google Search. Users link once and then complete real actions from chat or search results.

The platform standardizes integration through the Model Context Protocol (MCP) or Android AppFunctions. After setup, you use the Google Connected Console to test, review, and publish. Access opens in phases, starting with U.S. developers.

This guide covers the two integration paths, console steps, requirements, and practical tips drawn from the official developer documentation and announcement.

## Why Connected Apps Matter

Connected Apps let users stay inside Gemini or Search while accessing your service. A user can ask Gemini to book a class, check a balance, or design a graphic without switching apps. Google already hosts more than 50 Connected Apps across productivity, ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving in the coming weeks. A new Calm integration is also planned for both surfaces.

For developers, the platform means one integration reaches high-intent users on two major Google products. You control brand assets, logos, and authenticated accounts. Once live, the console shows traffic, latency, and error rates.

![Close-up of a smartphone screen showing multiple AI app icons including Gemini](https://images.unsplash.com/photo-1738640679960-58d445857945?auto=format&fit=crop&w=800&q=80)

## Choose Your Integration Path

Two complementary routes exist.

**Cloud-hosted MCP server (recommended for most teams).** Host a remote MCP server that exposes tools. This works across Android, iOS, and web. If you already run web APIs or an MCP server for other agents, you can reuse it. Google provides an MCP server developer guide and an OAuth 2.1 implementation guide. OAuth 2.1 with PKCE is recommended for secure delegated access. Your authorization server must support OAuth Discovery so the console can locate endpoints automatically.

**Android MCP via AppFunctions.** Use the Jetpack AppFunctions library so your Android app acts as an on-device MCP server. This is useful for actions that need local device context or tight OS integration. AppFunctions require Android 16 or higher. If you already implemented AppFunctions for on-device agents, you can extend that work. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Pick the path that matches your stack. Many teams start with a cloud MCP server for broadest reach, then add Android AppFunctions for deeper mobile experiences.

## Prerequisites Before You Apply

Review these requirements from the Google Connected Console documentation:

- A working MCP server endpoint (or AppFunctions implementation) that the console can reach.
- IP allowlisting if your server restricts traffic.
- Domain verification for your brand assets.
- Metadata assets (logo, description, privacy details).
- OAuth configuration that supports the authorization code flow with PKCE for MCP integrations.

Sign up for the preview at developers.google.com/connected-apps or the apply link in the console help. Access is phased; more developers, markets, and Google products will be added over the coming months.

![Developer workspace with laptop and phone on a desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Register, Test, and Publish in the Console

Once approved for the preview, follow these steps in the Google Connected Console:

1. Create a new connected app entry and enter your public-facing details (name, logo, short description).
2. Connect your MCP server URL or register the Android AppFunctions endpoint.
3. Choose availability: Gemini app, Search, or both. You select this before review.
4. Configure testers. Add accounts that can exercise the tools before public review.
5. Test end-to-end. Verify tool discovery, authorization, and action completion. Check latency and error rates in the console.
6. Submit for review. Google reviews the app for policy compliance, brand accuracy, and technical readiness.
7. After approval, publish. Track usage metrics and iterate on tool descriptions for better agent selection.

The console also supports versioning so you can update tools without breaking existing users. Troubleshoot common issues (OAuth discovery failures, missing scopes, or domain verification) using the console documentation.

## Practical Tips for Better Results

- Write clear, action-oriented tool descriptions. Agents select tools based on these descriptions, so include expected parameters and outcomes.
- Limit exposed data to what the task requires. Return only necessary fields.
- Support OAuth 2.1 with PKCE and proper discovery metadata. Missing fields cause integration failures.
- Test with real user accounts early. Authorization and consent flows behave differently in production.
- Start with a small set of high-value tools (search, create, book) rather than exposing every endpoint at once.
- Monitor the console metrics after launch. High error rates or latency can reduce visibility.
- For Android, combine AppFunctions with clear KDoc so on-device agents understand constraints.

If your app already supports agent workflows elsewhere, map those tools directly to MCP. Consistency across assistants reduces maintenance.

## What Happens After Publication

Users discover your app in Gemini’s Connected Apps list or through Search interactions. They link once via OAuth. Subsequent requests can invoke your tools without leaving the Google surface. Google handles the agent orchestration; you handle the business logic and data.

Existing partners will expand to Search in the coming weeks. New apps that complete review can appear on both surfaces. The platform continues to add markets and additional Google products over time.

## Conclusion

The Connected Apps Platform gives developers a single place to bring services into Gemini and Search. Choose an MCP server or Android AppFunctions path, complete the console registration and review, and start serving high-intent users. Official documentation at developers.google.com/connected-apps contains the full MCP, OAuth, and console guides.

Apply for the preview, implement one clear tool, and test thoroughly before submission. As the platform expands beyond the initial U.S. developer cohort, early integrations gain a head start.

## Sources

- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform overview: https://developers.google.com/connected-apps
- MCP server developer guide: https://developers.google.com/connected-apps/mcp
- Google Connected Console guide: https://developers.google.com/connected-apps/gpc
- OAuth 2.1 implementation guide: https://developers.google.com/connected-apps/mcp/oauth
- AppFunctions overview: https://developer.android.com/ai/appfunctions

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-PsFV6TpRU"
    title="How to make your Android app smarter with AppFunctions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
