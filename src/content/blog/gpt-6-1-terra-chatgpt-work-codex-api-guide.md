---
title: "How to Use GPT-6.1 Terra in ChatGPT Work and API"
description: "Step-by-step guide to accessing OpenAI's GPT-6.1 Terra for computer use, visual reasoning, and efficient writing in ChatGPT Work, Codex, and the API."
pubDate: 2026-10-27T09:00:00
heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "productivity"]
noindex: false
---

OpenAI released GPT-6.1 Terra on October 26, 2026. It targets everyday work that mixes screen understanding, computer actions, and clear writing.

The model sits between lighter options like GPT-6 Luna and heavier ones like GPT-6.1 Sol or GPT-6 Astra. Standard API prices are $1 per million input tokens and $5 per million output tokens, half the rate of the prior Terra version.

![Laptop displaying code on a clean desk setup](https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80)

## What GPT-6.1 Terra Handles Best

Terra improves visual reasoning and computer use. It can read screenshots, technical drawings, or product photos and then act inside applications.

OpenAI notes stronger performance on tasks such as turning architectural drawings into 3D models or filling forms from visual inputs. It also produces clearer natural writing for proposals and drafts.

Factual error rates dropped on internal tests. At low reasoning effort the error rate fell from 53.6 percent on the previous Terra to 16.7 percent. At maximum effort it reached 4.3 percent.

For complex coding that needs deeper analysis, OpenAI still recommends GPT-6.1 Sol or GPT-6 Astra. Terra is the practical choice for high-volume professional work.

## Access Requirements

You need a Plus, Pro, Enterprise, or Edu plan to use Terra inside ChatGPT Work and Codex. Free accounts do not include it.

Developers access the model through the OpenAI API with the model ID `gpt-6.1-terra`. Tool calling requires the Responses API.

Cached input tokens cost $0.05 per million. The context window reaches 1,050,000 tokens, with a maximum of 128,000 output tokens. Knowledge cutoff is June 1, 2026.

![Developer working across multiple monitors with code visible](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Use GPT-6.1 Terra in ChatGPT Work

Open ChatGPT and switch from the standard chat view to Work mode. This is the agent surface that can act across applications.

Select the model picker near the input area. Choose GPT-6.1 Terra under the available advanced options. Start with medium reasoning effort for most tasks.

Give a clear goal. Attach an image if the task involves a screenshot or drawing. Describe the desired outcome and any constraints.

Terra can continue working on longer computer-use flows. Review each action before approving sensitive steps such as form submissions or account changes.

For related model comparisons inside Work, see our earlier guide on [GPT-6 Sol and Luna setup](/blog/chatgpt-gpt-6-sol-luna-work-setup/).

## Use GPT-6.1 Terra in Codex

Install or update the Codex CLI if you have not already. Open a terminal in your project directory.

Launch Codex with the Terra model:

```
codex --model gpt-6.1-terra
```

Sign in with your ChatGPT account on first use. Once running, switch models with the `/model` command if needed.

Pass images for visual debugging with the appropriate flag when available. Codex uses the same plan allowances, so Terra lets you complete more tasks before hitting limits.

Test a small change first. Ask it to interpret a screenshot of an error and propose a fix before applying code edits.

## Call GPT-6.1 Terra via the API

Create an API key in the OpenAI platform and enable billing. Use the Responses API for tool calling and computer-use features.

A minimal Python example:

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-6.1-terra",
    input="Review this invoice screenshot and extract the total and due date.",
    reasoning={"effort": "medium"}
)
print(response.output_text)
```

Adjust the effort level: none, low, medium (default), high, xhigh, or max. Higher levels improve quality on hard visual or multi-step tasks but increase cost and latency.

For high-volume automation such as invoice processing, start with medium and measure results. Cache repeated inputs where possible to lower costs.

## Practical Tips for Better Results

State the success criteria upfront. Tell Terra what a finished task looks like and which tools or apps it may use.

Provide verification steps. Ask it to confirm a value against the source image or log before moving to the next action.

Keep prompts focused. Terra handles screen reading and form filling well, but very open-ended research still benefits from Sol or Astra.

Monitor usage. Your plan allowance stretches further with Terra than with the larger models, yet long computer-use sessions still consume tokens.

Review outputs for any residual factual claims, especially on numerical data pulled from images.

## Video Walkthrough

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tTuk4pGnT0A"
    title="GPT-6.1 Terra is now in orbit"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## When to Choose Terra Over Other Models

Choose Terra when the work involves reading screens, acting inside desktop or web apps, or drafting clear professional text at volume.

Switch to GPT-6 Luna for the cheapest high-volume narrow tasks. Move to GPT-6.1 Sol or GPT-6 Astra when the problem needs deeper multi-step reasoning or complex code architecture.

OpenAI reports that Terra finishes many agent tasks more than three times faster than Astra or Sol on average, at far lower cost per task.

## Conclusion

GPT-6.1 Terra gives Plus, Pro, Enterprise, and Edu users a faster, cheaper option for computer-use and writing work inside ChatGPT Work and Codex. Developers can call it directly with `gpt-6.1-terra` at half the previous Terra price.

Start with a medium reasoning effort on a real screenshot or form task. Measure the result, then adjust effort or switch models if the job needs more depth.

## Sources

- OpenAI announcement: https://openai.com/index/introducing-gpt-6-1-terra/
- Model documentation: https://developers.openai.com/api/docs/models/gpt-6.1-terra
- System card addendum: https://deploymentsafety.openai.com/gpt-6-1-terra
