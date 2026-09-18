---
title: "How to Use Gemini Spark as a 24/7 Personal AI Agent"
description: "Set up Gemini Spark on web, Android, iOS, or Mac: connect Workspace apps, create Tasks, Skills, and Schedules, and supervise browsing so the agent works under your direction."
pubDate: 2026-09-18T16:00:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
---

Gemini chat waits for a prompt. **Gemini Spark** is Google’s always-on agent: you give it a goal, it keeps working in the background, and it can continue even when the phone is locked or the laptop lid is closed.

Google describes Spark as a personal agent that operates **under your direction**. Connections start off. High-stakes steps such as sending mail or spending money are designed to ask first. This guide follows Google’s product page and Gemini Apps Help so you can turn Spark on, assign work, and stop it when you need to.

## What you need

Official Help currently requires all of the following:

- Age **18 or over**
- A **personal** Google Account (work and school accounts are not supported for Spark yet)
- A **Google AI Pro or Ultra** subscription
- **Keep Activity** turned on in Gemini Apps
- Gemini Apps in a supported region. Help lists Spark as available where Gemini Apps work **except** the European Economic Area, Nigeria, Switzerland, and the United Kingdom

Surfaces Google documents today: the **Gemini web app**, the **Gemini mobile app**, and the **Gemini app on Mac**. Availability still varies by country and plan. If you do not see a Spark tab, you are not in the current wave.

## Tasks, Skills, and Schedules

Spark is not one giant prompt. Google splits the work into three parts.

**Task — the what.** A high-level goal Spark should manage. Example from Help: “Plan and manage my business trip to London.”

**Schedule — the when.** A time or a condition that starts the task. Examples from Help: “Every day at 8AM, give me an update on AI news” or “When my flight is delayed, notify me and propose an update to my itinerary.” Spark schedules are not the same as scheduled actions inside ordinary Gemini chat.

**Skill — the how.** Reusable instructions plus extra context. You can call a skill with `/` (and `@` on Mac). Help’s example is a travel-booking skill plus a Gmail-writing skill used together to rebook a room and send a confirmation.

Google’s own product page uses the same three ideas with prompts such as a Monday inbox recap, a “ghostwriter” skill built from your last 50 sent emails, and a photography-lead pipeline that writes into a Sheet and creates a Drive folder.

![Laptop and analytics dashboard on a desk](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80)

## Turn Spark on and connect apps

Connections are **off by default**. Spark only uses what you enable.

Official first-party connections listed on the Spark product page and Help include Gmail, Calendar, Drive, Docs, Sheets, Slides, YouTube, Maps, Keep, Tasks, Contacts, Gemini Notebook, Photos, and Search services such as Finance, Flights, Hotels, and Maps.

