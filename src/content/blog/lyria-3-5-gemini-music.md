---
title: "How to Create Tracks With Lyria 3.5 in the Gemini App"
description: "Create vocal or instrumental tracks up to 3 minutes with Lyria 3.5 in Gemini. Use templates, photos, and prompts, then export watermarked audio."
pubDate: 2026-09-24T12:00:00
heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "ai", "google"]
noindex: false
---

Lyria 3.5 is Google DeepMind’s current music model in the Gemini app. You describe a mood, pick a genre, or upload a photo. Gemini returns a complete track with vocals or instruments, plus cover art from Nano Banana.

Google opened Lyria 3.5 in the Gemini app and the Gemini API on 4 September 2026. The same model already sat in Google Flow Music from late July. Tracks can run up to three minutes. You must be 18 or older. Music generation follows the countries where the Gemini app already ships.

This guide covers the consumer app first, then AI Studio and a short API path. Every step below comes from Google’s product pages and developer docs.



![Musician working at a laptop with studio headphones nearby](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)



## What Lyria 3.5 changes

Earlier Gemini music generations were short clips. Lyria 3.5 is built for full songs with verses, choruses, and bridges.

Official product claims that matter in use:

- You pick **vocal or instrumental** before or inside the prompt.
- You can pick a **genre** from a list or describe a mix in plain language.
- Templates exist for jobs such as background music and birthday tracks.
- Length is no longer locked at 30 seconds. Gemini’s music page states tracks **up to 3 minutes**.
- Every track generated in the Gemini app is marked with **SynthID**, Google’s watermark for AI audio.

The Gemini API splits the family in two. `lyria-3-clip-preview` always returns a 30-second MP3. `lyria-3.5` returns a longer song, also as 44.1 kHz stereo audio. Developers can request WAV from Lyria 3.5 by setting the response format.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WQkg3n5bwKQ"
    title="Introducing Lyria 3.5 now available in Google Flow Music"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Create a track in the Gemini app

