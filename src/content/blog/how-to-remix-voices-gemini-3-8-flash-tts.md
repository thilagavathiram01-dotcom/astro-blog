---
title: "How to Remix Voices with Gemini 3.8 Flash TTS"
description: "Step-by-step guide to remix voices in Gemini 3.8 Flash TTS using Google AI Studio and the API for custom accents, pitch, and timbre."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1779223372803-c700b06c1086?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Google released Voice Remixing for Gemini 3.8 Flash TTS on 4 November 2026. You can now take any prebuilt studio voice, Extended Voice Library entry, or custom designed voice and modify it with natural-language instructions.

The feature creates a new independent stored voice instead of overwriting the original. You get a preview sample and a reusable voice ID you can drop into synthesis calls or further remixes.

This guide shows the exact workflow in Google AI Studio and the Gemini API, based on official documentation. It builds on the earlier voice design and replication tools covered in our [How to Create Custom Voices with Gemini 3.8 TTS](/blog/gemini-3-8-flash-tts-custom-voices/) post.

## What Voice Remixing Does

Voice remixing anchors on an existing base voice and applies relative changes. You describe shifts such as age, pitch, pace, energy, timbre, or accent. The model preserves the core identity unless you explicitly override language or accent.

It works with both gemini-3.8-flash-tts and gemini-3.8-flash-lite-tts once you have a stored voice_... ID. Remixing requires a Paid Tier (Tier 1 or higher) Gemini API project.

You can remix interactively in the Google AI Studio speech playground or programmatically via the Voices endpoint. Each remix stores a new resource with a one-year TTL that resets on use.

![Studio microphone on a stand in a dark room](https://images.unsplash.com/photo-1640957454144-392c8b05d5a5?auto=format&fit=crop&w=800&q=80)

## Remix in Google AI Studio

Open the speech generator at aistudio.google.com/generate-speech. Select a base voice from the library or one of your saved designs.

Click “Remix this voice.” Enter a relative prompt such as “add a subtle Southern U.S. accent and slow the pacing slightly” or “make the voice sound 20 years older with a warmer, lower pitch.”

The playground generates three takes. Audition them side by side. Pick the best one and save it. The saved voice receives a permanent voice_... ID you can reuse across scripts and multi-speaker scenes.

You can chain remixes. Load a previously remixed voice as the new base and apply one or two focused changes at a time. This keeps the core identity stable while you refine specific traits.

## Remix with the Gemini API

Use the google-genai SDK or the REST Voices endpoint. Set type to “prompted”, store to true, and supply base_voice plus a relative input prompt.

Here is the official pattern that remixes the prebuilt “Puck” voice:

```python
import base64
from google import genai

client = genai.Client()

remixed_voice = client.voices.create(
    store=True,
    voice={
        "model": "gemini-3.8-flash-tts",
        "type": "prompted",
        "prompted": {
            "base_voice": "Puck",
            "input": (
                "Make the voice sound slightly older and more grounded, with a"
                " warm British accent and measured audiobook narration pacing."
            ),
        },
    },
)

print(remixed_voice.id)

if remixed_voice.sample_audio and remixed_voice.sample_audio.data:
    with open("preview.wav", "wb") as f:
        f.write(base64.b64decode(remixed_voice.sample_audio.data))
```

The response includes a 24 kHz WAV sample_audio preview and the new voice ID. Pass that ID in speech_config for synthesis. You can also list, retrieve, or delete remixed voices through the same client.

Supported base voices include the 30 prebuilt names (Puck, Kore, Zephyr, and others), any Extended Voice Library ID from voices.list(), or any stored prompted voice_... ID from your project.

![Woman holding a microphone in a recording studio](https://images.unsplash.com/photo-1720722588277-24a6bafd5dd4?auto=format&fit=crop&w=800&q=80)

## Prompting Best Practices

Describe relative adjustments only. Do not restate the full persona of the base voice. Focus on the traits you want to change: age, timbre, pitch, pacing, or energy.

Preserve language and accent by default. Explicitly name a new accent or language only when you want to override it.

When chaining remixes, change one or two attributes per step and listen to the sample_audio before the next edit. Permanent vocal traits belong in the remix. Temporary delivery cues such as “whispering” or “excited” belong in the speech_metadata.style field on the synthesis request.

Example prompts from the docs:

- Base “Puck”: “Make the voice sound 20 years older with a deeper, slightly gravelly baritone timbre while keeping the friendly warmth.”
- Base “Kore”: “Change the accent to Australian English while preserving the clear, confident studio delivery.”
- Existing designed voice: “Adapt this voice for late-night meditation narration: lower the vocal projection, slow the pacing, and soften the tone.”

## Quota, Storage, and Limits

Voice remixing requires a paid Gemini API tier. Each project can store up to 200 stateful voices total across designed, remixed, and replicated voices.

Stored voices expire one year after last use. Synthesizing with the voice or using it as a base_voice for another remix resets the timer.

Remixing never mutates the original base voice. Deleting the base later does not affect voices remixed from it.

## Practical Tips

Start with a strong base voice that already matches the core character. Remix only the deltas you need.

Generate the three Studio takes and compare them on phone speakers, not just studio monitors. Small pitch or accent shifts become clearer on everyday devices.

For multi-speaker work, remix each character once and store the IDs. Reference those IDs in every synthesis call so the voices stay consistent across episodes.

Test pronunciation of proper names in a short clip after the remix. A respell in the script still works better than trying to force pronunciation through the remix prompt.

If you already have a designed voice from the earlier custom voices guide, load it as the base and apply a small accent or energy tweak. You do not need to start over.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Voice Remixing turns the Gemini 3.8 TTS library into a practical editing surface. You keep the identity of a proven base voice and dial in the exact age, accent, pace, or energy you need without regenerating from scratch.

Open the AI Studio playground and try a single relative prompt on a prebuilt voice. Save the take you like, then move the voice_... ID into your API calls or multi-speaker scripts. Pair it with the design and replication tools from the earlier guide for a full custom voice pipeline.

## Sources

- [Voice remixing](https://aistudio.google.com/docs/voice-remixing) — Google AI Studio / Gemini API docs, November 2026
- [Text-to-speech generation](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API docs
- [Gemini 3.8 Flash TTS](https://aistudio.google.com/docs/models/gemini-3.8-flash-tts) — Model page
- [Google announcement on X](https://x.com/Google/status/2118027058794148099) — 4 November 2026
- [How to Create Custom Voices with Gemini 3.8 TTS](/blog/gemini-3-8-flash-tts-custom-voices/) — Yum News
