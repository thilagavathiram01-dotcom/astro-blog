---
title: "How to Create Gemini Spark Skills and Use Slash Commands"
description: "Build reusable Gemini Spark skills, invoke them with a slash, stack several on one task, and write names that auto-apply."
pubDate: 2026-09-28T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Gemini Spark skills store the instructions you repeat. You write them once. Spark then applies them in the background or when you type `/` in a task.

This is not a sidebar personality. Skills live inside Spark tasks and schedules. Google’s help pages list who can create them, where they run, and how to call more than one at a time.

If you still keep old Gems, treat this as the working replacement path. Google is migrating Gems into skills later this year. See our [Gems-to-Spark-skills checklist](/blog/gemini-gems-to-spark-skills/) for the dates and a copy-out plan.

## What a skill is

Google defines a skill as a set of reusable instructions plus extra context. It teaches Spark how to handle one kind of job: the steps, the format, the tools, and the mistakes to avoid.

A task is the job you want done now. A schedule is when that job should run. The skill is how Spark should do it. Official examples include a Travel Booking skill plus a Gmail Writing skill on the same request, so Spark rebooks a room and drafts the confirmation in one thread.

Skills can also attach files you reuse. Help text still blocks uploaded scripts that need internet access. Check uploads for hidden files such as `.DS_Store` or `.pyc` before they fail.



![Laptop and notes on a desk during a work session](https://images.unsplash.com/photo-1499750310107-5fef99a99866?auto=format&fit=crop&w=800&q=80)



## Who can create skills

Google’s Create & manage skills article lists hard requirements:

- You must be 18 or older.
- Sign in with a **personal** Google Account. Work and school accounts are out for now.
- You need a **Google AI Pro or Ultra** plan.
- Keep Activity must be on.

Skills run only inside Gemini Spark, on the Gemini mobile app, the Gemini app on Mac, and gemini.google.com. They are not available in the European Economic Area, Nigeria, Switzerland, or the United Kingdom at the time of that help page.

If Spark is missing from the sidebar, you are on the wrong account, plan, or region. Do not hunt for a hidden toggle in regular chat.

## Create a skill from the Skills page

1. Open [gemini.google.com](https://gemini.google.com) on a computer. On a Mac you can use the Gemini desktop app instead.
2. In the sidebar, switch to Spark and open **Skills**.
3. Choose a creation path: work with Gemini, start from a prefilled template, start from a blank template, or upload a skill file.
4. Give the skill an action-first name and a one- or two-sentence description. Google says those two fields decide whether Spark auto-applies the skill.
5. Write instructions for a *type* of task, not one one-off request. Add an output template if you need a fixed format.
6. Add a short “common mistakes” section and tell Spark what to do when a required detail is missing.
7. Save. Confirm the skill shows as on if you want background use.

You can also create a skill inside an open Spark task. Ask Spark to build one from your instructions. You still manage on/off and delete from the Skills page, not from that thread.

## Call a skill with a slash

Open a Spark task. In the text box, type `/`, then pick the skill. On the Mac app, `/` or `@` both work for this picker.

You can stack more than one skill on the same task. That is the main difference from a Gem: you do not lock the whole chat to a single custom assistant.

Spark can also apply turned-on skills without a slash when the prompt matches the name and description. If a skill is off and you still ask for it, Spark asks whether to turn it back on.

Schedules use the same `/` picker. When you create a schedule by chat or with **Create manually**, attach the skill there so the timed run uses your process, not a generic draft.



![Person writing a checklist in a notebook next to a keyboard](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80)



## Write instructions Spark will actually use

Google’s “Write effective skills” page treats the name and description as routing metadata. A vague name such as “Helper” will sit unused. Start the name with a verb: “Draft client email,” “Format bank CSV,” “Outline design doc.”

Keep one job per skill. Combine jobs at task time with two slash commands instead of stuffing every rule into one file. You can reference other skills from inside the instructions when you need a longer chain.

Use a checklist when the work has a fixed order. Tell Spark what to ask you when a field is empty. That line exists so the model does not invent a date, a price, or a name.

Official sample categories on the Skills page include writing help that refuses to hand over homework answers, brainstorming that ends in a design-doc template, converting statements into spreadsheets, and career notes grounded in a resume you attach.

## Manage, edit, and delete

All of this happens on the Skills page:

- **Enable / disable** controls automatic use. Disabled skills stay in the `/` list if you turn them on when asked.
- **Edit** on the page, or ask Spark in a task thread to update the skill and its files.
- **Download** if you want a local copy before a rewrite.
- **Delete** is permanent. Google’s help text says you cannot undo it.

If you cancel or drop below Pro or Ultra, treat skills as plan-gated. Recheck the same help article after a billing change instead of assuming the files stay runnable.

## Pair skills with Daily Brief and connected apps

Skills do not replace a morning digest. Daily Brief still needs Personal Intelligence and Memory on a personal US account. Use skills for *how* Spark writes or files work after you read that list.

Spark’s product page lists native Google apps: Gmail, Calendar, Drive, Docs, Sheets, Slides, YouTube, and Maps. Those connections start off. Turn on only the apps a skill will touch.

Do not put secrets in a skill file that you later download or share. Treat uploaded context as standing memory for that account.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/amnhF6BwzZQ"
    title="Gemini Spark | I/O 2026 Keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips

- Build one skill you will use this week. A unused library of templates does not help Spark pick the right one.
- Test with `/` first, then turn on auto-use after two clean runs.
- Keep Gem text exported until the November migration finishes. Skills and Gems still overlap until Google completes that move.
- If you work in an excluded country, wait for the region list to change. There is no supported workaround in the official docs.

## Conclusion

Spark skills are reusable methods, not chat skins. Create them on the Skills page or by asking Spark, name them with a verb, call them with `/`, and stack two when the job crosses apps.

Start with one writing or filing skill, attach it to a real task, and only then add a schedule. That order matches how Google documents tasks, skills, and schedules.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [Use Gemini Spark to manage your tasks & workflows](https://support.google.com/gemini/answer/17094507) — Gemini Apps Help
- [Create & manage schedules for tasks in Gemini Spark](https://support.google.com/gemini/answer/17094710) — Gemini Apps Help
- [Gemini Spark overview](https://gemini.google/overview/agent/spark/) — Gemini
- [The Gemini app becomes more agentic](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) — Google Blog
- [Gemini Spark | I/O 2026 Keynote](https://www.youtube.com/watch?v=amnhF6BwzZQ) — Google
