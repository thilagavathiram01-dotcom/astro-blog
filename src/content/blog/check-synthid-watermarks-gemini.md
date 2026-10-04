---
title: "How to Check Images for SynthID Watermarks in Gemini"
description: "Upload an image, video, or audio clip to Gemini and ask if Google AI made it. A practical SynthID watermark check, plus what a miss means."
pubDate: 2026-10-04T09:30:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "google"]
noindex: false
---

A realistic photo in a chat thread is not proof it came from a camera. Google DeepMind’s SynthID hides a digital watermark in content made with Google’s generative tools, and the Gemini app can look for that mark. You do not need a lab account for the basic check.

This guide follows the detection flow on [DeepMind’s SynthID page](https://deepmind.google/models/synthid/): upload an image, video, or audio clip, then ask whether Google AI created or altered it. Protein watermarks are a separate line of research. See [SynthID Bio: Watermarking AI Protein Designs](/blog/synthid-bio-ai-protein-watermarks/).

## What SynthID actually marks

SynthID embeds a watermark in AI-generated images, audio, text, or video. DeepMind says the mark is imperceptible and is applied across Google’s generative AI consumer products.

- **Images and video.** The watermark is written into the pixels or frames when the file is created. DeepMind says it is built to survive cropping, filters, frame-rate changes, and lossy compression without a visible quality drop.
- **Audio.** Marks go into audio from the Lyria music model and into podcast audio from NotebookLM. DeepMind says the signal is inaudible and is meant to hold up under added noise, MP3 compression, and speed changes.
- **Text.** In the Gemini app and on the web, SynthID nudges token probability scores while the model writes. The wording still reads normally. The pattern of those scores is the watermark.

A May 2025 Google post said more than 10 billion pieces of content had already been watermarked. In a July 2026 video on the Google channel, the company said it had watermarked over 100 billion images and videos and over 60,000 years of audio. Those are Google’s own figures.

The same video says Google has partnered with companies including OpenAI, NVIDIA, and Apple so some of their content can carry SynthID. A clean Gemini result still only answers one question: did this file carry a SynthID mark Gemini could read?

## Check an image in Gemini

DeepMind’s instructions are short. Upload the file, then ask. The scan is part of the reply, not a separate settings toggle.

1. Sign in to the Gemini app or open [gemini.google.com](https://gemini.google.com) with the same Google account.
2. Start a new chat so an old image does not stay attached.
3. Upload the image. Use the original file if you have it.
4. Ask a direct question: “Was this created or altered by Google AI?” or “Does this image have a SynthID watermark?”
5. Read the reply before you share the file. Gemini should say whether it found a SynthID watermark.

Google’s July 2026 demo uses the same pattern: upload the picture in the Gemini app and ask if it is AI-generated. If you only have a messaging-app preview, save the attachment and upload that file.

![Person reviewing photos on a laptop before sharing them](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80)

## Check video and audio the same way

DeepMind’s page covers video and audio, not only stills. Upload the clip and ask if Google AI created or altered it. Gemini checks for a SynthID watermark and reports what it finds.

Useful prompts:

- “Check this video for a SynthID watermark and say which result you got.”
- “Was this audio generated with Google AI, including Lyria or NotebookLM?”

Keep the clip short enough for Gemini’s upload limit. If a long file is rejected, trim a section that still contains the suspect frames or the music bed. Do not describe the file in text and expect a watermark scan. The model has to receive the media.

## What a yes or a no means

A positive result is the useful case. Gemini found a SynthID watermark, so the file matches content Google’s tools marked. It does not name who clicked generate.

A negative result is weaker:

- The file may be a photo or a human recording.
- It may come from a tool that does not write SynthID.
- Heavy edits or re-encoding can remove a mark DeepMind designed to survive ordinary changes. The company does not call the system foolproof.
- A text paste into another app can strip the statistical pattern SynthID uses for Gemini text.

Do not write “verified real” on a file only because Gemini found no watermark. Say “no SynthID mark detected” and keep the source.

## SynthID Detector is a different door

In May 2025 Google launched SynthID Detector, a portal where you upload an image, audio track, video, or text. If a watermark is present, the portal highlights portions most likely to carry it. For audio it points at segments. For images it marks areas.

DeepMind says that portal is in testing with journalists and media professionals, with an early-tester waitlist. It is not the Gemini upload flow. If you are not on that waitlist, use Gemini.

Content Credentials (C2PA) are a separate label. Google’s July 2026 video describes them as a story of the file: camera capture, AI edit, or fully AI-generated. A SynthID check does not replace a Content Credential.

![Close-up of a circuit board representing digital media processing](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## A short test you can run today

Use a file you created so you know the ground truth.

1. In Gemini, generate an image with a plain prompt such as “a red ceramic mug on a wooden table, photo.”
2. Download the image Google returns.
3. Open a new chat, upload that download, and ask if Google AI created it.
4. Expect a SynthID hit on that file. If you do not get one, update the Gemini app and retry with the original download, not a screenshot.
5. Upload a photo you took with your phone and ask the same question. Expect no SynthID mark. That negative is not a certificate of authenticity.

Save both replies if you are documenting a workflow. The wording can vary. Record whether Gemini reported a watermark.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Sm7OTow3mcY"
    title="How to know if an image is AI generated or not"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Limits to state when you publish

If you label media for other people, match the claim to the tool:

- Quote the Gemini result, including the date you ran it.
- Do not treat SynthID as a detector for every AI product on the internet.
- Run the check on the fullest file you have, then crop for display.
- Text checks apply to Gemini app and web output. Pasting that text into another doc is not a reliable way to preserve the mark.
- SynthID Bio, announced 30 September 2026, watermarks AI-designed protein sequences and predicted structures. It does not scan your photos.

Pair the check with source habits you already use in Chrome. [How to Use Gemini in Chrome on Android](/blog/gemini-in-chrome-android/) covers asking about the page you are reading, which is a different job from uploading a file for a watermark scan.

## Conclusion

SynthID is a watermark, not a universal lie detector. For images, video, and audio, the public step Google documents is simple: upload the file to Gemini and ask if Google AI created or altered it. A hit is evidence of a SynthID mark. A miss means Gemini did not find one.

Run the mug test once so you know what a positive reply looks like on your account. After that, check original files and avoid upgrading a missing mark into a claim that the picture is real.

## Sources

- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
- [SynthID Detector: Identify content made with Google’s AI tools](https://blog.google/innovation-and-ai/products/google-synthid-ai-content-detector/) — Google Blog, 20 May 2025
- [How to know if an image is AI generated or not](https://www.youtube.com/watch?v=Sm7OTow3mcY) — Google, 23 July 2026
- [SynthID Bio watermarks AI-designed proteins](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synthid-bio/) — Google Blog, 30 September 2026
