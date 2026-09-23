---
title: "How to Use Gemini 3.8 Live Voice in Gmail and Docs"
description: "Set up Gemini 3.8 Live voice in Gmail, Docs, Keep, Search Live, and the Gemini API after Google’s September 2026 launch."
pubDate: 2026-09-23T11:00:00
heroImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "productivity", "google", "ai-tools"]
noindex: false
---

Google launched Gemini 3.8 Live and Gemini 3.8 Live Extended Thinking on September 15, 2026. The pair is built for spoken work: inbox triage, drafting in Docs, notes in Keep, and low-latency voice agents in the Gemini API.

This guide covers what each model is for, where it is available, and how to start a live session without guessing at settings. Facts below come from Google’s launch post, the Gemini 3.8 Live API docs, and the DeepMind model card.

## What Google actually shipped

Google published two models, not one.

**Gemini 3.8 Live** is the scale and cost option. Google says it pairs conversational replies with visual grounding, mid-conversation switches across 97 languages, and tool or API calls that run in the background while speech continues.

**Gemini 3.8 Live Extended Thinking** is the high-complexity option. Google describes it as a model that reasons and speaks at the same time. It uses short acknowledgements such as “Let me check that…” and narrates multi-step work instead of going silent.

On published benchmarks Google cites: Extended Thinking at 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, 35.1% on Sierra’s τ-Voice-banking set, and 97.7% on Big Bench Audio. Gemini 3.8 Live placed second in the Speech Agent Arena and is positioned as the cheaper default for volume.

Those numbers are Google’s reported scores. Treat them as launch claims, not a substitute for testing your own prompts and tools.



