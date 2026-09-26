---
title: "How to Build Adaptive Glance Widgets for Phone, Wear, Auto"
description: "Use Jetpack Glance and RemoteCompose to ship one widget stack for Android home screens, Wear Widgets, and Android Auto."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Home screens, watch faces, and car dashboards all want the same thing: a short, current snapshot from your app. Until 2026 those surfaces used different APIs. Jetpack Glance plus RemoteCompose now share one Compose-style model across phones, Wear Widgets (the successor to Tiles), and Android Auto.

Google described the unification at Google I/O 2026 and again in the 2 June 2026 Android Developers Blog recap. Wear Widget APIs remain in alpha as of the 23 September 2026 Wear Remote Compose Material 3 release. Treat Wear as preview code; treat phone Glance as the production path you already ship.

This tutorial walks through the shared stack, a first phone widget, a Wear Widget service, Auto constraints, and the checks that keep glanceable UIs useful. If you only need a personal card and not an app widget, see [How to Create Custom Android Widgets with Gemini Create My Widget](/blog/create-my-widget-gemini-android/).

## What changed in 2026

Three facts from official Android sources:

- **Glance is the developer API.** You write Kotlin composables instead of XML `RemoteViews` for new widgets.
- **RemoteCompose is the rendering engine.** It compiles a lightweight document that the system draws without waking your process for every frame. That is why snap-scroll, richer buttons, and theming can run on the home screen, watch, and car.
- **Tiles are Wear Widgets.** The I/O 2026 widgets session renamed Tiles and placed the new API in `androidx.glance.wear`.

On Wear OS, RemoteCompose replaces ProtoLayout as the widget UI layer. On phones and cars, it sits under Glance so older devices can still fall back to a simpler path while Android 16+ hosts use the new document format.

Google’s premium-experiences post used a travel example: flight status on the car, a gate change on the watch, boarding details on the phone. One product story, three hosts.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VnjgKzAa0ws"
    title="Build adaptive widgets for cars, phones, watches, and more"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What you need

- Android Studio current stable (Quail or later from the 2026 tool line).
- `compileSdk` 35 or higher if you want generated widget-picker previews on Android 15+.
- Jetpack Glance app-widget artifacts for the phone target.
- For Wear Widgets (alpha): `androidx.glance.wear`, `androidx.compose.remote`, and `androidx.wear.compose.remote:remote-material3` as listed in the Wear get-started guide.
- An Android Auto test bench if you claim car support. Auto does not allow free scrolling while driving.

Pin exact alpha versions from the current release notes. The Wear get-started page listed `remote-creation-compose` / `remote-core` `1.0.0-alpha20` and `glance.wear` `1.0.0-alpha19` alongside `remote-material3` `1.0.0-alpha12` in late September 2026. Those numbers move.



