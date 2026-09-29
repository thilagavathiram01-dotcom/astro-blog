---
title: "How to Create Gemini Spark Task Schedules on Web"
description: "Set time-based, Gmail, and topic monitors in Gemini Spark, and keep them separate from Gemini chat scheduled actions."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity", "ai-tools", "google"]
noindex: false
---

Gemini chat can fire a reminder. Gemini Spark can run a project on a clock, a Gmail filter, or a news event. Google documents those two systems as separate features, and mixing them up is the fastest way to lose a job when you later pause Spark or hit a usage cap.

This guide follows Gemini Apps Help for Spark schedules. It covers who can use them, the three official trigger types, how to create one on the web, and how to pause it without deleting the task thread.

## Spark schedules are not chat scheduled actions

Google’s Spark help page states this in plain language: Spark schedules trigger **tasks**. [Scheduled actions](https://support.google.com/gemini/answer/16316416) automate replies inside ordinary Gemini chats.

Chat scheduled actions work on personal accounts and some Workspace editions, need Keep Activity on, and cap at **10** active actions. Spark schedules need a **Google AI Pro or Ultra** plan, a personal account, age 18+, Keep Activity on, and they cap at **50** active schedules.

Spark also has a second cap: at most **15** tasks can run at the same time. A schedule will not start if 15 tasks are already busy.

If you only want a morning digest in a chat thread, stay on scheduled actions. If you want Spark to draft a reply, touch Drive, or watch a Gmail filter, use a Spark schedule.

For the broader Spark setup (apps, skills, work panel), start with [How to Use Gemini Spark as a 24/7 Personal AI Agent](/blog/gemini-spark-personal-agent/).



![Desk calendar and planner next to a laptop](https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&w=800&q=80)



## What you need before you schedule anything

Official Spark requirements:

- Age **18 or over**
- A **personal** Google Account (work and school logins are not supported for Spark yet)
- **Google AI Pro or Ultra**
- **Keep Activity** on
- A supported region. Help lists Spark wherever Gemini Apps work **except** the European Economic Area, Nigeria, Switzerland, and the United Kingdom
- The Gemini **web** app, **mobile** app, or **Mac** app

Do not put card numbers, one-time codes, or passwords in the task box. If a site needs a login, take over the remote or local browser and type those details on the page.

## The three schedule types Google documents

Help currently lists three triggers.

**Time-based.** Run once, hourly, daily, weekly, monthly, or yearly. Example from Help: “Every day at 7 AM, look through my emails, calendar, and Drive, and let me know what to prioritize for the day.”

**Gmail monitors.** Fire when a message matches a filter you describe. Example from Help: “Whenever I receive an email from my manager with an action item for me, help me address the action item and draft a reply.”

**Topic monitors.** Watch news, finance, sports, or local events and start a task when the event happens. Example from Help: “Whenever a new food popup is announced in my city, email me the details and suggest a time on my calendar to check it out.”

Google also says monitors are a poor fit for “buy the ticket the second it goes on sale.” Treat them as near-term, not millisecond, alerts.

Time-based schedules lock to the **timezone where you created them**. Travel does not shift the clock. If you move, ask Spark to “edit the schedule based on my new timezone.”

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/amnhF6BwzZQ"
    title="Gemini Spark | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a schedule by talking to Spark

This is the path Google documents first.

1. Open [gemini.google.com](https://gemini.google.com).
2. In the sidebar, click **Switch to Spark**.
3. In the box, write the goal **and** the trigger in one prompt.
4. Type `/` and pick a skill if the job should reuse a saved playbook.
5. Click **Submit**.

Useful first prompts that stay inside Help’s examples:

- “Every weekday at 7:30 AM, scan Gmail, Calendar, and Drive. Send me a priority list. Do not send any email.”
- “Whenever I get mail from school-admin@example.edu, extract dates and add them to my family Calendar. Do not reply.”
- “Whenever a new food popup is announced in Austin, draft a Calendar hold and list the details. Do not buy tickets.”

Watch the **work panel** after the first run. Spark may pause and ask you to take over a browser step.

## Create a time-based schedule from a blank template

Manual create is **time-based only**. Gmail and topic monitors stay conversational.

1. Go to [gemini.google.com](https://gemini.google.com).
2. Sidebar: **Switch to Spark → Schedules**.
3. Click **Create manually**.
4. Name the schedule.
5. Pick the cadence.
6. Write the task instructions. Add `/skill-name` if you need one.
7. Click **Create**. The item lands in **Ongoing**.

Hover the row and choose **More → Run now** to test it before you trust the next 7 AM slot.



![Person checking a laptop calendar during a work session](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)



## Find, edit, pause, or delete

**Inside one task.** Open Spark → **Tasks**, open the thread, then open the work panel from the left edge. That panel lists every schedule that belongs to the task.

**Across all tasks.** Spark → **Schedules**. Help groups them as:

- **Ongoing** — running or ready
- **Paused** — you stopped them
- **Completed** — finished; you can only delete these

To change a time-based schedule, open it and click **Save**. To change a Gmail or topic trigger, use **More → Edit with Gemini** and describe the new filter in the thread.

Pause from the details page: **More → Pause**. Resume the same way. Deleting a **task thread** also deletes every schedule in that thread.

Turning Spark off pauses every schedule. Help says turning Spark back on resumes them.

## Why a schedule skipped a run

Help lists these causes:

- You hit Gemini Apps **compute usage** limits at the scheduled time
- **15** tasks were already running
- Run time is **approximate**, not exact to the second
- Gemini Apps were under **high traffic**
- You already have **50** active schedules, so a new one will not start

If you cancel or downgrade the plan that includes Spark, in-progress tasks finish, but schedules pause. Skills can still run in ordinary chat; Spark tasks and schedules do not.

## Tips that keep schedules safe

- Write “draft only” or “do not send” in every mail-related instruction until you have watched two clean runs.
- Pause schedules before a trip if you do not want a Gmail monitor acting while you sleep in another timezone.
- Keep Gmail monitors narrow (one sender, one label). Broad filters burn the 15-task cap.
- Pair a schedule with a skill only after the skill works once by hand. See [How to Use Gemini Spark Skills With Slash Commands](/blog/gemini-spark-skills-slash-commands/) if you are building that library.
- Do not use topic monitors for live ticket drops. Help says they are not built for that speed.

## Conclusion

Spark schedules are the “when” layer on top of a task. Pick a time, a Gmail filter, or a topic event, keep the instruction specific, and test with **Run now**. Leave chat scheduled actions for simple digests that do not need Spark’s browser or 15-task work queue.

If the Schedules page is missing, you are on the wrong plan, the wrong account type, or in a region Help still excludes. Check that first before you rewrite the prompt.

## Sources

- [Create and manage schedules for tasks in Gemini Spark](https://support.google.com/gemini/answer/17094710) — Gemini Apps Help
- [Use Gemini Spark to manage your tasks and workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Schedule actions in Gemini Apps](https://support.google.com/gemini/answer/16316416) — Gemini Apps Help
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Gemini Spark product overview](https://gemini.google/overview/agent/spark/) — Google
- [Gemini Spark | I/O 2026 Keynote](https://www.youtube.com/watch?v=amnhF6BwzZQ) — Google
