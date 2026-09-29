---
title: "How to Generate Audio Overviews in Gemini Notebook"
description: "Create Gemini Notebook Audio Overviews: pick Deep Dive, Brief, Critique, or Debate, set language, share, and join interactive mode."
pubDate: 2026-09-29T17:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Gemini Notebook can turn the files you already uploaded into a spoken briefing. Google calls that output an **Audio Overview**: hosts summarize the sources you added, not a generic lecture on the topic.

Google Help is explicit that the clip is meant to reflect the notebook, not the hosts’ opinions. You need **edit access** to generate or delete one. This guide follows the current Help article and the September 2026 Gemini 3.8 Flash TTS rollout that now powers Notebook speech.

## What an Audio Overview is

An Audio Overview is a generated discussion grounded in the sources in that notebook. Deep Dive uses two hosts. The Brief uses one speaker and aims for under two minutes. Critique and Debate also use two hosts, with different jobs.

Google states that Audio Overviews, including the voices, are AI-generated and may contain inaccuracies or audio glitches. Treat the file as a first pass. Keep the sources open while you listen.

Google’s 23 September 2026 TTS post lists **Gemini Notebook** as the consumer surface for **Gemini 3.8 Flash TTS**. That is the studio-grade speech model, not Flash-Lite (Vids). You do not pick the model ID in Notebook. You pick a format, a language, and an optional prompt.

![Over-ear headphones on a desk next to a notebook](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80)

## Requirements

- A Google account that can open [Gemini Notebook](https://notebook.google.com/)
- At least one processed source in the notebook
- **Edit** access if the notebook is shared
- A few minutes. Help says generation can take a couple of minutes
- Web Studio for the full control set. Help notes the mobile app may limit this feature

Do not start from an empty notebook. The hosts only have what you uploaded.

## Generate an Audio Overview

These steps match [Generate Audio Overview in Gemini Notebook](https://support.google.com/gemininotebook/answer/16212820):

1. Open an existing notebook or create a new one and upload sources.
2. Open the **Studio** panel.
3. Select **Audio Overview**.
4. Choose a format:
   - **Deep Dive (default)** — two hosts unpack and connect topics.
   - **The Brief** — one speaker, key takeaways in under two minutes.
   - **The Critique** — two hosts give constructive feedback on material such as an essay or design doc.
   - **The Debate** — two hosts argue opposing views on the topic.
5. Choose a language. Help says you can generate Audio Overviews in 80+ languages. The default follows the preferred language in your Google Account.
6. Set length to **Shorter**, **Default**, or **Longer**. Longer is English only.
7. Optional: type a prompt that names the chapters, audience, or expertise level you want.
8. Generate. Work can continue in the background. You can build other Studio artifacts or leave the screen.

If generation fails, wait until every source shows as ready, then try again. A half-indexed PDF produces a thin briefing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/AmKZCo5Dtn0"
    title="Meet NotebookLM: Research, Reimagined"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick a format that matches the job

Use **The Brief** before a meeting. You want claims, not banter.

Use **Deep Dive** when you have several sources and need connections across them. That is the default two-host conversation.

Use **The Critique** on *your* draft. Upload the essay or design doc as a source so the hosts evaluate that file, not a topic they invent.

Use **The Debate** when the notebook holds opposing papers. If every source agrees, the debate will sound forced.

Write the custom prompt as an instruction, not a topic dump. Examples that stay inside Help’s “focus on specific topics or adjust the expertise level” guidance:

- “Focus on section 3 of the uploaded syllabus. Assume a first-year student.”
- “Compare only the two PDFs on battery safety. Skip marketing pages.”
- “Explain terms as if the listener already took the lab.”

One instruction beats five. Regenerating burns quota.

## Listen, cite, and change speed

Help says you can keep working in the notebook while the overview plays. Use that. When a host makes a claim, open the source and look for the quote.

Playback controls documented in Help:

- Open **More**, then **Change playback speed**.
- Use thumbs up or thumbs down to send feedback.
- Select **View custom prompt** in the three-dots menu next to the artifact if you need to see what you asked for last time.

To reload an older clip in the same notebook: open Studio, find the previous audio, tap **Load**, and wait.

![Person reviewing documents on a laptop with headphones](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80)

## Share or download the file

Help lists three share paths.

**Link.** Generate the overview. In the player, select **Share**. Confirm the notebook is shared with the recipient or set to **Anyone with a link**, and that viewers have **full notebook** access. Copy the Audio Overview link and save.

Public link sharing is for consumer accounts. Help says it is disabled for Workspace Enterprise and Education. Only owners and editors can make generated audio public. Deleting the audio breaks old links.

**Whole notebook.** Share the notebook. Recipients open Studio and play the artifact there.

**Download.** Select **Download**, then send the file. Help warns that Play Books publisher rules can block downloads when an ebook is a source. That limit also shows up in our [Play Books Expert Intelligence guide](/blog/gemini-notebook-expert-intelligence-play-books/).

Shared links do not carry Interactive mode. Recipients hear the original overview. They cannot join the hosts through your link.

## Join Interactive mode (English)

Interactive mode lets you speak to the hosts while the overview runs. Help limits it to **English** and to **newly generated** overviews.

1. Create a new Audio Overview.
2. Select **Interactive mode**.
3. While it plays, select **Join**.
4. When the hosts call on you, ask a question.
5. They answer from your sources, then resume the original track.

Help notes: your voice and transcripts are not stored or shared; there can be a delay after Join or after you speak; glitches can include speaker switches or an extra voice. Rate the session with thumbs up or down.

Use Interactive mode to pin a citation (“which source said that number?”). Do not use it as a substitute for reading the PDF.

## Tips that keep the briefing honest

- Upload the documents you will be tested on. Leave blog roundups out if they dilute the sources.
- Generate **The Brief** first. If it misses a chapter, fix sources before you spend a Deep Dive.
- English **Longer** is the only documented extra-length switch. Other languages use Shorter or Default.
- Mobile can lag the web Studio. Generate on desktop if a control is missing.
- Flash TTS in Notebook is not the same as calling `gemini-3.8-flash-tts` in AI Studio. For custom voices and two-speaker scripts you write yourself, use the API path in [How to Use Gemini 3.8 Flash TTS in AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/).
- Video Overviews are a separate Studio tile. Use them when a diagram matters. Audio is for commute and review.

## Common mistakes

- Generating with edit access missing on a shared notebook.
- Expecting the hosts to know a file that is still processing.
- Sharing a public link from a Workspace Enterprise account. Help says that path is off.
- Downloading from a Play Books notebook and blaming the player when the publisher blocked the file.
- Turning on Interactive mode on an old artifact. Help says it is only for new overviews.

## Conclusion

Open Studio, pick a format, and generate. Deep Dive is the two-host default. The Brief is the two-minute single-speaker recap. Critique and Debate only help when the sources match those jobs.

Leave the sources on screen. Google already warns that the voices can slip. The value is speed plus a pointer back into *your* files, not a replacement for them.

Official steps: [Generate Audio Overview](https://support.google.com/gemininotebook/answer/16212820). Model context: [Gemini 3.8 text-to-speech](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/).

## Sources

- [Generate Audio Overview in Gemini Notebook](https://support.google.com/gemininotebook/answer/16212820) — Gemini Notebook Help
- [Gemini 3.8 text-to-speech says hello](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google, 23 September 2026
- [Gemini Audio speech generation](https://deepmind.google/models/gemini-audio/speech-generation/) — Google DeepMind
- [Meet NotebookLM: Research, Reimagined (YouTube)](https://www.youtube.com/watch?v=AmKZCo5Dtn0) — Google Workspace
