---
title: "How to Use ML Kit GenAI APIs with Gemini Nano on Android"
description: "A practical guide to Google's on-device ML Kit GenAI APIs: summarization, proofreading, rewriting, image description, speech recognition, and the Prompt API powered by Gemini Nano."
pubDate: 2026-09-17
tags: ["android", "ai-tools", "tutorials"]
heroImage: "/images/ml-kit-genai-gemini-nano.svg"
---

Cloud models are useful when you need a large context window. They are the wrong default when the user is offline, the text is private, or you do not want to pay for every rewrite of a chat draft.

Google's **ML Kit GenAI APIs** run **Gemini Nano** on the device through **AICore**, Android's system service for on-device foundation models. You call a high-level API for a common task instead of shipping your own model file.

This guide is for Android app developers who want a working on-device feature, not a research paper on model sizes.

## What the APIs actually do

According to Google's [ML Kit GenAI overview](https://developers.google.com/ml-kit/genai), the current feature set is:

- **Summarization** — turn an article or chat thread into a bulleted list
- **Proofreading** — fix grammar and spelling in short content
- **Rewriting** — change tone or style on a short message
- **Image description** — generate a short caption for an image
- **Speech recognition** — transcribe audio to text
- **Prompt API** — generate text from a custom text or multimodal prompt (alpha)

These are not a replacement for Firebase AI Logic or a cloud Gemini call. They are the path when the job is short, local, and repeatable.

## Why on-device is the point

Google documents three practical benefits that match other ML Kit APIs:

- Input, inference, and output stay on the device
- Features keep working without a reliable network
- You do not pay a server bill per call

Because the APIs sit on AICore, apps share the Gemini Nano copy already on the phone when it is present. That avoids a second multi-hundred-megabyte download per app and keeps storage lower.

AICore also isolates requests. Treat that as a privacy architecture, not as a license to send health or financial data without your own review.

## Pick the right API, not a generic prompt

Use the task API when your product job matches it. Task APIs are tuned for those jobs. Google published English quality scores comparing the raw Nano base model with the ML Kit wrappers; the wrappers scored higher on summarization, proofreading, rewriting, and image description.

Use **Prompt API** when you have a custom instruction that does not fit those four boxes. Expect more work: you own the prompt, the fallback, and the evaluation.

Use **Speech Recognition** in two modes:

- **Basic** — traditional on-device speech model, available on most devices running API 31+
- **Advanced** — GenAI model for higher quality and broader language coverage; Google currently lists Pixel 10 and Pixel 11 families, with more devices in development

Do not invent device support. Check the official tables before you promise a feature in Play Store copy.

## Device support in brief

Feature-specific APIs (summarization, proofreading, rewriting, image description) ship on a growing list of flagships: Pixel 9–11 families, selected Galaxy S25/S26 and Z Fold/Flip devices, and recent Honor, OnePlus, OPPO, Xiaomi, vivo, and other models listed on the overview page.

Prompt API support is split by Nano generation:

- **nano-v2**, **nano-v3**, and **nano-v4** cover different OEM lists
- Pixel 11 and Galaxy Z Flip8 / Fold8 families are on nano-v4 in Google's current table

Language coverage depends on what the device has downloaded. Always query availability at runtime.

You can read the on-device Nano generation with `getBaseModelName()`.

## Constraints you must design for

These limits are official, not folklore:

- **Foreground only.** Inference while the app is not the top activity, including from a foreground service, returns `ErrorCode.BACKGROUND_USE_BLOCKED`.
- **Per-app quota.** Burst traffic can return `ErrorCode.BUSY`. Long-running overuse can return `ErrorCode.PER_APP_BATTERY_USE_QUOTA_EXCEEDED`. Back off exponentially.
- **Terms.** The ML Kit GenAI API Additional Terms of Service apply. You are responsible for client safety and the user experience.

If the user backgrounds the app mid-summary, stop cleanly and let them resume later. Do not hide inference in a worker.

## Streaming versus waiting

Each generation API offers streaming and non-streaming results.

- Stream when the output is long (article summary, image description the user will read live).
- Wait for the full block when the output is a short rewrite you will put in a single text field.

Streaming is for first-token latency, not for running in the background.

## A practical implementation path

Exact Gradle coordinates change. Follow the current [ML Kit GenAI docs](https://developers.google.com/ml-kit/genai) and the official samples. The workflow does not.

### 1. Confirm the device can run the feature

On first open of the screen, check that the API and model are available. If Nano is missing, show a download or “not supported on this device” state. Do not fail silently after the user pastes a paragraph.

### 2. Start with one task API

A notes app is a good first feature:

1. User pastes or selects text.
2. You call **Summarization** with streaming enabled.
3. You render bullets as tokens arrive.
4. You offer **Proofreading** as a second action on the same text.

Keep the first prompt inside the task API. Do not jump to Prompt API until the product needs a custom instruction.

### 3. Release the client

Google’s sample pattern creates a client (for example a `Summarizer`) and closes it when the screen or ViewModel is destroyed. Hold the client for the session, not for the process lifetime.

### 4. Handle busy and blocked errors in the UI

Map official error codes to copy the user can act on:

- Busy → “Try again in a moment”
- Battery quota → “On-device AI paused to save battery”
- Background blocked → stop work; do not retry until the activity is visible
- Unsupported → hide the button

### 5. Test on a listed device

Emulators will not give you a honest Nano path. Use a device from the support table, or skip the feature behind a flag until you have one.

## When to stay on-device versus call the cloud

Stay on-device when:

- The input should never leave the phone (draft messages, photos in a gallery)
- The network is optional
- The task is short (proofread a SMS-length string, caption one image)

Use Firebase AI Logic or another cloud path when:

- You need current web grounding, Maps, or a large document
- The device is not on the support list
- The job needs a model larger than Nano

Kakao Mobility is Google’s public case study for on-device Nano: address entry on-device, lower server cost, and a reported drop in order completion time. That is the shape of a good feature—narrow task, local data, measurable time saved.

## How this fits the rest of the Android AI stack

- **ML Kit GenAI** — product features inside your app
- **AICore developer preview** — prototype custom Nano prompts when the task APIs are not enough
- **Gemma 4** — local agentic work and Studio assist; separate from shipping ML Kit wrappers
- **Android skills + Android CLI** — how you *build* the feature with an agent, not how the phone runs it

If you already use coding agents, Google documents an Android skill for the ML Kit Prompt API (`android skills add ml-kit-genai-prompt-api`). That is a development convenience. Users never see it.

## Conclusion

ML Kit GenAI is the shortest official path to Gemini Nano in an Android app: task APIs for summary, proofread, rewrite, caption, and speech, plus a Prompt API when you must customize. Run it only in the foreground, respect quotas, check device support at runtime, and close the client when the screen dies.

Start with one task on one listed device. If that loop is solid, add Prompt API. If the device is unsupported or the job needs the open web, use a cloud Gemini path instead of pretending Nano is universal.

## Sources

- [Overview of the ML Kit GenAI APIs](https://developers.google.com/ml-kit/genai) — Google for Developers (updated 10 September 2026)
- [AI on Android](https://developer.android.com/ai) — Android Developers
- [Gemini Nano](https://developer.android.com/ai/gemini-nano) — Android Developers
- [On-device GenAI APIs as part of ML Kit](https://android-developers.googleblog.com/2025/05/on-device-gen-ai-apis-ml-kit-gemini-nano.html) — Android Developers Blog
- [ML Kit guides](https://developers.google.com/ml-kit/guides) — Google for Developers
