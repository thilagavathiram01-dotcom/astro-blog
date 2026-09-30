---
title: "How to Use Gemini in Google Sheets on Desktop"
description: "Open Ask Gemini in Google Sheets, build tables and formulas, analyze one data range, and insert charts before history clears."
pubDate: 2026-09-30T17:00:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "google", "productivity", "ai-tools"]
noindex: false
---

Google Sheets already holds the numbers. Gemini sits in a side panel and writes tables, formulas, charts, and short analyses from that grid. On 2 September 2026, Google said Gemini 3.8 Flash is available to Google AI Pro and Ultra subscribers in Gemini in Google Sheets, the Gemini app, and AI Mode in Search.

This guide follows Google Docs Editors Help for the desktop side panel. It is the web path. Phone steps live in a separate [Android Sheets walkthrough](/blog/gemini-sheets-android/).

## What Gemini in Sheets can do

Google’s Help page lists five jobs for the desktop panel:

- Create tables.
- Create formulas.
- Generate data analysis and insights.
- Build charts and graphs.
- Summarize emails and files from Drive and Gmail.

A second Help article, *Build or edit entire spreadsheets with Gemini in Sheets*, adds two larger jobs: create a new sheet from a prompt, and run an end-to-end task on a sheet that already has data.

Gemini in Sheets works best on a native Google Sheets file. If you opened an Excel workbook, use **File → Save as Google Sheets** before you ask for formulas or charts.



