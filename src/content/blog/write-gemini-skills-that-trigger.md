---
title: "How to Write Gemini Skills That Match the Right Task"
description: "Write Gemini skills with clear names, descriptions, and steps so Gemini triggers the right workflow. Official Google Help tips."
pubDate: 2026-10-02T15:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Gemini only reads a skill name and description before it decides whether that skill fits your prompt. A vague title means the workflow you saved never runs. Google’s own help pages spell out how to write skills so the model picks them up, follows your steps, and asks instead of guessing.

This guide follows [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773) and the create-and-manage help article. If you still need the Settings path, start with [how to create Gemini skills in chat](/blog/create-gemini-skills-web-chat-guide/).

## What a skill actually is

A skill is a set of instructions and preferences that teach Gemini how to handle one type of task the way you would. Google describes it as a cheat sheet: your process, your format rules, and the mistakes you do not want repeated.

Each skill should cover a single job. You can still stack skills in one prompt. Google’s product post from 30 September 2026 says you can combine a writing-style skill with a brand-guidelines skill in the same request.

Gemini does not load every file at once. Help documents the order:

1. It checks the name and description to decide if the skill is relevant.
2. If it is, it reads the full instructions.
3. It opens extra files, such as a template or style guide, only when the current step needs them.

That is why the first two fields matter more than a long instruction block.

