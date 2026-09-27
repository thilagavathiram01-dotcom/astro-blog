---
title: "How to Use CaptionCast and ThumbnailForge in Flow"
description: "Use Google Flow CaptionCast and ThumbnailForge to caption video and build social thumbnails from one image and headline."
pubDate: 2026-09-27T16:41:00
heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "google", "productivity"]
noindex: false
---

Social clips fail for two boring reasons: captions arrive late, and the cover still looks like a screenshot. Google Flow now ships partner tools that treat both jobs as reusable workflows instead of one-off prompts.

On September 23, 2026, Google Labs published six new Flow tools built with working creatives. Two of them target digital storytellers: CaptionCast and ThumbnailForge, both from Jay Pirabakaran. This guide walks through how to run them inside a Flow project, what each tool is for, and how to remix them without rewriting the whole pipeline.

You will need a Google account that can open [flow.google.com](https://flow.google.com/). Video generation and some models consume Flow credits on paid Google AI plans. Features vary by region, age (18+), and subscription tier.

## What these two tools actually do

Google describes CaptionCast as a single-pass pipeline that transcribes, styles, and animates multilingual captions. The point is to skip the usual hop between a transcript app, a motion template, and a timeline export.

ThumbnailForge takes a still, a headline, and a prompt and produces social cover art sized for high-engagement layouts. Google’s post frames it as a replacement for manual formatting across platforms, not as a general image editor.

Both tools live as shared Flow tools you can open, duplicate, and remix. They are not a separate app. They run against assets in a Flow project, the same workspace you already use for Veo clips, Nano Banana stills, and Gemini Omni edits.

If you have not used Tools at all, start with our [custom Flow tools walkthrough](/blog/google-flow-custom-tools/). That post covers the gallery, remix, and create-from-scratch path these partner tools sit on.

## What you need before you click Generate

1. Sign in at [flow.google.com](https://flow.google.com/) with a personal Google account that has Flow access.
2. Create a project (or open one that already holds the clip and still you care about).
3. Upload or generate the source media. CaptionCast wants a clip with audible speech. ThumbnailForge wants a clear hero still plus a short headline.
4. Confirm which model the tool will call. Recent Flow help pages default image work to Nano Banana Pro and route video through the model picker in the prompt box.

Keep source files named. Flow lets you `@` an asset by name when you add ingredients. A file called `IMG_4402` is harder to reuse than `podcast-ep12-hero`.

![Creator reviewing video clips on a desktop monitor](https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80)

## Open CaptionCast and run a first caption pass

Google published a direct share link for the tool: [CaptionCast on Flow](https://flow.google.com/shared/tool/cd1f4c6f-3364-45cd-9940-af9d6e6f4e48).

1. Open that link while signed in, or find CaptionCast in the Tools Gallery inside a project.
2. Duplicate or remix the tool before you change its instructions. The original is the partner baseline; your version should live under a name you control.
3. Attach the clip you want captioned. Use the project asset picker or drag the file into the tool run.
4. State language targets in the run prompt if the default pass is not enough. Example: “Transcribe English speech. Burn in English captions. Add a second Spanish track with the same timing.”
5. Generate one short clip first (10–20 seconds), not the full episode.
6. Watch the result for timing drift, proper nouns, and on-screen collision with existing lower-thirds.

CaptionCast is built for a single pass. If the first output misses a name, remix the tool with a short glossary (“Always spell ‘Pirabakaran’ this way”) instead of stacking five extra style rules in the same sentence.

### Caption prompts that stay useful

Write the tool instruction as a job, not a mood board:

- Input: one dialogue clip, already cut.
- Lock: speaker names, brand words, aspect ratio.
- Change: caption style, language, animation in/out.
- Output: a captioned clip plus, if the tool exposes it, a text transcript you can copy.

Avoid “make it cinematic.” That phrase does not tell the tool where captions should sit. “Safe-area lower third, two lines max, 6% margin from bottom” does.

## Open ThumbnailForge and build one cover

Share link from Google’s announcement: [ThumbnailForge on Flow](https://flow.google.com/shared/tool/1dbfa3aa-8bf1-466d-b0fe-43a1d4534aff).

1. Open the tool and remix it into your project.
2. Add one still. A face or product that already reads at postage-stamp size works better than a wide landscape.
3. Add a headline of five to eight words. The tool is built to combine image + headline + prompt, not a full blog title.
4. Add a prompt that names the platform crop: “YouTube 16:9 cover, face on the right third, high-contrast title left, no fake UI chrome.”
5. Generate two or three variants.
6. Save the keeper into the project gallery so you can `@` it later as a Frames start image or a Shorts cover still.

Do not feed the tool a busy collage as the source still. The partner description is explicit: one image, one headline, one prompt. Extra logos belong in a remix instruction (“keep the circular mark in the top-left and do not invent a second logo”).

![Laptop and camera on a wooden desk during a content shoot](https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80)

## Pair the two tools in one project

A practical sequence for a talking-head Short:

1. Generate or upload the raw take.
2. Run CaptionCast on a 15-second cut.
3. Export or save a still from the strongest frame (or generate a clean still with Nano Banana if the frame is soft).
4. Run ThumbnailForge with that still and the same hook line you used in the caption.
5. If you publish video from Flow, attach the thumbnail still as a start frame or project cover so the package stays in one folder.

Google’s August 2026 Flow update added 360p draft renders and 1080p / 4K export on supported Gemini Omni paths. Draft the captioned clip cheaply. Upscale only the version you will post.

The official Google walkthrough below shows project layout, assets, and generation modes. Tools sit on top of that same project grid.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/oKjDeMtBZ4g"
    title="Create with Flow | How to use Google’s AI Creative Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Remix rules that keep the tools stable

Google’s Labs post tells you to duplicate and remix partner tools rather than treating them as locked apps. Keep remixed copies narrow:

- CaptionCast remix: add a language or a glossary. Do not also ask it to color-grade and add music.
- ThumbnailForge remix: lock crop and type hierarchy. Do not also ask it to generate a new face.
- Save each remix under an outcome name (`captions-en-es-lower-third`, `yt-thumb-face-right`).

The other four tools from the same drop — Mondo Sónico, Surface, CollageMotion Pro, SwissFlow Studio — follow the same remix pattern if you later need stems, material maps, collage motion, or Swiss-style titles. Leave them alone until CaptionCast and ThumbnailForge produce one clip you would actually publish.

## Credits, access, and what not to invent

Flow is a Google Labs creative studio. Access, models, and credit cost depend on your Google AI plan. Google’s own product pages state that features vary by subscription, platform (web vs mobile), and region, and that Flow is for users 18+.

Do not assume CaptionCast or ThumbnailForge run offline, run on every Workspace account, or publish straight to YouTube. Official docs describe generation inside Flow. Publishing stays in your usual editor or YouTube Studio.

If a tool run asks you to take over a browser step, treat that like any other Flow agent confirm: review before you spend credits. Agent chat in Flow does not consume credits in Google’s own tools tutorials; confirmed renders do.

## Common mistakes

- Running CaptionCast on a five-minute file first. Shorten the cut, then batch.
- Writing a 20-word headline into ThumbnailForge. The tool is built for cover lines, not meta titles.
- Remixing the shared original in place. Duplicate, then edit your copy.
- Mixing platform crops in one prompt (“make YouTube, Shorts, and Instagram versions”). Run three named remixed tools instead.

## Conclusion

CaptionCast and ThumbnailForge are partner Flow tools, not a new social network. Open the shared links Google published on September 23, 2026, duplicate each tool into your project, and run them on one short clip and one still.

When the first captioned cut and the first cover are good enough to post, save those remixed tools. That is the whole product: a repeatable caption pass and a repeatable cover pass sitting next to the rest of your Flow assets.

## Sources

- [See six new tools in Google Flow](https://blog.google/innovation-and-ai/models-and-research/google-labs/six-new-tools-built-by-creatives/)
- [Google Flow](https://flow.google.com/)
- [CaptionCast shared tool](https://flow.google.com/shared/tool/cd1f4c6f-3364-45cd-9940-af9d6e6f4e48)
- [ThumbnailForge shared tool](https://flow.google.com/shared/tool/1dbfa3aa-8bf1-466d-b0fe-43a1d4534aff)
- [Create videos in Flow — Google Flow Help](https://support.google.com/flow/answer/16353334)
- [Google Flow creative control update](https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/)
- [Introducing Gemini Omni for Google Flow](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates/)
- [Create with Flow (YouTube, Google)](https://www.youtube.com/watch?v=oKjDeMtBZ4g)