![Laptop showing a spreadsheet with charts on a wooden desk](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## Open the Ask Gemini panel

1. On a computer, open the spreadsheet in Google Sheets.
2. At the top right, click **Ask Gemini**.
3. In the side panel, pick a suggested prompt or type your own.
4. Optional: open **More options → Clear history** when you want a clean thread.

The panel can expand, collapse, or close. Clearing history removes generated text and images you have not inserted yet.

Insert anything you want to keep. Google says the conversation history disappears when you reload the browser, close and reopen the spreadsheet, or go offline.

## Point Gemini at one range

Gemini in Sheets can currently reference **one range at a time**. Place the cursor in a cell inside the block you want it to read. Then ask the question.

A prompt that names two disconnected tables in one sentence will often ignore one of them. Select the first block, finish that ask, then move the cursor and start the next ask.

If the grid is messy, freeze the header row and give columns plain names before you open the panel. Gemini writes better formulas when “Amount” is a header, not “Q3 stuff.”

## Create a table from a prompt

Use the side panel when the sheet is empty or when you need extra rows.

Official example prompts from Google:

- “Create a sheet to track my monthly expenses with columns for date, category, amount, and notes.”
- “Create a table for a project tracker in Google Sheets with columns for task, assignee, deadline, and status.”
- “Create a 10-day itinerary for a first-time visitor covering Tokyo, Kyoto, and Osaka.”

After Gemini drafts a table, review the columns. Ask follow-ups such as “Add another 5 rows of different activities” or “Add details on cost.” Use the good-suggestion or bad-suggestion controls if Google shows them.

Insert the table into the grid. Do not treat the side panel as storage.

## Write formulas without guessing syntax

You can start from **Ask Gemini**, or from a cell:

1. Click a cell and type `=`.
2. Use the shortcut **Ctrl + Alt + G** on Windows or ChromeOS, or **⌘ + Ctrl + G** on Mac.
3. Describe the calculation in the panel. Name columns or use cell addresses that exist on the sheet.

Ask for one formula at a time. Check the result against a row you can add by hand. If the formula references the wrong sheet tab, say the tab name in the next prompt.

Gemini can invent a plausible function that does not match your business rule. Keep the official Sheets function list open when the output uses `QUERY`, `FILTER`, or nested `IF` statements you have not used before.



![Person reviewing numbers and notes next to a laptop](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)



## Analyze data and insert a chart

Place the cursor in the data range. Then ask for analysis or a specific chart type.

Google’s build-sheet examples include:

- “Run a full analysis on the data set to help me make decisions about my business.”
- “Create a visual dashboard of this sales data set.”
- “Update my budget based on last year’s revenue.”

Google Workspace’s Sheets demo shows the same pattern on a Grand Slam winners table: accept an analyze suggestion, watch Gemini write code in the panel, then insert the output.

A later Workspace short shows a budget sheet: “create a scatter plot showing each expense, and add color coding to show what is under and over budget.” Insert the chart when the preview looks right.

Treat every chart as a draft. Confirm axis titles and the row count. If Gemini offers a further analysis question, answer only if that question matches the decision you need today.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J0NsBA6o8IA"
    title="Gemini in Google Sheets demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Build or rewrite a whole spreadsheet

On accounts that have the Build flow, the right-hand panel can open on **Build** instead of a blank chat.

1. Open Google Sheets on a computer.
2. Type what the workbook should do.
3. Answer any clarification questions.
4. Review the plan and template outline.
5. Optional: click **Add sources**, or **Clear** to drop sources.

Google documents this path for creating new sheets and for multi-step edits on existing files. You can cancel a plan and start again if the outline is wrong.

Add sources only when the task needs Drive files or mail Gemini is allowed to read. A budget rebuild that pulls last year’s revenue should name the file. A blank tracker does not need extra sources.

## Use Drive and Gmail context with care

The Collaborate help page says Gemini in Sheets can summarize emails and files from Drive and Gmail. That is useful for a status column fed by threads you already own.

Do not paste confidential payroll or health data into a prompt “so Gemini has context.” Put that data in a range only if the sheet’s sharing list is already correct. Shared editors can see inserted tables and charts.

Workspace admins can turn Gemini features on or off for Sheets. If **Ask Gemini** is missing, you may lack a Google AI or Workspace plan, or an admin may have blocked the panel.

## Limits you should plan around

- One data range per ask.
- History is temporary until you insert output.
- Excel files need a Save as Google Sheets step.
- Gemini 3.8 Flash in Sheets is a subscriber surface Google named in the 3.8 Flash launch post. The Help pages do not expose a model picker or a `thinking_level` control inside Sheets.
- The panel is not Gemini Live, Gems, or skills. Those live in the Gemini app.

If you need reusable instructions, keep them in the Gemini app and paste a short brief into Sheets. For Android analysis UI details, use the [Gemini in Sheets on Android](/blog/gemini-sheets-android/) guide.

## Tips that keep the grid honest

Keep headers in row 1 and avoid merged cells in the range you select.

Ask for a formula, then ask for a chart, as two turns. Mixed asks often produce a chart with a broken series.

Name the output location: “Put the summary on a new tab called Review.” Otherwise Gemini may overwrite cells near the cursor.

After you insert a table, convert it to a Sheets table if your account offers that format, then continue edits in the grid. The panel should not remain the source of truth.

When numbers disagree with a `SUM` you can see, keep the `SUM`. Gemini’s narrative is a draft.

## Conclusion

Gemini in Google Sheets is a side panel that writes into a real spreadsheet. Open **Ask Gemini**, sit the cursor in one range, and insert every table, formula, or chart you intend to keep. Use Build when you want a full sheet plan. Leave Live chat and custom skills in the Gemini app.

Start with one clean expense or project tab. Generate the structure, check one formula by hand, then add a chart. That sequence matches what Google documents and what you can verify on the grid.

## Sources

- [Collaborate with Gemini in Google Sheets](https://support.google.com/docs/answer/14356410) — Google Docs Editors Help
- [Build or edit entire spreadsheets with Gemini in Sheets](https://support.google.com/docs/answer/16959434) — Google Docs Editors Help
- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google Blog, 2 September 2026
- [Gemini in Google Sheets demo](https://www.youtube.com/watch?v=J0NsBA6o8IA) — Google Workspace
