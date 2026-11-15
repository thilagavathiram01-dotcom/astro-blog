---
title: "How to Create Custom Gemini Skills: Step-by-Step Guide"
description: "Learn how to create, use, and manage custom Gemini Skills for reusable AI workflows. Official steps to replace Gems and save time."
pubDate: 2026-11-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "productivity"]
noindex: false
---

Gemini Skills let you save custom instructions once and reuse them across chats. They replace Gems and work on free personal accounts for users 18 and older. You can create them manually, with Gemini's help, from templates, or by uploading a file.

This guide shows the exact steps from Google's official help pages. Skills reduce repetitive prompting for tasks like writing summaries, meeting recaps, or brand-voice content. They also stack, so multiple skills can run in one chat.

If you use Gemini for coding or Android development, check our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## What Gemini Skills are

A skill is a reusable set of instructions that Gemini applies automatically or on demand. It includes a name, a short description that tells Gemini when to use it, and detailed instructions.

Google rolled skills out starting in October 2026. They are available in the Gemini web app at gemini.google.com, the Mac app, and mobile apps. Skills in the Gemini app do not automatically appear in Google Workspace apps; you build those separately.

For personal Google accounts, Gems become read-only on November 17, 2026, and are removed on December 17, 2026. Workspace business accounts keep Gems longer, with removal no sooner than March 2027.

![Person working on a laptop with AI tools](https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google account, age 18 or older, and access to gemini.google.com or the Gemini app. Skills work on the free tier. Paid Google AI plans increase overall usage limits but are not required for skills.

Keep Gemini Activity on if you want the full experience. Some features, such as sharing skills, currently work only in the web app.

## Step 1: Open the Skills page

Go to gemini.google.com on a computer. In the left sidebar, click Customize, then select the Skills tab. If Customize is hidden, click More first.

On mobile, open the Gemini app, tap the menu, and look for Customize or Skills.

## Step 2: Choose how to create a skill

You have several options:

1. **Create with Gemini**: Gemini asks questions and drafts the skill with you.
2. **Recommended template**: Start from a prefilled example and edit it.
3. **Create manually**: Fill in the name, description, and instructions yourself.
4. **Upload**: Provide a SKILL.md file, or a folder or zip that contains SKILL.md at the root. Total upload size can reach 100 MB.
5. **From chat**: Ask Gemini in any conversation to create a skill from instructions you provide.

For most users, Create with Gemini or Create manually is the fastest start.

## Step 3: Name and describe the skill

The name must use lowercase letters with hyphens, such as meeting-recap or brand-voice. Start with an action verb and avoid vague words like helper or tools.

The description is one or two sentences in the third person. Include specific examples of when to use it, often starting with "Use when...". This helps Gemini decide automatically whether the skill applies. Keep it under 1,024 characters.

Example description: "Summarises meeting notes into decisions, action items with owners, and open questions. Use when the user pastes notes from a call or asks for a meeting recap."

## Step 4: Write clear instructions

Focus on the type of task rather than one specific example. Tell Gemini what inputs it needs, the steps to follow, the output format, and any guardrails.

Good instructions include:
- Required inputs (for example, the meeting notes or the draft text).
- Exact structure for the response.
- Rules such as "Never invent owners or dates" or "Leave a placeholder if information is missing".
- One strong example of the desired output.

You can reference other skills inside the instructions for more complex workflows.

![Developer coding on a laptop at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Step 5: Add reference files (optional)

Upload text files, PDFs, or images that the skill should use as context. Supported types are mainly text and documents. Video, audio, and direct Google Drive links are limited or coming later in the Gemini app.

Files stay with the skill so Gemini can reference them without you attaching them every time.

## Step 6: Save and activate

Click Create or Save. The skill appears on your Skills page. Activate it if it is not already on. You can edit, download a backup, deactivate, or delete skills later from the same page.

## How to use a skill

In any chat, type a forward slash (/) to open the skills menu and select one. Gemini can also apply activated skills automatically when your prompt matches the description.

You can stack skills by mentioning more than one or by relying on automatic selection. For example, combine a brand-voice skill with a meeting-recap skill in a single message.

## Tips for better skills

Write the description so Gemini knows exactly when to trigger the skill. Vague descriptions reduce automatic use.

Test the skill with real prompts right after creation. Edit the instructions based on the first few outputs.

Keep instructions focused. Long, unfocused text often produces inconsistent results.

Download a backup of important skills. Sharing currently works best in the web app; share access to any attached files as well.

For coding-related skills, pair them with models such as Gemini 4 Hydrogen for faster everyday execution. See the [Hydrogen Android integration guide](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) for developer details.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Migrating from Gems

Google converts existing Gems into skills automatically for eligible accounts. Review the converted versions because some files and tools may not transfer. Activate any skills that arrive turned off.

Personal accounts see the change first. Plan to recreate critical Gems as skills before the December 2026 removal date if the automatic conversion does not meet your needs.

## Conclusion

Gemini Skills turn repeated prompting into a one-time setup. Follow the steps above to open the Skills page, create a skill with a clear name and description, write precise instructions, and start using it with a slash or automatic matching.

They work today on free accounts in the Gemini app and are rolling out more widely in Workspace. Check the official Gemini Apps Help pages for the latest availability and file-type limits.

**Sources**

- Gemini Apps Help: Create & manage skills for Gemini Apps
- Gemini Apps Help: About the transition from Gems to skills
- Google Workspace Updates: Introducing skills in the Gemini app and Workspace
- Google Workspace Help: About the transition from Gems to skills
