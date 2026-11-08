---
title: "How to Generate, Preview, and Edit Files in Gemini"
description: "Step-by-step guide to generate, preview, and edit PDFs, Docs, Sheets, slides, and code directly in the Gemini app chat on web and mobile."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1736667245201-2eea25a07f55?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Google added in-chat file generation months ago. On October 29, 2026, it closed the next gap: you can now preview and edit those files without leaving the Gemini chat.

You expand a file to full screen and type changes yourself, highlight text or visuals to ask questions, or tell Gemini to refine a section. PDFs work on both web and mobile. Google Docs, Sheets, slide decks, Markdown, TXT, and code files are web-only for now. The feature is available to all users in every language where the Gemini app runs.

This guide walks through the exact workflow with practical prompts and clear limits.

## What changed and what still needs another app

Before this update, Gemini could create a downloadable file. Any correction meant a new prompt or a switch to Docs, Sheets, or a local editor. The new preview keeps the file open inside the conversation.

Three editing paths exist:

- Expand to full screen and type edits directly.
- Highlight a passage or visual and ask a question or request a change.
- Ask Gemini to refine the whole file or a selected part.

Supported formats:

| Format | Web | Mobile |
|--------|-----|--------|
| PDF | Yes | Yes |
| Google Docs | Yes | No |
| Google Sheets | Yes | No |
| Slide decks | Yes | No |
| Markdown, TXT, code | Yes | No |

You can export to Google Drive or open the result in the matching Google app where supported.

![Person typing on a laptop at a wooden desk](https://images.unsplash.com/photo-1770932327451-63bb8530f607?auto=format&fit=crop&w=800&q=80)

## Step-by-step: generate and edit a PDF study guide

Google’s own demo uses handwritten lecture notes turned into a PDF study guide. The same steps work for any source material.

1. Open the Gemini app at gemini.google.com or the mobile app.
2. Upload your source if you have one (photo of notes, PDF, or text file).
3. Prompt with the exact format. Example: “Create a PDF study guide from these lecture notes. Use one heading per topic, three key points under each, and a short summary at the end.”
4. Wait for the preview to appear in the chat.
5. Expand the preview to full screen.
6. Click into the text and type any direct corrections.
7. Highlight a section and type a follow-up such as “Make this paragraph shorter” or “Turn this table into a graph.”
8. Export or save to Drive when finished.

The same flow works for a one-page proposal, a checklist, or a short report. Name the output format and the structure you want in the first prompt.

## Working with Docs, Sheets, slides, and code on the web

Use the web version at gemini.google.com for everything except PDFs.

For a Google Sheet tracker:

Prompt: “Create a Google Sheet that tracks monthly expenses. Columns: Date, Category, Amount, Notes. Add five sample rows and a totals row.”

Preview the sheet in chat, expand if needed, highlight a column, and say “Sort this by date descending” or “Add a column for payment method.”

For slides:

Prompt: “Create a 5-slide deck for a product launch. Title slide, problem, solution, key features, call to action. Keep text minimal.”

You can adjust tone or structure in the preview before opening the result in Google Slides or downloading as PPTX or PDF.

Code files follow the same pattern. Ask for a Python script or Markdown README, preview it, highlight a function, and request a specific change.

![Smartphone showing popular AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Useful prompts and refinement patterns

Start specific. Vague prompts produce files that need more edits.

- “Create a one-page PDF checklist for moving apartments. Group items by room and add checkboxes.”
- “Turn this meeting transcript into a Google Doc summary with action items and owners.”
- “Build a Google Sheet of my Q4 sales targets from these numbers. Include a simple bar chart.”
- Highlight a paragraph: “Rewrite this in a more formal tone and cut it by 30 percent.”
- Highlight a table: “Show this as a graph instead.”

After the first version appears, prefer small targeted edits over full regenerations. Highlighting keeps the rest of the file intact.

## Limits and practical tips

PDF preview and editing work on mobile; everything else requires the web app. If you need to edit a Sheet or slide deck on the go, open the web version in a mobile browser.

Gemini creates one file per prompt. Ask for the slide deck and the speaker notes separately if you need both.

Review numbers, names, and citations before you export. The highlight-to-query path is useful when you want to check a claim against uploaded notes without rewriting the whole section.

Export options include download and upload to Drive. Once in Drive you can continue in Docs, Sheets, or Slides with the normal Gemini side panel if you need further help.

For developers integrating models into Android apps, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dJ-SIBF1nJQ"
    title="Generate, edit, and preview files in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The October 29 update removes the last forced app switch for most everyday files. Generate the file, preview it, type direct changes or highlight for targeted refinements, then export. PDFs work everywhere; other formats stay on the web for now.

Start with a clear prompt that names the format and structure. Use full-screen typing for precise edits and highlight-to-ask for questions or visual changes. The result is a faster path from idea to finished file inside one chat.

**Sources**

- Google Blog: Edit and preview documents directly in Gemini (October 29, 2026)
- Google Workspace Updates: Create, preview, and edit files directly in the Gemini app
- Google Gemini YouTube: Generate, edit, and preview files in Gemini
