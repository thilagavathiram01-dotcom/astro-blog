---
title: "How Admins Should Prepare Gemini Skills by October 5"
description: "Gemini skills start on Workspace Rapid Release domains October 5, 2026. Dates, recreate steps, and what happens to Gems."
pubDate: 2026-10-02T15:30:00
heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "gemini", "tutorials", "how-to", "productivity"]
noindex: false
---

Google starts rolling Gemini skills into Workspace on 5 October 2026. Personal Gemini chat already has skills. A work or school account does not inherit those objects, and Gems do not copy across on their own.

If you administer a Google Workspace domain, the useful work this week is a date check, a short inventory of Gems, and a recreate plan. The feature is a reusable instruction pack, not a new chat product.

## Two calendars, not one switch

Google published the consumer and Workspace timelines on 30 September 2026. They do not match.

On personal Google Accounts, skills are rolling out in Gemini chat for users 18 and older, on every Google AI subscription tier. Under-18 access is listed as coming later. Gemini Apps Help also says skills can be used in chats without a paid plan.

Workspace is on a slower track. The Workspace Updates post says skills begin rolling out in Workspace on 5 October 2026, with completion expected by mid-November. Skills in the Gemini app for Workspace users begin on 13 October 2026, also finishing by mid-November.

The admin help article splits Workspace by release track:

- **Rapid Release:** rollout starts 5 October 2026 and should finish by 12 October 2026.
- **Scheduled Release:** rollout starts 19 October 2026 and should finish by mid-November.
- **Gemini app for both tracks:** starts 13 October 2026 and should finish by mid-November.

A missing Skills menu on 5 October is normal on a Scheduled Release domain. It is also normal on Rapid Release until the wave reaches that account.

Personal chat setup, including reference files, is covered in [How to Add Reference Files to Gemini Chat Skills](/blog/gemini-skills-reference-files-chat/). That path does not replace the Workspace recreate step below.



![Team reviewing a rollout plan on laptops in an office](https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80)



## What a skill is in Workspace

A skill is a named set of instructions Gemini can apply in the Gemini app and in most Workspace apps. Google's examples include a brand-voice skill for drafts and a lesson-planning skill for class prep.

Users call a skill by typing `/` and the skill name in the prompt bar. Google says `@` will replace `/` later. Users can stack more than one skill in the same prompt, or apply different skills later in the same thread.

Skills use an open Markdown file, `SKILL.md`. Google says you can copy a skill built on another platform into the Gemini app or Workspace if it follows that format.

They do not sync. A skill saved in the Gemini app does not appear in Docs, Gmail, or Workspace Studio. Recreate it in Workspace if people need it there. The reverse is also true today.

## Check the domain before Monday

Do this before you tell staff the feature is on.

1. Confirm the release track in the Admin console. Rapid Release domains are first. Scheduled Release domains wait until 19 October.
2. Tell users which surface will light up first. Workspace apps start on the 5 October wave. The Gemini app for Workspace accounts starts on 13 October.
3. Keep Activity requirements in mind for personal testing. Workspace controls for Gemini still govern work data. Do not ask staff to rebuild company skills on a personal Gmail account and expect them to show up at work.
4. Pause any internal doc that says "open your Gem." After November, Gems move, and later they stop.

Google has not published a new Admin console toggle named Skills in the 30 September notes. Treat availability as a rollout flag, then confirm in a pilot account on your track.

## Recreate Gems instead of waiting for a sync

You can still create and use Gems in the Gemini app. You can no longer create new Workspace Studio flows that use the "Ask a Gem" step. Flows that already have that step keep working for now.

Google will auto-migrate remaining Gemini app Gems to draft skills later. That migration does not place the skill into Workspace apps. If a Gem is part of a weekly Docs or Gmail habit, recreate it in Workspace yourself.

A practical recreate:

