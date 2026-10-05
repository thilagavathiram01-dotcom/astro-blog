---
title: "Speed Gemini Nano Prompts With ML Kit Prefix Caching"
description: "How to speed Gemini Nano prompts with ML Kit prefix caching: implicit and explicit caches, Pixel 9 timings, and text-only limits."
pubDate: 2026-10-05T12:00:00
heroImage: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "gemini", "developer", "ai"]
noindex: false
---

Repeating the same long system prompt on every Gemini Nano call wastes time on the phone. ML Kit’s Prompt API can cache the shared prefix and only reprocess the part that changes. Google’s docs call this prefix caching, and it is one of the clearest speed levers for on-device GenAI.

This guide shows when the cache helps, how to turn on implicit and explicit modes, and what the Pixel 9 measurements actually say. If you already call `Generation.getClient()`, start from the setup in our [Gemini Nano 4 Prompt API guide](/blog/gemini-nano-4-ml-kit-prompt-api/).

## What prefix caching stores

Prefix caching saves the intermediate model state for a recurring prompt prefix. The next request reuses that state and runs inference only on the new suffix. You split the static text from the dynamic text in the request. You do not manage GPU buffers yourself.

Google documents two modes:

- Implicit caching. You pass a `PromptPrefix`. The system creates, reuses, and evicts caches.
- Explicit caching. You create, list, get, and delete named caches with `generativeModel.caches`.

Both modes are text-only. If the request includes an image, do not use prefix caching. Image-and-text prompts still go through the normal Prompt API path.

A first request can miss the cache. Pre-processing the prefix adds a one-time delay. Google recommends the feature only when the same prefix will run more than once.

