---
title: "How to Build On-Device Models with LiteRT Tensor API"
description: "Author custom on-device ML models in C++ with Google's LiteRT Tensor API. Run the same graph on CPU, GPU, or NPU."
pubDate: 2026-11-04T09:00:00
heroImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Google released the LiteRT Tensor API so developers can build machine learning graphs directly in C++. You write the operations once. The same code runs on CPU through XNNPACK, on GPU via ML Drift, or through LiteRT on NPU hardware. No separate backend rewrite is required.

This matters when conversion tools cannot produce the exact graph you need. Custom attention layers, pre-processing that must stay on the accelerator, or post-processing that shares buffers all become straightforward. The API also works well with coding agents that generate and optimize C++ model graphs.

## What the LiteRT Tensor API Provides

The Tensor API sits on top of the LiteRT runtime. It gives four main capabilities:

- Full control over graph structure. You choose every operation and every connection. Supported operations include element-wise math, matmul, convolution, normalization, quantization, and LLM composites such as scaled dot-product attention, RMSNorm, and KV-cache updates.
- Direct weight loading. Load weights from Hugging Face .safetensors files or other checkpoints without intermediate conversion scripts.
- Zero-copy buffer sharing. Pre-processing, the model, and post-processing pass tensors through shared accelerator buffers. Intermediate data never leaves the GPU or NPU.
- Portable execution. The identical C++ graph can be serialized to a standard .tflite file, run directly on XNNPACK, or executed via ML Drift on GPU.

Google recommends starting with model conversion for most projects. Use the Tensor API when you need graph-level control or want pre- and post-processing to remain on the accelerator.

![Developer working with code on a laptop](https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80)

## How to Author and Run a Graph

Clone the LiteRT repository and follow the Tensor API README for build instructions. The same three-line graph can run in three ways by changing the mixin tag on the Tensor type.

1. **Direct CPU execution with XNNPACK**  
   Tag tensors with `XnnpackMixinTag`. The graph lowers straight into an XNNPACK subgraph and runs with `XnnpackRunner`. No model file or LiteRT environment is required. This is the lightest path and is used by the Gemma 4 example for prefill and decode.

2. **Export to .tflite and run with LiteRT**  
   Tag with `TfLiteMixinTag`. Call `ModelFactory::Save` to produce a standard .tflite file. Then use LiteRT's `CompiledModel` API to run it on CPU, GPU, or NPU. This path ships the model to Android, iOS, desktop, or the web via LiteRT.js.

3. **Direct GPU execution with ML Drift**  
   Tag with `MlDriftMixinTag`. The graph lowers into an ML Drift `GpuModel` and runs on OpenCL or WebGPU without serializing a .tflite file first.

A natural workflow is to iterate on the XNNPACK path while loading weights from checkpoints, then export a .tflite when you are ready to deploy.

```cpp
// Example pattern from the Tensor API README
using T = Tensor<TfLiteMixinTag, XnnpackMixinTag>;
T y = Attention(x, w, /*heads=*/8);
Save({y}, "attention.tflite");  // export
// or run directly
auto runner = XnnpackRunner::Create({y});
runner->Run();
```

More than 90 operations are available. The full list lives in the Tensor API reference.

## Real-World Results: SAM 2 and Gemma

Google authored the Segment Anything Model 2 (SAM 2) entirely in C++ with the Tensor API. The complete pipeline—Hiera encoder, memory attention, mask decoder, frame pre-processing, and compositing—runs on WebGPU after compilation to WebAssembly. A coding agent optimized the graph, rewriting GPU-unfriendly operations into arithmetic and moving per-frame decisions into the graph itself. Frame rate rose from under 10 fps to over 30 fps at 512×512 resolution. Pre- and post-processing add only about 0.34 ms per frame. All 522 encoder and 269 decoder operations stay on the GPU.

On a MacBook Pro the same C++ code ran about 1.5× faster than Apple MLX (fp16, image encoder plus mask decoder). The identical source ran on a macOS laptop (Metal), an iOS phone (Metal), and an Android phone (OpenCL).

Gemma 4 examples run prefill and decode graphs directly on XNNPACK with KV cache and safetensors weights. Gemma 3 examples serialize to .tflite and run through LiteRT on CPU or GPU. Both are open source in the LiteRT Samples repository.

![Circuit board close-up representing hardware acceleration](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Practical Tips

- Point coding agents at the Tensor API README and the SAM 2 sample. The agents can construct, modify, validate, and benchmark graphs because the model is plain C++.
- Keep a PyTorch or other reference implementation for numerical checks. The SAM 2 sample verifies every signature against a golden model.
- Start with conversion for standard architectures. Switch to the Tensor API only when you need custom ops or zero-copy pipelines.
- For Android deployment, pair the exported .tflite with LiteRT in Google Play services or the bundled runtime to reduce APK size and gain the latest GPU acceleration.
- Watch for upcoming work: direct ML Drift GPU backends, more NPU-friendly operations, automatic full-graph quantization, and Python authoring with .tflite export.

If you are already building on-device agents, see how [LiteRT-LM integrates with Android skills](/blog/build-on-device-llm-android-litert-lm-skill/).

## Watch the Overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/A5qHo1wsz3A"
    title="LiteRT: The Universal Framework for On-Device AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The LiteRT Tensor API removes the usual trade-off between control and portability. You author the graph once in C++, load weights directly, share accelerator buffers, and run the identical code across CPU, GPU, and NPU. The SAM 2 demo shows that coding agents can further optimize these graphs for real-time performance. For developers who need precise on-device pipelines, this is a practical new tool.

## Sources

- Google Developers Blog: Native Model Authoring for Edge with LiteRT Tensor API (19 October 2026)
- LiteRT GitHub repository, Tensor API README and examples
- LiteRT Samples repository (SAM 2 implementation)
- InfoQ: Google Launches LiteRT Tensor API for Building, Customizing, and Optimizing ML Models for On-Device (3 November 2026)
