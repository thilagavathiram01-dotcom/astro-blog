---
title: "How to Create Custom Voices with OpenAI Prompt-to-Voice"
description: "Step-by-step guide to generate custom voices from text descriptions using OpenAI prompt-to-voice for GPT-Live sessions. Free creation, works with Live."
pubDate: 2026-10-18T16:00:00
heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt", "how-to", "ai"]
noindex: false
---

OpenAI made prompt-to-voice generally available to all API customers on October 16, 2026. You describe a voice in plain text, and the service creates a saved voice you can use in GPT-Live sessions. No recording or consent audio is required for this path. Creation is free. Speech generation uses standard GPT-Live session billing.

This approach is useful for brand-specific assistants, support agents, or localized experiences. Prompt-generated voices work only with GPT-Live. They are not supported in the Text to Speech API, Realtime API, or Chat Completions with audio output.

![Person wearing headphones in a quiet setting](https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80)

## Requirements and limits

You need an OpenAI API key with access to the Audio and Live endpoints. Organizations can create up to 100 prompt-generated voices. The limit applies even if your app creates voices for end users.

Responsible use rules apply. Do not impersonate real people or public figures. Children’s voices are not allowed. Be transparent that the speech is AI-generated. Preserve any provenance metadata. Voices are not guaranteed to be unique.

## Step 1: Create the voice via API

Send a JSON POST to `/v1/audio/voices` with `type` set to `prompt`.

```bash
curl --fail-with-body https://api.openai.com/v1/audio/voices \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "prompt",
    "name": "Support assistant",
    "prompt": "A calm, reassuring adult voice for a customer support assistant. Speak with an American English accent, a mid-range pitch, a smooth, warm tone, and a steady, conversational pace.",
    "model": "auto"
  }' \
  -o voice.json
```

The response returns an object with the voice `id`, name, creation timestamp, type, and the original prompt. It does not include preview audio. Save the `id` for later sessions. You can also create voices in the voice Playground on the OpenAI platform.

An optional `script_hint` (up to 2,000 characters) guides generation. If omitted, the service generates a script from your description. Blank or too-short scripts are rejected.

## Step 2: Write an effective description

Describe vocal qualities directly. Avoid naming real people or characters.

Useful qualities include:

- Accent and strength
- Perceived age (adult only)
- Presentation
- Pitch
- Timbre and texture
- Loudness and speech rate
- Distinctiveness

Example for a lively guide:

```
A bright, clear adult voice with a slightly higher pitch and a lightly textured timbre. Use a lively, conversational delivery at a brisk but easy-to-follow pace.
```

Keep conversation rules such as answer length or tool use in your GPT-Live session instructions, not in the voice prompt.

![Studio microphone setup for voice recording](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)

## Step 3: Use the voice in a GPT-Live session

Set `session.audio.output.voice.id` to the saved voice ID. Include the original voice description in `session.instructions` for better consistency.

```json
{
  "model": "gpt-live-1",
  "instructions": "You are a helpful voice assistant. A calm, reassuring adult voice for a customer support assistant. Speak with an American English accent, a mid-range pitch, a smooth, warm tone, and a steady, conversational pace.",
  "audio": { "output": { "voice": { "id": "voice_123" } } }
}
```

Replace `voice_123` with your actual ID. Listening in the Playground bills as a regular session. You can also use the voice with the new preset voices OpenAI added the same day: Nuri, Juni, and Flitz (German); Brise and Sillage (French); Nira (Hindi); Harema and Shida (Japanese); and Noeul (Korean).

For more on ChatGPT voice features, see our guide to [ChatGPT Voice with GPT-5.6 and Astra](/blog/chatgpt-voice-gpt-5-6-astra/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EAN5Cj347PY"
    title="This is the new ChatGPT Voice, powered by GPT-Live"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

Test several descriptions and listen in a real session. Small changes in wording can shift pitch, pace, or warmth. Reuse the same voice ID across sessions for consistency. Combine with session instructions for behavior while the voice prompt controls the sound.

Monitor usage because session billing applies when the voice speaks. Review OpenAI’s usage policies before shipping to end users. If you need the voice outside GPT-Live, use the recording-based custom voice path instead, which requires consent and a sample.

## Conclusion

Prompt-to-voice removes the need for voice actors or consent recordings when you only need GPT-Live. Describe the qualities you want, save the ID, and reference it in your session. The feature is available to all API customers as of mid-October 2026.

Start with a simple support or guide voice, test it in a session, and iterate on the description until it matches your product.

## Sources

- [Custom voices | OpenAI API](https://developers.openai.com/api/docs/guides/custom-voices)
- OpenAI platform changelog, October 16, 2026
- [This is the new ChatGPT Voice, powered by GPT-Live](https://www.youtube.com/watch?v=EAN5Cj347PY) — OpenAI
