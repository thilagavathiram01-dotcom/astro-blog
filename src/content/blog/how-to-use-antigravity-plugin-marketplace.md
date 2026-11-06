---
title: "How to Use the Antigravity Plugin Marketplace"
description: "Step-by-step guide to browse, install, and use plugins in the Google Antigravity Plugin Marketplace for AI agents, MCP servers, skills, and more."
pubDate: 2026-11-06T10:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

Google Antigravity launched its Plugin Marketplace on October 29, 2026. The marketplace gives developers a single place to find and install verified bundles of skills, MCP servers, rules, hooks, and custom agents. These plugins connect your AI agent to tools your team already uses, without manual configuration of endpoints or environment variables for every repository.

Before the marketplace, connecting an agent to external systems required editing config files and managing credentials across projects. Now you can browse categories, install in one click, and have the capabilities available in both the Antigravity App and CLI. This guide follows the official Antigravity documentation and launch post.

If you are setting up Gemini models inside Antigravity, see our guide to [using Gemini 4 Argon in Google Antigravity](/blog/how-to-use-gemini-4-argon-in-google-antigravity/).

## What a plugin contains

An Antigravity plugin is a versioned bundle defined by a plugin.json manifest. It can include up to five components that install and update together:

- Skills: Modular packages of domain knowledge and multi-step procedures in a SKILL.md file. Antigravity loads only the name and short description at startup, then pulls the full instructions on demand.
- MCP servers: Configurations that connect the agent to external APIs and tools over remote HTTP or local stdio. Plugins can prompt for API tokens or handle OAuth.
- Rules: Markdown files that set coding conventions, API constraints, and domain standards. They stay active while the plugin is enabled.
- Hooks: Lifecycle scripts that run at points such as SessionStart, PreToolUse, or PostToolUse. They can gate tool calls or inject context.
- Custom agents: Specialized personas with tailored system prompts and tool allowlists. The main agent can spawn them for focused tasks.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

Launch partners at the time of the marketplace release included Atlassian (Jira, Confluence, Bitbucket), Canva, CrowdStrike, Databricks, Datadog, Dropbox, Figma, monday.com, Ping Identity, SentinelOne, Stripe, and Unity.

## Browse and install plugins in the Antigravity App

Open the Antigravity App. In the left sidebar, click the Customizations tab (located below Automations). Switch to the Marketplace tab to see available plugins.

Click any plugin card to inspect its details. The detail view shows starter prompts, an Overview, and tabs for Skills, MCP, Agents, and Rules. Click Add to install, or click the plus button next to a plugin in the list to install without opening details.

After installation, some plugins require credentials. If a plugin needs an API key or workspace URL, toggling it on in Customizations > Installed opens a setup dialog. For OAuth plugins, Antigravity opens your browser to complete sign-in when the MCP server connects.

Plugins installed in the App automatically sync and appear in the Antigravity CLI’s Installed tab.

## Install and manage plugins from the CLI

You can also work from the terminal. To install a marketplace plugin, run:

```
agy plugin install <plugin-name>
```

To see installed plugins:

```
agy plugin list
```

To validate a local plugin before sharing it:

```
agy plugin validate --strict ./<plugin-name>
```

Then install it locally with:

```
agy plugin install ./<plugin-name>
```

Use the slash command /plugin in the interactive CLI to open the plugin manager and switch to the Discover tab.

## Use installed plugins in your workflow

Once a plugin is installed and enabled, its capabilities become available automatically.

Starter prompts appear as chips in the plugin detail view under Customizations > Installed. Click one to start a guided task.

Skills load on demand when your prompt matches, or you can invoke one explicitly with /skill-name.

MCP tools are namespaced as <plugin-name>_<server-name>. Ask the agent to query the connected service, such as looking up a Jira issue or generating a design in Canva.

Custom agents can be selected as the primary session agent or spawned in the background. In the CLI, use /agents or agy --agent <agent-name>.

Rules and hooks run in the background while the plugin is enabled. They enforce conventions or run checks without extra prompts.

![Team collaborating around computers in a modern office](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for effective plugin use

Start with one or two plugins that match your current workflow. Installing many at once can increase context size even with progressive disclosure.

Check the plugin detail page for suggested prompts before writing your own. They often demonstrate the intended sequence of tool calls.

For plugins that require credentials, generate tokens with the least privilege needed. Antigravity stores them for the plugin lifecycle.

If a plugin provides both skills and MCP servers, prefer natural language requests first. The agent loads the relevant skill automatically when it detects a match.

You can enable or disable plugins from the Installed tab without uninstalling them. This is useful when you want to test one integration at a time.

## Build and share your own plugins

To create a plugin for your team or the community, start with a plugin.json manifest. Include skills, MCP configs, rules, or agents as needed. Validate it with agy plugin validate --strict, then install locally to test.

For the public marketplace, complete the required fields (name, displayName, description, version, logo, suggestedPrompts, author) and submit through the partner interest form after validation.

Google also maintains curated “Build with Google” plugins for Firebase, Android, Flutter, Chrome DevTools, BigQuery, and more.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/b2Vgj6h1DSU"
    title="Google Antigravity Plugin Marketplace: I Built a 3D Game Without Opening Unity"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Antigravity Plugin Marketplace reduces the setup work required to give an AI agent access to the systems your team already uses. You browse categories, install verified bundles, supply credentials once, and then ask the agent to act on Jira issues, Figma files, Datadog logs, or Stripe data from inside the same session.

Start with the Customizations panel or the agy plugin command, install one plugin that matches a frequent task, and test it with a suggested prompt. Official documentation is available at antigravity.google/docs/marketplace and the launch post on the Antigravity blog.

## Sources

- Google Antigravity Blog: Plugin Marketplace in Antigravity (October 29, 2026)
- Antigravity Docs: Marketplace
- Antigravity Docs: Plugins
- Antigravity Docs: Build plugins
