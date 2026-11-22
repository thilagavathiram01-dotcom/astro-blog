---
title: "How to Voice-Edit Text with Gemini 3.5 Transcribe"
description: "Learn how to edit, rewrite, and format existing text by voice using Gemini 3.5 Transcribe's source_text and Smart mode in the API."
pubDate: 2026-11-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "how-to", "ai-tools", "developer"]
noindex: false
---

Google added native voice editing to Gemini 3.5 Transcribe in November 2026. You can now pass existing text and spoken instructions so the model returns a complete revised version instead of a raw transcript.

This works in both the Interactions API (for audio files) and the Live API (for real-time streaming). The same technology powers Rambler on Gboard and voice features in the Gemini app on macOS.

If you already use basic transcription, see our [Gemini 3.5 Transcribe guide](/blog/gemini-3-5-transcribe/). This post focuses on the editing workflow.

## What voice editing does

Voice editing is on by default in Smart transcription mode. The model removes filler words, resolves self-corrections, applies formatting, and follows spoken edit instructions.

You can supply up to 64 KiB of existing text in the `source_text` field. The model returns the full updated text, not a diff.

Supported actions include targeted word replacements, tone changes, list formatting, appending new content, and deletions.

Smart mode does not support word-level timestamps or speaker diarization. Use verbatim mode when you need those features.

![Studio microphone ready for voice dictation](https://images.unsplash.com/photo-1571243245218-14e2a35a2569?auto=format&fit=crop&w=800&q=80)

## Edit existing text with the Interactions API

Upload an audio file that contains your spoken edit instruction. Then create an interaction with the model set to `gemini-3.5-transcribe` and Smart mode plus `source_text`.

Here is a Python example that changes a meeting time:

```python
from google import genai

client = genai.Client(http_options={"api_version": "v1beta"})

audio = client.files.upload(file="edit_command.mp3")  # Spoken: "Move it to 3:30 PM"

response = client.interactions.create(
    model="gemini-3.5-transcribe",
    input=[{"type": "audio", "uri": audio.uri, "mime_type": audio.mime_type}],
    generation_config={
        "transcription_config": {
            "mode": {
                "type": "smart",
                "source_text": "Meeting tomorrow at 2:00 PM in room 42."
            }
        }
    },
)

print(response.output_text)
# Full revised text, for example: "Meeting tomorrow at 3:30 PM in room 42."
```

The response contains the complete updated document in `output_text`.

## Multi-turn voice editing

Each Interactions API call is stateless. To apply several edits in sequence, feed the previous `output_text` back as the next `source_text`.

```python
current_text = "The new park downtown is open and has cool features."

# Turn 1: "Make it more professional."
turn1_audio = client.files.upload(file="turn1.mp3")
turn1 = client.interactions.create(
    model="gemini-3.5-transcribe",
    input=[{"type": "audio", "uri": turn1_audio.uri, "mime_type": turn1_audio.mime_type}],
    generation_config={
        "transcription_config": {
            "mode": {"type": "smart", "source_text": current_text}
        }
    },
)
current_text = turn1.output_text

# Turn 2: "Add a sentence inviting the team to visit on Friday."
turn2_audio = client.files.upload(file="turn2.mp3")
turn2 = client.interactions.create(
    model="gemini-3.5-transcribe",
    input=[{"type": "audio", "uri": turn2_audio.uri, "mime_type": turn2_audio.mime_type}],
    generation_config={
        "transcription_config": {
            "mode": {"type": "smart", "source_text": current_text}
        }
    },
)
print(turn2.output_text)
```

Store the latest text on your side and pass it forward.

## Real-time editing with the Live API

For continuous voice sessions use `gemini-3.5-transcribe-live`. Set `mode` to `SMART` and optionally seed `source_text` at connection time.

The Live session keeps the latest finalized transcript as context for the next turn. You do not resend `source_text` between turns unless the user edits the buffer with a keyboard.

If the user types changes between voice turns, close the session and open a new one seeded with the updated text.

Session length is limited to 10 minutes.

![Recording studio setup for live voice work](https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80)

## Example spoken edit commands

Official docs list these patterns:

- Targeted replacement: source "The meeting is at 2:00 PM tomorrow in building 42." + spoken "Change the time to 3:30 PM" → updated time.
- Tone adjustment: "Make the tone more formal."
- Structural formatting: "Turn the action items into a numbered list."
- Append: "Add a sentence about the budget review."
- Delete: "Delete the second sentence."

Speak the instruction clearly after the model has the source text.

## Consumer surfaces that already use it

Rambler on Gboard (available on Pixel 11 and expanding) lets you dictate clean text and then edit by voice. You can correct spelling, change style, or rephrase without touching the keyboard.

In the Gemini app on macOS the same model accepts natural speech, cleans it, and can trigger other Gemini models for image generation or file analysis via function calling.

Both experiences rely on Smart mode plus the voice-editing path now exposed in the API.

## Pricing and limits

On the Gemini API (as of the official pricing page):

- `gemini-3.5-transcribe`: about $0.005 per minute blended ($2 per 1M audio input tokens, $12 per 1M text output tokens).
- `gemini-3.5-transcribe-live`: about $0.009 per minute blended.
- Free tier is available with rate limits.

`source_text` is capped at 64 KiB. Custom vocabulary works with Smart mode (up to 1,000 terms, best results under 100).

Audio file limit is 1 hour (30 minutes if you enable diarization or word timestamps, which are incompatible with Smart mode).

## Tips for reliable results

Record the spoken instruction in a quiet environment. Background noise still affects accuracy even though the model is robust.

Keep `source_text` under the 64 KiB limit and send the full current document each time in the unary API.

For multi-turn apps, always replace the buffer with the latest `output_text` before the next call.

Test both Smart and verbatim modes on your domain language. Smart mode improves readability but drops timestamps and speaker labels.

Watch the official developer walkthrough:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/PWPsZssgfDo"
    title="How to build with Gemini 3.5 Transcribe"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 3.5 Transcribe voice editing lets you treat spoken commands as first-class edits on existing text. Pass `source_text` in Smart mode, handle multi-turn state yourself on the unary API, or rely on session memory in the Live API.

The same capability already runs in Rambler and the Gemini macOS app. Developers can now build similar voice-first editing flows in their own products.

Start in Google AI Studio with the `gemini-3.5-transcribe` model, upload a short audio instruction, and supply a draft in `source_text`. You will receive the full revised text in one response.

## Sources

- [Introducing Gemini 3.5 Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/) — Google Blog, 26 August 2026
- [Audio transcription guide](https://ai.google.dev/gemini-api/docs/transcribe) — Gemini API docs
- [Gemini 3.5 Transcribe model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe) — Gemini API docs
- [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) — Gemini API docs
- [How to build with Gemini 3.5 Transcribe](https://www.youtube.com/watch?v=PWPsZssgfDo) — Google for Developers, YouTube
