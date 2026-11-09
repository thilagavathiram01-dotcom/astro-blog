---
title: "Create 15-Second Videos with Gemini Omni 1.2 in Google Flow"
description: "Step-by-step tutorial to generate longer, consistent AI videos using Gemini Omni 1.2 Flash in Google Flow with references and editing."
pubDate: 2026-11-09T16:00:00
heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google"]
noindex: false
---

Google rolled out Gemini Omni 1.2 Flash on November 5, 2026. The update brings native 15-second video clips, stronger character consistency, multi-turn editing, and lower pricing. Google Flow is one of the main places to use it for creative work.

This guide walks through starting a project in Flow, selecting Omni 1.2 Flash, adding reference images for consistent characters, generating a full 15-second clip, and refining it through conversation. All details come from Google’s official announcement and Flow capabilities.

## What Changed with Omni 1.2 Flash

Omni 1.2 Flash extends the previous Omni 1.1 limits. Key improvements include:

- Native generation and editing up to 15 seconds (previously 10). You can set duration in one-second steps from 3 to 15 seconds.
- Better reference adherence. Character faces, clothing, product details, and brand colors hold across camera angles and longer sequences.
- Multi-turn conversational editing on full-length clips. Swap backgrounds, adjust lighting, or change elements without regenerating from scratch.
- More natural speech and lip-sync, plus smoother continuous camera moves with fewer jump cuts.
- Pricing dropped 30% from Omni 1.1. In the API it is $0.07 per second for 720p.

In Google Flow, free accounts typically get clips up to 10 seconds with daily credits. Google AI subscribers unlock the full 11-to-15-second range and extension features. Outputs include an imperceptible SynthID watermark.

![Film camera and video production equipment on a table](https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80)

## Getting Started in Google Flow

Open Google Flow at labs.google/fx/tools/flow and sign in with your Google account. Create a new project. The interface lets you choose between image and video generation modes.

Switch to Video mode. Select the Gemini Omni 1.2 Flash model (it may appear as Omni Flash 1.2). Choose resolution: start with 360p for drafts to conserve credits, then move to 720p once the prompt works. Set aspect ratio to match your goal (16:9 for landscape or 9:16 for vertical social clips). Pick a duration up to the limit available on your plan.

If you do not see Omni 1.2 yet, update the page or check that the rollout has reached your account. Google began making it generally available across Flow, the Gemini API, and other surfaces on November 5.

For related ways to build with Google’s AI tools on Android, see our guide on [adding Gemini 4 Argon to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

## Step-by-Step: Generate a Consistent Character Video

1. Prepare references. Create or upload clear images of your character, product, or scene. Omni 1.2 holds identity better when you supply front, side, and detail shots. For characters, consistent lighting in the references helps.

2. Enter a detailed prompt. Describe the action, camera movement, setting, and dialogue. Example: “A woman in a blue jacket walks toward the camera across a rainy Tokyo street at dusk, neon signs reflecting in puddles. She smiles and says ‘Welcome to the city.’ Continuous handheld tracking shot, natural audio.”

3. Attach ingredients or references. Use the Ingredients option to tag your character or product images. Omni 1.2 Flash supports combining character, product, or style references plus short motion or audio cues.

4. Generate. Review the credit cost and confirm. The model produces the clip with improved consistency from first to last frame.

5. Refine with multi-turn edits. In the chat or agent interface, type follow-up instructions such as “Change the background to a night market while keeping the character and camera move the same” or “Make the lighting warmer.” The model edits the existing clip rather than starting over.

6. Extend if needed (subscribers). Use the extend feature with additional ingredients to add up to 10 seconds while steering the next action.

7. Upscale and export. Once satisfied, upscale to 1080p or 4K if available on your plan, then download.

Free daily credits in Flow (often 50) make short drafts practical. Paid Google AI plans remove more limits and unlock longer continuous generations.

## Tips for Better Results

- Draft at lower resolution first. Confirm the story and character before committing credits to 720p or higher.
- Use specific camera language. Terms like “continuous FPV flythrough,” “slow push-in,” or “no jump cuts” leverage the improved motion control.
- Keep references high quality and consistent. Omni 1.2 reduces drift, but mismatched lighting or angles in input images still affect output.
- Test speech with short dialogue. The model handles multi-speaker conditioning and clearer lip-sync better than earlier versions.
- Combine with Google Vids for free monthly 15-second clips if Flow credits run low. Anyone with a Google account can generate up to three 15-second videos per month in Vids at no extra cost.

## Watch a Practical Walkthrough

This recent tutorial demonstrates generating 15-second clips with consistent characters and voice references in Google Flow using Omni 1.2 Flash.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/hEwfaA-j4IY"
    title="Google Flow Omni 1.2 Flash: 15 Sec AI Videos with Same Face & Voice (Full Tutorial)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash in Google Flow makes longer, more controllable AI videos practical for creators. The combination of 15-second native length, stronger reference following, and conversational editing reduces the need for repeated full regenerations.

Start with a clear set of reference images, select Omni 1.2 Flash in Video mode, and iterate with short follow-up prompts. Check your available credits and plan limits, then export the finished clip. The same model is also available via the Gemini API for developers who want to build it into their own tools.

## Sources

- Google Blog: Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips (November 5, 2026)
- Google Flow official site and product updates
- Google Vids announcement for Omni 1.2 Flash free monthly generations
