---
title: "Create Gemini Skills: Step-by-Step Guide to Replace Gems"
description: "Learn how to create, use, and manage Gemini Skills in the app. Replace Gems with reusable custom instructions for faster, consistent AI workflows."
pubDate: 2026-10-20T10:00:00
heroImage: "https://images.unsplash.com/photo-YmSiFKOecCU?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Google is rolling out Skills in the Gemini app, starting October 13, 2026, with full availability expected by mid-November. Skills replace Gems as the way to save reusable custom instructions. You create them once, call them with a simple shortcut, and Gemini applies your preferences across chats and tasks.

This guide walks you through the requirements, creation methods, usage, management, and the transition from Gems. All steps come from Google’s official Gemini Apps Help and Workspace update posts.

## What Gemini Skills Are

A Skill is a saved package of instructions that Gemini can apply automatically or on request. It includes a name, description, and detailed guidance. You can attach reference files such as text documents, PDFs, or images.

Unlike Gems, Skills work inline in any chat. You can stack multiple Skills in one prompt. Gemini can also detect when a Skill matches your request and apply it without an explicit call. Skills use an open Markdown format called SKILL.md, so the same file can move between tools.

Skills are available to users of all ages in the Gemini mobile app, the Mac app, and the web app at gemini.google.com. Workspace Skills (for Gmail, Docs, and other apps) follow a separate, slightly delayed rollout and are limited to users over 18.

## Requirements Before You Start

You need three things:

- Be 18 or older.
- Sign in to the Gemini app with a Google account.
- Keep Activity turned on in Gemini settings.

No paid subscription is required for Skills in the Gemini app. Google AI Pro or Ultra plans increase usage limits but are not mandatory to create or run Skills.

## How to Create a Gemini Skill

Open the Gemini app on your phone, Mac, or go to gemini.google.com. Tap the menu (or More if needed), then Customize, then Skills. From the Skills page you have several creation options.

### Create with Gemini

Tap Create, then Create with Gemini. Describe the task you want the Skill to handle. Gemini asks follow-up questions and drafts the name, description, and instructions for you. Review the draft and save. This is the fastest way if you have not written a Skill before.

### Start from a Template or Blank

Choose a recommended template and edit the fields, or select Create manually. Enter a name in lowercase with hyphens (for example, meeting-recap). Add a short description and the full instructions. Save when finished.

### Upload a SKILL.md File

Prepare a folder or zip that contains a SKILL.md file at the root. The file must start with the required frontmatter (name, description) followed by the instructions. Tap Upload, select the file or folder, review the imported Skill, and create it. This method is useful if you already maintain Skills for other tools or want to version-control your instructions.

You can also ask Gemini inside an existing chat to turn the current instructions into a Skill. Gemini will generate the Skill and save it for you.

![Person working on a laptop at a tidy desk](https://images.unsplash.com/photo-k4KQrDUeJ5Y?auto=format&fit=crop&w=800&q=80)

## How to Use Skills in Chats and Tasks

In any chat or task, type / (forward slash). A list of your Skills appears. Select the one you want and continue with your request. On some accounts the shortcut has updated to @. Either works once the rollout reaches your account.

Gemini can also apply an activated Skill automatically when the request matches the Skill’s description and instructions. You do not need to call it every time.

Combine Skills for multi-step work. For example, call a “brand-voice” Skill together with a “weekly-newsletter” Skill in the same prompt. Gemini applies both sets of instructions to the output.

Active Skills remain available across conversations until you deactivate them. Past chats that used a Gem stay in your history; they are not converted automatically.

## Manage, Edit, and Delete Skills

Return to Customize → Skills to see every Skill you own. You can:

- Activate or deactivate a Skill. Deactivated Skills are not applied automatically, but you can still call them manually.
- Edit the name, description, or instructions.
- Download the Skill as a SKILL.md package.
- Delete the Skill permanently. Deletion cannot be undone.

To update reference files, re-upload the complete package. The mobile app currently does not support direct file uploads for editing; use the web or Mac app for that step.

## Transition Timeline from Gems

Google is moving users from Gems to Skills on a phased schedule:

- Skills began rolling out in the Gemini app on October 13, 2026.
- On November 17, 2026, Gems move into the Settings panel. You can still create, edit, and use them.
- For personal accounts, Gems will stop working and be removed no sooner than a later date; remaining Gems are auto-migrated to draft Skills.
- Workspace business and enterprise accounts keep Gems until no sooner than March 1, 2027.
- Education accounts have a later cutoff, no sooner than June 1, 2027.

If you rely on Gems, recreate the most important ones as Skills now. Download any Knowledge files from the Gem, create a matching Skill, and paste the instructions. You can also ask Gemini to help convert an existing Gem’s instructions into a Skill.

## Practical Tips for Better Skills

Write the description so Gemini can recognize when to apply the Skill automatically. Include clear constraints such as tone, length, format, or sources to use.

Attach reference files only when they add value. Large or irrelevant files can slow responses.

Test a new Skill in a fresh chat before relying on it for important work. Adjust the instructions based on the actual output.

Stack Skills sparingly at first. Too many overlapping instructions can produce mixed results. Start with one or two and add more once the output is stable.

Keep a local copy of your SKILL.md files. The open format lets you reuse the same instructions in other AI tools that support the standard.

![Smartphone screen showing an AI chatbot interface](https://images.unsplash.com/photo-BlWbfrQrI5k?auto=format&fit=crop&w=800&q=80)

## Conclusion

Skills give you a faster, more consistent way to guide Gemini. Create them once, call them with a slash or let Gemini apply them automatically, and stack them for complex tasks. The rollout is already underway, and Gems will phase out over the next several months. Set up your core Skills now so the transition is smooth.

For related ways to connect Gemini to other tools, see our guide on [connecting apps to Gemini](/blog/connect-apps-to-gemini/).

## Sources

- Google Workspace Updates: An update on the launch of skills in the Gemini app and Workspace (October 13, 2026)
- Gemini Apps Help: Create & manage skills for Gemini Apps
- Google Workspace Updates: Introducing skills in the Gemini app and Workspace (September 30, 2026)
- blog.google: Automate repetitive tasks with Skills (September 30, 2026)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
