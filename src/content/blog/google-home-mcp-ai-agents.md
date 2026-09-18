---
title: "How to Connect Claude or Antigravity to Google Home MCP"
description: "Set up Google Home MCP in early access: Cloud project, OAuth, and Claude or Antigravity so an agent can list devices, check state, and run safe commands."
pubDate: 2026-09-18
tags: ["ai-tools", "google-home", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=630&q=80"
---

Google opened early access to **Home MCP** on September 16, 2026. It is a Model Context Protocol server that lets an MCP-capable agent work with devices and event history in your Google Home structure — Nest cameras and doorbells, Nest thermostats, and Matter devices that already work with Google Home.

Gemini for Home still owns the speaker wake word. Home MCP is the path for a separate agent such as Claude, Google Antigravity, Hermes, or OpenClaw. Early access is rolling out over the coming weeks to **Google Home Premium Advanced** subscribers in the United States ($20 per month or $200 per year).

This guide follows Google's official Home MCP documentation: what the server can do, who can join, how to wire Cloud + OAuth, how to attach Claude or Antigravity, and which prompts to try first.

## What Home MCP actually exposes

An MCP server sits between your home and the agent. Home MCP publishes tools the model can call:

- **Structure discovery** — `list_homes` returns homes you can access
- **Resource discovery** — `list_home_resources` lists rooms, devices, traits, and command schemas
- **State** — `list_home_states` reports live connectivity and trait values
- **Control** — `run_home_actions` runs parameterized commands
- **History** — `list_home_history` queries state changes and events in a time range

Google's own examples: "How many lights do I have?", "Is my home secured?", "Turn off all the outside lights," and "What happened while I was out?" Cross-camera summaries and weekly laundry or lighting tallies are the product-side stories Google used in the launch notes.

![Modern living room with smart lighting and a speaker on a sideboard](https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&h=630&q=80)

## Limits you should treat as product facts

Google's warning on the developer page is not marketing copy:

- Connecting a real home lets the agent control devices on your behalf.
- Home MCP applies **rate limits** and **safety blocks**. Sensitive actions such as **unlocking doors are prohibited**.
- Behavior still depends on the agent. Google says the connection can produce **unexpected or undesired** results.
- If other people live in the home, tell them, or create a **separate development home** for tests.
- You can **revoke** the agent's access at any time in the Google Home app or on your Google Account connections page.

Familiar-face camera data is **not** included unless a structure manager grants a separate consent link, with Familiar face detection already on for each camera or doorbell.

Creating and managing **automations** through Home MCP is not available yet. Google lists it under "Coming soon." Some device traits are marked experimental.

## Watch what MCP is (before you wire the house)

Home MCP is Google's implementation of the open Model Context Protocol. This Anthropic conversation with MCP co-creator David Soria Parra is a clear public explainer of the standard itself:

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/PLyCki2K0Lg" title="Why we built and donated the Model Context Protocol (MCP)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prerequisites

You need all of the following before setup will succeed:

- Devices already in a Google Home structure
- An active **Google Home Premium Advanced** subscription (US English early access)
- A Google Cloud project you can administer
- An MCP client Google documents today: **Google Antigravity**, **Claude Cowork**, or **OpenClaw**

If early access has not reached the account yet, stop at the subscription check. Do not invent a workaround.

## Step 1 — Create a Cloud project and enable Home API

1. Open the [Google Cloud console](https://console.cloud.google.com/) and create a project (or pick one you already use for Home APIs).
2. Go to **APIs & Services → Enabled APIs & Services**.
3. Search for **Home API** and click **Enable**.

## Step 2 — Create OAuth credentials

1. Open **APIs & Services → Credentials**.
2. **Create credentials → OAuth client ID**.
3. Set application type to **Web application**.
4. Add the redirect URI that matches the client you will use:
   - Antigravity: `https://antigravity.google/oauth-callback`
   - Claude Cowork: `https://claude.ai/api/mcp/auth_callback`
   - OpenClaw: the redirect URI your local install documents
5. Create the client and store the **Client ID** and **Client Secret**.
6. In **Google Auth Platform → Audience**, publish the app so the OAuth consent screen can complete.

Treat the client secret like a password. Do not paste it into a public gist or a shared chat log.

![Person configuring a laptop next to a tablet on a kitchen counter](https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 3 — Attach the agent

Google publishes a prompt you can paste into any assistant that can edit its own MCP config. Replace the placeholders:

```text
Please configure the Home MCP server for me with these settings:
- Name: home_mcp
- Server URL: https://preprod-home.sandbox.googleapis.com/mcp
- Transport: sse
- OAuth Scope: https://www.googleapis.com/auth/home.platform.v2
- Client ID: YOUR_CLIENT_ID
- Client Secret: YOUR_CLIENT_SECRET
```

Use the URL Google shows on the current docs page. Production configs in the same document also list `https://home.googleapis.com/mcp` for Antigravity and Claude.

### Claude Cowork

1. Open [Claude Connectors](https://claude.ai/customize/connectors).
2. Add a custom connector with server URL `https://home.googleapis.com/mcp`.
3. In advanced settings, enter the Client ID and Client Secret.
4. Finish the Google OAuth flow in the browser and pick the home structure.
5. In a Cowork conversation, open **Connectors** and enable **home_mcp**.

### Google Antigravity

1. **Settings → Advanced settings → Customizations → Open MCP Config**.
2. Add a `home_mcp` entry with `serverUrl` `https://home.googleapis.com/mcp` and the OAuth client fields.
3. Complete **Authentication** for `home_mcp`, select the structure, and paste the authorization code back into Antigravity.

OpenClaw uses an `openclaw config patch` JSON block with SSE transport and the `home.platform.v2` scope, then `openclaw gateway restart`. Follow the current OpenClaw docs for the redirect URL.

## Step 4 — Verify with safe prompts

Confirm `home_mcp` appears in the client's tool list. Then grant tool execution **per prompt** the first week:

- How many lights do I have in my house?
- Is my home secured?
- Turn off all the outside lights.
- What happened while I was out?

If a command would affect someone else in the house (HVAC at night, whole-home lights), say so in the prompt or refuse the tool call.

## A reusable weekly check-in

Once discovery and state calls work, a single prompt is enough for a Sunday review:

> Using Home MCP only, summarize last week's device history: outdoor lights left on more than two hours after sunset, washer cycles, and whether any camera events fired after 11pm. Do not change any device state.

That stays inside `list_home_history` and `list_home_states`. Keep control calls in a separate thread so a sloppy follow-up cannot flip a thermostat.

![Smart thermostat on a wall in a well-lit hallway](https://images.unsplash.com/photo-1545259741-2ea3ebf169f3?auto=format&fit=crop&w=1200&h=630&q=80)

## Revoke access

If the experiment is over, or a client token leaked:

1. Open the Google Home app connections / linked services, or your Google Account third-party connections page.
2. Remove the Home MCP / OAuth client you created.
3. Delete the OAuth client in Cloud Console if you will not reuse it.

Google documents revocation from both the Home app and My Accounts.

## Who this is for right now

Home MCP is useful if you already pay for Premium Advanced, already run Claude or Antigravity, and want one agent that can read the house the same way it reads a repo. It is not a replacement for Gemini on the speaker, and it is not a set-and-forget automation engine yet.

Start with read-only history prompts. Add `run_home_actions` only after you have seen the tool schemas for *your* devices.

## Sources

- [Google Home MCP Server (official docs)](https://developers.home.google.com/mcp/home)
- [Home MCP servers overview](https://developers.home.google.com/mcp)
- [Google Home Developer Center](https://developers.home.google.com/)
- [TechCrunch coverage of the September 16, 2026 early access](https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/)
- [The Verge on Home MCP availability and Premium Advanced](https://www.theverge.com/tech/996310/google-home-mcp-integration-agentic-ai-smart-home-price-release-date)
