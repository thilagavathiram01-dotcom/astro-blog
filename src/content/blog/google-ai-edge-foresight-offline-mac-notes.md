---
title: "Use Google AI Edge Foresight for Offline Mac Notes"
description: "Set up Google AI Edge Foresight on an Apple Silicon Mac to expand shorthand meeting notes and search local files offline."
pubDate: 2026-10-09T17:45:00
heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "productivity"]
noindex: false
---

Meeting notes apps that upload audio to a cloud model are a poor fit for client calls, research interviews, and rooms where a recording should stay on the machine. Google AI Edge Foresight, released on 6 October 2026, is an experimental Mac app that takes a different path. It listens to system audio and the microphone, expands the bullets you type, and answers questions from the live transcript plus files you choose to index. Google says inference runs on the Mac with EmbeddingGemma 2 and Gemma 4, and that files, meeting audio, and notes do not leave the computer.

This guide covers what the app actually does, who can run it, and how to use it in a real meeting without inventing buttons Google has not documented.

## What Foresight does on the Mac

Google Developers Blog describes Foresight as a context-aware meeting companion. It connects to system audio and the microphone, so it is not tied to one video app. A Google Meet call, a Zoom call, or a conversation in the same room can feed the same local transcript.

Three jobs are documented:

- Enhanced note-taking. You type shorthand. The app fills those notes with details pulled from the current conversation.
- Live answers. The showcase video on the launch post is captioned “Questions detected and answered live by AI.” The app can surface answers from the transcript while the meeting is still running.
- Cross-modal retrieval. A natural-language query can find images, documents, transcripts, and notes in a local library, because EmbeddingGemma 2 maps text, images, video frames, and audio into one vector space.

Google also states there are no cloud subscription costs. The app is free and labelled experimental, so features and availability can change.

![Person writing a checklist in a notebook beside a laptop](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80)

## Check the machine before you install

Google says Foresight is built for Mac and optimised for Apple Silicon. The download is a direct installer from the [Foresight product page](https://developers.google.com/edge/foresight), not a Mac App Store listing. Intel Macs are outside that stated target. There is no Windows or iPhone build in the launch announcement.

Plan for a first-run model download. Secondary reports of the installer show a prompt for Gemma 4 weights, so a fully offline session starts only after those weights are on disk. Once the models are local, Google says the app keeps working without a network connection.

If you want the model details before you install the app, the companion post on [on-device search with EmbeddingGemma 2](/blog/embeddinggemma-2-on-device-search/) covers the 740 million parameter multimodal model, the Apache 2.0 license, and the modular text, vision, and audio encoders.

## Install and grant audio access

1. Open [developers.google.com/edge/foresight](https://developers.google.com/edge/foresight) and download the Mac app.
2. Open the disk image and move Foresight into Applications. macOS may ask you to confirm an app downloaded from the web. Approve it only if the file came from that Google page.
3. Launch the app and allow the microphone and system-audio capture when macOS prompts you. Without system audio, a video call stays silent to the app even if people are talking on the speakers.
4. Wait for the on-device models to finish downloading. Google’s launch note says Foresight is powered by EmbeddingGemma 2 and Gemma 4. Do not start a sensitive meeting until that step completes.
5. Point the app at the folders you want it to search. The launch coverage that quotes Google lists project folders, reference materials, diagrams, and calendar. Index only what you are willing to have retrieved mid-call.

Keep the first test short. Record a two-minute practice call with a colleague, type three bullets, and check that the expanded notes match what was said.

## Take notes the way the app expects

Foresight is not a blank-page summariser that replaces your notes. Google’s own caption on the demo is “Automatic enhancement of shorthand notes.” You still decide what matters.

During the meeting:

1. Start listening before the agenda item you care about. System audio covers remote participants. The microphone covers people in the room.
2. Type short bullets for decisions, owners, and dates. “Priya owns API freeze, Friday” is enough. The app is meant to attach the surrounding transcript detail.
3. Leave names and numbers in your own bullets when they are easy to mistype. Local speech models still miss proper nouns.
4. If a question comes up that your files should answer, ask it in the app. Google says answers can draw on the live transcript and the personal library you indexed, and that this search stays on device.
5. After the call, read the polished notes against the transcript before you paste them into a ticket or email. Experimental software can attach the wrong sentence to the right bullet.

A useful pattern is one bullet per decision, not one bullet per topic. Retrieval works better when your shorthand already names the object: a file, a date, or a person.

![Laptop and sticky notes on a sunlit desk](https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80)

## What stays on the Mac

Google’s product claim is specific: sensitive information remains on the device, productivity continues without a network, and there is no cloud subscription. The developers post repeats that data does not leave the device while Foresight searches your knowledge library.

That is not the same as “nobody else can hear the meeting.” Other people on the call still have their own clients. Screen sharing can still expose the Foresight window. macOS permissions still let the app read the microphone and the folders you grant.

Treat the index like a local search database:

- Do not point it at a folder of customer exports you would not open in a normal notes app.
- Remove a project folder when the engagement ends.
- Confirm in the app that a practice recording is stored locally before you rely on the privacy claim for a regulated call.

If you already upload meeting audio to ChatGPT, compare the two flows. The [ChatGPT audio upload notes guide](/blog/chatgpt-audio-uploads-meeting-notes/) is the cloud path. Foresight is the local path, limited to Apple Silicon Macs.

## Limits to plan around

Foresight is a showcase for EmbeddingGemma 2, not a full meeting suite. Google has not published a minimum macOS version, a RAM floor, or a language list on the developer post. EmbeddingGemma 2 itself is described as handling retrieval across modalities, and the Gallery demo on the same page uses a German query, but that does not prove Foresight’s note expander is strong in every language.

Other limits follow from the launch post:

- Apple Silicon is the stated target. Do not expect an Intel build from this release.
- Models must be present locally before offline use is real.
- The app is experimental. Download it again if a meeting workflow breaks after an update.
- Live answers are only as good as the transcript and the files you indexed. It will not know a fact that was never said and never stored.

Developers who want the same retrieval idea inside their own app can follow the MediaPipe Universal Embedder and Semantic Retriever tasks documented in that same post, or try Instant Media Search and Video Moments Finder in Google AI Edge Gallery on Android and iOS.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KNPNNAKh3dU"
    title="Google AI Edge Foresight"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## A practical first week

Use Foresight on internal meetings for a few days before a client call. Check three things each time: whether system audio was captured, whether expanded bullets match the transcript, and whether a file query returns the document you indexed. If any of those fail, fix permissions or the folder list before you depend on the app.

For teams that already standardise on cloud notes, Foresight is an extra recorder for sessions that should not be uploaded. For everyone else with an Apple Silicon Mac, it is a free way to turn shorthand into fuller notes without a subscription, as long as you still read the result before you send it.

## Sources

- Google Developers Blog, “Bring multimodal semantic search to the edge with EmbeddingGemma 2,” 6 October 2026: https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
- Google AI Edge Foresight product page: https://developers.google.com/edge/foresight
- Google Developers Blog, “EmbeddingGemma 2: The Developer Guide,” 6 October 2026: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
- Google AI Edge, “Google AI Edge Foresight” (YouTube): https://www.youtube.com/watch?v=KNPNNAKh3dU
