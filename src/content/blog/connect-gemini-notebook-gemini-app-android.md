---
title: "Connect Gemini Notebook to the Gemini App on Android"
description: "Link Gemini Notebook as a Connected App, create notebooks from chat with @, and keep sources in sync on Android."
pubDate: 2026-09-29T15:00:00
heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Gemini Notebook and the Gemini app now share the same notebooks. Google’s Help page for Android says changes you make in either product sync automatically. That means you can start a project from a chat, then open the same sources later in the Notebook app for quizzes, Audio Overviews, or a slide deck.

The connector is not the same as opening Notebook by itself. You have to attach **Gemini Notebook** as a Connected App, then call it with `@Gemini Notebook` when you want a chat to create, list, or query a notebook. This guide follows Gemini Apps Help and Gemini Notebook Help only.



![Student taking notes on a laptop at a shared table](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80)



## What the connection actually adds

Help describes notebooks in Gemini Apps as a focused space that keeps sources, standing instructions, and the ongoing discussion. Official use cases include trip planning, job applications, exam prep, a new skill, or a business plan.

Once the connector is on, Gemini can do these jobs from a normal chat or task thread:

- Create, edit, or delete a notebook
- Add, update, or delete sources
- List notebooks and their sources
- Answer questions about a notebook

Shared notebooks from Gemini Notebook do not appear in the Gemini app sidebar. Help says Gemini can still return a link. That link opens in the Gemini Notebook app.

The feature is rolling out. Google says it currently works in the Gemini web app at gemini.google.com and the Gemini mobile app. You can also use notebooks in the Gemini app on Mac even if the Connected App entry is missing there.

## What you need first

**Sign in.** Use the same Google Account in Gemini and in Gemini Notebook.

