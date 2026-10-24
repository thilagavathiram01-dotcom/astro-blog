---
title: "How to Connect GPT-Live to OpenAI Decisions API"
description: "Step-by-step guide to native GPT-Live integration with the OpenAI Decisions API using GPT-6 Luna for low-latency voice app decisions."
pubDate: 2026-10-24T16:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "chatgpt"]
noindex: false
---

Developers building voice agents often face a latency problem. Users speak, the app routes the request, and replies lag. OpenAI’s native Decisions API integration in GPT-Live solves this by letting the model decide actions while the user is still talking.

The Decisions API, now generally available with GPT-6 Luna, returns typed answers (predicate, choice, or score) up to 10x faster than the Responses API. Pairing it with GPT-Live skips an extra network hop for cabin controls, routing, or real-time reactions. This guide shows how to set it up using official OpenAI documentation.

## What the Integration Does

GPT-Live can delegate decisions natively. You define questions and allowed answers in the session. Live sends the transcript to Decisions automatically and returns results without your server calling the endpoint first. Custom delegation still exists if you prefer your app to mediate.

Supported question types stay the same: predicates for probabilities, choices from fixed options, and scores against rubrics. Inputs can include text, images, or JSON. Pricing remains $0.10 per million input tokens with no output charges for the Decisions call.

You need a working GPT-Live WebRTC connection and the `api.decisions.write` permission. No special alpha header is required.

![Developer coding on multiple monitors at a modern desk](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Step-by-Step Setup for Native Delegation

Start with an existing Live session that uses WebRTC. In the session creation request, add a `delegation` object under `session`.

Set the type to `decisions` and list your questions. For a car voice assistant example from the docs, questions might cover cabin temperature, defogger state, and whether a full Responses call is needed.

```json
{
  "model": "gpt-live-1",
  "instructions": "Delegate the driver’s whole request, including cabin controls, navigation, and local search. Wait for the app to report what happened, then tell the driver in natural language.",
  "delegation": {
    "type": "decisions",
    "decisions": {
      "model": "gpt-6-luna",
      "questions": [
        {
          "type": "choice",
          "name": "cabin_temperature",
          "instructions": "Choose temperature_up if the driver feels cold or wants more heat, temperature_down if they feel hot or want to cool down, or none if the request is unrelated.",
          "choices": [
            { "value": "temperature_up" },
            { "value": "temperature_down" },
            { "value": "none" }
          ]
        },
        {
          "type": "choice",
          "name": "windshield_defogger",
          "instructions": "Choose on if the driver reports a foggy windshield or asks to defog it, off if they say the glass is clear now or ask to turn the defogger off, or none if the request is unrelated.",
          "choices": [
            { "value": "on" },
            { "value": "off" },
            { "value": "none" }
          ]
        },
        {
          "type": "choice",
          "name": "needs_response",
          "instructions": "Choose yes if any part of the request goes beyond these cabin controls, such as getting directions or finding restaurants. Otherwise choose no.",
          "choices": [{ "value": "yes" }, { "value": "no" }]
        }
      ]
    }
  }
}
```

Save the `delegation.id` from the `session.delegation.created` event. Listen for `decision.event` messages with type `decision.completed`. Read the answers by name. An answer of `none` means no action for that control.

After performing the action (for example, raising the temperature), append the updated state back with `decision.item.create` so later decisions stay accurate. Then send a short confirmation to Live via `session.commentary.append` using the same delegation ID.

For requests that need more tools, call the Responses API from your server once Decisions returns `yes` for `needs_response`. Include the cabin results and the original request so the model can chain navigation or search tools.

![Laptop with code open next to a plant by a window](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## Reacting to Transcripts in Real Time

You can also trigger Decisions from transcript deltas without full delegation. Add objects to `session.triggers` for `session.input_transcript.delta` or `session.output_transcript.delta`.

This works well for animated characters or UI feedback. While the user says “I got the job!”, Decisions can choose “happy”, medium intensity, and a nod. While Live replies “That’s wonderful!”, a second trigger can escalate the expression.

```json
{
  "type": "decisions",
  "event_type": "session.input_transcript.delta",
  "decisions": {
    "questions": [
      {
        "type": "choice",
        "name": "expression",
        "instructions": "Choose your expression as you listen to the person's latest words.",
        "choices": [
          { "value": "neutral" },
          { "value": "happy" },
          { "value": "sad" },
          { "value": "concerned" }
        ]
      },
      {
        "type": "choice",
        "name": "intensity",
        "instructions": "Choose how strongly to show that expression.",
        "choices": [
          { "value": "low" },
          { "value": "medium" },
          { "value": "high" }
        ]
      },
      {
        "type": "choice",
        "name": "gesture",
        "instructions": "Choose a gesture that fits what you just heard.",
        "choices": [
          { "value": "none" },
          { "value": "nod" },
          { "value": "shake" },
          { "value": "lean" }
        ]
      }
    ]
  }
}
```

Match results by `source_event_id` and apply the newest relevant one. Drive mouth animation from the audio stream itself.

## Tips for Production Use

Filter WebRTC events carefully so you receive both `decision.event` and the relevant transcript deltas. Questions can be updated mid-session with `session.update` followed by `session.updated`.

Prompt caching works for repeated cabin-state snapshots, which lowers cost on long conversations. Test with the Decisions Playground first, then move the same questions into Live.

If your app already uses the standard Decisions endpoint, the response shapes match, so existing answer-parsing code can be reused. For deeper routing or generation, hand off to Responses only when the choice indicates it is needed.

Internal link: See our guide on [How to Use OpenAI Decisions API for Fast App Decisions](/blog/how-to-use-openai-decisions-api-for-fast-app-decisions/) for the base endpoint details.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/cH_ayhOmXtw"
    title="OpenAI Decisions API: All 18 Examples + Real Tests"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Native GPT-Live + Decisions integration cuts latency for voice apps that need structured choices while the user speaks. Define your questions once, listen for completed events, act, and confirm. The combination of speed, typed outputs, and prompt caching makes it practical for production cabin controls, support routing, or animated agents.

Start with a small set of choices, measure end-to-end latency, and expand. Official docs at developers.openai.com cover the full event flow and permission requirements.

## Sources

- OpenAI, “Connect voice to Decisions,” developers.openai.com/api/docs/guides/decisions-voice (accessed 24 October 2026)
- OpenAI, “Decisions,” developers.openai.com/api/docs/guides/decisions (accessed 24 October 2026)
- OpenAI, “Build more responsive apps with the Decisions API,” openai.com/index/decisions-api/ (22 October 2026)
