---
title: "How to Use ChatGPT Work Data Plugin for Dashboards"
description: "Install the ChatGPT Work Data plugin, connect warehouse sources, and build shareable dashboards with official OpenAI steps."
pubDate: 2026-09-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "productivity", "tutorials", "how-to"]
noindex: false
---

OpenAI launched a Data agent inside ChatGPT Work on 10 September 2026. The goal is simple: ask a business question in plain language and get analysis grounded in the warehouse your company already trusts.

You install a plugin named **Data**, connect approved sources, then start a thread with `@Data`. The agent can explain a metric change, build an interactive dashboard, and hand findings to Slack or email after you approve the send.

This guide follows OpenAI’s product post and Help Center article. Pair it with [How to Connect Multiple ChatGPT Plugin Accounts](/blog/chatgpt-plugins-multiple-accounts/) if you also manage more than one login on other plugins.

## What the Data plugin actually does

ChatGPT Work is the agent mode for longer tasks and finished files. Codex stays the software-development surface. The Data plugin sits in both Work and Codex and is listed in the Plugins directory as **Data**.

OpenAI says the agent can use connected company data and business context to analyze what changed, explain findings, and create interactive dashboards and reports. You refine the same conversation instead of opening a new BI project for every follow-up.

It is not a replacement for warehouse permissions. Queries use the connected account’s existing table, row, and column access. Admins choose which connections exist and which roles can use them.