**Keep Activity.** Study notebooks and business notebooks require [Keep Activity](https://myactivity.google.com/product/gemini) to be on. If you only need a plain project notebook, you can still connect the app, but several extras stay locked until Activity is enabled.

**Region.** Gemini Notebook is designed to attach automatically in most regions. In the European Economic Area, Help says you connect it yourself.

**Age and account type.** Skills, study tools, and some voice features have extra limits. Follow the on-screen eligibility text if Gemini blocks a notebook type.

If you already manage other connectors, keep the same account hygiene you use in [How to Connect Apps to Gemini](/blog/connect-apps-to-gemini/).

## Connect Gemini Notebook

You can start from a prompt or from settings.

### From a chat

1. Open the Gemini app on Android and sign in.
2. In a chat or task thread, type a notebook request and include `@Gemini Notebook`.
3. Example: `@Gemini Notebook create a notebook named Calculus midterm and add my uploaded notes.`
4. If the app is not connected, Gemini offers a connect sheet. Follow it.
5. Confirm the notebook name and any source picker before you accept writes.

Help is explicit: you must add `@Gemini Notebook` when you want Gemini to act on notebooks from that thread.

### From Connected Apps

1. Open [gemini.google.com/apps](https://gemini.google.com/apps) on the phone browser, or tap your profile in the Gemini app and open **Connected Apps**.
2. Find **Gemini Notebook**.
3. Turn it on. In the EEA this is the required manual step.
4. Turn it off later from the same page if you want chats to stop touching notebooks.

Disconnecting the Connected App does not always hide notebooks that already exist in the Gemini mobile sidebar. Help documents that leftover list as a known state. Quit and reopen the app after you disconnect if the list still looks live.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PYNclBOEFPM"
    title="How to use Gemini Notebook | Galaxy Z Fold8 Ultra, Fold8, and Flip8 | Samsung"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a notebook inside Gemini

1. Open the Gemini mobile app or gemini.google.com.
2. Tap **Menu** at the top left.
3. Under **Notebooks**, tap **New notebook**.
4. Give it a name you can search later. Course names beat “Notes 3.”
5. Enter a first prompt so the notebook has a job, not just a title.
6. Tap **Add sources** if you already have files Gemini should cite.

Google says source caps depend on your Google AI plan, up to 600 sources. Notebooks cannot use another notebook as a source.

Supported source types in Gemini Apps Help include:

- Files from the device: PDFs, documents, spreadsheets, images, audio, text, and Markdown
- Files from Google Drive
- Website URLs
- Copied text

The standalone Gemini Notebook Android app is narrower on mobile. Its Help page lists PDF, Website, YouTube, Audio File, and Copied Text for the early app. Add Drive-heavy libraries on the web if the phone picker hides a type.

## Chat with the notebook, not a fresh thread

Open the notebook from the Gemini sidebar and stay in that thread. Help says Gemini remembers sources and instructions for that continuous chat. Those chats can still run web search and other Gemini tools.

Use `@Gemini Notebook` again when you start from a generic New chat and need the connector to pick the right book. Vague prompts without the mention often stay in ordinary Gemini memory and never touch your sources.

If you want study artifacts (flashcards, Audio Overviews, infographics), switch to the Gemini Notebook app or the web Studio panel. Those generators live there. The Gemini app connector is for create, source edits, listing, and Q&A.



![Open notebook and laptop on a wooden desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)



## Study notebooks stay on the web for now

Study notebooks need Keep Activity on. They add diagnostic quizzes, short lessons from the quiz result, and progress that updates as you finish activities. Help says they can also produce flashcards and infographics from course files.

Creation path today:

1. Open gemini.google.com on the phone browser.
2. Menu → Notebooks → **New notebook**.
3. Tap **Study and learn.**
4. Tell Gemini the goal in the setup chat. Official examples include ACT or JEE prep and a Calculus midterm.
5. Add notes from the device or Drive with **Add files**.

Help states study notebooks are available at gemini.google.com and **not** in the Gemini mobile app yet. You cannot edit the goal after creation. Start a new notebook if the exam or course changes.

Business notebooks also need Keep Activity. They require a Google Business Profile connected to Gemini Apps.

## Use the Android Notebook app alongside Gemini

Install [Gemini Notebook from Play](https://play.google.com/store/apps/details?id=com.google.android.apps.labs.language.tailwind). Google requires Android 10 or higher. Search for the official listing; the package id is `com.google.android.apps.labs.language.tailwind`.

In that app you can:

- Share a site, PDF, or YouTube video into an existing notebook from Android’s share sheet
- Run Fast Research from the home prompt and import result links
- Generate Audio Overviews, Video Overviews, flashcards, quizzes, infographics, and slide decks in **Studio**
- Download Audio Overviews for offline play inside the app

Voice chat grounded in sources is documented for Google AI Ultra and Pro subscribers, age 18+, on the mobile app. Tap **Audio** on the chat box, speak, and close the session when you are done. Transcripts stay in chat.

Mobile still omits some desktop tools: notes, mind maps, reports, data tables, and chat analytics. Help recommends desktop when you need those.

For a study-first walkthrough of Studio tools, see [How to Use Gemini Notebook Study Tools on Android](/blog/gemini-notebook-study-tools-android/).

## Manage names, pins, and deletes

Help lists the same maintenance actions on Android and web:

- Find notebooks under the Gemini Menu → Notebooks
- Rename from the notebook menu
- Add standing instructions so every reply in that book follows a format
- Pin notebooks you open daily
- Delete a notebook you no longer want; this is a real delete, not a hide

You can add an existing Gemini chat into a notebook when Keep Activity is on. Use that when a long thread already holds the context and you do not want to re-upload files.

## When it fails

**No @Gemini Notebook chip.** The Connected App is off, the rollout has not reached the account, or you are in a surface Help does not list (for example Google Messages, where Connected Apps do not run).

**Study option missing.** You are in the Gemini mobile app. Use gemini.google.com, and confirm Keep Activity.

**Sources do not appear.** Caps differ by plan. The phone app also rejects some file types the web accepts. Add the file on desktop, then reopen the notebook on Android.

**Shared notebook invisible.** Expected. Ask Gemini for the link rather than scanning the sidebar.

**Sync lag.** Notebook Help says device sync can lag. Force-quit the Notebook app and reopen it.

## A tight weekly workflow

Monday: create or reopen one notebook per live project from Gemini Menu.

During the week: `@Gemini Notebook add this Drive doc to Calculus midterm` from whatever chat you are already in.

Commute: open the Notebook app, play an Audio Overview, mark flashcards.

Sunday: pin the two notebooks you still need, delete the one that was a one-off trip plan.

The connector is useful when the chat and the source library stay the same object. Treat `@Gemini Notebook` as the switch that writes to that object. Leave generic Gemini chats for questions that should not land in a course file.

## Sources

- [Organize your projects with notebooks in Gemini Apps (Android)](https://support.google.com/gemini/answer/16972047) — Gemini Apps Help
- [Get started with the Gemini Notebook mobile app](https://support.google.com/gemininotebook/answer/16296687) — Gemini Notebook Help
- [Use chat in Gemini Notebook](https://support.google.com/gemininotebook/answer/16179559) — Gemini Notebook Help
- [New back-to-school features in Gemini Notebook](https://workspaceupdates.googleblog.com/2026/09/new-back-to-school-features-and-learning-tools-available-in-Gemini-Notebook.html) — Google Workspace Updates, 18 Sep 2026
- [How to use Gemini Notebook | Samsung](https://www.youtube.com/watch?v=PYNclBOEFPM) — YouTube
