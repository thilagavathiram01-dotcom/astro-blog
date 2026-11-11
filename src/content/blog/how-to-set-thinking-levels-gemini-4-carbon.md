---
title: "How to Set Thinking Levels on Gemini 4 Carbon"
description: "Control low, medium, and high thinking levels with Gemini 4 Carbon in AI Studio and the API to balance speed, cost, and quality."
pubDate: 2026-11-11T12:00:00
heroImage: "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "gemini", "tutorials", "how-to", "google", "developer"]
noindex: false
---

Gemini 4 Carbon is Google’s strongest reasoning model, released for general availability on November 10, 2026. It handles complex multi-step coding, scientific reasoning, and long-horizon agentic work better than previous models. One key control is the thinking level: low, medium, or high. This lets you trade latency and token use for deeper reasoning.

Carbon runs only on the paid tier of the Gemini API. You need a project with billing enabled. The introductory price through November 30, 2026 is $2 per million input tokens and $10 per million output tokens. After that it doubles. Thinking tokens count toward the total. Start with the default medium level for most tasks, then test higher or lower based on your quality needs.

This guide shows how to set thinking levels in Google AI Studio and via the Interactions API. It also covers when to pick each level. For a broader introduction to building with the model, see our [how to build with Gemini 4 Carbon](/blog/how-to-build-with-gemini-4-carbon/) post.

## Why thinking levels matter

Thinking levels control how much internal reasoning the model does before it replies. Carbon always thinks; you cannot turn it off. Low uses the fewest thinking tokens and returns the first answer fastest. Medium is the default and balances quality with cost and speed. High allows the deepest exploration, verification, and edge-case checks, but it increases latency and token spend.

Official Google guidance recommends medium for interactive coding and agentic tool use. Use high for multi-file root-cause debugging, security patching, formal math, and architecture design. Use low for classification, routing, summarization, and simple extraction. Run your own evaluations on your specific tasks, then keep the lowest level that meets your quality bar.

![Developer typing code on a laptop](https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=800&q=80)

## Set thinking levels in Google AI Studio

Google AI Studio is the fastest way to experiment. Open aistudio.google.com and sign in with a Google account that has billing enabled on the API project.

1. Start a new prompt or open an existing chat.
2. Select the model dropdown and choose gemini-4-carbon.
3. Look for the thinking level control in the model settings or generation options. It appears as Low, Medium, or High. Medium is selected by default.
4. Type your prompt and run it. Note the response time and the usage details if shown.
5. Switch the level and rerun the same prompt to compare outputs, latency, and estimated cost.

AI Studio is ideal for quick tests. For production code you will set the level in the API call.

## Set thinking levels with the Interactions API

The recommended way to call Gemini 4 Carbon is the Interactions API through the official Google GenAI SDK. Install the latest version with `pip install -U google-genai` or the equivalent for your language. Set your API key as the environment variable GEMINI_API_KEY.

Here is a Python example that sets the thinking level:

```python
from google import genai

client = genai.Client()

interaction = client.interactions.create(
    model="gemini-4-carbon",
    input="Explain the difference between a mutex and a semaphore in three sentences.",
    generation_config={
        "thinking_level": "medium"  # options: "low", "medium" (default), "high"
    },
)
print(interaction.output_text)
print("Thought tokens:", interaction.usage.total_thought_tokens)
```

Change the string to "low" or "high" and observe the difference in thought tokens and response time. The same pattern works in JavaScript and other SDKs. Pass lowercase values on the Interactions API. On the older GenerateContent endpoint the values are uppercase (LOW, MEDIUM, HIGH).

Carbon supports a unified 1 million token context window shared across input, thinking, and output. For very long outputs you can enable long decode and raise max_output_tokens. Higher thinking levels consume more of that budget, so plan accordingly.

![Laptop showing code next to glasses on a desk](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

## Practical tips for choosing a level

Start every new workload at medium. Measure quality, latency, and cost on a representative set of prompts. If medium is already good enough, stay there. If you need more reliability on hard reasoning or multi-file code changes, try high and compare the improvement against the extra tokens and time.

Low is useful when you process many short items, such as classifying support tickets or extracting structured fields from documents. On complex coding or math tasks, low often produces lower quality, so test carefully.

Carbon spends more thinking tokens than Gemini 4 Argon on the same prompt. That extra reasoning is why it ranks higher on long-horizon and cybersecurity-related benchmarks. Pair it with clear goals and a verification loop (tests, screenshots, or a scoring script) when you want it to iterate autonomously.

Monitor usage in the Google Cloud console or AI Studio billing view. Thinking tokens are billed the same as output tokens. Cached input tokens receive a large discount, which helps if your system prompt or reference material is long and reused.

## Watch a hands-on overview

This video from Prompt Engineering walks through real outputs from Gemini 4 Carbon on coding and creative tasks and discusses prompting practices that work well with the model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/lQ6wwLHqDAg"
    title="Gemini 4 Carbon Is Finally Here, And It's a Beast!"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Thinking levels give you precise control over how Gemini 4 Carbon reasons. Medium is the safe starting point for most developers. High unlocks stronger performance on the hardest engineering and research tasks. Low keeps latency and cost low for simpler work. Test each level on your own prompts, measure the results, and lock in the lowest setting that meets your bar.

For the latest model details, pricing, and API examples, check the official Gemini API documentation in Google AI Studio and the Gemini 4 Carbon model card from Google DeepMind.

## Sources

- Google AI Studio, Latest Gemini models: https://aistudio.google.com/docs/latest-model
- Google blog, Gemini 4 Carbon is now available: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
- Google DeepMind model card, Gemini 4 Carbon: https://deepmind.google/models/model-cards/gemini-4-carbon/
- Google AI for Developers, thinking documentation and Interactions API examples
