---
title: "How to Create and Use Skills in Gemini to Replace Gems"
description: "Step-by-step guide to create Gemini Skills for reusable instructions, stack them in chats, add files, and transition from Gems before they end."
pubDate: 2026-11-02T12:00:00
heroImage: "https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "how-to", "productivity"]
noindex: false
---

Google is replacing Gems with Skills in the Gemini app. Skills let you save custom instructions once and reuse them in any chat by typing a slash or letting Gemini apply them automatically. This guide shows the verified steps from Google’s help center and official blog to create, use, and manage Skills on personal accounts.

Skills work in the Gemini web app at gemini.google.com, the mobile app, and the Mac app. You need to be 18 or older, signed in, and have Keep Activity turned on. No paid Google AI plan is required for basic Skills. Workspace accounts still use Gems for now and will switch later.

## What Skills change compared with Gems

Gems required you to open a separate conversation. Skills run inside any chat. You can stack several Skills in one prompt, for example a brand-voice Skill plus a formatting Skill. Skills use an open Markdown format called SKILL.md, so you can move instructions between tools. Google plans to migrate existing Gems automatically when support ends.

Personal Google Accounts lose the ability to create or edit Gems starting November 17, 2026. Gems become read-only then and disappear on December 17, 2026. Business and enterprise accounts keep Gems until no earlier than March 1, 2027. Education accounts follow in June 2027. Google will convert remaining Gems into draft Skills.

![Laptop open on a desk with code on screen and a plant nearby](https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=800&q=80)

## Step-by-step: create your first Skill

Open gemini.google.com and sign in. In the left sidebar, click Customize. If you do not see it, click More first. Select the Skills tab at the top.

You have several ways to start:

1. Click Create and choose Create with Gemini. A chat opens. Describe the task, when it should run, and the output format. Gemini drafts the name, description, and instructions for you. Review and click Create.

2. Pick a recommended template under the list. Edit the name, description, and instructions, then save.

3. Choose Create manually. Enter a name in lowercase with hyphens, such as meeting-recap. Write a description that starts with “Use when” so Gemini knows when to apply it automatically. Add clear instructions and any constraints.

4. Upload a SKILL.md file or a folder that contains one at the root, plus optional reference files. Gemini reads the frontmatter and fills the form.

You can also ask in any chat: “Create a skill based on these instructions” and paste your rules. The skill appears on the Skills page for editing later.

Name rules are strict: lowercase letters, numbers, and hyphens only. The description is important because Gemini uses it to decide automatic application.

## Use a Skill in any chat

In a new or existing chat, type / (or @ on updated versions) and select the Skill from the list. Add your specific request after it. Gemini applies the instructions immediately.

Gemini can also activate an enabled Skill on its own when your prompt matches the description. Turn automatic use on or off from the Skills page. You can combine multiple Skills in one message by selecting more than one.

For example, create a meeting-recap Skill that lists decisions, action items with owners and due dates, and open questions. In a chat type /meeting-recap and paste notes. The output follows the fixed structure without extra prompting.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Add reference files and stack Skills

Skills support reference files such as plain text, PDFs, and images. Upload them when you create or edit the Skill. Total size limits apply; Google lists them in the help center. Files give the Skill permanent context, such as a style guide or sample output.

Stacking works by selecting several Skills in the same prompt. A writing-style Skill plus a brand-guidelines Skill produces on-brand text in your voice. Test combinations on real tasks and edit the instructions if Gemini skips a rule.

![Person working at a tidy desk with laptop and plant](https://images.unsplash.com/photo-1749048574079-5d6a12e6cd0c?auto=format&fit=crop&w=800&q=80)

## Manage, edit, and migrate from Gems

From the Skills page you can activate or deactivate a Skill, edit its instructions, download it as a file, or delete it. Deleting is permanent. To update files you usually re-upload the whole Skill package.

To move a Gem: open the Gem, download its knowledge files, create a new Skill manually, paste the instructions, and upload the files. Google will also auto-migrate Gems into draft Skills on the cutoff dates.

If you use Gemini for complex coding tasks, Skills pair well with models such as Gemini 4 Argon. See our guide on [how to use Gemini 4 Argon for complex coding tasks](/blog/how-to-use-gemini-4-argon-for-complex-coding/) for related setup tips.

## Practical tips for better Skills

Write instructions the way you would brief a colleague: state the goal, the exact output format, length limits, and what to avoid. Include one short example of good output.

Start with one high-frequency task such as email replies, meeting notes, or weekly status updates. Test the Skill on three real examples and tighten any vague rules.

Keep the description specific. “Use when I paste meeting notes and need a structured recap” works better than a generic label.

Skills do not yet work inside Canvas or Deep Research on all accounts. Check the help center for the latest supported surfaces.

## Conclusion

Skills replace the separate Gem windows with reusable instructions you call from any Gemini chat. Create them with Gemini’s help, from templates, manually, or by upload. Stack them, attach files, and prepare for the automatic migration from Gems. Personal users should create or convert Skills before the November and December 2026 cutoffs.

## Sources

- Google Blog: Automate repetitive tasks with Skills (September 30, 2026) — https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Gemini Apps Help: Create & manage skills for Gemini Apps — https://support.google.com/gemini/answer/17094296
- Google Workspace Updates: Introducing skills in the Gemini app and Workspace — https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- YouTube: Google Gemini Skills Are Finally Here — https://www.youtube.com/watch?v=XQtvloPXap4
