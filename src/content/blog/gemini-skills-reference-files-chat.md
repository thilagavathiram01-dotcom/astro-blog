---
title: "How to Add Reference Files to Gemini Chat Skills"
description: "Attach PDFs, text, and images to Gemini skills, invoke them with /, and stack skills in regular Gemini chat."
pubDate: 2026-09-30T16:00:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2ad6e43?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google is moving custom instructions out of Gems and into skills. On 30 September 2026 the company said skills now roll out in regular Gemini chat worldwide, not only inside Gemini Spark.

A skill is a named packet of instructions plus optional files. You build it once. You call it later with a forward slash, or you let Gemini attach it when your prompt matches.

This guide follows Google’s Help article and the product post. It covers who can create skills, how to attach reference files, and how to stack two skills on one prompt.

## What changed on 30 September

Skills already lived in Gemini Spark. The new rollout puts the same objects into Gemini chat for personal Google Accounts.

Google’s footnote on the launch post says the chat rollout is available to all Google AI subscription tiers, for users 18 and older, with under-18 access coming later. Gemini Apps Help also states that skills can be used in chats without a Google AI subscription.

Workspace business, enterprise, nonprofit, and education accounts get skills in the coming weeks. Gems stay until the published cutoff dates.

![Laptop and documents on a desk used for writing reusable AI instructions](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## Who can create a skill today

Google Help lists three hard requirements:

- You are 18 or over.
- You sign in with a **personal** Google Account. Work and school logins are not supported yet.
- **Keep Activity** is on.

Skills currently run in the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com). Help says they are not on every surface yet, and the company is still expanding chat availability.

If the Skills item is missing from Settings, wait for the account flag. Do not assume a Play Store update alone unlocks it.

## Create a skill on the Skills page

1. Open [gemini.google.com](https://gemini.google.com) on a computer, or the Gemini Mac app.
2. Open the sidebar and choose **Settings → Skills**.
3. Pick one path:
   - **Create with Gemini** and describe the job in chat.
   - **Create manually** and type a name, description, and instructions.
   - Open a recommended template and edit it.
   - **Upload** a `SKILL.md` file or a folder or `.zip` that contains `SKILL.md` at the root.

You can also type a request in an ordinary chat: “Create a skill based on these instructions: …” Gemini saves the result to the Skills page.

Name the skill in lowercase with hyphens if you upload a file (`brand-voice`, not `Brand Voice`). That is the naming rule in Help.

## Attach reference files

Starting with the 30 September post, a skill can carry reference files: plain text, PDFs, or images. Help is more specific about formats.

Supported uploads include `.txt`, `.md`, `.pdf`, `.jpg`, `.png`, plus common code and config extensions such as `.py`, `.json`, `.yaml`, and `.csv`. Word and Excel binaries (`.docx`, `.xlsx`) are not supported.

Rules that matter:

- Put `SKILL.md` in the root of the folder or zip.
- Keep the whole package under **100 MB**.
- Scripts cannot call the public internet.
- To change files later, upload the **entire** skill package again. Help does not offer a single-file patch.

Strip junk files such as `.DS_Store` before you zip. Hidden binaries can fail the upload.

Good first attachments: a one-page brand sheet, a slide outline template, last quarter’s scoring rubric, or a product photo the model should match.

![Person reviewing printed notes next to a notebook and keyboard](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80)

## Call a skill in Gemini chat

In the prompt box, type `/` and pick the skill. That is the method Google published for both chat and Spark tasks.

Leave the skill **activated** if you want Gemini to attach it when a prompt matches. Deactivate it from the Skills page if you only want slash calls.

You cannot activate, deactivate, or delete a skill from inside a thread. Those actions stay on the Skills page.

If a skill is off and you still name it, Gemini asks whether to turn it back on.

## Stack skills on one job

Google’s examples pair a writing-style skill with a brand-guidelines skill. Help uses a travel-booking skill plus a Gmail-writing skill on the same trip task.

Do the same when the output has two constraints. Keep each skill narrow. Put voice rules in one file and legal footer rules in another. Call both with `/` on the same prompt.

You can also mention another skill inside a skill’s instructions. Use that for a fixed sequence, not for every draft.

For Spark-only schedules and background tasks, see our [Gemini Spark slash-command guide](/blog/gemini-spark-skills-slash-commands/). Chat skills and Spark tasks share the same Skills library.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7GkIWPPC9i0"
    title="Gemini Spark: Google’s Most Powerful Personal Agent"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What happens to Gems and Opal

Google will automatically recreate Gems as skills when Gems go away. Personal accounts lose Gems starting in November 2026. 9to5Google reported an in-app banner that names **17 November 2026**.

Workspace business, enterprise, and nonprofit accounts keep Gems until March 2027. Education accounts keep them until June 2027.

Opal, the Labs experiment for mini apps, turns down in November with Gems. Labs Gems do not migrate into skills.

If a Gem holds knowledge files, download those files now. Help does not list every unsupported file type that might drop during migration.

Sharing skills and attaching Drive files or Gemini Notebook sources is listed as coming in the following weeks, not as a same-day switch.

## Practical skill ideas Google named

Use these as starting briefs, then add your own files:

- **Presentation prep.** Outline slides, talking points, and likely questions. Attach last year’s deck PDF if it is text-readable.
- **Writing style.** Describe tone and banned phrases. Attach two samples you already published.
- **Multiple viewpoints.** Instruct Gemini to return three to five distinct takes before a recommendation.
- **Homework coach.** Tell it not to hand over final answers. Attach prior feedback, not answer keys you want hidden from the student.
- **Product copy.** Attach a spec sheet and one approved photo.

Keep Activity stays on while skills run. Treat uploaded PDFs as data you accept Gemini Apps may use under that setting.

## Tips that prevent broken skills

- Write the description as a trigger. Gemini uses it to auto-apply the skill.
- Put format rules in the instructions (“five bullets, no title case headings”), not only in chat.
- Test the skill with `/` on a throwaway prompt before you stack a second skill.
- Download a `.zip` backup from **More → Download** after every serious edit.
- Delete is permanent. Copy the zip first.
- Do not put secrets in `SKILL.md`. The file is easy to download and easy to share once sharing ships.

## Conclusion

Skills are now the official way to reuse instructions in Gemini chat. Create one on the Skills page, attach a small set of text or PDF files, and call it with `/`.

Leave Gems in place until Google migrates them, but rebuild anything you rely on weekly so you can stack it with a second skill today. Check Settings → Skills on gemini.google.com if the control is not on your phone yet.

## Sources

- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google, 30 September 2026
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google
