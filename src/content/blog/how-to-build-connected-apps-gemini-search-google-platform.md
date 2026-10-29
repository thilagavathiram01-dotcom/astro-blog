---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to integrate your app with Google's Connected Apps Platform using MCP for Gemini and Search in 2026."
pubDate: 2026-10-29T10:00:00
heroImage: "https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "gemini", "google", "tutorials"]
noindex: false
---

Google's Connected Apps Platform, launched in preview on October 28, 2026, gives developers one place to bring their services into the Gemini app and Search. Users link your app once and can then complete real actions from inside Google products.<grok type="render_inline_citation" citation_id="20" />

This guide walks through the official process using a remote MCP server, the recommended path for maximum reach across Android, iOS, and the web. You will learn the four phases from building your server to publishing via the Google Connected Console.<grok type="render_inline_citation" citation_id="41" />

## Why Connected Apps Matter Now

Connected Apps already number more than 50 between Search and Gemini, covering productivity, event ticketing, health, and fitness. Partners such as Adobe, Experian, Localiza, and Peloton are live in Gemini, with Search support arriving soon. Calm is also launching across both surfaces.<grok type="render_inline_citation" citation_id="40" />

For developers, the platform means you build once with standard protocols instead of custom integrations for each Google product. You keep control of branding, logos, and authenticated accounts while tracking traffic, latency, and error rates after launch.

![Developer workspace with AI code editor on laptop](https://images.unsplash.com/photo-1746286720965-cccf57e56c68?auto=format&fit=crop&w=800&q=80)

## Integration Paths: MCP Server or Android AppFunctions

Google offers two complementary routes.

The MCP server path is the default recommendation. It scales across platforms if you already have web APIs or a remote MCP server. You expose tools securely so Gemini or Search can call them on behalf of authenticated users.<grok type="render_inline_citation" citation_id="72" />

Android MCP uses AppFunctions APIs for deeper, on-device experiences. This suits actions that need local context or tight OS integration. Support comes through the Jetpack AppFunctions library. See our earlier guide on [Android AppFunctions for agents](/blog/android-appfunctions-agents/).

Most teams start with a remote MCP server for broader reach, then add Android-specific features later.

## Phase 1: Build Your Remote MCP Server

Follow the Model Context Protocol specification. Google recommends clear server instructions so models know when to route tasks to your server. Add safety annotations: mark read-only tools with readOnlyHint and state-changing ones with destructiveHint.<grok type="render_inline_citation" citation_id="72" />

Provide strongly typed schemas and detailed docstrings for every parameter. Optional UI resource metadata lets you return branded interactive widgets that render in sandboxed iframes inside the conversation.

Implement OAuth 2.1 with PKCE for secure user authorization. Your authorization server must support discovery metadata so Google can find endpoints automatically. Required fields include authorization_endpoint, token_endpoint, and response_types_supported containing "code".<grok type="render_inline_citation" citation_id="34" />

![Laptop showing code in a development environment](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Phase 2: Validate Locally with MCP Inspector

Run your server locally first. Use the MCP Inspector tool (npx @modelcontextprotocol/inspector) to connect, list tools, and invoke them. Check raw JSON payloads and confirm any custom UI resources render correctly in the browser.<grok type="render_inline_citation" citation_id="72" />

This step catches schema errors and safety annotation problems before you expose the service publicly.

## Phase 3: Deploy and Test in Gemini Developer Mode

Host the server on a public HTTPS endpoint. Google Cloud Run works well: use gcloud run deploy. Any reliable cloud host is fine.<grok type="render_inline_citation" citation_id="72" />

Then test live in Gemini Developer Mode. Use the debugging tools for event logs, tool schemas, environment simulation, and authentication settings. Verify that the model correctly calls your tools and handles responses before you submit for review.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ro3CiyWcCT0"
    title="How MCP Works in 2026 Explained For Beginners"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Phase 4: Register in the Google Connected Console

Request preview access through the interest form. Once approved, use the Google Connected Console to register your app.<grok type="render_inline_citation" citation_id="24" />

Define public-facing details, connect your MCP endpoint, choose availability in Search, the Gemini app, or both, and set up testers. Discover tools automatically, manage preview environments, then submit for review and publication. After approval you can monitor usage metrics and update your integration as needed.

Prerequisites include a verified domain, proper IP allowlisting if required, and metadata assets for branding.

## Tips for a Smooth Launch

Start with a small set of high-value tools rather than exposing every endpoint. Clear server instructions reduce routing errors. Test both read and write flows thoroughly in Developer Mode. Monitor the official help center lists as more partner apps appear.<grok type="render_inline_citation" citation_id="40" />

Access opens in phases, so apply early if your service fits productivity, commerce, or lifestyle use cases. Document your OAuth scopes carefully and follow least-privilege principles.

## Conclusion

The Connected Apps Platform lowers the barrier for developers to reach users inside Gemini and Search. By following the MCP path, validating locally, testing in Developer Mode, and registering through the Console, you can ship a production-ready integration.

Sign up for the preview at developers.google.com/connected-apps and review the full MCP server guide for implementation details. As more partners go live, early movers gain visibility with high-intent users who already live in Google products.

Sources:
- Google Blog: New Connected Apps Platform launches for developers (October 28, 2026)
- Google for Developers: Connected Apps Platform overview and MCP server developer guide
- Google for Developers: Create and manage Connected Apps in Google Connected Console
- Google for Developers: OAuth 2.1 implementation guide
