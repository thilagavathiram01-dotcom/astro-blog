---
title: "How to Use Gemini Customize Menu for Skills and Apps"
description: "Step-by-step guide to the Gemini Customize menu for managing skills, connecting apps, and personalizing AI responses on web and mobile."
pubDate: 2026-10-23T10:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

Google added a centralized Customize menu to the Gemini app in October 2026. It brings skills and connected apps into one place so you can set how Gemini responds and which tools it can reach without digging through separate settings.

The menu is rolling out globally on the web, mobile apps, and the Gemini desktop apps for Windows and macOS. It works for personal Google Accounts and all Workspace tiers. Most connected apps start in English in the US, with select options expanding to other English-speaking regions, Brazil, and India.

This guide shows how to open the menu, create and manage skills, connect apps, and use the tools together. All steps come from Google’s Workspace Updates blog and Gemini Help Center pages.

## What the Customize menu includes

The Customize hub has two main sections.

Skills hold reusable instructions that tell Gemini how to handle repeated tasks. You set a name, description, and steps. Gemini can apply a matching skill automatically or you can call it with a slash command. You can stack multiple skills in one prompt.

Connected apps let Gemini pull data or take actions in Google services and more than 40 external tools. You choose which ones to link, and you can review or remove permissions at any time. Examples include Gemini Notebook, Google Photos, YouTube, GitHub, Shopify, and Dropbox.

Admins manage organization-level access in the Admin console under Apps > Additional Google services > Gemini. End users control their own connections inside the app.

## How to open the Customize menu

The location is the same across platforms.

1. Open Gemini on the web at gemini.google.com, in the mobile app, or in the desktop app.
2. Open the left navigation menu (tap the menu icon on mobile).
3. Select Customize. If you do not see it, tap More first.
4. Switch between the Skills and Connectors (or Connected apps) tabs.

The menu may take up to 15 days to appear after the rollout start date of October 13, 2026, for Rapid and Scheduled Release domains. Check again later if it is missing.

![Smartphone screen showing AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Create and manage skills from Customize

You can create a skill directly from the Skills tab or from a chat. Requirements are simple: you must be 18 or older, signed in, and have Keep Activity turned on. Skills do not require a paid Google AI subscription.

### Create a skill with Gemini

1. In Customize, open the Skills tab.
2. Click Create, then Create with Gemini.
3. Describe the task in the chat that opens. Example: “Create a skill that formats weekly status updates with completed work, next steps, and blockers. Keep the tone factual.”
4. Review the draft, edit the name, description, or instructions, then save.

### Create manually or from a template

1. On the Skills page, click Create.
2. Choose Create manually or pick a recommended template.
3. Enter a name (lowercase with hyphens), a short description that states when to use the skill, and the full instructions.
4. Click Create.

You can also upload a SKILL.md file or a folder that contains one at the root. Total size must stay under 100 MB. Supported files include plain text, PDFs, images, and common code or data formats. Binary files such as .docx are not supported.

### Use and manage skills

In any chat, type / (or @ on updated accounts) and select the skill, then add your input. Gemini can also apply an activated skill on its own when the prompt matches the description.

To deactivate automatic use, open the skill in Customize > Skills and choose More > Deactivate. You can still call it manually. Edit, replace, download as a ZIP, or delete skills from the same menu. Deletion is permanent, so download a copy first if you may need it again.

You can reference other skills inside instructions to build longer workflows. Stacking works by typing multiple slash commands in one prompt.

For a deeper look at skill creation techniques, see our guide on [creating Gemini skills for reusable tasks](/blog/create-gemini-skills-reusable-tasks/).

![AI assistant interface on a smartphone screen](https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?auto=format&fit=crop&w=800&q=80)

## Connect and manage apps

Open the Connectors or Connected apps tab in Customize.

1. Browse available Google apps and third-party services.
2. Select an app and follow the prompts to grant access.
3. Confirm the connection.

You control every permission. Open the connected app entry later to audit what Gemini can see or do, then disconnect if needed. Google notes that most third-party apps are limited to English in the US at launch, with more regions and languages arriving later.

Connecting an app lets Gemini use it inside a conversation. For example, a Photos connection can help find or organize images, while a GitHub link can pull repository details. Combine this with skills so a writing skill formats the output while a connected app supplies the source data.

## Tips for using Customize effectively

Start with one skill for a task you repeat every week. Write a precise description so automatic triggering works correctly. Test the skill on real input and refine the instructions after the first runs.

Connect only the apps you need. Review permissions after connecting, especially for third-party services. If an app does not appear, check language and region settings or wait for the gradual rollout.

Skills and connected apps work together. A skill that prepares meeting briefs can pull calendar details from a connected Google app. Keep Activity on so skills remain available.

If you use Workspace, confirm with your admin that Gemini app access is enabled for the relevant services. Personal accounts see the menu as soon as the feature reaches their account.

## Common questions

Skills remain available if you cancel a Google AI subscription. Tasks and schedules may pause, but skills stay usable in chat. Gems will migrate to skills automatically; the timeline is November 2026 for personal accounts and later for Workspace.

The Customize menu does not replace every Gemini setting. Device assistance, lock-screen options, and other controls still live in the main Settings area.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Gemini Customize menu puts skills and app connections in one hub. Open it from the left navigation, create a skill for a repeated task, and link the apps you actually use. The result is less repeated prompting and clearer control over what Gemini can access.

Check the menu over the next few days if it has not appeared yet. The rollout is gradual but covers web, mobile, and desktop for all user types. Once it is visible, spend ten minutes setting one skill and one connection, then test both in a real chat.

## Sources

- [An easier way to customize how Gemini works for you (Google Workspace Updates)](https://workspaceupdates.googleblog.com/2026/10/an-easier-way-to-customize-how-gemini-works-for-you.html)
- [Create & manage skills for Gemini Apps (Google Help)](https://support.google.com/gemini/answer/17094296)
- [Customize how Gemini works and manage connected apps (Google Help)](https://support.google.com/gemini/answer/18736938)
- [Automate repetitive tasks with Skills (Google blog)](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
- [About the transition from Gems to skills (Google Help)](https://support.google.com/gemini/answer/18560919)
