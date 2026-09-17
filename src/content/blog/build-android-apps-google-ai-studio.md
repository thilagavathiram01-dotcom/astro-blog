---
title: "How to Build a Native Android App in Google AI Studio"
description: "A practical walkthrough of Google AI Studio Build mode: prompt a Kotlin and Jetpack Compose app, test it in the cloud emulator, install it over USB, and publish an internal Play test."
pubDate: 2026-09-17
tags: ["ai-tools", "android", "tutorials"]
heroImage: "/images/build-android-apps-google-ai-studio.svg"
---

Google AI Studio can now generate a **native Android app** from a written prompt. The output is a Kotlin and Jetpack Compose project, not a wrapped web page. You preview it in a cloud Android emulator inside the browser, iterate in chat, install the APK on a phone over USB, and optionally send an internal test build to Google Play.

This guide follows Google's official Build-mode documentation and the Android Developers announcement from Google I/O 2026. It is a user workflow, not a claim that every idea becomes a production Play listing in one click.

## What you get (and what you do not)

When the agent finishes a build, AI Studio creates a standard Gradle project with:

- Kotlin DSL `build.gradle.kts` files
- Jetpack Compose UI and Material 3 theming
- A single-activity, single-module architecture with ViewModels and data classes
- Manifest, strings, and other Android resources
- Dependencies pulled from Maven and Google repositories as the agent needs them

Official limits matter as much as the feature list:

- Apps are **client-side only**. There is no generated server runtime, so secrets management, multiplayer backends, Firebase, and Google Workspace APIs are out of scope in this path.
- Only **Kotlin + Compose**. Java, XML layouts, NDK / C++, Wear OS, and Android TV are not supported.
- Export is a **ZIP download**. GitHub export is not available for Android projects in the current docs.
- The in-browser emulator cannot use camera capture, NFC, Bluetooth, or real GPS. Play services features such as Google Sign-In and Maps need a physical device.

Treat AI Studio as a fast prototype bench. Hand the ZIP to Android Studio when you need sensors the emulator cannot prove, multi-module structure, or team tooling.

## Before you start

You need:

