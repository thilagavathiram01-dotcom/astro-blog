---
title: "How to Build Gemini Workspace Skills in Google Docs"
description: "Create a Gemini Workspace skill in Google Docs with skill builder, then enable it in Workspace Studio for the October 2026 rollout."
pubDate: 2026-10-04T09:00:00
heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "productivity"]
noindex: false
---

Google starts rolling Workspace skills out on October 5, 2026. A skill is a reusable prompt that tells Gemini in Gmail, Docs, Slides, Drive, and Chat to follow your team’s rules, templates, and reference files. You can draft that skill in a Google Doc, comment on it with teammates, then add and enable it in Workspace Studio.

Skills do not copy themselves from the Gemini app. If you already built a skill or Gem in chat, you still need a Workspace copy. The rollout timeline and the Docs skill builder are documented in the [Google Workspace blog](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace) and the [Workspace Updates post](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html). For the admin side of the same launch, see our guide on [Workspace Gemini skills setup for October 5](/blog/workspace-gemini-skills-oct-5-setup/).

## What changes on October 5

Rapid Release domains start receiving skills in Workspace on October 5, 2026, with rollout expected to finish by October 12. Scheduled Release domains start on October 19 and should finish by mid-November. Skills in the Gemini app begin rolling out on October 13 for both release tracks, finishing by mid-November.

Until those dates land on your account, the skill builder and the @ skill menu may be missing. That is a rollout gap, not a broken setting.

Skills differ from Gems in three practical ways. They work in Workspace apps, not only in a separate chat window. You invoke them inline, first with `/` and soon with `@`. You can stack more than one skill in a single prompt. Business and enterprise Gems are scheduled to stop being created, edited, or used no sooner than March 1, 2027. Until then, both can exist.

![Team reviewing a shared document on laptops](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)

## Check that your admin has skills on

Workspace skills are available only where an administrator has enabled the Gemini Beta setting. Google also notes that skills are limited to customers in the Gemini Beta program. Users marked under 18 cannot use AI features in Workspace Studio, including creating and sharing skills.

If you administer the domain:

1. Open the Google Admin console.
2. Go to Apps, then Google Workspace, then Workspace Studio.
3. Open Skills, then Create and use skills.
4. Turn the setting on for the whole domain, or override it for an organizational unit or configuration group.
5. Save. Group settings override organizational units. Changes can take up to 24 hours.

If you are not an admin and the skill builder never appears after your release track’s window, ask the admin to confirm that setting before you rebuild prompts.

## Draft the skill in Google Docs

Workspace treats the Doc as the shared source, not a private prompt box. Open a new Google Doc, turn on the skill builder, and write the instructions the way you would brief a colleague who already has access to your files.

A useful skill names the job, the inputs, the rules, and the output shape. Google’s examples cover brand voice for email and files, proposal or contract formatting, and status updates that stay in a fixed layout across meeting notes, Chat, and Docs. An invoice-review skill can compare a new invoice with recent ones in the inbox and flag mismatches. A proposal skill can pull structure from an existing deck or Doc so every draft follows the same sections.

Write rules as checks, not slogans. For a brand-voice skill, list banned phrases, required product names, and the reading level. For an invoice skill, list the fields that must match: vendor, amount, currency, PO number, and date. Attach or link the template and the latest style guide in the same Doc so reviewers see the source next to the instructions.

Share the Doc with comment access. Teammates can suggest edits in the file before anyone enables the skill. When the Doc is ready, anyone with access can add and enable that skill in Workspace Studio.

You can also start from a template. Google lists templated skills for on-brand email drafts and files, so you do not have to invent the first version from a blank page.

## Add, test, and call the skill

Workspace Studio is the control room. There you create or refine a skill manually or with Gemini, test the output before a wide share, and view, edit, or share skills under your organization’s security policies.

After the skill is enabled:

1. Open Gmail, Docs, Slides, Drive, or Google Chat.
2. Open the Gemini side panel, or Ask Gemini in Chat.
3. @ mention the skill by name. Google’s Workspace help describes @ mentions in the side panel. The Gemini app is moving the same menu from `/` to `@` so skills and connectors sit in one place.
4. Add the specific file, thread, or question. Stack a second skill in the same prompt if you need both a format rule and a brand-voice rule.
5. Read the draft before you send or file it. A skill applies instructions. It does not replace review.

You can also attach a skill to a flow in Workspace Studio, so a repeated process calls the same instructions. If you already have an external skill file, upload it to Drive and reference it in Studio to make your own copy.

![Person writing and coding at a laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_GjP79YUtAo"
    title="Gemini Enterprise and Google Workspace Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Three skills worth building first

Start with work you already repeat every week.

**Brand voice.** Paste the tone rules, approved product names, and two short before-and-after examples. Use it from Gmail and Docs so outreach and long-form drafts follow the same voice.

**Status update.** Specify the headings your standup notes always use: done, blocked, next. Point the skill at the recurring meeting Doc so Gemini does not invent a new outline each Monday.

**Invoice check.** List the comparison fields and tell the skill to quote the mismatch instead of silently “fixing” a number. Google cites invoice verification as a direct fit because the rules live in files the model can already reach.

Keep each skill narrow. A single Doc that tries to be brand voice, legal review, and scheduling will be harder to test. You can stack narrow skills in one prompt later.

## Limits to plan around

Skills in the Gemini app and skills in Workspace do not sync. Recreate anything you need on both sides. Marketplace publishing and admin distribution through Agent Registry are listed as coming soon, so do not wait on a public catalog for the October 5 window.

Rollout is staggered. A coworker on Scheduled Release can be weeks behind a coworker on Rapid Release. Share the Doc now. Enable the skill when Studio shows it.

## What to do today

Write the Doc, share it for comments, and confirm the admin toggle. On or after October 5, Rapid Release users can add the skill in Workspace Studio and call it with @ in the Gemini side panel. Scheduled Release users should expect the same path starting October 19. The Gemini app copy of skills follows on October 13, and it will not replace the Workspace copy automatically.

## Sources

- Google Workspace blog, “Teach Gemini your team’s know-hows with skills in Google Workspace,” September 16, 2026: https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace
- Google Workspace Updates, “Introducing skills in the Gemini app and Workspace, plus what’s next for Gems,” September 30, 2026: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- Workspace Help, “About the transition from Gems to skills”: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills
- Workspace Help, “Allow people to use skills in Studio and Gemini in Workspace”: https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off
- Google Workspace Developers, “Gemini Enterprise and Google Workspace Studio”: https://www.youtube.com/watch?v=_GjP79YUtAo
