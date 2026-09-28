---
title: "How to Prep Apps for Android 18 Graphics at Dev Summit"
description: "Prepare Jetpack Compose apps for Android 18 graphics at Android Dev Summit 2026: mesh gradients, blurs, and performance checks."
pubDate: 2026-09-28T17:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "google"]
noindex: false
---

Google is bringing Android Dev Summit back on 28–29 October 2026 after a four-year gap. The public agenda already names Android 18 and “powerful new graphics features” in Jetpack Compose.

You do not need a badge in Mountain View to start. Mesh gradients and related Compose 1.12 APIs shipped in August 2026. Use the next month to put those APIs in a real screen, measure frames, and write questions for the keynote livestream.

This guide lists what Google has actually published about the event, what you can ship today, and a short prep checklist. It does not invent Android 18 APIs that have not been documented.

## What Google has confirmed about the summit

The main event runs 28–29 October 2026 at Google’s Event Centre at Bay View in Mountain View, California. Google frames it as an in-person gathering for selected professional Android developers.

A satellite Android Dev Summit Extended event is listed for London on 28 October. Google developer events pages and RSVP links published by Android DevRel point to Bay View and London registration forms.

Four tracks appear on the agenda reported from the official program: AI experiences, Android XR, apps foundation, and tools and performance. Google says the keynote will cover latest features and updates from Android leadership and will be livestreamed.

One session title is explicit: “Elevate your apps with the latest graphics features in Jetpack Compose and Android 18.” The description mentions mesh gradients, progressive blurs, and graphics work that aims to keep battery life and frame rates intact.

That is the first public naming of Android 18 on an official-style agenda. It is not a developer preview date and it is not a consumer launch window. Treat it as a session topic, not a shipping promise.



