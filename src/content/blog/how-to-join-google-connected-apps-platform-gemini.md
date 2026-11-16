---
title: "How to Join Google Connected Apps Platform for Gemini"
description: "Practical steps to apply for the Connected Apps Platform preview, integrate via MCP or Android MCP, test in Gemini Developer Mode, and reach users in Gemini and Search."
pubDate: 2026-11-16T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "android", "gemini", "ai-tools", "tutorials"]
noindex: false
---

Google launched the Connected Apps Platform preview at the Android Developer Summit in late October 2026. It gives developers one path to make their services available inside Gemini and Google Search so users can complete actions without leaving the conversation. You can connect through a remote MCP server or, for Android apps, through Android MCP powered by AppFunctions.

This guide walks through the current process based on official documentation. The platform is in preview, limited to selected developers, and availability varies by country and language.

## What the Connected Apps Platform Does

Users increasingly ask Gemini to finish tasks rather than just answer questions. The platform lets your app respond to those high-intent requests. A user might ask Gemini to book a restaurant, add items to a shopping list, or create a calendar event. Your service can handle the action while keeping your branding, authentication, and business logic.

Two integration routes exist. A remote MCP server works across Android, iOS, and the web and is the recommended path for most cross-platform services. Android MCP uses the AppFunctions Jetpack library so Gemini on Android can call functions that run locally on the device. You can use one or both.

Google manages discovery, user confirmation for sensitive actions, and the connection experience. You define the tools, mark read-only versus write operations, and provide clear descriptions.

![Person working on a laptop with code on the screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Apply for Preview Access

Start at the official Connected Apps page on Google for Developers. Submit the interest form. Preview capacity is limited, and Google reviews applications. US developers currently have earlier access in some cases.

While you wait, you can still prototype. Gemini offers Developer Mode (available in the US) that lets you connect a local or public MCP endpoint and test tool calls, view logs, and simulate context such as date or location. This works even before full platform access.

Prerequisites for a remote MCP server typically include a public HTTPS endpoint that supports the MCP specification, domain verification, clear tool schemas with safety annotations, and at least a few example prompts. For Android MCP you need an app that exposes AppFunctions and is published or available for testing on Google Play.

## Set Up Your Integration

Choose your connection type in Google Connected Console once you have access.

For a remote MCP server:

1. Implement or adapt an MCP server that exposes tools for the actions you want to support. Follow the MCP specification and Google’s guidance on system instructions and UI metadata.
2. Deploy it to a public HTTPS endpoint.
3. Verify your domain by placing the required file at `/.well-known/google-connected-apps`.
4. In the console, create a connected app, select the category (this cannot be changed later), choose the MCP server connection type, and enter the endpoint.
5. Add an icon (512 × 512 px), a short description, at least three capabilities or example prompts, Terms of Service, and Privacy Policy URLs.

For Android MCP:

1. Add the AppFunctions Jetpack library to your Android app (available on Android 16 and higher). Annotate Kotlin functions with `@AppFunctionDeclaration` and mark serializable types with `@AppFunctionSerializable`. Write clear KDoc comments because agents use them to select tools.
2. Create the service entry point that extends `AppFunctionService`.
3. Build an App Bundle that includes the functions.
4. In Connected Console, create a connected app, choose Android MCP as the connection type, and link it to your Play app.
5. Upload the bundle and submit for testing.

Official sample code and the AppFunctions skill are available on GitHub to speed up the Android path. See our earlier guide on [adding AppFunctions to your Android app](/blog/add-appfunctions-to-android-app/) for the annotation and service setup details.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Test and Iterate

Use Gemini Developer Mode to connect your endpoint or Android integration and run real prompts. Check tool selection, parameter extraction, error handling, and latency. Mark tools accurately as read-only or destructive so the system can request the right level of user confirmation.

For Android MCP, use ADB commands such as `adb shell cmd app_function list-app-functions --package your.package.name` to confirm registration on a device. Test on-device preview flows through the console.

Google reviews submissions before public availability. Provide realistic test accounts if authentication is required. Expect iterative feedback on descriptions, safety, and user experience.

![Android smartphone on a wooden surface](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80)

## Current Limitations and Tips

The platform is still in preview. Feature availability depends on region, language, and device. Connected apps in Search are currently limited (for example, AI Mode in the US in English). Gemini access also varies.

Tips for stronger results:

- Write tool descriptions from the user’s point of view with concrete examples.
- Keep functions focused. Prefer specific actions such as “create calendar event” over broad “do something with calendar.”
- Handle errors with clear, actionable messages so the agent can recover or ask the user for clarification.
- Start with read-only tools to validate the flow, then add write actions that require confirmation.
- Monitor performance. Local Android MCP avoids network latency for on-device data; remote MCP reaches more surfaces.

You remain in control of authentication, data access, and the final user interface. The platform surfaces your service at the moment of intent.

## Conclusion

The Connected Apps Platform offers a standardized way to put your service inside Gemini and Search workflows. Apply for the preview, choose remote MCP for broad reach or Android MCP for deep local integration, test thoroughly in Developer Mode, and submit through Google Connected Console. Early preparation with clear tool definitions positions your app for when broader access opens.

Official resources remain the best reference as the preview expands: the Connected Apps Platform documentation on Google for Developers and the AppFunctions overview on Android Developers.

Sources:
- Google for Developers: Connected Apps Platform MCP server developer guide
- Android Developers: Overview of AppFunctions and Connected Apps Console guides
- Android Developers YouTube: Extend your app to Gemini and Search with the Connected Apps Platform (October 2026)
- Android Developer Summit 2026 announcements on intelligent apps
