---
title: "Set Up a Custom Face for Gemini 3.8 Live Avatar"
description: "Upload a custom reference image for Gemini 3.8 Live Avatar: size rules, PNG setup, console steps, and API fields."
pubDate: 2026-09-27T09:00:00
heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools", "how-to"]
noindex: false
---

Gemini 3.8 Live with Live Avatar can speak with a stock face, or with a likeness you supply for one session. Custom faces sit behind an allowlist. The image rules are strict enough that a casual headshot usually fails before the first word.

This walkthrough follows Google Cloud’s Configure live avatars page, last updated 25 September 2026. It covers who can use a custom face, how to crop the reference, how to start a session in Stream realtime, and how to send the same image over the Live API.

For the GA product story and stock-avatar path, start with the [Live Avatar enterprise setup](/blog/gemini-3-8-live-avatar-enterprise/). Come here when you already have access and need the photo to work.

## What a custom avatar is

A custom avatar is not a new model. You still call `gemini-3.8-live`. You still set `response_modalities` to `VIDEO`. Instead of `avatar_name: "Ben"`, you send a reference image in `avatar_config.customized_avatar`.

Google Cloud documents the custom path as per-session. The likeness is generated for that Live connection. It is not a saved brand asset you reuse from a library unless your own app stores the image and sends it again.

The Cloud availability note from 24 September 2026 says custom avatars are allowlist only. If Upload is missing under Avatar options, you do not have the flag. Stay on prebuilt faces until Google enables the project.

Do not use photos of minors, celebrities, or anyone who did not sign a likeness release. Cloud lists that safety rule with the composition checklist.



![Person reviewing a portrait photo on a laptop before an upload](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Prepare the reference image

Cloud lists hard specs. Miss one and the session starts without a usable face.

- Format: PNG recommended. PNG keeps an alpha channel so the figure does not sit in a visible box in light or dark UI.
- Color mode: RGB.
- Minimum size: 704 × 1280 pixels (portrait).
- Resolution: 720p or higher.
- Aspect ratio: 9:16 is the standard. Landscape is supported.
- File size: under 5 MB.
- Quality: no blur, no heavy compression artifacts.

Composition matters as much as pixels.

Use a bust shot. Head and shoulders should fill more than 60 percent of the frame. Crop the lower body, arms, hands, and any object such as a mic or phone. Use a plain backdrop with no extra people. Face the camera. Keep the head level and the eyes on the lens. Hold a neutral expression with no smile, squint, or visible teeth.

Export a fresh PNG from the raw file. Do not screenshot a compressed social crop and hope the model fills in the rest.

## Start a custom session in the console

You can test the image before you write a client.

1. Open Google Cloud console and go to **Agent Platform > Studio > Stream realtime**.
2. Switch the model to `gemini-3.8-live`.
3. Select **Live Avatar** in the main panel.
4. Under Avatar options, choose **Upload** and pick the PNG.
5. Pick a prebuilt voice. You can later pair the same face with a custom voice if your project has that feature.
6. Add a short system instruction that names the role and the language.
7. Optional: turn on camera input if the agent must see the user.
8. Click **Start Session**, then **Start conversation**.

Watch lip-sync on a short English phrase first. Then switch language mid-turn if your users mix languages. Google’s product post says Live Avatar adapts lip-sync across 97 languages without visual drift. Confirm that on your image, not only on a stock face.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Send the image through the API

Two fields enable video. The custom face is a third object.

Set `generation_config.response_modalities` to `["VIDEO"]`. Without that list, the model speaks and never renders the 24 FPS MP4 avatar stream.

Put the PNG in the setup payload:

- `avatar_config.customized_avatar.image_data` — Base64 string of the file bytes
- `avatar_config.customized_avatar.image_mime_type` — `"png"`

Cloud’s sample also turns on input and output audio transcription in the same setup message. That is useful when you need a text log next to the face. It is not required to start video.

The Gen AI SDK path for stock faces uses `types.AvatarConfig(avatar_name="Ben")`. Custom images follow the WebSocket `customized_avatar` object in the official sample. Keep the model ID `gemini-3.8-live`. Live Avatar video output is documented on that model, not on the Extended Thinking preview.

If you already have a working audio loop from the [Gemini 3.8 Live API guide](/blog/gemini-3-8-live-api-guide/), add video only after barge-in and tools are stable. A broken audio buffer plus 24 FPS video is harder to debug than audio alone.



![Developer desk with dual monitors during an API test](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Pair voice, camera, and tools

You can pair a custom face with a prebuilt HD voice or with a custom voice from the language and voice guide. Pick one voice per session and keep it. Changing voices mid-call without a documented API for that swap will confuse testers.

Camera input is still listed as 1 FPS JPEG on 3.8 Live. Send a new frame when the scene changes. Flooding the socket does not make the avatar sharper.

Async tools still run in the background while the face stays on screen. Keep tool replies short so the spoken recap matches what the user sees. Google’s hotel check-in demo is the pattern: talk while the backend works, then confirm.

All generated audio and video carry SynthID. Add a visible “AI avatar” label in the UI. Watermark detection is not a substitute for disclosure.

## Fixes when the face looks wrong

**Upload control is missing.** The project is not on the custom allowlist. Use a prebuilt avatar name instead.

**Box around the figure.** Re-export PNG with an alpha channel. JPEG backgrounds show up in light and dark themes.

**Face drifts or teeth flicker.** Recrop to a true bust shot, flatten the background, and reshoot with a neutral mouth. Cloud warns against smiles and visible teeth in the source.

**No video, only audio.** `response_modalities` is not `VIDEO`. Fix setup before you blame the image.

**Legal hold.** Do not ship an employee photo until counsel signs off. Stock faces are the supported first production path.

## Conclusion

A custom Live Avatar is a session-level image plus `gemini-3.8-live` with video output turned on. The allowlist gates the feature. The PNG spec gates quality. Console Upload is the fastest way to prove the crop. The API then repeats that same Base64 payload on every new connection.

Get the bust shot right, keep the likeness rights on file, and treat the face as an extra modality on an agent that already handles voice and tools.

## Sources

- [Configure live avatars](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/live-api/configure-live-avatars) — Google Cloud, updated 25 September 2026
- [Introducing Gemini 3.8 Live with Live Avatar](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/) — Google, 24 September 2026
- [Gemini 3.8 Live with Live Avatar is now generally available](https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-8-live-with-live-avatar-is-now-generally-available) — Google Cloud, 24 September 2026
- [Developer's guide to Gemini 3.8 Live](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-live) — Google Cloud
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
