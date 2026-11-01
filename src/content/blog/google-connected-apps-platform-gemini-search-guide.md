---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide for developers to integrate apps into Gemini and Google Search using the Connected Apps Platform with MCP or Android AppFunctions."
pubDate: 2026-11-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "ai-tools", "gemini", "google", "tutorials"]
noindex: false
---

Google launched the Connected Apps Platform in preview on October 28, 2026. Developers can now build once and reach users in both the Gemini app and AI Mode in Search.<grok type="render_inline_citation" citation_id="1" />

The platform standardizes integrations so users link an app once. After that, Gemini or Search can access authorized data and take actions on their behalf during conversations. More than 50 Connected Apps already exist across productivity, ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support coming soon. Calm is also joining both surfaces.<grok type="render_inline_citation" citation_id="31" />

This guide walks through the two main integration paths and the end-to-end process for getting your app into the preview.

## Two Integration Paths

You choose between a cloud-hosted MCP server or Android MCP via AppFunctions. Both use the Model Context Protocol as the foundation.<grok type="render_inline_citation" citation_id="42" />

**MCP server** is the recommended default for most developers. It works across Android, iOS, and the web. If you already have web APIs or a remote MCP server, you can adapt it to Google’s specification with minimal changes. This path gives the broadest reach.

**Android MCP** uses AppFunctions. This client-side approach lets your Android app share functionality with Gemini and other agents. Tools execute locally on the device, which helps with on-device data and tighter system integration. You implement it with the Jetpack AppFunctions SDK. If you are new to AppFunctions, see our earlier guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

![Developer workspace with laptop and phone for coding](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: MCP Server Path

Official docs outline four phases for a remote MCP server.<grok type="render_inline_citation" citation_id="63" />

### Phase 1: Build your remote MCP server

Follow the Model Context Protocol specification. Google recommends clear server instructions so models know when to route tasks to your server. Add safety annotations: mark read-only tools with readOnlyHint and state-changing tools with destructiveHint. Provide strongly typed schemas and detailed docstrings for every parameter. Optional UI resource metadata lets you return rich interactive widgets that render in sandboxed iframes inside the chat.

### Phase 2: Validate locally with MCP Inspector

Run the server on your machine. Use the MCP Inspector (`npx @modelcontextprotocol/inspector`) to invoke tools, inspect JSON payloads, and confirm any custom UI resources render correctly.

### Phase 3: Deploy and test in Gemini Developer mode

Host the server on a public HTTPS endpoint. Google Cloud Run is one option (`gcloud run deploy`). Then test live tool execution in Gemini Developer Mode. Use the debugging tabs for event logs, tool schemas, environment simulation, and authentication settings.

### Phase 4: Register in the Google Connected Console

Apply for preview access through the interest form. In the Connected Console you define app details, configure authentication and endpoints, discover tools, manage testers, and submit for review. You choose whether the app appears in Search, the Gemini app, or both. Once live you can track traffic, latency, and error rates while keeping control of logos and brand identity.<grok type="render_inline_citation" citation_id="31" />

![AI app icons including Gemini on a smartphone screen](https://images.unsplash.com/photo-1738640679960-58d445857945?auto=format&fit=crop&w=800&q=80)

## Authentication Requirements

Secure authorization is mandatory. Google strongly recommends OAuth 2.1 with PKCE. Your authorization server must support the Authorization Server Metadata extension so the platform can discover endpoints automatically. Required fields include authorization_endpoint, token_endpoint, and response_types_supported containing “code”.<grok type="render_inline_citation" citation_id="48" />

Users stay in control. Explicit confirmation is required for any action that changes state.

## Tips for a Smooth Submission

Start with a small set of high-value tools rather than exposing every endpoint. Clear server instructions and accurate schemas reduce routing errors. Test thoroughly in Developer Mode before submitting. Keep brand assets ready—verified logos improve trust in the interface.

The preview is opening in phases, currently focused on US-based developers. More markets and Google products will be added over the coming months.<grok type="render_inline_citation" citation_id="26" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/L8zkQ-tRu8s"
    title="Introduction to Model Context Protocol (MCP)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What Happens After Approval

Once approved, users who link your app can ask Gemini or AI Mode to perform actions in your service without switching apps. Examples already live include booking classes, updating carts, or pulling creative assets. The same integration works across both surfaces when you select both during registration.

## Conclusion

The Connected Apps Platform lowers the barrier for developers who want their services inside Google’s AI experiences. Whether you choose a remote MCP server for maximum reach or Android AppFunctions for deeper on-device integration, the process is now standardized through one console.

Sign up for the preview at developers.google.com/connected-apps and review the MCP and OAuth guides. Early adopters can reach high-intent users who are already talking to Gemini or searching in AI Mode.

## Sources

- [Google Blog: New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/)
- [Connected Apps Platform documentation](https://developers.google.com/connected-apps)
- [MCP server developer guide](https://developers.google.com/connected-apps/mcp)
- [OAuth 2.1 implementation guide](https://developers.google.com/connected-apps/mcp/oauth)
