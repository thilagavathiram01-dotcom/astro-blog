---
title: "How to Use the Public SynthID Detector Portal"
description: "Upload images, video, or audio to synthid.com and read SynthID watermark results from Google, OpenAI, NVIDIA, and Kakao."
pubDate: 2026-10-10T12:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "security"]
noindex: false
---

A viral image or clip appears in your feed. You want a quick check before you share it. Google opened its SynthID Detector to everyone on 7 October 2026. The tool lives at synthid.com and looks for invisible watermarks that participating AI systems embed in media.

This guide shows the exact steps to run a check, what the results mean, and where the tool stops. It draws only from Google DeepMind’s announcement and the public portal behavior described in contemporaneous reporting.

## What the SynthID Detector actually checks

SynthID is an invisible watermark. Google DeepMind embeds it in images, video, and audio produced or edited by its own models and by partners that adopted the same standard. The watermark is designed to survive common changes such as cropping, compression, and filters.

The public detector does not guess whether a file “looks like AI.” It searches for the watermark signal. A positive result means a SynthID mark from a supported system is present. A negative result means no confident mark was found. Absence of a mark is not proof the file is human-made.

Google says it has watermarked more than 180 billion images and videos plus 240,000 years of audio since SynthID launched in 2023. The new portal joins the checks already built into Search, the Gemini app, and Chrome.

![Person reviewing digital media on a laptop screen](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)

## Access the portal and sign in

1. Open a browser and go to [synthid.com](https://synthid.com).
2. If a terms prompt appears, review and accept to continue.
3. Sign in when prompted. The portal accepts a Google account, an Apple account, or an OpenAI / ChatGPT account.
4. After login you reach the upload area.

The interface is English-only at launch. No separate app is required. Daily usage is limited; reporting indicates a quota of roughly ten checks per account. The limit exists to reduce automated probing that could help remove watermarks.

## Upload a file and read the result

Use the highest-quality original file you have. Screenshots, re-exports, or heavily compressed copies reduce detection reliability even though the watermark is designed to be robust.

Supported formats reported for the public portal include:

- **Images:** JPG, JPEG, PNG, BMP, WEBP, AVIF, HEIC, HEIF, TIFF, TIF, GIF
- **Video:** MP4, MOV, WEBM
- **Audio:** WAV, MP3, OGG, FLAC, AAC, M4A

Drag the file into the upload zone or click to select it. The scan runs automatically. Results appear in two main forms:

- **Watermark detected:** A SynthID signal is present. The file was likely generated or edited by a supported AI system. For video and audio the tool can highlight segments that carry the mark.
- **Watermark not detected:** No confident signal was found. This does not rule out AI generation or editing by systems that do not use SynthID, or by older versions of partner tools before they adopted the watermark.

When a mark is found the portal may indicate which partner ecosystem produced it (Google, OpenAI, NVIDIA, or Kakao). Apple support is listed as coming soon.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZzNWASQgGa4"
    title="Google's SynthID AI Detection Tool is Now Available For All"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits and what to do next

The detector only finds SynthID marks from the listed partners. Content from other generators, open-source models, or tools that have not adopted the standard will return “not detected.” Google is explicit that a clean result does not prove authenticity.

For mixed media the segment view is useful. A video might show a watermark only in the audio track or only in certain frames. That tells you which part was likely AI-generated or edited.

Cross-check with other signals when available:

- Ask the Gemini app whether a file was created or edited by Google AI (it also reads SynthID and Content Credentials).
- Use OpenAI’s own Verify tool for images that may have come from ChatGPT or the OpenAI API.
- Inspect Content Credentials (C2PA) metadata with any reader that supports the standard.

If the file is a screenshot of an AI image, the pixel-level SynthID mark can sometimes survive, but metadata is usually stripped. Prefer the original file whenever possible.

![Abstract digital technology background with network lines](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80)

## Tips for reliable checks

- Start with the original download, not a messaging-app preview or social-media re-upload.
- For HEIC files from iPhones, upload them directly; conversion is not required.
- Record the file name, date, and result if you need an audit trail.
- Treat “detected” as strong evidence of supported AI involvement, then look for the original source.
- Do not rely on the portal alone for high-stakes decisions. Combine it with reverse image search, source tracing, and other provenance tools.

The portal is free to use after sign-in, but the daily quota means you should prioritize the most suspicious files first.

## Conclusion

The public SynthID Detector at synthid.com gives anyone a straightforward way to look for invisible watermarks from Google, OpenAI, NVIDIA, and Kakao. Upload a high-quality file, sign in, and read whether a mark is present and, for video or audio, where it appears. A positive result is useful evidence. A negative result simply means no supported mark was found.

For more on related verification features already inside Gemini, see our earlier guide on [checking SynthID watermarks in Gemini](/blog/check-synthid-watermarks-gemini/).

## Sources

- Google DeepMind blog, “Google expands SynthID Detector for AI content,” 7 October 2026.
- synthid.com portal FAQ and upload interface descriptions reported by contemporaneous coverage.
- Ars Technica, TechRepublic, and other reports confirming supported formats, partner list, sign-in requirement, and daily quota as of early October 2026.
