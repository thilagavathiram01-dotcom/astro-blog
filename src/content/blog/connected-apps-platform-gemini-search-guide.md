---
title: "How to Join the Connected Apps Platform Preview"
description: "Step-by-step guide for developers to integrate apps with Gemini and Search via the Connected Apps Platform using MCP."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "ai-tools", "tutorials"]
noindex: false
---

Google launched the Connected Apps Platform preview on 28 October 2026. Developers can now expose app capabilities to Gemini and Google Search so users complete tasks without leaving the conversation.

The platform uses the Model Context Protocol (MCP) for remote servers or Android MCP via AppFunctions for on-device execution. Once approved, your tools appear in both surfaces. Users link the app once and then access personal data or trigger actions with natural language.

This guide walks through the official steps from Google’s developer documentation and the Android Dev Summit announcements.

## What the Connected Apps Platform offers

You build once. You choose whether the integration appears in the Gemini app, Search, or both. After review, you track traffic, latency, and error rates from the Google Connected Console. You also keep control of brand assets such as verified logos and authenticated accounts.

More than 50 Connected Apps already exist across productivity, ticketing, health, and fitness. Partners including Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving soon. Calm is next in line for both surfaces.

![Developer workspace with laptop displaying code](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Requirements before you start

You need a Google account that can access the Connected Console. During the preview, capacity is limited. Google reviews applications and prioritises production-ready apps in supported categories.

Familiarity with MCP or Android AppFunctions helps. For remote servers you implement an MCP endpoint that exposes tools. For Android you use the Jetpack AppFunctions SDK so Gemini can call native features on the device.

Sign up for the preview at the Connected Apps documentation site. The form asks for basic details about your app and intended surfaces.

## Step 1: Choose your integration path

Decide between a cloud-hosted MCP server and Android MCP.

Remote MCP works for cross-platform services. You host the server, define tools, and handle OAuth 2.1 so Gemini can act on behalf of the user. Official docs include an MCP server developer guide and an OAuth implementation guide.

Android MCP keeps execution on the device. Implement AppFunctions so the system intelligence layer can invoke your app’s features. This path suits tools that need local data or real-time device context. See the Android Developers guide on AppFunctions for the SDK details.

You can support both paths if your product spans web and mobile.

## Step 2: Build and test locally

For a remote MCP server, spin up the endpoint on your machine. Use the MCP Inspector tool to list available tools and test interactions. Provide clear server instructions that describe your domain and capabilities. The Connected Console validates these instructions before review.

For Android, add the AppFunctions dependency and expose the functions you want Gemini to call. Test with Gemini Apps Developer Mode on a device. Developer Mode lets you prototype without waiting for console approval.

Watch the official session “Extend your app to Gemini and Search with the Connected Apps Platform” for a walkthrough of local testing and the console flow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Register in Google Connected Console

After local tests succeed, create a new Connected App in the console. Enter a display name, icon, user-facing description, and the list of capabilities. Select the category (productivity, health, and so on) and choose the surfaces: Gemini, Search, or both.

Submit for review. Google checks that tools are safe, that user consent is clear, and that brand assets match. Once approved, the app becomes available to users who link it.

You can monitor usage metrics after launch. Update tools or instructions through the same console without rebuilding the entire integration.

![Smartphone screen showing AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Step 4: Handle authentication and user control

Users must link the app and grant permission. For remote MCP, implement OAuth 2.1 so Gemini receives an access token scoped to the necessary tools. Never request broader access than required.

On Android, AppFunctions respect the app’s existing permissions. Gemini only calls functions the user has already authorised on the device.

Google emphasises that users stay in control of key actions. Design confirmation steps for sensitive operations such as bookings or purchases. The platform documentation covers these guardrails.

## Tips for a successful submission

Write precise tool descriptions. Gemini decides when to call a tool based on the instructions you supply. Vague wording leads to missed opportunities or incorrect calls.

Test edge cases in Developer Mode. Confirm that error messages are clear and that partial failures do not leave the user stuck.

Start with one high-value tool rather than dozens. A focused integration is easier to review and easier for users to understand. You can add more tools later.

If you also build on-device agents, see the companion guide on [building on-device agents with Gemini Nano 4 and ML Kit](/blog/build-on-device-agents-gemini-nano-4-ml-kit/).

## Conclusion

The Connected Apps Platform lets developers reach users inside Gemini and Search without custom one-off integrations. Choose MCP or Android MCP, test locally, register in the Connected Console, and submit for the preview. Once live, users link once and complete real actions from natural language prompts.

Check developers.google.com/connected-apps for the latest documentation and the preview signup form. Rollout expands in phases, so early applications have the best chance of access.

## Sources

- Google Blog: New Connected Apps Platform launches for developers (28 October 2026)
- Android Developers Blog: What’s new in intelligent apps at the Android Developer Summit
- developers.google.com/connected-apps official documentation
- YouTube: Extend your app to Gemini and Search with the Connected Apps Platform
