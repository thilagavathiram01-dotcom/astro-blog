---
title: "Check if Media is AI-Generated with SynthID Detector"
description: "Step-by-step guide to Google's free SynthID Detector. Learn to scan images, video, and audio for AI watermarks from Google, OpenAI, and partners."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "google", "security"]
noindex: false
---

AI-generated images, videos, and audio now look and sound realistic enough that many people struggle to tell them apart from real content. Google's SynthID technology embeds an invisible watermark into media created by its own models and several partners. The free SynthID Detector at synthid.com lets anyone check files for that watermark.

This guide shows you exactly how to use the tool, what the results mean, and the limits you should keep in mind. It draws only from official Google statements and verified announcements.

## What SynthID Detector Does

SynthID embeds a durable, invisible digital watermark into AI-generated images, video, and audio at the moment of creation. The watermark survives common edits such as cropping, filters, compression, and trimming. Google reports that SynthID has already marked more than 180 billion images and videos plus 240,000 years of audio.

The public SynthID Detector portal, available since 7 October 2026, scans uploaded files for these watermarks. It covers content from Google, OpenAI, NVIDIA, and Kakao, with Apple support expected soon. Verification tools also appear inside Google Search, Chrome, and the Gemini app.

The detector is not a general AI detector. It only finds SynthID watermarks from participating companies. A clean result does not prove a file is authentic.

![Close-up of a computer motherboard with AI components](https://images.unsplash.com/photo-1716436329478-9c954c6bd611?auto=format&fit=crop&w=800&q=80)

## How to Use SynthID Detector

Follow these steps to check a file.

1. Open a browser and go to [synthid.com](https://synthid.com/).
2. Sign in with a Google, Apple, or OpenAI account. The site requires a login before you can upload anything.
3. Choose the media type: Image, Video, or Audio.
4. Upload the highest-quality version of the file you have. Drag and drop or use the select button. Supported formats include common image types (JPEG, PNG, WebP, GIF, HEIC and others), video (MP4, MOV, WebM), and audio (MP3, WAV, OGG, AAC, M4A, FLAC). Files up to about 100 MB are accepted.
5. Wait a few seconds for the scan to finish.
6. Read the result. For video and audio the tool can highlight specific segments that contain the watermark.

Google recommends using the original or least-edited file because heavy compression or multiple edits can weaken the signal.

## Reading the Results

A positive result means the tool detected a SynthID watermark. The message typically states that the media was made or edited with AI from Google or one of its partners. It may also note that further edits could have occurred after creation.

A negative result means no confident SynthID signal was found. This can happen for several reasons: the file came from a model that does not use SynthID, the watermark was degraded by heavy editing, or the content is genuine. The tool does not claim to prove authenticity.

False positives are described as very rare. Always treat a detection as strong evidence of AI involvement from a participating company, not as a complete history of the file.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9btDaOcfIMY"
    title="SynthID: A tool for watermarking and identifying AI-generated content"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical Tips for Everyday Use

Start with the best copy available. Screenshots and re-uploads from messaging apps often lose quality and can reduce detection accuracy.

Check multiple versions if you have them. The original export from a phone or camera is usually more reliable than a shared social-media version.

Combine the check with other methods. Look at the source of the file, search for the same image online, and examine any available Content Credentials (C2PA) metadata when present. SynthID is one useful signal among several.

Respect daily limits. Users receive a quota of roughly ten checks per day. The cap helps prevent misuse of the detector to train watermark-removal tools.

For research-heavy work you can also explore Google’s other tools. Our earlier guide on [Gemini Deep Research](/blog/gemini-deep-research-cited-reports/) covers how to generate cited reports when you need background on a topic.

![AI letters on a circuit board background](https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?auto=format&fit=crop&w=800&q=80)

## Limits You Should Know

SynthID Detector only recognises watermarks from Google and its current partners. Content from other models will not trigger a positive result even if it is fully AI-generated.

The tool does not identify the specific person or account that created the file, nor does it verify whether the depicted events are true.

Heavy post-processing, format conversions, or intentional attempts to remove the watermark can cause the signal to drop below the detection threshold.

Text watermarking exists for Gemini outputs, but the public detector portal currently focuses on images, video, and audio.

## Conclusion

SynthID Detector gives anyone a free, straightforward way to check whether media carries an invisible AI watermark from Google or its partners. Upload a high-quality file, read the result carefully, and remember that a negative result is not proof of authenticity.

Used together with source checks and basic verification habits, the tool adds a practical layer of transparency when you encounter realistic-looking content online. Visit synthid.com to try it yourself.

## Sources

- Google Blog: [SynthID named to TIME’s Best Inventions of 2026](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synthid-time-best-inventions/)
- Google DeepMind announcement via X: SynthID Detector now available to everyone at synthid.com
- Official SynthID technology page: [deepmind.google/technologies/synthid](https://deepmind.google/technologies/synthid/)
- Supporting coverage confirming portal details, partners, and usage notes from October 2026 reports
