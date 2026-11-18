---
title: "How to Use GPT-6.2 Astra and Sol in ChatGPT and API"
description: "Step-by-step guide to accessing and using OpenAI's GPT-6.2 Astra and Sol models in ChatGPT Work, Codex, and the API with pricing and tips."
pubDate: 2026-11-18T14:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "how-to", "developer", "ai"]
noindex: false
---

OpenAI released GPT-6.2 Astra and GPT-6.2 Sol on November 17, 2026. Astra targets complex professional and scientific work. Sol handles everyday coding, writing, and agent tasks at lower cost. Both are available now in ChatGPT Work, Codex, and the OpenAI API for eligible users.

This guide shows how to access them, choose the right model, and start using them effectively.

## What GPT-6.2 Astra and Sol Offer

Astra is OpenAI's frontier model for hard, multi-step projects. It improves on GPT-6 Astra with better results on professional benchmarks at roughly one-third the cost per task. Sol is the efficient everyday model. Many OpenAI employees use Sol as their default for technical and non-technical work.

Both models support a large context window. API pricing is $8 input / $40 output per million tokens for Astra (20% lower than previous Astra) and $2 input / $10 output for Sol. Cached input is much cheaper on both.

![Laptop screen showing code with coffee nearby](https://images.unsplash.com/photo-1763568258557-515962e11f38?auto=format&fit=crop&w=800&q=80)

## How to Access GPT-6.2 in ChatGPT Work and Codex

You need a Plus, Pro, Enterprise, or Edu plan. Enterprise and Edu workspaces require an admin to enable the models first.

1. Open ChatGPT and switch to Work mode (or open the Codex app/CLI).
2. In the model picker, select GPT-6.2 Astra or GPT-6.2 Sol.
3. For new Work chats on supported plans, the default is often Sol at Light or Medium reasoning effort. Use Advanced settings to switch models or raise reasoning.
4. In Codex, use the model picker or `/model` command.

Pro 500 subscribers get Ultrafast on both models. Pro 200 subscribers get Ultrafast on Sol at launch. Usage is shared between ChatGPT Work and Codex.

For Android or Firebase integrations with other models, see our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Using GPT-6.2 via the OpenAI API

Developers can call `gpt-6.2-astra` and `gpt-6.2-sol` immediately. Ultrafast is available for both at launch.

Install the official Python SDK if needed:

```bash
pip install openai
```

Basic request example:

```python
from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-6.2-sol",
    input="Summarize the key differences between Astra and Sol for a coding team."
)

print(response.output_text)
```

Switch to `gpt-6.2-astra` for deeper research or long-horizon agent work. Keep prompt prefixes stable to maximize cache hits and lower costs.

![Smartphone showing AI chat apps including Gemini](https://images.unsplash.com/photo-1738640679960-58d445857945?auto=format&fit=crop&w=800&q=80)

## Choosing Between Astra and Sol

Use Sol for most daily coding reviews, drafting, and routine agent loops. It matches Astra closely on many coding benchmarks at about one-fifth the cost.

Switch to Astra when you need stronger performance on scientific research, complex professional deliverables, 3D design, or multi-step agent workflows where accuracy and completeness matter more than speed.

Both ship with tighter safeguards for higher-risk cybersecurity assistance. OpenAI rates them carefully under its Preparedness Framework.

## Practical Tips

- Start with Sol for most tasks and escalate to Astra only when results fall short.
- Raise reasoning effort in Advanced settings for harder problems.
- Monitor token usage. Fewer output tokens on the new models help stay within plan limits.
- Test on your own workloads. Early independent checks show mixed results on writing style and full end-to-end builds.
- Enable Ultrafast where available for lower latency on supported plans.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/C1zYX5jwqq4"
    title="GPT-6.2 Astra and GPT-6.2 Sol—Models built for the real world"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

GPT-6.2 Astra and Sol are live for Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex, plus the API. Astra delivers frontier capability for demanding work at lower cost per task. Sol gives most teams a strong, efficient default.

Check official OpenAI documentation for the latest model availability, pricing, and system card details before production use.

**Sources**

- OpenAI Developer Community and ChatGPT Learn: GPT-6.2 Astra and Sol announcement (November 17, 2026)
- OpenAI API pricing and model documentation
- Official OpenAI YouTube launch video
