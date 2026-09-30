---
title: "How to Recreate Gemini Gems as Skills Before Nov 17"
description: "Google will migrate Gemini Gems to skills in November 2026. Back up knowledge files and recreate each Gem as a skill now."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "google", "productivity"]
noindex: false
---

Google is retiring Gemini Gems for personal accounts in November 2026. The in-app banner in the Gems manager now names **17 November 2026** as the date automatic migration to **skills** begins. You can keep using each Gem until Google moves it, but the safer move is to copy instructions and knowledge files yourself.

Skills are reusable custom instructions. You call one by typing `/` plus its name in any Gemini chat. Gemini can also apply a skill when your prompt matches the description. You can stack more than one skill in the same conversation.

This guide follows Google’s official help article, [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919).

## What changes on 17 November 2026

Google will remove Gems on a staggered calendar:

- **November 2026:** personal Google accounts
- **March 2027:** Workspace business, enterprise, and non-profit accounts
- **June 2027:** Workspace education accounts

Google says it will automatically recreate your Gems as skills, including supported knowledge files. Opal and Gems by Google Labs also go away in November for personal accounts.

Do not treat auto-migration as a backup. Download files first if a Gem depends on PDFs, notes, or images. GitHub files are not supported in skills today.

![Person reviewing notes on a laptop while planning an AI workflow](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Gems versus skills

A Gem lived in the sidebar. You opened it, then started a dedicated chat. A skill lives in Settings → Skills and can join any existing chat.

Official benefits of skills:

- Type `/` (soon `@`) and the skill name in any chat
- Gemini can apply a matching skill without you picking it
- Stack several skills in one thread
- Import a `SKILL.md` file you built on another platform

Limits still matter. You can create as many skills as you want, but only **100 can be active** at once. Skills work with Connected Apps such as Workspace apps. They do **not** yet work with Canvas, Deep Research, Guided learning, Create video, or Create music.

Skills in Gemini chat are available to people **over 18** signed in to a **personal** Google Account. Work and school accounts come later on the same timeline as the Gem sunset.

If you already use reusable playbooks in ChatGPT, the idea is similar to what we covered in [How to Create and Use ChatGPT Skills for Repeatable Work](/blog/chatgpt-skills-reusable-workflows/). The file format is the same family: a `SKILL.md` plus optional extras.

## Watch a short skills walkthrough

This seven-minute Gemini Spark tutorial shows how to open Skills, create one manually, and invoke it with `/`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DGdIx1O8BN8"
    title="Gemini Spark Tutorial in 7 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1: Export each Gem you care about

Do this on a computer at [gemini.google.com](https://gemini.google.com).

1. Open the sidebar and choose **Gems**.
2. Next to the Gem, click **Edit**.
3. Copy the name, description, and instructions into a plain text file.
4. If the Gem has files under **Knowledge**, open each file and click **Download**.
5. Create a local folder named in lowercase with hyphens, such as `weekly-status-writer`.
6. Move every downloaded file into that folder.
7. Leave the Gem tab open so you can copy text in the next step.

Repeat for every Gem you still use. Premade and shared Gems migrate too, but you only need a local copy of Gems you customized.

## Step 2: Recreate the Gem as a skill

Google’s official path is Settings → Skills → **Create manually**.

1. Open a new tab at [gemini.google.com](https://gemini.google.com).
2. Open the sidebar, then **Settings** → **Skills**.
3. Click **Create manually**.
4. Paste the name, description, and instructions from the Gem.
5. Gemini will normalize the name into the skill format.
6. Click **Create**.

If the original Gem had no knowledge files, stop here. Test the skill in a new chat by typing `/` and selecting it.

## Step 3: Attach knowledge files

Skills store extras next to `SKILL.md`. Google’s upload flow works in the Gemini web app and the Gemini app on Mac.

1. On the Skills page, hover the new skill and choose **Skill actions** → **Download**. That gives you a `.zip` with `SKILL.md`.
2. Unzip it and move `SKILL.md` into the folder you created in Step 1.
3. The folder name must match the skill name.
4. Back on the Skills page, choose **Skill actions** → **Replace skill**.
5. Upload the whole folder, not only the markdown file.

Supported extras today include text files, PDFs, and images. Drive files and Gemini Notebook notebooks are promised in the coming weeks, according to the same help article. GitHub-linked knowledge is not supported yet.

![Close-up of organized files and folders on a desk next to a notebook](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80)

## Write a description that actually fires

Google lists three practices for a useful skill:

1. **Say when to use it.** Name the situations, not just the job title.
2. **Keep instructions short.** Put only the rules that differ from a default Gemini reply.
3. **Add examples.** Show the output shape you want.

A weak description: “Helps with writing.”

A stronger one: “Use when I ask for a weekly status, shipped-blocked update, or Friday report. Do not use for legal review or financial forecasts. Output four headings: Shipped, In progress, Blocked, Next week.”

That trigger text is what Gemini matches when you do not type `/`.

## What will not carry over yet

Plan around these gaps so a migrated Gem does not surprise you:

- Canvas, Deep Research, Guided learning, Create video, and Create music are not wired to skills yet
- Most default tools that Gems could call are not available on skills yet
- There is no dedicated “chats with this skill” page; those threads sit in the normal side panel
- Sharing skills and attaching Drive or Notebook sources is still rolling out
- Only 100 skills can stay active; disable one to enable another

If a Gem existed only to launch Deep Research or Canvas, keep a copy of its instructions and run those tools in a normal Gemini chat until Google adds support.

## A 20-minute checklist before mid-November

1. Open Gems and list every custom Gem you still tap in a given week.
2. Download knowledge files for those Gems.
3. Recreate the top five as skills and invoke each with `/`.
4. Confirm Connected Apps still apply inside a skill-backed chat.
5. Disable unused skills so you stay under the 100 active cap.
6. Keep the text export until you see the migrated skill appear after 17 November.

You do not need to rebuild every premade Gem. Rebuild the ones whose wording you tuned.

## Conclusion

Gems are not disappearing overnight, but the sidebar habit is. After November, the durable unit is a skill: a named instruction pack you call with `/`, stack with other skills, and optionally ship as a `SKILL.md` folder.

Google will convert Gems for you. You should still export files and recreate the Gems you rely on, because unsupported files and missing tools will not announce themselves. Start with one high-use Gem this week, attach its files, and run it from a normal chat before the banner date arrives.

## Sources

- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Create and manage skills](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google (in-app 17 November date)
- [Gemini Spark Tutorial in 7 Minutes](https://www.youtube.com/watch?v=DGdIx1O8BN8)
