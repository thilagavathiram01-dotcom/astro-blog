---
title: "EmbeddingGemma 2 On-Device Multimodal Embeddings Guide"
description: "How to use EmbeddingGemma 2 for private on-device search across text, images, audio, and video with code examples and tips."
pubDate: 2026-11-07T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer", "google"]
noindex: false
---

EmbeddingGemma 2 maps text, code, images, video, and audio into one shared vector space. You run it locally so sensitive data never leaves the device. Google DeepMind released the model on 6 October 2026 under the Apache 2.0 licence.

It builds on the earlier text-only EmbeddingGemma (more than 20 million downloads) and adds native multimodal support while staying small enough for phones and laptops. The full model is 740 million parameters. A text-only load drops to roughly 270 million.


![Laptop showing code and notes on a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)


## What EmbeddingGemma 2 does

The model produces 768-dimensional embeddings. Text, images, video frames, and audio clips land in the same space, so a text query can retrieve a matching photo or sound clip. You can truncate the vectors to 512, 256, or 128 dimensions via Matryoshka Representation Learning. Truncation cuts storage by up to 6× with limited quality loss.

Context length is 8 192 tokens — four times the previous version. That covers about 5.5 minutes of audio, 29 images, or 58 video frames, or mixes of them. The modular design lets you load only the encoders you need:

- Text only: ~270 M parameters
- Text + vision: ~440 M
- Text + audio: ~570 M
- Full multimodal: 740 M

Quantized weights run in roughly 191 MB of active RAM for text-only work on a Pixel 11 Pro, or about 567 MB for the full model.

## Key improvements over the first EmbeddingGemma

Code retrieval scores rose sharply. On the MTEB Code benchmark the model moved from 68.76 to 78.68. Multilingual text performance stayed strong. It leads other sub-1 B multimodal embedders on several image, video, and audio tasks and matches or beats some specialist models more than twice its size.

Because it shares the Gemma 4 tokenizer and audio encoder, you can pair it with Gemma 4 generative models for fully local RAG pipelines without loading two large separate stacks.

## How to start with EmbeddingGemma 2

Install the required libraries:

```bash
pip install -U sentence-transformers transformers
```

Load the model and embed a query plus a document:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")

query = "What causes the northern lights?"
document = "The northern lights are caused by charged particles from the sun."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(document, prompt_name="Document")
print(model.similarity(query_emb, doc_emb))
```

The first run downloads the weights from Hugging Face. Later runs stay on your machine.

To load only the text backbone and save memory:

```python
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None},
)
```

For images or audio you need the extra packages (`pillow`, `soundfile`, `torchcodec`) and you leave the corresponding config present.

Truncate dimensions when you call encode:

```python
emb = model.encode(
    query,
    truncate_dim=256,
    normalize_embeddings=True,
    prompt_name="SearchQuery",
)
```

Always normalize after truncation. Queries and documents must use the same dimension.

## Practical on-device use cases

Build a private photo library search. Embed every image once, store the vectors in a local database (Qdrant, a simple NumPy array, or SQLite with a vector extension), then query with text. No cloud call is required.

Index a personal audio archive. A spoken note can retrieve the matching video segment or photo because all modalities share the same space. Google AI Edge Gallery demonstrates Instant Media Search and Video Moments Finder with this model.

Create a local codebase search for coding agents. The improved code scores make it practical to embed files and retrieve relevant snippets without sending source code off-device. Pair the embeddings with a small generative model for fully offline RAG.

For Android, Google AI Edge provides MediaPipe Decision Task and LiteRT paths so you can ship the same embeddings inside a mobile app. Browser users can try the WebGPU demo on Hugging Face.


![Abstract digital network visualization](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)


## Tips for production

- Choose the smallest encoder set that matches your data. Text-only keeps the footprint low.
- Start with 256 or 128 dimensions for large indexes and measure recall on your own queries before committing.
- Use the built-in prompt names (`SearchQuery`, `Document`, `CodeRetrieval`, `Classification`) — they improve results on most tasks.
- Quantize for mobile. The model card and LiteRT community repos include ready quantized builds.
- Fine-tune if your domain is narrow. Official guides cover Sentence Transformers and Unsloth workflows.
- Test offline thoroughly. Network latency disappears, but you must still validate quality on real user data.

If you already work with other on-device models, compare the memory profile here with the approach in our guide on [Android AISeal for protected on-device AI](/blog/android-aiseal-on-device-ai-vault/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google blog: EmbeddingGemma 2: an open, lightweight multimodal embedding model (6 October 2026). https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Hugging Face model card: google/embeddinggemma-2. https://huggingface.co/google/embeddinggemma-2
- Google AI documentation and inference notebooks. https://ai.google.dev/gemma/docs/embeddinggemma
- YouTube introduction by Google for Developers. https://www.youtube.com/watch?v=anPsS6huQk0
