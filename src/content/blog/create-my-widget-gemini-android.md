---
title: "How to Create Custom Android Widgets with Gemini Create My Widget"
description: "Build resizable home screen and Wear OS widgets with Gemini Intelligence: describe the widget in plain language, refine it, and keep data grounded in Search and Google apps."
pubDate: 2026-09-19T19:30:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&h=630&q=80"
---

Android widgets used to come only from apps. **Create My Widget**, part of [Gemini Intelligence](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence), flips that: you describe the panel you want in everyday language, and Gemini builds a resizable widget for the home screen — and, on supported devices, a Wear OS watch.

Google announced the feature at The Android Show on 12 May 2026. Official developer notes say the rendering engine is [RemoteCompose](https://developer.android.com/jetpack/androidx/releases/compose-remote), the same framework that powers richer [Jetpack Glance](https://developer.android.com/develop/ui/compose/glance) widgets. Availability started on the latest Samsung Galaxy and Google Pixel phones during summer 2026 and is still rolling out by device, country, and language.

This guide covers what the feature can and cannot do, how to create a first widget, how to refine it, and how developers should think about Glance if they want first-class app widgets instead of Gemini-generated ones.

## What Create My Widget is

Create My Widget is not a third-party widget maker app. It is a Gemini Intelligence surface on the phone:

- You describe a glanceable panel (recipes for the week, wind and rain for a ride, a trip countdown).
- Gemini generates layout and content.
- You can add it to the home screen, resize it, and edit it with follow-up language or an Edit control.
- The same adaptive widget can target a Wear OS watch on devices that support Gemini Intelligence there.

Google public examples from the announcement and press briefing:

- Suggest three high-protein meal prep recipes every week.
- A weather card that shows only wind speed and rain chance for cycling.
- A family-trip dashboard that pulls flight and hotel details and a countdown.

Gemini can use **Google Search** and connected **Google apps** such as Gmail and Calendar. That is why trip widgets can surface reservations that already live in your inbox. It is also why you should not expect a custom third-party dating or sports app widget — those apps are not the data source unless Google later wires them through the intelligence system (for example via [AppFunctions](https://developer.android.com/ai/appfunctions)).

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/VnjgKzAa0ws" title="Build adaptive widgets for cars, phones, watches, and more (Google I/O 2026)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

The I/O 2026 widgets session above is aimed at developers, but it is the official explanation of RemoteCompose — the engine Google says sits under Create My Widget — and of widgets moving to Auto, Wear, and later XR.

## What you need before you start

Confirm all of the following. If any piece is missing, the Create control will not appear.

- A phone in the Gemini Intelligence wave. Google said the first wave is the latest **Samsung Galaxy** and **Google Pixel** models, with watches, cars, glasses, and laptops later in 2026.
- Gemini available in your country and language.
- A current system and Gemini app update. Widget-picker UI changes shipped with the Gemini Intelligence suite, not as a Play Store-only add-on.
- For Google-app data (flights, calendar holds), the same Google Account signed into Gemini, Gmail, and Calendar.

Rollout is staggered. A Pixel 11 in one country can have the button while an otherwise similar device does not. Treat a missing Create button as a rollout gap first, not a broken phone.

![Person holding an Android phone with home screen widgets](https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 1 — Open the widget picker the new way

On a supported device:

1. Long-press an empty area of the home screen.
2. Tap **Widgets**.
3. Look for a **Create** (or Create My Widget) entry at the top of the picker, separate from the per-app widget list.
4. If you use a third-party launcher, try the system launcher once. Custom launchers sometimes hide new picker rows.

Some Galaxy One UI builds surface the same flow from the home-screen edit mode. The wording can differ slightly; the intent is the same: leave the catalog of app widgets and start a Gemini prompt.

## Step 2 — Write a prompt that fits a small surface

Widgets are glanceable. Prompts that ask for an essay fail. Prompts that name **what**, **how often**, and **which fields** work.

Good starting prompts:

- Weekly meal-prep widget: three high-protein dinners, shopping-list line under each, refresh every Monday.
- Ride weather: only wind speed, rain chance, and temperature for my usual 7 a.m. commute.
- Berlin trip: countdown to departure, flight number from Gmail, hotel check-in date, and a USD to EUR line.
- Fahrenheit and Celsius converter I can tap from the home screen.

Keep one job per widget. A life dashboard that mixes workouts, stocks, recipes, and school email will be cramped and harder to trust.

## Step 3 — Add, resize, then edit

After Gemini returns a preview:

1. Add it to the home screen.
2. Resize like any Android widget. RemoteCompose widgets are meant to reflow instead of letterboxing a fixed bitmap.
3. If the first draft is wrong, use follow-up language (drop calories, add prep time) or the **Edit** control Google showed in demos.
4. Delete the widget when the job ends — for example after a trip — instead of leaving stale counts on the home screen.

On a paired Wear OS watch that supports the feature, check whether the same widget appears in the watch widget carousel. Google developer write-up states Create My Widget widgets can be optimized for the watch as well as the phone.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/naTvTQ60eoE" title="Automate Tasks with Gemini (Android Developers)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Task automation is a sibling Gemini Intelligence feature, not the widget builder. Use automation when you want Gemini to do a multi-step job in apps; use Create My Widget when you want a persistent glanceable card.

## What the widget will not do

Stay inside what Google has actually described:

- It is not a general coding environment. You do not get a project folder or a Play Store listing.
- It does not automatically bind every installed app. Search plus selected Google apps are the documented sources.
- It is not a live GPS tracker or medical device. Do not use generated copy as a navigation or health instrument.
- Availability is not all Android 17 phones on day one. Google own line is wave-based, starting with current Galaxy and Pixel flagships.

If you need a widget that talks to your app private data, ship a Glance widget and, for agent triggers, look at AppFunctions. Create My Widget is for personal dashboards, not a substitute for an app official widget.

![Android phones on a wooden desk next to a notebook](https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&h=630&q=80)

## Tips that keep widgets useful

- **Name the refresh.** Every Monday or morning commute beats keep this updated.
- **Prefer numbers and dates** the model can pull from Search or Calendar over vague tone requests.
- **One conversion or countdown per card.** Small surfaces punish density.
- **Re-check travel widgets** the day before you fly. Inbox-grounded fields are only as current as the last email Gemini saw.
- **Do not put secrets on the home screen.** A widget is visible at a glance, including on lock-screen or Always On displays if your launcher allows it.

## Notes for Android developers

If you build apps, Create My Widget is a user feature, not an API you call. The relevant developer stack is:

- [Jetpack Glance](https://developer.android.com/develop/ui/compose/glance) for official app widgets.
- [RemoteCompose](https://developer.android.com/jetpack/androidx/releases/compose-remote) for richer interactions (snap-scroll, expressive buttons) on Android 16 and higher, with Glance keeping older devices on a simpler rendering path.
- Widget support expanding to [Android Auto](https://developer.android.com/design/ui/cars/guides/flows/widgets) and Wear.

Google 12 May 2026 developer post is explicit: RemoteCompose is the engine behind Create My Widget. Shipping a high-quality Glance widget still matters, because Gemini-generated cards will not replace branded app widgets that need your backend.

## Conclusion

Create My Widget is the fastest way to get a single-purpose panel on a Gemini Intelligence phone without waiting for an app developer to ship that exact layout. Describe one job, pin the result, resize it, and delete it when the job is over.

Use it for meal plans, ride weather, trip countdowns, and unit converters. Use official app widgets and AppFunctions when the data lives inside a third-party app you do not control. And if the Create button is missing, check device wave and Gemini availability before treating it as a software defect.

## Sources

- [Building for the Intelligence System on Android](https://developer.android.com/blog/posts/building-for-the-intelligence-system-on-android) — Android Developers Blog, 12 May 2026
- [Gemini Intelligence announcement](https://blog.google/products-and-platforms/platforms/android/gemini-intelligence) — Google
- [Jetpack Glance](https://developer.android.com/develop/ui/compose/glance) and [RemoteCompose releases](https://developer.android.com/jetpack/androidx/releases/compose-remote)
- [AppFunctions](https://developer.android.com/ai/appfunctions)
- [Build adaptive widgets for cars, phones, watches, and more](https://www.youtube.com/watch?v=VnjgKzAa0ws) — Android Developers, Google I/O 2026
- [Automate Tasks with Gemini](https://www.youtube.com/watch?v=naTvTQ60eoE) — Android Developers
