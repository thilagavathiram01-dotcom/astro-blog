---
title: "Create Custom Voices with OpenAI Prompt-to-Voice"
description: "Step-by-step guide to create and use custom GPT-Live voices from text descriptions using OpenAI's prompt-to-voice API and Playground."
pubDate: 2026-10-21T18:30:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "ai-tools", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

OpenAI released prompt-to-voice on October 16, 2026. The feature lets any API customer generate a reusable voice for GPT-Live from a plain text description. No audio sample or consent recording is required.

You describe the accent, pitch, tone, and pace you want. The service returns a voice ID. You pass that ID when you start a GPT-Live session. Creating the voice is free. Speech generation bills at standard GPT-Live session rates.

This guide shows the exact API calls, Playground path, and session setup. Facts come from OpenAI’s custom voices documentation and October 16 API changelog.

## What prompt-to-voice supports

Prompt-generated voices work only with GPT-Live. They do not work with the Text-to-Speech API, the Realtime API, or Chat Completions audio output. Those endpoints still require recording-based custom voices, which are limited to eligible customers who contact sales.

You can create up to 100 prompt-generated voices per organization. The limit applies even when your app creates voices on behalf of end users. Each successful create request saves a new voice. Store the ID and the original description so you can reuse both.

OpenAI requires responsible use. Do not impersonate real people. Children’s voices are not allowed. Tell listeners the speech is AI-generated and keep any provenance metadata. Voices are not guaranteed to be unique.

![Studio microphone close-up](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)

## Create a voice in the Playground

The fastest way to test a voice is the voice Playground at platform.openai.com/audio/voices/edit.

1. Sign in to the OpenAI platform.
2. Open the voice Playground.
3. Enter a name and a detailed description.
4. Submit the form. The page returns a voice ID.

Creating the voice costs nothing. Listening to it later starts a billed GPT-Live session.

## Create a voice with the API

Send a POST request to /v1/audio/voices with type set to "prompt". Include a name and a prompt that describes vocal qualities.

```bash
curl --fail-with-body https://api.openai.com/v1/audio/voices \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "prompt",
    "name": "Support assistant",
    "prompt": "A calm, reassuring adult voice for a customer support assistant. Speak with an American English accent, a mid-range pitch, a smooth, warm tone, and a steady, conversational pace.",
    "model": "auto"
  }' \
  -o voice.json
```

An optional script_hint (up to 2,000 characters) supplies sample speech that guides generation. Leave it out and the service writes its own script from your description. Blank or very short scripts are rejected.

The response returns metadata only. It does not include audio:

```json
{
  "object": "audio.voice",
  "id": "voice_123",
  "name": "Support assistant",
  "created_at": 0,
  "type": "prompt",
  "prompt": "A calm, reassuring adult voice..."
}
```

Save the id. You will need it for every session that uses this voice.

## Write effective voice descriptions

Describe concrete vocal qualities rather than personality labels. OpenAI’s documentation lists these useful dimensions:

- Accent and strength
- Perceived age (adult only)
- Presentation
- Pitch
- Timbre and texture
- Loudness or vocal effort
- Speech rate
- Distinctiveness

Example for a calm assistant:

A warm adult voice with a mid-range pitch and smooth, rich timbre. Use moderate vocal effort and an unhurried, reassuring delivery.

Example for a lively guide:

A bright, clear adult voice with a slightly higher pitch and a lightly textured timbre. Use a lively, conversational delivery at a brisk but easy-to-follow pace.

Do not ask the model to imitate a named person, public figure, or fictional character.

![Developer working at a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Use the voice in a GPT-Live session

Include the voice ID in the session configuration under audio.output.voice.id. OpenAI recommends also placing the original voice description inside session.instructions so the model keeps the intended delivery.

```json
{
  "model": "gpt-live-1",
  "instructions": "You are a helpful voice assistant. A calm, reassuring adult voice for a customer support assistant. Speak with an American English accent, a mid-range pitch, a smooth, warm tone, and a steady, conversational pace.",
  "audio": {
    "output": {
      "voice": {
        "id": "voice_123"
      }
    }
  }
}
```

For WebRTC, put this object in the session field. For WebSockets, put it in the first session.start event. Choose the voice at session start. To switch voices, start a new session.

Listening in the Playground or running a live session is billed at normal GPT-Live rates. Creating the voice itself remains free.

## Practical tips

Refine one quality at a time. Generate two or three voices, then compare them on the same short passage and a few conversational turns. Keep the ID of the version that matches your product.

Store the original prompt next to the voice ID. If you later need to recreate a similar voice, the exact wording is the best starting point.

Prompt-to-voice creation is not compatible with Zero Data Retention. GPT-Live speech generation itself can be eligible for Zero Data Retention when you enable it for the organization or project. Stored session recordings and downloads are not available under that setting.

If you already use ChatGPT Voice, the [ChatGPT Voice with GPT-5.6 and GPT-6 Astra guide](/blog/chatgpt-voice-gpt-5-6-astra/) covers model and limit updates for the consumer product. The API path described here is separate and intended for developers building their own voice experiences.

## Conclusion

Prompt-to-voice removes the need for audio samples when you only need a GPT-Live voice. Write a clear description of accent, pitch, tone, and pace, call the /v1/audio/voices endpoint (or use the Playground), store the returned ID, and pass it at session start. Test a few variants, keep the best one, and include the original description in your session instructions.

The feature is available to all API customers as of October 16, 2026. Check the official custom voices guide for any later limits or model updates.

## Sources

- OpenAI API documentation: Custom voices (https://developers.openai.com/api/docs/guides/custom-voices)
- OpenAI API changelog, October 16, 2026
- OpenAI platform voice Playground

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EAN5Cj347PY"
    title="This is the new ChatGPT Voice, powered by GPT-Live"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
