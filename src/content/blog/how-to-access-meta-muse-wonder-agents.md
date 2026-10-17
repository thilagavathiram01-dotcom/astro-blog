---
title: "How to Access Meta Muse Wonder for AI Agents"
description: "Learn how to access Meta Muse Wonder via API or Muse Code, see pricing, and set up agent tasks with Active Memory and Active Focus."
pubDate: 2026-10-17T14:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "ai", "productivity"]
noindex: false
---

Meta released Muse Wonder and Muse Wonder Full on October 12, 2026. These frontier models target personal and professional agent work such as insurance claims, lease reviews, finance tasks, and building apps.<grok type="render_inline_citation" citation_id="80" />

Muse Wonder is available now through the Meta Model API and Muse Code. Muse Wonder Full is limited to higher Muse Code subscription plans. The models include Active Memory for carrying relevant details across conversations and Active Focus for persisting through hard tasks, recovering from errors, and checking before important actions.<grok type="render_inline_citation" citation_id="80" />

This guide covers verified access routes, pricing, basic setup, and practical tips for agent use. Facts come from Meta’s official announcement and developer documentation.

## What Muse Wonder Offers

Muse Wonder accepts text, images, video, audio, and PDFs as input and returns text. It supports a 1,048,576-token context window and reasoning effort levels from minimal to max. Tool calling, structured output, and search grounding are also available.<grok type="render_inline_citation" citation_id="82" />

The higher-capability Muse Wonder Full is not available on the public API. Raising the reasoning effort to max on the standard model does not switch you to Full.

![Developer workspace with laptop and code](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

Meta positions the models for long-running agent tasks rather than single-turn chat. Examples in the announcement include navigating insurance claims, reviewing leases, and building working apps.

## Access Options and Pricing

Two main paths exist today.

**Meta Model API (pay-as-you-go)**  
Use model ID `muse-wonder-1.0`. Pricing is $4 per million input tokens, $0.20 per million cached input tokens, and $20 per million output tokens. Contributor mode (which allows Meta to use content for training) is not available for Muse Wonder on the API. Standard mode does not train on your prompts or responses.<grok type="render_inline_citation" citation_id="81" />

**Muse Code**  
Muse Wonder is available on every Muse Code plan (including pay-as-you-go). Muse Wonder Full requires the Power Usage plan ($50 per month) or Maximum Usage plan ($200 per month). These plans include higher usage allowances compared with the Everyday tier. Contributor mode is available and on by default in Muse Code; you can turn it off in settings.<grok type="render_inline_citation" citation_id="82" />

Muse Wonder will also power experiences in the Muse personal agent app, rolling out first to subscribers. No exact date is given.<grok type="render_inline_citation" citation_id="80" />

Compare this with other frontier options in our [Gemini 4 Argon developer guide](/blog/gemini-4-argon-developer-guide/).

## Step-by-Step: API Setup

1. Create or sign in to a Meta developer account at the Meta Model API portal.  
2. Generate an API key and store it securely as an environment variable (for example, `MODEL_API_KEY`).  
3. Point an OpenAI-compatible client at Meta’s base URL.  

Here is a minimal Python example using the OpenAI SDK:

```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.meta.ai/v1",
    api_key=os.environ["MODEL_API_KEY"],
)

response = client.responses.create(
    model="muse-wonder-1.0",
    input="Explain the architecture of this codebase and list the three highest-impact refactors.",
)
print(response.output_text)
```

4. Test with a short agent-style prompt that requires multi-step reasoning. Monitor token usage in the dashboard.  
5. For longer runs, enable caching where possible to reduce input costs.

The model is labeled preview on the API, so expect possible changes to rate limits or behavior.

![Abstract technology and AI concept](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80)

## Using Muse Code for Agents

1. Install or open Muse Code (macOS, Linux, or Windows).  
2. Sign in with your Meta account.  
3. Choose Muse Wonder or, if you have Power or Maximum Usage, select Muse Wonder Full.  
4. Provide a clear goal, relevant files or context, and any constraints (for example, “do not change the public API”).  
5. Let the agent run. Active Focus is designed to keep it working toward the goal and recover from errors. Check in before any high-impact actions such as submitting forms or deploying code.

Muse Code also supports pay-as-you-go billing if you prefer not to use a flat subscription.

## Practical Tips for Agent Tasks

- State measurable goals and success criteria up front. The models perform best when the target is clear.  
- Supply verification signals (test suites, logs, or screenshots) so the agent can check its own work.  
- Use Active Memory by referencing prior conversation details or uploaded documents instead of repeating everything.  
- Start with lower reasoning effort for routine extraction or routing, then raise it for complex multi-file engineering or legal/finance analysis.  
- Review outputs before acting on them, especially for personal data, legal, or financial tasks. Meta trains the models to avoid sharing private information without permission and to refuse clearly harmful requests.<grok type="render_inline_citation" citation_id="80" />

Web-search grounding is available and carries an additional charge of $2.50 per 1,000 queries.

## Conclusion

Muse Wonder gives developers a new frontier option focused on long-running personal and professional agents. Start with the Model API if you need pay-as-you-go access, or use Muse Code if you want the higher-capability Full variant. Pair clear goals with verification steps and human review for the best results.

For official details, see Meta’s announcement and the developer docs for models and pricing.

## Sources

- Meta Newsroom: Introducing Muse Wonder and Muse Wonder Full (October 12, 2026)  
- Meta Model API documentation: Models and Pricing and rate limits pages  
- Meta research blog on Muse Wonder

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/4ZwVP0-ylZU"
    title="Introducing Muse Wonder & Muse Wonder Full: frontier models for agentic tasks"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
