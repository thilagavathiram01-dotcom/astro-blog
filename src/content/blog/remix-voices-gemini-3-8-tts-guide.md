---
title: "How to Remix Voices with Gemini 3.8 TTS"
description: "Step-by-step guide to remix preset and custom voices using natural language prompts in Gemini 3.8 Flash TTS via AI Studio and the API."
pubDate: 2026-11-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google released Voice Remixing for Gemini 3.8 Flash TTS on November 4, 2026. You can now take any prebuilt studio voice, Extended Voice Library entry, or custom designed voice and adjust its age, pitch, pace, accent, or timbre with plain-language instructions. The result is a new stored voice ID you can reuse for synthesis.<grok type="render_inline_citation" citation_id="255" />

This feature builds on earlier voice design and replication tools. Instead of starting from zero, you anchor on an existing voice and apply relative changes. Developers and creators gain a faster way to iterate on characters for audiobooks, podcasts, apps, and multi-speaker scenes.

![Person speaking into a studio microphone](https://images.unsplash.com/photo-1779223372803-c700b06c1086?auto=format&fit=crop&w=800&q=80)

## What Voice Remixing Changes

Voice Remixing uses the same CreateVoice endpoint as Voice Design. You supply a `base_voice` and a prompt that describes only the modifications you want. The model returns a fresh `voice_...` ID without altering the original.<grok type="render_inline_citation" citation_id="255" />

Supported base voices include the 30 prebuilt studio names (Puck, Kore, Zephyr, and others), any catalog ID from the Extended Voice Library, and previously stored designed or remixed voices. Each remix creates an independent resource. Deleting the base voice later does not affect the remixed version.

The feature requires a paid Gemini API tier. Projects can store up to 200 stateful voices. Each stored voice expires after one year of inactivity; synthesizing speech or using it as a base for a further remix resets the timer.

## How to Remix a Voice in Google AI Studio

Open [Google AI Studio Generate Speech](https://aistudio.google.com/generate-speech). Select an existing voice from the library or one you designed earlier. Click the Remix this voice option. Enter a short prompt that focuses on the changes.

Example prompts that work well:

- Make the voice sound 20 years older with a deeper, slightly gravelly baritone while keeping the friendly warmth.
- Change the accent to Australian English while preserving the clear studio delivery.
- Lower the projection, slow the pacing, and soften the tone for late-night meditation narration.

AI Studio generates three sample takes. Listen to each, pick the best, and save it. The saved voice receives a permanent ID you can use immediately for synthesis or further remixes.<grok type="render_inline_citation" citation_id="205" />

You can also audition and refine inside the same interface before exporting the voice ID for API use.

## Step-by-Step API Workflow

Install the Google GenAI SDK and set your API key. The following Python example remixes the prebuilt Puck voice into an older British-accented narrator, saves the preview WAV, then synthesizes a short passage.

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

print(f"Created remixed voice ID: {remixed_voice.id}")

if remixed_voice.sample_audio and remixed_voice.sample_audio.data:
    with open("remixed_voice_preview.wav", "wb") as f:
        f.write(base64.b64decode(remixed_voice.sample_audio.data))

interaction = client.interactions.create(
    model="gemini-3.8-flash-tts",
    input=[{
        "type": "user_input",
        "content": [{
            "type": "text",
            "text": "Chapter One. The fog rolled quietly across the harbor at dawn.",
            "annotations": [{
                "type": "speech_metadata",
                "style": "calm and reflective",
            }],
        }],
    }],
    response_format={"type": "audio"},
    generation_config={
        "speech_config": [
            {"voice": remixed_voice.id},
        ]
    },
)

with open("remixed_voice_output.wav", "wb") as f:
    f.write(base64.b64decode(interaction.output_audio.data))
```

The same pattern works in other languages supported by the SDK. Pass the returned ID in any subsequent speech request. For multi-speaker dialogue, supply different remixed voice IDs for each speaker.<grok type="render_inline_citation" citation_id="255" />

You can chain remixes. Take the new voice ID, supply it as `base_voice` in a second call, and refine only one or two traits at a time. This keeps the core identity stable while you iterate.

![Audio engineer working in a recording studio](https://images.unsplash.com/photo-1760926421866-4ce684285fa6?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Better Results

Describe relative adjustments rather than restating the entire persona. The model already knows the base voice; focus on the delta.

Adjust one or two traits per remix step when chaining. Audition the returned sample audio before the next iteration.

Reserve permanent changes (age, accent, baseline pitch) for remixing. Use the `speech_metadata.style` annotation on individual turns for temporary acting cues such as whispering or excited delivery.

The remixed voice works with both Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS. Flash-Lite is useful for high-volume, lower-cost synthesis once you lock in the voice you like.

If you already use voice design or replication, read the earlier guide on [building with Gemini 3.8 Flash TTS in AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/) for the base workflow before adding remixing.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/SOF3_evPje8"
    title="Design and replicate voices with Gemini 3.8 Flash TTS"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Manage and Inspect Your Voices

List all custom prompted voices (designed and remixed) with `client.voices.list(type_=["prompted"])`. Each remixed entry includes the original `base_voice` and the prompt used, so you can track lineage. Retrieve any voice to re-download its sample audio preview. Delete unused voices with `client.voices.delete` to free quota slots.

## Conclusion

Voice Remixing turns the large library of Gemini 3.8 voices into a flexible starting point. A single natural-language instruction produces a new reusable voice ID without regenerating from scratch. Whether you are building an audiobook narrator, a podcast host, or multi-speaker dialogue, the workflow in AI Studio or the API is the same: pick a base, describe the change, audition, and store.

Start in Google AI Studio today, then move the voice IDs into your production pipeline once the results match your needs.

## Sources

- [Voice remixing | Gemini API](https://aistudio.google.com/docs/voice-remixing)
- [Gemini API changelog, November 4, 2026](https://ai.google.dev/gemini-api/docs/changelog)
- [Google for Developers announcement on X](https://x.com/googledevs/status/2118026081899036932)
