---
title: "How to Check AI Content with SynthID Detector"
description: "Step-by-step guide to Google's free SynthID Detector. Verify if images, videos, or audio are AI-generated from Google, OpenAI, and partners."
pubDate: 2026-10-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "how-to", "google", "security", "ai"]
noindex: false
---

AI-generated images, videos, and audio now fill social feeds and news sites. Many look convincing. Google’s SynthID Detector gives you a direct way to check for invisible watermarks from major providers.

The tool launched publicly on 7 October 2026. It is free, available worldwide in English, and works on images, video, and audio. You sign in with a Google, OpenAI, or Apple account and upload a file. Results arrive in seconds.

This guide shows exactly how to use it, what the results mean, and where its limits sit.

## What SynthID Detector Does

SynthID is Google DeepMind’s watermarking system. It embeds an imperceptible signal into AI-generated media at creation time. The signal survives common edits such as cropping, compression, and filters.

Google reports that SynthID has marked more than 180 billion images and videos plus 240,000 years of audio. Partners including OpenAI, NVIDIA, and Kakao also embed it. Apple support is expected soon.

The public detector at synthid.com scans for these marks. It does not guess from visual style. It looks only for the specific watermark. A positive result means the file (or part of it) was created or edited by a supported AI system. A negative result does not prove the content is human-made.

![Person checking a digital screen for content authenticity](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

Built-in checks already exist in Google Search, the Gemini app, and Chrome. Those tools handle over one million requests a day. The standalone site makes the same check available outside Google’s products.

## Step-by-Step: Check a File

Follow these steps on any modern browser.

1. Open synthid.com. Accept the terms.
2. Sign in with a Google, OpenAI, or Apple account. The site uses the login to enforce daily limits.
3. Click the upload area or drag a file. Supported formats include JPG, PNG, WEBP, HEIC, GIF for images; MP4, MOV, WEBM for video; and MP3, WAV, AAC, M4A, FLAC for audio.
4. Wait a few seconds. The tool returns a clear result.

If a watermark is found, the page highlights the affected regions on images or marks the timeline segments on video and audio. It often identifies the partner (Google, OpenAI, etc.).

Files are deleted immediately after scanning. Only a short-lived signature is kept to manage usage quotas.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/r7cUc7AyBn0"
    title="How to Check If Content Was Made by AI Using SynthID Detector"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Reading the Results Correctly

A “watermark detected” message is strong evidence that the media came from a SynthID partner. It can cover fully generated content or real media that was edited with an AI tool.

A “not detected” or “unlikely” message only means no confident signal from a partner was found. Possible reasons include:

- The file was created by a non-partner model.
- The content predates the partner’s adoption of SynthID.
- Heavy editing or re-encoding removed the signal (rare, but possible).
- The file is genuinely human-created.

Treat a clean result as incomplete information, not proof of authenticity. Combine it with other checks such as Content Credentials (C2PA) when available.

![Close-up of circuit board representing AI technology](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

Daily limits apply. Reports indicate roughly ten checks per user per day, though exact numbers are not published. Large files (over 100 MB) or very long videos may be rejected.

## Tips for Better Checks

- Upload the original file when possible. Screenshots or heavily compressed versions can weaken the signal.
- For screenshots of images, crop tightly to the content and avoid collages.
- Cross-check with OpenAI’s Verify tool (openai.com/verify) if you suspect ChatGPT or API output. It reads both SynthID and C2PA credentials.
- Use the Gemini app for quick checks on the go: upload the file and ask “Was this created with Google AI?”
- Pair this tool with Android’s built-in scam and privacy protections. See our guide on [Android Private Space](/blog/android-private-space/) for keeping sensitive media isolated.

If you create content with Gemini or partner tools, the watermark is added automatically. You do not need to enable it.

## Limitations You Should Know

The detector is not a general AI detector. It cannot identify content from models that do not use SynthID. Many open-source and smaller generators fall into this category.

It also cannot distinguish between fully synthetic media and lightly edited real media when both carry the mark. The result simply confirms a supported AI touch.

Text watermark detection is not available on the public site yet. Video and audio support focuses on the media track itself.

Google continues to expand partner coverage and improve resilience. TIME named SynthID one of the Best Inventions of 2026, reflecting its role in content transparency.

## Conclusion

SynthID Detector gives anyone a free, fast way to look for verified AI watermarks on images, video, and audio. Use it before sharing or trusting media from major platforms. Remember that a negative result is not a certificate of authenticity.

Check files at synthid.com today. For developers building on-device AI features, explore related tools such as EmbeddingGemma 2 for local multimodal search.

## Sources

- Google DeepMind blog: “We're making it easier to identify AI-generated content globally.” (7 October 2026) — https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/
- Official SynthID Detector — https://synthid.com/
- TIME Best Inventions recognition for SynthID (15 October 2026)
- Supporting coverage from Android Authority, TechRepublic, and Engadget confirming public launch and partner support
