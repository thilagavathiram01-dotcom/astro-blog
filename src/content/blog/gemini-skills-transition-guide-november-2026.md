---
title: "Gemini Skills Transition Guide: Gems End Nov 2026"
description: "How Gemini Skills replace Gems for personal Google accounts starting November 2026. Steps to create, migrate, and stack skills before the cutoff."
pubDate: 2026-11-02T12:00:00
heroImage: "https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

Google is replacing Gemini Gems with Skills. For personal Google accounts, the change begins in November 2026. Skills let you apply reusable instructions inside any chat by typing a slash, and you can stack several at once.

This guide covers the timeline, how to create Skills, and how to move your existing Gems over before support ends.

## Why Skills replace Gems

Gems required you to open a separate conversation. Skills work inside the chat you already have. Type `/` followed by the skill name, or let Gemini apply a matching skill automatically.

Skills use the open SKILL.md format. You can copy instructions from other tools that support the same standard. They also work across the Gemini app and most Workspace apps once the rollout finishes.

![Person working at a laptop with code on screen and a plant nearby](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Transition timeline for personal accounts

Google’s Gemini Apps Help states that Gems will transition to Skills starting in November 2026 for personal Google Accounts. Work and school accounts follow in 2027.

On November 17, 2026, Gems move to the Settings panel in the Gemini app. You can still access them, but later dates make them read-only and then remove them. Remaining Gems convert automatically to draft Skills.

Business and enterprise accounts lose Gems no sooner than March 1, 2027. Education accounts follow no sooner than June 1, 2027. Skills do not currently sync between the Gemini app and Workspace apps, so you may need to recreate important ones in both places.

## How to create a Skill

Open the Gemini app or gemini.google.com. Go to Settings or the Customize menu and select Skills.

You have several options:

1. **Create with Gemini.** Click Create with Gemini. Describe what the skill should do. Gemini asks clarifying questions and drafts the name, description, and instructions.

2. **Create manually.** Enter a lowercase hyphenated name, a clear description that tells Gemini when to apply it, and the full instructions.

3. **Upload a SKILL.md file.** Prepare a Markdown file that starts with the required frontmatter. Upload it (or a zip containing it). Gemini extracts the details.

4. **Start from a recommended template.** Pick one under Recommended and edit it.

Attach reference files (PDF, text, images) up to a total of 100 MB. Drive integration is planned but not available yet.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to use and stack Skills

In any chat, type `/` and select the skill. You can add more than one in the same prompt. Gemini can also apply a skill on its own when your message matches the description.

Skills do not yet support every tool that Gems did. Canvas, Deep Research, video creation, music creation, and Guided Learning are not available inside Skills at launch.

## Migrate your Gems now

You can wait for the automatic conversion, or recreate important Gems yourself for better control.

1. Open the Gem and copy its instructions. Download any knowledge files.

2. Create a new Skill using one of the methods above. Paste the instructions into the skill body.

3. Upload the knowledge files with the skill.

4. Test the skill in a fresh chat by invoking it with `/`.

After the cutoff, migrated Gems appear as inactive drafts. You must review and activate each one before you can use it.

For more on building reusable Gemini workflows, see our guide to [adding Gemini 4 Argon in Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Close-up of hands typing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Tips for better Skills

Write a precise description. Gemini uses it to decide when to apply the skill automatically. Include the task, the audience, and any required output format.

Keep instructions focused. One skill should handle one clear job. Stack multiple skills when you need several behaviors at once.

Test with real examples. After creating the skill, run it on a few typical prompts and refine the instructions.

Export or save a copy of the SKILL.md file so you can move it to other tools later.

## What happens after the cutoff

Personal accounts lose the ability to create or edit Gems once the November transition completes. Existing Gems convert to draft Skills. Flows in Workspace Studio that used the “Ask a Gem” step stop working for business accounts in 2027.

Skills remain the supported way to add custom instructions. Update any automated workflows that relied on Gems before the dates listed above.

## Sources

- [About the transition from Gems to skills – Gemini Apps Help](https://support.google.com/gemini/answer/18560919)
- [Introducing skills in the Gemini app and Workspace – Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html)
- [Automate repetitive tasks with Skills – Google Blog](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
