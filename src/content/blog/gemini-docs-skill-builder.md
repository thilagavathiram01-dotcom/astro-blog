---
title: "How to Build Gemini Skills in Docs Skill Builder"
description: "Create a Workspace Gemini skill in Google Docs Skill Builder, share it with your team, enable it in Studio, and sync later edits."
pubDate: 2026-10-01T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "productivity", "ai-tools"]
noindex: false
---

Gemini skills in Google Workspace are reusable instructions you can stack in one prompt. Google now lets teams draft those instructions inside a normal Google Doc, then publish a copy into Workspace Studio.

The official Help page for Workspace Studio lists nine steps. If you stop after Gemini writes a draft, the skill is **not** saved. You still have to click **Make this skill in Studio** and **Turn on**.

This guide follows those official steps, plus the 30 September 2026 rollout dates for Workspace skills.

## What Skill Builder does in Docs

Skill builder is a Gemini tool inside Google Docs. You describe a job, Gemini writes the instruction text, teammates comment on the Doc, and anyone with access can push a personal copy into Studio.

Google’s Workspace blog (16 September 2026) lists jobs that fit this pattern: brand voice, proposal templates, status updates, and invoice checks against recent examples.

Skills in Workspace are **not** the same objects as skills in the Gemini app. The 30 September Workspace Updates post states they do not sync. Recreate the skill in each place if you need both Gmail side-panel skills and consumer Gemini chat `/` commands.

For the consumer chat workflow, see [How to Stack Gemini Skills With / Commands in Chat](/blog/stack-gemini-skills-slash-commands/). For the Studio-first path, see [How to Use Skills in Google Workspace with Gemini](/blog/google-workspace-skills-gemini/).



![Team working together on laptops around a shared document](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)



## Who can use it and when it rolls out

Workspace Updates (30 September 2026) lists these dates:

- **5 October 2026:** Skills begin rolling out in Workspace. Google expects completion by mid-November.
- **13 October 2026:** Skills begin rolling out in the Gemini app, also targeting mid-November.

Admin Help says skills in Studio and Gemini in Workspace are supported on Business Starter, Standard, and Plus; Enterprise Standard and Plus; Education Fundamentals, Standard, Teaching and Learning add-on, and Education Plus; plus Google AI Pro for Education.

That same Admin page notes skills are only available to customers in the **Gemini Beta program**, and users designated as under 18 cannot create or share skills in Workspace Studio.

Admins turn the feature on under **Apps → Google Workspace → Workspace Studio → Skills → Create and use skills**.

## Watch a Workspace Studio walkthrough

This Google Cloud session covers no-code flows and skills inside Workspace Studio. Skill builder in Docs is the drafting surface; Studio is where the skill actually runs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BFtkDiJYYHk"
    title="How to build AI agents with Gemini Enterprise and Workspace"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step-by-step: create the skill in Docs

Complete every step. Help Center warns that generating text alone does not create the skill.

1. On a computer, open a Google Doc.
2. At the top right, click **Ask Gemini**.
3. Click **Tools**, then **Skill builder**.
4. In the prompt box, describe the skill. Review the instructions Gemini writes.
5. Edit the generated text. Cut claims you cannot verify.
6. Share the Doc with the people who should review the playbook.
7. When the team agrees, click **Make this skill in Studio**. Google creates a **copy for each collaborator** who clicks that button.
8. Studio opens with the new skill preloaded. At the top right, click **Turn on**.

A tight first prompt:

> Create a skill named weekly-status. Turn meeting notes into four sections: Shipped, In progress, Blocked, Next week. Do not invent metrics or owners. Ask for notes if none are attached.

Keep one job per skill. Brand voice and invoice review should not share one instruction file.



![Person writing notes next to a laptop in a quiet workspace](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80)



## Sync later edits from the Doc

Help Center documents a sync path after you change the Doc:

1. Update the skill instructions in the Google Doc.
2. Open the skill in Workspace Studio.
3. At the top right of the skills page, click **More options**, then **Sync with Docs**.

If the skill is already open, refresh the page first. The sync control may not appear until you reload.

Treat the Doc as the shared draft. Treat Studio as the runtime copy each person enabled.

## Run the skill after it is on

Once the skill is on, Google documents these surfaces:

- **Gemini in Workspace:** type `@` in the side panel in Gmail, Docs, Slides, Drive, or Ask Gemini in Chat, then pick the skill.
- **Workspace Studio flows:** attach the skill to a flow so a trigger can reuse the same playbook.

Skills can stack. The Workspace Updates post gives an educator example: a weekly-newsletter skill plus an institutional brand-guidelines skill in one prompt. A business example pairs a vendor-evaluator skill with an executive-email skill.

Always edit the draft before you send it. A skill constrains format. It does not sign off on prices, names, or legal claims.

## How this differs from Gems

Gems stay in the Gemini app for now. Skills sit inline in chat threads and can stack. They use the open Markdown `SKILL.md` standard, so you can upload a skill you built on another platform if `SKILL.md` sits in the root folder.

Google will remove Gems on a long schedule: personal accounts start losing Gems in November 2026; business and enterprise no sooner than 1 March 2027; education no sooner than 1 June 2027. Remaining Gems in the Gemini app will auto-migrate to draft skills. They will **not** appear automatically in Workspace. Recreate them in Studio or Skill builder if you need them in Docs and Gmail.

## Tips that keep reviews short

- Write the skill name in lowercase with hyphens if you later export or upload a `SKILL.md` file.
- Put sample inputs in the Doc comments so reviewers can see one good run.
- Do not paste secrets into a Doc shared more widely than the source files.
- If Skill builder is missing, check Gemini Beta enrollment and the admin Skills setting before you file a bug.
- Recreate the same skill in the Gemini app if you also want `/skill-name` in consumer chat.

## Conclusion

Skill builder in Google Docs is the team draft. Workspace Studio is the switch that turns the playbook on. Describe one job, review the generated instructions, share the Doc, click **Make this skill in Studio**, then **Turn on**. Sync later edits from the Doc instead of rewriting the skill from scratch.

Start with a weekly-status or brand-guidelines skill. Call it with `@` from Gmail or Docs after 5 October 2026 if your admin has Skills enabled.

## Sources

- [Learn how skills work in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546) — Workspace Studio Help
- [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Workspace Updates, 30 September 2026
- [Teach Gemini your team’s know-hows with skills](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace) — Google Workspace Blog, 16 September 2026
- [Allow people to use skills in Studio and Gemini in Workspace](https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off) — Admin Help
- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google Blog, 30 September 2026
- [How to build AI agents with Gemini Enterprise and Workspace](https://www.youtube.com/watch?v=BFtkDiJYYHk) — Google Cloud
