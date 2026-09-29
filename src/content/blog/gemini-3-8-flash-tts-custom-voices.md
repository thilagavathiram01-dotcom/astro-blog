---
title: "How to Create Custom Voices with Gemini 3.8 TTS"
description: "Use Gemini 3.8 Flash TTS in Google AI Studio and the Gemini API to design voices, direct line-by-line delivery, and export audio."
pubDate: 2026-09-29T14:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to", "google", "developer", "ai"]
noindex: false
---

Google launched **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS** on 23 September 2026. The models turn a script plus style notes into speech you can use in podcasts, audiobooks, agents, and Google Vids.

You no longer pick only from a short list of stock speakers. Flash TTS can design a voice from a natural-language prompt, replicate a consented 30-second sample, or pull from an expanded library of more than 2,000 production voices.

This guide follows official Google blog posts and Gemini API docs. It shows when to use each model, how to run a first job in AI Studio, and how to keep voice work inside consent and watermark rules.

## What changed with Gemini 3.8 TTS

Google positions Flash TTS as the creative studio model. You write a role, accent, and delivery style in plain language. The model then keeps that speaker stable across long files.

Flash-Lite TTS uses the same API shape. It is built for volume: dubbing queues, read-aloud features, and voice agents that need lower latency and cost.

Both models sit in the Gemini Audio family next to 3.5 Live Translate, 3.5 Transcribe, 3.8 Live, and 3.8 Live Extended Thinking. TTS is not the Live API. Live is for turn-taking conversation. TTS is for exact recitation with style control.



![Close-up of a studio microphone used for voice recording](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)



## Pick the right model before you prompt

Use this split from Google’s own comparison:

- **gemini-3.8-flash-tts** — audiobooks, multi-speaker scenes, regional dialects, heavy acting tags such as laughs and pauses.
- **gemini-3.8-flash-lite-tts** — high-volume jobs, everyday single-speaker reads, agent replies, voice replication at scale.

Flash TTS leads Hume AI’s Voice Design Benchmark at 71.4 and accent modeling at 60.8, according to Google’s launch post. Flash and Flash-Lite also took the top two spots on Hume’s Overall Quality Index in that write-up.

Flash TTS covers more than 130 languages in API docs. Flash-Lite covers more than 100. Switch models by changing one model ID. Keep the same script and `speech_config`.

## What you need

- A Google account signed in at [Google AI Studio](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts).
- For API work, an API key from AI Studio and the `google-genai` Python SDK.
- For replication, a 30-second sample you own or have rights to use, plus a verbal consent recording from that speaker.
- Age and region limits still apply. Voice replication through AI Studio is not available in Illinois, Texas, the EEA, the UK, Switzerland, and India.

Paid Gemini plans raise limits in consumer apps. Developer quotas follow the Gemini API console.

## Step 1: Open the AI Studio speech playground

1. Go to the speech generator in AI Studio and select `gemini-3.8-flash-tts`.
2. Choose a prebuilt voice such as Kore, or open voice design and describe a speaker.
3. Paste the exact words the model must speak. TTS recites the text. It does not paraphrase.
4. Add a style line: cheerful, whispered, news-anchor pace, Melbourne DJ energy.
5. Generate a short clip first. Listen for accent, volume, and pacing before you send a chapter.

Google’s playground is built as a voice workspace. You can design a persona, then drop that voice into a dual-speaker screenplay editor and mark each line.

## Step 2: Direct the performance in the script

Both 3.8 models accept turn-level style plus inline tags. Official examples include `<laugh>`, `<sigh>`, `<gasp>`, `<short pause>`, and backchannels such as `|mhm|` or `|yeah|`.

Write stage directions the way you would mark a table read:

- “Calm support agent, slightly slower than conversational pace.”
- “Whisper the last sentence. Do not raise volume on the name.”
- “Speaker B interrupts after the pause. Keep both voices distinct.”

Native two-speaker staging lets one script drive a podcast or scene. Keep speaker labels consistent so the model does not swap timbre mid-file.

For hours of audio, Google says Flash TTS holds timbre and room tone with less speaker drift than Gemini 3.1 Flash TTS. Still generate in chapters. It is easier to fix one bad minute than a two-hour file.



