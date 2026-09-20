---
title: "How to Query UN System Data Commons with Natural Language and AI Agents"
description: "Use data.un.org for official UN statistics, then connect an AI agent through Data Commons MCP so answers stay grounded in sourced figures."
pubDate: 2026-09-20T14:30:00
tags: ["ai-tools", "tutorials", "developers"]
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
---

On 17 September 2026 the United Nations system opened **UN System Data Commons** at [data.un.org](https://data.un.org/). The site is an open-source, AI-ready knowledge graph built on [Data Commons](https://datacommons.org/) by Google. Instead of hunting agency-by-agency spreadsheets, you can ask a question in plain language, browse themes such as health or education, or let an AI agent pull the same official series through the [Model Context Protocol (MCP)](https://docs.datacommons.org/mcp).

This guide covers what launched, how to search the public site, and how developers can wire an agent to the hosted Data Commons MCP server using Google’s published steps. Treat every chart as a starting point. Google’s own launch post says you should still review the underlying sources before you cite a figure.

![Analyst reviewing interactive global statistics dashboards on dual monitors](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=675&q=80)

## What launched

UN agencies already publish high-integrity statistics on health, education, energy, poverty, and more. Those numbers used to live in separate portals with different formats and geographic codes. Connecting two topics — water access and school attendance, for example — often meant weeks of cleanup.

UN System Data Commons is meant to shrink that gap:

- Statistics from participating UN entities sit in one graph with shared metrics, timelines, and place boundaries.
- Natural-language search returns related series plus interactive visualizations.
- An Explore view filters by location or theme.
- A blog-style insights section publishes ready-to-read writeups, such as UNICEF-backed notes on child poverty.
- AI agents can fetch figures through MCP instead of scraping HTML.

TechCrunch, citing the UN briefing, reported that **26 UN entities** have committed to the platform and that data from **nearly 20** of them was available at launch. Google said the UN system aims to include **80% of UN system statistical datasets by 2027**. Google.org provided support to the UN Foundation to stand up the infrastructure. Prem Ramaswami, head of Data Commons at Google, wrote that the instance is intended for UN-governed operation over time.

The new site is the public front door. The older UNData-style browse experience is not deleted from institutional workflows overnight; this launch is a unified, AI-ready layer on top of official series.

## Search data.un.org without an agent

You do not need an API key to explore the website.

1. Open [data.un.org](https://data.un.org/).
2. Type a full question, not just a keyword. Official examples include:
   - How does access to clean water in rural areas affect school attendance?
   - How many people gained access to electricity in the last decade?
   - How has life expectancy changed across different regions of the world?
3. Open the result’s source line. Confirm the UN entity, the series name, the latest year, and the geographic unit (country, region, or other).
4. If you prefer filters over chat, use the **Explore** tab and narrow by place or theme (health, education, and similar groupings).
5. Read a published insight when you need a curated narrative rather than a raw chart.

Keep questions specific. “Africa health” is weaker than “What health data do you have for Africa?” or “Compare life expectancy and GDP growth for BRICS nations.” The second style matches how Data Commons documents its MCP sample queries.

![Close-up of a world map with highlighted country-level indicators](https://images.unsplash.com/photo-1524661132064-ba8753263890?auto=format&fit=crop&w=1200&h=675&q=80)

## Why MCP matters for this launch

Large language models guess. Data Commons MCP is Google’s way to let an agent **look up** a statistical variable instead of inventing one.

Google released a public MCP server for Data Commons in 2025 and later hosted it at `https://api.datacommons.org/mcp`. The UN launch uses that same open standard so an assistant can pull authoritative observations, keep provenance, and assemble tables, charts, or a draft memo.

What MCP is good at, according to Data Commons docs:

- Comparisons across countries or metrics
- Discovery (“what exists on this topic?”)
- Short generated reports grounded in returned observations

What it is not:

- A substitute for a statistician
- A license to publish a number without checking the year and definition
- Coverage of every UN table on day one

Google’s September 2026 post is explicit: even with grounded data, review the sources before you cite critical figures.

## Connect an AI agent to Data Commons MCP

These steps follow the [Use MCP](https://docs.datacommons.org/mcp/run_tools.html) page, last updated 17 September 2026. The hosted endpoint queries **datacommons.org**. Custom Data Commons instances, including specialized deployments, need a self-hosted MCP server.

### 1. Get a free API key

1. Go to [apikeys.datacommons.org](https://apikeys.datacommons.org).
2. Request a key for the `api.datacommons.org` domain.
3. Store the key in a password manager. Do not commit it to git.

### 2. Point Google Antigravity at the hosted server

1. Install [Google Antigravity](https://antigravity.google/download).
2. Edit `~/.gemini/config/mcp_config.json` and add:

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

3. Start the IDE or CLI as usual.
4. In the session, run `/mcp tools` and `/mcp resources` to confirm Data Commons is attached. Official docs note that the server already ships **agent skills** as resources, so you do not need a custom Data Commons prompt to start.

### 3. Try the sample ADK agent

If you want a local web UI instead of Antigravity:

1. Install [Git](https://git-scm.com/) and [uv](https://docs.astral.sh/uv/getting-started/installation/).
2. Clone the toolkit:

```bash
git clone https://github.com/datacommonsorg/agent-toolkit.git
cd agent-toolkit
```

3. Start the sample Agent Development Kit UI (ADK is pulled at runtime; you do not pre-install it):

```bash
uvx --from google-adk adk web ./packages/datacommons-mcp/examples/sample_agents/
```

4. Open the printed address, usually `http://127.0.0.1:8000/`, and type a query.

Command-line alternative:

```bash
uvx --from google-adk adk run ./packages/datacommons-mcp/examples/sample_agents/basic_agent
```

You can change the model in `packages/datacommons-mcp/examples/sample_agents/basic_agent/agent.py` (`AGENT_MODEL`) and the behavior prompt in `instructions.py`. Restart the agent after edits.

Gemini CLI users can attach the same hosted URL in `~/.gemini/settings.json`. Google also published a Gemini CLI extension and a hosted Cloud path so you do not have to run Python locally for the **base** datacommons.org graph.

## Prompts that work

Use questions that force a comparison or a scoped inventory:

- What health data do you have for Africa?
- What data do you have on water quality in Zimbabwe?
- Compare the life expectancy, economic inequality, and GDP growth for BRICS nations.
- Generate a concise report on income vs diabetes in US counties.

Then add a human checklist:

- Which agency published the series?
- What is the latest year in the observation?
- Is the unit a rate, a count, or an index?
- Does the place name match the definition (country vs region vs urban/rural split)?

If the agent cannot name a source, do not paste the number into a briefing.

![Researcher writing notes beside printed charts and a laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=675&q=80)

## A practical 20-minute workflow

1. Ask data.un.org the same question you will later give the agent.
2. Screenshot or export the official visualization and note the source line.
3. Ask the MCP-connected agent the identical question.
4. Compare years, units, and places. If they diverge, trust the website and open the original UN publication.
5. Only then let the agent draft a paragraph or a chart caption.

That loop is the product. The UN graph reduces join work. MCP reduces copy-paste. Neither removes editorial judgment.

Google showed agents assembling multi-indicator views (for example combining health financing or disease-related series into a short visual). Treat those demos as workflow illustrations, not as peer-reviewed papers.

## Watch how Data Commons frames public data

Google’s overview of Data Commons is still the fastest way to see why a knowledge graph plus natural-language questions is different from a pile of CSVs.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/O6iVsS-RDYI" title="Data Commons, an initiative from Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

A shorter case study shows a custom Data Commons used by ONE.org for poverty and development work — the same pattern the UN system is now applying at larger scale.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/N7YpWLmL6JU" title="Unlocking the power of data with Data Commons — ONE.org and Google" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Limits to keep in mind

- **Coverage is incomplete.** Committed agencies are not the same as fully loaded tables. Plan for missing years and missing countries.
- **Hosted MCP is the base graph.** Official docs say the managed server at `api.datacommons.org/mcp` queries datacommons.org. A private or custom instance needs your own server.
- **Provenance is the feature.** If a generated infographic drops the source footnote, add it back before you share.
- **Definitions drift.** “Access to electricity” is not a single measurement across every agency and decade. Read the variable description.
- **Access rules.** The website is public. Agent access still needs the free API key and whatever account rules your chosen client (Antigravity, Gemini CLI, ADK) imposes.

## Conclusion

UN System Data Commons is useful on day one if you treat it as a **lookup layer**, not as an oracle. Search data.un.org in full sentences. Confirm the agency and the year. When you need the same lookup inside an assistant, attach Data Commons MCP with a key and the hosted URL, then force the model to show its sources.

The 2027 coverage target is a roadmap, not a guarantee that every series you need is already loaded. Start with one question you already know the answer to, and only widen the prompt after the agent and the website agree.

## Sources

- [Making global data easier to explore](https://blog.google/innovation-and-ai/technology/ai/google-un-data-commons-platform/) — Google Keyword, 17 September 2026
- [UN System Data Commons](https://data.un.org/)
- [Data Commons by Google](https://datacommons.org/)
- [Query data interactively with an AI agent (MCP)](https://docs.datacommons.org/mcp)
- [Use MCP](https://docs.datacommons.org/mcp/run_tools.html) — Data Commons docs, updated 17 September 2026
- [Introducing the Data Commons MCP Server](https://developers.googleblog.com/en/datacommonsmcp/) — Google Developers Blog
- [Data Commons Hosted MCP](https://developers.googleblog.com/access-public-data-insights-faster-data-commons-mcp-is-now-hosted-on-google-cloud/)
- [UN turns to Google to make its global data ready for AI agents](https://techcrunch.com/2026/09/17/un-turns-to-google-to-make-its-global-data-ready-for-ai-agents/) — TechCrunch
- [Data Commons API keys](https://apikeys.datacommons.org)
