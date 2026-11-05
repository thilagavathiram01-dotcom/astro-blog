---
title: "How to Create Animated GIFs in ChatGPT with Images 2.6"
description: "Step-by-step guide to generating looping animated GIFs from text or photos in ChatGPT using OpenAI Images 2.6, including speed controls and frame edits."
pubDate: 2026-11-05T22:00:00
heroImage: "https://images.unsplash.com/photo-1741061963486-a56144a73791?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "how-to"]
noindex: false
---

OpenAI rolled out Images 2.6 on November 4, 2026. The update adds native animated GIF creation to ChatGPT and Codex. You can now turn a short text prompt or an uploaded photo into a looping GIF without leaving the chat.

The feature is available to all users on free and paid plans, across web, desktop, and mobile apps. Image generation is also 50 percent faster than the previous model. OpenAI reports that more than 4 billion images are created each week across ChatGPT, Codex, and the API.

This guide shows exactly how to make your first GIF, adjust playback speed, edit individual frames, and reuse saved reference images.

## What Changed with Images 2.6

Images 2.6 brings three practical improvements. First, GIF support lets you animate a mascot, product shot, reaction, or sketch in one step. Second, generation speed improved by 50 percent. Third, saved reference images let you store photos of people, pets, or characters and reuse them later without uploading again.

In the API, two new models appear: GPT-Image-2.6 Flare for speed (as little as six seconds at low quality) and GPT-Image-2.6 Sunburst for higher detail and better consistency across edits. ChatGPT itself uses the Images 2.6 model for all users.

![Person holding a smartphone showing a cat photo next to a real cat](https://images.unsplash.com/photo-1741061963486-a56144a73791?auto=format&fit=crop&w=800&q=80)

## How to Create a GIF from a Text Prompt

Open ChatGPT on the web, desktop app, or mobile app. Start a new chat. Type a clear request that specifies a looping GIF and the motion you want.

A simple prompt that works well is: “can you make a gif of a cat dancing?” OpenAI used a similar example in its announcement. Add details for better results: camera angle, style, number of frames if you want control, and what must stay consistent.

Try this longer prompt for a clean loop:

Create a seamless looping GIF of a cute 3D fox mascot waving its hand. Use exactly 6 frames with smooth gradual movement. Keep the camera, background, character size, and colors identical throughout. The final frame should transition naturally back to the first. No text or logos.

ChatGPT generates the GIF and displays it in the chat. You can then open the GIF viewer to change speed or inspect frames.

## How to Animate an Uploaded Photo

You can also start from a still image. Tap the plus icon (or paperclip) in the prompt box and upload a photo of a pet, person, product, or sketch. Then describe the motion you want.

Example prompts:

- Turn this photo of my cat into a looping GIF where it blinks and gently tilts its head. Keep the original face and background.
- Animate this product bottle so it slowly rotates while confetti falls around it. Seamless loop, fixed camera.

The model creates a short animation that preserves the main subject while adding the requested motion. Results work best with clear subjects and simple movements.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/bJldMYfRvMQ"
    title="Introducing ChatGPT Images 2.6"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Adjust Speed and Edit Frames

After the GIF appears, open it in ChatGPT. You can change playback speed, typically ranging from 0.5x to 2x. This is useful for slowing a dance move or speeding up a subtle reaction.

You can also view the individual frames. ChatGPT builds the GIF from a sprite sheet of sequential frames. If one frame looks off, ask for a targeted edit: “Change the third frame so the cat’s paw is higher.” The model regenerates the animation with the correction.

Keep the camera fixed and limit the motion to one clear action. Complex multi-character scenes or large camera moves often produce less consistent loops.

## Use Saved Reference Images

Images 2.6 lets you save reference images of yourself, pets, or brand characters. Once saved, you can refer to them in later chats without uploading the file again. This helps maintain consistent appearance across multiple GIFs or images.

OpenAI highlights this for creators who need the same mascot or person in different animations. Simply name the saved reference and mention it in your next prompt.

![Laptop screen showing code with a colorful background](https://images.unsplash.com/photo-1763568258492-9569a0af2127?auto=format&fit=crop&w=800&q=80)

## Tips for Better GIF Results

Describe the loop explicitly. Say “seamless looping GIF” and “final frame transitions back to the first.” Specify frame count if you want tighter control (for example, 6 or 8 frames).

Keep motion simple. A waving hand, blinking eyes, or gentle bounce works better than complex dances with many limbs.

Fix the camera and background. State “fixed camera, same background, same character size and colors.”

For social media reactions, mention the mood and style: “playful cartoon,” “kawaii chibi,” or “clean product photography.”

If the first result is close but not perfect, iterate with short follow-ups instead of starting over.

For developers building with the API, set `output_format` to `"gif"` and control `frame_count` (2–64) and `frame_duration_ms` (20–2000). Flare is the faster model; Sunburst is better for quality and consistency.

## Practical Uses

Marketers can animate brand mascots for campaigns. Creators make reaction GIFs and memes. Product teams turn still product shots into eye-catching loops. Storyboard artists explore character movement before committing to full video.

The feature is already rolling out globally. If you do not see GIF generation yet, try a clear prompt and check again later; OpenAI is deploying it gradually.

## Conclusion

Images 2.6 turns ChatGPT into a quick tool for looping animations. A single prompt or photo is enough to produce a GIF you can speed up, slow down, and refine frame by frame. Combined with faster generation and reusable reference images, it removes several steps that previously required external tools.

Try the simple “cat dancing” prompt first, then move to your own photos and characters. For more on working with OpenAI models in other environments, see our guide to [accessing OpenAI models in Google Cloud Model Garden](/blog/access-openai-models-google-cloud-model-garden/).

Sources: OpenAI official announcement for Images 2.6 (November 4, 2026); The Verge coverage of the GIF feature.
