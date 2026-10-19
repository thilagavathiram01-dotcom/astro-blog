---
title: "How to Set Gemini 4 Argon Thinking Levels for Better Results"
description: "Learn how to choose low, medium, or high thinking levels for Gemini 4 Argon in the app and API to balance speed, cost, and quality on daily tasks."
pubDate: 2026-10-19T12:00:00
heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Gemini 4 Argon gives you three thinking levels so you can control how hard the model reasons before it answers. Low keeps responses fast and cheap. Medium balances quality and speed for most work. High digs deeper on hard problems but uses more tokens and time.

Google made medium the default on the standard Argon model. You can change it in the Gemini app if you have Google AI Pro or Ultra, or set it in the API with the Interactions API. This guide shows the exact steps and when each level works best.

## What the three thinking levels do

Thinking tokens count toward your output limit and your bill. Higher levels generate more of them before the final answer appears.

- **Low**: Fewest tokens and lowest latency. Use it for classification, short summaries, simple extraction, or any task where speed matters more than depth. Quality can drop on complex prompts.
- **Medium**: The default. Google recommends it for most tasks, including coding, tool use, document questions, and agent work. It offers a practical mix of accuracy and cost.
- **High**: Most tokens and slowest first token. Best for multi-step reasoning, hard math or science, architecture design, or debugging across many files. Pair it with long decode when you need very long outputs.

Google advises testing all three levels on your real prompts and picking the lowest one that still meets your quality bar.

![Digital circuit board overlaid with a stylized brain representing AI reasoning](https://images.unsplash.com/photo-_jg8xh2SsXQ?auto=format&fit=crop&w=800&q=80)

## How to set thinking levels in the Gemini app

You need a Google AI Pro or Ultra subscription. Free and Plus plans do not include Argon.

1. Open the Gemini app on web, Android, or iOS and sign in with the subscribed account.
2. Start a new chat or open an existing one.
3. Tap or click the model name near the prompt box.
4. Select Gemini 4 Argon from the list.
5. Look for the thinking or effort control in the same menu or settings panel. Choose Low, Medium, or High.
6. Type your prompt and send it. On longer jobs, switch to Tasks mode so Argon can continue working in the background.

If the picker does not show Argon yet, wait a day and update the app. Google rolls features out in stages.

For everyday use, start on Medium. Switch to Low when you only need a quick label or one-sentence summary. Move to High when the first Medium answer feels incomplete or when you attach long documents, codebases, or videos.

## How to set thinking levels in the API

Developers call Argon with the model ID `gemini-4-argon` on the paid tier. Use the Interactions API and pass `thinking_level` inside `generation_config`. Omit temperature, top_p, and top_k; Argon ignores or rejects non-default sampling values.

Python example with the google-genai SDK:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-argon",
    input="Review this payment pipeline for race conditions and rewrite the locks.",
    generation_config={
        "thinking_level": "medium"  # low | medium | high
    }
)
print(interaction.output_text)
```

Set `max_output_tokens` high enough (at least 32,768) so thinking does not consume the entire budget before the answer starts. For the hardest jobs, raise it further and enable long decode if your client supports continuation.

On Google Cloud Vertex AI or Agent Studio the same three levels appear in the model settings dropdown. Medium remains the default for the standard model.

## Practical examples for each level

**Low for volume work**  
You have 200 support tickets. Prompt: “Label each ticket as billing, technical, or other. Return one line per ticket.” Low finishes faster and costs less while still producing usable labels.

**Medium for daily coding and writing**  
You paste a 40-line function that fails on edge cases. Medium usually spots the bug and offers a clean fix without the extra latency of High.

**High for deep analysis**  
You upload a 30-page contract and ask for conflicting clauses plus suggested revisions. High walks through the text more carefully and surfaces issues Medium might miss.

Test the same prompt at two levels on a small sample. If Low or Medium already meets your standard, stay there. Only escalate to High when the extra cost and wait time pay off.

![Abstract visualization of interconnected nodes and data flow for AI processing](https://images.unsplash.com/photo-3wXVwtdaESA?auto=format&fit=crop&w=800&q=80)

## Tips that save tokens and time

- Attach the full source material instead of a summary. Argon’s 1-million-token window handles long inputs well.
- Watch the progress updates on longer Tasks-mode jobs. They tell you when the model is still thinking versus when it is writing the final answer.
- If a response stops early, raise `max_output_tokens` or switch to High and try again. Thinking can exhaust a low limit.
- Cache common prefixes when possible. Implicit caching already discounts repeated input on the API.
- Combine levels inside one workflow: use Low to classify or route, then Medium or High only on the subset that needs deeper work.

For Android developers who want Argon inside an app, see the related guide on [adding Gemini 4 Argon with Firebase AI Logic](/blog/add-gemini-4-argon-android-firebase-ai-logic/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Jh6mgf9M06M"
    title="Gemini 4 Argon: What’s new and what’s next"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Thinking levels let you tune Gemini 4 Argon instead of treating every request the same. Start with the default Medium, measure results on your actual prompts, and move up or down only when the trade-off is clear. The same control appears in the consumer app and the developer API, so the habit transfers between both.

Try a short classification task on Low and a multi-step reasoning task on High today. You will quickly see which level matches each kind of work.

## Sources

- Google AI for Developers: What’s new in Gemini 4 Argon (Interactions API)
- Google AI Studio: Gemini 4 Argon Developer Guide
- Google blog: Gemini 4 Argon is now available in the Gemini app
- Google blog: Introducing Gemini 4 Argon
