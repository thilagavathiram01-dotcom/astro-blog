---
title: "How to Use Gemini Skills to Automate Repetitive Tasks"
description: "Step-by-step guide to create and use Gemini Skills in the Gemini app. Automate repetitive tasks with reusable instructions that replace Gems."
pubDate: 2026-10-11T10:00:00
heroImage: "https://images.unsplash.com/photo-k4KQrDUeJ5Y?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Repetitive prompting wastes time. You explain the same formatting rules, tone, or output structure in every new Gemini chat. Google fixed that on September 30, 2026, by rolling out Skills directly into Gemini chat.

Skills are reusable instructions that Gemini applies automatically or on demand. They replace Gems for most users and work inside any conversation instead of requiring a separate chat window. You can also stack several skills in one prompt.

This guide shows you how to create, use, and manage Skills based on Google's official announcement and help documentation.

## What Gemini Skills are

A Skill is a named set of instructions plus an optional description. Gemini checks the name and description first. If your prompt matches, it loads the full instructions and follows them.

You invoke a Skill by typing `/` followed by its name (Google says this will later become `@`). Skills can also run automatically when the context fits. You can attach reference files such as text documents, PDFs, or images.

Skills differ from the older Gems feature. Gems lived in their own isolated chats. Skills stay inside your normal conversation thread, so you can combine them freely. For Android developers who already use agent skills with coding tools, this is the consumer-facing version of the same idea. See our earlier guide on [Android Skills and Android CLI with AI agents](/blog/android-skills-ai-agents/).

![Person working on a laptop at a tidy desk](https://images.unsplash.com/photo-ieDXimQcLeM?auto=format&fit=crop&w=800&q=80)

## How to create a Skill

Google offers two main methods. Both are available in the Gemini app on web and mobile for users 18 and older with a personal Google account.

### Create a Skill from a chat

1. Open the Gemini app or go to gemini.google.com.
2. Start a new chat.
3. Describe the Skill you want. Example: "Create a skill that turns my weekly project updates into a concise report with sections for completed work, current priorities, blockers, and next steps."
4. Review the draft Gemini produces.
5. Save it. Gemini adds the Skill to your Skills page.

This method works well when you already have a good prompt history for the task.

### Create a Skill manually

1. Open the Gemini app or site.
2. Tap or click the menu, then Settings, then Skills.
3. Choose Create Manually.
4. Enter a clear name, a short description of when to use it, and the full instructions.
5. Optionally upload reference files.
6. Save and activate the Skill.

Keep the description specific. Gemini uses only the name and description to decide whether a Skill is relevant. Vague descriptions lead to missed automatic triggers.

You can also upload a skill.md file that follows the open standard format used by other AI tools.

## How to use Skills in chat

Once a Skill is active, you have two options.

Type `/` in the prompt bar. A list of your Skills appears. Select one or type its name, then add your specific request. For example: `/weekly-report Complete this week's update for the marketing team.`

Or simply write a normal prompt. If the context matches an active Skill's description, Gemini applies the instructions automatically.

You can stack multiple Skills. Type `/` for each one or let Gemini combine them when they fit. One common pattern is a writing-style Skill plus a brand-guidelines Skill for consistent external content.

![Modern office workspace with computer](https://images.unsplash.com/photo-foE7REXCXFM?auto=format&fit=crop&w=800&q=80)

## Practical examples that save time

Google highlighted several use cases in its September 30 announcement:

- Presentation prep: Outline slides, draft talking points, and prepare answers for likely questions.
- Writing style matching: Apply your preferred tone and structure across drafts while you stay in control of the final text.
- Multiple perspectives: Always receive three to five distinct viewpoints before you decide.

Other strong candidates include meeting notes that extract decisions and action items, weekly status reports, or standardized email replies. Start with a task you already repeat more than three times a week.

## Tips for better Skills

Write instructions as clear steps rather than long paragraphs. Include the exact output format you want, such as headings, bullet points, or tables.

Add reference files for facts that change slowly, like brand guidelines or a style sheet. Update the files when those facts change instead of rewriting the whole Skill.

Test a new Skill in a fresh chat before you rely on it. Check both the automatic trigger and the manual `/` invocation.

Keep Skills focused. A single Skill that tries to handle every writing task becomes hard to maintain and less reliable.

## Transition from Gems

Skills are already replacing Gems. Google will remove support for Gems starting in November 2026 for personal accounts. Workspace business, enterprise, and nonprofit accounts keep Gems until March 2027, and education accounts until June 2027.

Existing Gems will migrate automatically into Skills. Sharing and Google Drive file support for Skills are coming in the following weeks, according to Google.

If you still use Gems, review them now and convert any that you want to keep as Skills. The Opal mini-app experiment is also shutting down in November.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Skills turn one-time instructions into reusable tools that live inside ordinary chats. You create them once, invoke them with `/` or let Gemini apply them automatically, and stack them for more complex work.

Start with one repetitive task today. Create the Skill, test it in a new chat, and measure how many prompts you eliminate over the next week. That single change removes more friction than another generic productivity tip.

## Sources

- [Automate repetitive tasks with Skills](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google Blog (30 September 2026)
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Gemini Apps Help
- [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates (30 September 2026)
