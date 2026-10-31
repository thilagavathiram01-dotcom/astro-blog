---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to Google's Connected Apps Platform. Integrate via MCP or AppFunctions, register in Connected Console, and reach users in Gemini and Search."
pubDate: 2026-10-31T09:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "ai-tools", "gemini", "android", "how-to"]
noindex: false
---

Google's Connected Apps Platform gives developers a single place to bring services into the Gemini app and Search. Users link an app once. After that, they can complete actions from a conversation without switching tabs.

The platform opened in preview on 28 October 2026. Access expands in phases. Sign up at developers.google.com/connected-apps.

![Developer workspace with laptop and code](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What the platform offers

More than 50 Connected Apps already run across Search and Gemini. Categories include productivity, event ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini. They will appear in Search in the coming weeks. A Calm integration is also planned for both surfaces.

Developers choose where the app appears: Search, the Gemini app, or both. Once live, the Google Connected Console shows traffic, latency, and error rates. Branding stays under your control, including verified logos and authenticated accounts.

## Two integration paths

### Cloud-hosted MCP server

The recommended path uses a remote Model Context Protocol (MCP) server. One integration reaches Android, iOS, and the web. Existing web APIs or MCP servers can be adapted to the specification. This path supports maximum reach with less overhead.

Google's MCP server developer guide covers system instructions, safety annotations, schema definitions, and UI metadata. OAuth 2.1 with PKCE is recommended for authorization. The authorization server must support OAuth Discovery so the platform can locate endpoints automatically.

### Android MCP with AppFunctions

Android MCP uses AppFunctions and the Jetpack AppFunctions SDK. Tools run locally on the device. This suits actions that need current app state or on-device content. It pairs well with deeper Android system integration.

If you already work with AppFunctions, see our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

![Smartphone showing mobile app interface](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Step-by-step: build and publish

1. **Prepare your integration.** Build a remote MCP server that follows the specification, or implement AppFunctions in your Android app. Include clear tool descriptions and safety annotations.

2. **Request preview access.** Fill the interest form linked from developers.google.com/connected-apps. Access opens in phases.

3. **Register in Google Connected Console.** Define app details, configure authentication and endpoints, and connect your MCP server or Android app. Discover tools and set preview environments.

4. **Choose surfaces.** Before review, select Search, the Gemini app, or both.

5. **Test.** Validate tool calls and UI rendering. Use local testing for MCP and on-device checks for AppFunctions. Add testers as needed.

6. **Submit for review.** Send the connected app for Google review. Once approved, you control the publish timing.

7. **Monitor.** Track traffic, latency, and errors in the console after launch.

Domain verification is required. Place a confirmation file at /.well-known/google-connected-apps on your domain. Provide a short description, icon, example queries, and links to terms and privacy policy.

## Tips for a smooth launch

Keep tool descriptions precise so the model selects the right action. Use OAuth 2.1 with PKCE for user data. Test edge cases such as missing permissions or failed actions. Start with a narrow set of tools before expanding.

For Android paths, ensure AppFunctions respect user privacy and only expose needed capabilities. Confirm that destructive actions require explicit user confirmation.

The platform bans third-party ads inside connected experiences and tool descriptions written to bias selection.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-PsFV6TpRU"
    title="How to make your Android app smarter with AppFunctions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Connected Apps Platform lets you build once and reach users in Gemini and Search. Start with the MCP path for broad coverage or AppFunctions for local Android actions. Request preview access, register in the Connected Console, and test thoroughly before review.

Official details live at developers.google.com/connected-apps. Check the MCP server guide and Connected Console documentation for the latest requirements.

## Sources

- Google blog: New Connected Apps Platform launches for developers (28 October 2026)
- Google for Developers: Connected Apps Platform overview
- Google for Developers: Connected Apps Platform MCP server developer guide
- Google for Developers: Create and manage Connected Apps in Google Connected Console
- Android Developers: AppFunctions documentation
