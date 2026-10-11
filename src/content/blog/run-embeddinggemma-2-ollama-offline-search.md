---
title: "How to Run EmbeddingGemma 2 Locally with Ollama for Offline Search"
description: "Step-by-step guide to run EmbeddingGemma 2 with Ollama for offline multimodal embeddings and local search."
pubDate: 2026-10-11T09:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai"]
noindex: false
---

Google released EmbeddingGemma 2 on 6 October 2026. It maps text, code, images, video, and audio into one 768-dimensional space. The model has 740 million parameters and an Apache 2.0 license. It runs on phones and laptops without sending data to the cloud.

Ollama makes the text and code path simple. You pull the model, call the embed endpoint, and get normalized vectors. This guide shows the exact commands and a small Python search example. For full multimodal inputs, the sentence-transformers path remains the better option.

![Developer working on code with multiple screens](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## What EmbeddingGemma 2 Gives You

The model is modular. The text and code backbone is 270 million parameters. Add the vision encoder for 440 million total or the audio encoder for 570 million. The full model is 740 million. All configurations project into the same vector space.

Matryoshka Representation Learning lets you truncate vectors to 512, 256, or 128 dimensions. Shorter vectors cut storage while keeping most quality on text and code. The context window is 8,192 tokens. That covers long documents or code files on device.

Google measured roughly 191 MB active RAM for the quantized text-only model on a Pixel 11 Pro and about 567 MB for the full multimodal version. Pair it with Gemma 4 for local retrieval-augmented generation because they share the text tokenizer and audio encoder.

## Install Ollama and Pull the Model

Download Ollama from ollama.com and install it. Version 0.36 or later is required. On Linux or macOS you can also use the terminal.

Check your version:

```bash
ollama -v
```

Pull the text-focused tag first. It is smaller and faster:

```bash
ollama pull embeddinggemma-2:270m
```

For image support, pull the larger tag:

```bash
ollama pull embeddinggemma-2
```

The 270m tag is about 378 MB. The latest tag is about 1.3 GB. Ollama starts the server automatically on desktop. On a headless machine run `ollama serve`.

## Generate Your First Embedding

Send a request to the local API. Ollama returns L2-normalized vectors.

```bash
curl http://localhost:11434/api/embed \
  -d '{
    "model": "embeddinggemma-2:270m",
    "input": "Why is the sky blue?"
  }'
```

The response contains an embeddings array. The length is 768.

In Python install the client:

```bash
pip install ollama
```

Then:

```python
import ollama

response = ollama.embed(
    model="embeddinggemma-2:270m",
    input="Why is the sky blue?"
)
print(len(response["embeddings"][0]))
```

Task prefixes improve quality. For search queries prepend `task: search result | query:`. For documents use `title: none | text:`.

## Build a Simple Local Search

Store a few document vectors and compare a query with cosine similarity. Cosine similarity is the dot product of two unit vectors.

```python
import ollama
import math

def cosine(a, b):
    return sum(x * y for x, y in zip(a, b))

docs = [
    "title: none | text: The northern lights are caused by charged particles from the sun.",
    "title: none | text: Rayleigh scattering makes the sky appear blue during the day."
]

query = "task: search result | query: What causes the northern lights?"

doc_vecs = ollama.embed(model="embeddinggemma-2:270m", input=docs)["embeddings"]
query_vec = ollama.embed(model="embeddinggemma-2:270m", input=query)["embeddings"][0]

scores = [(cosine(query_vec, dv), i) for i, dv in enumerate(doc_vecs)]
scores.sort(reverse=True)
print(scores[0])
```

The highest score is the best match. For larger collections store the vectors in Qdrant, Chroma, or a simple SQLite table. Truncate to 256 dimensions if storage is tight.

![Laptop showing code and data visualizations](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80)

## Limits and Tips

Ollama’s current examples cover text. Image, video, and audio inputs are better handled with sentence-transformers 6.1.0 or later. Load only the encoders you need to save memory.

Keep queries and documents at the same dimension. Mixing 768 and 256 vectors produces bad results. Validate truncation on your own data before deploying 128-dimensional indexes for multimodal work.

The model improves code retrieval by nearly 10 points on MTEB Code compared with EmbeddingGemma 1. Use it for local codebase search. For the full multimodal workflow see our [EmbeddingGemma 2 on-device search guide](/blog/embeddinggemma-2-on-device-search/).

## Watch the Official Introduction

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

EmbeddingGemma 2 with Ollama gives you private, offline embeddings in a few commands. Start with the 270m tag for text and code. Add task prefixes, store the vectors, and compare with cosine similarity. Expand to multimodal inputs through sentence-transformers when you need images or audio. The Apache 2.0 license and small size make it practical for local RAG and search tools.

## Sources

- Google DeepMind, EmbeddingGemma 2 announcement, 6 October 2026: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google Developers Blog, EmbeddingGemma 2: The Developer Guide, 6 October 2026: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
- Ollama library page for embeddinggemma-2: https://ollama.com/library/embeddinggemma-2
- Google for Developers YouTube, Introducing EmbeddingGemma 2: https://www.youtube.com/watch?v=anPsS6huQk0
