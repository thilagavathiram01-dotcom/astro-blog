---
title: "Gemini 4 Neon Thinking Levels: Cost and Quality Guide"
description: "How to set low, medium, high, and xhigh thinking levels on Gemini 4 Neon in AI Studio and the API to balance speed, cost, and reasoning depth."
pubDate: 2026-11-19T22:00:00
heroImage: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["gemini", "ai-tools", "tutorials", "how-to"]
noindex: false
---

Google launched Gemini 4 Neon on 18 November 2026 as the model that sits between everyday Hydrogen speed and full Carbon depth. Neon defaults to the high thinking level and adds an xhigh option. These four levels give you direct control over how much internal reasoning the model performs before it answers.

Choosing the right level keeps token costs predictable while preserving quality on hard coding and analysis tasks. This guide shows the practical steps in Google AI Studio and the Gemini API, plus clear rules for when to move up or down.

## What the four Neon thinking levels actually change

Neon supports low, medium, high (default), and xhigh. Higher levels allocate more thinking tokens inside the shared 1 million-token context window. Those tokens are billed at the output rate of $15 per million.

At the default high level, Neon records a high Artificial Analysis Intelligence Index score while delivering roughly 32 percent lower cost per task than Carbon on third-party benchmarks. The xhigh level reaches the model’s peak score of 61 on that index and still costs 36 percent or more less per task than competing models at their maximum setting. Medium suits interactive coding. Low minimises latency for high-volume or simple work.

Official guidance is to start at high. Drop to medium when response time matters and your quality checks still pass. Reserve xhigh for multi-step engineering, scientific, or analytical problems where high falls short. Passing "minimal" or a thinking_budget parameter returns an error on Neon.

![Developer working across multiple monitors with code open](https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=800&q=80)

## Set thinking levels in Google AI Studio

AI Studio is the quickest place to compare levels on the same prompt.

1. Open [Google AI Studio](https://aistudio.google.com/prompts/new_chat?model=gemini-4-neon) and sign in with a Google AI Pro or Ultra account.
2. Confirm the model picker shows gemini-4-neon.
3. Open Run settings and select Thinking level: Low, Medium, High, or Extra high.
4. Submit the identical prompt at two different levels and compare the usage panel for time-to-first-token and total tokens.
5. Enable Search grounding or code execution only if the task needs them; these tools add cost independently of the thinking level.

Free-tier rate limits apply in AI Studio. Once you switch to a billed API project the $3 input / $15 output pricing takes effect. Changing the thinking level does not reset your quota.

## Call thinking levels from the Gemini API

The parameter is thinking_level. Use the Interactions API or generateContent. The Python SDK nests it under thinking_config.

Here is a minimal example that sets medium for an interactive coding task:

```python
from google import genai
from google.genai import types

client = genai.Client()

response = client.models.generate_content(
    model="gemini-4-neon",
    contents="Refactor this retry queue to remove the race condition and add a unit test.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="MEDIUM")
    ),
)
print(response.text)
```

For the hardest problems switch the string to "XHIGH". Cached input tokens are billed at $0.15 per million, a 95 percent discount. Batch and Flex requests cost half the standard rates. The model ID is gemini-4-neon and the context window is 1 million tokens shared across input, thinking, and output.

If you already call Hydrogen or Argon, only the model ID and the new xhigh option change. Remove any temperature, top_p, or top_k values; Neon ignores them.

## When to use each level

- **Low**: High-volume extraction, simple classification, or latency-sensitive chat. Quality drops on multi-hop logic.
- **Medium**: Interactive coding sessions, live prototyping, and most tool-calling loops. Google recommends this for responsive work.
- **High (default)**: Complex coding, agent execution, multimodal analysis, and knowledge work. This is the balanced starting point that delivers the 32 percent cost advantage versus Carbon.
- **Xhigh**: Hard multi-step engineering, scientific reasoning, or cases where high produces incomplete or incorrect results. Expect longer time-to-first-token.

Run a short evaluation suite at high and medium before you lock a production default. Raise to xhigh only after high fails your quality bar. For broader Neon setup and access details, see our guide to [using Gemini 4 Neon in AI Studio and the API](/blog/how-to-use-gemini-4-neon-ai-studio-api-guide/).

![Close-up of a laptop keyboard with RGB lighting in a dark workspace](https://images.unsplash.com/photo-1771014817844-327a14245bd1?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Q0ShBenKyqo"
    title="Gemini 4 Neon Is Here, And It’s a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical cost-control tips

Start every new workflow at high. Measure tokens and quality, then drop one level if the results stay acceptable. This habit prevents over-spending on thinking tokens.

For long agent runs in Antigravity, pair Neon at high for planning with Hydrogen at medium or low for routine file edits. The Orchestrator pattern reduces total cost while keeping judgment on the harder steps.

Watch the usage panel in AI Studio or the token counts returned by the API. Output and thinking tokens dominate the bill. Set project-level spending alerts in Google Cloud if you run high-volume Neon workloads.

Review outputs before you commit code or act on analysis. Neon shows a low fabrication rate in Google’s internal tests, yet verification remains necessary for production work.

## Access and pricing summary

Neon is available today on the paid Gemini API tier in AI Studio and Android Studio. Google AI Pro and Ultra subscribers can also select it in the Gemini app and Google Antigravity. Free users do not receive the model.

Pricing is $3 per million input tokens and $15 per million output tokens. The default high thinking level already undercuts Carbon on cost per task while matching or exceeding it on many enterprise and coding benchmarks. Xhigh adds depth at a still-competitive total cost.

## Conclusion

Gemini 4 Neon’s four thinking levels turn a single model into a tunable tool for both interactive coding and deep analysis. Default to high, measure, then adjust. The combination of frontier-level reasoning, a 1 million-token window, and lower cost per task than larger alternatives makes Neon practical for production workflows once you control the thinking dial.

Start in AI Studio with a real task from your backlog and compare high against medium. The difference in tokens and quality will show you exactly where to set the level for the rest of your work.

## Sources

- Google DeepMind: [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)
- Google AI for Developers: Gemini API thinking documentation
- Prompt Engineering: Gemini 4 Neon demo video
