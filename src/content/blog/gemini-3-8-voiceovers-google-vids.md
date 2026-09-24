---
title: "How to Add Gemini 3.8 Voiceovers in Google Vids"
description: "Add Gemini 3.8 Flash-Lite TTS voiceovers in Google Vids: write a scene script, pick a voice, sync updates, and stay inside official limits."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity", "google", "ai-tools"]
noindex: false
---

Google pointed Gemini 3.8 Flash-Lite TTS at Google Vids on 23 September 2026. The model sits behind the same Voiceover sidebar you already use. You still write a short script, pick a voice, and drop audio onto a scene. What changes is the speech engine behind that button.

This guide follows Google’s Vids Help steps and the official TTS launch post. It does not invent extra voices, languages, or character limits.

## What Flash-Lite TTS changes in Vids

Google split the new speech models by job:

- **Gemini 3.8 Flash TTS** targets character design, line-by-line direction, Gemini Notebook, and the AI Studio generate-speech workspace.
- **Gemini 3.8 Flash-Lite TTS** targets high-volume clips, dubbing, voice agents, and **Google Vids**.

Flash-Lite is the scale model. Google says it still gives control over tone, pacing, and nuance. It is not the studio where you invent a dragon voice from a paragraph of adjectives. If you need that workflow, use the generate-speech playground covered in [How to try Gemini 3.8 Flash TTS in AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/).

Vids Help still lists named styles such as Narrator, Educator, Teacher, Persuader, Explainer, Coach, and Motivator. Treat those labels as the product UI. Google also warns that newly generated voices can change as models update. Clips already sitting on a timeline stay as they are.



![Close-up of a studio microphone used for recorded narration](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## Before you open Voiceover

Work on a computer. Google’s Help article for AI voiceovers starts at [docs.google.com/videos](https://docs.google.com/videos).

You need:

- A Google account that can open Vids
- An existing video, or a draft from **Help me create**
- A script in plain text (no emoji, no symbols)
- No more than **2,500 characters** per generated script

Help me create already inserts a generated voiceover when it builds a first draft. Use that path when you want scenes plus audio in one pass. Use the Voiceover panel when you already have scenes and only need speech.

Vids also caps a project at **50 audio objects**. Music, sound effects, and voiceovers all count. Plan tracks before you generate every scene twice.

## Generate a voiceover for one scene or all scenes

1. Open the video in Google Vids.
2. Click **Voiceover** in the right sidebar.
3. Choose **Current scene** or **All scenes**.
4. Type the script in the text box.
5. Optional: type `[` to open the audio tags menu and set pace, pauses, emotion, style, or sounds. Click **Apply audio tags** if you want Gemini to suggest tags.
6. Click **Insert voiceover**.
7. Pick a voice, then click **Select** and **Insert voiceover**.

That sequence matches Google Docs Editors Help for “Create voiceovers with AI in Google Vids.” Button names can shift slightly after a model swap. If you see **Generate the voiceover** instead of Insert, follow the on-screen label. The flow is the same: script, generate, choose a voice, place the clip.



![Headphones on a desk next to a laptop used for video editing](https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80)



## Update a clip when the script changes

Vids marks a mismatch with a **Voiceover outdated** badge. On the current scene the badge sits in the text box. In All scenes mode it sits next to each stale scene.

To resync:

1. Open **Voiceover**.
2. Select the scene.
3. Edit the script.
4. Click **Update voiceover** → **Replace** for one scene, or **Update all voiceovers** → **Replace** for the project.

Hover the badge if you need the tooltip: “Click update to sync the script and voiceover.”

Do not expect an old clip to morph on its own after Google swaps the backend model. Help is explicit: existing generated voiceovers do not change.

## Record your own take instead

AI speech is optional. From the start menu or the Record control you can capture:

- Camera
- Camera and screen
- Screen
- Voiceover only

Put a script in the sidebar first if you want teleprompter mode. That path is still the right choice for a branded speaker you already trust, or for any clip that must be a real person.

## Watch the speech models, then return to Vids

Google DeepMind’s one-minute overview shows what Flash TTS can do in the dedicated speech studio: custom personas, two-speaker scenes, and library voices. Vids uses the Flash-Lite side of that family. Use the video to hear the new models, then apply the Help steps above inside your project.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Workspace’s own “Vids on Vids” episode still shows the in-product Voiceover panel, including Generate all voiceovers and Update all voiceovers. The panel is the same surface Flash-Lite now feeds.

## Limits and safety notes from Google

Stick to the published constraints:

- Plain text only in the voiceover script box.
- 2,500-character cap per generated script.
- Fifty audio objects per video, subject to change.
- If a new clip is silent, unmute your speakers, then unmute the object track on the timeline.
- Gemini suggestions are not medical, legal, or financial advice.
- Enterprise users should keep personal or confidential text out of feedback submissions.

The 23 September launch also restates how Google marks synthetic audio. Every clip from Gemini Audio models carries a **SynthID** watermark. Voice replication with a 30-second sample lives in AI Studio, not in the Vids Voiceover list, and Google disables that replication path in Illinois, Texas, the EEA, the UK, Switzerland, and India.

Do not paste a coworker’s voice sample into any Gemini speech tool unless you have documented rights and the required consent recording.

## A short production checklist

1. Draft scenes first. Generate speech last so you do not burn the 50-track budget on discarded takes.
2. Keep each scene script under 2,500 characters. Split long explainers.
3. Pick one named voice for the whole video unless you need a second speaker on purpose.
4. Use audio tags for pace and pauses instead of typing stage directions as raw symbols.
5. After every script edit, watch for the outdated badge and Replace the clip.
6. Export a short test scene before you generate All scenes on a long training video.

If Flash-Lite is not audible yet on your account, wait. Google listed Google Vids as the consumer surface for Flash-Lite on launch day. Rollout can lag the blog post by hours or days.

## Conclusion

Google Vids already had AI narration. Gemini 3.8 Flash-Lite TTS is the new engine on that same Voiceover rail. Write a clean script, choose Current scene or All scenes, insert the clip, and Replace it when the text moves.

Leave character design and voice cloning in AI Studio. Leave live conversation in Gemini Live. Vids is for a timeline you will keep editing with teammates in Drive.

## Sources

- [Gemini 3.8 text-to-speech says hello (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Create voiceovers with AI in Google Vids (Google Help)](https://support.google.com/docs/answer/15070345)
- [Google AI Studio generate-speech playground](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-lite-tts)
- [SynthID](https://deepmind.google/models/synthid/)
- [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [Create your own voices with Gemini 3.8 text-to-speech (Google DeepMind on YouTube)](https://www.youtube.com/watch?v=FL6mI_Br-mc)