Google points consumers to [gemini.google.com/music](https://gemini.google.com/music) on the web and to the same flow inside the Android and iOS Gemini apps.

1. Sign in with a personal Google account that is allowed to use Gemini.
2. Open **Create music** or go straight to the music URL above.
3. Choose a **template**, or start from a blank prompt.
4. Set **vocal** or **instrumental**.
5. Pick a genre, or write one into the prompt (for example “80s synth-pop” or “lo-fi chill”).
6. Add length if you need it: “create a 2-minute song” is the pattern Google documents for the API and is the same idea in the app.
7. Generate, listen, then download or share.

The Gemini music page says each finished track includes custom cover art from Nano Banana. Download the audio if you plan to drop it into a video editor. Share from the app if you only need a link in a chat.

If the music control is missing, update the Gemini app and confirm you are 18+. Google states the feature is global where Gemini itself is available, but rollout waves still hide buttons for some accounts for a day or two.

## Write a prompt that the model can follow

Google’s own music page lists the ingredients that improve results. Use them in this order.

- **Genre and era:** 80s synth-pop, indie folk, old country, metal and rap fusion.
- **Tempo and rhythm:** lively and danceable, slow ballad, energetic beat.
- **Instruments:** dry acoustic guitar, soft piano, light percussion, distorted bass.
- **Voice:** light female soprano, deep male baritone, raspy rock vocal.
- **Lyrics:** a topic, a personal detail, or your own lines with structure tags such as `[Verse 1]`.

Google’s worked example:

> An indie folk track with a relaxed, swaying beat. The track includes a dry, intimate acoustic guitar, a soft piano, and light percussion. A soft, breathy female voice sings lyrics about walking my dog on a cloudy day.

Older Lyria 3 help still applies when you want exact words. Prefix custom lines with `Lyrics:` and keep them short enough for the length you asked for. Add echoes in parentheses, such as `Lyrics: Let’s go (go).`

Do not dump a full novel into the box. Name the structure you want instead: intro, verse, chorus, bridge, outro.



![Person listening to headphones in a sunlit room](https://images.unsplash.com/photo-1483412036650-74424caadc43?auto=format&fit=crop&w=800&q=80)



## Turn a photo into a soundtrack

Gemini can take a still image and write a track that matches the scene.

1. Start Create music.
2. Upload one photo from your camera roll.
3. Add a one-line brief: who it is for, vocal or instrumental, and the genre.
4. Generate and check that the lyrics (if any) match the picture, not a generic love song.

Google’s earlier Lyria 3 examples still illustrate the job: a hike photo of a dog, a dating-profile portrait, a birthday snapshot. Lyria 3.5 keeps that image path and adds longer form and stronger vocals.

Use one clear photo. A crowded collage gives the model too many subjects and the lyrics wander.

## Use Flow Music, AI Studio, and Google Vids

The September 2026 Gemini post lists three other official surfaces besides the chat app.

- **[Google Flow Music](https://www.flowmusic.app/)** — the creator workspace where Lyria 3.5 first shipped on 29 July 2026. Use it when you want more control over tempo and duration than the Gemini templates offer. If you already remix Flow tools, see [How to Use 6 New Google Flow Tools From Creatives](/blog/google-flow-six-creator-tools/).
- **[Google AI Studio](https://aistudio.google.com/new_music?model=lyria-3.5)** — open a new music session on `lyria-3.5` and iterate without writing code.
- **Google Vids** — generate a backing track inside a Workspace video instead of exporting from Gemini and importing by hand.

Flow Music is the better home for artists who will generate many variants. The Gemini app is the better home for a one-off ringtone, jingle, or party track.

## Generate from the Gemini API

Developers call the Interactions API. Google’s current docs use two model IDs.

**Thirty-second clip**

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    model="lyria-3-clip-preview",
    input="A short instrumental acoustic guitar piece.",
)
```

**Full-length song**

```python
interaction = client.interactions.create(
    model="lyria-3.5",
    input="An epic cinematic orchestral piece about a journey home. Starts with a solo piano intro, builds through sweeping strings, and climaxes with a massive wall of sound.",
)
```

Save `interaction.output_audio` as MP3. Read `interaction.output_text` for lyrics and structure. Default audio is MP3. For Lyria 3.5 you can request WAV with `response_format={"type": "audio"}` as shown in the [music generation docs](https://ai.google.dev/gemini-api/docs/music-generation).

Ask for duration in the prompt when you need a two-minute cue instead of a short loop. The docs also allow timestamps to pin sections.

## Limits, safety, and rights

Stay inside what Google published.

- Age gate: **18+** on the Gemini music page.
- Watermark: Gemini app tracks include **SynthID**. You can later upload a file and ask Gemini whether Google AI generated it.
- Output is original generation from a prompt, not a licensed cover of a named commercial song. Do not prompt for a specific living artist’s voice or a copyrighted melody and expect a legal substitute.
- Availability matches the Gemini app’s country list. If Gemini is blocked in a region, music generation is blocked with it.
- The clip model is 30 seconds only. Do not send it a “write me a three-minute score” prompt and expect a full arrangement.

Treat a generated jingle as a draft. Listen for mispronounced names and rewrite the lyric block if the model invented extra verses you did not ask for.

## A 15-minute test plan

1. Open [gemini.google.com/music](https://gemini.google.com/music) and generate an instrumental lo-fi study track of about two minutes.
2. Repeat with vocals and a tight lyric brief that includes one proper name.
3. Upload a single photo and request an instrumental only.
4. Download the file and confirm you can play it outside Gemini.
5. If you ship software, run the `lyria-3-clip-preview` snippet in AI Studio, then switch the model string to `lyria-3.5`.

If step 1 returns a continuous piece with a beginning, middle, and end, the 3.5 app path is live on your account. If you only ever get a 30-second loop, you are still on the clip model or an older Gemini build.

## Conclusion

Lyria 3.5 is useful when you need a finished cue, not a melody idea. Use the Gemini app for templates, genre picks, and photo-to-track. Use Flow Music when you will iterate like a producer. Use AI Studio or the Interactions API when a product has to call the model.

Keep prompts concrete: genre, tempo, instruments, voice, length, and one lyric subject. Check the watermark story if you will publish the file. That is the whole official path Google shipped in September 2026.

## Sources

- [Create your best tracks yet with Lyria 3.5 in Gemini](https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/) — Google
- [Lyria 3.5 music generation in Gemini](https://gemini.google/overview/music-generation/) — Gemini
- [Introducing Lyria 3.5 in Google Flow Music](https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/) — Google Labs
- [Generate music with Lyria 3.5](https://ai.google.dev/gemini-api/docs/music-generation) — Gemini API
- [Lyria 3.5 model page](https://deepmind.google/models/lyria/) — Google DeepMind
- [Tips for prompting Lyria 3](https://blog.google/products-and-platforms/products/gemini/tips-prompting-lyria-3/) — Google
- [Introducing Lyria 3.5 now available in Google Flow Music](https://www.youtube.com/watch?v=WQkg3n5bwKQ) — Google Labs
