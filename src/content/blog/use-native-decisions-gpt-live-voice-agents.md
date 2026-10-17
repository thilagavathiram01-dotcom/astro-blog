---
title: "Use Native Decisions in GPT-Live Voice Agents"
description: "How to set up native Decisions delegation in GPT-Live so your voice agent chooses actions while the user is still speaking."
pubDate: 2026-10-17T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "developer"]
noindex: false
---

OpenAI added native Decisions integration to GPT-Live on 15 October 2026. Your voice agent can now call the Decisions API directly while the user is still speaking. This skips a round trip through your application for common choice-based actions.

The Decisions API itself is in public beta and runs on GPT-6 Luna. It returns structured answers (predicates, choices, or scores) faster than a full Responses API call. Native mode is useful when your agent mostly selects from a small set of predefined actions and only falls back to a heavier model for open-ended requests.

## What native delegation changes

With client delegation, GPT-Live notifies your app, your app calls Decisions, and you return the result. Native delegation lets GPT-Live call Decisions itself. You configure the questions once in the session and tell Live when to delegate.

You still own the action. After Decisions returns a choice, your application runs the corresponding side effect and reports the outcome back to Live so it can speak about the result.

## Prerequisites

You need a working GPT-Live session (WebRTC or WebSocket) and the `api.decisions.write` permission on your API key. No separate Decisions alpha header is required.

Review the official [Connect voice to Decisions](https://developers.openai.com/api/docs/guides/decisions-voice) guide for the latest schema. The example below follows that documentation.

![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80)

## Configure native delegation in the session

Set `delegation.type` to `"decisions"` and list the questions Decisions should answer. Place this object under `session` in your WebRTC request or in the first `session.start` event for WebSockets.

A minimal car-assistant example from OpenAI’s docs:

```json
{
  "model": "gpt-live-1",
  "instructions": "Delegate requests to warm the cabin or clear windshield fog, and questions about windshield fogging. Wait for the app to report the result before describing it.",
  "delegation": {
    "type": "decisions",
    "decisions": {
      "model": "gpt-6-luna",
      "questions": [
        {
          "type": "choice",
          "name": "cabin_temperature",
          "instructions": "Choose increase if the driver asks to make the cabin warmer. Otherwise choose none.",
          "choices": [
            { "value": "increase" },
            { "value": "none" }
          ]
        }
      ]
    }
  }
}
```

Add more choice, predicate, or score questions as needed. One native request can answer multiple questions independently.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/EAN5Cj347PY"
    title="This is the new ChatGPT Voice, powered by GPT-Live"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Handle the result in your application

Live will call Decisions when the session instructions match. Your code receives the decision outcome (for example, `cabin_temperature: increase`). Run the real action—adjust the climate control, update state—then return the observed result so Live can describe it accurately.

Keep the conversation prompt short. Put detailed workflow rules in the backend model if you also use custom delegation for longer tasks.

## Tips for reliable use

- Start with two or three clear choice questions. Test that Live delegates only when the user’s words match the instructions.
- Include the expected outcome in your session instructions so Live waits for your report before speaking about the action.
- Pair native Decisions with a full Responses call for open-ended queries. The two can coexist.
- Check pricing: Decisions charges only for input tokens on `gpt-6-luna` (currently $0.10 per 1M tokens).

For the broader Decisions API pattern, see the existing post on [calling the OpenAI Decisions API with GPT-6 Luna](/blog/openai-decisions-api-gpt-6-luna/).

![Close-up of hands typing on a laptop keyboard](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Conclusion

Native Decisions delegation lets GPT-Live choose from a fixed action list with lower latency while the user continues speaking. Configure the questions in the session, handle the result in your app, and report the outcome back. Start with a narrow set of choices and expand once the timing feels right.

Confirm the exact schema against the official guide before production use. The feature is recent and the beta may still evolve.

## Sources

- [Connect voice to Decisions](https://developers.openai.com/api/docs/guides/decisions-voice) — OpenAI API documentation
- [Decisions API](https://developers.openai.com/api/docs/guides/decisions) — OpenAI API documentation
- [Release Notes](https://openai.com/products/release-notes/) — OpenAI, 15 October 2026 native Decisions entry
- [This is the new ChatGPT Voice, powered by GPT-Live](https://www.youtube.com/watch?v=EAN5Cj347PY) — OpenAI official video
