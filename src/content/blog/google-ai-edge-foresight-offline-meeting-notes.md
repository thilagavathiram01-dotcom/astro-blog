---
title: "How to Use Google AI Edge Foresight for Offline Meeting Notes"
description: "Set up Google AI Edge Foresight on Apple Silicon Macs for free offline meeting transcription, note enrichment, and local knowledge search."
pubDate: 2026-10-10T16:00:00
heroImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "productivity", "google", "tutorials"]
noindex: false
---

Google released AI Edge Foresight on 6 October 2026 as an experimental Mac app. It records meetings, transcribes audio, and turns shorthand notes into polished ones without sending data to the cloud.

The app runs on Apple Silicon Macs and uses local models including EmbeddingGemma 2 and Gemma 4. Your audio, transcripts, and files stay on the device. No subscription is required.

This guide shows how to download it, start a meeting session, enrich notes, and query your local knowledge base.

## What Google AI Edge Foresight does

Foresight listens to system audio and the microphone. It works with Zoom, Google Meet, Teams, or an in-person conversation. The app builds a live transcript while you type short bullets.

It expands those bullets with details from the conversation. You can also point it at local folders, PDFs, Docs, and other files. The assistant answers questions by searching the transcript and your documents.

Everything processes on-device. Google states that recordings, transcripts, and files never leave the computer. The app continues working without an internet connection after the initial model download.

It is free and labeled experimental. Expect updates and possible changes to features.

![MacBook on a wooden desk ready for local AI work](https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80)

## Download and install on an Apple Silicon Mac

Confirm your Mac has an Apple silicon chip (M1 or later). Intel Macs are not supported.

1. Visit the official page at developers.google.com/edge/foresight.
2. Download the installer. The file is roughly 160 MB.
3. Open the disk image and drag the app to Applications.
4. Launch Foresight. On first run it downloads the required models. This step needs an internet connection and can take several minutes depending on your connection. Models include speech components and Gemma variants totaling several gigabytes.

Grant microphone and system audio permissions when macOS prompts you. The app needs these to capture meeting sound.

Once models finish downloading, the interface is ready. You can close and reopen the app offline afterward.

## Start a meeting and enrich notes

Open Foresight before or as your meeting begins. Click to start listening. The app captures both microphone input and system audio so remote participants are included.

While the meeting runs, type short bullets in the note area. Examples: “budget next quarter,” “action: Alex to send slides,” or “decision: launch date moved.”

Foresight matches your bullets against the live transcript and expands them. A rough line becomes a fuller sentence or paragraph that includes context from what was said.

You can review the full transcript side-by-side. Edits you make stay local.

The app also detects spoken questions during the meeting and can surface relevant answers from your connected files or the conversation itself.

Stop the session when the meeting ends. Your enriched notes and transcript remain available for later review.

## Build and search a local knowledge base

Foresight indexes documents you choose. Add project folders, PDFs, Microsoft Office files, plain text, Markdown, or bookmarks.

The index uses EmbeddingGemma 2. Text, images, and audio share one vector space, so a natural-language question can retrieve a diagram, a past transcript, or a spreadsheet note.

Ask questions in the chat panel. Examples include “What did we decide on the API deadline?” or “Show the architecture diagram related to this discussion.”

Responses draw only from your local data. No cloud call occurs.

For deeper technical details on the embedding model itself, see our guide to [EmbeddingGemma 2 for on-device multimodal search](/blog/embeddinggemma-2-on-device-search/).

![Person reviewing notes on a laptop during focused work](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Tips for better results

Speak clearly and reduce background noise when possible. The transcription quality depends on audio clarity.

Use consistent short bullets. The enrichment works best when your shorthand points to specific moments in the conversation.

Organize source folders before a long meeting. Adding large directories takes time to index.

Test with a short practice call first. Confirm permissions and that system audio is captured correctly.

Because the app is experimental, keep important notes backed up elsewhere. Export or copy the final notes to your preferred system.

Check model memory use. Larger Gemma variants need more RAM. Close other heavy apps if the Mac feels slow during long sessions.

## Limitations to know

Foresight currently supports Apple Silicon Macs only. There is no Windows or iPhone version at launch.

Speaker identification is limited. The transcript distinguishes your microphone from system audio but does not automatically name individual remote speakers in multi-person calls.

Language support focuses on English in early reports. Results in other languages may vary.

The first model download is large. Plan for several gigabytes of free disk space.

Features and model sizes can change because the app is experimental.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Google AI Edge Foresight gives Mac users a free, offline way to capture meeting notes and query private files. Local processing with EmbeddingGemma 2 and Gemma 4 keeps audio and documents on the device.

Download the app from the Google developers site, grant the needed permissions, and start with a short test meeting. Expand your shorthand while the transcript builds, then ask questions against the local index.

For teams that handle sensitive discussions, the on-device approach removes the usual cloud transcription step.

## Sources

- Google Developers Blog, “Bring multimodal semantic search to the edge with EmbeddingGemma 2,” 6 October 2026: https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
- Google AI for Developers, Google AI Edge Foresight page: https://developers.google.com/edge/foresight
- Google DeepMind, EmbeddingGemma 2 announcement, 6 October 2026: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google for Developers YouTube, “Introducing EmbeddingGemma 2,” 6 October 2026
