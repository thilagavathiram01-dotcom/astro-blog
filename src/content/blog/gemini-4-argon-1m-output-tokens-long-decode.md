---
title: "Generate Long Outputs with Gemini 4 Argon 1M Tokens"
description: "Step-by-step guide to using Gemini 4 Argon's unified 1M token window and long decode feature for generating complete codebases via the Gemini API."
pubDate: 2026-10-22T10:35:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "developer"]
noindex: false
---

Gemini 4 Argon introduces a unified 1 million token window shared across input, thinking, and output. This lets developers generate far longer responses than previous Gemini models, which capped output at 64K tokens.

The model reaches this limit through long decode. The SDK handles continuation across multiple hops automatically when you set a high max_output_tokens value. This is useful for producing full multi-file codebases, detailed technical proofs, or large documentation in one request.

You need a paid Gemini API key and the latest Google GenAI SDK. Introductory pricing is $2 per million input tokens and $10 per million output tokens through November 30, 2026.

## What Changed with the 1M Token Limit

Earlier Gemini models treated input and output as separate budgets. Argon combines them into one 1,048,576-token pool. Input tokens, thinking tokens, function calls, and the final response all count against this total.

A single synchronous request still stops at 65,536 tokens for streaming calls (or 32,768 for non-streaming). Long decode extends past that cap. The latest SDKs (google-genai >= 2.30.1 for Python) continue the generation for you and return one combined response.

Official docs confirm the model ID is gemini-4-argon. Thinking levels remain low, medium (default), and high. Higher thinking levels consume more of the budget before the visible answer appears.

![Developer working with multiple code screens](https://images.unsplash.com/photo-1637778352878-f0b46d574a04?auto=format&fit=crop&w=800&q=80)

## Set Up the SDK and API Key

Create an API key in Google AI Studio and enable billing on the associated Google Cloud project. Store the key as an environment variable.

Install or upgrade the SDK:

```bash
pip install -U "google-genai>=2.30.1"
```

For JavaScript use:

```bash
npm install "@google/genai@>=2.29.1"
```

Set the key:

```bash
export GEMINI_API_KEY="your-key-here"
```

The client reads the environment variable by default. No explicit key is needed in code if the variable is set.

## Generate a Long Response

Use generate_content and raise max_output_tokens above 65,536. The SDK runs continuation hops until the model finishes or hits the limit you set.

Here is a Python example that requests a detailed technical explanation:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-argon",
    contents="Write a complete, rigorous proof of the prime number theorem with all supporting lemmas.",
    config=types.GenerateContentConfig(
        max_output_tokens=262144,
        thinking_config=types.ThinkingConfig(thinking_level="high"),
        automatic_continuation=True,
    ),
)
print(response.text)
```

For even longer outputs, raise the limit further, up to roughly 1M minus your input length. Monitor usage because thinking tokens are billed as output.

The Interactions API offers another path. Set background=True and a high max_output_tokens to run the generation asynchronously, then poll for the result.

![Close-up of code on a computer screen](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## Practical Tips for Long Generations

Start with medium thinking for most coding tasks. Switch to high only when the problem involves multi-file debugging, formal math, or deep architecture design. Low thinking reduces cost and latency on simpler work.

Raise max_output_tokens to at least 32,768 if you previously used lower limits. Argon spends more tokens on thinking than earlier models, so short budgets can truncate the answer mid-thought.

Test with a smaller limit first. A full 1M-token response costs $10 at introductory output rates (before December 1). Verify the result structure before scaling up.

If the response ends with finish_reason MAX_TOKENS, the SDK provides a continuation token. You can resume manually if you need finer control than automatic_continuation.

For code generation, prompt the model to produce complete, self-contained files with clear file headers. This makes large outputs easier to split and review later.

See our guide on [adding Gemini 4 Argon to Android apps](/blog/add-gemini-4-argon-android-firebase-ai-logic/) for mobile-specific setup.

## Watch the Official Overview

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

The Google for Developers video covers the model launch, the 1M output limit, and real internal use cases.

## Conclusion

Gemini 4 Argon’s long decode feature removes the previous 64K output ceiling for complex generation tasks. Upgrade the SDK, set a high max_output_tokens value, and the client handles the rest.

Start with a focused prompt and a moderate limit, then expand once you confirm the output quality. Check the official long decode documentation for the latest continuation details and pricing updates after November 30, 2026.

## Sources

- Google AI for Developers: What's new in Gemini 4 Argon
- Google AI for Developers: Long decode documentation
- Google blog: Introducing Gemini 4 Argon
- Google Cloud documentation on Gemini 4 Argon
