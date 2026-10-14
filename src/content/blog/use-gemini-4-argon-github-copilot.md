---
title: "How to Use Gemini 4 Argon in GitHub Copilot Step by Step"
description: "Learn how to select and use Gemini 4 Argon in GitHub Copilot for complex coding tasks. Available on Pro+ plans with usage-based billing."
pubDate: 2026-10-14T14:00:00
heroImage: "https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer"]
noindex: false
---

Gemini 4 Argon, Google’s newest frontier model, is now generally available in GitHub Copilot. It targets complex coding, agentic workflows, and reasoning tasks. Early tests show it solved more tasks than previous Gemini models on coding benchmarks, with the largest gains in Copilot CLI. It also checks its own work by testing edge cases before finishing.<grok type="render_inline_citation" citation_id="67" />

This guide shows how to access it, select the model in common clients, and use it effectively. It is available to Copilot Pro+, Max, Business, and Enterprise users. Rollout is gradual, so it may not appear immediately for everyone.

![Developer coding at a multi-monitor desk setup](https://images.unsplash.com/photo-oYzjGQ7LCVE?auto=format&fit=crop&w=800&q=80)

## Check Your Plan and Access

Gemini 4 Argon requires a paid plan higher than Copilot Pro. Free and Student plans use auto model selection only and do not list it.

- Individual users: Upgrade to Copilot Pro+ ($39/month) or Max ($100/month).
- Teams: Business and Enterprise plans include it. Administrators manage access through the model policy in Copilot settings. New models enable automatically unless the global default is off or the model is explicitly disabled.<grok type="render_inline_citation" citation_id="67" />

Confirm your plan under your GitHub account settings. If the model does not appear after a day, wait for the gradual rollout or check admin policies.

## Select Gemini 4 Argon in Visual Studio Code

1. Open the Copilot Chat panel by clicking the chat icon in the title bar.
2. At the bottom of the chat view, click the current model dropdown.
3. Choose Gemini 4 Argon from the list.

If Auto is selected, Copilot picks a model based on the task. Switch to a specific model for consistent results on long-running work. Start a new chat session after changing models if needed.<grok type="render_inline_citation" citation_id="151" />

The same dropdown appears in Visual Studio, JetBrains IDEs, Xcode, and Eclipse. Keep your IDE and Copilot extension updated.

## Use It in Copilot CLI

Copilot CLI shows the biggest gains for Argon in early testing.

1. Install or update the CLI: `npm install -g @github/copilot` or follow the official setup.
2. Start a session with `copilot`.
3. Type `/model` to open the picker.
4. Select Gemini 4 Argon.

Your current model displays above the input. You can switch mid-session. The model stays active until you change it or start a new session.<grok type="render_inline_citation" citation_id="80" />

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/dpxODnbIQgg"
    title="Switching models in GitHub Copilot CLI | demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Apply It in Coding Agent and App

In the GitHub Copilot coding agent, select the model when assigning a task or in the agents panel. On github.com and the Copilot app, use the model picker in chat.

Argon works well for multi-step agentic tasks because it holds context and verifies results. Give clear success criteria and milestones up front so it can run longer without constant prompts.

## Understand Pricing and Credits

Gemini 4 Argon bills at provider list pricing under usage-based billing. Current rates are $2 per million input tokens and $10 per million output tokens, with cached input at $0.10. These are promotional rates through at least November 30, 2026; they may increase afterward.<grok type="render_inline_citation" citation_id="68" />

Paid plans include a monthly allowance of AI credits (1 credit = $0.01). Pro+ includes 7,000 credits, Max includes 20,000. Usage beyond the allowance bills at the token rates. Auto mode gives a 10% discount on model costs for paid users.

Monitor usage in your Copilot settings. For complex refactors or long agent runs, Argon can consume more output tokens than lighter models.

![Computer screen showing code and terminal output](https://images.unsplash.com/photo-gflXHUC_f3w?auto=format&fit=crop&w=800&q=80)

## Tips for Better Results

- Use Argon for architecture, debugging, and multi-file changes. Switch to a faster model like Claude Haiku 5.5 for quick edits or classification. See our guide on [setting Claude Haiku 5.5 as your GitHub Copilot model](/blog/claude-haiku-5-5-github-copilot/).
- Align on goals first. Ask it to list edge cases and success criteria before a long run.
- Provide tests or verification steps so it can check its own output.
- For Business and Enterprise, confirm the model policy allows it before team-wide use.
- Keep sessions focused. Long context helps, but clear prompts reduce wasted tokens.

Argon ignores custom sampling parameters such as temperature in some API contexts, so rely on its default behavior and thinking levels where available.

## Conclusion

Gemini 4 Argon brings stronger reasoning and self-checking to GitHub Copilot for complex coding work. Eligible users can select it today in the model picker across VS Code, the CLI, and other clients. Start with a bounded task to compare credit use against your current model, then expand to larger workflows.

For official details, check the [GitHub changelog announcement](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/) and [Copilot models and pricing docs](https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing).

## Sources

- GitHub Changelog: Gemini 4 Argon in GitHub Copilot (October 13, 2026)
- GitHub Docs: Changing the AI model for GitHub Copilot Chat
- GitHub Docs: Supported AI models in GitHub Copilot
- Google AI for Developers: Gemini 4 Argon documentation
