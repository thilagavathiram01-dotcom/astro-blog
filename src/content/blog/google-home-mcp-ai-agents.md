---
title: "How to Set Up Google Home MCP for AI Agents"
description: "Connect Claude, Antigravity, or OpenClaw to Google Home MCP, control devices, and review event history with official setup steps."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "developer", "ai"]
noindex: false
---

Google opened early access to **Home MCP** on September 16, 2026. The Model Context Protocol server lets an MCP-capable agent inspect your Google Home structure, read device state and event history, and run approved control actions.

This is not a swap of Gemini for Home on speakers. Gemini still owns the built-in voice assistant. Home MCP is a second path: your own agent talks to `home.googleapis.com/mcp` after you complete Google Cloud OAuth.

Early access is limited to **Google Home Premium Advanced** subscribers in the United States, rolling out over the coming weeks. Setup is closer to a developer project than a single toggle in the Home app.

## What Home MCP can and cannot do

Google documents five tool groups on the [Home MCP server](https://developers.home.google.com/mcp/home):

- `list_homes` — homes you can access
- `list_home_resources` — devices, rooms, traits, and command schemas
- `list_home_states` — live connectivity and trait state
- `run_home_actions` — parameterized commands on target devices
- `list_home_history` — past state changes and events in a time range

Supported hardware is anything already in the Google Home graph: Nest cameras and doorbells, Nest thermostats, and Works with Google Home or Matter devices such as bulbs.

Google also lists things that stay off the table. Home MCP **does not create or manage automations** yet. Rate limits apply. Sensitive actions such as **unlocking doors** are blocked. Some experimental traits can fail. Latency can be higher than the Home app.

Tell other people in the household if an agent can move lights, thermostats, or cameras. You can revoke access later in the Google Home app or on the My Accounts page.



![Living room lights and smart speaker on a side table](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80)



## Prerequisites

Confirm these before you open Cloud Console:

1. Devices already linked in the [Google Home app](https://home.google.com/).
2. An active **Google Home Premium Advanced** plan (listed at $20 per month or $200 per year on Google’s store).
3. A Google Cloud project you control.
4. An MCP client. Google’s docs name **Google Antigravity**, **Claude Cowork**, and **OpenClaw**.

If you only want to test, Google suggests creating a separate home structure so a prototype agent does not touch the family thermostat.

## Step 1. Create a Cloud project and enable the Home API

1. Open the [Google Cloud console](https://console.cloud.google.com/) and create a project.
2. Go to **APIs & Services → Enabled APIs & Services**.
3. Search for **Home API** and click **Enable**.

You need this API on the same project that will issue OAuth credentials. Do not reuse a random old project unless you know who else has access to it.

## Step 2. Create OAuth credentials

1. Open **APIs & Services → Credentials**.
2. Choose **+ Create credentials → OAuth client ID**.
3. Set **Application type** to **Web application**.
4. Add the redirect URI for the client you will use:
   - Antigravity: `https://antigravity.google/oauth-callback`
   - Claude Cowork: `https://claude.ai/api/mcp/auth_callback`
   - OpenClaw: the redirect URI from your local install
5. Create the client and store the **Client ID** and **Client Secret**.
6. In **Google Auth Platform → Audience**, set publishing status to **Publish app**.

Treat the client secret like a password. Do not paste it into a public notebook or a shared chat log.

## Step 3. Point your agent at the Home MCP server

Production endpoint from Google’s reference:

`https://home.googleapis.com/mcp`

OAuth scope used in the official setup prompt:

`https://www.googleapis.com/auth/home.platform.v2`

If the client can configure MCP from chat, Google’s suggested prompt is:

- Name: `home_mcp`
- Server URL: the Home MCP URL your client documents (Google currently shows both the production host and a preprod sandbox URL in setup copy)
- Transport: `sse`
- Scope, Client ID, and Client Secret from the previous step

Then complete the Google sign-in, pick the home structure, and return the authorization code if the client asks for it.

### Antigravity

Open **Settings → Advanced settings → Customizations → Open MCP Config**. Add a `home_mcp` entry with `serverUrl` set to `https://home.googleapis.com/mcp` and the OAuth client fields. Finish auth under **Customizations → home_mcp → Authentication**.

### Claude Cowork

Open [Claude Connectors](https://claude.ai/customize/connectors), add a custom connector, enter `https://home.googleapis.com/mcp`, then paste the Client ID and secret under Advanced settings. After OAuth, enable `home_mcp` from **Connectors** in a Cowork chat.

### OpenClaw

Patch the gateway config with an SSE server at `https://home.googleapis.com/mcp`, `auth: oauth`, the platform scope, and your client env vars. Restart the gateway and open the generated authorization URL.

For a short primer on why MCP exists as a connector layer, this Claude API session is a useful watch before you grant home access:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aZLr962R6Ag"
    title="Building with MCP and the Claude API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4. Prove the tools work

Google’s verification prompts:

- “How many lights do I have in my house?”
- “Is my home secured?”
- “Turn off all the outside lights.”
- “What happened while I was out?”

Approve each tool call the first time. If `home_mcp` is missing from the tool list, the OAuth flow did not finish or the Home API is not enabled on that project.

Start with read-only questions. Only then send a control command on a low-risk device, such as one outdoor light.



![Person reviewing a laptop dashboard in a home office](https://images.unsplash.com/photo-1486401899868-0e435ed79727?auto=format&fit=crop&w=800&q=80)



## Familiar faces need a second consent

Camera summaries that name people use **Familiar face detection**. That is a separate grant.

Requirements from Google:

- You are a **manager** of the structure.
- At least one compatible Nest camera or doorbell.
- Familiar face detection enabled on **each** camera you want included.
- A Home Premium subscription that includes the feature.

The agent can look up the structure UUID and build a consent URL of this form:

`https://home.google.com/connections/feature_consent?client_id=CLIENT_ID&structure_id=STRUCTURE_ID&features=1&continue=https%3A%2F%2Fhome.google.com`

Visit that link yourself. Do not treat a chat reply as consent.

Familiar face detection is not available for cameras based in Illinois, and local law may require consent from people you identify.

## Safety rules worth following

Google’s own warning is blunt: connecting a real home lets the agent act for you. Unexpected behavior depends on the client, not only on Google’s server.

Practical limits:

- Do not give a personal agent lock-unlock work. Unlock is blocked, but other lock-adjacent commands can still surprise you.
- Keep HVAC and major appliances on confirm-before-run in the client if the client supports that.
- Revoke the connector if you stop using the agent.
- File trait bugs in Google’s [public issue tracker](https://issuetracker.google.com/issues/new?component=655104&template=2399599) instead of retrying a broken experimental trait.

If you already use Gemini on Pixel for household memory features, keep those flows separate from Home MCP. The September Android Drop guide on [Find Hub remembered items](/blog/android-september-2026-drop-guide/) is a phone-side inventory tool, not a substitute for Home MCP history queries.

## Tips that save a wasted evening

- Use one Cloud project per household agent. Mixing work and home OAuth clients makes revocation harder.
- Publish the OAuth app or the consent screen will block anyone who is not listed as a test user.
- Ask for device counts before you ask for history. If discovery fails, control and history will fail too.
- Expect automations to stay in the Home app until Google ships MCP automation tools.
- Speakers remain on Gemini for Home. A third-party agent can send an audio message through a speaker after a task. It does not replace “Hey Google” on that device.

## Conclusion

Home MCP is useful if you already run an MCP client and you want that client to see the same home graph as the Google Home app. The setup cost is a Cloud project, an OAuth client, and a careful first week of read-only prompts.

If you do not have Premium Advanced in the U.S., wait. The server is early access, automations are not exposed yet, and Google is still tuning latency.

When access lands on your account, connect one client, test discovery, then decide whether camera history and device control belong in that agent at all.

## Sources

- [Google Home MCP Server](https://developers.home.google.com/mcp/home) — Google Home Developers
- [MCP Reference: home.googleapis.com](https://developers.home.google.com/reference/home/mcp) — Google Home Developers
- [Home MCPs overview](https://developers.home.google.com/mcp) — Google Home Developers
- [What’s new in Google Home (September 16, 2026)](https://support.google.com/googlehome/answer/15962877) — Google Help
- [Learn about familiar face detection](https://support.google.com/googlehome/answer/9268625) — Google Help
- [Google Home & Nest Community](https://support.google.com/googlehome/community) — Introducing Home MCP post
