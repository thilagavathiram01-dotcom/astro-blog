---
title: "How to Run Local Gemma 4 Agents in Antigravity SDK"
description: "Run Gemma 4 26B A4B on-device with the Antigravity SDK, LiteRT, and optional Ollama or LM Studio backends."
pubDate: 2026-09-29T10:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "developer", "tutorials", "ai", "google"]
noindex: false
---

On 23 September 2026, Google announced that the **Antigravity SDK** can drive agent workflows on your machine. The first supported on-device model is **Gemma 4 26B A4B**, running through **Google AI Edge LiteRT**. You can also point the same SDK at an OpenAI-compatible local server such as Ollama, LM Studio, or vLLM.

That split matters if you write code that cannot leave the laptop. Cloud models still plan. Local models touch the files.



![Close-up of a circuit board used as a stand-in for on-device inference hardware](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)



## What Google actually shipped

The Antigravity SDK is the same agent stack that powers [Google Antigravity](https://antigravity.google/). Local support adds two config classes, documented in the official SDK pages:

- **`LiteRTAgentConfig`** — loads a `.litertlm` checkpoint (Gemma 4 26B A4B) and starts a managed loopback server on the device.
- **`LocalOpenAIAgentConfig`** — talks to an existing local HTTP server with an OpenAI-style API.

Google lists four reasons to use this path: no per-token API bill, source stays on disk, agents keep working offline, and you can mix a small cloud planner with a local worker.

Hardware note from the SDK docs: plan on about **16.8 GB** for the Gemma 4 26B A4B LiteRT import and **24 GB+** of VRAM or unified memory. LiteRT picks `gpu` (Apple Silicon Metal or NVIDIA CUDA) or `npu` at startup.

If you already use cloud agents in Antigravity, pair this guide with [Antigravity Teamwork with Gemini 3.7](/blog/antigravity-teamwork-gemini-3-7/) for the multi-agent cloud side.

## Install LiteRT and import Gemma 4 26B A4B

Use a virtual environment so `litert-lm` does not collide with other Python stacks.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install google-antigravity litert-lm
```

Import the official community checkpoint:

```bash
litert-lm import \
  --from-huggingface-repo=litert-community/gemma-4-26B-A4B-it-litert-lm \
  gemma-4-26B-A4B-it-gpu.litertlm \
  gemma4-26b
```

The CLI registers the file at `~/.litert-lm/models/gemma4-26b/model.litertlm` on typical setups. The SDK README currently says this workflow works best with `gemma-4-26B-A4B-it-gpu.litertlm`. Other `.litertlm` files may fail.

On macOS, if the import dies on SSL verification, install `certifi` and export `SSL_CERT_FILE` before you retry. That tip is in Google’s local-models reference, not a third-party workaround.

Tilde paths are **not** expanded inside `LiteRTAgentConfig`. Always pass `os.path.expanduser(...)` or an absolute path.

## Run a first local agent

Create `agy_sample.py`:

```python
import asyncio
import os
from google.antigravity import Agent, LiteRTAgentConfig

MODEL_PATH = os.path.expanduser(
    "~/.litert-lm/models/gemma4-26b/model.litertlm"
)

async def main():
    config = LiteRTAgentConfig(model_path=MODEL_PATH)
    async with Agent(config) as agent:
        response = await agent.chat(
            "What files are in the current directory?"
        )
        async for token in response:
            print(token, end="", flush=True)
        print()

asyncio.run(main())
```

Run it from the project folder. The SDK starts a local loopback server, loads the checkpoint, and streams tokens. No Gemini API key is required for this path.

Google’s getting-started example also exposes a `.lightweight()` helper on the config. Use it when you want a smaller default tool set for a first smoke test.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/boy-UjB8hpA"
    title="Bring the power of on-device AI to life with Google AI Edge and Gemma"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Hybrid pattern: cloud architect, local builders

The Developers Blog demo is explicit about token math. **Gemini 3.8 Flash** planned a three-file security gauntlet from filenames and task text only. That planner used **95 cloud tokens**. Local **Gemma 4 26B** instances then reproduced bugs, wrote patches, critiqued them, and ran regression tests on the GPU.

In the recorded run, **97.2% of 3,322 tokens** stayed on the machine. Source for `auth.py`, `billing.py`, and `database.py` never left the disk.

Google published the sample at [goo.gle/47cKYyV](https://goo.gle/47cKYyV). Point it at the bundled three-file suite first. Only then aim it at your own modules and tests.

Treat the percentages as one published run, not a guarantee for every repo. File size, test count, and how much context you send the planner will change the split.

For cloud-only coding agents, see [Gemini 3.7 Flash for Coding Agents](/blog/gemini-3-7-flash-coding-agents/).



![Developer desk with dual monitors and a laptop running code](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)



## Local utilities without an API key

The same post shows Gemma 4 26B A4B building a live terminal resource monitor from one prompt. The agent wrote a Python script with **psutil** and **rich**, produced `requirements.txt`, and ran a self-check. All of that stayed on-device.

That is the right shape of task for LiteRT: bounded files, a test you can run locally, and no need for a frontier model to invent product strategy.

Keep prompts narrow. Name the libraries, the output file, and the success check. Wide “improve this whole repo” jobs still belong to a cloud model or the hybrid planner.

## Plug in Ollama, LM Studio, or vLLM

If you already host Gemma 4 (or another model) behind an OpenAI-compatible server, skip LiteRT and use `LocalOpenAIAgentConfig`.

The official example defaults to `http://localhost:11434/v1` for Ollama. Your agent tools and orchestration stay the same. Only the inference backend changes.

Do not mix configs in one `Agent` instance. Pick LiteRT **or** a local HTTP server. Confirm the model name your server expects. Ollama tags are not the same string as a `.litertlm` path.

## Practical limits

- Age, region, and Google AI plan rules still apply to **cloud** pieces such as Gemini 3.8 Flash. Local Gemma does not unlock those models.
- 26B A4B is large. A 16 GB laptop will not match the documented 24 GB+ recommendation.
- README warning: other LiteRT files may not work well yet.
- Offline means offline for the local worker. The hybrid planner still needs a network and a valid Gemini path.
- Corporate policy may still forbid downloading Hugging Face weights. Check that before the 16.8 GB pull.

## Checklist

1. Python venv with `google-antigravity` and `litert-lm`.
2. `litert-lm import` of Gemma 4 26B A4B, path expanded in code.
3. Smoke test that lists the current directory.
4. Optional hybrid demo from the official gauntlet repo.
5. Optional `LocalOpenAIAgentConfig` if you already run Ollama or LM Studio.
6. Disconnect or delete checkpoints you no longer use.

Local Antigravity agents will not replace every Gemini API call. They do let you keep source, tests, and patch loops on the GPU you already own. Start with the directory listing, then the three-file gauntlet, then one internal module you are allowed to scan on-device.

## Sources

- [Introducing Support for Local AI Models in the Antigravity SDK](https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/) — Google Developers Blog, 23 Sep 2026
- [Local models — Antigravity SDK](https://antigravity.google/docs/sdk/local-models/) — Google Antigravity Docs
- [Antigravity SDK](https://antigravity.google/product/antigravity-sdk/) — Google Antigravity
- [Google AI Edge LiteRT](https://developers.google.com/edge/litert) — Google AI Edge
- [Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) — Google Blog
- [antigravity-sdk-python examples](https://github.com/google-antigravity/antigravity-sdk-python) — GitHub
- [Bring the power of on-device AI to life with Google AI Edge and Gemma](https://www.youtube.com/watch?v=boy-UjB8hpA) — YouTube
