---
title: "How to Use File Slicing Controls in the Gemini API"
description: "Learn how to slice PDFs, spreadsheets, and videos in the Gemini API to cut token costs. Step-by-step with code for developers."
pubDate: 2026-11-24T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "developer", "tutorials", "how-to", "ai"]
noindex: false
---

Google added native file slicing controls to the Gemini API on November 23, 2026. You can now upload a large PDF, spreadsheet, or video once and ask the model to inspect only specific pages, cells, or time segments. Tokens are billed only for the slices Gemini actually sees.

This cuts costs and latency for agents that process reports, financial models, or recordings. It also removes the need to run local PDF renderers or ffmpeg in your harness.

## Why file slicing matters

Large documents and media files dominate token usage in knowledge work agents. A 100-page PDF rendered at medium resolution can consume tens of thousands of tokens even if you only need one chart. Spreadsheets with multiple tabs and video files add similar overhead.

With slicing, you upload once via the Files API. On later turns you specify page ranges, cell ranges, or time offsets. The server renders and tokenizes only the requested parts. Early adopters reported 14x fewer tokens when skimming text versus full page images and 67% lower prompt tokens on PDFs.

The feature works across all Gemini 4 models (Hydrogen, Neon, Argon, Carbon) and also supports Gemini 3 models for documents and spreadsheets. Existing file size and page limits still apply to the uploaded file.

![Laptop showing code and documents on a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Upload once, slice across turns

Use the Files API to upload the full file. The URI stays valid for 48 hours and can be reused in multiple interactions.

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.docx")
```

Pass the URI in a document content block and add a processing object to control the slice.

## Slice documents and slides

For PDFs, Word, PowerPoint, and OpenDocument files you control:

- `start_page` and `end_page` (1-indexed, inclusive)
- `content_layers`: `page_text` (cheap extracted text) or `page_image` (rendered pages)
- `resolution`: `low` (~280 tokens/page), `medium` (~560), or `high` (~1,120)

Skim first with text, then zoom into charts at high resolution.

```python
# Skim the whole document as extracted text
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
        {"type": "text", "text": "Read the revenue bridge chart and footnotes."},
    ],
)
```

The model also receives total page counts so it can request follow-up ranges in later turns.

![Spreadsheet and charts on a computer screen](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Slice spreadsheets

For .xlsx, .xls, and .ods files use `spreadsheet_options`:

- `sheet_index`: 1-indexed tab
- `visible_cells`: A1-style range such as "A1:H50"
- `content_layers`: `data`, `formulas`, and/or `visual`

```python
workbook = client.files.upload(file="financial_model.xlsx")

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": workbook.uri,
            "mime_type": workbook.mime_type,
            "resolution": "high",
            "processing": {
                "type": "static",
                "spreadsheet_options": {
                    "sheet_index": 2,
                    "visible_cells": "A1:H50",
                    "content_layers": ["data", "formulas", "visual"],
                },
            },
        },
        {"type": "text", "text": "Audit the EBITDA formulas and chart."},
    ],
)
```

## Video and audio clipping

Video supports `start_offset` and `end_offset` (time intervals), fps, resolution (`low` or `high`), and layers (`transcript`, `frames`, or `audio`). Audio supports the same time offsets.

This is useful for long meeting recordings or product demos where you only need a specific segment.

## Tips for lower costs

1. Skim with `page_text` or transcripts first. These are much cheaper than rendered images or frames.
2. Request high resolution only for pages or frames that contain charts, dense layouts, or important visuals.
3. Keep the most-used tools and frequent file sections loaded; defer the long tail if you also use Tool Retrieval.
4. Measure token usage on your traffic. Early data showed large reductions, but results depend on your file mix.
5. Pass sliced content inside function responses so agents can decide what to inspect next without extra client-side rendering.

Native Office and OpenDocument support arrived with the same update, so you no longer need to convert everything to PDF before upload.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/YtHdaXuOAks"
    title="Guide to Agentic AI – Build a Python Coding Agent with Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Get started

File slicing is available now in the Gemini API through Google AI Studio and the Gemini platform (Vertex AI). Full details live in the document processing and video understanding guides.

If you are already building agents that process documents or media, add slicing to your next interaction and compare token counts. For related techniques on managing large tool libraries, see our guide on [Tool Retrieval in the Gemini API](/blog/how-to-use-gemini-api-tool-retrieval/).

Sources:
- Google blog: Introducing file slicing controls in the Gemini API (November 23, 2026)
- Gemini API docs: Document understanding – Customize document processing
- Google AI Studio documentation
