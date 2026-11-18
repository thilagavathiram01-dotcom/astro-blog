---
title: "Build Full-Stack Android Apps with Gemini in AI Studio"
description: "Step-by-step guide to create production-ready Kotlin Android apps with Firestore, sign-in, and secure Gemini calls in Google AI Studio."
pubDate: 2026-11-18T10:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "firebase", "tutorials", "ai-tools", "google", "developer"]
noindex: false
---

Google AI Studio now turns a plain English prompt into a full-stack Kotlin Android app. The Build agent provisions Cloud Firestore, Google Sign-In, and secure Gemini calls, then lets you publish the signed App Bundle to your personal Play library.

This update, announced on November 17, 2026, moves AI Studio beyond local prototypes. You get persistent data that syncs across devices, protected API access, and a faster HD emulator with audio. No local SDK install is required.


![Hand holding smartphone displaying lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)


## What the November 17 update adds

The Build agent, powered by Gemini 4 Carbon and Hydrogen, detects when your prompt needs storage, identity, or AI features. With your confirmation it:

- Provisions a Cloud Firestore database and generates Security Rules matched to your data model.
- Configures Firebase Authentication with Google Sign-In and per-user access rules.
- Routes Gemini calls through Firebase AI Logic and enforces Firebase App Check so API keys never ship in the APK.
- Builds and signs an Android App Bundle for direct publish to your personal Google Play library.

Additional workflow upgrades include a lower-latency browser emulator with 1200p HD streaming and real-time audio, one-click screenshot capture sent to the agent for visual UI edits, and support for custom fonts in Jetpack Compose. The agent now uses the official Android CLI under the hood for scaffolding and Gradle builds.

Previously generated Android apps were limited to local session storage. The new path produces apps users can sign into and use across phones and tablets, with offline caching that syncs when connectivity returns.

## Start a full-stack Android app

1. Open [Google AI Studio](https://aistudio.google.com/apps?features=build_android_app) and sign in with your Google account.
2. Switch to Build mode using the left navigation.
3. Select Android from the platform picker at the top of the workspace.
4. Enter a prompt that includes data, sign-in, or AI needs. Example: "Build an Android workout coach app that uses the Gemini API to generate personalized daily routines, reads cues aloud with audio, and saves workout history across devices using Cloud Firestore and Google Sign-In."
5. Click Build. The agent scaffolds the Kotlin and Jetpack Compose project and starts the browser emulator.

When the agent detects backend requirements, a setup card appears. Confirm the Google Cloud project (or create one) and location, then click Enable Firebase. The agent adds the Firebase BoM, configures the SDKs, writes the Kotlin data and AI layers, and generates tailored Security Rules.

You can iterate in the chat panel. Ask for changes to the data model, sign-in flow, or UI. Attach a screenshot from the emulator toolbar if you want precise visual adjustments such as tighter card padding or better contrast.


![Laptop and phone on a desk with coding software open](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)


## Secure Gemini calls and data rules

Firebase AI Logic keeps credentials server-side. App Check verifies that requests come from your authentic app using Google Fraud Defense (formerly reCAPTCHA Enterprise) for production builds and a managed debug token for emulator or USB testing.

Review the generated Security Rules before sharing the app. They default to deny-all except for the signed-in user’s own documents. If you edit rules in the Firebase console, the next agent iteration overwrites them. Prefer describing rule changes in the AI Studio chat so they stay versioned with the project.

For more on the earlier Firebase integration path, see our guide on [adding Firebase to Android apps in Google AI Studio](/blog/add-firebase-to-android-apps-google-ai-studio/).

## Test in the HD emulator and on device

The in-browser emulator now boots faster and supports a 1200p HD stream toggle. Real-time audio output lets you test voice-driven features, text-to-speech coaches, or media playback without leaving the browser.

One-click screenshot capture attaches the live frame to your next prompt, giving Gemini full visual context for UI edits.

To install on a physical phone:

1. Enable Developer Options and USB Debugging on the device.
2. Connect the phone via USB to a computer running Chrome or Edge.
3. In the AI Studio preview panel, click Install on Device and select the phone in the WebUSB dialog.

The signed APK installs and launches. App Check uses the debug token during this local testing.

## Publish to your personal Play library

Open the publish panel in AI Studio. With a standard Google account you can publish the signed Android App Bundle directly to your personal Google Play library at no cost. The app appears in the Play Store app on your phone for immediate install.

No full Play developer account is required for personal library publishing. For broader testing tracks or production release, export the project ZIP and continue in Android Studio or the Play Console.

## Limitations and next steps

Generated projects remain single-module, single-activity Kotlin and Jetpack Compose apps. Wear OS and Android TV are not supported. There is no built-in server runtime, so features needing complex secrets or real-time multiplayer still need a separate backend.

ZIP download is available; GitHub export for Android projects is not yet offered.

When you need custom native modules, multiple activities, or advanced Play features, download the ZIP and open it in Android Studio. The generated code is idiomatic and ready for further development.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ms3vRyTM8w0"
    title="Build secure AI Android apps in Google AI Studio with Firebase AI Logic & App Check"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for stronger results

Keep the first prompt focused on one main flow and the data it must persist. Iterate after the initial build rather than packing every feature into the opening request.

Mention Firestore, Google Sign-In, or Gemini explicitly if the setup card does not appear. You can also enable the integration from Settings > Integrations at any time.

Test Security Rules with a second Google account before sharing. Confirm that one user cannot read another user’s documents.

Use the HD toggle and audio output early so visual and voice issues surface while the agent is still in the loop.

## Conclusion

Google AI Studio’s November 17 update lets you go from a single prompt to a signed, full-stack Android app with persistent storage, secure Gemini calls, and personal Play publishing. The HD emulator, screenshot-to-agent flow, and custom fonts shorten the feedback loop further.

Start with a clear prompt at aistudio.google.com/apps, confirm the Firebase setup when prompted, test in the emulator, then publish to your phone. Review the Security Rules and stay within the shared no-cost Firestore quota while prototyping. When the app needs more, export the ZIP and continue in Android Studio.

## Sources

- [Build full-stack Android apps with Gemini in Google AI Studio](https://developers.googleblog.com/build-full-stack-android-apps-with-gemini-in-google-ai-studio/) — Google Developers Blog, November 17, 2026
- [Build Android apps in Google AI Studio](https://ai.google.dev/gemini-api/docs/aistudio-android) — Google AI for Developers
- [Build full-stack Android apps with AI features using Google AI Studio and Firebase](https://firebase.blog/posts/2026/11/full-stack-android-apps-ai-studio-integration/) — Firebase Blog
- Official Firebase video: Build secure AI Android apps in Google AI Studio with Firebase AI Logic & App Check
