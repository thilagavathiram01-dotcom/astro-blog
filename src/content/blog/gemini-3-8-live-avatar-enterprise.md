---
title: "How to Enable Gemini 3.8 Live Avatar in Enterprise"
description: "Set up Gemini 3.8 Live Avatar in Gemini Enterprise: stock faces, video output, 97-language lip-sync, and custom avatars."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Google opened Gemini 3.8 Live with Live Avatar in Gemini Enterprise on September 24, 2026. The model already talks in near real time. Live Avatar adds a talking face that lip-syncs while the agent listens, sees, and calls tools.

This guide uses Google’s September 24 product post, the Cloud availability note, and the Gemini Enterprise Agent Platform docs. It covers what shipped, how to turn the feature on in Stream realtime, how to request video from the Live API, and the limits that still apply to custom faces.

## What Live Avatar actually is

Live Avatar is not a separate model. It is video synthesis on top of `gemini-3.8-live`. Google’s Cloud post says the stack is generally available in Gemini Enterprise after a preview at Google Cloud Next 2026.

The official developer guide lists these modalities for 3.8 Live:

- Input: audio (16 kHz PCM), video (1 FPS JPEG), text
- Output: audio (24 kHz PCM), video (24 FPS MP4 Live Avatar), text
- Model ID: `gemini-3.8-live`

You ask for video by setting `response_modalities` to include `VIDEO`. The face then moves at 24 frames per second in lockstep with the spoken audio.

Google positions the feature for customer service, interactive walkthroughs, kiosks, and branded web or mobile agents. Cloud lists US and EU endpoints, provisioned throughput, and enterprise data controls for the GA release.

Gemini 3.8 Live Extended Thinking stays in private preview. Do not expect Avatar GA to unlock that sibling automatically.

If you still need a voice-only session first, follow our [Gemini 3.8 Live API setup](/blog/gemini-3-8-live-api-guide/) and add video only after the audio loop is stable.



![Team meeting around a conference table planning a customer support agent](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80)



## What you get beyond a talking head

Google’s announcement lists four product claims you can test in a first session.

**Lip-sync and expression.** The avatar is meant to listen, see, and speak with a visible persona, not a static portrait next to a waveform.

**Camera plus microphone.** The same Live session can take a live camera feed or screen share with audio. The agent can comment on what it sees while the face keeps talking.

**Async tools with a face on screen.** Tool calls can run in the background. Google’s hotel check-in demo keeps the conversation going while the backend finishes. The Cloud post also calls out interruption recovery that does not drop conversation context or in-flight transactions.

**97 languages.** Live Avatar inherits mid-conversation language switching from 3.8 Live. Google says lip-sync and expressions adapt across those languages without visual drift.

All audio and video output is watermarked with [SynthID](https://deepmind.google/models/synthid/). Read the [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) before you put a face on a public site.

## Turn it on in Google Cloud console

You can preview stock avatars without writing a client. Google’s “Configure live avatars” page uses Agent Platform Studio.

1. Open Google Cloud console and go to **Agent Platform > Studio > Stream realtime**.
2. Click **Switch model** and select `gemini-3.8-live`.
3. In the main panel, select **Live Avatar**.
4. Pick a face from the **Avatar** list and a voice from the **Voice** list.
5. Add a short system instruction: role, language preference, and when the agent should stay quiet.
6. Optional: enable camera input so Gemini can see the desk or kiosk view.
7. Click **Start Session** and speak a task that matches the role.

Use this console pass to confirm latency, barge-in, and language switches before you wire video into production.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Request Live Avatar from the API

The Cloud configure guide is short. Two fields matter.

1. In `generation_config`, set `"response_modalities": ["VIDEO"]`.
2. In `avatar_config`, set the prebuilt avatar name (and a supported voice from the same catalog).

A session without `VIDEO` still speaks. It will not render the 24 FPS face. Treat video as an explicit opt-in, not a default of `gemini-3.8-live`.

Keep the rest of the Live session the same as a voice agent: system instructions, tools with non-blocking behavior where you want speech to continue, and camera frames only when the scene changed. Cloud still lists video input at 1 FPS JPEG. Sending extra frames burns context without improving the avatar.

Partner stacks that already wrap Gemini Live (LiveKit, Pipecat, Agora, and others listed on the September 15 Live post) can carry the same model ID. Confirm that the wrapper exposes `response_modalities` and `avatar_config` before you assume the face will appear.



![Video call on a laptop during a remote customer session](https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80)



## Custom avatars and brand rules

Preset faces are the GA path. Custom likeness is narrower.

Google’s product post says you can generate an animated avatar from a high-quality reference image while keeping likeness, brand styling, or character identity. Custom creation is allowlisted. The Cloud availability note repeats that the custom avatar feature is allowlist only.

The configure doc stores custom work per session in `customized_avatar` inside `avatar_config`. Do not ship a reference photo of a real employee or paid talent without a written release. Cloud’s Live API overview lists branded ambassadors as a use case only when likeness rights are in place.

If legal review is still open, stay on stock avatars. The library is the supported path for first production traffic.

## Tips before you put an avatar on a kiosk

- Test one language pair that your users actually mix. Mid-conversation switching is the feature to verify, not a 97-language spreadsheet.
- Keep tool results short. The face stays on screen while the tool runs; a long JSON dump still has to become spoken language.
- Plan playback on the client. 24 FPS video plus 24 kHz audio is a different buffer than audio-only Live.
- Label the experience as generated. SynthID is for detection. Users still need a visible disclosure.
- Do not point a camera at bystanders. Visual input is part of the session context.
- Re-read data residency for your project. GA includes US and EU endpoints; pick the region that matches your contract.

## Conclusion

Gemini 3.8 Live with Live Avatar is the GA way to attach a lip-synced face to the same live dialogue model enterprises already use for voice. Stock avatars work today in Stream realtime and through `response_modalities: ["VIDEO"]`. Custom faces need an allowlist and a rights review.

Start in the Cloud console, confirm the face and voice, then add video to a session that already handles barge-in and tools. Leave Extended Thinking out of the first rollout until that model leaves private preview.

## Sources

- [Introducing Gemini 3.8 Live with Live Avatar](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/) — Google
- [Gemini 3.8 Live with Live Avatar is now generally available](https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-8-live-with-live-avatar-is-now-generally-available) — Google Cloud
- [Developer's guide to Gemini 3.8 Live](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-live) — Google Cloud
- [Configure live avatars](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/live-api/configure-live-avatars) — Google Cloud
- [Gemini Live API overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/live-api) — Google Cloud
- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google
- [SynthID](https://deepmind.google/models/synthid/) — Google DeepMind
- [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
