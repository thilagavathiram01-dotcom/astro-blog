---
title: "How to Use Gemini 3.5 Live Translate for Real-Time Speech Translation"
description: "Use Gemini 3.5 Live Translate in the Google Translate app, Android listening mode, Google Meet preview, and the Gemini Live API—with official steps and limits."
pubDate: 2026-09-19T17:00:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&h=735&q=80"
---

Turn-by-turn translators wait for you to finish a sentence. **Gemini 3.5 Live Translate** is built for the other case: someone is still talking, and you need the meaning a few seconds later in your language, with something close to their pace and tone.

Google launched the model on 9 June 2026. It automatically detects **70+ languages**, streams translated speech instead of waiting for a full turn, and is rolling out in three places: the Google Translate app on Android and iOS, a private preview of speech translation in Google Meet, and a public developer preview on the Gemini Live API and Google AI Studio.

This guide is the practical path for each surface, using Google’s product posts and developer docs.

![People collaborating across a table with laptops and phones](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80)

## What the model actually does

Gemini 3.5 Live Translate is a **speech-to-speech** model. You stream audio in. It streams translated audio out, staying a few seconds behind the speaker rather than pausing for a complete utterance.

Official points that matter in daily use:

- It **auto-detects** the spoken language. You do not have to pick a source language first for the consumer Live Translate flow.
- Output is meant to keep **intonation, pacing, and pitch**, not a flat text-to-speech read of a transcript.
- Google designed it for noisy rooms, not only studio audio.
- All generated audio is watermarked with **SynthID** so the synthetic speech can be detected later.

It is not a general chat model. Developer docs for `gemini-3.5-live-translate-preview` list audio in and out, optional text transcripts of those streams, and **no** image or video input on this endpoint.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/TNwKs39uSVk" title="Introducing Gemini 3.5 Live Translate — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Use it in the Google Translate app

This is the path for travel, a shop conversation, or a tour you are standing in.

1. Update **Google Translate** from the Play Store or App Store.
2. Open the app and tap **Live translate** (Google’s product post points to the control in the lower-left of the Live experience).
3. Put on **any pair of headphones**. Google no longer limits this flow to Pixel Buds.
4. Point the microphone at the speaker and let the model detect the language.
5. Listen to the translated audio. Keep the session running; the model is designed to stay a few seconds behind instead of waiting for a pause.

Practical habits:

- Stand closer than you would for a video call. Auto-detect still fails if two people talk over each other.
- If the output language is wrong, set the target language once and leave source on auto.
- Do not expect a legal or medical interpretation. Treat it as a conversation aid and confirm names, numbers, and addresses on screen when the app shows text.

![Traveler holding a smartphone in a busy public space](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80)

## Android listening mode (no headphones)

On Android, Google is rolling out **listening mode** on top of the same model.

1. Open Live translate in the Translate app.
2. Choose listening mode when it is available on your build.
3. Hold the phone to your ear the way you would take a call.
4. Translated audio plays through the **earpiece**, so people next to you do not hear the English (or other target) stream.

Google’s own example is a guided tour in Spanish while you hear English in the earpiece. That is the right job: one speaker, one listener, a public place where speaker playback would be rude.

If the control is missing, update the app and wait. Google described this as a staged Android rollout, not a same-day flag for every device.

## Use speech translation in Google Meet

Meet already had speech translation, but only for **five languages**, and only to or from English. With 3.5 Live Translate, Google says Meet can cover **70+ languages** and **2,000+ language combinations** in one meeting.

Status as of the June 2026 announcement:

- Private preview for **select business Google Workspace** customers first
- Broader rollout later in 2026
- On the web, a control in the meeting bar starts speech translation without hunting through settings

If you administer Workspace:

1. Confirm your domain is in the preview cohort before promising it to a whole team.
2. Tell participants to use headphones so original and translated audio do not fight in the room.
3. Keep captions on when accuracy of names and numbers matters more than spoken flow.

Do not treat Meet translation as a substitute for a professional interpreter on a contract negotiation or a medical consult.

## Build with the Gemini Live API

