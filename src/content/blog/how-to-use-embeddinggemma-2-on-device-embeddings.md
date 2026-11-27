---
title: "How to Use EmbeddingGemma 2 for On-Device Embeddings"
description: "Step-by-step guide to run Google's EmbeddingGemma 2 locally for multimodal text, image, audio and video embeddings with Sentence Transformers."
pubDate: 2026-11-27T14:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "google", "ai"]
noindex: false
---

EmbeddingGemma 2 maps text, code, images, video and audio into one shared vector space. You can run the 740 million parameter model on a laptop or phone for search, retrieval-augmented generation and classification without sending data to a server.

Google released the model earlier and published the technical report on 17 November 2026. The report details the architecture, training recipe and benchmarks. This guide shows the practical steps to load the model with Sentence Transformers, apply the recommended settings and generate embeddings.

For related model work, see our guide on [how to use Gemini 4 Neon](/blog/how-to-use-gemini-4-neon/).

![Laptop screen showing code and data visualisation](https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80)

## What EmbeddingGemma 2 does

EmbeddingGemma 2 unifies four modalities in a single 768-dimensional space. The total parameter count is 740 million: a 270 million parameter text backbone plus modular vision (170 million) and audio (300 million) encoders. You can load only the encoders you need.

The context window is 8,192 tokens. Matryoshka Representation Learning lets you truncate vectors to 512, 256 or 128 dimensions and re-normalise them. This cuts storage by up to 6x with limited quality loss on most tasks. The licence is Apache 2.0.

Benchmarks show strong results. On the MTEB code benchmark the model scores 78.68 mean NDCG@10, up from 68.76 for the previous version. Multilingual text performance stays comparable. Audio and video retrieval scores are competitive for an on-device model.

## Prerequisites

You need Python 3.9 or later, the sentence-transformers and transformers libraries, and PyTorch. A GPU with bfloat16 support is optional but recommended. CPU works with float32.

Install the packages:

```bash
pip install -U sentence-transformers transformers
```

For image, audio or video inputs also install pillow, soundfile and torchcodec.

## Load the model and create text embeddings

Load the model from Hugging Face. The first run downloads the weights.

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")

query = "What causes the northern lights?"
document = "The northern lights are caused by charged particles from the sun."

query_emb = model.encode(query, prompt_name="SearchQuery")
doc_emb = model.encode(document, prompt_name="Document")
print(model.similarity(query_emb, doc_emb))
```

The similarity score is higher when the texts are related. Use the same model for queries and documents.

## Apply task prefixes

EmbeddingGemma 2 is trained with short instruction prefixes on text inputs. Using the correct prefix improves quality. Prefixes apply only to text. Pass images, video and audio without a prefix.

For search, use prompt_name="SearchQuery" on the query. Format documents as title: {title} | text: {content}. If there is no title, use title: none or the Document prompt name.

Common prompt names include SearchQuery, QuestionAnswering, FactChecking, CodeRetrieval, Classification, Clustering and SentenceSimilarity. Symmetric tasks use the same prefix on every input. Asymmetric tasks use different prefixes for queries and documents.

## Load only the encoders you need

Vision and audio encoders are modular. Skip unused ones to reduce memory.

```python
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None},
)
```

Text-only uses about 270 million parameters. Text plus image is about 440 million. Text plus audio is about 570 million. Full multimodal is 740 million.

![Circuit board close-up representing neural network hardware](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80)

## Truncate vectors and set precision

Truncate with the encode method and re-normalise:

```python
query_emb = model.encode(
    query,
    truncate_dim=256,
    normalize_embeddings=True,
)
```

Queries and documents must use the same dimension. Skipping normalisation degrades ranking quality without raising an error.

Do not use float16. The activation range exceeds float16, so the model can return NaN or silently degraded embeddings. Use bfloat16 on supported hardware or float32 on CPU:

```python
import torch

dtype = torch.bfloat16 if torch.cuda.is_bf16_supported() else torch.float32
model = SentenceTransformer(
    "google/embeddinggemma-2",
    model_kwargs={"torch_dtype": dtype},
)
```

## Generate multimodal embeddings

Interleave text with media using placeholder tokens. The model consumes one shared 8,192-token context. Default token costs are roughly 280 per image, 140 per video frame and 25 per second of audio.

```python
emb = model.encode({
    "text": "Waterproof running shoes. <|image|> Featuring a breathable mesh upper. <|image|> Grip test on wet rock: <|video|>",
    "image": ["shoe.jpg", "mesh.jpg"],
    "video": "demo.mp4",
})
```

The result is a single embedding you can compare with a pure text query. You can also adjust the vision token budget between 70 and 1120 soft tokens per image for a quality versus latency trade-off.

## Practical tips

Measure token usage and latency on your own data before you switch an index. Keep frequent tools or documents in the higher dimensions if quality matters. Store truncated vectors only after you confirm ranking quality on a sample set.

For on-device Android or iOS apps, look at the LiteRT and MediaPipe paths in the official documentation. Quantised INT4 builds further reduce memory. Test safety and fairness filters yourself; the model has no post-training alignment or output moderation.

## Watch the official explainer

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aRIFzzr_Mi0"
    title="EmbeddingGemma 2: How natively multimodal embeddings work"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Google Developers Blog: Read the EmbeddingGemma 2 technical report (17 November 2026). https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2-technical-report/
- EmbeddingGemma 2 model card on gemma.ai. https://gemma.ai/models/embeddinggemma/model-card-v2/
- Official technical report on arXiv. https://arxiv.org/abs/2610.37364
- Hugging Face model page: google/embeddinggemma-2
- Google for Developers YouTube: EmbeddingGemma 2: How natively multimodal embeddings work (video ID aRIFzzr_Mi0)
