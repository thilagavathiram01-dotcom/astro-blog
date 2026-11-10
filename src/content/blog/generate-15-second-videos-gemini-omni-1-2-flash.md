---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to create and edit 15-second videos with Gemini Omni 1.2 Flash in Google Flow using free credits."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1742144897663-6c8c6faaf1ab?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The model generates videos up to 15 seconds long, supports conversational edits, and costs 30 percent less than the previous version. Everyday users can try it for free in Google Flow with 50 daily credits.

This guide shows how to create and refine clips in Flow without a paid plan. You draft at low resolution, edit with follow-up prompts, and export when the result matches your needs.

## What Changed in Omni 1.2 Flash

The update adds native 15-second clips instead of the prior 10-second limit. You set duration in one-second steps from 3 to 15 seconds. Pricing dropped to $0.07 per second for 720p video on paid plans. Free accounts in Flow still receive 50 credits each day and can generate up to 10-second clips.

Conversational editing lets you change one element—such as background, lighting, or an object—while the rest of the scene stays intact. Reference following improved, so uploaded images for characters, products, or style hold more consistently across frames. Speech sounds more natural with clearer lip-sync and support for multiple speakers.

Outputs include an imperceptible SynthID watermark. The model works in Google Flow, Google Vids, the Gemini API, and Google AI Studio.

![Laptop displaying video editing software on a desk](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)

## Free Access in Google Flow

Open flow.google.com and sign in with any Google account. No separate subscription is required for the free tier. Each day you receive 50 credits. A 5-second clip at 360p costs about 5 credits. A 10-second clip at 360p costs about 10 credits. 720p costs roughly three times more, so most free users start at 360p to test ideas.

Peak hours (roughly 2 PM to 5 PM UTC) may restrict free generation. Outside those windows the full daily allotment is available. Free clips max out at 10 seconds. Paid plans unlock the full 15-second length and higher resolutions.

Google Vids offers another free path: a personal Google account receives 60 seconds of clips per month, enough for about four 15-second videos. Flow gives more daily volume for experimentation.

## Step-by-Step: Create a Video in Flow

1. Go to flow.google.com and log in.
2. Start a new project. In the prompt box, open settings and select Omni Flash 1.2 as the model.
3. Choose aspect ratio (16:9 or 9:16), resolution (start with 360p), and length (up to 10 seconds on free).
4. Enter a clear prompt. Include subject, action, setting, camera movement, and lighting. Example: "A person walks through a sunlit park, camera slowly pans right, golden hour light, natural sound of birds."
5. Optionally upload a start frame or reference images for character or style consistency.
6. Generate. Review the clip. If something needs adjustment, type a follow-up such as "change the background to a city street at night" or "make the person wear a red jacket."
7. Once satisfied, download the MP4. On paid plans you can upscale to 1080p or 4K.

The same chat thread keeps context, so later edits build on earlier ones without regenerating the entire clip.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cIfN0CJRDpc"
    title="How to Use Gemini Omni 1.2 Flash for FREE Right Now"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Better Results

Draft at 360p first. It costs fewer credits and generates faster. Move only the best versions to 720p.

Use reference images when consistency matters. Upload a clear photo of a product or person and mention it in the prompt. The model follows these anchors more closely than in the prior version.

Break complex ideas into steps. Generate a short establishing shot, then edit to add dialogue or change the camera angle. Multi-turn editing preserves the parts you already like.

Specify audio when needed. Omni 1.2 produces more natural speech. Write dialogue lines and note who speaks them for clearer results.

Watch credit usage in the settings panel before you generate. Free accounts reset daily, so plan longer sessions for off-peak hours.

![Professional video camera on a tripod in a studio](https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?auto=format&fit=crop&w=800&q=80)

## How This Compares to Other Tools

Omni 1.2 Flash focuses on longer native clips and conversational edits inside one interface. If you already use the Gemini app for documents and PDFs, the video workflow follows a similar pattern of generate then refine. Our earlier guide covers [how to generate and edit files in the Gemini app](/blog/generate-preview-edit-files-gemini-app/).

For developers, the Gemini API offers the same model with per-second pricing. Google AI Studio provides a quick way to prototype prompts before moving to production.

## Limitations to Know

Free Flow accounts cannot create 15-second clips. The 10-second limit applies until you upgrade. Text on screen remains imperfect in some cases. Complex multi-character dialogue can still drift. Always review outputs before publishing.

The SynthID watermark is present on every clip. It does not appear visually but identifies AI-generated content.

## Conclusion

Gemini Omni 1.2 Flash lowers the barrier for short video creation. Free credits in Google Flow let you test 360p drafts, refine with chat, and download usable clips the same day. Start with a simple prompt, edit one detail, and see how the conversational loop works for your own projects.

## Sources

- Google: [Gemini Omni 1.2 Flash: 15-second video and lower pricing](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
- Google Flow: [flow.google.com](https://flow.google.com)
- Tutorial: [How to Use Gemini Omni 1.2 Flash for FREE Right Now](https://www.youtube.com/watch?v=cIfN0CJRDpc)
