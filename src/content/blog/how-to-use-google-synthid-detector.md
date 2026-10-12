---
title: "How to Use Google SynthID Detector to Spot AI Content"
description: "Step-by-step guide to Google's free SynthID Detector at synthid.com for checking AI watermarks in images, video, and audio from Google, OpenAI, and partners."
pubDate: 2026-10-12T10:30:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "google", "tutorials", "how-to"]
noindex: false
---

AI-generated images, videos, and audio now look and sound nearly real. A photo of a news event or a short clip of a speech can spread fast before anyone checks its origin. Google's SynthID system adds an invisible watermark to content from its models and several partners. On October 7, 2026, Google opened the SynthID Detector at synthid.com to everyone so you can check files yourself.

This guide walks through what the tool does, how to use it, and what the results actually mean. You will learn the exact steps, the limits, and how to combine it with other checks. No special skills are required.

## What SynthID Is and Why It Matters

SynthID is a watermarking technology from Google DeepMind. It embeds a nearly invisible signal directly into the pixels of images and video frames, or into the waveform of audio. The mark is designed to survive common changes such as cropping, compression, filters, and resizing. Humans cannot see or hear it, but the detector can read it.

Google has applied SynthID to more than 180 billion images and videos plus roughly 240,000 years of audio since 2023. Partners including OpenAI, NVIDIA, and Kakao also use versions of the watermark. Apple support is coming soon. When the detector finds the mark, it tells you the content was likely made or edited by one of these systems.

The detector is not a general AI detector that guesses based on visual style. It only looks for the specific SynthID signal. A negative result does not prove the file is real. Content from tools that do not use SynthID, or content that has been heavily altered, will show no watermark.

![Computer screens showing code and digital interfaces](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## How to Check a File with SynthID Detector

Follow these steps on a computer or phone browser.

1. Open synthid.com in your browser.
2. Sign in when prompted. You can use a Google, Apple, or OpenAI account. Agree to the terms if this is your first visit.
3. Drag and drop your file into the upload area, or click to select it. Use the highest-quality original version you have. Screenshots and heavily compressed copies can weaken the signal.
4. Wait a few seconds for the scan to finish.
5. Read the result. The page reports whether a watermark was detected. For images it may highlight likely areas. For video and audio it can mark specific segments on a timeline.

Supported formats include common image types such as JPG, PNG, WEBP, HEIC, and GIF; video in MP4, MOV, and WEBM; and audio in MP3, WAV, AAC, M4A, FLAC, and OGG. Files should stay under 100 MB. Videos are limited to under 90 seconds and audio to under one hour for best results.

Each account can run roughly 10 checks per day. The limit exists so people cannot repeatedly probe the detector while trying to remove watermarks.

You can also check files inside the Gemini app. Upload the media and ask whether it was created or edited with Google AI, or type @synthid. Google Search and Chrome include similar verification features that together handle more than one million requests daily.

## Understanding the Results

A positive result means the detector found a SynthID watermark. The content was almost certainly generated or edited by a model that applies the watermark. The tool may also indicate which partner ecosystem produced it.

A negative result means no confident watermark was found. Possible reasons include:
- The file came from a tool that does not use SynthID.
- The original watermark was damaged by heavy editing, extreme compression, or re-encoding.
- The file is a screenshot or photograph of a screen that did not preserve the pixel-level signal well.

For mixed media, pay attention to segment details. A video might show a watermark only in the audio track between certain timestamps, or only in part of the visual frames. That tells you which portions are synthetic.

Do not treat either result as the final word on authenticity. Combine the check with reverse image search, source verification, and metadata inspection when the file still contains it. For OpenAI images you can also try openai.com/verify, which looks for both SynthID and C2PA Content Credentials.

![Close-up of a laptop with security-related visuals on screen](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Better Checks

Upload the original file whenever possible. Social platforms often re-compress media, which can reduce detection reliability even though SynthID is designed to be robust.

Check the file format first. If an upload fails, convert a copy to a supported type such as MP4 or JPG and try again. Keep the original untouched.

Run the check soon after you receive the file. Further sharing and re-uploads can degrade the signal over time.

Cross-check with other methods. If SynthID finds nothing, look for C2PA credentials, examine the account history of the poster, and search for earlier appearances of the same media. For device-level protection on Android, see our guide on [Android 17 advanced protection features](/blog/android-17-advanced-protection-six-features/).

Remember the daily quota. Plan which files matter most if you check many items.

## Watch: How SynthID Watermarking Works

Google DeepMind published a clear short explanation of the technology. The video covers the challenge of identifying AI content and shows how the watermark is embedded across images, video, audio, and text.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9btDaOcfIMY"
    title="SynthID: A tool for watermarking and identifying AI-generated content"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limitations You Should Know

SynthID Detector only finds watermarks from participating systems. Content from other generators will not trigger it. Text is not supported on the public portal.

The tool can produce rare false positives. Google notes that edge cases exist, so additional evidence is still useful.

Heavy modifications can reduce or remove the detectable signal. Researchers continue to study removal techniques, which is one reason Google limits daily checks.

The interface is currently available in English only.

## Conclusion

The public SynthID Detector gives anyone a straightforward way to look for watermarks in images, video, and audio. Go to synthid.com, sign in, upload a high-quality file, and read the result. Pair it with other verification methods for a fuller picture.

As more companies adopt the watermark and as detection tools improve, checking origin becomes a normal part of reading or sharing media. Start with the official portal for the cleanest signal from Google and its partners.

## Sources

- Google DeepMind blog: Expanding SynthID Detector (October 7, 2026)
- synthid.com official portal
- Google DeepMind SynthID page
- Ars Technica and Mashable coverage of the public launch
