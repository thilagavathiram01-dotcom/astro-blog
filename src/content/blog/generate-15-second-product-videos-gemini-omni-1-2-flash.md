---
title: "Generate 15-Second Product Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating consistent 15-second product videos using Gemini Omni 1.2 Flash in Google AI Studio and the Gemini app."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials"]
noindex: false
---

# Generate 15-Second Product Videos with Gemini Omni 1.2 Flash

Product videos used to require cameras, lighting, and editing software. Gemini Omni 1.2 Flash changes that. The model generates native 15-second clips with audio, holds product details across angles, and lets you edit by conversation. It launched generally available on November 5, 2026, across the Gemini API, Google AI Studio, and Gemini for business.

This guide shows how to create consistent product videos from text prompts or reference photos. You can prototype in AI Studio or use the Gemini app if you have Google AI Ultra. For more on the model’s capabilities, see our overview of [Gemini Omni 1.2 Flash 15-second videos](/blog/gemini-omni-1-2-flash-15-second-videos/).

![Professional cinema camera on a film set](https://images.unsplash.com/photo-1781127445124-25a44a673bc1?auto=format&fit=crop&w=800&q=80)

## What Gemini Omni 1.2 Flash Adds for Product Work

Omni 1.2 Flash extends generation from 10 seconds to 15 seconds. You specify duration in one-second steps from 3 to 15 seconds. Pricing dropped 30% to $0.07 per second for 720p video. Draft at 360p or 720p, edit conversationally, then upscale to 1080p or 4K.

Reference adherence improved. Upload product photos, character sheets, or short motion clips up to three seconds. The model keeps packaging text, colors, and garment details consistent across camera moves. Multi-turn editing lets you swap backgrounds, change lighting, or adjust framing without starting over. Native audio includes ambient sound, music, and dialogue with better lip-sync.

Outputs carry an imperceptible SynthID watermark. The model works in Google AI Studio, the Gemini API (Interactions API), Flow, Google Vids, and (rolling out) the Gemini app for Ultra subscribers.

## Step 1: Access the Model

Open Google AI Studio at aistudio.google.com. Sign in with your Google account. Select the model menu and choose gemini-omni-1.2-flash. If you do not see it, confirm your project has billing enabled for the Gemini API. Free tier users can still experiment with limited generations; paid usage follows the $0.07/s rate for 720p.

In the Gemini app (Ultra), look for video generation options under the model selector or Canvas tools. Google Vids also supports 15-second clips at no extra cost for Workspace users.

## Step 2: Generate from a Text Prompt

Start with a clear, specific prompt. Include product description, camera movement, lighting, duration, and aspect ratio.

Example prompt:

“15-second continuous product video of a matte black wireless earbuds case on a white marble surface. Slow 360-degree orbit camera move. Soft natural window light from the left. Subtle reflections. No people. Ambient soft music, no dialogue. 16:9, 720p.”

In AI Studio, paste the prompt into the chat. Set response format to video if available, or simply ask the model to generate the video. Specify duration: “duration 15 seconds”. The Interactions API returns the clip inline or as a URI.

Review the result. Check packaging text accuracy, lighting consistency, and motion smoothness. If the orbit jumps or text drifts, refine in the next step.

## Step 3: Use Reference Images for Consistency

For branded products, upload one to three reference photos: front, side, and detail shots. In AI Studio, attach the images and write:

“Use the attached product photos as references. Generate a 12-second catalog spin video. Keep exact logo text, color, and proportions. Camera slowly circles the product on a clean studio background. Soft key light.”

The model holds material details better than previous versions. For virtual try-on, combine a model photo with front-and-back garment shots. Ask for a 15-second sequence with 360 turns and match cuts.

## Step 4: Edit Conversationally

Once you have a base clip, continue the chat:

“Change the background to a soft gray gradient and increase the orbit speed slightly.”

Or: “Add a subtle product name overlay that fades in at second 3 and stays sharp.”

Multi-turn editing works across the full 15 seconds. You can adjust aspect ratio (16:9 or 9:16), lighting, weather, or swap elements while preserving the original performance and framing. This is faster than regenerating from scratch.

![Laptop set up for video editing with timeline open](https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?auto=format&fit=crop&w=800&q=80)

## Step 5: Export and Upscale

Download the 720p draft. If it meets your needs, upscale in the same conversation or via the API to 1080p or 4K. Google recommends drafting cheap at lower resolution, editing details, then upscaling the final version. Each second at 720p costs about $0.07; higher resolutions cost more.

In Google Vids or Flow, export directly for social or ads. Check the SynthID watermark status if your platform requires disclosure.

## Practical Tips for Better Results

Write prompts with specific camera language: “slow push-in,” “FPV flythrough,” “locked-off static shot,” or “crash zoom-out.” Avoid vague terms like “cinematic.”

For text on packaging, describe it exactly or provide a high-resolution reference. The model improved but still benefits from clear guidance.

Test short durations first (5–8 seconds) to validate style, then extend. Use the same seed if the API supports it for reproducible results.

Combine with Google AI Studio’s prompt gallery for starter examples. For developers, the official Interactions API docs show how to pass image URIs and request URI delivery for longer clips.

Businesses can use Gemini for business or Vertex AI for higher throughput. Provisioned Throughput is available for production workloads.

## Limitations to Know

Complex physics and fast sports action still need improvement. First-and-last-frame interpolation is capped at 10 seconds. Reference-to-video mode is strongest at 3–10 seconds. Always review outputs for brand accuracy before publishing.

Safety filters apply. Prompts that violate Google’s policies will be blocked.

## Conclusion

Gemini Omni 1.2 Flash makes 15-second product videos practical for individuals and small teams. Start in AI Studio with a clear prompt and reference photos, iterate by conversation, and upscale the winner. The lower price and longer duration remove previous barriers.

Try a product orbit today. For related Gemini video workflows, read our guide on multi-turn editing with the same model.

## Sources

- Google Blog: Introducing Gemini Omni 1.2 Flash (November 5, 2026)
- Google AI Studio documentation for Omni
- Gemini API Interactions guide

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BF7m7s8lDq8"
    title="NEW Gemini Omni Flash 1.2 is WILD!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
