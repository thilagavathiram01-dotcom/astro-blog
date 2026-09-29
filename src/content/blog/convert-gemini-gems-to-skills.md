---
title: "How to Convert Gemini Gems to Skills Before Nov 17"
description: "Google will migrate Gemini Gems to skills starting November 17, 2026. Recreate a Gem now, invoke it with /, and keep your custom instructions."
pubDate: 2026-09-29T11:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google is retiring Gems in the Gemini app and replacing them with skills. The official Help Center article *About the transition from Gems to skills* says the switch starts in November 2026 for personal Google accounts. An in-app banner reported by 9to5Google is more specific: migration begins on **November 17, 2026**.

You do not have to wait. Google will recreate each Gem as a skill automatically. You can also rebuild one now so you can call it with `/` and stack it with other skills before the old manager disappears.

This guide follows Google’s published steps. It covers who can use skills today, how to copy a Gem by hand, and how to run the new skill in chat or Spark.

## What changes when Gems become skills

A Gem is a saved custom version of Gemini: name, instructions, optional knowledge files, and a default tool. A skill is also a saved instruction set. The difference is how you reach it.

Google lists three skill benefits:

- **Easy access.** Type `/` (soon `@`) plus the skill name in any Gemini chat.
- **Automatic use.** Gemini can apply a relevant skill without you picking it.
- **Stackable.** Combine more than one skill in a single chat or task.

Gems live in the side panel under My Gems. Skills live on the Skills page and in the prompt box. That is why Google is collapsing the two features.

If you already keep reusable playbooks in other assistants, the idea matches what we covered in [How to Create and Use ChatGPT Skills for Repeatable Work](/blog/chatgpt-skills-reusable-workflows/). The product names differ. The habit is the same: write the job once, invoke it later.