![Headphones and audio interface on a desk during an editing session](https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80)



## Step 3: Call the Gemini API

API docs show single-speaker output with `response_modalities: ["AUDIO"]` and a `speech_config` voice. A minimal Python pattern looks like this:

```python
from google import genai

client = genai.Client()

response = client.models.generate_content(
    model="gemini-3.8-flash-tts",
    contents=[{
        "role": "user",
        "parts": [{
            "text": "Have a wonderful day!",
            "speech_metadata": {"style": "cheerful and friendly"},
        }],
    }],
    config={
        "response_modalities": ["AUDIO"],
        "speech_config": {
            "voice_config": {"voice": "Kore"}
        },
    },
)
```

You can pass a prebuilt name, an Extended Voice Library ID, a designed `voice_...` ID, or a replicated voice ID. Save designed voices so later episodes stay on the same speaker.

LiveKit, Agora, Pipecat, and Vercel already document Gemini TTS connectors. Use those if you already run a voice-agent stack. Do not mix Live API streaming with this TTS path unless you need two different products.

## Step 4: Replicate a voice only with consent

Replication needs about 30 seconds of reference audio plus a verbal consent clip from the same speaker. Google says the system checks that the consent voice matches the reference before it stores a profile.

Every Gemini Audio clip is watermarked with SynthID. C2PA credentials can travel with the file. That does not replace your own rights check. Do not upload a celebrity clip or a coworker sample without written and recorded permission.

Voice remixing — take a library voice and prompt “add a subtle Southern US accent” — is listed as coming soon on the launch post. Design from scratch or replicate today. Do not plan a production calendar around remix until it ships in your region.

## Step 5: Use the same models in Notebook and Vids

Flash TTS is rolling out in [Gemini Notebook](https://notebook.google.com/). Flash-Lite TTS is rolling out in [Google Vids](https://vids.new/). Enterprise API access is listed as coming soon on Gemini Enterprise.

If you already turn reports into listen-while-you-commute files, pair this with our [Gemini Notebook Audio Overview formats](/blog/gemini-notebook-audio-overview-formats/) walkthrough. Notebook Audio Overview is a product feature. 3.8 TTS is the model family under newer speech tools.

Ultra-plan Deep Research reports can add charts and simulators in the Gemini app. That path is separate from TTS. Keep research reports and voice generation as two jobs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips that save reruns

Write the words you want spoken. Then add style. If you bury the script inside a long creative brief, the model may treat instructions as dialogue.

Keep one speaker ID per character across a series. Save custom voices in the workspace instead of redescribing them each week.

Test hard names, product SKUs, and numbers in a 15-second clip. Fix pronunciation with a respell in the script rather than a long system prompt.

For agents, start on Flash-Lite. Move a scene to Flash only when acting quality is the bottleneck.

Export a short WAV, listen on phone speakers, then generate the full chapter. Studio monitors hide thin consonants that cheap earbuds expose.

## Limits and safety notes

Google publishes a [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/). Read it before you ship a public voice product.

SynthID marks generated audio. It does not prove a human said those words in the real world. Label AI speech in products where listeners could confuse it with a live person.

Replication blocks listed regions in AI Studio. Confirm availability in your console before you promise a client a cloned narrator.

Daily request caps exist in Gemini Apps. API projects have their own rate limits. Batch overnight jobs instead of firing 50 parallel chapter requests.

## Conclusion

Gemini 3.8 Flash TTS is the model to open when the voice *is* the product: a character, a branded narrator, or a two-speaker scene that must stay in character for an hour. Flash-Lite TTS is the model to open when you need many files today.

Start in the AI Studio playground. Lock a voice. Mark the script. Then move the same IDs into the Gemini API or your agent framework. Check consent, watermarks, and regional blocks before you publish.

## Sources

- [Gemini 3.8 text-to-speech says hello](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/) — Google, 23 September 2026
- [Gemini 3.8 Flash TTS model card (API)](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) — Google AI for Developers
- [Text-to-speech generation](https://ai.google.dev/gemini-api/docs/speech-generation) — Gemini API docs
- [Google AI Studio generate speech](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
- [Create your own voices with Gemini 3.8 text-to-speech](https://www.youtube.com/watch?v=FL6mI_Br-mc) — Google DeepMind