Developers get the same model as `gemini-3.5-live-translate-preview` through the [Live Translate API docs](https://ai.google.dev/gemini-api/docs/live-api/live-translate) and a [Live session in AI Studio](https://aistudio.google.com/live?model=gemini-3.5-live-translate-preview).

### 1. Open a Live session

1. Go to Google AI Studio and sign in.
2. Open the Live surface.
3. Select **gemini-3.5-live-translate-preview**.
4. Speak or stream a file and confirm you hear a continuous translation, not a delayed paragraph.

### 2. Configure translation in code

The Live API keeps a bidirectional WebSocket (`BidiGenerateContent`). Translation is not a separate product call. You attach `translationConfig` when you connect.

Documented fields:

- **targetLanguageCode** — BCP-47 code for the output language (`es`, `ja`, `pl`). Defaults to `en`.
- **echoTargetLanguage** — what to do when the speaker is already in the target language.
- **inputAudioTranscription** / **outputAudioTranscription** — optional text of the source and translated streams.

Audio format from Google Cloud’s model page:

- Input: 16-bit PCM, 16 kHz, mono
- Output: 16-bit PCM, 24 kHz, mono
- Recommended chunk size: about 100 ms

Google also published example apps in the [Gemini Live API examples repo](https://github.com/google-gemini/gemini-live-api-examples), including a LiveKit-based live-translate demo.

### 3. A concrete product sketch

A two-sided support line:

1. Caller speaks Korean; agent speaks English.
2. Session target for the agent ear is `en`; session target for the caller ear is `ko`.
3. Enable both transcripts so a supervisor can review text later.
4. Keep the socket open. Closing on `turnComplete` will cut mid-sentence translation.
5. Fall back to typed chat if either side is in a noisy vehicle and the model starts dropping clauses.

Partners Google named at launch (Grab, Agora, LiveKit, Fishjam, Vision Agents, CJ ENM) are using this pattern for rideshare pickup calls, live streaming, and dubbed video—not for offline document translation.

## What not to expect

Stay inside the published limits.

- This model does **not** generate images, take video frames, run code, or cache context the way text Gemini models do.
- Meet access was a **private preview** at launch. Assume it is off until your admin sees the control.
- Listening mode is **Android-first** in Google’s announcement.
- Accuracy still drops with overlapping speakers, heavy slang, or proper nouns the model has not heard clearly.
- SynthID marks the **generated** audio. It does not prove the original speaker said those words.

For a written brief with citations, use a text model or Deep Research. For a live voice conversation that must stay in sync, this is the official translation model.

## A 10-minute test plan

1. Update Google Translate and put on wired or Bluetooth headphones.
2. Play a one-minute clip in a language you do not speak and start Live translate.
3. On Android, repeat the same clip in listening mode with the phone at your ear.
4. If you have Workspace preview access, join a Meet with a colleague and start speech translation from the web bar.
5. If you ship software, open AI Studio on `gemini-3.5-live-translate-preview`, set `targetLanguageCode`, and confirm transcripts arrive with the audio.

If step 2 already sounds continuous and a few seconds behind, the consumer feature is working. If you only hear a block of speech after a long pause, you are still on an older conversation mode—update the app or wait for the Live translate control.

## Conclusion

Gemini 3.5 Live Translate is useful when the other person will not wait for you to tap a microphone between sentences. Use headphones in the Translate app for a two-sided chat. Use Android listening mode when you only need to hear a tour or announcement privately. Use Meet when your Workspace domain has the preview. Use the Live API when you are building that loop into your own product.

Keep the job small: one speaker, a clear target language, and a human check on names and numbers. That is enough to make the June 2026 model worth turning on.

## Sources

- [Gemini 3.5 Live Translate is here](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/) — Google
- [Live translation with Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/live-translate) — Google AI for Developers
- [Gemini 3.5 Live Translate (Agent Platform)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-5-live-translate) — Google Cloud
- [Google Meet speech translation help](https://support.google.com/meet/answer/16221730) — Google Support
- [Gemini 3.5 audio model card](https://deepmind.google/models/model-cards/gemini-3-5-audio/) — Google DeepMind
- [Introducing Gemini 3.5 Live Translate](https://www.youtube.com/watch?v=TNwKs39uSVk) — Google for Developers
