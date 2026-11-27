---
title: "Compile Gemma 4 E2B on Pixel with Tensor SDK 2.2"
description: "Step-by-step guide to compile and deploy Gemma 4 E2B SLMs on Pixel 10/11 using Google Tensor SDK 2.2, LiteRT, and telemetry hooks."
pubDate: 2026-11-27T10:00:00
heroImage: "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai-tools", "tutorials", "pixel", "developer"]
noindex: false
---

Google released Tensor SDK v2.2 on November 24, 2026. The update adds support for compiling fine-tuned Gemma 4 E2B checkpoints for the Tensor G5 (Pixel 10) and Tensor G6 (Pixel 11) chipsets, plus LiteRT telemetry hooks and a new agent skill for automation.

This guide shows how to access the compiler, export a Gemma 4 E2B model, apply quantization, compile it for the TPU, and package it for an Android app. You can also use pre-compiled bundles if you do not need a custom checkpoint.

![Developer testing code on a smartphone next to a laptop](https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?auto=format&fit=crop&w=800&q=80)

## What changed in Tensor SDK 2.2

Version 2.2 expands the Model Garden with more than 30 new models in categories such as audio classification, face recognition, image generation, text-to-speech, and video classification. Gemma 4 E2B now supports export from fine-tuned checkpoints and AOT compilation for both Tensor G5 and G6.

LiteRT telemetry hooks let you measure TPU tile execution time and power consumption during inference on Pixel devices. The litert-google-tensor agent skill automates compilation, on-device benchmarking, Play AI packaging, and Gradle integration from natural-language prompts.

The SDK terms now allow third-party distribution and internal benchmarking. External publication of benchmark numbers remains prohibited. A compiler bug with large RESIZE_NEAREST_NEIGHBOR operations on Tensor G5 was also fixed.

Compatibility targets LiteRT 2.3.0 (stable) or the corresponding nightly for Android 26Q4 on both G5 and G6.

## Choose pre-compiled or custom

Google provides ready-to-use .litertlm bundles for Gemma 4 E2B (W8A8 or W2A8), Gemma 3 1B, Mobile Actions, and EmbeddingGemma variants. Download links for Tensor_G5 and Tensor_G6 appear in the official compilation documentation.

For custom work, fine-tuned checkpoint compilation is currently detailed for Tensor_G6. Pre-compiled models are the recommended path for Tensor_G5 devices.

![Close-up of a smartphone processor chip on a circuit board](https://images.unsplash.com/photo-1773226370041-7d13226d4995?auto=format&fit=crop&w=800&q=80)

## Step 1: Get Beta compiler access

Sign up for the Google Tensor SDK Beta program on the Tensor SDK page. After approval, download the compiler tarball. Set the environment variable:

```bash
export GOOGLE_TENSOR_SDK_BETA=/path/to/compiler_tar_gz
```

Install the required packages:

```bash
pip install ai-edge-litert-sdk-google-tensor-nightly
pip install litert-torch-nightly
```

The GOOGLE_TENSOR_SDK_BETA path must be set during the pip install so the compiler unpacks correctly.

## Step 2: Select a quantization recipe

For Gemma 4 E2B, choose a post-training quantization configuration that matches your memory budget and accuracy needs:

- Baseline (QAT): ~2.74 GB, effective bits ~2.82
- High accuracy (8-bit transformer): ~4.20 GB
- Smallest size (full 4-bit): ~2.84 GB
- Balanced mixed 4/8-bit: ~3.06 GB
- Complex reasoning mixed: ~3.47 GB

Lower weight precision reduces size and decode latency. Keeping attention and MLP layers at 8-bit preserves more accuracy. The official page lists the exact JSON recipes for each configuration.

## Step 3: Export and compile

Install additional packages if needed:

```bash
pip install litert-torch transformers
pip install -U litert-lm-builder-nightly
```

Download the matching compiler options .pb file for your SoC and quantization. Then run the export:

```bash
litert-torch export-hf \
  --model=google/gemma-4-E2B-it \
  --output_dir=/tmp/ \
  --split_cache \
  --externalize_embedder \
  --prefill_lengths=128 \
  --sliding_window_ring_buffer_size=512 \
  --cache_lengths=640,1024,1536,4096 \
  --quantization_recipe="<your_recipe>" \
  --jinja_chat_template_override=litert-community/gemma-4-E2B-it-litert-lm \
  --aot_backend=GOOGLE \
  --aot_soc_model=Tensor_G6 \
  --aot_compilation_config_dict='{"google_tensor_extra_options_path": "/path/to/compiler_options.pb"}'
```

Replace the model ID with your fine-tuned SafeTensors directory if you trained a custom checkpoint. The command produces a .litertlm bundle optimized for the TPU.

## Step 4: Add NPU executor metadata

Unpack the bundle, inject the NPU metadata block, and repack:

```bash
BUNDLE=/path/to/model.litertlm
UNPACK_DIR=$(mktemp -d)
litert-lm-builder unpack --input "${BUNDLE}" --output_dir "${UNPACK_DIR}"
```

Append this block to ExecutorMetadataProto.pbtext (preserve any existing llm_executor_metadata):

```
llm_npu_executor_metadata {
  enable_neon_for_npu_greedy_sampling: true
  use_hw_masking_for_npu: true
  use_hw_cache_update_for_npu: true
  use_hw_ple_for_npu: true
}
```

Register the section in model.toml if needed, then repack and verify with litert-lm-peek. Move the temporary file back over the original bundle.

## Step 5: Benchmark and package with the agent skill

Copy the litert-google-tensor skill folder from the google-ai-edge/litert-samples repository into your agent’s skills directory. With Beta access and adb set up, you can prompt the agent:

- “Compile model.tflite for Pixel 11”
- “Benchmark the compiled model on my phone and compare to CPU”
- “Package the model for my Android app”

The skill handles AOT compilation (local Linux or Colab), on-device latency/memory/energy measurement, Play AI packaging, Gradle modules, and a Kotlin loader. It produces report.md and results.json files. Telemetry hooks surface TPU tile time and power numbers for internal analysis only.

## Tips for production use

Start with a pre-compiled Gemma 4 E2B bundle while you request Beta access. Test on a physical Pixel 10 or Pixel 11; emulators do not expose the TPU. Keep external benchmark results private per the updated terms. Pair this workflow with existing LiteRT-LM sample apps for multimodal chat, image, and audio inputs.

For related on-device agent patterns, see our guide to [building on-device Android AI agents with ADK for Kotlin](/blog/adk-kotlin-1-on-device-android-agents/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/kfgxMYKMcWU"
    title="Google Tensor SDK for Pixel via LiteRT"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Tensor SDK 2.2 makes custom Gemma 4 E2B deployment on Pixel TPUs practical. With pre-compiled options, quantization recipes, telemetry, and the agent skill, developers can move from checkpoint to packaged Android feature faster. Sign up for Beta access, pick a size/accuracy trade-off, and compile for your target device.

## Sources

- Google AI Edge Tensor SDK release notes (v2.2, Nov 24, 2026)
- Compile SLMs for Google Tensor documentation
- Use LiteRT Google Tensor skill guide
- LiteRT Hugging Face community collections
