---
title: "How to Stack Gemini Skills With / Commands in Chat"
description: "Stack Gemini skills in one prompt with slash commands, reference files, and Workspace dates from Google's 30 September 2026 rollout."
pubDate: 2026-10-01T10:00:00
heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "productivity", "google"]
noindex: false
---

Google now lets you save reusable instructions as **skills** and fire more than one of them in a single Gemini chat. Type `/` plus a skill name, add a second skill, and attach a PDF or image if the job needs source material.

On 30 September 2026, Google published the consumer rollout on the [Google Blog](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) and the Workspace calendar on the [Workspace Updates blog](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html). Skills already lived in Gemini Spark. They now land in ordinary Gemini chat for personal accounts, with Workspace following in October.

This guide covers how to create a skill, stack two of them, add reference files, and keep Gemini-app skills separate from Workspace skills. It is the consumer counterpart to our earlier [Android CLI agent skills](/blog/android-cli-agent-skills/) write-up, which uses the same `SKILL.md` file format for coding agents.

## What a skill is (and is not)

A skill is a named set of custom instructions. You write it once. You reuse it by typing `/skill-name` in the prompt bar, or you leave it on so Gemini can attach it when a prompt matches.

Google's examples are concrete: a presentation-prep skill that outlines slides and talking points, a writing-style skill that matches how you draft in Workspace, and a viewpoints skill that always returns three to five distinct takes.

Skills are not Gems. Gems opened as separate custom chats in the sidebar. Skills run **inline** in the same thread, so you can stack a brand-voice skill with a slide-outline skill in one request. Skills are also not Connected Apps. Connected Apps give Gemini live data from Gmail or Drive. Skills tell Gemini how to write once that data is in the thread.

Google states that skills use the open Markdown `SKILL.md` standard. You can copy a skill you built on another platform into Gemini if the file sits at the root of the upload folder.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DGdIx1O8BN8"
    title="Gemini Spark Tutorial in 7 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Who can use skills this week

Google's 30 September consumer post says skills are rolling out in Gemini chat globally. A footnote on that post limits current availability to Google AI subscription tiers, with users 18 and older first and under-18 access coming later.

Workspace business, enterprise, nonprofit, and education customers get skills in the coming weeks. The Workspace Updates post lists **5 October 2026** as the start of the Workspace rollout and **13 October 2026** as the start of the broader Gemini-app rollout, both aiming to finish by mid-November.

Skills in Workspace are limited to users over 18. Skills in the Gemini app will later include all ages, per that same post.

If the Skills page is missing on your account, you are still on the older Gem sidebar. Keep using Gems until the control appears. Do not delete a Gem until you have copied its instructions.



![Laptop with chat and notes during a planning session](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)



## Step 1: Create one skill with a single job

