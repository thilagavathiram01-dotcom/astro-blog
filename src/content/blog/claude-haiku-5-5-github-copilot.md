---
title: "Set Claude Haiku 5.5 as Your GitHub Copilot Model"
description: "Learn how to select Claude Haiku 5.5 in GitHub Copilot, who can use it, how admins enable it, and when it beats larger models."
pubDate: 2026-10-09T10:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "developer"]
noindex: false
---

GitHub Copilot added Claude Haiku 5.5 on October 7, 2026. It is a lightweight model built for fast edits, terminal tasks, and subagent work, and GitHub bills it at Anthropic list prices under usage-based billing.

If you already pay for Copilot Pro, Pro+, Max, Business, or Enterprise, you can pick it in the model menu. Free Copilot plans are not on the availability list. Rollout is gradual, so a missing name in the picker does not always mean your plan is wrong.

This guide covers who can turn it on, how to select it in Visual Studio Code and other clients, and when a larger Claude model is still the better call. For API and Claude Code setup, see the [Claude Haiku 5.5 API setup guide](/blog/claude-haiku-5-5-api-setup-guide/).

## What GitHub and Anthropic say it is for

GitHub describes Haiku 5.5 as a model for high-volume work: subagents, quick edits, and terminal tasks. In early testing, GitHub said it matched Claude Sonnet 5 on many coding tasks while using fewer tokens and fewer steps. That is a vendor testing note, not a promise for every repo.

Anthropic positions Haiku 5.5 as the fastest model in the Claude 5.5 family at standard speed, and the cheapest Haiku it has shipped. On the Claude Platform, prompts up to 100,000 tokens cost $0.10 per million input tokens and $0.50 per million output tokens. Prompts over 100,000 tokens cost $0.50 input and $2.50 output per million. Anthropic says that, on average, it costs about 75 percent less to run than Haiku 4.5, with the exact gap depending on prompt length and token use.

GitHub Docs lists the same rates for Copilot, under a Lightweight category. Cached input is $0.01 per million tokens on the default tier and $0.05 on the long-context tier. Cache writes are $0.125 and $0.625. Anthropic models in Copilot also include a cache write cost, not only a cached-input discount.

