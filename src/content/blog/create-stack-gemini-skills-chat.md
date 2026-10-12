---
title: "Create and Stack Gemini Skills in Chat Step by Step"
description: "Build reusable Gemini skills in personal chat, stack them for complex tasks, and manage them. Official steps for Gemini app users."
pubDate: 2026-10-12T10:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Skills let you save custom instructions once and reuse them across Gemini chats. Google is rolling them into personal Gemini accounts now, replacing the older Gems system over time.

You can create a skill by chatting with Gemini, using the Skills page, or uploading a SKILL.md file. Once active, type / followed by the skill name, or let Gemini pick relevant ones automatically. Stack multiple skills in one prompt for multi-step work.

This guide covers the official requirements and steps from Google’s Gemini Apps Help. For the transition from Gems, see our post on [converting Gemini Gems to skills](/blog/gemini-gems-to-skills/).

## Requirements before you start

You must be 18 or older and signed in with a personal Google Account. Work or school accounts are not in the first wave. Keep Activity must be on. Skills appear in the Gemini mobile app, the Mac Gemini app, and gemini.google.com.

Google notes that availability is gradual, so the Skills option may not show for every personal account yet.

![Person working on a laptop at a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Create a skill from chat

Open gemini.google.com or the Gemini app. In the prompt box type something like: Create a skill based on these instructions: Format weekly meeting notes into bullet points with action items and owners.

Submit the request. Gemini generates the skill and saves it to your Skills page. You can refine it in the same chat by describing changes. To activate, deactivate, or delete, go to Settings then Skills.

## Create from the Skills page

On gemini.google.com click the sidebar Settings then Skills. Choose one of these paths:

- Create with Gemini: Follow the chat prompts.
- Recommended template: Edit a prefilled skill and click Create.
- Create manually: Enter a lowercase hyphenated name, description, and instructions, then Create.
- Upload: Select a SKILL.md file or a folder/zip containing one in the root. Review and Create.

Uploaded skills must stay under 100 MB total. Supported files include plain text, Markdown, PDF, images, JSON, CSV, and code. Binary formats such as .docx are not supported. Scripts cannot make external network requests.

Name the skill in all lowercase with hyphens, for example weekly-standup-notes.

## Use and stack skills

In any chat type / (or @ on some builds) and select the skill. Gemini can also apply turned-on skills automatically when the prompt matches.

To stack, include multiple skills in one message. Example: /brand-voice /meeting-notes Summarize the attached transcript and draft an update email.

This lets you combine a writing style skill with a formatting skill in a single pass.

![Smartphone on a desk showing an app interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Manage skills

On the Skills page you can activate or deactivate automatic use, edit instructions, replace the whole skill, download a zip, or delete. Deleting cannot be undone. To update reference files you must re-upload the full package.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for effective skills

Write clear, specific instructions. Include examples of desired output. State what the skill should avoid. Reference other skills inside the instructions if you want them chained.

Test in a short chat before relying on the skill for longer work. Review outputs, especially when the skill rewrites or formats user content.

Skills work without a paid Google AI subscription. Spark, tasks, and schedules require the higher tier.

## Conclusion

Skills turn repeated instructions into one-tap or automatic workflows in Gemini chat. Start with one simple skill from chat or the Skills page, then stack them as your needs grow. Check the official help pages for the latest availability and file limits.

## Sources

- [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296) — Google
- [Automate repetitive tasks with Skills](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google
- [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) — Google
