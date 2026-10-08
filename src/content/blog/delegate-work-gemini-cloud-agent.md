---
title: "How to Delegate Work to Google Cloud’s Gemini Agent"
description: "Learn how the Gemini agent from Gemini at Work 2026 takes objectives in Workspace, Slack, and Microsoft 365, and what admins should check first."
pubDate: 2026-10-08T15:30:00
heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "gemini", "productivity"]
noindex: false
---

Google Cloud used Gemini at Work 2026 to introduce the Gemini agent: one universal agent for work, not a separate bot for email, slides, and code. Thomas Kurian, CEO of Google Cloud, described it as a place where you give objectives, not step-by-step instructions, and come back to finished work.

It is an enterprise product. It runs in the cloud, keeps one memory across devices, and can sit inside Gmail, Docs, Sheets, Slides, Chat, Calendar, and Drive. It can also be reached from the web, iOS, Android, Windows, Mac, the command line, Slack, and Microsoft 365. The Verge reported that enterprise customers can try it in private preview inside the Gemini Enterprise app. 9to5Google reported that wider availability is planned for select Workspace Business and Enterprise plans. Confirm access with your admin before you build a process around it.

If you already delegate shorter tasks in Gemini Enterprise, the [objectives guide](/blog/delegate-objectives-google-cloud-gemini-agent/) covers that earlier pattern. This article is about the October 8 agent: persistent work, coworker identities, and cost controls.

## What the agent actually does

Google Cloud lists four jobs in one interface and one API: answer questions, handle knowledge work, create images and media, and write and run code. You assign work, schedule it, or let it respond to events.

Because execution is in the cloud, closing a laptop does not stop a job that takes hours or days. The same memories, context, and personalization graph follow you from phone to desktop. You should not have to re-brief it on a second device.

The model under the agent is a separate choice. Google says it routes each job across the Gemini family and Claude models from Anthropic today, with other private and open models planned later. The point is cost and fit: a large model for hard reasoning, a smaller one for a simple lookup. Your skills and data stay in place if the preferred model changes.

