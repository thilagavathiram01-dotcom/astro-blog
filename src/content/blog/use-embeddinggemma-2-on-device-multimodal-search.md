---
title: "How to Use EmbeddingGemma 2 for On-Device Search"
description: "Learn how to run EmbeddingGemma 2 for private on-device multimodal search across text, images, video, and audio with sentence-transformers."
pubDate: 2026-10-18T23:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "developer", "google"]
noindex: false
---

EmbeddingGemma 2 maps text, code, images, video, and audio into one 768-dimensional space so you can search any of them with any other. The 740-million-parameter model runs on consumer hardware under an Apache 2.0 license. It arrived on 6 October 2026 as the open successor to the original EmbeddingGemma.

You no longer need separate captioning, transcription, and embedding models. One modular model handles the full pipeline offline. That keeps data on-device and cuts latency.

This guide shows the practical steps to load it, embed different modalities, truncate vectors for storage, and build a simple local search index. All details come from the official Google DeepMind announcement, the developer guide, and the model card.

![Developer working on multimodal search code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## What EmbeddingGemma 2 actually does

The model uses a 270-million-parameter text-and-code backbone based on Gemma 4. Optional vision (+170M) and audio (+300M) encoders load only when you need them. Total size reaches 740 million parameters only for full multimodal use.

All inputs project into the same 768-dimensional vector space. You can therefore compare a text query against video frames, or an image against audio clips, with ordinary cosine similarity. Matryoshka Representation Learning lets you truncate the vectors to 512, 256, or 128 dimensions. A million 768-dimensional vectors in bfloat16 occupy roughly 1.5 GB; the 128-dimensional versions need only 250 MB.

On a Pixel 11 Pro with quantization the text-only weights fit in about 191 MB of active RAM. The full model uses about 567 MB. Context is 8,192 tokens—enough for roughly 5.5 minutes of audio, 29 images, or 58 video frames.

It improves code retrieval by nearly 10 points over the previous EmbeddingGemma on MTEB Code while keeping strong multilingual text performance. The same shared tokenizer and audio encoder architecture also pair cleanly with Gemma 4 for on-device retrieval-augmented generation.

## Install and load the model

You need Python with the sentence-transformers library (version 6.1.0 or later) and a recent transformers package.

```bash
pip install -U sentence-transformers transformers
```

Load the full model:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
```

To save memory, disable unused encoders at load time. Text-only uses the 270M backbone:

```python
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None}
)
```

Text-plus-vision is 440M (`audio_config: None`). Text-plus-audio is 570M (`vision_config: None`). The four configurations share one vector space, so a text-only query embedding still matches documents embedded with the full model.

Use bfloat16 on supported GPUs and float32 elsewhere. The model card warns that float16 produces NaNs or silent quality loss.

```python
import torch
dtype = torch.bfloat16 if torch.cuda.is_bf16_supported() else torch.float32
model = SentenceTransformer(
    "google/embeddinggemma-2",
    model_kwargs={"torch_dtype": dtype}
)
```

## Embed text and code with the right prompts

EmbeddingGemma 2 expects short task prefixes. The sentence-transformers integration supplies them through `prompt_name`.

For retrieval, encode the query and the documents with different prompts:

```python
query = "How does the attention mask work in the transformer?"
document = "The causal attention mask prevents future tokens from attending to previous ones."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(document, prompt_name="Document")

print(model.similarity(query_emb, doc_emb))
```

Other useful prompt names include QuestionAnswering, SentenceSimilarity, Classification, and Clustering. Omitting the prompt still works but lowers precision.

For a local code search index you can embed entire files or functions with the Document prompt, then query them with SearchQuery. The 8K context window covers typical source files.

## Embed images, video, and audio

Pass media as a dictionary or interleave it with text using special tokens.

```python
# Single image
image_emb = model.encode({"image": "path/to/photo.jpg"})

# Interleaved text + image
text_image = model.encode(
    "A diagram of the model architecture <|image|>",
    images=["diagram.png"]
)
```

Video is sampled at one frame per second by default. Audio should be 16 kHz mono. You can mix modalities inside the same 8K-token window.

Because everything lands in the same space, a text query can retrieve the most similar video moments, or an audio clip can surface matching images. Google AI Edge Gallery ships demos for Instant Media Search and Video Moments Finder that run fully offline.

![On-device search across media types](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Truncate dimensions and build a simple index

For large collections, truncate at encode time:

```python
embeddings = model.encode(
    documents,
    prompt_name="Document",
    truncate_dim=256,
    normalize_embeddings=True
)
```

Queries must use the same dimension. At 256 dimensions you keep most of the original quality on text and code and about 95 percent on image, video, and speech retrieval, while cutting storage by a factor of three. 128 dimensions is useful for first-stage shortlisting of large text indexes.

A minimal local search then becomes:

1. Embed your documents (text, code, images, or mixed) once and store the vectors.
2. Embed the user query.
3. Rank by cosine similarity.

You can store the vectors in any vector database that accepts 128- to 768-dimensional floats. For pure on-device work, a simple NumPy array or a lightweight library is enough.

## Practical tips and limits

Load only the encoders you need. Adding vision or audio later does not require re-embedding existing text vectors.

Validate truncated dimensions on your own data before shipping 128-dimensional multimodal indexes. Quality drops more on vision and audio than on text.

Pair the embeddings with Gemma 4 for private RAG: retrieve with EmbeddingGemma 2, then generate with the generative model. They share the tokenizer and audio encoder, so the combined memory footprint stays smaller.

Fine-tuning is supported through Unsloth and the sentence-transformers trainer if your domain needs better domain-specific retrieval.

On Android the model is headed for ML Kit integration. Until then, LiteRT or the sentence-transformers path on a desktop or server works today. See also our guide on [on-device AI vaults for Android](/blog/android-aiseal-on-device-ai-vault/) for related privacy patterns.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

EmbeddingGemma 2 gives you a single open model that searches text, code, images, video, and audio offline. Load the modular encoders you need, apply the correct task prompts, and optionally truncate the vectors for storage. The result is private, low-latency multimodal retrieval that runs on ordinary hardware.

Start with the text-only configuration and a small document set, then expand to images or audio once the pipeline is solid. The official developer guide and model card on Hugging Face contain the full API reference and additional examples.

## Sources

- Google DeepMind, EmbeddingGemma 2 announcement (6 October 2026): https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google Developers Blog, EmbeddingGemma 2: The Developer Guide (6 October 2026): https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
- Google AI for Developers, Multimodal Embeddings with EmbeddingGemma 2 and sentence-transformers inference guides
- Hugging Face model card: https://huggingface.co/google/embeddinggemma-2
- Google AI Edge Gallery demos and LiteRT documentation
