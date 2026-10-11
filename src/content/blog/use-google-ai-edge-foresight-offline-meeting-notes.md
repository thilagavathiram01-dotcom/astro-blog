---
title: "Use Google AI Edge Foresight for Offline Meeting Notes on Mac"
description: "Install and use Google AI Edge Foresight on Mac for private offline meeting notes powered by EmbeddingGemma 2. Step-by-step guide with tips."
pubDate: 2026-10-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "ai", "productivity"]
noindex: false
---

Google released AI Edge Foresight on October 6, 2026, as an experimental Mac app that turns your shorthand meeting notes into polished summaries. It runs entirely on your device using EmbeddingGemma 2 and Gemma 4 models. Your audio, transcripts, and files never leave the Mac.<grok type="render_inline_citation" citation_id="115" />

This matters if you handle sensitive conversations. Cloud note-takers send recordings to remote servers. Foresight keeps everything local, works offline after setup, and costs nothing.

![Person working on a laptop with notes](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What Foresight Does

Foresight listens to system audio and your microphone. It works with Google Meet, Zoom, or in-person meetings. You type quick bullets while the conversation runs. The app expands those bullets with details from the live transcript.<grok type="render_inline_citation" citation_id="115" />

It also detects questions spoken during the meeting and surfaces answers. You can point it at local folders, PDFs, Google Docs, Microsoft Office files, Markdown, and bookmarks. Then ask questions about the meeting or your documents in natural language.

The app is free, experimental, and optimized for Apple Silicon Macs. Intel Macs are not supported. After the initial model download, it runs without an internet connection.<grok type="render_inline_citation" citation_id="115" />

## How to Install Foresight

1. Open the official page at [developers.google.com/edge/foresight](https://developers.google.com/edge/foresight).
2. Click the download link for the macOS installer.
3. Open the .dmg file and drag Foresight into your Applications folder.
4. Launch the app. It will download the EmbeddingGemma 2 and Gemma 4 models. This can take several minutes and several gigabytes of space.
5. Grant microphone and system audio access when macOS prompts you.

You do not need a Google account to start. Signing in only helps if you want to pull from Drive or Calendar.

## Using Foresight During a Meeting

Start a recording session before the call begins. The app captures audio in the background. Type short notes the way you normally would: "budget Q3 slip?" or "follow up with design team."

Foresight enriches those bullets in real time using the transcript. A split view shows your original notes next to the polished version. After the meeting, chat with the assistant about action items, decisions, or related files you indexed earlier.<grok type="render_inline_citation" citation_id="115" />

Live Assistance detects spoken questions and offers answers drawn from the transcript or your local knowledge base. This works without sending data to the cloud.

![Notebook and pen for meeting notes](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)

## Powered by EmbeddingGemma 2

Foresight pairs EmbeddingGemma 2 for retrieval with Gemma 4 for generation. EmbeddingGemma 2 is a 740-million-parameter open model that maps text, images, audio, and video into one 768-dimensional space. It runs efficiently on-device.<grok type="render_inline_citation" citation_id="104" />

Because embeddings stay local, you can search across meeting transcripts and your files with natural language. For more on the model itself, see our guide to [EmbeddingGemma 2 on-device search](/blog/embeddinggemma-2-on-device-search/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Better Results

- Index relevant project folders before the meeting so answers draw from the right documents.
- Keep bullets short and specific. The app fills in context from the transcript.
- Confirm with other participants that you are recording. Local processing does not change consent rules.
- Expect the first launch to take time while models download. Subsequent use is faster.
- The app is experimental. Features may change, and Google has not published exact RAM or macOS version minimums.

## Limitations to Know

Foresight is Mac-only and requires Apple Silicon. There is no Windows or mobile version yet. Transcription quality depends on audio clarity and language. Early users noted strong English performance but variable results in other languages. Model downloads add several gigabytes of storage.<grok type="render_inline_citation" citation_id="121" />

It is labeled experimental, so treat it as a useful tool rather than a permanent production system.

## Conclusion

Google AI Edge Foresight gives Mac users a practical way to capture meeting notes without sending audio or files to the cloud. Download it from the official developers page, grant the needed permissions, and start with a short test meeting. Pair it with local file indexing for the best results.

If you want more on-device AI options, explore EmbeddingGemma 2 demos in the Google AI Edge Gallery app on Android and iOS.

## Sources

- Google Developers Blog: Bring multimodal semantic search to the edge with EmbeddingGemma 2 (October 6, 2026)
- Google Blog: EmbeddingGemma 2: an open, lightweight multimodal embedding model (October 6, 2026)
- Official download page: developers.google.com/edge/foresight
