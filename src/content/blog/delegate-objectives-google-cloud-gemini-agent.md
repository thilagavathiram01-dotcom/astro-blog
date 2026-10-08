---
title: "Delegate Objectives to Google Cloud's Gemini Agent"
description: "Use Google Cloud's Gemini agent to hand off objectives in Workspace, keep one memory across devices, and review finished work."
pubDate: 2026-10-08T12:35:00
heroImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "productivity", "tutorials", "ai-tools"]
noindex: false
---

Google Cloud CEO Thomas Kurian announced the Gemini agent on October 8, 2026, at Gemini at Work. It is a single agent for questions, knowledge work, media, and code, reached from one prompt box and one API. You give it an objective. It plans the steps, uses skills and tools, and returns finished work in the apps you already use.

This is not the consumer Gemini app agent that walks a browser under your supervision. The Cloud product runs in Google Cloud, keeps one memory graph across devices, and is built for companies that already use Gemini Enterprise and Google Workspace. Consumer [cross-app Gemini tasks](/blog/gemini-workspace-cross-app-tasks/) still follow a different setup.

## What the Gemini agent actually does

Kurian described six design rules in the [Google Cloud blog post](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026).

It is one agent, not a menu of specialist bots. You can chat, assign an objective, schedule work, or have it respond to an event from the same interface.

Access is meant to be the same on the web, iOS, Android, Windows, and Mac, plus the command line, Google Workspace, Microsoft 365, and Slack. A third-party app can also call it as a headless agent, so it does not need its own screen.

Execution stays in the cloud. Close the laptop and a job that takes hours or days keeps running. The same session memory, context, and personalization graph are there when you reopen the chat on a phone.

It can spin up temporary sub-agents for parallel or sequential steps. A coworker agent is different: a lasting role with its own email, calendar, Drive, and directory listing, limited to the context the team shares.

The model under the agent is a separate choice. Google says the agent can route a job across the Gemini family and Anthropic Claude models today, with other private and open models planned. The point is to match the model to the task so simple loops do not always hit the largest model.

![Team reviewing a shared plan on laptops in an office](https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80)

## How to hand off an objective

Google has not published a consumer click-path. The practical flow follows the Workspace behavior described in the keynote write-up.

**1. Confirm you are on a covered plan.** The agent is an enterprise product. Google says it works inside Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar with the same memory, skills, and controls. Ask your Workspace admin whether Gemini Enterprise and the new agent are turned on for your organizational unit before you write a long brief.

**2. Open the surface you already work in.** Start in the Gemini Enterprise app, a Workspace file, Chat, Slack, or Microsoft 365. Because state lives in the cloud, you do not need to finish on the same device you started on.

**3. State the outcome, not the click list.** Kurian's example: ask Gemini to set up a meeting with the usual regional event leads next week, without pasting names. The agent is supposed to read Chat membership and the last event thread, check calendars, and start an email thread, including external guests. Another example spans apps: research market trends, build a model in Sheets, then draft a deck, without restating the project at each hop.

**4. Let it pick skills and tools.** Skills are reusable instruction packs. Google ships a global library. Teams can publish skills to a company registry, and you can keep personal skills. Tools connect to systems you already run, including Workspace, Slack, Teams, Confluence, Git, Jira, Salesforce, ServiceNow, BigQuery, Databricks, Postgres, Snowflake, desktop files, and any Model Context Protocol server your admin allows.

**5. Review the artifact where it lands.** Finished work is supposed to appear in the document, inbox, or chat, not only in a side panel. Read the draft before you send it. The agent can also suggest a task to delegate. If a manager asks for the latest project update as a slide deck, Workspace Intelligence can offer a one-click handoff.

**6. Optional: create a coworker agent.** Describe the role. Google says Gemini creates a Workspace account with email, calendar, Drive, and a directory entry. Colleagues add it to a Chat space or mention it. A marketing lead can ask an events coordinator agent for a launch-readiness doc. The agent posts the doc back, can reply in a Doc comment under its own name, and shows up in version history. It acts as itself, not as you, and sees only what the team shares.

## Memory you should expect it to keep