1. Open the Gem and copy the instructions, name, and description.
2. Download any knowledge files the Gem uses. The consumer help center does not promise every file type survives migration.
3. In the Gemini app, create a skill manually or ask Gemini to build one from those instructions. On Workspace, build the same skill again in Workspace Studio or the skill builder in Docs once your domain has the control.
4. Name it in lowercase with hyphens if you upload `SKILL.md` (`status-update`, not `Status Update`).
5. Call it with `/` on a test prompt in the surface where people will use it. A pass in gemini.google.com does not prove the Docs skill works.

Stack only after each skill works alone. Google's own example pairs a writing-style skill with a brand-guidelines skill. Keep each file narrow so a bad instruction is easy to edit.



![Person writing notes beside a laptop during a planning session](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)



## Dates that affect support tickets

Put these on the internal calendar. They come from the Workspace Updates post and the consumer launch note.

- **5 October 2026:** Workspace skills begin, Rapid Release first.
- **12 October 2026:** Rapid Release Workspace rollout expected to finish.
- **13 October 2026:** Skills start in the Gemini app for Workspace users on both tracks.
- **19 October 2026:** Scheduled Release Workspace rollout starts.
- **Mid-November 2026:** Workspace and Gemini app rollouts expected to finish.
- **17 November 2026:** Gems move to the Settings panel of the Gemini app. Users can still create, edit, and use them.
- **November 2026:** Personal accounts start losing Gems. Google's consumer post says support ends starting in November, with automatic migration when Gems go away. Opal, the Labs mini-app experiment, turns down in the same window. Labs Gems do not migrate.
- **No sooner than 1 March 2027 (business and enterprise):** Gems can no longer be created, edited, or used. They leave the Gemini app Settings panel. Workspace Studio flows that still use Ask a Gem stop. Remaining Gemini app Gems become draft skills.
- **March 2027:** Consumer post sets the same month for Workspace business, enterprise, and nonprofit customers.
- **June 2027:** Education customers, in the consumer post.

Draft skills still need a human review. Auto-migrate is not a published approval workflow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to tell people on Monday

Send a short note, not a feature tour.

- Skills are reusable instructions. Type `/` and the name, once the menu appears.
- A skill built at home does not show up in Docs. Recreate it at work if the team needs it.
- Gems still run. Do not delete them this week. New Workspace Studio flows cannot add an Ask a Gem step.
- Scheduled Release domains should not expect the control on 5 October.
- Sharing skills, Drive files, and Gemini Notebook sources are listed as coming in the following weeks on the consumer post, not as part of the first Workspace wave.

If someone reports that `/` does nothing, check the account type and the release track before you file a bug.

## Tips that avoid a second migration

Write the skill description as a trigger sentence. Gemini uses it when a prompt matches and the skill is activated.

Store a zip of each `SKILL.md` package in your shared drive. Download from the Skills page after edits. Delete is permanent on the consumer Skills page.

Do not put passwords, API keys, or customer lists in the instruction file. The file is easy to download, and sharing is on the roadmap.

Pilot with one writing skill and one format skill. Stack them on a status update. If the output mixes the two rules, split the instructions further instead of adding a third skill.

Link the Workspace skill handbook Google points business and enterprise admins to, and keep the public help article for personal accounts separate so staff do not follow the wrong settings path.

## Conclusion

5 October is the start of the Workspace wave, not a global on-switch. Rapid Release domains see Workspace skills first. The Gemini app for those same users follows on 13 October. Scheduled Release waits until 19 October.

Inventory Gems that feed Docs, Gmail, or Studio flows, and recreate them as skills in both places you need them. Leave Gems in place until Google moves them, and do not build new Ask a Gem steps. A short pilot on Monday will tell you more than the rollout banner.

## Sources

- [Introducing skills in the Gemini app and Workspace, plus what's next for Gems](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates, 30 September 2026
- [About the transition from Gems to skills](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills) — Google Workspace Help, updated 30 September 2026
- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google, 30 September 2026
- [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Google Gemini Skills Are Finally Here](https://www.youtube.com/watch?v=XQtvloPXap4) — Skill Leap AI, 1 October 2026
