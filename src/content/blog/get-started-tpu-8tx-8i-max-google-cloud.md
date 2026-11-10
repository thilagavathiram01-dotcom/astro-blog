---
title: "Get Started with TPU 8tx and 8i Max on Google Cloud"
description: "Practical guide to using Google's new TPU 8tx and TPU 8i Max for confidential inference and long-context agent workloads."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "google", "tutorials", "how-to"]
noindex: false
---

Google expanded its eighth-generation TPU lineup on November 9, 2026, with two specialized systems: TPU 8tx for secure confidential inference and TPU 8i Max for high-density long-context workloads. These join the existing TPU 8t and TPU 8i.

TPU 8tx targets regulated enterprises and governments that need hardware-level confidential compute for proprietary models and autonomous agents. TPU 8i Max doubles compute, SRAM, and HBM bandwidth relative to TPU 8i to handle massive context windows used by multi-agent systems.

This guide explains the key differences, software options, and first steps to run workloads on Google Cloud.

## Key differences between the new systems

TPU 8tx uses the same silicon as TPU 8t but pairs it with 5th-generation AMD EPYC hosts and the Boardfly network. It provides hardware-level isolation so sensitive data and model weights stay protected even during use. Google positions it for private fine-tuning, distillation, and secure agent execution with near-zero security overhead and up to 2x lower latency than TPU 8t.

TPU 8i Max packs two TPU 8i chips into a single package. This doubles peak FP4 compute, on-chip SRAM (to 768 MB), and HBM bandwidth while increasing capacity. It fits the same rack footprint as earlier systems, delivering higher density for memory-bound reasoning across long contexts or multi-agent codebases.

Both systems integrate with Google Cloud's AI Hypercomputer stack, including JAX, PyTorch, vLLM, XLA, and the new Cloud Pathways runtime.

![Close-up of computer hardware and circuit boards](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Software stack updates

Google open-sourced TorchTPU so standard PyTorch code and Hugging Face models run natively on TPUs without rewrites. Inference engines such as vLLM and SGLang now ship TPU backends out of the box.

Cloud Pathways, now generally available on Google Kubernetes Engine, brings the DeepMind runtime used for Gemini to customers. It uses a single-controller architecture so you can orchestrate large multi-slice TPU systems as one local machine. Features include sub-minute slice hot-swapping, elastic resharding, and colocated Python sidecars for resilience.

A preview TPU agent suite plugs into coding tools such as Claude Code, Cursor, and Google Antigravity. It automates cluster onboarding, diagnoses bottlenecks, and tunes custom kernels from plain-language instructions.

## First steps on Google Cloud

1. Enable the Cloud TPU API in your Google Cloud project.
2. Request quota for the specific accelerator type (TPU 8tx or TPU 8i Max) through the Cloud Console or sales contact for high-demand capacity.
3. Create a TPU VM or use GKE with the Cloud Pathways operator. For Pathways, install pathwaysutils in your environment.
4. Choose your framework. For PyTorch, import torch and run with the TorchTPU backend. For JAX, use the standard TPU device placement.
5. Launch a small test job to confirm connectivity and performance before scaling.

Example PyTorch check (after installing the appropriate TPU libraries):

```python
import torch
print(torch.cuda.is_available())  # TPUs surface through the XLA/PyTorch bridge
# Or use torch_xla for explicit control
```

For production inference, prefer the vLLM or SGLang TPU backends. They handle continuous batching and paged attention with TPU-specific optimizations.

![Developer working at a multi-monitor workstation](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Use cases and tips

Use TPU 8tx when your workload involves sensitive customer data, regulated industries, or confidential fine-tuning of proprietary models. The hardware isolation reduces the need for complex software-based confidential computing layers.

Choose TPU 8i Max for agentic applications that keep large contexts in memory—multi-file codebases, long video analysis, or coordinated agent teams. The extra bandwidth and density help keep KV caches closer to compute.

Monitor utilization with Cloud Monitoring. Start with smaller slices and scale with Pathways to avoid over-provisioning. Test latency-sensitive serving separately from training jobs because the systems are optimized differently.

If you are already using earlier Gemini models in Android or Firebase apps, see our guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for the application side of agentic workflows.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

TPU 8tx and TPU 8i Max extend Google Cloud’s eighth-generation accelerator family for the agentic era. TPU 8tx prioritizes secure confidential inference, while TPU 8i Max targets density and long-context performance. Combined with TorchTPU and Cloud Pathways, developers can run existing PyTorch and JAX workloads with fewer code changes.

Request access, start with a small test slice, and match the hardware to your privacy or memory requirements. Official documentation on the Google Cloud TPU pages provides the latest quota and pricing details.

**Sources**

- Google Blog: Introducing TPU 8tx and TPU 8i Max (November 9, 2026)
- Google Cloud Blog technical deep dive on eighth-generation TPUs
- TorchTPU and Cloud Pathways documentation
