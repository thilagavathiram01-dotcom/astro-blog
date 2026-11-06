---
title: "Generate 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to creating and editing 15-second videos with Gemini Omni 1.2 Flash in AI Studio and the API, including pricing and tips."
pubDate: 2026-11-06T19:00:00
heroImage: "https://images.unsplash.com/photo-1749410342681-3510f9edb7ad?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google released Gemini Omni 1.2 Flash on November 5, 2026. The update extends native video generation to 15 seconds, improves reference adherence, and cuts the price for 720p output by 30 percent to $0.07 per second. Developers and creators can now produce longer, more consistent clips in a single pass and refine them through conversation.

This guide walks through access, generation, editing, and practical workflows using official Google tools.

## Access Gemini Omni 1.2 Flash

Gemini Omni 1.2 Flash is generally available on the Gemini API and Google AI Studio. Open aistudio.google.com and sign in. Select the model gemini-omni-1.2-flash from the dropdown. Business users can also reach it through Google Cloud Vertex AI and Gemini for business.

You need a Google account. Paid API usage requires a billing-enabled project. Free tiers and subscriber access vary by surface: Gemini app Ultra users get 15-second clips, while API and AI Studio follow standard pricing.

![Professional video camera rig with external monitor](https://images.unsplash.com/photo-1757845701047-69080f6b1139?auto=format&fit=crop&w=800&q=80)

## Generate a 15-Second Video

Start with a clear text prompt or a reference image. Omni 1.2 Flash accepts text, images, short video clips (up to three seconds), and audio cues. Specify duration in one-second steps from 3 to 15 seconds.

1. In AI Studio, choose the Omni 1.2 Flash model.
2. Enter a detailed prompt that describes the scene, camera movement, subjects, lighting, and exact duration. Example: "A 12-second continuous FPV drone flight through a modern kitchen, starting at the island and ending at the window, golden hour light, no cuts."
3. Optionally upload a product photo or character sheet as a reference image. The model maintains identity, colors, and typography across the clip.
4. Set resolution to 720p for the draft. Submit and wait for generation.
5. Review the output. If a detail is off, continue in the same conversation rather than regenerating from scratch.

Drafts at 360p or 720p keep costs low. Upscale selected clips to 1080p or 4K afterward.

## Edit Through Conversation

Multi-turn editing is a core feature. After the first generation, reply with instructions such as "Change the background to a forest while keeping the characters and camera path the same" or "Swap the product packaging to the blue version and adjust lighting."

The model holds previous details, so characters, garments, and brand elements stay consistent. This works across the full 15-second length. Use it to create ad variants without starting over.

For first-and-last frame interpolation, provide a starting image and an ending image. Duration for this mode stays between 3 and 10 seconds.

![Small drone with camera for aerial shots](https://images.unsplash.com/photo-1774553944407-2bab830a7967?auto=format&fit=crop&w=800&q=80)

## Pricing and Cost Control

Official pricing lists $0.07 per second for 720p video, 30 percent lower than Omni 1.1 Flash. Similar reductions apply at other resolutions. Generate short drafts, refine with targeted edits, then upscale only the final versions. Refused or failed requests are not charged.

Outputs include an imperceptible SynthID watermark. Enterprise users can request Provisioned Throughput on Google Cloud.

## Practical Tips

Write specific prompts that name camera moves, lighting, and consistency requirements. Reference images work best for products, faces, and brand colors. Short motion clips (under three seconds) help lock movement style.

Break longer stories into 10- to 15-second segments and stitch them later if needed. Test speech and lip-sync on dialogue scenes; the model supports multi-speaker conditioning with clearer results than prior versions.

If you are already building apps in AI Studio, see our guide on [building apps with Gemini 4 Argon](/blog/build-apps-gemini-4-argon-ai-studio/) for complementary workflows.

## Watch Official Demos

Google published demos of Omni capabilities. This official video shows the core model family in action.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uW4B6ziQqvY"
    title="What is Gemini Omni?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next Steps

Open Google AI Studio, select Gemini Omni 1.2 Flash, and generate a short test clip with a reference image. Iterate once or twice in conversation, then upscale the best result. Check the Gemini API docs for code examples if you want to integrate generation into an application.

The 15-second length and lower price make volume production of product videos, explainers, and social ads more practical. Start with a clear prompt and a strong reference, then refine.

## Sources

- Google Blog: Gemini Omni 1.2 Flash: 15-second video and lower pricing
- Google Cloud Blog: Gemini Omni 1.2 Flash now GA
- Google DeepMind: Gemini Omni 1.2 Flash model card
- Gemini API documentation and AI Studio
