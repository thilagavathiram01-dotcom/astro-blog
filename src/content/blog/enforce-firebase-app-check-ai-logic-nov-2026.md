---
title: "Set Up Firebase App Check for AI Logic Before Nov 2"
description: "Enforce Firebase App Check for Firebase AI Logic before the November 2, 2026 deadline. Android Play Integrity and debug setup steps."
pubDate: 2026-10-04T12:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "security", "android", "tutorials"]
noindex: false
---

Firebase will require App Check enforcement for Firebase AI Logic starting November 2, 2026. After that date, Gemini requests from mobile and web apps that lack a valid App Check token can be rejected. If your project already calls Gemini through the Firebase AI Logic SDK, treat this as a release blocker, not a later hardening task.

App Check attests that a request comes from your real app, and on some platforms from an untampered device. Firebase AI Logic sits in front of both the Gemini Developer API and the Agent Platform Gemini API (formerly Vertex AI). Enforcement covers both backends. This guide walks through the console steps, a local debug provider, and Play Integrity on Android.

If you already use hybrid inference, keep that path in mind while you ship tokens. The [Firebase AI Logic hybrid inference guide](/blog/firebase-ai-logic-hybrid-inference/) covers on-device plus cloud routing. App Check still applies to the cloud calls.

## Why the November 2 deadline matters

Firebase documents the cutoff on the AI Logic App Check page and on the production checklist. Starting early July 2026, the guided setup workflow in the Firebase console began enforcing App Check for new AI Logic projects. Projects configured before that window, or projects where enforcement was never turned on, still need a manual pass.

Unverified clients can copy an API key from a shipped app and spend your Gemini quota. App Check does not replace API key restrictions. Google still recommends restricting Firebase API keys. It does stop random scripts from presenting themselves as your app once enforcement is on.

Enforcement can take up to 15 minutes to apply after you click Enforce. Plan a quiet window, watch the metrics graphs, and keep a debug token registered so your own emulators do not fail the same checks.

![Developer reviewing code on a laptop before a security deadline](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Check whether AI Logic is already enforced

Open the Firebase console and go to Security, then App Check, then the APIs tab. Find the row labeled Firebase AI Logic.

If the status is already Enforced, confirm that every released build sends tokens. Old store builds without the App Check SDK will fail once enforcement is on. If the status is Unenforced, continue with the setup flow below.

Google's own steps are short:

1. Open the Firebase AI Logic row and review the metrics graphs.
2. Click Set up under the graphs.
3. On Baseline protection, choose Enforced, then Continue.
4. On Replay protection, choose Disabled for the first rollout, then Continue.
5. Read the readiness notes and confirm.

You can enforce before you register production apps if you only use the debug provider on pre-release builds. Before you ship to users, register each app and attach a production attestation provider: Play Integrity or reCAPTCHA Enterprise on Android, DeviceCheck, App Attest, or reCAPTCHA Enterprise on Apple platforms, and reCAPTCHA Enterprise on the web. Flutter and Unity can use the same providers.

## Add the Android debug provider first

Local emulators cannot pass Play Integrity. Keep enforcement on in the project and install the debug provider only in debug builds.

Add the App Check debug dependency next to the Firebase AI Logic SDK. Google's hybrid Android sample lists `com.google.firebase:firebase-appcheck-debug` alongside `firebase-ai`. Use the BoM version your project already pins, and do not ship the debug artifact in release.

In the debug Application or MainActivity, install the factory before Gemini calls:

```kotlin
Firebase.initialize(context = this)
Firebase.appCheck.installAppCheckProviderFactory(
    DebugAppCheckProviderFactory.getInstance(),
)
```

Run the app on an emulator. Logcat prints a line from DebugAppCheckProvider with a UUID debug secret. Copy that token.

In the console, open Security, App Check, Apps. Open the overflow menu on your Android app and choose Manage debug tokens. Register the UUID. Repeat for each machine or CI emulator that needs a stable token. A new install can mint a new secret, so shared emulators should use a registered token you set explicitly when the docs for your SDK version allow it.

After the token is saved, a Gemini generate-content call from that debug build should succeed with enforcement already on.

## Register Play Integrity for release builds

Play Integrity is the default Android attestation provider for apps distributed through Google Play. Register the app in App Check, select Play Integrity, and ship a release build that installs the Play Integrity provider factory instead of the debug factory.

Use product flavors or `BuildConfig.DEBUG` so the debug factory never lands in the Play bundle. A release build that still installs `DebugAppCheckProviderFactory` will fail closed for real users once you remove debug tokens, or it will weaken the check if you leave those tokens active.

Google notes that App Check must cover every app version that calls Firebase AI Logic. If you still have a Play track on an older binary, either update that track or accept that those users will see Gemini errors after November 2.

Limited-use tokens, used for replay protection, need a recent SDK. Android support starts at Firebase AI Logic Android SDK 17.2.0 and BoM 34.2.0. Enable limited-use tokens in the client before you flip replay protection to Enforced. Until most users are on that build, leave replay protection in monitoring or disabled. Replay checks add latency and can add attestation cost.

![Lock and network hardware representing API request verification](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80)

## Watch a short App Check walkthrough

Firebase's overview of App Check explains attestation, Play Integrity, and why unverified clients get blocked. The console labels have moved since this recording, but the request flow matches the current AI Logic docs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/K1XU2y0YVtU"
    title="Reduce cheating with Firebase App Check"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before November 2

Monitor the App Check metrics for Firebase AI Logic for at least a day after the client SDK is in production and before you rely on enforcement. A spike in unverified requests usually means an old build, a missing provider factory, or a web app still calling Gemini without App Check initialized.

Do not enable replay protection on day one if a large share of installs cannot mint limited-use tokens. Baseline enforcement already rejects clients with no attestation.

Keep API key restrictions in place. App Check proves the caller is your app. Key restrictions limit which APIs that key can touch.

If Gemini 2.5 models are still in your client, move those calls before you only test App Check. Google says Gemini 2.5 models on the Agent Platform Gemini API shut down for all projects in October 2026 unless you migrate. Stable Gemini Live API 2.5 models are excluded from that shutdown note. Current docs point teams at models such as `gemini-3.8-flash` for text.

Test one failing case on purpose: run a debug build with no registered debug token and confirm the Gemini call fails. That proves enforcement is real, not only configured in the console.

## What to ship this week

Confirm the Firebase AI Logic row, enforce baseline protection, register debug tokens for emulators, and put Play Integrity on the release variant. Update Play and web clients that still call Gemini without App Check. Leave replay protection off until limited-use tokens are in the build most users run.

November 2 is a hard dependency for direct Gemini access through Firebase AI Logic. Teams that finish the debug path this week can turn on enforcement without blocking their own testers.

## Sources

- Firebase, Prevent Gemini API abuse with Firebase App Check: https://firebase.google.com/docs/ai-logic/app-check
- Firebase, Production checklist for using Firebase AI Logic: https://firebase.google.com/docs/ai-logic/production-checklist
- Firebase, Enable App Check enforcement: https://firebase.google.com/docs/app-check/enable-enforcement
- Firebase YouTube, Reduce cheating with Firebase App Check: https://www.youtube.com/watch?v=K1XU2y0YVtU
