---
title: "How to Build On-Device Agents with ML Kit Agentic API"
description: "Step-by-step guide to implementing private multi-turn on-device AI agents using ML Kit's Agentic API powered by Gemini Nano 4."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "gemini", "ai"]
noindex: false
---

Users now expect AI agents to handle multi-step tasks inside Android apps without sending every prompt to the cloud. The ML Kit Agentic API, powered by Gemini Nano 4, makes this practical by running the full agent loop on-device.

This guide shows how to add these workflows to your app. You will set up the library, register tools, and run managed sessions that keep conversation history and enforce limits automatically.

## What the ML Kit Agentic API Does

The Agentic API (com.google.mlkit:genai-agent) sits on top of the GenerativeModel class. The AgentRunner class handles the loop: it observes context, reasons over input, calls registered tools, and checks results until a termination condition is reached.

Gemini Nano 4 adds native function calling. The API auto-executes those functions, stores history in AgentSession, and applies guardrails such as a default maxTurns of 10. Everything stays on the device through Android AICore, so prompts never leave the phone unless your own tools make network calls.

Common patterns include translating natural language into app actions, looking up local records, filtering lists conversationally, and guiding multi-step forms.

![Android phone showing code on screen](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a supported device enrolled in the AICore Developer Preview. Target Android 14 or higher, set minSdk to 26, and use Kotlin 2.3 or later. Add the ML Kit dependency and opt into the preview so Gemini Nano 4 is available.

Check the official ML Kit GenAI documentation for the latest dependency version and preview enrollment steps. Once enrolled, the model runs locally with zero network latency for the reasoning loop.

## Set Up the Agentic API

Add the dependency in your app-level build.gradle:

```
implementation("com.google.mlkit:genai-agent:0.1.0-alpha")
```

Replace the version with the current alpha release from Google’s Maven repository. Sync the project.

Create an AgentRunner with your system instructions and registered tools. Tools are typed Kotlin functions that the model can call. Register them so the runner discovers and executes them automatically.

Start a session:

```
val session = agentRunner.createSession()
val response = session.send("Adjust the photo brightness and save it")
```

The session keeps history in memory. Call session.close() or deleteSession when you finish to free resources.

## Build a Simple In-App Agent

Define a tool that changes a setting:

```
@Tool
fun adjustBrightness(level: Int) {
    // update app state
}
```

Pass the tool list to the AgentRunner constructor along with a system prompt that describes the available actions. The model selects the right function, the API executes it, and the result feeds back into the next reasoning step.

Test with short prompts first. The maxTurns limit stops runaway loops. For longer workflows, raise the limit only after measuring battery and latency impact on real devices.

You can also fall back to direct GenerativeModel access if you prefer to manage tool dispatch yourself. The Agentic API is best when you want the orchestration handled for you.

![Developer workspace with laptop and phone](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Tips for Production Use

Keep tools deterministic and side-effect free where possible. Document each tool clearly so the model chooses correctly. Monitor the number of turns in analytics; most useful agents finish in three to five steps.

Combine with AppFunctions if you want the same tools available to the system Gemini agent. For UI responses, pair the agent with the A2UI Compose renderer so it can return native screens instead of plain text.

Test on multiple form factors. The same agent can run on phones, foldables, and, with the right skills, on Googlebook. Always verify privacy claims: local reasoning stays private, but tools you write may not.

Watch the official Android Developers sessions for code samples. The Jetpacker sample on GitHub demonstrates a full agentic flow.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The ML Kit Agentic API with Gemini Nano 4 removes the need to wire the agent loop yourself. You get private, fast, multi-turn experiences that stay on the device. Start with a single tool, enroll in the AICore preview, and expand once the basic flow works.

For related agent work inside Android Studio, see the guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/android-studio-rabbit-2-bring-your-own-agent-guide/).

## Sources

- [Build agentic workflows with Gemini Nano | ML Kit](https://developers.google.com/ml-kit/genai/agent/android)
- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads)
- [Agentic and Flexible: A next era of Android development](https://developer.android.com/blog/posts/build-it-your-way-a-next-era-of-android-development)
- [Android Dev Summit 2026 keynote](https://www.youtube.com/watch?v=8Lmv7LGgL4E)
