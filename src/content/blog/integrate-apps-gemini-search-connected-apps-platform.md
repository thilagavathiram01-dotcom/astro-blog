---
title: "How to Integrate Apps with Gemini and Search via Connected Apps Platform"
description: "Step-by-step guide to connect your app to Gemini and Search using the Connected Apps Platform with MCP or Android AppFunctions."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "developer"]
noindex: false
---

Google's Connected Apps Platform, announced October 28, 2026, gives developers one place to bring app capabilities into the Gemini app and Search. Users link an account once, then complete actions or pull live data directly inside conversations or AI Mode results.<grok type="render_inline_citation" citation_id="167" />

This replaces earlier one-off partnerships. You integrate once via Model Context Protocol (MCP) or Android AppFunctions, register in the Google Connected Console, test, and choose Search, Gemini, or both. More than 50 Connected Apps already exist across productivity, fitness, ticketing, and health. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search expansion underway. A new Calm integration is coming to both surfaces.<grok type="render_inline_citation" citation_id="167" />

The preview is open to U.S. developers, with broader access planned. Documentation lives at developers.google.com/connected-apps.

![Developer workspace with smartphone and code](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Two Integration Paths

You pick the path that matches your stack.

**Cloud-hosted MCP server.** Expose tools and authorized user data over the open Model Context Protocol. This reaches Gemini and Search users on web, Android, and iOS. Implement OAuth 2.1 so Gemini can act on a user's behalf after they grant permission. The server becomes a standard tool endpoint that Google's systems call when relevant.

**Android MCP with AppFunctions.** Use the AppFunctions APIs (now in beta) so your Android app acts as a local MCP server. This exposes native features securely to on-device agents, including the system Gemini experience. It is limited to Android devices but offers lower latency and deeper device context. Pair it with the Connected Apps Platform to also surface in Search or the Gemini app when appropriate.

For Android-specific function exposure, see our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Step-by-Step Setup

1. **Prepare your integration.** Build or update an MCP server that exposes the specific tools and data you want available. Document each tool with clear natural-language descriptions so models know when to call it. For Android, implement AppFunctions entry points that return structured results. Follow the OAuth 2.1 guide for remote servers so linking is secure.

2. **Sign up for the preview.** Go to developers.google.com/connected-apps and join the developer preview. Access is phased and currently focused on U.S. developers.

3. **Register in Google Connected Console.** Use the console to create your Connected App entry. Provide branding, descriptions, and the endpoint or Android package details. Link your MCP server or AppFunctions configuration. The console is the single place to manage identity, testing, and submission.

4. **Test thoroughly.** Use Gemini Developer Mode and console testing tools to simulate user prompts. Verify that tools are discovered, OAuth flows complete, and results render correctly inside conversations or AI Mode. Check latency, error handling, and privacy boundaries. Users should see clear confirmations for sensitive actions.

5. **Choose surfaces and submit.** Decide whether the app appears in Search, the Gemini app, or both. Submit for review. Google reviews for quality, safety, and user experience before production rollout. Once approved, you can track traffic, latency, and error rates in the console.

6. **Monitor and iterate.** After launch, watch console metrics. Update tool descriptions or add capabilities as user patterns emerge. Because the platform standardizes the interface, one update can reach multiple Google surfaces.

![Laptop and phone setup for app development](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Practical Tips

Keep tools narrow and well-described. Models perform better when each function has a precise purpose rather than a broad catch-all. Start with high-value actions such as checking status, booking, or retrieving personal data that users already expect from your service.

Privacy and control matter. Users link once and can manage connections. Sensitive operations should still require explicit confirmation. Test the full flow including revocation.

For Android apps, combine AppFunctions with remote MCP if you want coverage beyond the device. The same logical tools can be exposed both ways.

Prototype early in Gemini Developer Mode before full console registration. This shortens the feedback loop on tool discovery and response formatting.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Users Experience

After linking, a user can ask Gemini or use AI Mode in Search to interact with your service without switching apps. Examples include ordering from a grocery partner, reserving a table, pulling fitness data, or creating content. Google already shows these patterns with existing partners. Your app appears when the model determines it is relevant, or when the user names it.

This shifts discovery and action into the places where users already spend time. High-intent queries can route directly to your capabilities instead of a traditional website or app launch.

## Limitations and Next Steps

The platform is in preview. Availability, exact review criteria, and supported regions will expand. Search Connected Apps have fewer partners today than Gemini; the gap is closing. Android MCP reaches Gemini on Android, while the remote MCP path covers more platforms.

Start by reading the official docs at developers.google.com/connected-apps, implementing a minimal MCP tool or AppFunction, and testing in developer mode. Once the flow is solid, register and submit through the Google Connected Console.

The Connected Apps Platform lowers the barrier that previously required direct Google partnerships. One integration can surface your app's live data and actions inside Gemini and Search for millions of users.

## Sources

- Google Blog: New Connected Apps Platform launches for developers (October 28, 2026)
- developers.google.com/connected-apps
- Android Developers Blog: Agentic and Flexible — A next era of Android development (October 28, 2026)
- Android Dev Summit session: Extend your app to Gemini and Search with the Connected Apps Platform
