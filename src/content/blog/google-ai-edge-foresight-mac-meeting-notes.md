---
title: "How to Use AI Edge Foresight for Offline Mac Notes"
description: "Install Google AI Edge Foresight on Mac, capture meeting audio on device, and expand shorthand notes with EmbeddingGemma 2."
pubDate: 2026-10-07T18:30:00
heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "productivity", "ai"]
noindex: false
---

Google launched AI Edge Foresight for Mac on 6 October 2026 as an experimental meeting companion that stays on the machine. It listens through the microphone and system audio, expands the bullets you type, and searches local files without a cloud subscription.

The app is the desktop showcase for EmbeddingGemma 2, the 740 million parameter embedder DeepMind released the same day, paired with Gemma 4 for written answers. If you already index private notes with that model, Foresight is the ready-made meeting path. The model walkthrough is in our [EmbeddingGemma 2 on-device search guide](/blog/embeddinggemma-2-on-device-search/).

This guide covers what the app does, how to start a session, and where its limits sit.

## What Foresight does on a Mac

Google AI Edge describes Foresight as a context-aware meeting companion. Processing is local. The app hooks into system audio and the microphone, so it works with any meeting platform, including a fully offline call.

Three jobs are called out in the 6 October developers post:

- Enhanced note-taking fills in shorthand with details pulled from the current conversation as it happens.
- Cross-modal retrieval finds images, documents, transcripts, and notes from a natural-language question.
- On-device processing keeps the transcript and files on the Mac, with no network required and no cloud plan.

EmbeddingGemma 2 maps text, audio, and visual data into one vector space. Gemma 4 writes the expanded notes and the live answers. Google's launch video shows Foresight embedding an audio stream, detecting a spoken question, and returning a short summary next to a diagram stored on the local drive.

Download it from the [Google AI Edge Foresight page](https://developers.google.com/edge/foresight). The product page is also linked from the [developers blog post](https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/).

![People in a meeting with laptops open on a shared table](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80)

## Install and grant audio access

1. Open [developers.google.com/edge/foresight](https://developers.google.com/edge/foresight) and download the Mac build.
2. Move the app to Applications and open it. macOS may ask you to confirm an app from an identified developer the first time.
3. Allow microphone access when prompted. In-person meetings need the mic. Remote meetings also need system audio so Foresight can hear other participants, not only your voice.
4. If system audio capture is blocked, open System Settings, then Privacy and Security, and enable the audio permission Foresight requests. Quit and reopen the app after you change it.
5. Confirm the app is listening before the call starts. Google says integration with system audio and the microphone is what makes it work across meeting apps without a plugin.

Keep the first test short. A five-minute local recording is enough to see whether notes expand and whether a question gets an answer. You do not need a Google AI plan. The developers post lists no cloud subscription cost.

## Take shorthand, then let the transcript fill gaps

Foresight is built for sparse notes, not a full transcript you type yourself.

1. Start listening before the meeting, or as soon as you join.
2. Type only the bullets you want to keep: a decision, a name, a number, or a follow-up.
3. Leave the wording rough. The app is meant to enrich that shorthand from the live transcript.
4. Review the expanded note before you share it. Local models still miss names and figures. The transcript is the source; the written note is a draft.

Google's description of the feature is specific: it enriches manual shorthand with details retrieved in real time from the current meeting conversation. It does not claim a perfect minutes document. Treat the output as a first pass you edit.

For a video call, system audio matters. If only the microphone is on, Foresight hears you and the room, not remote speakers. For a desk conversation, the microphone is the path Google documents.

![Close-up of hands typing notes on a laptop during work](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Point it at files you already have

Cross-modal retrieval is the second half of the app. Google says you can point Foresight at project folders, reference materials, diagrams, and calendar items, then ask in plain language.

1. Add the folders that hold the decks, specs, and images for the meeting. Prefer a small set over your whole home directory so the index stays relevant.
2. Ask a question tied to those files, such as where a diagram lives or what a previous note said about a date.
3. Check the cited file before you read an answer aloud. Retrieval ranks local embeddings. It does not prove a sentence is in the source.

The same vector space covers images, documents, transcripts, and notes. That is why a spoken question in the launch demo can surface a system diagram from local storage without a cloud search.

Live Assistance is the in-meeting version of that search. Google describes it as listening and answering questions automatically. Use it when someone asks for a figure you already stored, not as a substitute for reading the source.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Foresight segment in that DeepMind video shows the audio stream being embedded on device, a question detected, and a summary returned next to a local diagram.

## What stays on the Mac, and what does not

Google states that transcript and audio processing happen on the device, and that sensitive data does not leave the machine for this workflow. There is no cloud subscription. Offline use is an explicit claim: the app works with any meeting platform even when the network is down, as long as the call itself is local or already connected.

That is not a promise about every file you later paste into email or Drive. Once you copy a note out of Foresight, normal sharing rules apply.

Foresight is experimental. The developers post does not list a support SLA, a retention setting, or an admin console. If your workplace forbids local recording of meetings, do not turn listening on. Tell the other people in the room when audio capture is running.

The underlying embedder is separate from the app. EmbeddingGemma 2 weights are Apache 2.0. On a Pixel 11 Pro, Google measured about 191MB of active RAM for text-only weights and about 567MB for the full multimodal model. Foresight also loads Gemma 4 for generation, so a Mac session uses more memory than the embedder alone. The phone RAM figures are not Mac benchmarks.

## Tips for a cleaner first week

Name the meeting in your notes before you start. A title line makes later retrieval easier than a pile of untitled transcripts.

Write numbers yourself. Models drop decimals and attendee names. A bullet that already contains the figure gives the expander less room to invent one.

Keep the indexed folder narrow. A single project directory beats a full Documents tree when you want the diagram from this week's review, not a similar file from last year.

Compare Foresight with Gallery if you only need search. Instant Media Search and Video Moments Finder in Google AI Edge Gallery use EmbeddingGemma 2 on Android and iOS without the meeting listener. Foresight is the Mac app that adds live notes and question detection.

Do not expect text watermark checks here. SynthID is a different Google tool. Foresight does not claim to label AI-written slides.

## Conclusion

AI Edge Foresight is Google's experimental Mac app for local meeting notes. It captures microphone and system audio, expands shorthand from the live transcript, and retrieves files through EmbeddingGemma 2 and Gemma 4 without a cloud plan.

Download it from the Google AI Edge Foresight page, grant audio access, run one short meeting, and edit the expanded notes before you send them. For the model settings behind the search, use the EmbeddingGemma 2 guide linked above.

## Sources

- Google Developers Blog, "Bring multimodal semantic search to the edge with EmbeddingGemma 2," 6 October 2026: https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
- Google DeepMind, "EmbeddingGemma 2: an open, lightweight multimodal embedding model," 6 October 2026: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google AI Edge Foresight product page: https://developers.google.com/edge/foresight
- Google for Developers, "Introducing EmbeddingGemma 2," YouTube, 6 October 2026: https://www.youtube.com/watch?v=anPsS6huQk0
