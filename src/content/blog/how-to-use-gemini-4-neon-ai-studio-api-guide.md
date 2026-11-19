---
title: "How to Use Gemini 4 Neon in AI Studio and API"
description: "Step-by-step guide to accessing Gemini 4 Neon in Google AI Studio and via the Gemini API, with thinking levels, pricing, and code examples."
pubDate: 2026-11-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials"]
noindex: false
---

Google released Gemini 4 Neon on November 18, 2026. It sits between Gemini 4 Hydrogen and Gemini 4 Carbon. Neon delivers frontier-level reasoning for coding, knowledge work, and science at lower cost per task than larger models.

This guide shows how to access Neon in Google AI Studio and the Gemini API. You need a paid API tier or Google AI Pro/Ultra subscription for full access.

## What is Gemini 4 Neon?

Neon is Google’s mid-tier Gemini 4 model. It uses the model ID `gemini-4-neon`. The context window is 1 million tokens shared across input, thinking, and output. Maximum output is 65,536 tokens by default, up to nearly 1 million with long decode.

Pricing on the paid tier is $3 per million input tokens, $0.15 per million cached input tokens, and $15 per million output tokens. Cached inputs get a 95% discount. There is no free API tier for Neon.

Google reports Neon scores 61 on the Artificial Analysis Intelligence Index at its xhigh thinking level, ranking #3 overall. It ranks #2 on the Vals Index at 70.9%. At the default high thinking level, it delivers a high Intelligence Index score with 32% lower cost per task than Carbon.

It supports four thinking levels: low, medium, high (default), and xhigh. Higher levels increase reasoning depth and token use.

Neon accepts text, images, audio, video, and PDFs. Output is text only. It supports Google Search grounding, code execution, function calling, and structured outputs.

![Neon lights abstract](https://images.unsplash.com/photo-1758058912273-b28757831022?auto=format&fit=crop&w=800&q=80)

## Access Gemini 4 Neon in Google AI Studio

1. Go to [aistudio.google.com](https://aistudio.google.com).
2. Sign in with a Google account that has paid API access or Google AI Pro/Ultra.
3. Start a new chat. Select Gemini 4 Neon from the model picker. The direct link is `https://aistudio.google.com/prompts/new_chat?model=gemini-4-neon`.
4. In Run settings, set the Thinking level. Choose high for most coding and analysis tasks. Use xhigh for the hardest scientific or multi-step engineering work.
5. Enable tools such as Google Search or code execution if needed.
6. Enter your prompt and run it.

Pro and Ultra subscribers can also select Neon in the Gemini app model drop-down and in Google Antigravity.

## Call Gemini 4 Neon via the Gemini API

Install the Google GenAI SDK. For Python:

```bash
pip install google-genai
```

Set your API key as the environment variable `GEMINI_API_KEY`.

Basic example using the Interactions API:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Explain the difference between Gemini 4 Neon and Gemini 4 Hydrogen in three short points.",
    generation_config={
        "thinking_level": "high"
    }
)

print(interaction.output_text)
```

To use xhigh thinking for deeper reasoning:

```python
interaction = client.interactions.create(
    model="gemini-4-neon",
    input="Solve this multi-step coding problem and explain each decision: [your problem]",
    generation_config={
        "thinking_level": "xhigh",
        "max_output_tokens": 8192
    }
)
```

The shared 1M context means input + thinking + output cannot exceed 1,048,576 tokens. Lower the thinking level or reduce input size if you hit limits.

For Android or Firebase AI Logic integration, see our earlier guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Thinking levels in practice

- **low**: Fastest, lowest token use. Good for simple classification or light editing.
- **medium**: Balanced for routine coding and writing.
- **high** (default): Recommended for complex code, agents, and analysis. Strong quality with reasonable cost.
- **xhigh**: Deepest multi-step reasoning. Best for hard science, long-horizon engineering, and maximum accuracy. Higher latency and cost.

Start at high. Test xhigh only when high falls short on quality. Measure cost and latency on your own prompts.

## Tips for better results

Use clear, structured prompts. Break large tasks into steps. Provide examples when you need a specific output format. Enable code execution for debugging or math. Ground with Google Search when facts must be current. Monitor token usage because thinking tokens count toward the output price.

Neon works well as a standalone model or as an Orchestrator directing Hydrogen subagents in Antigravity for long agent workflows.

## Watch a demo

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

![Developer coding on laptop](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## Conclusion

Gemini 4 Neon is available today in AI Studio and the paid Gemini API. It offers a practical balance of reasoning depth, speed, and cost for coding and analytical work. Set the model ID to `gemini-4-neon`, pick an appropriate thinking level, and start building.

Check official pricing and model details in Google AI Studio documentation, as rates and availability can change.

**Sources:**
- Google blog: Introducing Gemini 4 Neon (November 18, 2026)
- Google AI Studio model documentation

Posted in: gemini ai-tools tutorials
