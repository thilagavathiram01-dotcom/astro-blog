---
title: "Build Gemini App Skills Before Gems Move in November"
description: "Create Gemini app skills on a personal account, call them with a slash, upload SKILL.md, and plan the Gems move before November."
pubDate: 2026-10-01T11:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Typing the same briefing into Gemini every morning wastes the first five minutes of the chat. Google is replacing that habit with **skills**: saved instructions you call with a forward slash, or that Gemini can apply when the prompt matches.

On 30 September 2026, Google said skills are rolling out into Gemini chat for personal accounts, and that Gems will start coming out for those accounts in November. Help Center pages already list the exact create, upload, and manage steps. If Skills is missing on your account, the rollout is still gradual.

![Person working on a laptop at a wooden desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## What a Gemini app skill is

A skill is not a new model. It is a named set of instructions Gemini can reuse across chats and tasks. Google’s Help page says you build it once, then either ask for it or let Gemini apply it when the task matches.

Three behaviours are documented:

- Type `/` in a chat or task and pick the skill.
- Leave a skill on, and Gemini may apply it from context without you naming it.
- Stack more than one skill in the same task, including a skill that points at another skill.

The 30 September product post adds that skills can hold reference files: plain text, PDFs, and images. Sharing, Google Drive files, and Gemini Notebook sources are listed as coming in the following weeks, not as finished controls today.

Skills already exist in Gemini Spark. Chat is the new surface. They do not copy themselves into Google Workspace. If you also need the playbook in Gmail or Docs, recreate it there. The Workspace path is covered in [How to Use Skills in Google Workspace with Gemini](/blog/google-workspace-skills-gemini/).

## Who can create one today

Gemini Apps Help lists three requirements:

- You are 18 or over. Google says under-18 access is coming later.
- You are signed in with a **personal** Google Account. Work and school accounts are not supported in the Gemini app skill tools yet.
- **Keep Activity** is on.

Surfaces named in Help: the Gemini mobile app, the Gemini app on Mac, and [gemini.google.com](https://gemini.google.com). The product post says the chat rollout is for all Google AI subscription tiers.

Two bugs are called out on the Help page. Manually created skills will not save in the mobile app, so create them in chat or on the web. Skills that include uploaded files cannot be edited in the mobile app or the Mac app; edit those on the web.

## Dates that actually matter

Google published two schedules on 30 September. Use both, because they name different products.

From the Gemini product post:

- Skills are rolling out in Gemini chat now, starting with personal accounts.
- Workspace business, enterprise, nonprofit, and education customers get the Workspace version in the coming weeks.
- Gems support starts to be removed in **November** for personal accounts.
- Business, enterprise, and nonprofit Workspace customers: **March 2027**.
- Education: **June 2027**.
- Opal, the Labs mini-app experiment, turns down in November. Google says Gems by Google Labs will not migrate into skills.

From the Workspace Updates post:

- **5 October 2026:** skills start rolling out in Workspace, expected done by mid-November.
- **13 October 2026:** skills start rolling out in the Gemini app, expected done by mid-November.
- **17 November 2026:** Gems move to the Settings panel. You can still create, edit, and use them.
- **No sooner than 1 March 2027** (business and enterprise): Gems can no longer be created, edited, or used. Remaining Gemini app Gems are auto-migrated to draft skills. Workspace Studio flows that use “Ask a Gem” stop.
- **No sooner than 1 June 2027** (education): the same removal, including Classroom and supported LMS tools.

Google says it will warn admins at least 30 days before auto-migration. Do not wait for that mail if a Gem holds files you cannot afford to lose.

## Create a skill on the web

1. Open [gemini.google.com](https://gemini.google.com) and confirm Keep Activity is on.
2. In the sidebar, open **Settings**, then **Skills**.
3. Pick one create path:
   - **Create with Gemini** and follow the chat.
   - Open a recommended template and edit the name, description, and instructions.
   - Use a blank template.
   - Click **Upload** and choose a `SKILL.md` file, or a folder or `.zip` whose main folder contains `SKILL.md`.
4. Review the draft. Remove any line that tells Gemini to invent missing facts.
5. Save or create the skill, then leave it activated if you want automatic use.

Upload tip from Help: hidden files such as `.DS_Store` or `.pyc` can make the upload fail. Strip them before you zip the folder.

You can also ask Gemini, inside an ordinary chat, to create a skill from the thread. Activation, deactivation, and deletion still happen on the Skills page, not in the chat.

![Notebook and pen beside a laptop on a desk](https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80)

## Write instructions Gemini can match

Help’s writing guide says the name and the one- or two-sentence description decide whether Gemini treats the skill as relevant. A vague description means the skill sits unused.

Write the job as a type of task, not one document. “Turn meeting notes into Shipped, In progress, Blocked, and Next week” will match next week’s notes. “Rewrite the 2 October standup” will not.

Add three sections Google recommends:

- An output template, so the shape stays fixed.
- A short “common mistakes” list, such as inventing owners or metrics.
- A rule for missing input. Example: if no notes are attached, ask for them and stop.

A tight first skill:

> Name: weekly-status. Description: Turns raw meeting notes into a four-section status update. Instructions: Use only facts in the notes. Sections are Shipped, In progress, Blocked, Next week. If a section has no items, write “None noted.” If no notes are provided, ask for them and do not draft the update.

Reference files belong in the skill folder next to `SKILL.md`. To change those files later, Help says you must upload the whole skill again. Asking Gemini to update the skill is the other documented option.

## Call it with a slash

In a chat or task, type `/` and select the skill. Add the notes, PDF, or image for this run, then send.

To stack skills, include more than one in the same request. Google’s example is a writing-style skill plus a brand-guidelines skill. Keep each skill to one job so stacking stays predictable.

If a skill is off and you ask for it, Gemini asks whether to turn it back on. Automatic use only applies to skills that are activated. Turn one off from the Skills page when you do not want it injected into unrelated chats.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7Z5Vy9JBANs"
    title="Gemini segment from the Google I/O 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The I/O 2026 Gemini segment is the public walkthrough of the app surface these skills sit in, including Spark. It is not a skills click-path. Use the Help steps above for the actual buttons.

## Move a Gem across yourself

Help says Google will recreate Gems as skills when Gems are removed. You can do it earlier.

1. On the web, open **Gems** and edit the Gem you want to keep.
2. If it has Knowledge files, download each file.
3. Put those files in a folder named in lowercase with hyphens, such as `weekly-status`.
4. Open **Settings**, then **Skills**, and choose **Create manually**.
5. Paste the Gem name, description, and instructions. Help says the skill name is reformatted for you.
6. Click **Create**. Upload the folder only if the skill needs those files.

Copy the text somewhere else before November. Auto-migration is promised for remaining Gems, not a line-by-line preview you can edit in advance.

## Limits to check before you rely on it

- Personal accounts only in the Gemini app skill tools. Workspace has a separate rollout starting 5 October.
- Skills do not sync between the Gemini app and Workspace. Build each copy on purpose.
- Mobile cannot save a manually created skill right now.
- File-backed skills must be edited on the web, and file updates mean a full re-upload.
- Deleting a skill cannot be undone.
- Do not put passwords or private keys in instructions or reference files.
- Review names, numbers, and claims before you send the output.

## Conclusion

Create one narrow skill on gemini.google.com, call it with `/`, and turn off automatic use until the sample output matches the template. Export Gem knowledge files this week if you use them. Personal-account Gems start leaving in November, and the Gemini app copy will not appear in Workspace by itself.

## Sources

- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google, 30 September 2026
- [Introducing skills in the Gemini app and Workspace, plus what’s next for Gems](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Workspace Updates, 30 September 2026
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Gemini segment, Google I/O 2026 keynote](https://www.youtube.com/watch?v=7Z5Vy9JBANs) — Google
