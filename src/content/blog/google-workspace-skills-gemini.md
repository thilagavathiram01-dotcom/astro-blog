---
title: "How to Use Skills in Google Workspace with Gemini"
description: "Create reusable Gemini skills in Workspace Studio and Google Docs, turn them on, then @ mention them in Gmail, Docs, Slides, Drive, and Chat. Official steps from Google Help."
pubDate: 2026-09-19T16:00:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&h=840&q=80"
---

Teams usually keep process knowledge in one person's head: how invoices are checked, how a proposal deck is structured, how client email should sound. **Skills in Google Workspace** turn that know-how into reusable instructions Gemini can run across Gmail, Docs, Slides, Drive, and Chat.

Google announced collaborative skills on **16 September 2026**. Official Help pages describe skills as customizable, reusable instructions you give Gemini. They are currently available to users on the **Gemini Beta Program**, and a Workspace admin controls whether you can create or share them.

<img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80" alt="Team collaborating around laptops in a bright office" width="1400" height="800" loading="lazy" />

## What a Workspace skill is

A skill is not a new Gemini model. It is a saved playbook: rules, templates, and optional reference files that Gemini applies when you invoke the skill.

Google's product post and Workspace Studio Help list jobs that fit this pattern:

- **Brand consistency** — tone, voice, and approved phrasing across drafts and files
- **Standardized templates** — proposals, contracts, and project trackers in a fixed format
- **Status updates** — the same weekly shape in meeting notes, Chat messages, and docs
- **Form filling** — copy a proposal or event template and fill it from context you provide
- **Invoice review** — compare a new invoice against recent examples in your inbox

Skills are different from **custom instructions** in Personalization settings. Custom instructions are standing preferences for *you* (tone, bullet lists, role). A skill is a named workflow the team can share and `@` mention.

They are also different from **Gems**. Gems live in the Gemini app. Skills live in Workspace Studio and the Gemini side panel inside Workspace apps.

## Who can use skills today

From [Learn how skills work in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546):

- Skills are available to users on the **Gemini Beta Program**
- Your **Workspace admin** controls access and whether skills can be shared outside the organization
- If Skills is missing in Studio, ask the admin to confirm the Gemini Beta setting

The 16 September announcement adds that skills in Workspace are available to organizations whose administrators have enabled that Gemini Beta setting. Do not assume every Business Starter account has the tab yet.

## Watch a short official walkthrough

Google Workspace's AI Boost Bites series shows how a custom Gem (the closest public video for reusable Workspace experts) is defined with instructions and knowledge files. Skills in Studio follow the same idea: write the job once, then reuse it.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/szshQdO10Lw" title="Create a custom AI advisor Gem in Google Workspace" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Create a skill in Workspace Studio

