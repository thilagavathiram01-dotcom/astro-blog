---
title: "How to Set Up the Gemini Work Agent and Pick Claude"
description: "Google Cloud's Gemini agent plans work across Workspace and can run on Claude. Learn how to assign an objective, pick a model, and add a coworker."
pubDate: 2026-10-09T16:30:00
heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "productivity", "gemini"]
noindex: false
---

Google Cloud introduced the Gemini agent on 8 October 2026 at Gemini at Work. It is one agent for questions, knowledge work, media, and code, and the model under it is a separate choice. Today that choice covers Google's Gemini models and Anthropic's Claude models. Other private and open models are planned later.

If you already hand off multi-step jobs, this is the next control: keep your skills and company data in place, then match the model to the job. The setup guide below follows what Google Cloud published in Thomas Kurian's keynote write-up and the companion product notes.

## What the Gemini agent actually does

You give it an objective, not a line-by-line script. Google Cloud says the agent plans the work, loads skills and tools, connects to your systems, and returns finished output inside the documents, inbox, and developer tools you already use.

It runs in the cloud, so memory and context stay the same on web, Android, iOS, Windows, Mac, the command line, Google Workspace, Microsoft 365, and Slack. Closing a laptop does not stop a job that still needs hours or days. You can also schedule work or have the agent respond to events.

For longer jobs it can spin up temporary sub-agents, each with its own identity, and run steps in parallel or in sequence. That is different from a coworker agent, which is a persistent role with its own Workspace account.

