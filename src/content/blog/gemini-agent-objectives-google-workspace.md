---
title: "Give the Gemini Agent Objectives in Google Workspace"
description: "Give the Gemini agent objectives in Google Workspace: @mention it in Gmail, Docs, and Chat, review the plan, and keep admin controls on."
pubDate: 2026-10-09T07:00:00
heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "productivity", "tutorials"]
noindex: false
---

Google Cloud told customers on 8 October 2026 that Gemini is now a single agent for work, not only a chat box. You give it an objective. It plans the steps, uses skills and tools, and returns finished work inside Gmail, Docs, Sheets, Slides, Chat, Calendar, and Drive.

That change matters if your company already pays for Gemini Enterprise or Gemini in Workspace. The same memory and controls follow the agent from the Gemini app into the file you already have open. This guide covers what Google documented at Gemini at Work 2026, how to assign a task, and what to check before you hand over a real workflow.

If you already use Cloud agents for longer jobs, the earlier walkthrough on [delegating objectives to the Google Cloud Gemini agent](/blog/delegate-objectives-google-cloud-gemini-agent/) still applies. This article focuses on the Workspace surfaces announced with the same agent.

## What the Gemini agent can do in Workspace

Thomas Kurian, CEO of Google Cloud, described Gemini as one agent for questions, knowledge work, media, and code. It runs in the cloud, so a task can keep going after you close the laptop. Google says the agent keeps one memory and one personalization graph across web, mobile, desktop, command line, Workspace, Microsoft 365, and Slack.

Inside Workspace, Google listed three modes:

- Personal assistance. Gemini can use your calendar, team, and related documents. In the example from the Cloud blog, you ask it to set up a meeting with the usual regional event leads. It looks up those people from a chat space and a prior thread, checks calendars, and starts an email to find a time, including external guests.
- Proactive delegation. If a manager emails you and asks for a project update as a slide deck, Workspace Intelligence can offer a one-click handoff to Gemini. Google also says it can surface the inbox message that matters most and explain why, instead of only sorting by arrival time.
- A team member. You can describe a role and create a coworker agent. That agent gets its own Workspace account, email, calendar, Drive, and directory listing. Colleagues add it to a Chat space or @mention it. It acts under its own identity and only sees what the team shares with it.

The agent is not limited to Google apps. Google says it can connect to Confluence, Microsoft Office, Teams, Slack, Git, Jira, Salesforce, ServiceNow, BigQuery, Databricks, Postgres, Snowflake, desktop files, and any Model Context Protocol server your admins allow.

