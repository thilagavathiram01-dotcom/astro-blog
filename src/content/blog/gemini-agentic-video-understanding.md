---
title: "How to Analyze Long Videos With Gemini Agentic Mode"
description: "Turn on Gemini agentic video understanding to cut token use on long clips, find moments, and query YouTube via the Gemini API."
pubDate: 2026-09-25T12:00:00
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Static video analysis still dumps frames into context at a fixed rate. That works for a two-minute clip. It wastes tokens on a lecture, a keynote, or a multi-hour recording.

Google launched **agentic video understanding** on 1 September 2026. Gemini now decides what to watch, at what speed, and through which channel (frames, audio, or transcript). Official figures: up to **88% fewer tokens**, up to **66% lower analysis cost**, and up to **7% higher accuracy** on standard video benchmarks.

This guide shows when to turn the mode on, how to call it, and what to expect from the response.

## What agentic mode changes

Default (static) processing extracts frames at **1 FPS**, adds timestamps each second, and encodes audio at 1 Kbps. Google estimates about **100 tokens per second** of video at low media resolution, or about **300 tokens per second** at high resolution.

Agentic mode does not ingest the whole stream first. The model runs an internal loop: it can pull a transcript slice, jump to a timestamp, raise the frame rate on a burst of motion, then answer. Navigation reasoning counts as **thought tokens**. Frames, audio, and transcript loaded on demand count as **tool-use tokens**.

Supported models in the current docs:

- Gemini 3.8 Flash
- Gemini 3.7 Flash
- Gemini 3.6 Flash
- Gemini 3.5 Flash-Lite

Google’s blog names 3.7 Flash as the best quality-to-cost mix among the models tested at launch. Docs later added 3.8 Flash to the same list.

Use this when you already ship voice agents with [Gemini 3.8 Live](/blog/gemini-3-8-live/). Live is for conversation. Agentic video is for files and YouTube URLs you already have.



![Video editor reviewing a long timeline on a desktop workstation](https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80)



## When to use agentic vs static

Google’s developer docs give a simple rule: start with **agentic** unless the clip is short and you need every frame.

**Choose agentic for:**

- Long-form video (how-tos, lectures, meetings, sports, multi-hour recordings)
- Needle-in-a-haystack questions (“when does the speaker announce pricing?”)
- Counting repeated actions or objects
- Anomaly checks that need a higher FPS only on a short window
- Sub-second moment retrieval that 1 FPS would miss

**Stay on static for:**

- Clips under about five minutes where first-token latency matters more than tokens
- Jobs that must inspect every frame at a fixed rate

Agentic mode can raise **time to first token** on short clips because the model spends a round trip planning what to load. That trade-off is the reason static remains the default.

## Formats and length limits

Gemini accepts `video/mp4`, `mpeg`, `mov`, `avi`, `x-flv`, `mpg`, `webm`, `wmv`, and `3gpp`.

Models with a 1M context window can process videos up to **3 hours** at low media resolution, or up to **1 hour** at high media resolution. YouTube inputs must be **public** (not private or unlisted).

The feature is live for uploads and YouTube URLs in the **Gemini API**, **Google AI Studio**, and the **Gemini Enterprise Agent Platform**. Google says the same efficiency work will reach the Gemini app on Flash and Flash-Lite, and later **Ask YouTube** on the watch page.

## Call agentic mode in the Interactions API

Google’s launch sample uses the Interactions API. Set `processing` to `"agentic"` on the video part.

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.7-flash",
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

Replace the sample URL with a public video you own or have rights to analyze. Keep the prompt specific: name the outcome (three announcements, a timestamp, a count) so the model knows what to hunt for.

When agentic processing is on, the response can include extra parts. Docs describe `tool_call` parts with `tool_type: "MEDIA_PROCESSING"` each time the model requests a segment or transcript. Log those if you need an audit trail of what the model watched.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/HyfhaGNVKUA"
    title="Agentic approaches to processing long videos with Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A practical test plan

Run the same prompt twice—once static, once agentic—on a 20–90 minute file.

1. Upload the file in AI Studio or pass a public YouTube URL.
2. Use a model from the supported Flash list.
3. Ask one retrieval question, one counting question, and one summary question.
4. Compare answer quality, token totals, and time to first token.
5. Keep agentic if tokens drop and the answer still cites the right moment.

Example prompts that match Google’s stated use cases:

- “Give the timestamp of the first product price mention.”
- “How many times does the presenter pick up the demo phone?”
- “List three claims that are shown on screen but not spoken.”
- “Flag any stretch where the feed freezes or the audio drops.”

Do not ask the model to invent quotes that are not in the file. Ground the task in the video you sent.



![Developer workstation with code and analytics on multiple screens](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)



## Tips that keep costs down

**Ask for a moment, not a full recap.** A targeted question lets the model skip most of the file. A “summarize everything” prompt pulls more media than you need.

**Prefer low media resolution first.** High resolution roughly triples the static token rate. Agentic mode still loads frames; start cheap, then raise resolution only on the window that failed.

**Watch thought tokens.** Navigation is not free. If a short clip spends more on planning than on frames, switch that job back to static.

**Keep YouTube public.** Private and unlisted links are rejected. Host a copy if the source cannot be public.

**Treat transcripts as one tool, not the whole answer.** Agentic mode can read audio and frames. Use that when the on-screen slide disagrees with the spoken line.

**Do not send footage you would not store with Google.** Same account and data rules as the rest of the Gemini API apply.

## Limits to plan for

Agentic video understanding is not a live camera stream. For spoken, low-latency sessions with a camera, use the Live models instead.

It is also not video generation. Omni Flash and Veo create new clips. This feature only reads existing media.

Rollout to the consumer Gemini app and Ask YouTube was described as “soon” and “in the coming months” on launch day. API access is the path you can use today.

Accuracy gains in the blog are benchmark averages, not a guarantee on your file. Fast motion still needs the model to resample that window. If a count looks off, ask it to rewatch a tighter timestamp range.

## Conclusion

Agentic video understanding is a processing flag, not a new product. You point Gemini at a file or a public YouTube URL, set `processing` to `agentic`, and let the model load only the transcript, audio, and frames that answer the prompt.

Use it on long videos where static 1 FPS analysis is too expensive or too coarse. Keep static on short, latency-sensitive clips. Measure tokens and answers on your own footage before you change a production pipeline.

## Sources

- [Introducing agentic video understanding with Gemini](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/) — Google
- [Video understanding (Interactions API)](https://ai.google.dev/gemini-api/docs/video-understanding) — Google AI for Developers
- [Video understanding (generateContent API)](https://ai.google.dev/gemini-api/docs/generate-content/video-understanding) — Google AI for Developers
- [Google AI announcements from August 2026](https://blog.google/innovation-and-ai/technology/google-ai-updates-august-2026/) — Google
