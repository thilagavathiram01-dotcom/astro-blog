---
title: "How to Run On-Device LLMs on Android with LiteRT-LM"
description: "Add Google's LiteRT-LM Kotlin API to an Android app: Gradle dependency, GPU and NPU backends, Gemma 4 .litertlm models, streaming chat, multimodal input, and tool calling."
pubDate: 2026-09-18T23:05:00
tags: ["android", "ai-tools", "tutorials"]
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
---

ML Kit GenAI is the right path when you want Gemini Nano as a **system service**. LiteRT-LM is the path when you want to ship **your own** `.litertlm` model inside the app: Gemma 4, Gemma 3, Qwen, Phi, or a fine-tuned checkpoint, running on CPU, GPU, or NPU without a network hop.

LiteRT-LM is Google AI Edge's production orchestration layer on top of LiteRT (formerly TensorFlow Lite). It already powers on-device GenAI in Chrome, Chromebook Plus, and Pixel Watch. This guide walks through the official Android Kotlin API so you can chat, stream tokens, attach an image, and register tools from an app module.

## When to use LiteRT-LM instead of ML Kit

Use **ML Kit GenAI / Prompt API** when the device already has Gemini Nano via AICore and your task fits the high-level APIs.

Use **LiteRT-LM** when you need:

- A specific open model (Gemma 4 E2B is the featured on-device chat model)
- The same runtime on Android, JVM desktop, and (separately) iOS or web
- GPU or vendor NPU acceleration under your control
- Multimodal input (text, image, audio) and function calling in one conversation object
- No dependency on which Gemini Nano version AICore installed

Official numbers for **Gemma-4-E2B** (2.58 GB `.litertlm`) on a Samsung S26 Ultra: about **557 tokens/sec prefill and 47 tokens/sec decode on CPU**, and about **3808 / 52 tokens/sec on GPU**, with time-to-first-token around **1.8 s (CPU)** and **0.3 s (GPU)**. Treat those as published lab figures, not a guarantee for every SKU.

