---
title: "Create Custom Voices with OpenAI Prompt-to-Voice"
description: "Learn how to generate custom GPT-Live voices from text descriptions using OpenAI's prompt-to-voice API. Step-by-step guide for developers."
pubDate: 2026-10-17T10:00:00
heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

OpenAI released prompt-to-voice on October 16, 2026. Developers can now create custom voices for GPT-Live from a simple text description. No recording or consent audio is required for this method.<grok type="render_inline_citation" citation_id="115" />

This feature is available to all API customers. Creating the voice is free. Speech generation in GPT-Live sessions uses the standard rate of $0.05 per minute.<grok type="render_inline_citation" citation_id="125" />

You can build more natural voice agents that match your brand or use case. For a full voice agent setup, see our guide on [building a GPT-Live-1 voice agent with the API](/blog/how-to-build-a-gpt-live-1-voice-agent-with-the-api/).

## What Prompt-to-Voice Does

Prompt-to-voice generates a voice ID from a text prompt describing vocal qualities. You reuse that ID in GPT-Live sessions. It works only with GPT-Live, not with the Text to Speech, Realtime, or Chat Completions APIs.<grok type="render_inline_citation" citation_id="126" />

OpenAI also added nine natural voices for GPT-Live on the same day: Nuri, Juni, and Flitz for German; Brise and Sillage for French; Nira for Hindi; Harema and Shida for Japanese; and Noeul for Korean.<grok type="render_inline_citation" citation_id="125" />


![Person speaking into a professional microphone](https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80)


## Responsible Use Rules

Follow these rules from OpenAI:

- Use voices responsibly. Do not impersonate others.
- Describe adult voices only. Children's voices are not allowed.
- Tell listeners the speech is AI-generated and preserve any provenance metadata.
- Voices are not guaranteed unique. Others may create similar ones.

Do not request imitation of a named person, public figure, or fictional character.<grok type="render_inline_citation" citation_id="126" />

## Step-by-Step: Create a Voice from a Description

You can create the voice through the API or the voice Playground at platform.openai.com/audio/voices/edit.

### 1. Prepare your API key

Use a valid OpenAI API key with access to the audio endpoints. Set it as an environment variable named OPENAI_API_KEY.

### 2. Send the creation request

POST to https://api.openai.com/v1/audio/voices with type set to "prompt".

Here is the curl example from OpenAI docs:

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

The response includes the voice object with an id, name, created_at timestamp, type, and the original prompt. Save the id. You can create up to 100 prompt-generated voices per organization.<grok type="render_inline_citation" citation_id="126" />

An optional script_hint field (up to 2,000 characters) can guide generation with an example script.

### 3. Describe the voice well

Use plain language for qualities such as accent, age (adult), presentation, pitch, timbre, texture, loudness, speech rate, and distinctiveness.

Examples:

- Calm assistant: "A warm adult voice with a mid-range pitch and smooth, rich timbre. Use moderate vocal effort and an unhurried, reassuring delivery."
- Lively guide: "A bright, clear adult voice with a slightly higher pitch and a lightly textured timbre. Use a lively, conversational delivery at a brisk but easy-to-follow pace."

Change one quality at a time and test the results.<grok type="render_inline_citation" citation_id="126" />

## Use the Voice in a GPT-Live Session

Set session.audio.output.voice.id to your voice ID. Include the original description in session.instructions for better performance.

Example session start JSON:

```json
{
  "model": "gpt-live-1",
  "instructions": "You are a helpful voice assistant. A calm, reassuring adult voice for a customer support assistant. Speak with an American English accent, a mid-range pitch, a smooth, warm tone, and a steady, conversational pace.",
  "audio": { "output": { "voice": { "id": "voice_123" } } }
}
```

Choose the voice at session startup. Start a new session to switch voices. Listening in the Playground bills as a regular GPT-Live session.<grok type="render_inline_citation" citation_id="126" />


![Team collaborating around a table with laptops](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)


## Tips for Better Results

- Test with the same short passage and a few conversational turns.
- Listen for accent, pace, and tone matching your needs.
- Keep conversation rules (answer length, interruptions, delegation) in the GPT-Live session instructions, not the voice prompt.
- Reuse the saved voice ID across sessions.

Voice creation is not compatible with Zero Data Retention. GPT-Live speech generations can use Zero Data Retention when enabled for your organization.<grok type="render_inline_citation" citation_id="126" />

## Watch the Original GPT-Live Announcement

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EAN5Cj347PY"
    title="This is the new ChatGPT Voice, powered by GPT-Live"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Prompt-to-voice lets you create on-brand GPT-Live voices in minutes without recordings. Start with a clear adult description, save the ID, and include it in your session config. Combined with the new language voices, it expands options for global voice applications.

Try it in the Playground or via the API today.

## Sources

- OpenAI API Changelog, October 16, 2026
- Custom voices guide, OpenAI API docs
- Introducing GPT-Live, OpenAI, July 8, 2026
