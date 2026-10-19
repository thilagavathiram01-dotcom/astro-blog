---
title: "Use EmbeddingGemma 2 for On-Device Multimodal Search"
description: "Set up Google's EmbeddingGemma 2 locally with sentence-transformers to embed text, code, images, video, and audio for private on-device search and RAG."
pubDate: 2026-10-19T12:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "ai-tools", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Google released EmbeddingGemma 2 on October 6, 2026. The open model maps text, code, images, video, and audio into one 768-dimensional space. At 740 million parameters it runs on laptops and phones. The Apache 2.0 license lets you use it in commercial apps.

You no longer need separate models for each modality. A text query can find a matching video clip or audio note. All processing stays on your device, so private data never leaves the hardware.

This guide shows how to load the model with sentence-transformers, embed mixed inputs, and run a simple semantic search. It also covers memory-saving options and Matryoshka truncation.

## What EmbeddingGemma 2 offers

The model builds on the Gemma 4 architecture. The text-and-code backbone uses 270 million parameters. Optional vision and audio encoders raise the total to 740 million. You load only the encoders you need.

It keeps an 8,192-token context window. That fits about 29 images, 58 video frames, or 5.5 minutes of audio. Matryoshka Representation Learning lets you truncate vectors from 768 dimensions down to 512, 256, or 128. Storage drops up to six times with little quality loss on text and code.

On a Pixel 11 Pro with quantization the text-only weights use roughly 191 MB of active RAM. The full multimodal setup needs about 567 MB. These numbers come from Google’s announcement.

If you already integrate larger Gemini models in Android apps, EmbeddingGemma 2 pairs well for local retrieval before you call a cloud model. See our earlier guide on [adding Gemini 4 Argon to Android with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

![Developer coding on a laptop with AI interface](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## Install and load the model

Install the required packages. You need sentence-transformers version 6.1.0 or later and a recent transformers release:

```bash
pip install -U "sentence-transformers>=6.1.0" transformers
```

Load the full model:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
```

The first run downloads the weights from Hugging Face. Subsequent runs stay offline. To save memory, disable unused encoders:

```python
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None}
)
```

This loads only the 270 million parameter text model. Text embeddings remain compatible with embeddings produced by the full model.

## Embed text and code

EmbeddingGemma 2 expects short task prompts for text. Use the prompt_name argument:

```python
query = "How do I implement secure biometric login in Jetpack Compose?"
document = "Use BiometricPrompt with Keystore for key generation and Cipher for encryption."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(document, prompt_name="Document")

similarity = model.similarity(query_emb, doc_emb)
print(similarity)
```

For documents that have titles, format them as `title: {title} | text: {content}`. Use `title: none` when no title exists. Prefixes apply only to text. Images, video, and audio need no prefix.

## Embed images, video, and audio

Pass media as a dictionary. Interleave with text using special tokens:

```python
from PIL import Image

image = Image.open("screenshot.png")
embedding = model.encode({
    "text": "Login screen with biometric button <|image|>",
    "image": image
})
```

Video takes a file path (MP4 preferred). Audio takes a file path or array at 16 kHz mono. All embeddings land in the same space, so you can compare a voice memo against a video frame or a code snippet.

The official Google for Developers video walks through the architecture and on-device demos:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Circuit board representing local AI processing](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## Truncate dimensions and run search

Truncate at encode time or at load time:

```python
short_emb = model.encode(query, truncate_dim=256, normalize_embeddings=True)
```

Queries and documents must use the same dimension. At 256 dimensions you keep most of the quality on text and code and roughly 95 percent on image, video, and speech retrieval, according to the developer guide.

For a basic search, encode your documents once, store the vectors, then encode the query and compute cosine similarity. Libraries such as Qdrant or a simple NumPy matrix work for small collections. Larger indexes benefit from the storage savings of 128- or 256-dimensional vectors.

## Tips for on-device use

Start with the text-only configuration if your data is mostly code or documents. Add the vision encoder only when you need image or video search. The modular design means you can recompute embeddings later without reloading everything.

Quantize the model for mobile. LiteRT and the Google AI Edge Gallery provide optimized builds. On-device RAG with Gemma 4 becomes practical because the two models share the text tokenizer and audio encoder architecture, lowering the combined memory footprint.

Test on your target hardware. A laptop handles the full model easily. A mid-range phone works best with text-only or quantized multimodal weights. Measure latency for your typical input sizes before you ship.

Validate truncation on your own data. The published percentages are averages. Visual document retrieval or long audio may need the full 768 dimensions.

## Conclusion

EmbeddingGemma 2 gives you a single open model for multimodal embeddings that fits on consumer hardware. Load it with sentence-transformers, choose the encoders and vector size that match your constraints, and run private search or RAG without sending data to a server.

Weights are on Hugging Face and Kaggle. The developer guide and model card list exact benchmarks and configuration options. Try the Instant Media Search and Video Moments Finder demos in the Google AI Edge Gallery to see the capabilities before you integrate them into your own app.

**Sources**

- Google Blog: EmbeddingGemma 2 is a best-in-class open model for natively multimodal embeddings (October 6, 2026)
- Google Developers Blog: EmbeddingGemma 2: The Developer Guide
- Hugging Face model card for google/embeddinggemma-2
- YouTube: Introducing EmbeddingGemma 2 (Google for Developers)
