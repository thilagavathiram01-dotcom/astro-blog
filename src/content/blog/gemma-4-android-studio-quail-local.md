---
title: "How to Run Gemma 4 Locally in Android Studio Quail 4"
description: "Set up Google’s Gemma 4 model inside Android Studio Quail 4 for offline agentic coding: hardware needs, one-click download, Agent Mode, and when to stay on Gemini in the cloud."
pubDate: 2026-09-17T17:20:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "/images/gemma-4-android-studio-quail-local.svg"
---

Android Studio can call a cloud model, or it can keep inference on your own machine. In the **Quail 4** stable release, Google wired **Gemma 4** into the IDE so you no longer need a separate Ollama or LM Studio install for the default local path.

That matters when you are on a plane, when source code must not leave the laptop, or when a long Agent Mode session would burn cloud quota. This guide covers the official setup, what the model is good at, and the review habits that still apply when the model never touches the internet.

## What Quail 4 actually shipped

On 1 September 2026, Google published the [Quail 4 stable notes](https://android-developers.googleblog.com/2026/09/leverage-gemma-4-android-studio-quail.html). Three pieces are relevant to local AI:

- **Native Gemma 4 integration.** Settings can download, verify, and update model weights. A lightweight inference engine ships with the IDE.
- **Bundled Android skills.** Twenty-three curated skills load with the product so the agent is grounded in current Android APIs, even when the model is local.
- **Agent UX that works offline.** Parallel chats, a **Summary of Changes** tab, hyperlinked symbols, and collapsible reasoning blocks all work with Gemma selected as the active model.

Earlier in 2026 you could already point Studio at a local provider. Quail 4 is the first stable line where Gemma 4 is a first-class, in-product download.

<div class="video-wrap" style="position:relative;padding-bottom:56.25%;height:0;margin:1.5rem 0">
<iframe src="https://www.youtube.com/embed/N4GgGBKnHe4" title="What's new in Android development tools" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Hardware you actually need

Google’s [local model hardware notes](https://developer.android.com/studio/gemini/use-a-local-model#try-the-gemma-4-model) and the Quail 4 post agree on the same floor:

- Smallest supported Gemma 4 variants: about **12 GB RAM**
- Comfortable day-to-day Agent Mode: **32 GB RAM or more**
- Disk space depends on the variant. Earlier Studio docs listed roughly **2 GB** for Gemma E2B, **4 GB** for E4B, and far more for the 26B mixture-of-experts checkpoint if you still use an external provider.

Close other heavy IDEs and browsers before the first download. The first run also compiles or warms the bundled engine, which can make the machine feel busy for a few minutes.

## Install Quail 4 and sign in

1. Download **Android Studio Quail 4** from the [official Android Studio page](https://developer.android.com/studio), or use the in-product updater if you are already on a Quail build.
2. Complete the first-run wizard so the Android SDK and a recent emulator image are present. Local coding assistance does not replace the SDK.
3. Sign in with a Google account. You do not need a paid Google AI plan for Gemma 4 itself. A plan only raises quota when you switch back to cloud Gemini.

Confirm **Help > About** shows Quail 4 before you hunt for Gemma in settings. Older Panda builds used a different local-provider flow.

## Download Gemma 4 inside the IDE

Google documents two equivalent entry points:

1. Open Agent Mode and choose **Gemma** in the model selector, then pick a variant to download.
2. Go to **Settings > Tools > AI > Model Providers > Gemma**.

Studio downloads the weights, verifies them, and keeps them updated. You do not paste an API key for this path.

If you still prefer Ollama or LM Studio, that route remains available under the same Model Providers page. Use it when you want a checkpoint Studio does not bundle. For most Android work, the built-in Gemma 4 path is the one to try first.

## Choose a variant with a job in mind

Gemma 4 is a family, not a single file. Official Android posts describe two edge-oriented sizes that also inform how people pick Studio variants:

- **E2B-class** — faster, lower memory, better for short edits, commit messages, and “explain this function.”
- **E4B-class** — more reasoning headroom for multi-file refactors and plan-then-code sessions.

On a 16 GB laptop, start with the smallest listed option and keep Agent Mode on a single module. On 32 GB or more, use the larger default for Planning Mode and multi-file work.

Gemma 4 is also the base for the next **Gemini Nano 4** generation on phones. Code you write against ML Kit’s Prompt API on-device is a separate runtime. Do not assume a Studio checkpoint and a phone checkpoint are interchangeable binaries.

## Run a first offline session

Disconnect Wi-Fi once, on purpose, after the model is downloaded. Then:

1. Open a small, well-tested module — not the entire monorepo on the first try.
2. Switch the conversation to **Agent** (or **Planning** if the change spans several files).
3. Ask for a bounded task: “Add content description and TalkBack-safe labels to `SettingsScreen.kt` only. Do not touch navigation.”
4. Watch the **Recent Chats** panel. Quail 4 shows a spinner while tools run and a badge when a background chat is ready to review.
5. Open **Summary of Changes**. Read the diff. Apply only the files you expected.

If the agent invents an API that does not exist in your `compileSdk`, reject the patch and attach the skill you need, or mention the library version in the prompt. Bundled skills reduce this class of error; they do not eliminate it.

<div class="video-wrap" style="position:relative;padding-bottom:56.25%;height:0;margin:1.5rem 0">
<iframe src="https://www.youtube.com/embed/qZLQVlLgTDU" title="What are Android skills and how to use them with AI tools?" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Pair Gemma 4 with Android skills

Local models are only as current as their training data. That is why Quail 4 ships skills for jobs that churn quickly:

- Android Gradle Plugin 9 upgrades
- Android Profiler workflows
- Navigation 3 migrations
- Adaptive / large-screen Compose layouts

The agent matches your prompt against skill metadata and loads the relevant instructions. You can also write a team skill for your own architecture. If you want the same skills in a terminal agent, install **Android CLI** and run `android skills add --all`.

To turn bundled skills off for a comparison run, use the IDE-wide toggle in Settings. That is useful when you are measuring whether a failure came from the model or from a skill file.

## When to stay on cloud Gemini

Use Gemma 4 locally when:

- The repo cannot leave the machine
- You are iterating on a well-known Android pattern
- You are out of quota or offline
- You want a second opinion without starting another paid session

Switch to a cloud Gemini model (or another remote provider) when:

- You need a huge context window across many modules
- The task depends on live web search or current docs the local weights never saw
- You want the highest-reasoning Gemini tier for a one-shot architecture plan

Quail 4 still supports a Google AI Studio API key, a Google AI Pro or Ultra plan, and Gemini Enterprise for organizations. Those paths are independent of the Gemma download.

## Practical guardrails

- Keep Agent Mode scoped. Name the files. Name the package.
- Review every Gradle change. A local model can still bump a plugin you did not ask for.
- Do not treat “offline” as “safe for secrets.” The model does not upload your code, but the chat history still lives on disk.
- Re-run unit tests after you apply a Summary of Changes. The agent does not own your CI.
- If generation is slow, drop to a smaller variant before you buy RAM.

## Conclusion

Gemma 4 in Android Studio Quail 4 is the first stable, one-click way to run an Android-aware coding agent without a cloud round trip. Download Quail 4, pull a Gemma variant from Settings, start with a small module, and keep skills enabled so the model follows current platform practice.

Use the cloud when the problem is huge or time-sensitive. Use Gemma 4 when privacy, quota, or a flaky network would otherwise stop the session.

## Sources

- [Leverage Android skills and Gemma 4 in Android Studio Quail 4](https://android-developers.googleblog.com/2026/09/leverage-gemma-4-android-studio-quail.html) — Android Developers Blog, 1 September 2026
- [Android Studio supports Gemma 4](https://developer.android.com/blog/posts/android-studio-supports-gemma-4-our-most-capable-local-model-for-agentic-coding) — Android Developers
- [Gemma 4: local agentic intelligence on Android](https://developer.android.com/blog/posts/gemma-4-the-new-standard-for-local-agentic-intelligence-on-android) — Android Developers
- [Use a local model in Android Studio](https://developer.android.com/studio/gemini/use-a-local-model)
- [Android skills](https://developer.android.com/tools/agents/android-skills)
- [Download Android Studio](https://developer.android.com/studio)
- [What's new in Android development tools](https://www.youtube.com/watch?v=N4GgGBKnHe4) — Android Developers
- [What are Android skills and how to use them with AI tools?](https://www.youtube.com/watch?v=qZLQVlLgTDU) — Android Developers
