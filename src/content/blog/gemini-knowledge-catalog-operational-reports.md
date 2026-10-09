---
title: "How to Get Gemini Operational Reports from BigQuery"
description: "Ask Gemini for operational reports grounded in Knowledge Catalog and BigQuery, then save the query so later runs skip token costs."
pubDate: 2026-10-09T08:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "how-to", "productivity"]
noindex: false
---

A finance question used to wait on a ticket to the data team. On October 8, 2026, Google Cloud said the new Gemini agent can turn a plain-language question into an operational report, then save the query so later runs do not spend tokens.

Thomas Kurian, CEO of Google Cloud, described those data skills in the Gemini at Work 2026 post. Engineers can ask for an outcome and get PySpark, a notebook, and a trained model. Business users can ask for a report grounded in the Knowledge Catalog and BigQuery. The same post is the source for the steps below. Availability still depends on your Gemini Enterprise and Cloud project.

If the work starts in email rather than a warehouse, the [inline Gmail and Docs handoff](/blog/gemini-agent-inline-gmail-docs-chat/) is the closer fit. This guide is for questions that need tables, not a slide drafted from a thread.

## What the data skills actually do

Google splits the October 8 data update into two audiences.

Data and ML engineers get machine learning skills and tools that sit behind the people who already own pipelines. You describe the outcome. Gemini generates PySpark, opens notebooks so you can edit and test the code, trains models, and troubleshoots pipeline issues on its own. You still review the notebook before anything lands in production.

Business users get operational reporting skills tied to BigQuery and the Knowledge Catalog. You ask in plain language. Gemini builds the query and can save it. Google says a saved report can then run on demand without token costs, so the answer stays the same each time instead of being regenerated.

Three Cloud pieces keep those answers tied to company data. The Knowledge Catalog maps business definitions once, so agents share terms such as net margin or addressable market. Smart Storage enriches unstructured files in place, including PDFs, images, scans, and audio, and writes context back onto the object. Borderless Lakehouse lets Gemini query Amazon S3 and Azure Data Lake with no variable egress fees, read Salesforce Data 360, SAP, and Workday without copying data, and federate Apache Iceberg tables across Databricks Unity, Snowflake Horizon, and AWS Glue.

