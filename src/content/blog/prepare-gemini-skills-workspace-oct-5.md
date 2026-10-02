---
title: "Prepare Gemini Skills Before Workspace Rollout Oct 5"
description: "Prepare Gemini skills before the Oct 5 Workspace rollout: eligibility, admin steps, SKILL.md imports, and the Gems timeline."
pubDate: 2026-10-02T09:30:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "productivity"]
noindex: false
---

Google starts rolling Gemini skills into Workspace on October 5, 2026. Rapid Release domains should see the feature complete by October 12. Scheduled Release domains start October 19 and finish by mid-November. If your team still runs Gems, this week is the right time to decide which instructions to rebuild by hand.

Skills are reusable instructions that sit inside a normal Gemini chat or Workspace side panel. You call one with a slash, soon an @ mention, plus the skill name. You can stack more than one skill in the same prompt. Gems cannot do that, and Gems cannot run inside Workspace apps.

This guide uses Google’s September 30, 2026 Workspace update and the Workspace Help page last updated September 30, 2026. It covers who gets skills, what admins should turn on, and how to copy a SKILL.md file before the Gemini app rollout on October 13.

## Who can use skills on October 5

Skills in the Gemini app are listed for all Google Workspace editions and users of all ages, with the app rollout starting October 13 and finishing by mid-November. Skills inside Workspace are limited to people 18 and older on Business Starter, Standard, and Plus; Enterprise Standard and Plus; Google AI Pro for Education; or the AI Expanded Access add-on.

Personal Google accounts are not the October 5 audience. Google has said skills in chat are opening to free users as well, including people who do not have Spark, but the Workspace Help timeline ties the October 5 date to Workspace domains.

Skills do not sync between the Gemini app and Workspace apps. A skill you create in chat will not appear in Docs or Gmail. If you need the same rules in both places, recreate the skill in Google Workspace Studio.

