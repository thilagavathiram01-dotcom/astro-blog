---
title: "Fix Gemini Nano AICore Quota and Setup Errors on Android"
description: "Fix Gemini Nano AICore errors on Android: binding failures, missing features, BUSY quota, and background blocks in ML Kit GenAI apps."
pubDate: 2026-10-04T11:00:00
heroImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "gemini", "ai"]
noindex: false
---

A fresh Pixel can still return `FEATURE_NOT_FOUND` the first time your app calls Gemini Nano. The model is not missing from the APK. ML Kit GenAI talks to AICore, the system service that hosts the shared on-device model, and AICore often is not finished setting itself up.

Google documents three setup failures, two quota errors, and a hard foreground rule. Treat those as product states, not as random crashes. The setup path for a custom prompt lives in the [ML Kit Prompt API getting-started guide](https://developers.google.com/ml-kit/genai/prompt/android/get-started). For a full integration walkthrough, see [Use Gemini Nano 4 With ML Kit Prompt API on Android](/blog/gemini-nano-4-ml-kit-prompt-api/).

## Confirm the phone can run the API

Prompt API and the feature-specific APIs do not share one device list. Summarization, proofreading, rewriting, and image description run on a broader set that includes the Pixel 9 through Pixel 11 series and the Galaxy S25 and S26 lines. Prompt API is split by Nano version.

Google's GenAI overview lists nano-v4 on Pixel 11, Pixel 11 Pro, Pixel 11 Pro XL, Pixel 11 Pro Fold, Galaxy Z Flip8, Galaxy Z Fold8, and Galaxy Z Fold8 Ultra. nano-v3 covers Pixel 9 and Pixel 10 series phones plus Galaxy S26 models. nano-v2 covers phones such as Galaxy Z Fold7 and several Xiaomi, OnePlus, and Honor models. Call `getBaseModelName()` if you need the version string at runtime.

An unsupported phone should return `FeatureStatus.UNAVAILABLE`. Do not keep retrying the download. Offer a cloud path, or hide the on-device action.

![Developer checking an Android phone next to a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Check status before the first prompt

Add `com.google.mlkit:genai-prompt:1.0.0-beta4`, then get a client with `Generation.getClient()`. Call `checkStatus()` and branch on the result.

1. `AVAILABLE` means Gemini Nano is downloaded. You can call `generateContent` or the streaming API.
2. `DOWNLOADABLE` means the device can fetch the model. Collect `download()` and surface `DownloadStarted`, byte progress, `DownloadCompleted`, and `DownloadFailed`.
3. `DOWNLOADING` means another caller already started the fetch. Wait, then check again.
4. `UNAVAILABLE` means the device is unsupported, or it has not fetched the configuration that would mark the feature as downloadable.

Optional `warmup()` loads the model into memory before the first user-visible call. Use it after status is `AVAILABLE`, not as a substitute for the download.

Input must stay under 4,000 tokens, about 3,000 English words. Avoid use cases that need more than 4,000 output tokens. `countTokens()` is the check Google documents for the request size.

## Map the three AICore setup errors

Google's getting-started page lists the messages you will see when AICore is not ready.

**Binding failure (error type 4, code 601).** `AICore service failed to bind` can happen if you install the GenAI app right after device setup, or if AICore was uninstalled after your app was installed. Update the AICore app, then reinstall your app.

**Feature not found (error type 3, code 606).** AICore has not finished downloading the latest configuration. On a connected device this usually takes minutes to a few hours. A reboot can speed the update. The same error appears if the bootloader is unlocked. Prompt API and the other GenAI APIs do not support unlocked bootloaders. Do not tell users to wait if the bootloader is unlocked. That path will not recover.

**Download error (error type 1, code 0).** `Unable to resolve host` means the feature download could not reach the network. Keep the connection up, wait a few minutes, and retry.

Show these as in-app states. A generic "AI failed" toast sends people into a retry loop that cannot succeed until AICore finishes or the bootloader restriction is understood.

## Handle BUSY and the battery quota

AICore enforces an inference quota per app. Too many GenAI calls in a short window return `ErrorCode.BUSY`. Google's guidance is exponential backoff, not an immediate retry.

A longer window can return `ErrorCode.PER_APP_BATTERY_USE_QUOTA_EXCEEDED`. The docs describe this as a long-duration quota, with a daily quota as the example. Backoff will not clear it. Stop the feature for that session and tell the user the on-device limit is reached.

Practical rules:

- Debounce buttons that call `generateContent`.
- Do not fan out parallel prompts for the same screen.
- Cache the last successful result for the same input.
- Log the error code, not the prompt text, if the prompt can contain private notes.

There is no per-call server bill for these APIs. The cost shows up as battery and quota instead.

![Code on a laptop screen during an Android debugging session](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Stay in the foreground

Inference is allowed only while your app is the top foreground application. A call from the background, including from a foreground service, returns `ErrorCode.BACKGROUND_USE_BLOCKED`.

That rules out a few designs people try first:

- Summarising a notification while the user is in another app.
- Running Nano inside a WorkManager job.
- Keeping a "listening" service that prompts the model after the activity stops.

Move the call into the visible activity or composable. If the user leaves, cancel the request and resume only when the app is top again. Streaming does not change the rule. `generateContentStream` is still inference.

## Pick streaming only when the answer is long

ML Kit offers streaming and non-streaming results. Streaming returns chunks as they are generated, which helps when the reply is long. Non-streaming waits for the full result, which is a better fit for short labels or a batch you parse once.

Optional request fields are temperature, seed, topK, candidateCount, and maxOutputTokens. `candidateCount` is a request, not a guarantee. Duplicate responses are removed, so you may get fewer candidates than you asked for.

A seed is the lever for more stable output when you are comparing a bug report across runs. Temperature and topK change diversity. Keep them low for classification, higher for rewrite styles.

## Test the failure paths on purpose

A happy-path demo on a Pixel 11 with Nano already downloaded hides the bugs users hit on day one.

1. Factory-reset a supported phone, install the app immediately, and confirm you handle binding failure or feature-not-found instead of crashing.
2. Turn on airplane mode during a `DOWNLOADABLE` fetch and confirm the download-failed branch.
3. Send the app to the background mid-request and confirm you surface `BACKGROUND_USE_BLOCKED`.
4. Hammer the button and confirm `BUSY` backs off.
5. Run the same build on an unsupported phone and confirm `UNAVAILABLE` hides the action.

Language coverage can also differ by device even when the model name matches. Do not promise a locale until you have checked it on that hardware.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI"
    title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to ship

Check status, download only when the feature is downloadable, and map the three AICore setup errors to plain copy. Back off on `BUSY`, stop on the battery quota, and never call Nano unless the app is in front. That is the difference between a demo that works on a lab Pixel and a feature that survives a new phone.

## Sources

- Google, "Get started with Prompt API," ML Kit, updated 8 September 2026: https://developers.google.com/ml-kit/genai/prompt/android/get-started
- Google, "Overview of the ML Kit GenAI APIs," updated 28 September 2026: https://developers.google.com/ml-kit/genai
- Android Developers, "Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM," YouTube: https://www.youtube.com/watch?v=Z7zx_sTbFPI
