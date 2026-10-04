---
title: "How to Generate Music with Lyria 3.5 in Gemini API"
description: "Generate 44.1 kHz songs with Lyria 3.5 in the Gemini API. Set up a key, call lyria-3.5, and save MP3 plus lyrics."
pubDate: 2026-10-04T08:30:00
heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini"]
noindex: false
---

Lyria 3.5 is Google's flagship music model in the Gemini API. It turns a text prompt, or an image, into 44.1 kHz stereo audio with verses, choruses, and bridges. Developers reach it through the Interactions API, not the older `generateContent` call used for chat models.

This guide covers the model IDs, a working Python request, and how to save the MP3 and lyrics. If you only need a track inside the Gemini app, the [Lyria 3.5 Gemini app guide](/blog/gemini-3-8-flash-tts-ai-studio/) is a different path. Voiceovers still belong on a speech model such as Gemini 3.8 Flash TTS in [Google AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/).

## Pick the right Lyria model

Google documents two music models on the same Interactions endpoint.

| Model | ID | Length | Best for |
| --- | --- | --- | --- |
| Lyria 3 Clip | `lyria-3-clip-preview` | Always 30 seconds | Loops, stingers, previews |
| Lyria 3.5 | `lyria-3.5` | A couple of minutes, steered by the prompt | Full songs with structure |

Both accept text and images. Both return audio plus text (lyrics or structure). Batch API, caching, function calling, search grounding, and Live API are not supported on `lyria-3.5`. The input token limit is 131,072. The stable model string is `lyria-3.5`, last updated in September 2026.

Default audio is MP3. For Lyria 3.5 you can also request audio output through `response_format`. Clip generation always stays at 30 seconds, even if the prompt asks for a longer piece.

![Studio monitors and a mixing desk used to check generated stereo tracks](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)

## Create an API key and install the SDK

1. Open [Google AI Studio](https://aistudio.google.com/) and create an API key.
2. Export it as `GEMINI_API_KEY`. The Python client reads that variable when you call `genai.Client()` with no arguments.
3. Install a current `google-genai` package that includes Interactions:

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key"
```

You can also try prompts in AI Studio at the Lyria 3.5 music surface before you write code. That is the fastest way to learn which genre words and length hints the model follows.

Keep the key on a server. Do not ship it in a mobile or browser app. Music calls are billable once your project is on paid Gemini API billing.

## Generate a 30-second clip

Use `lyria-3-clip-preview` when you need a short loop. The official sample writes the audio bytes and prints any lyrics returned with the track.

```python
import base64
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="lyria-3-clip-preview",
    input="A short instrumental acoustic guitar piece.",
)

generated_audio = interaction.output_audio
if generated_audio:
    with open("music.mp3", "wb") as f:
        f.write(base64.b64decode(generated_audio.data))

lyrics = interaction.output_text
if lyrics:
    print(f"Lyrics:\n{lyrics}")
```

The same call over REST posts to `https://generativelanguage.googleapis.com/v1beta/interactions` with the header `x-goog-api-key` and a JSON body of `model` plus `input`.

`output_audio` is the last generated audio block. `output_text` is the lyrics or structure text. Both are convenience fields on the interaction. The full payload lives in `steps`, where `model_output` steps hold text blocks and base64 audio blocks.

## Generate a full song with Lyria 3.5

Switch the model string to `lyria-3.5` for a piece that can run a couple of minutes. State the length and the arrangement in the prompt. Google's docs use this pattern:

```python
interaction = client.interactions.create(
    model="lyria-3.5",
    input=(
        "An epic cinematic orchestral piece about a journey home. "
        "Starts with a solo piano intro, builds through sweeping strings, "
        "and climaxes with a massive wall of sound. About two minutes."
    ),
)
```

Save the file the same way as the clip sample. If the response includes timed lyrics, print `interaction.output_text` and store it next to the MP3 so editors can line up captions.

Duration is not a separate numeric field in the basic call. Ask for a length in the prompt, or use timestamps in the prompt to mark sections. A request that only says "a piano melody" can still return a structured piece, but it will not lock a runtime.

![Acoustic guitar on a desk, a common prompt subject for short Lyria clips](https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80)

## Request audio output explicitly

MP3 is the default. To ask for an audio response format on Lyria 3.5, pass `response_format`:

```python
interaction = client.interactions.create(
    model="lyria-3.5",
    input="A bright indie pop chorus with stacked vocals, about 90 seconds.",
    response_format={"type": "audio"},
)
```

JavaScript uses the same shape: `response_format: { type: 'audio' }`. Decode `output_audio.data` from base64 before you write the file. Empty audio usually means the call failed or the key cannot access the model. Check the interaction error fields before you retry.

## Prompt patterns that match the docs

Official examples stay concrete. Copy that style.

- Name the ensemble: solo piano, acoustic guitar, sweeping strings.
- Name the arc: intro, build, climax.
- Say instrumental if you do not want vocals. The Gemini app also lets people pick vocal or instrumental. In the API, put that choice in the prompt.
- Ask for a length: "30-second loop" on the clip model, or "about two minutes" on `lyria-3.5`.
- For image-led tracks, the music generation guide supports image input alongside text. Use that when the picture should set mood, not when you need exact sheet music.

Avoid prompts that ask the model to copy a living artist's recording or a copyrighted song. Describe genre, tempo, and instruments instead.

## Where else Lyria 3.5 runs

The same model family is available globally in the Gemini app on the web and on mobile, in Google Flow Music, in Google AI Studio, and in Google Vids. The API path is the one you automate. The app path is faster for a one-off birthday track or a video bed.

Google DeepMind's Lyria introduction shows image-to-music, genre and tempo direction, and export of audio marked as an AI creation. Treat generated files as synthetic audio in any product disclosure you already use for other Gemini media.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Op8X8RmiE98"
    title="Introducing Lyria 3: Our new music model"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you ship a music feature

- Start with `lyria-3-clip-preview` in development. A fixed 30-second file is easier to snapshot in tests than a multi-minute song.
- Write both the MP3 and the lyrics text. The text block is how you debug structure when the mix is hard to judge by ear.
- Do not enable thinking config or tools on these calls. The model card lists thinking, function calling, and search grounding as unsupported.
- Store outputs in object storage, not in your repo. Files are binary and can be large at 44.1 kHz stereo.
- Re-read the music generation guide when you bump `google-genai`. Interactions field names have moved before on other Gemini models.

## Conclusion

Lyria 3.5 is the model ID for full songs in the Gemini API. Lyria 3 Clip is the 30-second preview model. Both go through `client.interactions.create`, return base64 audio on `output_audio`, and can return lyrics on `output_text`. Set `GEMINI_API_KEY`, prompt for structure and length, and save the MP3 before you wire the call into an app.

## Sources

- [Generate music with Lyria 3.5](https://ai.google.dev/gemini-api/docs/music-generation), Gemini API documentation, updated 2026-10-01.
- [Lyria 3.5 model page](https://ai.google.dev/gemini-api/docs/models/lyria-3.5), Google AI for Developers, September 2026.
- [Create your best tracks yet with Lyria 3.5 in Gemini](https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/), Google Blog, September 4, 2026.
- [Introducing Lyria 3: Our new music model](https://www.youtube.com/watch?v=Op8X8RmiE98), Google DeepMind, February 18, 2026.
