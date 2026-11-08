---
title: "How to Integrate Android Apps with Gemini Using AppFunctions"
description: "Step-by-step guide to expose Android app features as tools for Gemini with AppFunctions and Android MCP on Android 16+."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "tutorials", "ai-tools", "developer"]
noindex: false
---

Users now ask Gemini to complete tasks across apps instead of tapping through screens. Android MCP, powered by AppFunctions, lets your app expose selected functions so agents can discover and run them on the device.<grok type="render_inline_citation" citation_id="58" />

This guide shows how to add AppFunctions to an Android app targeting Android 16 or higher. You will set up the Jetpack library, annotate functions, test with ADB, and prepare for Gemini integration through the Connected Apps Platform preview.<grok type="render_inline_citation" citation_id="60" />

## What AppFunctions and Android MCP Do

AppFunctions is a platform API available from Android 16. The accompanying Jetpack library turns annotated Kotlin functions into tools that authorized agents can call. Your app acts like a local MCP server. The system indexes the functions. Agents such as Gemini query the registry and execute the matching function without opening your UI.<grok type="render_inline_citation" citation_id="60" />

Remote MCP servers provide cross-platform reach. Android MCP is preferred when data stays on the device, when you need sensors, or when no server exists. You can use both. Callers need the EXECUTE_APP_FUNCTIONS permission.<grok type="render_inline_citation" citation_id="58" />

Gemini integration remains in private preview for trusted testers. You can implement and test the functions today. Full end-to-end access requires the Connected Apps Platform preview.<grok type="render_inline_citation" citation_id="58" />

![Android developer coding on a laptop with code on screen](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Target SDK 36 or higher and compile SDK 37 or higher. Use the Jetpack library for backward compatibility. Add these dependencies in your module build.gradle:

```
dependencies {
    implementation "androidx.appfunctions:appfunctions:1.0.0-rc01"
    ksp "androidx.appfunctions:appfunctions-compiler:1.0.0-rc01"
}
```

Enable KSP in your project. The latest release is 1.0.0-rc01 as of November 2026.<grok type="render_inline_citation" citation_id="61" />

## Step-by-Step Integration

### 1. Identify candidate functions

Look for actions users often request in natural language: create a note, add a calendar event, search contacts, start a workout, or play a track. Keep the surface small and focused. Document parameters clearly so agents understand limits.<grok type="render_inline_citation" citation_id="59" />

### 2. Annotate a function

Annotate a suspend function with @AppFunction. Set isDescribedByKDoc to true so the KDoc becomes the tool description. Pass an AppFunctionContext when needed.

```
@AppFunction(isDescribedByKDoc = true)
suspend fun createNote(
    context: AppFunctionContext,
    title: String,
    content: String
): Note {
    return noteRepository.create(title, content)
}
```

Write precise KDoc that lists required parameters, optional ones, and any constraints. The annotation processor generates an XML schema that the system indexes.<grok type="render_inline_citation" citation_id="60" />

### 3. Register a service entry point

Create a class that extends AppFunctionService and annotate it with @AppFunctionServiceEntryPoint. Inject dependencies with Hilt or your preferred DI if needed. The service name and XML file name identify your contribution.

```
@RequiresApi(36)
@AppFunctionServiceEntryPoint(
    serviceName = "MyAppFunctionService",
    appFunctionXmlFileName = "my_app_functions"
)
abstract class MyAppFunctionService : AppFunctionService()
```

### 4. Test with ADB

Use ADB commands to list and execute functions without a full agent. This verifies registration and parameter handling.

```
adb shell cmd app_function execute-app-function \
  --package com.example.myapp \
  --function com.example.myapp.MyFunctions#createNote \
  --parameters '{"title":"Test","content":"Hello"}'
```

Check the JSON response. The AppFunctions skill in Android Studio and the official sample agent also help with discovery and evaluation.<grok type="render_inline_citation" citation_id="59" />

## Tips for Reliable Functions

Keep functions idempotent where possible. Return structured results instead of side effects only. Avoid exposing sensitive data unless the user has explicitly opted in. You can enable or disable individual functions at runtime with AppFunctionManager based on user preferences or feature flags.<grok type="render_inline_citation" citation_id="97" />

Document app-level constraints in metadata so agents know when to prefer your tools over others. Test on Android 16+ devices or emulators. Join the AIcore Developer Preview if you also use on-device Gemini Nano models alongside AppFunctions.<grok type="render_inline_citation" citation_id="58" />

![Friendly AI robot assisting with tasks](https://images.unsplash.com/photo-1684369175809-f9642140a1bd?auto=format&fit=crop&w=800&q=80)

## Connect to Gemini via Connected Apps Platform

For production Gemini access, create a Connected App in the Google Connected Console with the Android MCP connection type. Link it to your Play app, upload the bundle, and submit for the preview. Capacity is limited to selected apps in supported categories. Broader self-serve access is planned.<grok type="render_inline_citation" citation_id="96" />

You can prototype locally with Gemini Apps Developer Mode before applying. Watch the Android Dev Summit keynote for the introduction of Android MCP and related intelligent app tools.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

AppFunctions and Android MCP give Android apps a direct path to agent-driven experiences. Start by annotating a few high-value functions, verify them with ADB, and apply for the Connected Apps preview when you are ready for Gemini. The same skills that improve local agent performance also prepare your app for system-wide assistance.

For more on building with Gemini on Android, see our guide to [adding Gemini to Android apps with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

## Sources

- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog, November 5, 2026
- [Overview of AppFunctions](https://developer.android.com/ai/appfunctions) — Android Developers
- [appfunctions Jetpack release notes](https://developer.android.com/jetpack/androidx/releases/appfunctions) — November 4, 2026
- [Analyze, generate, and refine AppFunctions skill](https://developer.android.com/agents/skills/device-ai/appfunctions/skill) — Android Developers
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E) — Android Developers YouTube
