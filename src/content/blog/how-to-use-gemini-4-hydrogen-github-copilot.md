---
title: "How to Use Gemini 4 Hydrogen in GitHub Copilot"
description: "Step-by-step guide to select and use Gemini 4 Hydrogen in GitHub Copilot for faster agentic coding. Plans, billing, and setup tips."
pubDate: 2026-11-15T12:00:00
heroImage: "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

GitHub Copilot added Gemini 4 Hydrogen on November 13, 2026. The model is Google's fast Flash-class successor to Gemini 3.8 Flash. It targets rapid agentic coding, tool use, and multistep workflows with stronger instruction following.

Paid Copilot subscribers on Pro, Pro+, Max, Business, and Enterprise plans can select it once the gradual rollout reaches their account. Free users cannot pick specific models. This guide shows where to find the model, how billing works, and practical ways to put it to work.

## What Gemini 4 Hydrogen offers in Copilot

Google released Hydrogen on November 12, 2026. It shares a single 1,048,576-token context window across input, thinking, and output. The model runs faster than Gemini 3.8 Flash on many tasks while improving results on coding benchmarks such as Terminal-Bench 4.1.

In Copilot it appears in the model picker alongside other providers. GitHub bills it at Google's list price under usage-based AI credits: $1.50 per million input tokens and $7.50 per million output tokens. Implicitly cached input is cheaper. Output includes thinking tokens.

Hydrogen is positioned for everyday execution rather than the deepest long-horizon reasoning. For those jobs, Gemini 4 Carbon remains available in Copilot.

![Programmer coding at a multi-monitor desk](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Who can use it and where

Gemini 4 Hydrogen is available to these plans:

- Copilot Pro
- Copilot Pro+
- Copilot Max
- Copilot Business
- Copilot Enterprise

It is not listed for Copilot Free. Free and Student plans rely on automatic model selection only.

You can select the model in the picker inside:

- Visual Studio Code
- Visual Studio
- JetBrains IDEs
- Xcode
- Eclipse
- Copilot CLI
- GitHub Copilot coding agent
- GitHub Copilot app
- github.com
- GitHub Mobile (iOS and Android)
- Copilot SDK

Rollout is gradual. If the model is missing from your picker, wait a day or two and check again. Business and Enterprise administrators control access through the model policy in Copilot settings. New models are enabled by default unless an admin has turned off the global default or specifically disabled Hydrogen.

## How to select Gemini 4 Hydrogen

The steps are the same across most surfaces. Open the model picker in Copilot Chat, Ask, Edit, or Agent mode and choose Gemini 4 Hydrogen.

### In Visual Studio Code

1. Open the Copilot Chat view or the Agents window.
2. Click the current model name at the bottom of the chat input.
3. Select Gemini 4 Hydrogen from the list.
4. If your organization uses model policies, confirm the policy is enabled first.

### In the Copilot CLI

1. Start an interactive session.
2. Type `/model`.
3. Navigate to Gemini 4 Hydrogen and press Enter.
4. You can also pass `--model` on the command line for one-shot use.

### In the Copilot app or github.com

Open the model selector below the prompt box and pick Hydrogen. On mobile the same picker appears inside the Copilot chat.

If you do not see the model, verify your plan and check with your admin for Business or Enterprise accounts. The December 14, 2026 deprecation of Gemini 3.8 Flash makes Hydrogen the recommended replacement.

![Coder workspace with illuminated keyboard and code on screen](https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=800&q=80)

## Billing and credit usage

Usage draws from your Copilot AI credits at the provider list rate. A typical short coding session stays inexpensive. Longer agent runs that generate many thinking tokens or tool calls consume more credits.

Monitor usage in your Copilot settings or the GitHub billing page. Credits reset monthly. Unused credits do not roll over. When you approach the limit you can raise the budget on Pro, Pro+, or Max plans or wait for the next cycle.

Compare costs with other models in the same picker. Hydrogen is usually cheaper than frontier models such as Gemini 4 Carbon or Claude Opus variants for high-volume everyday work.

## Practical use cases

Hydrogen works well for tasks that need speed and reliable tool use:

- Refactoring a module and updating related tests
- Debugging a failing CI job by reading logs and proposing a fix
- Generating boilerplate for a new API endpoint and then iterating on edge cases
- Summarizing a large pull request and listing remaining review comments
- Multistep file edits that stay within the 1M context window

Example prompt for agent mode:

```
Look at the authentication middleware in this repository.
Add rate limiting that uses the existing Redis client.
Write a unit test that covers the 429 response path.
Do not change the public API of the middleware function.
```

Hydrogen tends to follow the constraints more closely than the previous Flash model. For architecture decisions that span many files and require deep trade-off analysis, switch to Gemini 4 Carbon or another frontier model.

If you also build Android apps, the same model is available through Firebase AI Logic. See our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/).

## Tips for better results

Start with the default thinking level. Raise it only when a task needs more careful multi-step reasoning. Lower thinking levels reduce latency and cost for simple completions.

Keep prompts specific. Include the files you want changed, the constraints that must be respected, and the verification steps the agent should run. Hydrogen improves instruction following, so clear constraints produce cleaner output.

Use Agent mode for multistep work and Ask mode for quick explanations. The model choice applies to the current chat or agent session; inline suggestions may still use a different default model.

Check the model picker periodically during the rollout window. Once Hydrogen appears, compare it side-by-side with Gemini 3.8 Flash on a few real tasks before the December 14 cutoff.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dpxODnbIQgg"
    title="Switching models in GitHub Copilot CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Gemini 4 Hydrogen is now generally available in GitHub Copilot for paid plans. Select it in the model picker across VS Code, JetBrains, the CLI, the Copilot app, and mobile. It is billed at Google's list price and replaces Gemini 3.8 Flash after December 14, 2026.

Start with a small agent task on your own repository to measure speed and instruction following. If the model is not yet visible, check back after the gradual rollout reaches your account. For Android work that uses the same model, the Firebase AI Logic path is already documented on this site.

**Sources**

- GitHub Changelog: Gemini 4 Hydrogen in GitHub Copilot (November 13, 2026)
- GitHub Changelog: Upcoming deprecation of selected GitHub Copilot models (November 13, 2026)
- Blog.google: Introducing Gemini 4 Hydrogen for Agentic Workflows (November 12, 2026)
- GitHub Docs: Models and pricing for GitHub Copilot
- Google DeepMind: Gemini 4 Hydrogen model card
