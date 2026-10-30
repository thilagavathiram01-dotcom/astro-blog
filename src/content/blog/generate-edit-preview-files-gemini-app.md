---
title: "How to Generate and Edit Files Directly in Gemini"
description: "Generate, preview, and edit documents, PDFs, spreadsheets, slides, and code right inside the Gemini app. Step-by-step for web and mobile."
pubDate: 2026-10-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "productivity", "ai-tools"]
noindex: false
---

Google added native file creation and editing inside the Gemini app on 29 October 2026. You can now ask for a document, PDF, spreadsheet, slide deck, Markdown file, plain text, or code snippet, then preview and revise it without leaving the chat.

PDF preview and editing work on both the web and the mobile app. Other formats are available on the web for now. The feature is open to all users in every language where Gemini is available.

This guide shows how to generate a file, expand it for manual edits, highlight sections for targeted changes, and export the result. Pair it with related Gemini tools such as [Gemini Autofill with Personal Intelligence](/blog/gemini-autofill-personal-intelligence/) when you need form data pulled from Gmail or Photos.

## What the new file tools support

Gemini can generate and refine:

- PDFs (web + mobile)
- Google Docs
- Google Sheets
- Slide decks
- Markdown files
- TXT files
- Code files

Once generated, the file appears as a preview in the chat. You can expand it to full screen, type changes yourself, highlight text or visuals, and ask Gemini to rewrite only the selected part. You can also ask follow-up questions about the content.

Google’s own example is a student who uploads photos of handwritten lecture notes. Gemini turns them into a PDF study guide. The student then expands the guide, corrects a section by hand, highlights a diagram, and asks Gemini to revise either the text or the visual.

![Laptop displaying code on a wooden desk with glasses beside it](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Prerequisites

- A Google account signed into the Gemini app (gemini.google.com or the mobile apps)
- Access in a region and language where Gemini is available
- For non-PDF formats: use the web version

No special subscription is required for the basic feature. Higher-tier plans may offer longer context or higher usage limits, but the editing tools themselves are available to all users.

## Step 1: Generate a file from a prompt

1. Open the Gemini app on the web or mobile.
2. Type a clear request. Examples:
   - “Create a PDF study guide from these lecture notes” (then attach images)
   - “Make a Google Sheet that tracks monthly expenses with categories and totals”
   - “Draft a short slide deck outline for a product launch, five slides”
   - “Write a Python script that reads a CSV and prints the top five rows”
3. Attach any source material with the plus button or by dragging files into the chat.
4. Send the prompt. Gemini generates the file and shows a preview card in the conversation.

Keep the first prompt specific about format, length, and tone. Vague requests produce generic results that need more revision later.

## Step 2: Preview and expand to full screen

The preview appears inline. On the web you can click the expand control to open a full-screen editor. On mobile the same expand action is available for PDFs.

In full-screen mode you can:

- Scroll through the entire document
- Click into text and type corrections
- Adjust tables or simple layouts where the editor supports it

Changes you type are saved in the chat session. You do not need to re-prompt for small wording fixes.

## Step 3: Highlight text or sections for targeted edits

1. Select a paragraph, table cell, or image caption.
2. A prompt bar or context menu appears.
3. Type a short instruction such as “make this more concise,” “turn this table into a graph,” or “fix the grammar.”
4. Gemini revises only the highlighted portion and updates the preview.

This is faster than asking for a full regeneration. It also preserves the rest of the document you already approved.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dJ-SIBF1nJQ"
    title="Generate, edit, and preview files in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 4: Ask follow-up questions or request refinements

You can continue the conversation about the same file. Useful prompts include:

- “Explain the second paragraph in simpler terms”
- “Add a column for tax rate and recalculate the totals”
- “Change the slide color scheme to dark mode”
- “Export this as a downloadable PDF”

Gemini keeps the file context, so later prompts reference the current version rather than starting over.

## Step 5: Export or open in Google Workspace

From the preview or full-screen view you can typically:

- Download the file (PDF, DOCX, PPTX, XLSX, or code as plain text)
- Open it directly in Google Docs, Sheets, or Slides when the format matches
- Copy content to the clipboard

For PDFs on mobile, download or share is the primary export path. On the web, Workspace formats often offer a one-click open.

![Programmer working at a multi-monitor desk with code on screen](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

**Start with structure.** Ask for headings, bullet lists, or table columns first. Then refine content. Structured prompts produce cleaner previews.

**Use source material.** Upload notes, spreadsheets, or screenshots. Gemini works better when it has concrete input instead of inventing details.

**Edit in layers.** Fix critical facts yourself in full-screen mode. Use highlight-and-prompt for style or calculation changes. Reserve full regenerations for major restructuring.

**Check platform limits.** Non-PDF formats stay web-only for now. If you need to edit a Sheet or slide deck on the go, generate on mobile then open the exported file in the native Google app.

**Review numbers and citations.** Generated spreadsheets and reports can contain calculation or factual errors. Verify totals and sources before sharing.

## Common limitations

Complex layouts, advanced formulas, and heavily formatted presentations may need a final pass in the native Google app. Image generation inside documents relies on Gemini’s current visual tools and can be inconsistent. Large files may hit context or processing limits; split very long documents into sections.

Mobile support is currently strongest for PDFs. Other formats require the web client.

## Conclusion

The in-chat file tools remove the old generate-download-edit-reupload cycle. Generate a first draft, expand it, highlight the parts that need work, and export when finished. The feature is available to every Gemini user today, with PDF editing on both web and mobile.

Start with a small, concrete task—such as turning notes into a one-page PDF or building a simple expense tracker—so you can learn the expand and highlight flow. Once that feels natural, move to longer documents and presentations.

## Sources

- [Edit and preview documents directly in Gemini](https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/) — Google Blog, 29 October 2026
- [Create, preview, and edit files directly in the Gemini app](https://workspaceupdates.googleblog.com/2026/10/create-preview-and-edit-files-directly-in-the-Gemini-app.html) — Google Workspace Updates
- [Generate, edit, and preview files in Gemini](https://www.youtube.com/watch?v=dJ-SIBF1nJQ) — Google Gemini on YouTube