![Person speaking into a laptop microphone during a work session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## Where each model is available

Google’s September 17 update lists the rollout like this.

**3.8 Live**

- Developers: Gemini API and Google AI Studio
- Enterprises: private preview in Gemini Enterprise; Gemini Enterprise for Customer Experience is listed as coming soon
- Everyone: Search Live

**3.8 Live Extended Thinking**

- Developers: Gemini API and Google AI Studio
- Enterprises: private preview in Gemini Enterprise; Workspace business customers listed as coming soon
- Everyone: Gemini Live
- Google AI Pro and Ultra: Docs Live
- All Google AI plan subscribers: Gmail Live and Keep Live

Voice in Workspace also appeared in Google’s September 9 AI plan update: drafting by voice in Gmail, Docs, and Keep on AI Plus, Pro, and Ultra (Docs is Pro and Ultra). If a Live control is missing, confirm the plan and wait for the client to pick up the model swap.

Audio output is watermarked with SynthID, per Google DeepMind. Generated speech is meant to stay detectable.

## Pick the right model before you talk

Use **3.8 Live** when latency and cost matter: a receptionist-style agent, a camera-on walkthrough, Search Live troubleshooting, or any session that should keep talking while a tool runs.

Use **Extended Thinking** when the task has several steps you would otherwise do in silence: inbox zero with follow-ups, a Doc that needs structure plus edits, a booking flow with more than one API call, or a sketch that should become UI code.

Google AI Studio Live and the Live API expose both model IDs: `gemini-3.8-live` and `gemini-3.8-live-extended-thinking`. If you are migrating from `gemini-3.1-flash-live-preview`, drop `thinking_level` / `thinking_config` from session setup. The 3.8 Live docs say those fields are not supported on the new Live string.

Limits from the API table: text, image, audio, and video in; text and audio out; 131,072 input tokens; 65,536 output tokens. Caching, code execution, file search, image generation, structured outputs, and the Batch API are not supported on `gemini-3.8-live`.

## How to start Gmail Live, Docs Live, and Keep Live

Workspace Live is a spoken session inside the product, not a separate app.

1. Sign in with a Google account on a supported AI plan (Gmail and Keep: any Google AI plan; Docs Live: Pro or Ultra).
2. Open Gmail, Docs, or Keep on the web.
3. Look for the Gemini Live / voice control in the Gemini side panel or compose area. Google’s launch demo shows spoken inbox triage, spoken drafting, and spoken note capture.
4. Grant microphone access in the browser if prompted.
5. State the goal in one sentence, then stay on the call. Example: “Triage unread mail from the last 24 hours and draft short replies I can edit.”
6. Interrupt when the draft is wrong. Live models are built for barge-in; do not wait for a full paragraph if the tone is off.
7. Apply or insert the result yourself. Treat spoken output as a draft until you send or share it.

Good first tasks:

- Gmail: “Find unpaid invoices from last week and summarize who still owes what.”
- Docs: “Turn these bullet notes into a one-page brief with a risk section.”
- Keep: “Capture a packing list from what I just said and group it by bag.”

Do not dictate secrets you would not put in the document. Live sessions still sit inside your Google account and the product’s existing sharing rules.



![Hands typing and reviewing a document on a desk](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## How to use Gemini Live and Search Live

**Gemini Live (app)** is where Extended Thinking is rolling out for consumer sessions. Google’s examples: Daily Brief, spoken inbox work, and handing off to-dos. Open the Gemini app, start a Live conversation, and ask for a brief or a multi-step plan. Keep the camera available if you want visual context; 3.8 Live can use what it sees while you talk.

**Search Live** uses 3.8 Live for spoken, step-by-step help. Google’s own clip is real-time troubleshooting. Start from Search Live, describe the error or the device in front of you, and let it walk the steps while you stay on the line.

If you already use Gemini for on-device memory and Find Hub notes from the [September 2026 Android Drop](/blog/android-september-2026-drop-guide/), treat Live as the spoken front end for the same account. Remembered items and Live sessions are separate features; one does not replace the other.

## How developers should call the Live API

Google points teams at the [Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api) and AI Studio Live. Partner stacks listed in the launch post include Agora, Fishjam, LangChain, LiveKit, Pipecat, Vercel, and Vision Agents.

Practical setup:

1. Create or select a project in Google AI Studio and open the Live playground.
2. Set the model to `gemini-3.8-live` for fast dialogue or `gemini-3.8-live-extended-thinking` for longer tool chains.
3. Enable microphone and, if needed, camera. Visual input is a first-class path on 3.8 Live.
4. Register tools. Google highlights asynchronous function calling so the model can keep speaking while a booking or lookup finishes.
5. Use `send_client_content` when you need to inject context without forcing a user turn (session notes, CRM state, a new screenshot).
6. Prefer proactive audio settings when the agent should stay quiet until it has something useful to say.
7. Read the model card before production. DeepMind documents inputs (audio, images, video, text, up to 128K context on the card), outputs (audio and text, 64K), and safety limits.

Official walkthrough of the Live API changes:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3CyW24Pkz4o"
    title="What's new in the Gemini Live API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that save a failed session

**Name the artifact.** Say “draft a reply I will send” or “insert a heading in this Doc.” Vague “help with this” prompts waste the first 20 seconds of a Live call.

**Keep tools small.** Async function calling works when each tool does one job. A single “do my job” function is harder for any live model to narrate.

**Watch language switches.** Automatic moves across 97 languages are useful on mixed teams. If you need one language only, say so at the start of the session.

**Expect usage caps.** Workspace notes on related Gemini features already mention per-user limits. A long Live call can hit quota before the task is done. Split work: search first, then draft.

**Stay on the plan matrix.** Docs Live is not on every Google AI tier. Gmail and Keep Live are wider. Search Live is the open consumer surface for 3.8 Live.

## Conclusion

Gemini 3.8 Live is the default spoken model for Search Live and high-volume agents. Extended Thinking is the one Google put behind Gemini Live, Docs Live, and harder multi-step work. Start with one real task in Gmail or Keep, then move that same prompt style into AI Studio if you are building an agent.

Confirm availability in your account before you schedule a demo around it. Rollouts differ by product and plan even when the model IDs are public.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live)
- [Gemini Live API guide](https://ai.google.dev/gemini-api/docs/live-api)
- [Gemini 3.8 Audio model card (DeepMind)](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- [Fall 2026 Google AI plan updates](https://blog.google/products-and-platforms/products/google-one/fall-2026-ai-plan-updates/)
- [SynthID](https://deepmind.google/models/synthid/)
