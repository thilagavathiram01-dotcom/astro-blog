---
title: "Create Gemini Skills in Workspace: Nov 2026 Guide"
description: "Build, test, and share Gemini skills in Workspace Studio or apps. Edit SKILL.md, @mention in Gmail Docs Slides Chat, and connect to flows."
pubDate: 2026-11-10T23:00:00
heroImage: "https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "google", "productivity"]
noindex: false
---

Google Workspace rolled out expanded skills for Gemini on 10 November 2026. You can now create reusable instructions from scratch, templates, or Markdown SKILL.md files in Workspace Studio. You can also prompt Gemini inside Gmail, Docs, Slides, Drive, or Chat to build and refine them without leaving the app.

Skills teach Gemini your team’s rules, templates, and reference files once. After you turn one on, Gemini applies it automatically when relevant or when you type @ plus the skill name. Multiple skills can combine in one request. They also trigger Workspace Studio flows that start manually or on a schedule.

This builds on earlier skills work. For the September basics, see our [guide to skills in Google Workspace with Gemini](/blog/google-workspace-skills-gemini/).

![Team collaborating around a computer in an office](https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&w=800&q=80)

## What changed on 10 November

The Workspace Updates post lists three main additions:

- Build, test, and share in Workspace Studio or Google Docs. Start from turnkey templates or edit SKILL.md directly. Test by generating sample email drafts, documents, or presentations before you enable the skill.
- Create and edit in context. Prompt Gemini inside Gmail, Docs, Slides, Drive, or Chat to make or refine a skill without switching apps.
- Invoke automatically or with @. Gemini recognises when a skill fits. You can also @mention one or more. Skills connect to Studio flows with “Start manually” or “On a schedule” starters.

Creating, editing, testing, and sharing stay on the web. Invoking works on the web in Studio, Gmail, Docs, Slides, Drive, and Chat, plus the Google Chat mobile apps on Android and iOS. Sheets and Meet do not support skills yet. Prompts and instructions are English only for now.

Sharing creates an independent copy for the recipient. Your later edits do not overwrite their version. If the skill links Drive files, share those files separately.

Skills in Workspace do not sync with skills or Gems in the Gemini app. Both use the open SKILL.md format, so you can copy instructions manually if needed.

## Who gets access

Business Starter, Standard, and Plus; Enterprise Starter, Standard, and Plus; Google AI Pro for Education; and AI Expanded Access. Users must be 18 or older.

Rapid Release domains began the gradual rollout on 9 November 2026 (up to 15 days for visibility). Scheduled Release domains start 30 November. Admins control access under Apps > Google Workspace > Workspace Studio > Skills.

## Watch a practical walkthrough

This video shows how to access Studio, build a custom skill, use templates, and call it with @ in Drive and Docs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iYpgVHQ3bfU"
    title="How To Use Skills In Google Workspace"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a skill from a template in Studio

1. Go to [studio.workspace.google.com](https://studio.workspace.google.com) and open Skills.
2. Choose a template such as Brand Guidelines, Project Summary, or Team Celebration.
3. Review and edit the generated instructions. Add your exact tone rules, required sections, and any Drive file links.
4. Test it. Ask for a sample email draft or document and check the output.
5. Turn the skill on.

Templates give a fast start. Always replace placeholder text with your real process before enabling.

## Build or edit with SKILL.md

Workspace Studio lets you edit the Markdown-native SKILL.md file directly.

1. Open an existing skill or create a blank one.
2. Switch to the SKILL.md view if available.
3. Write clear sections: purpose, rules, format, examples, and what to avoid.
4. Save and test with sample inputs.

A short example structure:

```
# Weekly Status Update
Purpose: Turn meeting notes into a four-section update.
Rules:
- Sections: Shipped, In progress, Blocked, Next week.
- Do not invent metrics or owners.
- Ask for notes if none are provided.
Format: Bullet points under each heading.
```

Keep each skill focused on one job. Brand voice and invoice review belong in separate skills.

![Laptop with code on a desk next to a plant and mug](https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=800&q=80)

## Create a skill inside an app

You do not have to start in Studio.

1. Open Gmail, Docs, Slides, Drive, or Chat on the web.
2. Open the Gemini side panel.
3. Describe the skill you want: “Create a skill called Client Reply that uses our brand voice from this Drive link and always includes a clear next step.”
4. Review the draft Gemini produces.
5. Refine it with follow-up prompts, then turn it on from the panel or in Studio.

This works for quick experiments. Move mature skills to Studio for team sharing and flow connections.

## Invoke skills with @ or automatically

Once enabled:

- Type @ in the Gemini prompt box in Gmail, Docs, Slides, Drive, or Chat. Select the skill.
- Or just describe the task. Gemini applies a matching skill if one is relevant.
- Combine several: “@BrandGuidelines @WeeklyStatus draft this update and match our tone.”

For Chat on mobile, the same @mention works in the Android and iOS apps.

## Connect a skill to a Workspace Studio flow

1. In Studio, create or open a flow.
2. Choose a starter: Start manually or On a schedule.
3. Add an Ask Gemini step and select your skill.
4. Add any follow-up steps, such as sending the draft or saving a file.
5. Test the flow, then turn it on.

This turns a one-off skill into a repeating process without extra prompts each time.

## Tips for reliable skills

- Write specific rules. “Use short sentences and active voice” works better than “be professional.”
- Link Drive files for reference material and share those files with anyone who receives the skill.
- Test with real examples before enabling. Check for invented numbers or missing sections.
- Share independent copies so teammates can adapt without affecting the original.
- Review every output. Skills constrain format and tone; they do not replace a human check on facts, prices, or legal points.
- Start with one narrow skill. Expand after the team uses it regularly.

## Conclusion

The 10 November updates make skills easier to create inside the apps you already use, easier to edit as Markdown, and easier to invoke with @ or automatically. Build one focused skill in Studio or from a prompt in Docs, test it, turn it on, then call it from Gmail or Chat instead of retyping the same instructions. For earlier setup details, read [How to Use Skills in Google Workspace with Gemini](/blog/google-workspace-skills-gemini/).

## Sources

- [Scale customized AI across your team with skills in Google Workspace and Workspace Studio](https://workspaceupdates.googleblog.com/2026/11/skills-in-workspace.html) — Google Workspace Updates, 10 November 2026
- [Learn how skills work in Google Workspace Studio](https://support.google.com/workspace-studio/answer/17307546) — Workspace Studio Help
- [Allow people to use skills in Studio and Gemini in Workspace](https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off) — Google Workspace Admin Help
- [Teach Gemini your team’s know-hows with skills in Google Workspace](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace) — Google Workspace Blog
- [How To Use Skills In Google Workspace](https://www.youtube.com/watch?v=iYpgVHQ3bfU) — Thoughts Brewing, LLC
