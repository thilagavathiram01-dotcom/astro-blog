---
title: "How to Check Files on the SynthID Detector Portal"
description: "Learn how to upload an image, video, or audio file to Google's SynthID Detector at synthid.com and read a partner watermark result."
pubDate: 2026-10-08T09:30:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "google", "security", "how-to"]
noindex: false
---

A photo, clip, or voice note can look finished and still be synthetic. On 7 October 2026, Google DeepMind opened the SynthID Detector to everyone, in English, at [synthid.com](https://synthid.com/). The portal checks whether a file carries a SynthID watermark from Google or partner models.

Pushmeet Kohli, VP of Science and Strategic Initiatives at Google DeepMind, announced the expansion on the Google blog. The early portal, introduced in May 2025, was aimed at journalists and media teams. The public version is the same idea without the waitlist: upload a file, get a watermark check.

If you already ask Gemini whether a file was made by Google AI, keep that habit for quick Google-only checks. The portal is the place to test partner watermarks in one upload. Our earlier guide on [checking SynthID watermarks in Gemini](/blog/check-synthid-watermarks-gemini/) covers that chat-based path.

## What the portal can and cannot tell you

SynthID embeds an imperceptible watermark in AI-generated images, video, audio, and, for Gemini text, in token choices. Google says the image and video mark is added when the content is created and is built to survive cropping, filters, frame-rate changes, and lossy compression. The audio mark, used with Lyria and NotebookLM podcast audio, is meant to survive added noise, MP3 compression, and speed changes.

The 7 October post says Google has watermarked more than 180 billion images and videos, plus 240,000 years of audio. Built-in checks in Search, the Gemini app, and Chrome now handle more than 1 million verification requests a day. Those in-product checks look for Google's own watermark. The portal is broader.

Google says the public detector can flag media made with AI from Google or partners, including OpenAI, NVIDIA, and Kakao, with Apple support listed as coming. A match means the file, or part of it, carries a SynthID watermark from a supported source. A miss does not prove the file is human-made. Another generator, a photo of a screen, or a heavy re-encode can leave no readable mark.

![Person reviewing images on a laptop in a workspace](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Sign in and upload a file

Google's own steps are short. Open [synthid.com](https://synthid.com/), upload an image, video, or audio file, and let the portal scan for a SynthID watermark from Google or a partner.

Reporting from Android Authority and Ars Technica, based on Google's launch, adds the account rule. You sign in with a Google, Apple, or OpenAI account. There is no plain email login. Ars Technica also reported that Google sets a daily quota of about 10 image, video, and audio checks per user, in part to make bulk probing for watermark removal harder. Treat that limit as a product constraint, not a bug.

Use an original file when you have one. A screenshot of an image is a new picture of pixels, and a screen recording of a video is a new encode. Both can weaken or drop a mark that was present in the source file. Export from the app that created the media, or download the attachment before it is recompressed by a chat app.

1. Open [synthid.com](https://synthid.com/) in a desktop or mobile browser.
2. Sign in with a Google, Apple, or OpenAI account.
3. Choose an image, video, or audio file. Google's announcement covers those three types for the public portal. Text watermark checks still sit with Gemini.
4. Upload the file and wait for the scan.
5. Read the result. Google has said the detector highlights which portions of an image or video carry the watermark, which matters when only part of a file is synthetic.

Do not upload files you are not allowed to share with a third-party web tool. The portal is a verification service, not a private lab.

## Read a partner result

A positive result should name that a SynthID watermark was found. Because the portal now covers partner marks, a hit can point to Google models such as Imagen, Veo, Lyria, Gemini image tools, Flow, or Vids, or to a partner such as OpenAI, NVIDIA, or Kakao. Apple support is not live yet, according to the 7 October post.

A partial highlight is useful. A news clip with a generated insert, or a track with a synthetic stem, should not be treated the same as a file that is watermarked end to end. Note the marked region before you write a caption or file a correction.

A negative result only means this scan did not find a supported SynthID watermark. Say that plainly if you publish the check. "No SynthID watermark detected from Google, OpenAI, NVIDIA, or Kakao" is accurate. "This is a real photo" is not.

![Close-up of code and network graphics on a monitor](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Compare the portal with Gemini, Search, and Chrome

DeepMind still documents a second path. Upload an image, video, or audio clip in Gemini, Search, or Chrome and ask whether Google AI created or altered it. Those surfaces check for a Google SynthID watermark and can also surface Content Credentials where present.

Use both when the source is unclear:

- Start in Gemini if you only need a Google check and the file is already on your phone. Limits and wording are covered in the [Gemini watermark guide](/blog/check-synthid-watermarks-gemini/).
- Use synthid.com when the file might come from ChatGPT images, an NVIDIA tool, or Kakao, or when you want one report that spans partners.
- Keep the original file. Re-uploads and messenger recompression are the usual reason a second check disagrees with the first.

The portal does not replace a newsroom chain of custody. It answers a narrow question: is a SynthID watermark from a supported maker present in this file?

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/9btDaOcfIMY"
    title="SynthID: A tool for watermarking and identifying AI-generated content"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checks before you trust a file

Run the portal on the earliest copy you can get. If a colleague emailed a JPEG and a messaging app later sent a smaller version, test the email attachment.

Check audio the same way. Lyria tracks and NotebookLM podcast audio are in Google's watermark set. A song from a tool that does not use SynthID will not light up, even if it is fully generated.

Pair the scan with visible context. File names, EXIF, C2PA Content Credentials, and the account that posted the media still matter. SynthID is one signal. Google describes it as context for a decision, not a verdict on truth.

If you publish AI media yourself, leave the watermark in place. Cropping and light filters are not a reason to assume the mark is gone. Stripping provenance on purpose works against the readers you want to keep.

Stay inside the daily quota. Ten or so checks is enough for a story or a personal inbox review. Batch jobs against the portal are the behaviour the limit is meant to block.

## What to do with the result

Label matched media in captions: "SynthID watermark detected" plus the source the portal reports, if it names one. For partial matches, say which segment was marked.

For unmatched media, keep the claim narrow and link the file you tested. If a later original appears, run the check again. Partner coverage can also grow. Apple is on Google's "soon" list, so a miss today is not a permanent miss.

Teams that already route suspicious images through Gemini can add synthid.com as the partner pass. One person signs in, tests the original, and pastes the result into the ticket. That is enough process for most newsrooms and support queues.

The public detector does not stop synthetic media. It gives a logged-in user a direct way to ask whether Google or a named partner watermarked the file in front of them. That is a smaller promise than "detect all AI," and it is the one the tool actually makes.

## Sources

- Google blog, 7 October 2026: [Google expands SynthID Detector for AI content](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/)
- Google DeepMind: [SynthID](https://deepmind.google/models/synthid/)
- Google blog, 20 May 2025: [SynthID Detector portal announcement](https://blog.google/innovation-and-ai/products/google-synthid-ai-content-detector/)
- Google on X, 7 October 2026: upload steps for synthid.com
- Ars Technica, 7 October 2026: account options and daily check quota as described by Google