![Android phone on a desk beside a laptop used for app development](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Measured gains on Pixel 9

The ML Kit prefix-caching page publishes estimated timings for a Pixel 9. These are cache-hit numbers. A miss can happen the first time a prefix is used.

| Prompt shape | Without cache | With cache hit |
| --- | --- | --- |
| 300-token prefix, 50-token suffix | 0.82 seconds | 0.45 seconds |
| 1,000-token prefix, 100-token suffix | 2.11 seconds | 0.5 seconds |

In the Google I/O session on ML Kit GenAI and LiteRT-LM, the team said that for most devices, prompts with a 1,000-token fixed prefix and a 100-token dynamic suffix were about two times faster with prefix caching. On Pixel 9 that shape was about four times faster, which matches the table above (2.11 seconds down to 0.5 seconds).

The longer the shared instructions, the larger the win. A short greeting prompt will not repay the cache setup.

## Step 1: Confirm the device can run the model

Add the Prompt API dependency. As of the September 2026 getting-started page, that is:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta4")
```

Get a client and check status before you cache anything:

```kotlin
val generativeModel = Generation.getClient()
when (generativeModel.checkStatus()) {
    FeatureStatus.AVAILABLE -> { /* ready */ }
    FeatureStatus.DOWNLOADABLE -> generativeModel.download().collect { /* progress */ }
    FeatureStatus.UNAVAILABLE -> { /* hide the feature */ }
}
```

`UNAVAILABLE` means this device does not support Gemini Nano, or it has not fetched the configuration that enables it. Caching will not fix that.

## Step 2: Turn on implicit caching

Put the stable instructions in `promptPrefix`. Put the user text in a `TextPart`.

```kotlin
val promptPrefix = """
    You extract shipping fields from a chat message.
    Return only JSON with keys address, phone, and notes.
    If a field is missing, use an empty string.
""".trimIndent()

val dynamicSuffix = userMessage

val result = generativeModel.generateContent(
    generateContentRequest(TextPart(dynamicSuffix)) {
        promptPrefix = PromptPrefix(promptPrefix)
    }
)
```

Java uses `setPromptPrefix(new PromptPrefix(promptPrefix))` on `GenerateContentRequest.Builder`.

Keep the prefix byte-for-byte stable. A trailing space or a changed example breaks the match and forces a miss. Load rules, schemas, and few-shot samples here. Leave names, dates, and the current message in the suffix.

## Step 3: Use explicit caches when you need control

Implicit mode is enough for one shared style guide. Explicit mode fits apps that switch between several long prefixes, such as support, receipts, and itinerary prep.

```kotlin
val cacheName = "shipping_extractor_v1"
val cacheRequest = createCachedContextRequest(
    cacheName,
    PromptPrefix(promptPrefix)
)
val cache = generativeModel.caches.create(cacheRequest)

val response = generativeModel.generateContent(
    generateContentRequest(TextPart(dynamicSuffix)) {
        cachedContextName = cache.name
    }
)
```

You can list caches, fetch one by name, and delete it:

```kotlin
for (cache in generativeModel.caches.list()) {
    // inspect name before reuse
}
val existing = generativeModel.caches.get(cacheName)
generativeModel.caches.delete(cacheName)
```

Explicit operations run independently of the automatic LRU path. Delete a named cache when you ship a new prompt version so old instructions cannot linger.

![Developer reviewing code on a laptop screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Storage and cleanup

Implicit caches live in the app’s private storage. Google stores encrypted cache files plus metadata, including the original prefix text. Size grows with prefix length. An LRU policy drops the least-used caches when the total exceeds the limit.

To wipe implicit caches, call `clearImplicitCaches()` on the generative model. Do that after a prompt rewrite, a logout on a shared device, or a support flow that should not retain prior instructions.

Do not put secrets, access tokens, or raw payment numbers in the prefix. The prefix text is part of stored metadata.

## When to skip it

Skip prefix caching in these cases:

- The request includes an image. The feature is text-only today.
- The prefix is short or changes every call.
- You only run the prompt once per install.
- Latency on the first call matters more than later calls. The first pass still pays the pre-process cost.

For fixed tasks such as a one-to-three bullet summary, the feature-specific Summarization API can be simpler than a custom Prompt API prefix. Use Prompt API when you need your own instructions and output shape.

## Watch the official walkthrough

Google’s session on on-device GenAI covers prefix caching next to structured output and model selection.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical tips

Version the prefix string in code, for example `shipping_extractor_v3`, and match that name in explicit caches. Log cache hits in your own timing wrapper. The API does not print a public “hit” flag in the snippets above, so measure end-to-end latency on a Pixel 9 or another supported device.

Test a cold start and a warm start. The cold start is the miss. The warm start is the number you should quote to product. Keep the suffix small. The published win assumes a 50- or 100-token changing part against a much larger fixed part.

Prompt API is still beta. Google’s getting-started page notes there is no SLA or deprecation policy, and breaking changes are possible. Pin the dependency and retest cache calls when you bump `genai-prompt`.

## Conclusion

Prefix caching is a small API change with a large effect on repeated Gemini Nano prompts. Split static instructions into `PromptPrefix` or a named cache, leave user text in the suffix, and stay on text-only requests. On a Pixel 9, Google’s 1,000-token prefix example drops from 2.11 seconds to 0.5 seconds on a cache hit.

Start with implicit caching. Move to explicit create, get, and delete when you maintain several prompt versions. Clear caches when the instructions change.

## Sources

- [Optimize inference speed with prefix caching](https://developers.google.com/ml-kit/genai/prompt/android/prefix-caching) — ML Kit, updated 7 August 2026
- [Get started with Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/get-started) — ML Kit
- [PromptPrefix reference](https://developers.google.com/android/reference/com/google/mlkit/genai/prompt/PromptPrefix) — ML Kit
- [Build intelligent Android apps: On-device inference](https://developer.android.com/blog/posts/build-intelligent-android-apps-on-device-inference) — Android Developers Blog, 21 July 2026
- [Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM](https://www.youtube.com/watch?v=Z7zx_sTbFPI) — Android Developers, 22 May 2026
