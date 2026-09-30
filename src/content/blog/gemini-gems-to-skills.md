---
title: "Gemini Gems to Skills: How to Prepare Before Nov 17"
description: "Gems stop accepting edits on Oct 13 and migrate to Gemini Skills on Nov 17, 2026. Copy instructions, turn on Keep Activity, and test slash commands."
pubDate: 2026-09-30T12:00:00
heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "google", "productivity"]
noindex: false
---

Google is retiring Gemini Gems. Personal Google Accounts start the automatic move to **skills** on 17 November 2026. An in-app banner in the Gems manager now states that you can keep using each Gem until it migrates, and that creating or editing Gems stops on 13 October 2026.

Skills do the same job as Gems at a high level: reusable instructions so you do not retype the same prompt. They also add slash (and, in some builds, @) invocation, automatic use when a prompt matches, and the ability to stack more than one skill in a single chat.

This guide walks through what Google has published, what to copy before mid-October, and how to create a skill from the official Skills page.

## What changes and when

Google’s help article *About the transition from Gems to skills* lists staggered dates by account type:

- **November 2026:** personal Google Accounts
- **March 2027:** Workspace business, enterprise, and non-profit accounts
- **June 2027:** education accounts

The Gemini app banner, reported by 9to5Google and Android Authority, is more specific for consumer users: Gems become skills starting 17 November 2026, and you cannot create or edit Gems starting 13 October 2026.

Google says it will “automatically transition your Gems, along with any supported files, to skills.” You should still export the text of any Gem you care about. Automatic migrations fail in quiet ways, and a plain copy in Drive or Keep is cheap insurance.

Workspace and school timelines are later. If you signed in with a work or school account, skills in consumer Gemini chats are not available yet. Google’s create-skills help page currently requires a **personal** Google Account, age 18 or over, and **Keep Activity** turned on.



