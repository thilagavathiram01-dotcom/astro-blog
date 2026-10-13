---
title: "Upload SKILL.md to Gemini Skills with Reference Files"
description: "Step-by-step guide to create portable Gemini Skills by uploading SKILL.md files plus reference documents for consistent automated workflows."
pubDate: 2026-10-13T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Gemini Skills let you save reusable instructions so you stop repeating the same prompts. Uploading a SKILL.md file plus reference documents turns a one-off chat into a portable workflow you can reuse across chats or even other tools that support the open SKILL.md standard.

This guide shows exactly how to structure, upload, and use a skill with reference files in the Gemini app. The process works on the web at gemini.google.com and the Mac app. Mobile creation of skills with uploaded files is limited for now.

## What You Need Before You Start

You must be 18 or older, signed in with a personal Google Account, and have Keep Activity turned on. Skills are rolling out starting October 13, 2026, for personal accounts. Workspace accounts follow later.

Reference files must be plain-text based. Supported formats include .txt, .md, .csv, .json, .pdf, .jpg, and .png. Binary files such as .docx or .xlsx are not accepted—convert them first. Total size for all files in one skill cannot exceed 100 MB. The skill name inside SKILL.md must be all lowercase with hyphens, like weekly-status-report.

![Person working on a laptop with code on the screen](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Structure Your SKILL.md File

Create a folder named exactly after your skill (lowercase with hyphens). Place SKILL.md in the root of that folder. Add any reference files in the same folder or subfolders.

A minimal SKILL.md looks like this:

```markdown
---
name: weekly-status-report
description: Use when the user asks for a weekly project status update. Extracts completed work, current priorities, blockers, and next steps from notes or a transcript.
---

# Weekly Status Report

When activated, follow these steps:

1. Read the provided notes or transcript.
2. Extract key decisions and action items.
3. Format the output with these sections: Completed Work, Current Priorities, Blockers, Next Steps.
4. Keep the tone concise and professional.
5. Flag any unresolved questions at the end.

Use the attached project-guidelines.pdf for formatting rules when available.
```

The description is critical. Gemini reads it first to decide whether the skill applies. Write it in the third person and start with “Use when…”. Keep it under 1,024 characters.

Place supporting files such as style guides, sample outputs, pricing sheets, or templates next to SKILL.md. Gemini loads them only when needed.

## Upload the Skill on the Web

1. Open gemini.google.com and sign in.
2. Click Settings in the sidebar, then Skills.
3. At the top of the Skills page, click Upload.
4. Select the SKILL.md file alone, or choose the folder or .zip that contains SKILL.md in its root plus your reference files.
5. Review the extracted name, description, and instructions. Edit if needed.
6. Click Create. The skill appears under Active by default.

You can also create skills from a chat by asking Gemini to build one, then refine it. For skills that need reference files, the upload method is more reliable.

After upload, test it immediately. Open a new chat, type `/` and select the skill name, then provide sample input. Gemini can also apply enabled skills automatically when the prompt matches the description.

![Organized desk with laptop and documents](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Stack Skills and Reference Other Skills

You can combine multiple skills in one prompt. Type `/skill-one /skill-two` or simply describe the task so Gemini picks relevant ones. Inside a skill’s instructions you can also reference another skill by name so complex workflows stay modular.

For example, a “proposal-writer” skill can call a “brand-voice” skill when drafting client documents. Both can share the same reference files if you upload them together.

## Tips for Reliable Results

- Keep instructions specific: define input format, processing steps, output structure, and any rules (tone, length, what to avoid).
- Update files by re-uploading the entire skill folder. You cannot drag new files onto an existing skill.
- Download a skill from the Skills page (Skill actions → Download) to get the .zip, edit it locally, then use Replace skill to update.
- Test with edge cases. Vague descriptions lead to inconsistent automatic triggering.
- Limit active skills to under 100. You can create more, but only 100 can be on at once.

If you already have Gems, Google will migrate them to draft skills. Review the migrated versions and add reference files where they improve consistency. See our guide on [building Gemini Workspace Skills in Google Docs](/blog/how-to-build-gemini-workspace-skills-in-google-docs/) for related Workspace tips.

## Watch a Full Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The video covers creating skills three ways, including upload, and shows practical examples you can adapt.

## Conclusion

Uploading a well-structured SKILL.md with reference files gives you consistent, portable automation inside Gemini. Start with one repetitive task, add the documents Gemini needs for accuracy, and call it with a simple slash command. As Gems retire, Skills become the standard way to teach Gemini your workflows once and reuse them forever.

Sources: Google blog post on Skills (blog.google), Gemini Apps Help Center on creating and managing skills (support.google.com/gemini).