![Developer desk with an Android phone and laptop](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Step 1 — Add Glance for the phone widget

Follow the [Jetpack Glance](https://developer.android.com/develop/ui/compose/glance) setup first. Your module needs the Glance app-widget dependency and a receiver that extends `GlanceAppWidgetReceiver`.

Keep the widget class small:

1. Extend `GlanceAppWidget`.
2. Implement `provideGlance` and load only the fields the card shows.
3. Override `providePreview` on Android 15+ so the picker shows live layout instead of a stale PNG.
4. Call `GlanceAppWidgetManager.setWidgetPreviews` from a controlled point (first launch or after a data change). The API is rate-limited; official docs cite about two calls per hour.

Canonical layouts from the widget quality guide still apply: 2x2 for a status tile, 4x2 for a list snapshot, 4x4 only if every extra cell earns its space.

Do not copy your full Activity UI. A widget that needs scroll plus five actions belongs in the app.

## Step 2 — Share data, not pixels

The point of one stack is shared **state**, not a single composable file for every host.

Put boarding time, gate, and delay flag in a small repository or DataStore. Phone Glance, Wear Widget, and any Auto adapter read that store. Each host then maps the same record to a layout that fits the surface:

- Phone: title, two metrics, one tap target into the app.
- Watch: one metric and a complication-sized fallback.
- Car: large type, no snap-scroll while the vehicle is in motion, tap only for allowed actions.

RemoteCompose can animate and snap-scroll on hosts that allow it. Auto documentation and the I/O session both warn that driving constraints drop gestures such as free scroll. Design the car layout as a static card first.

## Step 3 — Add a Wear Widget (alpha)

Official Wear docs describe three pieces:

1. A service that extends `GlanceWearWidgetService` and is annotated with `@AssociateWithGlanceWearWidget`.
2. A class that extends `GlanceWearWidget` and implements `provideWidgetData`.
3. Content marked `@RemoteComposable` using Remote Compose primitives such as `RemoteBox` and `RemoteText`.

A minimal shape from the get-started guide:

```kotlin
@AssociateWithGlanceWearWidget(HelloWidget::class)
class HelloWidgetService : GlanceWearWidgetService() {
    override val widget: GlanceWearWidget = HelloWidget()
}
```

`provideWidgetData` returns a `WearWidgetDocument` with a background brush and the composable content. Content uses Remote Compose modifiers (`RemoteModifier.fillMaxSize()`) and remote colors (`.rc`) rather than standard Compose UI nodes.

Wear Widgets align with phone 2x1 and 2x2 sizes so a user who knows the home-screen card recognizes the watch card. Wear OS 7 also adds Live Updates; keep widget content short so a live update chip and the widget do not fight for the same facts.

Because the Wear API is alpha, isolate it in a feature module. Do not block your Play release on Wear Widget compilation errors.



![Smartwatch and smartphone on a wooden table](https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80)



## Step 4 — Reach Android Auto without a second product

Google’s line at I/O: if you already build adaptive mobile widgets, you already have the foundation for cars. In practice:

- Use the same Glance widget definition where Auto can host it.
- Strip interactions that are illegal or unsafe while driving.
- Test contrast against both light and dark vehicle themes. RemoteCompose dynamic theming is meant to pick up host colors; still verify in a parked and a driving simulation.

Google cited more than 250 million Auto-compatible cars in press around the widgets session. That number is a reach argument, not a promise that every head unit will show your widget on day one. Check the current [cars widgets guide](https://developer.android.com/design/ui/cars/guides/flows/widgets) before you market Auto support.

## Step 5 — Make the picker honest

A widget users never add is wasted work.

- Generate previews with `providePreview` plus `setWidgetPreviews` on API 35+.
- Keep a static `previewImage` for older pickers.
- Name the widget after the job (“Gate status”), not the app brand alone.
- Document resize behavior. RemoteCompose widgets should reflow; if a size looks empty, hide that size in the provider info.

## Tips that keep widgets healthy

- Update on a schedule that matches the data. Flight status every few minutes is fine; a weekly meal plan is not.
- Prefer one primary action. Extra buttons belong in the app.
- Test R8 full mode. Glance has open issues around keep rules; if the widget vanishes in release builds, inspect the [R8 Configuration Analyzer](https://developer.android.com/topic/performance/app-optimization/r8-configuration-analyzer) before you add blanket `-keep` lines.
- Do not wake the app for animation. Let RemoteCompose run on the host.
- Treat Create My Widget as a user feature, not your shipping widget. Branded data still needs Glance.

## Conclusion

Adaptive widgets in 2026 are a shared Glance + RemoteCompose pipeline, not three separate products. Ship the phone widget first with honest previews. Add a Wear Widget module while the API is alpha. Reuse the same records on Auto with driving-safe layouts.

Start with one job — a gate, a delay, a next action — and put that job on every surface your users actually glance at.

## Sources

- [Building Premium Android Experiences at Google I/O ‘26](https://android-developers.googleblog.com/2026/06/building-premium-android-experiences-google-io-26.html) — Android Developers Blog, 2 June 2026
- [Jetpack Glance](https://developer.android.com/develop/ui/compose/glance)
- [Get started with Wear widgets](https://developer.android.com/training/wearables/widgets/get_started)
- [Wear Remote Compose Material 3 releases](https://developer.android.com/jetpack/androidx/releases/wear-compose-remote)
- [Generated widget previews](https://developer.android.com/develop/ui/compose/glance/generated-previews)
- [Build adaptive widgets for cars, phones, watches, and more](https://www.youtube.com/watch?v=VnjgKzAa0ws) — Android Developers, Google I/O 2026
- [RemoteCompose releases](https://developer.android.com/jetpack/androidx/releases/compose-remote)
