---
title: "Migrate Gemini Gems to Skills Before Nov 17, 2026"
description: "Google will start converting Gemini Gems into Spark skills on November 17, 2026. Save instructions, learn slash commands, and rebuild workflows now."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

Google is retiring Gems, the custom Gemini personas it launched in 2024. An in-app banner in the Gems manager now states that migration to **skills** begins on **November 17, 2026**. You can keep using each Gem until Google converts it.

Skills already exist inside **Gemini Spark**. They store reusable instructions, attach files, and fire from a slash in the prompt box. This guide explains what changes, who can create skills today, and how to copy your Gems before edit access tightens.

## What the November 17 notice actually says

Reporters who opened the Gems manager in late September 2026 recorded this message from Google:

> Starting November 17, 2026, we’ll automatically begin migrating your Gems to skills. You will be able to use your Gems until they migrate.

An earlier Google app teardown published by Android Authority on September 9 described a two-step schedule inside the client: **create and edit Gems lock on October 13, 2026**, then automatic conversion on November 17. Treat October 13 as the last safe day to tidy names, instructions, and attached files.

Google has not published a full Help Center article for the Gem-to-skill move yet. The “Learn more” link and some “Create skills” buttons in regular Gemini chat were still dead when the banner appeared. Use the live Spark skills docs below instead of waiting for that page.

![Laptop open to a chat-style AI workspace with notes beside it](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Gems versus skills

A **Gem** is a saved custom version of Gemini. You give it standing instructions, pick a default tool such as Create image or Canvas, attach files for context, and share it with a link. Google opened Gems to free accounts in March 2025.

A **skill**, per Google’s Help Center, is a set of reusable instructions and extra context that teaches Gemini how to run one type of task and which tools to use. Spark can apply a skill in the background when the prompt matches, or you can force one by typing `/` and picking it. You can stack several skills in a single task.

The overlap is real: both store “how I want this done.” The access model is different. Gems live in a side-panel list. Skills live next to the prompt and can run together. That is the main reason Google is collapsing the two features.

If you already use reusable playbooks in other products, the pattern matches [ChatGPT Skills for repeatable work](/blog/chatgpt-skills-reusable-workflows/). The invocation character differs (`/` in Spark, `@` in ChatGPT), but the job is the same: write the process once.

## Who can create skills today

Google’s article *Create & manage skills for Gemini Apps* lists hard requirements:

- You must be 18 or older.
- Sign in with a **personal** Google Account. Work and school accounts are out for now.
- You need a **Google AI Pro or Ultra** subscription.
- **Keep Activity** must be on.
- Skills run only inside **Gemini Spark**, on the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com).
- Spark skills are unavailable in the European Economic Area, Nigeria, Switzerland, and the United Kingdom.

Gems remain free until they migrate. Skills, as of this writing, are a paid Spark feature. Google has not said whether free-tier Gems will become usable skills after November 17 or whether those users will only keep a read-only leftover. Plan as if you need Pro or Ultra to keep editing after the switch.

## Watch a short Spark skills walkthrough

This seven-minute tutorial shows the Skills page, a blank template, and how `/` pulls a skill into a task. Pair it with Google’s Help articles rather than treating any third-party video as the spec.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DGdIx1O8BN8"
    title="Gemini Spark Tutorial in 7 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Save every Gem before October 13

Do this now, even if you expect an automatic conversion.

1. Open Gemini on the web or in the app and go to the **Gems** manager.
2. Open each Gem you still use.
3. Copy the **name**, the full **instructions**, the default tool, and a list of attached files into a private doc.
4. Download any files that only exist inside that Gem.
5. Note share links if teammates rely on them. Skills are not documented as public Gem-style links.

If the October 13 lock lands as the app code described, you will still *run* Gems until mid-November. You will not be able to fix a typo or swap a file after that date.

## Create the replacement skill in Spark

On a computer:

