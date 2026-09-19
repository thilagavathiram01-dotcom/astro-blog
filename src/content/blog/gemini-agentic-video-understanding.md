---
title: "How to Use Agentic Video Understanding in the Gemini API"
description: "Analyze long lectures and YouTube videos with Gemini’s agentic video mode: pick a Flash model, set processing to agentic, mix modes, and read processing_call steps from official docs."
pubDate: 2026-09-19T15:30:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&h=840&q=80"
---

Static video analysis samples a clip at a fixed rate—usually one frame per second—and dumps those frames into the model’s context. That works for a two-minute demo. It is wasteful on a 90-minute lecture.

**Agentic video understanding** lets Gemini decide *what* to watch, *where* on the timeline, and *which* stream (frames, audio, or transcript) to load. Google announced the mode on 1 September 2026 and documents it on the Gemini API video-understanding pages. This guide stays inside those official steps.

<img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=80" alt="Film camera and production monitor on a set" width="1400" height="800" loading="lazy" />

## What agentic mode changes

Google’s product post says agentic processing pairs Gemini’s reasoning with native video tools. Instead of ingesting the whole file at a fixed FPS, the model searches, scans, and inspects target segments. Official claims for supported Flash models:

- Up to **88%** lower token use
- Up to **66%** lower analysis cost
- Up to **7%** higher quality on long-form video

Those numbers come from Google’s own benchmarks on lectures, how-tos, and multi-hour recordings. Treat them as vendor results, not an independent audit.

The same post lists practical jobs this unlocks: sub-second moment retrieval, better anomaly detection, and more precise counting—without you writing a custom frame sampler.

## Supported models and where it runs

Google documents agentic video on:

- Gemini **3.8 Flash**
- Gemini **3.7 Flash**
- Gemini **3.6 Flash**
- Gemini **3.5 Flash-Lite**