![Analytics charts on a laptop used for business reporting](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## Sources, context, and BI tools OpenAI lists

The 10 September announcement lists approved data sources that include Amazon Redshift, Datadog, Google BigQuery, ClickHouse, Databricks, MongoDB, Snowflake, and more. Files and documents from Google Drive and SharePoint can join the analysis when those connections are available.

Metric definitions can come from semantic layers and trusted sources such as Databricks Genie Ontology, dbt, GitHub, Snowflake Horizon, and existing BI dashboards. That context is how the agent is supposed to use the same “weekly active users” definition your data team already published.

OpenAI also documents dashboard work inside Omni, Oracle BI, Power BI, Sigma, Tableau, and ThoughtSpot. You can ask for a new view in those tools in the same thread.

Help Center wording is slightly narrower on the warehouse list (Amazon Redshift, ClickHouse, Databricks, Google BigQuery, MongoDB, and Snowflake). Treat the product page as the broader partner list and your workspace plugin directory as the source of truth for what *your* tenant enabled.

## Before you install

Confirm four things.

1. You can open ChatGPT Work (web, desktop, or the desktop Codex app).
2. Your plan and workspace allow plugins. Business and Enterprise tenants often require an admin to enable Data and each warehouse connector.
3. You already have a login that can query the tables you care about in the source system.
4. You know the metric, time window, and comparison you want. Vague prompts waste a first pass.

Admins install or allow plugins under **Workspace settings > Plugins**. They also enable source plugins such as Databricks or Snowflake and decide who may use them.

Do not paste warehouse passwords into chat. Connection happens through the plugin’s account-linking flow.

## Step-by-step: install Data and ask the first question

These steps match OpenAI Help Center: *Using the Data plugin in ChatGPT Work and Codex*.

1. Open **Plugins** in ChatGPT Desktop, or the plugin directory in ChatGPT Web.
2. Find and select **Data**.
3. If it is not already installed, select **Install plugin**.
4. Complete any required account-connection or setup steps for the data sources you want.
5. Start a conversation with **@Data** and describe the business question.

Include the source, metric, time period, and comparison when you know them. OpenAI’s own example:

“@Data Compare revenue this quarter with last quarter and explain the largest changes.”

Another official starter from the product post:

“@Data Diagnose why weekly active users changed last week. Identify likely drivers, compare against prior periods, and recommend the next checks.”

Stay in the same thread for follow-ups. Ask Data to show evidence, metric definitions, and the query or report path behind a number when a result disagrees with a known dashboard.



![Team reviewing charts and notes during a planning session](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)



## Turn the answer into a dashboard

After the first explanation lands, ask Data to turn the analysis into an interactive dashboard. Describe the metrics, breakdowns, and comparisons you want on the page.

You can request chart or layout changes in follow-up messages. OpenAI also says you can provide brand guidelines so the dashboard matches internal look and feel.

Teams can edit, share, and refresh the dashboard. If your workspace already standardizes on Tableau, Power BI, Sigma, or ThoughtSpot, tell Data to publish or adjust a view there instead of inventing a one-off canvas.

Ask for next steps and owners only after you accept the numbers. The agent can share findings through Slack or email and run other approved actions through connected tools. On web and mobile, review each action on screen. Spoken approval is not supported.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VMgEQ7ym9WU"
    title="Meet the Data Agent in ChatGPT Work"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Admin and permission rules that block first runs

If Data is missing from the directory, an admin has not made the plugin available. Installing Data does not by itself connect Snowflake or BigQuery. Those are separate source plugins that also need approval and a signed-in account.

Queries honor the connected user’s existing restrictions. If your warehouse role cannot read `finance.revenue`, `@Data` cannot invent access. Row- and column-level policies still apply.

Plugins keep the app access, data permissions, and action restrictions already configured for the workspace. For how plugins package apps and skills, see [ChatGPT Skills for reusable workflows](/blog/chatgpt-skills-reusable-workflows/).

Business, Enterprise, and Edu content is not used to train OpenAI models by default. Personal plans still follow the **Improve the model for everyone** control in Data settings.

## Prompts that stay close to official examples

Use these as templates, then swap in your metric names.

- “@Data Design a KPI framework for this new product area with primary metrics, drivers, guardrails, targets, and data validation needs.”
- “@Data Build a dashboard of weekly active users, activation rate, and seven-day retention for the last 12 weeks, broken down by plan.”
- “@Data Compare this dashboard to the official finance report and list every definition or filter that differs.”
- “@Data Draft a Slack update for the growth channel that summarizes the finding and tags the owners. Do not send until I approve.”

Name the warehouse or BI tool when more than one source is connected. “Use the Snowflake finance mart, not the BigQuery product events table.”

## Practical tips

Start with one well-defined metric your team already reports. A first win on weekly active users beats a 40-chart “company overview.”

Ask Data to state assumptions and data freshness in every summary. Stale extracts look like model errors.

Keep sensitive exports inside approved tools. Prefer a shared Tableau or Power BI view over downloading a CSV into a personal drive.

If two people get different answers, compare metric definitions before you blame the model. The product design assumes shared semantic context from dbt, Genie, Horizon, or a BI semantic layer.

On desktop, install from **Plugins**. On web, use the plugin directory. Labels can still say **Apps** on some accounts after the 9 July 2026 directory migration.

## Limits to expect

Availability depends on plan, workspace settings, and which source plugins an admin enabled. There is no public claim that every ChatGPT consumer plan includes warehouse connectors.

The agent cannot see data your user cannot see. It also cannot fix a broken semantic layer. Garbage definitions in dbt still produce confident but wrong charts.

Action plugins that post to Slack or email wait for on-screen approval on web and mobile. Do not treat a drafted message as sent.

## Conclusion

The Data plugin is useful when your warehouse, metric definitions, and permissions already exist. Install **Data**, connect the source your analysts use, then ask `@Data` a question that names the metric, window, and comparison.

Build the dashboard in the same thread. Check the numbers against an official report before you share. Keep revoke access one settings page away when a teammate leaves or a connector should be retired.

## Sources

- [Now everyone can put data to work (OpenAI, 10 September 2026)](https://openai.com/index/put-data-to-work/)
- [Using the Data plugin in ChatGPT Work and Codex](https://help.openai.com/articles/20001518)
- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Plugins in ChatGPT and Codex](https://help.openai.com/articles/20001256)
- [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [Meet the Data Agent in ChatGPT Work (OpenAI on YouTube)](https://www.youtube.com/watch?v=VMgEQ7ym9WU)