![Developer working across multiple monitors at a desk](https://images.unsplash.com/photo-bWVBCDtTRJI?auto=format&fit=crop&w=800&q=80)

## Check your plan before you hunt the menu

Claude Haiku 5.5 is available to Copilot Pro, Pro+, Max, Business, and Enterprise users. GitHub lists these clients for the model picker:

- Visual Studio Code
- Visual Studio
- Copilot CLI
- GitHub Copilot cloud agent
- GitHub Copilot app
- github.com
- GitHub Mobile on iOS and Android
- JetBrains IDEs
- Xcode
- Eclipse

Update the editor or app first. An old build can hide a model that the account already has. If the name is still missing after an update, wait for the gradual rollout, then check again.

Business and Enterprise admins control access in Copilot settings under the model policy. New models are enabled by default unless an admin has turned off the global default or blocked this model. If coworkers see Haiku 5.5 and you do not, ask the admin to confirm the policy before you change your own settings.

## Select it in Visual Studio Code

1. Open a workspace that already uses GitHub Copilot chat.
2. Sign in with the GitHub account that owns the paid Copilot plan.
3. Open the Copilot Chat view.
4. Open the model picker at the top of the chat input.
5. Choose **Claude Haiku 5.5**.
6. Send a small, concrete request, such as adding a docstring or renaming a local helper, and confirm the response header still shows that model.

Keep the picker on Haiku only for the session where you want speed and lower token spend. Switch back to a larger model for a long refactor or a multi-file design pass. The picker is per chat session in most clients, so a new chat can fall back to Auto or your last default.

On github.com, open Copilot Chat and use the same model menu. In the Copilot app and GitHub Mobile, open chat, then the model list, and select Claude Haiku 5.5 if it has reached your account.

In Copilot CLI, start a session, open the model picker, and choose Claude Haiku 5.5 before you ask for a terminal command or a short patch. GitHub calls out terminal tasks as a fit for this model.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/I40nhmZ5j7o"
    title="Visual Studio Code and GitHub Copilot - What's new in 1.140"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Use it for short work, not every agent run

Anthropic says Haiku 5.5 handles summaries, compaction, classification, database-style lookups, and subagent calls next to Opus 5.5 or Sonnet 5.5. It is also the first Haiku with an adjustable effort setting on the Claude Platform. Copilot's changelog does not say the effort control is exposed in the Copilot picker, so treat effort as an API feature unless your client shows it.

Good Copilot prompts for this model stay narrow:

- Explain one function and suggest a name.
- Add tests for a single module you paste or open.
- Draft a commit message from the current diff.
- Run a short terminal task, then stop.
- Summarize a review thread before a human replies.

Poor fits are long agent jobs that must plan across a large codebase. On Terminal-Bench 4.0, Anthropic reports Haiku 5.5 at 39.2 percent, versus 70.6 percent for Sonnet 5.5. Anthropic's own write-up says Sonnet 5.5 and Opus 5.5 remain the better choice for complex agentic coding. Use Haiku as the fast worker, not as the only model on a multi-hour cloud agent task.

GitHub's early testing claim is narrower: Haiku 5.5 matched Sonnet 5 on many coding tasks with fewer tokens and steps. Sonnet 5 and Sonnet 5.5 are different models. Do not treat that sentence as a score against Sonnet 5.5.

## Watch the bill on usage-based plans

Haiku 5.5 is billed at provider list pricing under Copilot usage-based billing. GitHub Docs lists these per-million-token rates:

| Tier | Input | Cached input | Cache write | Output |
| --- | --- | --- | --- | --- |
| Default, up to 100K input tokens | $0.10 | $0.01 | $0.125 | $0.50 |
| Long context, over 100K input tokens | $0.50 | $0.05 | $0.625 | $2.50 |

Compare that with Haiku 4.5 in the same table: $1.00 input, $0.10 cached input, $1.25 cache write, and $5.00 output. A short edit loop on Haiku 5.5 should cost less than the same loop on Haiku 4.5, if the request stays under 100,000 input tokens.

Long context is the trap. Paste a whole repo into chat and you leave the $0.10 input tier. Ask for a focused file, or let Copilot attach only the symbols it needs.

Business and Enterprise teams should check the premium-request or usage report after the first day. A cheap model used on every keystroke can still add up if agents retry the same failing command.

![Close view of a developer typing code on a laptop](https://images.unsplash.com/photo-xaWYIbNIOdw?auto=format&fit=crop&w=800&q=80)

## If the model does not appear

Work through this list before you open a support ticket:

1. Confirm the account is Copilot Pro, Pro+, Max, Business, or Enterprise.
2. Update Visual Studio Code, JetBrains, Xcode, Eclipse, Visual Studio, or the Copilot app.
3. Sign out and sign back in so the model list refreshes.
4. On Business or Enterprise, ask an admin to open the Copilot model policy and enable Claude Haiku 5.5.
5. Wait and retry. GitHub says the rollout is gradual.

If Auto is selected, Copilot may route a short prompt to Haiku without showing the name until you pin it. Pinning is the only way to be sure a given chat used this model.

## Practical split with larger Claude models

A workable default in Copilot is to leave Auto or a Sonnet model on design chats, and switch to Claude Haiku 5.5 for the cleanup pass. Ask Haiku to tighten names, fill missing tests, or compress a long agent transcript. Hand the next architectural change back to Sonnet 5.5 or Opus 5.5.

That split matches Anthropic's guidance: Haiku 5.5 pairs with larger Claude models as a subagent, and it is a strong fit when the task would have been too expensive to run on an older Haiku at volume.

## Bottom line

Claude Haiku 5.5 is generally available in GitHub Copilot for paid individual and organization plans, billed at the Anthropic list rates published in GitHub Docs. Select it in the model picker after you update the client. Use it for quick edits, terminal steps, and high-volume side tasks. Keep Sonnet 5.5 or Opus 5.5 for long agentic coding. If the name is missing, check the plan, the admin model policy, and the gradual rollout before you assume the feature skipped your account.

## Sources

- GitHub Changelog, October 7, 2026: Claude Haiku 5.5 in GitHub Copilot
- GitHub Docs: Models and pricing for GitHub Copilot
- Anthropic, October 7, 2026: Introducing Claude Haiku 5.5