![People working together at a shared table in a bright office](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Check access before you assign work

Gemini at Work 2026 is an enterprise announcement. Consumer Gemini in the mobile app does not automatically gain coworker agents, spend caps, or Workspace identity. Confirm these points with your admin before you write a prompt:

1. Your Google Workspace account has Gemini enabled. Feature names vary by edition. If the side panel or @Gemini mention is missing, the license or the admin switch is the usual cause.
2. The tools you need are on the company tools registry. A personal Gmail connection is not the same as an approved Salesforce or Jira connector.
3. Sensitive data rules are set. Google says agents run in an Agent Sandbox, and traffic passes through Agent Gateway. Admins write policies such as blocking documents classified Need to Know.
4. You know who pays for the run. Google added real-time spend caps in Cloud Billing. If a project hits the cap, that project's agent pauses until someone resumes it.

Google also said the model under the agent is a separate choice. The agent can route work across Gemini models and Anthropic Claude models, with other private and open models planned later. You do not have to pick a model for a simple Workspace task unless your admin requires it.

## Assign an objective in the app you already use

Write the outcome, not a click path. Google's phrase is "objectives, not instructions." A weak prompt lists every menu. A stronger prompt names the result, the audience, and the file that should hold the answer.

### In Gmail

Open the thread that contains the request. Mention Gemini in the reply or open the Gemini panel for that message. State the deliverable and the deadline.

Example: "Draft a reply that confirms we can send the Q3 regional update as a slide deck by Thursday. Pull the latest numbers from the linked Sheet, note any region still missing data, and leave the send button to me."

Do not ask it to send mail that commits budget or legal terms until you have read the draft. Google's governance model treats agent actions as auditable, but you still own the message that leaves your account.

### In Docs, Sheets, and Slides

Open the file. Ask for a finished artifact in that file, or for a related file Gemini should create. The Cloud blog example chains research, a Sheets model, and a deck without re-explaining the project at each step.

Example in Docs: "Turn the notes in this doc into a one-page launch readiness brief for the marketing chat. Flag open owners. Do not invent dates that are not in the doc or the linked calendar event."

Example in Sheets: "Build a simple scenario table from the columns already in this sheet. Label assumptions. If a metric is not defined in the Knowledge Catalog, say so instead of guessing."

Google said business users can ask for operational reports grounded in BigQuery and the Knowledge Catalog. Once a report is saved, teams can rerun it without paying token costs again. That only works if your data team has registered the definitions.

### In Chat and Calendar

In a Chat space, @mention Gemini or a coworker agent. Ask for a document back in the space. Google's events example has a marketing manager ask an events coordinator agent for a launch readiness document. The agent posts it to the group when it is done. A comment mention in a Doc can suggest an edit and reply in the comment thread under the agent's own name in version history.

In Calendar, use the personal-assistance pattern: name the meeting purpose and the group, and ask Gemini to propose times. Review the guest list before anything is sent to people outside the company.

![Laptop and notebook on a desk ready for a work session](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Watch the task, then accept the result

Google described a tasks view where you can see thinking, sub-agents, loaded skills, code, and progress. Use it. A multi-step job can run for hours. Sub-agents are temporary and get their own identity. Coworker agents are persistent roles with their own email and storage.

Before you accept output:

- Check citations and source files. Financial Services preview skills are designed to show confidence scores, methods, lineage, and citations. General Workspace tasks may not be that strict. Ask for the source doc if a number looks new.
- Confirm identity. An action taken by a coworker agent should appear as that agent, not as you. Audit logs attribute work to the agent identity.
- Stop sensitive steps yourself. Purchases, external emails, and filings should stay behind a human click until your policy says otherwise.
- Resume only if a spend cap paused the job. Google says you can resume from the billing console with one click after you raise or accept the limit.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/yfa-m8gjkrk"
    title="Introducing Gemini for your business: one universal agent for all your work"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a coworker agent for a repeated role

Use a coworker agent when the same job returns every week and several people need to assign it. Google's setup is a description of the role, not a code project.

1. Describe the job in plain language. Include the files it may read, the Chat spaces it may join, and the actions it must not take.
2. Let Gemini create the Workspace identity. It receives an email address, calendar, Drive, and a directory listing.
3. Share only the Drive folders and Chat spaces that role needs. Access follows normal sharing. Google says no outside connector holds that data for this pattern.
4. Add the agent to the working Chat space. Teammates @mention it the same way they mention a colleague.
5. Review the first three outputs in version history. The agent should appear under its own name.

A marketing events agent is a fit. A payroll-change agent is not, until security has written an explicit policy and a human approval step.

## Tips that keep the first week useful

Start with one objective you can check in ten minutes. A meeting proposal or a Doc summary is easier to audit than a cross-system fiscal review.

Name the skill if you have one. Teams can publish skills to a company registry. Personal skills are allowed too. Google says Gemini picks skills on its own and can write procedural memory from past runs. Pointing at a skill still reduces drift. The related guide on [building Gemini Workspace skills in Google Docs](/blog/build-gemini-workspace-skills-google-docs/) is a good companion if your admin has skills turned on.

Keep definitions in the Knowledge Catalog if the task uses company metrics. Google quoted Bloomberg Media CTO William Anderson on grounding AI in institutional context, and reported a 63 percent lift in SQL accuracy during that team's initial development. Your numbers will differ. The method is the part you can copy: register the term once.

Ask admins to set a project spend cap before a department pilot. Smart routing is meant to send simple work to a cheaper model. A cap is the control you can see.

Industry packs are narrower than the general agent. Financial Services and Legal are in preview. Government, Healthcare, and Retail are listed as coming later. Do not assume a legal ethical wall from NetDocuments or iManage unless your firm has that connector.

## Conclusion

The Gemini agent announced at Gemini at Work 2026 is built to take an objective and return work in the Google app you already use. Mention it in Gmail, Docs, Sheets, Slides, Chat, or Calendar. Give it the outcome, the source files, and the limit. Review identity, citations, and any message that leaves the company.

Admins still decide connectors, Agent Gateway policy, and spend caps. Users decide whether the draft is ready. That split is the practical way to try the agent this week without handing it a job you cannot check.

## Sources

- Google Cloud Blog, "Welcome to Gemini at Work 2026: Introducing the Gemini agent," Thomas Kurian, 8 October 2026: https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026
- The Keyword, "Google Cloud introduces the Gemini agent," 8 October 2026: https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/
- Google Cloud, "Introducing Gemini for your business: one universal agent for all your work" (YouTube): https://www.youtube.com/watch?v=yfa-m8gjkrk
