---
title: "How to Use GPT-6.2 Astra and Sol in ChatGPT and API"
description: "Access GPT-6.2 Astra and Sol in ChatGPT Work, Codex, and the OpenAI API. Pricing, availability, and practical tips for developers."
pubDate: 2026-11-18T10:00:00
heroImage: "https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "how-to"]
noindex: false
---

OpenAI released GPT-6.2 Astra and GPT-6.2 Sol on November 17, 2026. Astra targets complex professional, scientific, and agentic work. Sol handles everyday coding, writing, and agent loops at lower cost. Both are available now to eligible ChatGPT users and through the OpenAI API.

This guide shows how to access the models in ChatGPT Work and Codex, call them from the API, and choose between them based on your workload.

## What GPT-6.2 Astra and Sol Offer

GPT-6.2 Astra is OpenAI’s new frontier model. It improves on GPT-6 Astra across professional workflows and scientific research while cutting cost per task. OpenAI reports a 5.2-point gain on Agents’ Last Exam at less than half the cost per task of its predecessor. It also posts stronger results on coding and cybersecurity evaluations.

GPT-6.2 Sol is the efficient counterpart. It nearly matches Astra on merge-ready coding changes (FrontierCode 2.0) at roughly one-fifth the cost. Many OpenAI employees use Sol as their default for mixed technical and non-technical work.

Both models support Ultrafast mode. Pro 500 subscribers can use it with either model. Pro 200 subscribers gain Ultrafast access for the first time, starting with Sol.

![Person coding on laptop at night with city lights in background](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## Access the Models in ChatGPT Work and Codex

GPT-6.2 Astra and Sol are available to Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex. They are not added to the regular Chat interface in this rollout.

1. Open the ChatGPT desktop app or go to chatgpt.com.
2. Switch to a Work or Codex project (or create one).
3. Select the model picker and choose GPT-6.2 Astra or GPT-6.2 Sol.
4. For Ultrafast, confirm your plan supports it (Pro 500 for both; Pro 200 for Sol).

In Codex, the models appear in the same selector. Use them for repository-wide changes, agentic coding sessions, or multi-step professional tasks. Start with Sol for most coding work and escalate to Astra when you need deeper reasoning or longer-horizon agent runs.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/C1zYX5jwqq4"
    title="GPT-6.2 Astra and GPT-6.2 Sol—Models built for the real world"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Call the Models from the OpenAI API

Developers can use the models immediately via the OpenAI API. The model IDs are `gpt-6.2-astra` and `gpt-6.2-sol`. Ultrafast is available on the API as well.

Example Python call with the official library:

```python
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-6.2-sol",
    messages=[
        {"role": "system", "content": "You are a helpful coding assistant."},
        {"role": "user", "content": "Write a Python function that retries an API call with exponential backoff."}
    ],
    max_tokens=1024
)
print(response.choices[0].message.content)
```

Switch the model string to `gpt-6.2-astra` for harder tasks. Keep stable prompt prefixes so the API can reuse cached input tokens and reduce cost.

![Programmer working at a multi-monitor desk setup](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Pricing

API pricing (per million tokens):

- GPT-6.2 Astra: $8.00 input, $0.40 cached input, $40.00 output
- GPT-6.2 Sol: $2.00 input, $0.10 cached input, $10.00 output

Astra’s input and output rates are 20 percent lower than GPT-6 Astra. Cached input is 60 percent cheaper. Sol keeps the same rates as GPT-6.1 Sol. OpenAI notes that both models often complete tasks with fewer output tokens, which further lowers effective cost.

For comparison, Google’s Gemini 4 Hydrogen is priced at $1.50 input and $7.50 output. See our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) if you build client-side apps.

## Tips for Better Results

- Start with Sol for coding, drafting, and routine agent loops. Move to Astra for scientific analysis, complex legal or financial work, or long multi-step agents.
- Enable Ultrafast when latency matters and your plan allows it.
- Reuse conversation prefixes to maximize cache hits.
- Review safety ratings on cybersecurity-related prompts. Both models ship with tighter safeguards for higher-risk assistance.
- Test on your own workloads. Independent benchmarks show strong gains, but real tasks can differ.

## Conclusion

GPT-6.2 Astra and Sol give ChatGPT Work, Codex, and API users stronger performance at lower cost per task. Astra leads on frontier professional and scientific work. Sol covers everyday needs efficiently. Check your plan eligibility, select the model in the Work or Codex interface, or call the new IDs from the API today.

**Sources**

- OpenAI Developer Community: GPT-6.2 Astra and Sol are now available (November 17, 2026)
- OpenAI API pricing and model documentation
- Related: [Add Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/)
