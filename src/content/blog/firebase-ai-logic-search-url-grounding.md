---
title: "How to Ground Gemini on Android With Search and URLs"
description: "Add Google Search, URL context, and Maps grounding to Firebase AI Logic so Gemini answers on Android stay current and cite sources."
pubDate: 2026-09-28T04:30:00
heroImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "tutorials", "ai"]
noindex: false
---

A cloud Gemini model is only as current as its training cutoff. Ticket prices, museum hours, and restaurant hours change weekly. If your Android app answers those questions from model memory alone, users will catch the stale line first.

Firebase AI Logic can attach **tools** to the same `GenerativeModel` you already call from the client. Three of those tools pull live context: **Google Search**, **URL context**, and **Google Maps**. Google documents them for the Gemini Developer API and Vertex backends. The Android sample app [Jetpacker](https://github.com/android/ai-samples/tree/main/jetpacker) uses the first two in its museum assistant.

This guide walks through enabling those tools, writing prompts that actually use them, showing citations, and pairing the cloud path with App Check. Grounding is a **cloud** feature. Hybrid on-device Nano does not get Search or URL tools; keep that work on the cloud route described in our [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/) guide.

## What grounding changes in the request

Without tools, `generateContent` or `sendMessage` runs against model weights. With `Tool.googleSearch()`, the model may query the public web, then write an answer that cites those pages. With `Tool.urlContext()`, you pass one or more URLs in the prompt and the model reads those pages instead of guessing.

Firebase documents three grounding styles:

- **Google Search** — live public web results and source links.
- **URL context** — content from pages you name.
- **Google Maps** — place data (hours, EV chargers, business facts) plus `placeId` metadata.

You can enable Search and URL context on the same model. Official docs say the model may search first, then open result pages with URL context when both tools are on.



![Laptop on a desk with code and browser tabs open for research](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Watch the official intelligent-apps walkthrough

Google's I/O session is the right context before you copy tool lists into production:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/_iuXykdlTkk"
    title="Build intelligent Android apps with Google's AI — Google I/O 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Step 1: Add the Firebase AI Logic dependency

Use the Firebase Android BoM so `firebase-ai` stays aligned with App Check and Auth. Exact artifact names move with the BoM; pin the BoM your project already uses, then add the AI Logic library.

```kotlin
// In your module build.gradle.kts — keep the BoM version you already ship
implementation(platform("com.google.firebase:firebase-bom:34.10.0"))
implementation("com.google.firebase:firebase-ai")
implementation("com.google.firebase:firebase-appcheck-playintegrity")
```

Initialize Firebase in `Application`. For local builds, Google's Jetpacker sample installs the App Check **debug** provider and signs in anonymously so requests are attributable. In production, switch to Play Integrity.

Grounding bills as a cloud Gemini call. Do not put a raw Gemini Developer API key in the APK. Firebase AI Logic is the documented client path.

## Step 2: Attach Search and URL tools

Create the model once and reuse it. Official Kotlin from Firebase URL-context docs:

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-3-flash",
        systemInstruction = content {
            text(
                "You are a museum assistant. Use plain text. " +
                "Cite sources when you use the web."
            )
        },
        tools = listOf(Tool.urlContext(), Tool.googleSearch())
    )
```

Jetpacker builds the tool list from feature flags so you can ship Search off while you finish policy review:

```kotlin
private val toolList = buildList {
    if (ENABLE_SEARCH_GROUNDING) add(Tool.googleSearch())
    if (ENABLE_URL_GROUNDING) add(Tool.urlContext())
}
```

Pick a cloud model that supports tools. On-device Nano through `firebase-ai-ondevice` does **not** support Google Search, URL context, Maps grounding, or function calling, per Firebase hybrid docs. Use `InferenceMode.ONLY_IN_CLOUD` (or a separate cloud-only model) for this feature.

## Step 3: Put URLs in the user prompt

URL context does not scrape a secret sitemap. You name the pages. Jetpacker appends official museum URLs when the flag is on:

```kotlin
val groundingHint = if (ENABLE_URL_GROUNDING) {
    "If this is about visit rules or tickets for Le Louvre, " +
    "use these pages when needed: ${urlList.joinToString()}."
} else ""

val response = chat.sendMessage("$userText $groundingHint")
```

Keep the list short and official. A FAQ page and a tickets page beat a dump of twenty marketing URLs. If the model cannot answer from those pages, Search can fill the gap when that tool is enabled.

Ask one job per turn: hours, ticket discounts, or bag rules. Mixed questions make citations harder to check.

## Step 4: Read grounding metadata and show sources

Search and Maps responses can include `groundingMetadata`. Maps docs describe `groundingChunks` (uri, title, `placeId`) and `groundingSupports` (character ranges that map a sentence to those chunks).

In the UI:

1. Render the model text first.
2. List unique source titles as links under the bubble.
3. For Maps answers, open the place with the returned `placeId` instead of a guessed query string.

Firebase and Gemini provider terms require you to surface grounding sources when the product rules say so. Treat the citation row as part of the feature, not an optional footer.



![Person reviewing a map and notes on a phone while traveling](https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80)



## Step 5: Add Maps when the question is about a place

Grounding with Google Maps connects Gemini to Maps place data. Firebase lists benefits as fewer invented hours and access to live facts such as EV charger status.

```kotlin
val mapsModel = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-3-flash",
        tools = listOf(Tool.googleMaps())
    )
