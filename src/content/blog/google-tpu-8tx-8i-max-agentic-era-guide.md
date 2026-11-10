---
title: "Google TPU 8tx and 8i Max for Agentic AI Workloads"
description: "Google expands its 8th-gen TPU lineup with TPU 8tx for confidential inference and TPU 8i Max for massive context windows."
pubDate: 2026-11-10T14:00:00
heroImage: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer"]
noindex: false
---

Google added two specialized systems to its eighth-generation Tensor Processing Unit (TPU) portfolio on November 9, 2026. TPU 8tx targets secure, confidential inference. TPU 8i Max targets massive context windows and higher rack density. Together with the earlier TPU 8t and TPU 8i, this marks the first time Google has introduced four TPU systems in a single year.

The announcement comes as agentic workloads grow. Enterprises need accelerators that keep sensitive data protected during inference and that supply memory bandwidth fast enough for agents reasoning across long contexts or entire codebases.

![Rows of server racks in a data center](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Why four systems in one year

Google co-designs TPUs with DeepMind and now incorporates feedback from external organizations. Agent-scale computing creates two urgent needs: hardware-level data protection and million-token context scale. The new systems address these without waiting for a full new chip generation.

A new chip requires years of design and manufacturing. A new system reconfigures packaging, networking, memory, and hosts around existing silicon. This modular approach, part of Google’s AI Hypercomputer, lets the company ship specialized configurations in months.

TPU 8t (announced April 2026) handles large-scale training. TPU 8i focuses on low-latency reasoning. The November additions complete the set for the agentic lifecycle.

## TPU 8tx: confidential inference and private fine-tuning

TPU 8tx uses the same silicon as TPU 8t. It pairs that silicon with 5th Generation AMD EPYC CPU hosts and the low-latency Boardfly network originally built for TPU 8i. The result delivers up to 2x lower latency than TPU 8t with near-zero performance penalty.

The key difference is hardware-level confidential compute. Data is normally encrypted at rest and in transit, then decrypted in memory while the chip processes it. TPU 8tx keeps sensitive data and model weights protected and isolated even while in active use. This suits regulated enterprises and governments that must run frontier or proprietary models and autonomous agents next to their most sensitive information.

Because the system combines training-grade compute with a fast inference network, teams can fine-tune models on private data, distill large models into smaller ones, and run reinforcement learning for agents—all on one system. No data migration between separate clusters is required.

## TPU 8i Max: double compute and memory bandwidth

TPU 8i Max places two low-latency TPU 8i chips onto a single package. Google states this delivers double the compute, double the on-chip SRAM, and double the high-bandwidth memory (HBM) bandwidth of a single TPU 8i.

The design targets the memory wall. When multiple agents work across an entire software codebase or hours of video, processors idle while waiting for data. Scaling compute and memory bandwidth together keeps essential data resident so large workloads do not stall. Because twice the silicon fits in the same rack footprint, data centers gain more computing power per square foot and per watt.

Each original TPU 8i chip provides 10.1 PFLOPS of FP4 compute, 288 GB of HBM, and 384 MB of on-chip SRAM. The dual-chip package therefore roughly doubles those figures for compute and bandwidth.

![Circuit board with processing components](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## How the four systems fit the agentic lifecycle

| System | Primary role | Key official claim |
|--------|--------------|--------------------|
| TPU 8t | Large-scale training | Up to 2.7x better training performance vs previous generation |
| TPU 8i | Low-latency reasoning | Up to 80% better inference price performance |
| TPU 8tx | Confidential inference + small-scale training | Up to 2x lower latency than TPU 8t; hardware-level isolation |
| TPU 8i Max | Massive context + rack density | Double compute, SRAM, and HBM bandwidth of TPU 8i |

Organizations can choose the right accelerator for each stage rather than forcing every workload onto a single chip design.

## Software stack updates that accompany the hardware

Google simultaneously expanded the open software stack so more developers can use TPUs without rewriting code.

- TorchTPU (open-sourced last month) lets PyTorch code and Hugging Face models run natively on TPUs. Out-of-the-box backends exist for vLLM and SGLang.
- The TPU agent suite (preview) plugs into coding tools such as Claude Code, Cursor, and Google Antigravity. It automates onboarding, diagnoses bottlenecks, and autotunes kernels with plain-language instructions.
- XLA Serving Engine (open source) lets teams train in Python and serve in a low-latency C++ runtime across TPUs, GPUs, and CPUs.
- TPU Sync (open-sourced) unifies chip HBM, host DRAM, shared storage, and the network into one memory hierarchy. It tiers KV caches off-chip in milliseconds and cuts KV transfer latency and time-to-first-token by more than 90% in some cases.
- Cloud Pathways is now generally available on Google Kubernetes Engine. A single-controller architecture plus pathwaysutils lets operators treat multi-slice TPU systems as one local machine.
- GKE dynamic slicing (generally available) uses optical circuit switching to assemble or partition topologies on the fly, reducing job startup times by up to 5x.

These changes address the practical barriers that previously limited TPU adoption outside Google.

## Practical steps for teams evaluating the new systems

1. Identify the dominant bottleneck. If data must stay encrypted during inference or fine-tuning, start with TPU 8tx. If agents stall on long contexts or multi-agent coordination, evaluate TPU 8i Max.
2. Confirm software readiness. Test existing PyTorch or Hugging Face workflows with TorchTPU. Use the TPU agent suite inside your preferred coding agent to surface optimization opportunities.
3. Measure real workloads. Google points to InferenceX and AgentX benchmarks for agentic coding and long-context tasks rather than peak chip FLOPS alone.
4. Plan for availability. The November 9 post gives no public pricing or general-availability date. Reports indicate the systems are expected in 2027. Contact Google Cloud sales for early-access information if your use case matches the confidential or high-density profiles.
5. Combine with existing tools. Pair the hardware with Cloud Pathways for multi-slice orchestration and TPU Sync for memory hierarchy management when agents run for hours or days.

For developers already building agentic features, these systems complement on-device options such as Gemini Nano. See our earlier guide on [building on-device agents with ML Kit Agentic API and Gemini Nano](/blog/build-on-device-agents-ml-kit-agentic-api-gemini-nano/) for the complementary software side.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3Qw_CZkiQQg"
    title="Google TPU 8t and TPU 8i: Purpose-built for the Agentic Era"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for production use

Start with the open software stack on current TPU generations while waiting for the new systems. TorchTPU and the TPU agent suite already reduce the friction of moving PyTorch code. Measure token throughput and latency on your actual agent traces rather than synthetic benchmarks. For confidential workloads, confirm the exact isolation guarantees with Google Cloud before moving regulated data.

Density matters. TPU 8i Max’s doubled silicon in the same footprint improves power and floor-space efficiency—two of the scarcest resources in current data-center builds.

## Conclusion

TPU 8tx and TPU 8i Max give organizations purpose-built options for the two hardest parts of agentic production: keeping data protected while models run, and feeding enough memory bandwidth to keep long-context agents productive. Combined with the open PyTorch path, TPU Sync, and Cloud Pathways, the eighth-generation lineup covers the full lifecycle from large-scale training to secure, high-context inference.

Teams should map their dominant constraints (confidentiality versus context length versus training scale) to the matching system and validate software compatibility now. The modular system approach means Google can keep delivering specialized configurations as agent workloads evolve.

## Sources

- [Google Blog: Introducing TPU 8tx and TPU 8i Max](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/)
- [Google Cloud Blog: Eighth-generation TPU technical deep dive (TPU 8t and 8i)](https://cloud.google.com/blog/products/compute/tpu-8t-and-tpu-8i-technical-deep-dive)
- [Google Cloud: TorchTPU open source announcement](https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus)
- [Google Cloud: TPU Sync](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-tpu-sync-fast-kv-cache-and-weight-transfer-on-tpu)
- [YouTube: Google TPU 8t and TPU 8i overview (Google Cloud)](https://www.youtube.com/watch?v=3Qw_CZkiQQg)
