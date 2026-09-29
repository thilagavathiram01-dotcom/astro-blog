---
title: "How to Convert Gemini Gems to Skills Before Nov 17"
description: "Migrate Gemini Gems to skills before November 2026. Official dates, Spark steps, slash commands, and file transfer."
pubDate: 2026-09-29T16:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "google", "productivity"]
noindex: false
---

Google is retiring Gems in Gemini Apps. Personal accounts start the move to skills in November 2026. You can wait for the automatic conversion, or copy a Gem yourself today and start calling it with a slash in chat.

This guide follows Google’s help pages only. It covers what skills do, who can use them, how to recreate a Gem, and how to invoke more than one skill in the same thread.

## What is changing and when

Gems were custom versions of Gemini you picked from the side panel. Skills are reusable instruction packs that live in Gemini Spark and, increasingly, in regular Gemini chats.

Google lists three benefits for skills:

- Type `/` (soon `@`) plus the skill name in any Gemini chat.
- Gemini can apply a relevant skill without you naming it.
- You can stack several skills in one conversation.

Account timing, from Gemini Apps Help:

- **November 2026:** personal Google accounts.
- **March 2027:** Workspace business, enterprise, and non-profit accounts.
- **June 2027:** Workspace education accounts.

The in-app Gems manager banner reported in late September 2026 names **17 November 2026** as the date Google begins migrating Gems automatically. You can keep using a Gem until that Gem is moved. Opal and Gems by Google Labs leave on the same November schedule as personal Gems.



![Person planning a software workflow at a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Who can create skills today

Google’s create-skills help page sets three hard requirements:

1. You are 18 or older.
2. You sign in with a personal Google Account. Work and school accounts are not supported yet.
3. Keep Activity is on.

Skills currently appear in the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com). They are not a separate Play Store app.

Skills launched inside Gemini Spark. Google is rolling them into ordinary Gemini chats for personal accounts, so the Skills item may be missing on your build for a few days. If the sidebar still only shows Gems, use Spark first.

Gems worked on the free plan. Skills access is still tied to Spark for many accounts. Confirm the Skills page loads before you delete a Gem you rely on.

## Recreate a Gem as a skill by hand

Google will convert Gems automatically when they go away. Do the manual path if you want the slash command now, or if the Gem holds files you want to inspect.

### Step 1: Export the Gem text and files

1. Open [gemini.google.com](https://gemini.google.com) on a computer.
2. Open the sidebar and choose **Gems**.
3. Next to the Gem, tap **Edit**.
4. Copy the name, description, and instructions into a notes file.
5. If the Gem lists files under Knowledge, open each file and download it.

Keep those downloads. Skills do not pull Gem knowledge in bulk during the manual path. You attach files after the skill exists.

### Step 2: Create the skill

1. Open a new tab on [gemini.google.com](https://gemini.google.com).
2. In the sidebar, open **Settings**, then **Skills**.
3. Choose **Create manually**.
4. Paste the name, description, and instructions.
5. Click **Create** at the top.

Google reformats the name. Skills use lowercase words separated by hyphens, such as `plan-meal-from-recipe`. Do not fight that format.

You can also click **Create with Gemini** and describe the job in chat, or start from a Recommended template and edit it.

### Step 3: Attach knowledge files

1. On the Skills page, hover the new skill and choose **Download**. That saves a `.zip` with `SKILL.md`.
2. Unzip it. Put `SKILL.md` in the same folder as the files you exported from the Gem.
3. Zip that folder, or upload the folder if the Skills page accepts a folder.
4. On the Skills page, choose **Upload** and select the `SKILL.md` file or the zip whose main folder contains `SKILL.md`.

Scripts that need internet access are not supported on upload. Remove hidden junk such as `.DS_Store` before you zip. Those files can fail the upload.

To change files later, upload the whole skill again with the updated references. Google does not offer a single-file patch in the UI.



![Notebook and keyboard for writing reusable AI instructions](https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80)



## Write instructions that Gemini will actually pick

Google’s “Write effective skills” page treats the name and the one- or two-sentence description as routing data. A vague description means Gemini may skip the skill when you need it.

**Name**

- Start with a verb or action.
- Skip filler words such as helper, tools, or data.
- Prefer `draft-status-email` over `email-helper`.

**Description**

- Write in the third person. Do not start with “I can help you.”
- Begin use cases with “Use when…” and list concrete situations.

**Instructions**

- State the output format, tone, and tools.
- Point at other skills by name if you want a chain.
- Include examples of good and bad answers when the task is picky, such as homework help that must not reveal the solution.

Google’s own examples include writing help with past papers attached, brainstorming that ends in a design-doc template, bank-statement conversion, product descriptions, and resume-based career advice.

## Use a skill in chat or Spark

In a chat or Spark task box, type `/` and pick the skill. Google says `@` is coming as an alternate trigger.

You can name more than one skill in the same prompt. Google’s Spark help example pairs a travel-booking skill with a Gmail-writing skill so one task rebooks a room and sends the confirmation.

Gemini can also apply an enabled skill on its own when the prompt matches the description. Turn a skill off on the Skills page if you do not want that background match. If a skill is off and you still `/` it, Gemini asks whether to turn it back on.

You cannot activate, deactivate, or delete a skill from inside a thread. Those actions live on the Skills page.

If you already connect third-party tools in the same chat, keep skills for *how* the work should look and Connected Apps for *where* the data lives. The September catalog walkthrough is in [How to Use Gemini Connected Apps After the Sept 2026 Wave](/blog/gemini-connected-apps-sept-2026/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/amnhF6BwzZQ"
    title="Gemini Spark | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The I/O 2026 Gemini Spark segment shows a personal skill invoked with a slash (`/ghostwriter`) while Spark compiles Docs, mail, and chat into one draft. That is the same slash pattern the help docs use for skills today.

## Manage, share, and delete

From the Skills page you can edit text, download the zip, deactivate automatic use, or delete. Deletion cannot be undone.

Download a copy of every skill you care about before you experiment. The zip is the portable form. You can upload that zip on another personal account that meets the age and Keep Activity rules.

If you cancel or downgrade a Google AI plan, check the Skills FAQ on the same help page before you assume the skill still runs. Google documents subscription effects there; do not guess from Gems behavior.

Workspace users should treat November 2026 as a personal-account date only. Business and school migrations land in 2027. Do not delete a work Gem because a consumer banner appeared on a personal login.

## Tips before 17 November

Copy instructions out of every high-value Gem this week. Automatic migration should carry supported files, but a local copy costs nothing.

Turn Keep Activity on before you expect skills to appear. That setting is required, not optional.

Test one skill with a harmless prompt first. Confirm the output format, then stack a second skill.

Keep Gem and skill names aligned so you recognize the migrated item in November. `weekly-status-brief` is easier to find than a poetic Gem title.

Leave Gems in place until the banner on *your* account says they migrated. Google says each Gem works until its own move finishes.

## Conclusion

Gems are leaving Gemini Apps. Skills replace them with slash access, optional auto-apply, and the ability to combine more than one instruction pack in a single task.

Export the Gem, create the skill on the Skills page, attach files through a zip that contains `SKILL.md`, then call it with `/`. Personal accounts should finish that work before mid-November 2026. Workspace accounts have until 2027.

## Sources

- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [Use Gemini Spark to manage your tasks and workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google, 27 September 2026
