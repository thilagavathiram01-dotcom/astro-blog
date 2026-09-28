---
title: "How to Create Songs in Google Flow Music With Lyria"
description: "Sign in to Google Flow Music, generate a Lyria 3.5 track from text, images, or audio, then edit, remix, publish, and download."
pubDate: 2026-09-28T08:00:00
heroImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "google", "productivity", "how-to"]
noindex: false
---

Google Flow Music is the dedicated studio for Lyria 3.5, Google DeepMind’s music model. You describe a song, attach a reference, and the producer returns full tracks you can edit, remix, and export.

Lyria 3.5 landed in Flow Music on 29 July 2026. Google lists richer melodies, tighter lyric structure, more natural vocals, and direct tempo and duration control. The Gemini app later added a simpler Create music path. Use Flow Music when you want sessions, remix tools, and music videos instead of a one-shot chat track.

This guide follows official Flow Help and the Google Labs announcement. It covers who can sign in, how to generate, how to edit, and how to publish or download.



![Headphones and audio interface on a studio desk](https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80)



## Who can use Google Flow Music

Google’s Get started page lists three gates.

1. You must be **18 or older**, with age verified on your Google Account.
2. You must be in a [supported region](https://www.flowmusic.app/docs/faq/availability).
3. You sign up at no charge with a Google Account. Extra credits come from a Flow Music plan or a Google AI membership.

Flow Music is not the same product as Google Flow video. Video lives at flow.google. Music lives at [flowmusic.app](https://www.flowmusic.app/). If you already remix video tools, keep that work in Flow video and use the [six creator tools guide](/blog/google-flow-six-creator-tools/) there.

## Sign in and pick a producer

Google requires a fresh authorization each time you return. That is documented, not a bug.

1. Open [Google Flow Music](https://www.flowmusic.app/).
2. Select **Continue with Google** and pick your account.
3. Review the authorization screen. If you have a Google AI plan, check the box for **Google One benefits** on first login so membership credits apply.
4. Select **Continue**.

To personalize later, open Settings at the bottom of the prompt box and choose **Customize producer**. Help lists three groups:

- **Instructions** that apply to new sessions.
- **Google Flows** for custom slash commands.
- **Memories** that let the producer learn from prior chats, or stop it from doing so.

You can also switch the prompt-box model among **Instrument**, **Ghostwriter**, and **Producer**. Use Producer for a full song brief. Use Ghostwriter when you only want lyrics. Use Instrument when you want a bed without vocals.

To revoke access later, open Google Account settings, go to **Third-party apps and services**, select Google Flow Music, and delete the connection.

## Create a song from a text prompt

Official create steps on computer:

1. Sign in to Flow Music.
2. On the left, select **New session**.
3. In the prompt box, describe the track. Google’s own example is: “Make a high-energy synth-pop track with female vocals about a rainy night in Tokyo.”
4. Optional: add a **Recording**, an **Audio** file, or an **Image** under the prompt box.
5. Select **Send**.
6. Hover a result and select **Play**.

Name genre, voice, subject, and length in one sentence. Lyria 3.5 can run tracks up to three minutes on the DeepMind model page. Ask for duration in the prompt if you need a two-minute cue instead of a short loop.

A photo can steer lyrics or cover art. One clear still works better than a collage. A hummed recording or a reference clip can steer rhythm. Do not upload a commercial track and ask for a clone of a living artist’s voice.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WQkg3n5bwKQ"
    title="Introducing Lyria 3.5 now available in Google Flow Music"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Edit, compose, and remix

Three official edit paths sit under **Songs**.

**Prompt an edit.** Open the song and type a change. Help examples include “Shorten the intro to 4 bars,” “Add a bridge before the final chorus,” “Make the kick drum punchier,” “Add more reverb to the vocals,” and “Change the instruments to an acoustic folk vibe.”

**Edit details.** Next to a song, open **More → Details → Edit details**. Change the display name, cover art, or shown lyrics, then **Save**. This does not regenerate audio.

**Compose.** Open the song, select **Compose**, then edit **Lyrics**, **Sound**, or **Details** and select **Generate**. Use this when you want structured fields instead of a free-form chat line.

**Remix.** Next to a song, select **More → Remix**, then **Extend**, **Cover**, or **Replace**. Select a section, describe the change, and generate. Extend grows the arrangement. Cover restyles the same structure. Replace swaps a section.

Listen after every generate. If a name is mispronounced, put the phonetic spelling in the next lyric prompt instead of regenerating the whole song.



![Person writing lyrics in a notebook beside a laptop](https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80)



## Publish, share, and download

To publish from **Songs**:

1. Open the track.
2. Select **Publish**.
3. Copy a link with **Share → Copy link**.
4. Set visibility to **Anyone with the link** or **Only me**.
5. Turn off **Allow community remix** if you do not want others to remix, apply vibes, or download.

To download one song, open **More → Download** and pick a format. To download several, check the boxes and use the top-right **Download** control. Flow Help says the batch lands as a `.zip` file.

To delete, check one or more songs and select **Delete** at the top.

Music videos are a separate library. On the left, open **Music videos → New music video**, describe the clip, optionally attach audio or an image, and send. You can publish, copy a link, or download from that list. iPhone and iPad use **Menu → Music videos** and **Let’s roll!** instead of Send.

## Keep work in projects and spaces

**Projects** group sessions. Create one from **Projects → New project**, add a name and image, then from an open session choose the session name and **Add to project**. Every song from that session follows the session into the project.

**Spaces** (web and PC only) are small instruments or toys you describe in natural language. Help’s example is a grid step sequencer. You can publish a space, copy a link, or delete it from **Spaces**.

Use a project per client or album. Use a space when you want a reusable toy, not a finished song.

## Flow Music versus the Gemini app

The Gemini app is faster for a single jingle. Flow Music is the place for iteration.

| Job | Use |
| --- | --- |
| One birthday track or ringtone | [Gemini Create music](/blog/lyria-3-5-gemini-music/) |
| Many variants, remixes, and videos | Flow Music |
| Video tools and captions | Google Flow video |
| API or AI Studio batch | Gemini Interactions API on `lyria-3.5` |

Google marks Gemini-app audio with SynthID. Treat Flow Music exports as AI-generated drafts. Do not claim a living artist performed the vocal. Do not ship a lyric that names a private person without their say-so.

Credits are finite. Agent-style chat in Flow Music does not always spend a credit, but media generation does. If generations stop, check your Flow Music or Google AI plan.

## A short first session

1. Verify age and open flowmusic.app.
2. Start a **New session** and paste a one-sentence brief with genre, voice, subject, and length.
3. Play both results. Keep the closer take.
4. Prompt one structure edit and one mix edit.
5. Open **Compose** only if lyrics still miss the subject.
6. Download the keeper. Leave Publish off until you have listened on speakers, not only laptop audio.

If the first result is a 30-second loop with no chorus, your prompt was too thin or you landed on a clip-style model. Add duration and a verse/chorus request and generate again.

## Conclusion

Flow Music is the Lyria 3.5 studio with sessions, remix modes, videos, and projects. Sign in, write a concrete brief, attach one reference if you have it, then edit in small prompts instead of starting over.

Keep Gemini for a quick track. Keep Flow video for picture. Keep Flow Music for songs you will actually export.

## Sources

- [Introducing Lyria 3.5 in Google Flow Music](https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/) — Google Labs, 29 July 2026
- [Get started with Google Flow Music](https://support.google.com/flow/answer/17083868) — Google Flow Help
- [Create and manage songs in Google Flow Music](https://support.google.com/flow/answer/17084348) — Google Flow Help
- [Create and manage music videos in Flow Music](https://support.google.com/flow/answer/17084421) — Google Flow Help
- [Lyria 3.5](https://deepmind.google/models/lyria/) — Google DeepMind
- [Introducing Lyria 3.5 now available in Google Flow Music](https://www.youtube.com/watch?v=WQkg3n5bwKQ) — Google Labs
