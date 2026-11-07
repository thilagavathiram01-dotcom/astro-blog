---
title: "Connect Your Android App to Gemini and Search"
description: "Step-by-step guide to preparing your Android app for the Connected Apps Platform so users reach it from Gemini and Google Search."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "developer"]
noindex: false
---

Users no longer only open apps and tap buttons. They state goals in Gemini or Search and expect the system to complete multi-step tasks. At the Android Developer Summit on November 5, 2026, Google detailed how the Android intelligence system and Connected Apps Platform let your app participate in those flows.

This guide shows what changed, how Android MCP and AppFunctions fit, and the practical steps to prepare your app today. It builds on the existing AppFunctions foundation.

![Close-up of a smartphone screen showing AI app icons including ChatGPT, Grok, Gemini and Meta AI](https://images.unsplash.com/photo-1746286720984-72f386e1872e?auto=format&fit=crop&w=800&q=80)

## What the Android intelligence system does

The Android intelligence system connects AI agents with apps while protecting user data. It supports two modes:

- **Prompted assistance**: The user asks an agent to finish a goal, such as checking a calendar, booking a ride, and messaging an ETA. The agent calls tools across apps.
- **Proactive assistance**: The system surfaces suggestion chips on the lock screen, in notifications, or on the keyboard based on context.

Google recommends Android MCP (powered by the AppFunctions Jetpack library) for on-device execution. Remote MCP servers handle cross-platform cases. Agents can fall back to the Computer Control framework when no dedicated tool exists.

Use Android MCP when the action needs local data, device sensors, end-to-end encryption, or must run without a network hop. Use a remote MCP server when the same capability should work on iOS or the web.

## Connected Apps Platform overview

The Connected Apps Platform lets developers expose tools so users can complete actions inside Gemini and Search. Google introduced it so high-intent users can act without leaving the conversation.

You can start testing locally with Gemini Apps Developer Mode. Production access currently runs through a preview program with limited capacity for selected apps in supported categories. Broader self-serve access is planned later. Register interest via the official form linked from developer.android.com and developers.google.com/connected-apps.

Live examples already include partners such as Adobe, Experian, Localiza, and Peloton in the Gemini app, with Search support following.

## How Android MCP relates to AppFunctions

Android MCP is the on-device path. AppFunctions is the Jetpack library and platform API that implements it. If you already followed our earlier guide on [preparing an app for AppFunctions agents](/blog/android-appfunctions-agents/), you have the core pieces: annotated functions, KDoc metadata, and the generated schema the OS indexes.

The November update makes the connection explicit. Apps that register functions via AppFunctions can surface in Gemini and Search once accepted into the Connected Apps preview. The same functions serve both in-app agents (via ML Kit Agentic APIs) and system surfaces.

Gemini Nano 4 adds function calling on device. ML Kit’s new Agentic API handles the orchestration loop, conversation history, and guardrails so you do not write the agent runtime yourself.

## Step-by-step preparation

### 1. Confirm baseline requirements

Target Android 16 (API 36) or higher. Add the current AppFunctions Jetpack artifacts. Check the release page for the latest alpha, because APIs remain experimental.

Opt into the AICore Developer Preview if you want to test new Gemini Nano capabilities.

### 2. Expose a small, high-value set of functions

Start with one or two actions a user would request in natural language: create a task, add a calendar event, search notes, or add items to a list. Annotate them with `@AppFunction`, provide clear KDoc, and return structured results. Avoid dumping entire databases or destructive actions without confirmation.

Install the official AppFunctions skill so agents in Android Studio or the CLI can generate and refine the code:

```bash
android skills add appfunctions
```

### 3. Test registration and execution locally

Use ADB to confirm the OS indexes your functions:

```bash
adb shell cmd app_function list-app-functions
```

Run the official sample agent or the testing tools referenced in the AppFunctions docs. For Connected Apps, use Gemini Apps Developer Mode to verify tool calls end-to-end before applying for the preview.

### 4. Decide between Android MCP and remote MCP

Map each capability:

- Local only (device sensors, private local data, low latency) → Android MCP / AppFunctions.
- Cross-platform or shared backend → remote MCP server.

You can combine both. Agents prefer the fastest reliable tool.

### 5. Prepare for the Connected Apps preview

Create a public app card, link your Play listing, and submit through Google Connected Console. Upload a bundle that includes the AppFunctions schema. Preview testing happens on-device before any production publish.

Review the Connected Apps MCP developer guide for OAuth 2.1 requirements if you also expose a remote server.

![Smartphone showing AI text while tucked in a jeans pocket](https://images.unsplash.com/photo-1763110305836-17790330be78?auto=format&fit=crop&w=800&q=80)

## Bring intelligence inside the app as well

The same summit covered on-device agents. Use ML Kit GenAI Prompt API and the new Agentic API with Gemini Nano 4 to run multi-step workflows entirely on the device. Pair them with LiteRT in Google Play services for custom models (this also shrinks your APK).

For hybrid flows, Firebase AI Logic lets you call cloud Gemini models while falling back to on-device inference. Protect the cloud path with Firebase App Check and spend caps.

Agents can now return native Jetpack Compose UI via the A2UI renderer instead of plain text. This keeps the experience inside your design system.

## Tips for a clean rollout

- Keep the function catalog small. Agents chain tools; a focused set of well-described actions outperforms a large vague list.
- Reuse the same business logic your UI already calls. Do not maintain a second weaker implementation.
- Document every parameter and possible exception in KDoc. That text becomes agent metadata.
- Test on real devices in the beta program. Features shown in ADS sessions are not guaranteed on every stable release yet.
- Monitor the official Android Developers Blog and the Connected Apps documentation for API stabilizations.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-4G-4w9FKDw"
    title="Extend your app to Gemini and Search with the Connected Apps Platform"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Android intelligence system turns Gemini and Search into entry points for real work inside your app. Prepare by implementing AppFunctions for Android MCP, testing locally with Gemini Developer Mode, and applying for the Connected Apps Platform preview. At the same time, add on-device agents with ML Kit so users get value even before system-level integration goes wide.

Start with one high-value function this week. When the preview expands, your app will already speak the language agents expect.

## Sources

- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog, November 5, 2026
- [Connected Apps Platform](https://developers.google.com/connected-apps) — Google for Developers
- [Create and manage Connected Apps using AppFunctions and Android MCP](https://developer.android.com/ai/appfunctions/create-manage-connected-apps) — Android Developers
- [Overview of AppFunctions](https://developer.android.com/ai/appfunctions) — Android Developers
- [Extend your app to Gemini and Search with the Connected Apps Platform](https://www.youtube.com/watch?v=-4G-4w9FKDw) — Android Developers (YouTube)
