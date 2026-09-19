---
title: "How to Transcribe Audio with Gemini 3.5 Transcribe"
description: "A practical tutorial for Gemini 3.5 Transcribe: upload recordings with the Interactions API, stream live captions with the Live API, and use speaker labels, word timestamps, smart formatting, and custom vocabulary."
pubDate: 2026-09-19T18:30:00
tags: ["ai-tools", "gemini", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=80"
---

Generic speech-to-text models often drop brand names, mix up speakers, and leave every “um” in the file. **Gemini 3.5 Transcribe** is Google’s dedicated speech-to-text model for the Gemini API. It turns recorded audio or a live microphone stream into text with automatic language detection, optional speaker labels, word-level timestamps, and a “smart” cleanup mode.

This guide follows official Gemini API documentation. The model is in public preview. Confirm current limits and prices on Google’s pages before you ship.

## What you get with 3.5 Transcribe

Use this model when the job is **speech to text**. Do not use it when you need a spoken reply (use Gemini 3.8 Live) or when you want to ask questions about a soundtrack (use general audio understanding on a Gemini Flash or Pro model).

Official capabilities:

- Automatic speech recognition across **85+ locales**, including mid-sentence code-switching
- Custom vocabulary of up to **1,000** terms (Google says results are usually best with up to **100**)
- Speaker diarization on file jobs (up to **8** speakers; 3+ speakers is experimental)
- Word-level timestamps on file jobs
- **verbatim** vs **smart** transcription modes
- Inverse text normalization such as turning spoken money into a formatted amount

Two endpoints:

| Job | Model ID | Interface |
| --- | --- | --- |
| Pre-recorded file | `gemini-3.5-transcribe` | Interactions API |
| Live captions | `gemini-3.5-transcribe-live` | Live API (WebSockets) |

File jobs accept up to **1 hour** of audio. That drops to **30 minutes** when you turn on diarization or word timestamps. Live sessions are limited to **10 minutes**.

![Close-up of a studio microphone used for recording interviews](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80)

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/PWPsZssgfDo" title="How to build with Gemini 3.5 Transcribe — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Pick file mode or live mode

**File mode** is the right default for meetings, call logs, podcasts, and lecture recordings. You upload once, then request a full transcript with speaker tags and timestamps if you need them.

**Live mode** is for captions, voice dictation, and any UI that must show words as the person speaks. Official docs list sub-second streaming over the Live API. Live mode does **not** support speaker diarization or word-level timestamps.

Incompatibilities matter in production:

- Custom vocabulary cannot be combined with diarization or word timestamps.
- Word timestamps are file-only and Google notes they can reduce accuracy.
- Batch, Flex, and Priority inference are not supported on this model.

## Transcribe a file with the Interactions API

Install the official SDK and set `GEMINI_API_KEY`.

```python
from google import genai

client = genai.Client()

audio_file = client.files.upload(file="path/to/sample.mp3")

interaction = client.interactions.create(
    model="gemini-3.5-transcribe",
    input=[
        {
            "type": "audio",
            "uri": audio_file.uri,
            "mime_type": audio_file.mime_type,
        }
    ],
)

print(interaction.output_text)
```

JavaScript:

```javascript
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({});

const audioFile = await client.files.upload({
  file: "path/to/sample.mp3",
  config: { mime_type: "audio/mp3" },
});

const interaction = await client.interactions.create({
  model: "gemini-3.5-transcribe",
  input: [
    {
      type: "audio",
      uri: audioFile.uri,
      mime_type: audioFile.mimeType,
    },
  ],
});

console.log(interaction.output_text);
```

That first call uses automatic language detection and the default **verbatim** mode.

## Language hints and custom vocabulary

Leave `language_codes` empty when speakers mix languages. Pass a BCP-47 code when you already know the locale.

```python
generation_config = {
    "transcription_config": {
        "language_codes": ["es-ES"],
        "custom_vocabulary": ["Gemini", "Kubernetes", "BigQuery"],
    }
}
```

Use custom vocabulary for product names, teammates, and jargon the model would otherwise guess. Keep the list short. Do not enable diarization or word timestamps on the same request.

![Team meeting around a conference table with laptops](https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80)

## Speaker labels and word timestamps

File jobs can tag speakers as `spk_1`, `spk_2`, and so on.

```python
generation_config = {
    "transcription_config": {
        "mode": {
            "type": "verbatim",
            "diarization_mode": "speaker",
            "timestamp_granularities": ["word"],
        },
    }
}
```

Plan for the **30-minute** cap when both features are on. For a two-hour board meeting, split the file first.

## Verbatim vs smart mode

**verbatim** (default) keeps fillers, false starts, and raw wording. Use it for legal notes, user-research transcripts, and any case where you must see what was actually said.

**smart** cleans the text for reading:

- Removes “um”, “uh”, and similar fillers
- Resolves spoken self-corrections (“Tuesday, actually Wednesday”)
- Adds punctuation, lists, and formatted dates or amounts

Google’s own example: spoken “Um, so for the meeting, I think we should, uh, invite Alice and, wait no, Bob and Carol.” becomes “For the meeting, I think we should invite Bob and Carol.” in smart mode.

## Stream live captions

For a microphone session, connect with `gemini-3.5-transcribe-live` and request text responses.

```python
import asyncio
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-3.5-transcribe-live"

config = types.LiveConnectConfig(
    response_modalities=["TEXT"],
    input_audio_transcription=types.AudioTranscriptionConfig(
        language_codes=[],  # automatic detection
    ),
)
```

You can pass `custom_vocabulary` on the live config as well. Stay inside the **10-minute** session limit; start a new session for a longer event.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/qzLrKKjdsPU" title="Build voice-first apps with Gemini 3.5 Transcribe — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## A practical pipeline

1. Record or upload audio in a common format such as MP3 or WAV.
2. If the clip is longer than the official cap, split it before upload.
3. Decide whether you need raw wording or a readable summary of speech.
4. If you need speaker names later, run diarization first, then map `spk_1` in your own UI.
5. If you need search highlights, request word timestamps on a separate pass without custom vocabulary.
6. Store the transcript with the source file URI so you can re-run when the preview API changes.

Google already uses related transcription work in consumer products such as Gboard Rambler and the Gemini app. Those apps are not a substitute for reading the developer limits; they only show the quality target.

## Limits and safety

Treat the model as **preview**. Official docs say caching, function calling, code execution, file search, thinking, Batch API, Flex inference, and Priority inference are not supported.

Do not send recordings that contain secrets or personal data you are not allowed to process. Preview and free-tier traffic can be subject to Google’s standard Gemini API data-use terms—read the current terms in AI Studio before you upload customer calls.

Check the [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.5-transcribe) for current token rates. Third-party summaries quote blended per-minute estimates; those figures change and are not a substitute for the official table.

## Conclusion

Gemini 3.5 Transcribe is the Gemini API path for captions and transcripts, not for chatting out loud. Use `gemini-3.5-transcribe` for files and `gemini-3.5-transcribe-live` for streaming. Start with automatic language detection, add a short custom vocabulary when names matter, and turn on diarization or timestamps only when the extra metadata is worth the tighter duration cap.

Try a short clip in [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-3.5-transcribe), then copy the Interactions API call into your backend.

## Sources

- [Audio transcription — Gemini API](https://ai.google.dev/gemini-api/docs/transcribe)
- [Gemini 3.5 Transcribe model card](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe)
- [Live transcription with the Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/live-transcribe)
- [Introducing Gemini 3.5 Transcribe — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/)
- [Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe](https://blog.google/innovation-and-ai/technology/developers-tools/build-real-time-voice-applications-gemini-audio/)
- [Gemini Audio — AI transcription (DeepMind)](https://deepmind.google/models/gemini-audio/ai-transcription/)
