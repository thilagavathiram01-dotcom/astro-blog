---
title: "How to Use File Slicing Controls in the Gemini API"
description: "Cut token costs with Gemini API file slicing: select pages, sheets, and clips from PDFs, Office files, audio, and video. Step-by-step Python examples."
pubDate: 2026-11-27T16:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "developer"]
noindex: false
---

Agents that process long PDFs, multi-tab workbooks, or hour-long recordings used to burn tokens on every page and every second. Google fixed that on November 23, 2026, with native file slicing controls in the Gemini API.

You upload a file once through the Files API. Then you tell the model exactly which pages, cell ranges, or time segments to inspect. Tokens are billed only for the slices Gemini actually sees. Early tests from LiteLLM showed 67 percent fewer prompt tokens on PDFs and 33 percent fewer on workbooks.

This guide shows how to use the controls with the official Python SDK, including a skim-then-zoom pattern that keeps costs low while preserving detail where it matters.

## What file slicing supports

The feature works across all Gemini 4 models (Carbon, Neon, Hydrogen, Argon) and also Gemini 3 models for documents. It covers:

- PDFs, Word, PowerPoint, and OpenDocument text/slides: page ranges (`start_page`, `end_page`), resolution (low/medium/high), and layers (`page_text` or `page_image`).
- Spreadsheets (`.xlsx`, `.xls`, `.ods`): sheet index and A1-style cell ranges (`visible_cells`), plus data, formula, or visual layers.
- Video: start/end offsets, frame rate, resolution, and layers (transcript, frames, or audio).
- Audio: time interval offsets.

Limits still apply to the full uploaded file (50 MB, up to 2,000 pages for Office files, 1,000 for PDFs). Slicing happens server-side, so you avoid local PDF rendering or ffmpeg work.

![Laptop showing code next to stacked documents](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Set up the SDK

Install the latest `google-genai` package and set your API key:

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key-here"
```

Use the Interactions API. Initialize the client normally; slicing parameters go inside the input content blocks.

## Upload once, slice across turns

Upload the file with the Files API. Reuse the returned URI in later calls or even inside tool results.

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.pdf")
print(doc.uri)  # reuse this
```

## Skim cheaply, then zoom in

A practical pattern is to first extract text from every page (cheap), locate the relevant section, then request a high-resolution image of only those pages.

```python
# Skim as text
skim = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": doc.uri,
            "mime_type": "application/pdf",
            "processing": {
                "type": "static",
                "page_options": {"content_layers": ["page_text"]},
            },
        },
        {"type": "text", "text": "Which page contains the revenue bridge chart?"},
    ],
)
print(skim.output_text)

# Zoom on page 3 at high resolution
zoom = client.interactions.create(
    model="gemini-4-neon",
    input=[
        {
            "type": "document",
            "uri": doc.uri,
            "mime_type": "application/pdf",
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
        {"type": "text", "text": "Describe the revenue bridge chart and its footnotes."},
    ],
)
print(zoom.output_text)
```

The first call sees only extracted text. The second call bills only the tokens for one high-resolution page image.

## Slice spreadsheets and media

For a workbook, target a specific sheet and cell range:

```python
{
    "type": "document",
    "uri": workbook.uri,
    "processing": {
        "type": "static",
        "spreadsheet_options": {
            "sheet_index": 2,
            "visible_cells": "A1:H40",
            "content_layers": ["data", "formulas"],
        },
    },
}
```

For video, clip a short segment:

```python
{
    "type": "video",
    "uri": video.uri,
    "processing": {
        "type": "static",
        "start_offset": "420s",
        "end_offset": "455s",
        "fps": 2.0,
        "content_layers": ["frames", "audio"],
    },
}
```

You can return these sliced blocks inside a `function_result` so an agent decides the next range itself. The model automatically receives total page counts and sheet names, so it can request narrower slices on later turns.

![Developer workspace with code on screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for lower token use

- Prefer `page_text` or transcript layers for discovery, then switch to high-resolution images only for the pages that need visual detail.
- Keep frequent small tools undeferred if you also use Tool Retrieval; pair both features for large agent systems.
- Measure actual token counts in your traffic. Defaults process more than a requested slice when options are omitted.
- Reuse the same Files API URI across an entire conversation or agent loop.

If you are building multi-step agents, see our guide to [building your first agent with ADK](/blog/build-first-agent-adk-agents-cli-gemini-platform/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/mVXrdvXplj0"
    title="Function calling with the Gemini API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

File slicing controls turn large multimodal files into targeted, pay-only-for-what-you-inspect inputs. Upload once, skim with text layers, then zoom with high-resolution slices. The pattern works today in Google AI Studio and the Gemini platform across all Gemini 4 models.

Start with a single PDF or workbook in your existing agent and compare token usage before and after. The savings compound quickly once agents start chaining multiple files.

## Sources

- Google blog: Introducing file slicing controls in the Gemini API (November 23, 2026)
- Google AI Studio documentation on document processing and file inspection options
- Google for Developers announcement and customer reports (Vercel, LiteLLM)
