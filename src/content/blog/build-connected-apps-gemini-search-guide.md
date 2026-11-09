---
title: "How to Build Connected Apps for Gemini and Search"
description: "Step-by-step guide to build and publish Connected Apps so users can call your service from Gemini and Google Search using MCP."
pubDate: 2026-11-09T09:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Users already ask Gemini and AI Mode in Search to book tables, build playlists, or check fitness progress. The Connected Apps Platform, launched in preview on 28 October 2026, lets any developer expose the same kind of actions from their own service.

You build the tools once. Users link their account once. After that they can mention your app with @ or let the model call it when the request matches. Google reports more than 50 Connected Apps already live across Search and Gemini, including Adobe, Experian, Localiza, and Peloton.

This guide walks through the exact path documented by Google: remote MCP server (the recommended default) or Android MCP via AppFunctions, registration in Google Connected Console, testing, and review.

![Developer workspace with laptop showing code and mobile device](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## What the Connected Apps Platform actually does

The platform standardizes how third-party tools appear inside Google products. Instead of custom integrations for each surface, you expose tools through the Model Context Protocol (MCP).

Two integration paths exist:

- **Remote MCP server** — recommended for cross-platform reach (web, Android, iOS). Your public HTTPS endpoint receives tool calls. Ideal when you already have web APIs.
- **Android MCP (AppFunctions)** — on-device execution using the Jetpack AppFunctions library. Better for actions that need local device context or tight OS integration. See our related guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

Users connect the app to their Google Account once. Subsequent requests can invoke tools with proper authorization. Destructive actions require explicit confirmation. You control branding (logo, verified name) and receive analytics on traffic, latency, and errors once live.

Access remains phased. Developers apply for the preview; Google expands markets and products over the following months.

## Prerequisites before you start

Confirm these items first. Official docs list them clearly.

- Developer account with permission to create Connected Apps.
- Public HTTPS endpoint for a remote MCP server (one global endpoint per app, or country-specific only if limited). Must allow Google’s IP ranges if you filter by IP.
- Domain ownership so you can place the verification file at `https://your-domain/.well-known/google-connected-apps`.
- OAuth 2.1 (with PKCE recommended) if tools need user-delegated access. Machine-to-machine or no-auth options also exist.
- App assets: name, short description (under 30 words), 512×512 icon, at least three capabilities, at least three example prompts, plus terms-of-service and privacy-policy URLs.
- For Android path: app that implements AppFunctions via the Jetpack library.

Apply for preview access at the form linked from developers.google.com/connected-apps. While waiting you can prototype in Gemini Developer Mode.

## Step-by-step: build and register a remote MCP server

### 1. Implement the MCP server

Follow the Model Context Protocol specification. Google’s developer guide adds Connected Apps requirements:

- Provide clear server instructions describing the domain and capabilities. The console validates these.
- Annotate tools: mark read-only versus destructive (edit/delete) so the platform can insert confirmation prompts.
- Define precise schemas and UI metadata so Gemini and Search render useful cards.
- Support OAuth 2.1 if user data is involved.

Run the server locally and validate with MCP Inspector before deploying. Check that tool declarations, safety annotations, and UI bindings match expectations.

### 2. Deploy to a public HTTPS endpoint

Host the server on any provider. The endpoint must be reachable and return proper responses. Verify domain ownership by serving the token file Google provides at the well-known path (HTTP 200, no redirect).

### 3. Create the Connected App in Google Connected Console

1. Sign in to Google Connected Console.
2. Choose Create app (accept terms if prompted).
3. Give the app a name — this is the display name and the @mention handle.
4. Select category and connection type. Category cannot be changed later.
5. Fill app details: description, icon, capabilities, example prompts, ToS and privacy URLs.
6. Enter the MCP endpoint URL and complete domain verification.
7. Configure authorization (none, client credentials, or user OAuth). Add test accounts if needed.
8. Sync tools. Fix any “must fix” errors reported by the console.

### 4. Test thoroughly

Use Gemini Developer Mode to invoke tools with realistic prompts. Testers need Gmail accounts. Confirm:

- Correct tool selection.
- Authorization flow.
- Confirmation prompts on destructive actions.
- UI cards render properly.
- Error handling and latency stay acceptable.

Google’s session on the topic shows the full local-to-production path.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

### 5. Choose surfaces and submit for review

Decide whether the app appears in Search, the Gemini app, or both. Submit. Review may return “Issues found” (fix and resubmit) or “Ready to publish.” Once published, users can discover and link the app.

![Person holding a smartphone showing an app icon](https://images.unsplash.com/photo-1768987439365-ffc51bf0f467?auto=format&fit=crop&w=800&q=80)

## Android MCP path with AppFunctions

If your value lives on-device, implement AppFunctions. The Jetpack library lets the Gemini app (and other agents) call native features securely. Register the same way in Connected Console, but the execution stays local. This complements the remote MCP path rather than replacing it for most services.

## Tips for a successful launch

- Start with one high-value read action users already request. Add a reversible write action only after the read path is stable.
- Write example prompts that match real language (“book a table for two at 7 pm”) rather than technical jargon.
- Mark every destructive tool correctly so confirmation appears.
- Provide a seeded test account with realistic data and no 2FA for reviewers.
- Monitor the console analytics after launch and iterate on tool descriptions that under- or over-trigger.
- Keep payment, cancellation, and account-change flows inside your own app or site.

## Conclusion

The Connected Apps Platform removes the need for separate integrations for Gemini and Search. A single MCP-based implementation, registered once in Google Connected Console, can reach high-intent users who already live in Google’s products. The preview is open; the documentation at developers.google.com/connected-apps and the official Android Developers session give the concrete steps.

Apply, implement the remote server or AppFunctions path, test in Developer Mode, and submit. Users gain one more way to finish tasks without leaving the conversation.

## Sources

- Google Blog: New Connected Apps Platform launches for developers (28 Oct 2026)
- developers.google.com/connected-apps (overview, MCP server guide, Connected Console)
- Android Developers YouTube: Extend your app to Gemini and Search with the Connected Apps Platform
