---
title: "Connect Your App to Gemini and Search"
description: "How to join Google’s Connected Apps Platform preview and expose your Android app services to Gemini and Search via MCP."
pubDate: 2026-10-31T12:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "gemini", "tutorials"]
noindex: false
---

At Android Dev Summit on October 28, 2026, Google opened the Connected Apps Platform preview. It lets developers surface app services directly inside Gemini and Google Search so users can complete tasks without leaving the conversation.

More than 50 partner integrations already run in the Gemini app. Examples include Adobe, Peloton, and Experian. The platform expands that reach to more developers through a single console.

![Laptop and phone workspace with code open on screen](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What the Connected Apps Platform Does

Users mention an app with @ or describe a task. Gemini or Search discovers the matching connected app, calls its tools, and returns results or actions inside the chat. Sensitive steps show a confirmation card so the user stays in control.

The platform sits on the open Model Context Protocol (MCP). You keep your brand and business logic. Google handles discovery and the user interface layer.

Two connection paths exist:

- Remote MCP server: reaches Gemini and Search users on web, Android, and iOS.
- Android MCP (powered by AppFunctions): limited to Gemini on Android devices running Android 16 or higher.

AppFunctions is now in beta as Android’s unified tool-calling layer. It lets your app expose typed functions that agents can invoke.

## How to Start with the Preview

The preview is open for developers. Sign-up and management happen in the Google Connected Console.

1. Apply for the Connected Apps Platform preview through the form linked from the official Android Developers documentation and blog posts.
2. Once approved, sign in to Google Connected Console.
3. Create a connected app, choose a category (the choice cannot be changed later), and select the connection type: Android MCP or remote MCP.
4. Fill in the public card: a short description under 30 words, at least three capabilities, example questions, icon, terms, and privacy policy URLs.
5. For Android MCP, link the connected app to your Play Store listing and upload the app bundle that contains the AppFunctions declarations.
6. Test in Gemini developer mode or on-device preview, then submit for review.

After approval the app becomes available to users who connect it. Over the coming weeks more partner apps will appear in Search as well.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Building with Android MCP and AppFunctions

For on-device Android integration:

- Target Android 16 (API 36) or higher.
- Annotate public methods with `@AppFunctionDeclaration` and provide clear KDoc `@param` descriptions. The system generates the schema automatically.
- Enable AppFunctions discovery in your agent or Connected App configuration.
- Sensitive actions (payments, reservations, messages) must surface an interactive confirmation. The platform enforces this pattern.

Remote MCP servers require HTTPS, a single global endpoint (or country-specific when limited), domain verification via a `/.well-known/google-connected-apps` file, and recommended OAuth 2.1 with PKCE for login.

![Hand holding smartphone showing code on the display](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Practical Tips

Start with one high-value capability such as “add items to cart” or “check order status.” Clear natural-language descriptions improve discovery.

Test thoroughly in Gemini developer mode before submission. Review the confirmation flow for any action that changes user data.

If you already expose AppFunctions for your own on-device agent, the same declarations can serve the system agent once you register the Connected App.

Users control which apps Gemini can access. Document the permissions your tools need so reviewers and users understand the scope.

For related on-device agent patterns see our guide to [Android AppFunctions for agents](/blog/android-appfunctions-agents/).

## What Comes Next

The Connected Apps Platform is still in preview. Google is gathering feedback on guardrails and the console experience. Broader availability for more developers and deeper Search integration is expected in the weeks ahead.

If your app already solves a multi-step task that users currently leave Gemini or Search to finish, this is the shortest path to keep them inside the conversation.

**Sources**

- Android Developers Blog: Agentic and Flexible: A next era of Android development (28 October 2026)
- Google Connected Console and AppFunctions documentation
- Android Dev Summit 2026 session: Extend your app to Gemini and Search with the Connected Apps Platform
