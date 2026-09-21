---
title: "How to Use Google Home MCP With Claude and Antigravity"
description: "Set up Google Home MCP with a Cloud project and OAuth so Claude, Antigravity, or OpenClaw can list devices, check states, and run approved actions."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "ai"]
noindex: false
---

Google opened Google Home to third-party AI agents on 16 September 2026. Home MCP is an official Model Context Protocol server that sits in front of your home graph. Compatible clients can list rooms and devices, read live state, query event history, and run a limited set of actions.

This is early access, not a one-tap toggle in the Home app. You need Google Home Premium Advanced in the US, a Google Cloud project, and an MCP client such as Google Antigravity, Claude Cowork, or OpenClaw. Speakers still run Gemini for Home. Agents talk to devices through the Home API, and they can send an audio message to a speaker when a task finishes.

If you already use Gemini Intelligence on Pixel or Galaxy phones, treat Home MCP as the house-side counterpart. See our [Gemini Intelligence on Android](/blog/gemini-intelligence-android/) guide for the phone side.

## What Home MCP can and cannot do

The server endpoint is `https://home.googleapis.com/mcp`. Official tools are:

- **list_homes** — homes and structures you can access
- **list_home_resources** — devices, rooms, traits, and command schemas
- **list_home_states** — live connectivity and trait values
- **list_home_history** — past state changes and events in a time range
- **run_home_actions** — parameterized commands on target devices

Google’s own test prompts are simple: “How many lights do I have in my house?”, “Is my home secured?”, “Turn off all the outside lights.”, “What happened while I was out?”

Google documents hard limits. Sensitive actions such as unlocking doors are blocked. Rate limits apply. Creating or editing automations is not supported yet. Some experimental traits can fail. Latency can be higher than a tap in the Home app.

Nest cameras, doorbells, thermostats, and Matter or Works with Google Home devices that already live in your structure are in scope. Familiar-face data needs a second consent step. Do not connect a shared family home until every adult in the house knows an agent can see history and flip switches.



![Smart speaker and lamp on a living room side table](https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80)



## What you need before you start

Confirm all of the following:

1. Devices already appear in the Google Home app.
2. A **Google Home Premium Advanced** subscription. Coverage at launch is US English, rolling out over the coming weeks. Public reporting puts the plan at $20 per month or $200 per year.
3. A Google Cloud project you control.
4. An MCP client: Antigravity, Claude Cowork, or OpenClaw.

Google’s developer warning is blunt. An agent that can turn off lights can also do something you did not intend. Prefer a spare structure for testing if you share the house. You can revoke the agent later from the Google Home app or your Google Account connections page.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cGuyrANVi4A"
    title="How Model Context Protocol (MCP) actually works"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1: Create a Cloud project and enable Home API

1. Open the [Google Cloud console](https://console.cloud.google.com/) and create a project.
2. Go to **APIs & Services** → **Enabled APIs & Services**.
3. Search for **Home API** and click **Enable**.

Without this API, OAuth will succeed and tool calls will still fail.

## Step 2: Create OAuth credentials

1. Open **APIs & Services** → **Credentials**.
2. Choose **+ Create credentials** → **OAuth client ID**.
3. Set **Application type** to **Web application**.
4. Add the redirect URI for the client you will use:
   - Antigravity: `https://antigravity.google/oauth-callback`
   - Claude Cowork: `https://claude.ai/api/mcp/auth_callback`
   - OpenClaw: the redirect URL from your local install
5. Create the client and store the **Client ID** and **Client Secret**.
6. Open **Google Auth Platform** → **Audience** and click **Publish app**.

If you skip publish, only test users you add to the OAuth audience can finish the consent screen.



![Laptop showing code next to a coffee mug](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Step 3: Point your agent at Home MCP

Official server URL for production is `https://home.googleapis.com/mcp`. OAuth scope is `https://www.googleapis.com/auth/home.platform.v2`.

### Antigravity

1. Open **Settings** → **Advanced settings** → **Customizations** → **Open MCP Config**.
2. Add:

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

3. Open **Settings** → **Advanced settings** → **Customizations** → **home_mcp** → **Authentication**.
4. Finish the Google Home permission flow, pick the structure, and paste the authorization code back into Antigravity.

### Claude Cowork

1. Open [Claude Connectors](https://claude.ai/customize/connectors).
2. Click **+** → **Add custom connector**.
3. Server URL: `https://home.googleapis.com/mcp`.
4. Under **Advanced settings**, enter Client ID and Client Secret.
5. Add the connector and complete OAuth in the browser.
6. In a Cowork chat, click **+** → **Connectors** and turn **home_mcp** on.

### OpenClaw

Patch config with the official block (scope, SSE transport, and your redirect URL), then run:

```bash
openclaw config patch --stdin
openclaw gateway restart
```

Open the generated authorization URL, sign in, and grant access.

If your client can write MCP config from chat, Google’s prompt template uses name `home_mcp`, transport `sse`, and the scope above. Some docs still show a preprod sandbox host. Prefer `https://home.googleapis.com/mcp` unless Google’s live guide tells you otherwise for your account.

## Step 4: Prove the tools work

In Antigravity, run `/mcp` or inspect the tool list. You should see `home_mcp` and the five tools.

Then ask, one capability at a time:

- How many lights are in this house?
- Is the front door lock reported as locked, and are outdoor cameras online?
- Turn off the porch lights.
- Summarize device and camera events from the last four hours.

Approve each tool call. If the client auto-approves every `run_home_actions` call, change that setting before you leave the session unattended.

## Familiar faces and camera history

Cross-camera questions such as “What did the kids do after school?” need extra consent. You must be a manager of the structure. Each Nest camera or doorbell in that structure needs Familiar face detection on, and the Home Premium plan that includes it.

Ask the agent for the structure UUID, then open Google’s consent URL with your OAuth Client ID and that structure ID. Until that page is accepted, face labels stay out of agent answers even if video history is available.

## Safety habits that actually matter

- Revoke from the Home app or My Accounts if a client feels sloppy.
- Tell other household members before you connect a live structure.
- Keep door-unlock and similar sensitive traits off the table. Google already blocks some of them; do not hunt for workarounds.
- Use a test home with spare bulbs if you are writing agent prompts all afternoon.
- File broken experimental traits in Google’s public Home issue tracker rather than retrying the same command ten times.

## Conclusion

Home MCP is a real remote MCP server with five tools, OAuth, and a Premium Advanced gate. Setup is Cloud-project work, not a consumer toggle. Once Claude, Antigravity, or OpenClaw is authenticated, you can inventory devices, read state and history, and run allowed actions without writing a custom Home API client.

Start with discovery and state questions. Add `run_home_actions` only after you trust the client’s confirmation UI. Automations are still on Google’s “coming soon” list, so keep scenes and routines in the Home app for now.

## Sources

- [Google Home MCP Server — Google Home Developers](https://developers.home.google.com/mcp/home)
- [Home MCPs overview — Google Home Developers](https://developers.home.google.com/mcp)
- [MCP Reference: home.googleapis.com](https://developers.home.google.com/reference/home/mcp)
- [Google Home MCP lets Antigravity, Claude, OpenClaw control your smart home — 9to5Google](https://9to5google.com/2026/09/16/google-home-mcp/)
- [Your AI agents can now control your Google Home devices — TechCrunch](https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/)
