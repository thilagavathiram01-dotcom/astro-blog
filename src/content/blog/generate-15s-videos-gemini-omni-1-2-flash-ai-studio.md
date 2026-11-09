---
title: "How to Generate 15s Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with Gemini Omni 1.2 Flash in Google AI Studio and via the API."
pubDate: 2026-11-09T10:30:00
heroImage: "https://images.unsplash.com/photo-1778052404716-b39eef1f17c6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates and edits native video clips up to 15 seconds long. It costs $0.07 per second for 720p output, which is 30 percent lower than the previous Omni 1.1 Flash rate.

You can draft at lower resolutions and upscale keepers. Conversational multi-turn editing lets you refine scenes without starting over. Reference images and short video clips help keep characters, products, and branding consistent.

This guide shows how to create and edit 15-second videos in Google AI Studio and through the Gemini API.

## What Changed in Omni 1.2 Flash

Omni 1.2 Flash supports clips from 3 to 15 seconds in one-second steps. Earlier versions stopped at 10 seconds. You can supply up to six reference images plus short motion references. The model follows those references more closely across camera angles and lighting changes.

Outputs include an imperceptible SynthID watermark. Audio reference features remain allowlisted. The model is generally available on the Gemini API, Google AI Studio, Gemini for business, Google Cloud, Google Vids, and related tools. In the Gemini app it is rolling out to Google AI Ultra subscribers first.

Pricing encourages a draft-then-upscale workflow. Generate at 360p or 720p, edit conversationally, then upscale the best results to 1080p or 4K.

![Video editing timeline on a computer monitor](https://images.unsplash.com/photo-1778052404716-b39eef1f17c6?auto=format&fit=crop&w=800&q=80)

## Generate a Video in Google AI Studio

Open [Google AI Studio](https://aistudio.google.com). Sign in with your Google account. Make sure you have access to the Omni models; paid tiers or API billing may apply depending on your plan.

1. Create a new prompt or open the video generation interface.
2. Select the model `gemini-omni-1.2-flash` from the model picker.
3. Enter a detailed text prompt. Include subject, action, camera movement, lighting, and duration. Example: “A product shot of a matte black wireless earbud case rotating slowly on a white surface, soft studio lighting, 12 seconds, smooth continuous camera orbit.”
4. Optionally upload reference images (product photos, character sheets) or a short video clip for motion style.
5. Set the desired duration between 3 and 15 seconds.
6. Choose resolution. Start with 720p or lower for drafts.
7. Generate. Review the output. Use the conversational edit interface to request changes such as “change the background to a soft gray gradient” or “slow the rotation slightly and add a subtle shadow.”

The interface keeps the scene consistent across turns. You can iterate several times before deciding on a final version.

![Photo editing interface on a laptop screen](https://images.unsplash.com/photo-1744948961024-66baaafbb5dc?auto=format&fit=crop&w=800&q=80)

## Use the Gemini API

Developers can call the model programmatically. The model ID is `gemini-omni-1.2-flash`.

Install the Google GenAI SDK for your language or use the REST endpoint. Authenticate with an API key from Google AI Studio or a Google Cloud project with the Gemini API enabled.

A basic flow looks like this:

- Send a generate request with your prompt, optional reference media, duration, and resolution parameters.
- Receive a video response (or a job ID for longer processing).
- For multi-turn editing, use the Interactions API or continue the conversation by referencing the previous output and adding a new instruction.

Check the official Gemini API documentation for the exact request schema, supported parameters, and current pricing. Note that `gemini-omni-1.1-flash` remains available during a transition window; after December 3, 2026, requests to the older model automatically route to 1.2 Flash at the new rates.

Billing is per second of generated video. Draft at lower resolution, then request an upscale only for keepers.

## Practical Tips for Better Results

Write specific prompts. Mention camera moves (“slow dolly in,” “orbiting 360”), lighting (“soft key light from the left”), and style (“product catalog look,” “cinematic”).

Use reference images for anything that must stay consistent: packaging text, logos, faces, or product colors. The model holds those details better than previous versions.

Prefer shorter conversational edits over full regenerations. Ask for one change at a time so the rest of the scene stays intact.

Start at 360p or 720p. Once the composition and motion are right, upscale. This keeps iteration costs low.

Test on product explainers, virtual try-ons, social ads, and catalog spins. These use cases benefit most from the longer duration and stronger reference following.

Review outputs for physics and text accuracy. While consistency improved, complex motion and small text can still vary.

## Watch a Clear Explanation

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iZI2yHERihI"
    title="Gemini Omni 1.2 Flash, Clearly Explained: Google's 15-Second AI Video Model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next Steps and Related Guides

Once you have a solid clip, export it or continue editing in Google Vids or other tools that support Omni outputs. For deeper API integration or multi-turn workflows, consult the Gemini API docs and the model card on the Google DeepMind site.

If you are exploring related video features, see our guide on [generating 15-second videos with Gemini Omni 1.2 Flash](/blog/generate-15-second-videos-gemini-omni-1-2-flash/).

## Sources

- Google Cloud Blog: Gemini Omni 1.2 Flash now generally available (November 5, 2026)
- Google Blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing
- Google DeepMind model card for Gemini Omni 1.2 Flash
- Gemini API documentation for Omni models
