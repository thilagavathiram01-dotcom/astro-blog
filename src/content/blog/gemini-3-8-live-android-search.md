---
title: "How to Use Gemini 3.8 Live on Android and Search Live"
description: "Set up Gemini 3.8 Live on Android and Search Live: start a voice session, switch languages, and pick Live vs Extended Thinking."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "android", "google"]
noindex: false
---

Google released **Gemini 3.8 Live** and **Gemini 3.8 Live Extended Thinking** on September 15, 2026. The first model is built for low-latency voice. The second keeps reasoning in the background while it talks. On phones, you meet them in Search Live and in the Gemini app. Developers reach the same models through the Gemini Live API.

This guide covers what each model is for, how to start a session on Android, and how to avoid the usual setup mistakes. Facts below come from Google’s model announcement, the Gemini API docs, and Search Live coverage that quotes Google Search engineering.

## What Gemini 3.8 Live actually is

Gemini 3.8 Live is a native audio-to-audio model. It takes speech, images, and video in, and streams speech back. You do not wait for a separate speech-to-text step before the model starts answering.

Official model IDs:

- `gemini-3.8-live` for fast turn-taking
- `gemini-3.8-live-extended-thinking` when the task needs multi-step planning while the voice session stays open

Google’s developer docs list a 131,072-token input limit and a 65,536-token output limit for `gemini-3.8-live`. Inputs are text, images, audio, and video. Outputs are text and audio. Function calling and Search grounding are supported. Image generation, code execution, and file search are not.

Use the standard Live model for triage, language practice, voice search, and short follow-ups. Use Extended Thinking when the agent must check several sources, call slow tools, or diagnose a problem that takes more than one hop.


![Person speaking into a smartphone during a live AI voice session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)


## Start Search Live on Android

Google said 3.8 Live powers real-time conversations in **Search Live** on the Google app. Rajan Patel, VP of Engineering for Search, described more helpful spoken answers with web links, mid-conversation language switching, and fewer stilted pauses.

Steps that match the current Google app flow:

1. Update the **Google** app from Play Store.
2. Open the app and look for the **Live** control on the Search or AI Mode screen.
3. Grant microphone permission if Android asks.
4. Ask a spoken question. Keep the phone unlocked so on-screen links stay visible.
5. Follow up out loud. You can change language mid-session.
6. Open **Transcript** if you want the text version or want to type the next turn.
7. Reopen the session later from **AI Mode history** if you need the same thread.

Search Live is the lowest-friction path. You do not need an API key. You do need a Google account and a region where Live is enabled.

If Live is missing, update the Google app again, sign out and back in, and confirm AI Mode is available in your country. Feature flags still roll out in waves.

## Use Gemini 3.8 Live inside the Gemini app

Google’s launch post says you can manage the day with 3.8 Live Extended Thinking in the Gemini app: ask for a Daily Brief, work through Gmail by voice, or hand off to-dos. Workspace surfaces include Docs Live, Gmail Live, and Keep Live for eligible accounts.

Practical phone flow:

1. Update the **Gemini** app.
2. Open a Live conversation (voice button or Live entry, depending on your UI build).
3. Allow camera access if you want visual grounding. Guided vision in Gemini Live is a related camera-description feature from the [September 2026 Android Drop](/blog/android-september-2026-drop-guide/).
4. State the goal in one sentence first: “Give me today’s brief,” or “Walk me through the unread work mail.”
5. Interrupt when the model goes off track. Native audio models expect barge-in.
6. Confirm any action that sends mail, books something, or changes a document.

Google’s product posts repeat the same control rule used across Gemini Intelligence: the model should stop when the task is done and wait for your confirmation on irreversible steps.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Pick Live or Extended Thinking

Google’s Live API thinking guide draws a clean line.

**Choose `gemini-3.8-live` when:**

- The next spoken word matters more than a long plan
- The task is one or two steps
- You are building a receptionist, language tutor, or search voice layer

**Choose `gemini-3.8-live-extended-thinking` when:**

- The agent must read several logs or documents
- Tools take seconds to return
- You want spoken fillers while background reasoning continues

Google reports Extended Thinking at 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, and 35.1% on Sierra’s τ-Voice-banking benchmark. Those figures come from the official September 15 post. Do not treat them as a promise that every phone session will match a lab agent run.

On consumer Android you usually do not pick a model string. Search Live uses 3.8 Live. Gemini app and Workspace Live surfaces use Extended Thinking where Google has enabled it for the account tier.


![Developer laptop and phone set up for a Gemini Live API session](https://images.unsplash.com/photo-1512940176772-0cce3b80e2d8?auto=format&fit=crop&w=800&q=80)


## Developers: open a Live API session

Google AI Studio’s Stream view and the Gemini API both expose the stable IDs. The official Python pattern from the Live API get-started guide:

```python
import asyncio
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")
model = "gemini-3.8-live"
config = {"response_modalities": ["AUDIO"]}

async def main():
    async with client.aio.live.connect(model=model, config=config) as session:
        print("Session started")

asyncio.run(main())
```

Send a text turn with `session.send_realtime_input(text="Hello, how are you?")`. Audio input must be raw 16-bit PCM, 16 kHz, little-endian.

If you still call `gemini-3.1-flash-live-preview`, change the model string to `gemini-3.8-live` and drop `thinking_level` / `thinking_config`. Those fields are not supported on 3.8 Live.

New Live API behaviors Google highlights:

- Asynchronous function calling so tools can run without blocking speech
- Proactive audio, so the agent stays quiet until it is addressed
- `send_client_content` to inject context without forcing a user turn

Browser and mobile clients should use ephemeral tokens. Do not ship a long-lived API key in an Android APK.

Google lists text pricing for the Live models at $0.75 per million input tokens and $4.50 per million output tokens in third-party summaries of the docs. Confirm the live rate card in AI Studio before you budget a production voice agent. A free tier exists; Google states that free-tier data may be used to improve products.

## Tips that save a failed session

Speak the goal, then the constraints. “Summarize this product page in 30 seconds, then list three competing models” beats a vague “help me shop.”

Keep one task per session when you can. Long mixed threads eat the 131k context and make interruptions harder to parse.

Watch the screen in Search Live. The audio answer is the headline. The links are how you verify it.

Turn the camera on only when the question needs it. Visual frames add tokens and battery use.

If the voice sounds late or clipped, check Bluetooth latency first. Built-in mic and speaker are the fair test.

Do not paste secrets into a Live session you would not put in a normal Gemini chat. Treat transcripts as stored history.

## Conclusion

Gemini 3.8 Live is the model Google now uses when you talk to Search. Extended Thinking is the same family with background planning for longer jobs in the Gemini app, Workspace Live, and the API.

On Android, start in the Google app Live control. Use the Gemini app when you want Daily Brief, mail, or camera-grounded help. Switch to the Live API only when you need your own agent, tools, and session rules.

Update the apps, ask one concrete question, and read the on-screen links before you act on the spoken answer.

## Sources

- [Gemini 3.8 Live and 3.8 Live Extended Thinking (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model card (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Get started with Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk)
- [Live API capabilities](https://ai.google.dev/gemini-api/docs/live-api/capabilities)
- [Thinking in the Live API](https://ai.google.dev/gemini-api/docs/live-api/thinking)
- [Gemini 3.8 Live powers Google Search Live (Search Engine Land)](https://searchengineland.com/gemini-3-8-live-powers-google-search-live-488757)
- [What's new in the Gemini Live API (YouTube)](https://www.youtube.com/watch?v=3CyW24Pkz4o)
