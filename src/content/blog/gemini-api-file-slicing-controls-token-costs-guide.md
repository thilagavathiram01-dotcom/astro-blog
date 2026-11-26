---
title: "Gemini API File Slicing: Cut Token Costs on Large Files"
description: "Use Gemini API file slicing controls to process only needed pages, cells, or segments from PDFs, Office files, and media for lower token costs."
pubDate: 2026-11-26T19:00:00
heroImage: "https://images.unsplash.com/photo-1763568258239-d3b5c95019af?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google launched native file slicing controls in the Gemini API on November 23, 2026. Developers can now upload PDFs, Microsoft Office files, OpenDocument formats, audio, and video once, then request only specific pages, spreadsheet cells, or media segments. The API handles slicing, rendering, and tokenization server-side and bills tokens only for the parts Gemini inspects.

This change targets real knowledge work with dense reports, multi-tab workbooks, and long recordings. You avoid flattening everything to plain text or loading entire files up front. Upload via the Files API, reuse the URI across turns, and control what the model sees.

## Why File Slicing Matters for Token Costs

Sending a full 100-page PDF or hour-long video wastes tokens on irrelevant sections. File slicing lets you skim cheaply with extracted text or transcripts, then zoom into charts, formulas, or key frames at higher resolution. Existing file size and page limits still apply, and the feature works across all Gemini 4 models in Google AI Studio and the Gemini platform.

The same update adds native upload support for Word, PowerPoint, Excel, and OpenDocument files. No local PDF renderers or ffmpeg steps are required in your agent harness. The API processes the file the way the model expects.

![Developer working on a laptop with code open](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## How File Slicing Works

You pass a Files API URI in a document, video, or audio block and add a processing object. Set type to static and specify options by media type:

- Documents and slides (PDF, Office, OpenDocument): page range with start_page and end_page, resolution (low, medium, or high), and content layers (page_text or page_image).
- Spreadsheets (.xlsx, .xls, .ods): sheet_index for the tab, visible_cells for a range like A1:H50, resolution, and layers (data, formulas, or visuals).
- Video: time interval with start_offset and end_offset, fps, resolution (low or high), and layers (transcript, frames, or audio).
- Audio: time interval with start_offset and end_offset.

Pages are 1-indexed and inclusive. When you omit processing options, documents and slides default to layout-preserving page images. Spreadsheets include evaluated values, formulas, and sheet names across tabs.

The pattern supports multi-turn agents. Upload once, skim with page_text on a fast model, then reuse the same URI for a high-resolution page_image on a stronger model. You can also pass the URI inside a function_result so the agent decides the next slice.

## Step-by-Step: Skim Then Zoom on a Document

Install the Google GenAI SDK and set your API key. Upload a file once:

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.docx")
```

Skim the full document as extracted text to locate a section. Use a cost-efficient model:

```python
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
        {
            "type": "text",
            "text": "Which page has the revenue bridge chart?",
        },
    ],
)
print(skim.output_text)
```

Then zoom into the target page at high resolution, reusing the URI:

```python
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
        {
            "type": "text",
            "text": "Read the revenue bridge chart and footnotes on page 3.",
        },
    ],
)
print(detail.output_text)
```

The first call uses text only. The second inspects one page image. Token use follows the inspected slice, not the full upload.

![Stack of papers and documents on a wooden desk](https://images.unsplash.com/photo-1650347683799-c2e44df2859c?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Spreadsheets, Video, and Agents

For a workbook, switch to spreadsheet_options. Target one sheet and a cell range, then choose data or formulas as needed. This keeps large financial models focused.

For video, clip a short interval and set fps and layers. Pull a transcript first for an overview, then request frames only for the visual details that matter.

In agent workflows, let the model request slices inside tool responses. This avoids local preprocessing and reduces memory use on the client. Combine with thinking levels on models like Gemini 4 Neon or Hydrogen for better instruction following on multi-step file analysis.

Test resolution choices. Low or medium often suffices for text-heavy pages. Reserve high for charts and dense layouts. Check official document processing docs for exact token estimates per resolution.

## Conclusion

File slicing controls make large-file processing practical in the Gemini API. Upload once, inspect only what you need, and pay tokens for the relevant parts. The feature works with Gemini 4 models today in Google AI Studio and the Gemini platform, with native Office and OpenDocument support.

For related API patterns, see our guide on the [Gemini 3.8 Flash API](/blog/gemini-3-8-flash-api-guide/). Start with a small test file to compare full versus sliced token counts on your workloads.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/pZYxPybxovc"
    title="Gemini API Adds File Slicing Controls"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Blog: Introducing file slicing controls in the Gemini API (November 23, 2026)
- Google AI for Developers: Document processing documentation
- Google AI for Developers: File input methods
