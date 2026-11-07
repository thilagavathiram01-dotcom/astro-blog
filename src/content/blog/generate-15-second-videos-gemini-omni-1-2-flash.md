---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Create and edit 15-second AI videos with Gemini Omni 1.2 Flash in AI Studio, Google Vids, and the API. Step-by-step guide for 2026."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "productivity"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits videos up to 15 seconds long with native audio, stronger reference consistency, and multi-turn conversational edits.

It costs 30% less than Omni 1.1 at $0.07 per second for 720p output. You can draft at lower resolutions and upscale keepers to 1080p or 4K.

This guide shows how to access the model, generate your first clip, use reference images, and refine results through conversation. All details come from Google’s official announcement and documentation.

## What’s New in Omni 1.2 Flash

Omni 1.2 Flash builds on the earlier Omni Flash model. Key changes include:

- Native length up to 15 seconds, selectable in one-second steps from 3 to 15 seconds.
- Multi-turn editing on full-length clips. Swap backgrounds, change lighting, or adjust aspect ratio without regenerating from scratch.
- Better adherence to character, product, and style references across camera moves.
- Improved speech, lip-sync, and multi-speaker conditioning.
- Continuous camera control with fewer unwanted cuts.

Outputs include an imperceptible SynthID watermark. The model is generally available on the Gemini API and Google Cloud.

![Professional video camera on a tripod in a studio](https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=800&q=80)

## Where You Can Use It

Access paths as of November 2026:

- Google AI Studio: Select gemini-omni-1.2-flash in the playground for prototyping.
- Gemini app: 15-second clips rolling out to Google AI Ultra subscribers.
- Google Vids: Up to three free 15-second videos per month with a Google account or Workspace subscription. Visit vids.new.
- Google Flow: Scene direction and multi-turn edits.
- Gemini API and Vertex AI: Production use with Provisioned Throughput available.
- Third-party platforms such as Runway, Artlist, and Segmind.

Google AI Pro and Ultra plans unlock higher limits in consumer surfaces. API usage is billed per second.

## Step-by-Step: Generate a Text-to-Video Clip

Start in Google AI Studio.

1. Open aistudio.google.com and sign in.
2. Create a new prompt and choose the model gemini-omni-1.2-flash.
3. Enter a detailed prompt. Example: “A golden retriever runs through a field of wildflowers at golden hour. Single continuous tracking shot, warm backlight, soft wind sound, no music.”
4. Set duration to 10 or 15 seconds and resolution to 720p for the first pass.
5. Run the generation. Review the result, then request an edit if needed.

You can also supply a starting image or both a first and last frame for interpolation (up to 10 seconds for interpolation).

## Using Reference Images and Motion

Upload up to several reference images of a character, product, or style. Add a short motion clip (up to three seconds) if you have one.

Prompt example for consistency: “The woman from the reference photo walks through a farmers market holding the tumbler from the second image. She takes a sip. 9:16 vertical, 12 seconds, natural daylight, ambient market sounds.”

The model keeps faces, garments, packaging text, and brand colors consistent across angles. This works well for virtual try-ons, product spins, and branded ads.

## Conversational Editing

After the first generation, continue in the same conversation.

- “Change the background to an oak forest at dusk while keeping the characters and camera framing the same.”
- “Make it night and raining. Add soft rain sounds.”
- “Switch to 9:16 and upscale to 1080p.”

Edits apply to the full clip length. This reduces cost compared with regenerating the entire sequence.

![Video editing timeline on a computer monitor](https://images.unsplash.com/photo-1778052404716-b39eef1f17c6?auto=format&fit=crop&w=800&q=80)

## Practical Tips

Describe the full shot: subject, action, setting, lighting, camera move, and audio. State “single continuous shot” or “no scene cuts” when you want one take.

Draft at 360p or 720p, refine with conversation, then upscale only the final version. Specify dialogue in quotes and name speakers for better lip-sync.

For longer sequences, generate segments and stitch them in an editor. Related interactive world simulation is available in Genie 4; see our guide on [how to access Google Genie 4 interactive worlds](/blog/access-google-genie-4-interactive-worlds/).

Check outputs for visual drift on complex motion or fine text. Review SynthID and content credentials before commercial use.

## Watch a Clear Explanation

This video covers the 15-second length, pricing, draft-then-upscale workflow, and comparisons with other models.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iZI2yHERihI"
    title="Gemini Omni 1.2 Flash, Clearly Explained: Google's 15-Second AI Video Model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing (November 5, 2026). https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/
- Google Cloud: Gemini Omni 1.2 Flash now generally available.
- Google Vids announcement for free generation with Omni 1.2.
- Official model details and developer documentation on AI Studio.

Gemini Omni 1.2 Flash makes longer, more controllable video generation practical for product explainers, social ads, and creative drafts. Start with a short prompt in AI Studio or Google Vids today, refine through conversation, and scale the clips that work.