Google lists four memory types.

Session memory holds the task in front of it, including jobs that run for days. Semantic memory is a structured knowledge base built from documents, people, and other agents. Procedural memory stores how a job gets done, including skills the agent writes for itself. Episodic memory is the record of what it has already done.

That is why Google says the agent onboards like a new hire: it learns your tools and team before it starts. Teams can also create a project so context, skills, and tools stay scoped.

![People collaborating around a table with notebooks and a laptop](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80)

## Data, industry packs, and cost controls

For analysts, Google is adding data skills. Engineers can describe an outcome and have Gemini generate PySpark, open a notebook, train a model, and fix pipeline issues. Business users can ask for an operational report. Gemini uses BigQuery and the Knowledge Catalog, saves the query, and later runs can reuse that saved report without spending tokens again.

Industry packs are in preview for financial services and legal, with government, healthcare, and retail listed as coming soon. Financial services draws on FactSet, LSEG, SEC filings, and internal repositories, with confidence scores, methodology, lineage, and citations. Legal inherits matter permissions and ethical walls from systems such as NetDocuments and iManage.

Cost controls are part of the announcement, not an add-on. Smart routing picks a model for the workload. Admins can set a project spend cap in Cloud Billing. If the cap trips, that project's agent pauses until someone resumes it. Google also said the latest TPU 8i system delivers 80% better price-performance than the prior generation, which is the infrastructure claim behind the agent economics.

## Admin checks before you roll it out

Kurian framed governance as four questions: who the agent is, what it may do, what it did, and what it must never touch.

Every agent gets its own identity, logged like an employee, with least-privilege permissions. External connections map that identity through standards such as OAuth. Actions land in an audit trail attributed to the agent, including virtual machines it spins up to run code.

Tasks run in an Agent Sandbox. Traffic in, out, and between agents passes through Agent Gateway. A policy such as blocking documents classified Need to Know is written once and applied across agents.

Coworker agents should not inherit your personal Drive. Share the folder or Chat space they need, then check the audit log after the first real job.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ay5QtMsna8c"
    title="Merck + Google Cloud: Using Gemini Enterprise to Accelerate Drug Discovery"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the first jobs useful

Write the outcome and the done state. "Draft a one-page launch readout from last week's Chat thread and the Q3 sheet, and leave it as a Doc comment" is easier to review than "help with the launch."

Point it at a project or skill when the company registry already has one. Google says the agent chooses skills on its own, but a named skill reduces guesswork on the first run.

Treat proactive delegation as a suggestion. The one-click handoff from an email still needs you to confirm the deck before it goes to a manager.

Keep spend caps on any project that can create sub-agents. A multi-day job with parallel agents can burn tokens even when each step looks small.

Do not paste secrets into the objective if a connector already has access. The agent is supposed to read systems through approved tools.

## What is still limited

Google did not publish a date when every Workspace user will see the agent. The October 8 post is the product announcement, aimed at Cloud and Workspace customers. Industry packs beyond financial services and legal are still listed as coming soon. Model choice includes Gemini and Claude now, not every open model.

Customer figures in the same post are company-reported, not a benchmark you can reproduce. Orange Spain is deploying more than 1,000 custom Gemini Enterprise agents. Bradesco said document review in one finance workflow dropped from one hour to five minutes. Those numbers describe those deployments, not a default result for a new Workspace tenant.

## Bottom line

Start with one objective that already has a source thread and a destination file. Confirm the admin has identity, Agent Gateway policy, and a spend cap in place. Review the Doc, Sheet, or email before anyone else sees it. If that loop works, add a coworker agent with its own mailbox and a narrow share, instead of granting it your personal Drive.

## Sources

- Thomas Kurian, [Welcome to Gemini at Work 2026: Introducing the Gemini agent](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026), Google Cloud Blog, October 8, 2026
- [Google Cloud introduces the Gemini agent](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/), blog.google, October 8, 2026
- [Merck + Google Cloud: Using Gemini Enterprise to Accelerate Drug Discovery](https://www.youtube.com/watch?v=Ay5QtMsna8c), Google Cloud, October 6, 2026
