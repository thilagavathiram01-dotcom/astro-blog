---
title: "How to Use the Gemini Agent Inline in Gmail and Docs"
description: "Use the October 8 Gemini agent inside Gmail, Docs, Sheets, and Chat: personal help, one-click handoff, and a coworker agent."
pubDate: 2026-10-08T16:45:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "productivity", "tutorials", "how-to"]
noindex: false
---

A slide request used to leave your inbox and die in another tab. On October 8, 2026, Google Cloud said the new Gemini agent works inside the email thread, the document, and the chat space, with the same memory and controls it has in the Gemini Enterprise app.

Thomas Kurian, CEO of Google Cloud, described that behavior in the Gemini at Work 2026 write-up. The agent answers questions, handles knowledge work, creates media, and writes code from one prompt box. In Workspace it is not a separate chatbot you paste into. It sits in Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar.

This guide covers the three Workspace modes Google documented, plus the spend cap that pauses a project if token use hits a limit. If your company is a small shop still waiting on early access, start with the [small-team setup notes](/blog/gemini-agent-small-business-setup/) before you create a coworker mailbox.

## What inline actually means

Google says the agent carries one set of memories, context, and a personalization graph across devices and channels. Close the laptop and a job that takes hours or days keeps running in the cloud. Open Gmail on a phone later and the same job is still there. You do not re-brief it because you switched from the desktop app to Chat.

Access listed in the post includes web, Android, iOS, Windows, Mac, the command line, Google Workspace, Microsoft 365, and Slack. The agent can also run headless, without its own screen, inside another app.

That is a product claim about where the agent can appear. It is not a public click-path for every Workspace account. Kurian’s post does not give a date when every customer gets the toggle. Confirm with your admin that Gemini Enterprise and the October 8 agent are on for your domain.

