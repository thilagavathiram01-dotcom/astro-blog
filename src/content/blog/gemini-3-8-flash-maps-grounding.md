---
title: "How to Ground Gemini 3.8 Flash With Google Maps"
description: "Enable Google Maps grounding on gemini-3.8-flash, pass lat/lng, print place citations, and combine Maps with Search."
pubDate: 2026-09-30T16:00:00
heroImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer", "google"]
noindex: false
---

Gemini 3.8 Flash can answer location questions from live Google Maps data instead of guessing from training memory. Google documents this as Grounding with Google Maps: you attach a `googleMaps` tool, optionally send latitude and longitude, and read place citations from `groundingMetadata`.

This guide follows the official Gemini API docs and the October 2025 Maps grounding launch post. It is the Maps path only. For a first `generateContent` call without tools, start with the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/).

## What Maps grounding actually returns

Google Maps is a retrieval tool, not a map widget. When a prompt has geographic intent, Gemini can query Maps for places, hours, ratings, reviews, and addresses. The model then writes an answer and attaches sources.

Official docs list these outcomes:

- Text answers tied to more than 250 million places
- Optional localization from a `latLng` you send
- `groundingChunks` with a Maps `uri`, `title`, and `placeId`
- `groundingSupports` that map sentence spans to those chunks

Firebase AI Logic lists `gemini-3.8-flash` among supported models, along with 3.7 Flash and several 3.5 / 3.1 IDs. Pin `gemini-3.8-flash` if that is the model you already run for coding and agents.



![Paper map and phone used for local search](https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80)



## Turn on the tool in generateContent

Create an API key in Google AI Studio. Keep it server-side. Then enable Maps as a tool and pass a location when the user said “near me.”

```python
from google import genai
from google.genai import types

client = genai.Client()

prompt = "What are the best Italian restaurants within a 15-minute walk from here?"

response = client.models.generate_content(
    model="gemini-3.8-flash",
    contents=prompt,
    config=types.GenerateContentConfig(
        tools=[types.Tool(google_maps=types.GoogleMaps())],
        tool_config=types.ToolConfig(
            retrieval_config=types.RetrievalConfig(
                lat_lng=types.LatLng(
                    latitude=34.050481,
                    longitude=-118.248526,
                )
            )
        ),
    ),
)

print(response.text)
```

The coordinates in Google’s sample sit in Los Angeles. Replace them with the device GPS or a stored address geocode. Google notes that “near me” style queries use those coordinates. Named cities or addresses often ignore the extra lat/lng and search the named place instead.

## Print the Maps citations

A grounded reply is incomplete until you surface sources. Google requires you to use `groundingMetadata` so users can open the place in Maps.

```python
if grounding := response.candidates[0].grounding_metadata:
    if grounding.grounding_chunks:
        print("Sources:")
        for chunk in grounding.grounding_chunks:
            maps = chunk.maps
            print(f"- [{maps.title}]({maps.uri})")
```

Each chunk can include:

- `uri` — a `maps.google.com` link with a `cid`
- `title` — the place name
- `placeId` — a `places/...` identifier you can store

`groundingSupports` tie character ranges in the model text to chunk indexes. Use those ranges if you want superscripts on individual sentences, the same pattern Google documents for Search grounding.



![Laptop showing code next to a city street map](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)



## REST and JavaScript shapes

If you call the REST endpoint, the tool is an empty `googleMaps` object. Location lives under `toolConfig.retrievalConfig.latLng`.

```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent" \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: ${GEMINI_API_KEY}" \
  -d '{
    "contents": [{
      "role": "user",
      "parts": [{"text": "Restaurants near Times Square."}]
    }],
    "tools": [{"googleMaps": {}}],
    "toolConfig": {
      "retrievalConfig": {
        "latLng": {"latitude": 40.758896, "longitude": -73.985130}
      }
    }
  }'
```

In the JavaScript SDK the same fields are camelCase: `googleMaps`, `toolConfig.retrievalConfig.latLng`.

## Prompts that actually trigger Maps

Google’s examples stay specific. Vague “best food” prompts waste a tool call.

Try:

- “Is there a cafe near 1st and Main with outdoor seating?”
- “Which family-friendly restaurants near here have playground mentions in reviews?”
- “Italian restaurants within a 15-minute walk from here.”

Ask about hours, ratings, outdoor seating, or a named intersection. Those signals tell the model to invoke Maps instead of writing a generic list.

Do not treat the answer as a live occupancy feed. Google’s own use-case note says grounded results may differ from conditions on the ground. Show the Maps link so the user can confirm hours before they travel.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/HKW163OhuSU"
    title="Introducing Google Maps Grounding in the Gemini API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Combine Maps with Search grounding

Google’s product post says you can enable Maps and Search in the same request. Maps supplies structured place facts. Search supplies news and web context around those places.

Keep both tools on only when the prompt needs both. A simple “hours for this cafe” job does not need Search. A “why did this museum close last Tuesday” job might.

Firebase AI Logic documents the same Maps tool for Android, iOS, and web apps that already use Gemini 3.8 Flash. The model list matches the public Gemini API. Confirm the live model table before you ship, because deprecated 2.5 IDs still appear in older samples.

## Pricing and when a request counts

Tool use is billed separately from model tokens. Google’s Maps grounding page states pricing is per grounded prompt. A request counts only when the response includes at least one Google Maps source. If Gemini answers without Maps chunks, you pay the model tokens and not the Maps query fee.

Read the current Gemini API pricing page before you lock unit economics. The dollar figures on older blog posts go stale.

## Limits you should plan for

- Maps grounding is not a directions SDK. It does not replace the Maps JavaScript or Routes APIs for turn-by-turn UI.
- Sending a lat/lng does not force every query to that point. Named destinations win.
- You still owe citations. Dropping `uri` links violates the documented usage pattern.
- Live API models are a different surface. Check the model card before you assume Maps works in a voice session.
- Computer-use agents that click a browser are a different tool. Grounding fetches place data; it does not tap the screen.

## Tips

Pass GPS only with user consent and only for the current request. Do not log raw coordinates next to prompts in a public dataset.

Cache `placeId` values if you will show the same cafe again. Re-query Maps when hours matter, not when you only need the name.

Start thinking at `medium` on 3.8 Flash. Maps retrieval already adds latency. Raising thinking to `high` for a three-restaurant list is usually wasted output tokens.

If a prompt has no geo signal, leave the Maps tool off. An always-on tool invites extra grounded prompts you did not need.

## Conclusion

Grounding with Google Maps turns Gemini 3.8 Flash into a place-aware answer engine: enable `googleMaps`, send `latLng` for “near me,” print `groundingChunks`, and keep Search off unless the question needs the open web. Use the official `generateContent` samples, not a homemade Places scrape.

Ship the citation row in the first UI. The model text is only half the product. The Maps link is how the user checks that the cafe is still open.

## Sources

- [Grounding with Google Maps (generateContent)](https://ai.google.dev/gemini-api/docs/generate-content/maps-grounding) — Google AI for Developers
- [Grounding with Google Maps: Now available in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/grounding-google-maps-gemini-api/) — Google Blog, 17 Oct 2025
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) — Google AI for Developers
- [Grounding with Google Maps — Firebase AI Logic](https://firebase.google.com/docs/ai-logic/grounding-google-maps) — Firebase
- [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/) — Google Blog, 2 Sep 2026
- [Introducing Google Maps Grounding in the Gemini API](https://www.youtube.com/watch?v=HKW163OhuSU) — Google for Developers
