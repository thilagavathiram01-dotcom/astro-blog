---
title: "Build On-Device LLM Apps on Android with LiteRT-LM Skill"
description: "Step-by-step guide to the new Android litert-lm skill. Use Android CLI to ground any agent and ship a private Gemma chat app with LiteRT-LM."
pubDate: 2026-10-23T20:00:00
heroImage: "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "how-to", "gemini"]
noindex: false
---

Running large language models entirely on an Android device keeps user data private and works offline. Google’s LiteRT-LM runtime makes this practical for production apps. The Android skills repository just added an official litert-lm skill that walks any AI agent through the exact steps.

This guide shows how to install the skill with Android CLI and use it to generate a working chat feature that streams replies from a Gemma model.

## Why on-device LLMs matter in 2026

Cloud models deliver strong quality, but they require a network connection and send prompts off the device. LiteRT-LM runs open models such as Gemma 4 E2B or Qwen3-0.6B directly on the phone’s CPU or GPU. Official benchmarks on a Samsung Galaxy S26 Ultra show Gemma 4 E2B achieving roughly 3,800 tokens per second prefill and 52 tokens per second decode on GPU, with time-to-first-token under half a second.

The new skill packages the current best-practice patterns so your agent follows them instead of inventing outdated MediaPipe LLM Inference code.

![Smartphone showing AI app icons including Gemini](https://images.unsplash.com/photo-1757310998309-87a97e562ee5?auto=format&fit=crop&w=800&q=80)

## Install the skill with Android CLI

Android CLI is the official tool for managing Android skills across any agent. If you already use it for other skills (see our earlier [Android CLI skills guide](/blog/android-cli-skills-any-agent/)), you only need one extra command.

1. Confirm Android CLI is installed and on your PATH (`android --version`).
2. List available skills: `android skills list`.
3. Add the new one: `android skills add litert-lm`.
4. Or install everything at once: `android skills add --all`.

The skill lands in the detected agent directories (Gemini, Antigravity, Claude, Codex, etc.). You can also target a specific agent with `--agent=gemini` or install project-scoped with `--project=.`.

After installation the agent automatically loads the skill when your prompt matches its description: building a chat, summarization, or extraction feature with a .litertlm model.

## What the skill covers (and what it skips)

The litert-lm skill (released in Android Skills v1.0.16) guides the agent through:

- Adding the `com.google.ai.edge.litertlm:litertlm-android:0.18.0` dependency (minSdk 24).
- Declaring the two native libraries required for the GPU backend in AndroidManifest.xml.
- Placing the model file outside the APK (adb push, in-app download, or Play for On-Device AI).
- Initializing the Engine on a background thread.
- Creating a Conversation and streaming replies with `sendMessageAsync`.
- Wiring an AndroidViewModel and a Jetpack Compose screen.

It deliberately does not cover image/audio inputs, tool calling, NPU backends, or model conversion. For those, use the companion litert-runtime skill or the official LiteRT-LM docs.

![Close-up of an AI assistant interface on a phone](https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?auto=format&fit=crop&w=800&q=80)

## Step-by-step: generate a chat app

Open a new Empty Activity project in Android Studio (or any Kotlin project). Then prompt your agent:

"Using the litert-lm skill, add an on-device chat feature that loads Gemma 4 E2B from the device filesystem, runs on GPU if available, and streams replies in a Compose screen."

The agent should follow the skill’s critical mandates:

- Add the dependency and verify with `./gradlew assembleDebug` before writing imports.
- Never call `Engine.initialize()` on the main thread.
- Own the Engine and Conversation with a single-thread executor.
- Close each resource exactly once.
- Pass an absolute filesystem path; never bundle the multi-hundred-MB model in assets/.

For GPU support the skill adds these lines inside the `<application>` tag:

```xml
<uses-native-library android:name="libvndksupport.so" android:required="false"/>
<uses-native-library android:name="libOpenCL.so" android:required="false"/>
```

It also adds the INTERNET permission if the app will download the model itself.

### Getting a model onto the device

Start with one of the recommended files from the litert-community organization on Hugging Face:

- `litert-community/gemma-4-E2B-it-litert-lm` (about 2.6 GB)
- `litert-community/Qwen3-0.6B` (about 0.6 GB)

For local testing the skill recommends adb:

```bash
adb push /path/to/model.litertlm /data/local/tmp/model.litertlm
adb shell run-as your.package.name cp /data/local/tmp/model.litertlm files/
```

Then pass the resulting absolute path to the ViewModel.

### The ViewModel pattern the skill enforces

The generated code uses a single-thread executor plus a Mutex so only one operation touches the engine at a time. It exposes a simple StateFlow of ready/busy/reply/error. Streaming collects the Flow returned by `sendMessageAsync` and appends each chunk. Cleanup happens in `onCleared` on the same executor so the close calls never race with a running generation.

## Tips for production use

- Prefer the GPU backend on modern devices; the skill reminds you that the OpenCL libraries must be declared or the first reply fails with “Can not find OpenCL library”.
- Cache the engine’s cacheDir so the second launch is faster.
- Show download progress and verify file size against the model card before calling initialize.
- For Hilt projects the skill notes a known metadata version mismatch with older Hilt releases and offers the two documented fixes.
- Test on a real device. Emulators lack the GPU/OpenCL path the skill targets.

The skill also points the agent at the official LiteRT-LM Android guide and README whenever an API call fails to compile, so the generated code stays current.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/BKWpYIWvAo4"
    title="TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps

Once the basic chat works, you can extend it with system instructions, sampling parameters (top-k, top-p, temperature), or a simple history list. For vision or audio features switch to the litert-runtime skill. If you want agents to call into your own app, look at the AppFunctions skill covered in earlier posts.

The combination of Android CLI + official skills turns any coding agent into a reliable Android specialist. The new litert-lm skill is the fastest way to ship private, offline LLM features today.

## Sources

- Android Skills v1.0.16 release: https://github.com/android/skills/releases/tag/v1.0.16
- Official litert-lm SKILL.md: https://github.com/android/skills/blob/v1.0.16/device-ai/litert/litert-lm/SKILL.md
- Android skills overview: https://developer.android.com/tools/agents/android-skills
- LiteRT-LM Android guide: https://developers.google.com/edge/litert-lm/android
- LiteRT-LM overview and benchmarks: https://developers.google.com/edge/litert-lm/overview
