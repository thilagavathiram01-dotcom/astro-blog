---
title: "How to Run EmbeddingGemma 2 for On-Device Multimodal Search"
description: "Step-by-step guide to EmbeddingGemma 2 for privacy-first on-device multimodal search with text, images, audio and code using Sentence Transformers."
pubDate: 2026-10-13T14:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer"]
noindex: false
---

Google DeepMind released EmbeddingGemma 2 on October 6, 2026. The model maps text, code, images, video and audio into one shared embedding space. At 740 million parameters it runs on phones and laptops without sending data to a server.<grok type="render_inline_citation" citation_id="75" />

This guide shows how to load the model, generate embeddings for different media types, and run a basic semantic search. You keep everything local.

## What EmbeddingGemma 2 changes

Earlier EmbeddingGemma handled text only. The new version adds native vision and audio encoders. A text query can now retrieve a matching video clip or voice memo. The model uses Matryoshka Representation Learning so you can drop dimensions from 768 down to 128 and cut storage costs by up to six times.<grok type="render_inline_citation" citation_id="75" />

It ships under Apache 2.0. Weights live on Hugging Face and Kaggle. The text backbone is 270 million parameters. Vision adds 170 million and audio adds 300 million. Load only the pieces you need.

![Developer coding on a laptop with multiple screens](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Install the tools

You need Python 3.10 or newer. Create a virtual environment and install the libraries:

```bash
pip install -U sentence-transformers transformers torch
```

Sentence Transformers handles prompting, pooling and normalisation. The first run downloads the weights from Hugging Face.

## Load a text-only model

For pure text or code work, skip the vision and audio encoders. This drops the footprint to roughly 270 million parameters.

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None}
)
```

Encode a query and a document with the correct prompt names:

```python
query = "What causes the northern lights?"
document = "The northern lights are caused by charged particles from the sun."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(document, prompt_name="Document")
print(model.similarity(query_emb, doc_emb))
```

Higher similarity scores mean closer semantic matches. The prompts follow the model card recommendations for retrieval tasks.

## Add images and audio

Pass media as a dictionary. No prompt is required for non-text inputs.

```python
# Full model for multimodal
model = SentenceTransformer("google/embeddinggemma-2")

image_emb = model.encode({"image": "sunset_beach.jpg"})
audio_emb = model.encode({"audio": "ocean_waves.wav"})
text_query = model.encode("ocean waves at sunset", prompt_name="SearchQuery")

print(model.similarity(text_query, image_emb))
print(model.similarity(text_query, audio_emb))
```

The 8K token context window covers about 5.5 minutes of audio, 29 images or 58 video frames. Interleave modalities in a single call when you need them together.

## Build a small search index

Store embeddings in a simple list or a local vector database such as Qdrant. Here is a minimal ranking loop:

```python
documents = [
    "Select Forgot password on the sign-in page to receive a reset link.",
    "Update your billing details from the account settings page.",
    "Enable two-factor authentication to protect your account."
]

query = "How do I reset my password?"
query_emb = model.encode(query, prompt_name="SearchQuery", normalize_embeddings=True)
doc_embs = model.encode(documents, prompt_name="Document", normalize_embeddings=True)

scores = model.similarity(query_emb, doc_embs)[0]
for idx in scores.argsort(descending=True).tolist():
    print(f"{scores[idx].item():.4f} | {documents[idx]}")
```

Normalise embeddings so cosine similarity stays reliable. Truncate dimensions with `truncate_dim=256` if you need to save memory.

![Close-up of code on a computer screen](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## On-device options

For phones and edge devices, Google AI Edge Gallery includes Instant Media Search and Video Moments Finder demos that run EmbeddingGemma 2 offline. LiteRT and MediaPipe Decision Task API provide production paths. Quantised builds drop active RAM to around 191 MB for text-only weights on a Pixel 11 Pro.<grok type="render_inline_citation" citation_id="75" />

Ollama also hosts the model. Pull it with:

```bash
ollama pull embeddinggemma-2
```

Then call the local API for embeddings.

## Pair it with generative models

EmbeddingGemma 2 shares the text tokenizer and audio encoder with Gemma 4. You can retrieve relevant local files with the embedding model, then pass the top matches to Gemma 4 for grounded answers. The combined memory footprint stays lower than running separate specialist models. See our guide on [local Gemma 4 with Antigravity](/blog/antigravity-sdk-local-gemma-4/) for related on-device generation patterns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for better results

Use the task-specific prompt names listed in the Hugging Face model card. SearchQuery works for general retrieval. CodeRetrieval improves codebase indexing. Test on a sample of your own data before you swap an existing index.

Keep the vision and audio encoders unloaded unless you need them. Quantise for mobile. Monitor similarity distributions so you can set a sensible threshold for your application.

## Conclusion

EmbeddingGemma 2 gives developers a single, compact model for multimodal retrieval that stays on the device. Load only the encoders you need, embed text, images and audio with Sentence Transformers, and rank results with cosine similarity. The Apache 2.0 licence and on-device focus make it practical for privacy-sensitive apps and offline tools.

## Sources

- Google DeepMind, “EmbeddingGemma 2: an open, lightweight multimodal embedding model,” October 6, 2026. https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Hugging Face model card for google/embeddinggemma-2.
- Google for Developers YouTube, “Introducing EmbeddingGemma 2,” October 6, 2026.
- Official documentation on AI.google.dev and developers.google.com/edge.
