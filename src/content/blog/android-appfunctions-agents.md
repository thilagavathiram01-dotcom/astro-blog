---
title: "How to Prepare Your Android App for AppFunctions Agents"
description: "A practical guide to Android AppFunctions: expose on-device tools for AI agents on Android 16, using the Jetpack library, KDoc, and official testing tools."
pubDate: 2026-09-16
tags: ["android", "ai-tools", "tutorials"]
heroImage: "/images/android-appfunctions-agents.svg"
---

Assistants on Android are starting to call apps the way they already call server-side tools. **AppFunctions** is the platform API that makes that possible. Instead of opening a screen and tapping through a flow, an authorized agent can discover a typed function in your app, pass structured arguments, and get a structured result back on the device.

This guide is for Android developers who want to prepare an app now. It follows official Android documentation. Gemini integration with AppFunctions was still a **private preview with trusted testers as of May 2026**. The API itself is available to implement and test on **Android 16** (API 36) and higher.

## What AppFunctions actually is

AppFunctions is an Android platform API plus a [Jetpack library](https://developer.android.com/jetpack/androidx/releases/appfunctions). Google describes it as the mobile equivalent of a tool in the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro).

The difference that matters for product work:

- A typical MCP server lives off-device and needs a network hop.
- An AppFunction is an OS-level hook. It runs **locally**, against the app state you already have.

Your app behaves like an on-device MCP server. The platform indexes the functions. Callers with the `EXECUTE_APP_FUNCTIONS` permission can discover and execute them. Those callers can include agents, other apps, and assistants such as Gemini when they are allowed on that device.

AppFunctions is still an **experimental preview**. Google says only a limited set of apps and system agents can use the full pipeline while quality is evaluated. You can still implement functions, generate schemas, and verify registration with ADB.

## When this is worth building

Use AppFunctions when a user request maps to a discrete action your app already performs without a full UI session.

Official examples include:

- **Tasks:** "Remind me to pick up my package at work today at 5 PM"
- **Media:** "Create a playlist of the top jazz albums from this year"
- **Cross-app work:** find a recipe in email, then add ingredients to a shopping list
- **Calendar:** add an event from a spoken date and time

The Apps Experience Program materials also list messaging, notes, fitness tracking, shopping, travel, and device tools as categories where exposing at least one relevant function is the expected integration.

Skip this work if the only valuable path is a visual editor, a game loop, or anything that cannot be expressed as a typed function with a clear success or failure result.

## How the runtime flow works

The documented path is short:

1. You declare functions with annotations in Kotlin.
2. The Jetpack annotation processor writes an XML schema that lists those functions.
3. The OS indexes that schema.
4. An agent reads metadata (including KDoc) and chooses a function.
5. The agent executes the function with parameters and handles the result or a typed exception.

You do not need to check whether the device supports AppFunctions inside every function. The Jetpack `AppFunctionManager` path handles feature detection. Callers that query another package must hold `EXECUTE_APP_FUNCTIONS`.

## Step-by-step: add AppFunctions to an app

### 1. Target Android 16 and add the library

AppFunctions requires API 36. Add the current Jetpack artifacts shown in the official add-AppFunctions guide. As of the docs used for this article, that is the `1.0.0-alpha10` line:

```kotlin
dependencies {
  implementation("androidx.appfunctions:appfunctions:1.0.0-alpha10")
  ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha10")
}
```

Use KSP if the project has Kotlin sources. Alpha versions can change. Confirm the version on the [AppFunctions Jetpack release page](https://developer.android.com/jetpack/androidx/releases/appfunctions) before you ship a branch.

In `1.0.0-alpha10`, Google introduced a compile-time `@AppFunctionServiceEntryPoint` setup. It replaces older `AppFunctionConfiguration.Provider` wiring. If you already prototyped on `alpha09` or earlier, use the AppFunctions agent skill in Android Studio rather than hand-editing every file.

### 2. Expose a service entry point

Official samples use an abstract `AppFunctionService` subclass annotated with `@RequiresApi(36)` and `@AppFunctionServiceEntryPoint`. That annotation names the generated service and the XML file the OS will index.

Keep the service thin. Inject a repository. Put business rules in the same layer your UI already uses. Agents should not get a second, weaker implementation of "create task."

### 3. Annotate one high-value function

Start with a single action you can describe in one sentence: create a task, add a calendar event, search notes, add cart items.

Mark the function with `@AppFunction(isDescribedByKDoc = true)`. Mark request and response data classes with `@AppFunctionSerializable(isDescribedByKDoc = true)`. Write KDoc on the function and every property. That text is metadata for the agent, not leftover comments.

A useful function:

- Has a stable purpose
- Accepts structured fields, not a blob of free text when you already know the fields
- Returns an object the agent can read (id, title, status)
- Throws a documented AppFunctions exception when input is invalid or an item is missing

Google's samples use exceptions such as `AppFunctionInvalidArgumentException` and `AppFunctionElementNotFoundException` so the agent can recover instead of guessing.

### 4. Decide what you will not expose

You choose the surface. Do not publish:

- Destructive actions without a confirmation model you can enforce
- Functions that dump private corpora
- Anything that bypasses the same auth checks the UI uses

Local execution is a privacy win compared with a cloud MCP server. It is not a reason to weaken app locks, payments, or account boundaries.

### 5. Verify registration on a device

Google documents command-line checks with:

```bash
adb shell cmd app_function list-app-functions
```

Use the `adb shell cmd app_function ...` family to inspect metadata and execute a function without waiting for a production assistant. There is also an official [AppFunctions sample](https://github.com/android/appfunctions) and a testing-agent app referenced from the add-AppFunctions guide.

If a system assistant cannot see your functions, that is expected during the experimental phase. Limited apps and agents are on the full pipeline. Registration on-device is still the milestone you can complete today.

## Practical example: a task app

Suppose you already have `TaskRepository.createTask(title, content)`.

A first AppFunction should accept a serializable `CreateTaskParams` object, reject empty title and content, write through the repository, and return a public `Task` model. That is the same contract Google shows in the overview snippets.

Then add only the next function an agent would need to finish a job: `listTasks` or `completeTask`. Resist exposing every repository method. Agents chain tools. A small, well-described set beats a large, vague catalog.

If you use Gemini in Android Studio, install the [AppFunctions skill](https://github.com/android/skills/tree/main/device-ai/appfunctions) from the official Android skills repo. It is built for four steps: find candidate features, generate implementation and metadata, tighten KDoc, and produce ADB test commands.

## AppFunctions versus a remote MCP server

Keep both models in your architecture notes.

**AppFunctions**

- Android 16+ only
- Local, low latency, uses current app state
- Indexed by the OS
- Callers need platform permission
- Preview quality; Gemini access is gated

**Remote MCP**

- Works across platforms
- Needs hosting, auth, and network
- Useful for shared backends and multi-device agents
- Does not replace on-device actions that already live in the APK

Google notes that agents may consider remote MCP tools and local AppFunctions together. Your job is to make the local tools the fastest, safest path for actions that already happen on the phone.

## Limits you should treat as facts

- Requires **Android 16 / API 36**.
- Jetpack artifacts are **alpha**; APIs can change.
- Gemini integration was a **private preview** as of May 2026.
- End-to-end assistant access is restricted while the feature is experimental.
- Early Access Program interest can be registered through official Android developer channels if you need the full agentic path before general availability.

Do not promise users that "Gemini will run this function on every phone" until Google documents general availability for that caller.

## Conclusion

AppFunctions is how an Android app becomes a local tool server for authorized agents. Target API 36, add the Jetpack library, expose a small set of well-documented functions through `@AppFunctionServiceEntryPoint`, and prove they are indexed with `adb shell cmd app_function list-app-functions`.

Prepare the contract now. Ship the assistant-facing story when the preview ends and your functions already match the actions users ask for in natural language.

## Sources

- [Overview of AppFunctions](https://developer.android.com/ai/appfunctions) — Android Developers
- [Add the AppFunctions API to your app](https://developer.android.com/ai/appfunctions/add-appfunctions) — Android Developers
- [android.app.appfunctions API reference](https://developer.android.com/reference/android/app/appfunctions/package-summary) — Android Developers
- [Build intelligent Android apps with AppFunctions](https://android-developers.googleblog.com/2026/07/build-intelligent-android-apps-appfunctions.html) — Android Developers Blog
- [AI on Android](https://developer.android.com/ai) — Android Developers
- [Android skills / AppFunctions skill](https://github.com/android/skills/tree/main/device-ai/appfunctions) — android/skills
