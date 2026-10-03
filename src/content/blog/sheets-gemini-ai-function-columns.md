---
title: "Fill Google Sheets Columns with the Gemini AI Function"
description: "Use the Gemini =AI() function in Google Sheets to generate text, categorize rows, and refresh results, with syntax and limits from Google Help."
pubDate: 2026-10-03T09:30:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["google", "gemini", "tutorials", "how-to", "productivity"]
noindex: false
---

A long feedback column should not need a hand-written summary in every row. Google Sheets can run that work with the AI function, which calls Gemini from a cell formula. Google documents it as `=AI()` or `=Gemini()`, and it can generate text, summarize a range, categorize rows, score sentiment, or pull a current fact from Google Search.

This guide follows the steps on the Google Docs Editors Help page for the AI function, plus the side-panel actions that sit next to it. You need an eligible Google Workspace or Google AI plan. If the cell says the AI function is not available, check your plan, admin settings, and language before you rewrite the formula.

![Laptop and notebook on a desk ready for a spreadsheet workflow](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## What the AI function can and cannot see

The function returns text only. It does not read your whole spreadsheet, and it does not open other files in Drive. Pass the cells you care about in the optional range argument. Google’s syntax is `AI("prompt", [optional range])`.

That limit is useful. A prompt that says “summarize the customer” with no range has nothing reliable to read. A prompt that points at `A2:D2` stays tied to that row.

Embedded formulas are not supported. Google’s example of what fails is wrapping the function inside `IF`. A custom function you already named `AI` or `Gemini` is remapped to the Sheets AI function, so you cannot keep both names.

Excel files need a conversion first. Google says Gemini features work best on native Sheets files. Use **File > Save as Google Sheets** before you rely on the side panel or the AI function.

## Turn on a formula in one cell

1. Open a spreadsheet in Google Sheets on a computer.
2. Click a cell and type `=AI()` or `=Gemini()`. You can also use **Insert > Function > AI**.
3. Put a specific instruction in quotes, then a range if the answer depends on sheet data.
4. Select the cell or cells that hold the function.
5. Click **Generate and Insert**.

Google’s starter example is `=AI("Generate slogan for event in 10 words or less", A2)`. The first argument is the instruction. The second argument is the cell Gemini should read.

When you click **Generate and Insert** or **Refresh and Insert**, Sheets writes the text into the cell and attributes that edit to you in version history. You cannot undo or redo the function itself. Regenerate the output instead.

## Add an AI column and fill the rest of the table

Tables get a faster path. At the top right of the last column, click **Insert AI column right**. The first non-header row shows the AI function. Write the prompt you want in that row, then autofill the column and generate the entries.

Google also documents two fill methods that sit beside the formula:

- If a column already has at least one completed cell, drag the fill handle to extend the column from the table context.
- For an empty multi-cell selection, use the one-click **Fill** entry. Sheets can fill from an existing example, or you can write a custom prompt.

Keep the first prompt narrow. “Classify this ticket” is weaker than “Categorize the customer inquiry as a compliment, exchange request, or return request.” Google lists that exact pattern for categorization.

![Charts on a laptop screen used to review spreadsheet results](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Copy prompts that match Google’s examples

Use these shapes, then swap in your own columns.

**Generate text**

`=AI("Create an email to the reviewer addressing specific items in their reviews.", A2:G2)`

`=AI("develop a list of keywords for the job title based on the summary of duties.", A2:C2)`

**Summarize a row**

`=AI("For the customer, write a one sentence summary of their feedback.", A2:D2)`

`=AI("List in bullet points the main themes of the book summary.", D2)`

**Categorize**

`=AI("Classify the preview as either a spam email or not a spam email.", D2)`

`=AI("Classify the restaurant by which New York City borough it belongs to. Use the neighborhood to help.", A2:C2)`

**Sentiment**

`=AI("Classify the body of the email, as either positive, negative, or neutral.", D2)`

**Search-backed facts**

`=AI("What is the current capital of Kazakhstan?", A2)`

`=AI("What is the population of the list capital city?", A2:B2)`

Search-backed prompts still need a check. Google says Gemini feature suggestions can be inaccurate and should not be treated as medical, legal, or financial advice.

## Refresh results when the source cells change

A normal range argument can prompt you to refresh after the source data changes. Select the cells and click **Refresh and Insert**.

Concatenation is the exception. If two ranges are not contiguous, Google says you can join them inside the prompt string. That formula will not prompt you to refresh when those cells change. You have to decide when to regenerate. Google’s example is:

`=AI("Find the major themes in the customer feedback of "&B2&" using the comments: "&D2&"")`

Prefer a single range argument when you can. It keeps the refresh path that Sheets already shows.

## Use the side panel when a formula is the wrong tool

The AI function is for cell text. Charts, pivot tables, filters, and conditional formatting live in the Ask Gemini side panel. Open a spreadsheet and click **Ask Gemini** at the top right.

Useful panel jobs from Google’s help page:

- Create a table, then click **Insert**. Follow up with a prompt such as “Add details on cost” before you insert.
- Build a formula from a cell. Type `=`, then press **Ctrl + Alt + G** on Windows or ChromeOS, or **⌘ + Ctrl + G** on Mac.
- Ask for a chart, preview it, and insert it. Sheets adds the chart on a new tab with its own data. That chart does not stay linked to the original range.
- Ask for an action such as “Highlight values below 100.” Review the action preview card and click **Apply**. Use **Undo** if the result is wrong, before you make more edits.

Summaries have their own shortcut: **Ctrl + Alt + N** on Windows, **⌘ + Ctrl + N** on Mac.

Conversation history in the panel disappears if you reload the browser, close the file, or go offline. Insert anything you want to keep.

If a normal formula shows an error, hover the cell and click **Fix**. Gemini reviews the formula in the side panel. Click **Stop** if you want to cancel.

For a desktop Gemini 3.8 Flash walkthrough of the same app, see [Gemini in Sheets on desktop](/blog/gemini-sheets-desktop-3-8-flash/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/J0NsBA6o8IA"
    title="Gemini in Google Sheets demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits you should plan for

Google lists several hard stops:

- Short-term and long-term generation limits apply. If you hit a long-term limit, wait 24 hours before you click Generate again.
- A multi-cell selection generates only the first 350 cells that contain an AI function. Wait for that batch, then select more.
- The function does not run if you open Sheets through Box, Dropbox, or Egnyte via Google Drive.
- “AI function not available” can mean you are outside the Workspace Experiments program, your plan does not include AI functions, or an admin or language setting blocks it.

Feedback buttons sit under generated text. Do not send personal or confidential data in a bad-suggestion report. Google says that feedback can be read by people.

![Dashboard graphs used to check categorized spreadsheet output](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## A practical first column

Start with one table and one job. Put raw comments in column C. Insert an AI column. Use a closed set of labels, such as compliment, exchange, or return. Generate the first 20 rows, read them, then refresh only the rows that look wrong.

After the labels look stable, add a second column for a one-sentence summary that reads the same row. Keep search-backed formulas in a separate column so a wrong web fact does not overwrite a category you already checked.

If you need a chart of those categories, leave the formula column alone and ask the side panel to build the chart. Insert it, then edit the new tab like any other Sheets chart.

## Sources

- Google Docs Editors Help, “Use the AI function in Google Sheets”: https://support.google.com/docs/answer/15877199
- Google Docs Editors Help, “Collaborate with Gemini in Google Sheets”: https://support.google.com/docs/answer/14356410
- Google Workspace, “Gemini in Google Sheets demo”: https://www.youtube.com/watch?v=J0NsBA6o8IA
