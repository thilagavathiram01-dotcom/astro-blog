---
title: "How to Speed Up Gemini Nano Prompts with Prefix Caching"
description: "Cut Gemini Nano inference time on Android by splitting static prompt prefixes from dynamic suffixes with the ML Kit GenAI Prompt API."
pubDate: 2026-10-08T16:30:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "gemini", "tutorials"]
noindex: false
---

Repeating the same long instruction on every Gemini Nano call wastes the first part of inference. ML Kit's Prompt API can cache that shared prefix and reuse the intermediate model state on the next request.

Google documents this as prefix caching. You split a text prompt into a static prefix and a dynamic suffix. The first call still pays the full cost. Later calls that hit the cache skip reprocessing the prefix.

This guide covers the implicit and explicit APIs, the Pixel 9 timing figures from the docs, and the limits that make a cache miss or a no-op.

## When a prefix cache helps

Prefix caching fits prompts that share a long, stable head and change only at the end. Examples include a fixed system-style instruction, a product catalog snippet, or a style guide, followed by a short user sentence.

Google's estimates, measured on a Pixel 9, show the gap:

- A 300-token fixed prefix plus a 50-token suffix took 0.82 seconds without caching and 0.45 seconds on a cache hit.
- A 1,000-token fixed prefix plus a 100-token suffix took 2.11 seconds without caching and 0.5 seconds on a cache hit.

A miss can still happen the first time a prefix is used. Pre-processing the prefix adds a one-time cost, so the docs recommend the feature only when that prefix will be reused.

Image prompts are out of scope. Prefix caching currently supports text-only input. If the request includes an image, do not use this path.

If you are still wiring the Prompt API itself, start with [the Gemini Nano 4 Prompt API setup](/blog/gemini-nano-4-ml-kit-prompt-api/) and come back here for the latency step.

## Add the Prompt API dependency

Prefix caching lives on the same client as ordinary generation. In the app module `build.gradle`, depend on the ML Kit GenAI Prompt library:

```kotlin
implementation("com.google.mlkit:genai-prompt:1.0.0-beta4")
```

Create a client with `Generation.getClient()`, then check `FeatureStatus` before you generate. `AVAILABLE` means Gemini Nano is ready. `DOWNLOADABLE` means you should collect `download()` until `DownloadCompleted`. `UNAVAILABLE` means this device cannot run the feature, or AICore has not fetched the latest configuration.

AICore is the system service that runs Gemini Nano. A fresh device, a cleared AICore app, or an unlocked bootloader can make the API fail even when your code is correct. The Prompt API get-started page lists binding, feature-not-found, and download errors and how to retry them. For field symptoms, see [how to fix Gemini Nano AICore errors](/blog/fix-gemini-nano-aicore-errors-android/).

Input must stay under 4,000 tokens, about 3,000 English words. Long outputs over 4,000 tokens are not a fit for this API. AICore also enforces a per-app inference quota.