- A Google account and access to [Google AI Studio](https://aistudio.google.com/apps)
- Chrome or Edge if you plan to install over USB (WebUSB)
- Optional: an Android phone with Developer options and USB debugging
- Optional: a [Google Play Developer account](https://play.google.com/console/signup) (one-time registration fee) if you want an internal test track

You do **not** need the Android SDK, Android Studio, or a local emulator for the first preview.

## Step 1: Write a build plan, not a slogan

Vague prompts produce pretty shells. Official examples work because they name a job and a constraint: "Create a daily task tracker with local storage" or "Build a simple calculator."

Google's own codelab starts in the AI Studio Playground. Ask the model to turn a one-line idea into a single build plan before you leave chat. Include:

- The problem the app solves
- Screens and what each screen must do
- On-device features (local storage, accelerometer, flashlight)
- What to leave out (accounts, payments, cloud sync)

A first-app shape that matches the platform limits is a single-purpose utility: habit tracker, study quiz, event itinerary, shake-to-roll dice, parking-spot saver.

## Step 2: Start Build mode as an Android project

1. Open [Build mode](https://aistudio.google.com/apps) in the left navigation.
2. Choose **Android** in the platform picker (or the **Build an Android app** chip on New App).
3. Paste the plan. Keep the first request one product, not five.
4. Start the build and pick a visual style when AI Studio asks.
5. Wait for the cloud emulator. A first generation can take several minutes.

The Antigravity agent owns the project files. Follow-up chat edits propagate across Gradle, Compose screens, and resources the same way web Build mode edits a web app.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/N4GgGBKnHe4" title="What's new in Android development tools" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Step 3: Test in the browser emulator

The emulator is a Pixel-like device streamed from the cloud. You can tap, scroll, and rotate. When the agent changes code, the app rebuilds and the preview refreshes.

Check these before you celebrate:

- Cold start: does the first screen render without a crash?
- The one feature you asked for: add an item, shake the device simulation if the UI has a manual trigger, save and reopen.
- Errors: if AI Studio shows a **Fix errors** control, use it instead of rewriting the whole prompt.
- The **Code** tab: skim package names and permissions even if you will not edit Kotlin by hand.

If the idea depends on camera, NFC, Bluetooth, or Play services, mark that path as "unproven in the emulator" and move to a phone.

## Step 4: Install on a physical phone with WebUSB

Google documents in-browser ADB over WebUSB. You do not install platform-tools locally.

1. Enable Developer options (tap Build number seven times) and turn on **USB debugging**.
2. Use a USB cable. Prefer Chrome or Edge.
3. In the preview panel, choose **Install on Device** (codelab wording: Install via USB).
4. Pick the phone in the browser USB picker and allow debugging on the device.
5. Wait for the APK to install and auto-launch.

Reinstall after each useful iteration. Sideloading is the right check for sensors and Play services. It is not a substitute for Play policy review if you later ship publicly.

## Step 5: Internal Play testing (optional)

From AI Studio you can publish to the Play Console **internal testing** track (up to 100 testers in the Gemini API docs).

Prerequisites Google lists:

- A Play Developer account
- A completed developer profile

Then:

1. Open **Settings > Publish** in AI Studio.
2. Choose **Publish to Play Store**.
3. Authenticate with the same Google account that owns the Play Console.
4. Let AI Studio sign the APK with its managed keystore, create or update the listing, and upload the internal track.
5. Share the tester link AI Studio returns. Polish icon, screenshots, and store text later in Play Console.

Internal test is not production launch. Do not treat the managed keystore as a reason to skip your own signing plan if the app will leave this prototype path.

## Step 6: Take the project into Android Studio

When you need multi-module code, real CI, or APIs Build mode cannot generate:

1. Download the project **ZIP** from the preview panel.
2. Open it in Android Studio.
3. Let Gradle sync, then run on a local emulator or device.
4. Continue with Gemini in Android Studio or any agent that can use [Android CLI](https://developer.android.com/tools/agents/android-cli).

That handoff is the intended ceiling for this workflow: browser for the first running binary, Studio for everything that must survive review.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/aqmpZocmR8o" title="Developer Keynote (Google I/O 2026)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prompt patterns that stay inside the product

Good first builds stay on-device and single-module:

- Daily task list with local storage
- Calculator or unit converter
- Shake-to-roll dice using the accelerometer (prove on a phone)
- Flashlight or SOS blink using CameraManager (phone only)
- Level / bubble using tilt sensors (phone only)

Avoid first prompts that demand Firebase Auth, Maps in the cloud emulator, payments, or Wear complications. Google has said Firebase integrations for this Android path are still expanding; the current platform notes say those backends are not available in generated Android apps.

## Conclusion

Google AI Studio Build mode is useful when you want a **running Compose APK** without installing the SDK first. The reliable loop is: write a narrow plan, generate as Android, break the emulator preview on purpose, install over USB for hardware, and download the ZIP the moment you outgrow a single module.

If the control you need is missing, check the official limitations before you fight the agent. Camera, Play services, and servers are not emulator bugs. They are the boundary of this product.

## Sources

- [Build Android apps in Google AI Studio](https://ai.google.dev/gemini-api/docs/aistudio-android) — Gemini API documentation (updated 18 August 2026)
- [Build apps in Google AI Studio](https://ai.google.dev/gemini-api/docs/aistudio-build-mode) — Gemini API documentation
- [Build native Android apps in Google AI Studio](https://android-developers.googleblog.com/2026/05/build-android-apps-google-ai-studio.html) — Android Developers Blog (19 May 2026)
- [Build and publish your first Android app with AI Studio](https://codelabs.developers.google.com/build-with-ai/build-and-publish-android-app-with-ai-studio) — Google Codelabs
- [Google AI Studio news from Google I/O 2026](https://blog.google/innovation-and-ai/technology/developers-tools/google-ai-studio-io-2026/) — Google Blog (19 May 2026)
- [Create a project with AI](https://developer.android.com/studio/gemini/create-a-new-project-with-ai) — Android Studio documentation
