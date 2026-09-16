---
title: "How to Use Gemini Deep Research for Cited Reports"
description: "A practical guide to Gemini Deep Research in Gemini Apps: plan a topic, pick sources, wait for the report, then export, share, or listen to an audio overview."
pubDate: 2026-09-16
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "/images/gemini-deep-research-cited-reports.svg"
---

A normal Gemini chat is fast. It is also easy to treat like a finished answer when it is only a first draft. **Deep Research** is the mode that treats a question as a project: it drafts a plan, searches across sources, then returns a structured report with citations.

This tutorial covers the consumer workflow in [Gemini Apps](https://gemini.google.com) using Google's own help documentation. It is not an API guide and it is not a review of every competing research agent.

## What Deep Research is for

Use Deep Research when you need a brief you can check, not a one-paragraph summary.

Good fits include:

- Comparing products, vendors, or policies across several public sources
- Building a reading brief before you write a longer article or memo
- Pulling together public web results plus files you already have in Drive or Gmail
- Turning a finished report into a shareable Doc or an audio overview

Skip it for short factual lookups, code snippets, or anything you need in a few seconds. Google's help pages note that a typical report takes about **5–10 minutes**, and complex topics can take longer.

You must be **18 or over** and signed in to Gemini Apps.

## What you get that regular chat does not

In Gemini Apps, Deep Research:

- Uses **Google Search by default**
- Lets you add **Gmail**, **Drive**, uploaded files, and NotebookLM notebooks as extra sources
- Shows a **research plan** you can edit before the run starts
- Produces a report you can open later from Recent chats
- Can generate an **Audio Overview** and export the report to **Google Docs**

Google AI Pro and Google AI Ultra users can generate higher-quality reports with the Pro model. All signed-in adult users can use Thinking for reports. Daily request limits still apply; Gemini warns you when you are close to the cap. Pro and Ultra plans raise those limits.

If you are on Google AI Ultra, some web-only reports can include charts, diagrams, or other visuals. Those visuals are **not** available when you include Workspace sources such as Gmail or Drive.

## Step-by-step: run a report on desktop

### 1. Open Gemini and turn on Deep Research

1. Go to [gemini.google.com](https://gemini.google.com) and sign in.
2. In the composer, open **Add files / Tools** and choose **Deep Research**.
3. Optional: upload files or an image with **Add files** if the question depends on a PDF, screenshot, or draft you already have.

Keep the first prompt specific. "Write about batteries" wastes a research slot. "Compare lithium iron phosphate and NMC battery packs for home storage in 2026, including safety, cycle life, and cost drivers, using public manufacturer and standards sources" gives the planner something to work with.

### 2. Choose sources on purpose

Click **Sources** before you submit.

- Leave **Google Search** on for public, current material.
- Add **Drive** when the question should include your own briefs, spreadsheets, or slide decks.
- Add **Gmail** only when email threads are part of the evidence, such as vendor quotes you already received.
- Deselect Google Search if you want the run limited to the sources you selected.

Gmail and Drive appear only after you connect Google Workspace to Gemini Apps. Do not connect Workspace just to try the feature on a sensitive mailbox.

### 3. Edit the plan, then start research

Submit the prompt. Gemini drafts a plan.

Read that plan the way you would read a junior researcher's outline:

- Cut sections that are off-topic
- Add a comparison table or a "what is still unknown" section if you need it
- Name the geography, product generation, or date range so the search does not mix old and new material

Click **Start research** only after the outline matches the job.

You can leave the chat while it runs. On the web app, Gemini marks the thread when the report is ready. On mobile, you may get a device notification, including on the lock screen depending on your notification settings.

### 4. Open the report and check citations

When the report is ready, click **Open**.

Treat citations as a map, not as proof. Open the important links. Confirm that a number still matches the source page and that the source is the kind of page you would cite yourself (official docs, standards, company filings, or reputable reporting).

If a claim has no usable source, do not copy it into a customer-facing document.

## After the report: listen, visualize, export

Find past reports under **Recent** in the Gemini sidebar. You will only see older reports if **Keep Activity** is on.

From the Canvas panel on the right:

- **Create → Audio Overview** turns the report into a spoken briefing.
- **Create** plus a short prompt can build a custom visualization of the report.
- **Share & export** lets you share the Canvas, **Export to Docs**, or copy the text.

Export to Docs is the safest handoff if other people will edit the brief. Copy-paste is fine for a private note.

## A concrete example

Suppose you need a one-page brief on whether to adopt passkeys for a consumer Android app.

A useful Deep Research prompt:

> Research passkey support on Android in 2026 for a consumer app that already uses Google Sign-In. Cover Credential Manager, platform passkeys vs third-party managers, recovery and device-loss flows, and Play policy or official Android documentation constraints. Prefer developer.android.com and official Google Identity docs. End with a short implementation checklist and open questions.

Then:

1. Keep Google Search on.
2. Add any internal architecture notes from Drive.
3. Edit the plan so it includes a section on fallback sign-in, not only the happy path.
4. Start research, export the report to Docs, and replace any unverified vendor-blog claims with official Android links before you share it with engineering.

That is the loop: plan, ground, verify, export.

## When to use NotebookLM instead

Deep Research is built to go out and gather. [Gemini Notebook](https://notebook.google.com/) (NotebookLM) is built to stay inside sources you choose.

Use NotebookLM when you already have PDFs, Docs, Slides, Sheets, web URLs, or public YouTube transcripts and you want answers cited back to those files. You can also run Fast Research or Deep Research *inside* a notebook to discover extra web sources, then import only the ones you accept.

A practical split:

- Unknown topic, need a first map of the public web → Gemini Deep Research
- Known corpus, need Q&A and study tools grounded in those files → NotebookLM
- Mix of both → run Deep Research, export or save sources, then drop the best documents into a notebook

NotebookLM free accounts can include up to **50 sources**. Each source can be up to **500,000 words** or **200MB** for uploads. Paywalled pages and videos without captions will not import cleanly.

## Limits and habits that keep the output useful

- **One research question per run.** Stacking five unrelated topics burns the daily limit and produces a mushy report.
- **Name the sources you trust.** "Prefer official documentation" is a real instruction.
- **Do not paste secrets into a research prompt.** Connect Drive only for files you would already share with a research assistant.
- **Leave the chat if the run is long.** The thread updates when the report is ready.
- **Re-run after you edit the plan**, not after you argue with a finished report that researched the wrong question.

Google states that AI responses can include mistakes. Deep Research reduces the "no source" problem. It does not remove the need to open the links.

## Conclusion

Gemini Deep Research is the right tool when a question needs a plan, multiple sources, and a report you can export. Start from [gemini.google.com](https://gemini.google.com), turn on Deep Research, pick Search plus only the Workspace sources you actually need, edit the plan, then verify citations before the brief leaves your account.

If you already own the source documents, put them in NotebookLM and ask questions there. Use Deep Research to find the map. Use a notebook to live inside the map.

## Sources

- [Use Deep Research in Gemini Apps](https://support.google.com/gemini/answer/15719111) — Gemini Apps Help
- [Gemini Deep Research overview](https://gemini.google/overview/deep-research) — Google
- [Add or discover new sources for your notebook](https://support.google.com/notebooklm/answer/16215270) — Gemini Notebook Help
- [Gemini Deep Research agent](https://ai.google.dev/gemini-api/docs/deep-research) — Google AI for Developers
