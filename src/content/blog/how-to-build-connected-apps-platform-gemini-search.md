---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to integrating your services with Google's Connected Apps Platform using MCP servers for Gemini and Search."
pubDate: 2026-11-04T19:00:00
heroImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "android", "gemini", "tutorials", "how-to", "google", "ai"]
noindex: false
---

Google's Connected Apps Platform, launched in preview on October 28, 2026, gives developers one place to bring their app services into the Gemini app and Google Search. Users link an account once. After that, they can ask Gemini or use AI Mode in Search to pull personal data or complete actions without leaving the conversation.

More than 50 Connected Apps already run across productivity, health, fitness, and ticketing. Partners include Adobe, Experian, Localiza, and Peloton, with Calm arriving soon. The platform opens in phases, starting with U.S. developers. Documentation lives at developers.google.com/connected-apps.

This guide walks through the two supported integration paths, the end-to-end process for a remote MCP server, and how to register and test in the Google Connected Console.

![Laptop and smartphone on a developer desk with tools](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What the Connected Apps Platform does

Connected Apps let users access live account context and perform real-world tasks inside Gemini and Search. Instead of building separate integrations for each surface, you expose tools once through standard protocols.

The platform standardizes onboarding so one connection works across Google products. Developers keep control of branding, logos, and which features they expose. Once published, the Google Connected Console shows traffic, latency, and error rates.

Access remains in preview. Sign up via the interest form at connected.google.com/console/help/?apply. Google plans to expand developers, markets, and products over the coming months.

## Two ways to integrate

Google offers two complementary paths.

**Remote MCP server (recommended default).** Use a cloud-hosted Model Context Protocol server. This path scales across Android, iOS, and the web. If you already have web APIs or an existing MCP server, you can adapt it to the Connected Apps specification with minimal extra work. It supports rich interactive UIs via MCP Apps rendered in sandboxed iframes.

**Android MCP with AppFunctions.** This client-side option runs on the device. Android apps expose functions through the Jetpack AppFunctions library so Gemini can invoke them locally with on-device context. It fits actions that need the current app state or data that never leaves the phone. AppFunctions requires Android 16 or higher. If you already built AppFunctions for on-device agents, see our [guide to adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Most teams start with a remote MCP server for broadest reach, then add Android MCP for deeper on-device experiences.

## How to build a remote MCP server

Follow the four phases outlined in the official Connected Apps Platform MCP server developer guide.

### Phase 1: Build your MCP server

Implement a remote server that follows the Model Context Protocol specification. Key recommendations:

- Write clear server instructions so models know when to route tasks to your tools.
- Add safety annotations on every tool (readOnlyHint for queries, destructiveHint for state-changing actions).
- Use strongly typed schemas and detailed docstrings for parameters.
- Optionally bind tool outputs to UI resources with metadata so clients render branded interactive widgets.

Host the server on any HTTPS endpoint. Google Cloud Run works well if you already use Google Cloud.

### Phase 2: Validate locally with MCP Inspector

Run the server on your machine. Connect the MCP Inspector tool (`npx @modelcontextprotocol/inspector`). Invoke tools, inspect JSON payloads, and confirm any custom UI resources render correctly in the browser before deploying.

### Phase 3: Deploy and test in Gemini Developer mode

Deploy to a public HTTPS endpoint. Then test live tool execution in Gemini Developer Mode. The mode includes debugging tabs for the event log, tool schemas, environment simulation (date, time, location), and authentication settings. Use these to verify responses before submitting for review.

![Smartphone screen showing programming language names](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

### Phase 4: Register in the Google Connected Console

Request access with the interest form. Once approved, open the Google Connected Console. Create your connected app, set public details (name, category, logo), connect your MCP endpoint or Android MCP configuration, choose Search, Gemini, or both, add testers, and submit for review. The console handles versioning and publishing.

For OAuth, implement OAuth 2.1 with PKCE. Your authorization server must support discovery metadata so Gemini can find endpoints automatically. App Flip is recommended for native Android and iOS account linking instead of webviews.

## Tips for a smooth launch

Start with a small set of high-value tools rather than exposing every endpoint. Clear server instructions reduce routing errors. Mark destructive tools so users see confirmation prompts.

Test with real user accounts in the preview environment before full review. Track metrics in the console after launch and iterate on tool descriptions based on how models call them.

If your app already uses AppFunctions, the Android MCP path reuses that work. For pure cloud services, the remote MCP server keeps the same code running for web, iOS, and Android users.

Watch the official Android Developers session for a walkthrough of the platform, MCP options, and Gemini Developer Mode.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Connected Apps Platform removes the need for one-off integrations with Gemini and Search. Build once with a remote MCP server or Android AppFunctions, register in the Google Connected Console, and reach users who already live in Google products. Preview access is open now for developers. Check the official docs and sign up while the rollout expands.

## Sources

- [New Connected Apps Platform launches for developers](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) — Google Blog, October 28, 2026
- [Connected Apps Platform](https://developers.google.com/connected-apps) — Google for Developers
- [Connected Apps Platform MCP server developer guide](https://developers.google.com/connected-apps/mcp) — Google for Developers
- [Create and manage Connected Apps in Google Connected Console](https://developers.google.com/connected-apps/gpc) — Google for Developers
- [Extend your app to Gemini and Search with the Connected Apps Platform](https://www.youtube.com/watch?v=-4G-4w9FKDw) — Android Developers on YouTube
