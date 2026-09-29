---
title: "How to Generate Voices With Gemini 3.8 Flash TTS"
description: "Use Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API to design voices, direct dialogue, and export audio."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1598488035139-b911af1175c8?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "ai"]
noindex: false
---

Google shipped two new speech models on 23 September 2026: **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS**. Both turn exact text into spoken audio you can style line by line.

This guide walks through the official path in Google AI Studio and the Gemini API. It sticks to what Google published on [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) and in the [speech generation docs](https://ai.google.dev/gemini-api/docs/speech-generation).

You will pick a model, design or select a voice, add style cues, generate a clip, and decide when Flash-Lite is the better call.



![Condenser microphone on a studio stand](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## What Gemini 3.8 TTS actually does

These models are **text-in, audio-out**. They are not the Live API. Google is explicit: Live API is for interactive conversation. TTS is for **exact recitation** with control over style and sound, such as a podcast script or an audiobook chapter.

Model IDs:

- `gemini-3.8-flash-tts` — highest fidelity, acting nuance, dialect coverage
- `gemini-3.8-flash-lite-tts` — same schema, lower cost, better for high volume

Both support single-speaker audio, two-speaker dialogue, voice design, and voice replication. Input limit is 8,192 tokens. Output serving limit is 16,384 tokens.

Flash TTS is live for developers in the Gemini API and Google AI Studio. Google also lists Gemini Notebook for consumer access. Gemini Enterprise API access was listed as coming soon in the launch post.

## Flash versus Flash-Lite

Use Flash when the voice *is* the product: studio narration, character work, hard pronunciation, or regional dialect.

Use Flash-Lite when you generate many clips: read-aloud features, batch dubbing, or a voice agent that must stay cheap.

Google’s own table puts Flash first for acting and dialects, and Flash-Lite first for throughput and cost. The request shape is the same, so you can swap the model string after you lock a script.

## Generate a first clip in Google AI Studio

AI Studio now includes a speech workspace. Google describes it as a voice design room with a dual-speaker screenplay editor.

1. Open [Google AI Studio](https://aistudio.google.com/generate-speech) and sign in with a Google account that can use the Gemini API.
2. Choose **Gemini 3.8 Flash TTS** for the first test.
3. Pick a prebuilt voice such as **Kore**, or open the extended library.
4. Paste a short line you want spoken *verbatim*. Do not ask the model to invent dialogue here. TTS recites the text you send.
5. Add a style note such as “cheerful and friendly” or “calm narrator, slow pace.”
6. Generate and listen. If the take is stiff, change the style string before you rewrite the script.

Keep the first prompt under a paragraph. Long scripts hide which sentence broke the delivery.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Direct the performance, not just the words

Google’s 3.8 TTS models accept turn-level style and inline vocal events. Official examples include tags such as `<laugh>`, `<sigh>`, and `<short pause>`.

Write the script as spoken text. Put acting notes in the style field or as those tags, not as stage directions mixed into the sentence unless you want them spoken.

Good style strings stay specific:

- “warm podcast host, mid tempo, slight smile”
- “tired late-night DJ, dry, unhurried”
- “museum guide, clear consonants, no rush”

Bad style strings fight the text. If the line is a legal disclaimer, do not ask for “excited and playful.” The model will still try.

For two speakers, name each turn. Google’s docs use a `speaker` field on each part plus a voice mapping in `speech_config`. Cap a request at two speakers. Build longer scenes as separate generations and edit them together.



![Laptop and headphones on a wooden desk](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Call the API after the Studio take works

Once a voice and style sound right in Studio, move the same choices into code. The official Python pattern uses the Gemini client, audio as the response modality, and a voice name in `speech_config`.

A minimal single-speaker call uses model `gemini-3.8-flash-tts`, the exact sentence in text, a style string such as cheerful and friendly, and a voice such as Kore. Save the returned WAV bytes to disk.

Voice sources Google documents:

- Prebuilt names (example: Kore)
- Extended Voice Library IDs from `GET /v1beta/voices`
- Custom voice-design IDs (`voice_...`)
- Voice replication IDs, with optional stateless keys

Do not copy sample keys from tutorials into production. Create voices in your own project.

## Design a new voice or replicate one you own

**Generative voice design** builds a persona from a natural-language description: role, accent, age range, and texture. Google says this covers more than 100 languages and dialects on Flash TTS.

**Voice replication** rebuilds a consistent adult profile from a short sample. Google’s launch video states a **30-second** sample of a voice you have rights to use, with consent checks, **SynthID** watermarking, and C2PA credentials.

Treat replication as a rights problem first. Only clone a voice you own or have written permission to use. Watermarking does not replace that permission.

If replication fails with a server error, re-record a clean 30-second take: one speaker, little room echo, no music bed. Then retry before you assume the feature is down.

## Practical limits and product fit

TTS will not browse the web or call tools. Function calling and code execution are listed as not supported on `gemini-3.8-flash-tts`.

It will not replace Gemini Live on the phone. Live still handles camera and conversation. If you already use Android accessibility features such as [Guided vision](/blog/android-accessibility-shortcut-guided-vision/), keep that flow for live surroundings and use TTS when you need a finished file.

Batch work belongs on Flash-Lite. Studio polish belongs on Flash. Mixing those two jobs on one model wastes either money or quality.

## Tips that keep takes usable

Write numbers the way you want them spoken. “2026” and “two thousand twenty-six” are different performances.

Split chapters. A 8,192-token input ceiling is large for a page and small for a book.

Keep two-speaker scenes in one request only when both people talk in the same beat. Cross-talk across files is an editing job, not a model job.

Listen on headphones and on a phone speaker. Studio monitors hide harsh sibilants that show up in a comms app.

Store the style string next to the script in version control. The text alone is not enough to reproduce a take.

## Conclusion

Gemini 3.8 Flash TTS is a directed speech engine, not a chat model with a microphone. Give it the exact words, a voice, and a style, then export audio.

Start in AI Studio with one line and Kore. Move to a designed voice when the script is stable. Switch to Flash-Lite when the same pipeline has to run all day.

For nearby Android how-tos on this site, see [Motion Assist on Android 17](/blog/android-17-motion-assist/) if you test narration in a moving vehicle and need the passenger overlay.

## Sources

- [Gemini 3.8 Flash TTS launch post (Google)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Text-to-speech generation docs (Gemini API)](https://ai.google.dev/gemini-api/docs/speech-generation)
- [Gemini 3.8 Flash TTS model card](https://aistudio.google.com/docs/models/gemini-3.8-flash-tts)
- [Create your own voices with Gemini 3.8 text-to-speech (Google DeepMind on YouTube)](https://www.youtube.com/watch?v=FL6mI_Br-mc)
