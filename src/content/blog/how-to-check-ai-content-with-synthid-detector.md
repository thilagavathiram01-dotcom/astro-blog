---
title: "How to Verify AI Media Using Google's SynthID Detector"
description: "Check images, videos, and audio for AI watermarks with Google's free SynthID Detector. Step-by-step guide, Gemini tips, and key limits."
pubDate: 2026-10-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "google", "how-to"]
noindex: false
---

A realistic image or short video can spread fast online. You want a clear way to check if AI made or edited it. Google’s SynthID Detector gives you that check for free at synthid.com.

SynthID embeds an invisible watermark into content from Google’s AI tools and selected partners. The detector looks for that mark. A positive result means the file came from a supported AI system. A negative result does not prove the file is real.

This guide covers the public detector, the Gemini app method, and what the tools cannot do. All steps come from Google’s announcements and help pages.

## What SynthID is

Google DeepMind built SynthID to mark AI-generated images, video, audio, and text. The mark sits in the pixels, frames, or waveform. People cannot see or hear it. Detection software can find it even after common edits such as crops, filters, compression, or color changes.

Google has applied SynthID to more than 180 billion images and videos and the equivalent of 240,000 years of audio. Partners including OpenAI, Nvidia, and Kakao also use the system. Apple support is coming.

The public detector opened to everyone on 7 October 2026 in English. You sign in with a Google, Apple, or OpenAI account. Daily limits apply, roughly ten checks of each media type.



![Person using a laptop to analyze digital media on a screen](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## How to use the SynthID Detector

Follow these steps on a phone or computer.

1. Open [synthid.com](https://synthid.com) in your browser.
2. Sign in with a Google, Apple, or OpenAI account when prompted. Accept the terms.
3. Upload the original file if you can. Supported formats include common images (JPG, PNG, WEBP, HEIC, GIF), videos (MP4, MOV, WEBM), and audio (MP3, WAV, AAC, M4A). Keep files under about 100 MB. Videos should stay under 90 seconds for best results.
4. Wait for the scan. The tool reports whether it found a SynthID watermark and which partner system produced it when possible.
5. For video and audio the result can show specific segments that carry the mark.

Use the highest-quality copy you have. Screenshots and heavy re-exports can weaken the signal even though the watermark is designed to survive typical changes.

If the detector finds the watermark, treat the media as made or edited with AI from Google or a listed partner. Do not share it as authentic news or evidence.

## Check inside the Gemini app

You can also ask Gemini directly.

1. Open the Gemini app and sign in.
2. Upload one image, video, or audio file (limits: under 100 MB, video under 90 seconds, audio under one hour).
3. Ask a clear question such as “Was this made or edited with Google AI?” or “Check this for SynthID.”
4. Gemini scans for the watermark and answers. For video it can point to segments in the visuals or audio.

This method currently focuses on Google’s own AI content. The standalone detector covers partner watermarks as well. Both methods have daily limits.

You can also trigger checks through Google Search, AI Mode, Chrome, and Google Lens with similar prompts once the features appear in your account.



![Close-up of a computer circuit board representing digital watermark technology](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80)



<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/F3goXKG9l6o"
    title="How to Identify AI generated media Using SynthID by Google"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What the tools cannot do

SynthID Detector is not a general AI detector. It only looks for the specific watermark. Content from models that do not embed SynthID returns “not detected.” That result does not prove the file is authentic.

Heavy edits, screenshots of screenshots, or deliberate removal attempts can hide the mark. Text watermarking exists but the public detector currently focuses on images, video, and audio.

Daily quotas limit how many files you can check. Sign-in is required. The site is available in English.

Always cross-check with other signals: reverse image search, source links, Content Credentials metadata when present, and your own knowledge of the topic.

If you already organize research sources, the same caution applies when you upload materials into tools like [Gemini study notebooks](/blog/gemini-study-notebooks-setup/). Ground answers in files you trust, then verify claims that look generated.

## Practical tips

Start with the original file from the source. Download it instead of photographing a screen.

Test a known AI image from Gemini or ChatGPT first so you see what a positive result looks like.

For long videos, clip the suspicious segment under 90 seconds before you upload.

Record the result (screenshot the report) if you need to share the finding with others.

Combine the watermark check with a quick reverse search. A matching older real photo reduces the chance the file is pure generation.

Expect partner coverage to grow. Apple is listed as coming soon.

Do not rely on a single negative result before you repost or cite the media.

## Conclusion

The SynthID Detector at synthid.com gives anyone a direct way to look for invisible watermarks on images, video, and audio from Google and its partners. The Gemini app offers a second path focused on Google content. Both tools report only what the watermark shows. A positive result is strong evidence of AI involvement. A negative result is not proof of authenticity.

Upload the cleanest file you have, read the segment details when they appear, and pair the check with other verification steps before you decide the media is real.

## Sources

- [SynthID named to TIME’s Best Inventions of 2026 list](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synthid-time-best-inventions/) — Google, 15 October 2026
- [SynthID Detector: Identify content made with Google’s AI tools](https://blog.google/innovation-and-ai/products/google-synthid-ai-content-detector/) — Google
- [SynthID](https://deepmind.google/technologies/synthid/) — Google DeepMind
- Public reporting on the 7 October 2026 global launch of the detector at synthid.com
