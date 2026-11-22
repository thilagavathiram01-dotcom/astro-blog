---
title: "How to Set Gemini 4 Neon Thinking Levels on Android"
description: "Configure low, medium, or high thinking levels for Gemini 4 Neon in Android apps with Firebase AI Logic. Balance latency, cost, and reasoning depth."
pubDate: 2026-11-22T18:30:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "gemini", "firebase", "tutorials", "how-to"]
noindex: false
---

Android developers can now dial the reasoning depth of Gemini 4 Neon directly from client code. Firebase AI Logic exposes thinking levels so you control how many tokens the model spends on internal reasoning before it answers.

This matters because Neon defaults to HIGH. On simple classification or routing tasks that setting wastes tokens and adds latency. Thinking tokens are billed at the same rate as output tokens, and Neon shares a unified 1,048,576-token window across input and output.

This guide shows the exact Kotlin configuration, when to pick each level, and the production constraints you must respect.

## Why thinking levels matter on Neon

Gemini 4 Neon supports LOW, MEDIUM, and HIGH. HIGH is the default. Firebase AI Logic does not currently support XHIGH, and MINIMAL returns a 400 error on this model.

Lower levels reduce the number of thinking tokens the model is allowed to use. That cuts both latency and cost on high-volume or latency-sensitive paths. Higher levels let the model reason more deeply on multi-step coding or analysis tasks.

Google’s guidance is straightforward: use lower values when speed or cost is the priority, and higher values when the task needs stronger reasoning.

![Android developer working on a laptop with code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Set up the model with a thinking level

First confirm your project has Firebase AI Logic enabled and App Check enforced. As of November 2, 2026, Firebase automatically enforces App Check for all Firebase AI Logic projects.

Add the Firebase AI Logic dependency (the current `firebase-ai` artifact) and initialize the SDK as you would for any other Gemini model.

Then create the `GenerativeModel` with a `GenerationConfig` that contains a `ThinkingConfig`.

```kotlin
val generationConfig = generationConfig {
    thinkingConfig = thinkingConfig {
        thinkingLevel = ThinkingLevel.MEDIUM
    }
}

val model = Firebase.ai(backend = GenerativeBackend.googleAI())
    .generativeModel(
        modelName = "gemini-4-neon",
        generationConfig = generationConfig
    )
```

The configuration lives for the lifetime of that `GenerativeModel` instance. If different screens or features need different levels, create separate model instances.

You can also set LOW or HIGH the same way. Omit the `thinkingConfig` entirely and the model uses its default of HIGH.

## Choose the right level for the task

- **LOW**: Fewest thinking tokens. Best for high-throughput classification, routing, summarization, and simple structured extraction. Response times stay short and cost stays low.
- **MEDIUM**: Balanced token use. Suitable for everyday coding help, document Q&A, and moderate tool-use loops where you still want some reasoning but cannot afford full HIGH latency.
- **HIGH** (default): Maximum thinking tokens allowed by the model for this level. Use for complex multi-step coding, agentic tool loops, and multimodal analysis that benefit from deeper planning.

Test each level against real prompts from your app. Monitor thinking token counts in the Firebase console’s AI monitoring view. Because thinking tokens are priced as output tokens, a drop from HIGH to MEDIUM or LOW can produce measurable savings on frequent calls.

Neon’s unified 1M-token context window includes both the input you send and the thinking + final output the model produces. Heavy thinking on a long conversation can still exhaust the remaining budget, so set `maxOutputTokens` appropriately when you expect large replies.

![Code on a laptop screen in a developer workspace](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Practical tips for production

Start with MEDIUM for most interactive features and only raise to HIGH when evaluation shows a clear quality gain. Drop to LOW for background classification jobs or when the user is waiting on a simple answer.

Enable thought summaries only when you need them for debugging. They count as thinking tokens and increase both cost and response size.

The SDK automatically handles thought signatures for multi-turn chats that use function calling. You do not need extra code for that path.

Always enforce App Check. Client-side calls with Firebase AI Logic keep your API key off the device, but App Check is what prevents unauthorized apps from consuming your quota.

If you are already using Gemini 4 Hydrogen in the same app, the thinking-level API is identical; only the model name and the supported maximum level change. See our earlier guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) for the base setup pattern.

## Watch the official setup video

The Firebase team published a short walkthrough that covers project setup, dependency addition, and the first `generateContent` call on Android. The same pattern applies once you add the thinking configuration shown above.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0UoReIOwC-Q"
    title="Get Started with Firebase AI Logic on Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Setting a thinking level on Gemini 4 Neon is a single block of Kotlin inside your existing Firebase AI Logic model initialization. Choose LOW for speed and volume, MEDIUM for everyday interactive work, and HIGH when the task genuinely needs deeper reasoning.

Measure token usage and latency in the console, keep App Check on, and create separate model instances when different features need different levels. That combination keeps quality high without letting default HIGH settings inflate your bill.

## Sources

- [Thinking | Firebase AI Logic](https://firebase.google.com/docs/ai-logic/thinking)
- [Gemini 4 Neon model documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-neon)
- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
- [Get Started with Firebase AI Logic on Android (YouTube)](https://www.youtube.com/watch?v=0UoReIOwC-Q)
