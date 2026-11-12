---
title: "How to Integrate with Google Connected Apps Platform"
description: "Step-by-step guide to connect your app to Gemini and Search using the Connected Apps Platform preview."
pubDate: 2026-11-12T12:00:00
heroImage: "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "ai-tools", "gemini", "tutorials"]
noindex: false
---

Google’s Connected Apps Platform gives developers a single place to bring app features into Gemini and Search. Users link an app once. After that, they can ask Gemini or use AI Mode in Search to read their data or complete actions without leaving the conversation.

The platform launched in preview on October 28, 2026. Access is phased and currently open to US developers. More than 50 Connected Apps already exist across productivity, ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving soon. Calm is also launching on both surfaces.

This guide covers the two integration paths, the Google Connected Console, and the practical steps to register and test your app.

## What the Platform Provides

Developers integrate once using either a cloud-hosted MCP server or Android MCP via AppFunctions. They register, test, and submit in the Google Connected Console. Before review they choose whether the app goes live in Search, the Gemini app, or both.

Once live, the console shows traffic, latency, and error rates. Developers retain control of brand elements such as verified logos and authenticated accounts.

![Team of developers collaborating around a laptop](https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=800&q=80)

Users already manage much of their day inside Google products. Connected Apps surface your service at the moment of intent instead of requiring a separate app open.

## Choose Your Integration Path

Two paths exist.

**Cloud-hosted MCP server** is the recommended default for most services. It works across Search and the Gemini app. You expose tools and authorized data through a remote MCP server that follows the open Model Context Protocol standard. OAuth 2.1 handles secure authorization so Gemini can act on a user’s behalf after they link the account.

**Android MCP** uses AppFunctions. This client-side path lets an Android app share native features with agents such as Gemini. Tool execution happens on the device. It is useful when you want local, real-time invocation of app capabilities. The Jetpack AppFunctions library implements this path. If you already expose AppFunctions, you can reuse that work here. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Most teams start with a cloud MCP server because it reaches both surfaces. Android MCP is available for device-specific or offline-friendly actions.

## Sign Up for the Preview

Visit developers.google.com/connected-apps and apply for the preview. US-based developers can request access through the form. Play Console users may also see the entry point on the home page.

Access opens in phases. Expect more developers, markets, and Google products over the coming months. While you wait, you can still prepare your MCP server and review the documentation.

## Set Up a Cloud MCP Server

Follow the Connected Apps Platform MCP server developer guide. Implement the tools you want Gemini or Search to call. Use clear, declarative schemas so the model understands when and how to invoke them.

Secure the server with OAuth 2.1. The official OAuth 2.1 implementation guide covers the details required for the Gemini app to interact safely with your service. Users link the app once; subsequent calls use the granted tokens.

Design rich interactive UI with MCP Apps when the experience benefits from more than plain text. Keep sensitive operations behind explicit user confirmation.

![Person coding on a laptop at a desk](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

Test the server independently first. Confirm tool discovery, parameter validation, and error handling before connecting it to Google.

## Register and Test in Google Connected Console

Once preview access is granted, open the Google Connected Console. Register your tools, upload metadata, and run tests against Gemini and Search surfaces.

The console lets you:

1. Register tool definitions and schemas.
2. Test invocations and inspect responses.
3. Review latency and error rates.
4. Choose target surfaces (Search, Gemini, or both).
5. Submit for review.

Developer mode in the Gemini app (available to US users) lets you try your integration and see real-time feedback on errors, latency, and model responses. Use it to iterate quickly before formal submission.

Mark tools accurately: read-only, state-changing, or destructive. These signals help the system apply the right confirmation level so users stay in control.

## Tips for a Smooth Launch

Start with one or two high-value, repeatable actions. Ordering, booking, creating an item, or fetching personalized data usually convert better than broad search.

Write precise tool descriptions and parameter constraints. Agents rely on this metadata to decide when to call your service.

Require confirmation inside your own logic for irreversible actions even if the platform already prompts the user.

Monitor the console after launch. Track which tools drive traffic and refine descriptions or schemas based on real usage.

Keep branding consistent. Verified logos and authenticated accounts appear in the conversation, so users recognize your service.

## Conclusion

The Connected Apps Platform removes the need for separate integrations for each Google surface. Build once with MCP or AppFunctions, register in the Connected Console, and reach users at the moment they express intent in Gemini or Search.

US developers can apply for the preview today. Prepare your MCP server or AppFunctions implementation while access rolls out. Official documentation at developers.google.com/connected-apps and the Android Developers session below cover the full workflow.

## Sources

- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform documentation: https://developers.google.com/connected-apps
- Extend your app to Gemini and Search with the Connected Apps Platform (Android Developers): https://www.youtube.com/watch?v=-4G-4w9FKDw

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
