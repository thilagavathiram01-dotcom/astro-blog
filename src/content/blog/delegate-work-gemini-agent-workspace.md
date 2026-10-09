---
title: "Practical Guide: Delegate Work to the Gemini Agent"
description: "Learn how to delegate objectives to Google Cloud's Gemini agent in Gmail, Docs, and Chat, including coworker agents and spend caps."
pubDate: 2026-10-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "ai", "productivity", "tutorials"]
noindex: false
---

Google Cloud announced the Gemini agent on 8 October 2026 at Gemini at Work. Thomas Kurian, CEO of Google Cloud, described it as one agent for questions, knowledge work, images and media, and code, reached from a single prompt box.

The useful change is not another chat window. You hand over an outcome. The agent plans the steps, uses skills and tools, and returns finished work in the inbox, document, or developer environment you already use. This guide covers what Google documented, how to frame a first objective, and the controls that keep the run inside company policy.

If your team already builds reusable instructions, start from the [Gemini skills setup for Workspace](/blog/workspace-gemini-skills-oct-5-setup/). Skills are one of the three inputs the new agent is built to call.

## What the agent is allowed to do

Google’s Cloud blog lists six design points. Treat them as the product boundary, not as a promise that every Workspace user sees the button today.

- **One interface.** Chat, assigned objectives, and code generation share the same agent. You can assign work, schedule a task, or have it respond to an event.
- **Many surfaces.** Web, iOS, Android, Windows, Mac, command line, Google Workspace, Microsoft 365, and Slack are named channels. It can also run without a dedicated screen.
- **Cloud execution.** Memory and context stay with the agent when you close the laptop. Google says work that takes hours or days keeps running.
- **Sub-agents and coworker agents.** Temporary sub-agents can split a multi-step job. A coworker agent is a persistent role with its own identity, storage, and only the context you or your team provide. Google’s example identity form is an `@agents` company address.
- **Model choice.** The agent and the model are separate. Google says it can route across Gemini models and Claude models from Anthropic, with other private and open models planned.
- **Company controls.** Identity, permissions, an agent sandbox, and spend caps are part of the announcement, not an add-on blog post.

Kurian also said nearly 80% of Google Cloud customers use Google Cloud AI products, and nearly 90% of the Fortune 100 use Gemini Enterprise. Those figures describe the installed base, not the rollout status of this specific agent on your domain.



![Open-plan office with desks and large windows](https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80)



## Frame an objective, not a click path

Google’s wording is explicit: you give objectives, not step lists, and you come back to finished work. A weak prompt still fails. Name the outcome, the source of truth, the format, and the stop condition.

Use this shape for a first personal task:

1. Open the Gemini surface your admin has enabled (Workspace side panel, the agent prompt, or the mobile app once your domain is on).
2. State the outcome in one sentence. Example: “Draft a one-page launch readiness note for the regional event next week and post it in the existing event Chat space.”
3. Name the sources it may use: the last event thread, the Chat space membership, and Calendar. Do not paste a customer list into the prompt if that list is not already shared with the agent.
4. Name the stop. “Do not email external guests. Leave a draft for me to send.”
5. Read the plan before you let it write into Gmail, Docs, or Chat.

Google’s Workspace example is concrete. Ask it to set up a meeting with the usual regional event leads next week without typing every address. The agent is supposed to infer people from the Chat space and the last event thread, check calendars, and start a coordination email, including external participants. If that inference is wrong, stop and name the people. Do not “correct” it by granting broader mailbox access.

A second documented pattern spans apps in one objective: research a market question, build a financial model in Sheets, then create a deck. Repeat the project name in the objective so it does not open a new thread with no memory of the sheet.

## Use it inline, not only in a separate chat

Inside Workspace, Google says the same memory, skills, and controls follow the agent into Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar. It works in the email thread, the document, and the chat space.

Three modes are documented:

**Personal assistance.** The agent is briefed on your calendar, team, projects, and how documents relate. Use this for work that is yours to assign.

**Proactive delegation.** Workspace Intelligence can mark a message as something you can hand off. Google’s example is a manager email that asks for the latest project update as a slide deck, with a single click to pass that task to Gemini. The same layer can rank an inbox by what matters, and explain why, instead of sorting only by arrival time. Click only after you read the suggested task. A wrong suggestion still uses your identity if you accept it.

