---
title: "How to Run PyTorch on Google TPUs with TorchTPU"
description: "Step-by-step guide to install TorchTPU and run native PyTorch code on Google Cloud TPUs using eager mode and torch.compile."
pubDate: 2026-10-21T14:00:00
heroImage: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "tutorials", "how-to", "google"]
noindex: false
---

Google open-sourced TorchTPU on October 20, 2026, at the PyTorch Conference. Co-developed with Meta’s PyTorch team, it adds a native backend so existing PyTorch code runs on Cloud TPUs with minimal changes.

You no longer need to rewrite models for JAX or wrestle with the older PyTorch/XLA stack. Set the device to "tpu", debug in eager mode, then compile for production speed.

## What TorchTPU Changes

TorchTPU plugs into PyTorch through the PrivateUse1 interface. It supports eager execution (including a fused mode), torch.compile with a TPU backend, and distributed training via the standard process group API with backend "tpu_dist".

It works with Hugging Face Transformers (device_map="tpu" in v5), Diffusers, vLLM, SGLang, TorchTitan, Ray, and LiteRT. Official sources confirm it has been validated on thousands of Hugging Face models and used in production by large Google Cloud customers.

![Data center server racks representing Cloud TPU infrastructure](https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=800&q=80)

## Prerequisites

You need a Google Cloud project with TPU quota and a TPU VM. TorchTPU supports Python 3.11+ and is available on PyPI as torch_tpu (v0.2.0 at launch). The package installs alongside a CPU PyTorch wheel; do not pull the CUDA build.

Create a TPU VM (v6e is a common starting point) using the Cloud Console or gcloud, then SSH into it. Follow the official Cloud TPU documentation for current runtime versions and zones.

## Install TorchTPU

On the TPU VM, create a virtual environment and install:

```bash
sudo apt update && sudo apt install -y python3.12 python3.12-venv
python3.12 -m venv env
source env/bin/activate
pip install torch_tpu
```

The official docs recommend pinning the public release and using the CPU PyTorch index if needed. Verify the install by importing torch and checking the device.

## Run Your First Tensor

Once installed, TorchTPU autoloads. The minimal example from Google Cloud docs is:

```python
import torch

device = torch.device("tpu")
x = torch.randn((4, 4), device=device)
y = torch.ones((4, 4), device=device)
result = torch.matmul(x, y).cpu()
print(f"Executed on device: {x.device}")
print(f"Result shape on CPU: {result.shape}, sum: {result.sum():.4f}")
```

This confirms the TPU is reachable. For existing GPU code, change "cuda" to "tpu" and the process-group backend from "nccl" to "tpu_dist". You can also use torch.accelerator.current_accelerator() for portable code.

![Laptop screen showing code, illustrating the minimal change from CUDA to TPU](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80)

## Eager Mode and torch.compile

Eager mode lets you debug step by step. TorchTPU offers Strict (default, asynchronous), Debug (synchronous with bounds checks), and DeferAndFuse (fuses operators on the fly for better performance). Official notes indicate DeferAndFuse can be substantially faster than strict eager.

For peak throughput, wrap models with torch.compile(backend="tpu"). This captures the graph with TorchDynamo, lowers it to StableHLO, and compiles via XLA. Start in eager for correctness, then compile once shapes stabilize.

## Distributed Training and Serving

Scale with torch.distributed using the tpu_dist backend. TorchTitan provides reference recipes for large models (Llama, Qwen, MoE) that have been validated up to thousands of Ironwood chips, with reported Model Flops Utilization around 52% on Qwen3-8B.

For inference, the vLLM and SGLang TorchTPU backends keep upstream schedulers and APIs while adding TPU kernels and multi-chip support. Hugging Face models load with device_map="tpu".

## Tips and Limitations

- Keep shapes wide enough for the TPU MXUs; narrow kernels under-utilize the hardware.
- Default precision is medium (BF16 inputs with FP32 accumulation). Higher modes exist but carry a performance cost; only switch if you observe convergence issues.
- One process per TPU device is the current model. RL colocation may need extra work.
- Check the GitHub repo (google-pytorch/torch_tpu) and torchtpu.readthedocs.io for the latest install notes and known issues.
- If you are building Android agents or on-device flows, see our guide on [adding AppFunctions to an Android app](/blog/add-appfunctions-to-android-app/).

## Conclusion

TorchTPU removes the main friction of running PyTorch on TPUs. Install the package on a TPU VM, switch the device string, and start with eager mode. Compile when you need production performance, then scale with TorchTitan or the serving backends.

Official announcement: [TorchTPU is now open source](https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus) and the [PyTorch blog post](https://pytorch.org/blog/introducing-torchtpu/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/u4n558Ul6w0"
    title="Introducing TorchTPU: Native PyTorch on Google Cloud TPUs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Cloud Blog: TorchTPU is now open source (October 20, 2026)
- PyTorch Blog: Introducing TorchTPU (October 20, 2026)
- Google Cloud documentation: PyTorch on Cloud TPU
- YouTube: Introducing TorchTPU (Google Cloud Tech)
