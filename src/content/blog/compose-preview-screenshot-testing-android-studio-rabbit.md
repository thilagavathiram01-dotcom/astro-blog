---
title: "How to Set Up Compose Screenshot Tests in Android Studio Rabbit"
description: "Step-by-step guide to set up Compose Preview Screenshot Testing in Android Studio Rabbit for visual regression checks with HTML reports."
pubDate: 2026-10-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Visual regressions sneak into Jetpack Compose UIs easily. A padding tweak or color shift looks fine in the preview but breaks the design on devices. Android Studio Rabbit brings Compose Preview Screenshot Testing into the stable channel with full IDE support for reference images, validation, and HTML reports.

This guide walks through the setup and daily use on Android Studio Rabbit 1 (2026.2.1) or later. You need AGP 9.0 or higher and Kotlin 2.2.10 or higher for the best IDE integration.

## What Compose Preview Screenshot Testing Does

The tool turns `@Preview` composables into host-side screenshot tests. You mark previews with `@PreviewTest`, generate reference images, and validate later changes against those baselines. Differences produce an HTML report that highlights pixel changes.

It runs on the host JVM, so no emulator or device is required for the core check. You still use multi-previews for device sizes, dark mode, and font scales.

![Android developer reviewing code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Requirements and Setup

Confirm you run Android Studio Rabbit 1 or a later stable build. Update via Help > Check for Updates. Your project must enable Compose, preferably through the Compose Compiler Gradle plugin.

Add this line to the root `gradle.properties`:

```
android.experimental.enableScreenshotTest=true
```

In the module-level `build.gradle.kts` inside the `android` block:

```kotlin
android {
    experimentalProperties["android.experimental.enableScreenshotTest"] = true
}
```

Add the screenshot plugin. In `libs.versions.toml`:

```toml
[versions]
screenshot = "0.0.1-alpha16"

[plugins]
screenshot = { id = "com.android.compose.screenshot", version.ref = "screenshot" }
```

Apply it in the module `plugins` block:

```kotlin
plugins {
    alias(libs.plugins.screenshot)
}
```

Add the dependencies:

```kotlin
dependencies {
    screenshotTestImplementation(libs.screenshot.validation.api)
    screenshotTestImplementation(libs.androidx.ui.tooling)
}
```

Sync the project. The new `screenshotTest` source set appears under `src`.

## Create Your First Screenshot Test

Place preview functions in the `screenshotTest` source set, for example `app/src/screenshotTest/kotlin/com/example/yourapp/ExamplePreviewScreenshotTest.kt`.

Annotate with `@PreviewTest` and a normal `@Preview`:

```kotlin
package com.example.yourapp

import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.android.tools.screenshot.PreviewTest
import com.example.yourapp.ui.theme.MyApplicationTheme

@PreviewTest
@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    MyApplicationTheme {
        Greeting("Android!")
    }
}
```

You can add multi-preview annotations for light/dark modes or different font scales in the same file. Only functions marked `@PreviewTest` become tests.

## Generate Reference Images

Right-click the gutter icon next to the `@PreviewTest` function and choose **Add/Update Reference Images**. Select the preview variations you want and confirm.

Alternatively run the Gradle task:

```
./gradlew updateDebugScreenshotTest
```

Reference images land in `app/src/screenshotTestDebug/reference`. Commit these images if your team wants shared baselines. Large binary sets may need Git LFS.

## Run Validation and Read the Report

Click the gutter run icon and select **Run 'ScreenshotTests'**. Results appear in the standard Run tool window. Failures open the Screenshot tab that shows Reference, Actual, and Diff side by side.

From the command line:

```
./gradlew validateDebugScreenshotTest
```

The HTML report is written to `{module}/build/reports/screenshotTest/preview/{variant}/index.html`. Open it in a browser to see highlighted differences and metadata.

![Developer comparing visual changes on a monitor](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Tips for Daily Use

Keep reference images updated only for intentional design changes. Review the Diff view before you accept a new baseline. Use `@Preview` parameters such as `uiMode` and `fontScale` to cover more states without extra code.

Raise the heap size if tests fail with out-of-memory errors:

```
android.compose.screenshot.maxHeapSize=4g
```

Scope runs by right-clicking a single file or directory in the Project view. Combine screenshot tests with your existing behavior tests; they catch different classes of bugs.

If you already use Android skills, install the testing-setup skill with `android skills add testing-setup` for guided workflows.

## Conclusion

Compose Preview Screenshot Testing in Android Studio Rabbit gives you fast visual regression checks without leaving the IDE. Set up the plugin once, mark a few key previews, and run the validation after every UI change. The HTML report makes reviews concrete.

For more on agent-powered workflows in the same release, see our guide on [Bring Your Own Agent in Android Studio Rabbit](/blog/android-studio-byoa-agents-rabbit-2/).

## Sources

- [Compose Preview Screenshot Testing](https://developer.android.com/studio/preview/compose-screenshot-testing) — Android Developers
- [Android Studio Rabbit 1 release notes](https://developer.android.com/studio/releases) — Android Developers
- [Screenshot testing with test suites](https://developer.android.com/studio/preview/compose-screenshot-testing-with-testsuites) — Android Developers

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/2L78_eCNDs8"
    title="How to Use the Google's New Screenshot Testing Framework for Compose"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
