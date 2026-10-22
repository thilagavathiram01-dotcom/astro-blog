---
title: "How to Build Native Android Apps in Google AI Studio"
description: "Step-by-step guide to prompt native Kotlin Android apps in Google AI Studio, preview in the browser emulator, install on device, and add Firebase."
pubDate: 2026-10-22T21:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "gemini", "ai-tools"]
noindex: false
---

Google AI Studio turns a plain-language prompt into a complete native Android project. The Antigravity Agent writes Kotlin and Jetpack Compose code, launches a browser emulator, and lets you install the result on a real phone. On October 13, 2026 Google also began rolling out a personal library in the Play Store so eligible users can run these apps with only a standard Google account.

You do not need Android Studio, the Android SDK, or prior coding experience for the basic flow. The generated apps stay client-side, single-activity projects aimed at phones and tablets.

![Hand holding a smartphone that displays lines of code](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## What you get

The agent produces a standard Gradle project that uses Kotlin DSL, Jetpack Compose with Material 3, a single activity, ViewModels, and the usual Android resources. You can view or edit the files in the Code tab and download the whole project as a ZIP for continued work in Android Studio. GitHub export is not yet available for Android projects.

Firebase integration is supported. When you ask for generative AI features, data storage, or sign-in, the agent can provision Firebase AI Logic with App Check, Cloud Firestore (including security rules), and Firebase Authentication. This keeps API keys out of the APK.

Limitations are clear: no server-side runtime, no multiplayer, no Google Workspace APIs, no NDK or native C/C++, no Java or XML layouts, and no Wear OS or Android TV targets. The browser emulator cannot access the real camera, NFC, Bluetooth, or most Play services.

## Step 1: Open Build mode and choose Android

Go to [Google AI Studio](https://aistudio.google.com/apps) and sign in with a Google account. In the left navigation open Build mode. Select Android from the platform picker. If you skip this step the agent builds a web app instead.

Type a concrete description. Official examples include “Create a daily task tracker with local storage” or “Build a recipe app that uses AI to suggest meals from ingredients.” Click Build. The agent plans the requirements, writes the code, and opens the app in the cloud emulator that streams to your browser.

You can keep chatting to iterate. Changes rebuild and refresh the emulator automatically. You can also rotate the virtual device between portrait and landscape.

## Step 2: Preview and refine in the browser emulator

The emulator runs entirely in Google’s cloud. You do not install anything locally. Tap, scroll, and interact as you would on a Pixel-like device. Location is simulated. Camera, NFC, Bluetooth, and Google Sign-In or Maps features that rely on Play services work only on a physical device.

Use the chat panel to request fixes or new screens. Open the Code tab if you want to inspect or lightly edit the generated Kotlin. When the result matches your idea, move to installation.

![Laptop and smartphone on a developer desk](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Step 3: Install on a physical device over USB

You need a Chrome or Edge browser that supports WebUSB, an Android phone with Developer Options and USB debugging enabled, and a USB cable. In the preview panel click Install on Device. Select the phone from the browser’s USB picker. The APK transfers, installs, and launches.

No separate ADB installation is required. This route is useful for testing hardware features the emulator cannot provide. Keep the phone connected while you iterate if you want quick reinstalls.

## Step 4: Run the app through the Play Store personal library

Starting October 13, 2026, Google began rolling out a personal library inside the Play Store. Eligible users (18 or older in select markets including the United States) can launch AI Studio Android apps on their own devices with only a standard Google account. No $25 Play developer fee is required for this private path. The apps stay out of the public catalog, appear only in “Your personal library,” and are not reviewed by Google Play.

Sharing with a small group of friends and family is planned for later. If you later want a public listing you can graduate the project to a normal Play Console developer account and the internal testing track.

## Step 5: Publish to the internal testing track (optional)

For wider tester distribution you still need a Google Play Developer account (one-time $25 registration) and a completed developer profile. In AI Studio open Settings > Publish and choose Publish to Play Store. Authenticate, and AI Studio signs the APK with a managed keystore, creates or updates the listing, and pushes to the internal testing track. You receive a link you can share with up to 100 testers. You can later edit the icon, screenshots, and description in the Play Console.

## Add Firebase for AI features and data

Prompt the agent for features that need generative AI, a database, or sign-in. A setup card appears; you can also enable the integration under Settings > Integrations. The agent configures:

- Firebase AI Logic plus App Check so Gemini calls stay authenticated without raw keys in the APK. Debug builds use an automatic debug token; release builds switch to reCAPTCHA Enterprise.
- Cloud Firestore with generated security rules.
- Firebase Authentication with “Sign in with Google.”

Review the generated firestore.rules before you share the app. For deeper Gemini model usage on Android see our guide to [adding Gemini 4 Argon with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KwJwYIqDMLY"
    title="Building an Android app in AI Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Start with a narrow scope. A single-screen tracker or calculator finishes faster and is easier to debug than a multi-feature app. Mention local storage or AI explicitly if you need those capabilities. After the first build, download the ZIP and open it in Android Studio if you want full IDE tooling, baseline profiles, or custom Gradle changes.

Watch the emulator limitations. Anything that needs the camera or Bluetooth must be tested on a real device. Because the projects are client-side only, plan for data that can live on the device or in Firestore. Monitor any Firebase usage against free-tier quotas before you scale.

If the agent produces unexpected UI, paste a short correction in chat rather than rewriting the whole prompt. You can also edit files directly in the Code tab and let the agent propagate the change.

## Conclusion

Google AI Studio removes the local toolchain barrier for native Android prototypes. Describe the app, refine it in the browser emulator, install over USB or through the new personal Play library, and optionally add Firebase for secure Gemini calls and data. The result is a real Kotlin and Compose project you can keep iterating or move into Android Studio. For the latest details always check the official AI Studio Android documentation.

## Sources

- Google AI for Developers, Build Android apps in Google AI Studio, updated 2026-10-20: https://ai.google.dev/gemini-api/docs/aistudio-android
- Firebase, Add Firebase to your Google AI Studio app: https://firebase.google.com/docs/ai-assistance/ai-studio-integration
- Android Developers Blog, Build native Android apps in Google AI Studio, 19 May 2026: https://developer.android.com/blog/posts/build-native-android-apps-in-google-ai-studio
- Google for Developers, Building an Android app in AI Studio (video): https://www.youtube.com/watch?v=KwJwYIqDMLY
