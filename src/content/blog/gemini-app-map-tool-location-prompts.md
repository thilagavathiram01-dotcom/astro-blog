---
title: "How to Prompt Places With Gemini’s Mobile Map Tool"
description: "Open Gemini’s Map tool on Android or iOS, pin a map area, and write location prompts. Also covers the new @ skills shortcut."
pubDate: 2026-10-05T14:00:00
heroImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "android", "how-to", "google"]
noindex: false
---

Google added a Map tool to the Gemini mobile app on 2 October 2026. It is in the tool carousel on Android and iOS, and it is not on the web. You pick a circular area on a live map, tap Explore this area, and Gemini attaches that area to the prompt as Map Area.

That is more precise than typing a neighbourhood name and hoping the model guesses the right block. The same week, the Google app beta started replacing the slash shortcut for skills with an @ symbol. This guide covers both changes, and what each one actually does today.

## What the Map tool does

9to5Google and Android Authority both reported a wide rollout on phones, not a limited test. The control sits at the end of the carousel next to Photos, Camera, Avatar, Files, Drive, and Notebooks.

Tap Map and Gemini opens a live map centred on your current location, with a circular focus area. You can pan and zoom. A magnifying-glass icon in the top-right searches for a place. An X closes the map. Explore this area sits at the bottom and writes Map Area into the prompt box so you can add your own question.

Google has not published a separate support page for this control yet. Treat the reporting as the product behaviour, and check the carousel on your own phone before you rely on it in a workflow.

![Aerial view of a dense city used to plan a map-area prompt](https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80)

## Open Map and attach an area

1. Update the Gemini app, or the Google app if Gemini lives inside it on your phone.
2. Open a new chat. Scroll the tool carousel to the end and tap Map.
3. Allow location access if the system prompt appears. Without it, the map may not centre on you. You can still search.
4. Pinch to zoom, or drag the map until the circle covers the streets you care about.
5. Use the magnifying glass if you want a different city or a named place.
6. Tap Explore this area. Confirm that Map Area appears in the prompt.
7. Add a specific question, then send.

A useful prompt names the task, the constraints, and the output. Map Area already supplies the place, so do not repeat a vague "near me."

Examples that match how the tool is described:

- Map Area. List three lunch spots that are open on a Monday and do not require a reservation. Note walking distance only if you can ground it.
- Map Area. I have 90 minutes between trains. Suggest a walking loop that stays inside this circle and ends near a coffee shop.
- Map Area. Compare two grocery options in this area for a traveller who needs late closing hours.

Gemini can still be wrong about hours, closures, and transit. Open the place in Maps before you walk there. The Map tool attaches an area. It does not replace a live listing.

## When a typed place is better

Use Map when the boundary matters: a station radius, a campus, a waterfront, a neighbourhood whose name is ambiguous. Type the place name when you already know the venue, or when you are on desktop. The tool is mobile-only, according to both 9to5Google and Android Authority.

If Map is missing, scroll the full carousel first. It is reported at the end, not next to the first chips. A stale app build is the next check. Web Gemini will not show it.

![Person using a phone outdoors while checking a city map](https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80)

## Switch skills and connectors to @

The Map tool is separate from skills, but the same app update window includes a shortcut change. In Google app beta 17.63, typing `/` in the Gemini prompt shows this note: "/ is now @. Access your skills, connectors and more from a single place."

9to5Google reported that Connected Apps will be renamed Connectors, and that `@` is the single entry for skills and connectors. On 30 September 2026, Google said skills are rolling out in Gemini chat and will replace Gems. Personal accounts lose Gems support starting in November. Workspace business, enterprise, and nonprofit customers follow in March 2027. Education customers follow in June 2027.

If you already built slash workflows, read [how to stack Gemini skills with slash commands](/blog/stack-gemini-skills-slash-commands/) and then retest those prompts with `@` on the beta. The Map chip does not invoke a skill. You attach Map Area first, then call a skill if you want a fixed format for the answer.

To connect data sources the model can read, use [how to connect apps to Gemini on the web and Android](/blog/connect-apps-gemini-web-android/). Connectors are account links. Map Area is only a location chip on the current prompt.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/DFXOInBrq60"
    title="Welcome to the Gemini App"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Prompt patterns that stay checkable

Keep the first reply short, then ask for a source you can open.

- Ask for names and addresses, not a ranked "best of" list. Rankings are opinion.
- Ask Gemini to flag anything it cannot confirm, such as today's hours.
- Set a radius in words after Map Area if the circle is still too wide: "Stay inside a 10-minute walk of the centre of this map area."
- For a trip, split prompts. One for food, one for transit, one for a backup indoor plan.
- Do not paste home addresses, gate codes, or medical appointment details into a location prompt.

Android Authority first saw evidence of this feature in February 2026. The October rollout is the point where most phone users can try it. Availability can still differ by account, app version, and region. If a teammate does not see Map, do not assume their install is broken.

## Tips before you rely on it

Update Gemini and the Google app, then force-quit once. The carousel is cached on some builds.

Search inside the map if location permission is off. You can still attach an area you looked up.

Retest `@` only on the 17.63 beta path described by 9to5Google. Stable builds may still accept `/` until that note ships widely.

Save a skill for the output format you repeat, such as a three-stop itinerary with a backup. Call it after Map Area is in the box, not instead of the map chip.

Check closing hours in Google Maps or on the venue site. A model answer is a draft, not a reservation.

## Bottom line

On Android and iOS, Map is a carousel tool that pins a circular area and inserts Map Area into the prompt. It is not on the web. Pair it with a narrow question, then verify hours and routes yourself. Use `@` on the Google app beta when you want skills and connectors from one shortcut, and keep Gems migration dates in mind if you still depend on them.

## Sources

- 9to5Google, "Gemini app gains new 'Map' tool, replacing '/' with '@'", 2 October 2026: https://9to5google.com/2026/10/02/gemini-app-map-tool/
- Android Authority, "Google adds a Map tool to Gemini, but only on phones", 2 October 2026: https://www.androidauthority.com/gemini-app-map-tool-3718688/
- Google Blog, "Let skills in Gemini tackle your most repetitive tasks", 30 September 2026: https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
- Google Cloud, "Welcome to the Gemini App": https://www.youtube.com/watch?v=DFXOInBrq60
