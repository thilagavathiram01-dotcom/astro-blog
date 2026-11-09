---
title: "How Google's TPU 8tx and 8i Max Power Agentic AI"
description: "Guide to Google's new TPU 8tx for confidential inference and 8i Max for massive context windows in the agentic era."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "developer", "ai-tools"]
noindex: false
---

Google expanded its eighth-generation TPU portfolio on November 9, 2026, with two new systems: TPU 8tx and TPU 8i Max. These join the earlier TPU 8t and TPU 8i, making four distinct TPU systems released in a single year.

The additions target the agentic era, where AI agents reason across large contexts, handle sensitive data, and run multi-step workflows. TPU 8tx focuses on secure and confidential inference. TPU 8i Max delivers double the compute, SRAM, and HBM bandwidth for massive context windows and higher density per rack.

These systems build on the modular AI Hypercomputer approach. Google co-designs silicon with software so new configurations can ship in months rather than full chip cycles.

![Server racks in a modern data center](https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=800&q=80)

## What the New TPUs Address

Enterprises now run autonomous agents that process entire codebases, hours of video, or proprietary data. Two bottlenecks appear repeatedly: memory for long contexts and security for sensitive workloads.

TPU 8tx solves the security gap. Data is normally encrypted at rest and in transit, but it must be decrypted in memory during processing. TPU 8tx keeps data and model weights protected and isolated even while in active use.

TPU 8i Max solves the memory wall. When many agents collaborate on large inputs, bandwidth becomes the limit. Combining two TPU 8i chips in one package doubles resources while fitting the existing rack footprint.

## TPU 8tx: Confidential Computing for Agents

TPU 8tx uses the same silicon as the training-focused TPU 8t. It pairs with 5th Generation AMD EPYC CPU hosts. Security is built into the hardware layer rather than layered on in software.

This design supports private fine-tuning, model distillation, and reinforcement learning on a single system. Teams do not need to move sensitive data between separate clusters. The system adopts the low-latency Boardfly network from the reasoning TPUs, delivering up to 2x lower latency than TPU 8t with near-zero performance penalty.

Regulated industries and government agencies can run frontier models and autonomous agents alongside their most sensitive data. The hardware-level protection covers prompts, model weights, and intermediate results.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/3Qw_CZkiQQg"
    title="Google TPU 8t and TPU 8i: Purpose-built for the Agentic Era"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## TPU 8i Max: Density for Long Contexts

TPU 8i Max packages two low-latency TPU 8i chips together. It delivers double the compute, double the on-chip SRAM, and double the HBM bandwidth of a single TPU 8i. The package fits twice the silicon in the existing rack footprint.

This configuration supports the 1-million-token context windows used by Gemini models. It handles workloads where dozens of agents reason across large codebases or long video. Data centers gain more computing power per square foot and per watt.

The dual-chip approach keeps the processors supplied with data so large workloads do not stall on memory transfers.

![Close-up of computer hardware and circuitry](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Software Stack for Developers

Google paired the hardware announcements with software updates that lower adoption barriers. TorchTPU is now open-source, so native PyTorch code and Hugging Face models run on TPUs without rewrites. Backends exist for vLLM and SGLang.

A new open-source TPU agent suite plugs into tools such as Claude Code, Cursor, and Google Antigravity. It automates onboarding, diagnoses bottlenecks, and tunes kernels using plain language.

TPU Sync, the open-source model-state layer, unifies chip HBM, host DRAM, shared storage, and the network. It tiers KV caches off-chip in milliseconds and synchronizes reinforcement-learning weights. Google reports cuts of more than 90 percent in KV transfer latency and time to first token.

Agent Compute Engine suspends idle agent sessions and moves working memory off the chip. This reduces wasted compute when agents wait on tools or human input. Cloud Pathways and GKE dynamic slicing further improve large-scale orchestration.

These pieces let developers treat TPU clusters more like general-purpose infrastructure.

## Tips for Getting Started

Check Google Cloud documentation for TorchTPU and the TPU agent suite if you already use PyTorch. Existing code can target TPUs with minimal changes.

Evaluate TPU 8tx if your agents process regulated or proprietary data. Confirm whether your workload needs hardware-level confidential computing versus software encryption.

For long-context or multi-agent jobs, review TPU 8i Max density numbers against your current rack constraints. Higher density can lower facility costs if power and cooling allow.

Monitor the open-source releases. TPU Sync and the agent suite are designed to reduce operational overhead for production agents. See also our earlier guide on [secure microVMs for agents](/blog/agent-compute-engine-secure-microvms-guide/).

Start with small experiments on Google Cloud before committing to on-premises TPU deployments. The modular design supports both models.

## Conclusion

TPU 8tx and TPU 8i Max extend Google's eighth-generation lineup to cover the full agentic lifecycle. One system protects sensitive data during inference and fine-tuning. The other packs more memory and compute into existing racks for long contexts.

Together with open PyTorch support, TPU Sync, and agent-aware software, the hardware becomes more accessible to developers outside Google. Organizations building production agents now have purpose-built options for security and scale.

Official details are available in Google's blog post announcing the systems.

## Sources

- [Our newest TPUs: 8tx and 8i Max, built for the agentic era](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/)
- Google Cloud TPU documentation and TorchTPU open-source announcement
