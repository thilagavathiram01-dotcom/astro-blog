---
title: "Migrate Views to Compose and Run Journeys in Android Studio Rabbit 3 RC"
description: "Practical steps to migrate views-based Android UIs to Jetpack Compose and run natural-language Journeys tests in Android Studio Rabbit 3 RC."
pubDate: 2026-11-22T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai-tools"]
noindex: false
---

Android Studio Rabbit 3 reached Release Candidate status in mid-November 2026. The RC channel holds the feature set that will ship in the next stable release. Two capabilities stand out for teams still carrying views-based code or writing UI tests by hand: a built-in migration assistant that turns a views project into a functional Kotlin + Jetpack Compose app, and Agentic Journeys that let you describe end-to-end user flows in plain language and let the AI agent execute them on a device or emulator.

Both features live inside the IDE. You do not need new Gradle plugins or build-file changes to start using them. This guide shows the exact sequence to install the RC, run a migration, then create and execute a Journey against the resulting Compose UI.

![Developer coding on a laptop at night with city lights in the background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Switch to the Rabbit 3 RC channel

Open Android Studio. On Windows or Linux choose **Help > Check for Updates**. On macOS choose **Android Studio > Check for Updates**. Select the Beta channel if it is not already active. Accept the Rabbit 3 RC update and restart. The version string in the About dialog should read 2026.2.3 RC 1 or later.

You can keep Rabbit 2 installed side-by-side. Use different install directories so you can compare results before you commit a project to the RC. After the first launch, open your existing views-based project. The IDE may prompt you to update the Gradle wrapper; accept the recommended version (9.7.1 or the version listed for the RC). Sync succeeds without other changes.

## Run the views-to-Compose migration

With the project open, locate the migration entry point. Official release notes state that you can now migrate a project with views-based UI to a Kotlin and Jetpack Compose-based app. The assistant produces a functional project that is ready for testing and verification rather than a partial diff.

Start the assistant from the main menu or the project view (the exact menu label appears under **Refactor** or **Migrate** once the RC is running). Point it at the module that contains your layout XML and activities or fragments. The tool analyzes the existing view hierarchy, generates corresponding Compose code, and wires the new UI into the existing navigation and architecture. It leaves the original XML in place so you can compare side-by-side.

After the run finishes, build the project. Launch it on an emulator or device. The screens that the assistant converted should appear in Compose. Treat this output as a starting point: review generated composables for naming, state hoisting, and Material 3 theming, then replace any remaining view-based fragments one screen at a time. Because the project already builds and runs, you can immediately add Journeys to verify the migrated flows.

![Laptop and smartphone on a desk showing coding software](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Create and run a Journey

Journeys for Android Studio let you describe end-to-end user flows in natural language. The AI agent converts those instructions into actions on a connected device or emulator, verifies expected outcomes, and produces a pass or fail report that includes screenshots. In Rabbit 3 the feature is available directly from the Agent window or from a `.journey.xml` file; earlier Studio Labs steps are no longer required for basic use.

Open the **Agent** window (View > Tool Windows > Agent). Type a request such as: “Create a journey that opens the home screen, taps the first list item, and verifies the detail screen shows the correct title.” The agent writes a `.journey.xml` file under `src/journeysTest/` in your app module. You can also right-click the app module in the Project panel and choose **New > Journey File**.

Open the file. The Design view shows each step as a row. Edit the language so it is unambiguous: name the exact control and state the success condition in the same step. Example:

```xml
<journey name="Open first item">
  <step>Tap the first item in the list on the home screen. The detail screen should open and display the item title.</step>
  <step>Verify the title text matches the item that was tapped.</step>
</journey>
```

Save the file. Click **Run** in the editor toolbar or ask the agent in the Agent window to run the journey. Android Studio builds the app, deploys it to the selected device, and the agent walks through each step. When the run finishes, the Agent window shows the overall result and a link to the full report. The report lists every step, the commands the agent issued, its reasoning, and the screenshots it captured.

You can also run journeys from the command line with Android CLI if you prefer CI integration. For day-to-day work inside the IDE the Agent window or the Run button is sufficient.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Zpi-qJ_bkfs"
    title="Journeys in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that improve reliability

- Write steps that start after the app has launched. The agent launches the app for you.
- Name controls and expected results in the same sentence. Vague phrases such as “select the button” produce more retries.
- Break long flows into separate journey files so a single failure does not hide earlier successes.
- After a migration, run the same journeys you used on the views version. Differences in the report highlight screens that still need manual Compose work.
- Keep a device or emulator selected in the toolbar before you hit Run. The agent uses the current target.

If a step fails, open the report, read the agent’s comment, and refine the language. Journeys are resilient to small layout shifts because the agent uses vision and reasoning, but precise wording still reduces the number of retries.

## What to do next

Rabbit 3 RC gives you a concrete path from a views codebase to a Compose codebase that already builds, plus an AI-driven way to exercise the critical user flows without writing Espresso or Compose UI test code for every happy path. Start with one module, run the migration, add two or three journeys that cover the screens you just converted, and review the reports. Once the RC becomes stable you can promote the same workflows to the rest of the team.

For more on the earlier Journeys experience see the existing guide at [Journeys in Android Studio](/blog/journeys-android-studio-gemini/). Model assignment settings that let you choose different Gemini models for agent tasks are covered in [Assign Different AI Models in Android Studio Rabbit 3](/blog/assign-ai-models-android-studio-rabbit-3/).

## Sources

- Android Studio preview features (Rabbit 3 section): https://developer.android.com/studio/preview/features
- Journeys for Android Studio: https://developer.android.com/studio/gemini/journeys
- Android Studio Release Updates – Rabbit 3 RC 1: https://androidstudio.googleblog.com/2026/11/android-studio-rabbit-3-rc-1-now.html
