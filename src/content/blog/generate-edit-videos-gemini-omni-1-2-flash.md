---
title: "How to Generate and Edit 15-Second Videos with Gemini Omni 1.2 Flash"
description: "Step-by-step guide to generating and editing up to 15-second videos with native audio using Gemini Omni 1.2 Flash on AI Studio and Google Vids."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "google", "productivity"]
noindex: false
---

Google made Gemini Omni 1.2 Flash generally available on November 5, 2026. The model generates and edits videos up to 15 seconds long with native synchronized audio. It costs 30 percent less than the previous version at $0.07 per second for 720p output.<grok type="render_inline_citation" citation_id="67" />

You can draft at lower resolutions, refine details through conversation, and upscale the best results to 1080p or 4K. The model is available in the Gemini API, Google AI Studio, Google Cloud, Google Vids, Flow, and rolling out to Google AI Ultra subscribers in the Gemini app.

This guide shows how to create and edit 15-second clips using the free tools most people already have.

## What Changed in Omni 1.2 Flash

Omni 1.2 Flash extends maximum clip length from 10 seconds to 15 seconds. You choose any duration from 3 to 15 seconds in one-second steps. Reference following improved, so characters, products, clothing, and brand colors stay consistent across camera moves and cuts.<grok type="render_inline_citation" citation_id="87" />

Multi-turn conversational editing works on full 15-second clips. You can swap a background, change lighting, or switch aspect ratio without regenerating the entire video. Speech sounds more natural with better lip-sync for multiple speakers.


![Laptop showing video editing timeline with smartphone nearby](https://images.unsplash.com/photo-1742829705753-f07509bc88ac?auto=format&fit=crop&w=800&q=80)


## Generate Your First 15-Second Clip in Google AI Studio

Open [Google AI Studio](https://aistudio.google.com) and select the Gemini Omni 1.2 Flash model. Start a new prompt.

1. Write a clear shot description that includes subject, action, setting, camera movement, and audio.
2. Set duration to 15 seconds and resolution to 720p for the first pass.
3. Submit the prompt and wait for the clip to render.

Example prompt: “Fifteen-second continuous handheld shot of a barista pouring steamed milk into a latte on a wooden counter. Morning sunlight through a window. Camera slowly pushes in. Soft cafe ambient sounds and the hiss of the steam wand. No dialogue.”

The model returns a video with matching audio. Download it or continue in the same conversation.

## Edit the Clip by Talking to the Model

Stay in the same chat. Attach the generated video if needed and type the change you want.

Examples that work well:

- “Change the background to a sunlit garden while keeping the barista and pour exactly the same.”
- “Switch this to vertical 9:16 for Instagram and keep the original audio.”
- “Make the lighting cooler and add light rain on the window.”

Each follow-up edits the existing clip instead of starting over. This saves time and money compared with regenerating the full video.


![Person filming with smartphone outdoors at sunset](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80)


## Use Google Vids for No-Cost Clips

Anyone with a Google account can generate up to three 15-second videos per month in Google Vids at no extra cost. Go to [vids.new](https://vids.new), create a new video, and choose the Omni 1.2 Flash option when available.

Upload reference images of a product or character. Describe the shot. The tool keeps details consistent from the first frame to the last. Export the finished clip as MP4.

This path is useful when you do not need the full API or want to stay inside Google Workspace tools.

## Prompting Tips That Improve Results

Describe the entire shot in one paragraph. Include:

- Subject and specific action
- Location, time of day, and weather
- Camera size, movement, and lens feel
- Audio: dialogue, ambient sound, or silence
- Whether you want one continuous shot or planned cuts

For references, upload clear images of the character or product. Tell the model which image is the opening frame and which details must stay identical. Short motion clips up to three seconds also help lock movement.

Draft at 360p or 720p first. Once the composition and motion look right, ask for an upscale to 1080p or 4K. This workflow keeps costs low while you iterate.

## Common Limits and Workarounds

The model works best with clear, concrete descriptions. Vague prompts produce more drift. Complex multi-character dialogue can still show minor lip-sync issues, so test short takes first.

Audio file input is not supported for editing existing sound. You generate audio together with the video. For precise brand work, generate several variations and pick the strongest.

Outputs include an invisible SynthID watermark. Plan for that if you need to prove provenance later.

## Related Reading

If you also work with documents inside Gemini chats, see our guide on [how to generate, preview, and edit files in Gemini](/blog/generate-preview-edit-files-gemini/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/P1y1BenhSGI"
    title="The NEW Google Omni 1.2 Video MODEL is a LOT of FUN!!!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: [Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) (November 5, 2026)
- Google blog: [Create longer AI videos with Omni 1.2 in Google Vids](https://blog.google/products-and-platforms/products/workspace/omni-1-2-flash-google-vids/) (November 5, 2026)
- Google AI Studio documentation and pricing pages
