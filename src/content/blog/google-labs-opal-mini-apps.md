---
title: "How to Build AI Mini-Apps with Google Labs Opal (No Code)"
description: "Build and share AI mini-apps in Google Labs Opal using natural language and the visual editor. Remix Gallery templates, add Agent steps, and publish a link."
pubDate: 2026-09-20T14:30:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&h=630&q=80"
---

Most AI chats die after one answer. Google Labs **Opal** turns the same models into a reusable mini-app: collect an input, run one or more generation steps, then show a page, a Google Doc, or a Sheet.

You do not write code. You describe the workflow in plain language, or you wire nodes in a visual editor. Google hosts the result and gives you a share link. Opal launched as a U.S. Labs experiment in July 2025 and is now available in more than 160 countries.

This guide follows Google’s official Opal docs: remix a Gallery app, build one from a prompt, tighten the visual graph, then publish. Treat Opal as an experiment. Flows can fail; keep valuable work in Drive as well.

## What Opal is (and what it is not)

Google describes Opals as AI mini-apps that chain **prompts, model calls, and tools**. Typical building blocks:

- **User Input** — text, file, image, or mixed input shown to the person who runs the app
- **Generate** — a model step (Gemini, image, audio, video, or an **Agent** that picks tools)
- **Output** — a styled web view, or a Google Doc, Slide, or Sheet

Opal is not a general Android APK builder and it is not a replacement for Android Studio or AI Studio’s native-app path. It is a hosted workflow you can share with anyone who has a Google account.

![Laptop on a desk with code-adjacent tools and a notebook](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80)

## What you need

- A personal Google Account (sign in at [opal.google](https://opal.google))
- Access in a supported country (Google expanded Opal past the original U.S. beta to 160+ markets)
- A browser; Opal stores projects in the cloud
- Permission to grant the Labs app the Drive / account access it requests at first sign-in

Workspace or school accounts may be blocked by an admin. If sign-in loops, try a personal account.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/NWNNDvehBIU" title="How to get started on Opal — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Path 1: Remix a Gallery app

Google’s quickstart starts here for a reason. A Gallery Opal already has working nodes.

1. Open [opal.google](https://opal.google) and scroll to **Gallery**.
2. Open an example such as **Blog Post Writer** (topic in, multi-step article out).
3. Click **Remix**. That copies the graph into *your* project. Edits do not change the public original.
4. Open the natural-language bar at the bottom and describe one change. Official example: add a step that generates a 256×256 social image from the banner, then embed that image in the post.
5. Run the app from the preview pane. If a node errors, edit the prompt on that node rather than rebuilding the whole graph.

Remix when you want a known-good skeleton. Create New when the Gallery has nothing close.

## Path 2: Create New with one detailed prompt

1. Click **Create New**.
2. Name the Opal in the top-left so you can find it later.
3. In the natural-language editor, describe the *whole* flow: inputs, decisions, and output format.

Google’s own starter prompts include:

- A date in, a historical event lookup, a generated logo out
- A photo of a math problem in, a concept explanation, then a worked solution after user feedback
- A mood in, a DJ-style track with a spoken intro and YouTube links

Write the prompt like a spec, not a slogan. Include:

- What the user types or uploads
- Whether the app should ask a clarifying question if a field is missing
- Which output you want (web page vs. Doc / Sheet)
- Any style constraint (“plain language, cite the source URL”)

Opal turns that description into linked nodes. Switch to the visual editor and read every Generate prompt before you share the app. The model often expands your one-liner into a longer system prompt; that expansion is where quality lives.

![Close-up of a person planning a digital workflow on a laptop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80)

## Path 3: Edit the visual graph

Use the visual editor when the first draft is close.

1. Select a **User Input** node. Set the field label the end user will see. In Advanced settings, choose text, image, file, or mixed if you need an upload.
2. Select a **Generate** node. Pick a model only when you know you need it (for example an image model for cover art). Otherwise try **Agent**, which can call tools and choose models for multi-step work.
3. Reference earlier nodes in the Generate prompt so the model actually sees the upload or the previous answer.
4. Set **Output** to a web app for a quick demo, or to Docs / Sheets when the result should live in Drive.
5. Add an asset (image, Drive file, YouTube) when you want a consistent look. Google’s meal-plan walkthrough attaches a reference image so later cartoons stay on-style.

Agent steps in later 2026 builds can keep **memory** across runs and route to different tools. Use memory for brand voice or a standing household preference. Do not put secrets in a shared Opal’s memory.

## A concrete mini-app: weekly meal plan

This matches the official “How to get started on Opal” demo from Google Labs PM Megan Li.

Prompt to paste into Create New:

> Build a weekly meal planner. Ask how many people eat and how many nights I will cook. Produce seven dinner ideas with a shopping list grouped by store section. Keep recipes simple, 30 minutes or less. Output a clean web page I can reopen next week.

Then tighten:

1. Confirm the input node asks for **people** and **cook nights**, not a free-form essay.
2. In Generate, require “no duplicate proteins two nights in a row.”
3. Run it twice. If night three always copies night one, add that constraint in the node prompt.
4. Optional remix: “Also write the shopping list into a Google Sheet with columns Item, Quantity, Section.”

Save the Opal. Next Sunday you open the same link instead of starting a new chat.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/NWNNDvehBIU" title="Opal visual editor walkthrough — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Publish and share

1. Run the app yourself with realistic inputs.
2. Click **Share app** (wording may be Share / Publish).
3. Turn on the public or link-sharing toggle when you want other Google accounts to run it.
4. Copy the URL. Recipients land in app mode, not in your editor.

Anyone with the link can consume quota on *your* experiment. Do not publish a flow that emails from your account or writes into a sensitive Drive folder until you understand the permissions Opal requested at sign-in.

Unpublish or delete the Opal if the link leaked wider than you intended.

## Limits worth planning for

- **Experimental.** Nodes fail. Keep a copy of important prompts in a Doc.
- **Not source code.** You cannot export a Kotlin app. For Play Store builds use Android Studio or AI Studio’s Android path.
- **Model menu changes.** Public write-ups list Gemini Flash/Pro, image models such as Nano Banana, audio, Veo, and Lyria. Check the live dropdown; do not assume a model is still there.
- **Admin blocks.** School and work Google Accounts often cannot grant Labs scopes.
- **Accuracy.** A meal plan or interview-prep Opal can invent facts. Read the output before you cook or submit it.

## Conclusion

Opal is useful when you repeat the same AI chore: meal plans, quiz generators, travel one-pagers, blog outlines. Remix a Gallery app or describe the full loop in one prompt, then fix the graph in the visual editor. Hosting and the share link are the point — a chat transcript is not an app.

Start at [opal.google](https://opal.google) and the [Opal quickstart](https://developers.google.com/opal/quickstart). If a control is missing, the Labs experiment may still be rolling out on your account.

## Sources

- [Opal overview](https://developers.google.com/opal) — Google for Developers
- [Opal quickstart](https://developers.google.com/opal/quickstart) — Google for Developers
- [Opal is now available in more than 160 countries](https://blog.google/technology/google-labs/opal-expansion-160/) — Google Blog
- [Introducing Opal](https://developers.googleblog.com/en/introducing-opal/) — Google Developers Blog
- [How to get started on Opal (YouTube)](https://www.youtube.com/watch?v=NWNNDvehBIU) — Google for Developers
