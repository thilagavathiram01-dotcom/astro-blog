---
title: "How to Use Gemini 3.8 Flash TTS in AI Studio"
description: "Create custom voices with Gemini 3.8 Flash TTS in Google AI Studio: prompts, two-speaker scripts, consent rules, and API next steps."
pubDate: 2026-09-29T18:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "google"]
noindex: false
---

Google shipped two new speech models on 23 September 2026: **Gemini 3.8 Flash TTS** and **Gemini 3.8 Flash-Lite TTS**. Flash is the creative studio. Flash-Lite is the cheaper bulk engine for dubbing and agents.

You can try both today in [Google AI Studio](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts) without writing code. This guide walks through voice design, line-by-line direction, two-speaker scenes, and the consent rules that block some regions from voice replication.

Facts below come from Google’s official launch post and the AI Studio speech-generation docs. Pricing and regional limits change; check those pages before you ship audio.

## What the two models are for

**Gemini 3.8 Flash TTS** is built for character work. You describe a voice in plain language, then steer pacing, dialect, and acting cues line by line. Google positions it for games, audiobooks, podcasts, and interactive media.

**Gemini 3.8 Flash-Lite TTS** is built for volume. Google lists high-volume dubbing, audio content pipelines, and voice agents. You still get control over tone and pace, with less emphasis on inventing a brand-new persona from scratch.

