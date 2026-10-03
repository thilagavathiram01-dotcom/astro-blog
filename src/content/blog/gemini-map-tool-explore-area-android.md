---
title: "Gemini Map Tool: How to Explore an Area on Android"
description: "Use the Gemini Map tool on Android or iPhone to focus a map area, tap Explore this area, and write a location prompt. Not on the web yet."
pubDate: 2026-10-03T10:00:00
heroImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "google"]
noindex: false
---

Google added a Map tool to the Gemini app on phones so you can ground a prompt in a real place instead of hoping the model guesses which neighborhood you mean. The control rolled out widely on Android and iOS on October 2, 2026. It is not on the Gemini website.

If you already use [Ask Maps](/blog/gemini-ask-maps-immersive-navigation/) inside Google Maps, this is a different surface. Ask Maps lives in the Maps app. The new Map tool lives in the Gemini app prompt carousel and attaches a chosen area to the chat box as “Map Area.”

## Where the Map tool sits

Open the Gemini app on your phone. In the attachment carousel under the prompt box, scroll to the end. Map sits with Photos, Camera, Avatar, Files, Drive, and Notebooks.

9to5Google and Android Authority both reported the control as widely available on mobile as of October 2. Android Authority first saw traces of the tool in February 2026; the public rollout is what landed this week. If Map is missing, update the Google app on Android or the Gemini app on iPhone, then force-close and reopen Gemini.

![Person holding a phone over a printed city map](https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80)

## Attach a map area to a prompt

The flow is short. Do it once and the rest is just writing a better question.

1. Open Gemini on Android or iPhone. Confirm you are in the mobile app, not gemini.google.com.
2. Scroll the tool carousel and tap Map.
3. A live map opens on your current location, with a circular focus area on the map.
4. Pinch to zoom. Drag to pan until the circle covers the block, park, campus, or district you care about.
5. Tap the magnifying glass in the top-right corner if you want a different city or a named place. Search, then recenter the circle.
6. Tap Explore this area at the bottom. Gemini adds “Map Area” to the prompt box.
7. Type the rest of the question after that chip, then send.

An X opposite the search button closes the map without attaching an area. Use it if you opened Map by mistake.

Useful prompts once Map Area is attached:

- “List sit-down restaurants inside this circle that are open after 9 p.m.”
- “What bus or train stops fall inside this area, and which lines serve them?”
- “I am visiting this neighborhood tomorrow afternoon. Suggest a two-hour walking loop that stays inside the circle.”
- “Compare grocery options in this area for a household that needs late hours.”

Keep the circle tight. A city-wide circle gives Gemini less to work with than a few blocks around a station or a park.

## What this is not

The Map tool does not turn Gemini into a turn-by-turn navigator. It attaches a geographic focus so the reply can talk about that place. For step-by-step directions, open Google Maps.

It is also not the same product as Ask Maps. Google Maps launched Ask Maps so you can ask complex questions about a place from inside Maps, grounded in Maps data, reviews, and busyness. The Gemini app Map tool is a prompt attachment. Use Ask Maps when you are already planning a route. Use the Gemini Map tool when you are in a Gemini chat and want the next answer tied to a specific patch of the map.

Location permission still matters. The map opens on your current location. If location is off, search with the magnifying glass and set the circle yourself.

![Aerial view of a city street grid used to pick a focus area](https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80)

## Prompt patterns that stay inside the circle

Vague questions waste the attachment. Name the constraint.

**Time.** “Inside this Map Area, what is open Sunday morning before 10?”

**Constraint.** “Find outdoor seating in this circle that is not on the main road.”

**Comparison.** “Two coffee shops in this area: which one reviewers mention for laptop work?”

**Errand chain.** “I need a pharmacy, then a grocery store, both inside this circle. Order them so the walk is shorter.”

Ask Gemini to say when a place sits outside the circle. That catches cases where the model pads the list with nearby favorites.

## The slash key is moving to @

The same week, Google app beta 17.63 started replacing the forward slash used to call skills. Type `/` in the prompt box on that beta and Gemini shows: “/ is now @. Access your skills, connectors and more from a single place.”

The picker is a bit wider. Skills appear first, with a shortcut to create a new one. `@` is already how Connected Apps are invoked. Google is folding skills into that same menu. 9to5Google noted that Connected Apps are on track to be renamed Connectors in the redesigned Gemini side panel.

This `@` change is not widely rolled out yet. The Map tool is. If `/` still opens skills on your phone, keep using it until the note appears. For the broader Gems-to-skills move, see [how Gemini skills replace Gems](/blog/gemini-gems-to-skills/).

You can combine both once `@` reaches your account. Attach a Map Area, then call a skill that formats the answer — a neighborhood brief, a packing list, a comparison table — without leaving the chat.

## See Gemini answer place questions

Google Maps published a short demo of Ask Maps, the related way to ask Gemini-backed questions about a place. It is not a walkthrough of the Gemini app Map chip, but it shows the kind of local question these tools are built for.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5PPiXyAV-Ro"
    title="Introducing Ask Maps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you rely on an answer

Update the app if Map is absent. On Android that is usually the Google app. On iPhone it is the Gemini app.

Search before you pan if you are planning a trip. The live map starts at your current location, which is useless for a city you have not reached yet.

Treat hours, prices, and “open now” claims as leads. Open the place in Maps or on the business site before you leave.

Do not paste a home address into a shared Gemini chat if other people can see the thread. The circle already tells the model where you mean.

Web users are out of luck for now. Both reports say the Map carousel item is mobile only.

## Bottom line

The Gemini Map tool is a focus control, not a new maps product. Open it from the phone carousel, set the circle, tap Explore this area, and write the question against that Map Area chip. Pair it with Ask Maps when you need directions, and watch for `@` to replace `/` when skills and connectors share one menu.

## Sources

- 9to5Google, “Gemini app gains new ‘Map’ tool, replacing ‘/’ with ‘@’,” October 2, 2026: https://9to5google.com/2026/10/02/gemini-app-map-tool/
- Android Authority, “Google adds a Map tool to Gemini, but only on phones,” October 2, 2026: https://www.androidauthority.com/gemini-app-map-tool-3718688/
- Google Maps, “Introducing Ask Maps” (YouTube): https://www.youtube.com/watch?v=5PPiXyAV-Ro
