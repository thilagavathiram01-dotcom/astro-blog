---
title: "How to Use Gemini Notebook as a Connected App in Gemini"
description: "Connect Gemini Notebook to the Gemini app and use @Gemini Notebook to create notebooks, add sources, and query your research with natural language."
pubDate: 2026-10-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1527859117301-9c98fd2a1d1f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "productivity"]
noindex: false
---

Google added Gemini Notebook as a Connected App in the Gemini app on October 23, 2026. You can now create notebooks, add sources, and pull information from them directly inside a chat using natural language.

This guide shows the exact steps to connect it and put it to work. You will also see practical examples you can copy.

## What the Gemini Notebook Connected App does

Gemini Notebook (formerly NotebookLM) stores sources such as PDFs, Google Docs, web pages, and YouTube transcripts. Answers stay grounded in those sources and include citations.

As a Connected App it works inside the main Gemini chat. Type **@Gemini Notebook** and Gemini can:

- Create, edit, or delete a notebook
- Add, update, or delete sources
- List your notebooks and their sources
- Answer questions using context from a notebook

The feature is available to Google Workspace customers, Workspace Individual subscribers, and personal Google accounts. It is on by default globally except in the European Economic Area, where it starts off.

## How to connect Gemini Notebook

Open the Gemini app on Android, iPhone, or gemini.google.com and sign in with the same Google account you use for Gemini Notebook.

1. Start a new chat or open an existing one.
2. Type a prompt that includes **@Gemini Notebook**. Example: "@Gemini Notebook create a notebook about solar farm market trends."
3. If the app is not yet connected, Gemini shows a connect prompt. Follow the on-screen steps.
4. Confirm the connection. You can also open Settings > Connected Apps and toggle Gemini Notebook on or off at any time.

Admins control access through Gemini and Gemini Notebook settings in the Google Admin console. Both must be enabled for users in the relevant group or organizational unit.

![Person writing notes next to research books](https://images.unsplash.com/photo-1680501912118-d5d0003301c9?auto=format&fit=crop&w=800&q=80)

## Step-by-step: create and use a notebook in chat

Once connected, keep the conversation in one thread so Gemini retains context.

**Create a notebook**

```
@Gemini Notebook Create a new notebook called Q4 Marketing Research.
```

**Add sources**

```
@Gemini Notebook Add this chat summary and the attached PDF to my Q4 Marketing Research notebook.
```

You can also paste a URL or describe a Google Drive file.

**Query the notebook**

```
@Gemini Notebook What do the sources in my Q4 Marketing Research notebook say about competitor pricing? List the three strongest points with citations.
```

Gemini pulls only from the sources you added and cites them. Click a citation to jump to the original passage.

**List and manage**

```
@Gemini Notebook Show me all sources in my Q4 Marketing Research notebook.
@Gemini Notebook Delete the outdated report from that notebook.
```

## Tips for better results

Keep each notebook focused on one project. A notebook about a single product launch or exam topic produces sharper answers than a mixed collection.

Add high-quality sources first. Prefer primary documents, official reports, and clear web pages over random links.

Name notebooks clearly. The name helps both you and Gemini locate the right one later.

Review citations. Gemini Notebook is designed to stay grounded, but you should still verify important facts before acting on them.

For longer research jobs, combine this with Gemini Tasks mode so work continues while you step away. See our guide on [analyzing data with Gemini and BigQuery](/blog/analyze-data-gemini-bigquery-step-by-step/) for related multi-step workflows.

![Stack of research books and notes on a desk](https://images.unsplash.com/photo-1764096535068-0e9f652e03f6?auto=format&fit=crop&w=800&q=80)

## Watch a full walkthrough

This video covers Gemini Notebook setup, source selection, grounded chat, and turning research into usable outputs. The Connected App workflow builds on the same principles.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/vsXJpAVSNIE"
    title="How to Use Gemini Notebook Better than 99% of people"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations to know

Business notebooks created under a work account cannot currently be created or accessed this way from the personal Gemini app.

Availability can vary by account and region during rollout. If @Gemini Notebook does not appear, confirm you are signed into the correct account and check Settings > Connected Apps.

Shared notebooks may appear as links rather than fully editable items inside the chat.

## Conclusion

The Gemini Notebook Connected App removes the need to switch between the standalone notebook site and the Gemini chat. You manage sources and ask questions in one place with natural language.

Start with one focused notebook, add two or three strong sources, and test a query that includes @Gemini Notebook. You will see the difference in grounded, cited answers immediately.

## Sources

- Google Workspace Updates: Take actions on your notebooks from Gemini Notebook directly in the Gemini app (October 23, 2026)
- Gemini Apps Help: Organize your projects with notebooks in Gemini Apps
- Gemini Notebook Help: Create a notebook and manage sources
