---
title: "How to Author On-Device Models with LiteRT Tensor API"
description: "Step-by-step guide to building custom ML graphs with Google's LiteRT Tensor API for Android and edge devices using C++."
pubDate: 2026-11-09T11:00:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "android", "tutorials", "developer", "ai"]
noindex: false
---

Google released the LiteRT Tensor API in October 2026 to give developers full control over on-device model graphs. Most projects still convert trained models to .tflite and run them with the LiteRT runtime. The Tensor API targets cases where you need to define every operation yourself or optimize for specific hardware.

This guide shows how to get started with the C++ API, build a simple graph, and run it on CPU or export for LiteRT on Android.

## Why use the Tensor API

Standard conversion works for most models. The Tensor API helps when you need custom architectures, direct weight loading from .safetensors, or zero-copy pipelines that stay on the GPU or NPU. The same C++ code can target XNNPACK for CPU, ML Drift for GPU, or export a .tflite file.

Google demonstrated this with Segment Anything Model 2 (SAM 2). The full encoder and decoder were authored in C++. A coding agent improved frame rates from under 10 to over 30 fps at 512x512 on WebGPU. The same graph ran on macOS Metal, iOS Metal, and Android OpenCL.

![Laptop showing code in an IDE](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need the LiteRT repository. Clone it:

```bash
git clone https://github.com/google-ai-edge/LiteRT.git
cd LiteRT
```

Build tools differ by platform. Bazel is the primary option inside the repo. CMake works for host and Android builds. For Android, install the NDK (r26a or later) and set ANDROID_NDK_HOME.

The API lives under the tensor/ directory. Documentation is in tensor/README.md and tensor/tensor_api.md.

## Build a simple graph

The API is tensor-centric. You define functions that take inputs and return outputs using ops like Mul, Add, or more complex composites.

Here is a minimal scale operation from the official examples:

```cpp
#include "tensor/arithmetic.h"
#include "tensor/tensor.h"

struct Inputs {
  Tensor x;
  Tensor scale;
};

struct Outputs {
  Tensor y;
};

Outputs ScaleModel(Inputs& in) {
  return {.y = Mul(in.x, in.scale)};
}
```

To run it on CPU with XNNPACK (no model file needed):

```cpp
#include "tensor/backends/xnnpack/arithmetic.h"
#include "tensor/runners/xnnpack/runner.h"

// Set up inputs and runner
Inputs inputs = {
  .x = TensorXNN({.type = Type::kFP32, .shape = {1, 1, 4}}),
  .scale = TensorXNN({.type = Type::kFP32, .shape = {}}),
};
Outputs outputs;

XnnpackRunner<decltype(&ScaleModel), Inputs, Outputs> runner(
    &ScaleModel, inputs, outputs);

// Fill and run
runner.SetInput("x", std::vector<float>{1.0f, 2.0f, 3.0f, 4.0f});
runner.SetInput("scale", std::vector<float>{2.0f});
runner.Run();
```

The same function body works for other backends by changing the mixin tag on the Tensor type.

## Export to .tflite for LiteRT

For Android or browser deployment, export the graph. Tag tensors with TfLiteMixinTag and use ModelFactory to produce a .tflite file with signatures.

```cpp
// Conceptual: build graph then
ModelFactory factory;
factory.Export(encoder_graph, "encoder");
factory.Export(decoder_graph, "decoder");
factory.Save("model.tflite");
```

On Android, load the file with the CompiledModel API from the litert dependency or Google Play services. See related guides on on-device AI for integration patterns.

![Multiple monitors with code](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Zero-copy pipelines

A production app needs pre-processing, inference, and post-processing. The Tensor API lets you chain graphs that share accelerator buffers. Data never returns to the CPU between steps.

In the SAM 2 sample, pre-processing resizes the frame, the encoder extracts features, the decoder produces the mask, and post-processing scales it back—all on GPU. Pre- and post-processing added about 0.34 ms per frame.

Build small lambda runners for pre/post steps and connect them once at startup. This pattern works for camera pipelines, audio, or any streaming input.

## Tips for success

- Start with the XNNPACK path for fast iteration. Load weights directly from .safetensors.
- Compare outputs against a PyTorch or reference implementation before optimizing.
- Use coding agents with the Tensor API README and SAM 2 sample. Agents can rewrite graphs for specific backends.
- For Android, cross-compile with Bazel `--config=android_arm64` or CMake with the NDK toolchain.
- GPU on device requires the matching accelerator library (libLiteRtClGlAccelerator.so).

The API is still evolving. Check the LiteRT GitHub for updates on ML Drift GPU backends, NPU ops, and Python authoring.

## Related reading

If you are integrating on-device models into Android apps, review our guide on [Android AI Seal for on-device AI vaults](/blog/android-aiseal-on-device-ai-vault/).

## Watch the Android Dev Summit keynote

The October 2026 Android Dev Summit covered on-device intelligence and related APIs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The LiteRT Tensor API gives precise control for edge ML when conversion is not enough. Define graphs in C++, choose the backend, and keep data on the accelerator. Start with the official samples and the README in the LiteRT repository.

## Sources

- Google Developers Blog: Native Model Authoring for Edge with LiteRT Tensor API (October 19, 2026)
- LiteRT GitHub: tensor/README.md and tensor/tensor_api.md
- LiteRT Samples: SAM 2 and Gemma examples
- Android Developers documentation on LiteRT CompiledModel
