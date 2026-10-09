---
title: "How Developers Can Run Android Models on ML Drift GPU"
description: "Switch Android on-device inference to the LiteRT ML Drift GPU accelerator. Add the 2.3.0 packages and run CompiledModel on GPU."
pubDate: 2026-10-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "ai", "google"]
noindex: false
---

On 8 October 2026, Google AI Edge open-sourced ML Drift, the GPU compute engine inside LiteRT. It replaces the TensorFlow Lite GPU delegate, which will not receive new feature updates.

The practical change for an Android app is small. You add the LiteRT GPU package, compile the same `.tflite` model with `Accelerator.GPU`, and run it through the `CompiledModel` API. Google says that path is backwards compatible with existing models and already powers YouTube Shorts, Photos, Meet, Chrome, Adobe Lightroom, and Snapchat lenses.

This guide covers the Android Kotlin path, the GPU backends ML Drift actually uses, and what the launch numbers do and do not claim.

## What ML Drift changes

ML Drift is an Apache 2.0 library at [github.com/google-ai-edge/ml-drift](https://github.com/google-ai-edge/ml-drift). It is the GPU accelerator inside LiteRT, and it is also available as a standalone library for custom runtimes. It hides OpenGL ES, OpenCL, Metal, and WebGPU behind one shader model.

The old TFLite GPU delegate was hardcoded to 4D tensors. ML Drift adds 5D tensor support, so models such as YOLO 11n, MobileViT v2, and Swin Transformer v2 can run on the edge GPU without layout hacks. A custom-op registration API lets you add specialized shaders. Google also ships an agent skill file so a coding agent can author and check those shaders.

For autoregressive models, ML Drift switches kernels between the compute-heavy prefill stage and the memory-bound decode stage. Decode uses a convolution-aligned KV cache layout and in-kernel activation quantization so the runtime does not bounce activations back to memory on every token.

Google measured production wins, not a single lab score. YouTube Shorts segmentation effects cut average frame latency by up to 40% on Android and iOS. Google Photos saw up to a 2 second speedup versus the legacy GPU delegate on unblur-style pipelines. Adobe reported up to 30% faster on-device performance for Select Subject, Select Sky, and Adaptive Portrait. Snap reported 30% lower latency on face and style effects in Snapchat lenses.

An earlier LiteRT post, from January 2026, said ML Drift GPU averaged 1.4x faster than the TFLite GPU delegate across a broad model set. Treat that as a historical average, not a guarantee for your graph.

![Developers reviewing an on-device model pipeline on laptops](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)

## Add the GPU package

The current GPU guide on Google AI for Developers pins these Maven coordinates:

```kotlin
dependencies {
    implementation("com.google.ai.edge.litert:litert:2.3.0")
    implementation("com.google.ai.edge.litert:litert-gpu:2.3.0")
}
```

The second artifact bundles `libLiteRtClGlAccelerator.so`, the Android GPU accelerator. Without it, `Accelerator.GPU` has nothing to load.

Play Services is a separate path. Google says ML Drift acceleration is available today in standalone LiteRT packages and is coming soon to LiteRT in Google Play Services. If you still depend on `play-services-tflite` to keep the APK small, do not assume the new accelerator is in that runtime yet.

Place the `.tflite` file in `src/main/assets`. The official image-segmentation sample under [litert-samples](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation) is the reference for CPU, GPU, and NPU in one app.

If you are also embedding private photos or notes on device, pair this runtime with [EmbeddingGemma 2 on-device search](/blog/embeddinggemma-2-on-device-search/). That model is a retrieval layer. ML Drift is the GPU engine that can run the converted graph.

## Compile and run on GPU

The `CompiledModel` API is the recommended interface. The older Interpreter API still works for migration, but it does not expose the new accelerator options.

1. Create an environment, then compile the asset for GPU.

```kotlin
val env = Environment.create()
val model = CompiledModel.create(
    context.assets,
    "mymodel.tflite",
    CompiledModel.Options(Accelerator.GPU),
    env,
)
```

2. Allocate input and output buffers once. Reuse them across frames.

```kotlin
val inputBuffers = model.createInputBuffers()
val outputBuffers = model.createOutputBuffers()
```

3. Write a float input, run, and read the output.

```kotlin
inputBuffers[0].writeFloat(FloatArray(dataSize) { value })
model.run(inputBuffers, outputBuffers)
val output = outputBuffers[0].readFloat()
```

On Android, LiteRT prefers OpenCL when the driver exposes it and falls back to OpenGL for wider coverage. The GPU guide lists Android as OpenCL plus OpenGL, Linux as WebGPU over Vulkan, Windows as WebGPU over Direct3D, and macOS as Metal. Desktop WebGPU builds are previews. Mobile is the production target.

C++ apps pass `kLiteRtHwAcceleratorGpu` to `CompiledModel::Create` and link `litert_gpu_accelerator_prebuilts()` plus GLES deps. The same model file is used.

## Use zero-copy when the frame is already on the GPU

Copying a camera frame to CPU memory and back is often slower than the network itself. LiteRT can wrap an existing OpenGL buffer:

```cpp
auto gl_input = TensorBuffer::CreateFromGlBuffer(
    env, tensor_type, opengl_buffer.target, opengl_buffer.id,
    opengl_buffer.size_bytes, opengl_buffer.offset);
compiled_model.Run({gl_input}, output_buffers);
```

If the output stays on the GPU, read it as an OpenCL buffer instead of pulling floats to the CPU. For camera pipelines, call `RunAsync` and attach an EGL sync fence event to the input so the GPU does not read a texture that is still being written. The CPU can keep doing other work until you read the output buffer.

The async segmentation C++ sample in litert-samples is the working version of that pattern.

![Code on a laptop screen during a mobile inference test](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Check that the graph actually landed on the GPU

A successful `run()` does not prove every op was delegated. Official GPU benchmarks on a Samsung Galaxy S24 list many vision and audio models as fully delegated, including EfficientNet-B0 at 3.6 ms and MobileViT-small at 8.7 ms. Larger segmentation nets such as DeepLabV3-ResNet101 landed at 35.1 ms on that device. Your numbers will differ.

Unsupported ops fall back to CPU. That fallback can erase the win if it happens in the middle of the graph. Test on at least one Adreno device and one Mali or Immortalis device. Google co-tuned OpenCL kernels with Qualcomm for Adreno, and texture-cache locality with Arm for Mali and Immortalis.

For generative models, Google's desktop chart used Gemma with 4-bit weights, fp16 KV cache, and argmax sampling. ML Drift showed up to 12% lower memory overhead than other frameworks in those Gemma runs. That figure is a memory comparison, not a tokens-per-second promise.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/KIp8PAU3oAI"
    title="Create agent skills for on-device generative AI (I/O Connect ‘26)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you ship the switch

Keep a CPU build flag. GPU driver bugs still show up on older Android versions. A runtime fallback to `Accelerator.CPU` is safer than a crash on first launch.

Do not bundle Play Services and the standalone GPU `.so` unless you have measured the APK size. The standalone package is the one that has ML Drift today.

Reuse buffers. Allocating input tensors every frame hides the kernel speedup.

Profile frame time, not just model time. Shorts and Photos wins came from the full pipeline, including less copying.

File missing ops on the [ML Drift issue tracker](https://github.com/google-ai-edge/ml-drift/issues). The legacy delegate is frozen, so new coverage lands here.

## Conclusion

ML Drift is the GPU engine Google now expects Android apps to use for LiteRT. The migration is a package bump to `litert` and `litert-gpu` 2.3.0, then `CompiledModel` with `Accelerator.GPU`.

Start with a model you already run on the TFLite GPU delegate, confirm delegation on two GPU vendors, and only then turn on zero-copy or async execution. The published speedups are real on Google's and partners' pipelines. Your graph still needs its own trace.

## Sources

- Google Developers Blog, “ML Drift: Next-Gen GPU AI/ML Inference at the Edge,” 8 October 2026: https://developers.googleblog.com/ml-drift-next-gen-gpu-aiml-inference-at-the-edge/
- Google AI for Developers, “GPU acceleration with LiteRT”: https://developers.google.com/edge/litert/next/gpu
- Google AI for Developers, “Getting started with LiteRT”: https://developers.google.com/edge/litert/overview
- Source: https://github.com/google-ai-edge/ml-drift
- Samples: https://github.com/google-ai-edge/litert-samples
- Google for Developers, “Create agent skills for on-device generative AI (I/O Connect ‘26),” YouTube, 6 July 2026: https://www.youtube.com/watch?v=KIp8PAU3oAI
