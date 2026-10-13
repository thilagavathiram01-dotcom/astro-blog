---
title: "How to Create, Stack and Migrate Gemini Skills from Gems"
description: "Step-by-step guide to creating Gemini Skills, stacking them, adding reference files, and migrating from Gems before the November 2026 cutoff."
pubDate: 2026-10-13T13:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

**How to Create, Stack and Migrate Gemini Skills from Gems**

Google is replacing Gems with Skills in the Gemini app. Skills let you save reusable instructions and invoke them in any chat with a simple `/` command. You can also stack several skills at once and attach reference files.

Skills began rolling out in Gemini chat on 30 September 2026. Personal Google accounts lose Gems in November 2026 (auto-migration starts around 17 November). Workspace business and enterprise accounts keep Gems until March 2027 or later. Education accounts have until June 2027. Google will convert remaining Gems into draft skills automatically.

This guide shows how to create skills three ways, use and stack them, add files, and prepare for the migration.

![Person working on a laptop with productivity tools](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Skills Are and Why They Replace Gems

A skill is a saved set of instructions (name, description, and detailed prompt) that Gemini can apply in the current conversation. Unlike Gems, which lived in a separate manager, skills work directly inside any chat. Gemini can also suggest or auto-apply a skill when your prompt matches its description.

You can stack multiple skills in one prompt. For example, combine a “match my writing style” skill with a “brand guidelines” skill. Skills also support reference files (plain text, PDFs, or images) so Gemini has consistent context.

Official details come from Google’s blog post announcing the feature and the Workspace help centre page on the Gems-to-skills transition.

## How to Create a Gemini Skill

There are three practical methods. All require a Google account and Gemini access (available on free and paid tiers for users 18+).

### Method 1: Create with Gemini (fastest)

1. Open gemini.google.com or the Gemini mobile app and start a new chat.
2. Type something like: “Create a skill for me that drafts weekly status updates. Include sections for accomplishments, blockers, and next steps. Use a concise professional tone.”
3. Review the skill Gemini generates. Edit the name, description, or instructions if needed.
4. Save it. It appears in Settings → Skills.

### Method 2: Create manually

1. Open Settings (profile icon) → Skills.
2. Select Create manually (or New skill).
3. Enter a clear name (e.g., “meeting-recap”), a short description that helps Gemini match prompts, and detailed instructions.
4. Optionally upload reference files.
5. Save and test immediately by starting a chat and typing `/meeting-recap`.

### Method 3: Upload a SKILL.md file

Skills use an open Markdown format. You can write one locally and upload it, or import skills created on other platforms that support the same format. This is useful if you already have custom GPTs or Claude skills you want to move.

After creation, skills appear under Settings → Skills. You can edit, duplicate, or delete them there.

![Laptop screen showing an AI chat interface](https://images.unsplash.com/photo-YmSiFKOecCU?auto=format&fit=crop&w=800&q=80)

## How to Use and Stack Skills

In any Gemini chat:

1. Type `/` in the prompt box. A list of your skills appears.
2. Select one or type the name (e.g., `/weekly-status`).
3. Add your specific request after the command.
4. To stack skills, mention multiple ones or let Gemini apply matching skills automatically based on the description.

Example stacked prompt:  
`/writing-style /brand-guidelines Draft a LinkedIn post about our new product launch using the attached brand voice doc.`

Gemini applies both sets of instructions to the same output. You stay in the same chat thread.

For larger tasks, Gemini can also build or refine a skill from an existing conversation.

## Adding Reference Files and Tips for Better Results

- Upload plain text, PDFs, or images when creating or editing a skill. Total size limit is typically 100 MB across files in one skill.
- Write a precise description. Gemini uses it to decide when to apply the skill automatically.
- Test immediately. Run the skill on a real example and refine the instructions.
- Keep skills focused. One skill for meeting recaps, another for email tone, rather than one giant prompt.
- Limit active skills. You can have many, but only a practical number should be active at once for clarity.

Common useful skills include: meeting recap, writing style match, proposal writer, executive summary, weekly status update, brainstorming partner, and SOP writer.

## Preparing for the Gems Migration

- Inventory your current Gems. Note which ones you still use and any knowledge files attached.
- Recreate important ones as skills now so you control the wording. Google will auto-migrate the rest as drafts.
- Sharing and Drive/Notebook file attachments are rolling out to skills “in the coming weeks.”
- Canvas, Deep Research, video/music creation, and Guided Learning are not yet available inside skills.
- Opal (the mini-apps experiment) is also turning down in November for personal accounts.

For more on Gemini productivity features, see our guide on [using Gemini Spark and status bar tools](/blog/android-halo-gemini-spark-status-bar/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Skills make Gemini more practical for repeated work. You define the process once, then call it (or stack it) from any chat. Start with one or two high-frequency tasks, test them, and migrate your best Gems before the November deadline for personal accounts.

The feature is free for eligible users and continues to gain parity with older Gems tools.

**Sources**  
- Google Blog: Automate repetitive tasks with Skills (30 September 2026)  
- Google Workspace Help: About the transition from Gems to skills  
- Android Authority and 9to5Google reporting on rollout dates and usage
