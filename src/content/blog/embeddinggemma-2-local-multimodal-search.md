---
title: "How to Run EmbeddingGemma 2 Locally for Multimodal Search"
description: "Step-by-step guide to install and use EmbeddingGemma 2 for on-device text, image, video, and audio embeddings with sentence-transformers."
pubDate: 2026-10-14T14:00:00
heroImage: "https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer", "ai"]
noindex: false
---

Google DeepMind released EmbeddingGemma 2 on 6 October 2026. It maps text, code, images, video, and audio into one 768-dimensional space. At 740 million parameters it runs on consumer hardware. You can search a photo library with a voice note or find a video moment from a text query without sending data off-device.

This guide shows the official setup path with sentence-transformers. It sticks to what Google published in the launch post and developer guide. If you already run local Gemma models, see the related [local Gemma 4 SDK guide](/blog/antigravity-sdk-local-gemma-4/).

## What EmbeddingGemma 2 delivers

EmbeddingGemma 2 builds on the Gemma 4 architecture. The text and code core uses 270 million parameters. Add the vision encoder for 440 million total or the audio encoder for 570 million. The full multimodal model reaches 740 million parameters. All variants project into the same vector space, so a text query can match an image embedding produced by a larger configuration.

Matryoshka Representation Learning lets you truncate the output from 768 dimensions to 512, 256, or 128. Google reports that 256 dimensions retain most text and code quality and about 95 percent on image, video, and speech retrieval. The model uses an 8,192-token context window. That covers roughly 29 images, 58 video frames at one frame per second, or about 5.5 minutes of 16 kHz mono audio.

On a Pixel 11 Pro with quantization, Google measured about 191 MB active RAM for text-only weights and about 567 MB for the full model. The weights ship under the Apache 2.0 license on Hugging Face and Kaggle.

![Laptop and phone showing code on a wooden desk](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Install the tools

You need Python 3.9 or newer. The recommended path uses sentence-transformers version 6.1.0 or later.

Open a terminal and run:

```bash
pip install -U sentence-transformers transformers
```

For multimodal inputs install the extras:

```bash
pip install -U "sentence-transformers[image,audio,video]" transformers
```

The model loads from the Hugging Face checkpoint `google/embeddinggemma-2`. First use downloads the weights. Subsequent runs use the local cache.

## Load the model

Start with the full model:

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
```

To save memory, omit unused encoders at load time. Set `vision_config` or `audio_config` to `None` inside `config_kwargs`. Disabled encoders never enter memory.

```python
# Text and code only (270M)
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None},
)
```

Use bfloat16 on GPUs that support it. Fall back to float32 elsewhere. Float16 can produce NaNs because some activations exceed its range.

```python
import torch

dtype = torch.bfloat16 if torch.cuda.is_bf16_supported() else torch.float32
model = SentenceTransformer(
    "google/embeddinggemma-2",
    model_kwargs={"torch_dtype": dtype},
)
```

All four encoder setups share the same vector space. A query embedded with the text-only model matches documents embedded with the full model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Embed text and code

EmbeddingGemma 2 expects short task prefixes for text. The sentence-transformers library supplies them through the `prompt_name` argument. Common names include `SearchQuery`, `Document`, and `STS`.

```python
query_emb = model.encode(
    "What causes the northern lights?",
    prompt_name="SearchQuery",
)
doc_emb = model.encode(
    "The northern lights are caused by charged particles from the sun.",
    prompt_name="Document",
)
print(model.similarity(query_emb, doc_emb))
```

For documents that have a title, format the string as `title: {title} | text: {content}`. Use `title: none` when no title exists. Prefixes apply only to text. Pass images, video, and audio without a prompt.

## Embed images, video, and audio

Pass media as a dictionary keyed by modality. Supported keys are `image`, `video`, and `audio`. You can supply file paths, URLs, PIL images, or tensors.

```python
# Single image
emb = model.encode({"image": "photo.jpg"})

# Video (MP4 path or URL; sampled at 1 fps by default)
emb = model.encode({"video": "clip.mp4"})

# Audio (16 kHz mono preferred)
emb = model.encode({"audio": "note.wav"})
```

For mixed inputs, place the markers `<|image|>`, `<|video|>`, or `<|audio|>` inside the text string and supply the corresponding lists:

```python
emb = model.encode({
    "text": "Waterproof running shoes. <|image|> Breathable mesh. <|video|>",
    "image": ["shoe.jpg"],
    "video": ["demo.mp4"],
})
```

![Person coding on a laptop overlooking city lights at night](https://images.unsplash.com/photo-nPJFU_zTVhA?auto=format&fit=crop&w=800&q=80)

## Truncate dimensions

Pass `truncate_dim` together with `normalize_embeddings=True`. Queries and documents must use the same dimension.

```python
emb = model.encode(
    "search query",
    prompt_name="SearchQuery",
    truncate_dim=256,
    normalize_embeddings=True,
)
```

You can also set the dimension at load time:

```python
model = SentenceTransformer("google/embeddinggemma-2", truncate_dim=256)
```

Google notes that 256 dimensions keep most quality on text and code. Drop to 128 only after you measure recall on your own data; multimodal quality falls further at that size.

## Practical tips

- Load only the encoders your data needs. Text-only runs at 270 million parameters. Add vision or audio later; existing embeddings remain compatible.
- Prefer bfloat16 on supported GPUs. Stick to float32 on most CPUs.
- Keep audio at 16 kHz mono. Video defaults to one frame per second; supply pre-extracted frames if you need a different rate.
- Store vectors in a local database such as Qdrant when the index grows. Truncation to 256 dimensions cuts storage roughly threefold.
- Pair the model with Gemma 4 for on-device retrieval-augmented generation. They share the text tokenizer and audio encoder architecture, which lowers the combined memory footprint.

## Conclusion

EmbeddingGemma 2 gives you one open model for text, code, images, video, and audio. The sentence-transformers path is short: install the package, load the checkpoint, and call `encode`. Start with the text-only configuration if memory is tight. Truncate dimensions only after you confirm quality on your own retrieval set. Weights and documentation are available on Hugging Face, Kaggle, and the official Gemma pages.

## Sources

- Google blog: EmbeddingGemma 2: an open, lightweight multimodal embedding model (6 October 2026)
- Google Developers Blog: EmbeddingGemma 2: The Developer Guide (6 October 2026)
- Google AI for Developers: EmbeddingGemma documentation and inference guides
- Hugging Face model card: google/embeddinggemma-2
