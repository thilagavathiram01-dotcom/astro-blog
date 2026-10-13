---
title: "How to Create and Use Gemini Skills to Automate Tasks"
description: "Step-by-step guide to creating and using Gemini Skills in Google Gemini to automate repetitive tasks and save time."
pubDate: 2026-10-13T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "productivity"]
noindex: false
---

Google Gemini now lets you save custom instructions as Skills so you stop retyping the same prompts for recurring work. Skills replace the older Gems feature for personal accounts starting in November 2026. You type a slash command or let Gemini apply the right skill automatically.

This guide shows how to create Skills, use them in chats, and move your existing Gems over. The steps follow Google's official help pages and September 30, 2026 announcement.

## What Gemini Skills Are

A Skill is a named set of reusable instructions that teach Gemini how to handle one type of task. Gemini checks the skill name and description first. If they match your prompt, it loads the full instructions. You can stack several Skills in one chat.

Skills work in the Gemini web app at gemini.google.com, the Gemini mobile app, and the Gemini app on Mac. You need a personal Google Account, be 18 or older, and have Keep Activity turned on. Workspace accounts gain the feature later.

Google is rolling Skills out gradually. If you do not see the Skills page yet, check again in a few days.

![Person working on a laptop with AI interface elements](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## How to Create a Gemini Skill

Open gemini.google.com and sign in with a personal Google Account. Click the sidebar menu, then Settings, then Skills.

You have four ways to add a Skill:

1. Ask Gemini in any chat. Type something like "Create a skill that turns my meeting notes into action items with owners and due dates." Gemini drafts the skill for you. Edit the name, description, or instructions in the same chat if needed.

2. On the Skills page, choose Create with Gemini. Describe the job and follow the prompts.

3. Start from a Recommended template or a blank template. Fill in the name (use hyphens, no spaces), a short description, and the detailed instructions.

4. Upload a SKILL.md file or a zip that contains SKILL.md plus optional reference files such as plain text, PDF, or images.

The name and description matter most. Gemini uses them to decide whether the skill applies. Start the name with a verb and keep the description specific. Google recommends writing the description in the third person and starting with "Use when."

Example skill for weekly status reports:

- Name: weekly-status-report
- Description: Use when the user asks for a weekly status update or project summary. Turns raw notes into a short report with completed work, current priorities, blockers, and next steps.
- Instructions: Read the notes provided. Extract completed items, open priorities, blockers, and next actions. Format the output with clear headings. Do not invent dates or owners not mentioned in the notes.

Test the skill right after you create it. Paste sample input and check the result.

## How to Use Skills in a Chat

In any Gemini chat or Spark task, type / then the skill name. A menu of your active skills appears. Select one and add your input.

Gemini can also apply an active skill automatically when your prompt matches the description. Turn skills on or off from the Skills page. If a skill is off, Gemini asks before using it.

You can stack skills. Type /writing-style /brand-guidelines and then your request. Gemini combines the instructions.

Skills already available in Gemini Spark continue to work. The same skills appear in regular chat as the rollout finishes.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Laptop screen showing a chatbot interface](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for Writing Effective Skills

Keep each skill focused on one job. A single skill that tries to do research, writing, and formatting often produces weaker results. Split large workflows into smaller skills and stack them.

Write clear steps in the instructions. Number them if the order matters. Include an output format so Gemini knows exactly how to structure the reply.

List common mistakes to avoid. For example, "Do not add owners or dates that were not in the original notes."

Add reference files when the skill needs style guides, templates, or examples. Supported files include plain text, PDFs, and images. Total size per skill is limited.

Review and edit skills after a few uses. Ask Gemini to update an existing skill by describing the changes in chat.

For more on related Gemini features in Android, see our guide on the [Gemini Halo status bar](/blog/android-halo-gemini-spark-status-bar/).

## Moving from Gems to Skills

Google removes Gems for personal Google Accounts in November 2026. Workspace business, enterprise, and nonprofit accounts follow in March 2027. Education accounts follow in June 2027.

Google automatically migrates remaining Gems into draft skills when the feature ends. You can move them earlier yourself.

Open the Gem, download any knowledge files, then create a new skill manually. Paste the Gem name, description, and instructions. Upload converted files if needed. Skills do not accept every file type Gems supported, so convert Word or Excel files first.

Sharing and live Google Drive file links arrive for Skills in the coming weeks. Until then, upload static copies of the files you need.

## Conclusion

Gemini Skills turn repeated prompts into one-time setup. Create a skill for any task you run more than a few times, invoke it with a slash, and stack skills when the work has multiple parts. Personal accounts can start now. Workspace users get the feature soon.

Check the official Gemini help pages for the latest availability and file limits as the rollout continues.

## Sources

- Google Blog: Automate repetitive tasks with Skills (September 30, 2026)
- Gemini Apps Help: Create & manage skills for Gemini Apps
- Gemini Apps Help: About the transition from Gems to skills
- Gemini Apps Help: Write effective skills for Gemini Apps
