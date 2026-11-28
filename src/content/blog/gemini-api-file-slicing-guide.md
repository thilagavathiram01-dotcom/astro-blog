---
title: "Gemini API File Slicing: Cut Token Costs on Large Files"
description: "Learn how Gemini API file slicing lets you process only specific pages, sheets, and clips to slash token costs on PDFs and media."
pubDate: 2026-11-28T10:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "developer"]
noindex: false
---

Large PDFs, multi-tab spreadsheets, and long videos used to force you to send every page or frame to Gemini. That inflated token bills and slowed responses. On November 23, 2026, Google added native file slicing controls to the Gemini API.

You now upload a file once, then tell the model exactly which pages, cells, or time ranges to inspect. Billing covers only the slices the model actually sees. This works across all Gemini 4 models (Hydrogen, Neon, Carbon) and supports PDFs, Microsoft Office, OpenDocument formats, audio, and video.

![Developer workspace with multiple monitors showing code](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## What File Slicing Actually Does

Previously, agents often ran local tools like LibreOffice or ffmpeg just to crop files before sending them. Server-side slicing removes that step. You pass a Files API URI and processing options. The API renders and tokenizes only the requested parts the way the model expects to see them.

Key benefits include:

- Upload once, reuse the same URI across turns and function calls.
- Skim cheaply with text extraction or low resolution, then zoom into charts or frames at high resolution.
- Control token spend precisely for production workloads.

Existing limits still apply: PDFs up to 50 MB or 1,000 pages, larger files up to 2 GB via the Files API.

## How to Slice Documents and Slides

Start by uploading the file with the Files API. Then pass processing options when you create an interaction.

Here is the official pattern for a Word document. First skim every page as extracted text to find the relevant section. Then request only page 3 at high resolution as an image:

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.docx")

# Skim cheaply as text
skim = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": doc.uri,
            "mime_type": doc.mime_type,
            "processing": {
                "type": "static",
                "page_options": {"content_layers": ["page_text"]},
            },
        },
        {"type": "text", "text": "Which page has the revenue bridge chart?"},
    ],
)

# Zoom into page 3 at high resolution
detail = client.interactions.create(
    model="gemini-4-neon",
    input=[
        {
            "type": "document",
            "uri": doc.uri,
            "mime_type": doc.mime_type,
            "resolution": "high",
            "processing": {
                "type": "static",
                "page_options": {
                    "start_page": 3,
                    "end_page": 3,
                    "content_layers": ["page_image"],
                },
            },
        },
        {"type": "text", "text": "Read the revenue bridge chart and footnotes on page 3."},
    ],
)
```

For PDFs and slides you can set `start_page` / `end_page`, resolution (`low`, `medium`, `high`), and content layers (`page_text` or `page_image`). Defaults preserve layout with page images when you omit options.

## Spreadsheets, Video, and Audio Controls

Spreadsheets (.xlsx, .xls, .ods) let you pick a `sheet_index`, a cell range via `visible_cells`, resolution, and layers such as data, formulas, or visuals.

Video supports `start_offset` and `end_offset` (time intervals), fps, resolution (`low` or `high`), and layers (transcript, frames, or audio). Audio clips use the same time offsets.

| Media Type | Key Controls | Token-Saving Tip |
|------------|--------------|------------------|
| Documents & slides | start_page, end_page, resolution, content_layers | Skim with page_text, zoom with page_image |
| Spreadsheets | sheet_index, visible_cells, resolution, layers | Extract formulas or data only |
| Video | start_offset, end_offset, fps, resolution, layers | Use transcript first, then frames |
| Audio | start_offset, end_offset | Clip only the relevant segment |

These options also work inside `function_result` responses, so agents can decide what to inspect next without extra client-side work.

![Close-up of a mechanical keyboard under RGB lighting](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Production Use

Measure token usage before and after slicing on your own files. Official guidance notes that early adopters in agent frameworks saw direct reductions in prompt token spend.

Upload once and reuse the URI. This avoids repeated transfers and keeps latency low. Start with cheap layers (text or transcripts) to locate relevant content, then spend high-resolution tokens only where visual detail matters.

If you already process documents with Gemini, review the updated document processing docs for the full option schema. Pair slicing with existing Gemini features such as structured output or tool calling for cleaner pipelines.

For related guidance on analyzing data with Gemini, see our post on [analyzing data with Gemini and BigQuery](/blog/analyze-data-gemini-bigquery-step-by-step/).

## Watch a Gemini API Tutorial

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z8F6FvMrN4o"
    title="Master the Gemini API: A Node.js tutorial with real examples"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

File slicing controls give developers precise control over what Gemini inspects. You keep context focused, pay only for relevant tokens, and avoid local preprocessing. The feature is available today in the Gemini API via Google AI Studio and the Gemini platform for all Gemini 4 models.

Start with a single large document in your current workflow. Upload it once, skim as text, then request only the pages or sheets you need. The token savings appear immediately on the next bill.

**Sources**

- [Introducing file slicing controls in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/) (November 23, 2026)
- [Document understanding – Gemini API docs](https://ai.google.dev/gemini-api/docs/document-processing)
- [Files API documentation](https://ai.google.dev/gemini-api/docs/files)

Ready to cut your Gemini token costs? Upload a large file today and try the slicing options in Google AI Studio.
