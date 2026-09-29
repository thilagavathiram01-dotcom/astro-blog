---
title: "How to Direct Gemini 3.8 TTS Scripts with Vocal Cues"
description: "Add laughs, sighs, pauses, and backchannels to Gemini 3.8 Flash TTS scripts in AI Studio and the Gemini API."
pubDate: 2026-09-29T13:00:00
heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Gemini 3.8 Flash TTS recites the words you send. It also follows acting tags you drop into the script. That is the difference between a flat read and a two-person scene that sounds like two people in a room.

Google launched Gemini 3.8 Flash TTS (`gemini-3.8-flash-tts`) and Gemini 3.8 Flash-Lite TTS (`gemini-3.8-flash-lite-tts`) on 23 September 2026. Both models accept turn-level style and inline vocal events. This guide covers the tags Google documents, how to test them in AI Studio, and how to send the same script through the Gemini API.

If you still need a first pass through the playground, start with [How to Use Gemini 3.8 Flash TTS in AI Studio](/blog/gemini-3-8-flash-tts-ai-studio/). Come back here when the voice is locked and the script needs timing.

## What the models actually do

TTS through the Gemini API is not the Live API. Live handles an open microphone. TTS recites exact text with style control. Google’s speech-generation docs say that split clearly.

Flash TTS is the creative model. Google positions it for audiobooks, podcasts, character work, regional accents, and two-speaker scenes. Flash-Lite TTS is the volume model for dubbing, read-aloud features, and voice-agent replies.

Both IDs share the same prompting shape. You can swap the model string after you finish a script.

Google reports Flash TTS at number one on Hume AI’s Voice Design Benchmark (71.4) and first in accent modeling (60.8). Flash and Flash-Lite sit at number one and number two on Hume’s Overall Quality Index. Treat those as published lab scores, not a guarantee for your file.



![Close-up of a studio microphone used for voice recording](https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80)



## The tags Google documents

The launch post lists scripted vocal bursts and backchanneling as first-class controls. The speech-generation docs name the same family of events.

Use the angle-bracket bursts for non-speech sounds:

- `<laugh>`
- `<sigh>`
- `<gasp>`
- `<short pause>`

Use pipe-wrapped tokens for listener reactions:

- `|mhm|`
- `|yeah|`

Put the tag next to the spoken line it belongs to. Do not dump a block of tags at the top of the file. The model treats them as events in the recitation, not as a style essay.

Turn-level style still lives outside the transcript. In the Interactions API that is a `speech_metadata` annotation with a `style` string such as `cheerful and friendly`. In a two-speaker scene you also set `speaker` on each part.

## Step 1: Open the speech playground

1. Go to [Google AI Studio generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts).
2. Select `gemini-3.8-flash-tts` for the first take. Switch to `gemini-3.8-flash-lite-tts` only after the timing works.
3. Pick a prebuilt voice such as Kore, or a voice you already designed.
4. Paste a short two-line script. Keep the first test under 30 seconds so you can hear the tags without waiting on a long render.

Google’s playground is built as a voice design workspace. You can design a persona, then drop that voice into a dual-speaker screenplay editor and direct line-by-line delivery.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 2: Write a two-speaker beat with cues

Keep speakers short. Give each line one job and one cue.

Example beat:

- Joe: `How's it going today Jane?` — style `cheerful and friendly`
- Jane: `Not too bad. Ready to test these new voices? <laugh>` — style `dry, slightly amused`
- Joe: `|yeah| Let's start with the short pause test. <short pause> Still with me?`

Google’s official single-speaker sample uses the text `Have a wonderful day!` with style `cheerful and friendly` and voice `Kore`. Use that first if a two-speaker pass fails. A working single line proves the model ID and audio output before you add speakers.

Do not mix Live API habits into this request. Do not send images. TTS models take text and return audio.

## Step 3: Call the API with the same script

Google documents both `generate_content` and the Interactions API. The Interactions shape below matches the current speech-generation guide.

Set `response_format` to audio. Put style on each text part. Name the voice in `generation_config.speech_config`.

For two speakers, add a `speaker` field in each `speech_metadata` annotation and list both voices in `speech_config`. Google’s docs show conversational mode with `"mode": "conversational"` when you want natural turn-taking cadence.

Save the returned audio as WAV. Listen once without looking at the script. If a laugh lands late, move the tag one word earlier and generate again. Do not stack three bursts on one clause.



![Over-ear headphones on a desk next to a laptop](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80)



## Step 4: Keep consent and watermarks in the checklist

Voice design from a text prompt is separate from voice replication. Replication recreates a vocal profile from a 30-second sample of a voice you have the rights to use. Google requires a verbal consent recording that matches the reference speaker.

Voice replication through AI Studio is not available in Illinois, Texas, the EEA, the UK, Switzerland, and India. That limit is a footnote on the official launch post. Do not promise clone-from-sample in those regions.

Every Gemini Audio clip is watermarked with SynthID. Replicated voices also carry C2PA credentials. You will not hear the watermark. Detection tools will.

Do not feed other people’s voices into replication. Do not send medical text, passwords, or private customer data through a playground you share with a team.

## Tips that keep renders usable

Write the spoken line first. Add one tag. Render. Then add style. Changing three variables at once hides which change broke the timing.

Use Flash TTS for the rehearsal. Move the same script to Flash-Lite only when you need volume. Google Vids uses Flash-Lite. Gemini Notebook uses Flash TTS. The API accepts both IDs.

Stay inside two speakers per request. That is the documented scene size.

If a dialect is the point of the scene, say the dialect in the voice design prompt, not only in a style string on line three. Google documents generative voice design across more than 100 languages and dialects, plus a library of 2,000-plus production-ready voices.

Long-form jobs belong on Flash TTS. Google says the model holds timbre and room tone across extended narration with less speaker drift than earlier TTS IDs. Still split a two-hour audiobook into chapters so a bad tag does not force a full rerender.

## Conclusion

Gemini 3.8 TTS is a recitation engine with a small stage-direction language. The useful work is the script, not a longer system prompt.

Open the generate-speech workspace, lock a voice, drop one burst tag, and listen. When the laugh sits on the right beat, copy the same parts into the API and keep SynthID, consent, and regional replication limits on the same checklist as the model ID.

## Sources

- [Gemini 3.8 Flash TTS and Gemini 3.8 Flash-Lite TTS](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google Blog, 23 September 2026
- [Text-to-speech generation](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API docs
- [Gemini 3.8 Flash TTS model card page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — Gemini API docs
- [Google AI Studio generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [SynthID](https://deepmind.google/models/synthid/)
- [Create your own voices with Gemini 3.8 text-to-speech](https://www.youtube.com/watch?v=FL6mI_Br-mc) — Google DeepMind
