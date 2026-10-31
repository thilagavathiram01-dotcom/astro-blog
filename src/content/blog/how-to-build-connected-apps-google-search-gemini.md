---
title: "How to Build Connected Apps for Google Search and Gemini"
description: "Step-by-step guide to building Connected Apps for Google Search and Gemini with MCP servers or AppFunctions and the Connected Console."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "developer"]
noindex: false
---

Google’s Connected Apps Platform, announced on 28 October 2026, gives developers one place to bring services into Search and the Gemini app. Users link an app once. After that, Gemini or AI Mode in Search can access authorized data and complete actions during a conversation.

The platform is in preview. Access opens in phases. Developers integrate through a cloud-hosted MCP server or Android MCP via AppFunctions, then register, test, and submit in the Google Connected Console.

This guide covers the official process, requirements, and practical steps so you can prepare and apply for the preview.

## What the Platform Offers

Connected Apps let users reach your service from high-intent moments in Search and Gemini. Google reports more than 50 Connected Apps already live across categories such as productivity, event ticketing, health, and fitness. Partners include Adobe, Experian, Localiza, and Peloton in Gemini, with more moving to Search.

You choose the surfaces before review: Search, the Gemini app, or both. Once live, the console shows traffic, latency, and error rates. Branding stays under your control, including verified logos and authenticated accounts.

The recommended path for most services is a remote MCP server. It scales across Android, iOS, and the web. Android MCP with AppFunctions suits deeper on-device experiences that need the current app state. See our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) for the client-side details.

![Developer workspace with multiple screens and a glowing keyboard](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Prerequisites Before You Start

Prepare these items before requesting access:

- A public HTTPS MCP endpoint (Streamable HTTP transport recommended) or an Android app implementing AppFunctions.
- Domain verification capability: you will serve a token file at `/.well-known/google-connected-apps` returning HTTP 200 with no redirects.
- OAuth 2.1 with PKCE for user-delegated access (highly recommended). Authorization server metadata discovery is required.
- Public Terms of Service and Privacy Policy URLs.
- Listing assets: 512×512 icon (JPEG or PNG, under 1 MB), a one-sentence description under 30 words, at least three capabilities, and at least three example prompts.
- Account administrator rights to accept the Connected Apps Terms of Service.

Category and connection type cannot be changed later. Choose carefully.

## Step-by-Step: Build and Register a Connected App

### 1. Request Preview Access

Visit the interest form linked from developers.google.com/connected-apps or the Connected Console help page. Google reviews applications in phases and expands the set of developers, markets, and products over the coming months.

### 2. Build Your MCP Server

Follow the Model Context Protocol specification. Google’s developer guide recommends:

- Clear server instructions that describe your domain and capabilities so models route correctly.
- Explicit tool annotations such as `readOnlyHint` for queries and `destructiveHint` for state-changing actions.
- Strongly typed schemas with detailed parameter descriptions.
- Optional UI metadata so tools can return branded interactive widgets rendered in sandboxed iframes.

Test locally with the MCP Inspector (`npx @modelcontextprotocol/inspector`). Invoke tools, inspect JSON payloads, and verify any custom UI.

Deploy the server to a public HTTPS endpoint. Google Cloud Run is one option (`gcloud run deploy`), but any reliable host works.

### 3. Test in Gemini Developer Mode

Once the endpoint is public, use Gemini Developer Mode’s debugging tabs (Event Log, Tool Schemas, environment simulation for date/time/location, and authentication) to confirm live tool execution and model responses.

### 4. Register in Google Connected Console

After access is granted:

1. Create the app and enter the name users will mention (for example with @).
2. Choose the category and connection type (MCP server or Android MCP).
3. Add the icon, short description, capabilities, example prompts, Terms, and Privacy Policy.
4. Connect the MCP endpoint and verify the domain by serving the downloaded token at the well-known path.
5. Configure authentication (OAuth 2.1 recommended).
6. Set availability for Search, Gemini, or both.
7. Add testers and run preview tests.
8. Submit for Google review.

After approval you control when the version publishes. The console supports versioning so you can iterate safely.

![Hand holding a modern smartphone with a colorful gradient screen](https://images.unsplash.com/photo-1721988348117-01a350266d26?auto=format&fit=crop&w=800&q=80)

## OAuth and Security Considerations

Use OAuth 2.1 with PKCE for the authorization code flow. Your authorization server must expose metadata (issuer, authorization_endpoint, token_endpoint, response_types_supported including “code”, and preferably registration_endpoint and scopes_supported).

Mark tools that change state so the platform can require user confirmation. Keep scopes minimal. Prefer read-only tools where possible. Document expected values and side effects clearly so the model calls tools accurately and users understand what will happen.

For Android MCP, AppFunctions run locally and inherit the app’s existing permissions and on-device context. Combine both paths only if your product needs them; each Connected App uses one primary integration type.

## Tips for a Smooth Submission

- Start with a small, high-value set of tools (search, create, book, or summarize) rather than exposing every endpoint.
- Write example prompts that match real user language.
- Test the exact domain verification path before submitting; redirects are a common failure.
- Prepare legal pages early. Missing Terms of Service blocks registration.
- Monitor the console analytics after launch and version carefully.
- If you already maintain a remote MCP server for other agents, adapt it to Google’s safety annotations and UI metadata.

## Conclusion

The Connected Apps Platform lowers the barrier for developers to appear inside Search and Gemini. Build once with MCP or AppFunctions, manage everything in the Connected Console, and reach users at the moment they need your service.

Apply for the preview, follow the official MCP and console guides, and test thoroughly before review. As access expands beyond the initial phased rollout, well-prepared apps will be ready to go live on both surfaces.

## Sources

- New Connected Apps Platform launches for developers: https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/
- Connected Apps Platform overview: https://developers.google.com/connected-apps
- MCP server developer guide: https://developers.google.com/connected-apps/mcp
- Create and manage Connected Apps in Google Connected Console: https://developers.google.com/connected-apps/gpc
- OAuth 2.1 implementation guide: https://developers.google.com/connected-apps/mcp/oauth

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IYpt25GHB1U"
    title="Power up your LLMs: Gemini CLI and Model Context Protocol (MCP)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
