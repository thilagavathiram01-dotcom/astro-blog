---
title: "Migrate iOS, Flutter & React Native Apps in Android Studio Rabbit 3"
description: "Step-by-step guide to the Migration Assistant in Android Studio Rabbit 3 Canary. Convert iOS, Flutter, or React Native projects to Kotlin and Jetpack Compose."
pubDate: 2026-10-24T12:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 3 Canary 1, released on October 22, 2026, introduces a Migration Assistant. It converts existing iOS, Flutter, or React Native projects into native Kotlin and Jetpack Compose Android apps through an agentic workflow inside the New Project Wizard.

You select a source folder. The agent analyzes the codebase, maps features to Android equivalents, converts assets such as storyboards or SVGs, and generates a functional Android project that follows Jetpack best practices. Official documentation describes Autonomous and Guided modes, along with validation options that use Journeys or leave checks to you.

This guide walks through the exact steps from the Android Studio preview release notes and the cross-platform migration workflow page. The tool produces a starting point. Complex apps still need human review and refinement.

![Developer working across multiple devices and screens](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/uriDDQZWXXw"
    title="Develop faster with AI in Android Studio"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Why the Migration Assistant exists

Porting an iOS-first app or a cross-platform codebase to native Android has traditionally required weeks of manual effort. Developers rewrite UI components in Compose, remap platform APIs, convert design assets, and verify behavior across devices.

The Migration Assistant aims to compress the core transformation into hours. It produces idiomatic Kotlin and Jetpack Compose code. You still handle Android-specific polish such as adaptive layouts, custom animations, and edge-case behavior.

It builds on the agent capabilities already present in Android Studio. Model selection during migration uses the same Model Assignment settings available for other agent tasks. For details on assigning different models to different feature categories, see the guide on [Assign Different AI Models in Android Studio Rabbit 3](/blog/assign-ai-models-android-studio-rabbit-3/).

## Requirements and setup

Install Android Studio Rabbit 3 Canary 1 or a later Canary build. Download it from the Android Studio preview page. If you already run a Canary channel install, open Help > Check for Updates (or Android Studio > Check for Updates on macOS).

Sign in with a Google account and enable Gemini features. The Migration Assistant relies on the built-in agent. You can select which model the agent uses for the migration under Settings > Tools > AI > Model Providers.

Your source must be an accessible iOS (Xcode project), Flutter, or React Native codebase. The output is a standard Android Gradle project that targets Kotlin and Jetpack Compose.

## Start the migration

Open Android Studio. From the Welcome screen choose New Project, or use File > New > New Project from the menu.

In the New Project window, select **Migrate to New Project** from the left template pane.

Click **Select Folder** and browse to the root directory of your existing iOS, Flutter, or React Native project.

Under **Migration Strategy**, choose one of the two options:

- **Autonomous Migration**: The agent runs the full process end-to-end without pausing for human input.
- **Guided Migration**: The agent stops after each major step and waits for your direction before continuing.

Under **Validation Strategy**, select:

- **Journeys for Android Studio**: The agent uses the Journeys feature to exercise critical user flows while it works.
- **Manual Validation**: The agent only confirms that the project builds successfully. You define and review user journeys yourself.

Use the text field at the bottom to supply additional context. Describe important features, preferred libraries, design constraints, or known platform differences. You can also attach images or Android skills that give the agent more guidance.

Select the model you want the agent to use from the dropdown of models you have enabled. Then enter the standard new-project information such as package name and minimum SDK version. Click **Finish** to start.

The agent opens in the Agent tool window. You see progress across task planning, code transformation, and compilation checks.

![Laptop and smartphone showing code and app interfaces side by side](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Monitor the agent and review the result

Track the agent’s progress in the Agent window. In Guided mode, respond to questions when the agent pauses. It builds the project at several points during the process to catch errors early.

When the migration finishes, open the generated Android project and run it on an emulator or device. Review the main user journeys yourself. Even if you selected Journeys validation, a manual pass catches issues the agent may have missed.

Apps with heavy custom native modules, complex state management, or platform-specific integrations often need further edits. Treat the output as a strong starting point rather than a finished product.

![Mobile development workspace with multiple phones and a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

Begin with a smaller, well-structured source project while you learn the workflow. Autonomous mode works well for straightforward apps. Guided mode gives more control when the source uses unusual architecture or contains substantial platform code.

Write clear instructions in the additional context field. Mention features that must map exactly, UI patterns you want preserved, or libraries the agent should prefer on Android.

After the migration completes, use the standard Android Studio toolkit. Open Compose Previews, run Lint, and exercise the app in the emulator. You can also set up Compose Preview Screenshot Testing on the new project for visual regression checks.

Once the converted app builds cleanly, Rabbit 3 lets you upload test releases directly to Google Play Console test tracks from the Generate Signed App Bundle flow. Select the Publish for Testing option at the end of that flow. You need a Google Play Console account to use this step.

## What to expect

The Migration Assistant is currently available only in the Rabbit 3 Canary channel. Features can still change before they reach a stable release. Check the official Android Studio preview release notes for the latest status.

Teams that maintain separate iOS and Android codebases, or that ship cross-platform apps and later want a native Android version, can use the tool to accelerate feature parity. Always review generated code, test thoroughly, and apply Android-specific refinements before release.

## Sources

- [Release notes for Android Studio preview](https://developer.android.com/studio/preview/features)
- [Perform cross-platform app migrations](https://developer.android.com/tools/agents/workflows/app-migrations)
- [Android Studio Rabbit 3 Canary 1 now available](https://androidstudio.googleblog.com/2026/10/android-studio-rabbit-3-canary-1-now.html)