![Person planning a written workflow at a desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## When to write one, and when to skip it

Google says write a skill if you keep repeating the same prompt, keep fixing the same layout, or keep stitching steps across connected apps such as Gmail, Docs, and Calendar.

Skip a skill when the job is one-off, when Gemini already returns what you want, or when the steps change too often to maintain. A skill that is always out of date is worse than a fresh prompt.

Help examples include tailoring a resume to a job post, and turning a blog draft from Drive into posts for LinkedIn, X, and Instagram. Those are repeatable types of work, not a single Tuesday task.

## Name the skill so Gemini can match it

On a computer, open [gemini.google.com](https://gemini.google.com), open Settings, then Skills. Create with Gemini, start from a template, build manually, or upload a `SKILL.md` file.

For the name, Google’s rules are specific:

- Start with a verb or action statement. Say what the skill does.
- Avoid vague words such as helper, tools, or data. Prefer `plan-meal-from-recipe` over `recipe-data`.
- Use lowercase words separated by hyphens, such as `my-new-skill`. The Skills page reformats the display name to that pattern.

The description is one or two sentences, and it must stay within 1,024 characters. Write it in the third person. Do not start with “I can help you” or “You can use this to.” Include a “Use when…” line with concrete situations.

Google’s sample description is a useful pattern: “Categorizes recipes, scales ingredient portions, and generates grocery lists from selected meals. Use when saving a new recipe, adjusting the serving size for a meal, or creating a shopping list from a meal plan.”

If the description is generic, Gemini may never select the skill, even if the instructions inside are excellent.

## Write instructions for a type of task

Do not lock the steps to one result. Google’s contrast is clear: do not tell Gemini to build a grocery list for “Spaghetti on Tuesday.” Tell it how to build a meal plan from foods you actually eat.

Then choose how tightly Gemini should follow you.

For creative work, leave room. Brainstorming headlines or blog angles can stay general. For strict work, write numbered steps. Copying financial figures into a fixed layout, or summarizing a meeting with bullets only, should not leave format choices open.

Add an output template inside the instructions. Google’s examples include fixed report sections (“Executive Summary,” “Key Findings,” “Recommendations,” “Next Steps”) and a social post shape:

```
Headline: [Headline]
Body: [Body Text]
Hashtags: #[Tag1] #[Tag2] #[Tag3]
```

Add a short “common mistakes” section. Examples from Help: strip names, emails, and phone numbers unless the task asks for them, and reuse a standard disclaimer from a named template instead of writing a new one.

For longer jobs, paste a checklist and tell Gemini to copy it and mark progress:

```
[ ] Step 1: Analyze the uploaded statement
[ ] Step 2: Extract date, description, and amount
[ ] Step 3: Categorize each line
[ ] Step 4: Format the result as a table
```

Finally, say what to do when a field is missing. If an email has no event date, ask for the date. If a form field is empty, stop and ask. Do not let the model fill the gap.

![Notes and a laptop used to draft a repeatable checklist](https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80)

## A skill you can paste today

Here is a meeting-notes skill written to those rules. Change the section names if your team uses different ones.

**Name:** `summarize-meeting-notes`

**Description:** Turns raw meeting notes into a fixed summary with decisions, owners, and open questions. Use when the user pastes notes, a transcript, or a recap and asks for minutes, action items, or a follow-up email.

**Instructions:**

1. Read only the notes the user provided. Do not add attendees, dates, or decisions that are not in the text.
2. If the date, meeting title, or owner of an action is missing, ask before you draft.
3. Output these sections only: Decisions, Action items, Open questions.
4. Format each action item as: owner, task, due date. If due date is absent, write “Due date: ask user.”
5. Common mistakes: do not invent quotes, do not include personal phone numbers, do not add a marketing sign-off.

Save it, then type `/` and the skill name in the prompt bar. Google Help says the slash trigger will later become `@`. You can also let Gemini apply an enabled skill when the request matches the description.

You can reference other skills inside the instructions to build a larger workflow. Google also lets you upload reference files. Supported types include plain text, Markdown, PDF, and common images. Binary office files such as `.docx` and `.xlsx` are not supported for skill uploads. Put `SKILL.md` in the root of the folder, with the skill name in lowercase hyphen form.

You can keep as many skills as you want, but only 100 can be active at once. Disable one if you hit that cap.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/XQtvloPXap4"
    title="Google Gemini Skills Are Finally Here"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Rollout notes before you rely on it

On 30 September 2026, Google said skills were already in Gemini Spark and were rolling out into Gemini chat globally, with Workspace business, enterprise, nonprofit, and education customers to follow in the coming weeks. The same post said skills will replace Gems, and that sharing plus Google Drive and Gemini Notebook files would arrive in the coming weeks. Reference files such as text, PDFs, and images were available from that announcement.

A separate Workspace updates post lists different dates: Workspace skills starting 5 October 2026, Gemini app skills starting 13 October 2026, Gems moving to Settings on 17 November 2026, and business or enterprise Gems ending no sooner than 1 March 2027. Personal Google Accounts start the Gems-to-skills move in November 2026. If you still use Gems, see [the Gems to skills migration steps](/blog/gemini-gems-to-skills/).

Availability depends on account type and region. If Skills is missing in Settings, the feature has not reached that account yet.

## Tips that keep skills usable

Keep the file short. Google says Gemini already knows general tasks. Your skill should add only the rules you would otherwise retype.

Test the description, not just the steps. Ask a prompt that should match, then one that should not. If the wrong skill fires, tighten the “Use when” line.

Do not store secrets in a skill. Instructions and reference files are context for the model.

Review output before you send it. A checklist reduces skipped steps. It does not replace a human check on numbers, names, or dates.

## Conclusion

A Gemini skill triggers from its name and description, then follows the instructions you saved. Use a verb-led hyphenated name, a third-person description with a “Use when” line, a template for the output, a mistakes list, and an explicit rule to ask when data is missing. That is the difference between a saved prompt and a workflow Gemini can select on its own.

## Sources

- Google Help: [Write effective skills for Gemini Apps](https://support.google.com/gemini/answer/17102773)
- Google Help: [Create and manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296)
- Google Help: [About the transition from Gems to skills](https://support.google.com/gemini/answer/18560919)
- Google Blog, 30 September 2026: [Automate repetitive tasks with Skills](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/)
- Google Workspace Updates, 30 September 2026: [Introducing skills in the Gemini app and Workspace](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html)
