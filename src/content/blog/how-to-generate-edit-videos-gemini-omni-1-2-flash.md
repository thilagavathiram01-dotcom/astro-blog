---
title: "How to Generate Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with Gemini Omni 1.2 Flash in AI Studio and the API, including pricing tips."
pubDate: 2026-11-11T14:00:00
heroImage: "https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "ai", "google"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on 5 November 2026. The model generates and edits videos up to 15 seconds long with native audio. It costs about 30 percent less than the previous Omni 1.1 version.

You can try it today in Google AI Studio or through the Gemini API. This guide walks through the exact steps for both options.

## What Gemini Omni 1.2 Flash Adds

The update focuses on practical production work. Clips now run from 3 to 15 seconds. You choose the exact length in one-second steps. Reference following improves, so characters, products, and brand colors stay consistent across angles and cuts.

Conversational editing lets you refine a clip turn by turn. Swap a background, change lighting, or adjust framing without starting over. Speech sounds more natural, with clearer lip-sync and support for multiple speakers. Camera moves become smoother with fewer unwanted jump cuts.

Pricing sits at roughly $0.07 per second for 720p video on the standard API rate. Draft at 360p or 720p, then upscale the best results to 1080p or 4K. Outputs carry an imperceptible SynthID watermark.

![Person editing video on a computer](https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?auto=format&fit=crop&w=800&q=80)

## Set Up Google AI Studio

Open aistudio.google.com and sign in with a Google account. Create or select an API key if you plan to call the model from code later. In the Playground, open the model selector and choose gemini-omni-1.2-flash.

Paid API access is required for most generations. Google AI Ultra subscribers get additional options in related products. Confirm billing is active before you start longer sessions.

Test a short text prompt first. Describe the scene, camera movement, lighting, and any audio elements. The model returns a video with synchronized sound.

## Generate a Text-to-Video Clip

Write a detailed prompt. Include subject, action, setting, camera style, mood, and sound. Example structure:

- Scene description and main action
- Camera movement (slow push-in, orbit, FPV flythrough)
- Lighting and color grade
- Audio cues (ambient sound, dialogue, music bed)

Set duration between 3 and 15 seconds. Choose 360p or 720p for the first pass to keep costs low. Generate the clip and review it.

If the result needs changes, continue in the same conversation. Describe the edit: “Change the background to a forest while keeping the characters and camera framing the same.” The model updates the existing clip rather than regenerating everything.

## Use Image References for Consistency

Upload up to six reference images. These can show a character, product, or style. The model holds onto faces, garments, packaging text, and brand colors across the full clip.

This works well for virtual try-on sequences or product spins. Provide front and back product shots plus a model photo. The output keeps identity and fabric details consistent through turns and match cuts.

You can also supply short motion clips up to three seconds or audio references (some audio features require allowlisting). The model follows those cues while generating the longer video.

![Laptop displaying code on a desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Call the Model via the Gemini API

Install the official Google GenAI SDK. For Python:

```bash
pip install google-genai
```

Set your API key as an environment variable. Then create an interaction:

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="gemini-omni-1.2-flash",
    input="A product bottle rotates slowly on a white studio background, soft lighting, gentle ambient music."
)
print(interaction.output_text)
```

The Interactions API is the recommended path for new projects. GenerateContent remains available. Check the official Gemini API documentation for video-specific parameters, resolution options, and continuation methods.

For production workloads, Google Cloud offers Provisioned Throughput and enterprise security controls. The same model ID works across both surfaces.

## Edit and Extend Existing Clips

Start with a generated or uploaded video. In subsequent turns, describe the change you want. Examples include:

- “Replace the outdoor market background with an indoor studio while keeping the speaker and camera angle.”
- “Extend this 10-second clip by five more seconds, continuing the same camera move.”
- “Switch the aspect ratio to 9:16 and adjust framing for vertical video.”

Multi-turn editing works across the full 15-second length. This reduces re-generation cost and keeps continuity.

First-and-last-frame interpolation is also supported. Provide a start image and an end image; the model creates a continuous transition between them (typically 3–10 seconds).

## Tips for Better Results

Draft at lower resolution first. Review the clip, then upscale only the versions you want to keep. This keeps token spend down.

Write prompts that specify both picture and sound. Mention lip-sync needs, number of speakers, and ambient audio when relevant.

Test reference images at the start of a project. Strong references reduce drift on longer clips and multi-shot sequences.

Check official pricing before large runs. Rates can vary by region and account type. Review responses for accuracy, especially with on-screen text or complex motion.

If you already work with other Gemini models, the same AI Studio and API setup applies. See our guide on [how to use Gemini 4 Carbon in Google AI Studio](/blog/how-to-use-gemini-4-carbon-google-ai-studio/) for related developer workflows.

## Where Else You Can Use It

Gemini Omni 1.2 Flash is rolling out across Google products. Google AI subscribers can try it in the Gemini app (15-second clips available to Ultra). It appears in Google Flow, Google Vids, and Google Ads tools. Business users access it through Gemini for business and the Google Cloud console.

Availability depends on your plan, region, and language. Confirm the latest status in the product interface.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/6SdsDI-mois"
    title="Gemini Omni 1.2 Flash: Everything NEW in 8 Minutes"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini Omni 1.2 Flash makes short-form video generation and editing faster and more affordable. Start in Google AI Studio with a clear prompt and reference images. Move to the API when you need to automate or integrate the model into your own tools.

Draft cheaply, edit conversationally, and upscale the keepers. Official documentation and pricing pages remain the best place for the latest parameters and limits.

## Sources

- Google Blog: Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips (5 November 2026)
- Google AI Studio: Gemini Omni Flash model documentation and pricing
- Google Cloud Blog: Gemini Omni 1.2 Flash generally available
- Google DeepMind: Gemini Omni 1.2 Flash model card