![Team reviewing a shared plan on a laptop](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Check access before you assign work

1. Ask your Google Workspace or Google Cloud admin whether the Gemini agent is enabled for your organization. Private preview and select Business or Enterprise plans are not the same as a free Gemini app account.
2. Confirm which surfaces are on: Gemini Enterprise app, Workspace apps, Slack, Microsoft 365, or a headless API inside another product.
3. Review the Agent Sandbox and Agent Gateway policies. Google says every agent runs inside a sandbox with its own network boundary, and traffic in, out, and between agents passes through Agent Gateway.
4. Set a project spend cap in Cloud Billing before the first long job. Google says a triggered cap pauses that project’s agent. You can resume from the console. Caps are per project, so finance can charge costs back to a department.
5. Decide whether this first trial is a personal assistant or a coworker agent. They do not share the same identity.

Do not paste customer secrets into a test prompt until the policy review is done. The agent can connect to Confluence, Microsoft Office, Teams, Slack, Workspace, Git, Jira, Salesforce, ServiceNow, BigQuery, Databricks, Postgres, Snowflake, desktop files, and MCP servers. Each connector is a data path.

## Delegate an objective, not a checklist

Google’s own examples are the right template.

**Meeting without a roster.** Ask it to set up a meeting next week with the usual regional event leads. It is supposed to infer names from the chat space and the last event thread, check calendars, and start an email thread, including external participants.

**Cross-app pack.** Ask it to research a market trend, build a financial model in Sheets, and create a deck that presents both. You should not re-explain the project at each app.

**Inbox handoff.** If a manager asks for the latest project update as a slide deck, Workspace Intelligence can mark that email as a task you can pass to Gemini in one click. The same layer can surface the message that matters most and explain why, instead of only the newest mail.

Write the outcome, the audience, the deadline, and the systems it may use. Leave the tool choice to the agent. If a step must stay human, say so: “Draft the deck. Do not send the email.”

In Gmail, Docs, Sheets, Slides, and Chat, Google says you can mention @Gemini to invoke it inline. The memory and controls are meant to match the Gemini Enterprise app, not a separate Workspace-only model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cfeBv2-94pc"
    title="Gemini at Work Opening Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add a coworker agent with its own identity

A personal assistant acts for you. A coworker agent is a persistent role for a team. Google says you describe the role and Gemini creates it. The agent gets its own Workspace account: email, calendar, Drive, and a directory listing. The email pattern cited in coverage of the launch is an @agents.company.com address.

Colleagues add it to a Chat space or @mention it. A marketing manager can ask an events coordinator agent to draft a launch readiness document and post it back to the group. Someone can also tag the agent in a Doc comment. It can suggest an edit and reply in the thread under its own name in version history.

Access follows sharing and membership you already use. The coworker sees only what the team shares. It does not inherit your private Drive. That is the control to test first: open a file the agent should not see and confirm it cannot.

Sub-agents are different. Google says Gemini can spin up temporary, job-specific agents, each with an identity, for parallel or sequential steps. Those are for a task. A coworker stays across days and changing responsibilities.

## Use skills, tools, and four kinds of memory

Skills are modular prompts: instructions, knowledge, or workflows. Gemini ships with a global library. Teams can publish skills to a company registry. You can keep personal skills. The agent is supposed to pick skills and tools, then learn from each run so later runs use fewer tokens.

Consumer Gemini chat skills are a related idea, covered in [how to create Gemini skills](/blog/create-gemini-skills-web-chat-guide/). Workspace and Gemini Enterprise skills are not the same library. Recreate a skill where you need it.

Memory is split four ways:

- Session memory for the current task, including multi-day runs.
- Semantic memory, a knowledge base built from documents, people, and other agents.
- Procedural memory for how a job gets done, including skills the agent writes for itself.
- Episodic memory of work it has already done.

Teams can also create projects so context, skills, and tools stay scoped to one effort.

For data work, Google says engineers can describe an outcome and get PySpark, notebooks, model training, and pipeline fixes. Business users can ask for an operational report. Gemini uses reporting skills with BigQuery and the Knowledge Catalog, saves the query, and later runs can avoid token cost on that saved query.

Industry packs are narrower. Financial Services and Legal are in preview, with skills, tools, and domain knowledge. Government, Healthcare, and Retail are listed as coming later. Financial Services draws on FactSet, LSEG, SEC filings, and private repositories, and is meant to show confidence scores, methods, lineage, and citations.

![Colleagues planning work at a shared table](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80)

## Control cost and permissions

Token prices are not the whole bill. Google notes that volume can still break a budget if every loop uses a premium model. Three controls shipped with this announcement:

- Multi-model orchestration, so one project can mix models.
- Smart routing, which triages a workload onto a cheaper model when quality allows.
- Real-time spend caps in Cloud Billing. A hit pauses the project’s agent until someone resumes it.

Policy is written once. Google’s example: agents may not open documents classified Need to Know. Agent Gateway applies that rule across agents instead of a one-off check.

Customer figures on the Cloud blog are case studies, not a benchmark for your tenant. Bradesco reported document review moving from one hour to five minutes on fiscal and contract analysis, with risk inconsistencies down 60 percent. Wesfarmers said an internal Bunnings agent saved staff half a million hours of admin work. Treat those as illustrations from early users, then measure your own queue.

## Practical tips

Start with one objective that already has a human checklist, such as a weekly project deck. Compare the agent draft to last week’s file before anyone sends it.

Name the systems in the first prompt even if the agent can discover them. “Use the Q3 folder in Drive and the regional leads Chat space” reduces wrong-context pulls.

Keep coworker agents out of inboxes that hold personal HR mail. Give them a shared drive and a Chat space first.

Watch the billing console for the first week. A paused agent is a feature, not an outage, if the cap fired.

Do not assume the free Gemini app on Android has this agent. Personal chat, Workspace skills, and the Gemini Enterprise agent are separate products.

## Bottom line

The Gemini agent is Google Cloud’s attempt to collapse chat, documents, and code into one persistent worker you reach from Workspace, Slack, Microsoft 365, or a headless API. Delegate a clear outcome, confirm sandbox and sharing rules, and set a spend cap before the first multi-day job. Availability is still limited to enterprise preview and select Workspace plans, so the useful next step is an admin check, not a personal-account workaround.

## Sources

- Google Cloud Blog, “Welcome to Gemini at Work 2026: Introducing the Gemini agent,” Thomas Kurian, October 8, 2026: https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026
- The Keyword, “Google Cloud introduces the Gemini agent,” October 8, 2026: https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/
- 9to5Google, “Google Cloud announces Gemini agent as universal agent for work,” October 8, 2026: https://9to5google.com/2026/10/08/gemini-agent-google-cloud/
- The Verge, “Google is launching a one-stop Gemini agent for your work tasks,” October 8, 2026: https://www.theverge.com/tech/1007904/google-gemini-ai-agent-enterprise
- Google Cloud, “Gemini at Work Opening Keynote”: https://www.youtube.com/watch?v=cfeBv2-94pc
