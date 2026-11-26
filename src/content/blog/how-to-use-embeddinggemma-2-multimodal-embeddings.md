---
title: "How to Use EmbeddingGemma 2 for Multimodal Embeddings"
description: "Step-by-step guide to EmbeddingGemma 2: load the 740M model, generate text image audio video embeddings, and build cross-modal search."
pubDate: 2026-11-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "google"]
noindex: false
---

EmbeddingGemma 2 maps text, images, audio, and video into one shared 768-dimensional space. Released by Google DeepMind on 6 October 2026 under Apache 2.0, the 740M-parameter model runs locally and supports cross-modal retrieval without separate models for each data type.

This guide shows how to install it, generate embeddings for every modality, and use them for search or RAG. You need Python 3.9+ and a machine with at least 8 GB RAM. GPU is optional but faster.

## Why EmbeddingGemma 2 Matters

Previous embedding models usually handled one modality. EmbeddingGemma 2 uses modality-specific encoders that feed a shared Gemma 4 backbone. Text, code, images, video frames, and audio spectrograms all land in the same vector space. Cosine similarity works across any combination.

The model is modular. Load only the text backbone (about 270M parameters) for text and code. Add the 170M vision encoder or the 300M audio encoder as needed. Full multimodal stays under 750M parameters. Context window is 8,192 tokens. Vectors support Matryoshka truncation to 512, 256, or 128 dimensions.

Google reports strong scores on MTEB code (78.68) and competitive results on vision, audio, and multimodal benchmarks. Weights are on Hugging Face at `google/embeddinggemma-2`.

![Laptop screen showing code for AI embeddings](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Install and Load the Model

Install the required packages:

```bash
pip install -U sentence-transformers transformers pillow soundfile torchcodec
```

Load the full model:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
print(model.device)
print(sum(p.numel() for p in model.parameters()))
```

On supported GPUs it defaults to bfloat16. Avoid float16; it produces NaN or degraded vectors. For text-only use, pass `config_kwargs={"vision_config": None, "audio_config": None}` to reduce memory.

Sentence Transformers 6.1+ handles preprocessing, task prompts, mean pooling, and L2 normalisation automatically.

## Generate Text and Code Embeddings

Text uses task-specific prompt names. Common ones include `SearchQuery` for queries and `Document` for passages.

```python
query = "What causes the northern lights?"
doc = "The northern lights are caused by charged particles from the sun."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(doc, prompt_name="Document")
similarity = model.similarity(query_emb, doc_emb)
print(similarity)
```

For documents with titles, format manually as `title: {title} | text: {content}` because the Document prompt applies a default title. Code retrieval uses prompts such as `CodeRetrieval`. The model understands 100+ languages and shows roughly 14% improvement on code tasks versus EmbeddingGemma 1.

## Image Embeddings and Text-to-Image Search

Pass images as a dictionary:

```python
from PIL import Image
import requests

img_url = "https://raw.githubusercontent.com/google-gemma/cookbook/refs/heads/main/apps/sample-data/GoldenGate.png"
emb_image = model.encode({"image": img_url})

candidates = [
    "San Francisco",
    "a cute cat walking",
    "a friendly dog sitting in the grass",
]
emb_cands = model.encode(candidates)
scores = model.similarity(emb_image, emb_cands)
print(scores)
```

You can adjust the vision token budget (70 to 1120 soft tokens) via `processing_kwargs` for quality versus speed. Higher budgets improve detail at the cost of latency.

## Audio and Video Embeddings

Audio accepts file paths, URLs, or in-memory waveforms. The model resamples to 16 kHz.

```python
aud_url = "https://gemma.ai/assets/capabilities/roses-are.wav"
emb_audio = model.encode({"audio": aud_url})

candidates = ["Roses are red, violets are blue.", "random static white noise"]
scores = model.similarity(emb_audio, model.encode(candidates))
```

Video is sampled at 1 frame per second by default. Pass a URL or path:

```python
vid_url = "https://github.com/bebechien/gemma/raw/refs/heads/main/videos/cat_dozing.mp4"
emb_video = model.encode({"video": vid_url})
```

Control frame count, FPS, and timestamps with `processing_kwargs`. Interleaved inputs are supported: combine text, images, audio, and video in one dictionary or use `<|image|>`, `<|audio|>`, `<|video|>` placeholders inside text.

![Developer workspace with multiple code screens](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## Build a Simple Cross-Modal Search Index

1. Embed your documents (text passages, image paths, audio clips, video clips).
2. Store the vectors (use Qdrant, FAISS, or a simple NumPy array for small sets).
3. Embed the query (text, image, or mixed).
4. Compute cosine similarity and return the top results.

Because everything lives in one space, a text query can retrieve matching images, audio snippets, or video moments without captioning or transcription steps. For RAG, feed the top retrieved items (or their embeddings) into a generator model. Sensitive data never needs to leave the device.

Truncate dimensions with Matryoshka if storage is tight. 512 dimensions retain most quality; 128 dimensions trade accuracy for size, especially on multimodal tasks.

## Tips and Limitations

- Always use bfloat16 or float32. Float16 breaks embeddings.
- Prefixes apply only to text. Media inputs need no prompt names.
- Selective encoder loading saves memory on edge devices.
- Fine-tuning is possible; Unsloth provides guidance.
- On-device deployment works with LiteRT, MediaPipe, transformers.js, and MLX.
- Context is 8K tokens; long videos may need frame budgeting.

For related on-device AI work, see our guide on [A2UI 1.0 generative UI quickstart](/blog/a2ui-1-0-generative-ui-quickstart-guide/).

## Conclusion

EmbeddingGemma 2 removes the need for separate embedding models per modality. One 740M open model handles text, code, images, audio, and video in a shared space, runs locally, and supports efficient truncation. Start with the sentence-transformers quickstart above, then expand to your own multimodal index.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aRIFzzr_Mi0"
    title="EmbeddingGemma 2: How natively multimodal embeddings work"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- [Google blog: EmbeddingGemma 2 technical report and model overview](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2-technical-report/)
- [Hugging Face model card: google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)
- [Google AI for Developers: Multimodal Embeddings with EmbeddingGemma 2](https://ai.google.dev/gemma/docs/embeddinggemma/multimodal-embeddinggemma-with-sentence-transformers)
- [arXiv technical report: EmbeddingGemma 2: Unified and Efficient Multimodal Representations](https://arxiv.org/abs/2610.37364)
- [YouTube: EmbeddingGemma 2: How natively multimodal embeddings work](https://www.youtube.com/watch?v=aRIFzzr_Mi0)
