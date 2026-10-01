---
title: "How to Create Gemini Skills in Chat: A Step-by-Step Guide"
description: "Create Gemini skills in chat with slash commands, stacked skills, and reference files. Official steps for the web app."
pubDate: 2026-10-01T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Google is rolling skills into Gemini chat so you can save instructions once and reuse them instead of rewriting the same prompt. On 30 September 2026, Google said skills are already in Gemini Spark and are now rolling out directly into Gemini chat, with Google Workspace business, enterprise, nonprofit, and education customers coming in the following weeks.

A skill is a saved set of instructions Gemini can apply across chats and tasks. You can call it with a forward slash, let Gemini apply it when the prompt matches, or stack several skills in one request. This guide uses Google’s help centre and the 30 September product post, not third-party screenshots.

## What you need before you start

Google’s help article lists clear requirements. You must be 18 or over. Sign in to Gemini with a personal Google Account. For now, skills are not available if you sign in with a work or school account. Keep Activity must be on.

Skills are available in the Gemini mobile app, the Gemini app on Mac, and the web app at gemini.google.com. Google also notes that availability is gradual, starting with personal accounts, so the Skills entry may not appear in every chat yet.

The blog post adds a plan note: skills in chat are available to all Google AI subscription tiers, currently for users 18 and over, with under-18 access coming later. Workspace customers get the same capability in the coming weeks.

There are two known limits. Manually created skills will not save in the Gemini mobile app. Create them in a chat, or create them manually on the web. Skills that include uploaded files cannot be edited in the mobile app or the Mac app. Edit those on the web.

![Person working on a laptop at a desk](https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80)

## Create a skill on the web

The Skills page is the most reliable place to build a skill you plan to reuse.

1. Open [gemini.google.com](https://gemini.google.com) on a computer. On a Mac you can also open the Gemini app.
2. On the sidebar, open Settings, then Skills.
3. Pick a creation path:
   - **Create with Gemini** if you want the model to draft the skill from a description.
   - **A recommended template** if you want a prefilled starting point. Edit the name, description, and instructions, then click Create.
   - **Create manually** for a blank skill. Enter a name, a description of what it does, and the instructions it should follow, then click Create.
4. Confirm the skill appears on the Skills page and is turned on. Gemini can only apply a skill automatically when it is active.

You can also start from a normal chat. Ask Gemini to create a skill and describe the job, for example: create a skill that formats weekly status reports with a short summary, blockers, and next steps. Activation, deactivation, and deletion still happen on the Skills page, not inside the chat thread.

Google’s own examples of useful skills include presentation prep (outline, talking points, and likely questions), a writing-style match drawn from Workspace apps, and a rule that always returns three to five distinct viewpoints before you decide.

## Call a skill with a slash, or stack several

In a chat or task, type `/` and select the skill. Gemini can also pick an active skill on its own when the prompt matches the skill description. If a skill is off and you ask for it, Gemini asks whether you want to turn it back on.

For larger jobs, stack skills in one prompt. Google’s example is a writing-style skill plus a brand-guidelines skill, used together so the draft stays in your voice and on brand. The public skills page uses the same idea with premade commands such as `/match-my-writing-style` and `/prep-for-meetings`. You can also mention other skills inside a skill’s instructions so one workflow calls another.

If you already use Gems, read the [Gemini Gems to skills migration guide](/blog/gemini-gems-to-skills-migrate/) before November. Google will remove Gems support for personal accounts starting in November 2026, then in March 2027 for Workspace business, enterprise, and nonprofit customers, and in June 2027 for Workspace education customers. Gems are set to migrate into skills automatically. Opal, the Labs mini-app experiment, turns down in November and does not migrate.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DGdIx1O8BN8"
    title="Gemini Spark Tutorial in 7 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add reference files

From 30 September 2026, you can create skills that include reference files such as plain text documents, PDFs, or images. The help centre describes an upload path on the Skills page: a skill file, or a folder that contains a `SKILL.md` file plus optional supported reference files.

A few rules matter in practice:

- Check the folder for hidden binary files such as `.DS_Store` or `.pyc` before you upload. Google says those files can make the upload fail.
- To change files already attached to a skill, upload the whole skill with its reference files again. You can also ask Gemini to update a skill and its files.
- Edit file-backed skills on the web. The mobile app and the Mac app cannot edit them yet.
- Drive files and Gemini Notebook sources are not in chat skills yet. Google says sharing, Drive files, and notebooks from Gemini Notebook are coming in the following weeks, as skills pick up features that Gems already had.

A practical pattern is a homework-review skill that includes past papers and feedback, or a product-copy skill that includes a style sheet and a few approved examples. Keep the description specific so Gemini knows when to apply the skill without you typing `/`.

![Printed notes and a pen on a workspace](https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80)

## Manage, download, and delete

From the Skills page you can turn automatic use off, edit instructions, download the skill, or delete it. Deletion cannot be undone. Download is also the path Google documents for moving Gem knowledge files into a skill package: create the skill, download the zip that contains `SKILL.md`, add your reference files, and upload the package again.

If you cancel or change a Google AI plan, check the help article for the current rule on what happens to saved skills, because plan behaviour can change as the rollout finishes.

## Tips that save a second pass

Write the description as a trigger, not a slogan. “Use when the user asks for a weekly status update” is more useful than “helps with work.”

Put hard constraints in the instructions: length, sections, what not to invent, and whether to ask a clarifying question first.

Build on the web if you need a manual skill or files. Use chat creation on a phone until the mobile save bug is fixed.

Test with a slash command, then with a plain prompt that should match the description. If Gemini never auto-applies the skill, tighten the description or confirm the skill is active.

Do not put secrets, passwords, or private keys in a skill file. Reference files travel with the skill package when you download or re-upload it.

## Conclusion

Gemini skills replace repeated prompting with a named instruction set you can call, stack, and later attach to reference files. Personal accounts can create them now on the web, in the Mac app, and in mobile chat, with the save and edit limits above. Workspace accounts are next. If you still rely on Gems, recreate or wait for the automatic migration before the November cutoff for personal accounts.

## Sources

- Google Blog, “Let skills in Gemini tackle your most repetitive tasks,” 30 September 2026: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Gemini Apps Help, “Create & manage skills for Gemini Apps”: https://support.google.com/gemini/answer/17094296
- Gemini Apps Help, transition from Gems to skills: https://support.google.com/gemini?p=gems_to_skills
- Gemini skills overview: https://gemini.google/overview/productivity/
