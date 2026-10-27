---
title: "How to Use GPT-6.1 Terra for Everyday Computer Tasks"
description: "Step-by-step guide to access GPT-6.1 Terra in ChatGPT Work, Codex, and the API. Covers pricing, computer use strengths, and practical tips."
pubDate: 2026-10-27T09:30:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "chatgpt", "tutorials", "ai"]
noindex: false
---

OpenAI released GPT-6.1 Terra on October 26, 2026. It sits in the middle of the GPT-6 family and targets the daily computer work that fills most professional days. The model reads screens, takes actions across apps, writes more naturally, and costs less than earlier options.

If you already use ChatGPT Work or Codex, you can start with it today. Developers can call it through the API as gpt-6.1-terra. This guide covers access steps, pricing, strengths, and practical ways to apply it.

![Person coding on a laptop overlooking city lights at night](https://images.unsplash.com/photo-1764452008254-eed469a4fad3?auto=format&fit=crop&w=800&q=80)

## What GPT-6.1 Terra improves

Terra advances the cost-intelligence balance. Standard API prices are 50 percent lower than those of GPT-5.6 Terra and GPT-6.1 Sol. In ChatGPT Work and Codex, the same usage allowance covers more tasks than with the previous Terra model and substantially more than with Sol or Astra.

On Agents’ Last Exam, which tests professional computer-use tasks such as turning architectural drawings into 3D models or logging animated film shots, GPT-6.1 Terra scores 15 percentage points higher than GPT-5.6 Terra at roughly one-third the cost. It matches GPT-6 Astra performance at about one-tenth the price per token and finishes tasks more than three times faster than both Astra and Sol.

Visual reasoning also improves. On MMMU-Pro it outperforms the prior Terra at every reasoning setting and approaches Astra and Sol scores at lower cost. On OSWorld 2.1, which measures desktop app tasks, it exceeds the previous Terra’s best score at a fraction of the cost per task.

Factuality gains stand out. On OpenAI’s internal error-inducing prompts, the error rate at low reasoning effort dropped from 53.6 percent with GPT-5.6 Terra to 16.7 percent with GPT-6.1 Terra. At maximum effort the rate fell to 4.3 percent, nearly matching Astra and Sol.

Coding improves as well. On Terminal-Bench 4.0 at maximum reasoning effort, it solves 50.3 percent of tasks, more than double the prior Terra’s published 21.5 percent. For the most complex coding work, Sol and Astra remain stronger choices.

## How to access GPT-6.1 Terra

### In ChatGPT Work

1. Sign in to ChatGPT with a Plus, Pro, Enterprise, or Edu plan.
2. Open a new chat or project in ChatGPT Work.
3. Select the model picker and choose GPT-6.1 Terra.
4. Start with a computer-use request such as “review this invoice screenshot and enter the details into the spreadsheet” or “summarize the form fields on this webpage and fill them.”

The model rolls out to all eligible users. Usage counts against your existing plan limits, but the higher efficiency means the allowance stretches further.

### In Codex

1. Open Codex in the browser or desktop app.
2. Choose GPT-6.1 Terra from the model menu.
3. Describe the coding or computer task. Examples include fixing a layout that shifts on load or building a small automation that reads files and updates records.
4. Review the proposed actions before you approve them.

Codex pairs well with Terra for terminal-style work and multistep agent flows.

### Through the API

Developers call the model as `gpt-6.1-terra`. Standard pricing is $1 per million input tokens, $0.05 per million cached input tokens, and $5 per million output tokens. The context window reaches 1 million input tokens and accepts both text and images.

A basic call follows the usual Responses or Chat Completions pattern. Set the model name, send your prompt plus any images, and handle the tool-use or computer-use steps in your agent loop. Check the official system card addendum for safety details.

If you run workloads on Google Cloud, see our guide to [accessing OpenAI models in Model Garden](/blog/access-openai-models-google-cloud-model-garden/).

![Laptop displaying code on a desk](https://images.unsplash.com/photo-1756946565798-382eb6bfeda2?auto=format&fit=crop&w=800&q=80)

## Practical use cases

Terra fits high-volume office tasks. Feed it screenshots of incoming invoices and ask it to extract line items and push them into accounting software. Hand it a technical drawing and request a structured description or 3D-model notes. Let it review a form, identify missing fields, and draft the completed version for your review.

Writing benefits from clearer, more natural output. Use it for proposals, status updates, or video-edit notes that need both visual understanding and polished prose. Because it finishes tasks faster, you can run more of them inside the same budget.

For agentic workflows, start with medium reasoning effort. Raise the effort only when the task requires deeper planning. The model resists prompt injection better than the prior Terra and stays more reliably within scope.

## Tips for better results

Provide clear context and the expected output format. When the task involves a screen, include the image or describe the visible elements precisely. Approve only the actions you intend; the model can still misjudge urgency on edge cases.

Monitor token use on the API. Cached inputs drop the effective price, so structure repeated prompts to benefit from caching. For regulated work, review the Preparedness Framework classification: Terra meets the Critical threshold in cybersecurity and uses the same safeguards stack as Sol and Astra.

Compare it side-by-side with Sol or Astra on a representative task. Many teams find Terra covers the majority of daily volume while reserving the higher-tier models for the hardest problems.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/tTuk4pGnT0A"
    title="GPT-6.1 Terra is now in orbit"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

GPT-6.1 Terra gives teams a practical middle option for computer use and everyday professional work. Access it in ChatGPT Work or Codex today, or call it via the API. Start with one invoice-processing or form-filling workflow, measure the time and cost, and expand from there.

The combination of stronger visual reasoning, lower error rates, and reduced prices makes it suitable for high-volume automation that previously stayed manual.

## Sources

- OpenAI, Introducing GPT-6.1 Terra, October 26, 2026: https://openai.com/index/introducing-gpt-6-1-terra/
- OpenAI Deployment Safety Hub, Addendum to GPT-6 Astra System Card: GPT-6.1 Terra: https://deploymentsafety.openai.com/gpt-6-1-terra
- Official OpenAI YouTube video: GPT-6.1 Terra is now in orbit
