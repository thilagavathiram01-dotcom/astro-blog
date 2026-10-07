---
title: "How to Cache Gemini API Context and Cut Token Cost"
description: "Set up Gemini API explicit context caching for Gemini 3.8 Flash, set a TTL, reuse cached tokens, and check usage metadata."
pubDate: 2026-10-07T16:40:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "tutorials", "developer", "ai-tools"]
noindex: false
---

Repeated prompts that ship the same PDF, video, or system instruction burn input tokens on every call. The Gemini API can store that prefix once and bill later requests against the cache. Explicit caching is the option that lets you set the lifetime yourself.

This guide covers the Generate Content path documented by Google: create a cache, point `generateContent` at it, then list, extend, or delete it. If you are still choosing a model, start with the [Gemini 3.8 Flash API guide](/blog/gemini-3-8-flash-api-guide/).

## Implicit cache vs explicit cache

Google documents two mechanisms.

Implicit caching is on by default for Gemini 2.5 and newer models. You do not enable it. Google passes on a discount only when a request hits a cache. There is no savings guarantee. For Gemini 3.8 Flash the documented minimum input size for a cache hit is 4,096 tokens. Gemini 2.5 Flash and 2.5 Pro list 2,048 tokens.

To raise the chance of an implicit hit, put the large shared text at the start of the prompt and send similar prefixes close together in time. Cache-hit counts appear in `usage_metadata`.

Explicit caching is the manual path. You upload or pass the stable content once, create a cached-content object, and pass its name on later calls. Google says this path can guarantee the cached-token rate, with extra storage cost for the time the tokens stay alive.

![Developer reviewing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## When a cache pays for itself

Google lists four fits: chatbots with long system instructions, repeated questions about a long video, recurring queries over a large document set, and frequent code-repository analysis.

Billing has three parts. Cached input tokens are charged at a reduced rate when they are reused. Storage is charged from the token count and the time-to-live (TTL). Uncached input tokens and all output tokens are billed as usual. There is no minimum or maximum TTL. If you omit TTL, the default is one hour.

A one-off summary of a short note will not beat a normal call. A support bot that reuses the same policy PDF all day is the case the feature is built for. Check current rates on the [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) before you commit a long TTL. Storage keeps running until the cache expires or you delete it.

## Step 1: Install the client and set a key

Use the current Google Gen AI SDK, not the older `google.generativeai` package.

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key"
```

`genai.Client()` reads `GEMINI_API_KEY` or `GOOGLE_API_KEY` from the environment. Do not hard-code the key in source.

The official examples use `gemini-3.8-flash` for both the cache and the later generate call. The cache is bound to that model. You cannot point a cache created for one model at a different model.

## Step 2: Create a cache from a file

Minimum size matches the model table. A cache under 4,096 tokens on Gemini 3.8 Flash will be rejected. Count tokens first if the file is borderline.

This pattern follows Google's PDF example: upload with the Files API, create the cache, then generate against `cache.name`.

```python
from google import genai
from google.genai import types
import io
import httpx

client = genai.Client()

pdf_url = "https://sma.nasa.gov/SignificantIncidents/assets/a11_missionreport.pdf"
doc_io = io.BytesIO(httpx.get(pdf_url).content)
document = client.files.upload(
    file=doc_io,
    config=dict(mime_type="application/pdf"),
)

model_name = "gemini-3.8-flash"
cache = client.caches.create(
    model=model_name,
    config=types.CreateCachedContentConfig(
        display_name="a11-mission-report",
        system_instruction="You are an expert analyzing transcripts.",
        contents=[document],
        ttl="3600s",
    ),
)

response = client.models.generate_content(
    model=model_name,
    contents="Summarize the main mission events in five bullets.",
    config=types.GenerateContentConfig(cached_content=cache.name),
)

print(cache.name)
print(response.usage_metadata)
print(response.text)
```

`display_name` is a label for you. The value you must store is `cache.name`, which looks like `cachedContents/…`. Pass that string as `cached_content` on every follow-up call.

For video, Google's sample uploads the file, waits until `video_file.state.name` is no longer `PROCESSING`, then puts the file in `contents` with a short TTL such as `300s`.

![Printed documents and notes on a desk](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80)

## Step 3: Read usage metadata

After `generate_content`, print `response.usage_metadata`. Google returns the cached token count from cache create, get, and list, and again on GenerateContent when the cache is used.

The model does not treat cached tokens as a separate prompt. Cached content is a prefix. The user question you send in `contents` is the new part.

There are no extra rate limits for caching. Standard GenerateContent limits apply, and token limits include the cached tokens.

## Step 4: List, extend, and delete

You cannot download the cached text or video. List and get return metadata only: `name`, `model`, `display_name`, `usage_metadata`, `create_time`, `update_time`, and `expire_time`.

```python
for item in client.caches.list():
    print(item.name, item.display_name, item.expire_time)

client.caches.update(
    name=cache.name,
    config=types.UpdateCachedContentConfig(ttl="7200s"),
)

client.caches.delete(cache.name)
```

Updates can change only `ttl` or `expire_time`. An expire time must be timezone-aware. `datetime.now(datetime.timezone.utc)` works. `datetime.utcnow()` does not, because it has no timezone.

Delete a cache when a job finishes. Waiting for TTL still incurs storage for the remaining time.

The same operations exist in the JavaScript SDK (`ai.caches.create`, `ai.caches.update`, `ai.caches.delete`) and over REST at `https://generativelanguage.googleapis.com/v1beta/cachedContents`.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Y10WeRIDKiw"
    title="How to use the Gemini APIs: Advanced techniques"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep the bill predictable

Set a short TTL while you test. Five minutes (`300s`) is what Google uses in the video sample. Move to hours only after `usage_metadata` shows the cache is reused.

Keep the stable prefix identical. If you edit the system instruction or swap the file, create a new cache. You cannot patch the contents in place.

Do not mix free-tier assumptions with explicit caching. Pricing tables mark context caching as a paid-tier feature. Confirm the project has billing before you rely on `caches.create`.

If you call Gemini through an OpenAI-compatible client, Google documents explicit caching through the `cached_content` field on `extra_body`.

Implicit caching can still help requests you do not manage by hand. Keep shared instructions at the front of the prompt so a prefix match is possible. Do not treat that discount as guaranteed.

## What to do next

Create one cache for a document your app already sends on every request. Run the same question twice and compare `usage_metadata`. If cached tokens stay at zero, the file is under the model minimum or the cache name was not passed.

Store `cache.name` with an expiry slightly earlier than Google's `expire_time`, and recreate the cache in a background job. That avoids a user-facing error when the TTL lapses mid-session.

## Sources

- Google AI for Developers, Context caching (Generate Content API), updated 11 September 2026: https://ai.google.dev/gemini-api/docs/generate-content/caching
- Google AI for Developers, Context caching (Interactions API), updated 2 September 2026: https://ai.google.dev/gemini-api/docs/caching
- Gemini API pricing: https://ai.google.dev/gemini-api/docs/pricing
- Google Cloud Tech, How to use the Gemini APIs: Advanced techniques: https://www.youtube.com/watch?v=Y10WeRIDKiw
