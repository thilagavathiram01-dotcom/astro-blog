---
title: "How to Migrate Gemini Gems to Skills Before Nov 17"
description: "Gemini Gems become skills on November 17, 2026. Learn dates, Spark requirements, and how to recreate custom instructions."
pubDate: 2026-09-28T16:30:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

The Gemini app now shows a banner in Gem manager: Gems become skills starting November 17, 2026. Google will migrate existing Gems automatically. You can keep using them until that handoff finishes.

Gems were custom versions of Gemini with saved instructions, optional files, and a default tool. Skills do the same job inside Gemini Spark, with slash commands and the option to stack more than one skill in a single task.

This guide explains the dates, who can create skills today, how to copy a Gem before editing locks, and how to write a skill that Spark will actually pick up.

## What changes on October 13 and November 17

Two dates matter. App code reviewed by Android Authority in early September listed October 13, 2026 as the day Gem create and edit controls turn off. The in-app banner, reported by 9to5Google on September 27, says migration to skills begins on November 17.

Until migration, existing Gems keep running. After October 13 you should treat each Gem as read-only. Export or copy the name, instructions, and attached files now if you still edit them often.

Google has not published a standalone blog post for the sunset. The notice lives in the Gemini app. Treat the banner text as the source of truth if it updates again.

![Person working at a laptop with notes and a second screen](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)

## Gems versus skills

A Gem lives in the side panel. You open Gem manager, pick one persona, then chat. Sharing used a link. Knowledge files sat on that Gem.

A skill is a reusable instruction pack for Gemini Spark. Official Help defines it as instructions plus extra context that teach Gemini how to handle a type of task and which tools to use. Spark can apply a skill in the background when the prompt matches, or you can force it with `/` in the task box.

You can mix skills. Google’s own example pairs a travel-booking skill with a Gmail-writing skill in one request. That is the main upgrade over one Gem per chat.

Skills are not a free-tier feature today. Google Help states you must be 18 or over, signed in with a personal Google Account, subscribed to Google AI Pro or Ultra, and have Keep Activity on. Skills are unavailable in the EEA, Nigeria, Switzerland, and the United Kingdom for now. Work and school accounts are out.

If you cancel or drop below a Spark-capable plan, skills turn off but are not deleted. Schedules pause. In-progress Spark tasks can finish.

Free users still have Gems until migration. Google has not said in Help whether migrated skills will stay usable without Pro or Ultra. Plan for a subscription if those custom workflows matter.

## Copy each Gem before you lose the editor

Do this before October 13.

