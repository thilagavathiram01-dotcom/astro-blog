---
title: "How to Use Gemini Agent for Multi-Step Work in Apps"
description: "Turn on Gemini Agent in Gemini Apps, write a supervised plan, confirm each step, and stop or take over when the browser needs you."
pubDate: 2026-09-25T10:00:00
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Gemini chat answers one question at a time. **Gemini Agent** is the Labs tool that builds a plan, uses connected apps, and works through a live browser while you confirm each step.

Google documents Agent separately from [Gemini Spark](/blog/gemini-spark-personal-agent/). Spark is the always-on personal agent with tasks, skills, and schedules. Agent is the Tools entry that runs a single multi-step request under close supervision. This guide follows Gemini Apps Help so you can start a run, review the plan, and stop it.

## What Gemini Agent can do

Help lists Agent as an experimental feature in the Gemini web app. Official examples include:

- Categorize email and draft replies
- Send a summary of the day ahead
- Rebuild a calendar around a goal
- Research on the live web, including sites you sign in to
- Make restaurant reservations and book accommodations

Those jobs need your approval. Agent proposes a plan. You confirm or decline each task. You stay responsible for sends, bookings, and logins.

## What you need

Google’s Help page for Agent currently requires all of the following:

- Age **18 or over** and location in the **United States**
- A **personal** Google Account (work, school, and supervised accounts are not supported)
- A **Google AI Ultra** subscription on that personal account
- **Keep Activity** turned on
- English as the language for this preview

Google is rolling Agent out gradually in the Gemini mobile app and on [gemini.google.com](https://gemini.google.com). If you do not see **Tools → Agent**, you are not in the current wave.

Keep Activity must stay on for the session. If a job needs Gmail, Calendar, or another Workspace app, connect that app when Agent asks. Do not paste passwords, payment details, or one-time codes into the chat.



![Laptop open on a desk with planning notes](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)



## Start an Agent run on the web

1. On a computer, open [gemini.google.com](https://gemini.google.com) and sign in with the Ultra personal account.
2. In the text box at the bottom, click **Tools**, then **Agent**.
3. Describe the outcome, not a pile of clicks. Name the apps, the deadline, and what Agent must not do.
4. Click **Submit**.
5. If a required app is disconnected, connect it when prompted.
6. If Agent asks for more detail, answer in the same thread. To change the plan, send a prompt that states the update and submit again.
7. Review every task. Tap **Confirm** or **Decline** for each one, or use **Confirm all** / **Decline all**.

Help says a simple request often finishes in a few minutes. Longer research or booking jobs take more time. Stay on the thread until the first confirmation screen is done.

### Prompts that stay inside official examples

Use goals Help already describes so the plan stays small:

- “Every morning at 7 AM, look at unread email, summarize what I need to know, create follow-up tasks, and archive unimportant mail. Do not send any message.”
- “Rebuild my calendar for the next two weeks around deep-work blocks in the morning. Do not delete existing meetings.”
- “Research three nearby restaurants that take reservations tonight for two people. Show me the options before you book anything.”

If you create a recurring job, Help says it is saved with **scheduled actions** in Gemini Apps. That is not the same system as Spark schedules.

## Start an Agent run on Android

1. Open the Gemini mobile app with the same personal Ultra account.
2. In the text box, tap **Tools**, then **Agent**.
3. Enter the task or pick an example.
4. Tap **Submit** and connect any app Agent requests.
5. Confirm or decline each planned step.

The mobile path matches the desktop flow. Availability on phones is still a gradual Labs release, so the Tools row may appear on web first.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/q8B7z84NZUQ"
    title="Meet Daily Brief: Your new morning AI agent"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Watch the browser and take control

Some steps run in a live browser. Help tells you to supervise that surface.

- If Agent is using the browser and you dislike the path, tap **Stop response** in the chat.
- Under **Using browser**, tap **Open**, then **Take control** when a login, payment, or CAPTCHA appears.
- Finish the sensitive step yourself. Do not type secrets into the Agent prompt.

Agent is still in early development. Google’s own guidance is to interrupt when needed. Treat every booking and outbound email as unsent until you confirm it.



![Person reviewing a plan on a laptop](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)



## Agent versus Spark versus Daily Brief

Google now ships several agent-style products. Pick the one that matches the job.

**Gemini Agent (Labs).** One multi-step request from **Tools → Agent**. Ultra, US, personal account, Keep Activity on. You confirm each task. Best for a supervised research, inbox, or booking run.

**Gemini Spark.** Separate Spark workspace with tasks, skills, and schedules. Help currently lists Pro or Ultra, personal accounts, and several region limits. Best for work that should keep running after you close the laptop. Read the [Spark setup guide](/blog/gemini-spark-personal-agent/) before you mix the two.

**Daily Brief.** A morning digest from Gmail, Calendar, and Gemini chats after you enable Personal Intelligence and Memory. It organizes priorities. It does not book restaurants or rewrite your calendar by itself.

Do not expect Agent to replace Spark’s 15 concurrent background tasks. Do not expect Spark’s Skills page to appear inside the Agent tool picker.

## Limits and safety

- English only in the current Help text.
- Gradual rollout. Missing **Agent** in Tools is normal outside the preview.
- Connected apps are required for Workspace actions. Agent will ask instead of guessing.
- Recurring Agent work lands in scheduled actions, which you manage separately from Spark schedules.
- Compute limits still apply. Heavy browser research burns quota faster than a short inbox summary.

Stay on the confirmation screen for anything that spends money or messages another person. Decline the plan if the draft names the wrong calendar, the wrong inbox, or a site you did not request.

## Tips that keep runs short

Write the stop condition in the first prompt. “Do not send,” “Do not book,” and “Show options first” cut off most surprises.

Give one goal per run. A calendar rebuild plus a restaurant hunt plus an inbox purge in one message produces a long plan that is hard to audit.

Connect only the apps that job needs. Extra Workspace access is not required for a web-only research pass.

Check the plan’s app list before you tap **Confirm all**. If Calendar is listed and you only wanted a summary, decline and rewrite the prompt.

## Conclusion

Gemini Agent is the supervised Labs path for multi-step work inside Gemini Apps. Open **Tools → Agent**, state the outcome and the hard limits, connect the apps the plan needs, and confirm each step. Take over the browser for logins and payments. Stop the response if the path drifts.

Use Agent for a single job you can watch. Use Spark when you want a standing task list. Use Daily Brief when you only need a morning priority list. Official steps live in Gemini Apps Help; availability still depends on Ultra, a US personal account, and the current Labs wave.

## Sources

- [Use Gemini Agent for multi-step tasks in Gemini Apps](https://support.google.com/gemini/answer/16596215) — Gemini Apps Help
- [Use Gemini Spark to manage tasks and workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Get started with your daily brief in Gemini Apps](https://support.google.com/gemini/answer/17077455) — Gemini Apps Help
- [The Gemini app becomes more agentic](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) — Google
- [Meet Daily Brief (official video)](https://www.youtube.com/watch?v=q8B7z84NZUQ) — Google