![Team reviewing a shared laptop in an open office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Step 1: Confirm you can reach the agent

Access is an enterprise feature announced for Google Cloud customers, not a free consumer toggle. Thomas Kurian said nearly 90% of the Fortune 100 already use Gemini Enterprise, and early testers were already running the new agent.

Ask your Workspace or Cloud admin whether Gemini Enterprise and the new agent are enabled for your account. Surfaces Google named include the prompt window, Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar, plus Microsoft 365 and Slack. The same agent can also run headless, without its own screen, inside another app.

If your admin has not turned it on, you will not see objective assignment or coworker creation. Personal Gemini app chats are a different product. For a narrower hand-off flow that many teams already use, see [how to delegate work to the Gemini Cloud agent](/blog/delegate-work-gemini-cloud-agent/).

## Step 2: Write an objective, then attach context

Open the agent on the surface your admin enabled. State the outcome, the audience, and the deadline. Attach files, folders, or a project that already bundles files and skills. Google said requests can include those attachments, and teams can keep dedicated projects so the agent reuses the right context.

A usable first objective looks like this: "Draft a one-page launch readout for the regional leads. Use last quarter's deck in the Events folder and the open questions in the Chat space. Post the draft in that space and do not email external guests."

Leave room for the plan. The agent is built to choose skills and tools, then improve consistency on later runs. If the job needs a specific system, name it: Workspace, Slack, Jira, Confluence, Git, BigQuery, Databricks, Postgres, Snowflake, Salesforce, or ServiceNow. It can also call a Model Context Protocol server inside or outside the company network, if your admin has allowed that connector.

## Step 3: Pick Gemini or Claude for the job

Google separates the agent from the model. By default the agent picks the model it thinks fits the task. You can take over and choose, including Claude from Anthropic. Google's stated reason is practical: the largest model is not always the best, and routing simple loops away from a premium model keeps cost down.

Use that control in three cases:

1. A coding or long document job where your team already trusts Claude's style. Select Claude before you assign the objective so the whole run stays on that model.
2. A high-volume triage job, such as sorting inbox items or drafting short status notes. Leave routing on, or pick a faster Gemini model, so you are not paying frontier rates for every pass.
3. A mixed project. Google said you can combine models inside a larger project. Keep the research step on one model and the final write-up on another if your admin has exposed that split.

Your skills, memory, and connected data stay put when the model changes. That is the point of the split: the next model launch should not force a migration of prompts and files.

Smart routing is the automatic version of the same idea. It triages workloads toward the model that meets the quality bar at a lower cost. If a project has a spend cap in the Cloud Billing Console, the agent pauses when the cap hits. You resume from the console with one click. Tracking is per project, so finance can charge the spend back to a department.

![People in a meeting reviewing notes on a laptop](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)

## Step 4: Work inline in Workspace

Inside Workspace the same agent has three modes.

Personal assistance already knows your calendar, team, and how documents relate. Google's example: ask it to set up a meeting with the usual regional event leads next week. It infers the people from the Chat space and the last event thread, checks calendars, and starts a mail thread, including external participants.

Proactive delegation watches for work you can hand off. If a manager asks for the latest project update as a slide deck, Workspace Intelligence can offer a single click to pass that task to the agent. It also ranks the inbox by what matters, and explains why, instead of sorting only by arrival time.

Coworker agents are the team mode. Describe the role. Gemini creates an agent with its own Workspace account: email, calendar, Drive, and a directory listing. Colleagues add it to a Chat space or @mention it. A marketing manager can ask an events coordinator agent to draft a launch readiness document and post it back. The agent can also be tagged in a Doc comment, suggest an edit, and show up under its own name in version history.

It acts as itself, not as you, and it only sees what you share. Access follows existing sharing and membership. Google said no outside connector holds that data.

## Step 5: Check identity, logs, and the sandbox

Before you let a coworker agent email anyone, confirm four things with security:

- Identity. Every agent gets its own identity, treated like an employee, with least-privilege permissions. That identity is written into logs and into any virtual machine it uses to run code.
- Permissions. Admins approve role-based access. Connections to external systems map that identity through standards such as OAuth.
- Audit. Actions are logged against the agent, not against a person. Observability tools can watch those logs in real time.
- Boundaries. Tasks run in an Agent Sandbox with its own network boundary. Traffic in, out, and between agents passes through Agent Gateway. A policy such as "agents may not open documents classified Need to Know" is written once and applied across agents.

If a connector is missing, do not paste secrets into the prompt to work around it. Add the system to the enterprise tools registry, or publish a skill that points at an approved path.

## Step 6: Ground data jobs before you trust the numbers

For reports, register data sets in the Knowledge Catalog, then assign the analysis. Gemini reads business definitions such as "net margin" from Databricks, dbt, LookML, or SAP where they already live, writes SQL, Spark, or Python, and runs it on Managed Spark or BigQuery. Saved operational reports can be rerun on demand without new token charges.

Google cited Bloomberg Media lifting SQL query accuracy by 63% in initial development after grounding agents in the Knowledge Catalog. William Anderson, Bloomberg Media's CTO, said grounding AI in trusted institutional context is what makes the team confident in each insight. Treat that as their result, not a guarantee for your warehouse.

Financial services and legal specializations are in preview. Finance skills draw on FactSet, LSEG, S&P Global, SEC filings, and your own repositories, and surface confidence scores, methodology, lineage, and citations. Legal agents inherit matter permissions and ethical walls from systems such as NetDocuments and iManage. Government, healthcare, and retail versions are listed as coming later.

## Tips that keep the first week small

Start with one internal objective that has a clear done state, such as a draft posted to a Chat space. Do not begin with a coworker agent that can email customers.

Name the model when the output style matters, and leave routing on when the job is repetitive. Review the audit trail after the first three runs so you know which identity touched which file.

Set a project spend cap before a team shares the agent widely. A paused job is easier to explain than an unexpected bill.

Keep skills in the company registry once a workflow works. Google describes skills as reusable instructions for multi-step tasks. Personal skills are fine for a pilot; shared skills stop every teammate from rewriting the same prompt.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/1ASzWklab2U"
    title="Gemini at Work 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do next

The Gemini agent is live as an enterprise product as of 8 October 2026. Your first useful hour is an admin check, one objective with attachments, and an explicit model choice between Gemini and Claude. Add a coworker agent only after identity and sharing look right.

Watch the Google Cloud keynote above for the product walkthrough, then try a single internal readout. If the draft lands in the right Chat space with the right sources, expand to a scheduled task or a data report grounded in the Knowledge Catalog.

## Sources

- Thomas Kurian, "Welcome to Gemini at Work 2026: Introducing the Gemini agent," Google Cloud Blog, 8 October 2026: https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026
- Google, "Google Cloud introduces the Gemini agent," The Keyword, 8 October 2026: https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/
- Reuters, "Google Cloud introduces Gemini agent for work as AI race heats up," 8 October 2026
- Google Cloud, "Gemini at Work 2026" keynote, YouTube, 8 October 2026: https://www.youtube.com/watch?v=1ASzWklab2U
