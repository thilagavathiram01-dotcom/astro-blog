---
title: "EU Android AI Rules: What Changes for Gemini Users"
description: "The EU requires Google to open 11 Android AI features to rivals by Android 18. See what Gemini users and developers should expect."
pubDate: 2026-10-01T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "google", "ai"]
noindex: false
---

Gemini can book a ride, draft a message, and wake when you say a hotword because it sits deep in Android. Rival assistants on the same phone often cannot. On 16 July 2026 the European Commission adopted binding Digital Markets Act measures that tell Google to open 11 Android features used by its own AI services, including Gemini.

Nothing flips overnight. Google must ship the main access in Android 18, and no later than 1 August 2027. Concurrent hotword detection, so more than one assistant can listen for a wake word, lands in Android 19 by 1 August 2028. If you use Gemini in the EU, or you ship an Android app that agents call, those dates are the planning window.

## Why the Commission stepped in

Article 6(7) of the DMA requires Google to give developers free and effective interoperability with hardware and software features it controls on Google Android. The Commission opened specification proceedings on 27 January 2026 and adopted the final decision on 16 July 2026 (case DMA.100220).

The Commission notes that about 60% of mobile users in Europe are on Android. It also says many of the features Gemini uses — voice invocation, actions across apps, and on-device context — are largely reserved for Google’s own services. The decision does not force a rival to become the default assistant. Users still choose, and they must consent before an assistant gets access.

![Person holding a smartphone above a laptop keyboard](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## The 11 features, in plain language

The decision groups the features into invocation, context, actions, and access to resources. Here is what each one covers, using the Commission’s own descriptions.

**Invocation**

1. Long-press on the home button or navigation handle can start a third-party assistant and pass contextual data. Those access points can no longer be reserved for Google services such as Circle to Search.
2. Always-on hotword detection lets a user wake a chosen assistant even with the screen off, in battery saver, or while driving. Concurrent detection for several services is the later Android 19 item. “Hey Google” cannot stay exclusive.

**Context**

3. Centralised access to on-device app data that apps and the user have chosen to share, similar to how Google services use AppSearch, instead of one-off integrations with every app.
4. Context-aware intelligence for proactive suggestions, with consent. The Commission cites Google’s Magic Cue as the kind of experience rivals should be able to match, such as surfacing a flight number during a call.
5. Ambient data: the same real-time sensor path Google uses for microphone, camera, screen, and speakers, under the same consent and awareness rules.

**Actions on apps and the OS**

6. Structured on-device integration so an assistant can run tasks the app and the user expose, such as send a message, create a note, or schedule a meeting. Android’s path for this is App Functions. Alphabet must also expose Gmail, Calendar, Drive, Docs, Maps, YouTube, Messages, and Phone through OS-level channels.
7. Screen automation for multi-step work in a virtual window while you do something else. The Commission says Android implements this with Computer Control, currently reserved for Google services such as Gemini. A shopping-list-to-order flow is the example in the Q&A.
8. System integration for settings such as brightness, media playback, Do Not Disturb, and Bluetooth.

**Resources**

9. Equal access to system-level on-device models that are part of the designated OS, including Gemini Nano models already on the device, for tasks such as summarising, proofreading, and speech recognition.
10. The same hardware and background conditions for third-party on-device models, plus a way to share those models with other apps.
11. Background execution so an assistant can finish work when you are in another app or the screen is off, under rules that are not reserved for Google apps.

Interoperability must be free, documented, testable, and as effective as Google’s own path. It cannot depend on the assistant being the default. New functions added to these features must be offered to third parties at the same time Google’s services get them. Device makers can still preinstall apps and set defaults, as long as they do not block this access. The Commission says the measures do not require new chips, and Google cannot push the implementation work onto manufacturers.

## What stays the same until Android 18

Gemini on a current Pixel or Galaxy is unchanged by this decision. The rules are an engineering obligation on Google, not a toggle in Settings today. You still pick the default assistant in Android settings. Rival apps such as ChatGPT can already be the assistant on many phones, but they do not yet get the full OS hooks listed above.

If you rely on Gemini for cross-app tasks, read how those flows work now in [How to Automate Multi-Step Tasks with Gemini on Android](/blog/gemini-intelligence-android-how-to/). The EU measures are about giving other assistants a comparable set of hooks, not about removing Gemini.

Privacy and security law still applies, including the GDPR and the Cyber Resilience Act. For five sensitive features — screen automation, structured on-device integration, system integration, centralised on-device app data, and context-aware intelligence — Google may set objective eligibility conditions. It may not add commercial requirements. Independent third parties will certify apps alongside Google.

Draft eligibility terms are due by 1 February 2027. Final terms must be published by 1 May 2027, when Google must start accepting applications. A decision on an application is due within four weeks. Non-AI apps can request access through a separate process.

![Developer workspace with a laptop and notes](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## What developers should do now

You cannot call the new interoperability APIs yet. You can prepare the app side so an assistant, Google’s or someone else’s, has something safe to invoke.

1. List the tasks you are willing to expose. Keep them narrow: create a note, start navigation, add a calendar event. Do not offer a single “do anything” function.
2. Implement those tasks with App Functions where you already can. The Commission points to App Functions as Android’s structured integration path, and says it can no longer be reserved for Google services. A practical walkthrough is in [How to Expose App Functions to Android Agents](/blog/android-appfunctions-agents/).
3. Decide which on-device data you will share, and only after the user opts in. Centralised access still depends on the app and the user choosing to share.
4. Plan a consent screen that names the assistant, the data, and the actions. The decision keeps consent with the user for every feature.
5. Watch for Google’s beta and documentation. The decision requires technical assistance and testing, including beta access, before you ship to users.
6. If you want the sensitive features, track the eligibility program from February 2027. Budget for a four-week review after you apply in May 2027.

OEMs are not blocked from their own UI. A Samsung or Pixel skin can still differ, as long as a certified assistant can reach the same features.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2K7VVAMUYPw"
    title="Connect to the intelligence system"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## How to follow the rollout

- Check the Android version on your phone under Settings, About phone. Android 18 is the release named in the decision for the main set of features.
- Treat 1 August 2027 as the legal backstop, not a guaranteed day-one date on every device. Major releases still roll out by manufacturer.
- For voice, expect a second step. One hotword path arrives with the Android 18 work. Multiple assistants listening at once is specified for Android 19, by 1 August 2028.
- Read Google’s interoperability docs when they appear. The Commission will monitor progress for about two years, and Google must report on design, build, and release.
- If you only use Gemini, no action is required. If you want a different assistant for mail or shopping later, wait until that app lists the new Android hooks and asks for consent.

## Bottom line

The July 2026 decision does not swap Gemini out of Android. It requires Google to offer the same class of invocation, context, action, and on-device model access to other AI services, free of charge, without making them the default. The practical deadline is Android 18, and 1 August 2027 at the latest, with concurrent wake words a year later. Users keep the consent switch. Developers who expose clear App Functions now will be ready when those assistants can finally call them.

## Sources

- European Commission, Alphabet specification proceedings — Interoperability for AI services (DMA.100220), decision adopted 16 July 2026: https://digital-markets-act.ec.europa.eu/businesses-portal/interoperability/alphabet-specification-proceedings-interoperability-ai-services_en
- European Commission press material, guidance on Android AI interoperability and Google Search data under the DMA: https://digital-strategy.ec.europa.eu/en/news/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data
- Android Developers, Connect your app to the Android intelligence system: https://developer.android.com/ai/intelligence-system
