---
title: "How to Use File Slicing Controls in the Gemini API"
description: "Step-by-step guide to Gemini API file slicing for targeting pages, spreadsheet cells, and media segments to reduce token costs on large files."
pubDate: 2026-11-27T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "developer", "tutorials", "ai-tools", "google"]
noindex: false
---

Google added native file slicing controls to the Gemini API on November 23, 2026. Developers can now upload PDFs, Microsoft Office files, OpenDocument formats, audio, and video once, then request only specific pages, spreadsheet cells, or media segments. Tokens are billed only for the parts the model inspects.<grok type="render_inline_citation" citation_id="154" />

This cuts costs and latency for agents that process long reports, multi-tab workbooks, or recordings. It also removes the need to run local PDF renderers or ffmpeg inside your harness. The controls work across all Gemini 4 models in Google AI Studio and the Gemini platform (Vertex AI).

## Why file slicing matters

Dense documents and media waste tokens when you send the entire file for a focused question. Server-side slicing keeps context tight. You upload once via the Files API, then reuse the URI across turns or function responses. Skim cheaply with text or low-resolution previews, then zoom into charts or frames only where needed.

Existing file size and page limits still apply. Defaults preserve layout for documents (page images) and include values plus formulas for spreadsheets when you omit options.

![Laptop showing code on a desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## Supported controls by media type

**Documents and slides** (PDF, Office, OpenDocument): Set start_page and end_page (1-indexed, inclusive), resolution (low, medium, or high), and content layers (page_text or page_image).

**Spreadsheets** (.xlsx, .xls, .ods): Choose sheet_index, visible_cells range, resolution, and layers (data, formulas, visuals).

**Video**: Specify start_offset and end_offset, fps, resolution (low or high), and layers (transcript, frames, or audio).

**Audio**: Clip with start_offset and end_offset.

You can pass the Files API URI on a user turn or inside a function_result so agents decide slices dynamically.

## Step-by-step: skim then zoom

1. Install the Google GenAI SDK and set your API key.
2. Upload the file once:
```python
from google import genai
client = genai.Client()
doc = client.files.upload(file="quarterly_report.docx")
```
3. Skim as extracted text to locate the section:
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
        {"type": "text", "text": "Which page has the revenue bridge chart?"},
    ],
)
print(skim.output_text)
```
4. Reuse the same URI and inspect only the target page at high resolution:
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
        {"type": "text", "text": "Read the revenue bridge chart and footnotes on page 3."},
    ],
)
print(detail.output_text)
```

This pattern works for spreadsheets (limit to one sheet and cell range) and video (clip a time interval and choose transcript or frames).

![Charts and data visualization](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80)

## Tips for lower token use

- Start with page_text or transcripts for discovery, then switch to page_image or frames only for visual detail.
- Prefer low or medium resolution unless charts or dense layouts require high.
- For agents, let the model request additional slices in later turns via function responses.
- Check official docs for exact parameter names and MIME types, as defaults can change.

If you are already using Gemini 4 models, see our guide on [how to use Gemini 4 Neon](/blog/how-to-use-gemini-4-neon/) for coding workflows that pair well with these file controls.

## Limitations and best practices

File slicing does not remove upload limits or support every format. Always validate results against the source, especially when footnotes or cross-references span pages outside your slice. Test with your own documents before production. Usage still counts against your Gemini API quotas.

## Conclusion

File slicing controls give developers precise control over what Gemini sees. Upload once, inspect only what matters, and pay only for those tokens. The feature is available today in the Gemini API and Google AI Studio for all Gemini 4 models.

## Sources

- Google Blog: [Introducing file slicing controls in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/)
- Google AI for Developers: [Document understanding](https://ai.google.dev/gemini-api/docs/document-processing)
- YouTube: [Gemini API File Slicing Controls](https://www.youtube.com/watch?v=3C9K7B1dnGw)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3C9K7B1dnGw"
    title="Gemini API File Slicing Controls"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
