---
title: "How to Use Gemini 3.8 Live Extended Thinking in AI Studio"
description: "Set up Gemini 3.8 Live Extended Thinking for voice agents: model ID, thinking levels, async tools, and when to pick the faster Live model."
pubDate: 2026-09-24T17:00:00
heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "developer", "tutorials", "ai"]
noindex: false
---

Gemini 3.8 Live is the low-latency voice model. Gemini 3.8 Live Extended Thinking is the sibling that reasons in the background while it keeps talking.

Google announced both on 15 September 2026. Extended Thinking is the one you want when a voice agent must plan, call tools that take seconds, and still sound present.

This guide uses official Gemini API docs and the Google blog. It stays at the product facts Google published. Pair it with our [Gemini 3.8 Live overview](/blog/gemini-3-8-live/) if you only need fast turn-taking.

## What Extended Thinking changes

The model ID is `gemini-3.8-live-extended-thinking`. Inputs are text, images, audio, and video. Outputs are text and audio.

Google lists a 131,072 input token limit and a 65,536 output token limit. Function calling works, but only in async form. Search grounding is supported. Caching, code execution, file search, Maps grounding, image generation, structured outputs, URL context, and the Batch API are not.

The important protocol change: `turnComplete: true` no longer means the server is idle. Background reasoning or a tool call may still be running. Your client must keep listening.

Watch `interaction_status` instead. `IN_PROGRESS` means the server is still working. `IDLE` means the overall task finished.



![Developer laptop and headphones set up for a live voice API session](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)



## When to use which model

Use **Gemini 3.8 Live** (`gemini-3.8-live`) for short commands, fast tools, and lowest time-to-first-audio. That model runs at `thinkingLevel="MINIMAL"` only. You cannot raise the thinking level on it.

Use **Extended Thinking** when the agent must diagnose a multi-step problem, plan a booking across several tools, or hide tool latency with spoken updates such as “Let me check that…”

Google’s blog reports Extended Thinking at 82.6 on Artificial Analysis’ Speech to Speech Quality Index, 68.6% on τ-Voice, 35.1% on Sierra’s τ-Voice-banking benchmark, and 97.7% on Big Bench Audio. Treat those as published scores, not a guarantee for your own tools.

A LiveKit walkthrough of both models is useful before you write code:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/q5yF-r_CV_o"
    title="Gemini 3.8 Live vs Extended Thinking: Which one should you choose?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1: Open Live in Google AI Studio

1. Sign in at [Google AI Studio](https://aistudio.google.com/live).
2. Start a Live session and pick **Gemini 3.8 Live Extended Thinking**.
3. Enable the microphone. Add the camera only if the prompt needs visual grounding.
4. Ask a multi-step task first, not a one-word command. Example: “Find two evening flights to Seattle next Friday, compare layover risk, then draft what I should say to the airline.”

You should hear an early acknowledgment, then progress lines while tools or search run. That pattern is the product, not a bug.

If you only hear instant answers with no planning, you are still on `gemini-3.8-live`. Switch the model string.

## Step 2: Set thinking_level in the Live API

Docs allow `thinking_config` with `thinking_level` set to `low`, `medium`, or `high`. `MINIMAL` is not supported on Extended Thinking.

A session config in the Google GenAI SDK looks like this shape:

```python
from google import genai
from google.genai import types

client = genai.Client()
model = "gemini-3.8-live-extended-thinking"

config = types.LiveConnectConfig(
    response_modalities=["AUDIO"],
    thinking_config=types.ThinkingConfig(
        thinking_level="low",
    ),
    tools=[types.Tool(function_declarations=[search_flights])],
)
```

Start at `low` for support bots that call one or two APIs. Raise to `medium` or `high` only after you measure extra speech and extra latency on your own traces.

`send_client_content` works for the whole session with explicit `user` or `model` roles. Setting `turn_complete=true` interrupts active generation immediately.

## Step 3: Declare non-blocking tools only

Thinking sessions run tools in the background while the model keeps speaking. Synchronous blocking tools return an error.

Set `"behavior": "NON_BLOCKING"` on every function declaration:

```python
search_flights = types.FunctionDeclaration(
    name="search_flights",
    description="Searches for available flights.",
    behavior="NON_BLOCKING",
    parameters={
        "type": "OBJECT",
        "properties": {
            "destination": {"type": "STRING"},
        },
        "required": ["destination"],
    },
)
```

After a spoken filler, expect `turnComplete: true` with `interactionStatus: "IN_PROGRESS"`, then the tool call, then more audio. Close the socket only after `IDLE`.



![Close-up of code on a monitor during an API integration](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)



## Step 4: Try it where Google already shipped it

Developers get the model in the Gemini API and Google AI Studio. Enterprises get a private preview in Gemini Enterprise, with Gemini Enterprise for Customer Experience and Workspace business customers listed as coming soon.

Google also routes Extended Thinking into Gemini Live in the consumer app, and into Docs, Gmail, and Keep Live for eligible Google AI subscribers. Search Live uses 3.8 Live for step-by-step troubleshooting.

If you are building a phone-side experience rather than an API agent, start from the consumer Live path and keep camera use inside Google’s published limits. Guided vision on Android is a different surface.

## Tips that keep sessions stable

**Do not treat `turnComplete` as hang-up.** That is the number one migration bug from older Live previews.

**Keep tools non-blocking.** A blocking flight or CRM call will fail the session instead of buying you time.

**Pick one thinking level per product surface.** Mixing `high` on a greeting bot burns latency for no gain.

**Interrupt on purpose.** Users will talk over fillers. Your client should send the new user turn and accept the interrupt.

**Watermark audio.** Google states all audio from these products carries SynthID. Plan detection if you store recordings.

**Read the model card** before you ship a support line. Google points to the Gemini 3.8 audio model card for safety notes.

## Conclusion

Extended Thinking is not a faster Live model. It is a Live model that plans and calls tools while it keeps the conversation moving.

Use `gemini-3.8-live` when the first syllable matters most. Use `gemini-3.8-live-extended-thinking` when the task has more than one step. Wire `interaction_status`, non-blocking tools, and a thinking level you can defend in a review.

Then measure real calls. Official benchmarks tell you the model can reason. Your traces tell you whether the extra speech helps your users.

## Sources

- [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/) — Google, 15 September 2026 (updated 17 September 2026)
- [Gemini 3.8 Live Extended Thinking model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live-extended-thinking) — Google AI for Developers
- [Thinking in the Live API](https://ai.google.dev/gemini-api/docs/live-api/thinking) — Google AI for Developers
- [Gemini 3.8 Live model docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live) — Google AI for Developers
- [Gemini 3.8 audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/) — Google DeepMind
