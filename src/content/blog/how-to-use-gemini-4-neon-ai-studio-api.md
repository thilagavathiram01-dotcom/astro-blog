---
title: "How to Use Gemini 4 Neon in AI Studio and the API"
description: "Step-by-step guide to accessing Gemini 4 Neon in Google AI Studio and via the paid Gemini API, including thinking levels, pricing, and code examples."
pubDate: 2026-11-27T16:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to"]
noindex: false
---

Google released Gemini 4 Neon on 18 November 2026. It sits between Gemini 4 Hydrogen (fast everyday tasks) and Gemini 4 Carbon (deepest long-horizon reasoning). Neon targets complex software engineering, knowledge work, and science workflows that need frontier-level quality with faster end-to-end completion and lower cost than the largest models.<grok type="render_inline_citation" citation_id="181" />

Neon is available only on the paid tier of the Gemini API and for Google AI Pro or Ultra subscribers in certain surfaces. There is no free API tier. This guide shows the exact steps to start using it in Google AI Studio and through the API.

![Neon-lit developer workspace with multiple code screens](https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=800&q=80)

## What Gemini 4 Neon Offers

Neon ranks highly on independent benchmarks. At its xhigh thinking level it scores 61 on the Artificial Analysis Intelligence Index (third overall among comparable models) and places second on the Vals Index. It also records Google’s lowest fabrication rate yet in internal Antigravity testing.<grok type="render_inline_citation" citation_id="181" />

Key technical details from the official model page and announcement:

- Model ID: `gemini-4-neon`
- Unified context window: 1,048,576 tokens (input + thinking + output)
- Default synchronous max output: 65,536 tokens
- Long decode: up to the full 1M window via background execution or continuation
- Thinking levels: low, medium, high (default), xhigh
- Pricing (paid tier, per 1M tokens): $3.00 input, $15.00 output (including thinking tokens), $0.15 cached input (implicit caching only)<grok type="render_inline_citation" citation_id="184" />

It supports text, images, audio, video, and PDFs. Capabilities include function calling, code execution, Google Search grounding, computer use, and structured outputs.

## Access Requirements

You need a paid Gemini API billing account (or Google AI Pro/Ultra) to use Neon. Hydrogen and Flash-Lite remain available on the free tier; Neon and Carbon do not.<grok type="render_inline_citation" citation_id="185" />

Surfaces where Neon is available:

- Gemini API (paid) in Google AI Studio and Android Studio
- Google Antigravity (paid Google AI Pro or Ultra)
- Gemini app (Pro or Ultra subscribers)
- Gemini for business (API or model dropdown)

## Step 1: Try It in Google AI Studio

1. Open [Google AI Studio](https://aistudio.google.com/) and sign in with a Google account that has billing enabled or an active Pro/Ultra plan.
2. Start a new chat and select **Gemini 4 Neon** from the model picker (direct link: [aistudio.google.com/prompts/new_chat?model=gemini-4-neon](https://aistudio.google.com/prompts/new_chat?model=gemini-4-neon)).
3. Confirm the thinking level. High is the default and works well for most coding and analysis tasks. Switch to xhigh only for the hardest multi-step problems (higher latency and token use).
4. Paste a prompt. Example: “Build an interactive single-file HTML token-bucket rate-limiter simulator with live sliders for burst size and request traffic.”
5. Run the prompt. Use **Get code** to export a working Python, JavaScript, or REST snippet once the result looks correct.

AI Studio is the fastest way to evaluate quality, test thinking levels, and refine prompts before writing production code.

![Close-up of code on screens under neon lighting](https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=800&q=80)

## Step 2: Call Neon via the Gemini API

Install the current Google GenAI SDK (not the older generativeai package):

```bash
pip install -U "google-genai"
```

Set your API key (create one in AI Studio under Get API key):

```bash
export GEMINI_API_KEY="your-key-here"
```

Minimal Python example using the Interactions API (defaults to high thinking):

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Audit this payment retry queue for race conditions and rewrite the lock acquisition logic."
)

print(interaction.output_text)
```

To force xhigh thinking:

```python
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Audit this payment retry queue for race conditions and rewrite the lock acquisition logic.",
    generation_config={"thinking_level": "xhigh"}
)
```

JavaScript and REST equivalents appear in the official what’s-new page. Always set a high enough `max_output_tokens` (at least 65,536) so thinking tokens do not truncate the final answer.<grok type="render_inline_citation" citation_id="182" />

For outputs longer than 64K tokens, set `background=True` (or the equivalent) and poll the interaction ID until it completes.

## Step 3: Choose the Right Thinking Level

| Level   | Token use          | Best for                                      |
|---------|--------------------|-----------------------------------------------|
| low     | Lowest             | High-throughput chat, latency-sensitive tasks |
| medium  | Lower              | Interactive coding, live UI prototyping       |
| high    | Balanced (default) | Most complex coding, agents, multimodal work  |
| xhigh   | Highest            | Hard multi-step engineering or science problems |

Start every evaluation at high. Move to xhigh only when high falls short and you can accept extra latency and cost. Run the same prompt across levels with a large output limit before deciding.<grok type="render_inline_citation" citation_id="182" />

## Tips for Production Use

- Enable billing and monitor usage in AI Studio. Neon is billed per token, including thinking tokens.
- Prefer implicit context caching ($0.15 / 1M) for repeated long contexts; explicit caching is not supported.
- For Android development, add your paid API key in Android Studio (Settings → Tools → AI → Model Providers → Google AI Studio) so the agent can use Neon on larger contexts.
- Pair Neon with Hydrogen in multi-model workflows (for example in Antigravity) when you want an orchestrator that delegates fast sub-tasks.
- Watch for entitlement sync issues in Antigravity; some Pro subscribers report temporary “Unavailable” states that resolve after sign-out/sign-in or contacting Google One support.

See also our earlier guide on adding Gemini models to Android apps with Firebase AI Logic: [/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/zW-bDDKycmU"
    title="Building ReelRoom: A 1M-Token Android Video Editor with Gemini 4 Neon"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Neon gives developers a practical middle path: frontier-level reasoning and coding quality at a lower price and often faster end-to-end speed than the largest models. Access it today through the paid Gemini API in AI Studio or Android Studio, or via a Google AI Pro/Ultra subscription in the Gemini app and Antigravity. Test prompts in AI Studio first, lock in the thinking level that meets your quality bar, then move the working code into your application.

## Sources

- [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) — Google Blog, 18 Nov 2026
- [What’s new in Gemini 4 Neon](https://aistudio.google.com/docs/whats-new-gemini-4-neon) — Google AI Studio docs
- [Choosing a model](https://aistudio.google.com/docs/choosing-a-model) — Google AI Studio docs
- [Gemini 4 Neon model page](https://aistudio.google.com/docs/models/gemini-4-neon)
- Android Developers YouTube: Building ReelRoom with Gemini 4 Neon
