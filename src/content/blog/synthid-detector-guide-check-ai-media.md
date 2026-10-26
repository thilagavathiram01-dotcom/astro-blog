---
title: "SynthID Detector Guide: Check AI Images Video Audio"
description: "Step-by-step guide to Google’s free SynthID Detector at synthid.com for checking images, video and audio for invisible AI watermarks."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "security", "tutorials"]
noindex: false
---

AI-generated images, videos and audio now look convincing enough that a quick visual check is no longer enough. Google’s SynthID Detector gives anyone a free way to look for the invisible watermark that Google and several partner companies embed in content made with their AI tools.

The portal opened to the public on 7 October 2026. You upload a file at synthid.com and the tool reports whether it finds a SynthID signal. A positive result means the media was likely generated or edited with a participating model. A negative result does not prove the file is authentic.

This guide walks through the exact steps, what the results mean, and the practical limits you should keep in mind.

## What SynthID Detector actually checks

SynthID is a digital watermarking system developed by Google DeepMind. It embeds an imperceptible signal directly into the pixels of images and video or the audio waveform at the moment of creation. The mark is designed to survive common compression, cropping and re-encoding better than ordinary metadata.

The public detector looks only for that specific watermark. It currently recognises content from Google, OpenAI, NVIDIA and Kakao. Apple support is planned. It does not scan text. It is not a general-purpose AI detector that can flag every synthetic file on the internet.

Google has already watermarked more than 180 billion images and videos plus the equivalent of 240,000 years of audio. Verification features also appear inside Google Search, the Gemini app and Chrome, which together handle over one million checks a day.

![Smartphone screen showing multiple AI app icons](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Step-by-step: check a file on synthid.com

Open a desktop or mobile browser and go to synthid.com. The site is available globally in English. Sign in with a Google, Apple or OpenAI account if the portal prompts you. Daily limits apply; most users can run roughly ten checks per day.

Upload the highest-quality version of the file you can obtain. Drag it into the upload area or click Select file. Supported formats include common image types (JPG, PNG, WEBP, AVIF, HEIC, TIFF, GIF), video (MP4, MOV, WEBM) and audio (WAV, MP3, OGG, FLAC, AAC, M4A). Keep files under about 100 MB. Videos are best kept under 90 seconds for reliable processing.

Wait a few seconds for the scan. The result page shows whether a SynthID watermark was detected. For images it highlights regions where the signal is strongest. For video and audio it marks specific segments on a timeline. The interface also lists the participating companies whose models it can detect.

If the tool reports a detection, the media was made or edited with a SynthID-enabled model from one of the supported providers. Note that further editing after the watermark was applied can still leave the signal intact in some cases.

## Interpret the results correctly

A positive detection is strong evidence that generative AI from a participating company was involved. It does not identify the person who created the file, nor does it confirm that every part of the content is synthetic. Partial watermarks are common in video and audio when only one track was generated.

A negative result means the detector found no SynthID watermark. That outcome is possible for several reasons: the content came from a non-participating tool, the original watermark was removed or degraded beyond recognition, or the file is entirely human-made. Treat “not detected” as incomplete information, not proof of authenticity.

You can cross-check in the Gemini app. Upload the same file and ask “Was this created or edited with Google AI?” or similar. Gemini looks for the same watermark and can give additional context about which segments contain the signal. Built-in checks also appear in Google Search and Chrome for many users.

![Person holding a smartphone displaying a chat interface](https://images.unsplash.com/photo-1682941664177-7920d0e59418?auto=format&fit=crop&w=800&q=80)

## Practical tips for better checks

Always prefer the original file over a screenshot, screen recording or heavily re-compressed social-media copy. Heavy processing can weaken the signal even though SynthID is designed to be robust.

Run the check before you share or publish. If you receive a suspicious image or clip, download the highest-resolution version available and scan it first. Record the result if you need to document your verification later.

Combine the detector with other signals. Look for C2PA Content Credentials where available, reverse-image search the file, and check the source page or account that posted it. No single tool covers every AI model.

If you develop Android apps that display user-generated media, consider prompting users to verify suspicious uploads. Our earlier guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) shows how to call Google’s models from client apps; similar patterns can surface verification prompts.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/r7cUc7AyBn0"
    title="How to Check If Content Was Made by AI Using SynthID Detector"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits and what comes next

The detector cannot see watermarks from companies that have not adopted SynthID. Midjourney, many open-source models and smaller generators remain outside its scope. Text watermarking exists in research form but is not yet supported in the public portal.

Google continues to expand partnerships and has announced SynthID Bio for watermarking AI-designed proteins. TIME named SynthID one of its Best Inventions of 2026 for the media watermarking work.

Daily rate limits and the English-only interface are current constraints. File-size and duration caps keep processing fast and free. Check the official portal for any updates to supported formats or partners.

## Conclusion

SynthID Detector at synthid.com is a practical, free tool for checking whether an image, video or audio file carries the invisible watermark used by Google and its current partners. Upload the best-quality file you have, read both positive and negative results carefully, and combine the check with other verification methods.

The technology does not solve every authenticity problem, but it gives ordinary users a concrete signal that was previously limited to professionals. Use it regularly when content looks unusually polished or when the source is unclear.

**Sources**

- Google Blog: We’re making it easier to identify AI-generated content globally (7 October 2026)
- Google Blog: TIME has named Google SynthID one of the Best Inventions of 2026 (15 October 2026)
- SynthID Detector portal: synthid.com
- YouTube: How to Check If Content Was Made by AI Using SynthID Detector (AsapGuide)
