---
title: "How to Slice Documents in Gemini API for Token Savings"
description: "Cut Gemini API costs by slicing PDFs and spreadsheets. Step-by-step code for developers using file slicing controls."
pubDate: 2026-11-25T22:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "developer", "tutorials", "how-to", "ai"]
noindex: false
---

Google launched native file slicing controls in the Gemini API on November 23, 2026. Developers can now upload large PDFs, Office files, spreadsheets, audio, or video once and instruct the model to process only selected pages, cell ranges, or time segments. The API bills tokens solely for the content Gemini inspects.

This approach lowers costs for agents that handle reports, models, or recordings. It eliminates local rendering tools like PDF converters or ffmpeg.

## Why document slicing reduces costs

Full-document processing inflates token counts. A multi-page PDF at medium resolution can use thousands of tokens when only a single chart or section matters. Spreadsheets with multiple tabs create similar waste.

Slicing lets you upload via the Files API. Subsequent requests specify exact ranges. The server handles rendering and tokenization for only those parts. Early reports from users showed up to 67 percent fewer prompt tokens on PDFs and 14 times fewer tokens when using text layers instead of full images.

The feature supports all Gemini 4 models and works with Gemini 3 for documents and spreadsheets. Standard file size and page limits still apply to uploads.

![Developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Set up the Files API upload

Upload the complete file once. The resulting URI remains usable for 48 hours across multiple interactions.

```python
from google import genai

client = genai.Client()
document = client.files.upload(file="annual_report.pdf")
```

Include the URI in a document block and add a processing configuration for the desired slice.

## Control pages and content layers

For PDFs, Word, PowerPoint, and OpenDocument files, set:

- start_page and end_page (1-indexed, inclusive)
- content_layers: page_text for cheap extraction or page_image for rendered views
- resolution: low, medium, or high

Start with text to locate relevant sections, then request high-resolution images only for specific pages.

```python
# Locate the relevant section with text
skim_response = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": document.uri,
            "mime_type": document.mime_type,
            "processing": {
                "type": "static",
                "page_options": {"content_layers": ["page_text"]},
            },
        },
        {"type": "text", "text": "Which pages cover the Q3 revenue analysis?"},
    ],
)

# Inspect one page at high resolution
detail_response = client.interactions.create(
    model="gemini-4-neon",
    input=[
        {
            "type": "document",
            "uri": document.uri,
            "mime_type": document.mime_type,
            "resolution": "high",
            "processing": {
                "type": "static",
                "page_options": {
                    "start_page": 12,
                    "end_page": 12,
                    "content_layers": ["page_image"],
                },
            },
        },
        {"type": "text", "text": "Extract the key metrics from the chart."},
    ],
)
```

The model receives page counts, enabling it to request additional ranges in follow-up turns.

![Laptop screen displaying data charts and graphs](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Handle spreadsheets and cell ranges

Spreadsheets support sheet_index and visible_cells ranges in A1 notation. Content layers include data, formulas, and visual elements.

```python
workbook = client.files.upload(file="budget_model.xlsx")

analysis = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": workbook.uri,
            "mime_type": workbook.mime_type,
            "processing": {
                "type": "static",
                "spreadsheet_options": {
                    "sheet_index": 1,
                    "visible_cells": "B2:G30",
                    "content_layers": ["data", "formulas"],
                },
            },
        },
        {"type": "text", "text": "Verify the sum formulas in the selected range."},
    ],
)
```

This keeps context focused on the active sheet and cells.

## Clip video and audio segments

For video, specify start_offset and end_offset along with fps and resolution. Layers can include transcript, frames, or audio. Audio files use the same time offsets.

Agents can request only the relevant portion of a long recording without processing the full file.

## Practical tips for agents

1. Begin with page_text or transcripts to identify sections before requesting images or frames.
2. Reserve high resolution for pages containing charts or dense visual information.
3. Reuse the same file URI across turns to avoid repeated uploads.
4. Combine with function calling so the model can decide which slices to request next.
5. Track token usage in your logs to confirm savings on real traffic.

Native support for Office and OpenDocument formats arrived with the same update, removing the need for conversion steps.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/P68moBUMFOg"
    title="Gemini API: How to integrate advanced AI into YOUR apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Start using file slicing

File slicing controls are available now in the Gemini API via Google AI Studio and Vertex AI. Consult the official document processing documentation for complete parameter details.

Add slicing to existing agent workflows that process documents and measure the difference in token consumption. For strategies on managing large tool sets, review our guide on [Tool Retrieval in the Gemini API](/blog/how-to-use-gemini-api-tool-retrieval/).

Sources:
- Google Developers Blog: Introducing file slicing controls in the Gemini API (November 23, 2026)
- Gemini API documentation: Document understanding and customize document processing
- Google AI Studio release notes
