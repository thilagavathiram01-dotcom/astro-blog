---
title: "How to Check AI Content with SynthID Detector"
description: "Step-by-step guide to use Google's SynthID Detector at synthid.com to verify images, videos, and audio for AI watermarks from Google and partners."
pubDate: 2026-10-16T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["security", "ai", "google", "tutorials", "how-to"]
noindex: false
---

AI-generated images, videos, and audio now look realistic enough to fool people at a glance. Google’s SynthID Detector gives you a free, official way to check whether supported content carries an invisible watermark from Google or its partners.

The tool opened to everyone worldwide in English on 7 October 2026. You sign in with a Google, Apple, or OpenAI account, upload a file, and receive a clear result: watermark detected or not detected.

This guide walks through the exact steps, what the results mean, and the limits you must keep in mind.

## What SynthID Detector Actually Checks

SynthID is Google DeepMind’s system for embedding an invisible digital watermark into AI-generated media at the moment of creation. The mark sits inside the pixels of an image or video and inside the waveform of audio. It is designed to survive common changes such as compression, cropping, filters, and format conversion.

The public portal at [synthid.com](https://synthid.com) scans for that watermark. As of October 2026 it can detect marks from:

- Google AI tools (Gemini, Imagen, Veo, Lyria, and others)
- OpenAI
- NVIDIA
- Kakao

Apple support is listed as coming soon. A positive result tells you the file was made or edited with AI from one of those partners. A negative result only means no supported watermark was found.

Google reports having watermarked more than 180 billion images and videos plus the equivalent of 240,000 years of audio content.

![Person examining digital content on a screen](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

## Step-by-Step: Check a File

1. Open a browser and go to **synthid.com**. The site is currently available in English only.

2. Sign in with a Google, Apple, or OpenAI (ChatGPT) account. The first visit may ask you to review and accept the terms.

3. Choose or drag an image, video, or audio file. Supported formats include JPG, PNG, WEBP, HEIC, GIF for images; MP4, MOV, WEBM for video; and MP3, WAV, OGG, FLAC, AAC, M4A for audio.

4. Wait for the scan. The portal analyzes the file for the SynthID watermark.

5. Read the result. If a watermark is found, the tool indicates that SynthID was detected and, where possible, shows which partner’s AI was involved. For images it can highlight regions most likely to contain the mark. For video and audio it can point to specific segments or timestamps.

Use the highest-quality original file you can obtain. Screenshots and heavily re-compressed copies can reduce detection reliability even though the watermark is designed to be robust.

## Understanding the Results

A “SynthID detected” result is strong evidence that the content was generated or edited by a supported AI system. Treat the file accordingly—especially if someone is presenting it as an unaltered photograph, video, or recording.

A “not detected” result does **not** prove the content is authentic. Many AI tools (including open-source models and some commercial services) do not embed SynthID. The file could still be AI-generated, or it could be genuine.

Google also notes a daily usage quota of roughly 10 checks per media type. The portal is not an unlimited bulk detector.

You can perform similar checks inside the Gemini app by uploading media and asking whether it was created or edited with Google AI, or by using the @synthid command where available. Built-in verification also exists in Search and Chrome.

## Tips for Reliable Use

- Prefer the original file over a screenshot or social-media download whenever possible.
- Cross-check with other methods. Reverse-image search, looking for the original source, and checking Content Credentials (C2PA) metadata provide additional context.
- Do not rely on the tool alone for high-stakes decisions. A watermark confirms AI involvement when present; its absence proves nothing.
- Watch file-size and length limits. Videos are typically practical up to around 90 seconds and files up to 100 MB in related Gemini flows; the public portal follows similar practical constraints.
- Combine with device-level protections. For example, Android users can also use [Circle to Search and other scam protections](/blog/android-new-scam-protections-setup-guide/) to scrutinize suspicious messages and media.

![Abstract technology and digital security concept](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Watch a Quick Demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/r7cUc7AyBn0"
    title="How to Check If Content Was Made by AI Using SynthID Detector"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits and Responsible Use

SynthID Detector is a watermark reader, not a general-purpose AI detector. It cannot identify content created by tools that do not participate in the SynthID program. It also cannot tell you how much of a file was AI-generated versus lightly edited.

Google designed the system to give people more context about the media they encounter. Use it as one signal among several. When the stakes are high—news verification, legal matters, or personal safety—seek additional corroboration from original sources and trusted outlets.

## Conclusion

Google’s SynthID Detector at synthid.com provides a straightforward, free way to check images, videos, and audio for invisible watermarks from Google, OpenAI, NVIDIA, Kakao, and soon Apple. Sign in, upload the original file, and interpret the result carefully: a detection confirms AI involvement, while the absence of a mark does not confirm authenticity.

Keep the daily quota and file constraints in mind, combine the check with other verification methods, and stay aware of the tool’s scope. As AI-generated media continues to spread, tools like this give everyday users a practical next step.

## Sources

- Google DeepMind, “We’re making it easier to identify AI-generated content globally,” 7 October 2026. [blog.google](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/)
- Google, SynthID Detector portal: [synthid.com](https://synthid.com)
- Supporting coverage confirming global English availability, partner support (OpenAI, NVIDIA, Kakao), sign-in requirements, and daily quotas (October 2026 reports from Android Authority, Mashable, and others).
