---
title: "Query and Manage Gemini Notebooks from Chat on Android"
description: "Use @Gemini Notebook in the Gemini app to create notebooks, add sources, and query notes directly from chat. Step-by-step Android guide."
pubDate: 2026-10-26T09:30:00
heroImage: "https://images.unsplash.com/photo-1759296844873-e0c694c24284?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Gemini Notebook is now a Connected App inside the Gemini app. You can create notebooks, add sources, list contents, and ask questions about your notes without leaving a chat.

Google enabled this by default for most users on 23 October 2026. It works in the Gemini web app and mobile apps, including Android. In the European Economic Area the Connected App starts off and must be turned on manually.

This guide shows the exact steps and prompts that work on Android. It draws only from Google’s Workspace Updates announcement and related Help pages.

![Open notebook and smartphone on a wooden desk](https://images.unsplash.com/photo-1759296844873-e0c694c24284?auto=format&fit=crop&w=800&q=80)

## Confirm the Connected App is active

Open the Gemini app on your Android phone. Tap your profile picture or the gear icon, then go to Settings and find Connected Apps (or Customize > Connectors on the redesigned layout).

Gemini Notebook should appear in the list. Outside the EEA it is on by default. If you are in the EEA, or if you previously turned it off, switch it on.

The same Google Account must be signed in to both the Gemini app and Gemini Notebook (notebook.google.com or the mobile app). Changes sync automatically between them.

For the full setup of the connector itself, see our earlier post: [Connect Gemini Notebook to the Gemini App on Android](/blog/connect-gemini-notebook-gemini-app-android/).

## Create a notebook from chat

Start a new chat or open an existing one. Type `@Gemini Notebook` followed by your request.

Example prompt:

```
@Gemini Notebook Create a Gemini Notebook about solar farm market trends
```

Gemini creates the notebook and confirms the name. You can also say:

```
@Gemini Notebook Create a notebook called Bio 101 Course Notes
```

The new notebook appears in the Gemini app side panel under Notebooks and is available in the standalone Gemini Notebook app.

![Person studying with phone and notes](https://images.unsplash.com/photo-1763568258257-1e70fcf7b629?auto=format&fit=crop&w=800&q=80)

## Add sources and save notes

Once a notebook exists, add material from the same chat.

Prompts that work:

- `@Gemini Notebook Add a copy of this chat to my notebook about Bio 101 course`
- `@Gemini Notebook Add this summary as a source to Solar Market Trends`
- `@Gemini Notebook Update the sources in my US National Parks notebook with the latest link`

You can paste text, reference earlier messages in the chat, or tell Gemini to include a specific section. Gemini files the content as a source so later queries can cite it.

## List notebooks and sources

To see what you already have, ask:

```
@Gemini Notebook Show me a list of all the sources in my notebook about US National Parks
```

Or simply:

```
@Gemini Notebook List my notebooks
```

Gemini returns the titles and, when requested, the sources inside each one. Shared notebooks may return a link that opens in the Gemini Notebook app rather than appearing fully in the chat list.

## Query your notebooks

Ask questions that pull context only from your sources:

```
@Gemini Notebook What do my Gemini Notebooks say about butterfly migration?
```

Or target one notebook:

```
@Gemini Notebook Using my Bio 101 notebook, explain the main points from the last lecture source
```

Answers include citations that point back to the original sources. Gemini can also detect relevant prompts on its own and use the Connected App without the @ mention, though typing `@Gemini Notebook` guarantees the correct tool.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WexPjiptQXU"
    title="Gemini Notebook Full Course: Master NotebookLM 2.0"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Keep Activity on in your Google Account if you want full study and business notebook features. Without it, some memory and sync options stay limited.

In the EEA, enable the Connected App manually under Settings > Connected Apps before the first @ mention.

After you add sources in chat, open the same notebook in the Gemini Notebook app or at notebook.google.com. There you can generate Audio Overviews, quizzes, or slide decks from the material you just filed.

If the @ mention does not trigger the tool, check that the Connected App is enabled and that you are signed in with the same account. Restart the Gemini app if the option is missing after an update.

## What this changes for daily research

You no longer need to switch between the Gemini app and the Notebook app for routine create, add, and query steps. The chat becomes the control surface while the notebook remains the grounded knowledge base.

This is especially useful when you are collecting sources on the go. Capture a summary in chat, file it immediately, then continue the conversation with context from everything already stored.

## Sources

- Google Workspace Updates: Take actions on your notebooks from Gemini Notebook directly in the Gemini app (23 October 2026)
- Gemini Apps Help and Gemini Notebook Help pages on connected apps and notebooks
- Official Gemini Notebook site: notebook.google.com

Try the prompts above in your next research chat. The Connected App is already live for eligible accounts.

## Expand an existing research thread

Open any chat that already contains useful material. Reference the conversation directly:

```
@Gemini Notebook Add a copy of this entire chat as a source to my Market Research notebook
```

Gemini attaches the transcript. You can then ask follow-up questions that cite only that notebook, keeping later answers grounded and free of unrelated chat history.

This workflow is useful after a long brainstorming session. File the key points once, then start a fresh chat that queries the notebook when you need a clean summary.

## Check usage and limits

Gemini Notebook uses compute-based limits similar to the Gemini app. Creating many notebooks or adding large sources in a short time can count against your quota. Free personal accounts have lower ceilings than Google AI Pro or Ultra plans.

If a request fails, wait a short time or reduce the size of the source you are adding. You can always add material later from the standalone Notebook app if chat limits are reached.

## Switch between chat and the Notebook app

After filing sources from chat, open the Gemini Notebook app (or notebook.google.com) and select the same notebook. All sources appear there automatically. From that view you can generate study aids, Audio Overviews, or slide decks that were not available inside the chat interface.

The reverse also works. Sources you add in the Notebook app become available for queries the next time you mention the notebook in Gemini chat.

## Final checklist before you start

- Same Google Account in both apps
- Connected App enabled (manual step in the EEA)
- Activity setting reviewed if you need full memory features
- Clear notebook names so list and query prompts stay accurate

With those steps complete, the @Gemini Notebook command turns ordinary chats into a research control panel. Test it with a small notebook first, then scale to larger projects.
