---
title: "How to Write End-to-End Tests with Journeys in Android Studio"
description: "Write Android UI tests in plain language with Journeys for Android Studio: enable Studio Labs, create a journey XML, run it on a device, and read Gemini’s step-by-step reasoning."
pubDate: 2026-09-19
tags: ["ai-tools", "android-studio", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
---

Espresso and Compose UI tests still matter when you need deterministic matchers. They also break when a button label moves or a layout reflows. **Journeys for Android Studio** takes a different path: you describe the user path in natural language, and Gemini uses vision plus reasoning to tap, type, and swipe on a real device or emulator.

This guide follows Google’s official Journeys documentation and Studio Labs notes. It covers how to enable the feature, write a journey, target the right build variant, run it from the IDE, and read the results panel when a step fails.

## What Journeys actually does

A **journey** is a set of natural-language steps stored in an XML file. When you run it, Android Studio builds and deploys your app, then asks Gemini what to do on the current screen. Gemini looks at screenshots, chooses taps, text input, or scrolls, and evaluates assertions against what it sees.

Because the model reasons about the *goal* of a step instead of a hardcoded view ID, journeys often survive small layout changes that would flake a traditional instrumented test. Google positions that as the main reason to try them alongside — not instead of — Espresso, Compose tests, and unit tests.

You can run a journey from Android Studio or from the command line with [Android CLI](https://developer.android.com/tools/agents), against a local emulator or a remote Android-powered device.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Zpi-qJ_bkfs" title="Journeys in Android Studio" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Prerequisites

Confirm these before you create a file:

- A current **Android Studio** stable or preview build. Journeys ships as a **Studio Labs** experiment on stable channels (the Labs menu has been available since the Narwhal stable line). Canary builds enable Labs AI features automatically.
- Gemini in Android Studio signed in. Open **View > Tool Windows > Agent** (or click **Agent**) and finish onboarding if you have not already.
- An app module you can install on an emulator or device.
- For journeys that deploy through the generated test suite, plan on **Android Gradle Plugin 9.0.0 or higher**. You can still point a journey at a pre-installed package if you have not upgraded AGP yet.

### Enable Journeys in Studio Labs

On a stable channel:

1. Open **Settings** (or **Android Studio > Settings** on macOS).
2. Open the **Studio Labs** tab.
3. Enable **Journeys for Android Studio**.
4. Apply and restart if the IDE asks you to.

Canary users can skip this; Labs AI features are on by default.

![Android phone on a desk next to a laptop used for app testing](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 1 — Create a Journey Test file

1. In the **Project** panel, right-click the **app** module you want to test.
2. Choose **New > Journey Test**.
3. Enter a name and a short description (for example, “Add item to cart and check empty-state after checkout”).
4. Click **Finish**.

Android Studio writes an XML journey file and opens it. Use **Design** view to edit steps as plain sentences, or **Code** view to edit the XML directly.

The first wizard run also wires a `journeysTest` test suite against the **currently selected build variant**. Remember that if you later switch flavors.

## Step 2 — Write steps Gemini can follow

Assume the app is already in the foreground. Running a journey launches the app for you; do not add “open the app” as step one.

Each step can mix an action and a success check. Official guidance is to be specific about *where* to type and *what* should be true when the step is done.

Good patterns:

- “Tap ‘Dismiss’.”
- “Type ‘celery’ in the search bar at the top of the home screen.”
- “Tap the shopping cart icon to open the cart page. Verify it contains zero items.”
- “Tap Send. The compose screen should close and return you to the inbox.”

Weaker patterns Gemini is more likely to misread:

- “Select the dismiss button”
- “Type celery”
- “Swipe to dismiss” (say the direction and the expected result)

Press **Enter** in Design view to add the next step. If a multi-action sentence keeps failing, split it. Google’s docs note a common error — *Could not successfully complete the action in max allowed attempt* — when one step asks for too many interactions.

### What journeys can and cannot do yet

Supported today:

- Tap UI elements
- Type into text fields
- Swipe or scroll in a direction

Not fully supported, or inconsistent:

- Pinch-to-zoom and other multi-finger gestures
- Long-press
- Double tap
- Rotation and foldable posture changes
- Remembering values across earlier steps
- Accurate counting
- Conditional branching (“if the banner is visible, dismiss it”)

Treat Journeys as coverage for happy-path flows you can describe in a straight line. Keep Espresso or Compose tests for gestures and state machines the model cannot express reliably.

## Step 3 — Point the suite at the right variant

If you change the active variant after creating the journey — for example to `demoDebug` — add it to `targetVariants` in the module `build.gradle.kts`:

```kotlin
android {
    testSuites {
        create("journeysTest") {
            targetVariants += listOf("demoDebug")
        }
    }
}
```

Without that update, the run fails even if the XML looks fine.

## Step 4 — Run the journey

1. Pick a device or emulator in the main toolbar, the same way you run any instrumented test.
2. Open the journey XML.
3. In **Design** view click **Run Journey**. In **Code** view click the gutter **Run 'test'** control next to the journey name.

Studio builds, installs, and talks to Gemini for each step. You can also run journeys from the command line with Android CLI if you already use agents in CI.

### Test a pre-installed package

If the production build is already on the device, or AGP is still below 9.0.0:

1. Use a project that *is* on AGP 9.0.0+.
2. Write the journey.
3. Edit the auto-created run configuration and set `JOURNEYS_CUSTOM_APP_ID` to the target package name.
4. Run that configuration. Steps execute against the installed app instead of the module under test.

![Close-up of an Android emulator and test results on a monitor](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&h=630&q=80)

## Step 5 — Read the results panel

When the run finishes, the Journeys results UI is more than a pass/fail bar:

- The **Tests** list is one row per journey step. Click a step to expand it.
- The **Results** pane shows each action Gemini took, numbered, with the screenshot it used and a short **Reasoning** note.
- Use **Action Taken** plus **Reasoning** when a step misses. Tighten the sentence, add the success criteria, or split the step.

That reasoning trail is the debugging surface. You are not staring at a failed `onView(withId(…))` line; you are reading why the model thought a different button matched the goal.

## Known issues to plan for

Google currently documents these:

- **Gradle configuration cache.** Journeys can pick the wrong file or fail auth when the configuration cache is on. Workaround: set `org.gradle.configuration-cache=false` in `gradle.properties` while you iterate.
- **Permissions.** Journey runs grant all app permissions by default. Do not treat a green journey as proof that your runtime permission UX works.
- **Android 15 “Unsafe App Blocked”.** On API 35 you may see a warning for **AndroidX Crawler**. Choose **Install anyway**, or turn off **Verify apps over USB** in developer options.

Journeys also consume Gemini capacity. Budget that the same way you budget Agent Mode sessions; it is not a free local matcher engine.

## A compact example flow

Imagine a notes app. A first journey might be four steps:

1. “Tap the floating New note button. A blank editor should open.”
2. “Type ‘Grocery list’ in the title field at the top.”
3. “Type ‘Milk and eggs’ in the body and tap Save. You should return to the notes list.”
4. “Verify the list shows a note titled Grocery list.”

Run it on a Pixel emulator. If step 3 fails because Save is an icon, change the text to “Tap the checkmark in the top app bar labeled Save.” Re-run and confirm the screenshot trail matches the editor, then the list.

Keep a separate Espresso test for swipe-to-delete until long-press and multi-touch land in Journeys.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/DiqQrSqHyds" title="From natural language to UI tests: A deep dive into Journeys for Android Studio" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Where Journeys fits in a test plan

Use Journeys for:

- Smoke paths product managers can read without learning matchers
- Regression on flows that change labels more often than structure
- Quick checks on a device farm after a visual refresh

Keep traditional tests for:

- Precise timing, animations, and accessibility traversal
- Unsupported gestures
- Branching logic and numeric assertions
- Offline permission and security cases (journeys grant permissions)

Official feature status still lists Journeys under Studio Labs on the [Gemini features](https://developer.android.com/studio/gemini/features) page. Treat the XML as living documentation, not as a complete replacement for your instrumented suite.

## Conclusion

Journeys let you describe an Android user path in sentences, then watch Gemini tap through the app and explain each move. Enable the Labs flag, create a Journey Test on the app module, write unambiguous steps with success criteria, pin `targetVariants`, and debug from the screenshot-plus-reasoning panel.

Start with one happy path this week. If the results panel shows a wrong tap, tighten the sentence before you add a second journey. That loop is faster than rewriting matchers every time a label moves — and it stays honest about what the model cannot do yet.

## Sources

- [Journeys for Android Studio](https://developer.android.com/studio/gemini/journeys) — Android Developers
- [AI features in Studio Labs](https://developer.android.com/studio/gemini/labs) — Android Developers
- [Gemini in Android Studio features](https://developer.android.com/studio/gemini/features) — Android Developers
- [Get started with Gemini in Android Studio](https://developer.android.com/studio/gemini/get-started) — Android Developers
- [Journeys in Android Studio](https://www.youtube.com/shorts/Zpi-qJ_bkfs) — Android Developers (YouTube)
- [From natural language to UI tests: A deep dive into Journeys](https://www.youtube.com/watch?v=DiqQrSqHyds) — Android Developers (YouTube)
