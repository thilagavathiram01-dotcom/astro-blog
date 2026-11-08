---
title: "Author On-Device Models with LiteRT Tensor API Guide"
description: "Learn how to build custom on-device ML models in C++ with Google's LiteRT Tensor API. Full control, zero-copy pipelines, and cross-platform runs."
pubDate: 2026-11-08T12:00:00
heroImage: "https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "android", "ai"]
noindex: false
---

Google released the LiteRT Tensor API in October 2026 as a lightweight C++ authoring layer on top of the LiteRT runtime. It lets developers write model graphs op by op instead of converting from PyTorch or TensorFlow. The same code runs on CPU, GPU via open-source ML Drift, or NPU, and it exports to standard .tflite files when needed.<grok type="render_inline_citation" citation_id="364" />

This guide shows what the API offers, why it matters for edge deployments, and how to start building with it. For related Android AI work, see our [Gemini 4 Argon Firebase AI Logic guide](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

## Why Author Models Directly in C++

Most production models still follow the conversion path: train in a high-level framework, export, then run with LiteRT. That remains the recommended default. The Tensor API targets cases where you need precise control over graph structure, custom ops, or end-to-end accelerator residency.

You define every connection. Pre-processing, the network, and post-processing share accelerator buffers with zero CPU copies. Coding agents can generate, validate, and optimize the C++ graph because it is plain source rather than opaque weights. Google used an agent to evolve a Segment Anything Model 2 (SAM 2) pipeline from under 10 fps to over 30 fps at 512	imes512 on WebGPU.<grok type="render_inline_citation" citation_id="394" />

![AI chip on a circuit board](https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&w=800&q=80)

## Core Features of the Tensor API

The API provides four practical capabilities:

- Full graph control: element-wise math, activations, matmul, convolution, RMSNorm, scaled dot-product attention, and KV-cache updates.
- Direct weight loading from Hugging Face .safetensors checkpoints without intermediate conversion scripts.
- Tensor-centric buffer interoperability so intermediate data stays on the GPU or NPU.
- A foundation for AI coding agents that can rewrite ops and benchmark variants on device.

You can run the graph two ways. Tag tensors with TfLiteMixinTag to export a .tflite that LiteRT executes on CPU, ML Drift GPU, or NPU. Tag with XnnpackMixinTag to run directly on CPU through XNNPACK with no model file. Iterate on the direct path, then export for shipping.<grok type="render_inline_citation" citation_id="386" />

## Step-by-Step: Get Started

Clone the LiteRT repository and the samples.

```bash
git clone https://github.com/google-ai-edge/LiteRT.git
git clone https://github.com/google-ai-edge/litert-samples.git
```

Build the Tensor API examples with Bazel. The Gemma 4 example runs prefill and decode directly on XNNPACK:

```bash
bazel build //tensor/examples/gemma4:gemma4_xnnpack_main
```

Pass weights and a tokenizer from a .safetensors checkpoint. The same pattern works for custom graphs.

For the full SAM 2 video segmentation demo (11 signatures, shared weights, GPU-resident memory bank), follow the litert-samples README. It compiles to WebAssembly and runs at roughly 30 fps on WebGPU in Chrome on an M4 Pro. The web demo is available at the public LiteRT.js SAM 2 page.<grok type="render_inline_citation" citation_id="394" />

## Build a Simple Graph

A minimal scale model looks like ordinary C++ math:

```cpp
#include "tensor/tensor.h"

Tensor ScaleModel(const Tensor& x, const Tensor& scale) {
  return Mul(x, scale);
}
```

Load weights, set inputs, and run. On GPU the MlDriftMixinTag lowers the graph straight into an ML Drift GpuModel for OpenCL or WebGPU without a .tflite intermediate. Pre- and post-processing graphs connect once at startup and share buffers for every frame.

In the SAM 2 sample all 522 encoder and 269 decoder operations stay on the GPU; pre- and post-processing add about 0.34 ms per frame. Google measured the same C++ code on a MacBook Pro (Metal), iOS (Metal), and Android (OpenCL). On the Mac it ran roughly 1.5× faster than Apple MLX for the image encoder plus mask decoder.<grok type="render_inline_citation" citation_id="394" />

![Microchip on circuit board](https://images.unsplash.com/photo-1782015855555-b4efec15b5dd?auto=format&fit=crop&w=800&q=80)

## Practical Tips

Start with conversion for standard models. Switch to the Tensor API when you need a custom attention variant, zero-copy camera pipelines, or agent-driven optimization.

Use the direct XNNPACK path for rapid iteration. Export .tflite only when you are ready for LiteRT on mobile or LiteRT.js on the web.

Keep numerical checks against a reference implementation (PyTorch or Hugging Face) as the SAM 2 sample does. Coding agents work well because the graph is source you can diff and re-benchmark.

Future work listed by Google includes direct ML Drift GPU backends, more NPU-friendly ops, automatic full-graph quantization, and Python authoring with .tflite export.<grok type="render_inline_citation" citation_id="394" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/LiBWWJ9IKag"
    title="Mastering on-device intelligence with ML Kit and LiteRT in Google Play services"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The LiteRT Tensor API gives developers the control previously reserved for hand-written Metal or OpenCL shaders while keeping portability across CPU, GPU, and NPU. It pairs naturally with coding agents and with the existing LiteRT CompiledModel path used in Google Play services.

If you are already shipping custom models on Android, start with the SAM 2 sample and the Tensor API README. The conversion path stays the fastest route for most projects; the Tensor API is the tool for the ones that need tighter control.

## Sources

- Google Developers Blog: Native Model Authoring for Edge with LiteRT Tensor API (19 October 2026)
- LiteRT Tensor API README and samples on GitHub
- Android Developers session on ML Kit and LiteRT in Google Play services