![Analytics charts on a laptop screen in a dark workspace](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Register the data before you ask

Kurian’s post gives a clear order. Register data sets you discover in the lakehouse with the Knowledge Catalog, then assign Gemini the analysis. Skipping the catalog means the agent has to guess what a metric name means.

**1. Confirm the project and the agent.** The reporting skills sit on the Gemini agent announced October 8, not on a personal Gemini chat with no warehouse access. Ask your Cloud admin which project owns BigQuery and the catalog.

**2. Register the data sets.** Use the sets you already find in the lakehouse. Google says metrics can live in Databricks, dbt, LookML, or SAP, and Gemini reads them where they sit. Do not copy a warehouse into a side folder just to make a prompt shorter.

**3. Map the terms people actually say.** The catalog is where “net margin” and “addressable market” get a definition. If two teams use the same label for different formulas, fix that before the first report. Bloomberg Media’s CTO, William Anderson, said grounding AI in trusted institutional context is what gives confidence in each insight. The company reported a 63% lift in SQL query accuracy during initial development after grounding data agents in the catalog. That result is theirs, not a default for your first query.

**4. Decide who asks.** An engineer outcome (“train a model on the last quarter of returns and show the notebook”) uses the ML skills. A business outcome (“weekly returns by region, using the catalog definition of a return”) uses the reporting skills. Mixing both in one prompt makes the review harder.

## Ask for the report

Google’s run path is specific. After the catalog is in place, Gemini identifies the data sets it needs, generates SQL, Spark, or Python, and runs that code on Managed Spark with Lightning Engine or in BigQuery. It can also build charts and dashboards in the tools analysts already use.

**1. Name the metric and the grain.** “Net margin by product line for the last closed month, using the catalog definition” is checkable. “How are we doing?” is not.

**2. Name the system of record.** If the figure lives in BigQuery, say so. If it lives in LookML or SAP, say that too. The post says Gemini reads those definitions in place. It does not say it will invent a join you have not registered.

**3. Ask it to save the query.** The token-free rerun only applies once the query is saved. Google’s wording is that teams can run saved reports on demand without incurring token costs, with consistent, verified answers. A one-off chat answer is not that saved report.

**4. Open the generated SQL or notebook.** For engineer jobs, edit and test in the notebook Gemini provides before you accept a training run. For business reports, read the SQL or the saved query text against the catalog definition. A wrong join is still a wrong number after the chart looks finished.

**5. Put the chart where the team already looks.** Google says Gemini can generate charts and dashboards in existing analyst tools. Leave the file there instead of pasting a screenshot into chat as the only copy.

![Printed charts and a notebook on a desk beside a laptop](https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80)

## Unstructured files and outside lakes

Google says 90% of enterprise data is unstructured and often stays unread. Smart Storage is the October 8 answer for that pile. It enriches objects in place and writes context back onto the object. The intelligence stays with the bytes and inherits the security posture you already have. That is not a license to upload customer scans into a personal drive.

Borderless Lakehouse is the path when the bytes are not in Google Cloud. The post lists Amazon S3 and Azure Data Lake with no variable egress fees, direct reads from Salesforce Data 360, SAP, and Workday without a copy, and Iceberg federation across Databricks Unity, Snowflake Horizon, and AWS Glue. Register those sets in the catalog before you ask Gemini to join them to a BigQuery table.

Customer notes in the same post show the range, not a template. Deutsche Telekom used BigQuery, Cloud Storage, and the Knowledge Catalog to replace a lakehouse spread across more than 40 legacy on-premise systems, and said teams now move ten times faster while meeting European data rules. Etsy moved three petabytes to a unified lakehouse and reported critical joins up to 60% faster with BigQuery and Iceberg. Snap connected its Prism agent to storage archives and cut a diagnostic path from 30 minutes to 30 seconds. Quote those only as their deployments.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cfeBv2-94pc"
    title="Gemini at Work Opening Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google Cloud’s Gemini at Work opening keynote is the session Kurian’s October 8 post is adapted from. Use it for how Google frames the agent, then use the Cloud blog for the catalog, saved-query, and lakehouse details.

## Cost, identity, and what not to automate

A saved report is the cost control Google calls out for this workflow. The first run spends tokens while Gemini writes and checks the query. Later runs of that saved report are supposed to skip token charges. That is separate from Smart Routing, which sends other agent jobs to a smaller model when the large one is unnecessary.

Set a project spend cap before the second experiment. Google says you can put a hard limit on a project’s AI spend in Cloud Billing, and Gemini pauses that project’s agent if the cap trips. Resume is a click in the console. The [spend cap setup](/blog/set-spend-caps-gemini-cloud-agent/) covers the billing side if the report job shares a project with other agents.

Every agent gets its own identity, with least-privilege permissions, and actions go to an audit trail under that identity. Data questions should use a project role that can read the registered sets, not a role that can rewrite them. Agent Gateway is the control for traffic the agent should never open. A policy such as blocking Need to Know documents applies across agents once an admin writes it.

Do not point the first report at an unregistered spreadsheet export. Do not treat a chart as verified because the agent saved the query. Saved means the query text is stable. It does not mean the source table was correct.

## Bottom line

Register the lakehouse sets in the Knowledge Catalog, define the metric in words the business already uses, and ask for a saved BigQuery or Spark query you can rerun. Review the SQL or notebook before anyone treats the chart as the number. Keep inbox handoffs on the [Workspace agent path](/blog/gemini-agent-inline-gmail-docs-chat/), and cap the project before the job runs overnight.

## Sources

- Thomas Kurian, [Welcome to Gemini at Work 2026: Introducing the Gemini agent](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026), Google Cloud Blog, October 8, 2026
- [Google Cloud introduces the Gemini agent](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/), blog.google, October 8, 2026
- [Gemini at Work Opening Keynote](https://www.youtube.com/watch?v=cfeBv2-94pc), Google Cloud
