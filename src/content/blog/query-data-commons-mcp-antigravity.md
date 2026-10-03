---
title: "How to Query Data Commons with MCP in Antigravity"
description: "Connect the hosted Data Commons MCP server in Google Antigravity and ask agents for public statistics with an API key."
pubDate: 2026-10-03T17:30:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "google", "ai"]
noindex: false
---

Public statistics are useful only if an agent can find the right series and cite the source. Google's Data Commons team now ships a hosted Model Context Protocol server so agents can search indicators and pull observations instead of guessing numbers.

This guide shows how to connect that server in Google Antigravity, confirm the tools loaded, and ask questions that match the tools the server actually exposes. The steps come from the Data Commons MCP docs, last updated September 22, 2026.

If you want the policy context for the UN System Data Commons launch, read [how UN statistics became AI-ready](/blog/un-system-data-commons-ai-agents/). This article stays on the developer setup.

## What the hosted server can do

The managed endpoint is `https://api.datacommons.org/mcp`. By default it returns data from datacommons.org, the public knowledge graph. A custom Data Commons instance needs a self-hosted server; the hosted URL will not point at your private graph.

The docs list six tools:

- `search_indicators` finds variables and topics for a place, such as health data in Egypt.
- `search_child_indicators` looks at contained places, such as census series for U.S. states.
- `get_variable_metadata` returns sources, dates, and other detail on a candidate indicator.
- `get_observations` fetches a time series for a variable and place.
- `get_child_observations` compares contained places, such as life expectancy across South American countries.
- `get_multi_entity_observations` covers directional links, such as exports from one place to another.

The server also exposes skills as MCP resources. Those skills are playbooks for single-place queries, sub-region queries, and multi-place flows. You do not need to paste Data Commons-specific instructions into the agent.

Unsupported today: non-geographical custom entities, events, free graph exploration, and data already formatted for charts. The docs also warn that agents can still make mistakes, so check the figures against the cited source.

![Analyst reviewing charts on a laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Get a Data Commons API key

Every client in the official guide needs a free key for the `api.datacommons.org` domain.

1. Open [apikeys.datacommons.org](https://apikeys.datacommons.org).
2. Request a key for the api.datacommons.org domain.
3. Store the key outside the repo. Do not commit it.

Antigravity reads the key from a header in your local MCP config. Treat that file like any other credential file.

## Connect Antigravity to the hosted server

Install Antigravity from [antigravity.google/download](https://antigravity.google/download) if it is not already on the machine. The docs cover both the IDE and the CLI.

Open `~/.gemini/config/mcp_config.json` in the IDE or a text editor. Add the Data Commons server next to any other MCP servers you already use:

```json
{
  "mcpServers": {
    "datacommons-mcp": {
      "serverUrl": "https://api.datacommons.org/mcp",
      "headers": {
        "X-API-Key": "YOUR_DATA_COMMONS_API_KEY"
      }
    }
  }
}
```

Replace the placeholder with your key. If the file already has an `mcpServers` object, add only the `datacommons-mcp` block so you do not wipe other servers.

Restart the IDE or CLI so it reloads the config. Then check discovery:

- `/mcp tools` should list the Data Commons tools.
- `/mcp resources` should list the skill resources.

If the tools do not appear, confirm the JSON is valid, the header name is `X-API-Key`, and the URL has no trailing path beyond `/mcp`.

## Ask questions the tools can answer

The docs say the tools work best for comparisons and for exploring what data exists on a topic. Sample prompts from the same page:

- What health data do you have for Africa?
- What data do you have on water quality in Zimbabwe?
- Compare the life expectancy, economic inequality, and GDP growth for BRICS nations.
- Generate a concise report on income vs diabetes in US counties.

Start with a discovery question, then a fetch. A first prompt such as "What census data do you have for Canada?" lets the agent call `search_indicators` before it requests observations. A follow-up such as "List the population of Canada since 1964" maps to `get_observations`.

Ask for sources in the same thread. `get_variable_metadata` is the tool that returns source and date coverage. If the reply has a number and no source, ask which indicator and publisher it used.

![Team collaborating around a shared screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Optional: run the sample ADK agent

Antigravity is the shortest path. The same docs also ship a sample agent based on the Agent Development Kit if you want a local web UI.

You need Git and the `uv` package manager. You do not install the ADK yourself. The run command downloads dependencies at start.

```bash
git clone https://github.com/datacommonsorg/agent-toolkit.git
cd agent-toolkit
uvx --from google-adk adk web ./packages/datacommons-mcp/examples/sample_agents/
```

Open the local URL printed in the terminal, often `http://127.0.0.1:8000/`, and type the same style of query. For a terminal-only session:

```bash
uvx --from google-adk adk run ./packages/datacommons-mcp/examples/sample_agents/basic_agent
```

To change the model, edit `AGENT_MODEL` in `packages/datacommons-mcp/examples/sample_agents/basic_agent/agent.py`. Behavior lives in `AGENT_INSTRUCTIONS` in `instructions.py`. Restart the agent after either edit. The docs say you still do not need custom Data Commons instructions, because the skills arrive as server resources.

## Tips before you rely on a figure

Keep the API key out of screenshots and pull requests. A local `mcp_config.json` is enough for Antigravity.

Prefer hosted MCP for public datacommons.org queries. Switch to a self-hosted server only when you need a Custom Data Commons instance. The self-hosted options in the docs are a Python package, a Docker image, and the Custom Data Commons image on Cloud Run.

Do not expect chart-ready output. The current server does not return data formatted for graphic visualizations. Export the table and chart it in your own tool.

Skip event queries and custom non-geographic entities. Those are listed as unsupported.

Cross-check one observation against the publisher named in the metadata before you paste a number into a report. The Data Commons disclaimer is explicit: AI applications using the MCP server can make mistakes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/W2NZnVVgmTk"
    title="Demo: DataGemma: Grounding LLMs with Data Commons data"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

A free Data Commons API key, one block in `~/.gemini/config/mcp_config.json`, and a restart are enough to point Antigravity at the hosted MCP server. From there, discovery tools and observation tools let an agent search public statistics and pull time series, while you still verify the source.

Use the sample ADK agent when you want a local UI or a model you can edit. Use a self-hosted server only when the public graph is not the dataset you need.

## Sources

- Data Commons, "Query data interactively with an AI agent," docs.datacommons.org/mcp, updated September 22, 2026.
- Data Commons, "Use MCP," docs.datacommons.org/mcp/run_tools.html, updated September 22, 2026.
- Google, "Making global data easier to explore," blog.google, September 17, 2026.
- Google for Developers, "Demo: DataGemma: Grounding LLMs with Data Commons data," YouTube, October 18, 2024.
