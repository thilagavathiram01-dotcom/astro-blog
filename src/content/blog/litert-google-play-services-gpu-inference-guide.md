---
title: "Use LiteRT in Google Play Services for Faster GPU Inference"
description: "Switch to LiteRT in Google Play services for 8 MB smaller apps and 1.4x faster GPU inference with CompiledModel API on Android."
pubDate: 2026-10-31T14:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "ai-tools"]
noindex: false
---

Android apps that ship custom machine learning models have carried a heavy runtime for years. Google’s October 28, 2026 update to LiteRT in Google Play services changes that. The shared runtime now delivers GPU inference about 1.4 times faster than the legacy TensorFlow Lite GPU delegate, and apps that switch drop roughly 8 MB in size because the engine no longer lives inside every APK.<grok type="render_inline_citation" citation_id="364" />

LiteRT is the successor to TensorFlow Lite. It keeps the same `.tflite` model format while introducing the CompiledModel API as the modern path for CPU and GPU acceleration. More than 100,000 Android apps still bundle their own copy of LiteRT or TensorFlow Lite today. Moving to the Play services version lets those apps share one updated runtime across the device.<grok type="render_inline_citation" citation_id="364" />

## Why switch to LiteRT in Google Play services

The upgrade brings four practical gains. First, APKs shrink because the runtime and GPU accelerator ship once with Play services. Second, performance and security fixes arrive through staged Play services rollouts without requiring an app update. Third, the runtime runs on phones back to Android 7 (API 24) and now also on Wear OS 4+ and Android Automotive OS (Android 11+). Fourth, it is the same infrastructure already used by ML Kit Vision and Text APIs at scale.<grok type="render_inline_citation" citation_id="364" />

![Android developer reviewing code on a laptop](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

The CompiledModel API replaces the older Interpreter path for new work. It uses one workflow for CPU and GPU. LiteRT prefers OpenCL when available and falls back to OpenGL. Requesting both GPU and CPU means the runtime drops to CPU on devices without a usable GPU. The engine underneath is ML Drift, the open-source GPU stack already running in Google apps on millions of devices.<grok type="render_inline_citation" citation_id="364" />

## Add the dependency and initialize the environment

Start by adding the Play services artifact and removing any bundled LiteRT dependency:

```groovy
dependencies {
    implementation("com.google.android.gms:play-services-litert:17.0.0")
    // Remove com.google.ai.edge.litert:litert and litert-gpu if present
}
```

Set `minSdk` to 24. Then obtain the environment from Play services. Enable GPU in the initialization options:

```kotlin
import com.google.android.gms.litert.LiteRt
import com.google.android.gms.litert.LiteRtDsl.initializationOptions
import kotlinx.coroutines.tasks.await

suspend fun getEnvironment(context: Context): Environment {
    val options = initializationOptions {
        setEnableGpu(true)
    }
    return LiteRt.initialize(context, options).await()
}
```

Pass that environment when you create the CompiledModel. Existing `.tflite` files work without conversion.<grok type="render_inline_citation" citation_id="364" />

## Run inference with CompiledModel and GPU fallback

Create the model with GPU first and CPU as fallback:

```kotlin
val compiledModel = CompiledModel.create(
    context.assets,
    "model.tflite",
    CompiledModel.Options(Accelerator.GPU, Accelerator.CPU),
    environment
)

val inputBuffers = compiledModel.createInputBuffers()
val outputBuffers = compiledModel.createOutputBuffers()

// Write input data, then run
inputBuffers[0].writeFloat(yourInputArray)
compiledModel.run(inputBuffers, outputBuffers)

val results = outputBuffers[0].readFloat()
```

If the device cannot load the GPU accelerator, initialization still succeeds and the CPU path handles the request. Test on a real device because operator coverage and driver behavior vary. NPU support through Play services is planned but not available in this release; use standalone LiteRT if you need NPU today.<grok type="render_inline_citation" citation_id="375" />

![Smartphone showing an app interface on a desk](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80)

## Migration tips and Android Studio skill

If you already use the Interpreter API inside Play services, your existing CPU code continues to work after you switch the dependency to `play-services-litert`. Move to CompiledModel when you want GPU. Legacy GPU delegates and custom delegates are deprecated; NNAPI removal begins in 2027. Older SDKs receive only critical security fixes going forward.<grok type="render_inline_citation" citation_id="364" />

Android Studio’s LiteRT skill automates the move. In Agent Mode, ask it to “migrate my TFLite code to CompiledModel” or type `@litert-runtime`. It updates the dependency, rewrites Interpreter calls, and sets up GPU with CPU fallback. Review the diff and compare outputs on-device before shipping. The skill is available on GitHub under the Android skills repository.<grok type="render_inline_citation" citation_id="364" />

For apps that already use on-device generative features, pair this runtime change with the ML Kit GenAI APIs covered in our guide to [building on-device agents with Gemini Nano 4](/blog/build-on-device-agents-gemini-nano-4-ml-kit/). The shared Play services runtime keeps both classical models and GenAI features lighter on disk.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/iMVLoZaJ_1M"
    title="Top 3 announcements for AI on Android at Google I/O 2025"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to watch next

LiteRT in Play services will continue to receive GPU improvements and broader model coverage. NPU support is actively under development. Apps that adopt the shared runtime today gain smaller downloads, automatic updates, and the same battle-tested path used by Google’s own vision and text APIs. Start with the dependency change, test GPU fallback on a few devices, and ship the smaller APK. The docs and the Android Studio skill make the transition a short, reviewable pass rather than a rewrite.

**Sources**
- Google Developers Blog: Smaller apps and faster GPU inference with LiteRT in Google Play services (Oct 28, 2026)
- LiteRT in Google Play services documentation
- CompiledModel API guides for Kotlin and C++