1. Open [gemini.google.com](https://gemini.google.com) or the Gemini app.
2. Open **Spark** from the sidebar (web/Mac) or **Menu → Spark** on a phone.
3. Open **Gemini Spark Settings**.
4. Enable only the Connected Apps the task actually needs.
5. Leave payment, shopping, and mail-send confirmations on until you trust a workflow.

Do not paste passwords, card numbers, or one-time codes into the task thread. Help is explicit: if a site needs a login or payment, take over the browser and type those details on the page yourself.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/LEldTW4Zkhg" title="Meet Gemini Spark, official Google video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Create your first task on the web

1. Go to [gemini.google.com](https://gemini.google.com).
2. In the sidebar, click **Switch to Spark**.
3. Describe the goal in the text box. Include the schedule in the same sentence if you want it to repeat.
4. Type `/` and pick a Skill if you already have one.
5. Click **Upload & tools** to attach files, Drive items, or a Notebook.
6. Submit, then watch the **work panel** (progress chip at the top of the thread).

Help says you can keep up to **15 tasks** running at once, subject to the same compute usage limits as the rest of Gemini.

### Practical first tasks

Use goals Spark can finish without spending money:

- “Every Monday at 9:00 AM, scan last week’s Gmail, give me a recap of the important threads, and draft a prioritized to-do list. Do not send any email.”
- “When a flight or hotel confirmation arrives, add the dates to my trip Sheet. Do not book anything new.”
- “Scan my Drive folder Project Atlas and build a spreadsheet of file names, last edited date, and a one-line note. Do not delete files.”

Those three match Google’s own examples: inbox synthesis, trip logistics, and Drive inventory.

## Create a task on Android or iOS

1. Open the Gemini app.
2. Tap **Menu → Spark**.
3. Describe the task the same way you would on the web.
4. Add a schedule or a `/skill` if you need one.
5. Submit, then tap the **progress chip** to open Progress, Schedules, Files, or Skills and apps.

Full Skill management still lives on the web. Help notes that the Skills page is **gemini.google.com only**. The mobile app can edit a skill’s `SKILL.md` in conversation, but the library lives on desktop.

![Person reviewing work on a laptop](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80)

## Add a Skill you will reuse

A Skill is the part you write once so you stop re-explaining tone and tools.

Google’s product-page example:

> Read through the last 50 emails that I wrote and turn it into a style guide for how I write emails. Turn that into a skill that gets called every time I ask you to draft emails for me. Call that skill ghostwriter.

On the web:

1. Open Spark → **Skills**.
2. Start from a recommended skill or write your own instructions.
3. Name it something you will remember (`ghostwriter`, `invoice-log`).
4. Call it later with `/ghostwriter` inside a task.

If you cancel or downgrade the Google AI plan that includes Spark, Help says you lose access to Spark **and** to those tasks, schedules, and skills.

## Add a Schedule

Help currently lists time-based schedules that can run once, hourly, daily, weekly, monthly, or yearly, plus event-style conditions such as a delayed flight.

1. Include the cadence in the task (“every weekday at 8:00”) or add a schedule from the task’s work panel.
2. Pause a schedule from **Schedules → More → Pause** if you will be offline and do not want it to fire unsupervised.
3. Remember Help’s warning: if a schedule runs while you are offline, you may not be able to stop an unintended action in time.

Scheduled Spark work is also subject to delay when Gemini Apps are under heavy load.

## How Spark browses the web

For shopping, travel, or reservations, Spark can use **Gemini in Chrome auto browse**.

- **Local Chrome** (desktop Chrome only, per current Help): Spark can use sites you are already signed into. Chrome asks for permission the first time. Your device and Chrome must stay awake. If the machine sleeps, Spark may fall back to a remote browser.
- **Remote browser**: work continues after you close the lid. The task pauses when a site demands a login until you take over.

Every browsing task asks for confirmation. You can stop auto browse from the Chrome side panel or cancel the whole task from the Spark text box. To wipe remote session data: **Settings & help → Gemini Spark Settings → Delete remote browser data** (and separately **Delete remote code execution**).

On Mac, Spark can also work on **connected local folders**. Google’s examples include sorting PDFs in Downloads and building a budget Sheet from invoices on disk. Keep folder access narrow.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/7GkIWPPC9i0" title="Gemini Spark beginner walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Supervise, pause, or turn Spark off

Treat Spark like a junior assistant with cloud access.

- Open the work panel and read completed, current, and planned steps.
- Click files Spark touched before you trust the result.
- Take over the remote or local browser when a form, payment, or login appears.
- Pause schedules before travel or a weekend you do not want automated mail.
- Turn Spark off in **Gemini Spark Settings**. Help says that deletes remote browser and remote code-execution data. It does **not** erase local Chrome history. Existing task threads and files Spark already wrote stay until you delete them. Schedules do not run while Spark is off.

Google’s footer on the product page is the right default: check responses, supervise closely, interrupt when needed.

## What Spark is not

- It is not ordinary Gemini chat. Chat answers a question; Spark runs a project.
- It is not available on a free Gemini account.
- It is not reading your entire inbox “just in case.” Google’s FAQ says it does not read mail indiscriminately; it works on the email jobs you assign.
- It is not a substitute for reviewing a send, a booking, or a file delete.

## Conclusion

Spark is useful when the job is multi-step and boring: weekly inbox recaps, trip Sheets, invoice hunts, Drive inventories, and Skills that encode how you already write. Start with one Connected App, one Task that cannot spend money, and a schedule you can pause. Watch the work panel once before you let anything run overnight.

Official entry points: [gemini.google.com/spark](https://gemini.google.com/spark) and the Spark tab in the Gemini mobile or Mac app when your plan and region include it.

## Sources

- [Gemini Spark product overview](https://gemini.google/overview/agent/spark/) — Gemini
- [Use Gemini Spark to manage tasks and workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Create and manage schedules in Gemini Spark](https://support.google.com/gemini/answer/17094710) — Gemini Apps Help
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [The Gemini app becomes more agentic](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) — Google
- [Meet Gemini Spark (official video)](https://www.youtube.com/watch?v=LEldTW4Zkhg) — Google