![Circuit board and electronics close-up representing on-device inference hardware](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## Try it before you write Gradle

The fastest way to feel the stack is the **Google AI Edge Gallery** app on Google Play. It loads community `.litertlm` files and is the same runtime you will call from Kotlin.

Models live in the [LiteRT Community on Hugging Face](https://huggingface.co/litert-community). Download a file such as `gemma-4-E2B-it.litertlm` (Gemma 4 E2B instruct) or a smaller `Gemma3-1B` package if you are iterating on a mid-range phone.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Z7zx_sTbFPI" title="Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM — Android Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Add the Android library

LiteRT-LM is built with Bazel, but Android apps consume a Maven artifact.

```kotlin
dependencies {
    implementation("com.google.ai.edge.litertlm:litertlm-android:latest.release")
}
```

Check [Google Maven (`litertlm-android`)](https://maven.google.com) for the current version if you prefer a pin over `latest.release`.

For GPU on Android, declare the optional native libraries inside `<application>` so the package manager can load OpenCL:

```xml
<uses-native-library android:name="libvndksupport.so" android:required="false"/>
<uses-native-library android:name="libOpenCL.so" android:required="false"/>
```

Ship the `.litertlm` file as an asset only if it is small. A 2.5 GB Gemma 4 file belongs in app-specific storage after a Play on-device AI pack, a first-run download, or an `adb push` during development.

## Initialize the engine off the UI thread

`Engine` is the process-wide runtime. Official docs warn that `initialize()` can take **up to about 10 seconds** while weights load. Run it on a background dispatcher.

```kotlin
import com.google.ai.edge.litertlm.Backend
import com.google.ai.edge.litertlm.Engine
import com.google.ai.edge.litertlm.EngineConfig

val engineConfig = EngineConfig(
    modelPath = modelFile.absolutePath,
    backend = Backend.GPU(),
    cacheDir = context.cacheDir.path,
)

val engine = Engine(engineConfig)
engine.initialize()
```

Backend options from the Kotlin guide:

- `Backend.CPU()` — widest device coverage
- `Backend.GPU()` — OpenCL; pair with the manifest entries above
- `Backend.NPU(nativeLibraryDir = context.applicationInfo.nativeLibraryDir)` — vendor NPU when libraries are bundled

Set `cacheDir` to a writable path. The docs note that a cache can improve **second** load time.

Always `close()` the engine (or use `use { }`) when the session is done so native memory is released.

![Developer laptop and smartphone on a desk during an Android build](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80)

## Open a conversation and stream tokens

A `Conversation` holds system instructions, optional few-shot turns, and sampler settings.

```kotlin
val conversationConfig = ConversationConfig(
    systemInstruction = Contents.of("You are a concise on-device assistant."),
    samplerConfig = SamplerConfig(topK = 10, topP = 0.95, temperature = 0.8),
)
val conversation = engine.createConversation(conversationConfig)
```

Three send paths exist:

1. `sendMessage(...)` — blocking, full reply
2. `sendMessageAsync(..., callback)` — `MessageCallback` with `onMessage` / `onDone` / `onError`
3. `sendMessageAsync(...)` returning a **Flow** — preferred in coroutines

```kotlin
conversation.sendMessageAsync("Summarize this receipt in three bullets.")
    .catch { /* surface error */ }
    .collect { chunk -> appendToUi(chunk.toString()) }
```

Close the conversation when the chat screen leaves the back stack.

### Faster GPU decode with MTP

Multi-Token Prediction is an experimental speculative-decoding flag. Official Android docs recommend it for **GPU** workloads. Enable it **before** `Engine.initialize()`:

```kotlin
@OptIn(ExperimentalApi::class)
ExperimentalFlags.enableSpeculativeDecoding = true
```

Do not treat MTP as a silent default. It is opt-in and marked experimental.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/boy-UjB8hpA" title="Bring the power of on-device AI to life with Google AI Edge and Gemma — Google for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Images, audio, and tools

Point `visionBackend` and `audioBackend` in `EngineConfig` if the model card says the checkpoint accepts those modalities. Then send mixed `Content`:

```kotlin
conversation.sendMessage(
    Contents.of(
        Content.ImageFile(imagePath),
        Content.Text("Describe the label and list allergens."),
    )
)
```

For agent-style work, implement `ToolSet` and annotate methods with `@Tool` / `@ToolParam`. Supported parameter types are `String`, `Int`, `Boolean`, `Float`, `Double`, and lists of those types. Return a `Map` when you want structured JSON back to the model. Register the tool set on `ConversationConfig`.

Keep tools local and deterministic: look up a room from Room, format a date, or hit an API you already own. Do not expose destructive device actions without a confirmation UI.

![Android phone in a person's hand against a city background](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80)

## A practical first feature

A useful first ship is **offline itinerary cleanup**, similar to the travel-app pattern Google has described for on-device summarization:

1. Download Gemma 4 E2B (or Gemma 3 1B for a smaller APK experiment) into app files.
2. Initialize `Engine` with GPU, falling back to CPU if `initialize()` throws.
3. Create one conversation per screen visit with a short system prompt: *Return only JSON with keys title, days, and warnings.*
4. Stream the reply into a Compose `Text` and parse JSON when `onDone` fires.
5. Close conversation and engine when the user leaves.

Measure first-token latency on a mid-range phone before you promise "instant" copy in Play listing text. GPU prefill on flagship silicon is fast; first load of a 2.5 GB file is not.

## Habits that keep the binary honest

- Prefer Play **on-device AI packs** or on-demand delivery over stuffing weights in the base APK.
- Pin a Maven version in release builds.
- Log which backend actually started (`CPU` / `GPU` / `NPU`) so support tickets are diagnosable.
- Re-read the model card for context length and quantization before you raise `SamplerConfig`.
- If the task is "summarize this notification" on a Pixel that already has Nano, consider ML Kit first and keep LiteRT-LM for custom models.

## Conclusion

LiteRT-LM is how you run a real `.litertlm` LLM inside an Android process with an official Kotlin API: Gradle dependency, engine on a background thread, conversation object, optional GPU MTP, then multimodal content and tools when the checkpoint supports them. Start with the Gallery app and Gemma 4 E2B, then copy the engine-and-flow pattern into one bounded feature rather than wrapping the entire product on day one.

## Sources

- [LiteRT-LM Overview](https://developers.google.com/edge/litert-lm/overview) — Google AI Edge
- [Get Started with LiteRT-LM on Android](https://developers.google.com/edge/litert-lm/android) — Google AI Edge
- [Run LLMs using LiteRT-LM](https://developers.google.com/edge/litert/next/litert_lm_npu) — Google AI Edge
- [Use LiteRT on Android](https://developer.android.com/ai/custom) — Android Developers
- [Blazing fast on-device GenAI with LiteRT-LM](https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/) — Google Developers Blog
- [LiteRT-LM GitHub repository](https://github.com/google-ai-edge/LiteRT-LM)
- [LiteRT Community models](https://huggingface.co/litert-community)
- [Deploy Android on-device AI with ML Kit GenAI and LiteRT-LM](https://www.youtube.com/watch?v=Z7zx_sTbFPI) — Android Developers
- [Bring on-device AI to life with Google AI Edge and Gemma](https://www.youtube.com/watch?v=boy-UjB8hpA) — Google for Developers
