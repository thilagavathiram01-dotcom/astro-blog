---
title: "How to Create and Use Gemini Skills for Workflows"
description: "Step-by-step guide to creating, managing, and using Gemini Skills in the Gemini app. Reusable custom instructions for productivity, free for personal accounts."
pubDate: 2026-10-13T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Google rolled out Gemini Skills in late September 2026. These reusable custom instructions replace much of the old Gems workflow and let you save preferred formats, rules, and reference material once, then apply them across chats.

Skills work in the Gemini mobile app, the Mac app, and at gemini.google.com for personal Google accounts (age 18+). Keep Activity must be on. The feature is free—no Google AI subscription required for basic use. Work and school accounts receive Skills later.

## What Gemini Skills Are

A Skill is a named set of instructions (plus optional reference files) stored as a SKILL.md file under the open Markdown standard. Gemini can apply it automatically when the description matches your prompt, or you can call it explicitly with a slash (/) command (soon @).

Unlike a one-off prompt, a Skill stays available across chats and tasks. You can stack multiple Skills in one request. Google notes that Skills do not yet sync between the Gemini app and Workspace apps, so you create them separately if you need both.

## Requirements Before You Start

Confirm three items:

- You are signed in with a personal Google Account and are 18 or older.
- Keep Activity is turned on in your Gemini settings.
- You are using the Gemini mobile app, Mac app, or gemini.google.com.

If Skills do not appear yet, the rollout is gradual. Check Settings periodically.

## How to Create a Gemini Skill

Google offers four methods. The fastest for most people is conversational creation.

### Method 1: Create with Gemini

1. Open the Gemini app or gemini.google.com.
2. Go to Menu (or sidebar) → Settings → Skills.
3. Tap or click Create with Gemini.
4. Describe the skill in plain language. Example: “Create a skill that turns meeting notes into a structured recap with decisions, action items (owner and due date), and open questions. Never invent owners or dates.”
5. Review the generated name, description, and instructions. Edit if needed, then save.

The description is critical. Gemini uses it to decide when to apply the skill automatically. Write a third-person capability statement plus specific “Use when…” examples.

### Method 2: Create Manually

1. On the Skills page, choose Create manually.
2. Enter a name in lowercase with hyphens (e.g., weekly-status-update). Start with an action verb when possible.
3. Write a focused description under 1,024 characters.
4. Add detailed instructions: steps, output format, rules, and a concrete example of the desired result.
5. Click Create.

Note: Manually created skills may not save correctly in the mobile app at the moment. Prefer the web version for manual creation if you hit issues.

### Method 3: Ask in a Chat

In any Gemini chat, type: “Create a skill based on these instructions: [your detailed instructions].” Gemini drafts the skill. You can then edit it from the Skills page.

### Method 4: Upload a SKILL.md File

Prepare a folder containing SKILL.md (and optional reference files). Upload the folder or a zip from the Skills page. This is useful if you already have Skills from Claude or other tools that follow the same Markdown standard.

![Person working on a laptop at a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## How to Use Skills

- Type / in the prompt box (or @ after the shortcut update) and select the skill, then add your input.
- Leave the skill activated so Gemini applies it automatically when relevant.
- Combine skills: mention two or more in one prompt or let the system select them based on context.

You can turn automatic use on or off per skill from the Skills page. If a skill is off and you call it, Gemini asks whether to activate it.

## Tips for Effective Skills

- Keep the description specific. Vague text leads to false triggers.
- Include an example of the exact output format you want.
- Reference other skills inside instructions for multi-step workflows.
- Upload supporting files (up to the size limit) for brand voice, templates, or data schemas. File updates require re-uploading the full skill package on some platforms.
- Test the skill with real inputs immediately after creation.

Best practices from Google’s help pages emphasize starting the name with an action, avoiding generic words, and listing clear use-when conditions.

## Migrating from Gems

Gems remain available for now. Personal accounts see Gems move to Settings and eventually convert to Skills around November 2026. Workspace and Enterprise Gems migrate later (no sooner than March 2027).

To migrate early:

1. Open the Gem, download any Knowledge files.
2. Create a new skill manually and paste the name, description, and instructions.
3. Re-upload the files if needed.

Skills built on the SKILL.md standard can also be copied to other platforms that support the format.

## Limitations and Known Issues

- Skills are currently limited to personal accounts on the listed apps.
- Editing skills that contain uploaded files works best on the web.
- Automatic application depends on a clear description.
- No real-time sync between Gemini app Skills and Workspace Skills.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Related Reading

If you build Android agents or use Gemini models in apps, see our guide on [adding Gemini 3.8 Flash with Firebase AI Logic](/blog/add-gemini-3-8-flash-android-firebase-ai-logic/).

## Conclusion

Gemini Skills turn repeated instructions into reusable tools you can call with a slash or let Gemini apply automatically. Start with one task you perform weekly—status updates, meeting recaps, or email drafts—create the skill once, and reuse it. The feature is free for eligible personal accounts and follows an open Markdown standard, so your work stays portable.

Check Settings → Skills today. If the option is missing, it should appear as the rollout continues.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Google Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Google Gemini Apps Help
- [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates
- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Google Gemini Apps Help
