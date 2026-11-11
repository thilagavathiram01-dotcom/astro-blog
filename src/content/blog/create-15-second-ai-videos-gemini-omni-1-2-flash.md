---
title: "Create 15-Second AI Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to generate and edit 15-second AI videos with Gemini Omni 1.2 Flash in Google Vids, Flow, or the API at lower cost."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google", "productivity"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The update lets you generate and edit video clips up to 15 seconds long, down from the previous 10-second limit, at 30% lower cost. A 720p second now costs $0.07.

This guide shows how to create and refine those longer clips using free or low-cost options first, then scale to the API if needed. All details come from Google’s official announcement and documentation.

## What changed in Omni 1.2 Flash

Gemini Omni 1.2 Flash is the current video generation and editing model in the Omni family. It accepts text, images, short video clips (up to three seconds), and audio references. It outputs video with native audio including speech, music, and sound effects.

Key improvements over Omni 1.1 Flash:

- Native clip length of 3–15 seconds in one-second steps (previously max 10 seconds).
- 30% price cut to $0.07 per second for 720p video.
- Stronger reference adherence so faces, clothing, packaging, and brand colors stay consistent across angles and cuts.
- Multi-turn conversational editing on full 15-second clips—change a background, lighting, product, or aspect ratio without starting over.
- Better multi-speaker dialogue with clearer lip-sync.
- More controllable continuous camera moves such as FPV fly-throughs and crash zoom-outs with fewer jump cuts.

You can draft at 360p or 720p, edit conversationally, then upscale the best results to 1080p or 4K. Outputs carry an imperceptible SynthID watermark.

The model is available in the Gemini API, Google AI Studio, Google Cloud, Google Flow, Google Vids, the Gemini app (for Google AI subscribers), and related tools.

![Person working on a laptop with video editing software on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Free way: Google Vids

Anyone with a Google account can generate up to three 15-second videos per month in Google Vids at no extra cost.

1. Go to [vids.new](https://vids.new) or open Google Vids in your Workspace account.
2. Start a new video or use the AI video tools.
3. Write a detailed prompt that describes the scene, characters, motion, camera movement, and audio. Example: “A continuous 15-second FPV drone shot flying from a sunny beach shoreline close-up out to a wide aerial view of a tropical island with gentle waves and upbeat instrumental music.”
4. Choose landscape or portrait, set length between 3 and 15 seconds, and select quality (start with 720p or lower for drafts).
5. Generate the clip. Review it.
6. Use conversational edits if available: type instructions such as “change the sky to sunset” or “add a small boat on the water” to refine the same clip.
7. Insert the result into your project and download as MP4 when ready.

This is the simplest path for product promos, social clips, or explainers. Free generations are watermarked.

## Google Flow for more control

Google Flow (labs.google/fx/tools/flow) gives interactive generation and editing. Free users receive daily credits (around 50 in recent reports). Paid Google AI plans unlock more.

1. Open Flow and select Gemini Omni 1.2 Flash.
2. Enter a prompt or upload reference images (character sheets, product photos, style frames).
3. Set duration up to 15 seconds and resolution.
4. Generate. Then chat with the tool to edit: “swap the background to a forest while keeping the characters and camera the same,” or “make the lighting warmer.”
5. Extend or upscale the final version.

Flow is useful when you want first-and-last frame control or multi-reference consistency for try-on videos or branded sequences.

![Close-up of hands typing on a laptop keyboard with tech equipment nearby](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80)

## Developer path: Gemini API and AI Studio

For production volume or custom apps, use the paid Gemini API.

1. Open [Google AI Studio](https://aistudio.google.com) and select the model `gemini-omni-1.2-flash`.
2. Or call the API directly. Check the [Omni developer docs](https://aistudio.google.com/docs/omni) and [pricing page](https://aistudio.google.com/docs/pricing#gemini-omni-1.2-flash).
3. Supply text prompt plus optional image or short video references.
4. Specify duration, aspect ratio (16:9 or 9:16), and resolution. Draft at lower resolution then upscale.
5. Parse the returned video (with audio) and apply further conversational edits via additional calls if needed.

Businesses can also access it through Google Cloud Vertex AI / Gemini Enterprise Agent Platform with provisioned throughput options.

Example use cases from Google’s launch notes include virtual try-on sequences that keep garment details consistent across turns, multi-character dialogue with lip-sync, continuous camera tours of architecture, and layered typography animations.

## Practical tips for better results

- Write specific prompts that include camera movement, lighting, mood, and exact duration. “15-second continuous shot” works better than vague requests.
- Provide clear reference images for characters, products, or styles. Omni 1.2 holds details more reliably than the prior version.
- Draft cheap and fast at 360p/720p, then upscale only the keepers.
- Use multi-turn editing to fix one element (background, weather, product) instead of regenerating everything.
- For speech, supply short voice or character references when available for better lip-sync and multi-speaker clarity.
- Check SynthID presence if you need provenance tracking.

Limitations remain: generation is not free on the API, free tiers have monthly or daily caps, and complex physics or long multi-shot stories still benefit from human review. Results can vary with prompt quality and reference clarity.

## Where it fits in your workflow

Omni 1.2 Flash pairs well with other Gemini tools. You can generate a short product explainer here, then use Gemini in Docs or the app to write the script or captions. For Android developers building related features, see our guide on [adding Gemini models to Android apps with Firebase AI Logic](/blog/add-gemini-4-carbon-android-firebase-ai-logic/).

Start with Google Vids if you want zero cost. Move to Flow for interactive refinement. Graduate to the API when you need volume, custom integration, or enterprise controls.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash makes 15-second AI video practical for everyday use. Lower pricing, longer native clips, conversational editing, and better consistency remove earlier friction. Free options in Google Vids let anyone test it immediately, while the API and Cloud handle scale.

Try a simple product or social prompt today in Vids, then refine with a conversational edit. Official sources confirm the capabilities and pricing, so results should match the documented behavior as the rollout continues.

## Sources

- [Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) — Google Blog, 5 November 2026
- [Create longer AI videos with Omni 1.2 in Google Vids](https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/) — Google Blog, 5 November 2026
- [Gemini Omni 1.2 Flash now GA](https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available) — Google Cloud Blog, 5 November 2026
- [Gemini Omni model page](https://deepmind.google/models/gemini-omni/) — Google DeepMind
- [Gemini API Omni documentation](https://aistudio.google.com/docs/omni) — Google AI Studio
