---
title: "SynthID Detector Tips for Accurate AI Media Checks"
description: "Upload high-quality files to synthid.com and interpret watermark results from Google, OpenAI, NVIDIA, and Kakao. Practical steps and limits."
pubDate: 2026-10-11T22:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "how-to", "google", "security"]
noindex: false
---

A viral photo or clip can look real until you check its origin. Google opened the SynthID Detector to everyone on 7 October 2026 at synthid.com. The portal looks for invisible watermarks from Google and partners OpenAI, NVIDIA, and Kakao.

You sign in with a Google, Apple, or OpenAI account, upload a file, and receive a clear result. This guide shows the steps that produce reliable checks and the limits you should expect.

![Person working on a laptop to verify media files](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prepare the right file

The detector reads the watermark that participating models embed at generation time. Use the highest-quality original you can obtain. Heavy compression, re-encoding, or screenshots reduce the chance of a clean signal.

Supported formats include JPG, PNG, WEBP, HEIC, and GIF for images; MP4, MOV, and WEBM for video; and WAV, MP3, OGG, FLAC, AAC, and M4A for audio. Files should stay under 100 MB. Videos shorter than 90 seconds and audio under one hour produce the most consistent results.

Google has watermarked more than 180 billion images and videos plus 240,000 years of audio since SynthID launched in 2023. The public portal joins checks already running in Search, the Gemini app, and Chrome.

## Run a check on synthid.com

Open synthid.com in a desktop or mobile browser. Sign in when prompted. Agree to the terms if this is your first visit.

Drag the file into the upload area or select it from your device. The scan finishes in a few seconds. The result states either “Watermark detected” or “Watermark not detected.”

When a watermark is found, the portal can highlight the region of an image or the time segments of a video or audio file that carry the mark. Note the source partner if the interface names one. A partial hit can mean real footage with an AI-generated element composited in.

Daily quota sits near ten checks of each media type. The limit exists to stop automated testing that could train removal tools. Google stores a short-lived digital signature of uploaded files for quota and abuse control, then deletes it after 24 hours.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZzNWASQgGa4"
    title="Google's SynthID AI Detection Tool is Now Available For All"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Read results with the right expectations

A detected watermark is strong evidence that the file was generated or edited by a SynthID-enabled model from Google or a listed partner. It does not identify the specific person who requested the content.

A “not detected” result means no confident SynthID signal was found. It does not prove the media is authentic. Content from models that never adopted SynthID, heavily altered files, or pre-adoption outputs will return this answer.

Apple support is listed as coming soon. Until then, Apple Intelligence outputs will not trigger the current detector. The tool is also not a general AI classifier that analyzes pixels or audio for generative patterns. It only reads the specific watermark.

For a second check on Google-origin content, upload the same file to the Gemini app and ask whether it was created or edited by Google AI. See our earlier guide on [checking SynthID watermarks in Gemini](/blog/check-synthid-watermarks-gemini/) for that workflow.

## Practical tips that improve outcomes

Always start with the official portal rather than third-party look-alike sites. Record the file name, date, and result for any content you need to document later.

If an upload fails, convert a copy to a supported format such as MP4 or MP3 and retry. Keep the original untouched. For mixed media, the segment highlighting helps you separate real portions from generated ones.

Cross-check important claims with other signals such as source metadata or known distribution history. The detector is one layer, not a complete verification system.

![Close-up of hands on a keyboard during a file check](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## What comes next for verification

Google continues to expand partner coverage and built-in checks. The same watermarking approach already appears in Search and Chrome. As more companies adopt SynthID, the public detector becomes more useful for everyday media that moves across platforms.

For now, treat the tool as a fast, free first filter for content that may have come from major AI services. Combine it with source context and additional verification when the stakes are high.

## Sources

- [We're making it easier to identify AI-generated content globally](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/) — Google DeepMind, 7 October 2026
- [SynthID Detector](https://synthid.com/) — Google
- [Google rolls out improved SynthID AI content detector, now available globally](https://arstechnica.com/ai/2026/10/google-rolls-out-improved-synthid-ai-content-detector-now-available-globally/) — Ars Technica, 7 October 2026
