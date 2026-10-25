---
title: "How to Add Firebase to Android Apps in AI Studio"
description: "Step-by-step guide to integrate Firebase Firestore, Auth, and AI Logic into Android apps built in Google AI Studio."
pubDate: 2026-10-25T14:00:00
heroImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "firebase", "ai-tools", "tutorials", "google", "developer"]
noindex: false
---

Google AI Studio now lets you build native Android apps and automatically wire them to Firebase. You describe a feature that needs a database, sign-in, or Gemini calls, and the agent provisions the services, generates the config files, and writes the Kotlin code.

This removes the old manual steps of creating a Firebase project, downloading google-services.json, and wiring SDKs by hand. The result is a client-side Android app that can store data, authenticate users, and call Gemini models securely.


![Developer working on a laptop with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)


## What Firebase services AI Studio adds for Android

When you request backend features, the Antigravity Agent can set up:

- Cloud Firestore for storing and syncing data, with generated Security Rules
- Firebase Authentication with Google Sign-In
- Firebase AI Logic and App Check when the app calls Gemini models

The agent creates google-services.json, firestore.rules, and firebase_applet_config.xml. App Check uses a debug token for emulator and USB testing. Release builds switch to reCAPTCHA Enterprise automatically when you publish to Play.

Android projects remain client-side. There is no server runtime in the generated app. Features that need secrets management or multiplayer still require a separate backend.

## Start a new Android app and request Firebase

1. Open [Google AI Studio](https://aistudio.google.com/apps) and sign in.
2. Switch to Build mode from the left navigation.
3. Select Android in the platform picker.
4. Enter a prompt that mentions data storage, sign-in, or AI features. Example: "Build a shared recipe app that saves favorites in Firestore and uses Firebase AI Logic to suggest meals from ingredients."
5. Click Build. The agent generates the Kotlin and Jetpack Compose project and launches the browser emulator.

When the agent detects the need for Firebase, a setup card appears. Click the settings icon if you want to choose an existing Google Cloud project or location. Then click Enable Firebase.

The agent provisions the services, connects the app, and updates the code. You can continue iterating in the chat panel. Ask it to adjust the data model or the sign-in flow.


![Smartphone and computer monitors showing code](https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80)


## Add Firebase to an existing AI Studio Android app

You do not have to start from scratch. Open the app in Build mode and either:

- Tell the agent: "Add a Firestore database to store user notes" or "Add Firebase AI Logic to summarize text."
- Go to Settings > Integrations and click the Firebase Firestore & Auth tile.

Both paths open the same setup flow. Select or create a project, confirm the location, and enable the integration. The agent adds the necessary files and code.

Review the generated Security Rules. They start as default-deny so users can only access their own data. If you edit rules in the Firebase console, the agent will overwrite them on the next iteration. Prefer asking the agent to change the rules so the updates stay in the project.

## Test the app and install on a device

The browser emulator updates automatically as the agent changes code. It does not support camera, NFC, Bluetooth, or full Google Play services. Location is simulated.

To test on a real phone:

1. Enable Developer Options and USB Debugging on the device.
2. Connect it with a USB cable to a computer running Chrome or Edge.
3. In the AI Studio preview panel, click Install on Device.
4. Select the phone in the WebUSB picker. The APK installs and launches.

For Gemini features, App Check uses the managed debug token during USB installs and emulator previews. Collaborators can test without seeing API keys.

If you have a Google Play developer account, open Settings > Publish and choose Publish to Play Store. AI Studio signs the APK and uploads it to the internal testing track. Up to 100 testers can install it.

Personal apps can also go to your private Play library in supported regions with a standard Google account. Check the Play Store app for the personal library section if the option is not visible yet.

## Shared quota and billing

Firestore databases created by the agent share a no-cost quota group:

- 1 GiB stored data
- 40,000 writes and 50,000 reads per day
- 10 GiB network egress per month

The limits reset daily. No billing account is required to start. When you need more capacity, set up billing in AI Studio under the Projects page, then upgrade the specific database in the Firebase console under Databases & Storage > Firestore.

## Limitations to keep in mind

- Single-activity, single-module projects only
- Kotlin and Jetpack Compose only
- No Wear OS or Android TV
- ZIP download only (GitHub export is not available for Android yet)
- Client-side only; no built-in server for secrets or multiplayer

For more advanced Gemini integration after export, see our guide on [adding Gemini 4 Argon to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ObomOeoP47Y"
    title="How to vibe code Android apps"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

Keep the first prompt focused. Describe one main screen and the data you need to persist. Iterate after the initial build.

Mention "Firebase" or "Firestore" explicitly if the agent does not offer the setup card. You can also enable it from Settings > Integrations at any time.

Test the generated Security Rules with a second Google account before sharing the app. Confirm users cannot read other people's documents.

Export the ZIP and open it in Android Studio when you need custom native modules, more activities, or Play Store production features beyond internal testing.

## Conclusion

Google AI Studio now turns a plain-English description into a native Android app with Firebase already connected. You get Firestore storage, Google Sign-In, and secure Gemini calls without manually configuring projects or embedding API keys.

Start with a focused prompt, enable Firebase when the card appears, test in the emulator, then install over USB or publish for testers. Review the Security Rules and stay within the shared quota while you prototype. When the app needs more, export the ZIP and continue in Android Studio.

## Sources

- [Build Android apps in Google AI Studio](https://ai.google.dev/gemini-api/docs/aistudio-android) — Google AI for Developers
- [Add Firebase to your Google AI Studio app](https://firebase.google.com/docs/ai-assistance/ai-studio-integration) — Firebase documentation
- Official Google for Developers video: How to vibe code Android apps
