---
title: "How to Migrate Gemini Gems to Spark Skills in 2026"
description: "Prepare Gemini Gems for the Nov 17 skills migration: copy instructions, create Spark skills, and invoke them with slash commands."
pubDate: 2026-09-28T11:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Google is retiring Gems in the Gemini app. An in-app banner in Gem Manager now states that Gems become skills starting **November 17, 2026**. You can keep using existing Gems until that date. Creation and editing are expected to lock earlier, on **October 13, 2026**, based on Gemini app strings reported by Android Authority.

Skills already exist inside **Gemini Spark**. They store reusable instructions the same way Gems do, but you call them with a `/` command and you can stack more than one in a single task. This guide shows how to copy your Gem text now, create a matching skill, and test it before the automatic migration.

Google has not published a full public changelog for every Gem field (default tools, share links, Knowledge files). Treat the in-app notice as the source for dates, and treat [Create and manage skills](https://support.google.com/gemini/answer/17094296) as the source for how skills work today.

## What changes on October 13 and November 17

Two dates matter if you rely on custom Gems.

**October 13, 2026.** App strings say you will no longer create or edit Gems after this date. Existing Gems still run.

**November 17, 2026.** Google says it will start migrating Gems to skills automatically. You can use a Gem until it migrates.

Gems remain available to free Gemini users today. Skills, per official help, require **Gemini Spark**, a **personal Google Account**, age **18+**, **Keep Activity on**, and a **Google AI Pro or Ultra** plan. Spark skills are not listed as available in the EEA, Nigeria, Switzerland, or the United Kingdom.

If you are on the free tier, export your Gem instructions and files before October 13. Google has not stated what free users receive after migration. Do not assume a Gem will keep working on the free plan after November 17.



![Laptop and notes used to draft reusable AI instructions](https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80)



## How Gems and skills differ

A **Gem** is a saved custom Gemini with a name, instructions, optional Knowledge files, and an optional default tool such as Create image or Canvas. You open it from Explore Gems or My Gems. You can share a Gem with a link.

A **skill** is a reusable instruction pack for Spark tasks. Official help lists three building blocks:

- **Task** — the goal, such as “plan a London trip.”
- **Schedule** — when Spark should run that goal.
- **Skill** — how Spark should do the work, including tools and extra context.

Skills can run in the background when they match the prompt. You can also type `/` and pick a skill. You can attach more than one skill to the same task. You can reference other skills inside a skill’s instructions.

That last point is the practical upgrade. A Gem is one saved personality. Skills are meant to be mixed.

If you already use agent-style workflows on Android, the same idea shows up in our [Android CLI agent skills](/blog/android-cli-agent-skills/) guide: write the method once, call it by name.

## Export every Gem before October 13

Do this first. Do not wait for the automatic converter.

1. Open [gemini.google.com](https://gemini.google.com) on a computer.
2. Open **Explore Gems** or **Gem Manager**.
3. Open each custom Gem.
4. Copy the **name**, **instructions**, and any **Knowledge** file list into a Google Doc or a local markdown file.
5. Download the Knowledge files themselves from Drive or wherever you stored the originals.
6. Note the default tool if the Gem always opened Image or Canvas.

Repeat for Gems you only use on the phone. Web and mobile share the same Gem list for a personal account.

Write one line under each export: what the Gem is for, and a sample prompt that used to work. You will paste that sample into Spark later.

## Create the matching Spark skill

Skills live under Spark, not under Gem Manager.

1. Sign in at gemini.google.com with the same personal account.
2. In the sidebar, switch to **Spark**, then open **Skills**.
3. Pick one creation path:
   - **Create with Gemini** — describe the job and let Spark draft the skill.
   - **Recommended** — start from a template, then edit name, description, and instructions.
   - **Create manually** — fill a blank form.
   - **Upload** — add a `SKILL.md` file or a `.zip` that contains `SKILL.md` in the root folder.

You can also stay in **Spark → Tasks** and type: `Create a skill based on these instructions:` followed by the text you copied from the Gem.

Name the skill in **lowercase-with-hyphens** if you upload a file. Official upload rules require that naming inside `SKILL.md`. Keep the total upload under **100 MB**. Plain text, markdown, code, JSON, YAML, CSV, HTML, and CSS are allowed. PDF, DOCX, XLSX, and images are not supported as skill files. Scripts that reach the public internet are not supported.

Write the description as a trigger. Spark uses it to decide when to apply the skill on its own. A weak description such as “helper” will rarely fire. A strong one is “Rewrite product copy in UK English, 80–120 words, no slogans.”



![Team reviewing a document on a laptop during a planning session](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Use a skill in a Spark task

Open **Spark → Tasks** and start a real job, not a one-word test.

- Type `/` and select the skill by name.
- Or write a prompt that matches the description and let Spark attach the skill.
- Stack two skills when the job has two methods, for example a travel-booking skill plus a Gmail-writing skill.

If a skill is **disabled**, Spark will not apply it automatically. Asking for it by name should prompt you to turn it back on.

After the first run, edit in place:

1. Open **Skills**.
2. Select the skill.
3. Change Description and Instructions, or choose **Edit with Gemini**.
4. Save.

You can also say in the task thread what to change. Activation, disable, and delete still happen on the Skills page, not inside the task.

Download a skill as a `.zip` from **More → Download** if you want a backup. Delete is permanent.

## Watch a Spark skills walkthrough

This public tutorial shows Spark’s Tasks, Schedule, and Skills tabs, including creating a skill and calling it from a task:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pjAjsTYmZrc"
    title="Gemini Spark Tutorial: Free AI Agent 24/7 Setup"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the automatic migration will not fix

Plan for gaps. Google’s help page does not claim that every Gem option maps one-to-one.

- **Share links.** Skills are account tools in Spark. Do not expect a public Gem URL to keep working the same way.
- **Default tools.** Recreate image or Canvas habits as explicit steps in the skill instructions.
- **Knowledge files.** Re-attach supported text files through the skill upload or point the instructions at Drive files Spark can already use in a task.
- **Free-tier Gems.** Skills currently sit behind Pro or Ultra and Spark eligibility. Export now if you are not subscribed.
- **Work or school accounts.** Spark skills require a personal Google Account today.
- **Downgrades.** If you cancel Pro or Ultra, official help says skills turn off but are not deleted. In-progress tasks can finish. Schedules pause.

For model choice after you rebuild a workflow, use current Flash IDs from the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/) rather than leftover Gem model toggles.

## A short checklist for this week

1. List every custom Gem you still open.
2. Copy name, instructions, files, and one sample prompt into a Doc.
3. Create the skill in Spark and turn it on.
4. Run the sample prompt with `/skill-name`.
5. Disable skills you do not want firing in the background.
6. Download a zip backup of skills you cannot afford to lose.

Do the export before October 13 even if you trust the November 17 converter. A pasted instruction file is cheaper than reconstructing a Gem from memory.

## Conclusion

Gems were saved personalities in the Gemini sidebar. Skills are reusable methods inside Spark tasks. The product is moving from “open this Gem” to “apply this skill, or several, on a task.” Copy your text now, rebuild the important ones in Skills, and test the slash command before Google locks Gem editing.

## Sources

- [Create and manage skills for Gemini Apps (Google Help)](https://support.google.com/gemini/answer/17094296)
- [Use Gems in Gemini Apps (Google Help)](https://support.google.com/gemini/answer/15146780)
- [Gemini app replacing Gems with skills (9to5Google)](https://9to5google.com/2026/09/27/gemini-gems-skills/)
- [Gemini Gems to Spark Skills teardown (Android Authority)](https://www.androidauthority.com/google-gemini-gems-spark-skills-apk-teardown-3709228/)
- [Gemini Spark tutorial (YouTube)](https://www.youtube.com/watch?v=pjAjsTYmZrc)
