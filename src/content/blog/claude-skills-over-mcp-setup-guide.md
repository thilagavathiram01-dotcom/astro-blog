---
title: "How to Use Claude Skills with MCP Servers"
description: "Step-by-step guide to enable Claude Skills over MCP for better agent workflows in Claude.ai and Claude Code."
pubDate: 2026-11-27T09:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Claude Skills over MCP arrived in public beta on November 24, 2026. MCP servers can now ship skills next to their tools so Claude loads the right how-to instructions only when a task needs them. This keeps context use low and removes the need for separate skill installs.<grok type="render_inline_citation" citation_id="80" />

The update also made Tasks and Elicitation generally available. Servers can run longer jobs in the background and pause to ask for your input before sensitive actions. File Uploads is rolling out soon.

## What Skills over MCP changes

Before this, an MCP connection gave Claude access to tools. Tool names and descriptions told it what was possible, but not the best way to use those tools for your specific workflow. Skills fill that gap. A skill is a package of instructions, templates, and sometimes scripts that Claude loads on demand.

Because the skill lives with the server, it updates automatically when the server developer improves it. You do not manage a separate skills library for every connector.

Examples already live in the Claude marketplace. Shopify skills help Claude design and update a store end to end. HubSpot skills handle onboarding. Atlassian skills pull organizational context for analysis. Carta will soon support equity document workflows.<grok type="render_inline_citation" citation_id="80" />

![Person coding on a laptop with code visible on screen](https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=800&q=80)

## Enable Skills over MCP in Claude

Skills over MCP is on by default for Pro, Max, and Ultra plans. Team plans require an admin to enable it. Enterprise support is coming soon.

Open claude.ai and go to Settings. Confirm that Code execution and file creation is turned on under Capabilities. Skills rely on this. Then open Customize and check that Skills are available. Connect an MCP server that publishes skills through the Connectors marketplace or by adding a custom connector.

Once connected, Claude can discover the skills. Ask a question that matches a skill’s description and Claude loads only the relevant instructions. You can also type / in the composer to browse available skills from connected servers.

For Claude Code, update to version 2.1.332 or later. Skills from MCP servers appear in the / menu as server:skill with nothing extra to install. Run `claude --version` to check. Use `claude update` if needed.

## Step-by-step setup for a connector

1. Sign in to Claude on a supported plan.
2. Enable the required capabilities in Settings.
3. Open the Connectors section and add a server that supports Skills over MCP. Shopify, HubSpot, Atlassian, and GitHub are current examples.
4. Authenticate the connector when prompted.
5. Start a new chat and ask Claude to perform a multi-step task that the server’s skill covers. For example, ask it to prepare a store for a sale using Shopify tools and its skill guidance.
6. Watch for skill loading. Claude mentions or applies the skill only when the task matches.
7. If the server supports Elicitation, it may pause and present a form for confirmation before it spends money or deletes data.

In Claude Code the flow is similar. Add the MCP server with `claude mcp add`, confirm it appears in `/mcp`, then use `/skills` to list what the server published.

![Laptop screen showing lines of code in a development environment](https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&w=800&q=80)

## Use Tasks and Elicitation

Tasks let a server run longer operations while Claude continues the conversation. ZoomInfo uses this for deeper account research that previously required several separate prompts. Claude receives the result when the task finishes.

Elicitation adds a safety step. Supabase confirms costs before it creates a paid project. GitHub asks you to type the exact repository name before an agent deletes it. Railway pauses before destructive changes. These prompts appear as forms or links inside the chat so you stay in control.

Both features are generally available for Pro, Max, and Ultra plans and are rolling out to Team and Enterprise.

## Tips for better results

Write clear requests that match the skill’s purpose. “Update product prices for the holiday sale following our usual rules” works better than a vague “help with the store.”

Turn off unused connectors when you work on a focused task. This reduces the set of skills Claude considers and keeps responses tighter.

Review any action that involves spending, deletion, or external publication. Elicitation helps, but you still approve the final step.

Combine Skills over MCP with your own custom skills. Custom skills live in your account and can reference the tools an MCP server provides. See our earlier guide on [adding free textbooks to Gemini Notebook](/blog/add-free-textbooks-gemini-notebook/) for a different grounded-source workflow that pairs well with agent tools.

Watch a clear explanation of the November 24 update:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dLOhPqaE6RY"
    title="Skills over MCP: What's New and Who It's For"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits to know

Skills over MCP remains a public beta. Behavior can change as Anthropic and the MCP community refine the extension. File Uploads is not fully available yet.

Context savings depend on how many skills a server publishes and how precisely you phrase the request. Claude still loads the skill body when it decides the skill is relevant, so keep skill descriptions accurate if you build servers.

Server-supplied skills carry the usual prompt-injection considerations. Only connect servers you trust, and review outputs before you act on them.

## Conclusion

Skills over MCP turns a simple tool connection into a guided workflow. Claude receives the how-to at the moment it needs it, servers can run longer tasks, and sensitive steps wait for your confirmation. Start by enabling the feature on a supported plan, connect a marketplace server, and ask for a multi-step job that matches its skill.

The public beta launched November 24, 2026. Check the Claude Connectors marketplace for servers that already ship skills and watch for File Uploads as it rolls out.

## Sources

- Anthropic: MCP servers can now ship skills, run tasks, and more with Claude (November 24, 2026)
- Claude Help Center documentation on Skills and MCP
- Model Context Protocol extension specifications
