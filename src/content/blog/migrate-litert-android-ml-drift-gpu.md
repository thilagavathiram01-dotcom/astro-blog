---
title: "Migrate LiteRT Android apps to Google's ML Drift GPU"
description: "Migrate Android LiteRT apps to ML Drift, Google's open-source GPU engine for on-device inference, and drop the legacy TFLite GPU delegate."
pubDate: 2026-10-09T10:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "android", "ai", "tutorials", "how-to"]
noindex: false
---

Google open-sourced ML Drift on 8 October 2026. It is the GPU compute engine inside LiteRT, and it also ships as a standalone library under the Apache 2.0 license. If your Android app still calls the TensorFlow Lite GPU delegate, this is the migration Google wants you to make.

The legacy delegate will not get new features. LiteRT's ML Drift GPU accelerator is backwards compatible with existing models and is already in standalone LiteRT packages. Support in LiteRT through Google Play Services is listed as coming soon.

## What ML Drift actually replaces

Edge GPUs are not a single target. Drivers, shader languages, and memory layouts differ across phones, laptops, and browsers. The old TFLite GPU delegate hardcoded logical tensors to physical GPU objects separately for OpenGL, OpenCL, and Metal. It was also limited to 4D tensors, so 5D layouts needed workarounds.

ML Drift abstracts OpenGL ES, OpenCL, Metal, and WebGPU behind one engine. Tensor virtualization separates a tensor's logical shape from how it is stored on the GPU, so shader templates resolve coordinates at compile time instead of carrying three backend-specific codebases. Custom ops can be registered with low-level shading language access. The repo includes an agentic SKILL.md so coding agents can author and check custom shaders.

5D tensor support is on by default in the LiteRT ML Drift GPU accelerator. Google cites YOLO 11n, MobileViT v2, and Swin Transformer v2 as models that can now run on edge GPUs without layout hacks.

