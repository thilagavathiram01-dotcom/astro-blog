---
title: "How to Use Google AI Edge Foresight for Offline Notes on Mac"
description: "Set up Google AI Edge Foresight, the free on-device Mac app that expands your shorthand into full meeting notes using EmbeddingGemma 2 and Gemma 4."
pubDate: 2026-10-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "productivity", "google"]
noindex: false
---

Google AI Edge Foresight turns your rough meeting bullets into polished notes without sending audio or documents to any server. Released in early October 2026 as an experimental Mac app, it runs EmbeddingGemma 2 and Gemma 4 entirely on your machine.

You type short reminders while the app listens. It fills in the details from the live transcript. Questions asked out loud can pull answers from your local files. Nothing leaves the device after the initial model download.

## What Google AI Edge Foresight does

Foresight is a local meeting companion from the Google AI Edge team. It captures system audio and the microphone so it works with Google Meet, Zoom, or in-person conversations. No specific video platform is required.

Three features stand out. Live Notes Enhancement expands the shorthand you type into complete sentences using the transcript. Ambient Audio Query Detection (Live Assistance) spots questions in the conversation and surfaces answers from your knowledge base. After the meeting you can chat with the assistant about the notes and any linked documents.

The models stay on the Mac. EmbeddingGemma 2 (740 million parameters) handles retrieval across text, images, audio, and video. Gemma 4 generates the expanded notes and answers. Google describes the app as optimized for Apple Silicon with a light footprint once the models are loaded.

![Laptop and notebook on a desk ready for a meeting](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)

## Requirements and download

You need a Mac with Apple Silicon (M-series chip). Older Intel Macs are not supported. macOS 14.2 or later is recommended based on early reports. A Google account is optional; sign in only if you want to pull files from Drive or see Calendar reminders.

Download the free app from the official page at developers.google.com/edge/foresight. Open the .dmg, drag Foresight to Applications, and launch it. The first run downloads speech, embedding, and language models. Expect several hundred megabytes for the smaller models plus roughly 3 GB for the language model on a typical setup. The process takes several minutes on a fast connection.

Grant microphone and system audio recording permissions when macOS prompts you. Without those permissions the app cannot hear the meeting.

## Step-by-step setup

1. Download and install Foresight from the Google AI Edge developers page.
2. Launch the app and allow the model download to finish. Choose the model size that fits your Mac’s memory if prompted.
3. Open System Settings → Privacy & Security and confirm Microphone and Screen & System Audio Recording access for Foresight.
4. Optionally sign in with a Google account to connect Drive folders or Calendar.
5. Point the app at local folders, PDFs, Docs, Office files, Markdown, or bookmarks you want available as a knowledge base.
6. Start a test recording to confirm audio capture and transcription quality.

Once the models are downloaded, subsequent launches are fast. The app stays local even if you later disconnect from the internet.

## Using Foresight during a meeting

Open the app and press Start transcribing before the call begins. It does not auto-detect meetings, so you must start it manually. While people talk, type only the fragments you care about: a name, a number, “follow up on pricing,” or “deadline Friday.”

Foresight uses the live transcript to expand those fragments into full notes in real time. You see your original shorthand beside the enriched version. Live Assistance watches for spoken questions and can surface relevant passages from your local documents without you switching apps.

After the meeting ends, stop the recording. The polished notes remain on the device. You can ask follow-up questions such as “What did we decide about the budget?” or “Summarize the action items with owners.” The assistant grounds its answers in the transcript and any files you added.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Re0Yfm_lpLc"
    title="Google AI Edge Foresight Explained: Google's Free Offline Meeting Notes App for Mac"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Build a useful knowledge base

The retrieval power comes from the files you point Foresight at. Supported formats include PDFs, Google Docs (via Drive), Microsoft Office files, plain text, Markdown, and web bookmarks. You can also include diagrams and calendar details.

Add project folders that contain the documents most likely to come up in meetings. Label sources if the interface allows so you can filter later. Because EmbeddingGemma 2 is multimodal, the app can surface relevant clips or pages even when your query is spoken or typed in plain language.

Keep the knowledge base focused. A few high-value folders produce better results than an entire hard drive. Update the folders when a project changes so answers stay current.

![Modern office desk with laptop open for work](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Tips for better results

- Type the key terms you want preserved (names, amounts, dates) so the expansion does not invent them.
- Start the transcription a minute early to catch introductions and agenda items.
- Test Live Assistance with a known document before an important meeting.
- Review the enriched notes immediately after the call while the context is fresh and correct any misheard names.
- Pair Foresight with reusable Gemini Skills for the follow-up writing you do after meetings. Our guide on [creating and using Gemini Skills](/blog/how-to-create-use-gemini-skills/) shows how to turn repeated post-meeting tasks into one-command workflows.

Language support is limited in the experimental build. English works reliably; other languages may vary. There is no obvious language switch in early versions of the app.

## Limitations to know

Foresight is experimental. Google has not published a formal general-availability date or a detailed FAQ on the developers page. Battery impact is described as light once models are loaded, but long meetings still consume power.

The app does not automatically start when a calendar event begins. You must press the button. Model download size is significant on first launch. Intel Macs and non-Mac platforms are not supported.

Privacy is the main advantage: transcripts, notes, and linked files stay on the device. That also means there is no cloud backup of the meeting data unless you export it yourself.

## Conclusion

Google AI Edge Foresight gives Apple Silicon Mac users a free way to capture and expand meeting notes without sending audio to the cloud. The combination of live shorthand enrichment, question detection, and local document retrieval covers the core needs of most knowledge workers.

Download it from the official developers page, grant the audio permissions, point it at a few useful folders, and try it on your next call. The experimental status means features may change, but the on-device design already solves the privacy problem that cloud note-takers create.

## Sources

- [Google AI Edge Foresight](https://developers.google.com/edge/foresight) — Google for Developers
- [EmbeddingGemma 2 announcement](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/) — Google, 6 October 2026
- Google AI Edge team announcement via X, 7 October 2026
- TechCrunch coverage of the local-first meeting companion, 8 October 2026
- Early user reports on model download sizes and Apple Silicon requirement, October 2026
