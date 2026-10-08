---
title: "How to Set Spend Caps on Google's Gemini Cloud Agent"
description: "Learn how enterprise teams delegate objectives to the Gemini Cloud agent, set Cloud Billing spend caps, and audit coworker agents."
pubDate: 2026-10-08T16:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "productivity", "tutorials"]
noindex: false
---

Google Cloud introduced the Gemini agent on 8 October 2026 at Gemini at Work. It is a single agent for questions, knowledge work, media, and code, aimed at companies already on Gemini Enterprise.

The useful part is not the prompt box. It is the controls around it. Google says the agent picks a model for each job, pauses when a project hits a spend cap, and writes actions to an audit trail under the agent's own identity.

This guide covers what Thomas Kurian described in the Cloud announcement, and the checks to run before you hand it a real objective. For cross-app Workspace habits that already exist, see [how Gemini handles tasks across Workspace apps](/blog/gemini-workspace-cross-app-tasks/).

## What the Gemini Cloud agent actually is

Gemini here is the agent, not one model. Google says it can route a job across the Gemini family and Claude models from Anthropic, with other private and open models planned later. The larger model is not always the one it picks.

You give it an objective, not a click-by-click script. It plans the work, uses skills and tools, and returns finished output in Docs, the inbox, or a developer environment. It runs in the cloud, so closing a laptop does not stop a job that takes hours or days.

Access is not limited to one app. Google lists the web, iOS, Android, Windows, Mac, the command line, Workspace, Microsoft 365, and Slack. It can also run headless inside another product through an API.

![Team reviewing a shared plan on laptops in an open office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Four memory types you should name in the brief

Google describes four memories. Naming them in the first objective stops the agent from mixing a one-off task with standing company rules.

Session memory covers the job in front of it, even if that job runs for days. Put the deadline, the audience, and the definition of done here.

Semantic memory is the structured knowledge it builds from documents, people, and other agents. Point it at the source of truth, such as a Drive folder or a Knowledge Catalog term like "net margin," instead of pasting a definition into chat.

Procedural memory is how a job gets done, including skills the agent writes for itself. If your team already has a review checklist, attach it as a skill rather than hoping the agent invents one.

Episodic memory is the record of what it has done before. Ask it to cite that history when a second run should match the first.

Skills are modular instructions in a company registry, a team registry, or a personal set. Tools connect to systems you already run, including Workspace, Slack, Git, Jira, Salesforce, ServiceNow, BigQuery, and any Model Context Protocol server your admins allow.

## Delegate an objective inside Workspace

Inside Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar, Google says the same memory and controls travel with the agent. You can mention @Gemini in Gmail, Docs, Sheets, Slides, and Chat.

A concrete pattern from the announcement: ask it to set up a meeting with the usual regional event leads next week. It is supposed to infer the people from the chat space and the last event thread, check calendars, and start a coordination email, including external guests.

A second pattern is proactive. If a manager asks for a project update as a slide deck, Workspace Intelligence can offer a one-click handoff. Accept that only after you confirm the source deck and the audience.

Write the objective like this:

1. State the outcome and the file it should land in.
2. Name the people or the chat space it may use.
3. List systems it may read, and systems it must not change.
4. Set a stop rule, such as "draft only, do not send."

That last line matters. A coworker-style agent can post back to a Chat space and suggest edits under its own name in version history.

## Create a coworker agent with its own identity

A coworker agent is not a shared login. Google says you describe the role, and Gemini creates an agent with its own Workspace account: email, calendar, Drive, and a directory listing. Addresses use the @agents.company.com pattern.

Colleagues add it to a Chat space or @mention it. In the marketing example from the post, an events coordinator agent drafts a launch-readiness document and posts it back to the group. A comment tag can produce a suggested edit that shows under the agent's name.

It acts as itself, not as you. It sees only what the team shares. Access follows existing sharing and membership. No outside connector is supposed to hold that data.

Before you create one, agree on three limits with your admin:

- Which Drive folders and Chat spaces it may join.
- Whether it may send external email.
- Who can pause or delete the agent.

Sub-agents are different. Those are temporary, job-specific agents with their own identities, used for parallel or sequential steps. They should not outlive the objective.

![Analyst reviewing charts and notes at a desk](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Set a project spend cap before the first long job

Google's cost section is the part most teams will feel first. Token prices have fallen, but volume has not. The announcement lists three controls.

Multi-model orchestration lets a project mix models so a simple step does not run on the frontier model. Smart routing triages workloads toward the cheapest model that still meets the quality bar. Real-time spend caps are the hard stop.

Set the cap in the Cloud Billing Console on the project that will run the agent. Google says Gemini watches token usage and sandbox costs. If the cap trips, that project's agent pauses. You resume with one click in the console. Because tracking is per project, finance can charge the spend back to a department.

Pair this with the existing pattern in [Firebase spend caps for Gemini](/blog/firebase-spend-caps-gemini-functions/). The idea is the same: a pause is cheaper than an overnight loop.

Practical order:

1. Put the agent in its own billing project, not the production app project.
2. Set a cap you can explain to finance this week.
3. Run one objective that must finish inside that cap.
4. Read the audit log before you raise the limit.

Saved operational reports are a separate saving. Google says a business user can ask for a report, Gemini builds the query against BigQuery and the Knowledge Catalog, and later runs do not spend tokens again.

## Check identity, permissions, and the audit trail

Google frames governance as four questions: who the agent is, what it may do, what it did, and what it must never touch.

Every agent gets its own identity, treated like an employee, with least-privilege permissions. That identity is written into logs and into any virtual machine spun up to run code. External connections map through standards such as OAuth.

Actions are attributed to the agent, not to a person. Admins can watch those logs in Google's observability tools.

The "never touch" rule is Agent Gateway. Agents run inside an Agent Sandbox. Traffic in, out, and between agents passes through that gateway. A policy such as "agents may not open documents classified Need to Know" is written once and applied across the company.

Industry packs are in preview for financial services and legal, with government, healthcare, and retail listed as coming later. Financial services skills cite sources and show confidence scores. Legal agents inherit matter permissions from systems such as NetDocuments and iManage. Do not turn those on until your counsel has reviewed the connector scope.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cfeBv2-94pc"
    title="Gemini at Work Opening Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before the first delegated job

Start with a draft-only objective. A slide outline or a meeting poll is enough to see whether session memory and the stop rule hold.

Keep coworker agents narrow. An events coordinator that can read one Chat space is easier to audit than a general assistant with company-wide Drive access.

Register business terms in the Knowledge Catalog before you ask for numbers. Bloomberg Media reported a 63 percent lift in SQL accuracy during early development after grounding agents there. That figure is the customer's result, not a guarantee for your warehouse.

Do not assume personal Gemini skills sync into this agent. Workspace skills and Gemini app skills are separate products. Recreate anything the team must share.

Availability is for enterprise customers. Confirm with your Google Cloud account team before you promise a rollout date to staff.

## Conclusion

The Gemini Cloud agent is built to take an outcome and keep working after you close the laptop. That only stays affordable if the billing project has a spend cap, and it only stays governable if the agent has its own identity, a short permission list, and an audit log someone actually reads.

Delegate one draft this week. Raise the cap only after the pause behavior and the log both look right.

## Sources

- Google Cloud Blog, "Welcome to Gemini at Work 2026: Introducing the Gemini agent," 8 October 2026
- The Keyword, "Google Cloud introduces the Gemini agent," 8 October 2026
- Google Cloud, "Gemini at Work Opening Keynote"
