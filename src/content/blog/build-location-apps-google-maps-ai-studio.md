---
title: "Build Location Apps with Google Maps in AI Studio"
description: "Step-by-step guide to prototype store locators, 3D city tours, and route planners with Google Maps Platform inside Google AI Studio using free Demo Keys."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1490318134124-34dadea1b8b2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "gemini", "google"]
noindex: false
---

Google added native Google Maps Platform support to AI Studio Build mode on November 9, 2026. You can now describe a location-aware app and watch Gemini generate a working prototype with live maps, places data, and routes—no credit card, no Cloud Console detour, and no manual key setup.

AI Studio detects geospatial intent in your prompt, provisions a Maps Demo Key automatically, stores the credential in the app secrets, and renders an interactive map in the preview pane. This works for both new users and existing Cloud customers who want a free sandbox first.

The free Demo Key gives 100 calls per day per API. Quotas reset every 24 hours. When you are ready for production volume, link a billed Cloud project. The same key and generated code keep working under standard Maps Platform pricing and free-tier monthly allowances.

## What the Maps Demo Key covers

New users receive access to nearly the full Maps Platform portfolio except Route Optimization, Solar, and Nav Connect. That includes the Maps JavaScript API (with Places UI Kit), Places API, Routes API, Geocoding, Weather, Air Quality, Pollen, Aerial View, Street View Static, and Maps Experience agent tools.

Existing Cloud users who stay on the free Demo Key get a slightly smaller set focused on common prototyping needs: Maps JavaScript API, Places API (without user-generated photos and reviews), Routes, Geocoding, Weather, and the agent tools. Connecting a billed project unlocks the complete portfolio and removes the daily demo limit.

The key is injected as `GOOGLE_MAPS_PLATFORM_KEY` in the project secrets. Server-side code in the generated Node.js backend keeps the credential off the client.

![Aerial night view of a dense city skyline with illuminated buildings and streets](https://images.unsplash.com/photo-1520741788164-6ddc5fc00e4b?auto=format&fit=crop&w=800&q=80)

## Start a Maps-powered prototype in four steps

1. Open [aistudio.google.com/apps](https://aistudio.google.com/apps) and sign in with a personal Google Account (Workspace accounts cannot use the free Demo Key).

2. Click New App or select the Google Maps Platform discovery chip if it appears. Type a clear prompt. Google’s own example is “Build an interactive 3D tour of NYC showcasing iconic landmarks.” Other strong starters include a store locator that filters by distance and opening hours, or a multi-stop route optimizer for a mobile service fleet.

3. When AI Studio detects geospatial intent it shows an in-context setup card. Accept the Maps Demo Project Terms of Service and click Enable Google Maps. The system provisions the key and injects it into secrets. The preview reloads with a live map.

4. Iterate in the chat. Ask for custom map styles, additional markers from Places, route polylines, weather overlays, or a 3D camera flyover path. The preview updates as the model edits the React frontend and Node backend.

You can also start from the gallery. Remix the City Immersive Tour, Store Locator & Near Me Finder, or Pet Grooming Route Optimizer. Each loads a complete working project so you can modify it instead of generating from a blank prompt.

## Example prompt patterns that work

A precise prompt produces better first results than a vague one.

Store locator:
```
Build a responsive store locator. Show a vector map of the user’s area. Let the user search for coffee shops within 5 km. Display name, rating, opening hours, and a “Get directions” button that calls the Routes API. Use a clean light theme and Places UI Kit components for the list.
```

3D city tour:
```
Create an interactive 3D tour of Tokyo. Use photorealistic 3D tiles. Add custom markers for five landmarks with info windows that contain a short description and a Street View thumbnail. Include play/pause controls for a camera flyover path and a speed slider.
```

Environmental route:
```
Build a clean-air commute planner for a chosen city. Show the map, let the user set origin and destination, calculate a route that prefers lower air-quality index segments using the Air Quality and Routes APIs, and overlay current AQI on the map.
```

After the first generation, refine with follow-ups such as “add a dark mode toggle,” “filter the list to only places open now,” or “draw the route as a gradient polyline based on traffic.”

## Scaling from Demo Key to production

The Demo Key is intended for interactive development sessions. If you hit the 100-call daily ceiling you receive a `RESOURCE_EXHAUSTED` or quota-exceeded error. The quota resets automatically after 24 hours. For higher volume or the missing APIs (Route Optimization, Solar, Nav Connect), open the project settings in AI Studio and connect a billed Google Cloud project. Your existing demo key continues to function; you do not need to rewrite the app code.

Once billed, standard Maps Platform pricing and the usual monthly free usage caps apply. You can also add HTTP referrer or IP restrictions on the key if you move the app outside AI Studio.

Generated apps are full-stack React + Node.js projects. You can download the source, export to GitHub, or deploy to Cloud Run directly from the AI Studio interface. The key remains in secrets so server-side calls stay protected.

![Close-up of a paper map with colorful push pins marking locations](https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=800&q=80)

## Practical tips

Keep the first prompt focused on one core map interaction. Adding Firebase Auth, payments, or complex multiplayer in the same generation often produces incomplete results. You can layer those features in later chat turns.

Watch the daily quota while you test. Each Places text search, route calculation, and map load counts. Prototype the UI with mock data first if you expect many iterations, then switch the data source to the live APIs.

If an API call fails with an “API not available” or restriction error while you are on a free Demo Key, the requested product is outside the supported set for that key type. Connect a billed project to unlock it.

Personal Google Accounts only. If you are signed in with a Workspace account, AI Studio will not offer the free Demo Key path; you must connect a billed project from the start.

For deeper control over map rendering, request specific Maps JavaScript API features in the prompt (custom styles via JSON, advanced markers, or the Places UI Kit). Gemini already knows the current best practices for these surfaces.

## Watch a short demo of Maps in AI Studio

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/NmoWoYzJx0I"
    title="Build Apps with Gemini, AI Studio, and Google Maps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Related reading

If you are already building web apps in AI Studio, see our earlier guide on [how to build web apps and 3D prototypes with Gemini 4 Argon](/blog/build-web-apps-gemini-4-argon-ai-studio/). The same Build mode workflow applies; you simply add a geospatial prompt or the Maps chip to bring in real-world place and route data.

## Conclusion

The November 9 integration removes the classic friction of Maps Platform setup. Describe the location-aware experience you want, accept the demo terms once, and iterate on a live map preview. The free 100-call daily quota is enough for meaningful prototyping of store finders, 3D tours, route planners, and environmental overlays.

When the prototype is ready, connect billing to move to production quotas without changing the generated code. Start with one of the gallery examples or a short prompt today and see how quickly a real map appears in the preview pane.

## Sources

- Google Developers Blog: From prompt to app: Build with Google Maps in AI Studio (November 9, 2026)
- Google for Developers: Google Maps Platform in AI Studio documentation
- Google Maps Platform: Maps Demo Key overview and supported features
- AI Studio gallery examples: City Immersive Tour, Store Locator, Pet Grooming Route Optimizer
- YouTube: Build Apps with Gemini, AI Studio, and Google Maps Platform (Google Maps Platform)
