---
title: "How to Use Google SynthID Detector for AI Media"
description: "Step-by-step guide to Google's free SynthID Detector. Check images, video, and audio for AI watermarks from Google, OpenAI, and partners at synthid.com."
pubDate: 2026-10-11T15:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "how-to", "google", "ai"]
noindex: false
---

AI-generated images, videos, and audio now appear everywhere online. Telling real media from synthetic versions has become harder as models improve. Google DeepMind opened its SynthID Detector to everyone on October 7, 2026, giving anyone a free way to check for the company's invisible watermark.

The tool lives at synthid.com. It scans uploaded files for SynthID signals from Google AI tools and partners including OpenAI, NVIDIA, and Kakao. Apple support is expected soon. This guide shows exactly how to use it and what the results mean.

![Person interacting with a digital interface on a screen](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## What the SynthID Detector Does

SynthID embeds an imperceptible watermark into AI-generated content at the moment of creation. The mark lives in the pixels of images and video or the frequency components of audio. Humans cannot see or hear it, but detection software can find it.

Google has watermarked more than 180 billion images and videos plus the equivalent of 240,000 years of audio since introducing the technology in 2023. The public detector expands an earlier version that was limited to journalists and media professionals.

It is not a general AI detector. A negative result does not prove a file is human-made. Content from models that do not use SynthID, such as many open-source tools, will return no watermark. Heavy editing can also weaken the signal.

The detector works on images, video, and audio. It does not check text on the public site, even though Gemini text can carry SynthID.

## How to Check a File Step by Step

Follow these steps to run a check.

1. Open a browser and go to [synthid.com](https://synthid.com).
2. Sign in with a Google, Apple, or OpenAI account. The site requires an account before it accepts uploads.
3. Read the terms and privacy notice, then select Agree and continue.
4. Drag a file into the upload area or click Select file. Use the highest-quality original you have.
5. Wait for the scan to finish. Results appear in seconds for most files.

Supported image formats include JPG, JPEG, PNG, BMP, WEBP, AVIF, HEIC, HEIF, TIFF, TIF, and GIF. Video works with MP4, MOV, and WEBM. Audio accepts WAV, MP3, OGG, FLAC, AAC, and M4A.

Google recommends uploading the highest-quality copy available. Screenshots, heavy compression, or social-media re-exports can reduce detection reliability.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZzNWASQgGa4"
    title="Google's SynthID AI Detection Tool is Now Available For All"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to Read the Results

Two outcomes appear after the scan.

**Watermark detected** means the file was likely generated or edited by a SynthID-enabled model. The result often names the partner, such as Google AI or OpenAI. For images, the interface highlights regions where the mark is strongest. For video and audio, it points to specific segments on a timeline.

**Watermark not detected** means no confident SynthID signal was found. The file may still be AI-generated if it came from a non-partner model or if edits removed the mark. Google states that a negative result does not rule out AI creation or manipulation.

In rare cases the detector can flag content that was never watermarked. Treat every result as one piece of evidence, not a final verdict.

## Tips for Accurate Checks

Upload the original file whenever possible. Download media directly from the source instead of taking a screenshot or recording the screen.

Respect the daily limits. Users receive roughly 10 checks per day across image, video, and audio. The system may cut access earlier if many similar files are uploaded in a short time. Files are processed in real time and deleted after the result is returned. Google stores a digital signature of each file for 24 hours to enforce the quota.

File size and length limits also apply. Common reports list files up to 100 MB, videos shorter than 90 seconds, and audio under one hour. Check the portal if an upload fails.

You can also verify media inside the Gemini app. Upload the file and ask “Was this created or edited by Google AI?” or type @synthid. Built-in checks already run in Search, the Gemini app, and Chrome and handle more than one million requests daily.

If you work with photos often, our guide to [Ask Photos in Google Photos](/blog/ask-photos-google-photos/) shows another way Gemini helps with your library.

![Laptop on a desk with code and data visualizations on screen](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

## Limitations to Keep in Mind

The detector only finds SynthID watermarks. It cannot identify content from tools that do not adopt the system. Open-weight models and many independent generators produce unmarked files.

The watermark is designed to survive common edits such as cropping, filters, and compression. It is not guaranteed to survive aggressive modifications or deliberate removal attempts.

Results are available in English on the public site. The interface is straightforward, but non-English speakers may need a translation tool for the terms and result explanations.

Privacy notices state that uploaded files are deleted immediately after processing. The temporary signature used for rate limiting is removed after 24 hours.

## Conclusion

The SynthID Detector gives a practical, free method to check whether images, videos, or audio carry watermarks from Google and its partners. Sign in at synthid.com, upload a high-quality file, and read the result carefully. Combine it with source checking and other verification methods for stronger confidence.

Start with one file you can verify yourself. A detected watermark is strong evidence of AI origin from a participating model. A negative result simply means no SynthID signal was found.

## Sources

- [We're making it easier to identify AI-generated content globally — Google Blog, October 7, 2026](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/)
- [SynthID Detector portal](https://synthid.com)
- [Google's SynthID AI Detection Tool is Now Available For All — BrenTech on YouTube](https://www.youtube.com/watch?v=ZzNWASQgGa4)
