---
title: "How to Create and Use Skills in the Gemini App"
description: "Step-by-step guide to create, stack, and use reusable Skills in Gemini. Replace Gems and automate repeated tasks."
pubDate: 2026-11-06T12:00:00
heroImage: "https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Google rolled out Skills in the Gemini app starting 13 October 2026. Skills let you save custom instructions once and reuse them in any chat or task. They work on web, Android, and the Mac Gemini app for users 18 and older who keep Activity on.

Unlike the older Gems, Skills sit inline in your regular conversations. You can stack several in one prompt, upload reference files, and let Gemini apply them automatically when the context matches. This guide shows the exact steps from Google’s help pages and Workspace update.

## What Skills do in Gemini

A Skill is a reusable set of instructions plus optional files. You name it, describe when it should run, and write the rules Gemini must follow. Once saved, type `/` (or `@` on updated accounts) in any chat to call it, or let Gemini pick it when relevant.

Examples include a brand-voice writer, a meeting-recap formatter, a lesson-plan template, or a vendor-comparison checklist. You can combine two or more Skills in the same request so one handles tone while another handles structure.

Skills use the open SKILL.md format. You can export a Skill as a zip and import one built on another platform, provided it follows the naming rules (lowercase, hyphens).

![Laptop and plant on a wooden desk ready for focused work](https://images.unsplash.com/photo-1749048574079-5d6a12e6cd0c?auto=format&fit=crop&w=800&q=80)

## How Skills differ from Gems

Gems were separate custom assistants. Skills live inside ordinary chats and Tasks. You can layer multiple Skills in one prompt, something Gems did not support cleanly.

Google’s 30 September 2026 Workspace update lists the transition timeline:

- 13 October 2026: Skills begin rolling out in the Gemini app (expected complete mid-November).
- 17 November 2026: Gems move to the Settings panel; you can still create and use them.
- No sooner than 1 March 2027 (business/enterprise): Gems are removed; remaining ones auto-migrate to draft Skills.

Skills do not currently sync between the Gemini app and Workspace apps. Create them separately if you need both.

## How to create a Skill

Open gemini.google.com (or the Mac app) and sign in. Click Customize in the sidebar (tap More first if you do not see it), then Skills.

You have four main ways:

1. **Create with Gemini**  
   Click Create → Create with Gemini. Describe the job in plain language. Gemini asks follow-up questions and drafts the Skill. Refine by chatting until the instructions match what you want.

2. **Start from a recommended template**  
   Pick a prefilled template under Recommended. Edit the name, description, and instructions. Add files if needed, then Create.

3. **Create manually**  
   Click Create → Create manually. Enter a short hyphenated name (for example, brand-voice), a clear description, and the full instructions. Include an example of good output.

4. **Upload a SKILL.md file or folder**  
   Click Create → Upload. Choose a SKILL.md file, or a folder/zip that contains SKILL.md at the root. Total upload size must stay under 100 MB. Supported files include text, PDFs, images, spreadsheets, and limited code types. Scripts that call external websites are blocked.

You can also start from inside an existing chat: ask Gemini “Create a skill based on these instructions: …” and it saves the result to your Skills page.

After creation, activate the Skill so Gemini can apply it automatically. Deactivate any you want to call only manually.

![Clean laptop setup with AI workspace on screen](https://images.unsplash.com/photo-1758626099012-2904337e9c60?auto=format&fit=crop&w=800&q=80)

## How to use a Skill in a chat or Task

In any chat or Task:

1. Type `/` (or `@`) in the prompt box.
2. Select the Skill from the list that appears.
3. Add the specific details for this run (the email text, the notes, the product name).

Gemini applies the saved instructions. You can call a second Skill in the same message to stack them. For example, call a “weekly-status” Skill and a “brand-voice” Skill together.

Activated Skills can also trigger on their own when your request matches the description. Turn automatic use on or off from the Skills page by clicking More → Activate/Deactivate.

Skills work with Tasks (the background mode that replaced Spark). Pair a Skill with a schedule so Gemini runs the same formatted report every morning.

## Tips for reliable Skills

Write instructions the way you would brief a new colleague: state the goal, the audience, the required sections, the tone, and what to avoid. Add one short example of ideal output.

Keep the description specific. Gemini uses it to decide when to apply the Skill automatically.

Test with two or three real inputs before relying on it. Edit by opening the Skill and choosing Edit with Gemini or by typing changes in chat.

Download a backup zip before you delete anything. Deletion cannot be undone.

If you already have Gems, recreate the useful ones as Skills now. Google will auto-migrate remaining Gems later, but manual conversion lets you clean up the instructions first.

For study workflows that need grounded sources, pair Skills with the free textbooks available in Gemini Notebook. See our guide on [adding free textbooks to Gemini Notebook](/blog/add-free-textbooks-gemini-notebook/) for the catalog steps.

## Conclusion

Skills turn repeated instructions into one-click or automatic actions inside Gemini. Create them from the Skills page, call them with `/` or `@`, and stack them when a task needs multiple rules. The rollout is underway for all eligible users, and Gems will phase out over the next year.

Start with one frequent task—meeting notes, brand voice, or weekly status—and build the Skill today. You will stop pasting the same prompt every time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Introducing skills in the Gemini app and Workspace, plus what’s next for Gems](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates, 30 September 2026
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google Blog
- [About the transition from Gems to skills](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/about-the-transition-to-skills) — Google Workspace Help
