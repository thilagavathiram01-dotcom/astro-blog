---
title: "How to Use File Slicing Controls in Gemini API"
description: "Learn how to use Gemini API file slicing controls to process only specific pages, cells, or segments from PDFs, Office files, audio, and video."
pubDate: 2026-11-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Google added native file slicing controls to the Gemini API on 23 November 2026. Developers can now upload PDFs, Microsoft Office, OpenDocument files, audio, and video once, then request only the pages, spreadsheet cells, or time segments the model needs.

Tokens are billed only for the slices Gemini inspects. This removes the need for local PDF renderers, LibreOffice, or ffmpeg inside agent harnesses.

The feature works across all Gemini 4 models in Google AI Studio and the Gemini platform (Vertex AI). Existing file size and page limits still apply.

## Why File Slicing Matters

Real knowledge work involves dense reports, multi-tab workbooks, and long recordings. Sending entire files wastes context and money.

With server-side slicing you upload once via the Files API and reuse the URI across turns or function responses. Agents can skim cheaply with text or low-resolution layers, then zoom into high-resolution details only where needed.

Partner tests showed significant savings: Vercel reported 14 times fewer tokens when skimming a PDF as text, and LiteLLM cut prompt tokens by 67 percent on a PDF and 33 percent on a workbook.

![Laptop displaying code on a wooden desk](https://images.unsplash.com/photo-1794851171501-9bac87f30d30?auto=format&fit=crop&w=800&q=80)

## Setup Requirements

You need a Gemini API key from Google AI Studio and the official Python or JavaScript SDK.

Install the Python client:

```bash
pip install -U google-genai
```

Set your API key as an environment variable:

```bash
export GEMINI_API_KEY="your-key-here"
```

The Files API stores uploads for 48 hours at no extra cost (up to 2 GB per file, 20 GB per project).

## Step-by-Step: Upload and Slice a Document

Upload a Word document or PDF once. Skim the full file as extracted text to locate relevant pages, then inspect a single page at high resolution.

Here is the official example adapted for a quarterly report:

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.docx")

# 1. Skim the whole document cheaply as extracted text.
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

# 2. Zoom into the target page at high resolution (reusing the same URI).
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

Documents and slides support `start_page`/`end_page`, resolution (low/medium/high), and layers (`page_text` or `page_image`). Defaults without options use layout-preserving page images.

## Handling Spreadsheets and Media

For spreadsheets (.xlsx, .xls, .ods) target a `sheet_index` and `visible_cells` range. Choose layers for data, formulas, or visuals, plus resolution.

Video accepts `start_offset` and `end_offset` (time intervals), frame rate, resolution (low/high), and layers (transcript, frames, or audio). Audio uses the same time offsets.

You can pass the Files API URI inside a function response so agents decide which slice to request next without local processing.

![Multiple monitors showing code in a developer workspace](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Tips for Lower Token Costs

- Always skim first with `page_text` or transcripts before requesting high-resolution images or frames.
- Reuse the same file URI across conversation turns instead of re-uploading.
- Set resolution to low or medium when charts or dense layouts are not required.
- For multi-step agents, let the model specify slices inside function results.
- Check existing limits: 50 MB / 1,000 pages for PDFs, up to 2,000 pages for Office files, 50,000 cells per spreadsheet sheet.

Native Office and OpenDocument support arrived with the same update, so you no longer need conversion steps for common business files.

For related Gemini workflows on Android, see our guide on [building full-stack Android apps with Gemini in AI Studio](/blog/build-full-stack-android-apps-gemini-ai-studio/).

## Watch a Related Tutorial

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WSnSJD1fOXA"
    title="How to Input Image in Gemini AI API Python Latest Tutorial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Developers Blog: [Introducing file slicing controls in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/) (23 November 2026)
- Gemini API documentation on document processing and Files API
- Partner reports from Vercel and LiteLLM on token savings

File slicing is available now in the Gemini API. Upload a large file once, request only the parts you need, and pay tokens solely for what the model inspects. Start with the official Python example above and adapt the page or cell ranges to your documents.
