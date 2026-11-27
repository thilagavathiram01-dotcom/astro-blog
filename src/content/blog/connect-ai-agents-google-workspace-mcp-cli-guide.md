---
title: "Connect AI Agents to Google Workspace with MCP and CLI"
description: "Step-by-step guide to connect AI agents like Claude to Google Workspace using official MCP servers and gwscli for Gmail, Drive, and more."
pubDate: 2026-11-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "productivity"]
noindex: false
---

Google made its Workspace Model Context Protocol (MCP) servers and the official Workspace CLI generally available on November 24, 2026. Developers and teams can now connect AI agents to Gmail, Drive, Docs, Sheets, and other apps without building custom integrations.<grok type="render_inline_citation" citation_id="68" />

This guide shows how to set up the servers and the CLI, what agents can do, and how to stay within usage limits.

![Developers working at multi-monitor coding desks](https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80)

## What the Workspace MCP servers and CLI provide

Google hosts remote MCP servers for each product. Agents call pre-built tools over the open MCP standard. The Workspace CLI, called gwscli, brings the same tools to terminal-based agents such as Claude Code, Codex, or Antigravity.<grok type="render_inline_citation" citation_id="68" />

Supported services include Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, and Tasks. Keep support is coming soon. The servers respect the signed-in user’s permissions, data loss prevention rules, and classification labels. Sensitive actions such as sending external email can require user confirmation under admin policy.

From February 1, 2027, AI agents must use the MCP servers or CLI instead of calling Workspace REST APIs directly. Technical enforcement starts on that date.<grok type="render_inline_citation" citation_id="68" />

## Prerequisites

You need a Google Workspace account or a personal Google Account. For personal use, Google offers a quick personal mode that creates an OAuth client limited to your own account. No Google Cloud project is required for the basic personal path in some setups, but most developer flows use a Cloud project.

Enable the relevant MCP services and product APIs in Google Cloud if you use a project. Example services include gmailmcp.googleapis.com and the Gmail API.<grok type="render_inline_citation" citation_id="67" />

For the CLI, install gwscli from Google’s documented installer. Agents such as Claude need the desktop or Code environment updated.

## Set up the MCP servers for an agent

1. Open the official configuration guide at developers.google.com/workspace/guides/configure-mcp-servers.
2. Choose the products you need. Each has its own remote endpoint, for example https://gmailmcp.googleapis.com/mcp/v1 for Gmail.
3. Create or select an OAuth client marked for AI-powered agents. Personal mode simplifies this for individual accounts.
4. In your agent client (Claude, Antigravity, or another MCP host), add the server URL and complete the OAuth flow. The agent requests the scopes needed for the selected tools.
5. Test with a simple action such as listing recent Gmail threads or reading a Drive file.

Some tools support form elicitation for confirmation. Use the primary /mcp/v1 endpoint when your client supports it.<grok type="render_inline_citation" citation_id="67" />

## Install and use the Workspace CLI

Google documents the CLI at developers.google.com/workspace/guides/workspace-cli. The installer is typically:

```bash
curl -fsSL https://dl.google.com/workspace-cli/install.sh | bash
gwscli version
```

Then run:

```bash
gwscli auth setup
gwscli auth login --bundle=readonly
```

This signs in with scoped access. Packaged agent skills can be installed into directories such as ~/.claude/skills for Claude Code.<grok type="render_inline_citation" citation_id="109" />

Commands return structured JSON. You can limit sign-in to specific services or read-only operations. The CLI is designed for terminal agents and sandboxed environments.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DO77XGujw_A"
    title="Connect AI Agents to Google Workspace: Official MCP Servers & CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What agents can do

Common actions include:

- Gmail: search and read threads, create drafts and replies, manage labels.
- Drive: search, read, download, create, and upload files.
- Docs, Sheets, Slides: read content and apply edits.
- Calendar: list events, suggest times, create or update meetings.
- Chat and Tasks: read, search, and manage items.

The servers enforce Workspace permissions. Admins can control which apps access data and review audit logs.<grok type="render_inline_citation" citation_id="64" />

![Team collaborating around a laptop in a modern office](https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=800&q=80)

## Usage tiers and limits

Google introduced standardized usage tiers. The Standard tier is free with published quotas. For many developers the free tier covers daily use. A Scaled tier offers higher limits for larger agent workloads. Billing details for the Scaled tier begin later; check the current Workspace updates page for exact numbers.<grok type="render_inline_citation" citation_id="68" />

Over 99 percent of active developers fit inside the free limits according to Google. Monitor usage in the developer dashboard.

## Tips for reliable setups

Start with read-only scopes while you test. Confirm that your agent client supports the MCP version and form elicitation if you need write actions. Update Claude or other clients to the latest version before adding servers.

For organization accounts, check with your admin that the rollout has reached your domain. Rapid Release and Scheduled Release domains received the feature over a two-week window after the November 24 announcement.

If you already use community MCP servers, compare the official hosted versions for security and admin visibility. Official servers keep data under Google’s controls and apply DLP rules.

Link related work on agent tools to our guide on [using Claude Skills with MCP servers](/blog/how-to-use-claude-skills-with-mcp-servers/).

## Limitations and next steps

Not every Workspace feature is available as a tool yet. Some tools are still rolling out and may be temporarily unavailable. Linux support for certain desktop features varies by client. HIPAA-ready organizations and hybrid deployments have additional restrictions in some agent features.

After setup, test a multi-step workflow such as drafting a reply in Gmail based on a Drive document and adding a Calendar event. Review the tool reference pages for full schemas.

## Sources

- Google Workspace Updates Blog, November 24, 2026: MCP servers, CLI, usage tiers, and admin policies.
- Google for Developers: Configure the Google Workspace MCP servers.
- Google for Developers: Workspace CLI guide.
- Google Workspace Developers YouTube: Connect AI Agents to Google Workspace.

This setup gives agents governed access to Workspace data while keeping organizations in control of permissions and policies.
