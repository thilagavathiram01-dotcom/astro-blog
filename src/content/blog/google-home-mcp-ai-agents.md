---
title: "How to Connect Claude or Antigravity to Google Home with Home MCP"
description: "Google Home MCP is in early access for Premium Advanced users in the US. Learn what the server can control, how to set up OAuth, and how to revoke access safely."
pubDate: 2026-09-20T22:00:00
tags: ["ai", "tutorials", "android"]
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&h=630&q=80"
---

On 16 September 2026 Google opened **Home MCP**, a Model Context Protocol server that lets a compatible AI agent read your Google Home graph and run approved device actions. It is not a replacement for Gemini for Home on speakers. It is a second control path for tools such as Google Antigravity, Claude Cowork, Hermes, and OpenClaw.

The official developer docs and reporting from The Verge, TechCrunch, and 9to5Google agree on the same limits: early access is for **Google Home Premium Advanced** subscribers in the **United States**, setup needs a Google Cloud project, and sensitive actions such as unlocking doors are blocked. This guide walks through those facts and the official setup path so you can decide whether to connect an agent to a real house.

![Living room smart speaker and lights on a side table](https://images.unsplash.com/photo-1545259741-2ea140eb6ab4?auto=format&fit=crop&w=1200&q=80)

## What Home MCP is (and is not)

[MCP](https://developers.home.google.com/mcp) is an open protocol that exposes tools an LLM can call. Google’s Home MCP server sits between your home graph and the client. The documented tools are:

- `list_homes` — homes and structures you can access
- `list_home_resources` — devices, rooms, traits, and command schemas
- `list_home_states` — live connectivity and trait state
- `run_home_actions` — parameterized commands on target devices
- `list_home_history` — past state changes and event logs

Supported hardware is anything already in the Google Home ecosystem: Nest cameras and doorbells, Nest thermostats, and Works with Google Home / Matter devices such as bulbs.

Gemini for Home still owns the speaker wake word. With MCP connected, a third-party agent can send a voice message through a Google Home speaker when a task finishes. It does not become the default “Hey Google” assistant.

Google Product Manager Taylor Lehman described the point of the integration as giving an agent **real-world physical context**: camera summaries across rooms, laundry-cycle or lights-on history, and custom dashboards built in everyday language.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/1ucAu7lTsmM" title="Grow your smart home business with Gemini for Home — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Who can use it today

Confirm all four before you create a Cloud project:

1. Devices already appear in the Google Home app.
2. You pay for **Google Home Premium Advanced** in the US (reported as $20 per month or $200 per year).
3. You can create or own a Google Cloud project.
4. You have an MCP client Google documents: **Antigravity**, **Claude Cowork**, or **OpenClaw**. Other MCP clients may work if they support OAuth against `https://home.googleapis.com/mcp`.

Access is rolling out over the weeks after 16 September 2026. If the Home API enablement or OAuth consent fails, you are likely outside the early-access cohort.

Do **not** point an experimental agent at the only home a family uses. Google’s own warning says connecting a live home “can result in unexpected or even undesired behavior.” The docs recommend a separate test structure when other people live there.

## Safety limits you should treat as real

Home MCP applies rate limits and blocks some sensitive actions. Unlocking doors is the example Google and secondary reports both call out. That is not a full safety guarantee.

- Experimental traits may be exposed and fail in odd ways.
- Latency can be higher than Gemini for Home on a speaker.
- Creating or editing automations through Home MCP is **not** supported yet.
- Familiar-face camera data needs a **separate** consent link. Do not assume camera identity labels are in scope after the first OAuth grant.

Revoke access from the Google Home app or the My Accounts connections page if the agent misbehaves. Tell other household members before you connect.

![Smart thermostat on a wall in a modern hallway](https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80)

## Step 1 — Create the Cloud project and enable Home API

Follow [Google’s Home MCP setup](https://developers.home.google.com/mcp/home):

1. Open the [Google Cloud console](https://console.cloud.google.com/) and create a project (or pick one you already control).
2. Go to **APIs & Services → Enabled APIs & Services**.
3. Search for **Home API** and click **Enable**.

Without that API, OAuth will succeed in the browser and then fail when the client lists tools.

## Step 2 — Create a Web OAuth client

1. **APIs & Services → Credentials → Create credentials → OAuth client ID**.
2. Application type: **Web application**.
3. Add the redirect URI for the client you will use:
   - Antigravity: `https://antigravity.google/oauth-callback`
   - Claude Cowork: `https://claude.ai/api/mcp/auth_callback`
   - OpenClaw: the redirect URL from your local install
4. Create the client and store the **Client ID** and **Client Secret** in a password manager, not in a public gist.
5. Open **Google Auth Platform → Audience** and **Publish app** so the consent screen is usable outside a tiny test list.

## Step 3 — Point the agent at the server

Production endpoint documented in the MCP reference: `https://home.googleapis.com/mcp`.

OAuth scope used in Google’s sample prompt: `https://www.googleapis.com/auth/home.platform.v2`.

If your client can configure MCP from chat, paste a prompt in this shape (replace the two secrets):

```text
Please configure the Home MCP server for me with these settings:
- Name: home_mcp
- Server URL: https://home.googleapis.com/mcp
- Transport: sse
- OAuth Scope: https://www.googleapis.com/auth/home.platform.v2
- Client ID: YOUR_CLIENT_ID
- Client Secret: YOUR_CLIENT_SECRET
```

### Antigravity

Settings → Advanced settings → Customizations → Open MCP Config. Add:

```json
{
  "mcpServers": {
    "home_mcp": {
      "serverUrl": "https://home.googleapis.com/mcp",
      "oauth": {
        "clientId": "YOUR_CLIENT_ID",
        "clientSecret": "YOUR_CLIENT_SECRET"
      }
    }
  }
}
```

Then open **home_mcp → Authentication**, finish the browser consent, pick the home structure, and paste the authorization code back.

### Claude Cowork

1. Open [Claude Connectors](https://claude.ai/customize/connectors).
2. Add a custom connector with server URL `https://home.googleapis.com/mcp`.
3. Enter the Client ID and Client Secret under Advanced settings.
4. Complete OAuth in the browser.
5. In a Cowork chat, enable the `home_mcp` connector.

### OpenClaw

Patch the gateway config with SSE transport and the same scope, set `CLIENT_ID` / `CLIENT_SECRET` in env, run `openclaw gateway restart`, then open the generated authorization URL.

![Person using a laptop next to a smart display](https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=1200&q=80)

## Step 4 — Prove the connection with read-only prompts first

Google’s verification prompts, in a safe order:

1. **Discovery:** “How many lights do I have in my house?”
2. **State:** “Is my home secured?”
3. **History:** “What happened while I was out?”
4. Only then **control:** “Turn off all the outside lights.”

Approve each tool call in the client. If the model invents a device name, stop and re-run `list_home_resources` instead of guessing an action.

Good early tasks that match Google’s examples:

- Summarize what cameras saw after school pickup (needs camera history on Premium).
- Count laundry cycles or lights-on hours from `list_home_history`.
- Ask the agent to draft a dashboard layout in language you can rebuild in the Home app (MCP cannot create automations yet).

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/l3BabZJaokU" title="The Android Show 2026 overview — Gemini Intelligence and Home-era AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Familiar faces and cameras

Face labels are a second consent. Requirements from the docs:

- You are a **manager** of the structure.
- At least one compatible Nest camera or doorbell has **Familiar face detection** on.
- You still have a Premium subscription on those cameras.

The agent can build the consent URL after it knows your structure ID. Visit that link yourself. Do not paste household face names into a public chat log.

## When you should not turn this on

Skip Home MCP if any of these are true:

- You only need “turn off the kitchen lights.” Gemini for Home already does that without Cloud OAuth.
- Kids or guests share the house and you cannot explain that a laptop agent can flip switches.
- You are outside the US Premium Advanced early-access list.
- You cannot store an OAuth client secret safely.

Use the [Home Developer MCP](https://developers.home.google.com/mcp/developer) instead if you only want coding answers from Matter and Home API docs. That server does not control devices.

## Conclusion

Home MCP is a real, documented way to let Claude Cowork or Antigravity query and command a Google Home, with OAuth, a published tool list, and an explicit ban on some lock actions. It is also an early-access product with latency caveats, experimental traits, and no automation authoring yet.

If you subscribe to Premium Advanced in the US and already live in MCP clients, connect a test structure first, start with list-and-history prompts, and keep the revoke path bookmarked. Speakers can stay on Gemini for Home; treat the agent as a privileged remote, not a new roommate.

## Sources

- [Google Home MCP Server](https://developers.home.google.com/mcp/home) — Google Home Developers (updated 15 September 2026)
- [Home MCPs overview](https://developers.home.google.com/mcp) — Google Home Developers
- [MCP Reference: home.googleapis.com](https://developers.home.google.com/reference/home/mcp) — Google Home Developers
- [Google Home MCP lets Antigravity, Claude, OpenClaw control your smart home](https://9to5google.com/2026/09/16/google-home-mcp/) — 9to5Google (16 September 2026)
- [Your AI agents can now control your Google Home devices](https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/) — TechCrunch (16 September 2026)
- [Google Home gets MCP support for third-party AI agents](https://www.theverge.com/tech/996310/google-home-mcp-integration-agentic-ai-smart-home-price-release-date) — The Verge (16 September 2026)
- [Grow your smart home business with Gemini for Home](https://www.youtube.com/watch?v=1ucAu7lTsmM) — Google for Developers
