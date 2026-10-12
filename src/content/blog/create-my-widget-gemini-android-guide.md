---
title: "How to Create Custom Widgets with Gemini Create My Widget"
description: "Step-by-step guide to using Gemini Create My Widget for custom home screen widgets on Pixel and Galaxy Android phones."
pubDate: 2026-10-12T12:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "ai-tools"]
noindex: false
---

Standard Android widgets force you into the layouts their developers chose. Create My Widget flips that. You describe what you want in plain language, and Gemini builds a resizable widget that pulls from Search, Calendar, and other Google data.

Google previewed the feature at The Android Show in May 2026 as part of Gemini Intelligence. The Create My Widget app (package `com.google.android.apps.yourwidget`) appeared on the Play Store in late September 2026. It is available first on Pixel phones and recent Galaxy models. Googlebook support follows.

This guide walks through the practical steps available today, what the widget can and cannot do, and how to get better results from your prompts.

## What Create My Widget actually does

Create My Widget uses Gemini to generate a home screen widget from a text description or from a category template. Examples from Google’s demos include:

- Three high-protein meal-prep recipes that refresh weekly
- A weather widget that shows only wind speed and rain chance
- A countdown to a marathon or other date
- A travel dashboard that combines flight details, hotel info, and a countdown

The output uses Material 3 Expressive shapes. You can edit the result before pinning it. Gemini draws on Search and connected Google apps such as Calendar and Gmail for personal context. It does not pull live data from arbitrary third-party apps.

Availability still depends on device, region, and language. Pixel and Galaxy phones that support Gemini Intelligence are the current targets. Broader Android support is planned later.


![Android phone home screen with widgets](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)


## How to open and use Create My Widget

1. Make sure your phone is a supported Pixel or Galaxy model and that Gemini is updated.
2. Search the Play Store for “Create My Widget” or open the listing directly if you have the package name.
3. Install the app if it is compatible with your device.
4. Open the app. You will see category carousels (Combo, Weather alerts, World clock, Daily Brief, Important dates, Markets) plus a prompt box at the bottom.
5. Either tap a suggested template or type a clear description. Example: “Show next three Calendar events plus the weather at the event location.”
6. Review the generated widget. Use the Edit option if you need to change size, content, or appearance.
7. Add the finished widget to your home screen.

You can also reach the creation flow from the system Widgets picker on supported devices once the feature is fully integrated.

If the app shows as incompatible, your device or software version is not yet in the initial rollout. Check for system and Gemini updates.

## Writing prompts that produce useful widgets

Vague requests produce generic cards. Specific requests produce widgets you will actually glance at.

Good patterns:

- Name the data sources: “Pull the next two events from Google Calendar and show the weather forecast for those cities.”
- State the update frequency: “Refresh the protein meal ideas every Monday morning.”
- Limit the fields: “Only wind speed, precipitation chance, and temperature in Celsius.”
- Set a clear purpose: “Countdown in days to 15 November 2026 with a short note.”

Avoid asking for data the system cannot reach. Create My Widget cannot read arbitrary third-party app databases or private files outside Google’s connected services.

If the first result is close but not exact, use the Edit path or send a follow-up description rather than starting over.

## Categories and templates available

On phones the initial categories include:

- Combo widgets that mix related topics
- Weather alerts (UV, tides, wind)
- World clock with daylight-saving countdowns
- Daily Brief (recipes, facts, affirmations)
- Important dates (birthdays, holidays, anniversaries)
- Markets (stocks, crypto, exchange rates)

Googlebook listings show additional categories such as Sports & fitness, Events & travel, Daily habits, and Tools & tips. Templates inside each category give you a starting point you can then customize with a prompt.

These are starting points. The free-text prompt remains the main way to get a widget that matches your exact need.


![Person using smartphone for productivity](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)


## Limits and practical tips

Create My Widget is designed for glanceable information that updates from Search or Google services. It is not a full app replacement.

- It cannot directly query third-party apps the way AppFunctions can for agent-driven actions.
- Generated widgets follow Material 3 Expressive styling; deep custom branding is limited.
- Resizing works like normal Android widgets.
- Availability is rolling out; not every Android phone has it yet.

For deeper agent-style automation across apps, look at the AppFunctions work described in our earlier guide on [Gemini Intelligence multi-step tasks](/blog/gemini-intelligence-multi-step-tasks/).

Test one simple widget first (a countdown or a single weather metric) so you learn the prompt style before building multi-source dashboards.

## Behind the scenes: RemoteCompose and Glance

Create My Widget is an early consumer example of generative UI on Android. Under the hood, Google has been updating Jetpack Glance and introducing RemoteCompose so widgets can be more expressive, adaptive across form factors, and efficient.

RemoteCompose lets UI defined in one place render on phones, watches, cars, and later XR devices. Developers who build traditional widgets with the updated Glance APIs benefit from the same rendering improvements. Create My Widget shows the user-facing side of that investment: natural language turns into a functional, resizable widget without writing code.

## Conclusion

Create My Widget turns the Android home screen from a collection of fixed developer templates into something you can shape with a sentence. On supported Pixel and Galaxy phones you can already install the app, pick a category or type a prompt, edit the result, and pin a widget that shows exactly the data you care about.

Start with a narrow, concrete request. Check whether your device is in the current rollout. Once you have one useful widget, you can expand to combo dashboards that combine Calendar, weather, and Search results. The same underlying widget technology is also expanding across Wear OS, Android Auto, and Googlebook, so the widgets you create today are part of a larger shift toward glanceable, personalized information.

## Sources

- Google announcements at The Android Show / I/O 2026 covering Gemini Intelligence and Create My Widget
- Play Store listing and coverage of the Create My Widget app (com.google.android.apps.yourwidget), September 2026
- Android Developers sessions on adaptive widgets, Jetpack Glance, and RemoteCompose
- Official coverage from TechCrunch, Android Authority, and 9to5Google on the feature and its rollout

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VnjgKzAa0ws"
    title="Build adaptive widgets for cars, phones, watches, and more"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