Both sit in the Gemini Audio family next to 3.5 Live Translate, 3.5 Transcribe, 3.8 Live, and 3.8 Live Extended Thinking. Flash TTS is also wired into [Gemini Notebook](https://notebook.google.com/). Flash-Lite TTS lands in [Google Vids](https://vids.new/).

Google reports Flash TTS first on Hume AI’s Voice Design Benchmark (71.4) and first on accent modeling (60.8). Flash and Flash-Lite took the #1 and #2 spots on Hume’s Overall Quality Index in Google’s write-up. Treat those as vendor-cited scores, not an independent audit.

![Close-up of a studio microphone on a boom arm](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)

## Open the AI Studio speech playground

1. Sign in at [aistudio.google.com](https://aistudio.google.com) with a Google account.
2. Open **Generate speech** (direct link: `generate-speech?model=gemini-3.8-flash-tts`).
3. Pick **gemini-3.8-flash-tts** for custom characters, or **gemini-3.8-flash-lite-tts** for cheaper batch work.
4. Stay in the voice-design workspace until you have a voice you like. Then move to the dual-speaker screenplay editor.

The playground is meant to feel like a vocal studio, not a chat box. You design a voice, save it, then attach it to a script.

If you already use Gemini on Android for agents and widgets, this is a different surface: model APIs and Studio, not the phone overlay. For the phone stack, see [Gemini Intelligence on Android](/blog/gemini-intelligence-android/).

## Design a voice from a prompt

Flash TTS can invent a voice instead of only picking a preset. Google calls this generative voice design. You set **role**, **accent**, and **voice characteristics** in natural language, across more than 100 languages and dialects.

Write the prompt like a casting note, not a slogan.

**Useful prompt shape**

- Role: who is speaking (narrator, coach, villain, support agent).
- Age range and energy: calm adult, high-energy host, tired late-night DJ.
- Accent or dialect: Melbourne English, Mexican Spanish, Quebec French, Scots English.
- Texture: gravel, thin, warm, tinny, theatrical.
- Limits: what the voice should never do (no shouting, no cartoon pitch).

Google’s own demos include a high-energy Melbourne DJ, a tinny monotone robot, and a Japanese dragon. Those are proofs of range, not templates you must copy.

If you do not need a custom identity, open the **library**. Google lists **2,000+** production-ready voices, including regional varieties such as Mexican Spanish, Quebec French, and Scots English.

Save any custom voice you plan to reuse. Google says saved voices keep performance consistent and reduce drift across a long project.

Voice remixing (pick a library voice, then prompt “add a subtle Southern US accent”) is listed as **coming soon** in the launch post. Do not plan a pipeline on remixing until Studio shows the control.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FL6mI_Br-mc"
    title="Create your own voices with Gemini 3.8 text-to-speech"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Direct the performance line by line

After the voice exists, both models let you mark how each line should land.

You can write stage directions yourself, or let Gemini infer delivery from the script. Google’s examples run from a calm support agent to a whispered suspense beat.

**Controls that matter in practice**

- **Line notes:** calm, whispered, projected, rushed, paused.
- **Long-form generation:** Google says Flash keeps timbre and pacing across hours with less speaker drift, which is the audiobook and podcast case.
- **Two speakers in one script:** native two-speaker staging keeps voices distinct and handles turn-taking from a single file.
- **Vocal bursts:** tags such as `<laughs>`, `<sigh>`, and `<gasp>`.
- **Backchanneling:** interjections such as `|mhm|` or `|yeah|` for listening beats.

Keep burst tags sparse. A laugh on every line sounds like a sitcom track, not a conversation.

For a two-speaker scene, write names in the script and assign each name a saved voice before you generate. Generate a short beat first. If turn-taking collapses, shorten overlapping lines and add an explicit pause note.

![Headphones and audio mixer on a desk](https://images.unsplash.com/photo-1598488035139-4d3b02c31c19?auto=format&fit=crop&w=800&q=80)

## Voice replication and where it is blocked

Flash TTS can rebuild a consistent profile from about **30 seconds** of audio you own or have rights to use. Google requires a **verbal consent** recording from the voice owner that matches the reference speaker before a replica is created.

Every Gemini Audio clip is watermarked with **SynthID**. Google also cites **C2PA** credentials so generated speech stays labeled.

**Regional limit (official footnote):** voice replication through AI Studio is **not available** in Illinois, Texas, the EEA, the UK, Switzerland, and India.

Do not upload a celebrity clip or a coworker sample “to test.” Use your own voice or licensed talent, plus the spoken consent take.

## Move from Studio to the API

When a voice and a short scene work in the playground, export to the Gemini API. Google’s speech-generation docs live at [aistudio.google.com/docs/speech-generation](https://aistudio.google.com/docs/speech-generation).

Partner docs already list TTS hooks for Agora, LiveKit, Pipecat, and Vercel’s AI Gateway. Those are integration paths for agents, not extra models.

Google names Figma, HeyGen, Linguana, Wondercraft, 99.co, and Ollang as early product partners for dubbing and agents. Enterprise API access is listed as **coming soon** in Gemini Enterprise.

**Pick a model with the job, not the brand name**

- Character sheets, podcast hosts, game NPCs: Flash TTS.
- Bulk locale dubs and high-QPS agents: Flash-Lite TTS.
- Interactive talk, not narration: look at 3.8 Live instead of these TTS models.

## Practical tips

- Generate 15–20 seconds, listen on headphones, then commit to a long chapter.
- Lock one saved voice per character. Mixing library IDs mid-book is how drift starts.
- Put acting notes on the line that needs them, not in a giant system prompt.
- Keep a rights folder: consent audio, date, and who approved the replica.
- Expect SynthID on every file. If a client forbids watermarks, this stack is the wrong vendor.
- Recheck price tables on the API page before a large batch. Launch-week commentary already flagged later rate changes; official docs win.

## Conclusion

Gemini 3.8 Flash TTS is usable today if you treat AI Studio as a casting room. Write a specific voice, save it, direct a short two-speaker scene, then call the API only after the take sounds right.

Flash-Lite is the model you switch to when the script is done and you need hours of audio, not a new dragon voice. Stay inside Google’s consent and region rules, and keep SynthID in the delivery notes so legal review is not a surprise.

## Sources

- [Gemini 3.8 text-to-speech says hello (Google, 23 Sep 2026)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Speech generation in Google AI Studio](https://aistudio.google.com/docs/speech-generation)
- [AI Studio generate-speech (Flash TTS)](https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts)
- [Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [SynthID](https://deepmind.google/models/synthid/)
- [Create your own voices with Gemini 3.8 text-to-speech (Google DeepMind on YouTube)](https://www.youtube.com/watch?v=FL6mI_Br-mc)
