---
title: "How to Build a Remote MCP Server for Connected Apps"
description: "Step-by-step guide to develop, test, and deploy a remote MCP server for Google's Connected Apps Platform on Gemini and Search."
pubDate: 2026-10-29T19:00:00
heroImage: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "tutorials", "ai-tools", "google"]
noindex: false
---

Google opened the Connected Apps Platform preview on October 28, 2026. Developers can now expose services inside the Gemini app and Google Search through a single integration. The recommended path for most teams is a remote Model Context Protocol (MCP) server.

This guide walks through the four official phases from Google’s MCP server developer documentation: build, validate, deploy and test, then register. It covers required annotations, local testing with MCP Inspector, public hosting, and console submission. You will finish with a tested endpoint ready for the Google Connected Console.

For a high-level overview of the full platform, see our companion post on [building Connected Apps for Gemini and Search](/blog/build-connected-apps-gemini-search-platform-guide/).

## Why Start with a Remote MCP Server

A cloud-hosted MCP server works across Android, iOS, and the web. You reuse existing web APIs or an existing MCP implementation. Google recommends this route for foundational capabilities because it scales with minimal overhead. Android AppFunctions remain available for on-device actions that need local context, but the remote path reaches the widest audience.

Partners already live in Gemini include Adobe, Experian, Localiza, and Peloton. Search support is expanding in the coming weeks. A new Calm integration is planned for both surfaces. More than 50 Connected Apps are already available across productivity, ticketing, health, and fitness.

![Developer hands typing code on a keyboard in front of multiple monitors showing source code](https://images.unsplash.com/photo-1759662011366-8a743eae9649?auto=format&fit=crop&w=800&q=80)

## Phase 1: Build Your Remote MCP Server

Follow the Model Context Protocol specification. Google’s Connected Apps Platform currently supports MCP up to version 2025-11-25. Use Streamable HTTP transport (POST /mcp). Legacy SSE transport is not supported.

Define clear server instructions during initialization. Models rely on these instructions to decide when to route tasks to your server. Include domain description and core capabilities.

Add explicit safety annotations on every tool:

- Mark read-only queries with `readOnlyHint=true`.
- Mark state-changing actions with `destructiveHint=true`.
- Flag tools that require user confirmation so the console can enforce it.

Provide strongly typed schemas and detailed parameter docstrings. Document allowed values for filters, categories, and locations. Clear descriptions improve tool selection accuracy.

Optionally bind tool results to UI resources with metadata such as `meta={"ui": {"resourceUri": "ui://..."}}`. This enables rich interactive widgets rendered in sandboxed iframes inside Gemini or Search.

If you already run an MCP server for other agents, map those tools directly. Consistency reduces maintenance.

## Phase 2: Validate Locally with MCP Inspector

Before deploying, test tool declarations and any UI resources in a local environment.

1. Run your MCP server on your development machine.
2. Connect using the MCP Inspector: `npx @modelcontextprotocol/inspector`.
3. Invoke individual tools and inspect raw JSON input and output payloads.
4. Confirm that any custom UI resources render correctly in the browser.

Fix schema errors and annotation issues here. Local validation catches problems that would delay console review.

## Phase 3: Deploy and Test with Gemini Developer Mode

Host the server on a public HTTPS endpoint. Any cloud provider works. On Google Cloud, the recommended command is:

```
gcloud run deploy <server-name> --source .
```

The endpoint must accept JSON-RPC requests (initialize, tools/list, tools/call) over standard HTTP POST at a single URL, for example `https://api.example.com/mcp`.

Once live, test in Gemini Developer Mode. Use the built-in debugging tabs: Event Log, Tool Schemas, Environment simulation (date, time, location), and Authentication settings. Verify that the model selects and calls your tools correctly before requesting final approval.

![Modern data center with rows of server racks representing cloud hosting for MCP servers](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Phase 4: Register in the Google Connected Console

Request preview access through the interest form at connected.google.com/console/help/?apply. Access opens in phases, starting with U.S. developers.

In the Google Connected Console:

1. Create a new connected app entry.
2. Enter public-facing details: name, logo, short description, and privacy information.
3. Configure your MCP endpoint URL and authentication (OAuth 2.1 with PKCE and OAuth Discovery is recommended).
4. Discover and sync tools.
5. Choose availability: Gemini app, Search, or both.
6. Add testers and run preview tests.
7. Submit for review.

After approval, publish. The console then shows traffic, latency, and error rates. You retain control of brand assets and authenticated accounts.

## Practical Tips for Approval and Performance

Write action-oriented tool descriptions focused on user intent rather than raw capabilities. Agents select tools based on these descriptions.

Start with a small set of high-value tools (search, create, book, or check status). Expand after the first version is live.

Implement OAuth 2.1 with PKCE and ensure your authorization server supports the Authorization Server Metadata extension for automatic discovery. Test consent flows thoroughly.

Monitor console metrics after launch. High error rates or latency can reduce visibility.

For UI resources, follow Google’s design guidelines: avoid elements that clip or clash with host surfaces, and keep interactive widgets focused on clear beginning-to-end tasks.

## What Users Experience After Publication

Users link your app once via OAuth. Subsequent requests in Gemini or Search can invoke your tools without leaving the Google surface. Google handles orchestration; you handle business logic and data.

Existing partners expand to Search in the coming weeks. New apps that complete review can appear on both surfaces. The platform continues to add markets and additional Google products over time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/j134jnmLbzQ"
    title="How to Build Interactive MCP Apps in Gemini Enterprise"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Building a remote MCP server is the primary path to bring your service into Gemini and Search through the Connected Apps Platform. Follow the four phases—build with clear annotations and schemas, validate locally, deploy to a public HTTPS endpoint and test in Gemini Developer Mode, then register and submit through the Google Connected Console.

Official documentation at developers.google.com/connected-apps/mcp contains the full specification, OAuth guide, and console steps. Apply for the preview, implement one clear tool, and test thoroughly before submission. Early integrations gain a head start as the platform expands.

## Sources

- Connected Apps Platform MCP server developer guide: https://developers.google.com/connected-apps/mcp
- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Create and manage Connected Apps in Google Connected Console: https://developers.google.com/connected-apps/gpc
- OAuth 2.1 implementation guide: https://developers.google.com/connected-apps/mcp/oauth
- Connected Apps Platform overview: https://developers.google.com/connected-apps