![Circuit board close-up representing on-device GPU compute](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Where it already runs

ML Drift is not a lab preview. Google says it already powers features in Chrome, YouTube Shorts, Photos, Meet, and AI Edge Gallery across millions of devices.

Reported production results from the launch post:

- YouTube Shorts moved segmentation effects to ML Drift and measured up to a 40% drop in average frame latency on Android and iOS.
- Google Photos reported up to a 2 second speedup versus the legacy GPU delegate on computational photography and segmentation pipelines.
- Adobe Lightroom and Photoshop moved Select Subject, Select Sky, and Adaptive Portrait to ML Drift and measured up to 30% faster on-device editing on mobile.
- Snap measured 30% lower model latency for face and style effects in Snapchat lenses on Android.

Chrome uses ML Drift for hardware-accelerated Gemini Nano in Built-in AI APIs, including Prompt, Summarizer, and Writer. On the desktop side, the same WebGPU codebase compiles outside the browser through Dawn, so Windows and Linux use WebGPU while macOS keeps a native Metal path.

For autoregressive models, ML Drift switches kernels between prefill and decode. Prefill is compute-bound. Decode is memory-bandwidth-bound. During decode it uses a convolution-aligned KV cache layout and in-kernel activation quantization. Google's Gemma benchmarks also report up to 12% lower memory overhead than other frameworks in that comparison.

Silicon partners named in the post are Arm (Mali and Immortalis), Intel (WebGPU plus Xe Matrix Extensions on Core Ultra with Xe3), and Qualcomm (OpenCL kernels on Adreno).

## Step 1: Add the GPU package

Google's LiteRT GPU docs show this Kotlin dependency set for the CompiledModel path. Confirm the version in Maven before you pin it. The docs example uses 2.3.0:

```kotlin
dependencies {
    implementation("com.google.ai.edge.litert:litert:2.3.0")
    implementation("com.google.ai.edge.litert:litert-gpu:2.3.0")
}
```

The `litert-gpu` artifact bundles the Android GPU accelerator (`libLiteRtClGlAccelerator.so`). That is the package that brings ML Drift into an unbundled app binary. If you still ship the TFLite GPU delegate only, adding this dependency is the first concrete switch.

C++ apps load the LiteRT C API shared library plus GPU accelerator prebuilts, and they link GLES on Android. The build instructions live in the LiteRT repository under GPU build docs.

## Step 2: Compile the model for GPU

Use `CompiledModel`, not a manually attached delegate. The Kotlin path from the official GPU guide looks like this:

```kotlin
val model = CompiledModel.create(
    context.assets,
    "mymodel.tflite",
    CompiledModel.Options(Accelerator.GPU),
    env,
)

val inputBuffers = model.createInputBuffers()
val outputBuffers = model.createOutputBuffers()
inputBuffers[0].writeFloat(FloatArray(dataSize) { value })
model.run(inputBuffers, outputBuffers)
val output = outputBuffers[0].readFloat()
```

`Accelerator.GPU` is the switch. LiteRT picks the backend for the platform: OpenCL plus OpenGL on Android, Metal on macOS, and WebGPU on Windows and Linux.

Keep a CPU fallback for devices where the GPU path fails to compile an op. Fully delegated models in Google's Galaxy S24 table include MobileViT-small at 8.7 ms and EfficientNet-B0 at 3.6 ms. Those numbers are device-specific. Measure on your own handsets before you quote them in a release note.

## Step 3: Cut copies on the camera path

GPU speed disappears if every frame is copied to CPU memory and back. LiteRT can wrap an existing OpenGL buffer as a `TensorBuffer` and run without that copy. The C++ guide creates the buffer with `TensorBuffer::CreateFromGlBuffer`, runs the compiled model, and can read the output as an OpenCL buffer.

For pipelines that also use the CPU or an NPU, `RunAsync()` plus a managed EGL sync-fence event keeps the GPU from reading a buffer that is still being written. The CPU can keep working until you read the output.

That pattern matches how Shorts and Photos use the engine: segmentation and unblur stay on the GPU, and the frame stays in graphics memory.

![Developer laptop on a desk used for on-device model testing](https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80)

## Step 4: Check 5D and custom ops

If your model needed reshape hacks to fit the 4D TFLite GPU delegate, remove them and recompile against ML Drift. 3D convolutions and spatiotemporal blocks are the cases Google calls out.

Proprietary blocks that never delegated should go through the custom op registration API. Do not leave those ops on CPU if they sit in the middle of a GPU graph. A single CPU fallback in the middle forces extra copies and can erase the frame-time win.

For local LLMs, compare prefill and decode separately. A faster prefill with a slower decode still feels laggy in chat. The launch post's stage-aware kernels exist for that split. If you are already running Gemma with LiteRT-LM, read the [on-device LLM setup guide](/blog/litert-lm-android-on-device-llm/) and then point the GPU accelerator at the same runtime.

## Tips before you ship

Profile thermal, not just a cold start. A 30% latency cut that only lasts ten seconds is not a camera feature. Google's partner numbers are peak or average frame results from their own pipelines, not a guarantee for your model.

Quantize weights the way your runtime expects. The Gemma charts in the launch post use 4-bit weights with block size 32 and an fp16 KV cache. Mixing layouts between the converter and ML Drift will show up as a failed delegation, not a small slowdown.

Watch binary size. Standalone `litert-gpu` ships the accelerator in the APK. Play Services delivery is the smaller path once it lands. Until then, measure the download delta on a mid-range device.

File issues on the [google-ai-edge/ml-drift](https://github.com/google-ai-edge/ml-drift) tracker if an op that delegated on the old GPU path fails on ML Drift. Backwards compatibility is the stated goal, but new shader compilation can still miss an op.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8c68vFpT9Tk"
    title="Google Just Made TensorFlow.js Obsolete (LiteRT.js)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## What to do this week

Add `litert-gpu`, compile with `Accelerator.GPU`, and run your current `.tflite` model on one recent Adreno device and one Mali device. Log which ops stay on CPU. Then try the OpenGL zero-copy path if the model sits on a camera or preview surface.

ML Drift does not change your model file format. It changes the engine under LiteRT, and it closes the 4D and backend-split limits that the old delegate carried. That is the migration worth scheduling before the legacy GPU delegate stops receiving fixes.

## Sources

- Google Developers Blog, "ML Drift: Next-Gen GPU AI/ML Inference at the Edge," 8 October 2026: https://developers.googleblog.com/ml-drift-next-gen-gpu-aiml-inference-at-the-edge/
- LiteRT GPU acceleration: https://developers.google.com/edge/litert/next/gpu
- ML Drift source: https://github.com/google-ai-edge/ml-drift
- LiteRT overview: https://ai.google.dev/edge/litert
