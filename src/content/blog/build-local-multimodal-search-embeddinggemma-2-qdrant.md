---
title: "Build Local Multimodal Search with EmbeddingGemma 2"
description: "Step-by-step guide to build private multimodal search using EmbeddingGemma 2 and Qdrant. Run text, image, and audio queries fully offline."
pubDate: 2026-10-18T15:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

Google DeepMind released EmbeddingGemma 2 on 6 October 2026. The open model maps text, code, images, video, and audio into one 768-dimensional space. It runs on consumer hardware with as little as 191 MB of RAM for text-only workloads. This guide shows how to pair it with Qdrant for a private local search system.

You keep data on your machine. Queries across photos, voice notes, and documents work without sending anything to a cloud service. For background on the model, see our earlier post on [EmbeddingGemma 2 for on-device search](/blog/embeddinggemma-2-on-device-search/).

## What EmbeddingGemma 2 adds

EmbeddingGemma 2 builds on the original EmbeddingGemma. It keeps strong multilingual text performance while adding native support for other modalities. The full model has 740 million parameters. You can load only the text backbone (270M) if you do not need vision or audio.

The model uses Matryoshka Representation Learning. You can truncate embeddings from 768 dimensions down to 512, 256, or 128. This cuts storage needs in a vector database while keeping most of the quality. Context length reaches 8,192 tokens. That covers long documents or about 5.5 minutes of audio in one pass.

Google released it under the Apache 2.0 license. Weights are available on Hugging Face and Kaggle. Official benchmarks show a large gain on code retrieval compared with the previous version.

![Developer working on code and AI models](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Install the tools

You need Python 3.10 or later, the sentence-transformers library, and a running Qdrant instance. The fastest way to start Qdrant locally is with Docker:

```bash
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```

Install the Python packages:

```bash
pip install -U sentence-transformers transformers qdrant-client
```

The first load of EmbeddingGemma 2 downloads the weights. On a machine with limited RAM, start with the text-only configuration to save memory.

## Load the model and create embeddings

Import SentenceTransformer and load the model. Use the official Hugging Face ID:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
```

For text search, use the built-in task prompts. Encode a query and a document differently:

```python
query_emb = model.encode("What causes the northern lights?", prompt_name="SearchQuery")
doc_emb = model.encode("The northern lights are caused by charged particles from the sun.", prompt_name="Document")
print(model.similarity(query_emb, doc_emb))
```

The similarity score shows how well the model aligns the two pieces of text. The same method works for code snippets when you use the appropriate prompt.

To embed an image, pass a dictionary:

```python
image_emb = model.encode([{"image": "path/to/photo.jpg"}])
```

Audio and video follow the same pattern. Interleaved inputs are supported when you mark positions with special tokens. All outputs land in the same vector space, so a text query can retrieve an image or an audio clip.

## Store vectors in Qdrant

Create a collection that matches the embedding size. Default size is 768. You can truncate at load time if you want smaller vectors:

```python
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

client = QdrantClient("localhost", port=6333)
client.create_collection(
    collection_name="multimodal_search",
    vectors_config=VectorParams(size=768, distance=Distance.COSINE),
)
```

Upsert your embeddings with payload metadata such as file path, modality, and timestamp. Query with a new embedding:

```python
results = client.query_points(
    collection_name="multimodal_search",
    query=query_emb.tolist(),
    limit=5,
)
```

The returned points include the closest matches and their scores. Filter by payload if you want results only from images or only from a certain folder.

![Laptop showing code and search interface](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Practical tips for better results

Use the correct prompt names for retrieval tasks. The model was trained with short instructions that improve quality. Omitting them still works but lowers precision.

Start with medium truncation (256 or 512 dimensions) when storage matters. Google notes that most text and code quality remains at 256 dimensions. Image and audio lose more, so test on your own data.

For pure text workloads, load the model with vision and audio encoders disabled. This reduces the footprint to roughly 270 million parameters and about 191 MB of active RAM after quantization.

Run a small evaluation set before you index thousands of files. Measure recall on queries you care about. On-device or local setups trade some absolute quality for privacy and speed.

If you later want generative answers over the retrieved content, pair the search results with a local Gemma 4 model. EmbeddingGemma 2 shares the tokenizer with Gemma 4, which keeps the combined memory use lower.

## Watch the official introduction

Google for Developers published a short video that walks through the model architecture, modular loading, and example on-device demos.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

EmbeddingGemma 2 plus Qdrant gives you a practical path to private multimodal search. Load the model, generate embeddings for your files, and store them in a local vector database. Text, images, and audio share one space, so one query can surface matches across modalities.

The setup stays on your hardware. No API key is required for the embedding model itself. Check the official model card and developer guide for the latest quantization options and fine-tuning steps if you need domain-specific accuracy.

## Sources

- Google DeepMind, “EmbeddingGemma 2: an open, lightweight multimodal embedding model,” 6 October 2026: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google Developers Blog, “EmbeddingGemma 2: The Developer Guide,” 6 October 2026: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
- EmbeddingGemma 2 model card: https://gemma.ai/models/embeddinggemma/model-card-v2/
- Qdrant documentation on local vector search: https://qdrant.tech/documentation/