1. Open [gemini.google.com](https://gemini.google.com) or the Gemini app.
2. Open Gem manager and select a Gem you still use.
3. Copy the name, description, and full instruction block into a document.
4. Download every knowledge file. Gems accepted Docs, PDFs, and other formats. Skills uploads are stricter (see below).
5. Note the default tool (Create image, Canvas, or none) and any share links you still need.

Store that packet in Drive. You will paste it into a skill or a `SKILL.md` file later.

If you already pay for Pro or Ultra, skip the waiting period and rebuild now in Spark. You do not have to wait for Google’s automatic conversion to test the new flow.

## Create a skill in Gemini Spark

Official steps live in [Create and manage skills](https://support.google.com/gemini/answer/17094296).

1. Go to gemini.google.com (or the Gemini app on Mac).
2. In the sidebar, switch to Spark, then open **Skills**.
3. Pick a creation path:
   - **Create with Gemini** and describe the old Gem in plain language.
   - Open a **Recommended** template and rewrite the name, description, and instructions.
   - **Create manually** on a blank form.
   - **Upload** a `SKILL.md` file or a zip that contains `SKILL.md` in the root folder.
4. Click **Create**.

You can also stay in a Spark task and type: `Create a skill based on these instructions:` followed by the Gem text. Gemini saves it to the Skills page. Enable, disable, and delete still happen only on that page.

Upload rules from Help:

- Include `SKILL.md` at the root.
- Skill name inside the file must be lowercase with hyphens, such as `weekly-status-email`.
- Total upload size stays under 100 MB.
- Plain text is allowed: `.md`, `.txt`, `.json`, `.yaml`, `.py`, `.html`, and similar.
- PDFs, Word files, spreadsheets, and images are **not** supported as skill uploads.
- Scripts cannot hit the public internet.

That last pair is the trap for Gem owners. If your Gem relied on a PDF style guide, extract the text into markdown before you upload.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bj33rMHj-h4"
    title="How to Create Marketing Materials with Gemini Gems | Make AI Work for You | Google"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Write instructions Spark will trigger

Google’s [Write effective skills](https://support.google.com/gemini/answer/17102773) page is short and specific.

Name and description decide whether Spark auto-applies the skill. A vague description such as “helps with writing” will sit unused. A tight one such as “Drafts customer replies in our support voice from a ticket summary” gives the model a match target.

Write for a *type* of task, not one ticket. Include an output template. Add a “common mistakes” section so the model does not invent prices or skip a required field. Tell it what to do when information is missing: ask one question, stop, or mark a placeholder.

Reference other skills in the instructions if a workflow has stages. Keep each skill small enough to mix.

Example instruction skeleton you can paste:

```text
Name: support-reply-draft
Description: Drafts a concise customer email from a ticket summary
in our support voice. Use when the user pastes a ticket or complaint.

Instructions:
- Read the ticket. List facts you have and facts you lack.
- If the order ID or promised date is missing, ask once, then stop.
- Write a 120-word email: greeting, what we will do, next date, sign-off.
- Do not invent refund amounts or SLA times.
- Common mistakes: do not CC legal; do not promise a callback time
  unless the ticket already includes one.
```

Turn a skill off from Skills → More → Disable if Spark starts attaching it to the wrong tasks. Enable the same way. Delete is permanent.

![Code editor on a laptop during a focused work session](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Use a skill in a Spark task

In a Spark thread, type `/` and pick the skill. You can attach more than one. Spark may also attach enabled skills on its own when the prompt matches the description.

Pair skills with schedules when the work repeats. A schedule is the *when*. A task is the *what*. A skill is the *how*. Example from Help: every weekday at 8:00, summarize AI news. Another: when a flight is delayed, notify you and propose an itinerary change.

Spark schedules are not the same as scheduled actions in ordinary Gemini chat. Keep those two features separate in your head.

If you build Android agent workflows as well, the same `SKILL.md` idea shows up in developer tools. See our guide on [Android CLI and agent skills](/blog/android-cli-agent-skills/) for the command-line version used with coding agents.

## What to watch after migration

Confirm each migrated item on the Skills page in mid-November. Check the name, description, and whether auto-use is on. Re-upload text you pulled out of PDFs. Test `/skill-name` on one real task before you trust a schedule.

If you share Gems with other people today, plan a new distribution path. Help documents download as a zip, not a public Gem-style link. Recipients still need Spark access to import.

Regional and account limits will not vanish on November 17. A personal Pro or Ultra account outside the blocked regions remains the documented way to create and run skills.

## Conclusion

Gems were a saved chat persona. Skills are reusable instruction packs that Spark can stack and schedule. Copy every Gem you care about before October 13. Rebuild the important ones in Spark if you already subscribe. After November 17, review what Google migrated and fix names, descriptions, and file formats so auto-use works.

Start on the Skills page at gemini.google.com, then keep the official create and writing guides bookmarked while the banner text is still the only product notice.

## Sources

- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296)
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773)
- [Use Gemini Spark to manage tasks and workflows](https://support.google.com/gemini/answer/17094507)
- [Gemini Apps limits and upgrades](https://support.google.com/gemini/answer/16275805)
- [9to5Google: Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/)
- [Android Authority: Google is officially killing Gemini Gems](https://www.androidauthority.com/google-sunset-gemini-gems-november-3716162/)
- [Android Authority: Gems to Spark Skills teardown](https://www.androidauthority.com/google-gemini-gems-spark-skills-apk-teardown-3709228/)
- [How to Create Marketing Materials with Gemini Gems (YouTube)](https://www.youtube.com/watch?v=bj33rMHj-h4)
