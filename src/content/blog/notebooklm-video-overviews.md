---
title: "How to Create Video Overviews in NotebookLM"
description: "Turn PDFs, notes, and links into AI-narrated videos in NotebookLM. Choose Explainer, Short, or Cinematic formats, customize style and language, then share or download."
pubDate: 2026-09-19T11:00:00
tags: ["ai-tools", "notebooklm", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
---

A stack of PDFs is easy to collect and hard to review. **NotebookLM Video Overviews** turn those sources into a narrated video grounded in *your* files, not a generic web summary.

Google’s help docs describe Video Overviews as videos that distill notebook sources into a visual walkthrough. Formats now include **Explainer**, **Short** (~60 seconds), and **Cinematic** (immersive storytelling for eligible accounts). This guide walks through creating one, customizing it, and sharing it without inventing features Google has not documented.

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Laptop and research notes on a desk" width="1400" height="800" loading="lazy" />

## What a Video Overview is (and is not)

A Video Overview is a Studio artifact. NotebookLM reads the sources in the notebook and generates a video with AI narration and visuals drawn from those sources—slides, diagrams, quotes, and numbers when they exist in the files.

It is **not**:

- A replacement for watching a source YouTube lecture end to end
- A guarantee of perfect facts (Google states voices and visuals are AI-generated and can contain inaccuracies or audio glitches)
- Instant on every notebook (generation can take a long time; Google notes it can exceed 30 minutes)

Use it when you need a first pass on a long brief, a study recap, or a shareable explainer for teammates who will not read every PDF.

## Formats you can pick

Google’s current help article lists three format families:

- **Explainer** — Structured, comprehensive overview that connects ideas across sources.
- **Short** — About 60 seconds, meant for a fast grasp of key concepts. Google has also shown short vertical videos powered by its image models for this style of recap.
- **Cinematic** — Richer, more immersive visuals and storytelling. Official product posts say Cinematic Overviews use a mix of Gemini, image, and video models. Help docs restrict Cinematic to users **18+** and **English** narration.

Visual styles such as Classic, Whiteboard, Watercolor, Retro Print, Heritage, Paper-craft, Kawaii, and Anime apply to standard overviews (not Cinematic or Short, per the help page). You can also let NotebookLM auto-select a style or describe a **Custom** look.

## Official walkthrough

Google Workspace’s short introduction is a good orientation before you click Generate.

<div class="video-embed" style="position:relative;width:100%;aspect-ratio:16/9;margin:1.5rem 0;background:#0b0b0b;border-radius:8px;overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/AmKZCo5Dtn0" title="Meet NotebookLM: Research, Reimagined" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

## Step 1: Create a notebook and add sources

1. Open [NotebookLM](https://notebooklm.google.com) and sign in.
2. Create a new notebook or open one you already edit.
3. Add sources: Google Docs and Slides, PDFs, websites, pasted text, audio, or public YouTube URLs.
4. Wait until processing finishes. Generation before indexing produces a thinner video.

You need **edit access** to generate or delete a Video Overview.

**Source hygiene that actually improves the video:**

- Prefer primary docs over marketing pages.
- Keep one topic per notebook when you can.
- Drop duplicate drafts so the narrator is not arguing with an old version.
- If you add YouTube, use public videos whose captions or transcripts exist; NotebookLM grounds answers in those transcripts.

<img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80" alt="Student reviewing notes and a laptop" width="1400" height="800" loading="lazy" />

## Step 2: Generate from the Studio panel

1. Open the **Studio** panel on the notebook.
2. Select **Video Overview**.
3. Optionally set format, language, visual style, and a steering prompt before you generate.
4. Select **Generate**.
5. Leave the tab or keep working. Video Overviews render in the background; you can build other Studio artifacts at the same time.

If the UI offers a customize or pencil control next to Video Overviews, use that instead of regenerating blindly.

### Example steering prompts

Keep the prompt specific to *these* sources:

- “Focus only on the cost and risk sections. Skip company history.”
- “Explain the experiment design for a first-year student. Define every acronym.”
- “Turn the cooking steps into a prep-then-cook sequence. Ignore anecdote paragraphs.”
- “Compare the two policy PDFs. Call out where they disagree.”

Vague prompts (“make it engaging”) waste a long render.

## Step 3: Watch, speed up, and check claims

When the title appears in Studio:

1. Open the Video Overview.
2. Press play.
3. Change playback speed from the **1x** control if you are skimming.
4. Use the slider, rewind, or skip to jump.
5. Use fullscreen when you need to read on-screen text.
6. Use good/bad video feedback if the result is off.

Then go back to chat and ask for citations on any number or quote the video stated. Treat the video as a map, not the archive.

## Step 4: Share or download

Google documents three paths:

**Share a link**

1. Open the player and choose Share.
2. Confirm the notebook is shared with the recipient or set to anyone with the link, with access to the full notebook if required.
3. Copy the Video Overview link.
4. Save the sharing change.

Public sharing of notebooks is for consumer accounts. Workspace Enterprise and Education accounts currently cannot use public notebook sharing, according to Google Help.

**Share the notebook**

Editors and viewers with notebook access can open the same artifact in Studio.

**Download the file**

Use Download in the player, then send the file. Google notes you may be blocked from downloading artifacts if a Play Books ebook is a source and the publisher restricts it.

Deleted videos break old share links.

## Language and age limits

- Set output language in NotebookLM settings so narration and on-screen text follow that language.
- Explainer and Short formats support many languages; Cinematic narration is English-only in the current help article.
- Cinematic Overviews are limited to users 18+.
- Mobile apps have historically lagged the web for generation. Confirm Video Overview on the device you are using; if the control is missing, generate on the web and watch the result in the app once it syncs.

## Practical workflows

**Exam recap.** Upload lecture slides and two papers. Generate a Short overview the night before, then an Explainer for the weekend review.

**Team briefing.** Drop the latest spec, the decision doc, and the incident report. Steer: “Five-minute briefing for engineers who already know the product.” Share the link in the project chat.

**Process video.** Upload a SOP PDF. Steer: “Numbered steps only. Call out safety warnings verbatim.” Download the file for people who cannot open NotebookLM.

**Compare sources.** Two vendor PDFs plus your notes. Steer: “Table-style comparison of price, SLA, and data residency. Do not invent missing numbers.”

## Limits worth planning for

- Generation can take more than half an hour. Start it, then work in chat or another notebook.
- AI visuals can mis-draw a chart that exists correctly in the PDF. Open the source citation.
- More sources is not always better. Ten conflicting drafts produce a muddled narrator.
- Cinematic quality and availability depend on account type and age gates. If you do not see it, use Explainer.
- Do not upload material you are not allowed to process in a Google AI product.

<div class="video-embed" style="position:relative;width:100%;aspect-ratio:16/9;margin:1.5rem 0;background:#0b0b0b;border-radius:8px;overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/6dHmu1GALmA" title="NotebookLM demo — Google Cloud" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

## Conclusion

Create a focused notebook, add the sources you actually trust, pick Explainer, Short, or Cinematic, add a steering prompt that names the audience and the sections to ignore, then generate from Studio and walk away. When the video lands, watch it at speed, check the risky claims in chat with citations, and share a link or a downloaded file.

Video Overviews save the first hour of reading. They do not replace opening the PDF when a number has to be right.

## Sources

- [Generate Video Overviews in Gemini Notebook](https://support.google.com/notebooklm/answer/16454555) — Google Help
- [Video Overviews on NotebookLM get a major upgrade with Nano Banana](https://blog.google/innovation-and-ai/models-and-research/google-labs/video-overviews-nano-banana/) — Google
- [Generate your own Cinematic Video Overviews in NotebookLM](https://blog.google/innovation-and-ai/products/notebooklm/generate-your-own-cinematic-video-overviews-in-notebooklm/) — Google
- [NotebookLM's Video Overviews are now available in 80 languages](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebook-lm-audio-video-overviews-more-languages-longer-content/) — Google
- [What’s new in NotebookLM: Video Overviews and an upgraded Studio](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-video-overviews-studio-upgrades/) — Google
- [Meet NotebookLM: Research, Reimagined](https://www.youtube.com/watch?v=AmKZCo5Dtn0) — Google Workspace
- [NotebookLM demo](https://www.youtube.com/watch?v=6dHmu1GALmA) — Google Cloud
