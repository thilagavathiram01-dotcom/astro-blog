---
title: "Generate & Edit Google Sheets and PDFs in Gemini Chat"
description: "Step-by-step guide to generate, preview, and edit Google Sheets trackers and PDF study guides directly inside Gemini chat on web and mobile."
pubDate: 2026-11-05T14:00:00Z
heroImage: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Google added in-chat file generation, preview, and editing to the Gemini app on 29 October 2026. You can now create a Google Sheet or PDF, see it appear inside the conversation, and refine it without copying text into another app.

PDF preview and editing work on both the web (gemini.google.com) and the mobile Gemini app. Google Sheets, Docs, slide decks, Markdown, TXT, and code files are available on the web only for now. The feature is open to all users in every language where Gemini runs. No paid subscription is required.

This guide shows practical workflows for two common tasks: building a simple expense tracker in Google Sheets and turning lecture notes into an editable PDF study guide.

## What the feature supports

Google’s announcement lists these capabilities:

- Generate a file from a prompt or from uploaded source material (photos of notes, existing documents, etc.).
- Preview the result directly in the chat.
- Expand the preview to full screen and type changes yourself.
- Highlight text or a visual element and ask Gemini a question or request a specific edit.
- Export the finished file to Google Drive, open it in the native app (Sheets or Docs), or download it.

Visual changes work too. In Google’s demo, highlighting a data table and asking “show this as a graph instead” updates the element in place.

![Hands typing on a laptop displaying a spreadsheet](https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?auto=format&fit=crop&w=800&q=80)

## Step-by-step: Build a Google Sheets expense tracker (web)

1. Open gemini.google.com in a desktop browser and start a new chat.
2. Type a clear prompt. Example: “Create a Google Sheet expense tracker with columns for Date, Category, Description, Amount, and Notes. Add sample rows for the last seven days of food, transport, and utilities.”
3. Wait for the preview to appear in the chat. Click it to expand if needed.
4. Review the structure. Expand to full screen if you want to type cell changes directly.
5. Highlight a section (for example, the category list) and ask: “Add a total row at the bottom that sums the Amount column” or “Turn the monthly totals into a simple bar chart.”
6. When the sheet looks right, choose the option to open it in Google Sheets or save it to Drive. You can continue editing in Sheets afterward.

Sheets editing is web-only. On a phone you will see the generation step, but full preview and inline editing of the Sheet itself require the desktop site.

## Step-by-step: Create a PDF study guide (web or mobile)

1. Open the Gemini app on your phone or go to gemini.google.com.
2. Upload photos of handwritten notes or paste text. Then ask: “Turn these notes into a clean PDF study guide. Organize by topic, add short summaries, and include key definitions.”
3. The PDF preview appears in the chat. On mobile this works the same as on the web.
4. Expand to full screen. Type small fixes yourself (typos, extra bullets).
5. Highlight a paragraph or diagram and request changes: “Make this definition shorter” or “Add a simple table comparing the two methods.”
6. Export the PDF or save it to Drive. You can also ask follow-up questions about specific sections while the preview stays open.

Google’s own example uses exactly this flow: handwritten lecture notes become an editable PDF study guide that you can refine without leaving the conversation.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dJ-SIBF1nJQ"
    title="Generate, edit, and preview files in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Supported formats and device limits

| Format              | Web (gemini.google.com) | Mobile app | Next step after editing |
|---------------------|-------------------------|------------|-------------------------|
| PDF                 | Yes                     | Yes        | Download or save to Drive |
| Google Sheets       | Yes                     | No         | Open in Google Sheets   |
| Google Docs         | Yes                     | No         | Save to Drive / open in Docs |
| Slide decks         | Yes                     | No         | Open in Slides or download PPTX/PDF |
| Markdown / TXT / code | Yes                   | No         | Save to Drive           |

PDF is the only format that currently supports full in-chat preview and editing on phones. For everything else, switch to the web version.

![Laptop on a desk showing code and productivity setup](https://images.unsplash.com/photo-1763568258289-47ada8efe7ea?auto=format&fit=crop&w=800&q=80)

## Practical tips

- Start with a specific prompt that names the columns, sections, or structure you want. Vague requests produce more generic results.
- Upload source material when you have it. Photos of notes, existing spreadsheets, or reports give Gemini better starting content.
- Use the highlight tool for targeted changes instead of regenerating the whole file. This is faster and keeps the rest of the document intact.
- After you finish in Gemini, open the file in the native app (Sheets or Docs) for advanced formatting, formulas, or collaboration.
- Check the result for accuracy, especially with numbers, formulas, or technical details. Gemini can invent or misplace data.

## Limitations to know

The feature generates new files or works from material you upload in the current chat. It does not yet let you open an arbitrary existing PDF or Sheet from Drive and edit it in the same inline preview. Complex layouts or large data sets still benefit from a final pass in Google Sheets or a desktop PDF editor.

Privacy and data handling follow the same rules as other Gemini conversations. Sensitive personal or work data should be reviewed before you export or share the resulting file.

For a broader overview of the same update, see our earlier walkthrough: [How to Edit Files Directly in Gemini Chat (2026 Guide)](/blog/gemini-in-chat-file-editing-step-by-step/).

## Conclusion

Generating and editing Google Sheets and PDFs inside a Gemini chat removes the old copy-paste step for many everyday tasks. On the web you can build structured trackers and open them straight in Sheets. On both web and mobile you can turn notes into polished PDF study guides and refine them in place.

Try a simple prompt today—either an expense tracker or a study guide from your latest notes—and adjust the result with a few highlighted requests. The workflow is available to every Gemini user right now.

**Sources**

- Google Blog: “Edit and preview documents directly in Gemini” (29 October 2026)
- Google Workspace Updates: “Create, preview, and edit files directly in the Gemini app” (29 October 2026)
- Official Google Gemini YouTube video demonstrating the feature
