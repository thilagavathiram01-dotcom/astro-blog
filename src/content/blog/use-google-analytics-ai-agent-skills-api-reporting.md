---
title: "How to Use Google Analytics AI Agent Skills for API Reporting"
description: "Install Google Analytics AI agent skills to build Data API reports and Admin API integrations with your AI coding agent using progressive disclosure."
pubDate: 2026-11-12T12:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "ai-tools", "tutorials"]
noindex: false
---

Google released dedicated AI agent skills for the Google Analytics Data API and Admin API. These portable modules give coding agents exact instructions for enabling APIs, configuring credentials, and writing client library code without loading full documentation into every prompt.

The skills follow the open Agent Skills standard. They work with Antigravity, Claude Code, Codex, Cursor, and other compatible agents. Progressive disclosure keeps token use low: the agent sees only a short description until your request matches a skill, then loads the full guidance.

This guide shows how to install the skills, run a basic reporting query, and manage properties through the Admin API. It pairs well with Firebase agent skills if your app already logs events. See our guide on [setting up Firebase agent skills for Google Analytics](/blog/how-to-set-up-firebase-agent-skills-for-google-analytics/).

## Prerequisites

You need an AI coding agent that supports the Agent Skills standard. Install Node.js so you can run the `npx` installer. Create or select a Google Cloud project that has access to a Google Analytics property.

Enable the required APIs in the project if they are not already active. The skills guide your agent through the gcloud CLI steps for this.

## Install the skills

Open a terminal in your project directory. Run the installer for your agent.

For most agents:

```
npx skills add google/skills/skills/analytics
```

For a specific agent, add the flag. Examples:

- Antigravity: `npx skills add google/skills/skills/analytics --agent=antigravity`
- Claude Code: `npx skills add google/skills/skills/analytics --agent=claude-code`
- Codex: `npx skills add google/skills/skills/analytics --agent=codex`
- Cursor: `npx skills add google/skills/skills/analytics --agent=cursor`

The installer places the skill files so your agent can discover them. If you already have skills installed, update them with:

```
npx skills update --all
```

![Analytics dashboard on a laptop screen](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Available skills

Two skills ship in the suite.

The `google-analytics-data-api-basics` skill enables the Data API (`analyticsdata.googleapis.com`). It configures Application Default Credentials with the `analytics.readonly` scope and installs official v1beta client libraries for Python, Java, PHP, Node.js, Go, .NET, and Ruby. It walks the agent through `runReport` queries and field compatibility checks via `getMetadata` and `checkCompatibility`.

The `google-analytics-admin-api-basics` skill enables the Admin API (`analyticsadmin.googleapis.com`). It sets up credentials with `analytics.readonly` and `analytics.edit` scopes. It covers listing account summaries, managing properties, data streams, custom dimensions, custom metrics, key events, Measurement Protocol secrets, and product links. It supports both v1beta and v1alpha endpoints.

## Build a simple Data API report

Open your agent and describe the task in plain language. Example prompt:

"Enable the Google Analytics Data API in my project and write a Python script that queries the activeUsers and sessions metrics by the city and date dimensions."

The agent loads the data-api skill. It runs the gcloud commands to enable the API, creates or refreshes Application Default Credentials, installs the Python client library, and writes the script.

The generated code uses the official client. It authenticates with ADC, builds a `RunReportRequest`, and prints the results. You can extend the prompt to add date ranges, filters, or additional metrics.

To check compatibility before querying:

"Check whether the itemName dimension is compatible with the activeUsers and totalRevenue metrics for my Google Analytics property by using the checkCompatibility method."

The skill supplies the exact method calls and response handling.

## Manage properties with the Admin API

For configuration tasks, prompt the agent with the Admin skill in mind:

"List all accessible Google Analytics account summaries and child properties in Node.js by using the Google Analytics Admin API."

The agent enables the Admin API, sets the correct scopes, installs the Node.js client, and writes the listing code. It follows recommended version selection: v1beta for stability and v1alpha for early features.

Other useful prompts include:

- Configure custom dimensions, data streams, and Measurement Protocol secrets for my property.
- Create a new data stream and link it to an existing web property.

The skill includes reference files with language-specific samples so the generated code matches official patterns.

![Developer coding on a laptop with analytics charts visible](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Pair with the Google Analytics MCP server

Skills teach the agent how to write code. The Google Analytics MCP server lets the agent query live data directly.

Install the MCP server from the official GitHub repository. Once connected, the agent can list account summaries, inspect properties, and run reports without writing separate scripts. Skills still handle the one-time setup of APIs and credentials.

Use both together for the fastest path from prompt to working integration.

## Tips for reliable results

- Keep the skills updated. Run `npx skills update --all` after new releases.
- Start prompts with the specific task so the agent selects the correct skill automatically. You can also invoke a skill manually by typing `/` and choosing the name.
- Verify credentials with a small test query before scaling to production reports.
- Use v1beta endpoints unless you need a feature only available in v1alpha.
- Review generated code against the official client library samples linked in the skill references.

## Conclusion

Google Analytics AI agent skills cut the time spent searching documentation and reduce token costs through progressive disclosure. Install the suite once, then describe the report or property change you need. The agent handles API enablement, authentication, and client library code.

For mobile app event tracking, combine this approach with Firebase agent skills. Official documentation and the skills repository provide the full reference set for ongoing work.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8V_I4jsXXyo"
    title="Agent Skills for Firebase (using Gemini CLI)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Google Analytics AI agent skills](https://developers.google.com/analytics/devguides/agent-skills) — Google for Developers
- [Google Analytics MCP server](https://developers.google.com/analytics/devguides/MCP) — Google for Developers
- [google/skills repository](https://github.com/google/skills) — GitHub
