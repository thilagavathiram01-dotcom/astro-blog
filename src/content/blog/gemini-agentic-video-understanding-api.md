---
title: "Set Up Gemini Agentic Video Understanding in the API"
description: "Use Gemini agentic video understanding in the API to cut tokens on long clips. Set processing mode, pick a model, and query YouTube."
pubDate: 2026-10-07T06:35:00
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Long videos burn tokens when a model samples every second. Google’s agentic video understanding lets Gemini decide which frames, audio, and transcript slices to inspect, instead of ingesting the whole file at a fixed rate.

Google launched the feature on 1 September 2026 for the Gemini API in Google AI Studio and the Gemini Enterprise Agent Platform. The [announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/) reports up to 88% lower token use, up to 66% lower analysis cost, and up to 7% higher accuracy versus static processing on standard video benchmarks. Those gains show up most on clips longer than about 10 minutes.

This guide covers when to turn the mode on, how to call it, and how to keep requests reliable.

## Static sampling versus an agentic pass

Static video processing is still the default. Gemini samples frames at 1 frame per second unless you change that rate. That works for short clips where you need a uniform look at every second.

Agentic video understanding adds an internal loop. The model can pull a transcript, fetch selected frames at a chosen rate, and inspect audio, then repeat until it can answer. Google lists four jobs this handles better than a flat sample: sub-second moment retrieval, search across multi-hour files, anomaly checks that need a higher frame rate on a short window, and counting repeated actions or objects.

The [video understanding docs](https://ai.google.dev/gemini-api/docs/video-understanding) say to start with agentic mode when you care about quality or token use on long video. Keep static mode for latency-sensitive queries on clips under five minutes, or when you need frame-level coverage of the entire file.

Supported models on the API docs include Gemini 3.8 Flash, 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite. The September launch post named 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite. Confirm the model id in AI Studio before you ship a client.

![Editor reviewing a timeline on a monitor](https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80)

## What you need before the first call

Create an API key in Google AI Studio and set `GEMINI_API_KEY` in your environment. Install a current Google GenAI SDK. The Python examples below use `google-genai` and the Interactions API.

You can send video four ways:

- Files API: up to 20 GB on paid tier, 2 GB on the free tier. Best for files over 100 MB or clips you will query more than once.
- Cloud Storage registration: 2 GB per file, with no overall storage cap listed for registered files.
- Inline data: under 100 MB, and only practical for short one-off clips. Keep the full request under 20 MB if you skip the Files API.
- Public YouTube URLs. Private and unlisted videos are not accepted.

Wait until an uploaded file reports `ACTIVE` before you ask a question. Poll every few seconds. A `FAILED` state means the upload did not process.

If you already call Gemini 3.8 Flash for text, the same key works here. The request shape is the part that changes. See the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/) for key setup and model naming if this is your first Interactions call.

## Query a public YouTube video

A YouTube URL is the fastest way to test the mode. Set `processing` to `agentic` on the video part. Omit that field and the call stays on static sampling.

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    input=[
        {
            "type": "video",
            "uri": "https://youtu.be/ytjgy30Cono",
            "processing": "agentic",
        },
        {
            "type": "text",
            "text": "List the tools the speaker says the model can call, and why each one saves tokens.",
        },
    ],
)

print(interaction.output_text)
```

The official launch sample used `gemini-3.7-flash` and a public keynote URL with the same `processing` field. Ask for timestamps when you need a cut list. Ask for a count when you care about repeated motion. Vague prompts such as “tell me about this video” give the model less reason to zoom in.

## Upload a local file, then run agentic mode

Local files need the Files API first. This pattern uploads an MP4, waits until it is active, then runs an agentic question in the background so a long pass does not drop the connection.

```python
from google import genai
import time

client = genai.Client()

video = client.files.upload(file="lecture.mp4")
while not video.state or video.state.name != "ACTIVE":
    time.sleep(5)
    video = client.files.get(name=video.name)

interaction = client.interactions.create(
    model="gemini-3.8-flash",
    background=True,
    input=[
        {
            "type": "video",
            "uri": video.uri,
            "mime_type": video.mime_type,
            "processing": "agentic",
        },
        {
            "type": "text",
            "text": "What are the three main arguments, with approximate timestamps?",
        },
    ],
)
print(interaction.id)
```

Google’s docs recommend streaming or background execution when agentic processing on a long file takes longer than a normal request. Background mode keeps the job alive and can surface intermediate steps instead of timing out the HTTP call.

On Gemini Enterprise Agent Platform, the same idea is a part field: set `mediaProcessing` to `AGENTIC` (or `media_processing="agentic"` in the Python SDK). Sources there include YouTube URLs, Cloud Storage URIs, and inline base64 video. Agentic mode is off by default. Static remains the fallback.

![Developer working through a coding task on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prompt patterns that use the loop

Write the question so a targeted lookup is cheaper than watching everything.

1. Name the moment. “Find the first time the presenter shows a chart, and quote the sentence that introduces it.”
2. Bound the count. “How many times does the door open between 00:12:00 and 00:18:00?”
3. Ask for evidence. “Return the timestamp and a one-line visual description for each match.”
4. Split broad jobs. Summarize chapters first, then run a second agentic call on the chapter that matters.

Do not expect agentic mode to beat static sampling on a 30-second clip. The tool loop adds latency. Use it when the file is long or the answer sits in a small slice of frames, speech, or audio.

## Practical limits and checks

Token and cost figures from the launch post are upper bounds across benchmarks, not a guarantee on your file. Measure one static call and one agentic call on the same prompt before you switch a pipeline.

Public YouTube only. If the video is unlisted, upload it through the Files API instead.

Paid and free tiers differ on file size. A 2 GB cap on the free tier will reject a long 4K upload. Transcode to a smaller MP4 if you only need speech and a readable picture.

Google said in September that the same capability would reach the Gemini app on Flash and Flash-Lite models, and that it would later ground YouTube’s Ask YouTube answers in visuals. Those product rollouts are separate from the API flag. Your app should set `processing` explicitly rather than assume a consumer surface has it.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ytjgy30Cono"
    title="Agentic video understanding in Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Ship a small evaluation before production

Pick three videos you already know well: a short demo, a 15-minute talk, and one file over an hour. Run the same three questions in static and agentic mode. Log tokens, latency, and whether the timestamps match your notes.

Keep static mode as the path for previews under five minutes. Route lectures, support recordings, and match footage through agentic mode with background execution. Store the file URI and reuse it. Re-uploading the same MP4 on every request wastes the Files API quota and adds wait time.

Agentic video understanding does not replace a human editor. It does remove the old tradeoff between “sample everything” and “hope the important frame was in the 1 FPS grid.”

## Sources

- Google blog, 1 September 2026: [Introducing agentic video understanding with Gemini](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/)
- Gemini API docs: [Video understanding](https://ai.google.dev/gemini-api/docs/video-understanding)
- Google Cloud docs: [Video understanding on Gemini Enterprise Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/video-understanding)
- Google for Developers: [Agentic video understanding in Gemini](https://www.youtube.com/watch?v=ytjgy30Cono)
