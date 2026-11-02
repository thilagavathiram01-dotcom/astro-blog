---
title: "How to Download and Run Mistral Large 4 Open Weights"
description: "Step-by-step guide to download and run Mistral Large 4 open weights locally with vLLM, llama.cpp, and GGUF. Covers FP8, NVFP4, hardware needs."
pubDate: 2026-11-02T09:00:00
heroImage: "https://images.unsplash.com/photo-1752742111841-f490c48aa668?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer"]
noindex: false
---

Mistral Large 4, nicknamed Le Chonk, is now open weight. The 1-trillion-parameter multimodal Mixture-of-Experts model landed on Hugging Face on 29 October 2026 after three extra weeks of reinforcement learning. It takes text and images and outputs text. Active parameters sit at about 49–52 billion per token. Context reaches 1 million tokens.<grok type="render_inline_citation" citation_id="282" />

The release advances open models in agentic coding and defensive cybersecurity. It was trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral’s European data centers. Weights use the Mistral Ecosystem Open-Weight License, a modified MIT that permits use, modification, fine-tuning, and commercial products. Model-as-a-service offerings need a separate commercial license from Mistral.<grok type="render_inline_citation" citation_id="298" />

This guide shows how to download the official checkpoints and run them with vLLM or llama.cpp. If you only need the API, see our earlier post on the [Mistral Large 4 preview API](/blog/call-mistral-large-4-preview-api/).

## What the open weights include

Official repositories are `mistralai/Mistral-Large-4-1T-A52B` (FP8, roughly 1,060 GB) and `mistralai/Mistral-Large-4-1T-A52B-NVFP4` (about 610 GB). Unsloth and ggml-org provide GGUF quantizations, including 1-bit options around 233 GB. Day-0 support covers transformers, vLLM, SGLang, and llama.cpp. A DSpark drafter enables speculative decoding for speed.<grok type="render_inline_citation" citation_id="278" />

Reasoning modes are low, medium, and high (default high). Reasoning cannot be fully disabled. The model is strong on coding agents and defensive cyber tasks such as vulnerability reproduction and patching. It refuses most malicious cyber requests at a high rate among open models.<grok type="render_inline_citation" citation_id="305" />

![Data center servers representing large model inference infrastructure](https://images.unsplash.com/photo-1655635643568-f30d5abc618a?auto=format&fit=crop&w=800&q=80)

## Hardware requirements

Full FP8 needs significant GPU memory. Expect multi-GPU setups. NVFP4 targets Blackwell GPUs (B200/B300 class) and can run on fewer cards. GGUF quants lower the bar for workstation experiments, though quality drops with aggressive quantization. Mistral recommends vLLM for production inference. The official Docker image is `vllm/vllm-openai:mistral-large-4`.<grok type="render_inline_citation" citation_id="293" />

Disk space is the first constraint. Reserve at least 1.1 TB free for the FP8 download, or 650 GB for NVFP4. Network speed matters for the initial pull.

## Download the weights

Install the Hugging Face CLI if needed:

```bash
pip install -U "huggingface_hub[cli]"
```

Pull the preferred checkpoint:

```bash
hf download mistralai/Mistral-Large-4-1T-A52B --local-dir ./ml4-fp8
# or
hf download mistralai/Mistral-Large-4-1T-A52B-NVFP4 --local-dir ./ml4-nvfp4
# or a small GGUF
hf download unsloth/Mistral-Large-4-1T-A52B-GGUF --include "UD-IQ1_S*" --local-dir ./ml4-gguf
```

The repositories are ungated. Accept the license on the model card page if prompted.

## Run with vLLM

Pull the official image:

```bash
docker pull vllm/vllm-openai:mistral-large-4
```

Serve the NVFP4 checkpoint on 4 GPUs (adjust tensor-parallel-size to your count):

```bash
docker run --runtime nvidia --gpus all \
  -v ~/.cache/huggingface:/root/.cache/huggingface \
  -p 8000:8000 --ipc=host \
  vllm/vllm-openai:mistral-large-4 \
  --model mistralai/Mistral-Large-4-1T-A52B-NVFP4 \
  --tensor-parallel-size 4 \
  --enable-expert-parallel \
  --tool-call-parser mistral \
  --reasoning-parser mistral \
  --enable-auto-tool-choice \
  --gpu-memory-utilization 0.85
```

For the FP8 checkpoint use `--tensor-parallel-size 8`. Add speculative decoding if desired:

```bash
--speculative-config '{"method":"dspark","num_speculative_tokens":3}'
```

Once the server starts, query it:

```bash
curl http://127.0.0.1:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Explain the Mistral Ecosystem Open-Weight License in one paragraph."}],"max_tokens":256,"reasoning_effort":"medium"}'
```

![Close-up of server rack components used in high-performance AI inference](https://images.unsplash.com/photo-1759836096317-e746643cc277?auto=format&fit=crop&w=800&q=80)

## Run with llama.cpp / Llama App

Install Llama App:

```bash
curl -LsSf https://llama.app/install.sh | sh
```

Serve a GGUF:

```bash
llama serve -hf ggml-org/Mistral-Large-4-1T-A52B-GGUF:Q2_K
```

Open http://localhost:9931 for the built-in UI. You can attach images and adjust the reasoning lever. Query the API the same way as any OpenAI-compatible endpoint. Add the vision projector with `--mmproj` for image input and the DSpark draft for speculative decoding when available.<grok type="render_inline_citation" citation_id="286" />

## Tips for practical use

- Start with a quantized GGUF or NVFP4 if GPU count is limited. Validate quality on your tasks before scaling.
- Set `reasoning_effort` explicitly. High is the default and costs more tokens.
- For cybersecurity work, the model is tuned for defensive tasks (reproduce-then-patch). It still refuses clear malicious requests.
- Prefix caching and expert parallelism help throughput on multi-GPU nodes.
- Monitor VRAM. The 1M context is native but practical serving lengths are often lower until you tune max-model-len.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/FczbSauVvjw"
    title="Science Behind the Open Cyber Frontier with Mistral Large 4"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Mistral Large 4 open weights give organizations a European-trained, high-capability model they can host and customize. Download the FP8 or NVFP4 checkpoint from Hugging Face, or a GGUF from Unsloth/ggml-org, then serve it with the provided vLLM image or llama.cpp. Match the format to your hardware, respect the license for commercial model-as-a-service use, and test reasoning modes against your actual workloads.

## Sources

- Mistral AI: Mistral Large 4 (Le Chonk) is now open weight — https://mistral.ai/news/mistral-large-4-oss/
- Hugging Face: Welcome Le Chonk: Mistral Large 4 on Hugging Face — https://huggingface.co/blog/mistral-large4
- vLLM: Day 0 support for Mistral Large 4 — https://vllm.ai/blog/2026-10-29-mistral-large-4
- Official model cards on Hugging Face: mistralai/Mistral-Large-4-1T-A52B and NVFP4 variant
