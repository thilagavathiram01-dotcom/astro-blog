---
title: "How to Make Free HD Videos in Google Vids With Omni"
description: "Create 1080p AI video scenes in Google Vids with Gemini Omni 1.1 Flash. Start at vids.new, extend clips, add photos, and check SynthID watermarks."
pubDate: 2026-09-28T08:30:00
heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4dacc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "google", "productivity"]
noindex: false
---

Google Vids is no longer only a slide-style editor for Workspace teams. On 23 September 2026, Google said anyone with a Google or Workspace account can generate high-definition video scenes in Vids at no cost, using **Gemini Omni 1.1 Flash**.

That matters if you need a product clip, event promo, or landing-page loop and you do not want a separate video tool. You open [vids.new](https://docs.google.com/videos/create), pick **Create AI videos**, and direct scenes instead of assembling every cut by hand.

This guide follows the official Workspace blog and the Omni 1.1 Flash notes. It covers setup, generation, scene length, HD output, watermarks, and the voiceover that is still rolling out.

## What Google actually shipped

The Workspace post is specific. Omni 1.1 in Google Vids is meant for direction, not one-shot prompting:

- **Extend scenes** while keeping lighting, characters, and environment consistent.
- **Set exact clip duration** so a generated shot matches a voiceover or music bed.
- **Generate in HD** at 1080p, or upscale existing AI clips so they match the rest of the timeline.

Google also lists who the controls are for: a side project that needs a template, a shop that has a few product photos, a marketing team that needs social or signage clips, and a community group that needs an event video.

This is not the same surface as the Gemini app or Google Flow. Those still exist for short conversational edits. Vids is the Workspace document: scenes sit on a timeline you can keep editing with colleagues.

If you already generate clips in the Gemini app, treat Vids as the place you assemble and brand them. Our [Gemini Omni generate-and-edit guide](/blog/gemini-omni-generate-edit-videos/) covers the app and API path.



![Video editor reviewing clips on a desktop monitor](https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80)



## What you need first

1. A personal Google Account or a Workspace account that can open Google Vids.
2. A desktop browser. Google’s launch path is **vids.new** on desktop.
3. Photos or a short brief if you want product or location fidelity. Text-only prompts still work.
4. Time to review output. Omni can invent details that do not match your photos.

Free generation is the headline. Paid **Google AI** plans and Workspace Business or Enterprise plans add larger generation pools and admin controls. Google points personal accounts to [Google AI plans](https://one.google.com/about/google-ai-plans/) and teams to the Workspace Learning Center.

Do not expect a cinema-length film. Official Omni 1.1 API docs describe short generated shots (commonly a few seconds up to about ten), with scene extension used to grow a story. Vids wraps those shots in a timeline.

## Watch how Omni edits video

Google’s public Omni demo shows conversational edits, character consistency, and physics-aware generation. The same model family now sits behind Vids.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/guv2-EoGUXw"
    title="How to edit and create videos with Gemini Omni"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1 — Open Vids and start an AI video

1. On a computer, go to [vids.new](https://docs.google.com/videos/create).
2. Sign in with the account that should own the file.
3. In the creation menu, select **Create AI videos**.
4. Name the file before you generate. Vids files live in Drive like Docs and Slides.

If you only see classic templates, update the page or confirm Vids is enabled for the Workspace org. Consumer accounts should see the AI entry after the 23 September rollout, but flags can lag.

## Step 2 — Write a scene, not a slogan

Treat the first prompt like a shot list.

Good inputs:

- Subject, setting, camera move, lighting, and duration.
- One product photo or a few arrival photos if you are making a shop promo.
- A sentence of dialogue only if a character must speak on camera.

Weak inputs:

- “Make it viral.”
- A five-minute plot in one paragraph.
- Brand slogans with no visual instruction.

Example that matches Google’s product-photo use case: “Handheld shot of these ceramic mugs on a sunlit wooden counter. Slow push-in, 6 seconds, shallow depth of field, no extra logos.”

Generate a short first take. Then extend or replace a beat instead of regenerating the whole story.

## Step 3 — Extend, time, and output in HD

Use the controls Google named in the Vids post:

**Extend.** Continue a scene so lighting and character appearance stay aligned with the prior clip. On the developer side, Omni 1.1 can read up to 10 seconds of prior context and extend in 10-second increments (API total length is documented up to 40 seconds). In Vids, use extend when a shot ends too early, not when you want a new location.

**Duration.** Set the length so the clip matches a voiceover line. Guessing “about eight seconds” wastes regenerations.

**HD.** Create new AI scenes in 1080p, or upscale older AI clips so mixed resolutions do not pop on the timeline. The broader Omni 1.1 stack can go to 4K in developer surfaces. The Vids announcement focuses on 1080p HD for free account generation.

Draft cheap, then upscale the keepers. That is the same pattern Google describes for 360p prototyping in the Omni 1.1 developer post.



![Camera and laptop set up for a short product video](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)



## Step 4 — Share with a watermark in mind

Every clip generated with Omni 1.1 in Google Vids includes an imperceptible **SynthID** watermark in the frames. Google says viewers can use that mark to verify the footage was generated with AI.

Do not strip or crop in a way that fights that disclosure. If you publish the video on a landing page or social channel, keep the original export from Vids.

Share the Vids file like any Drive document when teammates need to edit scenes. Export a finished file when you only need a download.

## Voiceover is coming, not fully here

Google says **Gemini 3.8 Flash-Lite text-to-speech** in Vids will turn a script into narration across 100+ languages. That feature is labeled **coming soon** in the 23 September post.

Until it lands in your account, record a short voice track elsewhere or wait. When TTS arrives, write the script first, lock scene durations, then generate speech so you are not stretching clips after the fact.

The standalone TTS workflow is covered in [How to Add Gemini 3.8 Voiceovers in Google Vids](/blog/gemini-3-8-voiceovers-google-vids/).

## Practical workflows that match the official examples

**Product drop.** Photograph two or three items in even light. Drop the photos into the AI video flow. Ask for a 6-second shelf shot and a 5-second detail shot. Extend only if the camera move is cut off.

**Local event.** Use a template, then replace the title card and generate one establishing scene of the venue type you actually have (park, hall, storefront). Do not invent a stadium you cannot host.

**Internal update.** Keep text on-screen in Vids’ editor for names and dates. Let Omni handle b-roll, not legal copy.

**Landing page loop.** Generate one 1080p scene, export, and test the file size before you embed it. Loops hide weak narrative better than they hide mushy product detail.

## Limits and mistakes to avoid

- Vids is not a replacement for filmed interviews or licensed footage of real customers.
- Omni can keep characters consistent and still change a logo, label, or skyline. Check every frame that shows a product.
- Free generation still consumes a quota. Batch your keepers instead of regenerating for tiny prompt tweaks.
- Workspace admins can restrict AI features. If **Create AI videos** is missing at work, that is often policy, not a broken link.
- SynthID does not replace your own disclosure if a platform or client requires a visible AI label.

## Conclusion

Google opened HD scene generation in Google Vids to ordinary Google accounts on 23 September 2026. The useful part is control: duration, scene extension, 1080p output, and a timeline you can keep editing.

Start at vids.new, write one concrete shot, generate in HD, and extend only when the story needs more of the same scene. Add voiceover when 3.8 Flash-Lite TTS appears in your project. Keep Flow or the Gemini app for throwaway experiments; keep Vids when the file has to live next to the rest of your Drive work.

## Sources

- [Anyone can make stunning HD videos with Gemini Omni in Google Vids](https://blog.google/products-and-platforms/products/workspace/gemini-omni-in-google-vids/) — Google Workspace blog, 23 September 2026
- [Gemini Omni 1.1 Flash lets you build with more control](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/) — Google, 27 August 2026
- [Introducing Gemini Omni](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/) — Google DeepMind, 19 May 2026
- [Gemini Omni Flash model card](https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash) — Gemini API docs
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
- [Google Vids product page](https://workspace.google.com/products/vids/)
- [How to edit and create videos with Gemini Omni](https://www.youtube.com/watch?v=guv2-EoGUXw) — Google on YouTube
