---
title: "How to Use GPT-6.1 Terra Computer Use in the OpenAI API"
description: "Step-by-step guide to call gpt-6.1-terra with the computer_use tool on the Responses API for screen automation and visual tasks."
pubDate: 2026-10-28T11:30:00
heroImage: "https://images.unsplash.com/photo-1759662011366-8a743eae9649?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "how-to"]
noindex: false
---

OpenAI released GPT-6.1 Terra on 26 October 2026 as a fast model for visual reasoning and computer use. It costs $1 per million input tokens and $5 per million output tokens, half the price of its predecessor and of GPT-6.1 Sol.<grok type="render_inline_citation" citation_id="170" />

The model accepts text and images. Tool calling, including the computer_use tool, requires the Responses API. This guide shows the practical steps to call it for tasks such as reading an invoice image and preparing data for entry into software.

![Hands typing on a keyboard in front of code screens](https://images.unsplash.com/photo-1759662011366-8a743eae9649?auto=format&fit=crop&w=800&q=80)

## What the model supports

GPT-6.1 Terra has a 1,050,000-token context window and up to 128,000 output tokens. Reasoning effort can be set to none, low, medium (default), high, xhigh, or max. Input modalities are text and image; output is text only.<grok type="render_inline_citation" citation_id="171" />

Supported tools on the Responses API include computer_use, web_search, file_search, code_interpreter, and others. Computer use lets the model observe a screen and return actions such as clicks or typing. An external driver then executes those actions. You remain responsible for permissions and result checks.

OpenAI positions Terra for high-volume work: matching product photos, interpreting technical drawings, acting on application screens, or drafting text. Benchmarks show stronger computer-use scores than GPT-5.6 Terra at lower cost, with task completion over three times faster than GPT-6 Astra and GPT-6.1 Sol on some tests.<grok type="render_inline_citation" citation_id="170" />

## Prerequisites

1. An OpenAI API key with access to gpt-6.1-terra.
2. The OpenAI Python or Node SDK, or direct HTTP calls to the Responses endpoint.
3. For computer_use: a controlled environment (browser, desktop, or emulator) and a driver that can take screenshots and execute mouse/keyboard actions. OpenAI provides examples in its documentation.

Start with a small, bounded task. Do not grant unrestricted system access.

## Step-by-step: basic text and image call

First confirm the model works with a simple image input. Upload or pass a screenshot of a form or invoice.

In Python with the official SDK:

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-6.1-terra",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "Extract the invoice number, date, and total from this image."},
                {"type": "input_image", "image_url": "https://example.com/invoice.png"}
            ]
        }
    ],
    reasoning={"effort": "medium"}
)
print(response.output_text)
```

The response returns structured text. Cache identical prefixes when possible; cached input is $0.05 per million tokens.<grok type="render_inline_citation" citation_id="171" />

![Stack of paper invoices and documents](https://images.unsplash.com/photo-1771758249853-415175dc29b9?auto=format&fit=crop&w=800&q=80)

## Adding the computer_use tool

For interactive screen work, include the computer_use tool in the Responses call. The model returns a sequence of actions. Your code captures a fresh screenshot after each action and continues the conversation until the task ends.

A minimal loop looks like this (adapt to your driver):

1. Send the initial instruction plus a starting screenshot.
2. Receive the model’s proposed action (click coordinates, type text, scroll, etc.).
3. Execute the action in your controlled environment.
4. Capture a new screenshot and send it back as the next input.
5. Repeat until the model signals completion or you hit a safety limit.

Set reasoning effort higher for multi-step forms. Medium is the default and often sufficient for routine entry. Monitor token use; long sessions benefit from prompt caching.

OpenAI notes that Terra finishes many computer-use tasks more than three times faster than higher-tier models while staying near their accuracy on visual benchmarks such as MMMU-Pro.<grok type="render_inline_citation" citation_id="170" />

## Practical tips

- Bound the task. Tell the model exactly which fields to fill and when to stop.
- Use structured outputs or function calling when you need reliable JSON for downstream systems.
- Test on a copy of your application first. Computer use can click destructive buttons if the prompt is unclear.
- Compare cost. At $1/$5 per million tokens, high-volume invoice or form processing becomes practical. Prompts over 272k input tokens cost more; keep context lean.
- Pair with web_search or file_search if the task needs external data.
- Check the system card for safety details. Terra reaches the Critical threshold in cybersecurity under OpenAI’s Preparedness Framework and uses the same safeguards stack as higher models.<grok type="render_inline_citation" citation_id="170" />

![Laptop screen showing code and performance graphs](https://images.unsplash.com/photo-1763568258586-da55ea292766?auto=format&fit=crop&w=800&q=80)

## When to choose Terra versus other models

Use Terra for volume computer-use and visual work where speed and cost matter. Switch to GPT-6.1 Sol or GPT-6 Astra for the hardest coding or research tasks. In ChatGPT Work and Codex the same usage allowance covers more Terra tasks than higher-tier models.<grok type="render_inline_citation" citation_id="170" />

For Android developers integrating agents, similar patterns appear in Android Studio’s Bring Your Own Agent feature and Android CLI skills. See our earlier guide on [using BYOA agents in Android Studio Rabbit 2](/blog/android-studio-byoa-agents-rabbit-2/).

## Conclusion

GPT-6.1 Terra makes precise computer use and visual reasoning available at lower cost. Call it on the Responses API with model ID gpt-6.1-terra, pass images, and drive the computer_use tool from a controlled environment. Start with one bounded workflow, measure tokens and accuracy, then expand.

Official sources:
- [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
- [GPT-6.1 Terra model docs](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
- [GPT-6.1 Terra system card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lxskPEMkquc"
    title="GPT-6.1 Terra Just Made Computer Use 9× Cheaper"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
