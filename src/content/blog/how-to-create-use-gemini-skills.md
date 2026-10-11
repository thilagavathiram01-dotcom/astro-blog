---
title: "How to Create and Use Gemini Skills to Save Time"
description: "Learn how to create Gemini Skills in the Gemini app to automate repetitive daily tasks. Step-by-step tutorial with practical examples and tips."
pubDate: 2026-10-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "productivity", "google"]
noindex: false
---

Repetitive tasks drain time. Drafting the same style of emails, summarizing meetings, or formatting notes the same way every week adds up. Gemini Skills fix this by letting you save custom instructions once and reuse them in any chat.

Google rolled out Skills in the Gemini app at the end of September 2026. They replace Gems for personal accounts and work inline so you can stack them. You no longer retype preferences or re-upload files for the same job.

This guide shows how to create, use, and manage Skills using only official steps from Google’s help pages.

## What Gemini Skills are

A Skill is a saved set of instructions and preferences that teaches Gemini how to handle a specific type of task the way you want. Think of it as a cheat sheet for your process, style, and rules. Gemini applies it without you explaining the details again.

Each Skill focuses on one job. You can use it alone or combine several for larger workflows. Skills work across chats and tasks. Gemini can detect when a Skill matches your prompt and apply it automatically, or you can call it with a slash command.

Skills support reference files such as plain text, PDFs, and images when you upload them with the Skill. Total size limit is 100 MB. Scripts that need the internet are not supported.

## Requirements and where Skills work

You need a personal Google Account. You must be 18 or older and have Keep Activity turned on. Skills are currently available in the Gemini mobile app, the Gemini app on Mac, and the web app at gemini.google.com. They are not yet available for work or school accounts in the same way.

Rollout started with personal accounts. If you do not see Skills yet, wait a few days and check again.

![Person working on a laptop at a clean desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## How to create a Gemini Skill

You can create a Skill from the Skills page or directly in a chat.

### From the Skills page

1. Open gemini.google.com (or the Mac app).
2. Click Settings, then Skills in the sidebar.
3. Choose one of these methods:
   - Create with Gemini: Click the button and follow the chat instructions.
   - Use a recommended template: Select one under Recommended and edit the name, description, and instructions.
   - Create manually: Click Create manually, enter a name (lowercase with hyphens), a short description, and the full instructions, then click Create.
   - Upload: Click Upload and select a SKILL.md file, or a folder/zip that contains one in the root. Review and create.

The name must use lowercase letters and hyphens. The description helps Gemini decide when to apply the Skill. Start it with a third-person statement of what it does and add “Use when…” examples.

### From a chat

Type a request such as “Create a skill based on these instructions: [your rules].” Gemini builds the Skill and saves it to your Skills page. You can refine it in the same chat.

You cannot activate, deactivate, or delete a Skill from inside a chat. Use the Skills page for those actions.

## How to use Skills

Open any Gemini chat or task.

- Type / (or @ in some interfaces) to see your Skills and select one.
- Gemini can also apply an active Skill automatically when your prompt matches the description.
- You can call multiple Skills in one prompt to handle complex work.

Turn automatic use on or off per Skill from the Skills page: open the Skill, click More, and choose Activate or Deactivate.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for writing effective Skills

Google’s help page lists clear practices:

- Start the name with an action verb. Focus on what the Skill does.
- Write the description in the third person. List specific situations that start with “Use when…”. Keep it under 1024 characters.
- Write instructions for a type of task, not one narrow example. This makes the Skill reusable.
- Add reference files only if they add real context, such as style samples or templates.
- Test the Skill with a few real inputs, then edit the description or instructions if Gemini misses the trigger.

You can also ask Gemini to improve an existing Skill by describing the changes you want.

![Team collaborating around laptops in an office](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80)

## Managing and downloading Skills

On the Skills page you can edit a Skill (directly or with Gemini), replace its files by re-uploading, download it as a zip, or delete it. Deletion is permanent.

If you cancel a Google AI subscription, Skills remain available in regular chats. Features that depend on Gemini Spark (tasks and schedules) pause until you resubscribe.

## Moving from Gems

Gems will be removed for personal accounts starting in November 2026. Google will auto-migrate remaining Gems into draft Skills. You can move them earlier:

1. Open the Gem and download any knowledge files.
2. Go to Settings → Skills → Create manually.
3. Paste the name, description, and instructions.
4. Create the Skill and upload converted plain-text versions of the files if needed.

Supported files are plain-text formats, PDFs, and images. Binary files such as .docx need conversion first.

For Android developers who already use official agent skills, the same idea of reusable instructions applies. See our guide on [Android skills and Android CLI for AI agents](/blog/android-skills-ai-agents/).

## Conclusion

Gemini Skills remove the need to repeat the same instructions every chat. Create one Skill for a recurring task, call it with a slash, or let Gemini apply it automatically. Start with a single high-frequency job such as meeting summaries or email drafting. Refine the description until Gemini triggers it reliably, then add more Skills as needed.

The feature is free for eligible personal accounts. Check gemini.google.com today and build your first Skill in a few minutes.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Gemini Apps Help
- [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919) — Gemini Apps Help
- [Automate repetitive tasks with Skills](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google Blog, 30 September 2026