![Person writing on a laptop at a wooden desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Three ways it works in Workspace

The Cloud blog splits inline Gemini into personal assistance, proactive delegation, and a team coworker.

**Personal assistance.** The agent is supposed to arrive knowing your calendar, your team, your projects, and how your documents relate. Google’s example: ask it to set up a meeting with the usual regional event leads next week, without typing names or emails. It is meant to read chat-space membership and the last event thread, check calendars, and start an email thread that can include external people. The same briefing is supposed to carry across apps. Research market trends, build a financial model in Sheets, then create a deck, without restating the project at each step.

**Proactive delegation.** Workspace Intelligence can flag a task you can hand off. Google’s example is a manager email asking for the latest project update as a slide deck. You get a single-click option to pass that request to Gemini. The same reasoning is supposed to rank the inbox so the message that matters most is not always the one that arrived last, and to explain why it ranked that way.

**A member of the team.** You describe a role and Gemini creates a coworker agent. That agent gets its own Workspace account: email, calendar, Drive, and a listing in the company directory. Colleagues add it to a Chat space or mention it. Google’s example is a marketing manager asking an events coordinator agent, in a chat group, to draft a launch readiness document. The agent posts the draft back to the group. You can also tag it in a Doc comment. It can suggest an edit and reply in the thread, under its own name in version history.

A coworker agent acts under its own identity, not yours. It sees only what you or the team share with it. Access follows existing sharing and membership. Google says no outside connector holds that data for this pattern.

## Run the first inline job

Google has not published a button-by-button consumer guide for the October 8 agent. The sequence below follows what the keynote write-up does specify.

**1. Confirm the agent is on for your domain.** Early access is not the same as a switch in every personal Gmail account. Ask the Workspace or Cloud admin before you plan a team demo.

**2. Start in the file or thread, not a blank chat.** Open the email that asks for the deck, or the Doc that needs the update. Inline work is defined as happening in that thread, document, or chat space.

**3. State the outcome and the landing place.** “Turn this thread into a five-slide update in Slides and leave the file in the project Drive folder” is checkable. “Help with the update” is not.

**4. Use the one-click handoff when Workspace offers it.** If the manager email is flagged as delegatable, pass that task instead of copying the thread into another prompt. The point of the October 8 design is to avoid the re-brief.

**5. Read the artifact before anyone else does.** Finished work is supposed to land in the document, inbox, or chat. Check names, dates, and figures against the source thread. The agent can span Gmail, Sheets, and Slides in one job. A wrong number in the model becomes a wrong number on the slide.

**6. Cap the project before the second run.** In the Cloud Billing console, set a hard limit on that project’s AI spend. Google says Gemini monitors token usage and sandbox costs. If the cap trips, that project’s agent pauses. You can resume it from the console. Tracking is per project, so a department can be billed for its own jobs.

## When to create a coworker instead

Personal assistance uses your context. A coworker uses a role and only the context you give it. Kurian’s post says coworker agents have dedicated identities, including their own addresses on an `@agents` company domain pattern, their own persistent storage, and access limited to what you or teammates provide.

Create one when the same job repeats for a group. An events coordinator that drafts launch notes in a Chat space is the documented example. Do not create one for a one-off reply you can handle as personal assistance.

Sub-agents are different again. Gemini can spin up temporary, job-specific agents, each with its own identity, for parallel or sequential steps that run for hours or days. Those are for a multi-step objective, not a standing teammate. The [objective handoff guide](/blog/delegate-objectives-google-cloud-gemini-agent/) covers that pattern if the work should leave the thread and run as a delegated job.

![Team discussing notes around a conference table](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Skills, memory, and model choice

Skills are reusable instructions, knowledge, or workflows stored as modular prompts. Gemini ships with a global library. Teams can publish custom skills to a company registry, and you can keep personal skills. Google says the agent picks skills and tools for a task and learns from each run, which is also meant to cut token use.

Four memory types are named. Session memory covers the task in front of it, including jobs that run for days. Semantic memory is a structured knowledge base built from documents, people, and other agents. Procedural memory covers how a job gets done, including skills the agent writes for itself. Episodic memory is a record of what it has done before.

The model under the agent is a separate choice. Google says each job can run on a Gemini model or a Claude model from Anthropic today, with other private and open models planned later. Smart routing is supposed to put work on the model that fits, so a simple step does not always use the largest model. Context, skills, and data stay put if the model underneath changes.

On, the sportswear brand, tested that dynamic selection for speed-to-market. Shopify already blends frontier models for merchants. PayPal routes 10 million multi-model requests a week. Those are customer examples in the keynote post, not a setting you toggle in Gmail.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cfeBv2-94pc"
    title="Gemini at Work Opening Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Google Cloud’s Gemini at Work opening keynote is the session series Kurian’s October 8 post is adapted from. Use it for how Google frames the agent at work, then rely on the Cloud blog for the Workspace modes and the billing cap.

## Tips before you mention it in a shared thread

Keep the first job inside one project Drive folder. Shared Chat spaces make the draft visible to everyone in the space as soon as a coworker posts it.

Name the source thread. “Use the email from the regional leads dated this week” beats a prompt that lets the agent guess which event is current.

Do not give a coworker agent broad Drive access on day one. Google says it sees only what you share. Share the launch folder, not the whole company drive.

Set the spend cap on the project that owns the agent, not only on a personal experiment. A paused agent is easier to explain than an uncapped multi-day job.

Treat proactive ranking as a suggestion. The post says Workspace can surface the message that matters most and explain why. You still decide what to delegate.

## What is still limited

Nearly 90% of the Fortune 100 use Gemini Enterprise, and nearly 80% of Google Cloud customers use its AI products, according to the same post. Those figures describe adoption of Google’s AI products. They do not mean the October 8 inline agent is on in every Workspace domain today.

Customer results elsewhere in the post, such as Bradesco cutting a document review from one hour to five minutes, describe those deployments. They are not a default for your first Gmail handoff.

Industry skills for financial services and legal teams are called out as a separate specialization. They are not required to try personal assistance in Docs.

## Bottom line

Confirm the agent is enabled, start in the thread or Doc that already holds the request, and hand off a checkable outcome. Use a coworker agent only when a group needs a standing role with its own mailbox. Set a Cloud Billing cap before the second job, and read the [small-team connector list](/blog/gemini-agent-small-business-setup/) if you are connecting Slack or Shopify at the same time.

## Sources

- Thomas Kurian, [Welcome to Gemini at Work 2026: Introducing the Gemini agent](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026), Google Cloud Blog, October 8, 2026
- [Google Cloud introduces the Gemini agent](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/), blog.google, October 8, 2026
- Sharon Prosser, [Empowering SMBs to do more with Gemini](https://cloud.google.com/blog/topics/startups/how-to-grow-your-small-business-using-google-gemini), Google Cloud Blog, October 8, 2026
- [Gemini at Work Opening Keynote](https://www.youtube.com/watch?v=cfeBv2-94pc), Google Cloud