![Developer working on colorful UI code on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Why the graphics session matters now

Compose 1.12 already added a first-party mesh gradient painter. The August 2026 Compose release notes document `MeshGradientPainter`, Display P3 and HDR color paths, and `LayerOutsets` for glow that sits outside a clipped layer.

The Dev Summit session description maps onto that work. Mesh gradients are named in both places. Progressive blurs are named on the agenda and are a common next step after mesh fills on headers and sheets.

If your app still draws multi-color heroes with a custom AGSL shader or a gist-based `Modifier.meshGradient`, you are on a path Google replaced. Move those screens to the official painter before the October talks so you can compare notes instead of rewriting under a live demo.

Our earlier walkthrough on [how to draw mesh gradients in Compose 1.12](/blog/compose-1-12-mesh-gradients/) covers BOM `2026.08.00`, vertex grids, tangents, and animation. Use that post as the implementation companion to this event checklist.

## Step 1: Confirm your toolkit floor

Set these versions before you add more effects.

1. Compose BOM `2026.08.00` or newer, which maps to Compose 1.12.
2. Android Gradle Plugin 9.1.1 or newer.
3. `compileSdk` 37, as required by that Compose release.
4. A Baseline Profile job that still runs after the toolkit bump.

If AGP is older than 9.1.1, the mesh painter may not resolve and you will spend the summit week on build errors. Raise the plugin first.

Record the current first-frame time on a mid-range phone. You need that number after you add a full-width animated mesh.

## Step 2: Put one official mesh on a real screen

Do not prototype only in a scratch module. Pick a splash, profile header, or empty-state card that already uses a linear gradient.

Create a `1 × 1` mesh with four corner colors and attach it with `Modifier.paint`. That is the sample Google published with Compose 1.12.

Then add one interior motion: animate a small offset on inner vertices and leave the four corners fixed. Confirm the fill still covers the box on foldables and on a phone in landscape.

Check the same screen on an sRGB emulator and on a Display P3 device. Compose 1.12 keeps P3 colors in that space when the panel supports it and falls back on older devices.



![Abstract colorful mesh light pattern](https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80)



## Step 3: Inventory blur and offscreen layers

The agenda pairs mesh gradients with progressive blurs. Google has not published an Android 18 blur API in this article’s sources. You can still clean the code you already have.

List every `Modifier.blur`, backdrop blur, and `graphicsLayer` that draws a glow. Note which layers clip the glow because the visual bounds match the measured box.

Compose 1.12 `LayerOutsets` expands those visual bounds so a promoted layer does not crop the effect. Apply outsets on the screens that already look wrong on Android 17. That work transfers if Android 18 adds a cheaper blur path.

Avoid stacking a dense mesh, a large blur, and an animated `graphicsLayer` on the same list row. Profile that combination on a mid-range device before October.

## Step 4: Measure graphics cost the way the session describes

The official session copy says developers will learn how to improve graphics performance without giving up battery life or frame rates. Arrive with traces, not opinions.

Capture a System Trace for the mesh header while it animates. Look at GPU frame time and at how often the layer is promoted offscreen.

Compare two builds: static four-corner mesh versus the looping interior offset. Keep the cheaper one on low-end SKUs if the delta is large.

Re-run Baseline Profiles after the visual change. A pretty header that regresses startup is not ready for an Android 18 graphics talk.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Awi4J5-tbW4"
    title="Android Dev Summit '22: Keynote and Modern Android Development Track Livestream"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 5: Plan how you will watch the talks

Bay View seats are limited to selected professional developers. If you do not have a confirmed RSVP, plan for the keynote livestream that Google says will run for everyone else.

Save the official RSVP pages before they rotate:

- Mountain View: [rsvp.withgoogle.com/events/android-dev-summit-bayview](https://rsvp.withgoogle.com/events/android-dev-summit-bayview)
- London Extended: [rsvp.withgoogle.com/events/android-dev-summit-london](https://rsvp.withgoogle.com/events/android-dev-summit-london)

Google for Developers lists Android Dev Summit among upcoming events and points people to in-person announcements. Watch the Android Developers YouTube channel on 28 October the same way the 2022 summit keynote was streamed.

Write three questions in advance: how Android 18 blur relates to Compose 1.12, whether mesh painters gain a platform fast path, and what devices get the graphics features first.

## What not to assume

Do not treat the agenda line as a summer 2027 consumer date. Secondary reports have guessed a later user rollout. Google has not published that date in the sources used here.

Do not claim a public Android 18 developer preview exists today. The summit is where Google says developers will hear more.

Do not wait for October to leave custom mesh modifiers. The supported painter is already in Compose 1.12.

## Practical tips

Keep mesh grids small on list items. A `1 × 1` hero is enough for most product surfaces.

Animate two or three interior points, not the whole lattice.

Record traces on the same Pixel or mid-range phone you will use while watching the livestream so numbers stay comparable.

If you work on XR or Gemini app connections, those tracks are separate from the graphics session. Split your notes. Do not mix AI agent work into a frame-time bug.

## Conclusion

Android Dev Summit 2026 is the first time in four years Google has a dedicated Android developer event, and the agenda already names Android 18 graphics next to Jetpack Compose.

You can prepare without leaked APIs. Upgrade to Compose 1.12, ship one official mesh gradient, clean blur layers, and capture frame traces. Then watch the keynote with a short list of questions.

When session videos land, compare them against the mesh work you already shipped. That is a better use of October than starting from a custom shader the week of the talk.

## Sources

- [Upcoming Developer Events | Google for Developers](https://developers.google.com/events)
- [Android Dev Summit Bay View RSVP](https://rsvp.withgoogle.com/events/android-dev-summit-bayview)
- [Android Dev Summit London RSVP](https://rsvp.withgoogle.com/events/android-dev-summit-london)
- [What's new in the Jetpack Compose August '26 release](https://android-developers.googleblog.com/2026/08/jetpack-compose-august-2026-release.html)
- [Mesh gradients | Android Developers](https://developer.android.com/develop/ui/compose/graphics/draw/mesh-gradient)
- [Google brings back Android Dev Summit with Android 18 graphics tease (9to5Google)](https://9to5google.com/2026/09/25/android-dev-summit-android-18/)
- [Android Dev Summit '22 keynote livestream (YouTube)](https://www.youtube.com/watch?v=Awi4J5-tbW4)