![Laptop on a desk with notes for a reusable AI workflow](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Official dates and account types

Google’s FAQ on the same Help article splits the timeline by account:

- **November 2026:** personal Google accounts
- **March 2027:** Workspace business, enterprise, and non-profit accounts
- **June 2027:** Workspace education accounts

Opal (the mini-app experiment) and Gems by Google Labs go away with personal Gems in November.

Press coverage of the Gemini app banner adds two extra dates. 9to5Google quotes: “Starting November 17, 2026, we’ll automatically begin migrating your Gems to skills.” Android Authority earlier found strings that lock Gem **create and edit** on **October 13, 2026**, while existing Gems keep running until they migrate. Treat October 13 as an in-app lock if you still see that banner. Use November 17 as the migration start Google has now posted in the product.

Google will automatically recreate Gems as skills when Gems go away. You can still use a Gem until its own migration finishes.

## Who can create skills today

Google’s *Create & manage skills for Gemini Apps* page lists the current gates:

- You must be **18 or over**.
- You must sign in with a **personal Google Account**. Work and school accounts are not in the first wave.
- **Keep Activity** must be on.
- Skills run in the **Gemini mobile app**, the **Gemini app on Mac**, and **gemini.google.com**.

The Android-specific Help page still says skills need a **Google AI Pro or Ultra** plan and Gemini Spark, and it excludes the EEA, Nigeria, Switzerland, and the United Kingdom. The desktop Help page now says skills are available in Gemini chat for people over 18 on a personal account, with work and school “soon.” Availability is rolling out. If you do not see Skills in the sidebar, you are not in the current wave.

Free-tier Gems stay usable until they migrate. Google has not published a separate free-tier skill plan after November. Watch the Help article for that answer instead of assuming Skills will stay free.

## Watch Gemini Spark use a skill in a live task

Google’s I/O 2026 Gemini segment shows Spark pulling a personal `/ghostwriter` skill while it drafts an email from Docs, Gmail, and recent chats.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/amnhF6BwzZQ"
    title="Gemini Spark | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Recreate a Gem as a skill by hand

Google says you can wait for auto-migration or rebuild the Gem yourself. Manual rebuild is useful if you want `/` access now, or if the Gem holds files you want to tidy before upload.

### Step 1: Copy the Gem and download files

1. Open the Gemini app or [gemini.google.com](https://gemini.google.com).
2. Open the Gem you want to keep.
3. Copy the **name**, **instructions**, and any custom tool setting.
4. Download **knowledge files** one by one. Google’s FAQ states files are not bulk-copied; each file must be uploaded again on the skill.

Keep a plain-text backup of the instructions. That file is what you paste into the skill editor.

### Step 2: Open the Skills page

1. On a computer, go to gemini.google.com (or the Gemini Mac app).
2. In the sidebar, open **Settings → Skills**.
3. On mobile, look for **Skills** after you switch into Spark if that is the path your app still shows.

### Step 3: Create the skill

Google documents four creation paths:

1. **Create with Gemini.** Describe the Gem’s job and let Gemini draft the skill.
2. **Recommended template.** Edit a prefilled skill, then click **Create**.
3. **Create manually.** Enter name, description, and instructions on a blank template.
4. **Upload.** Add a `SKILL.md` file or a folder that contains `SKILL.md` plus optional reference files. Remove hidden binaries such as `.DS_Store` first so the upload does not fail.

You can also ask Gemini in a chat to create the skill from the copied Gem text. You cannot activate, deactivate, or delete a skill from inside a thread. Those actions stay on the Skills page.

Write the **description** as a trigger list: when to use the skill and when not to. Gemini uses that text for automatic matching.

![Person reviewing documents on a laptop while building a custom assistant](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Use the new skill in a chat or task

Google documents three invocation styles:

1. **Explicit.** In the chat or task box, type `/` and select the skill.
2. **Automatic.** If the skill is turned on, Gemini can apply it when the prompt matches the description.
3. **Combined.** Add more than one skill to the same task. A skill can also reference another skill in its instructions.

Example: keep a “meeting-notes” skill and a “email-voice” skill. Start a task with `/meeting-notes /email-voice` and paste the raw transcript. One skill structures the notes. The other sets the tone of the follow-up mail.

Turn a noisy skill **off** on the Skills page if automatic matching fires too often. If a skill is off and you still call it with `/`, Gemini asks whether to turn it back on.

## Manage, edit, and download skills

From the Skills page you can:

- **Activate or deactivate** automatic use
- **Edit** name, description, and instructions
- **Replace files** by uploading the whole skill again (partial file updates are not documented)
- **Ask Gemini** to update a skill and its files
- **Download** the skill for backup
- **Delete** the skill (this cannot be undone)

Treat downloaded `SKILL.md` files like source code. Read third-party skills before you upload them.

## Tips before October lock and November migration

- **Export every Gem that matters.** Copy instructions and download files while create/edit still works.
- **Rebuild high-use Gems first.** Anything you call daily is worth a manual skill so `/` works before auto-migration.
- **One job per skill.** Google’s examples stay narrow: homework coach, brainstorm-to-design-doc, bank-statement-to-sheet, resume-based career notes.
- **Keep Activity on.** Skills require it. If you turn activity off, expect the feature to disappear.
- **Do not assume free access after November.** Gems are free today. Skills documentation still ties creation to personal accounts and, on Android Help, to Pro or Ultra plus Spark.
- **Workspace users have more time.** Business and education Gems stay until 2027, but personal Gmail used at home follows the November clock.

## Conclusion

Gems are not being deleted without a replacement. Google will recreate them as skills for personal accounts starting in November 2026, with November 17 named in the Gemini app banner. The useful work is to copy instructions and files now, rebuild the Gems you rely on as skills, and learn the `/` trigger before the side-panel manager goes away.

Start with one Gem. Paste its instructions into **Create manually**, upload the knowledge files, turn the skill on, and run the same prompt you used last week. If the output matches, leave auto-migration for the rest.

## Sources

- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Create and manage skills for Gemini Apps (Android)](https://support.google.com/gemini/answer/17094296?co=GENIE.Platform%3DAndroid) — Gemini Apps Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google
- [Google is officially killing Gemini Gems](https://www.androidauthority.com/google-sunset-gemini-gems-november-3716162/) — Android Authority
- [Gemini Spark | I/O 2026 Keynote](https://www.youtube.com/watch?v=amnhF6BwzZQ) — Google
