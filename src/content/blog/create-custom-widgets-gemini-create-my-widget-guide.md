---
title: "How to Create Custom Widgets with Create My Widget on Android"
description: "Learn how to build custom home screen widgets on Android using Gemini Create My Widget. Step-by-step guide for Pixel and Galaxy phones."
pubDate: 2026-10-27T12:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "gemini", "google"]
noindex: false
---

Android home screen widgets have stayed the same for years. You pick one from an app, drop it on your screen, and live with the layout the developer chose.

Create My Widget changes that. Part of Gemini Intelligence, it lets you describe a widget in plain language and have Gemini build a custom, resizable one for you.

This guide shows exactly how to use it on supported Pixel and Samsung Galaxy phones.

## What Create My Widget Does

Create My Widget is a generative UI feature powered by Gemini. You type what you want to see—meal prep ideas, a countdown, specific weather stats, or a personal dashboard—and Gemini generates a functional widget.

It pulls from Google Search for general information and from connected Google apps such as Gmail and Calendar for personal data. The result is a live widget you can resize and place on your home screen or Wear OS watch.

Google first announced it in May 2026 as part of Gemini Intelligence. It started rolling out to the latest Pixel and Galaxy devices, and a dedicated Create My Widget app appeared on the Play Store in late September 2026 (package name `com.google.android.apps.yourwidget`).

![Person holding a modern Android smartphone showing the home screen](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Device Requirements

Create My Widget is available first on recent Google Pixel and Samsung Galaxy phones that support Gemini Intelligence.

You need:

- A supported Pixel or Galaxy device
- Gemini app installed and signed in
- Access to the Create My Widget flow (via the widgets picker or the dedicated app)

Availability depends on your region, language, and exact device model. Broader Android support, Wear OS tiles, and Googlebook laptops are expected later.

## Step-by-Step: Create Your First Custom Widget

Follow these steps on a supported phone.

1. Long-press an empty area on your home screen.
2. Tap Widgets.
3. Look for the Create button or open the Create My Widget app from the Play Store.
4. Choose a category (Combo, Weather alerts, World clock, Daily Brief, Important dates, Markets) or tap the prompt field.
5. Describe the widget you want. Example: “Countdown to my first marathon on June 25” or “Suggest three high-protein meal prep recipes every week.”
6. Review the generated suggestions. Gemini may show one or more options.
7. Edit if needed—adjust size, content, or appearance using Material 3 Expressive shapes.
8. Add the finished widget to your home screen.

You can refine it later with follow-up prompts or the Edit button.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/5X4kmUjAVlg"
    title="Googlebook Demo: Generative AI Widgets, Rambler & Magic Pointer in Action"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Better Results

Be specific. “Weather” is vague. “Show only wind speed and rain chance for cycling” is better.

Mention update frequency if it matters. “Refresh every week with new recipes” works well for the meal-prep example Google demonstrated.

Combine sources. Ask for a dashboard that pulls flight details from Gmail, hotel info, and a countdown for a trip.

Start with categories if you are unsure. They teach the system what is possible and give you editable templates.

Test on your home screen. Resize the widget and check how it looks in different sizes before settling on a layout.

![Close-up of hands using a smartphone app interface](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Limitations to Know

Create My Widget cannot directly access arbitrary third-party app data. You will not get a custom Tinder or banking widget that pulls live private data from those apps.

It works best with public information and data already available through Google services.

The feature is still rolling out. Some Galaxy models may show incompatibility until a software update arrives.

Widgets remain adaptive and battery-conscious thanks to the underlying RemoteCompose framework, but complex prompts can take a few seconds to generate.

## How This Fits with Gemini Intelligence

Create My Widget is one piece of Gemini Intelligence, which also includes cross-app task automation and features like Rambler for cleaner voice typing in Gboard.

For a broader look at what Gemini Intelligence brings to Android, see our earlier guide on [using Gemini Intelligence for multi-step tasks](/blog/gemini-intelligence-multi-step-tasks/).

Developers can explore AppFunctions if they want their apps to participate more deeply in the intelligence system.

## Conclusion

Create My Widget removes the biggest friction in Android widgets: you no longer need a developer to ship the exact layout you want. Describe it, refine it, and pin it.

On supported Pixel and Galaxy phones you can start today. Begin with a simple countdown or a focused weather view, then experiment with personal dashboards that combine Calendar and Search data.

The home screen finally becomes something you design instead of something you accept.

## Sources

- Google Blog: Gemini Intelligence brings proactive AI to Android (May 12, 2026)
- Android Developers Blog: Building for the Intelligence System on Android
- 9to5Google coverage of the Create My Widget Play Store listing (September 2026)
- TechCrunch and Android Authority reports on the May 2026 announcement