![Laptop open to a planning document with notes beside it](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Gems versus skills

A Gem lives in the side panel. You open it, then start a chat that always carries those instructions.

A skill is a saved instruction set that Gemini can apply in any chat or task thread. Official differences that matter for daily use:

- **Invoke it in place.** Type `/` in the prompt box and pick the skill. Some Gemini app builds now use `@` in the Discover / Customize panel instead of a slash.
- **Stack them.** Google’s help text says you can include multiple skills in one task.
- **Let Gemini pick.** Skills that are turned on can apply in the background when the prompt matches.
- **Export as a file.** You can download a skill as a package. Uploads accept a folder that contains a `SKILL.md` file plus optional reference files.

Skills today ship first in Gemini Spark and on gemini.google.com, the Gemini mobile app, and the Gemini app on Mac. Several reports note that creating new skills still sits behind Google AI Pro or AI Ultra in Spark. Google has not published a final statement on whether migrated Gems stay usable on the free plan after 17 November. Treat paid access as a possible requirement until the help page says otherwise.

If you already connect Gmail, Drive, or Calendar to Gemini, those connectors still matter after the switch. See [how to connect apps to Gemini](/blog/connect-apps-to-gemini/) for the current Apps list and permission prompts.

## Step 1: Inventory every Gem you still use

Open the Gemini app or [gemini.google.com](https://gemini.google.com).

1. Open the side panel and go to **Gems** (or **Gem manager** in Settings).
2. Read the migration banner so you have the dates Google is showing *your* account.
3. List each custom Gem, each premade Gem you edited, and any shared Gem you rely on.
4. For each one, copy the name, the instruction block, and a note of attached files.

Paste that inventory into a Google Doc or a Keep note. Include example prompts that used to work. After the move you will test the same prompts with `/skill-name`.

Stop creating new Gems after you finish the list. Anything you invent after 13 October cannot be edited in the old manager.

## Step 2: Turn on Keep Activity and check the plan

Skills require Keep Activity. Without it, the Skills page will not let you create or run them.

1. Open Gemini **Settings**.
2. Find Gemini Apps Activity / Keep Activity and turn it on.
3. Confirm you are signed in with a personal Google Account, not a Workspace login, if you want skills before 2027.
4. Check whether your account shows Gemini Spark, Google AI Pro, or AI Ultra.

If skills are hidden, you are either on a work account, under 18, missing Keep Activity, or in a region where the rollout has not arrived.

## Step 3: Create a skill the official way

Google’s *Create & manage skills for Gemini Apps* page lists four creation paths on the Skills page:

1. Go to [gemini.google.com](https://gemini.google.com) on a computer (or the Gemini Mac app).
2. Open the sidebar: **Settings → Skills**.
3. Choose one method:
   - **Work with Gemini** to draft instructions in a conversation.
   - **Edit a prefilled template.**
   - **Start from a blank template.**
   - **Upload** a file or a folder that includes `SKILL.md` and optional reference files. Remove hidden junk files such as `.DS_Store` before you upload.

You can also ask Gemini in a normal chat to create a skill. Activation, deactivation, and deletion still happen on the Skills page, not inside that chat.

Write one job per skill. Google’s *Write effective skills* article treats a skill as a cheat sheet for a single recurring task: process, preferences, and details only you know. Combine skills later instead of stuffing five jobs into one instruction block.

Good first skills to rebuild from old Gems:

- A writing voice: tone, words to avoid, heading style, and a sample paragraph.
- A research brief: sources to prefer, citation format, and a “do not invent stats” rule.
- A meeting follow-up: extract owners, dates, and a three-bullet summary.
- A homework helper that must not give final answers, if you use Gemini with students who are 18+ on a personal account.



![Person organizing notes and a keyboard on a desk](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)



## Step 4: Invoke, stack, and schedule

In a chat or task thread, type `/` and select the skill. If your app build shows Discover / Customize, try `@` plus the skill name.

Turn the skill **on** if you want Gemini to apply it without the slash. Turn it **off** when you do not want background use. If a skill is off and you call it anyway, Gemini asks whether to activate it.

Stack two skills when the job has two constraints. Example: a “plain-language editor” skill plus a “legal disclaimer footer” skill on the same draft.

Skills also attach to Gemini Spark **tasks** and **schedules**. A task is one job. A schedule repeats that job. A skill is the instruction pack both of them can reuse. Do not confuse a Spark schedule with scheduled actions in ordinary Gemini chat; Google documents those as separate features.

The short walkthrough below shows Spark tasks, skills, and schedules in the same workspace.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DGdIx1O8BN8"
    title="Gemini Spark Tutorial in 7 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 5: Edit, download, or delete after the move

On the Skills page you can:

- **Edit** instructions. To change attached files you must upload the whole skill package again.
- **Download** the skill so you have a local copy.
- **Delete** the skill. Google warns that delete cannot be undone.

Ask Gemini to update a skill in chat if you only need a wording tweak. Then open Skills and confirm the saved text matches what you expected.

After 17 November, open each migrated Gem-as-skill and run one old prompt. If the output drifts, paste your backup instructions into a new skill and turn the migrated copy off.

## Practical tips

- Copy Gem instructions before 13 October. That is the last day the old editor is guaranteed to work.
- Keep one skill per outcome. Stacking is cheaper to debug than a 2,000-word mega-Gem.
- Name skills the way you will type them. `/weekly-status` beats `/My Cool Helper 3`.
- Leave Keep Activity on if you want automatic skill use.
- Check Connected Apps after the migration. Skills that mention Gmail or Drive still need those connectors. Pair this with [Gemini in Gmail](/blog/gemini-in-gmail/) if mail drafts are part of the workflow.
- Watch the plan requirement. If you are on the free tier, confirm after 17 November whether the migrated skill still runs.

## What this does not change

Gems going away does not restore Google Assistant. On phones that took the late-September Google app update, the “Switch to Google Assistant” control is already gone, and Gemini handles the power-button and corner-swipe assistant on Android. Nest speakers and Home displays still use Assistant for now.

Skills also do not replace Gemini Live or Daily Brief. Those products keep their own settings.

## Conclusion

Treat 13 October as the freeze date for Gem edits and 17 November as the cutover for personal accounts. Export instructions now, turn on Keep Activity, and rebuild the two or three Gems you open every week as skills with `/` invocation. Let Google migrate the rest, then test. A short backup in Drive beats a surprise empty sidebar in November.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Google Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Google Help
- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Google Help
- [Gemini app replacing Gems with skills in November](https://9to5google.com/2026/09/27/gemini-gems-skills/) — 9to5Google
- [Google is officially killing Gemini Gems](https://www.androidauthority.com/google-sunset-gemini-gems-november-3716162/) — Android Authority
