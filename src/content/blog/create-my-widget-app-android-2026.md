---
title: "Create My Widget on Android: Play Store Setup Guide"
description: "Install Google’s Create My Widget app, describe a home screen tile in plain language, edit the result, and pin it on Pixel or Galaxy."
pubDate: 2026-09-30T14:00:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "gemini", "how-to", "tutorials", "google"]
noindex: false
---

Android widgets used to arrive as fixed templates from each app. Create My Widget flips that. You describe the tile you want, Gemini builds a resizable dashboard, and you pin it to the home screen.

Google announced the feature on 12 May 2026 as part of [Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/). In late September 2026 a standalone Play Store listing appeared, so the flow now lives in its own app instead of only inside a system demo.

This guide covers what Google has published, how the Play app is supposed to work, and where the limits sit. Pair it with our broader [Gemini Intelligence on Android](/blog/gemini-intelligence-android/) walkthrough if you also want Rambler and multi-step app tasks.

## What Create My Widget actually is

Create My Widget is Google’s first step in generative UI on Android. You type a request in natural language. Gemini produces a functional widget you can add and resize.

Google’s own examples are specific. Ask it to “suggest three high-protein meal prep recipes every week” and it builds a meal-prep dashboard. Ask for wind speed and rain only, and it builds a slim weather tile for cyclists.

The same post says the widgets work on a Gemini Intelligence phone and on a Wear OS watch, so the information you care about can sit on more than one screen.

TechCrunch’s coverage of the I/O briefing adds that Gemini can pull public web facts and Google apps such as Gmail and Calendar when you ask for a personal dashboard. Treat that as a product claim from the briefing, not a guarantee that every third-party app will feed the tile.

## Who can install it today

Gemini Intelligence features started with recent Samsung Galaxy and Google Pixel phones. Google said they would spread to watches, cars, glasses, and laptops later in 2026.

The Play listing that landed around 24–25 September 2026 is a separate app. Reporting from Android Authority and 9to5Google describes screenshots for phones and for Googlebook laptops, plus a desktop_release version string. Availability still depends on country, language, and device.

If Play Search hides the app, you are not on an eligible build yet. Do not sideload a random APK that claims the same name.



![Person arranging app tiles on a phone home screen](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)



## Install and open the app

1. Update Play Store, then search for **Create My Widget** from Google LLC.
2. Confirm the package is Google’s listing, not a look-alike widget maker.
3. Install and open the app on an unlocked Pixel or current Galaxy phone that already shows Gemini Intelligence features.
4. Sign in with the Google Account you use for Gemini if the app asks.
5. Grant only the permissions the first-run screen explains. Camera or contacts access is not required for a weather or recipe tile.

If the store page is missing, open Gemini, check that Intelligence features are on, and wait for the Play listing to reach your country. Google has not published a public country matrix for the standalone app.

## Build a widget from a sentence

Google’s demo path is short.

1. Open Create My Widget.
2. Type what you want in one sentence. Keep the request concrete: metric, refresh cadence, and what to hide.
3. Let Gemini generate a layout.
4. Edit labels, size, or fields before you pin anything.
5. Add the widget to the home screen and resize it like any other Android widget.

Good first prompts, taken from Google’s wording or close to it:

- Suggest three high-protein meal prep recipes every week.
- Show only wind speed and rain for my city.
- Countdown to my next Calendar event and list the location.

Avoid “make me a better home screen.” The model needs a job, not a vibe.

Play Store screenshots reported on 25 September 2026 show starter categories such as combo widgets, important dates, weather alerts, and a daily brief. Use a category as a template if a blank prompt stalls, then rewrite the text so the tile matches your routine.

## What the widget can and cannot read

Google says these tiles are backed by Gemini and can sit on the phone or a Wear OS watch. Android Authority’s May briefing note is useful here: output is built from Gemini plus Google Search, so the widget is not a free pass into every third-party database.

Expect public facts (weather, recipes, conversion rates) and connected Google data (Calendar, Gmail details you already allow) to work better than a custom tile for a dating app or a bank that has no Gemini connector.

Do not paste account passwords into the prompt so the widget can “log in.” Use Android Autofill or a password manager for sign-in fields.



![Laptop and phone on a desk with notes](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)



## Edit, resize, and remove

After the tile lands on the home screen:

- Touch and hold, then drag a corner to resize.
- Open the Create My Widget app to change the prompt and regenerate.
- Remove the tile the same way you remove any widget: hold, then drag to Remove.

Google’s May post stresses that the result is a real widget, not a screenshot. If a number looks stale, regenerate or check whether the phone is offline. Search-backed fields need a network path.

On Googlebook, the same product family is listed in Google’s device posts. Extra laptop categories in Play screenshots (events and travel, daily habits, tools and tips) are listing art, not a second product. The prompt-and-edit loop is the same.

## Watch the official demo

The Android Show I/O Edition walkthrough includes the generative UI segment. Use it to see the layout Google showed in May, then apply the Play app steps above.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3TSdIYMX8pw"
    title="The Android Show: I/O Edition | Gemini Intelligence"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the tile useful

- Write the refresh rule in the prompt (“every week,” “today only”).
- Name one city or one calendar, not “all my trips.”
- Keep one job per widget. A combo tile that mixes weather, stocks, and recipes is harder to scan.
- Recheck permissions after a Play update. New categories do not need extra sensors by default.
- If Wear OS does not show the same tile, confirm the watch is on a supported build. Google listed watches as a later 2026 wave, not day-one on every model.

## Limits to accept before you rely on it

Create My Widget does not replace Glance widgets shipped by individual apps. Those still come from developers and can show live app state the generative tile cannot reach.

Google has not claimed the generator can automate purchases. Multi-step booking lives in Gemini Intelligence task automation, which is a different control. See [Gemini Intelligence on Android](/blog/gemini-intelligence-android/) for that path.

Rollout is staged. A missing Play listing on a mid-range phone is expected, not a bug you can force with a VPN.

## Conclusion

Create My Widget is a prompt-driven home screen builder, now packaged as a Play app after the May Gemini Intelligence reveal. Describe one job, edit the draft, pin the tile, and resize it. Stay inside Google’s documented sources and skip third-party data you cannot verify.

When the tile is doing real work on the phone, add a matching Wear complication only if that watch build already carries Intelligence features.

## Sources

- [A smarter, more proactive Android with Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/) — Google Blog, 12 May 2026
- [The Android Show: I/O Edition | Gemini Intelligence](https://www.youtube.com/watch?v=3TSdIYMX8pw) — Android on YouTube
- [Play Store listing for Create My Widget](https://www.androidauthority.com/google-create-my-widget-play-store-listing-3715354/) — Android Authority, 25 September 2026
- [Google’s Create My Widget feature](https://techcrunch.com/2026/05/12/googles-create-my-widget-feature-will-let-you-vibe-code-your-own-widgets/) — TechCrunch, 12 May 2026
