---
title: "How to Use Google's Public SynthID Detector Website"
description: "Check images, video, and audio on the public SynthID Detector site for watermarks from Google, OpenAI, NVIDIA, and Kakao."
pubDate: 2026-10-08T12:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "security"]
noindex: false
---

A shared screenshot is not a source. On 7 October 2026, Google DeepMind opened the SynthID Detector to anyone, in English, at [synthid.com](https://synthid.com/). The site checks an uploaded image, video, or audio file for an invisible SynthID watermark from Google or named partners.

That is a different door from asking Gemini. If you already run file checks inside the app, keep that guide: [How to Check Images for SynthID Watermarks in Gemini](/blog/check-synthid-watermarks-gemini/). The public site is built for a direct yes-or-no scan, including marks written by partner tools.

## What changed on 7 October 2026

Pushmeet Kohli, VP of Science and Strategic Initiatives at Google DeepMind, announced the expansion on the Google blog. Last year the detector was an early tool for media professionals. Starting 7 October 2026 it is available globally in English.

Google says SynthID has watermarked more than 180 billion images and videos, plus 240,000 years of audio, since the system launched in 2023. The new site sits beside checks already built into Search, the Gemini app, and Chrome. Google says those built-in checks now handle more than 1 million requests a day.

The detector looks for watermarks from Google and from partners Google names: OpenAI, NVIDIA, and Kakao. Apple support is listed as coming soon, not as live on launch day.

## What the site can and cannot tell you

SynthID is a watermark written into media when a participating tool creates or edits it. It is not a general classifier that scores every file on the internet as “AI” or “real.”

A detected mark means the file carries a SynthID signal the detector could read from a supported provider. It does not name the person who generated the file, and it does not prove the whole scene is fictional. An edit on top of a real photo can still carry a mark.

A clean result is narrower:

- The file may be a camera photo or a human recording.
- It may come from a tool that does not write SynthID.
- Apple marks are not in the launch set. Google says that support is coming.
- A re-encode or a crop can still defeat a mark. Google does not describe SynthID as impossible to strip.

Do not label a file “verified real” because the detector found nothing. Write “no SynthID watermark detected” and keep the source.

![Person comparing photos on a laptop screen](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Check a file on synthid.com

Use the original file when you have it. A messaging-app preview is often a recompressed copy.

1. Open [synthid.com](https://synthid.com/) in a desktop or mobile browser.
2. Sign in. Reporting on the launch says the site accepts a Google, OpenAI, or Apple account. Use the account you already trust for AI tools.
3. Upload one image, video, or audio file. Google’s announcement covers those three media types. Text watermark checks stay in the Gemini flow, not this upload page.
4. Wait for the scan. Read the result before you forward the file.
5. Save a note of the date, the filename, and whether a watermark was reported. Wording on the page can change as the product rolls out.

If you hit a usage cap, stop and try again the next day. Google has limited public checks in the past so the scan cannot be used as a free loop for watermark-removal research. Do not refresh the same file in a burst if the site already returned a result.

## Run a known-file test first

A first scan on a random viral clip teaches you less than a scan on a file you made.

1. In the Gemini app or at gemini.google.com, generate a simple image. A plain object on a table is enough.
2. Download the file Google returns. Do not screenshot it.
3. Upload that download to synthid.com.
4. Expect a watermark hit from Google’s tools. If you do not get one, retry with the original download after the page finishes loading.
5. Upload a photo you took with your phone. Expect no SynthID mark. That negative is not a certificate.

Repeat once with a short audio clip from a Google music tool such as Lyria if you use one. Audio marks are part of the same announcement. Keep the clip as the file the tool exported.

![Close-up of hands editing audio on a computer](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)

## Partner marks versus a Gemini chat check

Gemini can look for a SynthID watermark after you upload a file and ask whether Google AI created or altered it. That path is still useful on a phone. Google’s public detector is the better fit when you need a dedicated scan and when the file might come from a partner, not only from Google.

OpenAI, NVIDIA, and Kakao are the partner names on the 7 October post. A ChatGPT image that carries SynthID should be in range on the new site. A Gemini-only check was built around Google’s own mark. If a newsroom or a class needs one place to drop a file, start at synthid.com, then use Gemini if you also want a written explanation in the chat.

Content Credentials (C2PA) are a separate label. They record a story of the file, such as camera capture or an AI edit. A SynthID scan does not replace that label, and a missing credential does not erase a watermark.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EF1BFaNZN9U"
    title="SynthID, our imperceptible watermark for AI-generated content, is expanding to more partners."
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical limits to state out loud

Match the claim to the tool when you share a result:

- Quote the detector result and the date you ran it.
- Name the providers Google lists: Google, OpenAI, NVIDIA, Kakao, with Apple planned.
- Scan the fullest file you have, then crop for display.
- Do not treat a miss as proof the clip is human-made.
- English is the launch language. If the page is unavailable in your region, retry later rather than pasting the file into a random third-party “AI detector.”
- SynthID Bio, announced 30 September 2026, watermarks AI-designed protein sequences. It does not scan your photos or songs.

Google also points people to verification already inside Search, the Gemini app, and Chrome. Those surfaces are for context while you browse. The website is for a file you already hold.

## Conclusion

The public SynthID Detector is a file upload, not a verdict on the whole web. Open synthid.com, sign in, and check the original image, video, or audio. A hit means a supported watermark was found. A miss means this scan did not find one.

Run the known-file test once so you know what a positive looks like on your account. After that, keep the Gemini upload path for phone checks, and use the site when you need the partner scan Google opened on 7 October 2026.

## Sources

- [We're making it easier to identify AI-generated content globally](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/) — Pushmeet Kohli, Google Blog, 7 October 2026
- [SynthID Detector](https://synthid.com/) — Google
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
- [SynthID, our imperceptible watermark for AI-generated content, is expanding to more partners](https://www.youtube.com/watch?v=EF1BFaNZN9U) — Google DeepMind, 22 May 2026
