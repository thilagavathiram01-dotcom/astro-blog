---
title: "Anthropic FlashProve: Prove Which Model Answered You"
description: "Anthropic FlashProve uses zkSNARKs so providers can prove a reply came from committed model weights. See Llama 4 Maverick benchmarks, GitHub setup, and limits."
pubDate: 2026-11-04T14:00:00
heroImage: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "security", "tutorials"]
noindex: false
---

When you send a prompt to an AI API, you trust the provider’s claim about which model produced the reply. A router could swap in a cheaper model. An attacker who reaches the inference server could alter tokens. Output quality alone does not prove identity.

Anthropic’s Frontier Red Team released FlashProve on November 2, 2026 as an open-source research prototype for provable inference. It lets a provider commit to a specific set of model weights and then attach a short cryptographic proof that the claimed reply came from those weights. The proof reveals nothing about the weights themselves. Anyone can check it on a normal CPU in seconds.

This guide explains what FlashProve does, how the system works, the published benchmarks, where to find the code, practical use cases, and the current limits.

## What FlashProve Solves

Today a user or evaluator has almost no independent way to confirm that the model name on an API response matches the weights that actually ran. Even high-quality text can come from a substituted model or a tampered stream.

FlashProve addresses this with a zero-knowledge succinct argument of knowledge (zkSNARK). The provider first publishes a short commitment that binds it to one exact set of weights. For each request it later produces a proof that the committed model produced the given output tokens for the given prompt. If the reply does not match, verification fails. The proof hides the weights, intermediate activations, and (for mixture-of-experts models) which experts activated.

Anthropic frames the work as intermediate progress rather than a finished product. The code, Lean formalizations, protocol specification, and technical report are released under the Apache 2.0 license so others can inspect, run, and improve them.

![Rows of server racks in a data center](https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=800&q=80)

## How the System Works

FlashProve operates in two main phases.

In the offline phase the provider runs a commitment step on the model weights. This takes roughly 39 minutes on the test hardware and produces a compact public commitment (around 6.5 MB to download) that is valid for about 16 million requests. The weights stay private; only the commitment is published.

In the online phase, after ordinary inference finishes, the provider generates a proof for the completed request. The proof is bound to the commitment, the prompt, and the output tokens. A client downloads the proof (about 19 MB for a 1,024-token request) and checks it with the verifier. No GPU is required for verification and the client never sees the weights.

The system targets mixture-of-experts architectures. Anthropic demonstrated it on the public 4-bit quantized weights of Meta’s Llama 4 Maverick (roughly 400 billion parameters total, about 17 billion active per token). Integer arithmetic is used so results are bit-exact across machines. Context is currently limited to 1,024 tokens per request.

Two verifiers ship with the release: a fast C++ verifier (cp_verify) for practical checks and a Lean verifier whose soundness, completeness, and zero-knowledge properties are formally proved. The Lean proofs give machine-checkable statements of the top-level security claims. The prover itself is implemented in CUDA/C++ and is audited conventionally rather than formally verified.

## Benchmarks on Llama 4 Maverick

On a single NVIDIA H100 (80 GB) with 24 CPU cores, the prover generates proofs at roughly 110 tokens per second when processing batches of 24 requests. A batch takes about 223 seconds and each proof is approximately 18.8 MB. Verification of one proof takes about 17 seconds on 24 CPU threads or roughly 21 seconds on a single thread.

These numbers measure proof generation, not token generation. Compared with running the same requests on vLLM, proving consumes roughly 70–95 times the GPU time (around 72× in typical runs, higher under peak load). That overhead is large relative to plain inference, yet it is orders of magnitude faster than earlier open-source zero-knowledge machine-learning systems tested on comparable models.

The commitment itself is reusable. After the one-time offline step, each subsequent request only pays the online proving cost.

![Close-up of network cabling inside a server rack](https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=800&q=80)

## Getting Started with the Open-Source Code

The repository is at github.com/anthropics/FlashProve. It is labeled a research artifact that is not maintained and does not accept contributions. Weights are not included; you obtain the public Llama 4 Maverick 4-bit conversion yourself under Meta’s license.

Supported hardware for the prover is x86-64 Linux with SHA CPU extensions and one NVIDIA H100 80 GB. The verifier builds on ordinary Linux with a modern C++ compiler and needs only a few gigabytes of RAM. The repository includes step-by-step routes: build and check a stored example proof (CPU only), run toy proofs, test a small synthetic model, or (with substantial RAM and disk) prove a full-size request after downloading the public weights.

A quick first step is to clone the repo, build the C++ verifier, and verify the included example proof. That confirms the checker works without any GPU. Full proving requires the H100 stack, CUDA 13.2, and significant host memory (roughly 290 GB for the large model).

Because the system is a prototype, expect long build times and exact numerical comparisons. The documentation notes that much of the work is intended to be driven by a coding agent following the included AGENTS.md guidance.

## Practical Use Cases

Several scenarios benefit from the ability to check model identity without seeing weights.

Customers who route through third-party services can confirm they received the model they paid for rather than a cheaper substitute. Independent evaluators can verify that the model under test matches the one being served to users. Providers can require proofs on every response so that a compromised inference server or a substituted model is detected; an attacker cannot forge a valid proof for the committed weights.

The same mechanism supports broader goals such as demonstrating that hardware was used for inference of a claimed model (relevant to some pacing or regulatory proposals) and attaching provenance to text that was produced by a specific frontier model. Because verification is cheap and the proof is zero-knowledge, these checks can be performed by ordinary clients or auditors.

FlashProve complements other integrity techniques. For related watermarking and content-origin tools, see our guide on [checking AI media with SynthID](/blog/check-ai-content-synthid-detector/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gcKCW7CNu_M"
    title="Lecture 10.3: What is a zk-SNARK?"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Current Limits and Caveats

The prototype has clear constraints. Context is capped at 1,024 tokens, far shorter than typical chat windows. Proving overhead remains tens of times higher than plain inference, so it is not free. The commitment must be refreshed after roughly 16 million requests.

Soundness is formally proved for the Lean verifier under the exact-match policy, with a stated error bound of roughly q/2^124 + 2^-101 after q hash queries. Completeness and zero-knowledge hold for the protocol up to small stated errors. The production C++ verifier and CUDA prover follow the same protocol and are tested against it, but they are not themselves machine-checked. Architecture is not hidden; only the weights are.

The repository explicitly states it is not maintained. Treat it as a research demonstration that the approach can be made practical at 400-billion-parameter scale, not as production-ready infrastructure you can enable today.

## Conclusion

FlashProve shows that cryptographic proofs of inference are moving from theoretical interest toward practical prototypes. A single H100 can produce verifiable proofs for a 400-billion-parameter mixture-of-experts model at over 100 tokens per second of proving throughput, with checks that finish in seconds on a CPU and reveal nothing about the private weights.

Developers and evaluators can examine the Apache-2.0 code, Lean proofs, and technical report on GitHub today. The work remains intermediate: longer contexts, lower overhead, and production hardening are still ahead. For anyone who needs stronger assurance about which model actually answered a request, it is a concrete step worth studying.

## Sources

- Anthropic, “Progress on provable inference for large language models,” November 2, 2026. https://www.anthropic.com/research/provable-inference
- FlashProve GitHub repository (version 0.16.0). https://github.com/anthropics/FlashProve
- Anthropic technical report and protocol materials linked from the research post and repository.
