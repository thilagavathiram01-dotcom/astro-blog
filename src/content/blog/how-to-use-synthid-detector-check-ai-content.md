---
title: "How to Use SynthID Detector to Check AI Content"
description: "Step-by-step guide to using Google's SynthID Detector at synthid.com to verify if images, video, or audio were made with AI from Google, OpenAI, and partners."
pubDate: 2026-10-16T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "how-to", "security", "tutorials"]
noindex: false
---

AI-generated images, videos, and audio now appear everywhere online. Distinguishing them from human-made content has become harder. Google’s SynthID Detector gives you a free way to check for invisible watermarks embedded by major AI tools.

On October 7, 2026, Google opened the detector to everyone worldwide. You no longer need special access or to rely only on asking Gemini. This guide shows exactly how to use it, what the results mean, and the limits you should know.<grok type="render_inline_citation" citation_id="167" />

## What SynthID Detector Does

SynthID is a watermarking system from Google DeepMind. It embeds an imperceptible signal into the pixels of images and video frames or the waveform of audio. The mark survives common edits such as cropping, compression, and filters. Google reports that SynthID has marked more than 180 billion images and videos plus the equivalent of 240,000 years of audio.<grok type="render_inline_citation" citation_id="167" />

The public detector at synthid.com scans uploaded files for these watermarks. It currently recognizes content from Google’s models (Gemini, Imagen, Veo, Lyria) and partners including OpenAI, NVIDIA, and Kakao. Apple support is listed as coming soon. A positive result indicates the file was likely created or edited with a participating AI tool. A negative result does not prove the file is human-made; it only means no supported watermark was found.<grok type="render_inline_citation" citation_id="149" />

![Person interacting with AI interface on a laptop](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80)

The tool does not analyze text. It also does not claim to catch every AI-generated file. Use it as one verification step alongside reverse image search and source checking.

## How to Check a File with SynthID Detector

Follow these steps. The process takes under a minute for most files.

1. Open a browser and go to [synthid.com](https://synthid.com).
2. Sign in with a Google, Apple, or OpenAI account. A login is required.
3. Click the upload area or drag and drop an image, video, or audio file. Supported formats include common ones such as JPG, PNG, MP4, MOV, and WAV.
4. Wait while the portal scans the file. Processing happens in real time and the file is deleted afterward.
5. Read the result. If a watermark is detected, the tool notes which partner’s mark it found and, for video or audio, highlights the relevant segments.<grok type="render_inline_citation" citation_id="171" />

You can perform roughly ten checks per day. For longer videos, keep clips under the practical limits shown on the site. Prefer original files over screenshots or heavily re-compressed versions when possible, as extreme transformations can weaken the signal.

## Interpreting Results and Common Limits

A “watermark detected” message is strong evidence that participating AI was involved. The detector may identify the source company. For video it can show which portions contain the mark, which helps when only part of a clip was generated.

A “not detected” message means the tool found no confident SynthID signal from supported partners. Possible reasons include:

- The content was made by an AI tool that does not use SynthID.
- It was created before the partner adopted the watermark.
- Heavy editing removed or degraded the mark.
- The file is human-made.

Google’s own documentation stresses that absence of a watermark does not equal authenticity. Treat the tool as a positive indicator only.<grok type="render_inline_citation" citation_id="149" />

![Abstract visualization of digital data and neural networks](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

If you need to check text instead, other methods are required. SynthID Text exists for developers who want to watermark generated text, but the public detector site does not scan documents or articles.

## Tips for Reliable Checks

- Check the original file when you can obtain it. Social media compression sometimes reduces detection reliability.
- Combine the detector with other signals. Look at EXIF data, reverse-search the image, and verify the source account or publication.
- For news or claims of real events, cross-check multiple independent outlets rather than relying on a single tool.
- Remember daily limits. If you reach them, wait or use the Gemini app method for Google-originated content (ask “Was this made with AI?” after uploading).
- Educate others. Sharing how to run a quick check helps reduce the spread of unlabeled AI media.

For Android users interested in related on-device protections, our guide on [enabling enhanced protection in Google Messages](/blog/enable-enhanced-protection-google-messages/) covers AI-powered scam detection that also relies on Gemini models.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9btDaOcfIMY"
    title="SynthID: A tool for watermarking and identifying AI-generated content"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The embedded video from Google DeepMind explains the original watermarking approach that underpins the detector.

## Conclusion

SynthID Detector at synthid.com gives anyone a straightforward way to look for watermarks from Google and major partners. Upload a file, wait for the scan, and read whether a supported mark appears. A detection is useful evidence of AI involvement; a clean result is inconclusive. Pair the tool with careful source evaluation and you gain clearer context about the media you encounter.

Official details appear in Google DeepMind’s announcement and the detector site itself.

## Sources

- Google DeepMind: Expanding SynthID Detector access (blog.google, October 7, 2026)
- SynthID Detector portal: synthid.com
- Google DeepMind SynthID overview pages
