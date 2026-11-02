---
title: "How to Add AppFunctions Using Official Android Skills"
description: "Step-by-step guide to integrate the AppFunctions API with the official Android skill so AI agents can discover and run your app features on-device."
pubDate: 2026-11-02T20:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "ai-tools", "gemini"]
noindex: false
---

Android apps can now expose specific features as tools that Gemini and other agents discover and run on the device. AppFunctions turns your app into a local MCP server. The official Android skill for AppFunctions speeds up the setup and keeps the code aligned with current platform rules.

This guide walks through installing the skill, adding the libraries, implementing a function, and verifying it. It builds on the basic AppFunctions overview. See our earlier post on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/) for foundational concepts.

## Why Use the Official Skill

The AppFunctions skill lives in the android/skills repository. It supplies KDoc patterns, service entry points, and migration steps from earlier alpha versions. Agents that load the skill produce type-safe code and correct manifest entries on the first pass.

Install it with Android CLI so any coding agent—Gemini, Claude, Codex, or Antigravity—can access the guidance.

```
android skills add appfunctions
```

After installation, prompt your agent with “Use the AppFunctions skill to add a create-task function” and it follows the current alpha10 patterns.

![Developer working on Android code with AI assistance](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Project Requirements

AppFunctions require compileSdk 36 or higher. Target Android 16 (API 36) devices for full support. The Jetpack library handles older devices gracefully by returning null from AppFunctionManager.

Add these dependencies to your module build.gradle.kts:

```
dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha10")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha10")
}
```

Enable KSP in the project-level build file if it is not already present. Sync the project before generating code.

## Implement a Basic Function

Create an abstract service class annotated with @AppFunctionServiceEntryPoint. Inject your repository and mark the public method with @AppFunction.

```
@RequiresApi(36)
@AndroidEntryPoint
@AppFunctionServiceEntryPoint(
    serviceName = "TaskAppFunctionService",
    appFunctionXmlFileName = "task_app_function_service",
)
abstract class BaseTaskAppFunctionService : AppFunctionService() {
    @Inject internal lateinit var taskRepository: TaskRepository

    /**
     * Creates a new task.
     * @param createTaskParams Title and optional content.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createTask(createTaskParams: CreateTaskParams): Task =
        withContext(Dispatchers.IO) {
            // repository logic here
        }
}
```

Set isDescribedByKDoc = true so the agent reads the parameter descriptions from KDoc. Use suspend functions for any work that might block the main thread.

The KSP compiler generates the concrete service class and the XML schema. Register both in your AndroidManifest.xml with the BIND_APP_FUNCTION_SERVICE permission and the app_metadata property.

## Test and Verify

List registered functions on a connected device:

```
adb shell cmd app_function list-app-functions | grep --after-context 10 your.package
```

Execute one directly:

```
adb shell "cmd app_function execute-app-function \
  --package com.example.app \
  --function 'com.example.app.BaseTaskAppFunctionService#createTask' \
  --parameters '{\"createTaskParams\": {\"title\": \"Buy milk\"}}'"
```

For end-to-end checks, install the official AppFunctions testing agent from GitHub and interact with it in Gemini Developer Mode.

![Mobile app development workflow on a laptop](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Tips for Production

Disable functions by default with isEnabled = false when they depend on user login or feature flags. Enable them at runtime with AppFunctionManager.setAppFunctionEnabled once the condition is met.

Limit exposed actions to non-sensitive operations. Require explicit confirmation inside your app for any delete or payment step. Agents may route queries through cloud models, so avoid sending private data that the user has not already shared.

Update the skill regularly:

```
android skills update appfunctions
```

The skill includes migration rules from alpha09 to the entry-point architecture used in alpha10.

## Conclusion

AppFunctions lets agents act inside your app without launching the UI. The official Android skill reduces setup time and keeps implementations aligned with platform changes. Start with one high-value function, verify it with adb, then expand as the Connected Apps Platform preview opens production access.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/UsqDEfyOH2E"
    title="Integrate your app with the Android intelligence system"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Add the AppFunctions API to your app](https://developer.android.com/ai/appfunctions/add-appfunctions) — Android Developers
- [Overview of AppFunctions](https://developer.android.com/ai/appfunctions) — Android Developers
- [Implement AppFunctions skill](https://github.com/android/skills/tree/main/device-ai/appfunctions) — android/skills
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E) — Android Developers
