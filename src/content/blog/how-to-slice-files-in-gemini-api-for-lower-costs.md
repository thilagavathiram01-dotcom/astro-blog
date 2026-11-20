---
title: "How to Slice Files in the Gemini API for Lower Costs"
description: "Cut token costs by slicing Office files, PDFs, videos, and audio in the Gemini API. Process only the pages or clips you need."
pubDate: 2026-11-20T16:30:00
heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini"]
noindex: false
---

Developers often waste tokens when the Gemini API processes entire large documents or videos for a simple question. The November 18, 2026 update changes that. You can now pass Microsoft Office and OpenDocument files directly and slice them so the model sees only the relevant pages, sheets, cells, time ranges, or content layers.

This works on Gemini 3 and Gemini 4 models, including Hydrogen, Neon, Argon, and Carbon. You pay only for the content you select. Pair it with efficient tool use from our [Tool Retrieval guide](/blog/how-to-use-tool-retrieval-in-the-gemini-api/) for even leaner agents.

## What the slicing feature adds

Before this change, you uploaded a full PDF, Word file, PowerPoint, Excel sheet, video, or audio track. The model processed every page or frame. Token counts rose quickly on long reports or hour-long meetings.

Now the API accepts Word, PowerPoint, Excel, and OpenDocument formats natively. You set a `processing` object on the document, video, or audio block. Options include page ranges, worksheet tabs, cell ranges, start and end offsets for media, frame rates, and content layers such as page images, extracted text, formulas, or video transcripts.

Slicing applies in user prompts and in function responses. Agents can return only the needed slice instead of a full file.

![Laptop showing code and data analysis on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step-by-step: Slice a PDF or Office document

1. Upload the file with the Files API or pass it inline if it is small.
2. In the Interactions API or GenerateContent call, add a document block with the file URI or data.
3. Include a `processing` object set to type `static`.
4. For pages, set `page_options` with `start_page`, `end_page`, and `content_layers` (for example `page_image` or `page_text`).
5. For spreadsheets, use `spreadsheet_options` with `sheet_index`, `visible_cells` range, and layers such as data, formulas, or visual.
6. Send the request with a focused prompt. The model receives only the selected portion.

Example for pages 3–7 of a PDF (using the Interactions API style shown in official docs):

```python
from google import genai

client = genai.Client()
doc = client.files.upload(file="quarterly_report.pdf")

interaction = client.interactions.create(
    model="gemini-4-hydrogen",
    input=[
        {
            "type": "document",
            "uri": doc.uri,
            "mime_type": "application/pdf",
            "processing": {
                "type": "static",
                "page_options": {
                    "start_page": 3,
                    "end_page": 7,
                    "content_layers": ["page_image"],
                },
            },
        },
        {"type": "text", "text": "Summarize the charts and footnotes on these pages."},
    ],
)
print(interaction.output_text)
```

The same pattern works for DOCX, PPTX, and XLSX. DOC, PPT, and ODP files render as page images. ODS files expose the first sheet’s data and formulas.

## Slice video and audio

For video, set `start_offset` and `end_offset` (for example `"420s"` to `"465s"`), an optional `fps` (up to 24), and `content_layers` such as frames. Audio supports time ranges and transcript layers.

This keeps a 60-minute recording from filling the context window when you only need a 45-second segment. Combine it with media resolution settings if you also want to control tokens per frame.

![Analytics dashboard and documents on a desk](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)

## Practical tips for lower costs

Start with the smallest useful slice. Test page images alone versus text plus images to see which answers better for your documents. For spreadsheets, limit visible cells to the relevant range.

Use the Files API for files you will query more than once. Uploaded files last 48 hours. Inline data works for quick tests under the size limits (50 MB for PDFs).

Monitor usage in Google AI Studio logs. Because you pay only for processed content, token bills drop on large knowledge bases and long media.

When building agents, return sliced files from function responses so the model never sees unnecessary pages. This pairs well with deferred tool loading for large tool libraries.

## Watch a related AI Studio overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/fVBpYMZzN-0"
    title="Learn 90% of Google AI Studio’s Advanced Features in Under 25 Minutes (2026)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

File slicing in the Gemini API gives precise control over what the model processes. Pass Office files directly, select pages or time ranges, choose content layers, and pay only for what you need. The feature is available now on Gemini 3 and Gemini 4 models through both the Interactions and GenerateContent APIs.

Test it on a real report or meeting recording today. Check the official document processing and changelog pages for the latest parameter details.

**Sources**
- Google AI Studio Gemini API release notes (November 18, 2026): multimodal file processing and slicing
- Document understanding guide: https://ai.google.dev/gemini-api/docs/document-processing
- Changelog: https://aistudio.google.com/docs/changelog