Open [gemini.google.com](https://gemini.google.com) on the web or the Gemini app on Mac. The Skills library is a desktop-first page. Mobile can edit a skill in conversation after it exists.

Pick one path Google documents:

1. **Create with Gemini.** Describe the job in chat: “Create a skill that outlines a 10-slide briefing with speaker notes and three likely questions.” Gemini drafts the skill and saves it.
2. **Template.** Open a recommended template and rewrite the name, description, and instructions.
3. **Manual.** Fill a blank form.
4. **Upload.** Add a `SKILL.md` file, or a folder or `.zip` that contains `SKILL.md` at the root plus optional reference files. Strip hidden files such as `.DS_Store` first.

Write a short description of *when* the skill should run. That text is what Gemini uses for auto-attach. Keep the job narrow. “Format my weekly status email” beats “help with all writing.”

## Step 2: Add reference files

Starting 30 September 2026, Google says you can attach plain text, PDFs, or images when you create a skill. Use this for a style guide, a slide template, or a one-page brand sheet.

Drive files and Gemini Notebook sources are not the same as local uploads. Google’s consumer post says Drive and Notebook attachments, plus sharing, arrive in the coming weeks as skills pick up the features people used in Gems.

Until that lands, keep the source file in the skill package you uploaded. Re-upload if the template changes.

## Step 3: Run a skill with a slash command

In any Gemini chat thread, type `/` in the prompt bar and pick the skill. Add the rest of the request on the same line.

Example:

```text
/status-email Last week we shipped the Android 17 QPR notes. Blockers: design review on Thursday.
```

The skill supplies format and tone. Your sentence supplies the facts. If Gemini ignores the skill, the description may be too vague, or the skill may be off. Open the Skills page and confirm it is enabled.

You can also leave auto-use on. Google says Gemini can build skills from chats and run them when a later prompt matches. Test `/` first. Turn on auto-use after two clean runs so a half-written skill does not attach to every email draft.

## Step 4: Stack two skills in one prompt

This is the difference from Gems. Google’s consumer post says you can stack skills, for example a writing-style skill plus a brand-guidelines skill. The Workspace Updates post uses an educator pairing a weekly-newsletter skill with institutional brand guidelines, and a business pairing a vendor-evaluator skill with an executive-email drafter.

Type both names:

```text
/brand-voice /slide-outline Q3 pipeline review for the sales all-hands. 8 slides. No new product claims.
```

Keep stack size small. Two skills with a clear split (tone versus structure) work. Four overlapping skills fight each other. If output drifts, run the structure skill first, then apply the voice skill on the next turn.



![Person reviewing documents and a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Step 5: Recreate the skill in Workspace if you need Gmail or Docs

Skills do **not** sync between the Gemini app and Workspace apps. Google printed that warning on the Workspace Updates post. If you want the same instructions in Gmail, Docs, Slides, Drive, or Chat, you must create the skill again in Workspace Studio or with the skill builder in Google Docs.

Workspace rollout starts 5 October 2026. Admins control access. Google points admins to [Allow people to use skills in Studio and Gemini in Workspace](https://knowledge.workspace.google.com/admin/studio/turn-skills-on-or-off).

In Workspace, you `@` mention a skill in the Gemini side panel. That is different from the `/` command in the Gemini app. Plan for two copies until Google ships a sync path. It has not announced one.

## What happens to Gems

You can still create and use Gems in the Gemini app for now. You can no longer create new Workspace Studio flows with an “Ask a Gem” step. Existing flows keep working until the later cut dates.

Google’s dates:

- **17 November 2026:** Gems move into the Settings panel of the Gemini app. You can still create, edit, and use them.
- **No sooner than 1 March 2027** (business and enterprise): Gems cannot be created, edited, or used. Ask-a-Gem flows stop. Remaining Gems auto-migrate to draft skills in the Gemini app.
- **No sooner than 1 June 2027** (education): the same removal, including Classroom and Gemini LTI surfaces.

The consumer Google Blog post also says personal accounts lose Gem support starting in November, with automatic migration when Gems go away. Opal, the Labs mini-app experiment, turns down in November and does **not** migrate into skills.

Export Gem instructions now. Recreate the important ones as skills so you control the name and the description instead of waiting for a draft import.

## Tips that keep stacks reliable

- Name skills after the output, not the vibe. `/qbr-deck` is easier to stack than `/helper`.
- Put constraints in the skill (“no legal advice”, “cite the attached PDF only”). Put facts in the prompt.
- One voice skill for the team is enough. Do not make a new voice skill per document type.
- Age and plan gates are real. If a coworker under 18 needs Workspace skills, they will not get them on the current Workspace rule.
- Treat auto-migration as a backup, not a plan. Draft skills still need review before you turn them on.

## Conclusion

Skills replace the Gem sidebar with instructions that live inside the thread you already have open. Create one narrow skill, test it with `/`, then stack a second skill only when tone and structure are actually different jobs.

Watch the 5 October Workspace start and the 13 October Gemini-app wave if your account is still on Gems. Copy instructions into Workspace yourself. Google will not sync the two libraries.

When the Skills page appears on your account, build the one prompt you type every week. That is the test that matters more than a library of unused templates.

## Sources

- [Let skills in Gemini tackle your most repetitive tasks](https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/) — Google Blog, 30 September 2026
- [Introducing skills in the Gemini app and Workspace, plus what’s next for Gems](https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html) — Google Workspace Updates, 30 September 2026
- [Teach Gemini your team’s know-hows with skills in Google Workspace](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace) — Google Workspace Blog
- [Create & manage skills for Gemini Apps](https://support.google.com/gemini?p=b_ws_skills) — Gemini Apps Help
- [About the transition from Gems to skills](https://support.google.com/gemini?p=gems_to_skills) — Gemini Apps Help
- [Gemini Spark Tutorial in 7 Minutes](https://www.youtube.com/watch?v=DGdIx1O8BN8) — Kevin Stratvert
