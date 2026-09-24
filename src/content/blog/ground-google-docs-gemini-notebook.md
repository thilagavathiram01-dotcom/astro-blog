---
title: "How to Ground Google Docs Drafts in Gemini Notebook"
description: "Use @ in Google Docs to pull Gemini Notebook sources into Gemini drafts with inline citations. Plans, steps, and limits."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "google", "productivity"]
noindex: false
---

Google Docs can now treat a Gemini Notebook as a context source. You type `@` in the Gemini side panel or bottom bar, pick a notebook, and the draft is grounded in those files instead of a generic web summary.

Google published the change on 23 September 2026 in Workspace Updates. It sits on Workspace Intelligence: research stays in the notebook, writing stays in Docs, and you skip copy-paste between tabs.

This guide covers who gets the feature, how to prepare a notebook, how to attach it in Docs, and how to check citations before you share.

## What Google shipped

If you already keep sources in Gemini Notebook (the product formerly called NotebookLM), Docs can read that library while you write. Google’s wording is specific: type `@` in the side panel or bottom bar, reference an existing notebook, and Gemini grounds the output in those sources with inline citations.

The Verge’s same-day report matches that flow: `@` in the bottom Gemini bar lists notebooks; pick one and generate from the prompt.

This is not a full notebook editor inside Docs. You still add and clean sources in Gemini Notebook. Docs only consumes the notebook you select.

## Who can use it

Workspace Updates lists these plans:

- Business Standard and Plus
- Enterprise Standard and Plus
- Education Plus
- Consumer Google AI Pro and Ultra
- Education add-ons: Google AI Pro for Education, Teaching and Learning
- Other add-on: AI Expanded Access

Admins get the feature by default when **Gemini for Workspace in Drive** is enabled. End users also need **Workspace smart features** on. Rapid Release and Scheduled Release domains are listed as available now.

If Ask Gemini or the bottom bar is missing, fix plan and admin controls first. A free consumer Gmail account is not on the official availability list.

![Laptop and notes on a desk used for research writing](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prepare the notebook before you write

Garbage sources produce garbage drafts. Do this in [Gemini Notebook](https://notebook.google.com/) first.

1. Create one notebook per project, course, or proposal. Do not dump unrelated PDFs into a single pile.
2. Add sources you can stand behind: Drive Docs, Slides, PDFs, sites, and YouTube items the product accepts.
3. Skim the notebook summary so you know what the model ingested.
4. Remove outdated files. Citations will point at whatever is still attached.

If you already use study tools in the standalone notebook, keep that research notebook and open a second one for a client brief. Mixing exam flashcards with a legal draft is a bad context mix. For study-only workflows, see [Gemini Notebook study tools](/blog/gemini-notebook-study-tools/).

For Help me create basics without notebooks, see [Gemini in Google Docs](/blog/gemini-google-docs-help-me-create/).

## Attach a notebook from Docs

Work on a computer. Google still documents Help me create as a desktop flow.

1. Open [Google Docs](https://docs.google.com) and start a blank file, or open a draft you already own.
2. Open **Ask Gemini** at the top right, or use the spark **bottom bar**.
3. Type `@` in the prompt box. A list of Gemini Notebooks should appear.
4. Select the notebook that holds the research.
5. Write an instruction, not a vague question. Example: “Draft a two-page project proposal from this notebook. Use H2 headings for Goals, Scope, Risks, and Next steps. Do not add numbers that are not in the sources.”
6. Generate the draft. Check every inline citation against the original file.

You can also `@` mention Drive files the same way you already do in Help me create. The notebook is an extra source type, not a replacement for a single Doc or PDF.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5G8KoU0Sjh0"
    title="Help me create with Gemini in Google Docs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Prompt patterns that stay grounded

Tell Gemini what to use and what to refuse.

```text
@Q4-launch-research
Write a one-page launch brief for internal review.
Audience: product and support leads.
Use only facts in this notebook. Flag any claim that lacks a citation.
Include Goals, Audience, Timeline, and Open questions.
```

```text
@android-security-notes
Turn the notebook into a technical whitepaper outline.
Keep product names exactly as they appear in the sources.
Do not invent API methods.
```

```text
Rewrite the Risks section using @vendor-due-diligence.
Keep dates and proper nouns. Shorten each bullet to one sentence.
```

If the first pass invents a stat, tighten the instruction and retry. Regenerating the whole file to fix one paragraph is slower than selecting that section and running Help me write with the same `@` notebook.

![Person reviewing a document draft on a laptop](https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80)

## Verify citations before you share

Google says Gemini provides inline citations so you can check facts without leaving the draft. Treat that as a map back to the source, not as proof the sentence is correct.

- Open each citation and read the quoted span.
- Compare numbers, names, and dates to the original PDF or Doc.
- Delete or rewrite any sentence the notebook does not support.
- Remember sharing rules: Gemini uses files the signed-in user can open. A private notebook your teammate cannot access will not help them regenerate the same draft.

Workspace documentation for Gemini in Docs, Drive, and related editors states that Workspace content used this way is not used to train Gemini models. That does not make a draft accurate. You still own the publish button.

## Admin and account checklist

Run this if `@` shows Drive files but no notebooks:

1. Confirm Gemini Notebook is on for the user’s group or organizational unit.
2. Confirm Gemini for Workspace in Drive is enabled.
3. Confirm Workspace smart features are on for the user.
4. Sign into the same Google Account that owns the notebook.
5. Wait out domain rollout if the Workspace Updates post is newer than your admin console flags.

Education Plus and Google AI Pro for Education are on the list. Education Fundamentals is not named for this Docs grounding feature. Check the Workspace Updates post before you promise it to a whole school.

## Limits to plan around

- The feature grounds prompts. It does not replace studio tools such as quizzes or Video Overviews inside Docs.
- Notebooks in the Gemini app and standalone Gemini Notebook share research, but source limits differ by path and plan. Keep the research notebook you attach to Docs well pruned.
- English and other language support follow the broader Gemini in Docs rollout. If Help me create is already limited in your language, notebook grounding will not magically expand it.
- Suggestions stay private until you accept them, matching the rest of Gemini in Docs.

## Conclusion

Build the knowledge base in Gemini Notebook. Write the deliverable in Docs. Use `@` so Gemini has to cite the notebook instead of filling gaps from the open web.

Start with one project notebook, one blank Doc, and one instruction that names the headings you want. Read the citations. Then share.

## Sources

- [Ground AI prompts in Google Docs on existing sources from Gemini Notebook](https://workspaceupdates.googleblog.com/2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html) — Google Workspace Updates, 23 Sep 2026
- [Create personalized documents with Gemini in Google Docs](https://support.google.com/docs/answer/15541879) — Google Help
- [Manage access to Gemini features in Workspace services](https://knowledge.workspace.google.com/admin/gemini/manage-access-to-gemini-features-in-workspace-services) — Workspace Admin Help
- [How Gemini in Gmail, Calendar, Chat, Docs, Drive, Sheets, Slides, Meet and Vids protects your data](https://support.google.com/docs/answer/14615114) — Google Help
- [Help me create with Gemini in Google Docs](https://www.youtube.com/watch?v=5G8KoU0Sjh0) — Google Workspace on YouTube