1. Open [Google Workspace Studio](https://studio.workspace.google.com).
2. In the left navigation, click **Skills**.
3. Start from a template or a blank skill.

Official template names include:

- Team Celebration
- Project Summary
- Customer Briefing
- Contract Creation
- Brand Guidelines
- Leadership Updates

### Use a template

1. Under **Templates**, pick a skill close to the job.
2. Edit the generated instructions so they match your team's real rules.
3. Click **Add to my skills**, then **Turn on**.

### Build one from a description

1. Click **Create**.
2. In the skill builder chat, describe the job in one or two sentences.
3. Review the generated instructions. Cut anything you do not want Gemini to invent.
4. Optional: in the same chat, give sample inputs and ask the builder to **test** the skill.
5. Click **Turn on** when the sample output looks right.

A useful first prompt:

> Create a skill named weekly-status. It turns meeting notes into four sections: Shipped, In progress, Blocked, Next week. Do not invent metrics or owners. Ask for notes if none are attached.

Keep one job per skill. Brand voice and invoice review should not live in the same file.

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Person reviewing documents and a laptop at a desk" width="1400" height="800" loading="lazy" />

## Draft a skill with teammates in Google Docs

The September 2026 announcement added real-time collaboration: anyone can draft a skill in Docs with the **skill builder**, invite comments, then add and enable the skill in Studio when the page is ready.

Practical flow:

1. Create a Doc that will hold the skill draft.
2. Use the skill builder in that Doc to generate or refine instructions.
3. Share the Doc the same way you share any working draft.
4. When comments settle, anyone with access can add and enable the skill in Workspace Studio.

Treat the Doc as source control for the playbook. The enabled skill in Studio is what Gemini actually runs.

## Run a skill where you already work

After a skill is on, Google documents these surfaces:

- **Gemini in Workspace** — type `@` in the Gemini side panel in **Gmail, Docs, Slides, Drive**, and **Ask Gemini in Chat**, then pick the skill from autocomplete
- **Flows in Workspace Studio** — attach the skill to a flow so a trigger (new mail, new file) can reuse the same playbook
- **Drive** — upload a popular external skill file into Drive and reference it in Studio to make your own copy

A short Gmail session:

1. Open Gmail on the web.
2. Open the Gemini side panel.
3. Type `@` and choose your **Brand Guidelines** or **Client Communication** skill.
4. Paste the incoming request and ask for a reply draft.
5. Edit the draft in Gmail before you send it.

Do not skip the last step. A skill constrains format and tone. It does not replace a human check on names, prices, or legal claims.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/0cmkCCCqais" title="Share custom Gemini Gems with your team — Google Workspace" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Test and govern skills in Studio

Workspace Studio is the control room Google describes for skills:

- **Create and refine** skills by hand or with Gemini
- **Test** output before you roll the skill out
- **View, edit, and share** skills under existing Workspace security policies

Coming soon, per the same announcement (not available as a finished product today):

- Publishing skills to **Google Workspace Marketplace**
- Admin curation in an **Agent Registry** that spans Gemini Enterprise and Workspace

Do not write a how-to around those two items until the Admin console UI ships.

## Skills versus custom instructions versus flows

| Tool | What it stores | Where it runs |
| --- | --- | --- |
| Custom instructions | Your standing preferences | Personalization settings; Gemini in Workspace |
| Skill | A named team playbook | Studio, `@` in side panels, flows |
| Flow / agent | Trigger plus steps | Workspace Studio automations |

Use custom instructions for “always use short sentences.” Use a skill for “draft this proposal from our template.” Use a flow when the same skill should run when a file lands in a Drive folder.

Help for flows also lists specialized **AI skill steps** (Decide, Extract, Summarize, Recap unread emails). Those steps are building blocks inside a flow, not the same object as a reusable named skill.

## Limits worth knowing

- **Admin gate.** No Skills tab usually means Gemini Beta is off, not a broken account.
- **Beta program.** Features and labels can still move.
- **Sharing.** Outside-org sharing is an admin decision.
- **Marketplace and Agent Registry** are announced as coming soon.
- **Review output.** Invoice and contract skills still need a human pass.
- **Do not paste secrets** into a skill Doc that is shared more widely than the source files.

## Conclusion

Workspace skills are reusable Gemini instructions you enable in Studio, optionally draft in Docs with teammates, and invoke with `@` in the apps where the work already happens. Start with one narrow template—brand guidelines or a weekly status—test it in Studio, turn it on, then call it from Gmail or Docs instead of pasting the same briefing every time.

Official references: [Teach Gemini your team's know-hows with skills](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace), [Learn how skills work in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546), and [studio.workspace.google.com/skills](https://studio.workspace.google.com/skills).

## Sources

- [Teach Gemini your team's know-hows with skills in Google Workspace](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace) — Google Workspace Blog, 16 September 2026
- [Learn how skills work in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546) — Workspace Studio Help
- [Customize Gemini in Workspace's responses with your instructions](https://support.google.com/a/users/answer/16943683) — Google Workspace Learning Center
- [Custom instructions for Gemini in Workspace now available in more apps](https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html) — Workspace Updates, 2 September 2026
- [Tips to use AI steps in flows](https://support.google.com/workspace-studio/answer/16431105) — Workspace Studio Help
- [Create a custom AI advisor Gem](https://www.youtube.com/watch?v=szshQdO10Lw) — Google Workspace
- [Scale expertise by sharing custom Gemini Gems](https://www.youtube.com/watch?v=0cmkCCCqais) — Google Workspace