```

Use Maps for “is this kitchen open now?” and Search+URL for “what is the official ticket policy?” Mixing Maps into a policy chatbot adds place cards you may not want.

Jetpacker’s restaurant-review flow is a different pattern: hybrid draft on device, then an intent into the Maps write-review URL with a known `placeId`. That is not Maps grounding. Do not confuse the two APIs.

## Step 6: Lock the cloud path down

Grounded calls hit Google backends and can cost money. Jetpacker installs App Check at process start and uses anonymous Auth so every call has a principal.

Production checklist from Google's write-up:

- Play Integrity in release builds.
- Debug App Check provider only on engineer devices; paste the logcat secret into the Firebase console allow list.
- Enforce App Check on the AI Logic API in the console before you ship.
- Cap spend in the same project that owns the Gemini traffic.

If you already route some prompts on-device, keep grounding on the cloud model only. Hybrid fallback will drop tools if the request lands on Nano.

## Prompt and product tips

- State the locale and date in the system instruction when hours matter.
- Prefer official `.gouv`, museum, or carrier pages in the URL list.
- Log whether Search or URL context ran so you can see empty-citation answers.
- Do not send personal itineraries to Search if the same text can stay on-device. Summaries of private plans belong on Nano or a closed cloud prompt without Search.
- Feature-flag each tool. Search changes answer shape overnight; you want an off switch.

## Limits to keep in the PR description

- Grounding is not a replacement for your own database of booked tickets.
- URL context only helps if the page is public and readable.
- Provider terms apply to Search and Maps grounding; read the Gemini Developer API or Vertex terms before you store citations.
- Model names in samples (`gemini-3-flash`, `gemini-3.1-flash-lite`) match Google's mid-2026 posts. Confirm the live list in [Firebase AI Logic models](https://firebase.google.com/docs/ai-logic/models) before you ship.

## Conclusion

Search, URL context, and Maps tools turn a generic Gemini chat into an assistant that can quote today's hours instead of last year's brochure. Attach the tools on a **cloud** `GenerativeModel`, put official URLs in the prompt, render citations, and keep App Check on.

Start with one screen — a museum FAQ or a place-hours card — then expand. Leave offline drafts on the hybrid path you already have in [Firebase AI Logic hybrid inference](/blog/firebase-ai-logic-hybrid-inference/).

## Sources

- [Build intelligent Android apps: Cloud and hybrid inference](https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-cloud-hybrid-inference.html) — Android Developers Blog, 21 July 2026
- [Grounding with Google Search](https://firebase.google.com/docs/ai-logic/grounding-google-search) — Firebase AI Logic
- [URL context](https://firebase.google.com/docs/ai-logic/url-context) — Firebase AI Logic
- [Grounding with Google Maps](https://firebase.google.com/docs/ai-logic/grounding-google-maps) — Firebase AI Logic
- [Hybrid inference on Android](https://firebase.google.com/docs/ai-logic/hybrid/android/get-started?api=dev) — on-device tool limits
- [Jetpacker sample](https://github.com/android/ai-samples/tree/main/jetpacker)