**Coworker agent.** Describe the role. Google says the agent gets its own Workspace account: email, calendar, Drive, and a directory listing. Colleagues add it to a Chat space or @mention it. A marketing manager can ask an events coordinator agent in a group to draft a launch readiness document and post it back. Tagging the agent in a Doc comment can produce a suggested edit and a comment reply under the agent’s name in version history.

A coworker agent acts under its own identity, not yours. It sees only what you share. Access follows existing sharing and membership. Google says no outside connector holds that data in this path.



![Two colleagues reviewing a document at a shared desk](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Connect skills and tools before you assign real work

Google splits the agent’s knowledge into tools, skills, and memory.

Tools reach software the company already runs: Confluence, Microsoft Office, Teams, Slack, Workspace, Git, Jira, Salesforce, ServiceNow, BigQuery, Databricks, Postgres, Snowflake, and files on a desktop. Any Model Context Protocol server inside or outside the network can be connected. An enterprise tools registry lets teams publish connectors for the rest of the company.

Skills are reusable instructions, knowledge, or workflows stored as modular prompts. Gemini ships with a global library. Departments can publish skills to a company registry. You can keep personal skills. The agent is supposed to pick skills and tools for the task and learn from each run.

Memory has four kinds in the announcement: session memory for the current task, semantic memory built from documents and conversations, procedural memory for how a job is done, and episodic memory of prior work. Teams can also create a project so context, skills, and tools stay scoped.

Practical order:

1. Confirm an admin has published the tools your objective needs. A Salesforce question with no Salesforce connector will invent structure or refuse.
2. Point the objective at a published skill if you have one, instead of pasting a 40-line procedure into every chat.
3. Create a project for a repeating workflow so the next run does not start from an empty brief.
4. For data questions, prefer the Knowledge Catalog definitions your company already mapped. Google says the agent can read metrics where they sit, including Databricks, dbt, LookML, and SAP, rather than a copied spreadsheet of unofficial numbers.

## Keep identity, policy, and spend in view

Security language in the keynote post is specific enough to check against your admin console.

Every agent gets its own identity, treated like an employee, with least-privilege permissions approved by security administrators. That identity is written into logs and into any virtual machine the agent starts to run code. External connections map that identity through standards such as OAuth.

Actions are audited as the agent, not as a person. Tasks run in an Agent Sandbox with its own network boundary. Traffic in, out, and between agents passes through Agent Gateway. Google’s policy example is direct: a rule such as “agents may not open documents classified Need to Know” is written once and applied to every agent in the company.

Cost controls are also named. Smart routing is supposed to place a workload on the model that meets the job at lower cost. You can set a hard AI spend limit for a project in Cloud Billing Console. If the cap trips, that project’s agent pauses. You resume from the console. Tracking is per project, so a department can be charged back.

Before a coworker agent sends mail:

- Confirm its directory account is in the right groups, not in an all-staff group by default.
- Confirm the policy blocks classified stores you do not want it to read.
- Set a project spend cap before the first multi-hour run.
- Read version history after a Doc edit so the agent’s name, not a colleague’s, is on the change.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cfeBv2-94pc"
    title="Gemini at Work Opening Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What early customers actually measured

Google published customer results next to the announcement. Use them as scale context, not as your expected savings.

Bradesco’s finance team cut document review from 1 hour to 5 minutes on fiscal, accounting, and contractual analysis, with a stated 60% drop in risk inconsistencies. Orange Spain is deploying more than 1,000 custom Gemini Enterprise agents across HR, IT, sales, and customer service. SOMPO built over 10,000 custom agents across 34,000 employees for search and summarization, and cut new-model development from one week to one day on the engineering side. Commerzbank reduced manual document quality-assurance work from 20 hours to one hour and is extending that with a multi-agent system.

Those programs had connectors, skills, and an admin owner. A personal prompt in Gmail will not reproduce them.

## Conclusion

The Gemini agent announced on 8 October 2026 is a cloud-side worker you brief with an outcome. Start with one personal objective that names sources and a stop rule. Use inline help in the thread or Doc you already have open. Add a coworker agent only after its identity, sharing, and spend cap are set.

Availability still depends on your Google Cloud and Workspace admins. The keynote describes the product. Your console shows whether your domain can assign work yet.

## Sources

- [Google Cloud introduces the Gemini agent](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/) — Google, 8 October 2026
- [Welcome to Gemini at Work 2026: Introducing the Gemini agent](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026) — Thomas Kurian, Google Cloud Blog, 8 October 2026
- [Gemini at Work Opening Keynote](https://www.youtube.com/watch?v=cfeBv2-94pc) — Google Cloud, YouTube