![Team reviewing a shared document on laptops](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## What changes for Gems, and when

You can still create and use Gems in the Gemini app. You can no longer add an Ask a Gem step to a new Workspace Studio flow. Existing flows that already use that step keep working until the later cutoff.

Google published this sequence:

1. October 5, 2026: Workspace skills start for Rapid Release domains, done by October 12. Scheduled Release starts October 19 and ends by mid-November.
2. October 13, 2026: Skills start in the Gemini app for Rapid and Scheduled Release domains, done by mid-November. Users can keep both Gems and skills.
3. November 17, 2026: Gems move into Settings in the Gemini app. People can still create, edit, and use them.
4. No sooner than March 1, 2027: Business and enterprise users lose create, edit, and use rights for Gems. Ask a Gem flows stop. Remaining Gemini app Gems become inactive draft skills.
5. No sooner than June 1, 2027: The same cutoff applies to Education, including Google Classroom and supported Gemini LTI tools.

Automated migration keeps the original name, description, custom instructions, and uploaded knowledge files. Drive permissions and sharing settings transfer. Migrated skills land as inactive drafts. The creator must review and turn each one on before anyone can use or share it. Google says full migration details will be posted at least 30 days before that job starts.

If a Gem is on a critical path, do not wait for the draft. Rebuild it now so you can check the output before March 2027.

## Turn skills on before users ask

Admins should confirm skills are allowed for the organization. Google’s help page points to the Studio control that turns skills on or off for Studio and Gemini in Workspace. Rapid Release domains will see the feature first, so a late toggle will look like a failed launch.

Send a short note with four dates: October 5 or October 19 depending on your release track, October 13 for the Gemini app, November 17 for the Settings move, and March 1 or June 1, 2027 for the Gem cutoff. Link the AI skills 101 handbook and the help articles for skills in the Gemini app and in Workspace Studio.

Ask owners of Studio flows to open any flow that still has an Ask a Gem step and follow the Workspace Studio transition guide. Replace that step with a skill or another action before 2027.

Education admins can share Google’s Gemini Gems and Skills Transition Guide PDF. Google also points Classroom users toward Gemini Notebook, which is available now, and Guided Learning, which is listed as coming soon to Classroom.

## Build or import a SKILL.md file

Skills use an open, Markdown-native SKILL.md format. Google says you can copy a skill you already wrote on another platform into the Gemini app and into Workspace apps. That is a copy, not a live sync.

A practical first skill is a brand-voice or lesson-plan file. Keep the instructions specific: audience, tone, required sections, and what to refuse. Google’s own examples include a weekly newsletter skill stacked with institutional brand guidelines, and a vendor evaluator stacked with an executive email drafter.

In Workspace, use the skill builder in Google Docs. Invite reviewers to comment on the document, then add and enable the skill in Workspace Studio. Anyone with access to that document can pick it up in a couple of clicks. You can also start from a template for on-brand email or blog posts, or turn an existing document into a skill.

In Gemini Enterprise, the documented path is: open Skills, choose Create skill with Gemini, set a name and a description the assistant uses to decide when the skill applies, write the instructions or edit the Markdown, then save. Upload is also supported as Markdown or a ZIP. New skills turn on by default there.

In the Gemini app, once the control appears, invoke the skill from the prompt box with / and the skill name. Feature parity with Gems is still rolling in. Sharing by link, and attaching Google Drive files or notebooks, are listed as coming over the following weeks. You can already attach a text file, PDF, or image in current chat skills.

![Person editing a markdown document on a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Use a skill inside Workspace apps

After a skill is enabled, @ mention it in the Gemini side panel in Gmail, Docs, Slides, Drive, and Ask Gemini in Chat. That is the Workspace path. It is separate from the slash command in the Gemini app.

A clean test prompt names the skill and the source material. Example: mention the brand-voice skill, paste a short product note, and ask for a customer email under 120 words. Run the same prompt without the skill and compare. If the skill adds nothing, the description is too vague for Gemini to apply it.

Stack only skills that do not conflict. A “formal legal tone” skill and a “casual social caption” skill in one prompt will fight. Pair a research skill with a formatting skill instead.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Checklist for this week

- Confirm your domain is Rapid Release or Scheduled Release so you quote the right start date.
- Turn skills on in the admin control before October 5 if you are on Rapid Release.
- List Gems used in Studio flows. Those flows cannot gain new Ask a Gem steps.
- Rebuild the top three Gems as skills and test them in chat and, if eligible, in Docs.
- Copy any external SKILL.md files you want to keep, then upload or paste them. Do not assume another product will stay linked.
- Tell people that Gemini app skills and Workspace skills are separate copies.
- For Education, share the transition PDF and point class workflows at Gemini Notebook.

If you already mapped Gems to skills, use that list as the rebuild queue. Our earlier walkthrough on [how to recreate Gemini Gems as skills](/blog/convert-gemini-gems-to-skills/) covers the manual copy of instructions and knowledge files.

## Limits to plan around

Skills are instructions, not a guarantee of correct facts. Keep source files attached when the answer must match a policy or a price list. Workspace skills require an eligible edition and age 18 or older. The Gemini app rollout is not the October 5 event; that date is Workspace.

Drafts from the 2027 migration stay off until someone activates them. Shared Gems will not quietly become shared live skills. Owners should review names and files before they turn a draft on.

## Conclusion

October 5 is the start of Workspace skills for Rapid Release domains, not the end of Gems. You still have months to create, edit, and use Gems in the Gemini app. The work that cannot wait is admin access, Studio flows that depend on Ask a Gem, and any instruction set you want tested before an inactive draft appears in 2027.

Copy the SKILL.md, enable the skill in Studio, and run one real prompt in Gmail or Docs. That single test tells you whether the October rollout is usable for your team.

## Sources

- Google Workspace Updates, September 30, 2026: Introducing skills in the Gemini app and Workspace, plus what’s next for Gems
- Google Workspace Help: About the transition from Gems to skills (last updated September 30, 2026)
- Google Workspace blog: Teach Gemini your team’s know-hows with skills in Google Workspace
- Google Cloud documentation: Create and manage skills in Gemini Enterprise
