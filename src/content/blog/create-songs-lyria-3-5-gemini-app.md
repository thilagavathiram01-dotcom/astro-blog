---
title: "How to Make Custom Songs with Lyria 3.5 in Gemini App"
description: "Create vocal or instrumental tracks with Lyria 3.5 in the Gemini app. Use templates, genres, and short or longer songs."
pubDate: 2026-10-06T14:00:00
heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

A birthday track, a video bed, or a short jingle no longer needs a studio session. On 4 September 2026, Google put Lyria 3.5 in the Gemini app and the Gemini API. The model is built for more expressive vocals and richer arrangements than earlier Lyria releases.

You can pick a genre or describe one, choose vocal or instrumental, start from a template, and ask for a short or longer track. Google says the feature is available to all users globally on the web and in the mobile app. The same model also powers Google Flow Music, Google AI Studio, and Google Vids.

This guide covers the consumer app path. If you need code, the [Lyria 3.5 Gemini API music guide](/blog/generate-music-lyria-3-5-gemini-api/) walks through the developer route.

## What Lyria 3.5 adds in the Gemini app

Lyria is Google DeepMind's music model family. Lyria 3 arrived in the Gemini app on 18 February 2026 as a beta that turned text or a photo into a 30-second track, with cover art from Nano Banana. Lyria 3.5, announced on 4 September 2026, is the version Google calls its best-sounding music model so far.

In the app, Google lists three practical controls:

- Select or describe a genre, then choose vocal or instrumental.
- Start from templates for jobs such as background music or a custom birthday track.
- Choose a short track or a longer one.

Google's examples are concrete: a backing track for a video, a brand jingle, or a personal ringtone. You do not need a separate music account. Open the music entry point at [gemini.google.com/music](https://gemini.google.com/music) or use the Gemini app on your phone.

![Person writing music notes beside a laptop](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80)

## Create your first track

Sign in with the Google Account you already use for Gemini. Work and school accounts only work if your admin has turned Gemini on for that account.

1. Open [gemini.google.com/music](https://gemini.google.com/music) on the web, or open the Gemini app and start a music request.
2. Pick a template if one matches the job. Templates cover everyday cases such as background music and birthday songs. Skip the template if you already know the brief.
3. Choose vocal or instrumental. Instrumental is the safer default for a video bed or a ringtone. Vocals fit a greeting, a jingle with a line of copy, or a personal song.
4. Set the genre by selecting one or by describing it in the prompt. A plain label such as "pop" is weaker than "warm acoustic pop with handclaps and a simple chorus."
5. Choose a short track while you test the idea. Switch to a longer track once the style is right, so you do not spend a full generation on a vague prompt.
6. Send the prompt and wait for the audio. Play it in the chat before you download or share it.

A useful first prompt names the job, the mood, the instruments, and one specific detail:

> Create an instrumental acoustic track for a product demo. Soft guitar, light piano, steady mid tempo, no vocals. Keep the energy calm for the first half, then lift slightly at the end.

If the result is close but not right, rewrite the full prompt. Do not assume a short follow-up will edit the same file. Treat each send as a new generation and keep the version you like.

## Write prompts that Lyria can follow

Lyria 3.5 responds to musical direction, not vague mood words alone. Google's own product note stresses genre, vocal or instrumental choice, and templates. Build on that with four extra details.

**Job.** Say what the track is for: ringtone, YouTube intro, birthday message, cafe background. The job sets length and energy better than "make a song" does.

**Instruments.** Name two or three. "Tabla, acoustic guitar, and a soft bass" is clearer than "world music."

**Vocals.** If you chose vocals, describe the voice and the topic. "Warm female vocal, close and conversational, about a late train home" beats "nice singing." Avoid asking for a named artist's voice or copyrighted lyrics. Google treats artist names as loose style hints at most, and specific voice clones are not the point of this tool.

**Structure.** Ask for an opening, a middle, and an ending. "Start sparse, add a chorus-like hook, then fade" gives the model a shape. For a longer track, mention that you want verses and a repeated hook.

Templates are the faster path when you do not want to write that brief. Google built them for common jobs, including birthday tracks and background music. Use a template, then add one personal line so the result is not generic.

![Recording studio mixing desk and monitors](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)

## Short tracks, longer tracks, and where else Lyria 3.5 lives

The September update adds a choice between short and longer tracks in the Gemini app. Use short generations to compare genres. Use a longer generation when you need a piece that can sit under a full video or a greeting.

Google also ships Lyria 3.5 outside the chat app:

- **Google Flow Music** is aimed at artists and AI creatives who want a dedicated music workspace.
- **Google AI Studio** is the developer surface, with the model id `lyria-3.5` for full-length songs and a clip model for 30-second pieces.
- **Google Vids** can use the same model when you need music inside a video draft.

If you already edit in Flow Music, the [Flow Music Lyria songs guide](/blog/google-flow-music-lyria-songs/) covers that workspace. Stay in the Gemini app when you want a one-off track without opening another product.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WQkg3n5bwKQ"
    title="Introducing Lyria 3.5 now available in Google Flow Music"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save generations

Test the idea as a short instrumental first. If the groove is wrong, a longer vocal track will not fix it.

Put the most important instruction first. "Instrumental, no vocals" at the top of the prompt is harder to miss than a note at the end.

Name real objects from the occasion. A birthday track that mentions a city, a pet, or a habit sounds more specific than one that only says "happy birthday."

Generate two or three takes of a prompt you like. Music models vary between runs. Keep the take with the cleanest vocal or the steadiest groove.

Check the usage terms before you put a track on a monetized video or in a client deliverable. Google's Gemini terms govern the output. Availability follows the countries where the Gemini app already works, and Google says the rollout is global for those users.

If Create music does not appear, confirm you are signed in, that Gemini is enabled for the account, and that you are on an updated app or the web music page. A managed school or work account can hide the tool even when a personal account shows it.

## Conclusion

Lyria 3.5 in the Gemini app is a practical music tool, not a separate studio. Open the music page, pick vocal or instrumental, set a genre or a template, and choose a short or longer track. Specific prompts beat generic ones. When the app path is enough, stay there. When you need code or a dedicated music workspace, move to the API or Flow Music with the same model.

## Sources

- Google blog, "Create your best tracks yet with Lyria 3.5 in Gemini," 4 September 2026: https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/
- Google blog, "A new way to express yourself: Gemini can now create music," 18 February 2026: https://blog.google/innovation-and-ai/products/gemini-app/lyria-3/
- Gemini music entry point: https://gemini.google.com/music
- Google AI Studio, Generate music with Lyria 3.5: https://aistudio.google.com/docs/music-generation
- Google Labs, "Introducing Lyria 3.5 now available in Google Flow Music": https://www.youtube.com/watch?v=WQkg3n5bwKQ
