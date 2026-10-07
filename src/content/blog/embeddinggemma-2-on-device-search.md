---
title: "EmbeddingGemma 2 Guide: On-Device Multimodal Search"
description: "Set up EmbeddingGemma 2 for local text, image, and audio search. Covers prompts, Matryoshka truncation, and on-device memory limits."
pubDate: 2026-10-07T09:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "ai", "google", "developer"]
noindex: false
---

Google DeepMind released EmbeddingGemma 2 on 6 October 2026. The open model maps text, code, images, video frames, and audio into one 768-dimensional vector space, and it is built to run on a phone or laptop instead of a remote API.

That matters if you index private notes, photos, or meeting audio. A single model replaces a captioner, a speech-to-text step, and a text embedder. Weights ship under the Apache 2.0 license on [Hugging Face](https://huggingface.co/google/embeddinggemma-2) and [Kaggle](https://www.kaggle.com/models/google/embeddinggemma-2).

This guide covers what changed from EmbeddingGemma 1, how to embed text with Sentence Transformers, and where the on-device demos live.

## What EmbeddingGemma 2 actually is

EmbeddingGemma 2 has 740 million parameters and is built on the Gemma 4 architecture. The text path is about 270 million parameters (a 130M transformer backbone plus a 140M embedder). Optional encoders add vision (170M) and audio (300M). You load only the modalities you need.

Outputs are 768-dimensional by default. Matryoshka Representation Learning lets you keep the leading 512, 256, or 128 dimensions. Google says that truncation can cut local vector storage by up to 6x, with a small quality trade-off.

The context window is 8,192 tokens, four times EmbeddingGemma 1. Official docs list practical limits of about 5.5 minutes of audio, 29 images, 58 video frames, or mixed inputs in one request.

On a Pixel 11 Pro, quantized weights use about 191MB of active RAM for text-only and about 567MB for the full multimodal model. Those figures come from Google's launch post, not a third-party lab.

Code retrieval improved on MTEB Code from 68.76 to 78.68, a 9.92-point gain, while multilingual text quality stayed in line with EmbeddingGemma 1. The first model has more than 20 million downloads, mostly for on-device search and private RAG.

![Circuit board close-up representing on-device model weights](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Try the official demos before you write code

Google AI Edge Gallery on Android and iOS now includes two EmbeddingGemma 2 showcases.

Instant Media Search embeds local photos and videos into an on-device SQLite index. Queries and media share one vector space, and results rank by cosine similarity as you type. You can also search with an example image or the camera stream. The German example in the developers post (“Katze schläft auf Tastatur”) shows multilingual ranking without a cloud translation step.

Video Moments Finder indexes keyframes and audio chunks, then jumps to timestamps for queries such as “kids laughing” or “dog catching a frisbee.” It does not transcribe speech or caption frames first.

Install Gallery from Google Play or the App Store, or read the [gallery source](https://github.com/google-ai-edge/gallery). On Mac, Google AI Edge Foresight pairs EmbeddingGemma 2 with Gemma 4 for local meeting notes and file recall. Audio stays on the machine.

ML Kit support for Android is planned for the coming weeks, including NPU acceleration where the device has one. It is not a production API yet. Until then, use MediaPipe Tasks or LiteRT.

## Install and embed text locally

The text path is the fastest way to confirm the model works. Google's Sentence Transformers guide uses this setup.

1. Use a recent Python environment. Install the libraries:

```bash
pip install -U sentence-transformers transformers
```

2. Load the model. The first run downloads weights from Hugging Face.

```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("google/embeddinggemma-2")
print(model.device)
```

3. For text-only work, skip the vision and audio encoders and stay near the 270M footprint:

```python
model = SentenceTransformer(
    "google/embeddinggemma-2",
    config_kwargs={"vision_config": None, "audio_config": None},
)
```

4. Encode a few strings and check the shape. You should see `(768,)`.

```python
words = ["king", "queen", "car"]
embeddings = model.encode(words)
print(embeddings.shape)
```

Activations are not compatible with float16. Use bfloat16 on supported GPUs, or float32 on CPU. The official notebook reports about 744 million parameters when every encoder is loaded, which matches the rounded 740M figure.

If you already run Gemma 4 locally, the shared text tokenizer and audio encoder keep the combined memory lower than two unrelated models. See our [Gemma 4 12B local laptop guide](/blog/gemma-4-12b-local-laptop/) for a generative pairing.

## Use task prompts, then rank results

Text inputs need a task prefix. Images, video, and audio do not. Prefixes separate a short query from a long document so retrieval does not collapse.

Built-in prompt names in Sentence Transformers include:

- `Retrieval-query` applies `task: search result | query: `.
- `Retrieval-document` applies `title: none | text: `.
- `CodeRetrieval` applies `task: code retrieval | query: `.
- `STS` applies `task: sentence similarity | query: ` for symmetric similarity.

For a notes index, encode the question and the passages with different prompts:

```python
query = "How do I cut RAM use for text-only embeddings?"
docs = [
    "title: Memory tips | text: Pass vision_config=None and audio_config=None to skip extra encoders.",
    "title: Audio | text: Waveforms are resampled to 16 kHz before feature extraction.",
]

q = model.encode(query, prompt_name="Retrieval-query")
d = model.encode(docs, prompt="")  # prefixes already in the strings
scores = model.similarity(q, d)
print(scores)
```

Google's docs note that cosine scores sit higher than people expect. Unrelated sentences can still land near 0.7. Rank relative scores inside one index. Do not treat 0.7 as a universal match threshold.

For code search, put the filename in the document prefix: `title: {filename} | text: {code}`. The MTEB Code gain is the reason this prompt exists.

![Developer workstation used for local embedding experiments](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)

## Shrink vectors and move to the device

After you encode, slice the leading dimensions if storage matters:

```python
full = model.encode(["offline photo search"], prompt_name="STS")
compact = full[:, :256]  # also valid: 128 or 512
```

Normalize again if your index expects unit vectors. Qdrant published a launch note on storing these vectors. Ollama, llama.cpp, MLX, vLLM, and LM Studio also list the model for local serving.

On mobile, MediaPipe's Universal Embedder accepts raw images or text and returns 768-d vectors, or truncated 128–512-d vectors. Semantic Retriever runs approximate nearest neighbour search on device and is described as returning matches in single-digit milliseconds. The Decision Task can zero-shot route an input against label descriptions without fine-tuning. Google's chess demo evaluates 500 options per turn in under 100ms on device.

LiteRT is the lower-level path. A single `.litertlm` file runs on CPU and GPU. Google measured vision embedding latency of 37.3ms per image (about 26.9 images per second) on a MacBook M5 Pro GPU, with a 70 vision-token budget. INT4 and INT8 quantization-aware training is what brings the multimodal model into the mid-range RAM numbers above.

Browser builds are available through transformers.js and a WebGPU space on Hugging Face. A zero-setup LiteRT web demo also exists if you want to test search without installing Python.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/anPsS6huQk0"
    title="Introducing EmbeddingGemma 2: An open model for natively multimodal embeddings"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips before you ship an index

Keep text and media prefixes consistent. Mixing `STS` vectors with `Retrieval-query` vectors in one index will rank poorly.

Truncate only after you measure recall on your own set. 256 dimensions is the usual storage compromise. Drop to 128 when the index is huge and the queries are short.

Do not send private media to a hosted embedder if the point of this model is offline search. Gallery and Foresight are the reference for that pattern.

Fine-tuning guidance is on Unsloth and in the Gemma docs if a domain (medical notes, internal code) needs a closer fit. Start with zero-shot prompts first. The Decision Task is explicitly designed to work without training data.

Watch ML Kit. When the Android service ships, you will not have to bundle the weights in the APK. Until that date, MediaPipe or LiteRT is the supported path.

## Conclusion

EmbeddingGemma 2 is a 740M open embedder with a shared space for text, code, images, video, and audio. Task prompts, Matryoshka truncation, and optional encoders are the three controls that decide quality, storage, and RAM.

Start with Sentence Transformers on a laptop, confirm ranking on a small private set, then move the same vectors to Gallery-style on-device search with MediaPipe or LiteRT.

## Sources

- Google DeepMind, “EmbeddingGemma 2: an open, lightweight multimodal embedding model,” 6 October 2026: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
- Google Developers Blog, “Bring multimodal semantic search to the edge with EmbeddingGemma 2,” 6 October 2026: https://developers.googleblog.com/google-ai-edge-with-embeddinggemma-2/
- Google AI for Developers, EmbeddingGemma docs and Sentence Transformers inference guide: https://ai.google.dev/gemma/docs/embeddinggemma
- Model weights: https://huggingface.co/google/embeddinggemma-2
- Google for Developers, “Introducing EmbeddingGemma 2,” YouTube, 6 October 2026
