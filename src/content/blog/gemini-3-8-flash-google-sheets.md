---
title: "Use Gemini 3.8 Flash in Google Sheets Step by Step"
description: "Use Gemini 3.8 Flash in Google Sheets to build tables, formulas, and charts. See who gets the model and how to check every result."
pubDate: 2026-10-04T09:30:00
heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "google", "tutorials", "how-to", "productivity"]
noindex: false
---

A blank sheet is a slow way to start a budget, a trip plan, or a weekly report. Google says Gemini 3.8 Flash is available to Google AI Pro and Ultra subscribers in Gemini in Google Sheets, alongside the Gemini app and AI Mode in Search. The side panel can draft tables, formulas, charts, and short analysis from a prompt. You still decide what lands in the cells.

This guide covers who can open the panel, how to ask for a table or a formula, and how to keep the output honest. It does not cover Gemini 3.8 Flash Cyber, which Google limits to trusted defenders in the Fairwind Program.

## Who gets Gemini 3.8 Flash in Sheets

On September 2, 2026, Google introduced Gemini 3.8 Flash as its workhorse model for software engineering, agentic tasks, and multi-step reasoning, at the same introductory API price as 3.7 Flash: $0.75 per million input tokens and $3.75 per million output tokens through December 31, 2026. Starting January 1, 2027, Google lists $1.50 and $7.50.

For consumers, Google says 3.8 Flash is available to Google AI Pro and Ultra subscribers in the Gemini app, AI Mode in Search, and Gemini in Google Sheets. Enterprise access is listed separately in Gemini Enterprise. A free Google Account can still open Sheets, but the 3.8 Flash path Google announced is tied to those paid plans.

If you already use 3.8 Flash in chat or Search, the [Gemini 3.8 Flash AI Mode guide](/blog/gemini-3-8-flash-ai-mode-search/) covers the Search side. Sheets is the place where the same model is meant to write into a grid instead of a chat thread.

## Open the side panel

Google’s Docs Editors help lists the same starting point on computer:

1. Open a spreadsheet in Google Sheets on the web. Start from sheets.new if you want a fresh file.
2. At the top right, click Ask Gemini.
3. Pick a suggested prompt or write your own.
4. Optional: open More options and choose Clear history if you want a clean thread.

Place the cursor in a cell inside the range you want Gemini to use. Google notes that Gemini in Sheets can currently reference one range at a time. History is easy to lose. Google says you lose the conversation when you reload the browser, close and reopen the file, or go offline. Insert anything you want to keep into the sheet before you leave.

![Person reviewing charts and numbers on a laptop](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Build a table from a prompt

The help center lists table creation as a core action. Use a prompt that names columns, row count, and units so the draft is checkable.

Example for a household repair log:

> Create a table with columns Date, Room, Issue, Part, Cost USD, and Status. Add 8 sample rows for common apartment repairs. Leave Status as Open.

Review the draft in the panel before you insert it. Change units, currency, and sample values in the prompt if the first pass invents prices. After the table is in the sheet, ask for a follow-up such as “Add a column for vendor” or “Add five more rows with different rooms.” Google’s own examples include prompts like “Add another 5 rows of different activities” and “Add details on cost.”

Treat sample numbers as placeholders. A repair cost Gemini invents is not a quote.

## Write formulas without memorizing syntax

Google documents two ways to start a formula request:

- Click Ask Gemini in the top right, then describe the calculation.
- Type `=` in a cell, then use the shortcut. On Windows and ChromeOS that is Ctrl + Alt + G. On Mac it is Command + Ctrl + G.

Prompts work better when they name columns or cell references. “Sum the Cost USD column for rows where Status is Open” is clearer than “total the open stuff.” After Gemini proposes a formula, insert it and check the result against a hand calculation on two or three rows.

Useful follow-ups:

- “Explain this formula in one sentence.”
- “Rewrite it so blank costs are treated as zero.”
- “Show the same total with SUMIF.”

Do not paste a formula into a shared finance file until you understand the range it covers. Gemini can currently focus on one range, so a sheet with several tables may need you to select the right block first.

## Ask for charts and a short read of the data

Google lists charts, graphs, and data analysis among the panel’s jobs. After the table is filled with real numbers, try:

> Chart Cost USD by Room as a bar chart. Call out the room with the highest total.

Then ask for a written summary you can paste into a comment or a doc: “Summarize the open items in three bullets. Do not invent missing costs.”

Google also says Gemini in Sheets can summarize emails and files from Drive and Gmail. Use that only on accounts where those connections are allowed, and do not drop confidential files into a prompt you would not share with the people who can open the spreadsheet.

The Workspace demo below shows the panel walking through analysis and a chart on a real dataset. The controls match the help-center flow: open Gemini, accept a suggestion or type a prompt, then insert what you want to keep.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J0NsBA6o8IA"
    title="Gemini in Google Sheets demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A worked example: a weekly spend sheet

Here is a sequence you can run on a new file.

1. Create a sheet named Spend.
2. Open Ask Gemini and request columns Week, Category, Merchant, Amount, and Note, plus 10 empty-looking sample rows you will overwrite.
3. Replace the samples with your own amounts.
4. With the cursor in the Amount column, ask for a SUMIF formula that totals the Groceries category.
5. Ask for a bar chart of Amount by Category.
6. Ask for a three-bullet summary of the largest categories. Compare those bullets to the chart before you share the file.

If a total looks wrong, check the range first. A formula that stops at row 10 will ignore row 11. Clear history only after you have inserted the formulas you want. Reloading the tab drops the thread.

![Notebook and calculator on a desk next to a laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## Limits and checks

A few constraints come straight from Google’s help and launch notes.

- One range at a time. Split a wide workbook into clear blocks, or move the cursor before the next question.
- History is session-bound. Insert output, or you lose it on reload, close, or offline.
- 3.8 Flash in Sheets, as announced, is for Google AI Pro and Ultra subscribers, plus enterprise access. API pricing is a separate path through AI Studio and does not by itself change the Sheets panel.
- Flash Cyber is not this product. Do not expect vulnerability-patching behavior inside a spreadsheet.
- Generated tables can invent plausible numbers. Replace samples before you share.

If Ask Gemini is missing, confirm you are signed into the account that holds the Pro or Ultra plan, and that you are in the web editor rather than a viewer-only share. Workspace admins can also restrict Gemini features; a missing button on a work account is often a policy choice, not a bug.

## Tips that save a second pass

Name columns before you ask for math. “Amount” and “Cost USD” behave better than “col D.”

Ask for the formula and a one-line explanation in the same prompt. The explanation is what you paste into a cell note for the next person who opens the file.

Keep source files outside the prompt when they contain account numbers or medical details. A category total does not need the full receipt image.

For model behavior outside Sheets, the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-app-api-guide/) covers calling the model directly. Use that when you need a script. Use the side panel when the result should live in the grid.

## Conclusion

Gemini 3.8 Flash in Google Sheets is a side-panel writer for tables, formulas, charts, and short analysis, available to Google AI Pro and Ultra subscribers according to Google’s September 2, 2026 launch note. Open Ask Gemini, point the cursor at the range you care about, insert what you want to keep, and check every number before you share. The panel drafts the grid. You still own the file.

## Sources

- Google, “Introducing Gemini 3.8 Flash and 3.8 Flash Cyber,” September 2, 2026: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
- Google Docs Editors Help, “Collaborate with Gemini in Google Sheets”: https://support.google.com/docs/answer/14356410
- Google Workspace, “Gemini in Google Sheets demo”: https://www.youtube.com/watch?v=J0NsBA6o8IA
