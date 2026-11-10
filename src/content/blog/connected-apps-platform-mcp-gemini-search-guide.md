---
title: "How to Build Connected Apps with MCP for Gemini"
description: "Practical steps to create Connected Apps for Gemini and Search using MCP server, OAuth 2.1, and Google Connected Console."
pubDate: 2026-11-10T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "google"]
noindex: false
---

Google's Connected Apps Platform lets developers bring app capabilities directly into the Gemini app and Search. Users link an account once, then complete actions or pull live data without leaving the conversation. The preview launched in late October 2026 and uses the Model Context Protocol as its foundation.

This guide walks through the practical steps to prepare an MCP server, register in Google Connected Console, test, and submit for review. Access is rolling out in phases, so start with the interest form if you do not already have console access.

## Why Connected Apps Matter Now

More than 50 Connected Apps already run across Search and Gemini in categories such as productivity, event ticketing, health, and fitness. Partners including Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search expansion underway. A new Calm integration is also planned for both surfaces.

The platform removes the need for separate integrations. You build once with a remote MCP server or Android AppFunctions, then choose Search, the Gemini app, or both before review. Once live, the console shows traffic, latency, and error rates while you keep control of branding and verified accounts.

![Developers working on connected app integrations](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Start

Confirm these items first. Official docs list them clearly.

- A publicly reachable HTTPS MCP server endpoint that supports Streamable HTTP transport.
- Ability to serve a verification file at `https://your-domain/.well-known/google-connected-apps` returning HTTP 200 with no redirects.
- A Google developer account with Connected Apps permissions in Google Connected Console (or apply for preview access).
- Acceptance of the Connected Apps Terms of Service by an account owner or admin.
- OAuth 2.1 with PKCE recommended for secure authorization, including Authorization Server Metadata discovery.

If your server restricts by IP, allowlist Google's ranges: 108.177.64.0/20, 142.250.88.0/22, 172.217.80.0/20, 192.178.20.0/22, 192.179.0.0/20, and 74.125.232.0/24. Check the user-triggered agents JSON for additional ranges.

Choose a category carefully. Once selected, it cannot be changed and sets minimum capability expectations.

## Build Your Remote MCP Server

The recommended path is a cloud-hosted MCP server. It scales across Android, iOS, and web. Android MCP via AppFunctions is better when tools must run on-device with local context.

Follow the Connected Apps Platform MCP server developer guide. Define clear tool schemas, system instructions, safety annotations, and UI metadata bindings. Host on any provider that gives a stable public HTTPS URL.

Test locally first, then deploy. Use Gemini Developer Mode (available in the US) to validate tool discovery and execution before console registration.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Register, Test, and Publish in Connected Console

Sign in to Google Connected Console. Create a new connected app, give it a display name (users will @mention it), and select the category.

Enter the full HTTPS MCP endpoint URL. Download the verification token JSON and place it at the well-known path. Confirm domain ownership.

Configure public details: short description (under 30 words), 512×512 icon, at least three capabilities, example questions, terms URL, and privacy policy URL.

Add testers, verify tool synchronization, and exercise the flows. Fix any OAuth discovery or connection errors shown in the console. When ready, submit for review and select the target surfaces (Search, Gemini, or both).

![Monitoring Connected Apps performance in the console](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## OAuth 2.1 and Security Notes

Implement the authorization code grant with PKCE. Your authorization server must expose metadata so Gemini can discover endpoints automatically. Required fields include `authorization_endpoint`, `token_endpoint`, `response_types_supported` containing "code", and preferably `registration_endpoint`.

Users stay in control: Gemini requests permission before actions that change state. Keep tool descriptions accurate and free of ranking manipulation, as platform policy prohibits ads or biased descriptions.

## Tips for a Smooth Submission

1. Start with a narrow set of high-value tools rather than every endpoint.
2. Document expected inputs and outputs clearly in schemas.
3. Test with real user accounts in Developer Mode before console submission.
4. Monitor latency during preview testing; high latency hurts review outcomes.
5. Prepare support resources for users who link the app.

For Android-specific on-device tools, review the AppFunctions SDK and existing patterns in our [Android AppFunctions agents guide](/blog/android-appfunctions-agents/).

## Conclusion

The Connected Apps Platform lowers the barrier for bringing real app actions into Gemini and Search. With a solid MCP server, domain verification, and careful console setup, you can reach high-intent users without custom one-off integrations. Apply for the preview, follow the official developer guides, and iterate on tester feedback.

## Sources

- [Google Blog: New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/)
- [Connected Apps Platform overview](https://developers.google.com/connected-apps)
- [MCP server developer guide](https://developers.google.com/connected-apps/mcp)
- [Google Connected Console guide](https://developers.google.com/connected-apps/gpc)
- [OAuth 2.1 implementation guide](https://developers.google.com/connected-apps/mcp/oauth)
- [YouTube: Extend your app to Gemini and Search with the Connected Apps Platform](https://www.youtube.com/watch?v=-4G-4w9FKDw)