1. Go to [gemini.google.com](https://gemini.google.com) (or the Gemini Mac app).
2. In the sidebar, switch to **Spark**, then open **Skills**.
3. Choose one path: work with Gemini to draft the skill, start from a prefilled or blank template, or **upload a skill file**.
4. Give the skill an action-first name and a one-to-two sentence description. Google says those two fields decide when Spark auto-applies the skill.
5. Paste the old Gem instructions. Add a short “common mistakes” block and tell Spark what to do when a required detail is missing.
6. Attach the same reference files you used in the Gem.
7. Save, then test with `/` in a Spark task.

You can also finish a Spark task once and ask Gemini to turn that run into a skill. You cannot activate, deactivate, or delete a skill from inside a task thread. Those controls stay on the Skills page.

![Person reviewing notes and a second screen while setting up a workflow](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Write instructions Spark will actually pick up

Google’s *Write effective skills* page is the checklist to copy:

- Name the skill with a **verb**: “Draft weekly status,” not “Status helper.”
- Describe **when to use it and when not to**. A vague description means Spark may skip it.
- Write for a **type** of task, not one specific email from last Tuesday.
- Add an output template if the format must stay stable.
- List common mistakes (invented metrics, skipped sources, wrong tone).
- Say what to do when a file or fact is missing. Do not let the model fill gaps quietly.

Example description:

> Draft a one-page weekly status from notes. Use when the user asks for a status update or shipped / blocked summary. Do not use for financial forecasts.

Then invoke it with `/draft-weekly-status` until you trust automatic matching. Turn a noisy skill **off** on the Skills page. If you later type `/` for a disabled skill, Spark asks whether to enable it again. Deleting a skill cannot be undone; download a copy first if you may need it.

## Combine skills instead of one mega-Gem

Gems often mixed tone, tools, and files in one blob. Skills work better as small pieces. Google documents mixing several skills in one task. A travel change, for example, can call a booking skill and a Gmail-writing skill together.

Spark also has **tasks** (the job) and **schedules** (when the job runs). Skills only describe *how*. Keep those three layers separate so a schedule can reuse the same writing skill every Monday.

Connected apps stay off until you enable them. Spark can work with Gmail, Calendar, Drive, Docs, Sheets, Slides, YouTube, Maps, and, from mid-2026 updates, Keep and Tasks plus selected third-party apps. Review those toggles before a migrated Gem tries to act on mail or files.

## Limits you should expect

- **Subscription and region gates** remain. Downgrading Pro or Ultra can restrict skill creation and editing; check Google’s FAQ on that Help page if you plan to cancel.
- **No work or school accounts** for skills yet.
- **Uploaded skill files** cannot include scripts that need the internet. Strip hidden files such as `.DS_Store` before upload.
- **Share links** from Gems may not map 1:1. Rebuild team workflows as skills the teammates can invoke, not as a public Gem URL.
- **Free-tier outcome is unconfirmed.** Do not assume every free Gem becomes an editable skill on November 17.

## Conclusion

Treat November 17 as the start of Google’s conversion, not as a surprise. Export every Gem this week, rebuild the keepers as Spark skills with clear names and `/` tests, and leave October 13 as a hard edit cutoff. Automatic migration should preserve the text. It will not fix vague instructions or a missing file.

Official how-to detail lives in [Create & manage skills](https://support.google.com/gemini/answer/17094296) and [Write effective skills](https://support.google.com/gemini/answer/17102773). Watch the in-app Gems banner for the final Help article when Google ships it.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [Gemini Spark overview](https://gemini.google/overview/agent/spark/) — Google
- [Gemini Spark updates: macOS launch, connected apps and more](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) — Google blog, June 30, 2026
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google, September 27, 2026
- [Google could auto-migrate Gemini Gems to Spark Skills](https://www.androidauthority.com/google-gemini-gems-spark-skills-apk-teardown-3709228/) — Android Authority, September 9, 2026
