---
title: "How to Create Gemini Skills for Reusable Tasks"
description: "Step-by-step guide to creating and using Gemini Skills to automate repetitive tasks in the Gemini app for personal accounts."
pubDate: 2026-10-12T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity"]
noindex: false
---

Gemini Skills let you save custom instructions once and reuse them across chats. Google announced the feature in late September 2026 as the replacement for Gems. Skills work in the Gemini app for personal accounts and roll out to Workspace users later.

If you repeat the same type of prompt for meeting notes, status reports, or writing style, a skill cuts the setup time. You type a slash and the skill name, or Gemini applies it automatically when the prompt matches.

This guide covers requirements, three ways to create a skill, how to use and stack them, and the Gems transition timeline. Facts come from Google’s official blog and help center.

## What Gemini Skills are

A skill is a set of reusable instructions that teach Gemini how to handle one type of task. It includes a name, a short description, and detailed steps or preferences. You can also attach reference files such as plain text, PDFs, or images.

Skills differ from Gems in a few ways. You invoke them inline in any chat by typing / followed by the name (Google says the shortcut will change to @). You can stack several skills in one prompt. Gemini can also apply a relevant skill automatically based on the description. Skills use an open Markdown format called SKILL.md, so you can move them between tools.

Google rolled skills into Gemini chat globally for personal accounts starting around September 30, 2026. They were already available in Gemini Spark. Workspace business, enterprise, nonprofit, and education customers get them in the following weeks.

## Requirements to create and use skills

You need three things:

- You must be 18 or older.
- Sign in with a personal Google Account. Work or school accounts do not have skills yet.
- Keep Activity must be on in Gemini settings.

Skills appear in the Gemini mobile app, the Gemini app on Mac, and gemini.google.com. Availability is gradual, so check the Skills page in Settings if the option is missing.

![Person working on a laptop at a desk with productivity tools](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Three ways to create a skill

Google provides multiple creation paths. The fastest is to ask Gemini in chat. Manual creation gives more control. You can also upload a ready SKILL.md file.

### Create with Gemini in chat

1. Open a new chat in the Gemini app or on gemini.google.com.
2. Describe the skill clearly. Example: “Create a skill that turns meeting notes into a summary with decisions, action items that include an owner and due date, and open questions. Never invent owners or dates.”
3. Review the draft Gemini produces. Edit the name, description, or instructions if needed.
4. Save it. The skill appears in your Skills list.

You can also start from the Skills page in Settings and choose Create with Gemini.

### Create manually

1. Go to Settings (or the menu) and open Skills.
2. Select Create manually.
3. Enter a name. Use hyphens, no spaces, and start with a verb when possible, such as “summarize-meeting-notes”.
4. Write a 1–2 sentence description that explains what the skill does and when to use it. This text helps Gemini decide when to apply it automatically.
5. Add the full instructions. Include steps, output format, rules, and one concrete example of the desired result.
6. Save.

Google’s help center recommends keeping instructions focused on what is unique to the task and including an example.

### Upload a SKILL.md file

1. Prepare a Markdown file that starts with YAML frontmatter containing name and description, followed by the instructions.
2. On the Skills page, choose Upload.
3. Select the .md file, a folder that contains SKILL.md at the root, or a ZIP of the same.
4. Review and save.

Supported reference files include plain text, PDFs, and images. Google notes that Drive files and Gemini Notebooks will be supported in coming weeks.

## How to use a skill

In any chat, type / and select the skill from the list that appears, or type /skill-name. Add your specific input after the command, such as the meeting notes or the draft text.

Gemini can also load a skill automatically if your prompt matches the description. For larger work, stack skills. Type /writing-style /brand-guidelines and then your request. The instructions combine.

You can edit a skill later from the Skills page. Test it on a real example and refine the description or steps if the output drifts.

![Laptop on a desk showing a coding or productivity setup](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)

## Practical example: meeting notes skill

Here is a concise set of instructions you can adapt:

Name: summarize-meeting-notes  
Description: Turns raw meeting notes or a transcript into a short summary with confirmed decisions, action items that list an owner and due date, and open questions. Use when the user pastes notes and asks for a recap.  

Instructions:  
1. Read the provided notes.  
2. List only confirmed decisions.  
3. For each action item, include the task, owner, and due date if stated. Do not invent missing details.  
4. List unresolved questions.  
5. Format the output with clear headings.  

Example output:  
**Decisions**  
- Approved the Q4 budget.  
**Action items**  
- Send revised timeline — Priya — Friday  
**Open questions**  
- Vendor selection for the design work?

Save this as a skill, then paste real notes and type /summarize-meeting-notes.

## Tips for effective skills

- Make the description specific. Vague text leads to missed or unwanted automatic use.
- Include one short example of the exact output format.
- State what Gemini must not do, such as inventing data.
- Keep each skill to one job so you can stack them cleanly.
- Test with two or three real inputs and edit the instructions if results vary.
- Attach a short reference file only when the skill needs fixed rules, such as brand tone or a template.

Skills work alongside other Gemini features. For example, you can pair a writing skill with the September 2026 Android Drop tools covered in our [guide to the September Android Drop](/blog/android-september-2026-drop-guide/) when you need both structured output and device-side helpers.

## Transition from Gems

Google will remove Gems support on a staggered schedule:

- November 2026 for personal Google Accounts.
- March 2027 for Workspace business, enterprise, and nonprofit accounts.
- June 2027 for Workspace education accounts.

Existing Gems in the Gemini app migrate automatically to skills. You can continue using Gems until those dates. Opal, the mini-app experiment, ends at the same time as personal Gems.

Skills already support the core Gems idea of saved instructions and will add sharing and Drive files in the coming weeks.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Skills turn repeated prompts into reusable commands. Create one for a task you do every week, invoke it with a slash, and refine the instructions after the first few runs. Start with a simple meeting-notes or status-report skill while the feature is available on personal accounts.

Check Settings → Skills if the option has not appeared yet. The rollout is global but gradual. When Workspace access arrives, the same skills will carry over.

## Sources

- [Automate repetitive tasks with Skills (Google blog)](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
- [Create & manage skills for Gemini Apps (Google Help)](https://support.google.com/gemini/answer/17094296)
- [About the transition from Gems to skills (Google Help)](https://support.google.com/gemini/answer/18560919)
- [Write effective skills for Gemini Apps (Google Help)](https://support.google.com/gemini/answer/17102773)
- [Google Workspace Updates on skills](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html)
