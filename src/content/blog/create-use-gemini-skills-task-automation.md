---
title: "How to Create and Use Gemini Skills for Task Automation"
description: "Step-by-step guide to create, use, and stack Gemini Skills in the Gemini app and Workspace. Automate repetitive tasks with reusable instructions."
pubDate: 2026-10-12T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Gemini Skills let you save detailed instructions once and reuse them across chats. Instead of rewriting the same prompt every time you draft a status update, prep a meeting, or format notes, you type a short command and Gemini applies your rules.

Skills are rolling out in the Gemini app and replacing Gems. They work in regular chat and can include reference files. This guide covers how to create them, run them, and stack multiple skills for bigger workflows.

## What Gemini Skills Are

A skill is a reusable set of instructions stored as a Markdown file (SKILL.md). You give it a name, a short description, and the exact steps or style Gemini should follow. Once saved, you can call it from any chat by typing `/skill-name` (or `@skill-name` in newer versions).

Unlike one-off prompts, skills stay available and can be shared or updated. Google is migrating existing Gems into skills automatically over time. Skills also work in Google Workspace apps for business, enterprise, nonprofit, and education accounts.

## Create a Skill from Chat

The fastest method is to ask Gemini to build one for you.

1. Open the Gemini app on Android, iOS, or go to gemini.google.com on desktop.
2. Start a new chat and type something like: “Create a skill named weekly-status-update that turns my raw notes into a clear three-paragraph status report with bullet points for completed work, blockers, and next steps. Use a professional tone and keep it under 200 words.”
3. Gemini drafts the skill. Review the name, description, and instructions.
4. Confirm to save it.

You can refine the skill later from the Skills page in Settings. This approach works well when you already know the exact output you want.

![Person typing on a laptop with AI interface visible](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Create a Skill Manually or from a Template

For more control, use the Skills page.

1. In the Gemini app, open the menu and go to Settings > Skills (or click Skills on the sidebar at gemini.google.com).
2. Choose one of these options:
   - **Create with Gemini** — describe the skill and let it generate the instructions.
   - **Create manually** — fill in the name, description, and instructions yourself.
   - **Use a recommended template** — pick a pre-built skill and edit it.
3. Name the skill in lowercase with hyphens (example: meeting-prep).
4. Write a clear description that starts with what the skill does and includes “Use when…” examples so Gemini knows when to apply it.
5. Add detailed instructions. Focus on the type of task, not one specific instance. Include any style rules, required sections, or constraints.
6. Click Create or Save.

You can also upload a SKILL.md file or a folder containing the file plus reference documents (PDFs, text, images). This is useful when you want Gemini to follow a company style guide or template every time.

## Use a Skill in Chat

Once the skill exists:

1. Open any Gemini chat.
2. Type `/` (or `@` in updated apps) and select the skill name, or type the full command such as `/meeting-prep`.
3. Add your specific request after the command. Example: `/meeting-prep Summarize the key points from the attached agenda and suggest three questions for the client.`
4. Send the message. Gemini applies the skill’s instructions to your request.

Gemini can also apply relevant skills automatically based on your prompt if you leave them enabled. You stay in control and can turn individual skills off.

## Stack Multiple Skills

Skills are designed to combine. You can call more than one in a single prompt.

Example: `/brand-voice /meeting-prep Draft talking points for tomorrow’s product review using the attached notes and our official brand guidelines.`

This lets you layer a writing-style skill with a process skill without copying and pasting outputs between chats. The same stacking works in Workspace apps when skills are enabled for your account.

## Practical Examples That Save Time

- **Meeting prep**: A skill that pulls relevant recent emails and documents, then lists open questions and suggested talking points.
- **Status reports**: Turns messy notes into a consistent format with completed items, blockers, and next steps.
- **Content repurposing**: Takes a blog draft and produces a LinkedIn post, an email summary, and three tweet ideas in your voice.
- **Lesson planning**: For educators, a skill that expands a topic into learning objectives, activities, and assessment ideas.

Start with one or two skills you use every week. Once they work reliably, add more.

## Tips for Better Results

- Make the skill name an action (plan-weekly-meals, draft-client-email) rather than a generic label.
- Keep the description specific so Gemini knows when to trigger it.
- Test the skill with a few real examples and edit the instructions if the output drifts.
- Add reference files for style guides, templates, or past examples when the skill needs consistent formatting.
- Check the Skills page periodically. Google is still rolling out sharing and Drive file support.

If a skill is not appearing, confirm you are signed in with the correct Google account and that the Gemini app is updated. Availability can vary by region and account type during the rollout.

## Related Guides

For more ways to customize Gemini, see our guide on [creating Gemini skills directly in web chat](/blog/create-gemini-skills-web-chat-guide/).

## Watch How Skills Work

This video walks through creating and using several practical Gemini Skills, including meeting prep and writing-style examples.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Skills turn repeated prompting into a short command. Create them from chat, the Skills page, or by uploading a file. Run them with a slash command, stack them for multi-step work, and refine them as your needs change. The result is less time rewriting instructions and more time on the actual task.

Start with one skill this week for a process you already do often. Once it works, you will spot more opportunities to automate.

## Sources

- Google blog: Automate repetitive tasks with Skills (blog.google, 30 September 2026)
- Gemini Apps Help: Create & manage skills for Gemini Apps (support.google.com)
- Google Workspace Updates: Introducing skills in the Gemini app and Workspace (workspaceupdates.googleblog.com, 30 September 2026)
- Official Gemini Skills overview (gemini.google/overview/productivity)
