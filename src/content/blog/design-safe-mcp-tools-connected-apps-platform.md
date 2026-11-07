---
title: "How to Design Safe MCP Tools for Connected Apps"
description: "Practical steps to build, annotate, and test remote MCP tools that meet Google Connected Apps standards for Gemini and Search."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "tutorials", "ai-tools", "google"]
noindex: false
---

Google’s Connected Apps Platform, previewed at Android Dev Summit on October 28, 2026, lets developers expose services inside the Gemini app and Search. The recommended path for cross-platform reach is a remote Model Context Protocol (MCP) server.

This guide focuses on designing tools that pass review and perform reliably. It covers server instructions, safety annotations, schema best practices, OAuth setup, domain verification, and testing in Gemini Apps Developer Mode. You will finish with a production-ready endpoint that models select accurately and users trust.

For the end-to-end build process, see our earlier post on [building a remote MCP server for Connected Apps](/blog/how-to-build-remote-mcp-server-google-connected-apps/).

## Start with Clear Server Instructions

Models decide when to call your server based on the instructions you supply during initialization. Write them as a high-level hint about the domain and what the server can accomplish, not a list of tool names or step-by-step directions.

Keep the text concise. Assume it lands in the model’s system prompt. Describe the overall purpose—for example, “Help users search and manage their library of design assets and generate new creatives from natural-language descriptions.” Avoid repeating individual tool descriptions.

Google’s integration standards explicitly call for these instructions. The Connected Console validates that they exist.

## Declare Safety Annotations on Every Tool

The platform uses protocol annotations to decide whether to prompt the user before execution. Set them explicitly so behavior stays predictable.

- Use `readOnlyHint: true` on pure query tools that never change state.
- Use `destructiveHint: true` on any write, update, or irreversible action.
- Set `openWorldHint: true` when the tool interacts with external systems that require confirmation.

Omitting `readOnlyHint` causes clients to treat the tool as potentially destructive by default. Explicit annotations prevent surprise prompts and reduce review friction.

Document in the tool description when user confirmation is expected. This helps the model and the console enforce the right gates.

![Developer reviewing code on dual monitors while designing API schemas](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Write Strongly Typed Schemas and Intent-Focused Descriptions

Treat each tool as an atomic operation. Prefer granular tools over mega-tools that hide multiple actions behind an `action` parameter. Flatter schemas reduce model errors.

Name tools with clear verb-noun pairs in snake_case or camelCase: `search_assets`, `create_design`, `update_playlist`. Avoid ambiguous names.

Tool descriptions are the primary signal for selection. Write them as instructions focused on user intent:

- Explain what the tool accomplishes and when to use it.
- Specify formats, units, and allowed values (ISO dates, category enums, location codes).
- Note where the model can obtain required arguments from prior tools.
- Distinguish similar tools (“Use this for internal drafts; use `publish_final` for external sharing”).

Avoid phrases that leave decisions to “best judgment.” Provide concrete guidance. Google’s standards stress that descriptions should complement, not duplicate, the server instructions.

Pre-aggregate or summarize large result sets on your server. Returning raw database dumps hits context and latency limits and can fail review.

## Implement OAuth 2.1 with PKCE and Discovery

User-delegated access requires OAuth 2.1 with Proof Key for Code Exchange. Your authorization server must expose Authorization Server Metadata so Gemini can discover endpoints automatically.

Host the metadata at `/.well-known/oauth-authorization-server` (or the OpenID configuration equivalent). Include at minimum:

- `authorization_endpoint`
- `token_endpoint`
- `registration_endpoint` (or supply client ID/secret manually in the console)
- `response_types_supported` containing `"code"`
- `code_challenge_methods_supported` with `"S256"` if using PKCE

Allowlist Google’s redirect URIs: `https://oauth-redirect.googleusercontent.com/r/*` and the sandbox/test variants. Support token refresh without rotating the refresh token for persistent linking.

Test the full consent flow before submission. Missing discovery fields or incorrect redirect handling are common rejection reasons.

## Verify Domain Ownership and Host the Endpoint

Deploy to a single public HTTPS endpoint that accepts POST for all JSON-RPC methods (initialize, tools/list, tools/call). Streamable HTTP is required; legacy SSE is not supported. Protocol versions up to 2025-11-25 are accepted.

Prove domain control by serving a verification token at `https://yourdomain/.well-known/google-connected-apps` (no `.json` suffix). It must return HTTP 200 with no redirects and contain the token supplied by the console.

If you filter inbound traffic, allowlist Google’s published outbound IP ranges. These ranges change, so plan periodic updates.

![Close-up of hands typing code on a laptop keyboard during MCP server development](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Test Thoroughly in Gemini Apps Developer Mode

Deploy the HTTPS endpoint, then open Gemini in a browser and enable Gemini Apps Developer Mode (Settings or gemini.google.com/devmode).

Connect your server as a custom MCP app by entering the URL. Optionally supply pre-registered OAuth client credentials. Confirm tools appear and review safety badges (Read-only, Destructive, Auth-required) in the Tool Schemas tab.

Use natural-language and @mention prompts. Watch the Event Log for request payloads, latency, and error codes. When a call fails:

- Check authentication errors (401/403).
- Compare generated arguments against schema constraints.
- Sync schema after backend changes without losing conversation history.
- Simulate date, time, language, and location in the Environment tab.

Fix issues here before console submission. Early validation shortens review cycles.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Register, Review, and Iterate

Request preview access via the interest form. In Google Connected Console, create the app, set a permanent category and connection type (remote MCP), add the 512×512 icon, one-sentence description under 30 words, at least three capabilities, and example prompts (including @mentions).

Enter the MCP URL, complete domain verification, configure authentication, and sync tools. Add testers, run preview sessions, then submit for review. After approval, publish and monitor traffic, latency, and error rates in the console.

Start with a small set of high-value tools. Expand later using versioned endpoints (`/mcp/v1`, `/mcp/v2`) so existing users stay stable.

## Conclusion

Reliable Connected Apps start with precise tool design. Clear server instructions, explicit safety annotations, atomic schemas, and solid OAuth discovery make models route correctly and users stay in control. Test in Gemini Developer Mode, verify your domain, and submit a focused first version.

Official standards live at developers.google.com/connected-apps/mcp/server-optimization and the OAuth guide. Apply for the preview, implement one clear tool, and iterate from console metrics.

## Sources

- MCP connected app integration standards: https://developers.google.com/connected-apps/mcp/server-optimization
- Connected Apps Platform MCP server developer guide: https://developers.google.com/connected-apps/mcp
- Test, debug, and evaluate in Gemini Apps Developer Mode: https://developers.google.com/connected-apps/mcp/dev-mode/usage
- OAuth 2.1 implementation guide: https://developers.google.com/connected-apps/mcp/oauth
- Create and manage Connected Apps in Google Connected Console: https://developers.google.com/connected-apps/gpc
- Extend your app to Gemini and Search with the Connected Apps Platform (Android Developers YouTube): https://www.youtube.com/watch?v=-4G-4w9FKDw
