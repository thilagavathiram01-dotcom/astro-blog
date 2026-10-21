---
title: "Add AppFunctions to Your Android App: Step-by-Step"
description: "Learn how to integrate the AppFunctions API so Gemini and on-device agents can call features in your Android app."
pubDate: 2026-10-21T10:30:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "ai-tools", "developer"]
noindex: false
---

AppFunctions let Android apps expose structured capabilities that on-device agents such as Gemini can discover and execute. Instead of navigating your UI, an agent calls a typed function and receives a result.

The feature requires Android 16 (API 36) or higher and the Jetpack AppFunctions library. Gemini integration remains in private preview with trusted testers, yet you can implement and test the API today.

This guide walks through dependency setup, function implementation, manifest registration, verification, and security considerations using the current 1.0.0-alpha10 library.

## Why AppFunctions Matter

AppFunctions act as the mobile counterpart to tools in the Model Context Protocol. Your app becomes an on-device server of callable tools. Authorized callers with the EXECUTE_APP_FUNCTIONS permission can list available functions, read their metadata, and invoke them.

Common examples include creating a task, searching notes, or sending a message. The OS indexes the functions so agents consider them alongside remote tools when fulfilling user requests.

![Person holding an Android phone showing app icons](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Add Dependencies and Configure KSP

Set `compileSdk` to 36 or higher. Add the AppFunctions library and its KSP compiler to your module-level `build.gradle.kts`:

```kotlin
dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha10")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha10")
}
```

Apply the KSP plugin in the same module. The library handles backward compatibility and returns null from `AppFunctionManager.getInstance()` on unsupported devices.

You can also install the official AppFunctions Android skill with `android skills add appfunctions` so Gemini in Android Studio or other agents can generate the boilerplate.

## Implement the Function Logic

Create an abstract class that extends `AppFunctionService` and annotate it with `@AppFunctionServiceEntryPoint`. Inject your repositories with Hilt or your preferred DI framework.

```kotlin
@RequiresApi(36)
@AndroidEntryPoint
@AppFunctionServiceEntryPoint(
    serviceName = "TaskAppFunctionService",
    appFunctionXmlFileName = "task_app_function_service"
)
abstract class BaseTaskAppFunctionService : AppFunctionService() {
    @Inject internal lateinit var taskRepository: TaskRepository

    /**
     * Creates a task based on the supplied parameters.
     * @param createTaskParams Title and content for the new task.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createTask(
        createTaskParams: CreateTaskParams
    ): Task = withContext(Dispatchers.IO) {
        if (createTaskParams.title == null && createTaskParams.content == null) {
            throw AppFunctionInvalidArgumentException("Title or content should be non-null")
        }
        val id = taskRepository.createTask(
            createTaskParams.title,
            createTaskParams.content
        )
        taskRepository.getTask(id)?.toTask()
            ?: throw AppFunctionElementNotFoundException("Task not found for ID = $id")
    }
}
```

Declare parameter and return types as data classes annotated with `@AppFunctionSerializable`. Functions run on the main thread by default, so long-running work must use `suspend` and switch dispatchers. Setting `isDescribedByKDoc = true` embeds the KDoc into the metadata that agents read.

## Register the Service in the Manifest

KSP generates the concrete service class and the XML schema. Declare the service and the app metadata property in `AndroidManifest.xml`:

```xml
<service
    android:name=".TaskAppFunctionService"
    android:permission="android.permission.BIND_APP_FUNCTION_SERVICE"
    android:exported="true"
    tools:targetApi="36">
    <property
        android:name="android.app.appfunctions.schema"
        android:value="app_functions_schema.xsd" />
    <property
        android:name="android.app.appfunctions.v2"
        android:value="task_app_function_service.xml" />
    <intent-filter>
        <action android:name="android.app.appfunctions.AppFunctionService" />
    </intent-filter>
</service>
<property
    android:name="android.app.appfunctions.app_metadata"
    android:resource="@xml/app_metadata" />
```

Provide a short description of your app’s capabilities and operational patterns in `res/xml/app_metadata.xml` so agents understand when to choose your tools.

![Developer coding on a laptop with dual monitors](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Gate Functions at Runtime

Some features should stay disabled until a user signs in or meets a condition. Mark the function with `isEnabled = false` and toggle it later:

```kotlin
suspend fun onFeatureEnabled(context: Context) {
    AppFunctionManager.getInstance(context)
        ?.setAppFunctionEnabled(
            BaseTaskAppFunctionServiceIds.CREATE_TASK_ID,
            AppFunctionManager.APP_FUNCTION_STATE_ENABLED
        )
}
```

The compiler generates the `*Ids` constants. Catch exceptions on first launch because indexing may not finish immediately.

## Verify the Integration

List registered functions with:

```bash
adb shell cmd app_function list-app-functions | grep --after-context 10 your.package.name
```

Execute one directly:

```bash
adb shell "cmd app_function execute-app-function \
  --package com.example.app \
  --function 'com.example.app.BaseTaskAppFunctionService#createTask' \
  --parameters '{\"createTaskParams\": {\"title\": \"Buy milk\"}}'"
```

Install the official testing agent from the android/appfunctions GitHub repository for interactive checks. You can also ask Gemini in Android Studio to act as a caller once the AppFunctions skill is installed.

If you already use Android CLI skills with agents, the same `android skills` workflow accelerates AppFunctions work. See our earlier post on [Android CLI skills for any agent](/blog/android-cli-skills-any-agent/).

## Security and Design Tips

- Expose only actions that benefit from natural language (creating items, searching, summarizing).
- Keep access narrow. Return only the data required for the request.
- Avoid highly sensitive data such as passwords or full financial details.
- Require explicit confirmation inside your app for destructive operations even if the agent calls the function.
- Write clear KDoc so agents understand parameter constraints and side effects.
- Prefer the Jetpack library over raw platform APIs for type safety and future compatibility.

## Conclusion

AppFunctions give your Android app a structured way to participate in on-device agent workflows. Start with one high-value function, register the service, and verify it with ADB. As Gemini’s integration expands beyond private preview, well-described functions become the preferred path for reliable cross-app automation.

Update the library when newer alphas appear and use the official skill for migrations from earlier versions.

## Sources

- Add the AppFunctions API to your app: https://developer.android.com/ai/appfunctions/add-appfunctions
- Overview of AppFunctions: https://developer.android.com/ai/appfunctions
- AppFunctions samples: https://github.com/android/appfunctions
- Android skills library: https://developer.android.com/tools/agents/android-skills

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-PsFV6TpRU"
    title="How to make your Android app smarter with AppFunctions API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