![Developer reviewing source code on a laptop](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Turn on implicit prefix caching

Implicit caching is the lighter option. You mark the shared text as a `PromptPrefix` and pass the changing text as a `TextPart`. You do not name or delete individual caches.

Kotlin, following the official sample:

```kotlin
val promptPrefix = "Reverse the given sentence: "
val dynamicSuffix = "Hello World"

val result = generativeModel.generateContent(
    generateContentRequest(TextPart(dynamicSuffix)) {
        promptPrefix = PromptPrefix(promptPrefix)
    }
)
```

Java sets the same split with `setPromptPrefix(new PromptPrefix(promptPrefix))` on the request builder, and the dynamic sentence as the `TextPart`.

Use a real instruction as the prefix, not a one-word label. The cache key is the prefix content. If you edit a single character of the shared text, you get a new cache entry and pay the miss again.

Implicit cache files land in the app's private storage. Google says the files are encrypted and stored with metadata that includes the original prefix text. Size tracks prefix length. An LRU policy drops the least used caches when the total cache amount is exceeded.

To wipe implicit caches, call the clear method documented for the generative model (`clearImplicitCaches()` in the guide text; the linked reference names `clearCaches()`). Call it when the user signs out or when you ship a new instruction set you do not want reused.

## Manage caches explicitly

Explicit caching is for apps that need to create, look up, and delete named caches instead of relying on LRU alone. These calls run independently of the automatic path.

Kotlin shape from the docs:

```kotlin
val cacheName = "my_cache"
val promptPrefix = "Reverse the given sentence: "
val dynamicSuffix = "Hello World"

val cacheRequest = createCachedContextRequest(cacheName, PromptPrefix(promptPrefix))
val cache = generativeModel.caches.create(cacheRequest)

val response = generativeModel.generateContent(
    generateContentRequest(TextPart(dynamicSuffix)) {
        cachedContextName = cache.name
    }
)
```

Later you can list caches with `generativeModel.caches.list()`, fetch one with `get(cacheName)`, and remove it with `delete(cacheName)`. Java uses `cachesFutures` with `CreateCachedContextRequest.Builder`, then `setCachedContextName` on the generate request.

Name caches after the instruction version, not after the user sentence. `style-guide-v3` survives app restarts in a way you can reason about. A name tied to one message forces you to recreate the cache on every turn.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Measure a hit before you ship it

The Pixel 9 table is an estimate, not a promise for every chip. Log elapsed time around `generateContent` for three cases: no prefix field, first use of a prefix, and a second call with the same prefix and a new suffix.

A useful check:

1. Warm the model with `warmup()` if you care about the first call in a session. That loads Gemini Nano and runtime pieces. It is separate from prefix caching.
2. Run the same 300-token instruction twice with two short suffixes.
3. Compare the second call to a control that stuffs the instruction and suffix into one `TextPart`.
4. Repeat on a mid-range phone, not only a flagship. Storage and NPU speed both move the result.

If the second call is not faster, confirm the prefix string is identical, the request is text-only, and feature status is `AVAILABLE`. A download still in progress, or a prefix that changes because you append a timestamp, will look like a broken cache.

![Circuit board close-up representing on-device compute](https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80)

## Limits and practical rules

Keep these constraints in the design, not in a post-launch bug:

- Text only. Do not attach an `ImagePart` to a cached-prefix request.
- Reuse the prefix. A one-off instruction pays the miss and stores a file you may never hit.
- Stay under the 4,000-token input cap for the whole request, prefix plus suffix.
- Expect private storage growth. Long prefixes produce larger cache files. Clear them when the instruction set changes.
- Do not put secrets in the prefix. The docs say encrypted cache files are stored with metadata that includes the original prefix text, on app-private storage.
- Optional generation settings such as `temperature`, `topK`, `seed`, and `maxOutputTokens` still belong on the request. Caching does not replace them.

Android Developers also points teams at the ML Kit GenAI Prompt API as the production path after prototyping Gemini Nano 4 in the AICore developer preview. Prefix caching is one of the latency tools on that path, alongside the upcoming structured output API. Flagship devices are the stated target for Gemini Nano 4 later in 2026; check feature status on the hardware you support rather than assuming every phone has the model.

## A short implementation order

1. Depend on `com.google.mlkit:genai-prompt:1.0.0-beta4` and handle `FeatureStatus` plus download.
2. Move the stable instruction into `PromptPrefix` and the user text into `TextPart`.
3. Time a cache miss and a cache hit on a Pixel-class device before you promise a latency number.
4. Switch to named caches only if you need create, get, and delete control.
5. Clear caches when the instruction changes or the user signs out.

## Bottom line

Prefix caching is a split in the Prompt API request, not a separate model. On Google's Pixel 9 figures, a reused 1,000-token prefix dropped from 2.11 seconds to 0.5 seconds on a hit. Use it for text prompts you send again, skip it for images and one-off instructions, and measure the second call on your own devices before you treat the table as your SLA.

## Sources

- [Optimize inference speed with prefix caching](https://developers.google.com/ml-kit/genai/prompt/android/prefix-caching) — ML Kit, Google for Developers, updated 7 August 2026
- [Get started with Prompt API](https://developers.google.com/ml-kit/genai/prompt/android/get-started) — ML Kit, updated 8 September 2026
- [PromptPrefix reference](https://developers.google.com/android/reference/kotlin/com/google/mlkit/genai/prompt/PromptPrefix) — ML Kit Kotlin reference
- [Top AI on Android updates from Google I/O 2026](https://android-developers.googleblog.com/2026/05/android-ai-intelligence-system.html) — Android Developers Blog, 26 May 2026
- [Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM](https://www.youtube.com/watch?v=Z7zx_sTbFPI) — Android Developers on YouTube
