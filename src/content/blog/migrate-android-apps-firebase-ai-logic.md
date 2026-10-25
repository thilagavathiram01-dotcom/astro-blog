---
title: "How to Migrate Android Apps to Firebase AI Logic"
description: "Step-by-step guide to migrate Android apps from Vertex AI in Firebase to the Firebase AI Logic SDK for Gemini models."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["firebase", "android", "tutorials"]
noindex: false
---

Firebase renamed Vertex AI in Firebase to Firebase AI Logic. The new client SDKs let Android apps call Gemini models directly while choosing between the Gemini Developer API and the Agent Platform Gemini API.

If your app still uses the old `firebase-vertexai` dependency, migrate now. Starting November 2, 2026, Firebase App Check enforcement becomes required for Firebase AI Logic. Gemini 4 Argon is also available on the paid tier through the new SDK.

This guide walks through the official migration steps for Android. It draws only from Firebase documentation.

## Why Migrate Now

The old Vertex AI in Firebase SDKs supported only the Agent Platform Gemini API (formerly Vertex AI). Firebase AI Logic adds the Gemini Developer API option. That provider includes a no-cost tier with rate limits suitable for many apps.

You keep the secure proxy that hides API keys from your app binary. App Check continues to block unauthorized clients. After migration you can also access newer models such as Gemini 4 Argon.

Existing projects that set up the service before early July 2026 must enable App Check enforcement manually if it is not already active.

![Android developer coding on a laptop at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Choose Your Gemini API Provider

Decide which backend your app will use before changing code.

- Gemini Developer API: Offers a no-cost tier. It does not support Cloud Storage URLs for files. It does support YouTube URLs.
- Agent Platform Gemini API: Requires the Blaze plan. It supports Cloud Storage URLs protected by Security Rules and location specification.

Both can be enabled in the same Firebase project. Review pricing and quotas on the Firebase AI Logic models page before switching.

If you keep the Agent Platform Gemini API, skip the console setup step below.

## Set Up the Gemini Developer API (Optional)

This step applies only if you switch to the Gemini Developer API.

1. Open the Firebase console and go to AI Services > AI Logic.
2. Select the Settings tab.
3. Choose Gemini Developer API and enable it.
4. The console enables required APIs and creates a key. Do not add that key to your app code.

Continue with the library update.

## Update the Android Library

Open your app-level `build.gradle.kts` (or `build.gradle`).

Replace the old dependency:

```kotlin
// BEFORE
implementation(platform("com.google.firebase:firebase-bom:33.x.y"))
implementation("com.google.firebase:firebase-vertexai")
```

With the new one:

```kotlin
// AFTER
implementation(platform("com.google.firebase:firebase-bom:35.1.0"))
implementation("com.google.firebase:firebase-ai")
```

Sync the project. If you do not use the BoM, add `com.google.firebase:firebase-ai` and accept the version Android Studio suggests. Migrate your initialization code before removing the old dependency so the project continues to build.

![Smartphone displaying programming languages](https://images.unsplash.com/photo-1650234083227-74c0700b295a?auto=format&fit=crop&w=800&q=80)

## Update Initialization Code

The initialization API changed. For the Gemini Developer API the Kotlin code becomes:

```kotlin
val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel("gemini-3.8-flash")
```

For the Agent Platform Gemini API use `GenerativeBackend.agentPlatform()` (available from SDK 17.15.0 / BoM 34.17.0). You can pass a location if needed.

Create a `GenerativeModel` only when your feature requires it. Live API streaming uses a different model type.

After the change, remove the old `firebase-vertexai` dependency and sync again.

## Handle Feature-Specific Changes

Most Android code needs no further edits. Check these cases:

- Multimodal requests that used Cloud Storage URLs must switch to inline data (or YouTube URLs) if you moved to the Gemini Developer API.
- Live API: The `ResponseModality.UNSPECIFIED` enum value was removed. Use `null` instead.
- Java builders now return the instance instead of void in some cases.

Test generation, streaming, and any function calling after the update. Update model names to current supported versions. Gemini 2.5 models on the Agent Platform Gemini API shut down for all projects in October 2026 unless the project already used them. Prefer `gemini-4-argon`, `gemini-3.8-flash`, or `gemini-nano-banana-2.1`.

## Enable App Check Before the Deadline

Firebase AI Logic requires App Check enforcement starting November 2, 2026. New guided setups since early July 2026 enforce it automatically.

For existing projects:

1. In the Firebase console go to Security > App Check.
2. Locate Firebase AI Logic. If it shows Unenforced, open the metrics and click Set up or Enforce.
3. Choose baseline protection as Enforced. Replay protection (limited-use tokens) is optional but recommended.
4. Register your Android app with the Play Integrity provider. Provide the SHA-256 fingerprint of your signing certificate.
5. In code, initialize App Check before other Firebase calls. For local development use the debug provider and register the debug token shown in logcat.

Production builds must use a real attestation provider. Debug tokens never ship to users.

If your app already calls Gemini through Firebase AI Logic, also review the related guide on [adding Firebase to Android apps in Google AI Studio](/blog/add-firebase-to-android-apps-google-ai-studio/).

## Tips for a Smooth Migration

Update the Firebase Android BoM first so all libraries stay compatible. Run unit and instrumented tests that exercise AI calls. Monitor the App Check metrics dashboard after enabling enforcement to confirm legitimate traffic passes.

Keep both API providers enabled during testing if you want to compare latency or cost. Document the chosen provider in your project README so teammates know which backend is active.

For image generation or editing features, confirm the model supports the required response modalities.

## Conclusion

Migrating from Vertex AI in Firebase to Firebase AI Logic takes a dependency swap, an initialization update, and App Check verification. The new SDK unlocks the Gemini Developer API option and current models including Gemini 4 Argon.

Complete the steps before the November 2, 2026 App Check deadline. Official docs remain the source of truth for any edge cases.

Watch the official Firebase video below for a visual walkthrough of setting up Firebase AI Logic on Android.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Migrate to the Firebase AI Logic SDKs](https://firebase.google.com/docs/ai-logic/migrate-to-latest-sdk)
- [Prevent Gemini API abuse with Firebase App Check](https://firebase.google.com/docs/ai-logic/app-check)
- [Firebase AI Logic models](https://firebase.google.com/docs/ai-logic/models)
- [Get started with Firebase AI Logic](https://firebase.google.com/docs/ai-logic/get-started)