It is available for **uploaded files** and **public YouTube URLs** through the Gemini API in [Google AI Studio](https://aistudio.google.com/) and the Gemini Enterprise Agent Platform.

Start new work on **`gemini-3.8-flash`**. Older Gemini models still do static video; they do not get the agentic loop.

## Agentic vs static: when to pick each

Official guidance is simple:

- **Agentic** — Long videos, or questions that target a specific moment (“When does the speaker mention pricing?”). The model loads only what the prompt needs.
- **Static** (default, 1 FPS) — Short clips under about five minutes, latency-sensitive calls, or cases where you need frame-level coverage of the whole clip.

Clipping intervals (`start_offset` / `end_offset`) and custom frame-rate sampling are **static-only**. If you need a hard crop, use static on that file.

For long or complex prompts, Google recommends streaming (`stream=True`) or background execution (`background=True`) so the connection does not time out while the model walks the timeline.

## Try it first in AI Studio

You do not need a local SDK to see the difference.

1. Open [Google AI Studio](https://aistudio.google.com/).
2. Start a chat with **Gemini 3.8 Flash**.
3. Attach a lecture file or paste a public YouTube URL.
4. Ask a targeted question: “What are the three main arguments, with timestamps?”
5. Enable agentic processing if the UI exposes a processing control (the Interactions API sets `"processing": "agentic"`).

Google’s 2024 developer video still shows the Studio video player and in-video search. The API surface has moved to Interactions + agentic mode, but the player is a useful sanity check before you write code.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Mot-JEU26GQ" title="Building with Gemini: Video understanding — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Upload a file and run agentic processing

Install a current `google-genai` SDK. Google’s cookbook notes **2.21.0 or later** for agentic video.

```python
import time
from google import genai

client = genai.Client()

video_file = client.files.upload(file="path/to/lecture.mp4")

while video_file.state.name == "PROCESSING":
    time.sleep(2)
    video_file = client.files.get(name=video_file.name)

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=[
        {
            "type": "video",
            "uri": video_file.uri,
            "mime_type": video_file.mime_type,
            "processing": "agentic",
        },
        {"type": "text", "text": "What are the three main arguments presented?"},
    ],
)
print(interaction.output_text)
```

The important field is `"processing": "agentic"`. Everything else is a normal file upload: wait until the File API reports `ACTIVE`, then send the interaction.

Confirm the loop actually ran by inspecting `interaction.steps`. Official docs say **`processing_call`** and **`processing_result`** steps appear when the model fetched a segment or transcript. If those steps are missing, you likely stayed on static mode.

<img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=80" alt="Video camera filming on a wooden tripod" width="1400" height="800" loading="lazy" />

## Analyze a public YouTube video

You can skip the File API when the source is already public on YouTube.

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=[
        {
            "type": "video",
            "uri": "https://youtu.be/7Z5Vy9JBANs",
            "processing": "agentic",
        },
        {
            "type": "text",
            "text": "What are the 3 most important announcements in this keynote?",
        },
    ],
)
print(interaction.output_text)
```

Limits from the official page:

- Free tier: no more than **8 hours** of YouTube video per day
- Paid tier: no length-based YouTube cap in the current docs
- Gemini 2.5 and later: up to **10 videos** per request
- Only **public** videos (not private or unlisted)

## Mix modes in one request

A common pattern is “long reference + short query clip.” Process the long file agentically and the short clip statically.

```python
interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=[
        {
            "type": "video",
            "uri": lecture.uri,
            "mime_type": lecture.mime_type,
            "processing": "agentic",
        },
        {
            "type": "video",
            "uri": experiment.uri,
            "mime_type": experiment.mime_type,
            "processing": "static",
        },
        {
            "type": "text",
            "text": "Compare the lecture content with the experiment results.",
        },
    ],
)
```

Use this when you already know the short clip is dense and you want every frame, while the hour-long source only needs a few minutes of evidence.

## Multi-turn follow-ups

Video context can persist across turns.

- **Stateful mode** (`previous`): the server keeps the video. Send the next question.
- **Stateless mode** (`step_list`): copy **all** returned steps—including `processing_call` and `processing_result`—into the next request. Official docs warn that dropping those steps does not always error, but quality on follow-ups drops because the video context is gone. Those replayed steps also count toward input tokens.

Ask timestamps in `MM:SS` form (“What happens at 12:40?”). For a richer dump, ask for audio *and* visual details with timestamps in one prompt.

## Practical prompts that fit the mode

Agentic mode rewards *searchable* questions:

- “List every time a slide shows a dollar figure, with timestamps.”
- “Find the first demo that fails and describe the UI state.”
- “Count how many times a red warning banner appears.”
- “Summarize only the Q&A, not the keynote.”

Avoid “describe the whole video frame by frame.” That is a static job, and you will pay for it.

## Limits and safety notes

- File API max size: **20 GB** paid / **2 GB** free (official table).
- Inline video: under **100 MB** and short clips.
- YouTube: public URLs only.
- Do not send private meeting recordings to a public notebook or an unsecured key.
- Model output can still miss a beat in fast sports or dense UI. Spot-check timestamps before you ship a pipeline.

Google also said agentic video will later power **Ask YouTube** on the watch page. That is a product roadmap item, not something you configure in the API today.

## Conclusion

Agentic video understanding is a processing flag, not a new product login. Point Gemini 3.8 Flash at a long file or a public YouTube URL, set `"processing": "agentic"`, and let the model fetch the minutes that answer the prompt. Use static mode for short, latency-sensitive clips. Read `processing_call` steps to confirm the loop ran, and keep those steps if you continue the conversation without server-side state.

That is enough to replace a homegrown 1-FPS sampler for most lecture, meeting, and keynote workloads.

## Sources

- [Introducing Agentic Video in Gemini](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/) — Google, 1 September 2026
- [Video understanding (Interactions API)](https://ai.google.dev/gemini-api/docs/video-understanding) — Google AI for Developers
- [Video understanding (generateContent)](https://ai.google.dev/gemini-api/docs/generate-content/video-understanding) — Google AI for Developers
- [Agentic video understanding developer guide](https://aistudio.google.com/learn/agentic-video-understanding-with-gemini) — Google AI Studio
- [Gemini cookbook: Video understanding](https://github.com/google-gemini/cookbook/blob/main/quickstarts/Video_understanding.ipynb)
- [Building with Gemini: Video understanding](https://www.youtube.com/watch?v=Mot-JEU26GQ) — Google for Developers
